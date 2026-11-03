import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CoverImage } from "@/components/cover-image";
import { PageHero } from "@/components/page-hero";
import { ServiceIcon } from "@/components/service-icon";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "General construction, planning, building, plumbing, procurement, renovation, civil engineering and project management from Done BuildCore Construction.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        lede="Eight disciplines, described so a client can see how planning, construction and coordination belong to the same project."
        image="/images/sustainable.jpg"
        imageAlt="Contemporary curved commercial facade"
      />
      <nav aria-label="On this page" className="sticky top-20 z-30 border-b border-black/5 bg-white/95 backdrop-blur">
        <Container className="flex gap-2 overflow-x-auto py-3">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="shrink-0 border border-navy/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-navy transition hover:bg-navy hover:text-white"
            >
              {service.title}
            </a>
          ))}
        </Container>
      </nav>
      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-36 py-16 md:py-20 ${index % 2 === 0 ? "bg-white" : "bg-mist"}`}
        >
          <Container className="grid items-center gap-10 lg:grid-cols-2">
            <div className={`relative aspect-[5/4] overflow-hidden bg-navy ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <CoverImage src={service.image} alt={service.imageAlt} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-navy shadow-sm">
                <ServiceIcon name={service.icon} />
              </span>
              <h2 className="mt-5 font-display text-4xl font-bold uppercase text-navy">{service.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{service.description}</p>
              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed text-ink">
                    <span className="mt-2 h-2 w-2 shrink-0 bg-orange" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ))}
      <section className="bg-navy py-16 text-white">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-4xl font-bold uppercase leading-none">
            Tell us which part of the project you need first.
          </h2>
          <ButtonLink href="/contact">Start an enquiry</ButtonLink>
        </Container>
      </section>
    </>
  );
}
