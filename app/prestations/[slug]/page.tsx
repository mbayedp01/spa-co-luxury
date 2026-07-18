import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Tag, Check, Star, Quote } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { services, getService } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Prestation introuvable" };
  return {
    title: service.name,
    description: service.short,
    openGraph: {
      title: `${service.name} — ${site.name}`,
      description: service.short,
      images: [service.image],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        overline={service.category}
        title={service.name}
        image={service.image}
        crumbs={[
          { label: "Prestations", href: "/prestations" },
          { label: service.name },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-lux grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.35em] text-or">
                {service.category}
              </span>
              <h2 className="heading-lux mt-3 text-3xl text-creme md:text-4xl">
                {service.name}
              </h2>
              <div className="gold-line mt-5" />
            </Reveal>

            <Reveal delay={0.1}>
              <p className="font-cormorant text-xl leading-relaxed text-creme/75">
                {service.description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 rounded-full border border-or/20 bg-noir/40 px-5 py-3">
                  <Clock size={18} className="text-or" />
                  <span className="text-sm text-creme/80">
                    {service.duration}
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-full border border-or/20 bg-noir/40 px-5 py-3">
                  <Tag size={18} className="text-or" />
                  <span className="text-sm text-creme/80">{service.price}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-4">
                <h3 className="heading-lux text-lg text-creme">Les bienfaits</h3>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-creme/70"
                    >
                      <Check size={18} className="mt-0.5 shrink-0 text-or" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/reservation?service=${service.slug}`}
                  className="btn-gold"
                >
                  Réserver ce soin
                </Link>
                <Link href="/contact" className="btn-outline">
                  Poser une question
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Avis */}
      <section className="border-y border-or/15 bg-[#100e09] py-20">
        <div className="container-lux flex max-w-3xl flex-col items-center gap-6 text-center">
          <Quote className="text-or/60" size={32} />
          <blockquote className="font-cormorant text-2xl italic leading-relaxed text-creme/85 md:text-3xl">
            “Une prestation d'une qualité rare. Le savoir-faire de l'équipe fait
            toute la différence — on ressort transformé·e.”
          </blockquote>
          <div className="flex items-center gap-1 text-or">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="text-sm text-creme/60">Cliente vérifiée</p>
        </div>
      </section>

      {/* Prestations similaires */}
      <section className="py-20 md:py-28">
        <div className="container-lux flex flex-col gap-14">
          <h2 className="heading-lux text-center text-3xl text-creme">
            Prestations similaires
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
