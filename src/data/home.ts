import {
  Server,
  LayoutTemplate,
  Layers,
  Smartphone,
  ShoppingCart,
  Globe,
  Share2,
  Search,
  Megaphone,
  Target,
  Video,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/lib/i18n";

export type Service = {
  code: string;
  icon: LucideIcon;
  title: string;
  text: string;
  tags: string[];
  href?: string;
};

export type Path = {
  code: string;
  badge: string;
  title: string;
  audience: string;
  text: string;
  includes: string[];
};

type HomeCopy = {
  badge: string;
  availability: string;
  headingLead: string;
  headingEmphasis: string;
  headingTail: string;
  summary: string;
  matrixTitle: string;
  matrixBuildLabel: string;
  matrixBuildItems: string[];
  matrixGrowLabel: string;
  matrixGrowItems: string[];
  ctaServices: string;
  profileRole: string;
  profileSub: string;
  stats: { value: string; label: string }[];
  servicesEyebrow: string;
  servicesTitle: string;
  servicesSubtitle: string;
  build: {
    tag: string;
    title: string;
    subtitle: string;
    exploreDev: string;
    exploreFullstack: string;
    items: Service[];
  };
  grow: {
    tag: string;
    title: string;
    subtitle: string;
    exploreSeo: string;
    items: Service[];
  };
  pathsEyebrow: string;
  pathsTitle: string;
  pathsSubtitle: string;
  paths: Path[];
  workEyebrow: string;
  workTitle: string;
  workSubtitle: string;
  caseCta: string;
  devWorkTag: string;
  devWorkTitle: string;
  processEyebrow: string;
  processTitle: string;
  process: { step: string; phase: string; title: string; text: string }[];
  stackEyebrow: string;
  stackTitle: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
  nav: { id: string; label: string }[];
};

export const STACK = {
  build: [
    "TypeScript",
    "Next.js (App Router)",
    "React 19",
    "Node.js",
    "tRPC",
    "Prisma ORM",
    "PostgreSQL",
    "Tailwind CSS",
    "REST API & Webhooks",
    "Docker & CI/CD",
  ],
  grow: [
    "Meta Ads (FB & IG)",
    "Google Ads (Search & PMax)",
    "TikTok Ads & Spark Ads",
    "Shopee Ads",
    "Technical & Local SEO",
    "Social Media Activation",
    "GA4 & Google Tag Manager",
    "Meta Pixel & Conversions API",
    "Google Search Console",
    "Microsoft Clarity & Looker Studio",
  ],
};

export const homeCopy: Record<Locale, HomeCopy> = {
  id: {
    badge: "Full-Stack Software Engineer × Performance Marketer",
    availability: "Tersedia untuk proyek baru · Yogyakarta, ID",
    headingLead: "Bangun produknya. ",
    headingEmphasis: "Datangkan pembelinya.",
    headingTail: " Satu eksekutor dari kode sampai iklan.",
    summary:
      "Mayoritas developer tidak mengerti cara mendatangkan penjualan, dan mayoritas marketer tidak bisa menyentuh kode maupun database. Saya mengerjakan keduanya secara utuh: merancang aplikasi & website yang cepat, lalu memacu pertumbuhannya lewat SEO, sosial media, dan iklan multi-channel.",
    matrixTitle: "Cakupan Keahlian End-to-End (12 Spesialisasi)",
    matrixBuildLabel: "01 · ENGINEERING",
    matrixBuildItems: [
      "Backend Engineering",
      "Frontend Engineering",
      "Full-Stack Dev",
      "Pembuatan Aplikasi",
      "Website E-Commerce",
      "Website Portfolio & Bisnis",
    ],
    matrixGrowLabel: "02 · DIGITAL MARKETING",
    matrixGrowItems: [
      "Technical & Local SEO",
      "Iklan Meta (FB/IG)",
      "Iklan Google",
      "Iklan TikTok",
      "Iklan Shopee",
      "Aktivasi Sosial Media",
    ],
    ctaServices: "Jelajahi 12 Keahlian",
    profileRole: "Software Engineer & Growth Operator",
    profileSub: "Arsitektur Sistem · Web & App · SEO · Paid Ads",
    stats: [
      { value: "IDR 1 M+", label: "Tambahan revenue 1 tahun (Santi Mebel)" },
      { value: "IDR 40 Jt/bln", label: "Scale revenue 3 bulan (Kita Jago Digital)" },
      { value: "12 Keahlian", label: "6 Engineering + 6 Digital Marketing" },
      { value: "End-to-End", label: "Tanpa lempar tanggung jawab antar vendor" },
    ],
    servicesEyebrow: "[ 01 // ARSITEKTUR 12 KEAHLIAN ]",
    servicesTitle: "Dua mesin utama dalam satu kendali eksekusi.",
    servicesSubtitle:
      "Tidak perlu lagi mengoordinasikan vendor website, agensi iklan, dan tim SEO yang berjalan sendiri-sendiri. Pilih satu layanan spesifik atau gabungkan sesuai fase bisnis Anda.",
    build: {
      tag: "ENGINE 01 // SOFTWARE DEVELOPMENT",
      title: "Engineering, Aplikasi & Pembuatan Website",
      subtitle:
        "Sistem yang dirancang rapi dari skema database dan kontrak API hingga antarmuka yang cepat, responsif, dan siap dikonversi.",
      exploreDev: "Detail Backend (/dev)",
      exploreFullstack: "Detail Full-Stack (/fullstack)",
      items: [
        {
          code: "DEV-01",
          icon: Server,
          title: "Backend Engineering",
          text: "Perancangan arsitektur server, REST/tRPC API yang type-safe, pemodelan database, autentikasi, isolasi multi-tenant, dan integrasi webhook/pembayaran.",
          tags: ["Node.js & TypeScript", "PostgreSQL & Prisma", "tRPC / REST API"],
          href: "/dev",
        },
        {
          code: "DEV-02",
          icon: LayoutTemplate,
          title: "Frontend Engineering",
          text: "Implementasi antarmuka modern yang cepat, presisi di mobile maupun desktop, aksesibel, dan dioptimalkan untuk Core Web Vitals serta konversi.",
          tags: ["React 19 & Next.js", "Tailwind CSS", "Responsive UI/UX"],
          href: "/fullstack",
        },
        {
          code: "DEV-03",
          icon: Layers,
          title: "Full-Stack Development",
          text: "Eksekusi menyeluruh dari nol sampai tayang di production: database, backend logic, frontend UI, hingga automated deployment.",
          tags: ["End-to-End Delivery", "Monorepo Architecture", "CI/CD & Cloud"],
          href: "/fullstack",
        },
        {
          code: "DEV-04",
          icon: Smartphone,
          title: "Pembuatan Aplikasi Bisnis",
          text: "Pengembangan aplikasi web custom dan sistem operasional internal seperti ERP, CRM, manajemen inventori/sewa, dan otomasi workflow tim.",
          tags: ["Custom Web App", "ERP & Dashboard", "Otomasi Operasional"],
        },
        {
          code: "DEV-05",
          icon: ShoppingCart,
          title: "Pembuatan Website E-Commerce",
          text: "Toko online independen dengan katalog produk, manajemen varian, alur checkout/WhatsApp commerce, payment gateway, dan tracking pembelian.",
          tags: ["Online Storefront", "Checkout & Payment", "Pixel + CAPI Ready"],
        },
        {
          code: "DEV-06",
          icon: Globe,
          title: "Website Portfolio & Company Profile",
          text: "Website representasi bisnis atau profesional yang menampilkan kredibilitas, cepat dibuka di jaringan seluler, dan terstruktur untuk mesin pencari.",
          tags: ["Company Profile", "Personal Branding", "High-Conversion LP"],
        },
      ],
    },
    grow: {
      tag: "ENGINE 02 // DIGITAL MARKETING & REVENUE",
      title: "Full Digital Marketing, SEO & Multi-Channel Ads",
      subtitle:
        "Strategi akuisisi pelanggan lintas platform dengan tracking yang bisa diaudit, sehingga setiap anggaran iklan dan konten terukur hasilnya.",
      exploreSeo: "Detail Layanan SEO (/seo)",
      items: [
        {
          code: "MKT-01",
          icon: Search,
          title: "Technical, On-Page & Local SEO",
          text: "Optimasi menyeluruh agar website dan Google Business Profile mendominasi halaman pertama saat calon pembeli mencari produk/jasa Anda.",
          tags: ["Technical Audit & Schema", "Keyword Niat Beli", "Local SEO & Maps"],
          href: "/seo",
        },
        {
          code: "MKT-02",
          icon: Target,
          title: "Iklan Meta (Facebook & Instagram)",
          text: "Arsitektur kampanye Meta Ads berbasis objektif bisnis, pengujian sudut pandang kreatif, serta setup Meta Pixel dan Conversions API (CAPI).",
          tags: ["FB & IG Ads", "Meta Pixel + CAPI", "Creative Testing Loop"],
        },
        {
          code: "MKT-03",
          icon: Megaphone,
          title: "Iklan Google (Search & PMax)",
          text: "Menangkap permintaan siap beli di Google Search dan jaringan Google dengan struktur keyword ketat, negative list, dan optimasi konversi.",
          tags: ["High-Intent Search", "Performance Max", "Optimasi CPA / ROAS"],
        },
        {
          code: "MKT-04",
          icon: Video,
          title: "Iklan TikTok (TikTok Ads)",
          text: "Akuisisi trafik dan penjualan lewat short-form video ads, Spark Ads, dan struktur pengujian hook 3 detik pertama untuk membangkitkan demand.",
          tags: ["TikTok Shop & Web Ads", "Spark Ads", "Video Hook Testing"],
        },
        {
          code: "MKT-05",
          icon: ShoppingBag,
          title: "Iklan Shopee (Shopee Ads)",
          text: "Optimasi iklan pencarian dan produk serupa di Shopee, perbaikan konversi halaman produk, serta pengelolaan ROAS agar toko tumbuh profitabel.",
          tags: ["Iklan Pencarian Shopee", "Optimasi Konversi Toko", "Marketplace ROAS"],
        },
        {
          code: "MKT-06",
          icon: Share2,
          title: "Aktivasi Sosial Media",
          text: "Penataan profil brand, perancangan pilar konten, ritme produksi dan distribusi organik untuk membangun kepercayaan dan audiens aktif.",
          tags: ["Content Strategy", "Kalender Editorial", "Brand Activation"],
        },
      ],
    },
    pathsEyebrow: "[ 02 // PAKET SOLUSI TERPADU ]",
    pathsTitle: "Bingung mulai dari mana? Pilih skenario yang paling sesuai.",
    pathsSubtitle:
      "Anda tidak harus memilih satu per satu dari 12 keahlian di atas. Berikut 4 kombinasi yang paling sering digunakan klien:",
    paths: [
      {
        code: "PAKET 01",
        badge: "BUILD + GROW · E-COMMERCE",
        title: "Toko Online & Mesin Penjualan Multi-Channel",
        audience: "Untuk brand retail, produk fisik, D2C, dan seller marketplace",
        text: "Bangun website toko online sendiri sekaligus menggerakkan penjualan di web maupun marketplace lewat iklan terukur.",
        includes: [
          "Pembuatan website e-commerce + katalog & alur order",
          "Setup tracking GA4, GTM, Meta Pixel & Conversions API",
          "Eksekusi Meta Ads, Google Ads, TikTok Ads, dan Shopee Ads",
        ],
      },
      {
        code: "PAKET 02",
        badge: "BUILD + GROW · AUTHORITY & SEO",
        title: "Website Bisnis / Portfolio + Dominasi Google",
        audience: "Untuk bisnis jasa, B2B, klinik, properti, & profesional",
        text: "Miliki website yang meyakinkan sekaligus mudah ditemukan calon klien saat mereka mencari layanan Anda di Google.",
        includes: [
          "Website company profile / portfolio cepat & mobile-first",
          "Riset keyword, arsitektur halaman, & Technical/Local SEO",
          "Google Search Ads untuk hasil instan sambil menunggu SEO naik",
        ],
      },
      {
        code: "PAKET 03",
        badge: "PURE ENGINEERING · CUSTOM SYSTEM",
        title: "Pembuatan Aplikasi Web & Sistem Internal",
        audience: "Untuk bisnis yang operasionalnya mulai kompleks & butuh sistem",
        text: "Ubah proses manual di spreadsheet dan chat menjadi aplikasi web terpusat yang rapi, aman, dan mudah dipakai tim.",
        includes: [
          "Arsitektur Backend (API, database PostgreSQL, autentikasi)",
          "Antarmuka Frontend responsif & dashboard operasional",
          "Integrasi pihak ketiga, deployment server, & dokumentasi",
        ],
      },
      {
        code: "PAKET 04",
        badge: "FULL DIGITAL MARKETING · GROWTH PARTNER",
        title: "Eksekusi Digital Marketing & Iklan Bulanan",
        audience: "Untuk bisnis yang produk/websitenya sudah siap dipasarkan",
        text: "Satu partner teknis untuk mengelola seluruh kanal akuisisi, optimasi konversi landing page, dan pelaporan performa.",
        includes: [
          "Manajemen Meta Ads, Google Ads, TikTok Ads, atau Shopee Ads",
          "Optimasi SEO berkelanjutan & aktivasi konten sosial media",
          "Audit funnel, perbaikan landing page, & dashboard evaluasi",
        ],
      },
    ],
    workEyebrow: "[ 03 // REKAM JEJAK & HASIL NYATA ]",
    workTitle: "Teruji di pertumbuhan omzet maupun arsitektur kode.",
    workSubtitle:
      "Studi kasus nyata dari bisnis yang saya bangun dan tumbuhkan—mulai dari skala akuisisi berbayar hingga platform software multi-tenant.",
    caseCta: "Baca studi kasus lengkap",
    devWorkTag: "SHIPPED SOFTWARE & AUTOMATION",
    devWorkTitle: "Proyek Engineering & Sistem yang Dibangun",
    processEyebrow: "[ 04 // CARA KERJA ]",
    processTitle: "Alur kerja terstruktur dari hari pertama.",
    process: [
      {
        step: "01",
        phase: "DIAGNOSIS",
        title: "Audit & Peta Strategi",
        text: "Membedah kondisi bisnis, produk, kompetitor, dan bottleneck saat ini sebelum menulis satu baris kode atau membakar budget iklan.",
      },
      {
        step: "02",
        phase: "ARCHITECTURE",
        title: "Build Produk & Tracking",
        text: "Membangun website/aplikasi dengan standar engineering bersih sekaligus memasang fondasi measurement (Pixel, CAPI, GA4).",
      },
      {
        step: "03",
        phase: "ACTIVATION",
        title: "Launch, SEO & Kampanye",
        text: "Merilis sistem ke production dan mengaktifkan mesin akuisisi (SEO, sosial media, serta iklan Meta/Google/TikTok/Shopee).",
      },
      {
        step: "04",
        phase: "ITERATION",
        title: "Optimasi & Scale Up",
        text: "Membaca data konversi aktual, memperbaiki titik bocor di funnel, dan melipatgandakan kanal yang terbukti menghasilkan profit.",
      },
    ],
    stackEyebrow: "[ 05 // TEKNOLOGI & PLATFORM ]",
    stackTitle: "Toolkit yang saya gunakan sehari-hari.",
    ctaEyebrow: "SIAP MULAI?",
    ctaTitle: "Ceritakan bisnis atau proyek yang ingin Anda bangun.",
    ctaText:
      "Tidak perlu brief puluhan halaman. Kirim pesan singkat lewat WhatsApp mengenai kondisi saat ini dan target Anda—saya bantu petakan solusi teknis dan marketing paling masuk akal.",
    nav: [
      { id: "layanan", label: "/keahlian" },
      { id: "paket", label: "/paket" },
      { id: "karya", label: "/karya" },
      { id: "cara-kerja", label: "/alur" },
    ],
  },
  en: {
    badge: "Full-Stack Software Engineer × Performance Marketer",
    availability: "Available for new projects · Yogyakarta, ID",
    headingLead: "Build the product. ",
    headingEmphasis: "Bring the buyers.",
    headingTail: " One operator from code to ads.",
    summary:
      "Most developers do not understand customer acquisition, and most marketers cannot touch backend code or databases. I handle both end-to-end: engineering fast web apps and stores, then driving revenue through SEO, social media, and multi-channel paid ads.",
    matrixTitle: "End-to-End Capability Matrix (12 Specializations)",
    matrixBuildLabel: "01 · ENGINEERING",
    matrixBuildItems: [
      "Backend Engineering",
      "Frontend Engineering",
      "Full-Stack Dev",
      "Custom Web Apps",
      "E-Commerce Sites",
      "Portfolio & Company Sites",
    ],
    matrixGrowLabel: "02 · DIGITAL MARKETING",
    matrixGrowItems: [
      "Technical & Local SEO",
      "Meta Ads (FB/IG)",
      "Google Ads",
      "TikTok Ads",
      "Shopee Ads",
      "Social Media Activation",
    ],
    ctaServices: "Explore 12 Capabilities",
    profileRole: "Software Engineer & Growth Operator",
    profileSub: "System Architecture · Web & Apps · SEO · Paid Ads",
    stats: [
      { value: "IDR 1B+", label: "Added revenue in 1 year (Santi Mebel)" },
      { value: "IDR 40M/mo", label: "Scaled revenue in 3 months (Kita Jago Digital)" },
      { value: "12 Skills", label: "6 Engineering + 6 Digital Marketing" },
      { value: "End-to-End", label: "Zero handoff friction between vendors" },
    ],
    servicesEyebrow: "[ 01 // 12-CAPABILITY ARCHITECTURE ]",
    servicesTitle: "Two core engines under one roof.",
    servicesSubtitle:
      "Stop juggling disconnected web agencies, ad buyers, and SEO freelancers. Pick a focused capability or combine both engines for your business stage.",
    build: {
      tag: "ENGINE 01 // SOFTWARE DEVELOPMENT",
      title: "Engineering, Custom Apps & Web Development",
      subtitle:
        "Cleanly architected systems from database schemas and typed APIs to fast, conversion-ready interfaces.",
      exploreDev: "Backend Deep-Dive (/dev)",
      exploreFullstack: "Full-Stack Deep-Dive (/fullstack)",
      items: [
        {
          code: "DEV-01",
          icon: Server,
          title: "Backend Engineering",
          text: "Server architecture, type-safe REST/tRPC APIs, relational data modeling, authentication, strict multi-tenancy, and payment/webhook integrations.",
          tags: ["Node.js & TypeScript", "PostgreSQL & Prisma", "tRPC / REST API"],
          href: "/dev",
        },
        {
          code: "DEV-02",
          icon: LayoutTemplate,
          title: "Frontend Engineering",
          text: "Fast, responsive, accessible interfaces built with modern React and Next.js, tuned for Core Web Vitals and conversion clarity.",
          tags: ["React 19 & Next.js", "Tailwind CSS", "Responsive UI/UX"],
          href: "/fullstack",
        },
        {
          code: "DEV-03",
          icon: Layers,
          title: "Full-Stack Development",
          text: "Complete product delivery from database schema and backend services to polished UI and automated cloud deployment.",
          tags: ["End-to-End Delivery", "Monorepo Architecture", "CI/CD & Cloud"],
          href: "/fullstack",
        },
        {
          code: "DEV-04",
          icon: Smartphone,
          title: "Custom App Development",
          text: "Bespoke web applications and internal operational tools including ERP, CRM, rental/inventory systems, and workflow automation.",
          tags: ["Custom Web App", "ERP & Dashboards", "Process Automation"],
        },
        {
          code: "DEV-05",
          icon: ShoppingCart,
          title: "E-Commerce Website Development",
          text: "High-converting online stores with product catalogs, checkout or WhatsApp commerce flows, payment gateways, and conversion tracking.",
          tags: ["Online Storefront", "Checkout & Payments", "Pixel + CAPI Ready"],
        },
        {
          code: "DEV-06",
          icon: Globe,
          title: "Portfolio & Company Websites",
          text: "Credible, fast-loading brand and personal websites engineered to rank on Google and turn visitors into inquiries.",
          tags: ["Company Profile", "Personal Branding", "High-Conversion LP"],
        },
      ],
    },
    grow: {
      tag: "ENGINE 02 // DIGITAL MARKETING & REVENUE",
      title: "Full Digital Marketing, SEO & Multi-Channel Ads",
      subtitle:
        "Cross-channel customer acquisition backed by auditable tracking, so every ad rupiah and content piece is accountable.",
      exploreSeo: "SEO Deep-Dive (/seo)",
      items: [
        {
          code: "MKT-01",
          icon: Search,
          title: "Technical, On-Page & Local SEO",
          text: "End-to-end search optimization so your website and Google Business Profile rank when high-intent buyers search for your solution.",
          tags: ["Technical Audit & Schema", "Buyer-Intent Keywords", "Local SEO & Maps"],
          href: "/seo",
        },
        {
          code: "MKT-02",
          icon: Target,
          title: "Meta Ads (Facebook & Instagram)",
          text: "Objective-driven campaign architecture, structured creative testing loops, and full Meta Pixel + Conversions API (CAPI) measurement.",
          tags: ["FB & IG Ads", "Meta Pixel + CAPI", "Creative Testing Loop"],
        },
        {
          code: "MKT-03",
          icon: Megaphone,
          title: "Google Ads (Search & PMax)",
          text: "Capture high-intent search demand on Google with tight keyword structures, negative lists, and landing page alignment.",
          tags: ["High-Intent Search", "Performance Max", "CPA / ROAS Control"],
        },
        {
          code: "MKT-04",
          icon: Video,
          title: "TikTok Ads",
          text: "Drive fresh demand and sales through short-form video ads, Spark Ads, and systematic 3-second hook experimentation.",
          tags: ["TikTok Shop & Web Ads", "Spark Ads", "Video Hook Testing"],
        },
        {
          code: "MKT-05",
          icon: ShoppingBag,
          title: "Shopee Ads",
          text: "Marketplace search and discovery ad optimization, product listing conversion tuning, and profitable store scaling.",
          tags: ["Shopee Search Ads", "Store Conversion", "Marketplace ROAS"],
        },
        {
          code: "MKT-06",
          icon: Share2,
          title: "Social Media Activation",
          text: "Brand positioning, content pillars, editorial calendars, and consistent organic distribution to build audience trust.",
          tags: ["Content Strategy", "Editorial Calendar", "Brand Activation"],
        },
      ],
    },
    pathsEyebrow: "[ 02 // INTEGRATED SOLUTION BLUEPRINTS ]",
    pathsTitle: "Not sure where to start? Pick the scenario that fits your stage.",
    pathsSubtitle:
      "You do not need to piece together 12 individual skills yourself. Here are the 4 most common engagement models:",
    paths: [
      {
        code: "BLUEPRINT 01",
        badge: "BUILD + GROW · E-COMMERCE",
        title: "Online Store & Multi-Channel Sales Engine",
        audience: "For retail brands, physical products, D2C, and marketplace sellers",
        text: "Launch your own e-commerce storefront while driving measurable sales across web and marketplaces.",
        includes: [
          "Custom e-commerce website + catalog & checkout flow",
          "Full GA4, GTM, Meta Pixel & Conversions API tracking setup",
          "Meta Ads, Google Ads, TikTok Ads, and Shopee Ads execution",
        ],
      },
      {
        code: "BLUEPRINT 02",
        badge: "BUILD + GROW · AUTHORITY & SEO",
        title: "Company / Portfolio Website + Google Search Dominance",
        audience: "For service businesses, B2B, clinics, hospitality, & professionals",
        text: "Get a fast, credible website that ranks on Google when prospects search for your services.",
        includes: [
          "Fast, mobile-first company profile or portfolio website",
          "Keyword research, page architecture, & Technical/Local SEO",
          "Google Search Ads for immediate leads while organic rankings grow",
        ],
      },
      {
        code: "BLUEPRINT 03",
        badge: "PURE ENGINEERING · CUSTOM SYSTEM",
        title: "Custom Web Application & Internal System",
        audience: "For growing businesses replacing manual spreadsheets and chat ops",
        text: "Turn operational bottlenecks into a reliable web application your team actually enjoys using.",
        includes: [
          "Backend architecture (APIs, PostgreSQL database, auth & permissions)",
          "Responsive frontend UI & operational dashboards",
          "Third-party integrations, cloud deployment, & maintainability",
        ],
      },
      {
        code: "BLUEPRINT 04",
        badge: "FULL DIGITAL MARKETING · GROWTH PARTNER",
        title: "Monthly Digital Marketing & Ads Execution",
        audience: "For businesses with an existing product ready to scale revenue",
        text: "One technical growth partner running your paid channels, SEO, and landing page conversion improvements.",
        includes: [
          "Meta Ads, Google Ads, TikTok Ads, or Shopee Ads management",
          "Ongoing SEO optimization & social media content activation",
          "Funnel audits, landing page refinements, & transparent reporting",
        ],
      },
    ],
    workEyebrow: "[ 03 // VERIFIED TRACK RECORD ]",
    workTitle: "Proven in both revenue growth and software architecture.",
    workSubtitle:
      "Selected case studies from businesses I helped scale and software systems I engineered from the ground up.",
    caseCta: "Read full case study",
    devWorkTag: "SHIPPED SOFTWARE & AUTOMATION",
    devWorkTitle: "Engineered Systems & Platforms",
    processEyebrow: "[ 04 // HOW I WORK ]",
    processTitle: "A structured workflow from day one.",
    process: [
      {
        step: "01",
        phase: "DIAGNOSIS",
        title: "Audit & Architecture Map",
        text: "Dissect your business model, current funnel, and technical bottlenecks before writing code or spending ad budget.",
      },
      {
        step: "02",
        phase: "BUILD",
        title: "Product & Tracking Setup",
        text: "Ship clean web/app code alongside verifiable measurement (Pixel, CAPI, GA4, and event attribution).",
      },
      {
        step: "03",
        phase: "LAUNCH",
        title: "Go-Live, SEO & Campaigns",
        text: "Deploy to production and activate acquisition channels across SEO, social media, and Meta/Google/TikTok/Shopee Ads.",
      },
      {
        step: "04",
        phase: "SCALE",
        title: "Optimize & Compound",
        text: "Review real conversion data, patch funnel leaks, and scale the channels that deliver profitable revenue.",
      },
    ],
    stackEyebrow: "[ 05 // TECH & MARKETING STACK ]",
    stackTitle: "Tools and platforms I work with daily.",
    ctaEyebrow: "READY TO BUILD & GROW?",
    ctaTitle: "Tell me what you are building or trying to scale.",
    ctaText:
      "No 20-page brief needed. Send a quick message on WhatsApp with your current situation and goal—I will reply with the most sensible technical and marketing roadmap.",
    nav: [
      { id: "layanan", label: "/capabilities" },
      { id: "paket", label: "/blueprints" },
      { id: "karya", label: "/work" },
      { id: "cara-kerja", label: "/process" },
    ],
  },
};
