import Link from "next/link";
import {
  PageFrame,
  PageSection,
  PhotoFrame,
  ContactCTA,
  PageFAQ,
  Breadcrumbs,
} from "@/components/pages/page-parts";
import { PrimaryButton } from "@/components/ui/primary-button";
import { photos } from "@/content/home";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { services, sectorLinks } from "@/content/services";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProjectVideo } from "@/components/portfolio/project-video";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = services.find((item) => item.slug === slug);
  return s
    ? pageMetadata(`${s.title} in London`, s.summary, `/services/${slug}`)
    : { title: "Service not found" };
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((item) => item.slug === slug);
  if (!s) notFound();
  const video = slug === "video-production";
  return (
    <PageFrame>
      <header className="detail-hero service-detail site-container">
        <div className="detail-heading">
          <h1 data-page-reveal>{s.title}</h1>
          <p>{s.summary}</p>
        </div>
        {video ? (
          <ProjectVideo
            id="1101645222"
            title="Pocket Creatives in 73 Seconds — This Is Us"
            photo={photos.reel}
          />
        ) : (
          <PhotoFrame photo={s.photo} eager className="detail-cover" />
        )}
      </header>
      <PageSection label="Our approach">
        <div className="page-columns">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: s.title },
            ]}
          />
          <div className="page-prose">
            <h2 data-page-reveal>{s.headline}</h2>
            <p>{s.summary}</p>
            <PrimaryButton href="/contact">Discuss Your Brief</PrimaryButton>
          </div>
        </div>
      </PageSection>
      <PageSection label="What we do" number="02">
        {s.details.map((detail, i) => (
          <div className="editorial-row" key={detail.title}>
            <span className="editorial-index">
              /{String(i + 1).padStart(2, "0")}
            </span>
            <h2 data-page-reveal>{detail.title}</h2>
            <p>{detail.text}</p>
          </div>
        ))}
      </PageSection>
      <PageSection label="Selected work" number="03" title="See it in action.">
        <div className="related-projects">
          {projects
            .filter((p) => p.kind === (video ? "Video" : "Photography"))
            .slice(0, 2)
            .map((p) => (
              <ProjectCard project={p} key={p.slug} />
            ))}
        </div>
        <PrimaryButton href="/work">Explore Our Work</PrimaryButton>
      </PageSection>
      {!video && (
        <PageSection label="Explore by sector" number="04">
          <div className="page-columns">
            <h2 data-page-reveal>
              A world of
              <br />
              possibilities.
            </h2>
            <div>
              <p className="page-intro">
                Explore the full sector collections on our existing portfolio.
              </p>
              <ul className="sector-links">
                {sectorLinks.map(([label, path]) => (
                  <li key={path}>
                    <a
                      href={`https://www.pocketcreatives.co.uk/portfolio/${path}/`}
                    >
                      {label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageSection>
      )}
      <PageSection label="From idea to delivery" number="05">
        <div className="page-columns">
          <h2 data-page-reveal>
            A clear process.
            <br />A shared direction.
          </h2>
          <div className="page-prose">
            <p>
              Discover, plan, produce and deliver. Creative thinking and
              practical production, with you involved along the way.
            </p>
            <PrimaryButton href="/process">How We Work</PrimaryButton>
            <Link className="text-link" href="/pricing">
              How we price a project ↗
            </Link>
          </div>
        </div>
      </PageSection>
      <PageFAQ />
      <ContactCTA />
    </PageFrame>
  );
}
