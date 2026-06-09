import { DevPageContent } from "@/app/_components/DevPageContent";
import { getDevMetadata } from "@/i18n/metadata";

export const metadata = getDevMetadata("id");

export default function DevHomePage() {
  return <DevPageContent locale="id" />;
}
