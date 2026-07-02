import type { Locale } from "@/lib/i18n";

export type DevProject = {
  slug: string;
  title: string;
  shortDescription: string;
  role: string;
  highlights: string[];
};

export type DevIntro = {
  roleLabel: string;
  heading: string;
  summary: string;
  about: string[];
};

export const devPortfolioByLocale: Record<
  Locale,
  {
    intro: DevIntro;
    projects: DevProject[];
  }
> = {
  id: {
    intro: {
      roleLabel: "Backend / Fullstack Web Development",
      heading: "Bangun produk web yang robust, maintainable, dan siap scale.",
      summary:
        "Fokus pada backend architecture, API design, database modeling, serta implementasi fullstack yang cepat diiterasi tanpa mengorbankan code quality.",
      about: [
        "Aku membangun sistem dengan pola yang rapi: service boundaries jelas, typed contracts, dan observability dari awal.",
        "Keahlian utama: TypeScript backend, API architecture, data modeling, dan fullstack delivery dari ide sampai production.",
      ],
    },
    projects: [
      {
        slug: "sync-erp-core",
        title: "Sync ERP - Multi-Tenant Core Platform",
        shortDescription:
          "Arsitektur backend ERP berbasis tRPC + Prisma dengan isolasi tenant ketat dan pola service/repository berbasis DI.",
        role: "Backend & Architecture Engineer",
        highlights: [
          "Design tRPC router + service layer yang type-safe end-to-end",
          "Implementasi tenant-scoped data access untuk mencegah cross-company leakage",
          "Integrasi idempotency pattern untuk mutation kritikal",
        ],
      },
      {
        slug: "seo-mcp-tooling",
        title: "SEO MCP Tooling - Data & Automation",
        shortDescription:
          "Tooling terintegrasi untuk GA4, Google Ads, GBP, dan Search Console dalam satu lapisan workflow terstruktur.",
        role: "Fullstack / Integrations Engineer",
        highlights: [
          "Build modular tools untuk reporting dan write-governance",
          "Normalisasi data lintas API marketing untuk automation-ready flows",
          "Penerapan preview/validate mode sebelum operasi write",
        ],
      },
      {
        slug: "fullstack-delivery",
        title: "Fullstack Delivery System",
        shortDescription:
          "Pengembangan aplikasi web fullstack dari UI sampai backend contracts dengan deployment flow yang konsisten.",
        role: "Fullstack Engineer",
        highlights: [
          "Membangun reusable UI + API contracts dalam monorepo",
          "Menjaga reliability lewat typed validation dan testable modules",
          "Optimasi DX agar feature delivery tetap cepat dan maintainable",
        ],
      },
    ],
  },
  en: {
    intro: {
      roleLabel: "Backend / Fullstack Web Development",
      heading: "Build web products that are robust, maintainable, and ready to scale.",
      summary:
        "Focused on backend architecture, API design, data modeling, and fullstack implementation that can iterate quickly without sacrificing code quality.",
      about: [
        "I build systems with clear boundaries, typed contracts, and observability from the start.",
        "Core strengths: TypeScript backend, API architecture, data modeling, and fullstack delivery from idea to production.",
      ],
    },
    projects: [
      {
        slug: "sync-erp-core",
        title: "Sync ERP - Multi-Tenant Core Platform",
        shortDescription:
          "ERP backend architecture based on tRPC + Prisma with strict tenant isolation and DI-based service/repository patterns.",
        role: "Backend & Architecture Engineer",
        highlights: [
          "Designed type-safe end-to-end tRPC router and service layer",
          "Implemented tenant-scoped data access to prevent cross-company leakage",
          "Integrated idempotency patterns for critical mutations",
        ],
      },
      {
        slug: "seo-mcp-tooling",
        title: "SEO MCP Tooling - Data & Automation",
        shortDescription:
          "Integrated tooling for GA4, Google Ads, GBP, and Search Console inside one structured workflow layer.",
        role: "Fullstack / Integrations Engineer",
        highlights: [
          "Built modular tools for reporting and write governance",
          "Normalized marketing API data into automation-ready workflows",
          "Applied preview/validate mode before write operations",
        ],
      },
      {
        slug: "fullstack-delivery",
        title: "Fullstack Delivery System",
        shortDescription:
          "Fullstack web application delivery from UI to backend contracts with a consistent deployment flow.",
        role: "Fullstack Engineer",
        highlights: [
          "Built reusable UI and API contracts in a monorepo",
          "Protected reliability through typed validation and testable modules",
          "Optimized developer experience so feature delivery stays fast and maintainable",
        ],
      },
    ],
  },
};

export const devIntro = devPortfolioByLocale.id.intro;
export const devProjects = devPortfolioByLocale.id.projects;

export function getDevPortfolio(locale: Locale = "id") {
  return devPortfolioByLocale[locale];
}

export const devStack = [
  "TypeScript",
  "Node.js",
  "Express",
  "tRPC",
  "Prisma",
  "PostgreSQL",
  "React",
  "Next.js",
  "Vite",
  "Tailwind CSS",
  "Vitest",
  "Docker",
] as const;
