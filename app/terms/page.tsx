import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using this Done BuildCore Construction demonstration website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms"
        lede="Sample terms for a demonstration website. They are not a contract for construction work."
        image="/images/green.jpg"
        imageAlt=""
      />
      <section className="bg-white py-16">
        <Container className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
          <p>
            The portfolio presents my construction projects. Articles describe how that work is planned and delivered.
          </p>
          <p>
            Partner marks are fictional graphics. They are not endorsements. The site does not claim certifications, licences or awards beyond the descriptive headings used to explain the work.
          </p>
          <p>
            Using the forms does not create a client relationship or an instruction to start work.
          </p>
        </Container>
      </section>
    </>
  );
}
