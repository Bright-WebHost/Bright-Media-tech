import SiteShell from "@/components/SiteShell";
import Breadcrumb from "@/components/Breadcrumb";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import SMCta from "@/components/social-media/SMCta";

export const metadata = {
  title: "Web Development | Bright Media",
  description:
    "Build user-friendly, high-performance responsive websites designed to enhance customer experience and drive conversions.",
};

export default function WebDevelopmentPage() {
  return (
    <SiteShell>
      <Breadcrumb
        title="Web Development"
        subtitle="Websites that work as good as they look"
        badge="WEB & PLATFORMS // PILLAR 03"
        description="Build user-friendly, responsive websites and web applications designed to enhance customer experience and drive conversions effectively."
      />
      <ServicesShowcase variant={3} />
      <SMCta />
    </SiteShell>
  );
}
