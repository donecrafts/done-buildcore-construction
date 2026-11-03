import type { ReactNode } from "react";

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-orange px-[0.28em] py-[0.05em] leading-none text-navy">
      {children}
    </span>
  );
}

export function SectionHeading({
  before,
  highlight,
  after,
  intro,
  light = false,
}: {
  before?: string;
  highlight: string;
  after?: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2
        className={`font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {before ? <>{before} </> : null}
        <Highlight>{highlight}</Highlight>
        {after ? <> {after}</> : null}
      </h2>
      {intro ? (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${light ? "text-white/80" : "text-muted"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
