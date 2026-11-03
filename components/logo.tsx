import Image from "next/image";
import Link from "next/link";
import logoMark from "@/logo/done-buildcore-logo.jpg";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const word = tone === "light" ? "text-white" : "text-navy";
  const sub = tone === "light" ? "text-white/70" : "text-navy/60";

  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Done BuildCore Construction, home">
      <Image
        src={logoMark}
        alt=""
        width={72}
        height={72}
        priority
        className="h-16 w-16 shrink-0 object-contain"
      />
      <span className="leading-none">
        <span className={`block font-display text-[1.05rem] font-bold tracking-[0.04em] sm:text-[1.28rem] ${word}`}>
          DONE BUILDCORE
        </span>
        <span className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.28em] ${sub}`}>
          Construction
        </span>
      </span>
    </Link>
  );
}
