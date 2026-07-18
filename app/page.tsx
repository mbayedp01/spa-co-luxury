import Image from "next/image";
import Link from "next/link";
import { Sparkles, Gift, Quote, Star } from "lucide-react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import Newsletter from "@/components/Newsletter";
import { services } from "@/lib/services";
import { forfaits, testimonials, values } from "@/lib/data";

const galleryPreview = [
  "/images/accueil/IMAGEAC1.webp",
  "/images/accueil/IMAGEAC5.webp",
  "/images/accueil/IMAGEAC8.webp",
  "/images/accueil/IMAGEAC7.webp",
  "/images/accueil/IMAGEAC11.webp",
  "/images/accueil/IMAGEAC4.webp",
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Présentation */}
      <section className="py-24 md:py-32">
        <div className="container-lux grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/apropos/Imageaprop1.webp"
                alt="Notre spa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-or/30 bg-noir/90 px-8 py-6 backdrop-blur md:block">
              <p className="heading-lux text-4xl text-or">10+</p>
              <p className="text-xs uppercase tracking-widest text-creme/60">
                Années d'expertise
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <SectionTitle
              center={false}
              overline="Bienvenue"
              title="Un écrin dédié à votre bien-être"
            />
            <Reveal delay={0.1}>
              <p className="font-cormorant text-xl leading-relaxed text-creme/70">
                Au cœur de Dakar, SPA &amp; CO LUXURY vous ouvre les portes d'un
                univers où le temps s'arrête. Chaque détail a été pensé pour
                éveiller vos sens : lumières tamisées, senteurs envoûtantes et
                gestes experts se conjuguent pour une évasion totale.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-sm leading-relaxed text-creme/60">
                Nos thérapeutes et esthéticiennes, formées aux plus hauts
                standards, vous accompagnent dans un parcours de soins
                personnalisé. Massages, rituels du visage, hammam traditionnel
                ou remise en beauté : offrez-vous l'excellence.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link href="/a-propos" className="btn-outline mt-2 w-fit">
                Notre histoire
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-20 md:py-28">
        <div className="container-lux flex flex-col gap-14">
          <SectionTitle
            overline="Nos prestations"
            title="L'art du soin d'exception"
            subtitle="Une carte de rituels premium pour sublimer le corps et l'esprit."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="border-y border-or/15 bg-[#100e09] py-24">
        <div className="container-lux flex flex-col gap-14">
          <SectionTitle
            overline="Pourquoi nous choisir"
            title="L'excellence dans chaque détail"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-or/10 bg-noir/40 p-8 transition-colors hover:border-or/40">
                  <Sparkles className="text-or" size={26} />
                  <h3 className="heading-lux text-lg text-creme">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-creme/60">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie preview */}
      <section className="py-24">
        <div className="container-lux flex flex-col gap-14">
          <SectionTitle
            overline="Galerie"
            title="Une invitation au voyage"
            subtitle="Découvrez l'atmosphère unique de notre maison."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryPreview.map((src, i) => (
              <Reveal
                key={src}
                delay={(i % 3) * 0.08}
                className={i === 0 ? "col-span-2 row-span-2 md:col-span-1" : ""}
              >
                <div className="group relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="Galerie Spa & Co"
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-noir/0 transition-colors group-hover:bg-noir/20" />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="flex justify-center">
            <Link href="/galerie" className="btn-outline">
              Voir la galerie
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Forfaits */}
      <section className="border-y border-or/15 bg-[#100e09] py-24">
        <div className="container-lux flex flex-col gap-14">
          <SectionTitle
            overline="Forfaits"
            title="Des rituels d'exception"
            subtitle="Composez votre parenthèse de bien-être, seul·e ou à deux."
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
                  <div className="flex flex-col gap-1">
                    <h3 className="heading-lux text-2xl text-creme">
                      {f.name}
                    </h3>
                    <p className="subheading-lux text-lg">{f.tagline}</p>
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

      {/* Avis */}
      <section className="py-24">
        <div className="container-lux flex flex-col gap-14">
          <SectionTitle
            overline="Témoignages"
            title="Elles nous ont fait confiance"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 0.1}>
                <figure className="flex h-full flex-col gap-4 rounded-2xl border border-or/10 bg-noir/40 p-8">
                  <Quote className="text-or/60" size={28} />
                  <blockquote className="font-cormorant text-xl italic leading-relaxed text-creme/80">
                    “{t.text}”
                  </blockquote>
                  <div className="mt-auto flex items-center gap-1 text-or">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <figcaption className="text-sm">
                    <span className="text-creme">{t.name}</span>
                    <span className="text-creme/50"> · {t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Carte cadeau */}
      <section className="py-12">
        <div className="container-lux">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-or/20">
              <Image
                src="/images/accueil/IMAGEAC1.webp"
                alt="Carte cadeau"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-noir/75" />
              <div className="relative flex flex-col items-center gap-6 px-6 py-20 text-center">
                <Gift className="text-or" size={40} />
                <h2 className="heading-lux text-3xl text-creme md:text-4xl">
                  Offrez une carte cadeau
                </h2>
                <p className="max-w-xl font-cormorant text-xl text-creme/70">
                  Le présent parfait pour célébrer ceux que vous aimez. Une
                  expérience de bien-être inoubliable, à offrir en un instant.
                </p>
                <Link href="/forfaits" className="btn-gold">
                  Offrir une carte
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
