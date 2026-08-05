"use client";

import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import DualImage from "@/components/DualImage";
import Reveal from "@/components/motion/Reveal";
import { PROJECTS } from "@/lib/data";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = PROJECTS.length;

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-white">
      {/* Background Blob */}
      <div className="absolute left-[-15%] bottom-[-10%] h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full bg-[#e3f4ca] blur-[120px] opacity-70 pointer-events-none dark:bg-primary/5" />

      <div className="container-x relative z-10 px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-6">

        {/* Left Content */}
        <Reveal direction="right" className="w-full lg:w-[28%] shrink-0 text-center lg:text-left">
          <div className="inline-flex items-center justify-center rounded-full border border-black/10 px-5 py-2 mb-6 sm:mb-10 bg-white dark:bg-transparent">
            <span className="text-[13px] sm:text-[14px] font-bold uppercase tracking-widest text-black">
              Our Model
            </span>
          </div>
          <p className="text-[14px] sm:text-[15px] leading-loose mb-6 sm:mb-10 dark:text-gray-400 text-gray-500">
            We manage all aspects of your project, ensuring seamless execution
            and exceptional results tailored for you, while maintaining quality,
            transparency, efficiency, and long-term success.
          </p>
          <hr className="mb-6 sm:mb-10 border-black/10" />
          <h4 className="text-xl sm:text-2xl font-medium leading-snug text-black sm:pl-10 pr-4">
            We handle everything, you focus on growth.
          </h4>
        </Reveal>

        {/* Navigation — Desktop */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-6 shrink-0 w-20 xl:w-24 z-10">
          <button className="pf-prev flex h-10 w-10 items-center justify-center rounded-full bg-[#333] text-white hover:bg-primary transition-colors cursor-pointer">
            <i className="fas fa-chevron-left text-[10px]" />
          </button>
          <div className="flex flex-col items-center font-bold text-lg leading-none py-2 text-black dark:text-white">
            <span>{currentSlide}</span>
            <span className="my-1 text-black/30 dark:text-white/30 text-xl font-light">/</span>
            <span>{totalSlides}</span>
          </div>
          <button className="pf-next flex h-10 w-10 items-center justify-center rounded-full bg-[#333] text-white hover:bg-primary transition-colors cursor-pointer">
            <i className="fas fa-chevron-right text-[10px]" />
          </button>
        </div>

        {/* Swiper */}
        <div className="w-full lg:flex-1 relative min-w-0">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop
            speed={800}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{ prevEl: ".pf-prev", nextEl: ".pf-next" }}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
            className="overflow-visible"
          >
            {PROJECTS.map((p, i) => (
              <SwiperSlide key={i} className="!flex justify-end relative">
                <div className="w-full lg:w-[77%] relative">
                  {/* Image */}
                  <DualImage
                    dark={p.imageDark}
                    light={p.imageLight}
                    width={300}
                    height={480}
                    className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover pl-0 sm:pl-16 lg:pl-32"
                  />

                  {/* Title Overlay */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 lg:left-[-15%] xl:left-[-30%] z-20 pointer-events-none w-full">
                    <h2 className="text-[38px] sm:text-[60px] lg:text-[100px] xl:text-[100px] font-semibold leading-[0.9] tracking-tight text-black drop-shadow-2xl lg:drop-shadow-none">
                      {p.title}
                      <br />
                      <span className="ml-[8%] sm:ml-[10%] lg:ml-24 block">{p.strong}</span>
                    </h2>

                    <div className="pointer-events-auto mt-6 sm:mt-10 lg:mt-16 ml-[10%] sm:ml-[15%] lg:ml-36">
                      <Link href="#" className="relative inline-flex items-center group">
                        <div className="absolute -left-5 top-1/2 -translate-y-1/2 h-[52px] w-[52px] sm:h-[64px] sm:w-[64px] lg:h-[76px] lg:w-[76px] rounded-full border border-black/20 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-[9px] sm:text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-black relative z-10">
                          See Details
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center justify-center gap-6 mt-6 sm:mt-8">
            <button className="pf-prev flex h-10 w-10 items-center justify-center rounded-full bg-[#333] text-white cursor-pointer">
              <i className="fas fa-chevron-left text-[10px]" />
            </button>
            <div className="flex items-center font-bold text-lg py-2 text-black dark:text-white">
              <span>{currentSlide}</span>
              <span className="mx-2 text-black/30 text-xl font-light">/</span>
              <span>{totalSlides}</span>
            </div>
            <button className="pf-next flex h-10 w-10 items-center justify-center rounded-full bg-[#333] text-white cursor-pointer">
              <i className="fas fa-chevron-right text-[10px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
