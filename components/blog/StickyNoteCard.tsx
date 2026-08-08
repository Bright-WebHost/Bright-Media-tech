"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BlogPost } from "@/lib/blogData";

interface StickyNoteCardProps {
  post: BlogPost;
  onQuickRead: (post: BlogPost) => void;
  onLike: (postId: string, e: React.MouseEvent) => void;
  viewMode: "spread" | "grid";
  activeCategory?: string;
}

export default function StickyNoteCard({
  post,
  onQuickRead,
  onLike,
  viewMode,
  activeCategory = "All Projects",
}: StickyNoteCardProps) {
  const [hovered, setHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Determine single category to show on card
  const categories = Array.isArray(post.category) ? post.category : [post.category];
  const badgeCategory =
    activeCategory && activeCategory !== "All Projects" && activeCategory !== "All"
      ? categories.find(
          (c) => c.trim().toLowerCase() === activeCategory.trim().toLowerCase()
        ) || activeCategory
      : categories[0] || "Creative";

  // Rotation style depending on view mode
  const rotationDeg = viewMode === "spread" ? post.rotation : 0;

  // Background style based on post color
  const bgClass =
    post.colorTheme === "lime"
      ? "bg-[#c9f31d] text-[#0e0f11]"
      : post.colorTheme === "yellow"
        ? "bg-[#feef8f] text-gray-900"
        : post.colorTheme === "teal"
          ? "bg-[#99f6e4] text-gray-900"
          : post.colorTheme === "pink"
            ? "bg-[#fecdd3] text-gray-900"
            : post.colorTheme === "orange"
              ? "bg-[#fed7aa] text-gray-900"
              : post.colorTheme === "blue"
                ? "bg-[#a0bfff] text-slate-900"
                : post.colorTheme === "sky-blue"
                  ? "bg-[#a7cfff] text-slate-900"
                  : post.colorTheme === "gray"
                    ? "bg-[#c9c9c9] text-purple-950"
                    : post.colorTheme === "purple"
                      ? "bg-[#e9d5ff] text-purple-950"
                      : "";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered
          ? `translateY(-10px) rotate(0deg) scale(1.03)`
          : `rotate(${rotationDeg}deg)`,
        transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      className={`relative flex flex-col justify-between rounded-xl p-6 shadow-lg ${bgClass} ${hovered ? "sticky-shadow-hover z-30" : "sticky-shadow z-10"
        } ${post.pinned ? "border-2 border-black/80 dark:border-white/80" : ""}`}
    >
      {/* Tape Strip or Push Pin accent at top */}
      {post.pinned ? (
        <div className="tape-strip -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg]" />
      ) : (
        <div className="tape-strip -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg]" />
      )}

      {/* Top Bar: Category badge & Bookmark */}
      <div>
        <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-3">
          <span className="rounded-full bg-black/90 px-3 py-1 text-[8px] font-medium text-[#c9f31d] uppercase tracking-wider">
            {badgeCategory}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsBookmarked((b) => !b)}
              title={isBookmarked ? "Bookmarked note" : "Bookmark note"}
              className="text-black/60 transition-colors hover:text-black"
            >
              {/* <i className={isBookmarked ? "fas fa-bookmark text-amber-900" : "far fa-bookmark"} /> */}
            </button>
            <span className="font-handwriting text-sm font-bold text-black/70">
              {post.date.month} 
              {/* {post.date.day} */}
            </span>
          </div>
        </div>

        {/* Thumbnail Preview taped to Sticky Note */}
        <div
          onClick={() => onQuickRead(post)}
          className="group/img relative mt-4 h-40 w-full overflow-hidden rounded-lg border border-black/10 cursor-pointer shadow-inner"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover/img:scale-110"
          />
          {/* <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover/img:opacity-100 flex items-center justify-center">
            <span className="rounded-full bg-black/80 px-3 py-1.5 text-xs font-bold text-[#c9f31d] shadow-lg flex items-center gap-1.5">
              <i className="fas fa-search-plus" /> Quick Peek
            </span>
          </div> */}
        </div>

        {/* Note Title */}
        <Link
              href={`/blog/${post.slug}`}
          className="mt-4 cursor-pointer text-base font-black text-black leading-snug tracking-tight hover:underline"
          >
          {post.title}
       
        </Link>

        {/* Note Excerpt in Handwritten accent style */}
        {/* <p className="mt-2 text-sm font-medium line-clamp-3 leading-relaxed text-black/80">
          {post.excerpt}
        </p> */}

        {/* Key Takeaway Mini Tape snippet */}
        {/* {post.takeaways && post.takeaways.length > 0 && (
          <div className="mt-3 rounded-md bg-black/5 p-2.5 text-xs font-semibold text-black/90 border-l-2 border-black/40">
            <span className="font-handwriting text-sm font-bold block text-black/60">💡 Key Note:</span>
            <span className="italic font-sans">"{post.takeaways[0]}"</span>
          </div>
        )} */}
      </div>

      {/* Footer Meta & Action Links */}
      {/* <div className="mt-6 border-t border-black/10 pt-4"> */}
        {/* <div className="flex items-center justify-between text-xs font-bold text-black/70"> */}
          {/* Author avatar */}
          {/* <div className="flex items-center gap-2">
            <div className="relative h-7 w-7 overflow-hidden rounded-full border border-black/30">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <span>{post.author.name}</span>
          </div> */}
          {/* <span>{post.readTime}</span> */}
        {/* </div> */}

        {/* Bottom Actions */}
        {/* <div className="mt-4 flex items-center justify-between gap-2">
          <button
            onClick={(e) => onLike(post.id, e)}
            className="flex items-center gap-1.5 rounded-lg bg-black/10 px-3 py-1.5 text-xs font-bold transition-all hover:bg-black/20 hover:scale-105 active:scale-95"
          >
            <i className="fas fa-heart text-red-600" />
            <span>{post.likes}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onQuickRead(post)}
              className="rounded-lg bg-black/10 px-3 py-1.5 text-xs font-bold transition-colors hover:bg-black/20"
            >
              <i className="fas fa-[#c9f31d] fa-eye mr-1" /> Quick View
            </button>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 rounded-lg bg-black px-3.5 py-1.5 text-xs font-extrabold text-[#c9f31d] transition-transform hover:scale-105"
            >
              View Project <i className="fas fa-arrow-right text-[10px]" />
            </Link>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}
