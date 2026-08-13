"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

interface ProcessStep {
  no: string;
  title: string;
  desc: string;
  icon: string;
  handwrittenTag: string;
  colorTheme: "yellow" | "lime" | "teal" | "peach";
  pinType: "pin-red" | "pin-blue" | "tape-single" | "tape-double";
  rotation: number;
  highlight: string;
}

interface ClientBrand {
  name: string;
  industry: string;
  image: string;
  color: string;
  rotation: number;
  badge?: string;
}

const STEPS: ProcessStep[] = [
  {
    no: "01",
    title: "Strategic Planning",
    desc: "We'll work closely with you to develop a tailored social media strategy that aligns with your brand objectives and resonates with your target audience.",
    icon: "fas fa-compass",
    handwrittenTag: "✦ Discovery & Market Target",
    colorTheme: "yellow",
    pinType: "pin-red",
    rotation: -2.2,
    highlight: "Audience & Competitor Mapping",
  },
  {
    no: "02",
    title: "Content Creation",
    desc: "Our team of creatives will craft engaging content that captivates your audience, from eye-catching visuals to compelling copywriting.",
    icon: "fas fa-palette",
    handwrittenTag: "🎬 4K Reels & High-Voltage Copy",
    colorTheme: "lime",
    pinType: "tape-double",
    rotation: 2.0,
    highlight: "Custom Motion & Carousels",
  },
  {
    no: "03",
    title: "Platform Management",
    desc: "Leave your social media management to us—from content scheduling to community engagement, we ensure seamless brand presence across all channels.",
    icon: "fas fa-sliders-h",
    handwrittenTag: "⚡ 24/7 Scheduling & Inbound DMs",
    colorTheme: "teal",
    pinType: "tape-single",
    rotation: -1.8,
    highlight: "Active Tribe Moderation",
  },
  {
    no: "04",
    title: "Analytics and Optimization",
    desc: "We'll track key metrics and analyze performance to continuously refine and optimize your social media strategy, ensuring maximum impact and ROI.",
    icon: "fas fa-chart-line",
    handwrittenTag: "📈 Rapid Iteration & Growth",
    colorTheme: "peach",
    pinType: "pin-blue",
    rotation: 2.3,
    highlight: "Weekly Growth Reporting",
  },
];

const BRANDS: ClientBrand[] = [
  {
    name: "Bajaj Auto",
    industry: "Bike Manufacturers",
    image: "/assets/img/portfolio/bajaj.webp",
    color: "bg-[#BAE6FD]",
    rotation: -2.5,
  },
  {
    name: "Motorland",
    industry: "Automotive Dealer",
    image: "/assets/img/portfolio/ml.webp",
    color: "bg-[#A7CFFF]",
    rotation: 1.8,
  },
  {
    name: "Second Cup",
    industry: "Coffee Shop",
    image: "/assets/img/portfolio/sc.webp",
    color: "bg-[#feef8f]",
    rotation: -1.5,
  },
  {
    name: "Metroways",
    industry: "Travel Agency",
    image: "/assets/img/portfolio/mw.webp",
    color: "bg-[#99f6e4]",
    rotation: 2.2,
  },
  {
    name: "MCM",
    industry: "Construction Materials",
    image: "/assets/img/portfolio/mcm.webp",
    color: "bg-[#bbf7d0]",
    rotation: -2.0,
  },
  {
    name: "Tonino",
    industry: "Restaurant",
    image: "/assets/img/portfolio/tonino.webp",
    color: "bg-[#fecdd3]",
    rotation: 1.6,
  },
  {
    name: "Kaiser",
    industry: "Kitchen Appliances Manufacturers",
    image: "/assets/img/portfolio/kaiser.webp",
    color: "bg-[#fed7aa]",
    rotation: -1.7,
  },
  {
    name: "GTSW",
    industry: "Battery & Tyre Manufacturers",
    image: "/assets/img/portfolio/gt.webp",
    color: "bg-[#d9f99d]",
    rotation: 2.4,
  },
  {
    name: "Farhat Frères",
    industry: "Automotive Dealer",
    image: "/assets/img/portfolio/farhat.webp",
    color: "bg-[#fde68a]",
    rotation: -2.1,
  },
  {
    name: "Amore Glacier",
    industry: "Café",
    image: "/assets/img/portfolio/amore.webp",
    color: "bg-[#fbcfe8]",
    rotation: 1.9,
  },
  {
    name: "Istanbul Sofrasi",
    industry: "Restaurant",
    image: "https://brightmedia.tech/img/allimg/logo/Istanbul.webp",
    color: "bg-[#fed7aa]",
    rotation: -1.4,
  },
];

