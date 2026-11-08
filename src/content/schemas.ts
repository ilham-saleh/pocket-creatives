import { z } from "zod";

export const provenanceSchema = z.object({
  sourceUrl: z.url(),
  verifiedOn: z.iso.date(),
  approval: z.enum(["pending", "approved"]),
});

export const mediaSchema = z.object({
  id: z.string().min(1),
  kind: z.enum(["image", "video"]),
  source: z.url(),
  localPath: z.string().startsWith("/").optional(),
  alt: z.string(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
  rights: z.enum(["pending", "cleared"]),
  provenance: provenanceSchema,
});

export const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(1),
  client: z.string().optional(),
  categories: z.array(z.string().min(1)).min(1),
  media: z.array(mediaSchema),
  introduction: z.string().optional(),
  provenance: provenanceSchema,
});

export const faqSchema = z.object({
  id: z.string().min(1),
  question: z.string().min(1),
  answer: z.string().min(1),
});
export const serviceSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  capabilities: z.array(z.string()),
  provenance: provenanceSchema,
});
export const teamMemberSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  biography: z.string().optional(),
  portrait: mediaSchema.optional(),
  provenance: provenanceSchema,
});
export const testimonialSchema = z.object({
  quote: z.string().min(1),
  name: z.string().min(1),
  organisation: z.string().min(1),
  provenance: provenanceSchema,
});
export const clientSchema = z.object({
  name: z.string().min(1),
  logo: mediaSchema.optional(),
  provenance: provenanceSchema,
});
export const journalArticleSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  author: z.string().optional(),
  publishedOn: z.iso.date(),
  body: z.string().min(1),
  cover: mediaSchema.optional(),
  provenance: provenanceSchema,
});
export type Project = z.infer<typeof projectSchema>;
export type MediaAsset = z.infer<typeof mediaSchema>;
export type FAQ = z.infer<typeof faqSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type TeamMember = z.infer<typeof teamMemberSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type Client = z.infer<typeof clientSchema>;
export type JournalArticle = z.infer<typeof journalArticleSchema>;

// Use when publishing content; discovered material alone must not pass this gate.
export function isPublishableProject(project: Project) {
  return (
    project.provenance.approval === "approved" &&
    project.media.length > 0 &&
    project.media.every(
      (media) =>
        media.rights === "cleared" && media.provenance.approval === "approved",
    )
  );
}
