import { CoverImage } from "@/components/cover-image";
import { Container } from "@/components/container";

export function PageHero({
  title,
  lede,
  image,
  imageAlt,
}: {
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-navy">
      <CoverImage src={image} alt={imageAlt} priority sizes="100vw" />
      <div className="absolute inset-0 bg-[#211B55]/60" />
      <Container className="relative z-10 pb-14 pt-36 md:pb-16">
        <h1 className="max-w-4xl font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{lede}</p>
      </Container>
    </section>
  );
}
