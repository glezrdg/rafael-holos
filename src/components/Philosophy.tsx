"use client";

import { motion } from "framer-motion";
import { Enso } from "./Enso";

const principles = [
  {
    kanji: "音",
    label: "Sonido",
    body: "El gong, los cuencos y la voz son puentes vibracionales que reordenan lo que la mente no puede alcanzar por lógica.",
  },
  {
    kanji: "空",
    label: "Vacío",
    body: "Sanar no es añadir; es soltar la carga acumulada. Cada sesión abre un espacio donde el sistema nervioso vuelve a respirar.",
  },
  {
    kanji: "道",
    label: "Camino",
    body: "Movimiento + vibración + intención = sanación. Una fórmula ancestral, aplicada con precisión moderna.",
  },
];

export function Philosophy() {
  return (
    <section id="filosofia" className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
          <Enso size={720} strokeWidth={1.2} className="spin-slow" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <div className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--gold)] mb-6">
            — Filosofía
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--ink)]">
            La medicina más antigua es una que
            <em className="italic text-[color:var(--sand)] not-italic font-light"> aún no se escucha</em> con los oídos.
          </h2>
          <p className="mt-6 md:mt-8 text-[15px] md:text-lg text-[color:var(--ink-mute)] max-w-2xl leading-relaxed">
            <span className="text-[color:var(--ink)] font-serif italic">Neurosonicidad</span> es
            el estudio de cómo el sonido interactúa con el sistema nervioso e induce plasticidad cerebral.
            Nuestro trabajo une tradición oriental — cuencos, gong, Reiki, Tuina — con neurociencia contemporánea.
          </p>
        </motion.div>

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-5 md:gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 md:p-8 backdrop-blur-sm hover:border-[color:var(--gold)]/40 transition"
            >
              <div className="absolute top-5 right-5 md:top-6 md:right-6 font-serif text-5xl md:text-6xl text-[color:var(--gold)]/25 group-hover:text-[color:var(--gold)]/60 transition">
                {p.kanji}
              </div>
              <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--gold)] mb-4">
                0{i + 1}
              </div>
              <div className="font-serif text-2xl text-[color:var(--ink)] mb-4">
                {p.label}
              </div>
              <p className="text-[color:var(--ink-mute)] leading-relaxed text-[15px]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
