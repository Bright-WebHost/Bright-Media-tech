import SiteShell from "@/components/SiteShell";
import Breadcrumb from "@/components/Breadcrumb";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import SMCta from "@/components/social-media/SMCta";
import WDWork from "@/components/web-dev/WDWork";

export const metadata = {
  title: "Search Engine Optimization | Bright Media",
  description:
    "Optimize your online presence to improve search rankings, attract organic traffic, and increase visibility across AI and search engines.",
};

export default function SeoPage() {
  return (
    <SiteShell>
      <Breadcrumb
        title="Search Engine Optimization"
        subtitle="Get Found. Get Clicked. Grow."
        badge="SEO // PILLAR 04"
        description="Optimize your online presence to improve search rankings, attract qualified organic traffic, and increase authority across Google and AI search engines."
      />
      <ServicesShowcase variant={4} />
      {/* <WDWork/> */}
      <SMCta />
    </SiteShell>
  );
}
