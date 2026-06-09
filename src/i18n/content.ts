import { caseStudies as idCaseStudies, type CaseStudy } from "@/data/cases";
import {
  devIntro as idDevIntro,
  devProjects as idDevProjects,
  devStack,
  type DevProject,
} from "@/data/dev-portfolio";
import type { Locale } from "@/i18n/routing";

type MetadataCopy = {
  title: string;
  description: string;
  keywords: string[];
};

type ContactModalCopy = {
  title: string;
  description: string;
  nameLabel: string;
  namePlaceholder: string;
  objectiveLabel: string;
  budgetLabel: string;
  submitLabel: string;
  options: {
    objectives: { value: string; label: string; message: string }[];
    budgets: { value: string; label: string }[];
  };
  messageTemplate: (name: string, objective: string, budget: string) => string;
};

type WorkProcessStep = {
  title: string;
  description: string;
  tag: string;
};

type HomeCopy = {
  metadata: MetadataCopy;
  jsonLdJobTitle: string;
  badge: string;
  headingLead: string;
  headingEmphasis: string;
  summary: string;
  emailEyebrow: string;
  aboutLabel: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  sideFacts: { label: string; value: string }[];
  processLabel: string;
  casesLabel: string;
  caseAriaLabel: (title: string) => string;
  caseCta: string;
  stackLabel: string;
  footerStatus: string;
};

type SeoCopy = {
  metadata: MetadataCopy;
  openGraphDescription: string;
  navSections: readonly { id: string; label: string }[];
  whatsappText: string;
  jsonLdDescription: string;
  badge: string;
  headingLead: string;
  headingEmphasis: string;
  summary: string;
  primaryCta: string;
  secondaryCta: string;
  outcomesLabel: string;
  outcomes: { title: string; desc: string }[];
  servicesLabel: string;
  services: { title: string; summary: string; outputs: string[] }[];
  processLabel: string;
  process: { title: string; desc: string }[];
  fitTitle: string;
  clientFit: string[];
  reportingTitle: string;
  reportingBody: string;
  reportingFormula: string;
  faqLabel: string;
  faqs: { q: string; a: string }[];
  finalEyebrow: string;
  finalTitle: string;
  finalBody: string;
  finalPrimaryCta: string;
  finalSecondaryCta: string;
  footerStatus: string;
};

type FullstackCopy = {
  metadata: MetadataCopy;
  jsonLdJobTitle: string;
  badge: string;
  headingLead: string;
  headingEmphasis: string;
  summary: string;
  primaryCta: string;
  secondaryCta: string;
  outcomesLabel: string;
  outcomes: { title: string; desc: string }[];
  servicesLabel: string;
  services: { title: string; summary: string; outputs: string[] }[];
  stackLabel: string;
  proofLabel: string;
  processLabel: string;
  process: { title: string; desc: string }[];
  phaseLabel: (index: number) => string;
  engagementLabel: string;
  pricingModels: { name: string; desc: string; bestFor: string }[];
  bestForLabel: string;
  faqLabel: string;
  faqs: { q: string; a: string }[];
  finalTitle: string;
  finalPrimaryCta: string;
  finalEmailLabel: string;
  footerStatus: string;
};

type DevCopy = {
  metadata: MetadataCopy;
  jsonLdJobTitle: string;
  intro: {
    roleLabel: string;
    heading: string;
    headingLead: string;
    headingEmphasis: string;
    headingTail: string;
    summary: string;
    about: readonly string[];
  };
  emailEyebrow: string;
  aboutLabel: string;
  sideFacts: { label: string; value: string }[];
  casesLabel: string;
  roleLabel: string;
  stackLabel: string;
  footerStatus: string;
};

type CasePageCopy = {
  notFoundTitle: string;
  metadataTitleSuffix: string;
  backToList: string;
  contextLabel: string;
  roleLabel: string;
  strategyLabel: string;
  trackingLabel: string;
};

export type Dictionary = {
  common: {
    navSections: readonly { id: string; label: string }[];
    buttons: {
      linkedIn: string;
      contact: string;
      heroContact: string;
    };
    contactModal: ContactModalCopy;
    trustedBy: {
      eyebrow: string;
      brands: { name: string; label: string }[];
    };
    workProcess: {
      steps: WorkProcessStep[];
    };
    hiddenImpact: {
      title: string;
      revealAria: string;
      revealButton: string;
    };
  };
  home: HomeCopy;
  seo: SeoCopy;
  fullstack: FullstackCopy;
  dev: DevCopy;
  casePage: CasePageCopy;
};

