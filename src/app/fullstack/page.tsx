import { FullstackPageContent } from "@/app/_components/FullstackPageContent";
import { getFullstackMetadata } from "@/i18n/metadata";

export const metadata = getFullstackMetadata("id");

export default function FullstackPage() {
  return <FullstackPageContent locale="id" />;
}
