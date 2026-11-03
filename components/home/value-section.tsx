import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CoverImage } from "@/components/cover-image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { valuePoints } from "@/data/site";

export function ValueSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading before="Our Value" highlight="Proposition" />
        </Reveal>
        <div className="mt-14 space-y-16 md:space-y-20">
          {valuePoints.map((item, index) => (
            <Reveal key={item.title}>
              <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <div className={`relative aspect-[5/4] overflow-hidden bg-mist ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <CoverImage
                    src={item.image}
                    alt={item.imageAlt}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-navy md:text-5xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-muted">{item.text}</p>
                  <div className="mt-7">
                    <ButtonLink href={item.href}>Our Work</ButtonLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
