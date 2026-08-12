"use client";

import { motion } from "framer-motion";

interface ToolItem {
  name: string;
  type:
    | "htmlcss"
    | "javascript"
    | "react"
    | "nextjs";
}

const TOOLS_LIST: ToolItem[] = [
  { name: "HTML & CSS", type: "htmlcss" },
  { name: "Javascript", type: "javascript" },
  { name: "Reactjs", type: "react" },
  { name: "Nextjs", type: "nextjs" },
  { name: "HTML & CSS", type: "htmlcss" },
  { name: "Javascript", type: "javascript" },
  { name: "Reactjs", type: "react" },
  { name: "Nextjs", type: "nextjs" },
];

function ToolBadgeIcon({ type }: { type: ToolItem["type"] }) {
  switch (type) {
    
    case "htmlcss":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1a1429] border border-[#e44d26]/40 shadow-sm p-1.5">
          <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" stroke="#264de4" />
            <polyline points="8 6 2 12 8 18" stroke="#e44d26" />
          </svg>
        </div>
      );
    case "javascript":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f7df1e] shadow-sm">
          <span className="text-[12px] font-black tracking-tighter text-[#1e1e1e] leading-none select-none font-mono">
            JS
          </span>
        </div>
      );
    case "react":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0d1e2b] border border-[#61dafb]/40 shadow-sm p-1">
          <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-4 w-4" fill="none">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </div>
      );
    case "nextjs":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black border border-white/30 shadow-sm p-1.5">
          <svg viewBox="0 0 180 180" className="h-full w-full" fill="none">
            <mask height="180" id="mask0_next" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
              <circle cx="90" cy="90" fill="black" r="90" />
            </mask>
            <g mask="url(#mask0_next)">
              <circle cx="90" cy="90" fill="black" r="90" />
              <path d="M149.508 157.438L69.1478 54H54V125.979H66.9377V69.6775L140.263 164.444C143.515 162.261 146.603 159.919 149.508 157.438Z" fill="url(#paint0_linear_next)" />
              <rect fill="url(#paint1_linear_next)" height="72" width="13" x="115" y="54" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_next" gradientUnits="userSpaceOnUse" x1="109" x2="144.5" y1="116.5" y2="160.5">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_next" gradientUnits="userSpaceOnUse" x1="121" x2="120.799" y1="54" y2="106.875">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
  }
}

export default function WDTools() {
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

