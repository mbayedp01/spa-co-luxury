"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Home,
  Minus,
  Plus,
  ShoppingBag,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";
import {
  borneCategories,
  borneServices,
  formatFCFA,
  servicesByCategory,
  type BorneService,
} from "@/lib/borne-catalog";

type Step =
  | "welcome"
  | "categories"
  | "services"
  | "cart"
  | "checkout"
  | "success";

type CartItem = {
  service: BorneService;
  qty: number;
};

const IDLE_TIMEOUT_MS = 60_000; // retour auto à l'accueil après 60s d'inactivité

// Slides de l'écran d'accueil (arrière-plan diaporama immersif)
const heroSlides = [
  "/images/accueil/IMAGEAC13.webp",
  "/images/accueil/IMAGEAC12.webp",
  "/images/accueil/IMAGEAC5.webp",
  "/images/accueil/IMAGEAC3.webp",
  "/images/accueil/IMAGEAC1.webp",
  "/images/accueil/IMAGEAC8.webp",
];

export default function BornePage() {
  const [step, setStep] = useState<Step>("welcome");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [detail, setDetail] = useState<BorneService | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customer, setCustomer] = useState({ name: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  // --- Diaporama de l'accueil
  useEffect(() => {
    if (step !== "welcome") return;
    const t = setInterval(
      () => setSlideIndex((i) => (i + 1) % heroSlides.length),
      5000
    );
    return () => clearInterval(t);
  }, [step]);

  // --- Retour automatique après inactivité
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetIdle = useCallback(() => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    if (step === "welcome" || step === "success") return;
    idleTimer.current = setTimeout(() => {
      resetKiosk();
    }, IDLE_TIMEOUT_MS);
  }, [step]);

  useEffect(() => {
    resetIdle();
    const events = ["mousedown", "touchstart", "keydown", "scroll"];
    events.forEach((e) => window.addEventListener(e, resetIdle));
    return () => {
      events.forEach((e) => window.removeEventListener(e, resetIdle));
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [resetIdle]);

  function resetKiosk() {
    setStep("welcome");
    setSelectedCategory(null);
    setDetail(null);
    setCart([]);
    setCustomer({ name: "", phone: "" });
    setError(null);
    setOrderId(null);
  }

  // --- Cart helpers
  const total = useMemo(
    () => cart.reduce((s, i) => s + i.service.price * i.qty, 0),
    [cart]
  );
  const itemCount = useMemo(
    () => cart.reduce((s, i) => s + i.qty, 0),
    [cart]
  );

  function addToCart(service: BorneService) {
    setCart((prev) => {
      const found = prev.find((i) => i.service.id === service.id);
      if (found) {
        return prev.map((i) =>
          i.service.id === service.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { service, qty: 1 }];
    });
    setDetail(null);
  }

  function updateQty(id: string, delta: number) {
    setCart((prev) =>
      prev
        .map((i) =>
          i.service.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i
        )
        .filter((i) => i.qty > 0)
    );
  }

  function removeItem(id: string) {
    setCart((prev) => prev.filter((i) => i.service.id !== id));
  }

  async function submitOrder() {
    setError(null);
    if (!customer.name.trim() || !customer.phone.trim()) {
      setError("Merci de renseigner votre nom et votre téléphone.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/borne/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer,
          items: cart.map((c) => ({
            id: c.service.id,
            name: c.service.name,
            price: c.service.price,
            qty: c.qty,
          })),
          total,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Erreur");
      setOrderId(data.order.id);
      // Fallback WhatsApp : si l'envoi automatique n'est pas configuré,
      // on ouvre wa.me pour que l'hôtesse confirme d'un tap.
      if (data.whatsapp && !data.whatsapp.sent && data.whatsapp.waMeUrl) {
        window.open(data.whatsapp.waMeUrl, "_blank", "noopener");
      }
      setStep("success");
      // Retour auto à l'accueil après 30s sur l'écran de confirmation
      setTimeout(() => resetKiosk(), 30_000);
    } catch (e: any) {
      setError(e.message || "Impossible d'envoyer votre demande.");
    } finally {
      setSubmitting(false);
    }
  }

  const currentCategory = borneCategories.find(
    (c) => c.slug === selectedCategory
  );
  const currentServices = selectedCategory
    ? servicesByCategory(selectedCategory)
    : [];

  return (
    <div className="relative h-full w-full font-poppins">
      <AnimatePresence mode="wait">
        {step === "welcome" && (
          <Welcome key="welcome" slideIndex={slideIndex} onStart={() => setStep("categories")} />
        )}

        {step === "categories" && (
          <motion.div
            key="categories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex h-full flex-col"
          >
            <TopBar
              title="Choisissez une catégorie"
              subtitle="Composez votre expérience bien-être"
              onHome={resetKiosk}
              itemCount={itemCount}
              onCart={() => setStep("cart")}
            />
            <div className="flex-1 overflow-y-auto px-10 pb-12">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
                {borneCategories.map((cat, i) => (
                  <motion.button
                    key={cat.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      setStep("services");
                    }}
                    className="group relative aspect-square overflow-hidden rounded-3xl border border-or/20 bg-noir text-left transition-all hover:border-or"
                  >
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="25vw"
                      className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-transparent" />
                    <div className="relative flex h-full flex-col justify-end gap-2 p-6">
                      <span className="text-5xl">{cat.icon}</span>
                      <h3 className="heading-lux text-xl leading-tight text-creme">
                        {cat.name}
                      </h3>
                      <p className="font-cormorant text-lg italic text-creme/70">
                        {cat.description}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {step === "services" && currentCategory && (
          <motion.div
            key="services"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="flex h-full flex-col"
          >
            <TopBar
              title={currentCategory.name}
              subtitle={currentCategory.description}
              backLabel="Catégories"
              onBack={() => setStep("categories")}
              onHome={resetKiosk}
              itemCount={itemCount}
              onCart={() => setStep("cart")}
            />
            <div className="flex-1 overflow-y-auto px-10 pb-12">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {currentServices.map((s, i) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex flex-col overflow-hidden rounded-3xl border border-or/15 bg-[#141310]"
                  >
                    <div className="relative h-56 w-full">
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        sizes="33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <h3 className="heading-lux text-xl text-creme">{s.name}</h3>
                      <p className="text-sm leading-relaxed text-creme/70">
                        {s.description}
                      </p>
                      <div className="mt-auto flex items-end justify-between pt-4">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-creme/50">
                            {s.duration}
                          </p>
                          <p className="heading-lux text-2xl text-or">
                            {formatFCFA(s.price)}
                          </p>
                        </div>
                        <button
                          onClick={() => addToCart(s)}
                          className="btn-gold !px-6 !py-3"
                        >
                          <Plus size={18} /> Ajouter
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {step === "cart" && (
          <Cart
            key="cart"
            cart={cart}
            total={total}
            onBack={() =>
              setStep(selectedCategory ? "services" : "categories")
            }
            onHome={resetKiosk}
            onUpdate={updateQty}
            onRemove={removeItem}
            onCheckout={() => setStep("checkout")}
          />
        )}

        {step === "checkout" && (
          <Checkout
            key="checkout"
            cart={cart}
            total={total}
            customer={customer}
            setCustomer={setCustomer}
            error={error}
            submitting={submitting}
            onBack={() => setStep("cart")}
            onSubmit={submitOrder}
          />
        )}

        {step === "success" && (
          <Success key="success" orderId={orderId} onHome={resetKiosk} />
        )}
      </AnimatePresence>

      {/* Modal fiche prestation */}
      <AnimatePresence>
        {detail && (
          <ServiceModal
            key={detail.id}
            service={detail}
            onClose={() => setDetail(null)}
            onAdd={() => addToCart(detail)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// ÉCRAN D'ACCUEIL
// ============================================================
function Welcome({
  slideIndex,
  onStart,
}: {
  slideIndex: number;
  onStart: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      onClick={onStart}
    >
      {/* Diaporama d'arrière-plan */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[slideIndex]}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-noir/50 via-noir/40 to-noir/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,11,11,0.6)_80%)]" />

      <div className="relative z-10 flex flex-col items-center px-8 text-center [text-shadow:0_2px_30px_rgba(0,0,0,0.85)]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-6 flex flex-col items-center leading-none"
        >
          <span className="heading-lux text-3xl text-creme md:text-4xl">
            SPA <span className="text-or">&amp;</span> CO
          </span>
          <span className="mt-2 text-xs tracking-[0.6em] text-or md:text-sm">
            LUXURY
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="heading-lux max-w-5xl text-4xl leading-tight text-creme sm:text-6xl lg:text-7xl"
        >
          Bienvenue chez <span className="text-gradient-gold">SPA &amp; CO</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-6 max-w-3xl font-cormorant text-2xl italic text-creme/85 md:text-3xl"
        >
          Prenez soin de vous, vous le méritez.
          <br />
          Découvrez nos prestations et composez votre expérience bien-être en
          quelques instants.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          onClick={onStart}
          className="group mt-14 flex items-center gap-3 rounded-full bg-or px-14 py-6 text-lg font-medium uppercase tracking-widest text-noir shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all hover:scale-105 hover:bg-or-clair md:text-xl"
        >
          <Sparkles size={22} />
          Touchez l'écran pour commencer
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 2, duration: 3, repeat: Infinity }}
          className="mt-16 text-xs uppercase tracking-[0.4em] text-or/70"
        >
          — Écran tactile —
        </motion.div>
      </div>
    </motion.div>
  );
}

// ============================================================
// BARRE SUPÉRIEURE (retour, accueil, panier)
// ============================================================
function TopBar({
  title,
  subtitle,
  onHome,
  onBack,
  backLabel,
  itemCount,
  onCart,
}: {
  title: string;
  subtitle?: string;
  onHome: () => void;
  onBack?: () => void;
  backLabel?: string;
  itemCount: number;
  onCart: () => void;
}) {
  return (
    <div className="flex items-center justify-between border-b border-or/15 px-10 py-6">
      <div className="flex items-center gap-4">
        {onBack ? (
          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-full border border-or/30 px-5 py-3 text-sm uppercase tracking-widest text-creme/80 transition-colors hover:border-or hover:text-or"
          >
            <ArrowLeft size={18} /> {backLabel ?? "Retour"}
          </button>
        ) : (
          <button
            onClick={onHome}
            className="flex items-center gap-2 rounded-full border border-or/30 px-5 py-3 text-sm uppercase tracking-widest text-creme/80 transition-colors hover:border-or hover:text-or"
          >
            <Home size={18} /> Accueil
          </button>
        )}
        <div>
          <h2 className="heading-lux text-2xl text-creme">{title}</h2>
          {subtitle && (
            <p className="font-cormorant text-lg italic text-creme/60">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <button
        onClick={onCart}
        className="relative flex items-center gap-3 rounded-full bg-or px-6 py-3 text-sm font-medium uppercase tracking-widest text-noir transition-all hover:bg-or-clair"
      >
        <ShoppingBag size={20} />
        Ma sélection
        {itemCount > 0 && (
          <span className="flex h-7 min-w-[1.75rem] items-center justify-center rounded-full bg-noir px-2 text-sm text-or">
            {itemCount}
          </span>
        )}
      </button>
    </div>
  );
}

// ============================================================
// MODAL FICHE PRESTATION
// ============================================================
function ServiceModal({
  service,
  onClose,
  onAdd,
}: {
  service: BorneService;
  onClose: () => void;
  onAdd: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-noir/80 px-10 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-or/30 bg-[#141310]"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-noir/70 text-creme"
        >
          <X size={22} />
        </button>
        <div className="relative h-80 w-full">
          <Image src={service.image} alt={service.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141310] to-transparent" />
        </div>
        <div className="flex flex-col gap-4 p-8">
          <h2 className="heading-lux text-3xl text-creme">{service.name}</h2>
          <p className="font-cormorant text-xl text-creme/80">
            {service.description}
          </p>
          <div className="flex items-center justify-between border-t border-or/15 pt-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-creme/50">
                Durée · {service.duration}
              </p>
              <p className="heading-lux text-3xl text-or">
                {formatFCFA(service.price)}
              </p>
            </div>
            <button onClick={onAdd} className="btn-gold !px-8 !py-4">
              <Plus size={20} /> Ajouter
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================================
// PANIER
// ============================================================
function Cart({
  cart,
  total,
  onBack,
  onHome,
  onUpdate,
  onRemove,
  onCheckout,
}: {
  cart: CartItem[];
  total: number;
  onBack: () => void;
  onHome: () => void;
  onUpdate: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      className="flex h-full flex-col"
    >
      <TopBar
        title="Ma sélection"
        subtitle="Vérifiez votre panier avant de valider"
        onBack={onBack}
        backLabel="Continuer"
        onHome={onHome}
        itemCount={cart.reduce((s, i) => s + i.qty, 0)}
        onCart={() => {}}
      />
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-10 py-8">
        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
            <ShoppingBag size={72} className="text-or/40" />
            <p className="heading-lux text-2xl text-creme/70">
              Votre panier est vide
            </p>
            <button onClick={onBack} className="btn-outline">
              Découvrir les prestations
            </button>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.service.id}
                className="flex items-center gap-5 rounded-2xl border border-or/15 bg-[#141310] p-4"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={item.service.image}
                    alt={item.service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="heading-lux text-lg text-creme">
                    {item.service.name}
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-creme/50">
                    {item.service.duration}
                  </p>
                  <p className="mt-1 text-or">
                    {formatFCFA(item.service.price)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onUpdate(item.service.id, -1)}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-or/30 text-creme hover:border-or hover:text-or"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-8 text-center text-xl text-creme">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => onUpdate(item.service.id, 1)}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-or/30 text-creme hover:border-or hover:text-or"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <div className="w-40 text-right">
                  <p className="heading-lux text-lg text-or">
                    {formatFCFA(item.service.price * item.qty)}
                  </p>
                </div>
                <button
                  onClick={() => onRemove(item.service.id)}
                  className="flex h-12 w-12 items-center justify-center rounded-full text-creme/50 hover:bg-red-500/10 hover:text-red-400"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </>
        )}
      </div>

      {cart.length > 0 && (
        <div className="flex items-center justify-between border-t border-or/20 bg-[#0f0d09] px-10 py-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-creme/50">
              Total
            </p>
            <p className="heading-lux text-4xl text-or">{formatFCFA(total)}</p>
          </div>
          <button onClick={onCheckout} className="btn-gold !px-10 !py-5 !text-base">
            Valider ma demande <ChevronRight size={22} />
          </button>
        </div>
      )}
    </motion.div>
  );
}

// ============================================================
// CHECKOUT
// ============================================================
function Checkout({
  cart,
  total,
  customer,
  setCustomer,
  error,
  submitting,
  onBack,
  onSubmit,
}: {
  cart: CartItem[];
  total: number;
  customer: { name: string; phone: string };
  setCustomer: React.Dispatch<
    React.SetStateAction<{ name: string; phone: string }>
  >;
  error: string | null;
  submitting: boolean;
  onBack: () => void;
  onSubmit: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      className="flex h-full flex-col"
    >
      <TopBar
        title="Vos coordonnées"
        subtitle="Un dernier pas avant l'accueil à la réception"
        onBack={onBack}
        backLabel="Panier"
        onHome={onBack}
        itemCount={cart.reduce((s, i) => s + i.qty, 0)}
        onCart={onBack}
      />
      <div className="grid flex-1 grid-cols-1 gap-10 overflow-y-auto px-10 py-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h3 className="heading-lux text-xl text-creme">Merci de renseigner :</h3>
          <label className="flex flex-col gap-3">
            <span className="text-sm uppercase tracking-widest text-creme/60">
              Nom et prénom
            </span>
            <input
              type="text"
              value={customer.name}
              onChange={(e) =>
                setCustomer((c) => ({ ...c, name: e.target.value }))
              }
              placeholder="Ex : Awa Ndiaye"
              className="rounded-2xl border border-or/30 bg-noir/60 px-6 py-5 text-lg text-creme outline-none focus:border-or"
            />
          </label>
          <label className="flex flex-col gap-3">
            <span className="text-sm uppercase tracking-widest text-creme/60">
              Téléphone
            </span>
            <input
              type="tel"
              value={customer.phone}
              onChange={(e) =>
                setCustomer((c) => ({ ...c, phone: e.target.value }))
              }
              placeholder="+221 77 000 00 00"
              className="rounded-2xl border border-or/30 bg-noir/60 px-6 py-5 text-lg text-creme outline-none focus:border-or"
            />
          </label>
          {error && (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
              {error}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4 rounded-3xl border border-or/20 bg-[#141310] p-8">
          <h3 className="heading-lux text-xl text-creme">Récapitulatif</h3>
          <ul className="flex flex-col divide-y divide-or/10">
            {cart.map((i) => (
              <li
                key={i.service.id}
                className="flex items-center justify-between py-3 text-sm"
              >
                <span className="text-creme/80">
                  {i.qty}× {i.service.name}
                </span>
                <span className="text-or">
                  {formatFCFA(i.service.price * i.qty)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center justify-between border-t border-or/20 pt-4">
            <span className="text-xs uppercase tracking-widest text-creme/60">
              Total
            </span>
            <span className="heading-lux text-3xl text-or">
              {formatFCFA(total)}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-or/20 bg-[#0f0d09] px-10 py-6">
        <button
          onClick={onSubmit}
          disabled={submitting}
          className="btn-gold !w-full !py-5 !text-base disabled:opacity-60"
        >
          {submitting ? "Envoi en cours…" : "Envoyer ma demande à la réception"}
          <ChevronRight size={22} />
        </button>
      </div>
    </motion.div>
  );
}

// ============================================================
// SUCCÈS
// ============================================================
function Success({
  orderId,
  onHome,
}: {
  orderId: string | null;
  onHome: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-full w-full flex-col items-center justify-center px-10 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
          delay: 0.2,
        }}
        className="flex h-32 w-32 items-center justify-center rounded-full bg-or/15"
      >
        <Check className="text-or" size={72} />
      </motion.div>
      <h1 className="heading-lux mt-10 text-4xl text-creme md:text-5xl">
        Demande envoyée !
      </h1>
      <p className="mt-6 max-w-2xl font-cormorant text-2xl italic text-creme/80">
        Merci pour votre confiance. Votre sélection a été transmise à la
        réception. Une hôtesse va vous accueillir dans un instant.
      </p>
      {orderId && (
        <p className="mt-4 text-xs uppercase tracking-[0.4em] text-or/70">
          Réf. {orderId}
        </p>
      )}
      <button onClick={onHome} className="btn-outline mt-12">
        Retour à l'accueil
      </button>
    </motion.div>
  );
}
