import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { formatPostDate, getPost, getRelatedPosts, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article" };
  return { title: post.title, description: post.excerpt };
}

export default function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<PageHero title="Article" lede="Loading this note." image="/images/office.jpg" imageAlt="" />}>
      <ArticleContent params={params} />
    </Suspense>
  );
}

async function ArticleContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelatedPosts(post.slug);

  return (
    <>
      <PageHero
        title={post.title}
        lede={`${post.category} · ${formatPostDate(post.date)} · ${post.readTime}`}
        image={post.image}
        imageAlt={post.imageAlt}
      />
      <article className="bg-white py-16">
        <Container className="max-w-3xl">
          <div className="space-y-5 text-lg leading-8 text-ink/85">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">Sample article written for this website.</p>
          <Link href="/blog" className="mt-6 inline-block text-sm font-bold uppercase tracking-[0.12em] text-navy hover:text-orange">
            Back to all articles
          </Link>
        </Container>
      </article>
      {related.length > 0 ? (
        <section className="bg-mist py-14">
          <Container>
            <h2 className="font-display text-3xl font-bold uppercase text-navy">More notes</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/blog/${item.slug}`} className="block bg-white p-6 hover:text-orange">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-orange">{item.category}</span>
                    <span className="mt-2 block font-display text-2xl font-bold uppercase text-navy">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </>
  );
}
