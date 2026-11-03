import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { EnquiryForm } from "@/components/enquiry-form";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { contactDetails, hours } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Done BuildCore Construction with a project enquiry. This demonstration site validates the form in the browser and does not deliver messages.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        lede="Tell us about the project. The form on this page checks your details locally and does not send them anywhere."
        image="/images/green.jpg"
        imageAlt="Corner of a dark brick commercial building under a deep blue sky"
      />
      <section className="bg-white py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase text-navy">Studio details</h2>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 text-orange" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-navy">Email</p>
                  <a className="text-muted hover:text-orange" href={`mailto:${contactDetails.email}`}>
                    {contactDetails.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 text-orange" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-navy">Phone</p>
                  <a className="text-muted hover:text-orange" href={contactDetails.phoneHref}>
                    {contactDetails.phone}
                  </a>
                  <p className="text-sm text-muted">Placeholder number.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 text-orange" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-navy">Location</p>
                  <p className="text-muted">{contactDetails.location}</p>
                </div>
              </li>
            </ul>
            <div className="mt-10 bg-mist p-6">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-orange" aria-hidden="true" />
                <h3 className="font-display text-2xl font-bold uppercase text-navy">Business hours</h3>
              </div>
              <dl className="mt-4 space-y-3">
                {hours.map((row) => (
                  <div key={row.day} className="flex items-center justify-between gap-4 border-b border-black/5 pb-3">
                    <dt className="font-semibold text-navy">{row.day}</dt>
                    <dd className="text-muted">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="bg-mist p-6 md:p-8">
            <h2 className="font-display text-3xl font-bold uppercase text-navy">Project enquiry</h2>
            <p className="mt-3 mb-6 text-muted">
              Tell us about your project and let our team help bring your vision to life.
            </p>
            <EnquiryForm />
          </div>
        </Container>
      </section>
      <section className="bg-white pb-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-4xl font-bold uppercase text-navy">Questions</h2>
          <div className="mt-8">
            <FaqList />
          </div>
        </Container>
      </section>
    </>
  );
}
