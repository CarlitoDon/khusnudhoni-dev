import type { Metadata } from "next";
import { FullstackPageContent } from "@/app/_components/FullstackPageContent";
import { SITE_PROFILE } from "@/data/site";

export const metadata: Metadata = {
  title: "Khusnudhoni Fullstack Developer | khusnudhoni.online",
  description: "Fullstack development partner for business websites, dashboards, automations, integrations, ERP, and operations systems. Type-safe, scalable, and production-ready solutions.",
  keywords: ["fullstack developer", "web development", "business websites", "dashboards", "automations", "integrations", "ERP", "operations systems"],
  alternates: {
    canonical: `${SITE_PROFILE.adsDomain}/fullstack`,
    languages: {
      id: `${SITE_PROFILE.adsDomain}/fullstack`,
      en: `${SITE_PROFILE.adsDomain}/en/fullstack`,
    },
  },
};

export default function FullstackPage() {
  return <FullstackPageContent locale="id" />;
}
