import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import SectionTitle from "@/components/SectionTitle";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Prestations",
  description:
    "Massages, soins du visage, hammam, onglerie, coiffure, minceur : découvrez la carte des prestations premium de SPA & CO LUXURY.",
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
      <section className="py-20 md:py-28">
        <div className="container-lux flex flex-col gap-14">
          <SectionTitle
            overline="Rituels premium"
            title="Choisissez votre évasion"
            subtitle="Chaque prestation ouvre sa page dédiée : bienfaits, durée, tarifs et réservation."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
