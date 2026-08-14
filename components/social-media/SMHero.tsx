"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import TornEdgeDivider from "../contact/TornEdgeDivider";

const STATS = [
  {
    value: "10K+",
    label: "Avg Engagement Rate",
    color: "lime",
    pinType: "tape",
    rotation: -1.5,
  },
  {
    value: "99%",
    label: "Timely Posting Accuracy",
    color: "yellow",
    pinType: "pin-red",
    rotation: 1.8,
  },
  {
    value: "100%",
    label: "Tailored Content Strategy",
    color: "teal",
    pinType: "tape",
    rotation: -2.0,
  },
  {
    value: "92%",
    label: "Client Retention Rate",
    color: "peach",
    pinType: "pin-blue",
    rotation: 1.5,
  },
];

// Torn Paper Bottom Jagged Clip Path
const TORN_NOTE_CLIP =
  "polygon(0% 0%, 100% 0%, 100% calc(100% - 14px), 98% calc(100% - 3px), 95% calc(100% - 12px), 92% calc(100% - 2px), 89% calc(100% - 15px), 85% calc(100% - 4px), 81% calc(100% - 13px), 77% calc(100% - 2px), 73% calc(100% - 15px), 69% calc(100% - 5px), 65% calc(100% - 13px), 61% calc(100% - 2px), 57% calc(100% - 16px), 53% calc(100% - 4px), 48% calc(100% - 15px), 44% calc(100% - 2px), 40% calc(100% - 14px), 36% calc(100% - 5px), 32% calc(100% - 16px), 27% calc(100% - 3px), 23% calc(100% - 13px), 19% calc(100% - 2px), 15% calc(100% - 15px), 11% calc(100% - 4px), 7% calc(100% - 13px), 3% calc(100% - 2px), 0% calc(100% - 11px))";

