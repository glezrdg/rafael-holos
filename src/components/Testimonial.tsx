"use client";

import { motion } from "framer-motion";
import { Enso } from "./Enso";

export function Testimonial() {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]">
          <Enso size={780} strokeWidth={1.2} className="spin-slow" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,74,0.10),transparent_65%)]" />
        <div className="grain opacity-40" />
      </div>

      <div className="max-w-5xl mx-auto px-5 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--gold)] mb-8">
            — Manifiesto
          </div>

          <blockquote className="font-serif text-[2rem] sm:text-4xl md:text-6xl lg:text-[5.2rem] leading-[1.08] md:leading-[1.02] text-[color:var(--ink)]">
            <span className="italic text-[color:var(--sand)] font-light">Despierta</span> tu propio maestro.
            <br />
            <span className="text-[color:var(--ink-mute)]">Que el </span>
            <em className="italic text-[color:var(--gold)] not-italic font-light">sabio</em>
            <span className="text-[color:var(--ink-mute)]"> que vive en ti</span>
            <br />
            <span className="italic text-[color:var(--sand)] font-light">emerja</span>.
          </blockquote>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="mt-14 mx-auto h-px w-40 bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent origin-center"
          />

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-[10px] md:text-[11px] tracking-[0.28em] md:tracking-[0.32em] uppercase text-[color:var(--ink-mute)]">
            <span>Rafael Cristóbal Álvarez</span>
            <span className="hidden sm:inline h-1 w-1 rounded-full bg-[color:var(--gold)]" />
            <span>Fundador · Casa Holos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