const enCaseStudies: CaseStudy[] = [
  {
    slug: "santi-mebel-jogja",
    title: "Santi Mebel Jogja - Paid Acquisition Growth",
    shortDescription:
      "A local furniture retailer focused on building stable, measurable paid acquisition across Meta and Google.",
    context:
      "A local furniture retailer with offline and online sales, but without a systematic digital acquisition channel.",
    role:
      "Performance marketing lead for acquisition system design, conversion tracking, and funnel optimization.",
    strategy: [
      "Meta Ads for demand generation",
      "Google Ads for high-intent search traffic",
      "Landing page optimization to improve intent-to-chat conversion",
      "WhatsApp-based closing process with clearer handoff flow",
      "Campaign structure based on objectives, not simple boosting",
    ],
    tracking: [
      "Meta Pixel conversion tracking",
      "Google Analytics event tracking",
      "Funnel tracking from ad click -> landing page -> WhatsApp lead -> purchase",
      "Behavior analysis with Microsoft Clarity",
      "Attribution review to make conversion sources more reliable",
    ],
    results: [
      "~IDR 1 billion additional revenue in 1 year",
      "Paid acquisition became a consistent acquisition channel",
      "Funnel visibility improved through detailed tracking",
    ],
    metrics: [
      { prefix: "IDR ", value: 1, suffix: " B+", label: "Additional Revenue" },
      { value: 12, suffix: " Mo", label: "Channel Consistency" },
    ],
  },
  {
    slug: "santi-living",
    title: "Santi Living - Growth from Zero",
    shortDescription:
      "A mattress rental business serving temporary accommodation needs, grown from zero.",
    context:
      "A new mattress rental business built from the ground up for temporary accommodation needs.",
    role:
      "Founder responsible for growth strategy, marketing execution, and system development.",
    strategy: [
      "Meta Ads as the first channel for fast demand validation",
      "Direct-response landing page to speed conversion into chat",
      "Funnel from ads -> landing page -> WhatsApp -> closing",
      "Early retention loop to encourage repeat customers",
    ],
    tracking: [
      "Meta Pixel",
      "Google Analytics",
      "Microsoft Clarity behavior tracking",
      "Funnel attribution across lead and purchase stages",
      "Daily PMF signal monitoring from repeat orders and referrals",
    ],
    results: [
      "0 -> IDR 4 million revenue in the first month",
      "14 repeat customers in the early phase",
      "Validated early demand through repeat orders",
    ],
    metrics: [
      { prefix: "IDR ", value: 4, suffix: " M", label: "Month 1 Revenue" },
      { value: 14, label: "Repeat Customers" },
    ],
  },
  {
    slug: "kita-jago-digital",
    title: "PT Kita Jago Digital - Funnel System",
    shortDescription:
      "An online consumer products business with multiple health products, focused on measurable acquisition-to-retention funnels.",
    context:
      "An online consumer products business with several health products, but the marketing and operations flow was not yet structured.",
    role: "Head of Operations designing the marketing system and funnel handoff.",
    strategy: [
      "Multi-platform paid ads",
      "Landing page -> WhatsApp acquisition funnel with CS handoff",
      "CRM retention workflow",
      "Cleanup of funnel structure from acquisition through retention",
      "SOP design across marketing, CS, and operations",
    ],
    tracking: [
      "Meta Ads conversion tracking",
      "Funnel-level measurement for acquisition and retention",
      "Internal dashboard for performance monitoring",
      "Handoff bottleneck tracking from landing page -> CS -> closing",
    ],
    results: [
      "Scaled revenue from 0 -> IDR 40 million/month in 3 months",
      "Structured SOPs for marketing, acquisition CS, and retention teams",
      "More consistent team performance monitoring through an internal dashboard",
    ],
    metrics: [
      { prefix: "IDR ", value: 40, suffix: " M/mo", label: "Scaled Revenue" },
      { value: 3, suffix: " Mo", label: "Time to Milestone" },
    ],
  },
];

const enDevProjects: DevProject[] = [
  {
    slug: "sync-erp-core",
    title: "Sync ERP - Multi-Tenant Core Platform",
    shortDescription:
      "A tRPC + Prisma ERP backend architecture with strict tenant isolation and DI-based service/repository patterns.",
    role: "Backend & Architecture Engineer",
    highlights: [
      "Designed tRPC router and service layers with end-to-end type safety",
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
      "Normalized marketing API data for automation-ready flows",
      "Applied preview/validate mode before write operations",
    ],
  },
  {
    slug: "fullstack-delivery",
    title: "Fullstack Delivery System",
    shortDescription:
      "Fullstack web app delivery from UI to backend contracts with a consistent deployment flow.",
    role: "Fullstack Engineer",
    highlights: [
      "Built reusable UI and API contracts inside a monorepo",
      "Protected reliability with typed validation and testable modules",
      "Optimized DX so feature delivery stays fast and maintainable",
    ],
  },
];

