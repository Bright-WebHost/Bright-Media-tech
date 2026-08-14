"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/motion/Reveal";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "leadership" | "creative" | "marketing" | "development";
  image: string;
  colorTheme: "lime" | "yellow" | "pink" | "teal" | "orange" | "purple" | "blue";
  quote: string;
  experience: string;
  badge: string;
  pinType: "pin-red" | "pin-yellow" | "pin-blue" | "tape-single" | "tape-double";
  rotation: number;
  specialty: string[];
  socials: { icon: string; url: string; label: string }[];
  isCeo?: boolean;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "moideen-shahil",
    name: "Moideen Shahil",
    role: "CEO & Founder",
    department: "leadership",
    image: "/assets/img/team/1.jpg",
    colorTheme: "lime",
    badge: "👑 FOUNDER & CHIEF EXECUTIVE",
    quote: "We don't just follow industry trends — we build audacious creative identities that disrupt markets and endure.",
    experience: "12+ Years Vision",
    pinType: "tape-double",
    rotation: -1.2,
    specialty: ["Brand Architecture", "Strategic Direction", "Creative Disruption", "Venture Scaling"],
    socials: [
      { icon: "fab fa-linkedin-in", url: "#", label: "LinkedIn" },
      { icon: "fab fa-twitter", url: "#", label: "Twitter" },
      { icon: "fas fa-envelope", url: "mailto:james@brightmedia.com", label: "Email" },
    ],
    isCeo: true,
  },
  {
    id: "dalton-gran",
    name: "Dalton Gran",
    role: "Chairman & Strategic Advisor",
    department: "leadership",
    image: "/assets/img/team/2.jpg",
    colorTheme: "yellow",
    badge: "♟️ STRATEGY & GOVERNANCE",
    quote: "Precision in execution is what turns raw ambition into a generational market leader.",
    experience: "15+ Yrs Leadership",
    pinType: "pin-red",
    rotation: 1.8,
    specialty: ["Corporate Strategy", "Global Expansion", "Board Advisory"],
    socials: [
      { icon: "fab fa-linkedin-in", url: "#", label: "LinkedIn" },
      { icon: "fab fa-dribbble", url: "#", label: "Dribbble" },
    ],
  },
  {
    id: "ryan-ricketts",
    name: "Ryan Ricketts",
    role: "Chief Operations Manager",
    department: "leadership",
    image: "/assets/img/team/3.jpg",
    colorTheme: "teal",
    badge: "⚡ OPS & WORKFLOW",
    quote: "Flawless delivery is our baseline. Magic happens in the final 5% of craft and attention.",
    experience: "9+ Yrs Ops",
    pinType: "tape-single",
    rotation: -2.1,
    specialty: ["Process Optimization", "Agile Leadership", "Resource Architecture"],
    socials: [
      { icon: "fab fa-linkedin-in", url: "#", label: "LinkedIn" },
      { icon: "fab fa-facebook-f", url: "#", label: "Facebook" },
    ],
  },
  {
    id: "danny-russell",
    name: "Danny Russell",
    role: "Head of Marketing & Growth",
    department: "marketing",
    image: "/assets/img/team/4.jpg",
    colorTheme: "orange",
    badge: "📈 GROWTH ARCHITECT",
    quote: "Data informs the target, but human emotion and bold storytelling capture the audience.",
    experience: "8+ Yrs Growth",
    pinType: "pin-blue",
    rotation: 2.0,
    specialty: ["Viral Campaigns", "Performance Ads", "Funnel Engineering"],
    socials: [
      { icon: "fab fa-linkedin-in", url: "#", label: "LinkedIn" },
      { icon: "fab fa-twitter", url: "#", label: "Twitter" },
    ],
  },
  // {
  //   id: "sark-hunnen",
  //   name: "Sark Hunnen",
  //   role: "Senior Project Director",
  //   department: "marketing",
  //   image: "/assets/img/team/5.jpg",
  //   colorTheme: "pink",
  //   badge: "🎯 CLIENT SUCCESS",
  //   quote: "Deadlines are sacred covenants, but transforming client visions into reality is our craft.",
  //   experience: "7+ Yrs Management",
  //   pinType: "tape-single",
  //   rotation: -1.7,
  //   specialty: ["Sprint Orchestration", "Stakeholder Alignment", "Quality Delivery"],
  //   socials: [
  //     { icon: "fab fa-linkedin-in", url: "#", label: "LinkedIn" },
  //     { icon: "fab fa-dribbble", url: "#", label: "Dribbble" },
  //   ],
  // },
  // {
  //   id: "rusa-jinuh",
  //   name: "Rusa Jinuh",
  //   role: "Lead Full-Stack Developer",
  //   department: "development",
  //   image: "/assets/img/team/6.jpg",
  //   colorTheme: "blue",
  //   badge: "💻 CODE CRAFTSMAN",
  //   quote: "Writing clean architecture, 60fps micro-interactions, and bulletproof web applications.",
  //   experience: "6+ Yrs Web & Next.js",
  //   pinType: "pin-yellow",
  //   rotation: 1.6,
  //   specialty: ["Next.js / React", "Motion Design", "High-Scale Systems"],
  //   socials: [
  //     { icon: "fab fa-github", url: "#", label: "GitHub" },
  //     { icon: "fab fa-linkedin-in", url: "#", label: "LinkedIn" },
  //   ],
  // },
  // {
  //   id: "dalton-grant",
  //   name: "Dalton Grant",
  //   role: "Lead UI/UX & Brand Designer",
  //   department: "creative",
  //   image: "/assets/img/team/7.jpg",
  //   colorTheme: "purple",
  //   badge: "🎨 DESIGN MAESTRO",
  //   quote: "Design is not simply how it looks — it's the visceral emotional experience of connection.",
  //   experience: "8+ Yrs UI/UX",
  //   pinType: "tape-single",
  //   rotation: -2.3,
  //   specialty: ["Design Systems", "Brand Identities", "Interactive Prototyping"],
  //   socials: [
  //     { icon: "fab fa-dribbble", url: "#", label: "Dribbble" },
  //     { icon: "fab fa-behance", url: "#", label: "Behance" },
  //   ],
  // },
  {
    id: "megh-grant",
    name: "Megh Grant",
    role: "Lead Content & Copy Strategist",
    department: "creative",
    image: "/assets/img/team/8.jpg",
    colorTheme: "lime",
    badge: "✍️ EDITORIAL & COPY",
    quote: "Words that spark curiosity, provoke action, and leave an indelible brand imprint.",
    experience: "5+ Yrs Editorial",
    pinType: "pin-red",
    rotation: 1.9,
    specialty: ["Brand Voice", "Content Ecosystems", "Micro-copy & Tone"],
    socials: [
      { icon: "fab fa-twitter", url: "#", label: "Twitter" },
      { icon: "fab fa-linkedin-in", url: "#", label: "LinkedIn" },
    ],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Minds", count: TEAM_MEMBERS.length },
  { id: "leadership", label: "Leadership", count: TEAM_MEMBERS.filter((m) => m.department === "leadership").length },
  { id: "creative", label: "Creative & Design", count: TEAM_MEMBERS.filter((m) => m.department === "creative").length },
  { id: "marketing", label: "Marketing & Strategy", count: TEAM_MEMBERS.filter((m) => m.department === "marketing").length },
  { id: "development", label: "Tech & Dev", count: TEAM_MEMBERS.filter((m) => m.department === "development").length },
] as const;

