export type ServiceItem = {
  title: string;
  summary: string;
  outputs: string[];
};

export const services: ServiceItem[] = [
  {
    title: "Growth System Setup",
    summary:
      "Untuk bisnis yang acquisition-nya sudah jalan, tetapi sistem growth belum terstruktur dan sulit di-scale.",
    outputs: [
      "Funnel structure yang jelas per tahap",
      "Tracking architecture dari click sampai closing",
      "Channel strategy berbasis objective bisnis",
    ],
  },
  {
    title: "Performance Marketing",
    summary:
      "Eksekusi Meta Ads dan Google Ads dengan fokus pada revenue quality, bukan vanity metrics.",
    outputs: [
      "Campaign architecture dan testing hypothesis",
      "Budget allocation dan optimization cadence",
      "Creative-feedback loop berbasis data conversion",
    ],
  },
  {
    title: "Funnel Optimization",
    summary:
      "Merapikan jalur konversi dari landing page ke WhatsApp agar handoff lebih cepat dan closing rate naik.",
    outputs: [
      "Landing page dan message hierarchy refinement",
      "WhatsApp sales flow dan response logic",
      "Bottleneck mapping dan experiment backlog",
    ],
  },
  {
    title: "Tracking and Analytics Setup",
    summary:
      "Membangun fondasi measurement agar setiap keputusan marketing bisa diverifikasi datanya.",
    outputs: [
      "Meta Pixel dan GA4 event setup",
      "Funnel attribution dan UTM governance",
      "Behavior analytics untuk insight conversion",
    ],
  },
  {
    title: "Growth Infrastructure",
    summary:
      "Menyusun layer operasional supaya tim bisa mengeksekusi growth secara konsisten.",
    outputs: [
      "Dashboard monitoring harian dan mingguan",
      "Reporting structure untuk stakeholder",
      "SOP marketing, CS acquisition, dan retention",
    ],
  },
] as const;
