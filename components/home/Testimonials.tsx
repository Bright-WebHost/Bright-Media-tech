"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TESTIMONIALS, TESTIMONIAL_SHAPE } from "@/lib/data";
import FloatY from "@/components/motion/FloatY";
import Reveal from "@/components/motion/Reveal";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-primary">
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

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <FloatY
        className="pointer-events-none absolute right-0 top-10 hidden opacity-40 lg:block"
        duration={5}
      >
        <Image src={TESTIMONIAL_SHAPE} alt="" width={420} height={366} />
      </FloatY>

      <div className="container-x relative z-10 px-4 sm:px-6">
        <Reveal className="mb-8 sm:mb-12 flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
          <h2 className="bg-gradient-to-r from-heading to-primary bg-clip-text text-4xl sm:text-5xl font-black text-transparent dark:from-white dark:to-primary md:text-7xl">
            Testimonials
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-4xl sm:text-5xl font-black text-heading dark:text-white">4.9</span>
            <div>
              <Stars rating={5} />
              <span className="text-sm">145 (Review)</span>
            </div>
          </div>
        </Reveal>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {TESTIMONIALS.concat(TESTIMONIALS).map((t, i) => (
            <SwiperSlide key={i} className="h-auto pb-2">
              <figure className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-dark-secondary">
                <div className="flex items-center gap-3">
                  <span className="text-base sm:text-lg font-bold text-heading dark:text-white">
                    {t.rating}
                  </span>
                  <Stars rating={t.rating} />
                </div>
                <blockquote className="mt-4 sm:mt-5 flex-1 text-sm sm:text-base leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 sm:mt-6 flex items-center gap-3 sm:gap-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-heading dark:text-white">{t.name}</h4>
                    <span className="text-sm text-primary">{t.role}</span>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