// Torn Paper Bottom Polygon (High fidelity jagged ripped paper effect)
const TORN_PAPER_BOTTOM_CLIP =
  "polygon(0% 0%, 100% 0%, 100% calc(100% - 15px), 98% calc(100% - 3px), 95% calc(100% - 12px), 92% calc(100% - 2px), 89% calc(100% - 16px), 85% calc(100% - 4px), 81% calc(100% - 13px), 77% calc(100% - 2px), 73% calc(100% - 15px), 69% calc(100% - 5px), 65% calc(100% - 13px), 61% calc(100% - 1px), 57% calc(100% - 16px), 53% calc(100% - 4px), 48% calc(100% - 15px), 44% calc(100% - 2px), 40% calc(100% - 14px), 36% calc(100% - 5px), 32% calc(100% - 17px), 27% calc(100% - 3px), 23% calc(100% - 13px), 19% calc(100% - 2px), 15% calc(100% - 15px), 11% calc(100% - 4px), 7% calc(100% - 13px), 3% calc(100% - 2px), 0% calc(100% - 11px))";

// CEO Special Grand Torn Paper Polygon
const CEO_TORN_PAPER_BOTTOM_CLIP =
  "polygon(0% 0%, 100% 0%, 100% calc(100% - 20px), 99% calc(100% - 5px), 97% calc(100% - 18px), 95% calc(100% - 4px), 92% calc(100% - 20px), 89% calc(100% - 6px), 86% calc(100% - 18px), 83% calc(100% - 3px), 80% calc(100% - 21px), 77% calc(100% - 5px), 74% calc(100% - 19px), 70% calc(100% - 3px), 67% calc(100% - 22px), 63% calc(100% - 6px), 59% calc(100% - 18px), 55% calc(100% - 2px), 51% calc(100% - 22px), 47% calc(100% - 6px), 43% calc(100% - 19px), 39% calc(100% - 3px), 35% calc(100% - 21px), 31% calc(100% - 5px), 27% calc(100% - 18px), 23% calc(100% - 3px), 19% calc(100% - 20px), 15% calc(100% - 5px), 11% calc(100% - 18px), 7% calc(100% - 3px), 3% calc(100% - 19px), 0% calc(100% - 14px))";

