import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CoverImage } from "@/components/cover-image";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy">
      <CoverImage
        src="/images/hero.jpg"
        alt="Glass commercial towers viewed from street level"
        priority
        sizes="100vw"
        className="object-center"
      />
      <div className="absolute inset-0 bg-[#191919]/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#211B55]/80 via-[#211B55]/45 to-[#211B55]/10" />
      <Container className="relative z-10 py-32">
        <h1 className="font-display text-[2.15rem] font-bold uppercase leading-[0.9] tracking-tight text-white min-[400px]:text-[2.45rem] sm:text-5xl md:text-6xl lg:text-[5.15rem] lg:leading-[0.88]">
          We are Building The Future
          <br />
          And One Strong Foundation
          <br />
          At A Time.
        </h1>
        <div className="mt-8">
          <ButtonLink href="/about#team">Our Team</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
