"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "@/lib/content";

const sessions = [
  {
    title: "Baño de Gong",
    subtitle: "Meditación Sonora",
    duration: "60 min",
    price: "RD$ 2,500",
    body: "Inmersión colectiva en las frecuencias del gong sinfónico. El sistema nervioso entra en coherencia y libera tensión acumulada.",
    tag: "Grupal",
    image: content.posts[2]?.media,
  },
  {
    title: "Pilates + Gongs",
    subtitle: "Movimiento & Vibración",
    duration: "75 min",
    price: "RD$ 3,200",
    body: "Reformer Pilates combinado con vibraciones somáticas. Alineación estructural y liberación fascial al mismo tiempo.",
    tag: "Signature",
    image: content.posts[4]?.media,
  },
  {
    title: "Sesión Personal",
    subtitle: "Cuencos · Reiki · Biomagnetismo",
    duration: "90 min",
    price: "RD$ 4,800",
    body: "Uno a uno. Diagnóstico energético, aplicación de imanes y trabajo profundo con cuencos tibetanos sobre el cuerpo.",
    tag: "1:1",
    image: content.posts[5]?.media,
  },
];

export function Sessions() {
  return (
    <section id="sesiones" className="relative py-32 md:py-40 bg-[color:var(--bg-2)]">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0b0a08] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl"
          >
            <div className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--gold)] mb-6">
              — Sesiones
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--ink)]">
              Tres puertas hacia el mismo <em className="italic text-[color:var(--sand)] not-italic font-light">silencio</em>.
            </h2>
          </motion.div>
          <p className="text-[color:var(--ink-mute)] max-w-sm text-[15px]">
            Cada práctica está diseñada para un estado. Elige la puerta; el camino se abre solo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sessions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-black/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {s.image && (
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 400px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a08] via-[#0b0a08]/50 to-transparent" />
                <div className="absolute top-4 left-4 rounded-full border border-[color:var(--gold)]/60 bg-black/40 backdrop-blur px-3 py-1 text-[10px] tracking-[0.28em] uppercase text-[color:var(--gold)]">
                  {s.tag}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--sand)] mb-2">
                    {s.subtitle}
                  </div>
                  <h3 className="font-serif text-3xl text-[color:var(--ink)]">{s.title}</h3>
                </div>
              </div>
              <div className="p-6 border-t border-white/10">
                <p className="text-[color:var(--ink-mute)] text-[14.5px] leading-relaxed mb-6">
                  {s.body}
                </p>
                <div className="flex items-center justify-between text-[11px] tracking-[0.28em] uppercase">
                  <span className="text-[color:var(--ink-mute)]">{s.duration}</span>
                  <span className="font-serif not-italic text-[color:var(--gold)] text-lg tracking-normal normal-case">
                    {s.price}
                  </span>
                </div>
                <a
                  href="#reservar"
                  className="mt-6 flex items-center justify-between rounded-full border border-white/15 px-5 py-3 text-[11px] tracking-[0.28em] uppercase text-[color:var(--ink)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition"
                >
                  Reservar
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
