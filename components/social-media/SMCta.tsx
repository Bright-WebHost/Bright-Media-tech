"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import FloatY from "@/components/motion/FloatY";

export default function SMCta() {
  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Animated background elements */}
      <FloatY
        className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/15 blur-[80px]"
        duration={8}
        distance={30}
      >
        <span />
      </FloatY>
      <FloatY
        className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-primary/10 blur-[80px]"
        duration={10}
        distance={25}
      >
        <span />
      </FloatY>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h4 className="section-label justify-center">Ready to Grow?</h4>
          </Reveal>

          {/* Large typography CTA */}
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[1] text-heading md:text-6xl lg:text-7xl">
              Let&apos;s Make{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Your</span>
                <motion.span
                  className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-primary"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>{" "}
              Brand{" "}
              <span className="text-stroke" style={{ WebkitTextStroke: "2px #04000b", color: "transparent" }}>
                Shine
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paragraph md:text-lg">
              Stop wishing for better engagement and start engineering it. Our team is
              ready to build your social media success story from day one.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-dark px-10 py-4 text-sm font-bold text-white transition-all duration-300 hover:pr-12"
              >
                Start Your Journey
                <motion.i
                  className="fas fa-arrow-right text-primary"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </Link>
              <Link
                href="tel:+918548005588"
                className="inline-flex items-center gap-2 rounded-full border-2 border-heading px-10 py-[14px] text-sm font-bold text-heading transition-all duration-300 hover:border-primary hover:text-primary"
              >
                <i className="fas fa-phone-alt text-primary" />
                +91 854 800 5588
              </Link>
            </div>
          </Reveal>

          {/* Trust badges */}
          <Reveal delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-heading/40">
              {["No Lock-in Contracts", "Free Strategy Call", "Results in 90 Days"].map(
                (badge) => (
                  <span key={badge} className="flex items-center gap-2">
                    <i className="fas fa-check text-primary" />
                    {badge}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
