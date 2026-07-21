"use client";

import { motion } from "framer-motion";

type Props = {
  size?: number;
  strokeWidth?: number;
  className?: string;
  delay?: number;
};

export function Enso({ size = 320, strokeWidth = 3, className, delay = 0 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="ensoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.95" />
          <stop offset="50%" stopColor="var(--sand)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <motion.path
        d="M100 15
           a85 85 0 1 1 -60 145"
        stroke="url(#ensoGrad)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.4, delay, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
      />
    </svg>
  );
}
