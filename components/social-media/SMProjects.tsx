"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

const projects = [
  {
    category: "Social Media Growth",
    title: "FMCG Brand",
    subtitle: "300% Follower Growth",
    tag: "Instagram · Facebook",
    result: "+300% followers in 3 months",
  },
  {
    category: "Content Strategy",
    title: "Tech Startup",
    subtitle: "Viral LinkedIn Campaign",
    tag: "LinkedIn · Twitter",
    result: "2.5M impressions / month",
  },
  {
    category: "Community Management",
    title: "E-commerce Store",
    subtitle: "5-Star Community",
    tag: "Instagram · TikTok",
    result: "92% positive sentiment",
  },
  {
    category: "Paid Social",
    title: "Real Estate Firm",
    subtitle: "8× ROAS Campaign",
    tag: "Meta Ads · Google",
    result: "8× return on ad spend",
  },
];

export default function SMProjects() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h4 className="section-label">Featured Work</h4>
            <h2 className="mt-3 text-3xl font-extrabold text-heading md:text-5xl">
              Projects We&apos;re Proud Of
            </h2>
          </div>
          <Link href="#" className="btn-animation shrink-0">
            View All Projects
            <i className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-dark">
              <i className="fas fa-arrow-right text-sm" />
            </i>
          </Link>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.22 } }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-[#f9f9f9] p-8 transition-all duration-300 hover:border-primary hover:shadow-lg"
            >
              {/* Top accent line */}
              <div className="mb-6 h-1 w-12 rounded-full bg-primary transition-all duration-300 group-hover:w-20" />

              <span className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
                {p.category}
              </span>
              <h4 className="text-xl font-black text-heading">{p.title}</h4>
              <p className="mt-1 text-base font-semibold text-heading/60">{p.subtitle}</p>

              <div className="mt-4 flex-1">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-black/8 px-3 py-1 text-xs font-medium text-heading/60">
                  <i className="fas fa-hashtag text-primary text-[10px]" />
                  {p.tag}
                </span>
              </div>

              {/* Result badge */}
              <div className="mt-6 rounded-xl bg-primary/10 px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Result:
                </span>
                <p className="mt-0.5 text-sm font-semibold text-heading">{p.result}</p>
              </div>

              {/* Arrow */}
              <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition-all duration-300 group-hover:bg-primary group-hover:text-dark">
                <i className="fas fa-arrow-right -rotate-45 text-sm text-heading transition-colors group-hover:text-dark" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
