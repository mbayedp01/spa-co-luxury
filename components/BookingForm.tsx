"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  CalendarCheck,
  Clock,
} from "lucide-react";
import {
  borneCategories,
  servicesByCategory,
  formatFCFA,
  type BorneService,
} from "@/lib/borne-catalog";

const employees = [
  "Sans préférence",
  "Awa — Massages",
  "Khady — Soins visage",
  "Sokhna — Onglerie",
  "Bineta — Coiffure",
];

const hours = [
  "09:00", "10:00", "11:00", "12:00",
  "14:00", "15:00", "16:00", "17:00",
  "18:00", "19:00", "20:00",
];

const steps = ["Prestation", "Date & Heure", "Coordonnées", "Confirmation"];

export default function BookingForm() {
  const params = useSearchParams();
  const preselectedName = params.get("service");
  const preselectedPrice = params.get("price");
  const preselectedDuration = params.get("duration");

  const [step, setStep] = useState(0);
  const [category, setCategory] = useState<string | null>(null);
  const [data, setData] = useState({
    serviceName: preselectedName || "",
    servicePrice: preselectedPrice ? Number(preselectedPrice) : undefined,
    serviceDuration: preselectedDuration || "",
    date: "",
    time: "",
    employee: employees[0],
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const today = new Date().toISOString().split("T")[0];

  const set = (k: string, v: string) => setData((d) => ({ ...d, [k]: v }));

  function selectService(s: BorneService) {
    setData((d) => ({
      ...d,
      serviceName: s.name,
      servicePrice: s.price,
      serviceDuration: s.duration,
    }));
  }

  const canNext =
    (step === 0 && data.serviceName) ||
    (step === 1 && data.date && data.time) ||
    (step === 2 && data.name && data.email && data.phone);

  async function submitReservation() {
    setSubmitError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: { name: data.name, phone: data.phone, email: data.email },
          service: data.serviceName,
          price: data.servicePrice,
          duration: data.serviceDuration,
          date: data.date,
          time: data.time,
          employee: data.employee,
          notes: data.notes || undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Erreur");
      setStep(3);
    } catch (e: any) {
      setSubmitError(
        e.message || "Impossible d'envoyer votre demande. Réessayez."
      );
    } finally {
      setSubmitting(false);
    }
  }

  const next = () => {
    if (step === 2) {
      submitReservation();
      return;
    }
    setStep((s) => Math.min(s + 1, 3));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Stepper */}
      <div className="mb-12 flex items-center justify-between">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex w-full items-center">
              <div
                className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-colors ${
                  i <= step
                    ? "border-or bg-or text-noir"
                    : "border-or/30 text-creme/50"
                }`}
              >
                {i < step ? <Check size={16} /> : i + 1}
              </div>
            </div>
            <span
              className={`hidden text-[0.65rem] uppercase tracking-widest sm:block ${
                i <= step ? "text-or" : "text-creme/40"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-or/15 bg-noir/40 p-6 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${step}-${category ?? "none"}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            {/* Step 0 - Prestation (catégorie puis prestation exacte) */}
            {step === 0 && !category && (
              <div className="flex flex-col gap-5">
                <h3 className="heading-lux text-xl text-creme">
                  Choisissez une catégorie
                </h3>
                {data.serviceName && (
                  <button
                    onClick={() => set("serviceName", data.serviceName)}
                    className="flex items-center justify-between rounded-2xl border border-or bg-or/10 p-4 text-left"
                  >
                    <span className="text-sm text-creme">
                      Sélection actuelle : {data.serviceName}
                    </span>
                    {data.servicePrice && (
                      <span className="text-xs text-or">
                        {formatFCFA(data.servicePrice)}
                      </span>
                    )}
                  </button>
                )}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {borneCategories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setCategory(cat.slug)}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-or/20 p-4 text-center transition-all hover:border-or/60 hover:bg-or/5"
                    >
                      <span className="text-2xl">{cat.icon}</span>
                      <span className="text-xs text-creme">{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 0 && category && (
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <h3 className="heading-lux text-xl text-creme">
                    {borneCategories.find((c) => c.slug === category)?.name}
                  </h3>
                  <button
                    onClick={() => setCategory(null)}
                    className="text-xs uppercase tracking-widest text-creme/60 hover:text-or"
                  >
                    Changer de catégorie
                  </button>
                </div>
                <div className="flex max-h-[420px] flex-col gap-3 overflow-y-auto pr-1">
                  {servicesByCategory(category).map((s) => (
                    <button
                      key={s.id}
                      onClick={() => selectService(s)}
                      className={`flex items-center justify-between gap-4 rounded-2xl border p-4 text-left transition-all ${
                        data.serviceName === s.name
                          ? "border-or bg-or/10"
                          : "border-or/20 hover:border-or/50"
                      }`}
                    >
                      <div className="flex-1">
                        <p className="text-sm text-creme">{s.name}</p>
                        <p className="mt-1 text-xs text-creme/50">
                          {s.description}
                        </p>
                        <p className="mt-1 flex items-center gap-1 text-[0.65rem] uppercase tracking-widest text-creme/40">
                          <Clock size={11} /> {s.duration}
                        </p>
                      </div>
                      <span className="shrink-0 text-sm text-or">
                        {formatFCFA(s.price)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1 - Date & heure */}
            {step === 1 && (
              <div className="flex flex-col gap-6">
                <h3 className="heading-lux text-xl text-creme">
                  Date, heure & thérapeute
                </h3>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-creme/60">
                    Date
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={data.date}
                    onChange={(e) => set("date", e.target.value)}
                    className="rounded-xl border border-or/30 bg-noir/60 px-4 py-3 text-sm text-creme outline-none focus:border-or [color-scheme:dark]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-creme/60">
                    Heure
                  </label>
                  <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
                    {hours.map((h) => (
                      <button
                        key={h}
                        onClick={() => set("time", h)}
                        className={`rounded-lg border py-2 text-xs transition-all ${
                          data.time === h
                            ? "border-or bg-or text-noir"
                            : "border-or/20 text-creme/70 hover:border-or"
                        }`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-creme/60">
                    Thérapeute
                  </label>
                  <select
                    value={data.employee}
                    onChange={(e) => set("employee", e.target.value)}
                    className="rounded-xl border border-or/30 bg-noir/60 px-4 py-3 text-sm text-creme outline-none focus:border-or"
                  >
                    {employees.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 2 - Coordonnées */}
            {step === 2 && (
              <div className="flex flex-col gap-5">
                <h3 className="heading-lux text-xl text-creme">
                  Vos coordonnées
                </h3>
                <input
                  placeholder="Nom complet"
                  value={data.name}
                  onChange={(e) => set("name", e.target.value)}
                  className="rounded-xl border border-or/30 bg-noir/60 px-4 py-3 text-sm text-creme placeholder:text-creme/40 outline-none focus:border-or"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={data.email}
                  onChange={(e) => set("email", e.target.value)}
                  className="rounded-xl border border-or/30 bg-noir/60 px-4 py-3 text-sm text-creme placeholder:text-creme/40 outline-none focus:border-or"
                />
                <input
                  placeholder="Téléphone / WhatsApp"
                  value={data.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className="rounded-xl border border-or/30 bg-noir/60 px-4 py-3 text-sm text-creme placeholder:text-creme/40 outline-none focus:border-or"
                />
                <textarea
                  placeholder="Une demande particulière ? (optionnel)"
                  value={data.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  rows={3}
                  className="rounded-xl border border-or/30 bg-noir/60 px-4 py-3 text-sm text-creme placeholder:text-creme/40 outline-none focus:border-or"
                />
                {submitError && (
                  <p className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                    {submitError}
                  </p>
                )}
              </div>
            )}

            {/* Step 3 - Confirmation */}
            {step === 3 && (
              <div className="flex flex-col items-center gap-6 py-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-or/15 text-or">
                  <CalendarCheck size={32} />
                </div>
                <h3 className="heading-lux text-2xl text-creme">
                  Demande envoyée !
                </h3>
                <p className="max-w-md font-cormorant text-lg text-creme/70">
                  Merci {data.name || ""}. Nous avons bien reçu votre demande de
                  réservation. Notre équipe vous confirmera votre créneau par
                  email et WhatsApp dans les plus brefs délais.
                </p>
                <div className="w-full max-w-sm rounded-2xl border border-or/20 bg-noir/60 p-6 text-left text-sm">
                  <Row label="Prestation" value={data.serviceName || "—"} />
                  {data.servicePrice && (
                    <Row label="Tarif" value={formatFCFA(data.servicePrice)} />
                  )}
                  <Row label="Date" value={data.date || "—"} />
                  <Row label="Heure" value={data.time || "—"} />
                  <Row label="Thérapeute" value={data.employee} />
                </div>
                <p className="text-xs text-creme/40">
                  Le paiement (Wave, Orange Money, carte bancaire) sera proposé à
                  la confirmation.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nav buttons */}
        {step < 3 && (
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={back}
              disabled={step === 0 || submitting}
              className="flex items-center gap-1 text-sm text-creme/60 transition-colors hover:text-or disabled:opacity-30"
            >
              <ChevronLeft size={16} /> Retour
            </button>
            <button
              onClick={next}
              disabled={!canNext || submitting}
              className="btn-gold disabled:cursor-not-allowed disabled:opacity-40"
            >
              {submitting ? "Envoi en cours…" : step === 2 ? "Confirmer" : "Continuer"}
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-or/10 py-2 last:border-0">
      <span className="text-creme/50">{label}</span>
      <span className="text-creme">{value}</span>
    </div>
  );
}
