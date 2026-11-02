import { HomePageContent } from "@/app/_components/HomePageContent";
import { getHomeMetadata } from "@/i18n/metadata";

export const metadata = getHomeMetadata("en");

export default function Home() {
  return <HomePageContent locale="en" />;
}
