"use client";

import { motion } from "framer-motion";

interface BreadcrumbProps {
  title: string;
  subtitle?: string;
  badge?: string;
  crumb?: string;
  description?: string;
  className?: string;
}

export default function Breadcrumb({
  title,
  subtitle,
  badge,
  crumb,
  description,
  className = "",
}: BreadcrumbProps) {
  // Helper to resolve intelligent default subtitles and badges matching the exact tactile paper theme
  const getHeaderDetails = () => {
    const t = title.toLowerCase();

    if (t.includes("about")) {
      return {
        badge: badge || "BRIGHT SIDE NOTES & THOUGHTS",
        mainTitle: title === "About Us" ? "About" : title,
        scriptSubtitle: subtitle || "Bright Media",
        defaultDesc:
          description ||
          "Our projects harness design and technology to create places where people live, work, and grow.",
      };
    }

    if (t.includes("project") || t.includes("blog") || t.includes("work")) {
      return {
        badge: badge || "BRIGHT SIDE NOTES & THOUGHTS",
        mainTitle: "Ideas Pinned on Paper",
        scriptSubtitle: subtitle || "Spread Fresh Daily",
        defaultDesc:
          description ||
          "Our projects harness design and technology to create places where people live, work, and grow.",
      };
    }

    if (t.includes("brand")) {
      return {
        badge: badge || "BRANDING // PILLAR 02",
        mainTitle: title,
        scriptSubtitle: subtitle || "Built on Precision & Soul",
        defaultDesc:
          description ||
          "Creating distinct identity systems that resonate with your audience and reflect your core values.",
      };
    }

    if (t.includes("social")) {
      return {
        badge: badge || "SOCIAL GROWTH // PILLAR 01",
        mainTitle: title,
        scriptSubtitle: subtitle || "Viral Reach & Engagement",
        defaultDesc:
          description ||
          "Engage and grow your community with data-backed social strategies and high-voltage reels.",
      };
    }

    if (t.includes("web") || t.includes("development")) {
      return {
        badge: badge || "WEB & PLATFORMS // PILLAR 03",
        mainTitle: title,
        scriptSubtitle: subtitle || "60fps Fluid Digital Craft",
        defaultDesc:
          description ||
          "Building high-performance, responsive websites engineered to elevate customer experience and conversions.",
      };
    }

    if (t.includes("seo") || t.includes("search")) {
      return {
        badge: badge || "SEARCH DOMINANCE // PILLAR 04",
        mainTitle: title,
        scriptSubtitle: subtitle || "Authority & Organic Scale",
        defaultDesc:
          description ||
          "Optimizing your digital ecosystem to conquer search rankings and attract qualified organic traffic.",
      };
    }

    if (t.includes("paid") || t.includes("ad")) {
      return {
        badge: badge || "TARGETED ADS // PILLAR 05",
        mainTitle: title,
        scriptSubtitle: subtitle || "Maximized ROAS & Scale",
        defaultDesc:
          description ||
          "Driving profitable customer acquisition with targeted paid campaigns across Google, Meta, and beyond.",
      };
    }

    if (t.includes("photo") || t.includes("video")) {
      return {
        badge: badge || "VISUAL CRAFT // PILLAR 06",
        mainTitle: title,
        scriptSubtitle: subtitle || "4K Cinematic Storytelling",
        defaultDesc:
          description ||
          "Capturing compelling visual commercials and photoshoots that captivate audiences across all channels.",
      };
    }

    if (t.includes("software")) {
      return {
        badge: badge || "CUSTOM SOFTWARE // PILLAR 07",
        mainTitle: title,
        scriptSubtitle: subtitle || "Scalable Systems & Code",
        defaultDesc:
          description ||
          "Engineering reliable, bespoke software architectures designed for seamless business efficiency.",
      };
    }

    if (t.includes("contact")) {
      return {
        badge: badge || "GET IN TOUCH // 24/7 STUDIO",
        mainTitle: title,
        scriptSubtitle: subtitle || "Let's Build Together",
        defaultDesc:
          description ||
          "Have a project in mind? Pin your inquiry to our desk and let's craft something unforgettable.",
      };
    }

    // Default fallback
    return {
      badge: badge || "BRIGHT MEDIA STUDIO // " + (crumb || title.toUpperCase()),
      mainTitle: title,
      scriptSubtitle: subtitle || "Spread Fresh Daily",
      defaultDesc:
        description ||
        "Our projects harness design and technology to create places where people live, work, and grow.",
    };
  };

  const { badge: resolvedBadge, mainTitle, scriptSubtitle, defaultDesc } =
    getHeaderDetails();

  return (
    <section
      className={`relative overflow-hidden bg-[#0e0f11] pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 text-white border-b border-white/10 ${className}`}
    >
      {/* Dark Graph Grid Canvas Background */}
      <div className="pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(rgba(201,243,29,0.3)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Ambient Neon Lime Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[650px] rounded-full bg-[#c9f31d]/10 blur-[130px]" />

      {/* Decorative Scotch Tape Strips scattered in background */}
      <div className="tape-strip top-8 left-8 sm:top-10 sm:left-12 -rotate-12 hidden md:block opacity-40 !w-16 !h-5" />
      <div className="tape-strip bottom-8 right-8 sm:bottom-10 sm:right-12 rotate-45 hidden md:block opacity-35 !w-16 !h-5" />

      <div className="container-x relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        {/* Top Centered Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 rounded-full bg-[#c9f31d] px-4 sm:px-5 py-1.5 text-xs font-black text-black uppercase tracking-wider shadow-md mb-5 sm:mb-6"
        >
          <i className="fas fa-thumbtack text-xs" />
          <span>{resolvedBadge}</span>
        </motion.div>

        {/* Main Display Headline + Signature Handwritten Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black  text-white tracking-tight leading-[1.05]"
        >
          {mainTitle}{" "}
          <br className="hidden sm:inline" />
          <span className="font-handwriting text-[#c9f31d] text-4xl sm:text-5xl md:text-6xl lg:text-7xl underline decoration-wavy decoration-[#c9f31d] normal-case inline-block mt-1 sm:mt-2">
            {scriptSubtitle}
          </span>
        </motion.h1>

        {/* Centered Subtitle / Description Paragraph */}
        {/* {defaultDesc && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            {defaultDesc}
          </motion.p>
        )} */}
      </div>
    </section>
  );
}
