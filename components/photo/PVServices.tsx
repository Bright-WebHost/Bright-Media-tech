"use client";

import { motion } from "framer-motion";
import { Camera, Film, Users, Radio, Sparkles } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import PVTools from "./PVTools";

/** Realistic 3D Pushpin component SVG */
function PushPin({ color = "red", className = "" }: { color?: "red" | "blue" | "green" | "gold" | "purple"; className?: string }) {
  const colorMap = {
    red: {
      top: "#EF4444",
      mid: "#DC2626",
      dark: "#991B1B",
      highlight: "#FCA5A5",
    },
    blue: {
      top: "#3B82F6",
      mid: "#2563EB",
      dark: "#1E40AF",
      highlight: "#93C5FD",
    },
    purple: {
      top: "#A855F7",
      mid: "#9333EA",
      dark: "#6B21A8",
      highlight: "#E9D5FF",
    },
    green: {
      top: "#10B981",
      mid: "#059669",
      dark: "#065F46",
      highlight: "#6EE7B7",
    },
    gold: {
      top: "#F59E0B",
      mid: "#D97706",
      dark: "#92400E",
      highlight: "#FDE68A",
    },
  };

  const c = colorMap[color];
  const pinId = `pin-grad-${color}`;

  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      <svg
        width="44"
        height="52"
        viewBox="0 0 48 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md overflow-visible"
      >
        <defs>
          <radialGradient id={pinId} cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor={c.highlight} />
            <stop offset="40%" stopColor={c.top} />
            <stop offset="85%" stopColor={c.mid} />
            <stop offset="100%" stopColor={c.dark} />
          </radialGradient>
          <linearGradient id="needle-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="50%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>
        </defs>

        {/* Pin Shadow on card */}
        <ellipse cx="32" cy="46" rx="10" ry="4" fill="rgba(0,0,0,0.22)" filter="blur(1.5px)" />
        <ellipse cx="24" cy="48" rx="2.5" ry="1" fill="rgba(0,0,0,0.4)" />

        {/* Needle */}
        <path d="M 23 28 L 24 48 L 25 28 Z" fill="url(#needle-grad)" stroke="#475569" strokeWidth="0.5" />

        {/* Pin Knob */}
        <ellipse cx="24" cy="28" rx="8" ry="2.5" fill={c.dark} />
        <path d="M 18 28 L 19.5 16 L 28.5 16 L 30 28 Z" fill={`url(#${pinId})`} />
        <ellipse cx="24" cy="16" rx="7.5" ry="2.2" fill={c.top} />
        <circle cx="24" cy="11" r="7.5" fill={`url(#${pinId})`} />
        <ellipse cx="21.5" cy="8.5" rx="2.5" ry="1.5" fill="white" opacity="0.7" transform="rotate(-20 21.5 8.5)" />
      </svg>
    </div>
  );
}

/** Sticky Note Data */
const SERVICES_NOTES = [
  {
    id: "01",
    tag: "PHOTOGRAPHY",
    title: "CREATIVE CONCEPT DEVELOPMENT",
    desc: "We’ll collaborate with you to develop unique photography and videography concepts that reflect your brand identity and captivate your audience.",
    icon: Camera,
    colorTheme: {
      bg: "bg-[#FFF7ED]",
      border: "border-amber-200/80",
      accent: "#EA580C",
      textDark: "text-slate-900",
      textMuted: "text-slate-600",
      badge: "bg-orange-100 text-orange-800",
    },
    pinColor: "red" as const,
    rotation: "-rotate-4",
    alignClassMobile: "mr-auto lg:mr-0", // Left on mobile, grid item on desktop
    staggerDesktop: "lg:translate-y-0",
  },
  {
    id: "02",
    tag: "PRODUCTION",
    title: "HIGH-QUALITY PRODUCTION",
    desc: "Our team ensures every shot and frame is crafted with precision and creativity, delivering exceptional visual content tailored to your needs.",
    icon: Film,
    colorTheme: {
      bg: "bg-[#EFF6FF]",
      border: "border-blue-200/80",
      accent: "#2563EB",
      textDark: "text-slate-900",
      textMuted: "text-slate-600",
      badge: "bg-blue-100 text-blue-800",
    },
    pinColor: "blue" as const,
    rotation: "rotate-3",
    alignClassMobile: "ml-auto lg:ml-0", // Right on mobile, grid item on desktop
    staggerDesktop: "lg:translate-y-14",
  },
  {
    id: "03",
    tag: "STORYTELLING",
    title: "TAILORED BRAND STORYTELLING",
    desc: "We bring your brand’s story to life through visuals that evoke emotion, inspire action, and leave a lasting impression on your audience.",
    icon: Users,
    colorTheme: {
      bg: "bg-[#FAF5FF]",
      border: "border-purple-200/80",
      accent: "#9333EA",
      textDark: "text-slate-900",
      textMuted: "text-slate-600",
      badge: "bg-purple-100 text-purple-800",
    },
    pinColor: "purple" as const,
    rotation: "-rotate-3",
    alignClassMobile: "mr-auto lg:mr-0", // Left on mobile, grid item on desktop
    staggerDesktop: "lg:-translate-y-2",
  },
  {
    id: "04",
    tag: "POST-PRODUCTION",
    title: "POST-PRODUCTION EXCELLENCE",
    desc: "From editing to color grading, we enhance your visuals with professional post-production techniques that make your content truly stand out.",
    icon: Radio,
    colorTheme: {
      bg: "bg-[#F0FDF4]",
      border: "border-emerald-200/80",
      accent: "#059669",
      textDark: "text-slate-900",
      textMuted: "text-slate-600",
      badge: "bg-emerald-100 text-emerald-800",
    },
    pinColor: "green" as const,
    rotation: "rotate-4",
    alignClassMobile: "ml-auto lg:ml-0", // Right on mobile, grid item on desktop
    staggerDesktop: "lg:translate-y-16",
  },
];

