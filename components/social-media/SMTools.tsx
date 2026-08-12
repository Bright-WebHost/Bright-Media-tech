"use client";

import { motion } from "framer-motion";

interface ToolItem {
  name: string;
  type:
    | "indesign"
    | "coreldraw"
    | "photoshop"
    | "illustrator"
    | "aftereffects"
    | "premiere"
    | "lightroom"
    | "htmlcss"
    | "javascript"
    | "react"
    | "nextjs"
    | "analytics"
    | "searchconsole"
    | "semrush"
    | "metaads"
    | "googleads"
    | "snapchat"
    | "sonyalpha";
}

const TOOLS_LIST: ToolItem[] = [
  { name: "Adobe Photoshop", type: "photoshop" },
  { name: "Adobe Illustrator", type: "illustrator" },
  { name: "Adobe InDesign", type: "indesign" },
  { name: "Adobe After Effects", type: "aftereffects" },
  { name: "Adobe Premiere Pro", type: "premiere" },
  { name: "Adobe Lightroom", type: "lightroom" },
  { name: "CorelDRAW", type: "coreldraw" },
  { name: "Sony Alpha Mirrorless Camera", type: "sonyalpha" },
  { name: "HTML & CSS", type: "htmlcss" },
  { name: "Javascript", type: "javascript" },
  { name: "Reactjs", type: "react" },
  { name: "Nextjs", type: "nextjs" },
  { name: "Google Analytics", type: "analytics" },
  { name: "Google Search Console", type: "searchconsole" },
  { name: "SEMRUSH", type: "semrush" },
  { name: "Meta Ads Manager", type: "metaads" },
  { name: "Google Ads", type: "googleads" },
  { name: "Snapchat Ads", type: "snapchat" },
];

function ToolBadgeIcon({ type }: { type: ToolItem["type"] }) {
  switch (type) {
    case "indesign":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#36001a] border border-[#ff3366]/40 shadow-sm">
          <span className="text-[12px] font-black tracking-tight text-[#ff3366] leading-none select-none">
            Id
          </span>
        </div>
      );
    case "coreldraw":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm">
          <svg viewBox="0 0 100 100" className="h-full w-full" fill="none">
            {/* CorelDRAW Hot Air Balloon */}
            <path
              d="M50 10 C30 10 16 26 16 46 C16 62 30 76 42 86 L42 90 C42 92 44 94 47 94 L53 94 C56 94 58 92 58 90 L58 86 C70 76 84 62 84 46 C84 26 70 10 50 10 Z"
              fill="#54B848"
            />
            <path
              d="M50 10 C42 22 38 34 38 48 C38 64 44 76 50 86 C56 76 62 64 62 48 C62 34 58 22 50 10 Z"
              fill="#3DAE2B"
            />
            <path
              d="M50 10 C46 22 44 34 44 48 C44 64 47 76 50 86 C53 76 56 64 56 48 C56 34 54 22 50 10 Z"
              fill="#FFDE00"
            />
            <rect x="45" y="93" width="10" height="5" rx="1.5" fill="#333333" />
          </svg>
        </div>
      );
    case "photoshop":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#001d34] border border-[#31a8ff]/40 shadow-sm">
          <span className="text-[12px] font-black tracking-tight text-[#31a8ff] leading-none select-none">
            Ps
          </span>
        </div>
      );
    case "illustrator":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#331900] border border-[#ff9a00]/40 shadow-sm">
          <span className="text-[12px] font-black tracking-tight text-[#ff9a00] leading-none select-none">
            Ai
          </span>
        </div>
      );
    case "aftereffects":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#18002e] border border-[#9999ff]/40 shadow-sm">
          <span className="text-[12px] font-black tracking-tight text-[#9999ff] leading-none select-none">
            Ae
          </span>
        </div>
      );
    case "premiere":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#240033] border border-[#ea77ff]/40 shadow-sm">
          <span className="text-[12px] font-black tracking-tight text-[#ea77ff] leading-none select-none">
            Pr
          </span>
        </div>
      );
    case "lightroom":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#001c2b] border border-[#31a8ff]/40 shadow-sm">
          <span className="text-[12px] font-black tracking-tight text-[#31a8ff] leading-none select-none">
            Lr
          </span>
        </div>
      );
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
    case "metaads":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#001b3a] border border-[#0081fb]/40 shadow-sm p-1.5">
          <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
            <path
              d="M12 14.5c-1.6 2-3 3-4.8 3C4.5 17.5 3 15.5 3 12.5 3 9.5 4.8 7 7.2 7c2 0 3.3 1.5 4.8 3.5 1.5-2 2.8-3.5 4.8-3.5 2.4 0 4.2 2.5 4.2 5.5 0 3-1.5 5-4.2 5-1.8 0-3.2-1-4.8-3z"
              stroke="url(#metaGrad)"
              strokeWidth="2.2"
            />
            <defs>
              <linearGradient id="metaGrad" x1="3" y1="7" x2="21" y2="17.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0081fb" />
                <stop offset="0.5" stopColor="#0064e0" />
                <stop offset="1" stopColor="#00c6ff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
    case "googleads":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#181d24] border border-[#fbbc04]/40 shadow-sm p-1.5">
          <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
            <path d="M4.5 16.5l7-12c.5-.9 1.6-1.2 2.5-.7l1.5.9c.9.5 1.2 1.6.7 2.5l-7 12c-.5.9-1.6 1.2-2.5.7l-1.5-.9c-.9-.5-1.2-1.6-.7-2.5z" fill="#4285f4" />
            <path d="M19.5 16.5l-7-12c-.5-.9-1.6-1.2-2.5-.7l-1.5.9c-.9.5-1.2 1.6-.7 2.5l7 12c.5.9 1.6 1.2 2.5.7l1.5-.9c.9-.5 1.2-1.6.7-2.5z" fill="#fbbc04" />
            <circle cx="6" cy="18" r="3" fill="#34a853" />
          </svg>
        </div>
      );
    case "snapchat":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fffc00] shadow-sm p-1">
          <svg viewBox="0 0 24 24" className="h-full w-full" fill="#000000">
            <path d="M12 3c-3.3 0-5.5 2.2-5.5 5.5 0 1.2.3 2.1.3 2.1s-.8.3-1.3.6c-.6.4-.7.8-.5 1.1.3.4 1.1.4 1.7.2.2.6.5 1.2 1.1 1.7-.8.5-2 .9-2.3 1.8-.2.7.3 1.3 1.2 1.3 1.4 0 2.5-.8 3.3-1.1.7.4 1.5.5 2 .5s1.3-.1 2-.5c.8.3 1.9 1.1 3.3 1.1.9 0 1.4-.6 1.2-1.3-.3-.9-1.5-1.3-2.3-1.8.6-.5.9-1.1 1.1-1.7.6.2 1.4.2 1.7-.2.2-.3.1-.7-.5-1.1-.5-.3-1.3-.6-1.3-.6s.3-.9.3-2.1c0-3.3-2.2-5.5-5.5-5.5z" />
          </svg>
        </div>
      );
    case "sonyalpha":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff5500] shadow-sm">
          <span className="text-[14px] font-black tracking-tight text-white leading-none select-none font-serif italic">
            α
          </span>
        </div>
      );
  }
}

export default function SMTools() {
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

