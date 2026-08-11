"use client";

import { motion } from "framer-motion";

export default function Breadcrumb({
  title,
  crumb,
  description,
}: {
  title: string;
  crumb?: string;
  description?: string;
}) {
  const displayDescription =
    description ||
    "";

  return (
    <section className="relative overflow-hidden bg-[#0a0b0e] pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 text-white">
      {/* Dark Graph Grid Canvas */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Subtle Top-Left Ambient Lime Glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#c9f31d]/10 blur-[100px]" />

      {/* Concentric Radar Rings & Glowing Arc in Bottom Right */}
      <div className="pointer-events-none absolute -bottom-48 -right-48 h-[520px] w-[520px] rounded-full border border-[#c9f31d]/20 bg-[radial-gradient(circle,rgba(201,243,29,0.16)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute -bottom-36 -right-36 h-[400px] w-[400px] rounded-full border border-[#c9f31d]/15" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[280px] w-[280px] rounded-full border border-[#c9f31d]/20" />
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-[160px] w-[160px] rounded-full border border-[#c9f31d]/25" />

      {/* Scattered Glowing Green/Lime Dots */}
      <div className="pointer-events-none absolute left-[8%] top-[35%] h-1.5 w-1.5 rounded-full bg-[#c9f31d] opacity-60 blur-[0.5px]" />
      <div className="pointer-events-none absolute left-[28%] top-[25%] h-1.5 w-1.5 rounded-full bg-[#c9f31d] opacity-70 blur-[0.5px]" />
      <div className="pointer-events-none absolute left-[34%] bottom-[28%] h-1.5 w-1.5 rounded-full bg-[#c9f31d] opacity-40 blur-[0.5px]" />
      <div className="pointer-events-none absolute right-[35%] top-[38%] h-1.5 w-1.5 rounded-full bg-[#c9f31d] opacity-60 blur-[0.5px]" />
      <div className="pointer-events-none absolute right-[18%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-[#c9f31d] opacity-50 blur-[0.5px]" />

      <div className="container-x relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Giant Hollow / Outline Display Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-[4.2rem] font-black uppercase tracking-wider text-transparent leading-none"
          style={{
            WebkitTextStroke: "2.5px #ffffff",
          }}
        >
          {title}
        </motion.h1>

        {/* Subtitle / Description Paragraph */}
        {displayDescription && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-gray-400 font-normal"
          >
            {displayDescription}
          </motion.p>
        )}
      </div>
    </section>
  );
}
