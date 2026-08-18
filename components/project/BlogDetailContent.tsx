"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";
import { BLOG_POSTS, BlogPost, StickyComment, ProjectImageNote } from "@/lib/blogData";
import Breadcrumb from "@/components/Breadcrumb";

interface BlogDetailContentProps {
  post: BlogPost;
}

// ─── Sticky Note Color Helpers ────────────────────────────────────────────────
function getStickyColorClass(color?: string) {
  switch (color) {
    case "lime":
      return "bg-[#c9f31d] text-[#0e0f11] border-[#a5cc10]";
    case "yellow":
      return "bg-[#feef8f] text-gray-900 border-amber-300";
    case "teal":
      return "bg-[#99f6e4] text-gray-900 border-teal-300";
    case "pink":
      return "bg-[#fecdd3] text-gray-900 border-rose-300";
    case "orange":
      return "bg-[#fed7aa] text-gray-900 border-orange-300";
    case "purple":
      return "bg-[#e9d5ff] text-purple-950 border-purple-300";
    case "blue":
    case "sky-blue":
      return "bg-[#a7cfff] text-slate-900 border-blue-300";
    default:
      return "bg-[#feef8f] text-gray-900 border-amber-300";
  }
}

// ─── Normalized Gallery Items Helper ───────────────────────────────────────────
function getGalleryItems(post: BlogPost) {
  if (!post.gallery || post.gallery.length === 0) {
    return [];
  }

  const colors = ["lime", "yellow", "teal", "pink", "orange", "purple"] as const;
  const rotations = [-1.5, 1.5, -2, 2];

  return post.gallery.map((item, idx) => {
    if (typeof item === "string") {
      return {
        image: item,
        title: `Project Deliverable 0${idx + 1}`,
        note: `High-fidelity creative asset crafted for ${post.title}.`,
        tag: Array.isArray(post.category)
          ? post.category[idx % post.category.length]
          : post.category || "Deliverable",
        color: colors[idx % colors.length],
        rotation: rotations[idx % rotations.length],
      };
    }
    return {
      image: item.image,
      title: item.title,
      note: item.note,
      tag:
        item.tag ||
        (Array.isArray(post.category) ? post.category[0] : post.category) ||
        "Asset",
      color: item.color || colors[idx % colors.length],
      rotation: item.rotation ?? rotations[idx % rotations.length],
    };
  });
}

