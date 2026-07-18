import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Plongez dans l'univers de SPA & CO LUXURY à travers notre galerie : ambiances, soins et instants de bien-être.",
};

export default function GaleriePage() {
  return (
    <>
      <PageHeader
        overline="Galerie"
        title="Instants de sérénité"
        image="/images/accueil/IMAGEAC5.webp"
        crumbs={[{ label: "Galerie" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-lux flex flex-col gap-14">
          <SectionTitle
            overline="Univers"
            title="L'expérience en images"
            subtitle="Explorez nos espaces et nos rituels par catégorie."
          />
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
