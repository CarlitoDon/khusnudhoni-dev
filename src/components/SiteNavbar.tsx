import Link from "next/link";
import { NAV_SECTIONS, SITE_PROFILE } from "@/data/site";

type SiteNavbarProps = {
  basePath?: string;
};

export function SiteNavbar({ basePath = "" }: SiteNavbarProps) {
  return (
    <div className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-8 lg:px-10 pointer-events-none">
      <nav className="liquid-nav liquid-nav-shell pointer-events-auto mx-auto flex max-w-6xl flex-col gap-2 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-3 lg:px-8">
        <div className="flex w-full items-center justify-between sm:w-auto">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-[0.66rem] sm:text-sm font-bold tracking-[0.11em] text-black hover:text-blue-600 transition-colors"
          >
            <div className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span>{SITE_PROFILE.name.toUpperCase()}</span>
          </Link>

          <a
            href={`mailto:${SITE_PROFILE.email}`}
            className="liquid-pill text-black hover:text-blue-700 px-3 py-1 rounded-full transition-all font-mono text-[0.64rem] sm:text-[0.68rem] font-semibold tracking-wider sm:hidden"
          >
            Contact
          </a>
        </div>

        <div className="sm:hidden flex w-full items-center justify-between gap-1.5 font-mono text-[0.63rem] font-semibold text-black">
          {NAV_SECTIONS.map((section) => (
            <Link
              key={section.id}
              href={`${basePath}#${section.id}`}
              className="liquid-pill min-w-0 flex-1 rounded-full px-2.5 py-1.5 text-center tracking-wide transition-colors hover:text-blue-600"
            >
              {section.label}
            </Link>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-6 font-mono text-xs text-black font-semibold">
          {NAV_SECTIONS.map((section) => (
            <Link
              key={section.id}
              href={`${basePath}#${section.id}`}
              className="hover:text-blue-600 transition-colors"
            >
              {section.label}
            </Link>
          ))}

          <a
            href={`mailto:${SITE_PROFILE.email}`}
            className="liquid-pill text-black hover:text-blue-700 px-4 py-1.5 rounded-full transition-all"
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
