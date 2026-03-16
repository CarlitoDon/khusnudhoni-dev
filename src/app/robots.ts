import type { MetadataRoute } from "next";
import { SITE_PROFILE } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = SITE_PROFILE.rootDomain;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
