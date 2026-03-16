export type DevProject = {
  slug: string;
  title: string;
  shortDescription: string;
  role: string;
  highlights: string[];
};

export const devIntro = {
  roleLabel: "Backend / Fullstack Web Development",
  heading: "Bangun produk web yang robust, maintainable, dan siap scale.",
  summary:
    "Fokus pada backend architecture, API design, database modeling, serta implementasi fullstack yang cepat diiterasi tanpa mengorbankan code quality.",
  about: [
    "Aku membangun sistem dengan pola yang rapi: service boundaries jelas, typed contracts, dan observability dari awal.",
    "Keahlian utama: TypeScript backend, API architecture, data modeling, dan fullstack delivery dari ide sampai production.",
  ],
} as const;

export const devProjects: DevProject[] = [
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
];

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
