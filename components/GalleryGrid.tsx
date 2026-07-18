"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = { src: string; category: string };

const items: Item[] = [
  { src: "/images/accueil/IMAGEAC13.webp", category: "Détente" },
  { src: "/images/accueil/IMAGEAC1.webp", category: "Massages" },
  { src: "/images/accueil/IMAGEAC12.webp", category: "Massages" },
  { src: "/images/accueil/IMAGEAC3.webp", category: "Visage" },
  { src: "/images/accueil/IMAGEAC4.webp", category: "Visage" },
  { src: "/images/accueil/IMAGEAC5.webp", category: "Hammam" },
  { src: "/images/accueil/IMAGEAC6.webp", category: "Onglerie" },
  { src: "/images/accueil/IMAGEAC7.webp", category: "Onglerie" },
  { src: "/images/accueil/IMAGEAC8.webp", category: "Coiffure" },
  { src: "/images/accueil/IMAGEAC9.webp", category: "Minceur" },
  { src: "/images/accueil/IMAGEAC10.webp", category: "Cils" },
  { src: "/images/apropos/Imageaprop1.webp", category: "Détente" },
  { src: "/images/apropos/Imageaprop2.webp", category: "Détente" },
  { src: "/images/apropos/Imageaprop3.webp", category: "Détente" },
  { src: "/images/apropos/Imageaprop4.webp", category: "Détente" },
];

const categories = ["Tout", ...Array.from(new Set(items.map((i) => i.category)))];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("Tout");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    filter === "Tout" ? items : items.filter((i) => i.category === filter);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition-all ${
              filter === c
                ? "border-or bg-or text-noir"
                : "border-or/30 text-creme/70 hover:border-or hover:text-or"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        <AnimatePresence>
          {filtered.map((item, i) => (
            <motion.button
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              onClick={() => setLightbox(item.src)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl"
            >
              <Image
                src={item.src}
                alt={item.category}
                width={600}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-noir/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <span className="p-4 text-xs uppercase tracking-widest text-or">
                  {item.category}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] flex cursor-zoom-out items-center justify-center bg-noir/95 p-6"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative h-[80vh] w-full max-w-4xl"
            >
              <Image
                src={lightbox}
                alt="Aperçu"
                fill
                className="rounded-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
