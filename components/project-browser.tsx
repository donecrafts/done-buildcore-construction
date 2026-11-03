"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";

export function ProjectBrowser() {
  const [category, setCategory] = useState<ProjectCategory>("All");
  const visible = category === "All" ? projects : projects.filter((project) => project.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter projects">
        {projectCategories.map((item) => {
          const selected = item === category;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setCategory(item)}
              className={`px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] transition ${
                selected ? "bg-orange text-navy" : "bg-mist text-navy hover:bg-navy hover:text-white"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-muted">
        {category === "All"
          ? `Showing ${visible.length} of my projects.`
          : `Showing ${visible.length} of my projects in ${category}.`}
      </p>
      {visible.length === 0 ? (
        <p className="mt-8 text-lg text-navy">None of my projects are in this category.</p>
      ) : (
        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard
              key={project.slug}
              href={`/projects/${project.slug}`}
              title={project.title}
              summary={project.summary}
              image={project.image}
              imageAlt={project.imageAlt}
            />
          ))}
        </div>
      )}
    </div>
  );
}
