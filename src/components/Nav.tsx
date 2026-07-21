"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const links = [
  { label: "Pilates", href: "#pilates" },
  { label: "Estudio", href: "#estudio" },
  { label: "Terapias", href: "#sesiones" },
  { label: "Reservar", href: "#reservar" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled || open
          ? "backdrop-blur-xl bg-[#0b0a08]/85 border-b border-white/5"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-4 md:py-5">
        <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-3 group shrink-0">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-[color:var(--gold)]/60 group-hover:border-[color:var(--gold)] transition" />
            <span className="absolute inset-1 rounded-full border border-[color:var(--gold)]/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
          </span>
          <span className="font-serif text-base md:text-lg tracking-widest uppercase text-[color:var(--ink)]">
            Rafael <span className="text-[color:var(--gold)]">Holos</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-[13px] tracking-[0.22em] uppercase text-[color:var(--ink-mute)]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-[color:var(--ink)] transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#reservar"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/60 px-5 py-2 text-[12px] tracking-[0.22em] uppercase text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[#14110d] transition"
        >
          Reservar
        </a>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
          aria-expanded={open}
          className="md:hidden relative flex flex-col items-end justify-center gap-1.5 h-10 w-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
        >
          <span
            className={cn(
              "block h-px bg-[color:var(--gold)] transition-all",
              open ? "w-5 translate-y-1 rotate-45" : "w-5"
            )}
          />
          <span
            className={cn(
              "block h-px bg-[color:var(--gold)] transition-all",
              open ? "w-5 -translate-y-1 -rotate-45" : "w-3.5"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
            className="md:hidden border-t border-white/10 bg-[#0b0a08]/95 backdrop-blur-xl"
          >
            <ul className="px-5 py-6 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-4 text-[13px] tracking-[0.28em] uppercase text-[color:var(--ink)] hover:bg-white/5 transition"
                  >
                    {l.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </motion.li>
              ))}
              <li className="mt-3">
                <a
                  href="#reservar"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-4 text-[12px] tracking-[0.28em] uppercase text-[#14110d] font-medium"
                >
                  Reservar sesión
                </a>
              </li>
              <li className="mt-4 pt-4 border-t border-white/10 text-center text-[10px] tracking-[0.3em] uppercase text-[color:var(--ink-mute)]">
                Casa Holos · Santo Domingo
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
