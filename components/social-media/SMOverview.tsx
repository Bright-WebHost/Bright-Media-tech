"use client";

import Reveal, { RevealGroup } from "@/components/motion/Reveal";

const services = [
  {
    icon: "fas fa-chess",
    title: "Strategic Planning",
    desc: "We work closely with you to develop a tailored social media strategy that aligns with your brand objectives and resonates with your target audience.",
  },
  {
    icon: "fas fa-pen-nib",
    title: "Content Creation",
    desc: "Our team of creatives crafts engaging content that captivates your audience, from eye-catching visuals to compelling copywriting.",
  },
  {
    icon: "fas fa-layer-group",
    title: "Platform Management",
    desc: "From content scheduling to community engagement, we ensure seamless brand presence across all channels, so you can focus on growth.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Analytics & Optimization",
    desc: "We track key metrics and analyze performance to continuously refine and optimize your strategy, ensuring maximum impact and ROI.",
  },
];


export default function SMOverview() {
  return (
    <section id="overview" className="bg-white py-24 lg:py-20">
      <div className="container-x">
        {/* Section header */}
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <h4 className="section-label justify-center">Service Overview</h4>
          <h2 className="mt-3 text-3xl font-extrabold text-heading md:text-5xl">
            How We Can Help You
          </h2>
          <p className="mt-5 text-base leading-relaxed text-paragraph md:text-lg">
            At Bright Media, we&apos;re dedicated to giving your brand a powerful online
            presence. Our tailored solutions are all about making genuine connections,
            boosting visibility, and bringing your brand to life in the digital world.
          </p>
        </Reveal>

        {/* Service cards */}
        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`
                group relative flex flex-col rounded-2xl border p-8 transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                ${i === 0
                  ? "border-primary bg-primary"
                  : "border-black/5 bg-[#f8f8f8] hover:border-primary"
                }
              `}
            >
              {/* Number watermark */}
              <span
                className={`pointer-events-none absolute right-6 top-6 text-6xl font-black leading-none
                  ${i === 0 ? "text-dark/10" : "text-black/5"}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300
                  ${i === 0 ? "bg-dark/10 text-dark" : "bg-primary/10 text-heading group-hover:bg-primary group-hover:text-dark"}`}
              >
                <i className={`${s.icon} text-xl`} />
              </div>

              <h4
                className={`text-xl font-bold ${i === 0 ? "text-dark" : "text-heading"}`}
              >
                {s.title}
              </h4>
              <p
                className={`mt-3 flex-1 text-sm leading-relaxed ${i === 0 ? "text-dark/75" : "text-paragraph"}`}
              >
                {s.desc}
              </p>

              <div
                className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold
                  ${i === 0 ? "text-dark" : "text-heading group-hover:text-primary"}`}
              >
                Learn More <i className="fas fa-arrow-right text-xs" />
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
