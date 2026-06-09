import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileSearch,
  Link2,
  LineChart,
  MapPinned,
  MessageCircle,
  Radar,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";
import { BackgroundLayer } from "@/components/BackgroundLayer";
import { GlassButton } from "@/components/GlassButton";
import { GlassPanel } from "@/components/GlassPanel";
import { InteractiveStackGlow } from "@/components/InteractiveStackGlow";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SITE_PROFILE } from "@/data/site";
import { getDictionary } from "@/i18n/content";
import type { Locale } from "@/i18n/routing";

type SeoPageContentProps = {
  locale: Locale;
};

const outcomeIcons = [Radar, Wrench, LineChart] as const;

export function SeoPageContent({ locale }: SeoPageContentProps) {
  const t = getDictionary(locale);
  const badgeParts = t.seo.badge.split(" / ");
  const seoWhatsappUrl = `${SITE_PROFILE.whatsappUrl}?text=${encodeURIComponent(t.seo.whatsappText)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        name: "Khusnudhoni SEO Specialist",
        url: SITE_PROFILE.seoDomain,
        areaServed: "Indonesia",
        description: t.seo.jsonLdDescription,
        sameAs: [SITE_PROFILE.linkedInUrl],
        founder: {
          "@type": "Person",
          name: SITE_PROFILE.name,
          url: SITE_PROFILE.rootDomain,
          knowsAbout: [
            "Technical SEO",
            "Google Search Console",
            "Local SEO",
            "Content Strategy",
            "GA4 Measurement",
            "E-commerce SEO",
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: t.seo.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative min-h-screen z-0">
        <BackgroundLayer />
        <SiteNavbar sections={t.seo.navSections} locale={locale} />

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-28 sm:px-10 sm:pt-32 lg:px-14">
          <header className="mb-20 flex flex-col items-start gap-6 animate-enter sm:mb-24">
            <div className="magic-badge seo-page-badge grid max-w-full grid-cols-[auto_minmax(0,1fr)] items-start gap-x-2 rounded-2xl px-3 py-2 font-mono text-[0.72rem] uppercase tracking-wider text-blue-700 sm:inline-flex sm:items-center sm:rounded-full sm:py-1 dark:text-cyan-300">
              <Search className="h-3.5 w-3.5" />
              <span className="magic-badge-label">
                {badgeParts.map((part, index) => (
                  <span className="magic-badge-part" key={part}>
                    {index > 0 ? (
                      <span className="magic-badge-separator" aria-hidden="true">
                        /
                      </span>
                    ) : null}
                    {part}
                  </span>
                ))}
              </span>
            </div>

            <h1 className="max-w-5xl break-words text-3xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              {t.seo.headingLead}
              <span className="font-extrabold italic text-blue-700 dark:text-cyan-300">
                {t.seo.headingEmphasis}
              </span>
            </h1>

            <p className="max-w-3xl text-base font-medium leading-relaxed text-slate-800 dark:text-slate-200 sm:text-xl">
              {t.seo.summary}
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <GlassButton
                className="group justify-center"
                href={seoWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                variant="primary"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {t.seo.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </GlassButton>
              <GlassButton className="justify-center" href="#process">
                <FileSearch className="mr-2 h-4 w-4" />
                {t.seo.secondaryCta}
              </GlassButton>
            </div>
          </header>

          <section id="outcomes" className="mb-20 scroll-mt-28 animate-enter delay-100 sm:mb-24">
            <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-slate-900 dark:text-slate-100">
              {t.seo.outcomesLabel}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {t.seo.outcomes.map((item, index) => {
                const Icon = outcomeIcons[index] ?? Radar;

                return (
                  <GlassPanel key={item.title} className="p-7 sm:p-8">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 dark:bg-cyan-950/40">
                      <Icon className="h-5 w-5 text-blue-600 dark:text-cyan-300" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-slate-100">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                      {item.desc}
                    </p>
                  </GlassPanel>
                );
              })}
            </div>
          </section>

          <section id="services" className="mb-20 scroll-mt-28 sm:mb-24">
            <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-slate-900 dark:text-slate-100">
              {t.seo.servicesLabel}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.seo.services.map((service) => (
                <GlassPanel key={service.title} className="p-7">
                  <h3 className="mb-3 text-lg font-bold text-slate-950 dark:text-slate-100">
                    {service.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                    {service.summary}
                  </p>
                  <ul className="space-y-2">
                    {service.outputs.map((output) => (
                      <li key={output} className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600 dark:text-cyan-300" />
                        {output}
                      </li>
                    ))}
                  </ul>
                </GlassPanel>
              ))}
            </div>
          </section>

          <section id="process" className="mb-20 scroll-mt-28 sm:mb-24">
            <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-slate-900 dark:text-slate-100">
              {t.seo.processLabel}
            </h2>
            <InteractiveStackGlow>
              <GlassPanel className="p-6 sm:p-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                  {t.seo.process.map((step, index) => (
                    <div key={step.title} className="rounded-2xl border border-white/50 bg-white/45 p-5 dark:border-white/10 dark:bg-white/5">
                      <span className="mb-4 block font-mono text-xs font-bold text-blue-700 dark:text-cyan-300">
                        /step_{index + 1}
                      </span>
                      <h3 className="mb-3 text-base font-bold text-slate-950 dark:text-slate-100">
                        {step.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-slate-800 dark:text-slate-200">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </InteractiveStackGlow>
          </section>

          <section id="fit" className="mb-20 grid grid-cols-1 gap-6 scroll-mt-28 md:grid-cols-[1.1fr_0.9fr] sm:mb-24">
            <GlassPanel className="p-7 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <MapPinned className="h-5 w-5 text-blue-600 dark:text-cyan-300" />
                <h2 className="text-xl font-bold text-slate-950 dark:text-slate-100">
                  {t.seo.fitTitle}
                </h2>
              </div>
              <ul className="space-y-3">
                {t.seo.clientFit.map((fit) => (
                  <li key={fit} className="flex items-start gap-3 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-cyan-300" />
                    {fit}
                  </li>
                ))}
              </ul>
            </GlassPanel>

            <GlassPanel className="p-7 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-blue-600 dark:text-cyan-300" />
                <h2 className="text-xl font-bold text-slate-950 dark:text-slate-100">
                  {t.seo.reportingTitle}
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                {t.seo.reportingBody}
              </p>
              <div className="rounded-2xl border border-blue-200/60 bg-blue-50/70 p-4 text-xs leading-relaxed text-slate-900 dark:border-cyan-500/20 dark:bg-cyan-950/20 dark:text-slate-100">
                {t.seo.reportingFormula}
              </div>
            </GlassPanel>
          </section>

          <section id="faq" className="mb-20 scroll-mt-28 sm:mb-24">
            <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-slate-900 dark:text-slate-100">
              {t.seo.faqLabel}
            </h2>
            <div className="grid grid-cols-1 gap-5">
              {t.seo.faqs.map((faq) => (
                <GlassPanel key={faq.q} className="p-7">
                  <h3 className="mb-3 text-lg font-bold text-slate-950 dark:text-slate-100">
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                    {faq.a}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-blue-200/60 bg-gradient-to-br from-blue-600 to-cyan-500 p-7 text-white shadow-2xl shadow-blue-950/20 sm:p-10">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/30 px-3 py-1 font-mono text-xs uppercase tracking-widest text-white/90">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              {t.seo.finalEyebrow}
            </div>
            <h2 className="mb-4 max-w-3xl text-2xl font-extrabold tracking-tight sm:text-4xl">
              {t.seo.finalTitle}
            </h2>
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
              {t.seo.finalBody}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <GlassButton
                className="justify-center bg-white/95 text-blue-700 hover:bg-white"
                href={seoWhatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {t.seo.finalPrimaryCta}
              </GlassButton>
              <GlassButton
                className="justify-center border-white/50 text-white hover:bg-white/10"
                href={SITE_PROFILE.linkedInUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Link2 className="mr-2 h-4 w-4" />
                {t.seo.finalSecondaryCta}
              </GlassButton>
            </div>
          </section>

          <footer className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-gray-300 pt-8 font-mono text-xs text-slate-900 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center">
            <p>Khusnudhoni SEO &copy; {new Date().getFullYear()}</p>
            <p className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              {t.seo.footerStatus}
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
