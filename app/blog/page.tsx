import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { CoverImage } from "@/components/cover-image";
import { PageHero } from "@/components/page-hero";
import { formatPostDate, posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Construction insights from Done BuildCore Construction on planning, renovation, procurement and how a project stays understandable.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        lede="Notes on how buildings get planned, sequenced and handed over. The articles are original sample writing for this site."
        image="/images/office.jpg"
        imageAlt="Long workplace corridor with dark joinery"
      />
      <section className="bg-white py-16 md:py-20">
        <Container className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex h-full flex-col bg-mist">
              <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                <CoverImage src={post.image} alt={post.imageAlt} sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
                  {post.category} · {formatPostDate(post.date)}
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-none text-navy">
                  <Link href={`/blog/${post.slug}`} className="hover:text-orange">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 flex-1 leading-relaxed text-muted">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-navy hover:text-orange">
                  Read article · {post.readTime}
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
