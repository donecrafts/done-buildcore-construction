import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How this Done BuildCore Construction demonstration website handles information typed into its forms.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy"
        lede="This website is a frontend demonstration. Forms do not transmit or store what you type."
        image="/images/office.jpg"
        imageAlt=""
      />
      <section className="bg-white py-16">
        <Container className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
          <p>
            Done BuildCore Construction as presented here is a public website. Enquiry and newsletter forms check values in your browser and then discard them. They are not connected to email or a database.
          </p>
          <p>
            Do not submit payment details or confidential project information. Nothing on this site is a request for that information.
          </p>
          <p>
            Contact details use the reserved example domain and a placeholder telephone number. The site does not publish a street address.
          </p>
        </Container>
      </section>
    </>
  );
}
