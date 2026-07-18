"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: brancher Resend / Mailchimp / Supabase newsletter table
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="border-y border-or/15 bg-gradient-to-b from-noir to-[#12100a] py-24">
      <div className="container-lux flex flex-col items-center gap-8">
        <SectionTitle
          overline="Newsletter"
          title="Rejoignez le cercle privé"
          subtitle="Offres exclusives, rituels de saison et invitations privées directement dans votre boîte mail."
        />
        <form
          onSubmit={submit}
          className="flex w-full max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            className="flex-1 rounded-full border border-or/30 bg-noir/60 px-6 py-3.5 text-sm text-creme placeholder:text-creme/40 outline-none transition-colors focus:border-or"
          />
          <button type="submit" className="btn-gold">
            {sent ? (
              <>
                <Check size={16} /> Inscrit
              </>
            ) : (
              <>
                <Send size={16} /> S'inscrire
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
