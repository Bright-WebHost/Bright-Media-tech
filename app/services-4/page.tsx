import SiteShell from "@/components/SiteShell";
import Breadcrumb from "@/components/Breadcrumb";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import SMCta from "@/components/social-media/SMCta";

export const metadata = {
  title: "Search Engine Optimization | Bright Media",
  description:
    "Optimize your online presence to improve search rankings, attract organic traffic, and increase visibility across AI and search engines.",
};

export default function Services4Page() {
  return (
    <SiteShell>
      <Breadcrumb
        title="Search Engine Optimization"
        subtitle="Authority & Organic Scale"
        badge="SEO // PILLAR 04"
        description="Optimize your online presence to improve search rankings, attract qualified organic traffic, and increase authority across Google and AI search engines."
      />
      <ServicesShowcase variant={4} />
      <SMCta />
    </SiteShell>
  );
}
