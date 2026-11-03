import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ProjectBrowser } from "@/components/project-browser";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "My projects across residential, commercial, renovation, civil and infrastructure work.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Portfolio"
        lede="These are my projects. Filter them by residential, commercial, renovation, civil and infrastructure work."
        image="/images/glass.jpg"
        imageAlt="White commercial building with a cantilevered upper floor"
      />
      <section className="bg-white py-16 md:py-20">
        <Container>
          <ProjectBrowser />
        </Container>
      </section>
    </>
  );
}
