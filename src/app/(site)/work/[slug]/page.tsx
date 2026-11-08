import {
  PageFrame,
  PageSection,
  PhotoFrame,
  ContactCTA,
  Breadcrumbs,
} from "@/components/pages/page-parts";
import { PrimaryButton } from "@/components/ui/primary-button";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { projects, findProject } from "@/content/projects";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProjectGallery } from "@/components/portfolio/project-gallery";
import { ProjectVideo } from "@/components/portfolio/project-video";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = findProject(slug);
  return p
    ? pageMetadata(p.title, p.introduction, `/work/${slug}`)
    : { title: "Project not found" };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = findProject(slug);
  if (!p) notFound();
  return (
    <PageFrame>
      <header className="detail-hero site-container">
        <div className="detail-heading">
          <h1 data-page-reveal>{p.title}</h1>
          <dl className="project-meta">
            {[
              ["Service", p.kind],
              ["Category", p.categories.join(" / ")],
              ...(p.client ? [["Client", p.client]] : []),
            ].map(([label, value], i) => (
              <div key={label}>
                <dt>
                  <span>({String(i + 1).padStart(2, "0")})</span> {label}
                </dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        {p.vimeoId ? (
          <ProjectVideo
            id={p.vimeoId}
            title={p.title}
            photo={p.photo}
            portrait={p.slug === "samsung-sparkbox"}
          />
        ) : (
          <PhotoFrame photo={p.photo} eager className="detail-cover" />
        )}
      </header>
      <PageSection label={p.kind === "Video" ? "The film" : "The collection"}>
        <div className="page-columns">
          <Breadcrumbs
            items={[{ label: "Work", href: "/work" }, { label: p.title }]}
          />
          <div className="page-prose">
            <h2 data-page-reveal>
              {p.kind === "Video" ? "Made to be watched." : "A closer look."}
            </h2>
            <p>{p.introduction}</p>
            <PrimaryButton href="/contact">
              Create Something Similar
            </PrimaryButton>
          </div>
        </div>
        {p.kind === "Photography" && (
          <ProjectGallery photos={[p.photo, ...p.gallery]} title={p.title} />
        )}
      </PageSection>
      <PageSection
        label="More to explore"
        number="02"
        title="Another perspective."
      >
        <div className="related-projects">
          {projects
            .filter((item) => item.slug !== p.slug)
            .slice(0, 2)
            .map((item) => (
              <ProjectCard project={item} key={item.slug} />
            ))}
        </div>
        <PrimaryButton href="/work">All Work</PrimaryButton>
      </PageSection>
      <ContactCTA />
    </PageFrame>
  );
}
