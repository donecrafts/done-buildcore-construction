import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { NewsletterForm } from "@/components/newsletter-form";
import { services } from "@/data/services";
import { contactDetails, navLinks } from "@/data/site";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L4 20.2l1.4-3.7A8.5 8.5 0 1 1 20.5 11.5zm-8.5 7a6.9 6.9 0 0 0 3.5-1l.3-.2 2.1.6-.6-2 .2-.3a6.9 6.9 0 1 0-5.5 2.9zm3.8-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1l-.4.5c-.1.2-.3.2-.5.1a5.6 5.6 0 0 1-2.8-2.4c-.1-.2 0-.3.1-.5l.3-.4c.1-.1.1-.3 0-.4l-.6-1.5c-.2-.4-.3-.3-.5-.3h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.4 1.4.6 2 .6 2.7.5.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.1-.4-.2z" />
    </svg>
  );
}

const contactLinks = [
  { label: "Mail", href: `mailto:${contactDetails.email}`, icon: <Mail className="h-4 w-4" aria-hidden="true" /> },
  { label: "Phone", href: contactDetails.phoneHref, icon: <Phone className="h-4 w-4" aria-hidden="true" /> },
  {
    label: "WhatsApp",
    href: `https://wa.me/${contactDetails.phoneHref.replace(/\D/g, "")}`,
    icon: <WhatsAppIcon />,
    external: true,
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-orange bg-navy text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
            Done BuildCore Construction is a general construction and engineering practice. We are Building The Future And One Strong Foundation At A Time.
          </p>
          <ul className="mt-5 flex gap-3">
            {contactLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="grid h-10 w-10 place-items-center border border-white/20 text-white transition hover:border-orange hover:text-orange"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">Useful Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-orange">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">Our Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services#${service.slug}`} className="transition hover:text-orange">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">Newsletter</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Occasional notes on construction, sequencing and project delivery.
          </p>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2018 Done BuildCore Construction website.</p>
          <ul className="flex gap-5">
            <li>
              <Link href="/privacy" className="hover:text-orange">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-orange">
                Terms
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
