"use client";

import { useEffect, useState } from "react";

/** Scroll-to-top button with a circular progress ring — mirrors the source `to-top-progress`. */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? scrolled / height : 0);
      setVisible(scrolled > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const r = 23;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - progress);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-[9998] grid h-[50px] w-[50px] place-items-center rounded-full transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <svg className="absolute inset-0 -rotate-90" width="50" height="50" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r={r} fill="rgb(0 0 0 / 75%)" stroke="rgb(200 200 200 / 40%)" strokeWidth="4" />
        <circle
          cx="25"
          cy="25"
          r={r}
          fill="none"
          stroke="#c9f31d"
          strokeWidth="4"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />
      </svg>
      <i className="fas fa-long-arrow-up relative z-10 text-primary" />
    </button>
  );
}
