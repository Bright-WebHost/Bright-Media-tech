"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BlogPost, StickyComment } from "@/lib/blogData";

interface StickyReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onLike: (postId: string) => void;
}

export default function StickyReaderModal({
  post,
  onClose,
  onLike,
}: StickyReaderModalProps) {
  const [commentText, setCommentText] = useState("");
  const [commenterName, setCommenterName] = useState("");
  const [localComments, setLocalComments] = useState<StickyComment[]>([]);

  useEffect(() => {
    if (post) {
      setLocalComments(post.comments || []);
      // Disable body scroll when modal open
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [post]);

  if (!post) return null;

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: StickyComment = {
      id: `c-${Date.now()}`,
      name: commenterName.trim() || "Guest Reader",
      avatar: "/assets/img/team/8.jpg",
      date: "Just now",
      text: commentText.trim(),
      noteColor: "bg-[#feef8f] text-gray-900",
    };

    setLocalComments([newComment, ...localComments]);
    setCommentText("");
    setCommenterName("");
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in overflow-y-auto">
      {/* Modal Container: Styled as Clipboard Notepad */}
      <div className="relative my-8 w-full max-w-4xl rounded-2xl border-4 border-amber-900/30 bg-[#fefefe] shadow-2xl dark:bg-[#18191c] overflow-hidden">
        {/* Top Metallic Clipboard Clip Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 h-10 w-44 rounded-b-xl bg-gradient-to-b from-gray-700 to-gray-900 border border-gray-500 shadow-md flex items-center justify-center">
          <div className="h-3 w-16 rounded-full bg-gray-400/40 border border-gray-300/30" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-xl font-bold text-gray-800 transition-colors hover:bg-red-500 hover:text-white dark:bg-white/10 dark:text-white"
        >
          <i className="fas fa-times" />
        </button>

        {/* Content Body */}
        <div className="p-6 md:p-10 pt-12 max-h-[85vh] overflow-y-auto notebook-paper">
          {/* Header Badge & Date */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-4 dark:border-white/10">
            <div className="flex flex-wrap items-center gap-2">
              {(Array.isArray(post.category) ? post.category : [post.category]).map(
                (cat, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-[#c9f31d] px-3.5 py-1 text-xs font-black text-black uppercase tracking-wider shadow"
                  >
                    {cat}
                  </span>
                )
              )}
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-gray-600 dark:text-gray-400">
              <span className="font-handwriting text-xl text-black dark:text-white">
                {post.date.month} {post.date.day}, {post.date.year}
              </span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="mt-6 text-2xl font-black text-gray-900 dark:text-white md:text-3xl lg:text-4xl leading-tight">
            {post.title}
          </h2>

          {/* Author info & Claps */}
          <div className="mt-4 flex items-center justify-between flex-wrap gap-4 border-b border-black/10 pb-6 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#c9f31d]">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">{post.author.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onLike(post.id)}
                className="flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm font-bold text-red-600 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all"
              >
                <i className="fas fa-heart" /> {post.likes} Likes
              </button>

              <Link
                href={`/blog/${post.slug}`}
                onClick={onClose}
                className="btn-primary py-2 text-xs uppercase font-extrabold tracking-wider"
              >
                Open Full View <i className="fas fa-external-link-alt ml-1" />
              </Link>
            </div>
          </div>

          {/* Featured Image Taped to Clipboard */}
          <div className="relative my-8 h-64 md:h-96 w-full overflow-hidden rounded-xl border-2 border-black/10 shadow-lg">
            <div className="tape-strip top-3 left-6 -rotate-6" />
            <div className="tape-strip top-3 right-6 rotate-6" />
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>

          {/* Main Article Sections & Key Takeaways Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left 2 Cols: Body Content */}
            <div className="lg:col-span-2 space-y-6 text-gray-800 dark:text-gray-200">
              <p className="text-lg font-medium leading-relaxed italic border-l-4 border-[#c9f31d] pl-4 bg-[#c9f31d]/10 py-3 rounded-r-lg">
                "{post.content.intro}"
              </p>

              {post.content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
                    {sec.heading}
                  </h3>
                  <p className="text-base leading-relaxed">{sec.body}</p>

                  {sec.stickyQuote && (
                    <div className="my-4 rotate-[-1deg] rounded-xl bg-[#feef8f] p-5 text-gray-900 shadow-md border border-amber-300">
                      <span className="font-handwriting text-2xl font-bold block text-amber-900 mb-1">
                        📌 Quick Thought:
                      </span>
                      <p className="font-handwriting text-xl font-bold leading-snug">
                        "{sec.stickyQuote}"
                      </p>
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-8 rounded-xl bg-slate-900 p-6 text-white border border-[#c9f31d]/40 shadow-xl">
                <h4 className="text-lg font-extrabold text-[#c9f31d] uppercase tracking-wide">
                  Final Takeaway
                </h4>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  {post.content.conclusion}
                </p>
              </div>
            </div>

            {/* Right Col: Key Takeaways Sticky Wall */}
            <div className="space-y-4">
              <h4 className="font-handwriting text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i className="fas fa-sticky-note text-[#c9f31d]" /> Key Takeaways
              </h4>

              {post.takeaways.map((takeaway, tIdx) => (
                <div
                  key={tIdx}
                  style={{ transform: `rotate(${tIdx % 2 === 0 ? 1 : -2}deg)` }}
                  className="rounded-xl bg-[#c9f31d] p-4 text-gray-950 shadow-md font-medium text-sm border border-black/20"
                >
                  <span className="font-handwriting text-lg font-bold block text-black/70">
                    Point #{tIdx + 1}:
                  </span>
                  <p className="font-sans font-semibold mt-1">{takeaway}</p>
                </div>
              ))}

              {/* Pin a quick comment note */}
              <div className="mt-8 rounded-xl bg-[#fff275] p-5 text-gray-900 shadow-md rotate-1 border border-amber-300">
                <h5 className="font-handwriting text-2xl font-bold text-amber-950">
                  ✏️ Leave a Sticky Note:
                </h5>
                <form onSubmit={handleAddComment} className="mt-3 space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name..."
                    value={commenterName}
                    onChange={(e) => setCommenterName(e.target.value)}
                    className="w-full rounded-md border border-amber-300 bg-white/80 px-3 py-1.5 text-xs font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <textarea
                    rows={2}
                    placeholder="Write your note..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full rounded-md border border-amber-300 bg-white/80 px-3 py-1.5 text-xs font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-md bg-black px-3 py-2 text-xs font-extrabold text-[#c9f31d] transition-all hover:bg-gray-800"
                  >
                    Pin My Comment <i className="fas fa-thumbtack ml-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sticky Comments Section */}
          <div className="mt-12 border-t border-black/10 pt-8 dark:border-white/10">
            <h4 className="text-xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
              <i className="fas fa-comments text-[#c9f31d]" /> Sticky Reader Comments ({localComments.length})
            </h4>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {localComments.map((c) => (
                <div
                  key={c.id}
                  className={`rounded-xl p-4 shadow ${c.noteColor} border border-black/10`}
                >
                  <div className="flex items-center justify-between border-b border-black/10 pb-2">
                    <span className="font-bold text-xs">{c.name}</span>
                    <span className="text-[10px] opacity-75">{c.date}</span>
                  </div>
                  <p className="mt-2 text-xs font-medium leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
