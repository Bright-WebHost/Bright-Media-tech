import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import BlogPageContent from "@/components/project/BlogPageContent";

export const metadata: Metadata = {
  title: "Blog - Bright Side Creative Sticky Notes | Dixor",
  description:
    "Explore our creative agency blog styled like tactile sticky notes spread across a paper desk canvas.",
};

export default function BlogPage() {
  return (
    <SiteShell>
      <BlogPageContent />
    </SiteShell>
  );
}
