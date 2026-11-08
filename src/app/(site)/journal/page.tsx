import Link from "next/link";
import {
  PageFrame,
  PageHero,
  PageSection,
  PhotoFrame,
  ContactCTA,
} from "@/components/pages/page-parts";
import { photos } from "@/content/home";
import { pageMetadata } from "@/lib/seo";
import { articles } from "@/content/journal";
export const metadata = pageMetadata(
  "Journal",
  "Photography and video production insights from Pocket Creatives.",
  "/journal",
);
export default function JournalPage() {
  return (
    <PageFrame>
      <PageHero title="Journal" photo={photos.boulder} />
      <PageSection label="From the studio" title="Ideas behind the images.">
        <div className="journal-list">
          {articles.map((a) => (
            <article key={a.slug}>
              <Link href={`/journal/${a.slug}`}>
                <PhotoFrame photo={a.photo} />
                <div>
                  <span className="eyebrow">
                    {a.category} ·{" "}
                    <time dateTime={a.publishedOn}>7 September 2026</time>
                  </span>
                  <h2>{a.title}</h2>
                  <p>{a.description}</p>
                  <span className="text-link">Read the article ↗</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <a
          className="text-link"
          href="https://www.pocketcreatives.co.uk/blog-photography-video/"
        >
          Explore the full journal archive ↗
        </a>
      </PageSection>
      <ContactCTA />
    </PageFrame>
  );
}
