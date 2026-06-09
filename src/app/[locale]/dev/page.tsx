import { notFound } from "next/navigation";
import { DevPageContent } from "@/app/_components/DevPageContent";
import { getDevMetadata } from "@/i18n/metadata";
import { isLocale } from "@/i18n/routing";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  return getDevMetadata(locale);
}

export default async function LocalizedDevPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <DevPageContent locale={locale} />;
}