// Torn Paper Bottom Jagged Clip Path
const TORN_PAPER_BOTTOM_CLIP =
  "polygon(0% 0%, 100% 0%, 100% calc(100% - 16px), 98% calc(100% - 3px), 95% calc(100% - 13px), 92% calc(100% - 2px), 89% calc(100% - 16px), 85% calc(100% - 4px), 81% calc(100% - 13px), 77% calc(100% - 2px), 73% calc(100% - 15px), 69% calc(100% - 5px), 65% calc(100% - 13px), 61% calc(100% - 2px), 57% calc(100% - 16px), 53% calc(100% - 4px), 48% calc(100% - 15px), 44% calc(100% - 2px), 40% calc(100% - 14px), 36% calc(100% - 5px), 32% calc(100% - 16px), 27% calc(100% - 3px), 23% calc(100% - 13px), 19% calc(100% - 2px), 15% calc(100% - 15px), 11% calc(100% - 4px), 7% calc(100% - 13px), 3% calc(100% - 2px), 0% calc(100% - 11px))";

export default function SMProcess() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  const getThemeStyles = (theme: ProcessStep["colorTheme"]) => {
    switch (theme) {
      case "yellow":
        return {
          bg: "bg-[#fef08a] text-stone-900",
          border: "border-yellow-600/20",
          badgeBg: "bg-stone-900 text-yellow-300",
          iconBg: "bg-stone-900 text-yellow-300",
          numberText: "text-amber-900/40",
        };
      case "lime":
        return {
          bg: "bg-[#d8f938] text-[#0e0f11]",
          border: "border-black/20",
          badgeBg: "bg-black text-[#c9f31d]",
          iconBg: "bg-black text-[#c9f31d]",
          numberText: "text-emerald-950/40",
        };
      case "teal":
        return {
          bg: "bg-[#99f6e4] text-stone-900",
          border: "border-teal-700/20",
          badgeBg: "bg-stone-900 text-teal-300",
          iconBg: "bg-stone-900 text-teal-300",
          numberText: "text-teal-950/40",
        };
      case "peach":
        return {
          bg: "bg-[#fed7aa] text-stone-900",
          border: "border-orange-700/20",
          badgeBg: "bg-stone-900 text-orange-300",
          iconBg: "bg-stone-900 text-orange-300",
          numberText: "text-orange-950/40",
        };
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-24 text-[#0e0f11] border-b border-black/10">
      {/* Blueprint & Graph Paper Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(0,0,0,0.12)_1px,transparent_1px)] [background-size:18px_18px]" />

      {/* Ambient Wall Tape Accents */}
      <div className="tape-strip top-8 left-12 rotate-[-15deg] opacity-50 hidden sm:block !w-16 !h-4" />
      <div className="tape-strip top-10 right-16 rotate-[12deg] opacity-50 hidden md:block !w-16 !h-4" />
      <div className="tape-strip bottom-8 right-1/3 rotate-[6deg] opacity-40 hidden lg:block !w-16 !h-4" />

      <div className="container-x relative z-10 px-4 sm:px-6">
        {/* ============================================================ */}
        {/* 1. HEADER: DOSSIER BADGE, TITLE & HANDWRITTEN ANNOTATION */}
        {/* ============================================================ */}
        <Reveal className="mb-14 sm:mb-18 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-[#c9f31d] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black shadow-xs">
            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
            <span>📌 EXECUTION WORKFLOW</span>
          </div>

          <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight text-heading sm:text-5xl lg:text-6xl leading-[1.04]">
            How We Can{" "}
            <span className="font-handwriting text-4xl sm:text-6xl lg:text-7xl text-emerald-800 underline decoration-wavy decoration-[#c9f31d] normal-case inline-block mt-1">
              Help You?
            </span>
          </h2>

          <div className="mt-3 inline-flex items-center gap-2">
            <span className="font-handwriting text-lg sm:text-xl font-bold text-amber-900 -rotate-1">
              ✦ Sprint-based execution • Total transparency
            </span>
          </div>
        </Reveal>

        {/* ============================================================ */}
        {/* 2. UNIQUE 4-STEP TORN STICKY NOTES PLAYBOOK SPREAD */}
        {/* ============================================================ */}
        <div className="relative">
          {/* Connecting Dashed Pipeline Arrow for Desktop */}
          <div className="pointer-events-none absolute top-1/2 left-0 right-0 hidden lg:block -translate-y-12 z-0">
            <svg
              className="w-full h-12 text-black/20"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1200 48"
            >
              <path
                d="M 100,24 Q 300,4 500,24 T 900,24 Q 1050,44 1100,24"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch relative z-10">
            {STEPS.map((step, index) => {
              const styles = getThemeStyles(step.colorTheme);
              const isHovered = hoveredIndex === index;

              return (
                <Reveal
                  key={step.no}
                  delay={index * 0.09}
                  className="relative flex flex-col"
                >
                  <div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      transform: isHovered
                        ? "translateY(-12px) scale(1.03) rotate(0deg)"
                        : `rotate(${step.rotation}deg)`,
                      transition: "all 0.38s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      filter: isHovered
                        ? "drop-shadow(0 24px 30px rgba(0,0,0,0.22)) drop-shadow(0 10px 12px rgba(0,0,0,0.1)) drop-shadow(0 0 18px rgba(201,243,29,0.3))"
                        : "drop-shadow(0 12px 16px rgba(0,0,0,0.11)) drop-shadow(0 4px 6px rgba(0,0,0,0.04))",
                    }}
                    className="group relative flex flex-col h-full cursor-pointer"
                  >
                    {/* Torn Paper Sheet Container */}
                    <div
                      style={{
                        clipPath: TORN_PAPER_BOTTOM_CLIP,
                      }}
                      className={`relative flex flex-col justify-between h-full overflow-hidden rounded-t-2xl p-6 sm:p-7 pb-14 sm:pb-16 ${styles.bg} ${styles.border} border-t-2 border-l-2 border-r-2`}
                    >
                      {/* Faint Graph/Ruled Lines on Note */}
                      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_bottom,rgba(0,0,0,0.4)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.4)_1px,transparent_1px)] [background-size:22px_22px]" />

                      {/* Giant Watermark Step Number in Background */}
                      <div className={`pointer-events-none absolute -right-2 -bottom-4 select-none font-black text-7xl sm:text-8xl ${styles.numberText} font-mono leading-none`}>
                        {step.no}
                      </div>

                      {/* Top Tape / Push Pin Header Accents */}
                      {step.pinType === "tape-single" ? (
                        <div className="tape-strip -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg] z-20 !w-16 !h-4" />
                      ) : step.pinType === "tape-double" ? (
                        <>
                          <div className="tape-strip -top-2.5 left-4 rotate-[-10deg] z-20 !w-12 !h-3.5" />
                          <div className="tape-strip -top-2.5 right-4 rotate-[8deg] z-20 !w-12 !h-3.5" />
                        </>
                      ) : step.pinType === "pin-red" ? (
                        <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                          <div className="relative">
                            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-black/40 blur-[1px]" />
                            <div className="h-4 w-4 rounded-full bg-red-600 border-2 border-white shadow-md flex items-center justify-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-white/90" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                          <div className="relative">
                            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-black/40 blur-[1px]" />
                            <div className="h-4 w-4 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-white/90" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Header Row: Step Pill Badge & Icon */}
                      <div className="relative z-10 border-b border-black/15 pb-3.5 mb-4 flex items-center justify-between gap-2">
                        <span
                          className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${styles.badgeBg} shadow-xs`}
                        >
                          PHASE // {step.no}
                        </span>

                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-xl ${styles.iconBg} text-sm shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                        >
                          <i className={step.icon} />
                        </div>
                      </div>

                      {/* Title & Body */}
                      <div className="relative z-10 flex-1 space-y-2">
                        <h3 className="text-xl font-black uppercase tracking-tight text-black leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-stone-900/85 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