export default function SMHero() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const getStatStyles = (color: string) => {
    switch (color) {
      case "lime":
        return {
          bg: "bg-[#d8f938] text-[#0e0f11]",
          border: "border-black/20",
        };
      case "yellow":
        return {
          bg: "bg-[#fef08a] text-stone-900",
          border: "border-yellow-600/20",
        };
      case "teal":
        return {
          bg: "bg-[#99f6e4] text-stone-900",
          border: "border-teal-700/20",
        };
      case "peach":
        return {
          bg: "bg-[#fed7aa] text-stone-900",
          border: "border-orange-700/20",
        };
      default:
        return {
          bg: "bg-white text-stone-900",
          border: "border-black/15",
        };
    }
  };

  return (
    <>
    <section className="relative overflow-hidden bg-[#faf8f5] pt-12 sm:pt-16 pb-0 text-[#0e0f11]">
      {/* Light Paper Desk Graph Background */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(0,0,0,0.12)_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Subtle Wall Tape Accents */}
      <div className="tape-strip top-4 left-10 rotate-[-10deg] opacity-50 hidden sm:block !w-16 !h-4" />
      <div className="tape-strip top-6 right-12 rotate-[12deg] opacity-50 hidden md:block !w-16 !h-4" />

      <div className="container-x relative z-10 px-4 sm:px-6">
        {/* ============================================================ */}
        {/* MAIN HEADLINE STICKY NOTE (TORN PAPER STYLE) */}
        {/* ============================================================ */}
        <Reveal className="mx-auto max-w-4xl text-center mb-10 sm:mb-12">
          <div
            style={{
              filter: "drop-shadow(0 12px 18px rgba(0,0,0,0.1)) drop-shadow(0 4px 6px rgba(0,0,0,0.04))",
            }}
            className="relative"
          >
            {/* Torn Paper Header Sheet */}
            <div
              style={{
                clipPath: TORN_NOTE_CLIP,
              }}
              className="relative overflow-hidden rounded-t-2xl bg-white p-6 sm:p-10 pb-12 sm:pb-16 border-t-2 border-l-2 border-r-2 border-black/15"
            >
              {/* Faint Ruled Paper Grid Overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_bottom,rgba(0,0,0,0.4)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.4)_1px,transparent_1px)] [background-size:24px_24px]" />

              {/* Tape Strips on Top Corners */}
              <div className="tape-strip -top-3 left-10 rotate-[-5deg] z-20 !w-16 !h-4 sm:!w-20 sm:!h-5" />
              <div className="tape-strip -top-3 right-10 rotate-[4deg] z-20 !w-16 !h-4 sm:!w-20 sm:!h-5" />

              {/* Main Heading */}
              {/* <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black leading-[1.06]">
                Social{" "}
                <span className="font-handwriting text-4xl sm:text-6xl lg:text-7xl text-emerald-800 underline decoration-wavy decoration-[#c9f31d] normal-case inline-block">
                  Media
                </span>{" "}
                Marketing
              </h1> */}

              {/* Exact Subtitle */}
              <p className="mt-4 text-base sm:text-lg text-black/75 font-medium max-w-2xl mx-auto leading-relaxed">
                At Bright Media, we're dedicated to giving your brand a powerful online presence. 
                Our tailored solutions are all about making genuine connections, boosting visibility, 
                engaging contents and bringing your brand to life in the digital world. Let's make your 
                brand shine brighter than ever!
              </p>
            </div>
          </div>
        </Reveal>

        {/* ============================================================ */}
        {/* STATS STRIP AS 4 PINNED TORN STICKY NOTECARDS */}
        {/* ============================================================ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {STATS.map((stat, i) => {
            const styles = getStatStyles(stat.color);
            const isHovered = hoveredStat === i;

            return (
              <Reveal key={stat.label} delay={i * 0.07} className="flex flex-col">
                <div
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                  style={{
                    transform: isHovered
                      ? "translateY(-8px) scale(1.02) rotate(0deg)"
                      : `rotate(${stat.rotation}deg)`,
                    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    filter: isHovered
                      ? "drop-shadow(0 18px 22px rgba(0,0,0,0.2)) drop-shadow(0 6px 8px rgba(0,0,0,0.08)) drop-shadow(0 0 14px rgba(201,243,29,0.3))"
                      : "drop-shadow(0 10px 14px rgba(0,0,0,0.1)) drop-shadow(0 3px 5px rgba(0,0,0,0.04))",
                  }}
                  className="group relative flex flex-col h-full"
                >
                  {/* Torn Notecard with Jagged Bottom Clip */}
                  <div
                    style={{
                      clipPath: TORN_NOTE_CLIP,
                    }}
                    className={`relative flex flex-col justify-between h-full overflow-hidden rounded-t-xl p-4 sm:p-6 pb-10 sm:pb-12 text-center ${styles.bg} ${styles.border} border-t-2 border-l-2 border-r-2`}
                  >
                    {/* Faint Graph Texture */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_bottom,rgba(0,0,0,0.4)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.4)_1px,transparent_1px)] [background-size:18px_18px]" />

                    {/* Top Tape or 3D Push Pin */}
                    {stat.pinType === "tape" ? (
                      <div className="tape-strip -top-2.5 left-1/2 -translate-x-1/2 rotate-[-2deg] z-20 !w-12 sm:!w-16 !h-3 sm:!h-4" />
                    ) : stat.pinType === "pin-red" ? (
                      <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                        <div className="relative">
                          <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-black/40 blur-[1px]" />
                          <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-red-600 border-2 border-white shadow-md flex items-center justify-center">
                            <div className="h-1 w-1 rounded-full bg-white/90" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                        <div className="relative">
                          <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-black/40 blur-[1px]" />
                          <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center">
                            <div className="h-1 w-1 rounded-full bg-white/90" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Stat Value */}
                    <div className="relative z-10 pt-1">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight block">
                        {stat.value}
                      </span>
                    </div>

                    {/* Stat Label */}
                    <div className="relative z-10 mt-2">
                      <span className="text-xs sm:text-sm font-bold text-stone-800 leading-tight block">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      
      {/* ============================================================ */}
      {/* TORN PAPER BOTTOM TRANSITION (Eliminates harsh line division) */}
      {/* ============================================================ */}
      <div className="relative -mb-1 mt-10 sm:mt-14 w-full overflow-hidden pointer-events-none z-20">
        <TornEdgeDivider fillColor="#FAF8F5" className="filter drop-shadow-[0_-3px_5px_rgba(0,0,0,0.04)]" />
      </div>
    </section>
    </>
  );
}
