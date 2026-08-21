"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import PVTools from "./PVTools";

/** Black Wire Paper Clip SVG Component */
function PaperClip({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="52"
      viewBox="0 0 24 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-sm select-none pointer-events-none ${className}`}
    >
      {/* Clip Shadow */}
      <path
        d="M7 16 V8 C7 4.2 9.5 1.8 13 1.8 C16.5 1.8 19 4.2 19 8 V38 C19 42.5 15.5 46 11 46 C6.5 46 3 42.5 3 38 V14"
        stroke="rgba(0,0,0,0.25)"
        strokeWidth="2.6"
        strokeLinecap="round"
        transform="translate(1.2, 1.8)"
      />
      {/* Outer loop */}
      <path
        d="M7 16 V8 C7 4.2 9.5 1.8 13 1.8 C16.5 1.8 19 4.2 19 8 V38 C19 42.5 15.5 46 11 46 C6.5 46 3 42.5 3 38 V14"
        stroke="#18181B"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Inner loop */}
      <path
        d="M7 16 V35 C7 37.5 9 39.5 11.5 39.5 C14 39.5 16 37.5 16 35 V12 C16 10 14.5 8.5 12.5 8.5 C10.5 8.5 9 10 9 12 V30"
        stroke="#18181B"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Metal highlight line */}
      <path
        d="M18 10 V34"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Ripped Paper Top Edge */
function TornPaperTop() {
  return (
    <svg
      viewBox="0 0 300 10"
      className="w-full h-2.5 block select-none pointer-events-none fill-white"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 10 L0 5 L10 2 L20 6 L30 1 L40 5 L50 2 L60 6 L70 1 L80 5 L90 2 L100 6 L110 1 L120 5 L130 2 L140 6 L150 1 L160 5 L170 2 L180 6 L190 1 L200 5 L210 2 L220 6 L230 1 L240 5 L250 2 L260 6 L270 1 L280 5 L290 2 L300 5 L300 10 Z" />
    </svg>
  );
}

/** Ripped Paper Bottom Edge */
function TornPaperBottom() {
  return (
    <svg
      viewBox="0 0 300 14"
      className="w-full h-3.5 block select-none pointer-events-none fill-white -mt-[1px]"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0 L300 0 L300 6 L290 2 L280 7 L270 1 L260 6 L250 2 L240 7 L230 1 L220 6 L210 2 L200 7 L190 1 L180 6 L170 2 L160 7 L150 1 L140 6 L130 2 L120 7 L110 1 L100 6 L90 2 L80 7 L70 1 L60 6 L50 2 L40 7 L30 1 L20 6 L10 2 L0 7 Z" />
    </svg>
  );
}

/** Card Data with precise color themes matching reference image */
const SERVICES_NOTES = [
  {
    id: "01",
    tag: "PHOTOGRAPHY",
    title: "THE BIG IDEA",
    desc: "We start with the concept, planning the look, mood and direction to make every frame feel like your brand.",
    bgColor: "#C9F31D",
    textColor: "#365314",
    badgeBg: "rgba(201, 243, 29, 0.35)",
    badgeBorder: "rgba(163, 230, 53, 0.8)",
  },
  {
    id: "02",
    tag: "PRODUCTION",
    title: "SHOOT & PRODUCE",
    desc: "From the setup to the final shot, we bring the concept to life with the right people, tools and attention to detail.",
    bgColor: "#FEEF8F",
    textColor: "#B45309",
    badgeBg: "rgba(249, 158, 26, 0.18)",
    badgeBorder: "rgba(249, 158, 26, 0.5)",
  },
  {
    id: "03",
    tag: "STORYTELLING",
    title: "TELL YOUR STORY",
    desc: "We turn your message into visuals that feel natural, connect with your audience and give your brand something worth remembering.",
    bgColor: "#FED7AA",
    textColor: "#0E4B5C",
    badgeBg: "rgba(28, 103, 126, 0.16)",
    badgeBorder: "rgba(28, 103, 126, 0.45)",
  },
  {
    id: "04",
    tag: "POST-PRODUCTION",
    title: "THE FINAL TOUCH",
    desc: "Editing, colour, sound and finishing , we polish every detail until the final piece is ready to make an impact.",
    bgColor: "#99F6E4",
    textColor: "#0F766E",
    badgeBg: "rgba(34, 184, 184, 0.16)",
    badgeBorder: "rgba(34, 184, 184, 0.45)",
  },
];

