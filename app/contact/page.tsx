import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us - Ripped Note & Creative Ideas | Dixor",
  description:
    "Get in touch with Bright Media. Send us a message on our torn paper letter board or reach our offices in India, Ivory Coast, and UAE.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactPageContent />
    </SiteShell>
  );
}
