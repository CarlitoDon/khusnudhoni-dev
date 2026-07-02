import { Metadata } from "next";
import { SITE_PROFILE } from "@/data/site";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileSearch,
  LineChart,
  Link2,
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

export const metadata: Metadata = {
  title: "Khusnudhoni SEO Specialist | Technical SEO, Local SEO & Growth Search Systems",
  description:
    "SEO partner untuk bisnis lokal dan e-commerce: audit teknikal, GSC opportunity mining, content cluster, local SEO, internal linking, dan measurement system.",
  keywords: [
    "SEO specialist Indonesia",
    "technical SEO",
    "local SEO",
    "GSC audit",
    "content cluster",
    "SEO Jogja",
    "ecommerce SEO",
    "SEO consultant",
  ],
  alternates: {
    canonical: `${SITE_PROFILE.adsDomain}/seo`,
    languages: {
      id: `${SITE_PROFILE.adsDomain}/seo`,
      en: `${SITE_PROFILE.adsDomain}/en/seo`,
    },
  },
  openGraph: {
    title: "Khusnudhoni SEO Specialist",
    description:
      "Technical SEO, local SEO, content clusters, and measurable search-growth systems for businesses.",
    url: `${SITE_PROFILE.adsDomain}/seo`,
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khusnudhoni SEO Specialist",
    description:
      "Technical SEO, local SEO, content clusters, and measurable search-growth systems for businesses.",
  },
};

const outcomes = [
  {
    title: "Find low-hanging fruit first",
    desc: "Use GSC, GA4, SERP weakness, and customer questions to find pages and keywords that can move faster before building a huge content backlog.",
    icon: Radar,
  },
  {
    title: "Fix the search foundation",
    desc: "Clean up crawlability, canonicals, H1/title/meta, schema, sitemap, internal links, and Core Web Vitals before scaling content.",
    icon: Wrench,
  },
  {
    title: "Connect SEO to leads",
    desc: "Make SEO measurable with landing-page, CTA, WhatsApp, form, and commerce events so ranking work ties back to pipeline.",
    icon: LineChart,
  },
];

const services = [
  {
    title: "Technical SEO audit & implementation",
    summary:
      "Indexing, robots, sitemap, canonical, internal linking, performance, structured data, and template-level SEO fixes.",
    outputs: ["Audit report", "Prioritized fix list", "Implementation-ready tickets"],
  },
  {
    title: "GSC opportunity mining",
    summary:
      "Identify query clusters with impressions, clicks, average position, and low CTR patterns that can become quick wins.",
    outputs: ["Query cluster map", "Low-hanging fruit list", "Title/meta refresh plan"],
  },
  {
    title: "Content cluster strategy",
    summary:
      "Build topical authority with money pages, supporting guides, FAQs, local pages, and internal-link routes.",
    outputs: ["Content architecture", "Briefs", "Internal-link map"],
  },
  {
    title: "Local SEO & Google Business Profile",
    summary:
      "Improve local discovery with service-area clarity, NAP consistency, GBP content, review response, and local landing pages.",
    outputs: ["Local SEO checklist", "GBP posting plan", "Review response SOP"],
  },
  {
    title: "E-commerce and catalog SEO",
    summary:
      "Optimize category pages, product templates, schema, tag/index-bloat rules, and conversion routes for catalog-heavy sites.",
    outputs: ["Category map", "Schema checklist", "Index-control plan"],
  },
  {
    title: "SEO measurement system",
    summary:
      "Build weekly reporting from GSC, GA4, Search Console pages, conversion events, and business-facing action items.",
    outputs: ["Dashboard spec", "Weekly report", "KPI and event contract"],
  },
];

const process = [
  {
    title: "Baseline evidence",
    desc: "Pull DNS/HTTP, indexability, GSC/GA4, sitemap, page templates, and SERP samples before proposing action.",
  },
  {
    title: "Opportunity model",
    desc: "Separate quick wins, technical blockers, content clusters, local intent, and authority-building opportunities.",
  },
  {
    title: "Implementation sprint",
    desc: "Ship fixes and content in small batches with clear acceptance criteria and live verification.",
  },
  {
    title: "Measure and compound",
    desc: "Review movement weekly, update internal links, refresh pages, and double down only where search demand converts.",
  },
];

const clientFit = [
  "Local service businesses that need leads from search, maps, and WhatsApp.",
  "Catalog or e-commerce sites with many products, categories, tags, and template SEO risk.",
  "Founder-led businesses that need practical execution, not just a theoretical SEO audit.",
  "Teams that already have content but need pruning, refreshing, linking, and measurement.",
];

const faqs = [
  {
    q: "Do you only make SEO plans?",
    a: "No. I prefer implementation-backed SEO: audit, prioritize, ship fixes, verify live pages, then report movement.",
  },
  {
    q: "What makes your SEO approach different?",
    a: "I combine technical SEO, content strategy, local SEO, tracking infrastructure, and business operations context so SEO work connects to real leads.",
  },
  {
    q: "Can you work with WordPress, WooCommerce, and Next.js?",
    a: "Yes. I can audit and plan across CMS/catalog sites and modern frameworks, then translate findings into implementation-ready actions.",
  },
];

