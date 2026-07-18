"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
    >
      <Link
        href={`/prestations/${service.slug}`}
        className="group relative block overflow-hidden rounded-2xl border border-or/10 bg-noir"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />
          <span className="absolute left-5 top-5 rounded-full border border-or/40 bg-noir/50 px-3 py-1 text-[0.65rem] uppercase tracking-widest text-or backdrop-blur">
            {service.category}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
          <h3 className="heading-lux text-xl text-creme">{service.name}</h3>
          <p className="font-cormorant text-lg leading-snug text-creme/70">
            {service.short}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm text-or">{service.price}</span>
            <span className="flex items-center gap-1 text-xs uppercase tracking-widest text-creme/70 transition-colors group-hover:text-or">
              Découvrir
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
