import SiteShell from "@/components/SiteShell";
import Breadcrumb from "@/components/Breadcrumb";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import SMCta from "@/components/social-media/SMCta";

export const metadata = {
  title: "Web Development | Bright Media",
  description:
    "Build user-friendly, high-performance responsive websites designed to enhance customer experience and drive conversions.",
};

export default function Services3Page() {
  return (
    <SiteShell>
      <Breadcrumb
        title="Web Development"
        subtitle="60fps Fluid Digital Craft"
        badge="WEB & PLATFORMS // PILLAR 03"
        description="Build user-friendly, responsive websites and web applications designed to enhance customer experience and drive conversions effectively."
      />
      <ServicesShowcase variant={3} />
      <SMCta />
    </SiteShell>
  );
}
