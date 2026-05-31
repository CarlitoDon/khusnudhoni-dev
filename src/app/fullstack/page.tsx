import type { Metadata } from "next";
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
import { devProjects, devStack } from "@/data/dev-portfolio";

export const metadata: Metadata = {
  title: "Khusnudhoni Fullstack Developer | khusnudhoni.online",
  description: "Fullstack development partner for business websites, dashboards, automations, integrations, ERP, and operations systems. Type-safe, scalable, and production-ready solutions.",
  keywords: ["fullstack developer", "web development", "business websites", "dashboards", "automations", "integrations", "ERP", "operations systems"],
};

export default function FullstackPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_PROFILE.name,
    url: SITE_PROFILE.webDomain,
    jobTitle: "Fullstack Development Partner",
    knowsAbout: devStack,
  };

  const outcomes = [
    {
      title: "Eliminate Operational Bottlenecks",
      desc: "Custom internal tools that replace messy spreadsheets and manual data entry.",
      icon: Zap,
    },
    {
      title: "Consolidated Data & Insights",
      desc: "Unified dashboards that pull data from various sources for real-time decision making.",
      icon: Layout,
    },
    {
      title: "Scalable Infrastructure",
      desc: "Type-safe architectures that grow with your business without constant technical debt.",
      icon: Server,
    },
  ];

  const fullstackServices = [
    {
      title: "Business websites that convert",
      summary:
        "Fast, credible company sites and landing pages with clear messaging, contact flows, and analytics-ready structure.",
      outputs: [
        "Marketing site or campaign landing page",
        "SEO-ready metadata and page structure",
        "WhatsApp, email, and lead handoff flow",
      ],
    },
    {
      title: "Dashboards and internal tools",
      summary:
        "Operational dashboards that give owners and teams one reliable place to see status, tasks, and decisions.",
      outputs: [
        "Role-aware dashboard UI",
        "Database-backed workflows",
        "Daily reporting views for teams",
      ],
    },
    {
      title: "Automations and integrations",
      summary:
        "API bridges, background jobs, and workflow automation that remove repetitive manual admin work.",
      outputs: [
        "Third-party API integrations",
        "Webhook and scheduled automation flows",
        "Reliable error handling and retry patterns",
      ],
    },
    {
      title: "ERP and operations systems",
      summary:
        "Lean ERP modules for inventory, orders, finance, CRM, or team operations without buying bloated software.",
      outputs: [
        "Tenant-aware data model",
        "Business process modules",
        "Audit-friendly mutation and access patterns",
      ],
    },
    {
      title: "Backend architecture cleanup",
      summary:
        "Refactor APIs, databases, and service boundaries so the product is easier to maintain and extend.",
      outputs: [
        "Typed API contracts",
        "Database schema and service-layer review",
        "Scoped hardening plan for production risk",
      ],
    },
    {
      title: "Production deployment support",
      summary:
        "Ship with realistic deployment, domain, monitoring, and handover steps instead of leaving the project on localhost.",
      outputs: [
        "Vercel or server deployment flow",
        "Domain and environment setup checklist",
        "Readable handover notes for future iteration",
      ],
    },
  ];

  const deliveryProcess = [
    {
      title: "Scope the business workflow",
      desc: "Map the current process, users, decisions, data sources, and the first useful production slice.",
    },
    {
      title: "Design contracts and data model",
      desc: "Define the API shape, database tables, permissions, and integration boundaries before building screens.",
    },
    {
      title: "Build in weekly increments",
      desc: "Ship visible milestones quickly while keeping the code typed, reviewable, and easy to extend.",
    },
    {
      title: "Deploy, document, and iterate",
      desc: "Launch to production, verify the domain and workflows, then use real feedback to plan the next version.",
    },
  ];

  const pricingModels = [
    {
      name: "Project-Based",
      desc: "Fixed scope and timeline. Ideal for building MVP or specific internal tools.",
      bestFor: "Building from scratch",
    },
    {
      name: "Retainer / Partnership",
      desc: "Continuous development and optimization. I act as your technical partner.",
      bestFor: "Ongoing iterations & ERP maintenance",
    },
  ];

  const faqs = [
    {
      q: "Do you build custom ERPs?",
      a: "Yes, I build lean, modular ERP cores tailored to specific business processes, avoiding the bloat of generic software.",
    },
    {
      q: "Can you integrate with my existing tools?",
      a: "Absolutely. I specialize in building API bridges between CRM, finance, and marketing systems.",
    },
    {
      q: "What is your tech stack?",
      a: "I primarily use TypeScript, Node.js, and Next.js for high-performance, type-safe web applications.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative min-h-screen z-0">
        <BackgroundLayer />
        <SiteNavbar />

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-10 lg:px-14">
          {/* Hero Section */}
          <header className="mb-24 flex flex-col items-start gap-6 animate-enter">
            <div className="magic-badge inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.75rem] uppercase tracking-wider text-blue-700">
              <Code2 className="mr-2 h-3.5 w-3.5 text-blue-600" />
              Engineering Business Growth
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-black">
              Fullstack development partner for{" "}
              <span className="title-gradient font-extrabold italic pr-2">
                business websites, dashboards, automations, integrations, ERP, and operations systems.
              </span>
            </h1>

            <p className="max-w-2xl text-lg text-black leading-relaxed sm:text-xl">
              I build the technical engine that runs your business operations. From high-performance customer-facing sites to complex internal management systems.
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
          </header>

          {/* Outcomes Section */}
          <section id="outcomes" className="mb-24 scroll-mt-24 animate-enter delay-100">
            <h2 className="mb-8 text-sm font-mono tracking-widest text-black uppercase">
              [ 00_Expected_Outcomes ]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outcomes.map((item) => (
                <GlassPanel key={item.title} className="p-8 flex flex-col gap-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{item.title}</h3>
                  <p className="text-black text-sm leading-relaxed">{item.desc}</p>
                </GlassPanel>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="mb-24 scroll-mt-24">
            <h2 className="mb-8 text-sm font-mono tracking-widest text-black uppercase">
              [ 01_Services ]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fullstackServices.map((service) => (
                <GlassPanel key={service.title} className="p-8">
                  <h3 className="text-lg font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-black text-sm mb-4 leading-relaxed">{service.summary}</p>
                  <ul className="space-y-2">
                    {service.outputs.map((out) => (
                      <li key={out} className="text-xs text-black flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 text-blue-500 mt-0.5" />
                        {out}
                      </li>
                    ))}
                  </ul>
                </GlassPanel>
              ))}
            </div>
          </section>

          {/* Stack Section */}
          <section id="stack" className="mb-24 scroll-mt-24">
            <h2 className="mb-8 text-sm font-mono tracking-widest text-black uppercase">
              [ 02_The_Stack ]
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

          {/* Proof Section */}
          <section id="cases" className="mb-24 scroll-mt-24">
            <h2 className="mb-8 text-sm font-mono tracking-widest text-black uppercase">
              [ 03_Proof from real engineering work ]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devProjects.map((project, index) => (
                <article
                  className={`glass-surface-primary p-8 md:p-10 flex flex-col gap-6 group hover:border-blue-400/50 ${index === 0 ? "md:col-span-2" : ""}`}
                  key={project.slug}
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-blue-700 font-bold text-xs">/project_{index + 1}</span>
                    <h3 className="text-2xl font-bold tracking-tight text-black">{project.title}</h3>
                  </div>
                  <p className="text-black text-sm leading-relaxed">{project.shortDescription}</p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-black flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section id="process" className="mb-24 scroll-mt-24">
            <h2 className="mb-8 text-sm font-mono tracking-widest text-black uppercase">
              [ 04_How_We_Work ]
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
              {deliveryProcess.map((step, index) => (
                <GlassPanel key={step.title} className="p-6">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-blue-700">
                    Phase {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-black">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black">
                    {step.desc}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </section>

          {/* Engagement Models */}
          <section id="engagement" className="mb-24 scroll-mt-24">
            <h2 className="mb-8 text-sm font-mono tracking-widest text-black uppercase">
              [ 05_Engagement models ]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pricingModels.map((model) => (
                <GlassPanel key={model.name} className="p-8 border-l-4 border-l-blue-500">
                  <h3 className="text-xl font-bold text-black mb-2">{model.name}</h3>
                  <p className="text-black text-sm mb-4 leading-relaxed">{model.desc}</p>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[0.65rem] font-mono uppercase tracking-widest rounded-full">
                    Best for: {model.bestFor}
                  </span>
                </GlassPanel>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-24 scroll-mt-24">
            <h2 className="mb-8 text-sm font-mono tracking-widest text-black uppercase">
              [ 06_Frequently asked questions ]
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <GlassPanel key={faq.q} className="p-6">
                  <h3 className="text-base font-bold text-black mb-2 flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-blue-500" />
                    {faq.q}
                  </h3>
                  <p className="text-black text-sm leading-relaxed pl-6">{faq.a}</p>
                </GlassPanel>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-24">
            <GlassPanel className="p-12 text-center bg-blue-600 border-none">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to automate your operations?</h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <GlassButton
                  href={SITE_PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  className="bg-white text-blue-700 hover:bg-white/90 border-none px-8 py-4 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Discuss via WhatsApp
                </GlassButton>
                <div className="flex flex-col items-center">
                  <span className="text-white/70 font-mono text-xs uppercase mb-2">Or reach via email</span>
                  <a href={`mailto:${SITE_PROFILE.email}`} className="text-white font-mono text-lg underline underline-offset-4 hover:text-white/80 transition-colors">
                    {SITE_PROFILE.email}
                  </a>
                </div>
              </div>
            </GlassPanel>
          </section>

          <footer className="mt-24 border-t border-gray-300 pt-8 flex items-center justify-between text-xs text-black font-mono">
            <p>{SITE_PROFILE.name} &copy; {new Date().getFullYear()}</p>
            <p className="flex items-center gap-2">
              <Settings className="h-3.5 w-3.5 animate-spin-slow" />
              Fullstack Operations Systems
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
