"use client";

import { useState } from "react";
import { BLOG_CATEGORIES, BLOG_POSTS, BlogPost } from "@/lib/blogData";
import StickyNoteCard from "./StickyNoteCard";
import StickyReaderModal from "./StickyReaderModal";
import PinNoteModal from "./PinNoteModal";
import Breadcrumb from "@/components/Breadcrumb";

export default function BlogPageContent() {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"spread" | "grid">("spread");
  const [activeModalPost, setActiveModalPost] = useState<BlogPost | null>(null);
  const [isPinModalOpen, setIsPinModalOpen] = useState<boolean>(false);

  // Filter posts
  const filteredPosts = posts.filter((p) => {
    const categories = Array.isArray(p.category) ? p.category : [p.category];
    const matchesCategory =
      selectedCategory === "All Projects" ||
      categories.some(
        (cat) => cat.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
      );
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      categories.some((cat) =>
        cat.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Handle Like increment
  const handleLike = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p))
    );
    if (activeModalPost && activeModalPost.id === postId) {
      setActiveModalPost((prev) =>
        prev ? { ...prev, likes: prev.likes + 1 } : null
      );
    }
  };

  // Add custom pinned sticky note
  // const handleAddCustomNote = (newNote: {
  //   title: string;
  //   content: string;
  //   author: string;
  //   color: "lime" | "yellow" | "teal" | "pink" | "orange";
  // }) => {
  //   const customPost: BlogPost = {
  //     id: `custom-${Date.now()}`,
  //     slug: `custom-note-${Date.now()}`,
  //     title: newNote.title,
  //     excerpt: newNote.content,
  //     category: "Strategy",
  //     date: { day: "NOW", month: "TODAY", year: "2026" },
  //     readTime: "1 min read",
  //     author: {
  //       name: newNote.author,
  //       role: "Community Contributor",
  //       avatar: "/assets/img/team/8.jpg",
  //     },
  //     image: "/assets/img/blog/4.jpg",
  //     colorTheme: newNote.color,
  //     stickyBgLight: "bg-[#feef8f] text-gray-900",
  //     stickyBgDark: "bg-[#fde047] text-gray-900",
  //     textColor: "text-gray-900",
  //     badgeBg: "bg-black text-[#c9f31d]",
  //     rotation: Math.floor(Math.random() * 8) - 4,
  //     likes: 1,
  //     commentsCount: 0,
  //     takeaways: [newNote.content],
  //     content: {
  //       intro: newNote.content,
  //       sections: [
  //         {
  //           heading: "User Sticky Note",
  //           body: newNote.content,
  //         },
  //       ],
  //       conclusion: "Pinned by visitor onto the Bright Media board.",
  //     },
  //     comments: [],
  //   };

  //   setPosts([customPost, ...posts]);
  // };

  return (
    <main className="min-h-screen pt-24">
      {/* Breadcrumb Header */}
      {/* <Breadcrumb title="Sticky Desk Blog" crumb="Blog & Creative Notes" /> */}

      {/* Main Paper Desk Canvas */}
      <section className="relative py-12 md:py-20 paper-canvas-light dark:paper-canvas-dark border-y border-black/10 dark:border-white/10 overflow-hidden">
        {/* Decorative Tape & Push Pin accents in background canvas */}
        <div className="tape-strip top-10 left-10 rotate-12 hidden lg:block opacity-60" />
        <div className="tape-strip bottom-12 right-16 -rotate-45 hidden lg:block opacity-60" />

        <div className="container-x relative z-10">
          {/* Hero Banner Intro */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c9f31d] px-4 py-1.5 text-xs font-black text-black uppercase tracking-wider shadow-sm mb-4">
              <i className="fas fa-thumbtack" /> Bright Side Notes &amp; Thoughts
            </div>

            <h1 className="text-3xl font-black tracking-tight text-heading dark:text-white md:text-5xl lg:text-6xl">
              Ideas Pinned on Paper <br className="hidden sm:inline" />
              <span className="font-handwriting text-[#c9f31d] text-4xl md:text-6xl underline decoration-wavy decoration-[#c9f31d]">
                Spread Fresh Daily
              </span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-paragraph dark:text-gray-300 max-w-2xl mx-auto">
              Our Projects harness design and technology to create places where
people live, work, and heal.
            </p>
          </div>

          {/* Desk Toolbar */}
          <div className="mb-10 rounded-2xl border border-black/10 bg-white/80 p-2 shadow-xl backdrop-blur dark:border-white/10 dark:bg-dark-secondary/90">
            <div className=" gap-4 lg:flex-row  lg:justify-between">
              {/* Category Filter Pills */}
              <div className="flex  gap-2 overflow-x-auto pb-2 pl-2 lg:pb-0 scrollbar-none ">
                {BLOG_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition-all 
                        ${
                        isActive
                          ? "bg-[#c9f31d] text-black shadow-md scale-105"
                          : "bg-gray-100 text-heading hover:bg-gray-200 dark:bg-dark dark:text-white dark:hover:bg-white/10"}
                          `}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Right Controls: Search, View Mode & Add Note */}
              {/* <div className=""> */}
                {/* Sticky Search Input */}
                {/* <div className="relative flex-1 sm:w-64 sm:flex-none">
                  <input
                    type="text"
                    placeholder="Search sticky notes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-full border border-black/10 bg-gray-50 pl-10 pr-4 py-2 text-xs font-semibold text-heading focus:outline-none focus:ring-2 focus:ring-primary dark:border-white/10 dark:bg-dark dark:text-white"
                  />
                  <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400" />
                </div> */}

                {/* View Mode Switcher */}
                {/* <div className="flex  rounded-full border border-black/10 bg-gray-100 p-1 dark:border-white/10 dark:bg-dark"> */}
                  {/* <button
                    onClick={() => setViewMode("spread")}
                    title="Spread Canvas View"
                    className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
                      viewMode === "spread"
                        ? "bg-[#c9f31d] text-black shadow"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    <i className="fas fa-[#c9f31d] fa-border-all mr-1" /> Canvas
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    title="Organized Grid View"
                    className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
                      viewMode === "grid"
                        ? "bg-[#c9f31d] text-black shadow"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    <i className="fas fa-th-large mr-1" /> Grid
                  </button> */}
                {/* </div> */}

                {/* Pin Note Button */}
                {/* <button
                  onClick={() => setIsPinModalOpen(true)}
                  className="btn-primary py-2 text-xs font-black uppercase tracking-wider"
                >
                  <i className="fas fa-thumbtack" /> Pin Note
                </button> */}
              {/* </div> */}
            </div>
          </div>

          {/* Sticky Notes Grid / Spread Layout */}
          {filteredPosts.length === 0 ? (
            <div className="mx-auto my-16 max-w-md rounded-2xl bg-[#feef8f] p-8 text-center text-gray-900 shadow-xl rotate-1">
              <i className="fas fa-search-minus text-4xl text-amber-800 mb-3" />
              <h3 className="font-handwriting text-3xl font-bold">No Sticky Notes Found!</h3>
              <p className="mt-2 text-xs font-medium">
                Try searching for another keyword or pick a different category tab.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Projects");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-full bg-black px-4 py-2 text-xs font-bold text-[#c9f31d]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div
              className={
                viewMode === "spread"
                  ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-10"
                  : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              }
            >
              {filteredPosts.map((post) => (
                <StickyNoteCard
                  key={post.id}
                  post={post}
                  viewMode={viewMode}
                  activeCategory={selectedCategory}
                  onQuickRead={(p) => setActiveModalPost(p)}
                  onLike={(id) => handleLike(id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Reader Modal */}
      <StickyReaderModal
        post={activeModalPost}
        onClose={() => setActiveModalPost(null)}
        onLike={(id) => handleLike(id)}
      />

      {/* Pin User Note Modal */}
      {/* <PinNoteModal
        isOpen={isPinModalOpen}
        onClose={() => setIsPinModalOpen(false)}
        onAddCustomNote={handleAddCustomNote}
      /> */}
    </main>
  );
}
