"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Tag, ArrowUpRight, CheckCircle } from "lucide-react";
import { ALL_PROJECTS } from "@/lib/projects";

// ─── Helper ───────────────────────────────────────────────────────────────────
function getProject(id: string) {
  return ALL_PROJECTS.find((p) => p.id === id) ?? null;
}

function getRelated(id: string, category: string) {
  return ALL_PROJECTS.filter((p) => p.id !== id && p.category === category).slice(0, 3);
}

// ─── Client Content Component ─────────────────────────────────────────────────
export default function ProjectDetailContent({ id }: { id: string }) {
  const project = getProject(id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-4 pt-24">
        <p className="text-primary text-sm uppercase tracking-widest mb-3">404</p>
        <h1 className="text-4xl font-black text-white mb-4">Project Not Found</h1>
        <p className="text-white/40 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/projects" className="inline-flex items-center gap-2 bg-primary text-dark px-6 py-3 rounded-full font-bold text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  const related = getRelated(id, project.category);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* ── Back Button ── */}
      <div className="px-4 pt-8 pb-4">
        <div className="container-x">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/40 hover:text-primary text-sm font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* ── Hero Image ── */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[75vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.brand}
          fill
          className="object-cover"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />

        {/* Hero Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-12">
          <div className="container-x">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-primary/90 text-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-3">
                {project.brand}
              </h1>
              <p className="text-white/60 text-lg max-w-xl">{project.tagline}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Meta Strip ── */}
      <div className="border-b border-white/8 px-4">
        <div className="container-x py-6 flex flex-wrap gap-6 sm:gap-10">
          {[
            { Icon: MapPin, label: "Location", value: project.location },
            { Icon: Calendar, label: "Year", value: project.year },
            { Icon: Tag, label: "Category", value: project.category },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest">{label}</p>
                <p className="text-white text-sm font-semibold">{value}</p>
              </div>
            </div>
          ))}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 items-center ml-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content Grid ── */}
      <div className="px-4 py-16">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Challenge + Solution */}
          <div className="lg:col-span-7 space-y-12">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-white/8" />
                <span className="text-primary text-xs font-bold uppercase tracking-widest">The Challenge</span>
                <div className="h-px flex-1 bg-white/8" />
              </div>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">{project.challenge}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-white/8" />
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Solution</span>
                <div className="h-px flex-1 bg-white/8" />
              </div>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>

          {/* Right: Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-28 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-8">
              <h3 className="text-white font-bold text-lg mb-1">Results Achieved</h3>
              <p className="text-white/30 text-xs mb-6 uppercase tracking-widest">Key outcomes for {project.brand}</p>
              <ul className="space-y-4">
                {project.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-white/75 text-sm leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/8">
                <Link
                  href="#"
                  className="flex items-center justify-between group text-sm font-semibold text-white/60 hover:text-primary transition-colors"
                >
                  <span>Start a similar project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Gallery ── */}
      <div className="px-4 py-8 pb-20">
        <div className="container-x">
          <h2 className="text-white/30 text-xs uppercase tracking-widest mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`relative overflow-hidden rounded-xl ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1 h-72 lg:h-80" : "h-60 lg:h-64"
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.brand} gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Related Projects ── */}
      {related.length > 0 && (
        <div className="px-4 pb-20 border-t border-white/5 pt-16">
          <div className="container-x">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-white font-bold text-2xl">Related Projects</h2>
              <Link href="/projects" className="text-primary text-sm font-semibold hover:underline">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/projects/${rp.id}`}
                  className="group relative overflow-hidden rounded-xl bg-[#111]"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={rp.image}
                      alt={rp.brand}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <p className="text-white font-bold text-base">{rp.brand}</p>
                      <p className="text-white/50 text-xs flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        {rp.location}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
