export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 md:py-14 bg-[color:var(--bg-2)]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
        <div className="flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-[color:var(--gold)]/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
          </span>
          <span className="font-serif text-lg tracking-widest uppercase text-[color:var(--ink)]">
            Rafael <span className="text-[color:var(--gold)]">Holos</span>
          </span>
        </div>
        <div className="text-[11px] tracking-[0.28em] uppercase text-[color:var(--ink-mute)]">
          © {new Date().getFullYear()} · Casa Holos, Santo Domingo
        </div>
        <div className="flex items-center gap-5 text-[color:var(--ink-mute)]">
          <a
            href="https://instagram.com/rafael_holos"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[color:var(--gold)] transition"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://wa.me/18094828011" target="_blank" rel="noreferrer" className="hover:text-[color:var(--gold)] transition" aria-label="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20.5 3.5A11 11 0 0 0 3.9 17.9L3 21l3.2-.9A11 11 0 1 0 20.5 3.5Z" stroke="currentColor" strokeWidth="1.6"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
