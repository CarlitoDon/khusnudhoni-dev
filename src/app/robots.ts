import type { MetadataRoute } from "next";
import { SITE_PROFILE } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const sitemapUrls = [
    SITE_PROFILE.rootDomain,
    SITE_PROFILE.adsDomain,
    SITE_PROFILE.webDomain,
    SITE_PROFILE.devDomain,
    SITE_PROFILE.fullstackDomain,
    SITE_PROFILE.seoDomain,
  ].map((siteUrl) => `${siteUrl}/sitemap.xml`);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: sitemapUrls,
  };
}
