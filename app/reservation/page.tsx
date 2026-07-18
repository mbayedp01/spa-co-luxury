import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Réservation",
  description:
    "Réservez votre soin en ligne chez SPA & CO LUXURY : choisissez votre prestation, votre date, votre thérapeute et confirmez en quelques clics.",
};

export default function ReservationPage() {
  return (
    <>
      <PageHeader
        overline="Réservation"
        title="Réservez votre soin"
        image="/images/apropos/Imageaprop1.webp"
        crumbs={[{ label: "Réservation" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-lux flex flex-col gap-14">
          <SectionTitle
            overline="En quelques clics"
            title="Votre rendez-vous bien-être"
            subtitle="Un parcours simple et fluide pour réserver votre parenthèse de sérénité."
          />
          <Suspense
            fallback={
              <div className="text-center text-creme/50">Chargement…</div>
            }
          >
            <BookingForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
