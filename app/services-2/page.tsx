import PageShell from "@/components/PageShell";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import WhyDixor from "@/components/home/WhyDixor";
import ContactCTA from "@/components/ContactCTA";

export const metadata = { title: "Services Two — Dixor" };

export default function Services2Page() {
  return (
    <PageShell title="Service Version Two" crumb="Services">
      <ServicesShowcase variant={2} />
      <WhyDixor />
      <ContactCTA />
    </PageShell>
  );
}
