import Link from "next/link";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="border-t border-or/15 bg-noir">
      <div className="container-lux grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col leading-none">
            <span className="heading-lux text-xl text-creme">
              SPA <span className="text-or">&amp;</span> CO
            </span>
            <span className="text-[0.6rem] tracking-[0.4em] text-or">
              LUXURY
            </span>
          </div>
          <p className="max-w-xs font-cormorant text-lg text-creme/60">
            {site.tagline}
          </p>
          <div className="mt-2 flex gap-4">
            <a
              href={site.socials.instagram}
              aria-label="Instagram"
              className="text-creme/60 transition-colors hover:text-or"
            >
              <Instagram size={20} />
            </a>
            <a
              href={site.socials.facebook}
              aria-label="Facebook"
              className="text-creme/60 transition-colors hover:text-or"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-or">
            Navigation
          </h4>
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-creme/70 transition-colors hover:text-or"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-or">
            Prestations
          </h4>
          <ul className="flex flex-col gap-3">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/prestations/${s.slug}`}
                  className="text-sm text-creme/70 transition-colors hover:text-or"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-or">
            Contact
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-creme/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-or" />
              {site.address}
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-or" />
              <a href={`tel:${site.phone}`} className="hover:text-or">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-or" />
              <a href={`mailto:${site.email}`} className="hover:text-or">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-or/10">
        <div className="container-lux flex flex-col items-center justify-between gap-3 py-6 text-xs text-creme/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Tous droits réservés.
          </p>
          <p>Conçu comme un écrin — Dakar · Paris · Dubaï</p>
        </div>
      </div>
    </footer>
  );
}
