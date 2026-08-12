"use client";

import { motion } from "framer-motion";

interface ToolItem {
  name: string;
  type:
    | "analytics"
    | "searchconsole"
    | "semrush"
}

const TOOLS_LIST: ToolItem[] = [
  { name: "Google Analytics", type: "analytics" },
  { name: "Google Search Console", type: "searchconsole" },
  { name: "SEMRUSH", type: "semrush" },
  { name: "Google Analytics", type: "analytics" },
  { name: "Google Search Console", type: "searchconsole" },
  { name: "SEMRUSH", type: "semrush" },
];

function ToolBadgeIcon({ type }: { type: ToolItem["type"] }) {
  switch (type) {
    case "analytics":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#291b00] border border-[#f9ab00]/40 shadow-sm p-1.5">
          <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
            <rect x="3" y="14" width="4" height="7" rx="1.5" fill="#f9ab00" />
            <rect x="10" y="9" width="4" height="12" rx="1.5" fill="#e37400" />
            <rect x="17" y="4" width="4" height="17" rx="1.5" fill="#f9ab00" />
          </svg>
        </div>
      );
    case "searchconsole":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0d1d36] border border-[#4285f4]/40 shadow-sm p-1.5">
          <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
            <path d="M4 19h16v2H4z" fill="#34a853" />
            <path d="M5 15l4-5 4 3 5-7" stroke="#4285f4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="18" cy="6" r="2.5" fill="#ea4335" />
            <circle cx="13" cy="13" r="1.5" fill="#fbbc04" />
            <circle cx="9" cy="10" r="1.5" fill="#4285f4" />
          </svg>
        </div>
      );
    case "semrush":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff642d] shadow-sm p-1">
          <svg viewBox="0 0 32 32" className="h-full w-full" fill="white">
            <path d="M16 4C14 8 10 10 8 13C6 16 6 19 8 22C10 25 13 28 16 28C19 28 22 25 24 22C26 19 26 16 24 13C22 10 18 8 16 4Z" />
            <path d="M16 11C14.5 13.5 12 15 11 17C10 19 10.5 21 12 22.5C13.5 24 15 24.5 16 24.5C17 24.5 18.5 24 20 22.5C21.5 21 22 19 21 17C20 15 17.5 13.5 16 11Z" fill="#ff642d" />
          </svg>
        </div>
      );
  }
}

export default function SEOTools() {
  return (
    <div className="relative w-full py-6 sm:py-8 bg-[#fffff00]">
      <div className="container-x">
        {/* Outer Shadow Wrapper Container */}
        <div className="relative mx-auto max-w-5xl">
          {/* Grey Offset Shadow Layer matching design */}
          <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-3.5 sm:translate-y-3.5 rounded-[28px] sm:rounded-[36px] bg-[#616875] transition-all" />

          {/* Main Dark Capsule Box */}
          <div className="relative z-10 overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#0c0d10] px-6 py-6 sm:px-8 sm:py-7 border border-white/[0.08] shadow-2xl">
            {/* Subtle Grid Canvas Background */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #ffffff 1px, transparent 1px),
                  linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                `,
                backgroundSize: "28px 28px",
              }}
            />

            {/* Subtle Center Radial Glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, transparent 80%)",
              }}
            />

            {/* Header: Dot + Monospace Text */}
            <div className="relative z-10 mb-4 sm:mb-5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9f31d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9f31d]" />
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#c9f31d]">
                OUR TOOLBOX // NATIVE PLATFORMS & TECH STACK
              </span>
            </div>

            {/* Infinite Horizontal Marquee Track */}
            <div className="relative z-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <motion.div
                className="flex items-center gap-3 sm:gap-4 w-max"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 40,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {/* Duplicated for seamless loop */}
                {[...TOOLS_LIST, ...TOOLS_LIST].map((tool, idx) => (
                  <div
                    key={`${tool.name}-${idx}`}
                    className="group flex items-center gap-2.5 sm:gap-3 rounded-full border border-white/10 bg-[#16181d]/90 px-3.5 py-1.5 sm:px-4 sm:py-2 backdrop-blur-md transition-all duration-300 hover:border-[#c9f31d]/60 hover:bg-[#202228] hover:scale-105 shrink-0 cursor-default"
                  >
                    {/* Tool Custom App Icon */}
                    <ToolBadgeIcon type={tool.type} />

                    {/* Tool Name Label */}
                    <span className="text-xs sm:text-sm font-semibold text-white/90 group-hover:text-white transition-colors whitespace-nowrap pr-1">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

