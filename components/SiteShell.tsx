import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";
import ScrollProgress from "./motion/ScrollProgress";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      {/* <ThemeToggle /> */}
      <ScrollProgress />
    </>
  );
}
