import { notFound } from "next/navigation";
import { HomePageContent } from "@/app/_components/HomePageContent";
import { getHomeMetadata } from "@/i18n/metadata";
import { isLocale } from "@/i18n/routing";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  return getHomeMetadata(locale);
}

export default async function LocalizedHomePage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <HomePageContent locale={locale} />;
}