const seoNavSections = [
  { id: "outcomes", label: "/outcomes" },
  { id: "services", label: "/services" },
  { id: "process", label: "/process" },
  { id: "faq", label: "/faq" },
] as const;

const seoWhatsappText =
  "Halo Khusnudhoni, saya ingin audit SEO untuk domain saya. cta_source=seo_subdomain";
const seoWhatsappUrl = `${SITE_PROFILE.whatsappUrl}?text=${encodeURIComponent(seoWhatsappText)}`;

export default function SeoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        name: "Khusnudhoni SEO Specialist",
        url: `${SITE_PROFILE.adsDomain}/seo`,
        areaServed: "Indonesia",
        description:
          "Technical SEO, local SEO, content cluster, and measurable search-growth systems.",
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
        mainEntity: faqs.map((faq) => ({
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
        <SiteNavbar locale="id" sections={seoNavSections} />

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-28 sm:px-10 sm:pt-32 lg:px-14">
          <header className="mb-20 flex flex-col items-start gap-6 animate-enter sm:mb-24">
            <div className="magic-badge inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.72rem] uppercase tracking-wider text-blue-700 dark:text-cyan-300">
              <Search className="mr-2 h-3.5 w-3.5" />
              SEO Systems / Search Growth / Local Discovery
            </div>

            <h1 className="max-w-5xl text-3xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              SEO bukan sekadar artikel. SEO adalah sistem untuk menemukan,
              memperbaiki, dan memenangkan
              <span className="font-extrabold italic text-blue-700 dark:text-cyan-300">
                {" "}search demand yang bisa jadi lead.
              </span>
            </h1>

            <p className="max-w-3xl text-base font-medium leading-relaxed text-slate-800 dark:text-slate-200 sm:text-xl">
              I help businesses turn search data into a practical growth engine:
              technical SEO, low-hanging fruit from GSC, content clusters, local
              SEO, internal links, schema, and conversion measurement.
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
                Discuss SEO via WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </GlassButton>
              <GlassButton className="justify-center" href="#process">
                <FileSearch className="mr-2 h-4 w-4" />
                See SEO process
              </GlassButton>
            </div>
          </header>

          <section id="outcomes" className="mb-20 scroll-mt-28 animate-enter delay-100 sm:mb-24">
            <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-slate-900 dark:text-slate-100">
              [ 00_SEO_Outcomes ]
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {outcomes.map((item) => (
                <GlassPanel key={item.title} className="p-7 sm:p-8">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 dark:bg-cyan-950/40">
                    <item.icon className="h-5 w-5 text-blue-600 dark:text-cyan-300" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                    {item.desc}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </section>

          <section id="services" className="mb-20 scroll-mt-28 sm:mb-24">
            <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-slate-900 dark:text-slate-100">
              [ 01_SEO_Services ]
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
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
              [ 02_Process ]
            </h2>
            <InteractiveStackGlow>
              <GlassPanel className="p-6 sm:p-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                  {process.map((step, index) => (
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
                  Best fit clients
                </h2>
              </div>
              <ul className="space-y-3">
                {clientFit.map((fit) => (
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
                  Reporting rhythm
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                Weekly reports should answer: what moved, what shipped, what is blocked,
                and what should be done next.
              </p>
              <div className="rounded-2xl border border-blue-200/60 bg-blue-50/70 p-4 text-xs leading-relaxed text-slate-900 dark:border-cyan-500/20 dark:bg-cyan-950/20 dark:text-slate-100">
                GSC + GA4 + GBP + site crawl + conversion events = SEO decisions with evidence.
              </div>
            </GlassPanel>
          </section>

          <section id="faq" className="mb-20 scroll-mt-28 sm:mb-24">
            <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-slate-900 dark:text-slate-100">
              [ 03_FAQ ]
            </h2>
            <div className="grid grid-cols-1 gap-5">
              {faqs.map((faq) => (
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
              Search growth starts with evidence
            </div>
            <h2 className="mb-4 max-w-3xl text-2xl font-extrabold tracking-tight sm:text-4xl">
              Want to know which SEO work should be done first?
            </h2>
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
              Send your domain and current goal. I will start from live evidence,
              search intent, technical foundation, and the fastest path to qualified leads.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <GlassButton
                className="justify-center bg-white/95 text-blue-700 hover:bg-white"
                href={seoWhatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Start SEO audit
              </GlassButton>
              <GlassButton
                className="justify-center border-white/50 text-white hover:bg-white/10"
                href={SITE_PROFILE.linkedInUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Link2 className="mr-2 h-4 w-4" />
                LinkedIn profile
              </GlassButton>
            </div>
          </section>

          <footer className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-gray-300 pt-8 font-mono text-xs text-slate-900 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center">
            <p>Khusnudhoni SEO &copy; {new Date().getFullYear()}</p>
            <p className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              Search Systems Online
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
