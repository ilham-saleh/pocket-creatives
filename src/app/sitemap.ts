import type { MetadataRoute } from "next";
import { indexingEnabled, siteUrl } from "@/lib/site-config";
import { destinations } from "@/content/site";
import { projects } from "@/content/projects";
import { articles } from "@/content/journal";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexingEnabled) return [];
  return [
    ...Object.values(destinations).map(({ path }) => ({ url: siteUrl + path })),
    ...projects.map(({ slug }) => ({ url: `${siteUrl}/work/${slug}` })),
    ...articles.map(({ slug, publishedOn }) => ({
      url: `${siteUrl}/journal/${slug}`,
      lastModified: publishedOn,
    })),
  ];
}
