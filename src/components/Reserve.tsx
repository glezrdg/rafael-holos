"use client";

import { motion } from "framer-motion";
import { Enso } from "./Enso";

export function Reserve() {
  return (
    <section id="reservar" className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,74,0.14),transparent_65%)]" />
        <div className="grain" />
      </div>
      <div className="absolute right-[-6rem] top-1/2 -translate-y-1/2 opacity-40 pointer-events-none hidden md:block">
        <Enso size={480} strokeWidth={2} className="spin-slow" />
      </div>

      <div className="max-w-4xl mx-auto px-5 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--gold)] mb-6">
            — Reservar
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--ink)]">
            Elige tu día. El resto es <em className="italic text-[color:var(--sand)] not-italic font-light">solamente escuchar</em>.
          </h2>
          <p className="mt-6 md:mt-8 text-[15px] md:text-lg text-[color:var(--ink-mute)] max-w-2xl leading-relaxed">
            Cupo limitado por sesión. Reserva por WhatsApp para asegurar tu lugar y recibir la preparación previa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-10 md:mt-14 grid md:grid-cols-2 gap-4"
        >
          <a
            href="https://wa.me/18094828011"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl md:rounded-3xl border border-[color:var(--gold)]/50 bg-[color:var(--gold)]/8 hover:bg-[color:var(--gold)] hover:text-[#14110d] transition p-5 md:p-8 flex items-center gap-4 md:gap-6"
          >
            <span className="h-12 w-12 md:h-14 md:w-14 shrink-0 rounded-full bg-[color:var(--gold)]/20 group-hover:bg-black/10 flex items-center justify-center transition">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="md:w-[26px] md:h-[26px]">
                <path d="M20.5 3.5A11 11 0 0 0 3.9 17.9L3 21l3.2-.9A11 11 0 1 0 20.5 3.5Z" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M8.5 8.5c.5 3 2.5 5 5.5 5.5.6-1.5 1.5-2 2.5-1.5l1.5 1c-.5 1.5-2 2.5-4 2.5-4 0-7-3-7-7 0-2 1-3.5 2.5-4l1 1.5c.5 1-.5 1.5-1.5 2.5Z" fill="currentColor"/>
              </svg>
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--gold)] group-hover:text-[#14110d] mb-1">WhatsApp</div>
              <div className="font-serif text-xl md:text-2xl truncate">809 482 8011</div>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition shrink-0">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href="tel:+18098511888"
            className="group rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5 md:p-8 flex items-center gap-4 md:gap-6"
          >
            <span className="h-12 w-12 md:h-14 md:w-14 shrink-0 rounded-full bg-white/5 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="min-w-0">
              <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--ink-mute)] mb-1">Llamar directo</div>
              <div className="font-serif text-xl md:text-2xl text-[color:var(--ink)] truncate">809 851 1888</div>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 md:mt-16 grid sm:grid-cols-3 gap-4 md:gap-6 text-center"
        >
          {[
            { k: "Casa Holos", v: "Estudio · Santo Domingo, RD" },
            { k: "Horario", v: "Lun — Sáb · Por reserva" },
            { k: "Cupo por sesión", v: "Máx. 12 personas" },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
              <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--gold)] mb-2">{s.k}</div>
              <div className="font-serif text-[15px] md:text-base text-[color:var(--ink)]">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
