import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CoverImage } from "@/components/cover-image";
import { PageHero } from "@/components/page-hero";
import { FunderSection } from "@/components/home/funder-section";
import { milestones, team, values } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Done BuildCore Construction story: a general construction and engineering practice organised around planning, building and long-term performance.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        lede="A general construction and engineering practice for clients who need the building, the sequence and the team to stay in one conversation."
        image="/images/crew.jpg"
        imageAlt="Construction crew assembling reinforcement on a high-rise frame"
      />
      <section className="bg-white py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[5/4] bg-mist">
            <CoverImage
              src="/images/concrete.jpg"
              alt="Hands working through a set of architectural drawings"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange">The practice</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none text-navy md:text-5xl">
              We are Building The Future And One Strong Foundation At A Time.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Done BuildCore Construction works across general construction and engineering. The work is houses, workplaces, renovations and the civil preparation that lets those buildings sit properly on their sites.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Clients come to a project with a drawing and a date. We add the sequence, the packages and the site judgment that turn those into a building someone can occupy.
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-mist py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          <article className="bg-navy p-8 text-white md:p-10">
            <h2 className="font-display text-3xl font-bold uppercase">Mission</h2>
            <p className="mt-4 leading-relaxed text-white/80">
              Make the path from drawing to handover understandable, so a client can see what is being built, in what order, and why.
            </p>
          </article>
          <article className="border border-navy/10 bg-white p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold uppercase text-navy">Vision</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Construction that is calm to occupy and straightforward to maintain, with structure, services and finishes decided as one project.
            </p>
          </article>
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container>
          <h2 className="text-center font-display text-4xl font-bold uppercase text-navy md:text-5xl">Values</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="bg-mist p-6">
                <h3 className="font-display text-2xl font-bold uppercase text-navy">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{value.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-navy py-16 text-white">
        <Container className="grid gap-8 sm:grid-cols-3">
          {[
            ["10+", "Years of experience"],
            ["8", "Coordinated services"],
            ["5", "Project categories"],
          ].map(([figure, label]) => (
            <div key={label}>
              <p className="font-display text-5xl font-bold text-orange">{figure}</p>
              <p className="mt-2 text-white/80">{label}</p>
            </div>
          ))}
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase text-navy">Milestones</h2>
            <p className="mt-4 leading-relaxed text-muted">
              A short company timeline used to explain how the services fit together. It is not a register of licences or awards.
            </p>
          </div>
          <ol className="space-y-8 border-l border-navy/15 pl-6">
            {milestones.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[1.85rem] top-1 h-3 w-3 bg-orange" aria-hidden="true" />
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange">{item.year}</p>
                <h3 className="mt-1 font-display text-2xl font-bold uppercase text-navy">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <FunderSection />
      <section id="team" className="scroll-mt-28 bg-white py-20">
        <Container>
          <h2 className="font-display text-4xl font-bold uppercase text-navy md:text-5xl">Our team</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Thomas Scott Kelvin is the founder. The other profiles are sample leadership roles for this demonstration and cannot be contacted from this website.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <li key={person.name} className="bg-mist p-6">
                <div className="grid h-16 w-16 place-items-center bg-navy font-display text-2xl font-bold text-orange">
                  {person.initials}
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase text-navy">{person.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-orange">{person.role}</p>
                <p className="mt-3 text-muted">{person.focus}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ButtonLink href="/contact">Talk to the studio</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
