import { caseStudies, getCaseStudyBySlug } from "@/data/cases";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HiddenImpactSection } from "@/components/HiddenImpactSection";
import { BackgroundLayer } from "@/components/BackgroundLayer";
import { GlassPanel } from "@/components/GlassPanel";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SITE_PROFILE } from "@/data/site";

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
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
  };
}

export default async function CaseStudyPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="relative min-h-screen z-0">
      <BackgroundLayer showSecondaryOrb={false} />
      <SiteNavbar basePath="/" />

      <div className="mx-auto max-w-5xl px-6 pb-24 pt-32 sm:px-10 lg:px-14">
        <GlassPanel className="p-8 md:p-12 shadow-sm animate-enter">
          <div className="mb-10">
            <Link
              href="/#cases"
              className="inline-flex items-center text-sm font-mono text-blue-600 hover:text-blue-700 transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> [ BACK_TO_LIST ]
            </Link>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl text-slate-900 dark:text-white mb-4">
              {caseStudy.title}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 border-y border-gray-300 py-6">
              <div className="flex-1">
                <span className="font-mono text-[0.65rem] text-slate-800 dark:text-slate-200 uppercase tracking-widest block mb-2">
                  Context
                </span>
                <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
                  {caseStudy.context}
                </p>
              </div>
              <div className="w-px bg-gray-200 hidden sm:block"></div>
              <div className="flex-1">
                <span className="font-mono text-[0.65rem] text-slate-800 dark:text-slate-200 uppercase tracking-widest block mb-2">
                  My Role
                </span>
                <p className="text-slate-800 dark:text-slate-200 text-sm font-medium leading-relaxed">
                  {caseStudy.role}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-10 animate-enter delay-200">
            <div className="flex flex-col gap-6">
              <span className="font-mono text-sm text-blue-600 uppercase tracking-widest border-b border-blue-200 pb-3">
                Strategy Executed
              </span>
              <ul className="data-list text-base space-y-4">
                {caseStudy.strategy.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <span className="font-mono text-sm text-blue-600 uppercase tracking-widest border-b border-blue-200 pb-3">
                Tracking Setup
              </span>
              <ul className="data-list text-base space-y-4">
                {caseStudy.tracking.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <HiddenImpactSection results={caseStudy.results} metrics={caseStudy.metrics} />
        </GlassPanel>
      </div>
    </main>
  );
}
