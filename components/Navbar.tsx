"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-noir/90 backdrop-blur-md shadow-[0_1px_0_rgba(212,175,55,0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-lux flex h-20 items-center justify-between">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="heading-lux text-lg text-creme md:text-xl">
            SPA <span className="text-or">&amp;</span> CO
          </span>
          <span className="text-[0.6rem] tracking-[0.4em] text-or">
            LUXURY
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group relative text-sm uppercase tracking-widest text-creme/80 transition-colors hover:text-or"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-or transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="/reservation" className="btn-gold">
            Réserver
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="text-creme lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-noir/95 backdrop-blur-md transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[90vh]" : "max-h-0"
        }`}
      >
        <ul className="container-lux flex flex-col gap-6 py-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="heading-lux text-lg text-creme/90 hover:text-or"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/reservation"
              onClick={() => setOpen(false)}
              className="btn-gold w-full"
            >
              Réserver
            </Link>
          </li>
          <li className="text-sm text-creme/50">{site.phone}</li>
        </ul>
      </div>
    </header>
  );
}
