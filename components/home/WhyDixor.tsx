"use client";

import Image from "next/image";
import { useState } from "react";
import { WHY } from "@/lib/data";

export default function WhyDixor() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container-x px-4 sm:px-6 grid gap-10 sm:gap-12 lg:grid-cols-12 lg:items-center">
        {/* Image */}
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={WHY.image}
              alt=""
              width={800}
              height={960}
              className="h-[280px] sm:h-[420px] lg:h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Accordion */}
        <div className="lg:col-span-7">
          <h4 className="section-label">Why Bright Media</h4>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-heading md:text-4xl">
            Unlock Revenue Growth
          </h2>

          <div className="mt-6 sm:mt-8 space-y-3">
            {WHY.items.map((item, i) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-xl sm:rounded-2xl border border-black/10"
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className={`flex w-full items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-bold transition-colors ${
                    open === i ? "bg-primary text-dark" : "text-heading"
                  }`}
                >
                  {item.title}
                  <i className={`fas fa-${open === i ? "minus" : "plus"} text-sm shrink-0 ml-3`} />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 sm:px-6 py-3 sm:py-4 text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