export const dictionaries: Record<Locale, Dictionary> = {
  id: {
    common: {
      navSections: [
        { id: "about", label: "/tentang" },
        { id: "cases", label: "/karya" },
        { id: "stack", label: "/stack" },
      ],
      buttons: {
        linkedIn: "Profil LinkedIn",
        contact: "Kontak",
        heroContact: "Chat via WhatsApp",
      },
      contactModal: {
        title: "Mari bangun sesuatu.",
        description:
          "Isi form singkat ini agar saya bisa memberikan insight yang relevan dari awal kita chat.",
        nameLabel: "Nama Anda",
        namePlaceholder: "Cth: Budi (Santi Mebel)",
        objectiveLabel: "Fokus Saat Ini",
        budgetLabel: "Estimasi Monthly Ad Spend",
        submitLabel: "Lanjut ke WhatsApp",
        options: {
          objectives: [
            {
              value: "growth",
              label: "Scale up revenue / Growth System",
              message: "Growth System",
            },
            {
              value: "tracking",
              label: "Setup GA4 / Tracking & Analytics",
              message: "Tracking & Analytics",
            },
            {
              value: "general",
              label: "Konsultasi Umum",
              message: "Konsultasi Umum",
            },
          ],
          budgets: [
            { value: "<10m", label: "Kurang dari Rp 10 Juta" },
            { value: "10m-50m", label: "Rp 10 - 50 Juta" },
            { value: "50m-100m", label: "Rp 50 - 100 Juta" },
            { value: ">100m", label: "Lebih dari Rp 100 Juta" },
          ],
        },
        messageTemplate: (name, objective, budget) =>
          `Hi Dhoni, saya ${name}. Saya tertarik diskusi terkait ${objective}. Estimasi budget marketing bulanan: ${budget}.`,
      },
      trustedBy: {
        eyebrow: "Dipercaya Brand yang Fokus Growth",
        brands: [
          { name: "Santi Mebel", label: "Retail & E-commerce" },
          { name: "Santi Living", label: "Properti & Rental" },
          { name: "Kita Jago Digital", label: "Health & Beauty" },
          { name: "Local Brands", label: "Growth Partner" },
        ],
      },
      workProcess: {
        steps: [
          {
            title: "Audit & Strategi",
            description:
              "Analisis funnel yang berjalan dan susun strategi channel yang jelas sebelum budget diperbesar.",
            tag: "Fase 1",
          },
          {
            title: "Infrastruktur & Tracking",
            description:
              "Setup measurement yang kuat seperti Pixel, CAPI, dan GA4 agar setiap action bisa dipertanggungjawabkan.",
            tag: "Fase 2",
          },
          {
            title: "Eksekusi & Optimasi",
            description:
              "Jalankan Meta/Google Ads yang terarah dan rapikan landing page sampai handoff WhatsApp.",
            tag: "Fase 3",
          },
          {
            title: "Scale & Dashboard",
            description:
              "Bangun dashboard dan SOP internal agar tim bisa memantau dan scale revenue secara konsisten.",
            tag: "Fase 4",
          },
        ],
      },
      hiddenImpact: {
        title: "Business Impact",
        revealAria: "Tampilkan dampak",
        revealButton: "TAMPILKAN IMPACT",
      },
    },
    home: {
      metadata: {
        title: "Khusnudhoni | Portfolio Growth & Technical Marketing",
        description:
          "Portfolio Khusnudhoni untuk growth marketing, backend engineering, dan fullstack web development.",
        keywords: [
          "growth marketing",
          "technical marketing",
          "backend developer",
          "fullstack developer",
          "meta ads",
          "google ads",
          "portfolio",
          "khusnudhoni",
        ],
      },
      jsonLdJobTitle: "Growth & Technical Marketing",
      badge: "Growth Builder / Ads / Tracking Systems",
      headingLead:
        "Growth bukan soal iklan yang bagus. Growth adalah sistem yang ",
      headingEmphasis: "menghasilkan revenue konsisten.",
      summary:
        "Saya menggabungkan performance marketing, tracking infrastructure, dan system thinking untuk membantu bisnis mengambil keputusan berbasis data, bukan vanity metrics.",
      emailEyebrow: "Lebih nyaman kirim brief detail via email?",
      aboutLabel: "[ 00_Siapa_Saya ]",
      aboutTitle: "Khusnudhoni",
      aboutParagraphs: [
        "Saya adalah builder-operator di area growth. Saya tidak hanya menjalankan ads, tetapi membangun sistem di belakangnya agar acquisition, tracking, conversion, dan retention berjalan sebagai satu ekosistem.",
        "Pendekatan saya selalu data-first: campaign berbasis hipotesis, tracking yang dapat diaudit, dan dashboard yang bisa dipakai tim untuk keputusan harian. Goal akhirnya sederhana: revenue yang nyata dan bisa diulang.",
      ],
      sideFacts: [
        { label: "Current Role", value: "Growth Builder and Operator" },
        {
          label: "Core Competencies",
          value:
            "Performance Marketing, Funnel Systems, Tracking Infrastructure",
        },
        { label: "Location", value: "Indonesia" },
      ],
      processLabel: "[ 00.5_Cara_Saya_Build ]",
      casesLabel: "[ 01_Case_Studies ]",
      caseAriaLabel: (title) => `Baca ${title}`,
      caseCta: "Baca log lengkap",
      stackLabel: "[ 02_Growth_Stack ]",
      footerStatus: "Systems Online",
    },
    seo: {
      metadata: {
        title:
          "Khusnudhoni SEO Specialist | Technical SEO, Local SEO & Growth Search Systems",
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
      },
      openGraphDescription:
        "Technical SEO, local SEO, content clusters, dan sistem search-growth yang terukur untuk bisnis.",
      navSections: [
        { id: "outcomes", label: "/hasil" },
        { id: "services", label: "/layanan" },
        { id: "process", label: "/proses" },
        { id: "faq", label: "/faq" },
      ],
      whatsappText:
        "Halo Khusnudhoni, saya ingin audit SEO untuk domain saya. cta_source=seo_subdomain",
      jsonLdDescription:
        "Technical SEO, local SEO, content cluster, dan sistem search-growth yang terukur.",
      badge: "SEO Systems / Search Growth / Local Discovery",
      headingLead:
        "SEO bukan sekadar artikel. SEO adalah sistem untuk menemukan, memperbaiki, dan memenangkan",
      headingEmphasis: " search demand yang bisa jadi lead.",
      summary:
        "Saya membantu bisnis mengubah data pencarian menjadi growth engine yang praktis: technical SEO, low-hanging fruit dari GSC, content cluster, local SEO, internal link, schema, dan conversion measurement.",
      primaryCta: "Diskusi SEO via WhatsApp",
      secondaryCta: "Lihat proses SEO",
      outcomesLabel: "[ 00_Hasil_SEO ]",
      outcomes: [
        {
          title: "Cari peluang tercepat lebih dulu",
          desc: "Gunakan GSC, GA4, kelemahan SERP, dan pertanyaan pelanggan untuk menemukan halaman dan keyword yang bisa bergerak lebih cepat sebelum membuat backlog konten besar.",
        },
        {
          title: "Perbaiki fondasi search",
          desc: "Rapikan crawlability, canonical, H1/title/meta, schema, sitemap, internal link, dan Core Web Vitals sebelum scaling konten.",
        },
        {
          title: "Hubungkan SEO ke leads",
          desc: "Jadikan SEO terukur lewat landing page, CTA, WhatsApp, form, dan event commerce agar kerja ranking terhubung ke pipeline.",
        },
      ],
      servicesLabel: "[ 01_Layanan_SEO ]",
      services: [
        {
          title: "Audit teknikal SEO & implementasi",
          summary:
            "Indexing, robots, sitemap, canonical, internal linking, performance, structured data, dan perbaikan SEO level template.",
          outputs: [
            "Laporan audit",
            "Daftar prioritas perbaikan",
            "Ticket yang siap diimplementasi",
          ],
        },
        {
          title: "GSC opportunity mining",
          summary:
            "Identifikasi cluster query dengan impression, click, average position, dan pola CTR rendah yang bisa menjadi quick wins.",
          outputs: [
            "Peta cluster query",
            "Daftar low-hanging fruit",
            "Rencana refresh title/meta",
          ],
        },
        {
          title: "Strategi content cluster",
          summary:
            "Bangun topical authority dengan money pages, supporting guides, FAQ, local pages, dan rute internal link.",
          outputs: ["Arsitektur konten", "Brief konten", "Peta internal link"],
        },
        {
          title: "Local SEO & Google Business Profile",
          summary:
            "Tingkatkan discovery lokal dengan kejelasan area layanan, konsistensi NAP, konten GBP, response review, dan landing page lokal.",
          outputs: [
            "Checklist local SEO",
            "Rencana posting GBP",
            "SOP response review",
          ],
        },
        {
          title: "SEO e-commerce dan katalog",
          summary:
            "Optimasi category page, template produk, schema, aturan tag/index-bloat, dan conversion route untuk situs katalog besar.",
          outputs: [
            "Peta kategori",
            "Checklist schema",
            "Rencana index-control",
          ],
        },
        {
          title: "Sistem measurement SEO",
          summary:
            "Bangun reporting mingguan dari GSC, GA4, halaman Search Console, conversion event, dan action item yang dipahami bisnis.",
          outputs: ["Spec dashboard", "Laporan mingguan", "Kontrak KPI dan event"],
        },
      ],
      processLabel: "[ 02_Proses ]",
      process: [
        {
          title: "Baseline evidence",
          desc: "Tarik DNS/HTTP, indexability, GSC/GA4, sitemap, template halaman, dan sample SERP sebelum mengusulkan action.",
        },
        {
          title: "Opportunity model",
          desc: "Pisahkan quick wins, blocker teknikal, content cluster, local intent, dan peluang authority-building.",
        },
        {
          title: "Sprint implementasi",
          desc: "Ship fixes dan konten dalam batch kecil dengan acceptance criteria jelas dan verifikasi live.",
        },
        {
          title: "Measure and compound",
          desc: "Review pergerakan mingguan, update internal link, refresh halaman, dan double down hanya saat demand search berkonversi.",
        },
      ],
      fitTitle: "Client yang paling cocok",
      clientFit: [
        "Bisnis jasa lokal yang butuh leads dari search, maps, dan WhatsApp.",
        "Situs katalog atau e-commerce dengan banyak produk, kategori, tag, dan risiko SEO template.",
        "Bisnis founder-led yang butuh eksekusi praktis, bukan audit SEO teoretis saja.",
        "Tim yang sudah punya konten tetapi butuh pruning, refreshing, linking, dan measurement.",
      ],
      reportingTitle: "Ritme reporting",
      reportingBody:
        "Laporan mingguan harus menjawab: apa yang bergerak, apa yang sudah shipped, apa yang blocked, dan apa next action-nya.",
      reportingFormula:
        "GSC + GA4 + GBP + site crawl + conversion events = keputusan SEO berbasis evidence.",
      faqLabel: "[ 03_FAQ ]",
      faqs: [
        {
          q: "Apakah hanya membuat rencana SEO?",
          a: "Tidak. Saya lebih memilih SEO berbasis implementasi: audit, prioritas, ship fixes, verifikasi halaman live, lalu report pergerakan.",
        },
        {
          q: "Apa yang membedakan pendekatan SEO ini?",
          a: "Saya menggabungkan technical SEO, strategi konten, local SEO, tracking infrastructure, dan konteks operasional bisnis agar SEO terhubung ke leads nyata.",
        },
        {
          q: "Bisa bekerja dengan WordPress, WooCommerce, dan Next.js?",
          a: "Bisa. Saya dapat audit dan plan untuk CMS, catalog site, maupun framework modern, lalu menerjemahkan temuan menjadi action yang siap diimplementasi.",
        },
      ],
      finalEyebrow: "Search growth dimulai dari evidence",
      finalTitle: "Ingin tahu pekerjaan SEO mana yang harus didahulukan?",
      finalBody:
        "Kirim domain dan goal saat ini. Saya akan mulai dari live evidence, search intent, fondasi teknikal, dan path tercepat menuju qualified leads.",
      finalPrimaryCta: "Mulai audit SEO",
      finalSecondaryCta: "Profil LinkedIn",
      footerStatus: "Search Systems Online",
    },
    fullstack: {
      metadata: {
        title: "Khusnudhoni Fullstack Developer | khusnudhoni.online",
        description:
          "Partner fullstack development untuk website bisnis, dashboard, automasi, integrasi, ERP, dan sistem operasional yang type-safe dan production-ready.",
        keywords: [
          "fullstack developer",
          "web development",
          "business websites",
          "dashboards",
          "automations",
          "integrations",
          "ERP",
          "operations systems",
        ],
      },
      jsonLdJobTitle: "Fullstack Development Partner",
      badge: "Engineering Business Growth",
      headingLead: "Partner fullstack development untuk ",
      headingEmphasis:
        "website bisnis, dashboard, automasi, integrasi, ERP, dan sistem operasional.",
      summary:
        "Saya membangun mesin teknis yang menjalankan operasi bisnis: dari customer-facing site berperforma tinggi sampai sistem internal yang kompleks.",
      primaryCta: "Diskusi via WhatsApp",
      secondaryCta: "Profil LinkedIn",
      outcomesLabel: "[ 00_Hasil_Yang_Diharapkan ]",
      outcomes: [
        {
          title: "Hilangkan bottleneck operasional",
          desc: "Internal tools custom yang menggantikan spreadsheet berantakan dan input data manual.",
        },
        {
          title: "Data dan insight terkonsolidasi",
          desc: "Dashboard terpadu yang menarik data dari berbagai sumber untuk keputusan real-time.",
        },
        {
          title: "Infrastruktur yang scalable",
          desc: "Arsitektur type-safe yang tumbuh bersama bisnis tanpa technical debt terus-menerus.",
        },
      ],
      servicesLabel: "[ 01_Layanan ]",
      services: [
        {
          title: "Website bisnis yang konversi",
          summary:
            "Company site dan landing page yang cepat, kredibel, dengan messaging jelas, contact flow, dan struktur analytics-ready.",
          outputs: [
            "Marketing site atau campaign landing page",
            "Metadata dan struktur halaman SEO-ready",
            "Flow WhatsApp, email, dan handoff lead",
          ],
        },
        {
          title: "Dashboard dan internal tools",
          summary:
            "Dashboard operasional yang memberi owner dan tim satu tempat reliable untuk melihat status, task, dan keputusan.",
          outputs: [
            "UI dashboard sesuai role",
            "Workflow berbasis database",
            "View reporting harian untuk tim",
          ],
        },
        {
          title: "Automasi dan integrasi",
          summary:
            "API bridge, background job, dan workflow automation yang menghapus admin manual berulang.",
          outputs: [
            "Integrasi API pihak ketiga",
            "Webhook dan scheduled automation flow",
            "Error handling dan retry pattern yang reliable",
          ],
        },
        {
          title: "ERP dan sistem operasional",
          summary:
            "Modul ERP ramping untuk inventory, order, finance, CRM, atau operasional tim tanpa software bloat.",
          outputs: [
            "Data model tenant-aware",
            "Modul proses bisnis",
            "Mutation dan access pattern yang audit-friendly",
          ],
        },
        {
          title: "Cleanup arsitektur backend",
          summary:
            "Refactor API, database, dan batas service agar produk lebih mudah dirawat dan dikembangkan.",
          outputs: [
            "Typed API contracts",
            "Review schema database dan service layer",
            "Rencana hardening production risk yang scoped",
          ],
        },
        {
          title: "Support deployment production",
          summary:
            "Ship dengan deployment, domain, monitoring, dan handover realistis, bukan berhenti di localhost.",
          outputs: [
            "Flow deployment Vercel atau server",
            "Checklist domain dan environment setup",
            "Catatan handover untuk iterasi berikutnya",
          ],
        },
      ],
      stackLabel: "[ 02_Stack ]",
      proofLabel: "[ 03_Bukti dari kerja engineering nyata ]",
      processLabel: "[ 04_Cara_Kita_Bekerja ]",
      process: [
        {
          title: "Scope workflow bisnis",
          desc: "Petakan proses saat ini, user, keputusan, sumber data, dan production slice pertama yang berguna.",
        },
        {
          title: "Desain contract dan data model",
          desc: "Definisikan bentuk API, tabel database, permission, dan boundary integrasi sebelum membangun screen.",
        },
        {
          title: "Build dalam increment mingguan",
          desc: "Ship milestone yang terlihat dengan code yang typed, reviewable, dan mudah dikembangkan.",
        },
        {
          title: "Deploy, dokumentasi, dan iterasi",
          desc: "Launch ke production, verifikasi domain dan workflow, lalu gunakan feedback nyata untuk versi berikutnya.",
        },
      ],
      phaseLabel: (index) => `Fase ${index + 1}`,
      engagementLabel: "[ 05_Model_Engagement ]",
      pricingModels: [
        {
          name: "Project-Based",
          desc: "Scope dan timeline tetap. Ideal untuk membangun MVP atau internal tools spesifik.",
          bestFor: "Build dari awal",
        },
        {
          name: "Retainer / Partnership",
          desc: "Development dan optimasi berkelanjutan. Saya berperan sebagai partner teknis.",
          bestFor: "Iterasi ongoing & maintenance ERP",
        },
      ],
      bestForLabel: "Cocok untuk:",
      faqLabel: "[ 06_Pertanyaan_Umum ]",
      faqs: [
        {
          q: "Apakah bisa membangun ERP custom?",
          a: "Bisa. Saya membangun core ERP modular yang disesuaikan dengan proses bisnis tertentu, tanpa bloat dari software generik.",
        },
        {
          q: "Bisa integrasi dengan tools yang sudah ada?",
          a: "Bisa. Saya terbiasa membangun API bridge antara CRM, finance, dan sistem marketing.",
        },
        {
          q: "Tech stack yang biasa digunakan?",
          a: "Utamanya TypeScript, Node.js, dan Next.js untuk aplikasi web yang high-performance dan type-safe.",
        },
      ],
      finalTitle: "Siap mengotomasi operasional?",
      finalPrimaryCta: "Diskusi via WhatsApp",
      finalEmailLabel: "Atau hubungi via email",
      footerStatus: "Fullstack Operations Systems",
    },
    dev: {
      metadata: {
        title: "Khusnudhoni Developer | Backend & Fullstack Portfolio",
        description:
          "Portfolio engineering Khusnudhoni untuk backend architecture, API design, data modeling, dan fullstack delivery.",
        keywords: [
          "backend developer",
          "fullstack developer",
          "typescript developer",
          "next.js developer",
          "api architecture",
        ],
      },
      jsonLdJobTitle: "Backend & Fullstack Web Developer",
      intro: {
        ...idDevIntro,
        headingLead: "Bangun produk web yang ",
        headingEmphasis: "robust",
        headingTail: ", maintainable, dan siap scale.",
      },
      emailEyebrow: "Lebih nyaman kirim scope teknis via email?",
      aboutLabel: "[ 00_Siapa_Saya ]",
      sideFacts: [
        { label: "Primary Focus", value: "Backend Systems & API Architecture" },
        {
          label: "Delivery Style",
          value: "Type-safe, testable, and production-first",
        },
        { label: "Location", value: "Indonesia" },
      ],
      casesLabel: "[ 01_Selected_Projects ]",
      roleLabel: "Role:",
      stackLabel: "[ 02_Engineering_Stack ]",
      footerStatus: "Engineering Systems Online",
    },
    casePage: {
      notFoundTitle: "Case Study Tidak Ditemukan",
      metadataTitleSuffix: "Case Study",
      backToList: "[ KEMBALI_KE_LIST ]",
      contextLabel: "Context",
      roleLabel: "My Role",
      strategyLabel: "Strategy Executed",
      trackingLabel: "Tracking Setup",
    },
  },
  en: {
    common: {
      navSections: [
        { id: "about", label: "/about" },
        { id: "cases", label: "/work" },
        { id: "stack", label: "/stack" },
      ],
      buttons: {
        linkedIn: "LinkedIn Profile",
        contact: "Contact",
        heroContact: "Chat via WhatsApp",
      },
      contactModal: {
        title: "Let's build something.",
        description:
          "Fill this short form so I can start the chat with useful context.",
        nameLabel: "Your Name",
        namePlaceholder: "Ex: Budi (Santi Mebel)",
        objectiveLabel: "Current Focus",
        budgetLabel: "Estimated Monthly Ad Spend",
        submitLabel: "Continue to WhatsApp",
        options: {
          objectives: [
            {
              value: "growth",
              label: "Scale up revenue / Growth System",
              message: "Growth System",
            },
            {
              value: "tracking",
              label: "GA4 setup / Tracking & Analytics",
              message: "Tracking & Analytics",
            },
            {
              value: "general",
              label: "General Consultation",
              message: "General Consultation",
            },
          ],
          budgets: [
            { value: "<10m", label: "Less than IDR 10 million" },
            { value: "10m-50m", label: "IDR 10 - 50 million" },
            { value: "50m-100m", label: "IDR 50 - 100 million" },
            { value: ">100m", label: "More than IDR 100 million" },
          ],
        },
        messageTemplate: (name, objective, budget) =>
          `Hi Dhoni, I'm ${name}. I'd like to discuss ${objective}. Estimated monthly marketing budget: ${budget}.`,
      },
      trustedBy: {
        eyebrow: "Trusted by Growth-Focused Brands",
        brands: [
          { name: "Santi Mebel", label: "Retail & E-commerce" },
          { name: "Santi Living", label: "Property & Rental" },
          { name: "Kita Jago Digital", label: "Health & Beauty" },
          { name: "Local Brands", label: "Growth Partner" },
        ],
      },
      workProcess: {
        steps: [
          {
            title: "Audit & Strategy",
            description:
              "Analyze existing funnels and build a clear channel strategy before increasing budget.",
            tag: "Phase 1",
          },
          {
            title: "Infrastructure & Tracking",
            description:
              "Set up robust measurement such as Pixel, CAPI, and GA4 so every action is accountable.",
            tag: "Phase 2",
          },
          {
            title: "Execution & Optimization",
            description:
              "Deploy targeted Meta/Google Ads and refine landing page to WhatsApp handoffs.",
            tag: "Phase 3",
          },
          {
            title: "Scale & Dashboarding",
            description:
              "Build internal dashboards and SOPs so the team can monitor and scale revenue consistently.",
            tag: "Phase 4",
          },
        ],
      },
      hiddenImpact: {
        title: "Business Impact",
        revealAria: "Reveal impact",
        revealButton: "REVEAL IMPACT",
      },
    },
    home: {
      metadata: {
        title: "Khusnudhoni | Growth & Technical Marketing Portfolio",
        description:
          "Khusnudhoni portfolio for growth marketing, backend engineering, and fullstack web development.",
        keywords: [
          "growth marketing",
          "technical marketing",
          "backend developer",
          "fullstack developer",
          "meta ads",
          "google ads",
          "portfolio",
          "khusnudhoni",
        ],
      },
      jsonLdJobTitle: "Growth & Technical Marketing",
      badge: "Growth Builder / Ads / Tracking Systems",
      headingLead:
        "Growth is not about good ads. Growth is a system that ",
      headingEmphasis: "creates consistent revenue.",
      summary:
        "I combine performance marketing, tracking infrastructure, and systems thinking to help businesses make decisions from data, not vanity metrics.",
      emailEyebrow: "Prefer email for a detailed brief?",
      aboutLabel: "[ 00_Who_Am_I ]",
      aboutTitle: "Khusnudhoni",
      aboutParagraphs: [
        "I am a builder-operator in growth. I do not only run ads; I build the systems behind them so acquisition, tracking, conversion, and retention work as one ecosystem.",
        "My approach is always data-first: hypothesis-driven campaigns, auditable tracking, and dashboards teams can use for daily decisions. The final goal is simple: real revenue that can be repeated.",
      ],
      sideFacts: [
        { label: "Current Role", value: "Growth Builder and Operator" },
        {
          label: "Core Competencies",
          value:
            "Performance Marketing, Funnel Systems, Tracking Infrastructure",
        },
        { label: "Location", value: "Indonesia" },
      ],
      processLabel: "[ 00.5_How_I_Build ]",
      casesLabel: "[ 01_Case_Studies ]",
      caseAriaLabel: (title) => `Read ${title}`,
      caseCta: "Read full log",
      stackLabel: "[ 02_Growth_Stack ]",
      footerStatus: "Systems Online",
    },
    seo: {
      metadata: {
        title:
          "Khusnudhoni SEO Specialist | Technical SEO, Local SEO & Growth Search Systems",
        description:
          "SEO partner for local businesses and e-commerce: technical audits, GSC opportunity mining, content clusters, local SEO, internal linking, and measurement systems.",
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
      },
      openGraphDescription:
        "Technical SEO, local SEO, content clusters, and measurable search-growth systems for businesses.",
      navSections: [
        { id: "outcomes", label: "/outcomes" },
        { id: "services", label: "/services" },
        { id: "process", label: "/process" },
        { id: "faq", label: "/faq" },
      ],
      whatsappText:
        "Hi Khusnudhoni, I want an SEO audit for my domain. cta_source=seo_subdomain",
      jsonLdDescription:
        "Technical SEO, local SEO, content clusters, and measurable search-growth systems.",
      badge: "SEO Systems / Search Growth / Local Discovery",
      headingLead:
        "SEO is not just articles. SEO is a system to find, fix, and win",
      headingEmphasis: " search demand that can become leads.",
      summary:
        "I help businesses turn search data into a practical growth engine: technical SEO, low-hanging fruit from GSC, content clusters, local SEO, internal links, schema, and conversion measurement.",
      primaryCta: "Discuss SEO via WhatsApp",
      secondaryCta: "See SEO process",
      outcomesLabel: "[ 00_SEO_Outcomes ]",
      outcomes: [
        {
          title: "Find low-hanging fruit first",
          desc: "Use GSC, GA4, SERP weakness, and customer questions to find pages and keywords that can move faster before building a huge content backlog.",
        },
        {
          title: "Fix the search foundation",
          desc: "Clean up crawlability, canonicals, H1/title/meta, schema, sitemap, internal links, and Core Web Vitals before scaling content.",
        },
        {
          title: "Connect SEO to leads",
          desc: "Make SEO measurable with landing-page, CTA, WhatsApp, form, and commerce events so ranking work ties back to pipeline.",
        },
      ],
      servicesLabel: "[ 01_SEO_Services ]",
      services: [
        {
          title: "Technical SEO audit & implementation",
          summary:
            "Indexing, robots, sitemap, canonical, internal linking, performance, structured data, and template-level SEO fixes.",
          outputs: [
            "Audit report",
            "Prioritized fix list",
            "Implementation-ready tickets",
          ],
        },
        {
          title: "GSC opportunity mining",
          summary:
            "Identify query clusters with impressions, clicks, average position, and low CTR patterns that can become quick wins.",
          outputs: [
            "Query cluster map",
            "Low-hanging fruit list",
            "Title/meta refresh plan",
          ],
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
          outputs: [
            "Local SEO checklist",
            "GBP posting plan",
            "Review response SOP",
          ],
        },
        {
          title: "E-commerce and catalog SEO",
          summary:
            "Optimize category pages, product templates, schema, tag/index-bloat rules, and conversion routes for catalog-heavy sites.",
          outputs: [
            "Category map",
            "Schema checklist",
            "Index-control plan",
          ],
        },
        {
          title: "SEO measurement system",
          summary:
            "Build weekly reporting from GSC, GA4, Search Console pages, conversion events, and business-facing action items.",
          outputs: ["Dashboard spec", "Weekly report", "KPI and event contract"],
        },
      ],
      processLabel: "[ 02_Process ]",
      process: [
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
      ],
      fitTitle: "Best fit clients",
      clientFit: [
        "Local service businesses that need leads from search, maps, and WhatsApp.",
        "Catalog or e-commerce sites with many products, categories, tags, and template SEO risk.",
        "Founder-led businesses that need practical execution, not just a theoretical SEO audit.",
        "Teams that already have content but need pruning, refreshing, linking, and measurement.",
      ],
      reportingTitle: "Reporting rhythm",
      reportingBody:
        "Weekly reports should answer: what moved, what shipped, what is blocked, and what should be done next.",
      reportingFormula:
        "GSC + GA4 + GBP + site crawl + conversion events = SEO decisions with evidence.",
      faqLabel: "[ 03_FAQ ]",
      faqs: [
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
      ],
      finalEyebrow: "Search growth starts with evidence",
      finalTitle: "Want to know which SEO work should be done first?",
      finalBody:
        "Send your domain and current goal. I will start from live evidence, search intent, technical foundation, and the fastest path to qualified leads.",
      finalPrimaryCta: "Start SEO audit",
      finalSecondaryCta: "LinkedIn profile",
      footerStatus: "Search Systems Online",
    },
    fullstack: {
      metadata: {
        title: "Khusnudhoni Fullstack Developer | khusnudhoni.online",
        description:
          "Fullstack development partner for business websites, dashboards, automations, integrations, ERP, and operations systems. Type-safe, scalable, and production-ready solutions.",
        keywords: [
          "fullstack developer",
          "web development",
          "business websites",
          "dashboards",
          "automations",
          "integrations",
          "ERP",
          "operations systems",
        ],
      },
      jsonLdJobTitle: "Fullstack Development Partner",
      badge: "Engineering Business Growth",
      headingLead: "Fullstack development partner for ",
      headingEmphasis:
        "business websites, dashboards, automations, integrations, ERP, and operations systems.",
      summary:
        "I build the technical engine that runs your business operations. From high-performance customer-facing sites to complex internal management systems.",
      primaryCta: "Discuss via WhatsApp",
      secondaryCta: "LinkedIn Profile",
      outcomesLabel: "[ 00_Expected_Outcomes ]",
      outcomes: [
        {
          title: "Eliminate Operational Bottlenecks",
          desc: "Custom internal tools that replace messy spreadsheets and manual data entry.",
        },
        {
          title: "Consolidated Data & Insights",
          desc: "Unified dashboards that pull data from various sources for real-time decision making.",
        },
        {
          title: "Scalable Infrastructure",
          desc: "Type-safe architectures that grow with your business without constant technical debt.",
        },
      ],
      servicesLabel: "[ 01_Services ]",
      services: [
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
      ],
      stackLabel: "[ 02_The_Stack ]",
      proofLabel: "[ 03_Proof from real engineering work ]",
      processLabel: "[ 04_How_We_Work ]",
      process: [
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
      ],
      phaseLabel: (index) => `Phase ${index + 1}`,
      engagementLabel: "[ 05_Engagement models ]",
      pricingModels: [
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
      ],
      bestForLabel: "Best for:",
      faqLabel: "[ 06_Frequently asked questions ]",
      faqs: [
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
      ],
      finalTitle: "Ready to automate your operations?",
      finalPrimaryCta: "Discuss via WhatsApp",
      finalEmailLabel: "Or reach via email",
      footerStatus: "Fullstack Operations Systems",
    },
    dev: {
      metadata: {
        title: "Khusnudhoni Developer | Backend & Fullstack Portfolio",
        description:
          "Khusnudhoni engineering portfolio for backend architecture, API design, data modeling, and fullstack delivery.",
        keywords: [
          "backend developer",
          "fullstack developer",
          "typescript developer",
          "next.js developer",
          "api architecture",
        ],
      },
      jsonLdJobTitle: "Backend & Fullstack Web Developer",
      intro: {
        roleLabel: "Backend / Fullstack Web Development",
        heading: "Build web products that are robust, maintainable, and ready to scale.",
        headingLead: "Build web products that are ",
        headingEmphasis: "robust",
        headingTail: ", maintainable, and ready to scale.",
        summary:
          "Focused on backend architecture, API design, database modeling, and fullstack implementation that can iterate quickly without sacrificing code quality.",
        about: [
          "I build systems with clean patterns: clear service boundaries, typed contracts, and observability from the start.",
          "Core strengths: TypeScript backend, API architecture, data modeling, and fullstack delivery from idea to production.",
        ],
      },
      emailEyebrow: "Prefer email for technical scope?",
      aboutLabel: "[ 00_Who_Am_I ]",
      sideFacts: [
        { label: "Primary Focus", value: "Backend Systems & API Architecture" },
        {
          label: "Delivery Style",
          value: "Type-safe, testable, and production-first",
        },
        { label: "Location", value: "Indonesia" },
      ],
      casesLabel: "[ 01_Selected_Projects ]",
      roleLabel: "Role:",
      stackLabel: "[ 02_Engineering_Stack ]",
      footerStatus: "Engineering Systems Online",
    },
    casePage: {
      notFoundTitle: "Case Study Not Found",
      metadataTitleSuffix: "Case Study",
      backToList: "[ BACK_TO_LIST ]",
      contextLabel: "Context",
      roleLabel: "My Role",
      strategyLabel: "Strategy Executed",
      trackingLabel: "Tracking Setup",
    },
  },
};

const casesByLocale: Record<Locale, CaseStudy[]> = {
  id: idCaseStudies,
  en: enCaseStudies,
};

const devProjectsByLocale: Record<Locale, DevProject[]> = {
  id: idDevProjects,
  en: enDevProjects,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getCaseStudies(locale: Locale): CaseStudy[] {
  return casesByLocale[locale];
}

export function getCaseStudyBySlug(
  slug: string,
  locale: Locale,
): CaseStudy | undefined {
  return casesByLocale[locale].find((caseStudy) => caseStudy.slug === slug);
}

export function getDevProjects(locale: Locale): DevProject[] {
  return devProjectsByLocale[locale];
}

export { devStack };
