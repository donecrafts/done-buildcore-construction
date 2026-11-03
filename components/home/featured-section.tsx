import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { featuredShowcase } from "@/data/projects";

export function FeaturedSection() {
  return (
    <section className="bg-mist py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            highlight="Featured"
            after="Projects"
            intro="Three of my projects across houses, workplaces and renovations."
          />
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredShowcase.map((project, index) => (
            <Reveal key={project.href} delay={index * 0.08} className="h-full">
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
