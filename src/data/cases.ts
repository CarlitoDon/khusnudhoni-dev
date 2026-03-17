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

export const caseStudies: CaseStudy[] = [
  {
    slug: "santi-mebel-jogja",
    title: "Santi Mebel Jogja - Paid Acquisition Growth",
    shortDescription: "Bisnis retail furniture lokal dengan fokus membangun paid acquisition yang stabil dan terukur lintas Meta dan Google.",
    context: "Bisnis retail furniture lokal dengan penjualan offline dan online, namun channel digital belum dimaksimalkan secara sistematis.",
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
    shortDescription: "Bisnis consumer products online dengan beberapa produk kesehatan. Fokus pada pembangunan funnel acquisition hingga retention yang terukur.",
    context: "Bisnis consumer products online dengan beberapa produk kesehatan, tetapi alur marketing dan operasional belum terstruktur rapi.",
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
];

const caseStudyBySlug = new Map(caseStudies.map((caseStudy) => [caseStudy.slug, caseStudy]));

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudyBySlug.get(slug);
}
