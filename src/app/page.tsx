import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Homepage } from "@/components/home/homepage";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = pageMetadata(
  "Video Production & Photography in London",
  "Pocket Creatives is a London creative production team making films and photography for brands, people and stories.",
  "/",
);

export default function Home() {
  // Media candidates are not release-approved. Keep this local preview gated.
  if (
    process.env.NODE_ENV === "production" &&
    process.env.ENABLE_HOMEPAGE_PREVIEW !== "true"
  )
    notFound();
  return <Homepage />;
}
