import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CoverImage } from "@/components/cover-image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { founder } from "@/data/site";

export function FunderSection() {
  return (
    <section id="founder" className="scroll-mt-28 bg-mist py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading before="About the" highlight="Founder" />
        </Reveal>
        <Reveal>
          <article className="mt-14 grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[4/5] overflow-hidden bg-navy sm:aspect-[5/4] lg:aspect-[4/5]">
              <CoverImage
                src={founder.image}
                alt={founder.imageAlt}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-[center_18%]"
              />
              <div className="absolute bottom-0 left-0 bg-navy px-6 py-5 text-white">
                <p className="font-display text-4xl font-bold leading-none text-orange">{founder.initials}</p>
                <p className="mt-2 font-display text-2xl font-bold uppercase leading-none">{founder.name}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-orange">{founder.role}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange">{founder.role}</p>
              <h3 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.95] text-navy md:text-5xl">
                {founder.name}
              </h3>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
                <p>{founder.lead}</p>
                <p>
                  {founder.philosophyLabel}{" "}
                  <strong className="font-semibold text-navy">{founder.philosophy}</strong>
                </p>
                {founder.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-7">
                <ButtonLink href="/contact">Start a project</ButtonLink>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
