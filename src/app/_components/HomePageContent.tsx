import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  TrendingUp,
  Linkedin,
  CheckCircle2,
  Sparkles,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundLayer } from "@/components/BackgroundLayer";
import { ContactButton } from "@/components/ContactButton";
import { GlassButton } from "@/components/GlassButton";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SITE_PROFILE } from "@/data/site";
import { STACK, homeCopy, type Service } from "@/data/home";
import { getDevPortfolio } from "@/data/dev-portfolio";
import { getCaseStudies } from "@/i18n/content";
import { localizedPath, type Locale } from "@/i18n/routing";

function DarkServiceCard({ item, locale }: { item: Service; locale: Locale }) {
  const Icon = item.icon;
  const inner = (
    <>
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/15 text-blue-400">
            <Icon className="h-5 w-5" />
          </div>
          <span className=" inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-800/90 px-2.5 py-1 font-mono text-[0.65rem] font-semibold tracking-wider text-slate-300">
            {item.code}
            {item.href && <ArrowUpRight className="h-3.5 w-3.5 text-blue-400" />}
          </span>
        </div>
        <h4 className="mb-2 text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
          {item.title}
        </h4>
        <p className="text-sm leading-relaxed text-slate-300">{item.text}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-800 pt-4">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-800/90 px-2.5 py-1 font-mono text-[0.65rem] font-medium text-blue-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const cls =
    "group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/90 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/60 hover:bg-slate-900";

  return item.href ? (
    <Link href={localizedPath(item.href, locale)} className={cls}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

function LightServiceCard({ item, locale }: { item: Service; locale: Locale }) {
  const Icon = item.icon;
  const inner = (
    <>
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-200 bg-blue-600 text-white shadow-sm dark:border-blue-500/30 dark:bg-blue-500/20 dark:text-blue-300">
            <Icon className="h-5 w-5" />
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-blue-200/80 bg-blue-50 px-2.5 py-1 font-mono text-[0.65rem] font-semibold tracking-wider text-blue-800 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-300">
            {item.code}
            {item.href && <ArrowUpRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />}
          </span>
        </div>
        <h4 className="mb-2 text-lg font-bold text-slate-950 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300 transition-colors">
          {item.title}
        </h4>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {item.text}
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-200/80 pt-4 dark:border-slate-800">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-blue-100 bg-blue-50/70 px-2.5 py-1 font-mono text-[0.65rem] font-semibold text-blue-900 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const cls =
    "group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80";

  return item.href ? (
    <Link href={localizedPath(item.href, locale)} className={cls}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative z-0 min-h-full">
        <BackgroundLayer />
        <SiteNavbar
          basePath={localizedPath("/", locale)}
          locale={locale}
          sections={t.nav}
        />

        <div className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-8 sm:pt-14 lg:px-10">
          {/* HERO SECTION: Asymmetric 7/5 Architectural Split */}
          <header className="animate-enter mb-24 sm:mb-32">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
              {/* Left Column: Value Proposition + 12-Skill Matrix */}
              <div className="flex flex-col justify-between lg:col-span-7">
                <div className="flex flex-col items-start gap-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[0.68rem] font-semibold text-emerald-800 dark:text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      {t.availability}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/90 px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-blue-800 dark:border-blue-800 dark:bg-blue-950/70 dark:text-blue-300">
                      <Code2 className="h-3.5 w-3.5" />
                      {t.badge}
                    </span>
                  </div>

                  <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[3.3rem]">
                    {t.headingLead}
                    <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-300 dark:to-emerald-300">
                      {t.headingEmphasis}
                    </span>
                    <span className="block mt-1 text-2xl sm:text-4xl lg:text-[2.5rem] font-bold text-slate-700 dark:text-slate-200">
                      {t.headingTail}
                    </span>
                  </h1>

                  <p className="max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
                    {t.summary}
                  </p>

                  <div className="mt-1 flex w-full flex-col flex-wrap items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
                    <ContactButton isHero locale={locale} />
                    <GlassButton className="justify-center" href="#layanan">
                      {t.ctaServices}
                    </GlassButton>
                    <GlassButton
                      className="justify-center"
                      href={SITE_PROFILE.linkedInUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </GlassButton>
                  </div>
                </div>

                {/* Scannable 12-Skill Matrix Console */}
                <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90">
                  <div className="mb-3 flex items-center justify-between border-b border-slate-200/80 pb-2.5 dark:border-slate-800">
                    <span className="font-mono text-[0.7rem] font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200">
                      {t.matrixTitle}
                    </span>
                    <span className="font-mono text-[0.65rem] text-blue-700 dark:text-blue-400">
                      BUILD × GROW
                    </span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200/70 bg-slate-50/80 p-3.5 dark:border-slate-800 dark:bg-slate-950/60">
                      <div className="mb-2 flex items-center gap-1.5 font-mono text-[0.68rem] font-bold text-slate-900 dark:text-blue-300">
                        <Terminal className="h-3.5 w-3.5 text-blue-600" />
                        {t.matrixBuildLabel}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {t.matrixBuildItems.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-blue-200/60 bg-blue-50/50 p-3.5 dark:border-slate-800 dark:bg-slate-950/60">
                      <div className="mb-2 flex items-center gap-1.5 font-mono text-[0.68rem] font-bold text-blue-900 dark:text-emerald-300">
                        <TrendingUp className="h-3.5 w-3.5 text-blue-600 dark:text-emerald-400" />
                        {t.matrixGrowLabel}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {t.matrixGrowItems.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-blue-200/70 bg-white px-2 py-0.5 text-xs font-medium text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Contrast Executive Dossier Card */}
              <div className="lg:col-span-5">
                <div className="flex h-full flex-col justify-between rounded-[2rem] border border-slate-800 bg-slate-950 p-5 text-white shadow-2xl sm:p-6">
                  <div className="mb-3 flex items-center justify-between font-mono text-[0.68rem] tracking-widest text-slate-400">
                    <span className="flex items-center gap-2 font-semibold text-slate-200">
                      <span className="h-2 w-2 rounded-full bg-blue-400" />
                      OPERATOR DOSSIER
                    </span>
                    <span>KHUSNUDHONI.ONLINE</span>
                  </div>

                  {/* Framed Portrait with Studio Vignette Overlay */}
                  <div className="relative mx-auto w-full overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-100 via-white to-slate-200">
                    <Image
                      src="/khusnudhoni-formal.jpg"
                      alt="Khusnudhoni — Software Developer & Digital Marketer"
                      width={900}
                      height={900}
                      priority
                      sizes="(min-width: 1024px) 440px, 92vw"
                      className="aspect-[4/3.8] w-full object-cover object-top dark:brightness-90 dark:contrast-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent px-5 pb-4 pt-14">
                      <div className="flex items-end justify-between gap-2">
                        <div>
                          <p className="text-xl font-bold tracking-tight text-white">
                            {SITE_PROFILE.name}
                          </p>
                          <p className="font-mono text-xs font-medium text-blue-300">
                            {t.profileRole}
                          </p>
                          <p className="mt-0.5 text-[0.7rem] text-slate-300">
                            {t.profileSub}
                          </p>
                        </div>
                        <span className="rounded-full border border-emerald-400/40 bg-emerald-500/20 px-2.5 py-1 font-mono text-[0.62rem] font-semibold text-emerald-300">
                          VERIFIED
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Integrated 2x2 Key Proof Grid inside Dossier */}
                  <dl className="mt-4 grid grid-cols-2 gap-2.5">
                    {t.stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl border border-slate-800/90 bg-slate-900/90 p-3.5"
                      >
                        <dt className="font-mono text-lg font-extrabold text-blue-400 sm:text-xl">
                          {s.value}
                        </dt>
                        <dd className="mt-0.5 text-[0.72rem] leading-snug text-slate-300">
                          {s.label}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </header>

          {/* SECTION 01: DUAL-ENGINE 12 CAPABILITIES */}
          <section id="layanan" className="mb-24 scroll-mt-28 sm:mb-32">
            <div className="mb-10 max-w-3xl">
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                {t.servicesEyebrow}
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                {t.servicesTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {t.servicesSubtitle}
              </p>
            </div>

            {/* ENGINE 01: Dark Software Engineering Panel */}
            <div className="mb-10 rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-xl sm:p-10">
              <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-800 pb-6 lg:flex-row lg:items-end">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/15 px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-blue-300">
                    <Code2 className="h-3.5 w-3.5" />
                    {t.build.tag}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    {t.build.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
                    {t.build.subtitle}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <Link
                    href={localizedPath("/dev", locale)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 font-mono text-xs font-semibold text-blue-300 hover:border-blue-400 hover:text-white transition-colors"
                  >
                    {t.build.exploreDev} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href={localizedPath("/fullstack", locale)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 font-mono text-xs font-semibold text-blue-300 hover:border-blue-400 hover:text-white transition-colors"
                  >
                    {t.build.exploreFullstack} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {t.build.items.map((item) => (
                  <DarkServiceCard key={item.code} item={item} locale={locale} />
                ))}
              </div>
            </div>

            {/* ENGINE 02: High-Contrast Digital Marketing & Ads Panel */}
            <div className="rounded-[2rem] border border-blue-200/90 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/40 p-6 shadow-md dark:border-emerald-500/20 dark:from-emerald-950/40 dark:via-slate-900 dark:to-slate-950 sm:p-10">
              <div className="mb-8 flex flex-col justify-between gap-4 border-b border-blue-200/70 pb-6 dark:border-slate-800 lg:flex-row lg:items-end">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-600 px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-white">
                    <TrendingUp className="h-3.5 w-3.5" />
                    {t.grow.tag}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
                    {t.grow.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                    {t.grow.subtitle}
                  </p>
                </div>
                <div>
                  <Link
                    href={localizedPath("/seo", locale)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-blue-300 bg-white px-4 py-2 font-mono text-xs font-semibold text-blue-800 shadow-sm hover:border-blue-600 hover:text-blue-950 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-300 transition-colors"
                  >
                    {t.grow.exploreSeo} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {t.grow.items.map((item) => (
                  <LightServiceCard key={item.code} item={item} locale={locale} />
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 02: 4 INTEGRATED SOLUTION BLUEPRINTS */}
          <section id="paket" className="mb-24 scroll-mt-28 sm:mb-32">
            <div className="mb-10 max-w-3xl">
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                {t.pathsEyebrow}
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                {t.pathsTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {t.pathsSubtitle}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {t.paths.map((p, idx) => (
                <div
                  key={p.code}
                  className={`flex flex-col justify-between rounded-3xl border p-6 sm:p-8 transition-all ${
                    idx === 0
                      ? "border-blue-300 bg-gradient-to-br from-blue-50/90 via-white to-white shadow-md dark:border-blue-500/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950"
                      : "border-slate-200/90 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
                  }`}
                >
                  <div>
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-slate-900 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-white dark:bg-blue-500/20 dark:text-blue-300">
                        {p.badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-400">
                        {p.code}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-950 dark:text-white sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs font-medium text-blue-700 dark:text-blue-300">
                      {p.audience}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {p.text}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-2.5 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                    {p.includes.map((inc) => (
                      <li
                        key={inc}
                        className="flex items-start gap-2.5 text-sm font-medium text-slate-800 dark:text-slate-200"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 03: VERIFIED CASE STUDIES & SHIPPED ENGINEERING */}
          <section id="karya" className="mb-24 scroll-mt-28 sm:mb-32">
            <div className="mb-10 max-w-3xl">
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                {t.workEyebrow}
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                {t.workTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {t.workSubtitle}
              </p>
            </div>

            {/* Asymmetric Marketing Case Studies Grid */}
            <div className="grid gap-6 lg:grid-cols-12">
              {featuredCase && (
                <article className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950 p-6 text-white shadow-xl sm:p-8 lg:col-span-7">
                  <Link
                    href={localizedPath(`/cases/${featuredCase.slug}`, locale)}
                    className="absolute inset-0 z-10"
                    aria-label={featuredCase.title}
                  />
                  <div>
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-emerald-300">
                        FLAGSHIP CASE STUDY · PAID ACQUISITION & FUNNEL
                      </span>
                      <span className="font-mono text-xs text-slate-400">/case_01</span>
                    </div>

                    <div className="mb-6 grid grid-cols-2 gap-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 sm:p-5">
                      {featuredCase.metrics?.map((m) => (
                        <div key={m.label}>
                          <div className="font-mono text-2xl font-extrabold text-emerald-400 sm:text-3xl">
                            {m.prefix}
                            {m.value}
                            {m.suffix}
                          </div>
                          <div className="mt-1 font-mono text-[0.68rem] uppercase tracking-wider text-slate-300">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-2xl font-extrabold text-white group-hover:text-blue-300 transition-colors sm:text-3xl">
                      {featuredCase.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                      {featuredCase.shortDescription}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-slate-800 pt-4">
                      {featuredCase.results.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2 text-xs text-slate-200 sm:text-sm"
                        >
                          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4 font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
                    <span>{t.caseCta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </article>
              )}

              <div className="flex flex-col gap-6 lg:col-span-5">
                {otherCases.map((study, idx) => (
                  <article
                    key={study.slug}
                    className="group relative flex flex-1 flex-col justify-between rounded-3xl border border-slate-200/90 bg-white/95 p-6 shadow-sm transition-all hover:border-blue-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/90"
                  >
                    <Link
                      href={localizedPath(`/cases/${study.slug}`, locale)}
                      className="absolute inset-0 z-10"
                      aria-label={study.title}
                    />
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex gap-5">
                          {study.metrics?.slice(0, 2).map((m) => (
                            <div key={m.label}>
                              <div className="font-mono text-xl font-extrabold text-blue-700 dark:text-blue-400">
                                {m.prefix}
                                {m.value}
                                {m.suffix}
                              </div>
                              <div className="font-mono text-[0.62rem] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                        <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                          /case_0{idx + 2}
                        </span>
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-950 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300 transition-colors">
                        {study.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {study.shortDescription}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-slate-200/70 pt-3 font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:border-slate-800 dark:text-blue-400">
                      <span>{t.caseCta}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Shipped Software & Engineering Projects */}
            <div className="mt-10 rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:p-8">
              <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <span className="font-mono text-[0.68rem] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                    {t.devWorkTag}
                  </span>
                  <h3 className="mt-1 text-xl font-extrabold text-slate-950 dark:text-white sm:text-2xl">
                    {t.devWorkTitle}
                  </h3>
                </div>
                <Link
                  href={localizedPath("/dev", locale)}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-blue-700 hover:underline dark:text-blue-400"
                >
                  {t.build.exploreDev} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {devProjects.map((p) => (
                  <div
                    key={p.slug}
                    className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/90 p-5 dark:border-slate-800 dark:bg-slate-950/70"
                  >
                    <div>
                      <span className="inline-block rounded-md border border-blue-200/80 bg-blue-50 px-2.5 py-0.5 font-mono text-[0.62rem] font-semibold uppercase tracking-wider text-blue-800 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-300">
                        {p.role}
                      </span>
                      <h4 className="mt-3 text-base font-bold text-slate-950 dark:text-white">
                        {p.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                        {p.shortDescription}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-1.5 border-t border-slate-200/80 pt-3 dark:border-slate-800">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 04: PROCESS */}
          <section id="cara-kerja" className="mb-24 scroll-mt-28 sm:mb-32">
            <div className="mb-10 max-w-3xl">
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                {t.processEyebrow}
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                {t.processTitle}
              </h2>
            </div>

            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {t.process.map((s) => (
                <li
                  key={s.step}
                  className="relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/90"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 font-mono text-xs font-bold text-white dark:bg-blue-500/20 dark:text-blue-300">
                        {s.step}
                      </span>
                      <span className="font-mono text-[0.65rem] font-bold tracking-widest text-blue-700 dark:text-blue-400">
                        {s.phase}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-slate-950 dark:text-white">
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {s.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* SECTION 05: STACK & TOOLKIT */}
          <section className="mb-24 sm:mb-32">
            <div className="mb-8 max-w-3xl">
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                {t.stackEyebrow}
              </p>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                {t.stackTitle}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-white sm:p-8">
                <span className="mb-4 block border-b border-slate-800 pb-3 font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
                  01 // Software Engineering & Infrastructure
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {STACK.build.map((x) => (
                    <span
                      key={x}
                      className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 font-mono text-xs font-medium text-slate-200"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-blue-200/90 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/90 sm:p-8">
                <span className="mb-4 block border-b border-slate-200 pb-3 font-mono text-xs font-bold uppercase tracking-wider text-blue-700 dark:border-slate-800 dark:text-blue-400">
                  02 // Digital Marketing, Ads & Analytics
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {STACK.grow.map((x) => (
                    <span
                      key={x}
                      className="rounded-lg border border-blue-200/70 bg-blue-50/70 px-3 py-1.5 font-mono text-xs font-semibold text-blue-950 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-200"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CLOSING CTA BANNER */}
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950 p-8 text-white shadow-2xl sm:p-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400">
                  {t.ctaEyebrow}
                </span>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {t.ctaTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {t.ctaText}
                </p>
              </div>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:shrink-0">
                <ContactButton isHero locale={locale} />
                <a
                  href={`mailto:${SITE_PROFILE.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-5 py-3 font-mono text-xs font-semibold text-slate-200 hover:border-blue-400 hover:text-white transition-colors"
                >
                  {SITE_PROFILE.email}
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-slate-300/80 pt-6 font-mono text-xs text-slate-700 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center">
            <p>Khusnudhoni &copy; {new Date().getFullYear()} · Full-Stack Engineer & Digital Marketer</p>
            <p className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Yogyakarta, Indonesia
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
