import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { homeServices } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            before="Our"
            highlight="Services"
            intro="Planning, building, plumbing and procurement, presented as one construction team."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {homeServices.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.08} className="h-full">
              <Link
                href={`/services#${service.slug}`}
                className="group flex h-full flex-col bg-navy p-8 text-white transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_44px_rgba(33,27,85,0.28)]"
              >
                <span className="mb-8 grid h-16 w-16 place-items-center rounded-full bg-white text-navy">
                  <ServiceIcon name={service.icon} />
                </span>
                <h3 className="font-display text-[1.7rem] font-bold uppercase tracking-wide">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#e4e1f2]">{service.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
