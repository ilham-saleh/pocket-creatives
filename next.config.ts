import type { NextConfig } from "next";
import { legacyRedirects } from "./src/content/legacy-redirects";
import { indexingEnabled } from "./src/lib/site-config";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Let mapped legacy URLs resolve before normalizing their trailing slash.
  skipTrailingSlashRedirect: process.env.ENABLE_LEGACY_REDIRECTS === "true",
  async redirects() {
    return process.env.ENABLE_LEGACY_REDIRECTS === "true"
      ? [
          ...legacyRedirects,
          { source: "/:path+/", destination: "/:path+", permanent: true },
        ]
      : [];
  },
  // Publishing is opt-in; local/staging previews stay excluded from search.
  async headers() {
    return [
      ...(indexingEnabled
        ? []
        : [
            {
              source: "/:path*",
              headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
            },
          ]),
      {
        source: "/foundation/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/api/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
