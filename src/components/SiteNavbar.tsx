"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_SECTIONS, SITE_PROFILE } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactButton } from "@/components/ContactButton";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type SiteNavbarProps = {
  basePath?: string;
};

export function SiteNavbar({ basePath = "" }: SiteNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 px-3 pt-3 sm:px-8 lg:px-10 pointer-events-none">
      <nav className="liquid-nav liquid-nav-shell pointer-events-none mx-auto flex max-w-6xl flex-col gap-2 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-3 lg:px-8">
        <div className="flex w-full items-center justify-between sm:w-auto relative z-50">
          <Link
            href="/"
            className="pointer-events-auto flex items-center gap-2 font-mono text-[0.66rem] sm:text-sm font-bold tracking-[0.11em] text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <div className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span>{SITE_PROFILE.name.toUpperCase()}</span>
          </Link>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 pointer-events-auto sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 focus:outline-none text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-6 font-mono text-xs text-black dark:text-white font-semibold flex-shrink-0">
          {NAV_SECTIONS.map((section) => (
            <Link
              key={section.id}
              href={`${basePath}#${section.id}`}
              className="pointer-events-auto hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {section.label}
            </Link>
          ))}

          <div className="pointer-events-auto flex items-center gap-4 pl-2 border-l border-slate-200 dark:border-slate-700/50">
            <ThemeToggle />
            <ContactButton />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="sm:hidden overflow-hidden pointer-events-auto w-full origin-top"
            >
              <div className="flex flex-col py-4 gap-4 px-2">
                {NAV_SECTIONS.map((section) => (
                  <Link
                    key={section.id}
                    href={`${basePath}#${section.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-widest border-b border-transparent hover:border-blue-100 dark:hover:border-slate-700 pb-2 transition-all"
                  >
                    {section.label}
                  </Link>
                ))}
                
                <div className="pt-2">
                  <ContactButton />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
