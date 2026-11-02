import {
  Server, LayoutTemplate, Layers, Smartphone, ShoppingCart, Globe,
  Share2, Search, Megaphone, Target, Video, ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/lib/i18n";

export type Service   = { icon: LucideIcon; title: string; text: string; href?: string };
export type Blueprint = { badge: string; title: string; audience: string; includes: string[] };
export type Testimonial = { quote: string; name: string; biz: string; result: string };

type HomeCopy = {
  badge: string;
  headingLead: string;
  headingEmphasis: string;
  summary: string;
  ctaPrimary: string;
  ctaSecondary: string;
  proofLabel: string;
  proof: { value: string; label: string }[];
  testimonials: Testimonial[];
  servicesLabel: string;
  servicesTitle: string;
  build: { label: string; items: Service[] };
  grow: { label: string; items: Service[] };
  blueprintsLabel: string;
  blueprintsTitle: string;
  blueprints: Blueprint[];
  workLabel: string;
  workTitle: string;
  caseCta: string;
  devWorkLabel: string;
  processLabel: string;
  processTitle: string;
  process: { num: string; title: string; text: string }[];
  ctaTitle: string;
  ctaText: string;
  nav: { id: string; label: string }[];
};

export const homeCopy: Record<Locale, HomeCopy> = {
  id: {
    badge: "Software Developer & Digital Marketer",
    headingLead: "Bangun produknya. ",
    headingEmphasis: "Datangkan pembelinya.",
    summary: "Satu orang yang bisa mengerjakan website, aplikasi, dan iklan secara utuh — tanpa perlu koordinasi antar vendor yang membuang waktu.",
    ctaPrimary: "Chat WhatsApp",
    ctaSecondary: "Lihat layanan",
    proofLabel: "Hasil yang sudah terbukti",
    proof: [
      { value: "IDR 1 M+", label: "tambahan revenue 1 tahun" },
      { value: "IDR 40 Jt/bln", label: "scale revenue dalam 3 bulan" },
      { value: "3 bisnis", label: "yang sudah berkembang bersama" },
      { value: "End-to-End", label: "dari kode sampai iklan" },
    ],
    testimonials: [
      {
        quote: "Dhoni handle dari bikin website sampai iklan — satu orang yang ngerti dua-duanya. Closing rate naik signifikan setelah funnel-nya dibenerin.",
        name: "Pemilik Santi Mebel Jogja",
        biz: "Retail Furniture",
        result: "+ IDR 1 Miliar revenue dalam 1 tahun",
      },
      {
        quote: "Dari nol sampai ada penjualan pertama dalam 1 bulan. Tracking-nya rapi, jadi saya bisa lihat mana iklan yang beneran jalan.",
        name: "Founder Santi Living",
        biz: "Rental Kasur & Properti",
        result: "IDR 4 Juta revenue bulan pertama",
      },
    ],
    servicesLabel: "Layanan",
    servicesTitle: "Semua yang dibutuhkan bisnis online, tanpa lempar-lemparan vendor.",
    build: {
      label: "Bikin — Website & Aplikasi",
      items: [
        { icon: Server, title: "Backend Engineering", text: "API, database, autentikasi, dan integrasi sistem yang stabil dan aman.", href: "/dev" },
        { icon: LayoutTemplate, title: "Frontend Engineering", text: "Tampilan web yang cepat, responsif, dan enak dipakai di HP maupun desktop.", href: "/fullstack" },
        { icon: Layers, title: "Full-Stack Development", text: "Dari database sampai tampilan — dikerjakan sendiri tanpa gap komunikasi antar tim.", href: "/fullstack" },
        { icon: Smartphone, title: "Aplikasi Bisnis Custom", text: "Dashboard, ERP, sistem sewa/inventori, atau workflow internal yang sesuai kebutuhan." },
        { icon: ShoppingCart, title: "Website Toko Online", text: "Toko online siap jualan lengkap dengan katalog, checkout, dan tracking penjualan." },
        { icon: Globe, title: "Website Portfolio & Company Profile", text: "Website profil bisnis yang meyakinkan, cepat dibuka, dan mudah ditemukan di Google." },
      ],
    },
    grow: {
      label: "Pasarkan — Digital Marketing & Iklan",
      items: [
        { icon: Search, title: "SEO", text: "Optimasi agar website muncul di halaman pertama Google saat orang mencari produk/jasa kamu.", href: "/seo" },
        { icon: Target, title: "Iklan Meta (Facebook & Instagram)", text: "Kampanye FB/IG berbasis data konversi, bukan sekadar boost postingan." },
        { icon: Megaphone, title: "Iklan Google", text: "Tangkap pembeli yang sudah niat beli lewat Google Search dan Performance Max." },
        { icon: Video, title: "Iklan TikTok", text: "Short-form video ads untuk menjangkau audiens baru di TikTok." },
        { icon: ShoppingBag, title: "Iklan Shopee", text: "Optimasi iklan dan listing toko Shopee agar produk lebih mudah ditemukan." },
        { icon: Share2, title: "Aktivasi Sosial Media", text: "Setup akun, strategi konten, dan ritme posting yang konsisten untuk membangun audiens." },
      ],
    },
    blueprintsLabel: "Paket Solusi",
    blueprintsTitle: "Bingung mulai dari mana? Pilih yang paling mirip kebutuhan kamu.",
    blueprints: [
      {
        badge: "Website + Iklan",
        title: "Toko Online & Mesin Penjualan",
        audience: "Untuk produk fisik, brand retail, dan seller marketplace",
        includes: ["Website toko online", "Iklan Meta, Google, TikTok, atau Shopee", "Setup tracking & analytics"],
      },
      {
        badge: "Website + SEO",
        title: "Website Bisnis + Dominasi Google",
        audience: "Untuk bisnis jasa, B2B, klinik, dan profesional",
        includes: ["Website company profile yang meyakinkan", "SEO teknikal dan lokal", "Google Ads untuk hasil cepat"],
      },
      {
        badge: "Engineering",
        title: "Aplikasi & Sistem Internal",
        audience: "Untuk bisnis yang operasionalnya sudah kompleks",
        includes: ["Backend + database + autentikasi", "Dashboard dan antarmuka tim", "Integrasi dan deployment"],
      },
      {
        badge: "Full Marketing",
        title: "Partner Marketing Bulanan",
        audience: "Untuk bisnis yang produknya sudah siap dipasarkan",
        includes: ["Manajemen iklan multi-channel", "SEO dan konten rutin", "Laporan dan optimasi bulanan"],
      },
    ],
    workLabel: "Hasil Kerja",
    workTitle: "Case study dari bisnis yang sudah berkembang.",
    caseCta: "Baca selengkapnya",
    devWorkLabel: "Proyek Engineering",
    processLabel: "Cara Kerja",
    processTitle: "Tiga langkah dari obrolan sampai hasil nyata.",
    process: [
      { num: "01", title: "Diskusi & Audit", text: "Kita ngobrol dulu — kondisi bisnis sekarang, targetnya apa, kendalanya apa. Baru dari sini saya usulkan solusi yang paling masuk akal, bukan paket yang dipaksakan." },
      { num: "02", title: "Bangun & Aktifkan", text: "Website/aplikasi dibangun, iklan dijalankan, SEO dioptimasi — semuanya dikerjakan dengan tracking yang bisa kamu pantau." },
      { num: "03", title: "Ukur & Tumbuhkan", text: "Data konversi dibaca setiap minggu. Yang jalan ditingkatkan, yang tidak jalan diperbaiki. Laporan jujur, bukan angka-angka yang membingungkan." },
    ],
    ctaTitle: "Ada proyek atau bisnis yang mau kamu kembangkan?",
    ctaText: "Ceritakan singkat lewat WhatsApp. Saya balas dengan langkah konkret, bukan penawaran template.",
    nav: [
      { id: "layanan", label: "/layanan" },
      { id: "paket", label: "/paket" },
      { id: "karya", label: "/karya" },
    ],
  },

  en: {
    badge: "Software Developer & Digital Marketer",
    headingLead: "Build the product. ",
    headingEmphasis: "Bring the buyers.",
    summary: "One person who handles websites, apps, and ads end-to-end — no vendor coordination overhead, no miscommunication.",
    ctaPrimary: "Chat on WhatsApp",
    ctaSecondary: "See services",
    proofLabel: "Proven results",
    proof: [
      { value: "IDR 1B+", label: "added revenue in 1 year" },
      { value: "IDR 40M/mo", label: "scaled revenue in 3 months" },
      { value: "3 businesses", label: "grown together" },
      { value: "End-to-End", label: "from code to ads" },
    ],
    testimonials: [
      {
        quote: "Dhoni handled everything from building the website to running ads — one person who understands both sides. Closing rate increased significantly after the funnel was fixed.",
        name: "Owner, Santi Mebel Jogja",
        biz: "Furniture Retail",
        result: "+ IDR 1 Billion revenue in 1 year",
      },
      {
        quote: "From zero to first sales within 1 month. The tracking was clean, so I could actually see which ads were working.",
        name: "Founder, Santi Living",
        biz: "Mattress Rental & Property",
        result: "IDR 4 Million revenue in month one",
      },
    ],
    servicesLabel: "Services",
    servicesTitle: "Everything an online business needs, without the vendor juggling.",
    build: {
      label: "Build — Websites & Apps",
      items: [
        { icon: Server, title: "Backend Engineering", text: "APIs, databases, authentication, and system integrations built to be stable and secure.", href: "/dev" },
        { icon: LayoutTemplate, title: "Frontend Engineering", text: "Fast, responsive interfaces that look and work great on mobile and desktop.", href: "/fullstack" },
        { icon: Layers, title: "Full-Stack Development", text: "From database to UI — done by one person with no communication gaps between teams.", href: "/fullstack" },
        { icon: Smartphone, title: "Custom Business Apps", text: "Dashboards, ERPs, rental/inventory systems, or internal workflow tools built for your needs." },
        { icon: ShoppingCart, title: "E-Commerce Websites", text: "Online stores ready to sell with catalog, checkout, and purchase tracking built in." },
        { icon: Globe, title: "Portfolio & Company Sites", text: "Professional websites that load fast, build trust, and are easy to find on Google." },
      ],
    },
    grow: {
      label: "Grow — Digital Marketing & Ads",
      items: [
        { icon: Search, title: "SEO", text: "Get your website on the first page of Google when people search for your product or service.", href: "/seo" },
        { icon: Target, title: "Meta Ads (Facebook & Instagram)", text: "Conversion-driven FB/IG campaigns built on real data, not just boosted posts." },
        { icon: Megaphone, title: "Google Ads", text: "Capture high-intent buyers on Google Search and Performance Max." },
        { icon: Video, title: "TikTok Ads", text: "Short-form video ads to reach new audiences on TikTok." },
        { icon: ShoppingBag, title: "Shopee Ads", text: "Optimize your Shopee ads and listings to get found by more buyers." },
        { icon: Share2, title: "Social Media Activation", text: "Account setup, content strategy, and a consistent posting rhythm to build your audience." },
      ],
    },
    blueprintsLabel: "Solution Packages",
    blueprintsTitle: "Not sure where to start? Pick the one closest to your situation.",
    blueprints: [
      {
        badge: "Website + Ads",
        title: "Online Store & Sales Engine",
        audience: "For physical products, retail brands, and marketplace sellers",
        includes: ["E-commerce website", "Meta, Google, TikTok, or Shopee Ads", "Tracking & analytics setup"],
      },
      {
        badge: "Website + SEO",
        title: "Business Site + Google Visibility",
        audience: "For service businesses, B2B, clinics, and professionals",
        includes: ["Credible company profile website", "Technical and local SEO", "Google Ads for quick wins"],
      },
      {
        badge: "Engineering",
        title: "Custom Apps & Internal Systems",
        audience: "For businesses outgrowing spreadsheets and manual ops",
        includes: ["Backend + database + authentication", "Team dashboards and interfaces", "Integrations and deployment"],
      },
      {
        badge: "Full Marketing",
        title: "Monthly Marketing Partner",
        audience: "For businesses ready to scale what they already have",
        includes: ["Multi-channel ad management", "SEO and content on schedule", "Honest reporting and optimisation"],
      },
    ],
    workLabel: "Work",
    workTitle: "Case studies from businesses that grew.",
    caseCta: "Read full story",
    devWorkLabel: "Engineering Projects",
    processLabel: "How It Works",
    processTitle: "Three steps from first conversation to real results.",
    process: [
      { num: "01", title: "Discuss & Audit", text: "We talk first — your current situation, your goal, what's in the way. From there I propose what actually makes sense for you, not a one-size package." },
      { num: "02", title: "Build & Activate", text: "Website or app gets built, ads go live, SEO gets optimised — all with tracking you can follow in real time." },
      { num: "03", title: "Measure & Grow", text: "Conversion data gets reviewed every week. What's working gets scaled, what isn't gets fixed. Honest reports, no vanity metrics." },
    ],
    ctaTitle: "Got a project or business you want to grow?",
    ctaText: "Tell me briefly on WhatsApp. I'll reply with concrete next steps, not a templated proposal.",
    nav: [
      { id: "layanan", label: "/services" },
      { id: "paket", label: "/packages" },
      { id: "karya", label: "/work" },
    ],
  },
};

export const STACK = {
  build: ["TypeScript", "Next.js / React", "Node.js", "tRPC", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "Docker & CI/CD"],
  grow: ["Meta Ads (FB & IG)", "Google Ads (Search & PMax)", "TikTok Ads", "Shopee Ads", "Technical & Local SEO", "Social Media", "GA4 & GTM", "Meta Pixel & CAPI", "Microsoft Clarity & Looker Studio"],
};
