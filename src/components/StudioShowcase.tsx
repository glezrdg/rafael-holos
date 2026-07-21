"use client";

import { motion } from "framer-motion";
import { VideoWithSound } from "./VideoWithSound";

export function StudioShowcase() {
  return (
    <section id="estudio" className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(122,59,40,0.3),transparent_60%)] blob" />
        <div className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,74,0.16),transparent_60%)] blob" style={{ animationDelay: "-10s" }} />
        <div className="grain opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl"
          >
            <div className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--gold)] mb-6">
              — El estudio
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--ink)]">
              Un espacio donde el <em className="italic text-[color:var(--sand)] not-italic font-light">sonido tiene cuerpo</em>.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-[color:var(--ink-mute)] max-w-sm text-[15px] leading-relaxed"
          >
            Gongs sinfónicos Meinl, Reformer Allegro Tower y una arquitectura pensada para que la vibración viaje sin obstáculos.
            <span className="block mt-2 text-[color:var(--gold)] text-[11px] tracking-[0.28em] uppercase">Activa el sonido para sentirlo</span>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
          >
            <VideoWithSound
              src="/videos/studio-a.mp4"
              poster="/gallery/shot-06.jpg"
              label="Baño de gong"
              aspectClass="aspect-[4/5]"
            />
            <div className="mt-5 flex items-start justify-between gap-6">
              <div>
                <div className="font-serif text-xl md:text-2xl text-[color:var(--ink)]">Ritual sonoro</div>
                <div className="text-[color:var(--ink-mute)] text-[14px] mt-1 max-w-sm leading-relaxed">
                  El gong sinfónico llena el espacio con capas de vibración que reordenan la respiración y el pulso sónico en resonancia holística, armonizando mente, cuerpo, espíritu y alma.
                </div>
              </div>
              <span className="font-serif text-2xl md:text-3xl text-[color:var(--gold)]/70 shrink-0">音</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <VideoWithSound
              src="/videos/studio-b.mp4"
              poster="/gallery/shot-05.jpg"
              label="Ceremonia anual · Mayo"
              aspectClass="aspect-[4/5]"
            />
            <div className="mt-5 flex items-start justify-between gap-6">
              <div>
                <div className="font-serif text-xl md:text-2xl text-[color:var(--ink)]">Luna Wesak</div>
                <div className="text-[color:var(--ink-mute)] text-[14px] mt-1 max-w-sm leading-relaxed">
                  El plenilunio más sagrado del calendario espiritual — cuando Buda alcanzó el despertar. Cada mayo Casa Holos se convierte en templo: gongs, cuencos y meditación guiada bajo la luna que ordena el alma.
                </div>
              </div>
              <span className="font-serif text-2xl md:text-3xl text-[color:var(--gold)]/70 shrink-0">月</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
