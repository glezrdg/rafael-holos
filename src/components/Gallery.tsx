"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { content } from "@/lib/content";

type Item = {
  src: string;
  caption: string;
  span: string;
};

// Curated selection of new pro shots + a couple of original IG posts for context
const items: Item[] = [
  {
    src: "/gallery/shot-01.jpg",
    caption: "Rafael colgado del trapecio, gongs sinfónicos de fondo. Movimiento y vibración se encuentran.",
    span: "col-span-2 row-span-2 aspect-[4/5]",
  },
  {
    src: "/gallery/shot-06.jpg",
    caption: "El golpe preciso al gong. El silencio que sigue es donde ocurre la sanación.",
    span: "aspect-[3/4]",
  },
  {
    src: "/gallery/shot-03.jpg",
    caption: "Suspensión horizontal entre gongs. El cuerpo aprende otra gravedad.",
    span: "aspect-[3/4]",
  },
  {
    src: "/gallery/shot-04.jpg",
    caption: "Sesión guiada 1:1 en el Cadillac Tower. Precisión biomecánica más presencia consciente.",
    span: "col-span-2 aspect-[16/10]",
  },
  {
    src: "/gallery/shot-05.jpg",
    caption: "Invertido entre dos gongs Meinl. Postura ritual del estudio.",
    span: "aspect-[3/4]",
  },
  {
    src: "/gallery/shot-07.jpg",
    caption: "Ventosas terapéuticas frente a la muralla de gongs. Tradición china aplicada.",
    span: "aspect-[3/4]",
  },
  {
    src: "/gallery/shot-08.jpg",
    caption: "Comunidad Casa Holos. Maestros invitados y noches de ceremonia sonora.",
    span: "col-span-2 aspect-[16/9]",
  },
  // Kept one authentic IG shot for context
  ...(content.posts[2]?.media
    ? [{
        src: content.posts[2].media,
        caption: content.posts[2].caption || "Plenitud, bienestar y prosperidad.",
        span: "col-span-2 aspect-[16/10]",
      }]
    : []),
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="galeria" className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6 mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <div className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--gold)] mb-6">
              — Bitácora
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--ink)] max-w-2xl">
              Momentos donde el <em className="italic text-[color:var(--sand)] not-italic font-light">tiempo se detuvo</em>.
            </h2>
          </motion.div>
          <a
            href={`https://instagram.com/${content.profile.username}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-[12px] tracking-[0.28em] uppercase text-[color:var(--ink-mute)] hover:text-[color:var(--gold)] transition"
          >
            @{content.profile.username}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {items.map((it, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 focus:outline-none focus-visible:border-[color:var(--gold)]",
                it.span,
              )}
            >
              <Image
                src={it.src}
                alt={it.caption}
                fill
                sizes="(max-width: 768px) 45vw, 30vw"
                className="object-cover transition duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a08]/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition" />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--sand)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition duration-500">
                  Ver momento
                </div>
                <div className="h-8 w-8 rounded-full border border-[color:var(--gold)]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H8M17 7v9" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {active !== null && items[active] && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-lg flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-3xl max-h-[85vh] w-full rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/4] max-h-[85vh]">
              <Image
                src={items[active].src}
                alt={items[active].caption}
                fill
                className="object-contain bg-black"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-sm text-[color:var(--ink)] leading-relaxed max-w-2xl">
                {items[active].caption}
              </p>
            </div>
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 h-10 w-10 rounded-full border border-white/20 bg-black/60 flex items-center justify-center hover:bg-[color:var(--gold)] hover:text-[#14110d] transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
