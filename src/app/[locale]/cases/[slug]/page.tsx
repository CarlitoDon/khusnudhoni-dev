import { notFound } from "next/navigation";
import { CaseStudyPageContent } from "@/app/_components/CaseStudyPageContent";
import { getCaseStudies } from "@/i18n/content";
import { getCaseMetadata } from "@/i18n/metadata";
import { isLocale, locales } from "@/i18n/routing";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getCaseStudies(locale).map((caseStudy) => ({
      locale,
      slug: caseStudy.slug,
    })),
  );
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  return getCaseMetadata(slug, locale);
}

export default async function LocalizedCaseStudyPage(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <CaseStudyPageContent locale={locale} slug={slug} />;
}
