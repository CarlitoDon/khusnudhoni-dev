import type { Metadata } from "next";
import { SITE_PROFILE } from "@/data/site";
import { getCaseStudyBySlug, getDictionary } from "@/i18n/content";
import type { Locale } from "@/i18n/routing";

type AlternateUrls = {
  id: string;
  en: string;
};

function withAlternates(locale: Locale, urls: AlternateUrls): Metadata["alternates"] {
  return {
    canonical: urls[locale],
    languages: {
      id: urls.id,
      en: urls.en,
      "x-default": urls.id,
    },
  };
}

function siteOpenGraphLocale(locale: Locale) {
  return locale === "id" ? "id_ID" : "en_US";
}

function alternateOpenGraphLocale(locale: Locale) {
  return locale === "id" ? "en_US" : "id_ID";
}

export function homeUrls(): AlternateUrls {
  return {
    id: SITE_PROFILE.adsDomain,
    en: `${SITE_PROFILE.adsDomain}/en`,
  };
}

export function seoUrls(): AlternateUrls {
  return {
    id: SITE_PROFILE.seoDomain,
    en: `${SITE_PROFILE.seoDomain}/en/seo`,
  };
}

export function fullstackUrls(): AlternateUrls {
  return {
    id: SITE_PROFILE.fullstackDomain,
    en: `${SITE_PROFILE.fullstackDomain}/en/fullstack`,
  };
}

export function devUrls(): AlternateUrls {
  return {
    id: SITE_PROFILE.devDomain,
    en: `${SITE_PROFILE.devDomain}/en/dev`,
  };
}

export function caseUrls(slug: string): AlternateUrls {
  return {
    id: `${SITE_PROFILE.adsDomain}/cases/${slug}`,
    en: `${SITE_PROFILE.adsDomain}/en/cases/${slug}`,
  };
}

export function getHomeMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  const urls = homeUrls();

  return {
    title: t.home.metadata.title,
    description: t.home.metadata.description,
    keywords: t.home.metadata.keywords,
    alternates: withAlternates(locale, urls),
    openGraph: {
      title: t.home.metadata.title,
      description: t.home.metadata.description,
      url: urls[locale],
      siteName: `${SITE_PROFILE.name} Portfolio`,
      locale: siteOpenGraphLocale(locale),
      alternateLocale: alternateOpenGraphLocale(locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.home.metadata.title,
      description: t.home.metadata.description,
    },
  };
}

export function getSeoMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  const urls = seoUrls();

  return {
    title: t.seo.metadata.title,
    description: t.seo.metadata.description,
    keywords: t.seo.metadata.keywords,
    alternates: withAlternates(locale, urls),
    openGraph: {
      title: t.seo.metadata.title,
      description: t.seo.openGraphDescription,
      url: urls[locale],
      locale: siteOpenGraphLocale(locale),
      alternateLocale: alternateOpenGraphLocale(locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.seo.metadata.title,
      description: t.seo.openGraphDescription,
    },
  };
}

export function getFullstackMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  const urls = fullstackUrls();

  return {
    title: t.fullstack.metadata.title,
    description: t.fullstack.metadata.description,
    keywords: t.fullstack.metadata.keywords,
    alternates: withAlternates(locale, urls),
    openGraph: {
      title: t.fullstack.metadata.title,
      description: t.fullstack.metadata.description,
      url: urls[locale],
      locale: siteOpenGraphLocale(locale),
      alternateLocale: alternateOpenGraphLocale(locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.fullstack.metadata.title,
      description: t.fullstack.metadata.description,
    },
  };
}

export function getDevMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  const urls = devUrls();

  return {
    title: t.dev.metadata.title,
    description: t.dev.metadata.description,
    keywords: t.dev.metadata.keywords,
    alternates: withAlternates(locale, urls),
    openGraph: {
      title: t.dev.metadata.title,
      description: t.dev.metadata.description,
      url: urls[locale],
      locale: siteOpenGraphLocale(locale),
      alternateLocale: alternateOpenGraphLocale(locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.dev.metadata.title,
      description: t.dev.metadata.description,
    },
  };
}

export function getCaseMetadata(slug: string, locale: Locale): Metadata {
  const t = getDictionary(locale);
  const caseStudy = getCaseStudyBySlug(slug, locale);

  if (!caseStudy) {
    return {
      title: t.casePage.notFoundTitle,
      robots: { index: false, follow: false },
    };
  }

  const urls = caseUrls(slug);

  return {
    title: `${caseStudy.title} | ${t.casePage.metadataTitleSuffix} | ${SITE_PROFILE.name}`,
    description: caseStudy.shortDescription,
    alternates: withAlternates(locale, urls),
    openGraph: {
      title: `${caseStudy.title} | ${SITE_PROFILE.name}`,
      description: caseStudy.shortDescription,
      url: urls[locale],
      locale: siteOpenGraphLocale(locale),
      alternateLocale: alternateOpenGraphLocale(locale),
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} | ${SITE_PROFILE.name}`,
      description: caseStudy.shortDescription,
    },
  };
}