export default function PVServices() {
  return (
    <section className="relative bg-[#ffffff] py-10 sm:py-14 overflow-hidden">
      <div className="container-x relative z-10">
        {/* Lined Notebook Studio Board */}
        <div
          className="relative rounded-3xl p-4 sm:p-8 md:p-10 pb-16 lg:pb-12 border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden"
          style={{
            backgroundColor: "#FAF8F5",
            backgroundImage: `
              linear-gradient(to bottom, rgba(148, 163, 184, 0.14) 1px, transparent 1px)
            `,
            backgroundSize: "100% 32px",
          }}
        >
          {/* Top Corner Tape Accents */}
          <div className="pointer-events-none absolute -top-3 left-8 h-8 w-28 -rotate-6 bg-white/70 backdrop-blur-xs border border-amber-200/60 shadow-xs opacity-90" />
          <div className="pointer-events-none absolute -top-3 right-10 h-8 w-32 rotate-3 bg-white/70 backdrop-blur-xs border border-amber-200/60 shadow-xs opacity-90" />

          {/* Section Header */}
          <Reveal className="mb-14 sm:mb-16 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-lime-200/60 border border-lime-400/40 text-lime-900 text-xs font-mono tracking-widest uppercase mb-4 shadow-xs transform -rotate-1">
              <Sparkles className="w-3.5 h-3.5 text-lime-700" />
              <span>Production Board &bull; Bright Media</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-black leading-[1.06]">
              FROM FIRST SHOT{" "}
              <span className="font-handwriting text-4xl sm:text-6xl lg:text-7xl text-emerald-800 underline decoration-wavy decoration-[#c9f31d] normal-case inline-block">
                to final cut
              </span>{" "}
              {/* Do */}
            </h2>
          </Reveal>

          {/* 4 Cards Grid - No Thread, matching reference layout */}
          <div className="relative max-w-lg lg:max-w-none mx-auto pt-6 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-5 xl:gap-6">
              {SERVICES_NOTES.map((card, index) => {
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -6,
                      transition: { type: "spring", stiffness: 350, damping: 22 },
                    }}
                    className="relative select-none group"
                  >
                    {/* Outer Colored Card Base */}
                    <div
                      className="relative rounded-2xl p-4 sm:p-5 pt-8 pb-6 shadow-[0_16px_32px_-6px_rgba(0,0,0,0.18),_0_6px_12px_-2px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:shadow-[0_24px_42px_-8px_rgba(0,0,0,0.25)]"
                      style={{ backgroundColor: card.bgColor }}
                    >
                      {/* Black Wire Paper Clip on Top Left */}
                      <div className="absolute -top-3.5 left-5 sm:left-6 z-30 transition-transform duration-300 group-hover:-translate-y-1">
                        <PaperClip />
                      </div>

                      {/* Circular Number Badge on Top Center */}
                      <div
                        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-13 sm:h-13 rounded-full border-[3.5px] border-white shadow-[0_6px_14px_rgba(0,0,0,0.2)] flex items-center justify-center z-30 transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundColor: card.bgColor }}
                      >
                        <span className="text-white font-black text-lg sm:text-xl tracking-tight leading-none">
                          {card.id}
                        </span>
                      </div>

                      {/* Bottom-right lifted paper curl shadow onto card background */}
                      <div className="absolute bottom-2.5 right-3 w-32 h-8 bg-black/40 blur-[6px] rounded-full transform rotate-2 pointer-events-none z-0 opacity-80 group-hover:opacity-95 transition-opacity" />

                      {/* Inner Torn Paper Sheet (White Notepad Paper) */}
                      <div className="relative z-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.12)]">
                        {/* Torn Top Edge */}
                        <TornPaperTop />

                        {/* White Sheet Middle Area with Ruled Lines & Binder Holes */}
                        <div
                          className="relative bg-white px-5 sm:px-6 pt-6 pb-3"
                          style={{
                            backgroundImage: `
                              repeating-linear-gradient(
                                to bottom,
                                transparent,
                                transparent 21px,
                                rgba(0, 0, 0, 0.055) 21px,
                                rgba(0, 0, 0, 0.055) 22px
                              )
                            `,
                          }}
                        >
                          {/* Spiral / Binder Punch Square Holes on Left Margin */}
                          <div className="absolute left-2.5 top-2 bottom-2 flex flex-col justify-between items-center z-20 pointer-events-none">
                            {Array.from({ length: 9 }).map((_, i) => (
                              <div
                                key={i}
                                className="w-2.5 h-1.5 rounded-[1px] shadow-inner"
                                style={{ backgroundColor: card.bgColor }}
                              />
                            ))}
                          </div>

                          {/* Content inside white sheet */}
                          <div className="pl-3.5 pr-1 text-center">
                            {/* Unique Styled Tag Badge - Single Line */}
                            <div className="mb-2 flex justify-center">
                              <span
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase whitespace-nowrap border shadow-2xs transition-transform duration-200 group-hover:scale-105"
                                style={{
                                  backgroundColor: card.badgeBg,
                                  borderColor: card.badgeBorder,
                                  color: card.textColor,
                                }}
                              >
                                <span
                                  className="w-1 h-1 rounded-full shrink-0"
                                  style={{ backgroundColor: card.textColor }}
                                />
                                <span className="truncate">{card.tag}</span>
                              </span>
                            </div>

                            {/* Service Title */}
                            <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight leading-snug mb-2 font-sans">
                              {card.title}
                            </h4>

                            {/* Description */}
                            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-sans line-clamp-4">
                              {card.desc}
                            </p>
                          </div>
                        </div>

                        {/* Torn Bottom Edge */}
                        <TornPaperBottom />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <PVTools />
        </div>
      </div>
    </section>
  );
}

