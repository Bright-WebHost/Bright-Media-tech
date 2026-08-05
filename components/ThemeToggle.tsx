"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed bottom-24 right-6 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-dark shadow-lg shadow-black/30 transition-transform duration-200 hover:-translate-y-1 hover:rotate-12"
    >
      <i className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"} />
    </button>
  );
}
