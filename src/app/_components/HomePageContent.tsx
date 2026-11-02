import {
  ArrowRight, Code2, TrendingUp, Linkedin, CheckCircle2, Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundLayer } from "@/components/BackgroundLayer";
import { ContactButton } from "@/components/ContactButton";
import { GlassButton } from "@/components/GlassButton";
import { GlassPanel } from "@/components/GlassPanel";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SITE_PROFILE } from "@/data/site";
import { STACK, homeCopy, type Service, type Blueprint } from "@/data/home";
import { getDevPortfolio } from "@/data/dev-portfolio";
import { getCaseStudies } from "@/i18n/content";
import { localizedPath, type Locale } from "@/i18n/routing";

function ServiceCard({ item, locale }: { item: Service; locale: Locale }) {
  const Icon = item.icon;
  const inner = (
    <>
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="mb-1.5 font-semibold text-slate-900 dark:text-white">{item.title}</h4>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.text}</p>
      {item.href && <ArrowRight className="absolute right-4 top-4 h-4 w-4 text-blue-500 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />}
    </>
  );
  const cls = "bento-card glass-surface-primary group relative p-5 transition-all hover:-translate-y-0.5";
  return item.href
    ? <Link href={localizedPath(item.href, locale)} className={cls}>{inner}</Link>
    : <div className={cls}>{inner}</div>;
}

