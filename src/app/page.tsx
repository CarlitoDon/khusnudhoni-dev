import { Mail, Linkedin, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/data/cases";
import { BackgroundLayer } from "@/components/BackgroundLayer";
import { GlassButton } from "@/components/GlassButton";
import { GlassPanel } from "@/components/GlassPanel";
import { InteractiveStackGlow } from "@/components/InteractiveStackGlow";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SITE_PROFILE } from "@/data/site";
import { growthStack } from "@/data/growth-stack";
import { services } from "@/data/services";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_PROFILE.name,
    url: SITE_PROFILE.domain,
    jobTitle: "Growth & Technical Marketing",
    knowsAbout: growthStack,
    worksFor: {
      "@type": "Organization",
      name: "Santi Living",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative min-h-screen z-0">
        <BackgroundLayer />
        <SiteNavbar />

        <div className="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-10 sm:pt-32 lg:px-14">
          {/* Header Section */}
          <header className="mb-16 sm:mb-24 flex flex-col items-start gap-5 sm:gap-6 animate-enter">
            <div className="magic-badge inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.62rem] sm:text-[0.75rem] uppercase tracking-wider text-blue-700">
              <TrendingUp className="mr-2 h-3.5 w-3.5 text-blue-600" />
              Growth Builder / Ads / Tracking Systems
            </div>

            <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-black">
              Growth bukan soal iklan yang bagus. Growth adalah sistem yang{" "}
              <span className="title-gradient font-extrabold italic pr-2">
                menghasilkan revenue konsisten.
              </span>
            </h1>

            <p className="max-w-2xl text-base text-black leading-relaxed sm:text-xl">
              Saya menggabungkan performance marketing, tracking infrastructure,
              dan system thinking untuk membantu bisnis mengambil keputusan
              berbasis data, bukan vanity metrics.
            </p>

            <div className="mt-3 flex w-full flex-col sm:w-auto sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <GlassButton
                className="group justify-center"
                href={`mailto:${SITE_PROFILE.email}`}
                variant="primary"
              >
                <Mail className="mr-2 h-4 w-4" />
                Let&apos;s Collaborate
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </GlassButton>
              <GlassButton
                className="justify-center"
                href={SITE_PROFILE.linkedInUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn Profile
              </GlassButton>
            </div>
          </header>

          {/* Profil / About Section */}
          <section id="about" className="mb-16 sm:mb-24 scroll-mt-24 animate-enter delay-100">
            <h2 className="mb-4 text-sm font-mono tracking-widest text-black uppercase">
              [ 00_Who_Am_I ]
            </h2>
            <GlassPanel className="p-6 sm:p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Khusnudhoni
                  </h3>
                  <div className="space-y-4 text-black leading-relaxed text-sm md:text-base">
                    <p>
                      Saya adalah <strong>builder-operator</strong> di area
                      growth. Saya tidak hanya menjalankan ads, tetapi membangun
                      sistem di belakangnya agar acquisition, tracking,
                      conversion, dan retention berjalan sebagai satu ekosistem.
                    </p>
                    <p>
                      Pendekatan saya selalu data-first: campaign berbasis
                      hipotesis, tracking yang dapat diaudit, dan dashboard yang
                      bisa dipakai tim untuk keputusan harian. Goal akhirnya
                      sederhana: revenue yang nyata dan bisa diulang.
                    </p>
                  </div>
                </div>

                <div className="hidden lg:block w-[1px] bg-gray-200 self-stretch" />

                <div className="w-full lg:w-64 flex flex-col gap-4 sm:gap-5 text-sm">
                  <div>
                    <span className="font-mono text-blue-700 font-bold block mb-1 text-xs uppercase tracking-wider">
                      Current Role
                    </span>
                    <span className="text-black">
                      Growth Builder and Operator
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-blue-700 font-bold block mb-1 text-xs uppercase tracking-wider">
                      Core Competencies
                    </span>
                    <span className="text-black">
                      Performance Marketing, Funnel Systems, Tracking Infrastructure
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-blue-700 font-bold block mb-1 text-xs uppercase tracking-wider">
                      Location
                    </span>
                    <span className="text-black">Indonesia</span>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </section>

          <section id="services" className="mb-16 sm:mb-24 scroll-mt-24">
            <h2 className="mb-4 text-sm font-mono tracking-widest text-black uppercase animate-enter delay-150">
              [ 00.5_Services ]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 animate-enter delay-200">
              {services.map((service) => (
                <GlassPanel key={service.title} className="p-5 sm:p-7 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-black text-sm md:text-base leading-relaxed mb-5">
                    {service.summary}
                  </p>
                  <ul className="data-list text-sm md:text-base space-y-2">
                    {service.outputs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </GlassPanel>
              ))}
            </div>
          </section>

          {/* Case Studies Bento Grid */}
          <section id="cases" className="mb-16 sm:mb-24 scroll-mt-24">
            <h2 className="mb-4 text-sm font-mono tracking-widest text-black uppercase animate-enter delay-200">
              [ 01_Case_Studies ]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 md:gap-10 relative z-10 animate-enter delay-300">
              {caseStudies.map((study, index) => (
                <article
                  className={`bento-card glass-surface-primary p-5 sm:p-8 md:p-10 flex flex-col gap-5 sm:gap-6 group hover:border-blue-400/50 cursor-pointer ${index === 0 ? "md:col-span-2" : ""}`}
                  key={study.title}
                >
                  <Link
                    href={`/cases/${study.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`Read ${study.title}`}
                  />
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-blue-700 font-bold text-xs">
                      /case_{index + 1}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-black group-hover:text-blue-700 transition-colors">
                      {study.title}
                    </h3>
                  </div>

                  <p className="text-black text-sm md:text-base leading-relaxed flex-1">
                    {study.shortDescription}
                  </p>

                  <div className="pt-6 border-t border-gray-200 flex items-center justify-between text-sm font-mono text-blue-600">
                    <span className="uppercase tracking-widest text-[0.65rem]">
                      Read full log
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Infrastructure Toolkit */}
          <section id="stack" className="animate-enter delay-300 scroll-mt-24">
            <h2 className="mb-6 text-sm font-mono tracking-widest text-black uppercase">
              [ 02_Growth_Stack ]
            </h2>
            <InteractiveStackGlow>
              <GlassPanel className="magic-stack-card p-5 sm:p-8">
                <div className="flex flex-wrap gap-3">
                  {growthStack.map((tool) => (
                    <span className="tech-chip" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            </InteractiveStackGlow>
          </section>

          <footer className="mt-16 sm:mt-24 border-t border-gray-300 pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 justify-between text-xs text-black font-mono animate-enter delay-400">
            <p>Khusnudhoni &copy; {new Date().getFullYear()}</p>
            <p className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Systems Online
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
