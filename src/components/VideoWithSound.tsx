"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  aspectClass?: string;
  label?: string;
};

export function VideoWithSound({
  src,
  poster,
  className,
  aspectClass = "aspect-[4/5]",
  label,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    // If unmuting, make sure it's playing (some browsers pause after mute-change)
    if (!v.muted && v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    }
  };

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-black",
        aspectClass,
        className,
      )}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onClick={togglePlay}
        className="absolute inset-0 h-full w-full object-cover cursor-pointer"
      />

      {/* Gradient overlay only for controls contrast at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Label pill */}
      {label && (
        <div className="absolute top-4 left-4 rounded-full border border-white/15 bg-black/40 backdrop-blur px-3 py-1 text-[10px] tracking-[0.28em] uppercase text-[color:var(--sand)]">
          {label}
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pausar" : "Reproducir"}
          className="h-11 w-11 rounded-full border border-white/20 bg-black/50 backdrop-blur text-[color:var(--ink)] flex items-center justify-center hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition"
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
              <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M6 4l14 8-14 8V4Z" fill="currentColor" />
            </svg>
          )}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Activar sonido" : "Silenciar"}
          className={cn(
            "h-11 w-11 rounded-full border backdrop-blur flex items-center justify-center transition",
            muted
              ? "border-white/20 bg-black/50 text-[color:var(--ink)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              : "border-[color:var(--gold)] bg-[color:var(--gold)] text-[#14110d] hover:bg-[color:var(--sand)]",
          )}
        >
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M11 5L6 9H3v6h3l5 4V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M17 9l4 6M21 9l-4 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M11 5L6 9H3v6h3l5 4V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M15 9c1.5 1 1.5 5 0 6M18 6c3 2 3 10 0 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Sound hint on hover when muted */}
      {muted && (
        <div className="absolute bottom-20 right-4 rounded-full border border-white/15 bg-black/60 backdrop-blur px-3 py-1.5 text-[10px] tracking-[0.28em] uppercase text-[color:var(--sand)] opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
          Activa el sonido ↴
        </div>
      )}
    </div>
  );
}
