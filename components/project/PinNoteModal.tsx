"use client";

import { useState } from "react";

interface PinNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCustomNote: (note: {
    title: string;
    content: string;
    author: string;
    color: "lime" | "yellow" | "teal" | "pink" | "orange";
  }) => void;
}

export default function PinNoteModal({
  isOpen,
  onClose,
  onAddCustomNote,
}: PinNoteModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState<"lime" | "yellow" | "teal" | "pink" | "orange">("lime");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    onAddCustomNote({
      title: title.trim(),
      content: content.trim(),
      author: author.trim() || "Visitor",
      color,
    });

    setTitle("");
    setContent("");
    setAuthor("");
    onClose();
  };

  const bgPreview =
    color === "lime"
      ? "bg-[#c9f31d] text-gray-950"
      : color === "yellow"
      ? "bg-[#feef8f] text-gray-950"
      : color === "teal"
      ? "bg-[#99f6e4] text-gray-950"
      : color === "pink"
      ? "bg-[#fecdd3] text-gray-950"
      : "bg-[#fed7aa] text-gray-950";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-dark-secondary border border-white/10">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <i className="fas fa-times text-lg" />
        </button>

        <h3 className="font-handwriting text-3xl font-bold text-heading dark:text-white flex items-center gap-2">
          <i className="fas fa-thumbtack text-[#c9f31d]" /> Pin a Sticky Note
        </h3>
        <p className="mt-1 text-xs text-paragraph dark:text-gray-400">
          Write an idea, question, or note to pin onto the Bright Media board!
        </p>

        {/* Live Note Color Picker */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-xs font-bold text-heading dark:text-white">Note Color:</span>
          {(["lime", "yellow", "teal", "pink", "orange"] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              className={`h-7 w-7 rounded-full border-2 transition-transform ${
                c === "lime"
                  ? "bg-[#c9f31d]"
                  : c === "yellow"
                  ? "bg-[#feef8f]"
                  : c === "teal"
                  ? "bg-[#99f6e4]"
                  : c === "pink"
                  ? "bg-[#fecdd3]"
                  : "bg-[#fed7aa]"
              } ${color === c ? "scale-125 border-black dark:border-white shadow-md" : "border-transparent"}`}
            />
          ))}
        </div>

        {/* Live Preview */}
        <div className={`mt-4 rounded-xl p-4 shadow-inner ${bgPreview} transition-all rotate-[-1deg]`}>
          <span className="font-handwriting text-xs font-bold block opacity-75">LIVE PREVIEW</span>
          <h4 className="font-bold text-base mt-1">{title || "Note Title..."}</h4>
          <p className="text-xs mt-1 font-medium line-clamp-2">{content || "Write your note body here..."}</p>
          <span className="mt-2 block text-[10px] font-bold opacity-75">— {author || "Your Name"}</span>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="block text-xs font-bold text-heading dark:text-white mb-1">
              Title / Subject
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Next.js 15 Sticky Note Idea"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-black/10 bg-gray-50 px-3 py-2 text-sm text-heading focus:outline-none focus:ring-2 focus:ring-primary dark:border-white/10 dark:bg-dark dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-heading dark:text-white mb-1">
              Note Message
            </label>
            <textarea
              rows={3}
              required
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded-lg border border-black/10 bg-gray-50 px-3 py-2 text-sm text-heading focus:outline-none focus:ring-2 focus:ring-primary dark:border-white/10 dark:bg-dark dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-heading dark:text-white mb-1">
              Your Name / Handle
            </label>
            <input
              type="text"
              placeholder="e.g. Creative Marketer"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full rounded-lg border border-black/10 bg-gray-50 px-3 py-2 text-sm text-heading focus:outline-none focus:ring-2 focus:ring-primary dark:border-white/10 dark:bg-dark dark:text-white"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full px-4 py-2 text-xs font-bold text-paragraph hover:text-heading dark:text-gray-400 dark:hover:text-white"
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary py-2 text-xs uppercase font-extrabold">
              Pin Note Now <i className="fas fa-thumbtack" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
