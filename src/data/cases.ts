import type { Locale } from "@/lib/i18n";

export type CaseStudy = {
  slug: string;
  title: string;
  shortDescription: string;
  context: string;
  role: string;
  strategy: string[];
  tracking: string[];
  results: string[];
  metrics?: { value: number; prefix?: string; suffix?: string; label: string }[];
};

export const caseStudiesByLocale: Record<Locale, CaseStudy[]> = {
  id: [
    {
      slug: "santi-mebel-jogja",
      title: "Santi Mebel Jogja - Paid Acquisition Growth",
      shortDescription:
        "Bisnis retail furniture lokal dengan fokus membangun paid acquisition yang stabil dan terukur lintas Meta dan Google.",
      context:
        "Bisnis retail furniture lokal dengan penjualan offline dan online, namun channel digital belum dimaksimalkan secara sistematis.",
      role: "Performance marketing lead untuk merancang acquisition system, tracking conversion, dan funnel optimization.",
      strategy: [
        "Meta Ads untuk demand generation",
        "Google Ads untuk high-intent search traffic",
        "Landing page optimization untuk meningkatkan intent-to-chat",
        "WhatsApp-based closing process dengan alur handoff yang lebih jelas",
        "Struktur campaign berbasis objective, bukan sekadar boosting",
      ],
      tracking: [
        "Meta Pixel conversion tracking",
        "Google Analytics event tracking",
        "Tracking funnel dari ad click -> landing page -> WhatsApp lead -> purchase",
        "Behavior analysis dengan Microsoft Clarity",
        "Attribution review untuk memastikan source conversion lebih akurat",
      ],
      results: [
        "~IDR 1 miliar tambahan revenue dalam 1 tahun",
        "Paid acquisition menjadi channel akuisisi konsisten",
        "Funnel visibility meningkat lewat tracking detail",
      ],
      metrics: [
        { prefix: "IDR ", value: 1, suffix: " B+", label: "Tambahan Revenue" },
        { value: 12, suffix: " Bln", label: "Konsistensi Channel" },
      ],
    },
    {
      slug: "santi-living",
      title: "Santi Living - Growth from Zero",
      shortDescription: "Bisnis sewa kasur yang menargetkan kebutuhan akomodasi sementara. Growth dari 0.",
      context: "Bisnis sewa kasur baru yang benar-benar dimulai dari nol untuk kebutuhan akomodasi sementara.",
      role: "Founder yang menangani growth strategy, marketing execution, dan system development.",
      strategy: [
        "Meta Ads sebagai channel pertama untuk fastest demand validation",
        "Direct-response landing page untuk mempercepat konversi ke chat",
        "Funnel Ads -> Landing Page -> WhatsApp -> Closing",
        "Retention loop awal untuk mendorong repeat customer",
      ],
      tracking: [
        "Meta Pixel",
        "Google Analytics",
        "Microsoft Clarity behavior tracking",
        "Funnel attribution di tahapan lead dan purchase",
        "Monitoring harian signal PMF dari repeat order dan referral",
      ],
      results: [
        "0 -> IDR 4 juta revenue di bulan pertama",
        "14 repeat customers di fase awal",
        "Membuktikan validasi demand awal bisnis melalui repeat order",
      ],
      metrics: [
        { prefix: "IDR ", value: 4, suffix: " Jt", label: "Rev Bulan 1" },
        { value: 14, label: "Repeat Customers" },
      ],
    },
    {
      slug: "kita-jago-digital",
      title: "PT Kita Jago Digital - Funnel System",
      shortDescription:
        "Bisnis consumer products online dengan beberapa produk kesehatan. Fokus pada pembangunan funnel acquisition hingga retention yang terukur.",
      context:
        "Bisnis consumer products online dengan beberapa produk kesehatan, tetapi alur marketing dan operasional belum terstruktur rapi.",
      role: "Head of Operations yang merancang sistem marketing dan handoff funnel.",
      strategy: [
        "Multi-platform paid ads",
        "Landing page -> WhatsApp acquisition funnel dengan handoff CS",
        "CRM retention workflow",
        "Perapihan funnel structure dari acquisition sampai retention",
        "Penyusunan SOP lintas marketing, CS, dan operasional",
      ],
      tracking: [
        "Meta Ads conversion tracking",
        "Funnel-level measurement untuk acquisition dan retention",
        "Dashboard internal untuk monitoring performa",
        "Tracking handoff bottleneck dari landing page -> CS -> closing",
      ],
      results: [
        "Scale revenue dari 0 -> IDR 40 juta/bulan dalam 3 bulan",
        "SOP terstruktur untuk tim marketing, CS acquisition, dan retention",
        "Monitoring performa tim lebih konsisten melalui dashboard internal",
      ],
      metrics: [
        { prefix: "IDR ", value: 40, suffix: " Jt/bln", label: "Scale Revenue" },
        { value: 3, suffix: " Bln", label: "Waktu Pencapaian" },
      ],
    },
  ],
  en: [
    {
      slug: "santi-mebel-jogja",
      title: "Santi Mebel Jogja - Paid Acquisition Growth",
      shortDescription:
        "A local furniture retailer focused on building stable, measurable paid acquisition across Meta and Google.",
      context:
        "A local furniture business with offline and online sales where digital channels had not yet been operated as a clear system.",
      role: "Performance marketing lead for acquisition system design, conversion tracking, and funnel optimization.",
      strategy: [
        "Meta Ads for demand generation",
        "Google Ads for high-intent search traffic",
        "Landing page optimization to increase intent-to-chat",
        "WhatsApp-based closing process with a clearer handoff flow",
        "Campaign structure based on objectives, not just boosted posts",
      ],
      tracking: [
        "Meta Pixel conversion tracking",
        "Google Analytics event tracking",
        "Funnel tracking from ad click -> landing page -> WhatsApp lead -> purchase",
        "Behavior analysis with Microsoft Clarity",
        "Attribution review to improve source-of-conversion accuracy",
      ],
      results: [
        "~IDR 1 billion additional revenue in 1 year",
        "Paid acquisition became a consistent acquisition channel",
        "Funnel visibility improved through detailed tracking",
      ],
      metrics: [
        { prefix: "IDR ", value: 1, suffix: " B+", label: "Added Revenue" },
        { value: 12, suffix: " Mo", label: "Channel Consistency" },
      ],
    },
    {
      slug: "santi-living",
      title: "Santi Living - Growth from Zero",
      shortDescription: "A mattress rental business serving temporary accommodation needs, grown from zero.",
      context: "A new mattress rental business started from scratch for temporary accommodation demand.",
      role: "Founder handling growth strategy, marketing execution, and system development.",
      strategy: [
        "Meta Ads as the first channel for fast demand validation",
        "Direct-response landing page to speed up conversion to chat",
        "Funnel Ads -> Landing Page -> WhatsApp -> Closing",
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
        "An online consumer products business with several health products, focused on measurable acquisition to retention funnels.",
      context:
        "An online consumer products business with several health products where marketing and operational flows needed clearer structure.",
      role: "Head of Operations designing the marketing system and funnel handoff process.",
      strategy: [
        "Multi-platform paid ads",
        "Landing page -> WhatsApp acquisition funnel with CS handoff",
        "CRM retention workflow",
        "Funnel structure cleanup from acquisition to retention",
        "SOP design across marketing, acquisition CS, and operations",
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
        "More consistent team performance monitoring through internal dashboards",
      ],
      metrics: [
        { prefix: "IDR ", value: 40, suffix: " M/mo", label: "Scaled Revenue" },
        { value: 3, suffix: " Mo", label: "Time to Result" },
      ],
    },
  ],
};

export const caseStudies = caseStudiesByLocale.id;

export function getCaseStudies(locale: Locale = "id"): CaseStudy[] {
  return caseStudiesByLocale[locale];
}

export function getCaseStudyBySlug(slug: string, locale: Locale = "id"): CaseStudy | undefined {
  return getCaseStudies(locale).find((caseStudy) => caseStudy.slug === slug);
}