/** SVG Connectors for Mobile (S-curve vertical) and Desktop (Zig-zag horizontal) */
function DottedPinConnectors() {
  return (
    <>
      {/* Mobile/Tablet Vertical S-Curve Connector */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full z-10 lg:hidden block overflow-visible"
        viewBox="0 0 400 1150"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 120 40 C 260 120, 260 210, 280 310 C 140 400, 140 490, 120 590 C 260 680, 260 770, 280 870"
          stroke="rgba(0, 0, 0, 0.12)"
          strokeWidth="3"
          strokeDasharray="6 6"
          strokeLinecap="round"
          fill="none"
          transform="translate(2, 3)"
        />
        <path
          d="M 120 40 C 260 120, 260 210, 280 310 C 140 400, 140 490, 120 590 C 260 680, 260 770, 280 870"
          stroke="#94A3B8"
          strokeWidth="2.5"
          strokeDasharray="7 5"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
      </svg>

      {/* Desktop Horizontal Zig-Zag Connector */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full z-10 hidden lg:block overflow-visible"
        viewBox="0 0 1000 480"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 125 40 Q 250 185 375 175 Q 500 40 625 30 Q 750 190 875 195"
          stroke="rgba(0, 0, 0, 0.12)"
          strokeWidth="3"
          strokeDasharray="6 6"
          strokeLinecap="round"
          fill="none"
          transform="translate(2, 3)"
        />
        <path
          d="M 125 40 Q 250 185 375 175 Q 500 40 625 30 Q 750 190 875 195"
          stroke="#94A3B8"
          strokeWidth="2.5"
          strokeDasharray="7 5"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />

        {/* Pin knots */}
        <circle cx="125" cy="40" r="4" fill="#94A3B8" />
        <circle cx="375" cy="175" r="4" fill="#94A3B8" />
        <circle cx="625" cy="30" r="4" fill="#94A3B8" />
        <circle cx="875" cy="195" r="4" fill="#94A3B8" />
      </svg>
    </>
  );
}

export default function PVServices() {
  return (
    <section className="relative bg-[#ffffff] py-10 sm:py-14 overflow-hidden">
      {/* Background ambient light */}
      {/* <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-[120px]" /> */}

      <div className="container-x relative z-10">
        {/* Lined Notebook Studio Board */}
        <div
          className="relative rounded-3xl p-4 sm:p-10 md:p-12 pb-16 lg:pb-12 border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden"
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
          <Reveal className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-amber-200/60 border border-amber-400/40 text-amber-900 text-xs font-mono tracking-widest uppercase mb-4 shadow-xs transform -rotate-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Production Board &bull; Bright Media</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 font-serif">
              How we can <span className="underline decoration-[#C9F31D]/80 decoration-wavy decoration-2">help you?</span>
            </h2>
          </Reveal>

          {/* Cards Wrapper: Vertical alternating on Mobile, Horizontal 4-Column Grid on Desktop */}
          <div className="relative max-w-3xl lg:max-w-none mx-auto pt-4 pb-12">
            {/* Dotted Thread overlay for both Mobile and Desktop */}
            <DottedPinConnectors />

            <div className="relative z-20 space-y-6 sm:space-y-4 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-6">
              {SERVICES_NOTES.map((note, index) => {
                            const IconComp = note.icon;
                return (
                  <motion.div
                    key={note.id}
                                    initial={{ opacity: 0, y: 30, rotate: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    whileHover={{
                      scale: 1.04,
                      rotate: 0,
                      zIndex: 40,
                      transition: { type: "spring", stiffness: 350, damping: 22 },
                    }}
                    className={`relative w-[88%] sm:w-[68%] lg:w-full ${note.alignClassMobile} ${note.rotation} ${index > 0 ? "-mt-8 sm:-mt-12 lg:mt-0" : ""} ${note.staggerDesktop} transition-shadow duration-300 cursor-pointer select-none`}
                  >
                    {/* Double Layered Card: Outer White Frame */}
                    <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-3.5 sm:p-5 shadow-[0_12px_32px_-6px_rgba(0,0,0,0.1)] border border-slate-200/80 relative">
                      {/* Push Pin placed top center */}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 transition-transform duration-300 group-hover:scale-110">
                        <PushPin color={note.pinColor} />
                      </div>

                      {/* Inner Tinted Box */}
                      <div className={`rounded-xl p-4 sm:p-5 ${note.colorTheme.bg} border ${note.colorTheme.border} relative z-10 pt-4`}>
                        {/* Number #01, #02... */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span
                            className="font-serif italic font-bold text-2xl sm:text-3xl leading-none"
                            style={{ color: note.colorTheme.accent }}
                          >
                            {note.id}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${note.colorTheme.badge}`}>
                            {note.tag}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 mb-2 font-sans">
                          {note.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                          {note.desc}
                        </p>
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
