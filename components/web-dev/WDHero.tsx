"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

function GridPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />
  );
}

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/** Floating glass orb — matches the neon/glass aesthetic of the site's hero */
function GlassOrb() {
  return (
    <motion.div
      className="pointer-events-none absolute right-[5%] top-1/2 hidden -translate-y-1/2 lg:block"
      animate={{ y: [-20, 20, -20] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Outer ring */}
      <div
        className="relative flex h-[380px] w-[380px] items-center justify-center rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(201,243,29,0.12), rgba(201,243,29,0.02) 60%, transparent 100%)",
          border: "1px solid rgba(201,243,29,0.18)",
          boxShadow:
            "0 0 80px rgba(201,243,29,0.08), inset 0 0 80px rgba(201,243,29,0.04)",
          backdropFilter: "blur(2px)",
        }}
      >
        {/* Inner orb */}
        <motion.div
          className="h-48 w-48 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 40% 30%, rgba(201,243,29,0.35), rgba(201,243,29,0.05) 70%)",
            boxShadow: "0 0 60px rgba(201,243,29,0.2)",
          }}
          animate={{ scale: [1, 1.08, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        {/* Decorative orbit ring */}
        <div
          className="absolute inset-8 rounded-full"
          style={{
            border: "1px dashed rgba(201,243,29,0.15)",
          }}
        />
      </div>
    </motion.div>
  );
}

const heroWords = ["Web", "Development", ""];

export default function WDHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const orbX = useTransform(springX, [-1, 1], [-20, 20]);
  const orbY = useTransform(springY, [-1, 1], [-12, 12]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  const wordVariants = {
    hidden: { y: "110%", opacity: 0 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1 + i * 0.15,
      },
    }),
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-dark">
      <GridPattern />
      <Particles />

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-primary/8 blur-[100px]" />

      {/* Mouse-parallax glass orb */}
      <motion.div
        className="pointer-events-none absolute right-[5%] top-1/2 hidden -translate-y-1/2 lg:block"
        style={{ x: orbX, y: orbY }}
      >
        <GlassOrb />
      </motion.div>

      {/* Hero content */}
      <div className="container-x relative z-10 text-center">
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-8 inline-flex items-center gap-3"
        >
          {/* <span className="h-px w-12 bg-primary/60" />
          <span className="section-label">Bright Media — Services</span>
          <span className="h-px w-12 bg-primary/60" /> */}
        </motion.div>

        {/* Main heading — split text reveal */}
        <h1 className="mb-6 text-[15vw] font-extrabold uppercase leading-[0.9] text-white sm:text-[5vw] lg:text-[8vw] xl:text-[6rem]">
          {heroWords.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                className="block"
                variants={wordVariants}
                initial="hidden"
                animate="show"
                custom={i}
              >
                {i === 1 ? (
                  <span className="text-stroke" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.9)", color: "transparent" }}>
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-5 max-w-5xl text-base leading-relaxed text-white/55 md:text-lg"
        >
          Explore our range of website services designed to enhance your online Visibility. 
          From captivating web design to engaging content creation, we offer tailored solutions 
          to elevate your brand. We offer a full suite of services such as Static, Dynamic, 
          E-Commerce website tailored to meet your unique needs. Let us transform your website 
          into a powerful tool for growth and success in the Digital landscape.
        </motion.p>

        {/* CTA buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="#overview" className="btn-primary">
            Explore Services <i className="fas fa-arrow-down" />
          </Link>
          <Link
            href="#contact-cta"
            className="btn-outline border-white/20 text-white hover:border-primary hover:text-primary"
          >
            Let&apos;s Discuss
          </Link>
        </motion.div> */}
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="container-x relative z-10 mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4"
      >
        {[
          { value: "2-4 Weeks", label: "Average Build Time" },
          { value: "100%", label: "Custom-Built Solutions" },
          { value: "99.9%", label: "Uptime Assurance" },
          { value: "95%", label: "Client Satisfaction Rate" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center bg-dark/60 px-6 py-8 text-center backdrop-blur-sm"
          >
            <span className="text-3xl font-black text-primary md:text-4xl">
              {stat.value}
            </span>
            <span className="mt-1 text-xs font-medium text-white/50 md:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          {/* <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
            Scroll
          </span> */}
          <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
