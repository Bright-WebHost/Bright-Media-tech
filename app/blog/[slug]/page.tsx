import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import BlogDetailContent from "@/components/blog/BlogDetailContent";
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
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Dixor Blog`,
    description: post.excerpt,
  };
}

export default function BlogSlugPage({ params }: PageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteShell>
      <BlogDetailContent post={post} />
    </SiteShell>
  );
}
