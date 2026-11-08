import { notFound } from "next/navigation";
import "@/styles/pages.css";
export const dynamic = "force-dynamic";
export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (
    process.env.NODE_ENV === "production" &&
    process.env.ENABLE_SITE_PREVIEW !== "true"
  )
    notFound();
  return children;
}
