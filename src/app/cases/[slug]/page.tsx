import { CaseStudyPageContent } from "@/app/_components/CaseStudyPageContent";
import { getCaseStudies } from "@/i18n/content";
import { getCaseMetadata } from "@/i18n/metadata";

export function generateStaticParams() {
  return getCaseStudies("id").map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  return getCaseMetadata(params.slug, "id");
}

export default async function CaseStudyPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  return <CaseStudyPageContent locale="id" slug={params.slug} />;
}
