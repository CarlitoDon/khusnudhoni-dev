import { Fingerprint, Target, Settings, BrainCircuit, BarChart, Database, LayoutTemplate, Layers, Braces, Terminal, Search } from "lucide-react";
import React from "react";

export type StackItem = {
  name: string;
  icon: React.ElementType;
};

export const growthStackCategory = [
  {
    category: "Acquisition",
    items: [
      { name: "Meta Ads", icon: Target },
      { name: "Google Ads", icon: Search },
      { name: "TikTok Ads", icon: Fingerprint }
    ] as StackItem[]
  },
  {
    category: "Tracking & Analytics",
    items: [
      { name: "GA4", icon: BarChart },
      { name: "Tag Manager", icon: Settings },
      { name: "Meta Pixel & CAPI", icon: BrainCircuit },
      { name: "Microsoft Clarity", icon: LayoutTemplate },
      { name: "Looker Studio", icon: Layers }
    ] as StackItem[]
  },
  {
    category: "Engineering",
    items: [
      { name: "Next.js / React", icon: Database },
      { name: "TypeScript", icon: Braces },
      { name: "Tailwind CSS", icon: LayoutTemplate },
      { name: "Node.js", icon: Terminal },
      { name: "SQL / BigQuery", icon: Database }
    ] as StackItem[]
  }
] as const;

export const growthStack = growthStackCategory.flatMap(cat => cat.items.map(i => i.name));
