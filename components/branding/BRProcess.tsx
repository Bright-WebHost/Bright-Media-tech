"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import SMTools from "../social-media/SMTools";

const steps = [
  {
    no: "01",
    title: "Discovery",
    icon: "fas fa-search",
    color: "bg-primary text-dark",
    desc: "We start by conducting thorough research to gain insights into your industry, competitors, and target audience.",
  },
  {
    no: "02",
    title: "Strategy",
    icon: "fas fa-chess-knight",
    color: "bg-dark-secondary text-white",
    desc: "Based on our findings, we develop a comprehensive branding strategy that outlines key messaging, positioning, and visual elements to guide the creation of your brand identity.",
  },
  {
    no: "03",
    title: "Concept Development",
    icon: "fas fa-film",
    color: "bg-primary text-dark",
    desc: "Our creative team brings your brand to life through innovative concept development, exploring various design options and visual elements to capture the essence of your brand.",
  },
  {
    no: "04",
    title: "Design Implementation",
    icon: "fas fa-paper-plane",
    color: "bg-dark-secondary text-white",
    desc: "Once the concept is finalized, we meticulously craft your brand identity, including logos, color palettes, typography, and brand guidelines, ensuring consistency across all touchpoints.",
  },
];

export default function BRProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-20">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000000ff 1.2px, transparent 1px),
            linear-gradient(to bottom, #030303ff 1.2px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/6 blur-[120px]" />

      <div className="container-x relative z-10">
        <Reveal className="mb-16 text-center">
          <h4 className="section-label justify-center">How We Work</h4>
          <h2 className="mt-3 text-3xl font-extrabold text-black md:text-5xl">
            Our Proven Process
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/50">
            At Bright Media, we believe that successful branding begins with a deep 
            understanding of your business, audience, and objectives. Our process is 
            collaborative and tailored to your unique needs
          </p>
        </Reveal>

        {/* Vertical timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Timeline vertical line */}
          <div className="absolute left-[28px] top-0 h-full w-px bg-[#B6FF00] lg:left-1/2 lg:-translate-x-1/2" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative mb-8 pl-16 lg:mb-12 lg:pl-0 ${
                  isLeft ? "lg:pr-[calc(50%+2rem)] lg:text-right" : "lg:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* Icon node — sits on the timeline */}
                <div
                  className={`absolute left-0 top-1 flex h-14 w-14 items-center justify-center rounded-full border-4 border-dark lg:left-1/2 lg:-translate-x-1/2 ${step.color}`}
                >
                  <i className={`${step.icon} text-lg`} />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-black/80 bg-[#C9F31D]/90 p-6 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-white/8">
                  <span className="text-xs font-bold uppercase tracking-widest text-white">
                    Step {step.no}
                  </span>
                  <h4 className="mt-1 text-xl font-bold text-black">{step.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-black/50">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <SMTools />
    </section>
  );
}
