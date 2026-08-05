"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, ArrowRight } from "lucide-react";
import {
  borneCategories,
  servicesByCategory,
  formatFCFA,
} from "@/lib/borne-catalog";

// Affiche la carte tarifaire COMPLÈTE et officielle (126 prestations,
// 13 catégories) telle qu'utilisée par la borne, pour que le client
// voie exactement le même prix quel que soit le canal de réservation.
export default function CatalogAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>(
    borneCategories[0]?.slug ?? null
  );

  return (
    <div className="flex flex-col gap-4">
      {borneCategories.map((cat) => {
        const items = servicesByCategory(cat.slug);
        const isOpen = openCategory === cat.slug;
        return (
          <div
            key={cat.slug}
            className="overflow-hidden rounded-2xl border border-or/15 bg-noir/40"
          >
            <button
              onClick={() => setOpenCategory(isOpen ? null : cat.slug)}
              className="flex w-full items-center gap-5 p-5 text-left transition-colors hover:bg-noir/60 sm:p-6"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="heading-lux text-lg text-creme sm:text-xl">
                    {cat.name}
                  </h3>
                </div>
                <p className="mt-1 font-cormorant text-base italic text-creme/60 sm:text-lg">
                  {cat.description} · {items.length} prestations
                </p>
              </div>
              <ChevronDown
                size={22}
                className={`shrink-0 text-or transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="flex flex-col divide-y divide-or/10 border-t border-or/10">
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="flex flex-col gap-2 p-5 transition-colors hover:bg-noir/30 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                      >
                        <div className="flex-1">
                          <p className="text-sm text-creme sm:text-base">
                            {item.name}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-creme/50 sm:text-sm">
                            {item.description}
                          </p>
                          <p className="mt-1.5 flex items-center gap-1.5 text-[0.7rem] uppercase tracking-widest text-creme/40">
                            <Clock size={12} /> {item.duration}
                          </p>
                        </div>
                        <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:gap-2">
                          <span className="heading-lux text-base text-or sm:text-lg">
                            {formatFCFA(item.price)}
                          </span>
                          <Link
                            href={`/reservation?service=${encodeURIComponent(
                              item.name
                            )}&price=${item.price}&duration=${encodeURIComponent(
                              item.duration
                            )}`}
                            className="flex items-center gap-1 text-xs uppercase tracking-widest text-creme/60 transition-colors hover:text-or"
                          >
                            Réserver <ArrowRight size={12} />
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
