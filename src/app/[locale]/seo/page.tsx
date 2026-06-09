import { notFound } from "next/navigation";
import { SeoPageContent } from "@/app/_components/SeoPageContent";
import { getSeoMetadata } from "@/i18n/metadata";
import { isLocale } from "@/i18n/routing";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  return getSeoMetadata(locale);
}

export default async function LocalizedSeoPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <SeoPageContent locale={locale} />;
}
