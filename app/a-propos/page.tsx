import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Leaf, Gem, HandHeart } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Notre histoire, notre équipe et notre philosophie. Découvrez l'âme de SPA & CO LUXURY, un spa de luxe au cœur de Dakar.",
};

const philosophie = [
  {
    icon: Gem,
    title: "Notre philosophie",
    text: "Le luxe véritable réside dans le détail et l'attention. Nous cultivons l'art du bien-être comme une discipline exigeante.",
  },
  {
    icon: Leaf,
    title: "Nos produits",
    text: "Des marques d'exception et des actifs naturels sélectionnés pour leur efficacité et leur pureté.",
  },
  {
    icon: HandHeart,
    title: "Notre équipe",
    text: "Des thérapeutes et esthéticiennes passionnées, formées aux techniques les plus pointues.",
  },
  {
    icon: Heart,
    title: "Nos valeurs",
    text: "Bienveillance, discrétion et excellence guident chacun de nos gestes au quotidien.",
  },
];

export default function AproposPage() {
  return (
    <>
      <PageHeader
        overline="Notre maison"
        title="À propos"
        image="/images/apropos/Imageaprop1.webp"
        crumbs={[{ label: "À propos" }]}
      />

      {/* Histoire */}
      <section className="py-20 md:py-28">
        <div className="container-lux grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/apropos/Imageaprop2.webp"
                alt="Notre histoire"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="flex flex-col gap-6">
            <SectionTitle
              center={false}
              overline="Notre histoire"
              title="Née d'une passion pour le beau"
            />
            <Reveal delay={0.1}>
              <p className="font-cormorant text-xl leading-relaxed text-creme/70">
                SPA &amp; CO LUXURY est né d'un rêve : offrir à Dakar une adresse
                de bien-être digne des plus grandes capitales. Un lieu où
                l'hospitalité africaine rencontre le raffinement des rituels du
                monde.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-sm leading-relaxed text-creme/60">
                Depuis notre ouverture, nous avons accueilli des milliers de
                clients en quête de sérénité. Chaque visite est une invitation à
                ralentir, à respirer et à se reconnecter à l'essentiel. Notre
                promesse : une expérience inoubliable, à chaque instant.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Valeurs / Philosophie */}
      <section className="border-y border-or/15 bg-[#100e09] py-24">
        <div className="container-lux flex flex-col gap-14">
          <SectionTitle
            overline="Notre ADN"
            title="Ce qui nous anime"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {philosophie.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-or/10 bg-noir/40 p-8 transition-colors hover:border-or/40">
                  <p.icon className="text-or" size={28} />
                  <h3 className="heading-lux text-lg text-creme">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-creme/60">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notre spa - galerie */}
      <section className="py-24">
        <div className="container-lux flex flex-col gap-14">
          <SectionTitle overline="Notre spa" title="Un cadre d'exception" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              "/images/apropos/Imageaprop1.webp",
              "/images/apropos/Imageaprop3.webp",
              "/images/apropos/Imageaprop4.webp",
            ].map((src, i) => (
              <Reveal key={src} delay={i * 0.1}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="Notre spa"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="flex justify-center">
            <Link href="/reservation" className="btn-gold">
              Réserver votre visite
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