export default function BlogDetailContent({ post }: BlogDetailContentProps) {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState<StickyComment[]>(post.comments || []);
  const [commentText, setCommentText] = useState("");
  const [commenterName, setCommenterName] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = getGalleryItems(post);

  const nextLightbox = useCallback(() => {
    if (galleryItems.length === 0) return;
    setLightboxIndex((prev) =>
      prev === null ? 0 : (prev + 1) % galleryItems.length
    );
  }, [galleryItems.length]);

  const prevLightbox = useCallback(() => {
    if (galleryItems.length === 0) return;
    setLightboxIndex((prev) =>
      prev === null ? 0 : (prev - 1 + galleryItems.length) % galleryItems.length
    );
  }, [galleryItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, nextLightbox, prevLightbox]);

  const handleLike = () => {
    setLikes((l) => l + 1);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: StickyComment = {
      id: `comment-${Date.now()}`,
      name: commenterName.trim() || "Visitor Reader",
      avatar: "/assets/img/team/8.jpg",
      date: "Just now",
      text: commentText.trim(),
      noteColor: "bg-[#feef8f] text-gray-900",
    };

    setComments([newComment, ...comments]);
    setCommentText("");
    setCommenterName("");
  };

  // Find related posts
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <main className="min-h-screen pt-24 pb-0">
      <Breadcrumb title={post.title} crumb="" />

      <section className="py-12 paper-canvas-dark">
        <div className="container-x">
          {/* Main Paper Notepad Wrapper with Notebook Ruled Lines */}
          <div className="relative mx-auto max-w-5xl rounded-3xl border-4 border-amber-950/20 bg-[#FAF8F5] notebook-paper p-6 shadow-2xl sm:p-10 md:p-14 overflow-hidden">
            {/* Top Metallic Spiral Binder / Clipboard accent */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-amber-950/20 via-black/40 to-amber-950/20 border-b border-black/20 flex items-center justify-around px-8">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-3 rounded-t-full bg-gradient-to-b from-gray-300 to-gray-600 shadow"
                />
              ))}
            </div>

            {/* Post Category & Read Meta */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-4">
              <div className="flex flex-wrap items-center gap-2">
                {(Array.isArray(post.category) ? post.category : [post.category]).map(
                  (cat, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-[#c9f31d] px-4 py-1 text-xs font-black text-black uppercase tracking-wider shadow"
                    >
                      {cat}
                    </span>
                  )
                )}
                <span className="font-handwriting text-xl font-bold text-gray-700 dark:text-gray-600 ml-2">
                  {post.date.month} {post.date.day}, {post.date.year}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                  ⏱ {post.readTime}
                </span>
              </div>
            </div>

            {/* Post Title */}
            <h1 className="mt-8 text-3xl font-black text-heading md:text-5xl lg:text-6xl leading-tight">
              {post.title}
            </h1>

            {/* Featured Photo taped on Paper */}
            <div className="relative my-10 h-72 md:h-[420px] w-full overflow-hidden rounded-2xl border-2 border-black/10 shadow-2xl">
              <div className="tape-strip top-4 left-10 -rotate-12" />
              <div className="tape-strip top-4 right-10 rotate-12" />
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>

            {/* Main Content Layout with Side Takeaway Sticky Notes */}
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main Body (2 Columns) */}
              <div className="lg:col-span-2 space-y-8 text-paragraph">
                {post.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-2xl font-black text-heading">{sec.heading}</h2>
                    <p className="text-base md:text-lg leading-relaxed text-gray-800 font-medium">
                      {sec.body}
                    </p>

                    {sec.stickyQuote && (
                      <div className="my-6 rotate-[-1deg] rounded-2xl bg-[#feef8f] p-6 text-gray-900 shadow-xl border border-amber-300 relative">
                        <div className="tape-strip -top-3 left-8 rotate-[-3deg]" />
                        <p className="font-handwriting text-2xl font-bold leading-snug">
                          &ldquo;{sec.stickyQuote}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Conclusion Callout */}
                <div className="mt-10 rounded-2xl bg-dark-secondary p-8 text-white border border-[#c9f31d]/50 shadow-2xl relative">
                  <div className="tape-strip -top-2.5 left-1/2 -translate-x-1/2 rotate-[-1deg]" />
                  <h3 className="text-xl font-extrabold text-[#c9f31d] uppercase tracking-wider">
                    Client Industry & Domain
                  </h3>
                  <p className="mt-3 text-base text-gray-300 leading-relaxed">
                    {post.content.conclusion}
                  </p>
                </div>
              </div>

              {/* Sidebar: Key Takeaways Sticky Notes */}
              <div className="space-y-8">
                <div className="rounded-2xl border border-black/10 bg-gray-50 p-6 shadow-lg relative">
                  <div className="tape-strip -top-3 right-8 rotate-3" />
                  <h3 className="font-handwriting text-3xl font-bold text-heading flex items-center gap-2 border-b border-black/10 pb-3">
                    <span className="text-2xl">📌</span> Project Info
                  </h3>

                  <div className="mt-6 space-y-4">
                    <span className="font-handwriting text-lg font-bold block text-gray-500">
                      Project Components
                    </span>
                    {post.takeaways.map((takeaway, index) => (
                      <div
                        key={index}
                        style={{ transform: `rotate(${index % 2 === 0 ? 2 : -2}deg)` }}
                        className="rounded-xl bg-[#c9f31d] p-4 text-gray-950 shadow-md border border-black/20"
                      >
                        <p className="font-sans font-extrabold text-sm mt-1">{takeaway}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── 2-Images-in-a-Row Project Image Sticky Notes Section ── */}
            {galleryItems.length > 0 && (
              <div className="mt-16 pt-12 border-t-2 border-dashed border-black/15">
              {/* Section Header with Sticky Desk Note Theme */}
              <div className="relative mb-10">
                <div className="tape-strip -top-3.5 left-6 -rotate-6" />
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-black/90 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#c9f31d] shadow">
                      <span>📸</span> Project Visuals &amp; Showcase
                    </span>
                    <h3 className="mt-3 text-3xl sm:text-4xl font-black text-heading tracking-tight leading-tight">
                      Creative Deliverables
                    </h3>
                  </div>
                  <p className="font-handwriting text-xl sm:text-2xl font-bold text-gray-700 max-w-md leading-snug">
                    Taped directly from our project workspace — explore key visual outputs &amp; milestones.
                  </p>
                </div>
              </div>

              {/* 2 Images in a Row Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                {galleryItems.map((item, idx) => {
                  const stickyColor = getStickyColorClass(item.color);
                  const isSingleInRow =
                    idx === galleryItems.length - 1 && galleryItems.length % 2 !== 0;
                  const isEven = idx % 2 === 0;

                  return (
                    <div
                      key={idx}
                      onClick={() => setLightboxIndex(idx)}
                      style={{
                        transform: `rotate(${isSingleInRow ? 0 : item.rotation}deg)`,
                      }}
                      className={`relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 shadow-xl transition-all duration-300 transform group hover:-translate-y-2 hover:rotate-0 hover:scale-[1.01] cursor-pointer ${stickyColor} border border-black/10 sticky-shadow hover:sticky-shadow-hover ${
                        isSingleInRow ? "md:col-span-2 w-full" : ""
                      }`}
                    >
                      {/* Scotch Tape Strips */}
                      {isSingleInRow ? (
                        <>
                          <div className="tape-strip -top-3 left-10 -rotate-6" />
                          <div className="tape-strip -top-3 right-10 rotate-6" />
                        </>
                      ) : isEven ? (
                        <>
                          <div className="tape-strip -top-3 left-6 -rotate-6" />
                          <div className="tape-strip -top-3 right-6 rotate-4" />
                        </>
                      ) : (
                        <div className="tape-strip -top-3 left-1/2 -translate-x-1/2 -rotate-2" />
                      )}

                      {/* Top Bar: Category Pill & Note Counter */}
                      <div>
                        {/* Framed Image Polaroid Look */}
                        <div
                          className={`relative w-full overflow-hidden rounded-xl border border-black/15 bg-black shadow-inner ${
                            isSingleInRow ? "h-64 sm:h-80 md:h-[460px]" : "h-60 sm:h-72"
                          }`}
                        >
                          <Image
                            src={item.image}
                            alt={item.title || post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            unoptimized
                          />
                        </div>

                        {/* Handwritten Note Snippet */}
                        {item.note && (
                          <p
                            className={`font-handwriting text-xl sm:text-2xl font-bold text-gray-900 leading-snug mt-2 ${
                              isSingleInRow ? "text-center" : ""
                            }`}
                          >
                            &ldquo;{item.note}&rdquo;
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>

      {/* ── Interactive Lightbox Modal ── */}
      <AnimatePresence>
        {lightboxIndex !== null && galleryItems.length > 0 && galleryItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-between p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Bar */}
            <div
              className="w-full max-w-6xl flex items-center justify-between z-20 pt-2 pb-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="text-[#c9f31d] font-black text-base tracking-wider uppercase">
                  {post.title}
                </span>
                <span className="text-white/30">/</span>
                <span className="text-white/70 text-xs font-mono">
                  Visual {String(lightboxIndex + 1).padStart(2, "0")} of{" "}
                  {String(galleryItems.length).padStart(2, "0")}
                </span>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close preview"
                className="h-11 w-11 rounded-full bg-white/10 hover:bg-[#c9f31d] hover:text-dark text-white border border-white/20 flex items-center justify-center transition-all duration-200 shadow-lg cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Main Center Image */}
            <div
              className="relative flex-1 w-full max-w-6xl max-h-[70vh] sm:max-h-[75vh] flex items-center justify-center my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={galleryItems[lightboxIndex].image}
                    alt={galleryItems[lightboxIndex].title}
                    fill
                    className="object-contain"
                    unoptimized
                    priority
                  />
                </div>
              </motion.div>

              {/* Prev / Next Nav Buttons */}
              {galleryItems.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevLightbox();
                    }}
                    aria-label="Previous image"
                    className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/70 hover:bg-[#c9f31d] hover:text-dark text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 z-30 shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextLightbox();
                    }}
                    aria-label="Next image"
                    className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/70 hover:bg-[#c9f31d] hover:text-dark text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 z-30 shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Caption & Thumbnails Strip */}
            <div
              className="w-full max-w-4xl flex flex-col items-center gap-3 pt-3 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-handwriting text-xl sm:text-2xl font-bold text-[#feef8f] text-center max-w-2xl leading-snug">
                &ldquo;{galleryItems[lightboxIndex].note}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-3">
                {galleryItems.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className={`relative h-14 w-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      lightboxIndex === i
                        ? "border-[#c9f31d] scale-105 shadow-[0_0_15px_rgba(201,243,29,0.5)]"
                        : "border-white/20 opacity-50 hover:opacity-100 hover:border-white/50"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={`thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
