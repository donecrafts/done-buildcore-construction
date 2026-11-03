import { Container } from "@/components/container";
import { CoverImage } from "@/components/cover-image";
import { EnquiryForm } from "@/components/enquiry-form";

export function EnquirySection() {
  return (
    <section id="enquiry" className="relative isolate overflow-hidden bg-navy py-20 md:py-28">
      <CoverImage
        src="/images/night-b.jpg"
        alt=""
        sizes="100vw"
        className="object-center"
      />
      <div className="absolute inset-0 bg-[#211B55]/68" />
      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/80">
            Tell us about your project and let our team help bring your vision to life.
          </p>
        </div>
        <div className="bg-white/10 p-5 backdrop-blur-sm sm:p-7">
          <EnquiryForm tone="dark" />
        </div>
      </Container>
    </section>
  );
}
