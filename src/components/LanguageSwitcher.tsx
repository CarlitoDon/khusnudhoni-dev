"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getLocaleFromPath,
  getLocalizedPath,
  localeLabel,
  locales,
  type Locale,
} from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale?: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const activeLocale = locale ?? getLocaleFromPath(pathname);

  return (
    <div
      aria-label="Language selector"
      className="flex shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-white/45 p-1 font-mono text-[0.62rem] font-semibold dark:border-slate-700 dark:bg-slate-900/35"
    >
      {locales.map((nextLocale) => (
        <Link
          key={nextLocale}
          href={getLocalizedPath(pathname, nextLocale)}
          hrefLang={nextLocale}
          aria-current={activeLocale === nextLocale ? "true" : undefined}
          className={`rounded-full px-2 py-0.5 transition-colors ${
            activeLocale === nextLocale
              ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950"
              : "text-slate-700 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-200"
          }`}
        >
          {localeLabel[nextLocale]}
        </Link>
      ))}
    </div>
  );
}
