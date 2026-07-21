"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Therapy = {
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  body: string;
  glyph: React.ReactNode;
};

const glyph = {
  gong: (
    <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
      <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="20" r="9" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <circle cx="20" cy="20" r="3.5" fill="currentColor" opacity="0.6" />
      <line x1="20" y1="4" x2="20" y2="1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  bowl: (
    <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
      <path d="M6 18h28c0 8-6.3 14-14 14S6 26 6 18Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14 14c2-2 8-2 12 0M18 10c0-2 4-2 4 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  needle: (
    <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <path d="M8 32L32 8M28 8h4v4M12 32H8v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  hand: (
    <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
      <path d="M14 20V10a2 2 0 1 1 4 0v8m0 0v-4a2 2 0 1 1 4 0v6m0-4a2 2 0 1 1 4 0v6m0-2a2 2 0 1 1 4 0v6c0 5-4 8-8 8s-8-2-8-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  aura: (
    <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
      <path d="M12 26c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="20" cy="14" r="4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 20c0-8 6.3-14 14-14s14 6 14 14" stroke="currentColor" strokeWidth="1.1" opacity="0.5" strokeDasharray="2 3" />
    </svg>
  ),
  chakra: (
    <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
      <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.4" />
      {[0, 45, 90, 135].map((r) => (
        <g key={r} transform={`rotate(${r} 20 20)`}>
          <ellipse cx="20" cy="20" rx="14" ry="4" stroke="currentColor" strokeWidth="1.1" opacity="0.5" />
        </g>
      ))}
    </svg>
  ),
  lotus: (
    <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
      <path d="M20 6c-3 5-3 10 0 14 3-4 3-9 0-14ZM8 14c2 5 6 8 12 8-2-6-6-9-12-8Zm24 0c-6-1-10 2-12 8 6 0 10-3 12-8ZM6 22c4 4 10 6 14 6-2 6-8 8-14 6-1-4 0-8 0-12Zm28 0c1 4 0 8 0 12-6 2-12 0-14-6 4 0 10-2 14-6Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  ),
};

const therapies: Therapy[] = [
  {
    title: "Baño de Gong",
    subtitle: "Sonoterapia grupal",
    duration: "60 min",
    price: "RD$ 3,500",
    body: "Inmersión colectiva en las frecuencias del gong sinfónico. El sistema nervioso entra en coherencia y libera tensión acumulada.",
    glyph: glyph.gong,
  },
  {
    title: "Sound Healing",
    subtitle: "Individual · Cuencos tibetanos",
    duration: "75 min",
    price: "RD$ 5,800",
    body: "Sesión personal con cuencos apoyados sobre el cuerpo. La vibración recorre tejidos, huesos y campo energético.",
    glyph: glyph.bowl,
  },
  {
    title: "Acupuntura Sonora",
    subtitle: "Puntos meridianos + frecuencia",
    duration: "75 min",
    price: "RD$ 6,900",
    body: "Estimulación precisa de puntos de acupuntura con diapasones calibrados. Sin aguja. Un desbloqueo profundo del Qi.",
    glyph: glyph.needle,
  },
  {
    title: "Masaje Tuina",
    subtitle: "Terapia manual china",
    duration: "60 min",
    price: "RD$ 5,500",
    body: "Manipulación de meridianos y puntos energéticos. Alivia dolor crónico, restaura circulación y libera estancamientos.",
    glyph: glyph.hand,
  },
  {
    title: "Masaje Energético",
    subtitle: "Reiki + toque terapéutico",
    duration: "60 min",
    price: "RD$ 5,200",
    body: "Trabajo sobre el campo áurico. Redistribuye energía vital, disuelve nudos emocionales y calma la mente.",
    glyph: glyph.aura,
  },
  {
    title: "Armonización de Chakras",
    subtitle: "7 centros · vibración + cristal",
    duration: "90 min",
    price: "RD$ 7,500",
    body: "Alineación de los siete centros energéticos con cuencos afinados por chakra y aplicación de cristales de resonancia.",
    glyph: glyph.chakra,
  },
];

const signature = {
  title: "Conexión con tu Ser",
  subtitle: "Ritual de integración · 1:1",
  duration: "2 horas",
  price: "RD$ 9,800",
  body:
    "El ritual más profundo del estudio: sesión personal que integra diagnóstico energético, sonoterapia, masaje Tuina, armonización de chakras y una conversación guiada. Diseñada para quienes buscan un antes y un después.",
};

export function Therapies() {
  return (
    <section id="sesiones" className="relative py-20 md:py-32 lg:py-40 bg-[color:var(--bg-2)]">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0b0a08] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl"
          >
            <div className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--gold)] mb-6">
              — Terapias Holísticas
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--ink)]">
              Siete caminos <em className="italic text-[color:var(--sand)] not-italic font-light">para volver a ti</em>.
            </h2>
          </motion.div>
          <p className="text-[color:var(--ink-mute)] max-w-sm text-[15px] leading-relaxed">
            Sonido, tacto y energía. Cada terapia es una llave distinta para el mismo umbral: <span className="text-[color:var(--ink)]">tu propio centro</span>.
          </p>
        </div>

        {/* Signature card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-[28px] md:rounded-[36px] border border-[color:var(--gold)]/40 bg-gradient-to-br from-[color:var(--gold)]/12 via-white/[0.03] to-transparent p-6 md:p-10 lg:p-12 mb-6"
        >
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--gold)]/50 bg-black/30 px-4 py-1.5 text-[10px] tracking-[0.32em] uppercase text-[color:var(--gold)] mb-5 md:mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] animate-pulse" />
                Ritual Signature
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-[color:var(--ink)]">
                {signature.title}
              </h3>
              <div className="mt-3 text-[11px] tracking-[0.32em] uppercase text-[color:var(--sand)]">
                {signature.subtitle}
              </div>
              <p className="mt-5 md:mt-6 text-[color:var(--ink-mute)] text-[15px] md:text-[16px] leading-relaxed max-w-xl">
                {signature.body}
              </p>

              <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-5 md:gap-6">
                <div>
                  <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--ink-mute)]">Duración</div>
                  <div className="font-serif text-xl md:text-2xl text-[color:var(--ink)] mt-1">{signature.duration}</div>
                </div>
                <div className="h-8 w-px bg-white/15" />
                <div>
                  <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--gold)]">Inversión</div>
                  <div className="font-serif text-xl md:text-2xl text-[color:var(--ink)] mt-1">{signature.price}</div>
                </div>
                <a
                  href="#reservar"
                  className="w-full sm:w-auto sm:ml-auto group inline-flex items-center justify-center gap-3 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[11px] tracking-[0.28em] uppercase text-[#14110d] font-medium hover:bg-[color:var(--sand)] transition"
                >
                  Reservar ritual
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition group-hover:translate-x-1">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-[20px] md:rounded-[24px] overflow-hidden border border-white/10 order-1 lg:order-2">
              <Image
                src="/gallery/shot-04.jpg"
                alt="Conexión con tu Ser · sesión guiada"
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Therapies grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {therapies.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7 hover:border-[color:var(--gold)]/50 hover:bg-white/[0.06] transition"
            >
              <div className="flex items-start justify-between mb-5 md:mb-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/8 text-[color:var(--gold)]">
                  {t.glyph}
                </span>
                <span className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--ink-mute)]">
                  0{i + 1}
                </span>
              </div>
              <div className="font-serif text-xl md:text-2xl text-[color:var(--ink)] leading-tight">
                {t.title}
              </div>
              <div className="mt-1.5 text-[10px] md:text-[11px] tracking-[0.26em] md:tracking-[0.28em] uppercase text-[color:var(--sand)]">
                {t.subtitle}
              </div>
              <p className="mt-4 md:mt-5 text-[color:var(--ink-mute)] text-[14px] leading-relaxed sm:min-h-[80px]">
                {t.body}
              </p>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--ink-mute)]">
                    {t.duration}
                  </span>
                  <span className="font-serif text-xl text-[color:var(--gold)] mt-0.5">{t.price}</span>
                </div>
                <a
                  href="#reservar"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[color:var(--ink)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
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
