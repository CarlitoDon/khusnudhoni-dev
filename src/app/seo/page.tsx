import { SeoPageContent } from "@/app/_components/SeoPageContent";
import { getSeoMetadata } from "@/i18n/metadata";

export const metadata = getSeoMetadata("id");

export default function SeoPage() {
  return <SeoPageContent locale="id" />;
}
