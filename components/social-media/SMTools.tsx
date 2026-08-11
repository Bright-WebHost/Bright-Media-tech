"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const tools = [
  {
    name: "Adobe Illustrator",
    category: "Management",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzuT_YMrMflo1_fFuocx8aLR97k9HWTTonCm6cHXHhw&s=10",
    color: "#0668E1",
  },
  {
    name: "Adobe InDesign",
    category: "Reels & Stories",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56ns-o5aKW7j_afazkjeFAIoYeh7OhnHhz6emJGIktA&s=10",
    color: "#E1306C",
  },
  {
    name: "CorelDRAW",
    category: "Paid & Organic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTldxIaJivKAgsx4Md-PGwDPTwxyfMnhKhtX225IwgTA9Ht5Zsv64rieA&s=10",
    color: "#1877F2",
  },
  {
    name: "Photoshop",
    category: "B2B Scale",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Adobe_Photoshop_CC_2026_icon.svg/1280px-Adobe_Photoshop_CC_2026_icon.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
    color: "#0A66C2",
  },
  // {
  //   name: "Hootsuite",
  //   category: "Automation",
  //   image: "https://cdn.worldvectorlogo.com/logos/hootsuite.svg",
  //   color: "#143059",
  // },
  // {
  //   name: "SemRush",
  //   category: "Intelligence",
  //   image: "https://cdn.worldvectorlogo.com/logos/semrush-1.svg",
  //   color: "#FF642D",
  // },
  // {
  //   name: "Photoshop",
  //   category: "Creative Assets",
  //   image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
  //   color: "#31A8FF",
  // },
  // {
  //   name: "TikTok",
  //   category: "Viral Trends",
  //   image: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
  //   color: "#000000",
  // },
  // {
  //   name: "YouTube",
  //   category: "Video Ads",
  //   image: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
  //   color: "#FF0000",
  // },
  // {
  //   name: "Google Analytics",
  //   category: "Attribution",
  //   image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Analytics_logo.svg",
  //   color: "#F4B400",
  // },
];

export default function SMTools() {
  return (
    <section className="relative overflow-hidden bg-[#0a0b0e] py-8 sm:py-10 border-y border-white/10 text-white">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,243,29,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Subtle Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="container-x relative z-10">
        {/* Compact CTA Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9f31d] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c9f31d]" />
            </span>
            <span className="font-mono text-xs font-black uppercase tracking-wider text-[#c9f31d]">
              OUR TOOLBOX // NATIVE PLATFORMS
            </span>
          </div>
          {/* <span className="font-mono text-[11px] text-white/50 tracking-wider hidden sm:inline-block">
            ⚡ 100% DIRECT API INTEGRATION
          </span> */}
        </div>

        {/* Horizontal Marquee / Ribbon of Platform Logo Image + Title in Same Row */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex items-center gap-4 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Duplicated tools for seamless infinite loop */}
            {[...tools, ...tools].map((tool, idx) => (
              <div
                key={`${tool.name}-${idx}`}
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-[#c9f31d]/50 hover:bg-white/[0.08] hover:scale-105 shadow-sm shrink-0 cursor-default"
              >
                {/* Platform Logo Image Badge in Same Row */}
                <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white p-1.5 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={20}
                    height={20}
                    className="h-full w-full object-contain"
                    unoptimized
                  />
                </div>

                {/* Platform Title in Same Row */}
                <div className="flex flex-col pr-1">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-[#c9f31d] transition-colors leading-tight">
                    {tool.name}
                  </span>
                  {/* <span className="text-[9px] font-mono text-white/40 uppercase tracking-wider leading-tight">
                    {tool.category}
                  </span> */}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
