import { Quote } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section className="bg-navy py-20 text-white md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            before="Client"
            highlight="Testimonials"
            light
            intro="Discover what our clients value about our commitment to quality, trust and exceptional construction."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08} className="h-full">
              <figure className="flex h-full flex-col bg-white p-8 text-ink transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_44px_rgba(0,0,0,0.22)]">
                <Quote className="text-orange" size={42} strokeWidth={1.75} aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed">
                  <p>{item.quote}</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-black/10 pt-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center bg-navy font-display text-lg font-bold text-orange">
                    {item.initials}
                  </span>
                  <div>
                    <p className="font-display text-xl font-bold uppercase leading-none text-navy">{item.name}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-orange">{item.role}</p>
                    <p className="mt-1 text-sm text-muted">{item.context}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
