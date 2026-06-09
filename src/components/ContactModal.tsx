"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { X, Send, MessageCircle } from "lucide-react";
import { SITE_PROFILE } from "@/data/site";
import { getDictionary } from "@/i18n/content";
import { getLocaleFromPathname } from "@/i18n/routing";
import { GlassButton } from "./GlassButton";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname || "/");
  const copy = getDictionary(locale).common.contactModal;
  const [formData, setFormData] = useState({
    name: "",
    objective: "growth",
    budget: "<10m"
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const objective =
      copy.options.objectives.find((option) => option.value === formData.objective)
        ?.message ?? formData.objective;
    const budget =
      copy.options.budgets.find((option) => option.value === formData.budget)
        ?.label ?? formData.budget;
    const text = copy.messageTemplate(formData.name, objective, budget);
    
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
          {copy.title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          {copy.description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
              {copy.nameLabel}
            </label>
            <input 
              required
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-white/50 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-800 dark:text-slate-200"
              placeholder={copy.namePlaceholder}
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
              {copy.objectiveLabel}
            </label>
            <select 
              value={formData.objective}
              onChange={(e) => setFormData({...formData, objective: e.target.value})}
              className="w-full bg-white/50 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-800 dark:text-slate-200"
            >
              {copy.options.objectives.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
              {copy.budgetLabel}
            </label>
            <select 
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              className="w-full bg-white/50 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-800 dark:text-slate-200"
            >
              {copy.options.budgets.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
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
              {copy.submitLabel}
              <Send className="w-4 h-4 ml-2 opacity-70" />
            </GlassButton>
          </div>
        </form>
      </div>
    </div>
  );
}
