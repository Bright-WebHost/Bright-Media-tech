"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Reveal from "@/components/motion/Reveal";

/* ─── Data ─────────────────────────────────────────────────────────────── */
interface ClientItem {
  id: number;
  label: string;
  sub: string;
  gradient: string;
  accent: string;
  icon: string;
}

const clients: ClientItem[] = [
  {
    id: 1,
    label: "Tech Startup",
    sub: "Product Strategy & Growth",
    gradient: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
    accent: "#7c6bff",
    icon: "fas fa-microchip",
  },
  {
    id: 2,
    label: "Fashion Brand",
    sub: "Brand Identity & Campaigns",
    gradient: "linear-gradient(to bottom, #1a0533, #6b2d6b, #b8860b)",
    accent: "#f7a8d8",
    icon: "fas fa-gem",
  },
  {
    id: 3,
    label: "Real Estate",
    sub: "Digital Marketing & SEO",
    gradient: "linear-gradient(to bottom, #0d2b1e, #1a5740, #2d6a4f)",
    accent: "#52e0a1",
    icon: "fas fa-building",
  },
  {
    id: 4,
    label: "E-Commerce",
    sub: "Conversion & Performance Ads",
    gradient: "linear-gradient(to bottom, #2c1502, #7c3a00, #c85e00)",
    accent: "#ffb347",
    icon: "fas fa-shopping-bag",
  },
  {
    id: 5,
    label: "SaaS Company",
    sub: "UI/UX Design & Development",
    gradient: "linear-gradient(to bottom, #00111c, #003459, #0077b6)",
    accent: "#00d4ff",
    icon: "fas fa-layer-group",
  },
];

const DESKTOP_WIDTH = 400;
const GAP = 30;

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function OurClients() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalDistance = (clients.length - 1) * (DESKTOP_WIDTH + GAP);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <section id="our-clients" className="bg-dark">
      {/* ── Intro ── */}
      <div className="flex min-h-[30vh] sm:h-[35vh] flex-col items-center justify-end pb-2 text-center container-x px-4 sm:px-6 pt-16 sm:pt-0">
        <Reveal direction="up">
          <h4 className="section-label mb-4">Our Clients</h4>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Brands We&apos;ve{" "}
            <span className="text-primary">Transformed</span>
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <p className="mt-4 max-w-xl text-[14px] sm:text-[15px] leading-relaxed text-gray-400 px-4">
            From bold startups to established enterprises, we partner with
            ambitious brands to craft strategies and experiences that drive real
            results.
          </p>
        </Reveal>
      </div>

      {/* ── Mobile: plain vertical cards ── */}
      {isMobile ? (
        <div className="px-4 py-10 flex flex-col gap-5">
          {clients.map((item) => (
            <ClientCard key={item.id} item={item} mobile />
          ))}
        </div>
      ) : (
        /* ── Desktop: horizontal scroll gallery ── */
        <div ref={containerRef} style={{ height: "250vh" }} className="relative hidden md:block">
          <div className="sticky top-0 flex h-screen items-center justify-start overflow-visible">
            <div
              className="relative ml-[max(calc(50vw-200px),16px)] overflow-visible"
              style={{ width: DESKTOP_WIDTH }}
            >
              <motion.div className="flex" style={{ x, gap: GAP }}>
                {clients.map((item) => (
                  <ClientCard key={item.id} item={item} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* ── Outro ── */}
      <div className="flex items-center justify-center py-10 sm:h-[5vh]">
        <Reveal direction="up">
          <a href="#" className="btn-primary group gap-3 px-7 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">
            <span>View All Clients</span>
            <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Card ─────────────────────────────────────────────────────────────── */
function ClientCard({ item, mobile = false }: { item: ClientItem; mobile?: boolean }) {
  return (
    <div
      className="relative flex-shrink-0 overflow-hidden rounded-2xl group cursor-pointer"
      style={{
        width: mobile ? "100%" : DESKTOP_WIDTH,
        height: mobile ? 220 : 500,
        background: item.gradient,
      }}
    >
      {/* Bottom glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: item.accent }}
      />

      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Icon */}
      <div
        className="absolute right-6 top-6 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/10 text-base sm:text-lg backdrop-blur-sm"
        style={{ color: item.accent }}
      >
        <i className={item.icon} />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
        <div
          className="mb-3 sm:mb-4 h-px w-full opacity-30"
          style={{ background: `linear-gradient(to right, ${item.accent}, transparent)` }}
        />
        <span
          className="mb-2 sm:mb-3 block font-mono text-xs sm:text-sm font-semibold tracking-wider"
          style={{ color: item.accent }}
        >
          0{item.id}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white">{item.label}</h3>
        <p className="mt-1 text-xs sm:text-sm text-white/50">{item.sub}</p>
        <div className="mt-3 sm:mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/40 transition-colors duration-300 group-hover:text-white/80">
          <span>View Project</span>
          <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
