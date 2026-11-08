"use client";
import { useState } from "react";
import { projects, projectFilters } from "@/content/projects";
import { ProjectCard } from "./project-card";
export function ProjectGrid() {
  const [filter, setFilter] = useState("All Work");
  const visible = projects.filter(
    (p) =>
      filter === "All Work" ||
      p.kind === filter ||
      p.categories.includes(filter),
  );
  return (
    <>
      <div
        className="project-filters"
        role="group"
        aria-label="Filter projects"
      >
        {projectFilters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            aria-controls="project-results"
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="project-count" role="status" aria-live="polite">
        {visible.length} {visible.length === 1 ? "project" : "projects"} ·{" "}
        {filter}
      </p>
      <div className="project-grid" id="project-results">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
