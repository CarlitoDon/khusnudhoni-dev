import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/cases";
import { SITE_PROFILE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const adsUrl = SITE_PROFILE.adsDomain;
  const webUrl = SITE_PROFILE.webDomain;
  const devUrl = SITE_PROFILE.devDomain;
  const fullstackUrl = SITE_PROFILE.fullstackDomain;
  const seoUrl = SITE_PROFILE.seoDomain;

  const adsCaseUrls: MetadataRoute.Sitemap = caseStudies.map((caseStudy) => ({
    url: `${adsUrl}/cases/${caseStudy.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: adsUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: webUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: devUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: fullstackUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: seoUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.92,
    },
    ...adsCaseUrls,
  ];
}
