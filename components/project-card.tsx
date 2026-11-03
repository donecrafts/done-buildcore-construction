import Link from "next/link";
import { CoverImage } from "@/components/cover-image";
import { orangeButton } from "@/lib/styles";

export function ProjectCard({
  href,
  title,
  summary,
  image,
  imageAlt,
}: {
  href: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <article className="flex h-full flex-col bg-white shadow-[0_16px_40px_rgba(25,25,25,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(33,27,85,0.14)]">
      <Link href={href} className="relative block aspect-[16/10] overflow-hidden bg-mist">
        <CoverImage
          src={image}
          alt={imageAlt}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="transition duration-500 hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-display text-[1.7rem] font-bold uppercase leading-none tracking-wide text-navy">
          <Link href={href} className="hover:text-orange">
            {title}
          </Link>
        </h3>
        <p className="mt-4 flex-1 leading-relaxed text-muted">{summary}</p>
        <Link href={href} className={`${orangeButton} mt-6 self-start`}>
          Learn More
        </Link>
      </div>
    </article>
  );
}
