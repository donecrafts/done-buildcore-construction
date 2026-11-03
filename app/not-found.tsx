import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-navy text-white">
      <Container className="py-32">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">404</p>
        <h1 className="mt-4 font-display text-5xl font-bold uppercase md:text-7xl">Page not found</h1>
        <p className="mt-4 max-w-xl text-lg text-white/80">That address is not part of this Done BuildCore Construction site.</p>
        <div className="mt-8">
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
