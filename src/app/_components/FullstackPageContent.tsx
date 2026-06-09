import {
  ArrowRight,
  CheckCircle2,
  Code2,
  HelpCircle,
  Layout,
  Linkedin,
  MessageCircle,
  Server,
  Settings,
  Zap,
} from "lucide-react";
import { BackgroundLayer } from "@/components/BackgroundLayer";
import { GlassButton } from "@/components/GlassButton";
import { GlassPanel } from "@/components/GlassPanel";
import { InteractiveStackGlow } from "@/components/InteractiveStackGlow";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SITE_PROFILE } from "@/data/site";
import { devStack, getDevProjects, getDictionary } from "@/i18n/content";
import type { Locale } from "@/i18n/routing";

type FullstackPageContentProps = {
  locale: Locale;
};

const outcomeIcons = [Zap, Layout, Server] as const;

export function FullstackPageContent({ locale }: FullstackPageContentProps) {
  const t = getDictionary(locale);
  const devProjects = getDevProjects(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_PROFILE.name,
    url: SITE_PROFILE.webDomain,
    jobTitle: t.fullstack.jsonLdJobTitle,
    knowsAbout: devStack,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative min-h-screen z-0">
        <BackgroundLayer />
        <SiteNavbar locale={locale} />

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-10 lg:px-14">
          <header className="mb-24 flex flex-col items-start gap-6 animate-enter">
            <div className="magic-badge inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.75rem] uppercase tracking-wider text-blue-700">
              <Code2 className="mr-2 h-3.5 w-3.5 text-blue-600" />
              {t.fullstack.badge}
            </div>

            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              {t.fullstack.headingLead}
              <span className="font-extrabold italic text-blue-700 dark:text-cyan-300">
                {t.fullstack.headingEmphasis}
              </span>
            </h1>

            <p className="max-w-2xl text-base font-medium text-slate-800 dark:text-slate-200 leading-relaxed sm:text-xl">
              {t.fullstack.summary}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <GlassButton
                className="group"
                href={SITE_PROFILE.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                variant="primary"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {t.fullstack.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </GlassButton>
              <GlassButton
                href={SITE_PROFILE.linkedInUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                {t.fullstack.secondaryCta}
              </GlassButton>
            </div>
          </header>

          <section id="outcomes" className="mb-24 scroll-mt-24 animate-enter delay-100">
            <h2 className="mb-8 text-sm font-mono tracking-widest text-slate-900 dark:text-slate-100 uppercase">
              {t.fullstack.outcomesLabel}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.fullstack.outcomes.map((item, index) => {
                const Icon = outcomeIcons[index] ?? Zap;

                return (
                  <GlassPanel key={item.title} className="p-8 flex flex-col gap-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {item.title}
                    </h3>
                    <p className="text-slate-900 dark:text-slate-100 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </GlassPanel>
                );
              })}
            </div>
          </section>

          <section id="services" className="mb-24 scroll-mt-24">
            <h2 className="mb-8 text-sm font-mono tracking-widest text-slate-900 dark:text-slate-100 uppercase">
              {t.fullstack.servicesLabel}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.fullstack.services.map((service) => (
                <GlassPanel key={service.title} className="p-8">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-900 dark:text-slate-100 text-sm mb-4 leading-relaxed">
                    {service.summary}
                  </p>
                  <ul className="space-y-2">
                    {service.outputs.map((out) => (
                      <li key={out} className="text-xs text-slate-900 dark:text-slate-100 flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 text-blue-500 mt-0.5" />
                        {out}
                      </li>
                    ))}
                  </ul>
                </GlassPanel>
              ))}
            </div>
          </section>

          <section id="stack" className="mb-24 scroll-mt-24">
            <h2 className="mb-8 text-sm font-mono tracking-widest text-slate-900 dark:text-slate-100 uppercase">
              {t.fullstack.stackLabel}
            </h2>
            <InteractiveStackGlow>
              <GlassPanel className="p-8">
                <div className="flex flex-wrap gap-3">
                  {devStack.map((tool) => (
                    <span className="tech-chip" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            </InteractiveStackGlow>
          </section>

          <section id="cases" className="mb-24 scroll-mt-24">
            <h2 className="mb-8 text-sm font-mono tracking-widest text-slate-900 dark:text-slate-100 uppercase">
              {t.fullstack.proofLabel}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devProjects.map((project, index) => (
                <article
                  className={`glass-surface-primary p-8 md:p-10 flex flex-col gap-6 group hover:border-blue-400/50 ${index === 0 ? "md:col-span-2" : ""}`}
                  key={project.slug}
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-blue-700 font-bold text-xs">/project_{index + 1}</span>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{project.title}</h3>
                  </div>
                  <p className="text-slate-900 dark:text-slate-100 text-sm leading-relaxed">{project.shortDescription}</p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-slate-900 dark:text-slate-100 flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="process" className="mb-24 scroll-mt-24">
            <h2 className="mb-8 text-sm font-mono tracking-widest text-slate-900 dark:text-slate-100 uppercase">
              {t.fullstack.processLabel}
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
              {t.fullstack.process.map((step, index) => (
                <GlassPanel key={step.title} className="p-6">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-blue-700">
                    {t.fullstack.phaseLabel(index)}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-slate-100">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-900 dark:text-slate-100">
                    {step.desc}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </section>

          <section id="engagement" className="mb-24 scroll-mt-24">
            <h2 className="mb-8 text-sm font-mono tracking-widest text-slate-900 dark:text-slate-100 uppercase">
              {t.fullstack.engagementLabel}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.fullstack.pricingModels.map((model) => (
                <GlassPanel key={model.name} className="p-8 border-l-4 border-l-blue-500">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{model.name}</h3>
                  <p className="text-slate-900 dark:text-slate-100 text-sm mb-4 leading-relaxed">{model.desc}</p>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[0.65rem] font-mono uppercase tracking-widest rounded-full">
                    {t.fullstack.bestForLabel} {model.bestFor}
                  </span>
                </GlassPanel>
              ))}
            </div>
          </section>

          <section id="faq" className="mb-24 scroll-mt-24">
            <h2 className="mb-8 text-sm font-mono tracking-widest text-slate-900 dark:text-slate-100 uppercase">
              {t.fullstack.faqLabel}
            </h2>
            <div className="space-y-4">
              {t.fullstack.faqs.map((faq) => (
                <GlassPanel key={faq.q} className="p-6">
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-blue-500" />
                    {faq.q}
                  </h3>
                  <p className="text-slate-900 dark:text-slate-100 text-sm leading-relaxed pl-6">{faq.a}</p>
                </GlassPanel>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <GlassPanel className="p-12 text-center bg-blue-600 border-none">
              <h2 className="text-3xl font-bold text-white mb-6">{t.fullstack.finalTitle}</h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <GlassButton
                  href={SITE_PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  className="bg-white text-blue-700 hover:bg-white/90 border-none px-8 py-4 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t.fullstack.finalPrimaryCta}
                </GlassButton>
                <div className="flex flex-col items-center">
                  <span className="text-white/70 font-mono text-xs uppercase mb-2">{t.fullstack.finalEmailLabel}</span>
                  <a href={`mailto:${SITE_PROFILE.email}`} className="text-white font-mono text-lg underline underline-offset-4 hover:text-white/80 transition-colors">
                    {SITE_PROFILE.email}
                  </a>
                </div>
              </div>
            </GlassPanel>
          </section>

          <footer className="mt-24 border-t border-gray-300 pt-8 flex items-center justify-between text-xs text-slate-900 dark:text-slate-100 font-mono">
            <p>{SITE_PROFILE.name} &copy; {new Date().getFullYear()}</p>
            <p className="flex items-center gap-2">
              <Settings className="h-3.5 w-3.5 animate-spin-slow" />
              {t.fullstack.footerStatus}
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
