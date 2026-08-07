"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BLOG_POSTS, BlogPost, StickyComment } from "@/lib/blogData";
import Breadcrumb from "@/components/Breadcrumb";

interface BlogDetailContentProps {
  post: BlogPost;
}

export default function BlogDetailContent2({ post }: BlogDetailContentProps) {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState<StickyComment[]>(post.comments || []);
  const [commentText, setCommentText] = useState("");
  const [commenterName, setCommenterName] = useState("");

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
    <main className="min-h-screen pt-24 pb-20">
      <Breadcrumb title={post.title} crumb=""/>

      <section className="py-12 paper-canvas-light ">
        <div className="container-x">
          {/* Main Paper Notepad Wrapper */}
          <div className="relative mx-auto max-w-5xl rounded-3xl border-4 border-amber-950/20 bg-white p-6 shadow-2xl dark:bg-[#16171a] sm:p-10 md:p-14 overflow-hidden">
            {/* Top Metallic Spiral Binder / Clipboard accent */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-amber-950/20 via-black/40 to-amber-950/20 border-b border-black/20 flex items-center justify-around px-8">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-4 w-3 rounded-t-full bg-gradient-to-b from-gray-300 to-gray-600 shadow" />
              ))}
            </div>

            {/* Post Category & Read Meta */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-4 dark:border-white/10">
              {/* <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-black uppercase text-paragraph transition-colors hover:text-[#c9f31d] dark:text-gray-400"
              >
                <i className="fas fa-arrow-left" /> Back to All Notes
              </Link> */}

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#c9f31d] px-4 py-1 text-xs font-black text-black uppercase tracking-wider shadow">
                  {post.category}
                </span>
                <span className="font-handwriting text-xl font-bold text-gray-700 dark:text-gray-300">
                  {post.date.month} {post.date.day}, {post.date.year}
                </span>
              </div>
            </div>

            {/* Post Title */}
            <h1 className="mt-8 text-3xl font-black text-heading dark:text-white md:text-5xl lg:text-6xl leading-tight">
              {post.title}
            </h1>

            {/* Author Profile Bar */}
            {/* <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6 dark:border-white/10">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#c9f31d] shadow-md">
                  <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-heading dark:text-white">{post.author.name}</h3>
                  <p className="text-xs text-paragraph dark:text-gray-400">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-paragraph dark:text-gray-400">
                  <i className="far fa-clock mr-1" /> {post.readTime}
                </span>
                <button
                  onClick={handleLike}
                  className="flex items-center gap-2 rounded-full bg-red-500/10 px-5 py-2.5 text-sm font-extrabold text-red-600 border border-red-500/20 shadow transition-all hover:bg-red-500 hover:text-white hover:scale-105 active:scale-95"
                >
                  <i className="fas fa-heart text-base" /> {likes} Claps &amp; Likes
                </button>
              </div>
            </div> */}

            {/* Featured Photo taped on Paper */}
            <div className="relative my-10 h-72 md:h-[420px] w-full overflow-hidden rounded-2xl border-2 border-black/10 shadow-2xl">
              <div className="tape-strip top-4 left-10 -rotate-12" />
              <div className="tape-strip top-4 right-10 rotate-12" />
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            </div>

            {/* Main Content Layout with Side Takeaway Sticky Notes */}
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main Body (2 Columns) */}
              <div className="lg:col-span-2 space-y-8 text-paragraph dark:text-gray-200">
                <p className="text-xl font-medium leading-relaxed italic border-l-4 border-[#c9f31d] pl-6 py-4 bg-[#c9f31d]/10 rounded-r-2xl">
                  "{post.content.intro}"
                </p>

                {post.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-2xl font-black text-heading dark:text-white">
                      {sec.heading}
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed">{sec.body}</p>

                    {sec.stickyQuote && (
                      <div className="my-6 rotate-[-1deg] rounded-2xl bg-[#feef8f] p-6 text-gray-900 shadow-xl border border-amber-300">
                        <span className="font-handwriting text-2xl font-bold block text-amber-900 mb-1">
                          📌 Author Sticky Note:
                        </span>
                        <p className="font-handwriting text-2xl font-bold leading-snug">
                          "{sec.stickyQuote}"
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Conclusion Callout */}
                <div className="mt-10 rounded-2xl bg-dark-secondary p-8 text-white border border-[#c9f31d]/50 shadow-2xl">
                  <h3 className="text-xl font-extrabold text-[#c9f31d] uppercase tracking-wider">
                    Summary &amp; Key Conclusion
                  </h3>
                  <p className="mt-3 text-base text-gray-300 leading-relaxed">
                    {post.content.conclusion}
                  </p>
                </div>
              </div>

              {/* Sidebar: Key Takeaways & Quick Comment Note */}
              <div className="space-y-8">
                {/* Takeaways Wall */}
                <div className="rounded-2xl border border-black/10 bg-gray-50 p-6 dark:border-white/10 dark:bg-dark-secondary shadow-lg">
                  <h3 className="font-handwriting text-3xl font-bold text-heading dark:text-white flex items-center gap-2 border-b border-black/10 pb-3 dark:border-white/10">
                    <i className="fas fa-sticky-note text-[#c9f31d]" /> Key Takeaways
                  </h3>

                  <div className="mt-6 space-y-4">
                    {post.takeaways.map((takeaway, index) => (
                      <div
                        key={index}
                        style={{ transform: `rotate(${index % 2 === 0 ? 2 : -2}deg)` }}
                        className="rounded-xl bg-[#c9f31d] p-4 text-gray-950 shadow-md border border-black/20"
                      >
                        <span className="font-handwriting text-lg font-bold block text-black/70">
                          Takeaway #{index + 1}:
                        </span>
                        <p className="font-sans font-extrabold text-sm mt-1">{takeaway}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pin Comment Box */}
                <div className="rounded-2xl bg-[#fff275] p-6 text-gray-950 shadow-xl border border-amber-300 rotate-1">
                  <h4 className="font-handwriting text-3xl font-bold text-amber-950">
                    ✏️ Pin a Comment Note
                  </h4>
                  <form onSubmit={handleAddComment} className="mt-4 space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name..."
                      value={commenterName}
                      onChange={(e) => setCommenterName(e.target.value)}
                      className="w-full rounded-lg border border-amber-400 bg-white/90 px-3.5 py-2 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                    <textarea
                      rows={3}
                      placeholder="Write your note..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      className="w-full rounded-lg border border-amber-400 bg-white/90 px-3.5 py-2 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-black px-4 py-2.5 text-xs font-black uppercase text-[#c9f31d] transition-transform hover:scale-105"
                    >
                      Pin Note <i className="fas fa-thumbtack ml-1" />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Pinned Sticky Comments Grid */}
            <div className="mt-16 border-t border-black/10 pt-10 dark:border-white/10">
              <h3 className="text-2xl font-black text-heading dark:text-white flex items-center gap-2">
                <i className="fas fa-comments text-[#c9f31d]" /> Reader Sticky Notes ({comments.length})
              </h3>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {comments.map((c, i) => (
                  <div
                    key={c.id}
                    style={{ transform: `rotate(${i % 2 === 0 ? -1 : 2}deg)` }}
                    className={`rounded-2xl p-5 shadow-lg ${c.noteColor} border border-black/10`}
                  >
                    <div className="flex items-center justify-between border-b border-black/10 pb-2">
                      <span className="font-black text-xs">{c.name}</span>
                      <span className="text-[10px] font-bold opacity-75">{c.date}</span>
                    </div>
                    <p className="mt-3 text-xs font-semibold leading-relaxed">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Sticky Notes Carousel Preview */}
            <div className="mt-20 border-t border-black/10 pt-10 dark:border-white/10">
              <h3 className="text-2xl font-black text-heading dark:text-white">
                More Notes You Might Like
              </h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/blog/${rp.slug}`}
                    className="group rounded-2xl bg-[#feef8f] p-5 text-gray-950 shadow-md transition-all hover:scale-105 hover:rotate-0 rotate-1 border border-amber-300"
                  >
                    <span className="rounded-full bg-black px-2.5 py-0.5 text-[10px] font-bold text-[#c9f31d]">
                      {rp.category}
                    </span>
                    <h4 className="mt-3 font-bold text-base line-clamp-2 group-hover:underline">
                      {rp.title}
                    </h4>
                    <span className="mt-4 inline-flex items-center text-xs font-black text-black">
                      Read Note <i className="fas fa-arrow-right ml-1 text-[10px]" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
