import type { MetadataRoute } from "next";
import { SITE_PROFILE } from "@/data/site";
import { getCaseStudies } from "@/i18n/content";
import {
  caseUrls,
  devUrls,
  fullstackUrls,
  homeUrls,
  seoUrls,
} from "@/i18n/metadata";

function absolutePath(origin: string, path: string): string {
  return path === "/" ? origin : `${origin}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const adsUrl = SITE_PROFILE.adsDomain;

  const canonicalPages: Array<{ path: string; priority: number }> = [
    { path: "/", priority: 1 },
    { path: "/en", priority: 1 },
    { path: "/seo", priority: 0.92 },
    { path: "/en/seo", priority: 0.92 },
    { path: "/dev", priority: 0.9 },
    { path: "/en/dev", priority: 0.9 },
    { path: "/fullstack", priority: 0.9 },
    { path: "/en/fullstack", priority: 0.9 },
  ];

  const pageUrls: MetadataRoute.Sitemap = canonicalPages.map((page) => ({
    url: absolutePath(adsUrl, page.path),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page.priority,
  }));

  const adsCaseUrls: MetadataRoute.Sitemap = getCaseStudies("id").map((caseStudy) => ({
    url: `${adsUrl}/cases/${caseStudy.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const englishAdsCaseUrls: MetadataRoute.Sitemap = getCaseStudies("id").map((caseStudy) => ({
    url: `${adsUrl}/en/cases/${caseStudy.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...pageUrls,
    ...adsCaseUrls,
    ...englishAdsCaseUrls,
  ];
}
    ...adsCaseUrls,
    ...englishAdsCaseUrls,
  ];
}
