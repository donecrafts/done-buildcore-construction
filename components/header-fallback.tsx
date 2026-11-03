import Link from "next/link";
import { Logo } from "@/components/logo";
import { navLinks } from "@/data/site";

export function HeaderFallback() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6">
        <Logo tone="light" priority />
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="h-11 w-11 xl:hidden" aria-hidden="true" />
      </div>
    </header>
  );
}
