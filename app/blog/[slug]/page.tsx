import { redirect } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogSlugRedirectPage({ params }: PageProps) {
  redirect(`/project/${params.slug}`);
}
