"use client";

import Image from "next/image";
import { useState } from "react";
import { WHY } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";
import { motion, AnimatePresence } from "framer-motion";

export default function WhyDixor() {
  const [open, setOpen] = useState(0);

  const itemsEnriched = [
    {
      no: "01",
      title: "Personalized Strategies",
      body: "At Bright Media, we understand that one size doesn't fit all. We develop customized strategies tailored to each client's unique goals and target audience.",
      badge: "🎯 Bespoke Roadmaps",
      tag: "CUSTOM FIT",
      highlightColor: "bg-[#c9f31d]",
      tilt: "-rotate-1",
    },
    {
      no: "02",
      title: "Insight-Driven Decisions",
      body: "Our strategies are backed by thorough research and analysis. We leverage data-driven insights to make informed decisions and optimize campaign performance for maximum results.",
      badge: "📊 Data & Analytics",
      tag: "ANALYTICAL",
      highlightColor: "bg-[#feef8f]",
      tilt: "rotate-1",
    },
    {
      no: "03",
      title: "Creative Brilliance",
      body: "Creativity is at the heart of everything we do. Our team of skilled professionals crafts compelling content and visually stunning designs that captivate audiences and drive engagement.",
      badge: "💡 Scroll-Stopping Design",
      tag: "ORIGINAL",
      highlightColor: "bg-[#99f6e4]",
      tilt: "-rotate-1",
    },
    {
      no: "04",
      title: "Ongoing Optimization",
      body: "We believe in the power of continuous improvement. We closely monitor campaign performance, analyze results, and refine strategies to ensure ongoing success and ROI for our clients.",
      badge: "📈 Scaled ROI",
      tag: "ITERATIVE",
      highlightColor: "bg-[#fecdd3]",
      tilt: "rotate-1.5",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fafaf8] py-20 sm:py-18 text-[#0e0f11]">
      {/* Architectural Fine Graph Paper Grid */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(0,0,0,0.12)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Decorative Backdrop Tape Accents */}
      <div className="tape-strip top-10 left-10 -rotate-12 hidden lg:block opacity-40" />
      <div className="tape-strip bottom-12 right-12 rotate-45 hidden lg:block opacity-40" />

      <div className="container-x relative z-10 px-4 sm:px-6">
        {/* ============================================================ */}
        {/* 1. TOP HEADER: TORN NOTEBOOK BADGE & TITLE */}
        {/* ============================================================ */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
            {/* <div className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-[#c9f31d]/35 px-4 py-1.5 text-[11px] font-black text-black uppercase tracking-wider shadow-xs backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#15803d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#15803d]" />
              </span>
              <span>✂️ TORN NOTEBOOK // SECTION 04</span>
            </div> */}

            <div className="hidden sm:inline-flex postmark-stamp text-black border-black/25 bg-white/80 shadow-xs">
              {/* <span className="text-[8px] font-bold uppercase tracking-widest text-black/60">
                PROVEN METHODOLOGY
              </span> */}
              <span className="font-handwriting text-base font-bold text-black">
                ★ Why Bright Media
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              {/* <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/50 block mb-1">
                WHY BRIGHT MEDIA
              </span> */}
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase text-black leading-[1.02] tracking-tight">
                Unlock Revenue Growth
              </h2>
            </div>
            <p className="font-handwriting text-xl sm:text-2xl font-bold text-black/70 max-w-sm">
              ~ our 4 core differentiators ripped from our strategy desk ✍️
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. MAIN 2-COLUMN SPREAD: TORN PHOTO CARD (LEFT) + TORN ACCORDION (RIGHT) */}
        {/* ============================================================ */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT 5 COLS: TORN PHOTO PRINT & AWARDS BOARD */}
          <Reveal direction="right" className="lg:col-span-5 relative space-y-6">
            {/* Torn Photo Frame Card */}
            <div className="relative rounded-2xl bg-white border-2 border-black/10 p-4 shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              {/* Scotch Tape on Top & Bottom */}
              <div className="tape-strip -top-3 left-8 -rotate-6 z-20" />
              <div className="tape-strip -bottom-3 right-8 rotate-3 z-20" />

              {/* 3D Red Pushpin */}
              <div className="pointer-events-none absolute -top-2.5 right-6 z-20 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-black/40 blur-[1px]" />
                  <div className="h-4 w-4 rounded-full bg-red-600 border-2 border-white shadow-md" />
                </div>
              </div>

              {/* Jagged Ripped Paper Top Edge Effect */}
              <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[400px] overflow-hidden rounded-xl bg-gray-900 border border-black/10">
                <Image
                  src={WHY.image}
                  alt="Why Bright Media"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Floating Studio Badges */}
                <div className="absolute top-3.5 left-3.5 rounded-full bg-black/85 backdrop-blur-md px-3.5 py-1 text-[10px] font-black text-[#c9f31d] uppercase tracking-wider shadow">
                  📌 Strategy Lab
                </div>
                <div className="absolute bottom-3.5 right-3.5 rounded-full bg-[#c9f31d] px-3.5 py-1 text-[10px] font-black text-black uppercase shadow">
                  ⚡ Measurable ROI
                </div>
              </div>

              {/* Polaroid Caption */}
              <div className="mt-3.5 px-1 flex items-center justify-between border-t border-black/10 pt-2.5">
                <div>
                  <span className="font-handwriting text-xl font-bold text-gray-900">
                    Precision in Every Strategy ✨
                  </span>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider font-mono">
                    VERIFIED CLIENT OUTCOMES
                  </p>
                </div>
                <span className="rounded-full bg-black/5 p-2 text-xs font-bold text-black">
                  <i className="fas fa-certificate text-[#65a30d]" />
                </span>
              </div>
            </div>

            {/* Awards / Stamp Badges Row */}
            {/* <div className="grid grid-cols-3 gap-3 pt-2">
              {WHY.awards.map((award, i) => (
                <div
                  key={award.label}
                  className="relative rounded-xl bg-white border-2 border-black/10 p-3 text-center shadow-md transition-all hover:scale-105 hover:border-black/30 hover:bg-[#c9f31d]/20"
                >
                  <div className="tape-strip -top-2.5 left-1/2 -translate-x-1/2 !w-12 !h-3.5 -rotate-2" />
                  <i className={`${award.icon} text-lg text-black mb-1 block`} />
                  <div className="font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-tight text-black leading-tight">
                    {award.label}
                  </div>
                  <div className="font-handwriting text-xs font-bold text-[#65a30d] mt-0.5">
                    ★ Recognized
                  </div>
                </div>
              ))}
            </div> */}
          </Reveal>

          {/* RIGHT 7 COLS: 4 TORN NOTEPAD ACCORDION SHEETS */}
          <Reveal direction="left" className="lg:col-span-7 space-y-4">
            {itemsEnriched.map((item, i) => {
              const isOpen = open === i;

              return (
                <div
                  key={item.title}
                  className={`group/note relative rounded-2xl border-2 transition-all duration-300 overflow-hidden shadow-lg ${
                    isOpen
                      ? "border-black/30 shadow-2xl bg-white scale-[1.01]"
                      : "border-black/10 hover:border-black/25 bg-white/95 hover:bg-white hover:-translate-y-0.5"
                  }`}
                >
                  {/* Perforated Tear Line & Spiral Ring Holes Strip */}
                  <div
                    className={`flex items-center justify-between px-4 sm:px-6 py-1.5 border-b border-dashed border-black/15 transition-colors ${
                      isOpen ? item.highlightColor : "bg-[#f5f4ef]"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-mono text-[9px] font-black uppercase tracking-widest text-black/50">
                      <span>✂ {item.no}</span>
                      <span className="hidden sm:inline tracking-widest">
                        - - - - - - - - - - - - - - - -
                      </span>
                    </div>

                    {/* Binder Hole Cutouts */}
                    {/* <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-black/20 border border-black/10 inline-block shadow-inner" />
                      <span className="h-2 w-2 rounded-full bg-black/20 border border-black/10 inline-block shadow-inner" />
                      <span className="h-2 w-2 rounded-full bg-black/20 border border-black/10 inline-block shadow-inner" />
                    </div> */}
                  </div>

                  {/* Accordion Trigger Header Button */}
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between px-5 sm:px-7 py-4 text-left transition-colors"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs font-black transition-all ${
                          isOpen
                            ? "bg-black text-[#c9f31d] scale-110 shadow-sm"
                            : "bg-black/5 text-black"
                        }`}
                      >
                        {item.no}
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-black tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        {/* <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-black/40">
                          {item.tag}
                        </span> */}
                      </div>
                    </div>

                    {/* Plus / Minus Circular Pill */}
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isOpen
                          ? "border-black bg-black text-[#c9f31d] rotate-180"
                          : "border-black/15 bg-black/5 text-black group-hover/note:border-black"
                      }`}
                    >
                      <i className={`fas fa-${isOpen ? "minus" : "plus"} text-xs`} />
                    </div>
                  </button>

                  {/* Accordion Content Body (Notebook Ruled Paper) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="relative px-5 sm:px-7 pb-6 pt-1 border-t border-black/10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:100%_28px]">
                          <p className="text-sm sm:text-base leading-relaxed font-medium text-black/85 max-w-2xl">
                            {item.body}
                          </p>

                          {/* Bottom Takeaway Strip */}
                          {/* <div className="mt-4 pt-3 border-t border-black/10 flex flex-wrap items-center justify-between gap-3">
                            <span className="rounded-lg bg-black/10 border border-black/10 px-3 py-1 text-xs font-black text-black">
                              {item.badge}
                            </span>
                            <span className="font-handwriting text-base font-bold text-black/60">
                              ~ validated approach 📌
                            </span>
                          </div> */}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
