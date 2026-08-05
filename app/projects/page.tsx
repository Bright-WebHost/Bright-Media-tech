import SiteShell from "@/components/SiteShell";
import ProjectsPageContent from "@/components/projects/ProjectsPageContent";

export const metadata = {
  title: "Projects | Bright Media",
  description:
    "Explore our portfolio of branding, social media, photography, web development, and video production projects delivered across 12+ countries.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <ProjectsPageContent />
    </SiteShell>
  );
}
