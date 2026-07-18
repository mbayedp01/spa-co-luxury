import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/accueil/IMAGEAC13.webp"
          alt="Spa & Co Luxury"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/60 via-noir/30 to-noir" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_center,rgba(11,11,11,0.7)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="container-lux relative z-10 flex flex-col items-center text-center [text-shadow:0_2px_30px_rgba(0,0,0,0.7)]">
        <span
          className="mb-6 animate-hero-in text-xs uppercase tracking-[0.5em] text-or"
          style={{ animationDelay: "0.1s" }}
        >
          Spa de luxe · Dakar
        </span>

        <h1
          className="heading-lux animate-hero-in text-4xl leading-tight text-creme sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.25s" }}
        >
          SPA <span className="text-gradient-gold">&amp;</span> CO
          <br />
          <span className="text-gradient-gold">LUXURY</span>
        </h1>

        <p
          className="mt-6 max-w-2xl animate-hero-in font-cormorant text-2xl italic text-creme/85 md:text-3xl"
          style={{ animationDelay: "0.4s" }}
        >
          {site.tagline}
        </p>

        <div
          className="mt-10 flex animate-hero-in flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "0.55s" }}
        >
          <Link href="/reservation" className="btn-gold">
            Réserver
          </Link>
          <Link href="/prestations" className="btn-outline">
            Découvrir
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-or">
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Défiler</span>
        <ChevronDown className="animate-bounce" size={18} />
      </div>
    </section>
  );
}
