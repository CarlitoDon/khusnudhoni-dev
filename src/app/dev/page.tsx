import type { Metadata } from "next";
import { DevPageContent } from "@/app/_components/DevPageContent";
import { SITE_PROFILE } from "@/data/site";

export const metadata: Metadata = {
  title: "Khusnudhoni Backend & Fullstack Developer",
  description:
    "Portfolio backend dan fullstack developer untuk API architecture, data modeling, TypeScript systems, dan production-ready web delivery.",
  alternates: {
    canonical: `${SITE_PROFILE.adsDomain}/dev`,
    languages: {
      id: `${SITE_PROFILE.adsDomain}/dev`,
      en: `${SITE_PROFILE.adsDomain}/en/dev`,
    },
  },
};

export default function DevPage() {
  return <DevPageContent locale="id" />;
}