function BlueprintCard({ bp, idx }: { bp: Blueprint; idx: number }) {
  const accent = idx === 0;
  return (
    <div className={`flex flex-col justify-between rounded-3xl border p-6 sm:p-7 ${accent ? "border-blue-300 bg-blue-50/80 dark:border-blue-500/40 dark:bg-slate-900" : "border-slate-200/90 bg-white/90 dark:border-slate-800 dark:bg-slate-900/70"}`}>
      <div>
        <span className="inline-block rounded-full bg-slate-900 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-white dark:bg-blue-500/20 dark:text-blue-300">
          {bp.badge}
        </span>
        <h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white sm:text-2xl">{bp.title}</h3>
        <p className="mt-1.5 font-mono text-xs text-blue-700 dark:text-blue-300">{bp.audience}</p>
      </div>
      <ul className="mt-5 space-y-2 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/50">
        {bp.includes.map(inc => (
          <li key={inc} className="flex items-start gap-2 text-sm text-slate-800 dark:text-slate-200">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>{inc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HomePageContent({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];
  const cases = getCaseStudies(locale);
  const devProjects = getDevPortfolio(locale).projects;
  const [featuredCase, ...otherCases] = cases;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_PROFILE.name,
    url: SITE_PROFILE.rootDomain,
    image: `${SITE_PROFILE.rootDomain}/khusnudhoni-formal.jpg`,
    jobTitle: "Software Developer & Digital Marketer",
    knowsAbout: [...STACK.build, ...STACK.grow],
    sameAs: [SITE_PROFILE.linkedInUrl],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="relative z-0 min-h-full">
        <BackgroundLayer />
        <SiteNavbar basePath={localizedPath("/", locale)} locale={locale} sections={t.nav} />

        <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-8 sm:pt-16 lg:px-10">

                    {/* ── HERO ─────────────────────────────────────────────────── */}
          <header className="animate-enter mb-20 sm:mb-28">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_260px]">
              {/* Left: copy */}
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 font-mono text-[0.72rem] font-bold uppercase tracking-wider text-blue-800 dark:border-blue-800/60 dark:bg-blue-950/50 dark:text-blue-300">
                  <Code2 className="h-3.5 w-3.5" />
                  {t.badge}
                </div>

                <h1 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  {t.headingLead}
                  <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-300 dark:to-emerald-300">
                    {t.headingEmphasis}
                  </span>
                </h1>

                <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  {t.summary}
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <ContactButton isHero locale={locale} />
                  <GlassButton className="justify-center" href="#layanan">{t.ctaSecondary}</GlassButton>
                </div>
              </div>

              {/* Right: foto kecil + identitas — hanya desktop */}
              <div className="hidden lg:block">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
                  <Image
                    src="/khusnudhoni-formal.jpg"
                    alt="Khusnudhoni — Software Developer & Digital Marketer"
                    width={900}
                    height={900}
                    priority
                    sizes="260px"
                    className="w-full object-cover object-top dark:brightness-90"
                    style={{ aspectRatio: "4/5" }}
                  />
                  <div className="px-4 py-3 border-t border-slate-100 dark:border-slate-800">
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{SITE_PROFILE.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Software Dev × Digital Marketer</p>
                    <a
                      href={SITE_PROFILE.linkedInUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 transition-colors"
                    >
                      <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* ── PROOF STRIP ──────────────────────────────────────────── */}
          <section className="mb-20 sm:mb-28">
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{t.proofLabel}</p>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {t.proof.map(p => (
                <GlassPanel key={p.label} className="p-4 sm:p-5">
                  <div className="font-mono text-2xl font-extrabold text-blue-700 dark:text-blue-300 sm:text-3xl">{p.value}</div>
                  <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">{p.label}</div>
                </GlassPanel>
              ))}
            </div>
          </section>

          {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
          <section className="mb-20 sm:mb-28">
            <div className="grid gap-5 md:grid-cols-2">
              {t.testimonials.map(t => (
                <GlassPanel key={t.name} className="p-6 sm:p-8">
                  <Quote className="mb-4 h-5 w-5 text-blue-400" />
                  <p className="mb-5 text-base leading-relaxed text-slate-800 dark:text-slate-100 italic">"{t.quote}"</p>
                  <div className="border-t border-slate-200/80 pt-4 dark:border-slate-700">
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t.biz}</div>
                    <div className="mt-2 inline-block rounded-full bg-emerald-50 px-3 py-1 font-mono text-[0.65rem] font-bold text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">{t.result}</div>
                  </div>
                </GlassPanel>
              ))}
            </div>
          </section>

          {/* ── SERVICES ─────────────────────────────────────────────── */}
          <section id="layanan" className="mb-20 scroll-mt-24 sm:mb-28">
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">{t.servicesLabel}</p>
            <h2 className="mb-8 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{t.servicesTitle}</h2>

            {/* Build */}
            <div className="mb-10">
              <div className="mb-4 flex items-center gap-3">
                <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200">{t.build.label}</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {t.build.items.map(item => <ServiceCard key={item.title} item={item} locale={locale} />)}
              </div>
            </div>

            {/* Grow */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200">{t.grow.label}</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {t.grow.items.map(item => <ServiceCard key={item.title} item={item} locale={locale} />)}
              </div>
            </div>
          </section>

          {/* ── BLUEPRINTS ───────────────────────────────────────────── */}
          <section id="paket" className="mb-20 scroll-mt-24 sm:mb-28">
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">{t.blueprintsLabel}</p>
            <h2 className="mb-8 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{t.blueprintsTitle}</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {t.blueprints.map((bp, i) => <BlueprintCard key={bp.title} bp={bp} idx={i} />)}
            </div>
          </section>

          {/* ── WORK ─────────────────────────────────────────────────── */}
          <section id="karya" className="mb-20 scroll-mt-24 sm:mb-28">
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">{t.workLabel}</p>
            <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{t.workTitle}</h2>

            <div className="grid gap-5 lg:grid-cols-12">
              {/* Flagship */}
              {featuredCase && (
                <article className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950 p-6 text-white shadow-xl sm:p-8 lg:col-span-7">
                  <Link href={localizedPath(`/cases/${featuredCase.slug}`, locale)} className="absolute inset-0 z-10" aria-label={featuredCase.title} />
                  <div>
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      {featuredCase.metrics?.slice(0, 2).map(m => (
                        <div key={m.label} className="rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3">
                          <div className="font-mono text-2xl font-extrabold text-emerald-400">{m.prefix}{m.value}{m.suffix}</div>
                          <div className="font-mono text-[0.65rem] uppercase tracking-wider text-slate-400">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-blue-300 transition-colors">{featuredCase.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{featuredCase.shortDescription}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4 font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
                    <span>{t.caseCta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </article>
              )}

              {/* Other cases */}
              <div className="flex flex-col gap-5 lg:col-span-5">
                {otherCases.map(study => (
                  <article key={study.slug} className="group relative flex flex-1 flex-col justify-between rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm transition-all hover:border-blue-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/90">
                    <Link href={localizedPath(`/cases/${study.slug}`, locale)} className="absolute inset-0 z-10" aria-label={study.title} />
                    <div>
                      <div className="mb-3 flex gap-4">
                        {study.metrics?.slice(0, 2).map(m => (
                          <div key={m.label}>
                            <div className="font-mono text-xl font-extrabold text-blue-700 dark:text-blue-400">{m.prefix}{m.value}{m.suffix}</div>
                            <div className="font-mono text-[0.62rem] uppercase tracking-wider text-slate-500 dark:text-slate-400">{m.label}</div>
                          </div>
                        ))}
                      </div>
                      <h3 className="font-bold text-slate-950 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300 transition-colors">{study.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{study.shortDescription}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-slate-200/70 pt-3 font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:border-slate-800 dark:text-blue-400">
                      <span>{t.caseCta}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Engineering projects */}
            <div className="mt-8 rounded-3xl border border-slate-200/90 bg-white/90 p-6 dark:border-slate-800 dark:bg-slate-900/80 sm:p-8">
              <h3 className="mb-5 font-mono text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200">{t.devWorkLabel}</h3>
              <div className="grid gap-5 md:grid-cols-3">
                {devProjects.map(p => (
                  <div key={p.slug} className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/90 p-5 dark:border-slate-800 dark:bg-slate-950/70">
                    <div>
                      <span className="inline-block rounded-md border border-blue-200/80 bg-blue-50 px-2.5 py-0.5 font-mono text-[0.62rem] font-semibold uppercase tracking-wider text-blue-800 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-300">{p.role}</span>
                      <h4 className="mt-3 font-bold text-slate-950 dark:text-white">{p.title}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">{p.shortDescription}</p>
                    </div>
                    <ul className="mt-4 space-y-1.5 border-t border-slate-200/80 pt-3 dark:border-slate-800">
                      {p.highlights.map(h => (
                        <li key={h} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />{h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── PROCESS (3 steps) ────────────────────────────────────── */}
          <section className="mb-20 sm:mb-28">
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">{t.processLabel}</p>
            <h2 className="mb-8 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{t.processTitle}</h2>
            <ol className="grid gap-5 sm:grid-cols-3">
              {t.process.map(s => (
                <li key={s.num} className="bento-card glass-surface-primary p-6">
                  <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 font-mono text-xs font-bold text-white dark:bg-blue-500/20 dark:text-blue-300">{s.num}</span>
                  <h3 className="mb-2 font-bold text-slate-950 dark:text-white">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{s.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ── CTA BANNER ───────────────────────────────────────────── */}
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950 p-8 text-white shadow-2xl sm:p-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">{t.ctaTitle}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{t.ctaText}</p>
              </div>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:shrink-0">
                <ContactButton isHero locale={locale} />
                <a href={`mailto:${SITE_PROFILE.email}`} className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-5 py-3 font-mono text-xs font-semibold text-slate-200 hover:border-blue-400 hover:text-white transition-colors">
                  {SITE_PROFILE.email}
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-slate-300/80 pt-6 font-mono text-xs text-slate-700 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center">
            <p>Khusnudhoni &copy; {new Date().getFullYear()}</p>
            <p className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />Yogyakarta, Indonesia</p>
          </footer>
        </div>
      </main>
    </>
  );
}
