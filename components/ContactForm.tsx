"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: brancher Supabase / Resend
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          required
          placeholder="Nom complet"
          value={form.name}
          onChange={(e) => set("name", e.target.value)}
          className="rounded-xl border border-or/30 bg-noir/60 px-4 py-3 text-sm text-creme placeholder:text-creme/40 outline-none focus:border-or"
        />
        <input
          placeholder="Téléphone"
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
          className="rounded-xl border border-or/30 bg-noir/60 px-4 py-3 text-sm text-creme placeholder:text-creme/40 outline-none focus:border-or"
        />
      </div>
      <input
        required
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => set("email", e.target.value)}
        className="rounded-xl border border-or/30 bg-noir/60 px-4 py-3 text-sm text-creme placeholder:text-creme/40 outline-none focus:border-or"
      />
      <textarea
        required
        rows={5}
        placeholder="Votre message"
        value={form.message}
        onChange={(e) => set("message", e.target.value)}
        className="rounded-xl border border-or/30 bg-noir/60 px-4 py-3 text-sm text-creme placeholder:text-creme/40 outline-none focus:border-or"
      />
      <button type="submit" className="btn-gold w-fit">
        {sent ? (
          <>
            <Check size={16} /> Message envoyé
          </>
        ) : (
          <>
            <Send size={16} /> Envoyer
          </>
        )}
      </button>
    </form>
  );
}
