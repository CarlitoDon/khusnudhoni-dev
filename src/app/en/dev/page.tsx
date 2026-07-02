import type { Metadata } from "next";
import { ArrowRight, Code2, Linkedin, MessageCircle, Server } from "lucide-react";
import { BackgroundLayer } from "@/components/BackgroundLayer";
import { GlassButton } from "@/components/GlassButton";
import { GlassPanel } from "@/components/GlassPanel";
import { InteractiveStackGlow } from "@/components/InteractiveStackGlow";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SITE_PROFILE } from "@/data/site";
import { devStack, getDevPortfolio } from "@/data/dev-portfolio";

export const metadata: Metadata = {
  title: "Khusnudhoni Backend & Fullstack Developer",
  description:
    "Backend and fullstack developer portfolio covering API architecture, data modeling, TypeScript systems, and production-ready web delivery.",
  alternates: {
    canonical: `${SITE_PROFILE.adsDomain}/en/dev`,
    languages: {
      id: `${SITE_PROFILE.adsDomain}/dev`,
      en: `${SITE_PROFILE.adsDomain}/en/dev`,
    },
  },
};

export default function EnglishDevHomePage() {
  const { intro, projects } = getDevPortfolio("en");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_PROFILE.name,
    url: `${SITE_PROFILE.adsDomain}/en/dev`,
    jobTitle: "Backend & Fullstack Web Developer",
    knowsAbout: devStack,
  };
  const [headingBefore, headingAfter = ""] = intro.heading.split("robust");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main lang="en" className="relative min-h-screen z-0">
        <BackgroundLayer />
        <SiteNavbar basePath="/en/dev" locale="en" />

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-10 lg:px-14">
          <header className="mb-24 flex flex-col items-start gap-6 animate-enter">
            <div className="magic-badge inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.75rem] uppercase tracking-wider text-blue-700 dark:text-blue-200">
              <Server className="mr-2 h-3.5 w-3.5 text-blue-600 dark:text-blue-300" />
              {intro.roleLabel}
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {headingBefore}
              <span className="title-gradient font-extrabold italic pr-2">
                robust
              </span>
              {headingAfter}
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
              {intro.summary}
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
                Discuss via WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </GlassButton>
              <GlassButton
                href={SITE_PROFILE.linkedInUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn Profile
              </GlassButton>
            </div>

            <div className="w-full rounded-2xl border border-white/70 bg-white/60 px-4 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/50 sm:w-auto">
              <p className="font-mono text-[0.62rem] uppercase tracking-wider text-blue-700 dark:text-blue-200 sm:text-[0.7rem]">
                Prefer email for technical scope?
              </p>
              <a
                href={`mailto:${SITE_PROFILE.email}`}
                className="mt-1 inline-block font-mono text-xs text-foreground underline decoration-blue-500/60 underline-offset-4 transition-colors hover:text-blue-700 dark:hover:text-blue-200 sm:text-sm"
              >
                {SITE_PROFILE.email}
              </a>
            </div>
          </header>

          <section
            id="about"
            className="mb-24 scroll-mt-24 animate-enter delay-100"
          >
            <h2 className="mb-4 font-mono text-sm uppercase tracking-widest text-foreground">
              [ 00_Who_Am_I ]
            </h2>
            <GlassPanel className="p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
                <div className="flex-1 space-y-4 text-sm leading-relaxed text-foreground/85 md:text-base">
                  <h3 className="text-2xl font-bold text-foreground">
                    {SITE_PROFILE.name}
                  </h3>
                  {intro.about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="hidden lg:block w-px bg-gray-200 self-stretch" />

                <div className="w-full lg:w-64 flex flex-col gap-5 text-sm">
                  <div>
                    <span className="font-mono text-blue-700 font-bold block mb-1 text-xs uppercase tracking-wider">
                      Primary Focus
                    </span>
                    <span className="text-foreground/85">
                      Backend Systems & API Architecture
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-blue-700 font-bold block mb-1 text-xs uppercase tracking-wider">
                      Delivery Style
                    </span>
                    <span className="text-foreground/85">
                      Type-safe, testable, and production-first
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-blue-700 font-bold block mb-1 text-xs uppercase tracking-wider">
                      Location
                    </span>
                    <span className="text-foreground/85">Indonesia</span>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </section>

          <section id="cases" className="mb-24 scroll-mt-24">
            <h2 className="mb-4 animate-enter font-mono text-sm uppercase tracking-widest text-foreground delay-200">
              [ 01_Selected_Projects ]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 relative z-10 animate-enter delay-300">
              {projects.map((project, index) => (
                <article
                  className={`bento-card glass-surface-primary p-8 md:p-10 flex flex-col gap-6 group hover:border-blue-400/50 ${index === 0 ? "md:col-span-2" : ""}`}
                  key={project.slug}
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-blue-700 font-bold text-xs">
                      /project_{index + 1}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-blue-700 dark:group-hover:text-blue-300 sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
                    {project.shortDescription}
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
                    <span className="font-semibold text-foreground">Role:</span>{" "}
                    {project.role}
                  </p>

                  <ul className="data-list text-sm md:text-base space-y-2">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="stack" className="animate-enter delay-300 scroll-mt-24">
            <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-foreground">
              [ 02_Engineering_Stack ]
            </h2>
            <InteractiveStackGlow>
              <GlassPanel className="magic-stack-card p-8">
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

          <footer className="mt-24 flex animate-enter items-center justify-between border-t border-slate-300/70 pt-8 font-mono text-xs text-foreground/80 delay-400 dark:border-white/10">
            <p>
              {SITE_PROFILE.name} &copy; {new Date().getFullYear()}
            </p>
            <p className="flex items-center gap-2">
              <Code2 className="h-3.5 w-3.5" />
              Engineering Systems Online
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
