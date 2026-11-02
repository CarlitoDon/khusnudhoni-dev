import type { Metadata } from "next";
import { DevPageContent } from "@/app/_components/DevPageContent";
import { SITE_PROFILE } from "@/data/site";

export const metadata: Metadata = {
  title: "Khusnudhoni Backend & Fullstack Developer",
  description:
    "Backend and fullstack developer portfolio covering API architecture, data modeling, TypeScript systems, and production-ready web delivery.",
  alternates: {
    canonical: `${SITE_PROFILE.adsDomain}/en/dev`,
    languages: {
      id: `${SITE_PROFILE.adsDomain}/dev`,
      en: `${SITE_PROFILE.adsDomain}/en/dev`,
    },
  },
};

export default function DevPage() {
  return <DevPageContent locale="en" />;
}
