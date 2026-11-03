import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CoverImage } from "@/components/cover-image";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { getProject, getRelatedProjects, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<PageHero title="Project" lede="Loading my project." image="/images/glass.jpg" imageAlt="" />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = getRelatedProjects(project.slug);

  return (
    <>
      <PageHero title={project.title} lede={project.summary} image={project.image} imageAlt={project.imageAlt} />
      <section className="bg-white py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange">{project.category}</p>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <h2 className="mt-10 font-display text-3xl font-bold uppercase text-navy">Scope</h2>
            <ul className="mt-4 space-y-3">
              {project.scope.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-orange" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit bg-navy p-6 text-white md:p-8">
            <h2 className="font-display text-2xl font-bold uppercase">Specifications</h2>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-orange">Setting</dt>
                <dd className="mt-1">{project.setting}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-orange">Year</dt>
                <dd className="mt-1">{project.year}</dd>
              </div>
              {project.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-orange">{spec.label}</dt>
                  <dd className="mt-1">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-white/70">This is my project.</p>
          </aside>
        </Container>
      </section>
      <section className="bg-mist py-16" aria-label="Project gallery">
        <Container>
          <h2 className="font-display text-4xl font-bold uppercase text-navy">Gallery</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {project.gallery.map((image) => (
              <div key={image.src} className="relative aspect-[4/3] bg-white">
                <CoverImage src={image.src} alt={image.alt} sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-4xl font-bold uppercase text-navy">More of my projects</h2>
            <Link href="/projects" className="text-sm font-bold uppercase tracking-[0.12em] text-navy hover:text-orange">
              All projects
            </Link>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <ProjectCard
                key={item.slug}
                href={`/projects/${item.slug}`}
                title={item.title}
                summary={item.summary}
                image={item.image}
                imageAlt={item.imageAlt}
              />
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/contact">Discuss a project</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
