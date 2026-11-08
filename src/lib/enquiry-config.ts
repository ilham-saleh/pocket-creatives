import type { EnquiryConfig } from "./enquiry-server";

export function getEnquiryConfig(): EnquiryConfig {
  return {
    enabled: process.env.CONTACT_ENABLED === "true",
    secret: process.env.CONTACT_FORM_SECRET,
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.CONTACT_FROM,
    to: process.env.CONTACT_TO,
    origin: process.env.CONTACT_ALLOWED_ORIGIN,
  };
}
