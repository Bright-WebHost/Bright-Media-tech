import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand tokens pulled from the source template
        primary: "#c9f31d", // lime accent
        secondary: "#add40c",
        heading: "#04000b",
        paragraph: "#666666",
        dark: {
          DEFAULT: "#0e0f11",
          secondary: "#18191b",
          optional: "#2a2d32",
        },
        graybg: {
          DEFAULT: "#f2f3ef",
          secondary: "#eff2e4",
        },
      },
      fontFamily: {
        barlow: ["var(--font-barlow)", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1200px",
        },
      },
      keyframes: {
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        spinslow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-down": "fade-down .25s ease forwards",
        spinslow: "spinslow 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
