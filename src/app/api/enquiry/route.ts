import {
  createEnquiryToken,
  handleEnquiry,
  enquiryIsAvailable,
} from "@/lib/enquiry-server";
import { getEnquiryConfig } from "@/lib/enquiry-config";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export function GET() {
  const c = getEnquiryConfig();
  if (!enquiryIsAvailable(c))
    return Response.json(
      { available: false },
      { headers: { "Cache-Control": "no-store" } },
    );
  return Response.json(
    { available: true, token: createEnquiryToken(c.secret) },
    { headers: { "Cache-Control": "no-store" } },
  );
}
export async function POST(request: Request) {
  return handleEnquiry(request, getEnquiryConfig());
}
