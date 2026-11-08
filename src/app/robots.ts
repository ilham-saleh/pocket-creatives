import type { MetadataRoute } from "next";
import { indexingEnabled, siteUrl } from "@/lib/site-config";
export default function robots(): MetadataRoute.Robots {
  if (indexingEnabled)
    return {
      rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/foundation"] },
      sitemap: `${siteUrl}/sitemap.xml`,
    };
  return { rules: { userAgent: "*", disallow: "/" } };
}