export default function AboutTeam() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const ceo = TEAM_MEMBERS.find((m) => m.isCeo)!;
  const filteredMembers =
    activeCategory === "all"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.department === activeCategory);

  // Helper for background color classes
  const getColorStyles = (color: TeamMember["colorTheme"]) => {
    switch (color) {
      case "lime":
        return {
          bg: "bg-[#d8f938] text-[#0e0f11]",
          tagBg: "bg-black text-[#c9f31d]",
          accent: "#a3cf08",
          border: "border-black/20",
        };
      case "yellow":
        return {
          bg: "bg-[#fef08a] text-stone-900",
          tagBg: "bg-stone-900 text-yellow-300",
          accent: "#eab308",
          border: "border-yellow-700/20",
        };
      case "pink":
        return {
          bg: "bg-[#fecdd3] text-stone-900",
          tagBg: "bg-stone-900 text-pink-300",
          accent: "#f43f5e",
          border: "border-pink-700/20",
        };
      case "teal":
        return {
          bg: "bg-[#99f6e4] text-stone-900",
          tagBg: "bg-stone-900 text-teal-300",
          accent: "#14b8a6",
          border: "border-teal-700/20",
        };
      case "orange":
        return {
          bg: "bg-[#fed7aa] text-stone-900",
          tagBg: "bg-stone-900 text-orange-300",
          accent: "#f97316",
          border: "border-orange-700/20",
        };
      case "blue":
        return {
          bg: "bg-[#bae6fd] text-stone-900",
          tagBg: "bg-stone-900 text-sky-300",
          accent: "#0284c7",
          border: "border-sky-700/20",
        };
      case "purple":
        return {
          bg: "bg-[#e9d5ff] text-stone-900",
          tagBg: "bg-stone-900 text-purple-300",
          accent: "#a855f7",
          border: "border-purple-700/20",
        };
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f5f4ef] py-20 text-[#0e0f11] dark:bg-[#111215] dark:text-white sm:py-28">
      {/* Tactile Craft Paper / Blueprint Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20 [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-10 [background-image:radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Decorative Wall Tape & Pin Accents */}
      <div className="tape-strip -top-2 left-16 rotate-[-15deg] opacity-50 hidden sm:block" />
      <div className="tape-strip top-20 right-12 rotate-[12deg] opacity-50 hidden lg:block" />
      <div className="tape-strip bottom-10 left-10 rotate-[8deg] opacity-40 hidden md:block" />
      <div className="tape-strip -bottom-2 right-24 rotate-[-6deg] opacity-50 hidden sm:block" />

      <div className="container-x relative z-10 px-4 sm:px-6">
        {/* ============================================================ */}
        {/* SECTION HEADER: DOSSIER BADGE, TITLE & HANDWRITTEN ANNOTATION */}
        {/* ============================================================ */}
        <Reveal className="mb-14 sm:mb-18 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-[#c9f31d] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black shadow-xs dark:border-white/20">
            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
            <span>📌 TEAM DIRECTORY // CORE MINDS</span>
          </div>

          <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight text-heading dark:text-white sm:text-5xl lg:text-6xl leading-[1.05]">
            The Creative Minds Behind{" "}
            <span className="font-handwriting text-4xl sm:text-6xl lg:text-7xl text-emerald-700 dark:text-[#c9f31d] underline decoration-wavy decoration-[#c9f31d] dark:decoration-emerald-500 normal-case inline-block mt-1">
              Every Masterpiece.
            </span>
          </h2>

          {/* <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/70 font-medium">
            Turn vision into high-impact reality. Pinned below is our in-house collective of strategists, architects, designers, and engineers.
          </p> */}

          {/* Handwritten Sub-Note */}
          <div className="mt-3 inline-flex items-center gap-2">
            <span className="font-handwriting text-xl sm:text-2xl font-bold text-amber-800 dark:text-amber-300 -rotate-2">
              ✨ 100% In-house craft • Passion-driven team
            </span>
          </div>
        </Reveal>

        {/* ============================================================ */}
        {/* CATEGORY FILTER TABS (PINNED STICKY TABS) */}
        {/* ============================================================ */}
        {/* <Reveal className="mb-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-black text-[#c9f31d] shadow-lg scale-105 dark:bg-[#c9f31d] dark:text-black"
                    : "bg-white/80 text-black/80 hover:bg-white hover:text-black border border-black/10 shadow-xs dark:bg-white/10 dark:text-white/80 dark:border-white/10 dark:hover:bg-white/20"
                }`}
              >
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c9f31d] dark:bg-black" />
                )}
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-black ${
                    isActive
                      ? "bg-[#c9f31d] text-black dark:bg-black dark:text-[#c9f31d]"
                      : "bg-black/10 text-black dark:bg-white/15 dark:text-white"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </Reveal> */}

        {/* ============================================================ */}
        {/* 1. FEATURED CEO SPOTLIGHT CARD (BIGGER & PROMINENT) */}
        {/* ============================================================ */}
        {(activeCategory === "all" || activeCategory === "leadership") && (
          <Reveal className="mb-14 lg:mb-16">
            <div className="mx-auto max-w-5xl">
              <div
                onMouseEnter={() => setHoveredCard(ceo.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform:
                    hoveredCard === ceo.id
                      ? "translateY(-8px) scale(1.01) rotate(0deg)"
                      : `rotate(${ceo.rotation}deg)`,
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  filter:
                    hoveredCard === ceo.id
                      ? "drop-shadow(0 25px 35px rgba(0,0,0,0.22)) drop-shadow(0 10px 15px rgba(201,243,29,0.3))"
                      : "drop-shadow(0 15px 25px rgba(0,0,0,0.14)) drop-shadow(0 4px 6px rgba(0,0,0,0.06))",
                }}
                className="relative"
              >
                {/* Ripped Paper Outer Container with Jagged Bottom Clip */}
                <div
                  style={{
                    clipPath: CEO_TORN_PAPER_BOTTOM_CLIP,
                  }}
                  className="relative overflow-hidden bg-gradient-to-br from-[#dcfc3c] via-[#c9f31d] to-[#b7e30d] p-6 sm:p-10 pb-16 sm:pb-20 text-[#0e0f11] border-t-2 border-l-2 border-r-2 border-black/20"
                >
                  {/* Faint Ruled Grid Pattern on Note */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_bottom,rgba(0,0,0,0.4)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.4)_1px,transparent_1px)] [background-size:24px_24px]" />

                  {/* Dual Scotch Tape Pieces at Top Corners */}
                  <div className="tape-strip -top-3 left-8 rotate-[-6deg] z-30" />
                  <div className="tape-strip -top-3 right-8 rotate-[5deg] z-30" />

                  {/* Brass Push Pin at Center Top */}
                  <div className="pointer-events-none absolute top-3 left-1/2 -translate-x-1/2 z-30">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-black/40 blur-[1px]" />
                      <div className="h-5 w-5 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-300 border-2 border-white shadow-md flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-white" />
                      </div>
                    </div>
                  </div>

                  {/* Perforated Tear Line Along Top */}
                  <div className="relative border-b-2 border-dashed border-black/25 pb-4 mb-6 pt-2 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="rounded-full bg-black px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#c9f31d] shadow-xs">
                        The company is owned by Aboobakker Sadik
                      </span>
                    </div>

                    {/* <div className="flex items-center gap-2">
                      <span className="font-handwriting text-base sm:text-lg font-bold text-black/80">
                        ★ Executive Spotlight
                      </span>
                      <span className="rounded-md bg-black/10 px-2 py-0.5 font-mono text-[10px] font-bold text-black">
                        {ceo.experience}
                      </span>
                    </div> */}
                  </div>

                  {/* CEO Main Content Grid (Larger Portrait + Rich Story) */}
                  <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                    {/* Left: Polaroid-style photo taped on note */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="relative w-full max-w-[320px] rounded-2xl bg-white p-3.5 shadow-xl border border-black/10 rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
                        {/* Mini Tape on Photo */}
                        <div className="tape-strip -top-2.5 left-1/2 -translate-x-1/2 rotate-[2deg] z-20 !w-16 !h-4" />

                        <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-xl bg-stone-200">
                          <Image
                            src={ceo.image}
                            alt={ceo.name}
                            fill
                            priority
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                          {/* Live Status indicator */}
                          {/* <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-black/85 backdrop-blur-xs px-2.5 py-1 text-[10px] font-bold text-[#c9f31d]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#c9f31d] animate-ping" />
                            <span>ON DESK</span>
                          </div> */}
                        </div>

                        {/* Polaroid Caption */}
                        <div className="pt-3 pb-1 text-center">
                          <h3 className="text-xl font-black tracking-tight text-black">
                            {ceo.name}
                          </h3>
                          <p className="font-handwriting text-lg font-bold text-emerald-950">
                            {ceo.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Vision, Manifesto Quote & Highlights */}
                    <div className="lg:col-span-7 space-y-5">
                      <div>
                        <span className="font-mono text-xs font-black uppercase tracking-widest text-black/60 block mb-1">
                          FOUNDER & LEADERSHIP MANIFESTO
                        </span>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-black leading-tight">
                          Leading with Purpose, Craft &amp; Infinite Curiosity.
                        </h3>
                      </div>

                      {/* Handwritten Sticky Quote Box */}
                      <div className="relative rounded-xl bg-black/5 p-4 sm:p-5 border-l-4 border-black">
                        <div className="absolute -top-3 right-4 font-handwriting text-xs font-bold text-black/60 bg-[#c9f31d] px-2 rounded">
                          Founder&apos;s Note ✍️
                        </div>
                        <p className="font-handwriting text-xl sm:text-2xl font-bold leading-snug text-black">
                          &ldquo;{ceo.quote}&rdquo;
                        </p>
                      </div>

                      {/* Core Specialization Pills */}
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-black/70 block mb-2">
                          EXECUTIVE SPECIALIZATIONS:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {ceo.specialty.map((spec) => (
                            <span
                              key={spec}
                              className="rounded-lg bg-black/10 px-3 py-1 text-xs font-extrabold text-black hover:bg-black hover:text-[#c9f31d] transition-colors"
                            >
                              ✦ {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Row: Signature, Social Connect & Action */}
                      <div className="pt-3 border-t border-black/15 flex flex-wrap items-center justify-between gap-4">
                        {/* <div>
                          <span className="text-[10px] font-bold uppercase text-black/50 block">
                            AUTHENTIC SIGNATURE
                          </span>
                          <span className="font-handwriting text-3xl font-black text-black">
                            Moideen Shahil
                          </span>
                        </div> */}

                        {/* Social Buttons */}
                        <div className="flex items-center gap-2">
                          {ceo.socials.map((s) => (
                            <a
                              key={s.icon}
                              href={s.url}
                              aria-label={s.label}
                              className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-[#c9f31d] transition-all duration-300 hover:scale-110 hover:bg-emerald-950 shadow-md"
                            >
                              <i className={s.icon} />
                            </a>
                          ))}
                          <a
                            href="mailto:james@brightmedia.com"
                            className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#c9f31d] transition-transform duration-300 hover:scale-105 shadow-md"
                          >
                            <span>Connect</span>
                            <i className="fas fa-arrow-right text-[10px]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* ============================================================ */}
        {/* 2. TEAM MEMBERS STICKY NOTE GRID (TEARED PAPER STYLE) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start">
          {filteredMembers
            .filter((m) => !m.isCeo || activeCategory !== "all")
            .map((member, index) => {
              const styles = getColorStyles(member.colorTheme);
              const isHovered = hoveredCard === member.id;

              return (
                <Reveal
                  key={member.id}
                  delay={index * 0.06}
                  className="relative flex flex-col"
                >
                  <div
                    onMouseEnter={() => setHoveredCard(member.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      transform: isHovered
                        ? "translateY(-8px) scale(1.02) rotate(0deg)"
                        : `rotate(${member.rotation}deg)`,
                      transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      filter: isHovered
                        ? "drop-shadow(0 16px 20px rgba(0,0,0,0.22)) drop-shadow(0 6px 8px rgba(0,0,0,0.1))"
                        : "drop-shadow(0 8px 12px rgba(0,0,0,0.1)) drop-shadow(0 2px 4px rgba(0,0,0,0.05))",
                    }}
                    className="group relative"
                  >
                    {/* Torn Paper Card Container with Jagged Bottom Clip */}
                    <div
                      style={{
                        clipPath: TORN_PAPER_BOTTOM_CLIP,
                      }}
                      className={`relative flex flex-col justify-between overflow-hidden rounded-t-lg sm:rounded-t-xl p-2.5 sm:p-5 pb-8 sm:pb-12 ${styles.bg} ${styles.border} border-t-2 border-l-2 border-r-2`}
                    >
                      {/* Faint Ruled Grid Pattern on Sticky Note */}
                      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_bottom,rgba(0,0,0,0.4)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.4)_1px,transparent_1px)] [background-size:16px_16px] sm:[background-size:20px_20px]" />

                      {/* Tape or Push Pin Accent */}
                      {member.pinType === "tape-single" ? (
                        <div className="tape-strip -top-2 sm:-top-3 left-1/2 -translate-x-1/2 rotate-[-2deg] z-20 !w-8 sm:!w-16 !h-3 sm:!h-4" />
                      ) : member.pinType === "tape-double" ? (
                        <>
                          <div className="tape-strip -top-2 sm:-top-2.5 left-2 sm:left-4 rotate-[-10deg] z-20 !w-6 sm:!w-12 !h-2.5 sm:!h-3.5" />
                          <div className="tape-strip -top-2 sm:-top-2.5 right-2 sm:right-4 rotate-[8deg] z-20 !w-6 sm:!w-12 !h-2.5 sm:!h-3.5" />
                        </>
                      ) : member.pinType === "pin-red" ? (
                        <div className="pointer-events-none absolute -top-1.5 sm:-top-2 left-1/2 -translate-x-1/2 z-20 scale-75 sm:scale-100">
                          <div className="relative">
                            <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-black/40 blur-[1px]" />
                            <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-red-600 border-2 border-white shadow-md flex items-center justify-center">
                              <div className="h-1 w-1 rounded-full bg-white/80" />
                            </div>
                          </div>
                        </div>
                      ) : member.pinType === "pin-blue" ? (
                        <div className="pointer-events-none absolute -top-1.5 sm:-top-2 left-1/2 -translate-x-1/2 z-20 scale-75 sm:scale-100">
                          <div className="relative">
                            <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-black/40 blur-[1px]" />
                            <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center">
                              <div className="h-1 w-1 rounded-full bg-white/80" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="pointer-events-none absolute -top-1.5 sm:-top-2 left-1/2 -translate-x-1/2 z-20 scale-75 sm:scale-100">
                          <div className="relative">
                            <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-black/40 blur-[1px]" />
                            <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-amber-400 border-2 border-white shadow-md flex items-center justify-center">
                              <div className="h-1 w-1 rounded-full bg-white/80" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Polaroid Photo Frame */}
                      <div className="relative z-10 overflow-hidden rounded-lg sm:rounded-xl bg-white p-1.5 sm:p-2 shadow-md border border-black/10 rotate-[0.5deg]">
                        <div className="relative h-28 sm:h-44 md:h-48 w-full overflow-hidden rounded-md sm:rounded-lg bg-stone-200">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 grayscale-[25%]"
                          />
                        </div>

                        {/* Member Name and Role in Polaroid Footer */}
                        <div className="pt-1.5 sm:pt-2.5 pb-0.5 text-center">
                          <h4 className="font-black text-xs sm:text-base lg:text-lg text-black leading-tight truncate">
                            {member.name}
                          </h4>
                          <span className="font-handwriting text-[11px] sm:text-sm lg:text-base font-bold text-stone-800 block truncate leading-tight mt-0.5">
                            {member.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
        </div>
      </div>
    </section>
  );
}
