import { notFound } from "next/navigation";
import { FullstackPageContent } from "@/app/_components/FullstackPageContent";
import { getFullstackMetadata } from "@/i18n/metadata";
import { isLocale } from "@/i18n/routing";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  return getFullstackMetadata(locale);
}

export default async function LocalizedFullstackPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <FullstackPageContent locale={locale} />;
}
