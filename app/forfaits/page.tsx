import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Star, Gift, Users, User } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { forfaits } from "@/lib/data";

export const metadata: Metadata = {
  title: "Forfaits & Cartes cadeaux",
  description:
    "Forfaits bien-être individuels et duo, cartes cadeaux personnalisées. Offrez ou offrez-vous l'expérience SPA & CO LUXURY.",
};

const giftCards = [
  { amount: "25 000", label: "Découverte" },
  { amount: "50 000", label: "Sérénité" },
  { amount: "100 000", label: "Prestige" },
];

export default function ForfaitsPage() {
  return (
    <>
      <PageHeader
        overline="Forfaits"
        title="Rituels & Cartes cadeaux"
        image="/images/accueil/IMAGEAC1.webp"
        crumbs={[{ label: "Forfaits" }]}
      />

      {/* Forfaits */}
      <section className="py-20 md:py-28">
        <div className="container-lux flex flex-col gap-14">
          <SectionTitle
            overline="Nos forfaits"
            title="Composez votre parenthèse"
            subtitle="Des expériences pensées pour une évasion complète, seul·e ou à deux."
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {forfaits.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.1}>
                <div
                  className={`relative flex h-full flex-col gap-6 rounded-3xl border p-8 ${
                    f.featured
                      ? "border-or bg-gradient-to-b from-or/10 to-transparent shadow-[0_0_40px_rgba(212,175,55,0.15)]"
                      : "border-or/15 bg-noir/40"
                  }`}
                >
                  {f.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-or px-4 py-1 text-[0.65rem] uppercase tracking-widest text-noir">
                      Le plus prisé
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    {f.name.includes("Duo") ? (
                      <Users className="text-or" size={22} />
                    ) : (
                      <User className="text-or" size={22} />
                    )}
                    <div>
                      <h3 className="heading-lux text-2xl text-creme">
                        {f.name}
                      </h3>
                      <p className="subheading-lux text-lg">{f.tagline}</p>
                    </div>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="heading-lux text-4xl text-or">
                      {f.price}
                    </span>
                    <span className="mb-1 text-sm text-creme/60">
                      FCFA · {f.duration}
                    </span>
                  </div>
                  <ul className="flex flex-1 flex-col gap-3">
                    {f.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-sm text-creme/70"
                      >
                        <Star size={14} className="mt-1 shrink-0 text-or" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/reservation"
                    className={f.featured ? "btn-gold" : "btn-outline"}
                  >
                    Réserver
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cartes cadeaux */}
      <section className="border-t border-or/15 bg-[#100e09] py-24">
        <div className="container-lux grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-or/20">
              <Image
                src="/images/accueil/IMAGEAC13.webp"
                alt="Carte cadeau"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-noir/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                <Gift className="text-or" size={40} />
                <span className="heading-lux text-2xl text-creme">
                  Carte cadeau
                </span>
                <span className="subheading-lux text-lg">SPA &amp; CO LUXURY</span>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <SectionTitle
              center={false}
              overline="Cartes cadeaux"
              title="Offrez du bien-être"
            />
            <Reveal delay={0.1}>
              <p className="font-cormorant text-xl leading-relaxed text-creme/70">
                Un anniversaire, une attention, un merci… Offrez une carte cadeau
                personnalisée, valable sur l'ensemble de nos prestations. Reçue
                par email avec un code unique et un QR code.
              </p>
            </Reveal>
            <div className="grid grid-cols-3 gap-4">
              {giftCards.map((g, i) => (
                <Reveal key={g.amount} delay={0.15 + i * 0.08}>
                  <div className="flex flex-col items-center gap-1 rounded-2xl border border-or/20 bg-noir/40 p-5 text-center transition-colors hover:border-or">
                    <span className="heading-lux text-xl text-or">
                      {g.amount}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-widest text-creme/50">
                      FCFA
                    </span>
                    <span className="mt-1 text-xs text-creme/70">{g.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <Link href="/contact" className="btn-gold w-fit">
                Commander une carte
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
