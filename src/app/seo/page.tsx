import type { Metadata } from "next";
import { SeoPageContent } from "@/app/_components/SeoPageContent";
import { SITE_PROFILE } from "@/data/site";

export const metadata: Metadata = {
  title: "Khusnudhoni SEO Specialist | Technical SEO, Local SEO & Growth Search Systems",
  description:
    "SEO partner untuk bisnis lokal dan e-commerce: audit teknikal, GSC opportunity mining, content cluster, local SEO, internal linking, dan measurement system.",
  keywords: [
    "SEO specialist Indonesia",
    "technical SEO",
    "local SEO",
    "GSC audit",
    "content cluster",
    "SEO Jogja",
    "ecommerce SEO",
    "SEO consultant",
  ],
  alternates: {
    canonical: `${SITE_PROFILE.adsDomain}/seo`,
    languages: {
      id: `${SITE_PROFILE.adsDomain}/seo`,
      en: `${SITE_PROFILE.adsDomain}/en/seo`,
    },
  },
  openGraph: {
    title: "Khusnudhoni SEO Specialist",
    description:
      "Technical SEO, local SEO, content clusters, and measurable search-growth systems for businesses.",
    url: `${SITE_PROFILE.adsDomain}/seo`,
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khusnudhoni SEO Specialist",
    description:
      "Technical SEO, local SEO, content clusters, and measurable search-growth systems for businesses.",
  },
};

export default function SeoPage() {
  return <SeoPageContent locale="id" />;
}
