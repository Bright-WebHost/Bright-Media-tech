"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { TEAM, TEAM_TABS } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";

const socials = ["fab fa-linkedin-in", "fab fa-dribbble", "fab fa-facebook-f"];
const GROUPS = [TEAM.slice(0, 4), TEAM.slice(2, 6), TEAM.slice(4, 8)];

export default function AboutTeam() {
  const [tab, setTab] = useState(0);

  return (
    <section className="bg-dark-secondary py-24">
      <div className="container-x">
        <Reveal className="mb-14 text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white/70">
            TEAM MEMBERS
          </span>
          <h2 className="mt-4 text-3xl font-black text-white md:text-4xl lg:text-5xl">
            Turn Information Into
            <br />
            Actionable Insights
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Tab sidebar */}
          <ul className="space-y-3 lg:col-span-4">
            {TEAM_TABS.map((t, i) => (
              <li key={t.title}>
                <button
                  onClick={() => setTab(i)}
                  className={`w-full rounded-2xl border px-6 py-5 text-left transition-all duration-300 ${
                    tab === i
                      ? "border-primary bg-primary text-dark"
                      : "border-white/10 bg-dark text-white hover:border-primary/40"
                  }`}
                >
                  <strong className="block text-lg">{t.title}</strong>
                  <span className={`text-sm ${tab === i ? "text-dark/70" : "text-white/50"}`}>
                    {t.sub}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Team swiper */}
          <div className="lg:col-span-8">
            <Swiper
              key={tab}
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 3 } }}
            >
              {GROUPS[tab].concat(GROUPS[tab]).map((m, i) => (
                <SwiperSlide key={i}>
                  <div className="group text-center">
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={m.image}
                        alt={m.name}
                        width={300}
                        height={315}
                        className="h-56 w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                      {/* Plus icon bottom */}
                      <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-dark transition-colors duration-300 group-hover:bg-primary">
                        <i className="fas fa-plus text-sm" />
                      </div>
                    </div>
                    <h4 className="mt-4 font-bold text-white">
                      <Link href="#">{m.name}</Link>
                    </h4>
                    <span className="text-sm text-white/50">{m.role}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
