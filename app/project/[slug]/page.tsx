import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import BlogDetailContent from "@/components/project/BlogDetailContent";
import { BLOG_POSTS } from "@/lib/blogData";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const post = BLOG_POSTS.find(
    (p) => p.slug.toLowerCase() === decodeURIComponent(params.slug).toLowerCase()
  );
  if (!post) return { title: "Project Not Found" };
  return {
    title: `${post.title} | Bright Media Project`,
    description: post.excerpt,
  };
}

export default function ProjectSlugPage({ params }: PageProps) {
  const post = BLOG_POSTS.find(
    (p) => p.slug.toLowerCase() === decodeURIComponent(params.slug).toLowerCase()
  );

  if (!post) {
    notFound();
  }

  return (
    <SiteShell>
      <BlogDetailContent post={post} />
    </SiteShell>
  );
}
