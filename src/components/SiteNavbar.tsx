"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_PROFILE } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactButton } from "@/components/ContactButton";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { routeFor, type Locale } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type NavSection = {
  id: string;
  label: string;
};

type SiteNavbarProps = {
  basePath?: string;
  locale?: Locale;
  sections?: readonly NavSection[];
};

const NAV_SECTIONS: NavSection[] = [];

export function SiteNavbar({
  basePath = "",
  locale = "id",
  sections = NAV_SECTIONS,
}: SiteNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const homePath = routeFor(locale, "/");

  return (
    <div className="sticky top-0 z-50 px-3 pt-3 sm:px-6 lg:px-10 pointer-events-none">
      <nav className="liquid-nav liquid-nav-shell rounded-2xl sm:rounded-full pointer-events-none mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-3">
        <div className="flex w-full items-center justify-between sm:w-auto relative z-50">
          <Link
            href={homePath}
            className="pointer-events-auto flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold tracking-[0.1em] text-slate-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
            <span>{SITE_PROFILE.name.toUpperCase()}</span>
            <span className="hidden md:inline-block rounded-md border border-slate-200/80 bg-slate-100/80 px-2 py-0.5 text-[0.62rem] font-medium tracking-wider text-slate-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300">
              DEV × GROWTH
            </span>
          </Link>

          <div className="flex items-center gap-2 pointer-events-auto sm:hidden">
            <LanguageSwitcher locale={locale} />
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

        <div className="hidden sm:flex items-center gap-5 lg:gap-6 font-mono text-xs text-slate-700 dark:text-slate-200 font-semibold flex-shrink-0">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={basePath ? `${basePath}#${section.id}` : `#${section.id}`}
              className="pointer-events-auto hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {section.label}
            </Link>
          ))}

          <div className="pointer-events-auto flex items-center gap-2.5 pl-3 border-l border-slate-200/90 dark:border-slate-700/60">
            <LanguageSwitcher locale={locale} />
            <ThemeToggle />
            <ContactButton locale={locale} />
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="sm:hidden overflow-hidden pointer-events-auto w-full origin-top"
            >
              <div className="flex flex-col py-3 gap-3 px-1">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    href={basePath ? `${basePath}#${section.id}` : `#${section.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-widest border-b border-slate-200/60 dark:border-slate-800 pb-2 transition-all"
                  >
                    {section.label}
                  </Link>
                ))}
                <div className="pt-1">
                  <ContactButton locale={locale} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}