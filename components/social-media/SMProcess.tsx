"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

const steps = [
  {
    no: "01",
    title: "Strategic Planning",
    icon: "fas fa-search",
    color: "bg-primary text-dark",
    desc: "We'll work closely with you to develop a tailored social media strategy that aligns with your brand objectives and resonates with your target audience.",
  },
  {
    no: "02",
    title: "Content Creation",
    icon: "fas fa-chess-knight",
    color: "bg-dark-secondary text-white",
    desc: "Our team of creatives will craft engaging content that captivates your audience, from eye-catching visuals to compelling copywriting.",
  },
  {
    no: "03",
    title: "Platform Management",
    icon: "fas fa-film",
    color: "bg-primary text-dark",
    desc: "Leave your social media management to us—from content scheduling to community engagement, we ensure seamless brand presence across all channels.",
  },
  {
    no: "04",
    title: "Analytics and Optimization",
    icon: "fas fa-paper-plane",
    color: "bg-dark-secondary text-white",
    desc: "We'll track key metrics and analyze performance to continuously refine and optimize your social media strategy, ensuring maximum impact and ROI.",
  },
  // {
  //   no: "05",
  //   title: "Community Management",
  //   icon: "fas fa-comments",
  //   color: "bg-primary text-dark",
  //   desc: "We engage your audience daily — responding to comments and DMs, nurturing conversations, and handling issues before they escalate.",
  // },
  // {
  //   no: "06",
  //   title: "Analytics",
  //   icon: "fas fa-chart-bar",
  //   color: "bg-dark-secondary text-white",
  //   desc: "Regular reporting with deep-dive metrics covering reach, engagement, conversions, and ROI — delivered in clear, actionable language.",
  // },
  // {
  //   no: "07",
  //   title: "Optimization",
  //   icon: "fas fa-sliders-h",
  //   color: "bg-primary text-dark",
  //   desc: "We continuously test, iterate, and improve — adjusting content types, posting times, and targeting to ensure your strategy keeps growing stronger.",
  // },
];

export default function SMProcess() {
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
            A structured, repeatable process that transforms your social media presence
            from chaotic to confident — step by deliberate step.
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
    </section>
  );
}
