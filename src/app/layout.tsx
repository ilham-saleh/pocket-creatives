import type { Metadata, Viewport } from "next";
import {
  displayFont,
  displayFallbackFont,
  bodyFont,
  paragraphFont,
} from "./fonts";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { indexingEnabled, siteUrl } from "@/lib/site-config";
import { site, socials } from "@/content/site";
import "./globals.css";
import "@/styles/home.css";

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pocket Creatives — Video Production & Photography",
    template: "%s | Pocket Creatives",
  },
  description:
    "Video production and photography from a London creative production team.",
  robots: { index: indexingEnabled, follow: indexingEnabled },
  icons: { icon: "/brand/pocket-creatives-logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body
        className={`${displayFont.variable} ${displayFallbackFont.variable} ${bodyFont.variable} ${paragraphFont.variable}`}
      >
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${siteUrl}/#organization`,
              name: site.name,
              url: siteUrl,
              logo: `${siteUrl}/brand/pocket-creatives-logo.png`,
              email: site.email,
              telephone: site.phoneHref.slice(4),
              sameAs: socials.map((social) => social.href),
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
