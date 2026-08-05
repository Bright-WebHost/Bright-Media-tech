"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Gentle infinite up/down float — mirrors the source `upDownScrol` shapes. */
export default function FloatY({
  children,
  distance = 20,
  duration = 4,
  className = "",
}: {
  children: ReactNode;
  distance?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [-distance / 2, distance / 2, -distance / 2] }}
      transition={{ duration, ease: "easeInOut", repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}
