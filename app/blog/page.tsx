import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conseils beauté, bien-être et rituels : le journal de SPA & CO LUXURY pour prendre soin de vous au quotidien.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        overline="Le journal"
        title="Conseils & Bien-être"
        image="/images/accueil/IMAGEAC4.webp"
        crumbs={[{ label: "Blog" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-lux flex flex-col gap-14">
          <SectionTitle
            overline="Notre blog"
            title="Inspirations & rituels"
            subtitle="Nos experts partagent leurs conseils pour prolonger l'expérience chez vous."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.1}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-or/10 bg-noir/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-or/40 bg-noir/60 px-3 py-1 text-[0.65rem] uppercase tracking-widest text-or">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <time className="text-xs uppercase tracking-widest text-creme/40">
                      {new Date(p.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <h3 className="heading-lux text-lg leading-snug text-creme">
                      {p.title}
                    </h3>
                    <p className="font-cormorant text-lg text-creme/60">
                      {p.excerpt}
                    </p>
                    <span className="mt-auto flex items-center gap-1 text-xs uppercase tracking-widest text-or">
                      Lire l'article
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
