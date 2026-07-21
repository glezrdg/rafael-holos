"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    n: "01",
    title: "Alineación estructural",
    body: "El Reformer Allegro corrige patrones posturales heredados con precisión biomecánica.",
  },
  {
    n: "02",
    title: "Activación fascial",
    body: "Cada resistencia se calibra para despertar cadenas musculares dormidas sin impacto articular.",
  },
  {
    n: "03",
    title: "Integración somática",
    body: "Movimiento consciente + respiración + vibración: el sistema nervioso reordena mientras el cuerpo trabaja.",
  },
];

export function PilatesFlagship() {
  const pilatesImg = "/gallery/shot-02.jpg";

  return (
    <section id="pilates" className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,74,0.18),transparent_60%)] blob" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(122,59,40,0.22),transparent_60%)] blob" style={{ animationDelay: "-8s" }} />
        <div className="grain opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div className="flex items-center gap-4">
            <span className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--gold)]">
              — Punta de lanza
            </span>
            <span className="h-px w-16 bg-[color:var(--gold)]/40" />
          </div>
          <span className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--ink-mute)]">
            Estudio · Casa Holos
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-20 items-center">
          {/* Left: Image with layered plate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-[36px] overflow-hidden border border-white/10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
              {pilatesImg && (
                <Image
                  src={pilatesImg}
                  alt="Pilates Allegro Tower en Casa Holos"
                  fill
                  sizes="(max-width: 1024px) 90vw, 600px"
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0a08] via-transparent to-[color:var(--gold)]/10" />
            </div>

            {/* Floating spec plate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="absolute -top-6 -right-4 md:-right-10 rounded-2xl bg-[#14110d]/85 backdrop-blur-xl border border-[color:var(--gold)]/30 p-5 pr-7 shadow-2xl"
            >
              <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--gold)]">Equipment</div>
              <div className="mt-1 font-serif text-2xl text-[color:var(--ink)]">Allegro Tower</div>
              <div className="mt-3 flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-[color:var(--ink-mute)]">
                <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" />
                Reformer Certificado
              </div>
            </motion.div>

            {/* Floating vibration plate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="absolute -bottom-6 -left-4 md:-left-10 rounded-2xl bg-[#14110d]/85 backdrop-blur-xl border border-white/10 p-5 shadow-2xl flex items-center gap-4"
            >
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--gold)]/15">
                <span className="absolute inset-0 rounded-full bg-[color:var(--gold)]/25 animate-ping" />
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="relative">
                  <path d="M12 3v18M8 7v10M4 10v4M16 7v10M20 10v4" stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </span>
              <div>
                <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--ink-mute)]">Signature</div>
                <div className="font-serif text-base text-[color:var(--ink)]">Pilates + Gongs</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] md:leading-[1.02] text-[color:var(--ink)]"
            >
              Un estudio de Pilates que <em className="italic text-[color:var(--gold)] not-italic font-light">no se parece</em> a ningún otro.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-6 md:mt-8 text-[15px] md:text-lg text-[color:var(--ink-mute)] leading-relaxed max-w-xl"
            >
              El <span className="text-[color:var(--ink)] font-medium">Allegro Tower</span> es el corazón del estudio: el Reformer más versátil del mundo Pilates, integrado a una filosofía que combina fuerza, respiración y frecuencia.
            </motion.p>

            <div className="mt-10 space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.25 + i * 0.12 }}
                  className="group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-[color:var(--gold)]/40 hover:bg-white/[0.05] transition"
                >
                  <span className="font-serif text-2xl text-[color:var(--gold)] shrink-0 w-10">{f.n}</span>
                  <div>
                    <div className="font-serif text-xl text-[color:var(--ink)] mb-1">{f.title}</div>
                    <div className="text-[color:var(--ink-mute)] text-[14.5px] leading-relaxed">{f.body}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pricing pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 rounded-3xl border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 p-5 md:p-6"
            >
              <div className="flex-1">
                <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--gold)] mb-1">Mensualidad · 8 clases</div>
                <div className="font-serif text-2xl md:text-3xl text-[color:var(--ink)]">
                  RD$ 12,500<span className="text-base md:text-lg text-[color:var(--ink-mute)] font-sans not-italic"> / mes</span>
                </div>
                <div className="text-[12px] text-[color:var(--ink-mute)] mt-1">Clase suelta · RD$ 2,200</div>
              </div>
              <a
                href="#reservar"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[12px] tracking-[0.28em] uppercase text-[#14110d] font-medium hover:bg-[color:var(--sand)] transition whitespace-nowrap"
              >
                Reservar clase
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition group-hover:translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
