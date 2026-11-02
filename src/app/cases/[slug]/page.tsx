import { CaseStudyPageContent } from "@/app/_components/CaseStudyPageContent";
import { getCaseStudies, getCaseStudyBySlug } from "@/data/cases";
import { SITE_PROFILE } from "@/data/site";

export function generateStaticParams() {
  return getCaseStudies("id").map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${caseStudy.title} | Case Study | ${SITE_PROFILE.name}`,
    description: caseStudy.shortDescription,
    alternates: {
      canonical: `${SITE_PROFILE.adsDomain}/cases/${caseStudy.slug}`,
      languages: {
        id: `${SITE_PROFILE.adsDomain}/cases/${caseStudy.slug}`,
        en: `${SITE_PROFILE.adsDomain}/en/cases/${caseStudy.slug}`,
      },
    },
  };
}

export default async function CaseStudyPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  return <CaseStudyPageContent locale="id" slug={slug} />;
}
