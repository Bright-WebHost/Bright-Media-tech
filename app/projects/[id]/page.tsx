import SiteShell from "@/components/SiteShell";
import ProjectDetailContent from "@/components/projects/ProjectDetailContent";
import { ALL_PROJECTS } from "@/lib/projects";

// Generate static params so Next.js can pre-render each project at build time
export async function generateStaticParams() {
  return ALL_PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = ALL_PROJECTS.find((p) => p.id === params.id);
  if (!project) return { title: "Project Not Found | Bright Media" };
  return {
    title: `${project.brand} – ${project.category} | Bright Media`,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return (
    <SiteShell>
      <ProjectDetailContent id={params.id} />
    </SiteShell>
  );
}
