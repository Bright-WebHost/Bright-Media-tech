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

export default function Team() {
  const [tab, setTab] = useState(0);

  return (
    <section className="bg-graybg py-24 dark:bg-dark-secondary">
      <div className="container-x">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <h4 className="section-label justify-center">Team members</h4>
          <h2 className="mt-3 text-3xl font-extrabold text-heading dark:text-white md:text-4xl">
            Turn Information Into Actionable Insights
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12">
          <ul className="space-y-3 lg:col-span-4">
            {TEAM_TABS.map((t, i) => (
              <li key={t.title}>
                <button
                  onClick={() => setTab(i)}
                  className={`w-full rounded-2xl border px-6 py-5 text-left transition-colors ${
                    tab === i
                      ? "border-primary bg-primary text-dark"
                      : "border-black/10 bg-white text-heading hover:border-primary dark:border-white/10 dark:bg-dark dark:text-white"
                  }`}
                >
                  <strong className="block text-lg">{t.title}</strong>
                  <span className={`text-sm ${tab === i ? "text-dark/70" : "opacity-70"}`}>
                    {t.sub}
                  </span>
                </button>
              </li>
            ))}
          </ul>

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
                        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 bg-gradient-to-t from-black/80 to-transparent p-3 transition-transform duration-300 group-hover:translate-y-0">
                        {socials.map((s) => (
                          <a
                            key={s}
                            href="#"
                            aria-label="social"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs text-dark"
                          >
                            <i className={s} />
                          </a>
                        ))}
                      </div>
                    </div>
                    <h4 className="mt-4 font-bold text-heading dark:text-white">
                      <Link href="#">{m.name}</Link>
                    </h4>
                    <span className="text-sm text-primary">{m.role}</span>
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
