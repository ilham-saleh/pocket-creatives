import Link from "next/link";
import type { PortfolioProject } from "@/content/projects";
import { HomePhoto } from "@/components/home/home-photo";
export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="project-card">
      <Link href={`/work/${project.slug}`}>
        <div
          className={`project-card-photo ${project.slug === "samsung-sparkbox" ? "contain-photo" : ""}`}
        >
          <HomePhoto
            photo={project.photo}
            sizes="(max-width: 767px) 100vw, 65vw"
          />
          <span className="project-card-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
        <div className="project-card-info">
          <h3>{project.title}</h3>
          <span>
            {project.kind} / {project.categories[0]}
          </span>
        </div>
      </Link>
    </article>
  );
}
