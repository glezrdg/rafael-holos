"use client";

import { motion, type Variants } from "framer-motion";
import { Enso } from "./Enso";

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.12, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden min-h-[100svh] flex items-center pt-24 pb-16 md:pb-0">
      {/* Ambient gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-32 w-[420px] md:w-[560px] h-[420px] md:h-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,74,0.35),transparent_60%)] blob" />
        <div className="absolute bottom-0 -right-32 w-[480px] md:w-[640px] h-[480px] md:h-[640px] rounded-full bg-[radial-gradient(circle_at_center,rgba(122,59,40,0.35),transparent_65%)] blob" style={{ animationDelay: "-6s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0)_0%,#0b0a08_75%)]" />
        <div className="grain" />
      </div>

      {/* Enso circle */}
      <div className="absolute right-[-6rem] top-1/2 -translate-y-1/2 hidden lg:block opacity-70 pointer-events-none">
        <Enso size={620} strokeWidth={2} delay={0.6} className="spin-slow" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-5 md:px-10 grid lg:grid-cols-[1.05fr_1fr] gap-10 md:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fade}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3.5 py-1.5 text-[10px] md:text-[11px] tracking-[0.28em] md:tracking-[0.32em] uppercase text-[color:var(--ink-mute)] mb-6 md:mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] animate-pulse" />
            Sonoterapia · Neurosonicidad · Reiki
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fade}
            className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1] md:leading-[0.98] tracking-tight text-[color:var(--ink)]"
          >
            El sonido que <em className="italic text-[color:var(--gold)] not-italic font-light">recuerda</em>
            <br />
            al alma su origen.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fade}
            className="mt-6 md:mt-8 max-w-xl text-[15px] md:text-lg text-[color:var(--ink-mute)] leading-relaxed"
          >
            Baños de gong, cuencos tibetanos y prácticas somáticas guiadas por{" "}
            <span className="text-[color:var(--ink)]">Rafael Cristóbal Álvarez</span>.
            Una experiencia diseñada para reordenar el sistema nervioso y devolver plenitud, bienestar y prosperidad.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fade}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#reservar"
              className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[color:var(--gold)] px-7 md:px-8 py-3.5 md:py-4 text-[12px] tracking-[0.28em] uppercase text-[#14110d] font-medium hover:bg-[color:var(--sand)] transition"
            >
              Reservar sesión
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#filosofia"
              className="inline-flex items-center justify-center sm:justify-start gap-3 text-[12px] tracking-[0.28em] uppercase text-[color:var(--ink-mute)] hover:text-[color:var(--ink)] transition"
            >
              <span className="h-px w-8 bg-[color:var(--ink-mute)]" />
              Conocer la práctica
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fade}
            className="mt-10 md:mt-14 grid grid-cols-3 max-w-md gap-4 md:gap-6 border-t border-white/10 pt-6 md:pt-8"
          >
            {[
              { k: "1,159", v: "Sesiones" },
              { k: "1.5K+", v: "Comunidad" },
              { k: "12+", v: "Años práctica" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-serif text-2xl md:text-3xl text-[color:var(--gold)]">{s.k}</div>
                <div className="text-[9px] md:text-[10px] tracking-[0.28em] md:tracking-[0.3em] uppercase text-[color:var(--ink-mute)] mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
          className="relative aspect-[4/5] w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto lg:mx-0 order-1 lg:order-2"
        >
          {/* Ring pulses */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="absolute h-full w-full rounded-full border border-[color:var(--gold)]/20 ring-pulse" />
            <span className="absolute h-full w-full rounded-full border border-[color:var(--gold)]/15 ring-pulse" style={{ animationDelay: "-1.5s" }} />
            <span className="absolute h-full w-full rounded-full border border-[color:var(--gold)]/10 ring-pulse" style={{ animationDelay: "-3s" }} />
          </div>
          <div className="relative h-full w-full rounded-[999px] overflow-hidden border border-white/10 shadow-[0_30px_100px_-30px_rgba(201,162,74,0.4)]">
            <video
              src="/videos/hero.mp4"
              poster="/gallery/shot-06.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a08] via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute -left-2 sm:-left-4 lg:-left-10 bottom-6 md:bottom-8 rounded-2xl bg-[#14110d]/85 backdrop-blur-md border border-white/10 p-3 pr-5 md:p-4 md:pr-6 flex items-center gap-3 shadow-2xl"
          >
            <span className="relative flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[color:var(--gold)]/15 shrink-0">
              <span className="absolute inset-0 rounded-full bg-[color:var(--gold)]/30 animate-ping" />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="relative">
                <path d="M12 3v18M8 7v10M4 10v4M16 7v10M20 10v4" stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </span>
            <div>
              <div className="text-[9px] md:text-[10px] tracking-[0.28em] md:tracking-[0.3em] uppercase text-[color:var(--ink-mute)]">432 Hz</div>
              <div className="font-serif text-[13px] md:text-sm text-[color:var(--ink)]">Frecuencia del corazón</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll cue — hidden on mobile to avoid crowding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[color:var(--ink-mute)]"
      >
        <span>Escuchar más</span>
        <span className="h-8 w-px bg-gradient-to-b from-[color:var(--ink-mute)] to-transparent" />
      </motion.div>
    </section>
  );
}
