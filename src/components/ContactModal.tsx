"use client";

import { useState } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { SITE_PROFILE } from "@/data/site";
import { GlassButton } from "./GlassButton";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    objective: "growth",
    budget: "<10m"
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Hi Dhoni, saya ${formData.name}. Saya tertarik diskusi terkait ${
      formData.objective === "growth" ? "Growth System" : 
      formData.objective === "tracking" ? "Tracking & Analytics" : "Konsultasi Umum"
    }. Estimasi budget marketing bulanan: ${formData.budget}.`;
    
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
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 mb-2">
          Let's build something.
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          Isi form singkat ini agar saya bisa memberikan insight yang relevan dari awal kita chat.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
              Nama Anda
            </label>
            <input 
              required
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-white/50 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-800 dark:text-slate-200"
              placeholder="Cth: Budi (Santi Mebel)"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
              Fokus Saat Ini
            </label>
            <select 
              value={formData.objective}
              onChange={(e) => setFormData({...formData, objective: e.target.value})}
              className="w-full bg-white/50 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-800 dark:text-slate-200"
            >
              <option value="growth">Scale up revenue / Growth System</option>
              <option value="tracking">Setup GA4 / Tracking & Analytics</option>
              <option value="general">Konsultasi Umum</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
              Estimasi Monthly Ad Spend
            </label>
            <select 
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              className="w-full bg-white/50 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-800 dark:text-slate-200"
            >
              <option value="<10m">Kurang dari Rp 10 Juta</option>
              <option value="10m-50m">Rp 10 - 50 Juta</option>
              <option value="50m-100m">Rp 50 - 100 Juta</option>
              <option value=">100m">Lebih dari Rp 100 Juta</option>
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
              Lanjut ke WhatsApp
              <Send className="w-4 h-4 ml-2 opacity-70" />
            </GlassButton>
          </div>
        </form>
      </div>
    </div>
  );
}
