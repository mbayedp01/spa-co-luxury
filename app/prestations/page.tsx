import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import SectionTitle from "@/components/SectionTitle";
import CatalogAccordion from "@/components/CatalogAccordion";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Prestations & Tarifs",
  description:
    "La carte complète et les tarifs officiels de SPA & CO LUXURY : massages, soins du visage, hammam, onglerie, coiffure, minceur, épilations et forfaits — tous les prix, en toute transparence.",
};

export default function PrestationsPage() {
  return (
    <>
      <PageHeader
        overline="Nos prestations"
        title="La carte des soins"
        image="/images/accueil/IMAGEAC3.webp"
        crumbs={[{ label: "Prestations" }]}
      />

      {/* Coups de cœur */}
      <section className="py-20 md:py-24">
        <div className="container-lux flex flex-col gap-14">
          <SectionTitle
            overline="Coups de cœur"
            title="Nos rituels signature"
            subtitle="Une sélection de prestations phares, présentées en détail."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Carte complète et tarifs officiels */}
      <section className="border-t border-or/15 bg-[#100e09] py-20 md:py-24">
        <div className="container-lux flex flex-col gap-14">
          <SectionTitle
            overline="Tarifs officiels"
            title="La carte complète"
            subtitle="Toutes nos prestations, tous les tarifs, en toute transparence — pour réserver sans hésitation."
          />
          <CatalogAccordion />
        </div>
      </section>
    </>
  );
}
