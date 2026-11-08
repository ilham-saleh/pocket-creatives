import {
  PageFrame,
  PhotoFrame,
  ContactCTA,
  Breadcrumbs,
} from "@/components/pages/page-parts";
import { PrimaryButton } from "@/components/ui/primary-button";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { articles } from "@/content/journal";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  return a
    ? pageMetadata(a.title, a.description, `/journal/${slug}`)
    : { title: "Article not found" };
}
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) notFound();
  return (
    <PageFrame>
      <article>
        <header className="article-hero">
          <div className="article-hero-bg">
            <PhotoFrame photo={a.photo} eager />
          </div>
          <div className="site-container">
            <h1 data-page-reveal>{a.title}</h1>
            <div className="article-byline">
              <span>{a.category}</span>
              <span>{a.author}</span>
              <time dateTime={a.publishedOn}>7 September 2026</time>
            </div>
          </div>
        </header>
        <div className="site-container article-body">
          <Breadcrumbs
            items={[
              { label: "Journal", href: "/journal" },
              { label: "Photography & video in London" },
            ]}
          />
          <div className="reading-column">
            <p className="article-deck">{a.description}</p>
            {a.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
            <p className="article-source">
              An edited reading version of Pocket Creatives’ original article.{" "}
              <a href={a.sourceUrl}>Read the full original ↗</a>
            </p>
            <PrimaryButton href="/contact">Start a Conversation</PrimaryButton>
          </div>
        </div>
      </article>
      <ContactCTA />
    </PageFrame>
  );
}
