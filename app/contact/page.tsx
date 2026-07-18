import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez SPA & CO LUXURY à Dakar : téléphone, WhatsApp, email, horaires et localisation. Nous sommes à votre écoute.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        overline="Contact"
        title="Nous contacter"
        image="/images/contact/Imageaprop1.webp"
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-20 md:py-28">
        <div className="container-lux grid gap-14 lg:grid-cols-2">
          {/* Infos */}
          <div className="flex flex-col gap-8">
            <SectionTitle
              center={false}
              overline="À votre écoute"
              title="Prenons contact"
            />
            <Reveal delay={0.1}>
              <p className="font-cormorant text-xl leading-relaxed text-creme/70">
                Une question, une demande particulière ou l'envie d'organiser un
                moment sur mesure ? Notre équipe vous répond avec plaisir.
              </p>
            </Reveal>

            <div className="flex flex-col gap-4">
              <InfoRow icon={MapPin} label="Adresse" value={site.address} />
              <InfoRow
                icon={Phone}
                label="Téléphone"
                value={site.phone}
                href={`tel:${site.phone}`}
              />
              <InfoRow
                icon={MessageCircle}
                label="WhatsApp"
                value="Discuter maintenant"
                href={`https://wa.me/${site.whatsapp}`}
              />
              <InfoRow
                icon={Mail}
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
            </div>

            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-or/15 bg-noir/40 p-6">
                <div className="mb-4 flex items-center gap-2 text-or">
                  <Clock size={18} />
                  <span className="text-xs uppercase tracking-widest">
                    Horaires d'ouverture
                  </span>
                </div>
                <ul className="flex flex-col gap-2 text-sm">
                  {site.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between border-b border-or/10 pb-2 text-creme/70 last:border-0"
                    >
                      <span>{h.day}</span>
                      <span className="text-creme">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-or/15 bg-noir/40 p-6 md:p-10">
              <h3 className="heading-lux mb-6 text-xl text-creme">
                Écrivez-nous
              </h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="container-lux">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-or/15">
              <iframe
                title="Localisation SPA & CO LUXURY"
                src="https://www.google.com/maps?q=Almadies%20Dakar%20Senegal&output=embed"
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-or/15 bg-noir/40 p-5 transition-colors hover:border-or/40">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-or/10 text-or">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-creme/50">
          {label}
        </p>
        <p className="text-sm text-creme">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
