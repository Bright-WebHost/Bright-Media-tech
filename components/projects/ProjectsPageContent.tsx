"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { PROJECT_CATEGORIES, ALL_PROJECTS, type Project, type ProjectCategory } from "@/lib/projects";

// ─── Card Component ────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      key={project.id}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.38, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-2xl bg-[#111] cursor-pointer"
    >
      <Link href={`/projects/${project.id}`} className="block">
        {/* Image */}
        <div className="relative h-[280px] sm:h-[320px] lg:h-[360px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.brand}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            unoptimized
          />
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          {/* Category pill */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-primary/90 text-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>

          {/* Year */}
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
              {project.year}
            </span>
          </div>

          {/* Hover arrow */}
          <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-dark" />
            </div>
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            <h3 className="text-white font-bold text-lg leading-tight mb-1">{project.brand}</h3>
            <div className="flex items-center gap-1.5 text-white/55 text-xs">
              <MapPin className="w-3 h-3 shrink-0" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ProjectsPageContent() {
  const [active, setActive] = useState<ProjectCategory>("All");

  const filtered =
    active === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden pt-40 pb-24 px-4">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/8 rounded-full blur-[140px]" />

        <div className="container-x relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/8 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Our Portfolio
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
              Work That
              <br />
              <span className="text-primary relative inline-block">
                Speaks
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6 Q50 0 100 6 Q150 12 200 6" stroke="#C9F31D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </span>
              {" "}Louder.
            </h1>

            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              Crafting visual identities, digital experiences & unforgettable
              campaigns for brands across the globe.
            </p>
          </motion.div>

          {/* Stats row */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-10 mt-12"
          >
            {[
              { num: "31K+", label: "Projects Delivered" },
              { num: "12+", label: "Countries Served" },
              { num: "98%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label}>
                <span className="block text-3xl font-black text-white">{s.num}</span>
                <span className="block text-white/40 text-xs tracking-wider uppercase mt-0.5">{s.label}</span>
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>

      {/* ── Filter Tabs (sticky) ── */}
      <div className="sticky top-[68px] z-50 bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-white/5 px-4">
        <div className="container-x overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 py-4 w-max">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  active === cat
                    ? "text-dark"
                    : "text-white/50 hover:text-white hover:bg-white/8"
                }`}
              >
                {active === cat && (
                  <motion.span
                    layoutId="pill-bg"
                    className="absolute inset-0 rounded-full bg-primary -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="px-4 py-14">
        <div className="container-x">
          <div className="flex items-center justify-between mb-8">
            <p className="text-white/30 text-sm">
              Showing{" "}
              <span className="text-white font-semibold">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "project" : "projects"}
              {active !== "All" && ` in ${active}`}
            </p>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-white/30">
              <p className="text-lg">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="px-4 pb-24">
        <div className="container-x">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 bg-gradient-to-br from-primary/15 via-transparent to-primary/5 border border-primary/20 text-center">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
            </div>
            <p className="text-white/50 text-sm uppercase tracking-widest mb-4 relative z-10">Ready to work together?</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 relative z-10">Let&apos;s build something amazing.</h2>
            <Link
              href="#"
              className="relative z-10 inline-flex items-center gap-2 bg-primary text-dark px-8 py-4 rounded-full font-bold text-sm hover:bg-white transition-colors duration-300"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
