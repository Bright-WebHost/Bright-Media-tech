"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { TESTIMONIALS } from "@/lib/data";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => {
        const full = i + 1 <= Math.floor(rating);
        const half = !full && i < rating;
        return (
          <i
            key={i}
            className={`fas ${full ? "fa-star" : half ? "fa-star-half-alt" : "fa-star opacity-30"}`}
          />
        );
      })}
    </div>
  );
}

export default function AboutTestimonials() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = TESTIMONIALS.length;

  return (
    <section className="overflow-hidden bg-dark py-24">
      <div className="container-x">
        {/* Large title + rating row */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="bg-gradient-to-r from-white to-primary bg-clip-text text-6xl font-black uppercase text-transparent md:text-8xl lg:text-9xl">
            TESTIMONIALS
          </h2>
          <div className="flex items-center gap-5">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20">
              <span className="text-3xl font-black text-white">4.9</span>
            </div>
            <div>
              <Stars rating={5} />
              <span className="mt-1 block text-sm text-white/60">145 (Review)</span>
            </div>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {TESTIMONIALS.concat(TESTIMONIALS).map((t, i) => (
            <SwiperSlide key={i} className="h-auto">
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-dark-secondary p-8">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-white">{t.rating}</span>
                  <Stars rating={t.rating} />
                </div>
                <blockquote className="mt-5 flex-1 leading-relaxed text-white/70">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <span className="text-sm text-white/50">{t.role}</span>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nav arrows + progress bars */}
        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-primary hover:text-dark hover:border-primary"
            aria-label="Previous"
          >
            <i className="fas fa-chevron-left text-sm" />
          </button>

          {/* Progress segments */}
          <div className="flex flex-1 gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={`h-[3px] flex-1 rounded-full transition-colors duration-300 ${
                  i === activeIndex % 3 ? "bg-primary" : "bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-primary hover:text-dark hover:border-primary"
            aria-label="Next"
          >
            <i className="fas fa-chevron-right text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}
