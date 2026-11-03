import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { partners } from "@/data/site";

export function CustomersSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            before="Our"
            highlight="Customers"
            intro="Building lasting partnerships through collaboration, trust and a shared commitment to excellence."
          />
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((name) => (
            <li key={name} className="flex h-24 items-center justify-center border border-black/10 bg-mist px-3">
              <span className="text-center font-display text-lg font-bold uppercase tracking-[0.14em] text-navy">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
