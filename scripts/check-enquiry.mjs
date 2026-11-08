// Offline contract checks. No real email or network request is sent.
import ts from "typescript";
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";
import { randomUUID } from "node:crypto";
const dir = new URL(
  "../node_modules/.cache/pocket-enquiry-check/",
  import.meta.url,
);
await mkdir(dir, { recursive: true });
try {
  for (const name of ["enquiry-schema", "enquiry-server"]) {
    let source = await readFile(
      new URL(`../src/lib/${name}.ts`, import.meta.url),
      "utf8",
    );
    source = source.replace('"./enquiry-schema"', '"./enquiry-schema.mjs"');
    await writeFile(
      new URL(`${name}.mjs`, dir),
      ts.transpileModule(source, {
        compilerOptions: {
          target: ts.ScriptTarget.ES2022,
          module: ts.ModuleKind.ES2022,
        },
      }).outputText,
    );
  }
  const { handleEnquiry, createEnquiryToken } = await import(
    pathToFileURL(new URL("enquiry-server.mjs", dir).pathname).href
  );
  const now = Date.now(),
    secret = "offline-test-secret-not-a-production-value";
  const config = {
    enabled: true,
    secret,
    apiKey: "fake-test-key",
    from: "Preview <test@example.com>",
    to: "team@pocketcreatives.co.uk",
    origin: "http://localhost:3005",
  };
  const valid = {
    name: "Test Person",
    email: "test@example.com",
    service: "Photography",
    description: "An offline test of a product photography enquiry.",
    websiteConfirm: "",
    token: createEnquiryToken(secret, now - 2000),
    requestId: randomUUID(),
  };
  const request = (data = valid, headers = {}) =>
    new Request("http://localhost:3005/api/enquiry", {
      method: "POST",
      headers: {
        origin: config.origin,
        "Content-Type": "application/json",
        ...headers,
      },
      body: typeof data === "string" ? data : JSON.stringify(data),
    });
  const checks = [];
  let calls = [];
  const deps = {
    now: () => now,
    fetch: async (url, options) => {
      calls.push({ url, options });
      return Response.json({ id: "offline-id" });
    },
  };
  async function check(name, fn) {
    await fn();
    checks.push({ name, pass: true });
  }
  await check("Required fields rejected before delivery", async () => {
    const r = await handleEnquiry(request({}), config, deps);
    assert.equal(r.status, 400);
    assert.equal(calls.length, 0);
    assert.ok((await r.json()).errors.email);
  });
  await check("Cross-origin requests rejected", async () =>
    assert.equal(
      (
        await handleEnquiry(
          request(valid, { origin: "https://other.example" }),
          config,
          deps,
        )
      ).status,
      403,
    ),
  );
  await check("Missing origin rejected", async () => {
    const r = request();
    r.headers.delete("origin");
    assert.equal((await handleEnquiry(r, config, deps)).status, 403);
  });
  await check("Unsupported media type rejected", async () =>
    assert.equal(
      (
        await handleEnquiry(
          request(valid, { "Content-Type": "text/plain" }),
          config,
          deps,
        )
      ).status,
      415,
    ),
  );
  await check("Malformed JSON rejected", async () =>
    assert.equal((await handleEnquiry(request("{"), config, deps)).status, 400),
  );
  await check("Oversize streamed body rejected", async () =>
    assert.equal(
      (await handleEnquiry(request("x".repeat(16001)), config, deps)).status,
      413,
    ),
  );
  await check("Honeypot rejected", async () =>
    assert.equal(
      (
        await handleEnquiry(
          request({ ...valid, websiteConfirm: "spam" }),
          config,
          deps,
        )
      ).status,
      400,
    ),
  );
  await check("Unsafe website URL rejected", async () =>
    assert.equal(
      (
        await handleEnquiry(
          request({ ...valid, website: "javascript:alert(1)" }),
          config,
          deps,
        )
      ).status,
      400,
    ),
  );
  await check("Website length bounded on the server", async () => {
    const r = await handleEnquiry(
      request({ ...valid, website: `https://example.com/${"x".repeat(1000)}` }),
      config,
      deps,
    );
    assert.equal(r.status, 400);
    assert.ok((await r.json()).errors.website);
    assert.equal(calls.length, 0);
  });
  await check("Missing configured origin disables delivery", async () => {
    const r = await handleEnquiry(
      request(),
      { ...config, origin: undefined },
      deps,
    );
    assert.equal(r.status, 503);
    assert.equal(calls.length, 0);
  });
  for (const [label, token] of [
    ["tampered", "0.a.b"],
    ["too fast", createEnquiryToken(secret, now)],
    ["expired", createEnquiryToken(secret, now - 7200001)],
  ])
    await check(`${label} token rejected`, async () =>
      assert.equal(
        (await handleEnquiry(request({ ...valid, token }), config, deps))
          .status,
        400,
      ),
    );
  await check("Unconfigured delivery never claims success", async () => {
    const r = await handleEnquiry(request(), { enabled: false }, deps);
    assert.equal(r.status, 503);
    assert.equal((await r.json()).ok, false);
    assert.equal(calls.length, 0);
  });
  await check(
    "Provider acceptance required and destination server-controlled",
    async () => {
      const r = await handleEnquiry(
        request({ ...valid, to: "attacker@example.com" }),
        config,
        deps,
      );
      assert.equal(r.status, 200);
      assert.equal((await r.json()).ok, true);
      const sent = JSON.parse(calls[0].options.body);
      assert.deepEqual(sent.to, [config.to]);
      assert.equal(sent.reply_to, valid.email);
      assert.equal(calls[0].url, "https://api.resend.com/emails");
      assert.equal(sent.html, undefined);
    },
  );
  await check("Retry uses same idempotency key; edits change it", async () => {
    await handleEnquiry(request(), config, deps);
    assert.equal(
      calls[0].options.headers["Idempotency-Key"],
      calls[1].options.headers["Idempotency-Key"],
    );
    await handleEnquiry(
      request({
        ...valid,
        description: "An updated offline test project description.",
      }),
      config,
      deps,
    );
    assert.notEqual(
      calls[1].options.headers["Idempotency-Key"],
      calls[2].options.headers["Idempotency-Key"],
    );
  });
  for (const [label, fn] of [
    [
      "provider rejection",
      async () => Response.json({ error: "failure" }, { status: 500 }),
    ],
    ["missing provider receipt", async () => Response.json({})],
    [
      "network timeout",
      async () => {
        throw new Error("offline timeout");
      },
    ],
  ])
    await check(`${label} returns failure`, async () => {
      const r = await handleEnquiry(
        request({ ...valid, email: `${randomUUID()}@example.com` }),
        config,
        { ...deps, fetch: fn },
      );
      assert.equal(r.status, 502);
      assert.equal((await r.json()).ok, false);
    });
  await check("Per-email burst limit enforced", async () => {
    let r;
    for (let i = 0; i < 6; i++)
      r = await handleEnquiry(
        request({ ...valid, email: "limit@example.com" }),
        config,
        deps,
      );
    assert.equal(r.status, 429);
  });
  await check("No secrets in response", async () => {
    const r = await handleEnquiry(
      request({ ...valid, email: "secret@example.com" }),
      config,
      deps,
    );
    assert.ok(!(await r.text()).includes(config.apiKey));
  });
  await writeFile(
    process.argv[2] || "output/playwright/phase-6/enquiry-checks.json",
    JSON.stringify(
      { pass: true, network: "offline mock only", checks },
      null,
      2,
    ),
  );
  console.log(
    `${checks.length}/${checks.length} enquiry checks passed; no emails sent.`,
  );
} finally {
  await rm(dir, { recursive: true, force: true });
}
