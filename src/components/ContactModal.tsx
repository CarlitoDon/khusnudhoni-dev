"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { X, Send, MessageCircle } from "lucide-react";
import { SITE_PROFILE } from "@/data/site";
import { getDictionary } from "@/i18n/content";
import { getLocaleFromPathname } from "@/i18n/routing";
import { GlassButton } from "./GlassButton";
import { getLocaleFromPath, type Locale } from "@/lib/i18n";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Objective = "growth" | "tracking" | "general";
type Budget = "<10m" | "10m-50m" | "50m-100m" | ">100m";

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const pathname = usePathname();
  const locale: Locale = getLocaleFromPath(pathname);
  const [formData, setFormData] = useState<{
    name: string;
    objective: Objective;
    budget: Budget;
  }>({
    name: "",
    objective: "growth",
    budget: "<10m"
  });
  const copy = {
    id: {
      title: "Let's build something.",
      intro: "Isi form singkat ini agar saya bisa memberikan insight yang relevan dari awal kita chat.",
      name: "Nama Anda",
      namePlaceholder: "Cth: Budi (Santi Mebel)",
      focus: "Fokus Saat Ini",
      budget: "Estimasi Monthly Ad Spend",
      submit: "Lanjut ke WhatsApp",
      objectives: {
        growth: "Scale up revenue / Growth System",
        tracking: "Setup GA4 / Tracking & Analytics",
        general: "Konsultasi Umum",
      },
      budgetOptions: {
        "<10m": "Kurang dari Rp 10 Juta",
        "10m-50m": "Rp 10 - 50 Juta",
        "50m-100m": "Rp 50 - 100 Juta",
        ">100m": "Lebih dari Rp 100 Juta",
      },
      message: (name: string, objective: string, budget: string) =>
        `Hi Dhoni, saya ${name}. Saya tertarik diskusi terkait ${objective}. Estimasi budget marketing bulanan: ${budget}.`,
    },
    en: {
      title: "Let's build something.",
      intro: "Fill this short form so I can start the conversation with relevant context.",
      name: "Your Name",
      namePlaceholder: "E.g. Budi (Santi Mebel)",
      focus: "Current Focus",
      budget: "Estimated Monthly Ad Spend",
      submit: "Continue to WhatsApp",
      objectives: {
        growth: "Growth System",
        tracking: "Tracking & Analytics",
        general: "General Consultation",
      },
      budgetOptions: {
        "<10m": "Less than IDR 10 Million",
        "10m-50m": "IDR 10 - 50 Million",
        "50m-100m": "IDR 50 - 100 Million",
        ">100m": "More than IDR 100 Million",
      },
      message: (name: string, objective: string, budget: string) =>
        `Hi Dhoni, I'm ${name}. I'd like to discuss ${objective}. Estimated monthly marketing budget: ${budget}.`,
    },
  } satisfies Record<
    Locale,
    {
      title: string;
      intro: string;
      name: string;
      namePlaceholder: string;
      focus: string;
      budget: string;
      submit: string;
      objectives: Record<Objective, string>;
      budgetOptions: Record<Budget, string>;
      message: (name: string, objective: string, budget: string) => string;
    }
  >;

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const activeCopy = copy[locale];
    const text = activeCopy.message(
      formData.name,
      activeCopy.objectives[formData.objective],
      activeCopy.budgetOptions[formData.budget],
    );
    
    // Convert to WhatsApp link format
    const waUrl = `https://wa.me/${SITE_PROFILE.whatsappUrl.split('wa.me/')[1]}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md animate-enter" 
        style={{ animationDuration: "200ms" }}
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-md bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 rounded-3xl p-6 sm:p-8 shadow-2xl animate-enter"
        style={{ animationDuration: "300ms", animationDelay: "100ms" }}
      >
        <button 
          onClick={onClose}
          aria-label="Close contact modal"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 mb-2">
          {copy[locale].title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          {copy[locale].intro}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
              {copy[locale].name}
            </label>
            <input 
              required
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-white/50 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-800 dark:text-slate-200"
              placeholder={copy[locale].namePlaceholder}
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
              {copy[locale].focus}
            </label>
            <select 
              value={formData.objective}
              onChange={(e) => setFormData({...formData, objective: e.target.value as Objective})}
              className="w-full bg-white/50 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-800 dark:text-slate-200"
            >
              <option value="growth">{copy[locale].objectives.growth}</option>
              <option value="tracking">{copy[locale].objectives.tracking}</option>
              <option value="general">{copy[locale].objectives.general}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
              {copy[locale].budget}
            </label>
            <select 
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value as Budget})}
              className="w-full bg-white/50 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-800 dark:text-slate-200"
            >
              <option value="<10m">{copy[locale].budgetOptions["<10m"]}</option>
              <option value="10m-50m">{copy[locale].budgetOptions["10m-50m"]}</option>
              <option value="50m-100m">{copy[locale].budgetOptions["50m-100m"]}</option>
              <option value=">100m">{copy[locale].budgetOptions[">100m"]}</option>
            </select>
          </div>

          <div className="pt-4">
            <GlassButton 
              as="button"
              type="submit" 
              variant="primary"
              className="w-full justify-center py-3 text-sm font-bold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {copy[locale].submit}
