const chants = [
  "Neurosonicidad",
  "Baño de Gong",
  "Cuencos Tibetanos",
  "Reiki",
  "Biomagnetismo",
  "Tuina",
  "Pilates + Gongs",
  "Sonoterapia",
];

export function Marquee() {
  const items = [...chants, ...chants];
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-white/5 py-4 md:py-6 bg-[color:var(--bg-2)]"
    >
      <div className="marquee-track font-serif italic text-lg sm:text-2xl md:text-3xl text-[color:var(--sand)]">
        {items.map((c, i) => (
          <span key={i} className="mx-5 md:mx-8 whitespace-nowrap flex items-center gap-5 md:gap-8">
            {c}
            <span className="text-[color:var(--gold)]/60 text-sm md:text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
