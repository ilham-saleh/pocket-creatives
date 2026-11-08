import {
  createHmac,
  timingSafeEqual,
  randomBytes,
  createHash,
} from "node:crypto";
import { enquirySchema, enquiryErrors } from "./enquiry-schema";

export type EnquiryConfig = {
  enabled: boolean;
  secret?: string;
  apiKey?: string;
  from?: string;
  to?: string;
  origin?: string;
};
export type DeliveryDependencies = { fetch: typeof fetch; now: () => number };
export function enquiryIsAvailable(
  config: EnquiryConfig,
): config is Required<EnquiryConfig> {
  return !!(
    config.enabled &&
    config.secret &&
    config.apiKey &&
    config.from &&
    config.to &&
    config.origin
  );
}
const failure = (message: string, status: number, extra: object = {}) =>
  Response.json(
    { ok: false, message, ...extra },
    { status, headers: { "Cache-Control": "no-store" } },
  );
const digest = (text: string, secret: string) =>
  createHmac("sha256", secret).update(text).digest("hex");
export function createEnquiryToken(secret: string, now = Date.now()) {
  const body = `${now}.${randomBytes(16).toString("hex")}`;
  return `${body}.${digest(body, secret)}`;
}
function validToken(token: string, secret: string, now: number) {
  const [time, nonce, signature, ...rest] = token.split(".");
  if (
    rest.length ||
    !/^\d+$/.test(time ?? "") ||
    !/^[a-f0-9]{32}$/.test(nonce ?? "") ||
    !/^[a-f0-9]{64}$/.test(signature ?? "")
  )
    return false;
  const age = now - Number(time);
  return (
    age >= 1500 &&
    age < 7200000 &&
    timingSafeEqual(
      Buffer.from(signature, "hex"),
      Buffer.from(digest(`${time}.${nonce}`, secret), "hex"),
    )
  );
}
// Bounded process-local backstop. Add a shared/edge limit before multi-instance deployment.
const limits = new Map<string, { count: number; until: number }>();
function limited(key: string, now: number) {
  for (const [k, v] of limits) if (v.until <= now) limits.delete(k);
  const current = limits.get(key);
  if (current) {
    current.count++;
    return current.count > 5;
  }
  if (limits.size >= 10000) return true;
  limits.set(key, { count: 1, until: now + 15 * 60 * 1000 });
  return false;
}
export async function handleEnquiry(
  request: Request,
  config: EnquiryConfig,
  deps: DeliveryDependencies = { fetch, now: Date.now },
) {
  const origin = request.headers.get("origin");
  const url = new URL(request.url);
  const expectedOrigin =
    config.origin ||
    (request.headers.get("host")
      ? `${url.protocol}//${request.headers.get("host")}`
      : url.origin);
  if (origin !== expectedOrigin)
    return failure("Please submit using the contact page.", 403);
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return failure("Unsupported request format.", 415);
  const reader = request.body?.getReader();
  if (!reader) return failure("Please complete the form.", 400);
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 16000) {
      await reader.cancel();
      return failure(
        "Your enquiry is too long. Please shorten it and try again.",
        413,
      );
    }
    chunks.push(value);
  }
  let input: unknown;
  try {
    input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return failure("Please complete the form and try again.", 400);
  }
  const parsed = enquirySchema.safeParse(input);
  if (!parsed.success)
    return failure("Please check the highlighted fields.", 400, {
      errors: enquiryErrors(parsed.error),
    });
  const data = parsed.data;
  if (!enquiryIsAvailable(config))
    return failure(
      "Online enquiries are temporarily unavailable. Please email team@pocketcreatives.co.uk or call 020 3633 8494.",
      503,
    );
  if (!validToken(data.token, config.secret, deps.now()))
    return failure(
      "Please refresh the enquiry form and try again. Your details have been kept.",
      400,
      { refreshToken: true },
    );
  const key = createHash("sha256")
    .update(data.email.toLowerCase())
    .digest("hex");
  if (limited(key, deps.now()))
    return failure(
      "Please wait a little before trying again, or contact us by email.",
      429,
    );
  // The idempotency key depends on the complete message: edited retries get a new key.
  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Service: ${data.service}`,
    `Company: ${data.company}`,
    `Phone: ${data.phone}`,
    `Budget: ${data.budget}`,
    `Timeframe: ${data.timeframe}`,
    `Website: ${data.website}`,
    "",
    data.description,
  ].join("\n");
  const idempotency = createHash("sha256")
    .update(data.requestId + text)
    .digest("hex");
  try {
    const response = await deps.fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `enquiry/${idempotency}`,
      },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        reply_to: data.email,
        subject: `Pocket Creatives enquiry — ${data.service}`,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    });
    const body = await response.json().catch(() => null);
    if (
      !response.ok ||
      !body ||
      typeof body.id !== "string" ||
      body.id.length === 0
    )
      return failure(
        "We couldn’t confirm sending your enquiry. Your details are still here. Please try again or email us directly.",
        502,
      );
    return Response.json(
      {
        ok: true,
        message:
          "Thank you. Your enquiry has been sent to Pocket Creatives. We’ll be in touch using the details you provided.",
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return failure(
      "We couldn’t confirm sending your enquiry. Your details are still here. Please try again or email us directly.",
      502,
    );
  }
}
