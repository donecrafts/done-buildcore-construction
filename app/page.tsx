import type { Metadata } from "next";
import { CustomersSection } from "@/components/home/customers-section";
import { EnquirySection } from "@/components/home/enquiry-section";
import { FeaturedSection } from "@/components/home/featured-section";
import { FunderSection } from "@/components/home/funder-section";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ValueSection } from "@/components/home/value-section";

export const metadata: Metadata = {
  title: {
    absolute: "Done BuildCore Construction | General Construction and Engineering",
  },
  description:
    "Done BuildCore Construction plans, builds and coordinates residential, commercial, renovation and civil projects. We are Building The Future And One Strong Foundation At A Time.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedSection />
      <ValueSection />
      <FunderSection />
      <CustomersSection />
      <TestimonialsSection />
      <EnquirySection />
    </>
  );
}
