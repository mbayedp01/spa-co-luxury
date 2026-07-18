import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { posts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article introuvable" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader
        overline={post.category}
        title={post.title}
        image={post.image}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: post.category }]}
      />
      <article className="py-20 md:py-28">
        <div className="container-lux mx-auto max-w-3xl">
          <Reveal>
            <time className="text-xs uppercase tracking-widest text-or">
              {new Date(post.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <div className="mt-8 flex flex-col gap-6">
              {post.content.map((para, i) => (
                <p
                  key={i}
                  className="font-cormorant text-xl leading-relaxed text-creme/80"
                >
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 flex items-center justify-between border-t border-or/15 pt-8">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-sm uppercase tracking-widest text-creme/60 transition-colors hover:text-or"
            >
              <ArrowLeft size={16} /> Tous les articles
            </Link>
            <Link href="/reservation" className="btn-gold">
              Réserver un soin
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
