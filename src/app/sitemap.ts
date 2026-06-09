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

type SitemapAlternates = {
  id: string;
  en: string;
};

function localizedEntries(
  urls: SitemapAlternates,
  priority: number,
): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const alternates = {
    languages: {
      id: urls.id,
      en: urls.en,
      "x-default": urls.id,
    },
  };

  return [
    {
      url: urls.id,
      lastModified,
      changeFrequency: "monthly",
      priority,
      alternates,
    },
    {
      url: urls.en,
      lastModified,
      changeFrequency: "monthly",
      priority,
      alternates,
    },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const webUrls = {
    id: SITE_PROFILE.webDomain,
    en: `${SITE_PROFILE.webDomain}/en/fullstack`,
  };

  const adsCaseUrls: MetadataRoute.Sitemap = getCaseStudies("id").flatMap(
    (caseStudy) => localizedEntries(caseUrls(caseStudy.slug), 0.8),
  );

  return [
    ...localizedEntries(homeUrls(), 1),
    ...localizedEntries(webUrls, 0.95),
    ...localizedEntries(devUrls(), 0.9),
    ...localizedEntries(fullstackUrls(), 0.9),
    ...localizedEntries(seoUrls(), 0.92),
    ...adsCaseUrls,
  ];
}
