import { z } from "zod";
export const enquiryServices = [
  "Video Production",
  "Photography",
  "Both",
  "Creative Training",
  "Other",
] as const;
const optionalText = (max: number) =>
  z.string().trim().max(max).optional().default("");
export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(120, "Please keep your name under 120 characters."),
  email: z.email("Please enter a valid email address.").max(254),
  service: z.enum(enquiryServices, { error: "Please choose a service." }),
  description: z
    .string()
    .trim()
    .min(20, "Please tell us a little more (at least 20 characters).")
    .max(6000, "Please keep the description under 6,000 characters."),
  company: optionalText(160),
  phone: optionalText(60),
  budget: optionalText(120),
  timeframe: optionalText(160),
  website: z
    .union([
      z.literal(""),
      z
        .url({
          protocol: /^https?$/,
          error: "Use a full website address beginning with https://.",
        })
        .max(1000, "Please keep the website address under 1,000 characters."),
    ])
    .optional()
    .default(""),
  websiteConfirm: z.string().max(0, "Unable to submit this enquiry."),
  token: z.string().min(1).max(400),
  requestId: z.uuid(),
});
export type Enquiry = z.infer<typeof enquirySchema>;
export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;
export function enquiryErrors(error: z.ZodError): EnquiryErrors {
  return Object.fromEntries(
    error.issues.map((issue) => [String(issue.path[0]), issue.message]),
  );
}
