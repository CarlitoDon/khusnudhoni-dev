"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_PROFILE } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactButton } from "@/components/ContactButton";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { routeFor, type Locale } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { getDictionary } from "@/i18n/content";
  localizedPath,
  locales,
} from "@/i18n/routing";

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

export function SiteNavbar({ basePath = "", locale = "id", sections = NAV_SECTIONS }: SiteNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const homePath = routeFor(locale, "/");

  return (
    <div className="sticky top-0 z-50 px-3 pt-3 sm:px-8 lg:px-10 pointer-events-none">
      <nav className="liquid-nav liquid-nav-shell rounded-[1.25rem] sm:rounded-full pointer-events-none mx-auto flex max-w-6xl flex-col gap-2 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-3 lg:px-8">
        <div className="flex w-full items-center justify-between sm:w-auto relative z-50">
          <Link
            href={homePath}
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
          {sections.map((section) => (
            <Link
              key={section.id}
              href={basePath ? `${basePath}#${section.id}` : `#${section.id}`}
              className="pointer-events-auto hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {section.label}
            </Link>
          ))}

          <div className="pointer-events-auto flex items-center gap-4 pl-2 border-l border-slate-200 dark:border-slate-700/50">
            <ThemeToggle />
            <ContactButton locale={locale} />
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
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    href={basePath ? `${basePath}#${section.id}` : `#${section.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-widest border-b border-transparent hover:border-blue-100 dark:hover:border-slate-700 pb-2 transition-all"
                  >
                    {section.label}
                  </Link>
                ))}
                
                <div className="pt-2">
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
