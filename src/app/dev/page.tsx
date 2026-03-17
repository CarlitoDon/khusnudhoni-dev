import { ArrowRight, Code2, Linkedin, MessageCircle, Server } from "lucide-react";
import { BackgroundLayer } from "@/components/BackgroundLayer";
import { GlassButton } from "@/components/GlassButton";
import { GlassPanel } from "@/components/GlassPanel";
import { InteractiveStackGlow } from "@/components/InteractiveStackGlow";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SITE_PROFILE } from "@/data/site";
import { devIntro, devProjects, devStack } from "@/data/dev-portfolio";

export default function DevHomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_PROFILE.name,
    url: SITE_PROFILE.devDomain,
    jobTitle: "Backend & Fullstack Web Developer",
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
        <SiteNavbar basePath="/dev" />

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-10 lg:px-14">
          <header className="mb-24 flex flex-col items-start gap-6 animate-enter">
            <div className="magic-badge inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.75rem] uppercase tracking-wider text-blue-700">
              <Server className="mr-2 h-3.5 w-3.5 text-blue-600" />
              {devIntro.roleLabel}
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-black">
              {devIntro.heading.split("robust")[0]}
              <span className="title-gradient font-extrabold italic pr-2">
                robust
              </span>
              {devIntro.heading.split("robust")[1]}
            </h1>

            <p className="max-w-2xl text-lg text-black leading-relaxed sm:text-xl">
              {devIntro.summary}
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

            <div className="w-full sm:w-auto rounded-2xl border border-white/70 bg-white/60 px-4 py-3 backdrop-blur-sm">
              <p className="font-mono text-[0.62rem] sm:text-[0.7rem] uppercase tracking-wider text-blue-700">
                Prefer email for technical scope?
              </p>
              <a
                href={`mailto:${SITE_PROFILE.email}`}
                className="mt-1 inline-block font-mono text-xs sm:text-sm text-black underline decoration-blue-500/60 underline-offset-4 hover:text-blue-700 transition-colors"
              >
                {SITE_PROFILE.email}
              </a>
            </div>
          </header>

          <section
            id="about"
            className="mb-24 scroll-mt-24 animate-enter delay-100"
          >
            <h2 className="mb-4 text-sm font-mono tracking-widest text-black uppercase">
              [ 00_Who_Am_I ]
            </h2>
            <GlassPanel className="p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
                <div className="flex-1 space-y-4 text-black leading-relaxed text-sm md:text-base">
                  <h3 className="text-2xl font-bold text-black">
                    {SITE_PROFILE.name}
                  </h3>
                  {devIntro.about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="hidden lg:block w-px bg-gray-200 self-stretch" />

                <div className="w-full lg:w-64 flex flex-col gap-5 text-sm">
                  <div>
                    <span className="font-mono text-blue-700 font-bold block mb-1 text-xs uppercase tracking-wider">
                      Primary Focus
                    </span>
                    <span className="text-black">
                      Backend Systems & API Architecture
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-blue-700 font-bold block mb-1 text-xs uppercase tracking-wider">
                      Delivery Style
                    </span>
                    <span className="text-black">
                      Type-safe, testable, and production-first
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

          <section id="cases" className="mb-24 scroll-mt-24">
            <h2 className="mb-4 text-sm font-mono tracking-widest text-black uppercase animate-enter delay-200">
              [ 01_Selected_Projects ]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 relative z-10 animate-enter delay-300">
              {devProjects.map((project, index) => (
                <article
                  className={`bento-card glass-surface-primary p-8 md:p-10 flex flex-col gap-6 group hover:border-blue-400/50 ${index === 0 ? "md:col-span-2" : ""}`}
                  key={project.slug}
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-blue-700 font-bold text-xs">
                      /project_{index + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-black text-sm md:text-base leading-relaxed">
                    {project.shortDescription}
                  </p>
                  <p className="text-black text-sm md:text-base leading-relaxed">
                    <span className="font-semibold text-black">Role:</span>{" "}
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
            <h2 className="mb-6 text-sm font-mono tracking-widest text-black uppercase">
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

          <footer className="mt-24 border-t border-gray-300 pt-8 flex items-center justify-between text-xs text-black font-mono animate-enter delay-400">
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
