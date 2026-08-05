"use client";

import Image from "next/image";
import Link from "next/link";
import { ABOUT, ARROW } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";

export default function AboutAgency() {
  const services = [
    { no: "01", label: "Social Media" },
    { no: "02", label: "Content Writing" },
    { no: "03", label: "Video Production" },
  ];

  return (
    <section className="overflow-hidden bg-dark-secondary py-24">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left image */}
          <Reveal direction="right" className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/media/2.6f5c9794.jpg"
                alt="Digital Agency"
                width={600}
                height={600}
                className="h-[500px] w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Right content */}
          <Reveal direction="left">
            {/* Arrow icon + heading */}
            <div className="flex items-start gap-4">
              <div className="mt-2 flex-shrink-0">
                <Image
                  src={ARROW}
                  alt=""
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain opacity-60"
                />
              </div>
              <h2 className="text-4xl font-black uppercase leading-tight text-white md:text-5xl lg:text-6xl">
                Best Creative &amp; Digital Agency
              </h2>
            </div>

            <p className="mt-6 leading-relaxed text-white/70">
              Give lady of they such they sure it. Me contained explained my education. Vulgar as
              hearts by garret. Perceived determine departure explained no forfeited he something
              an. Contrasted dissimilar get joy you instrument out reasonably
            </p>

            {/* Service cards */}
            <div className="group/wrapper mt-10 grid grid-cols-3 gap-4">
              {services.map((s, i) => {
                if (i === 0) {
                  return (
                    <Link
                      key={s.no}
                      href="/services"
                      className="group/card flex flex-col justify-between rounded-xl bg-primary p-5 h-36 transition-all duration-300 group-has-[a:hover]/wrapper:bg-dark-optional group-has-[a:hover]/wrapper:text-white group-has-[a:hover]/wrapper:border group-has-[a:hover]/wrapper:border-white/10 hover:!bg-primary hover:!text-dark hover:-translate-y-1"
                    >
                      <div className="text-xl block group-has-[a:hover]/wrapper:hidden group-hover/card:!block">
                        <i className="fas fa-arrow-right -rotate-45" />
                      </div>
                      <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-black/10 text-xs font-bold group-has-[a:hover]/wrapper:flex group-hover/card:!hidden">
                        {s.no}
                      </div>
                      <div className="text-sm font-bold">{s.label}</div>
                    </Link>
                  );
                }
                return (
                  <Link
                    key={s.no}
                    href="/services"
                    className="group/card flex flex-col justify-between rounded-xl border border-white/10 bg-dark p-5 h-36 text-white transition-all duration-300 hover:bg-primary hover:text-dark hover:border-transparent hover:-translate-y-1"
                  >
                    <div className="text-xl hidden group-hover/card:block">
                      <i className="fas fa-arrow-right -rotate-45" />
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold group-hover/card:hidden">
                      {s.no}
                    </div>
                    <div className="text-sm font-bold">{s.label}</div>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
