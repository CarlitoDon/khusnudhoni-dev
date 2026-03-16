import Link from "next/link";
import { NAV_SECTIONS, SITE_PROFILE } from "@/data/site";

type SiteNavbarProps = {
  basePath?: string;
};

export function SiteNavbar({ basePath = "" }: SiteNavbarProps) {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 lg:px-10 pointer-events-none">
      <nav className="liquid-nav liquid-nav-shell pointer-events-auto mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-7 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-widest text-black hover:text-blue-600 transition-colors"
        >
          <div className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></div>
          {SITE_PROFILE.name.toUpperCase()}
        </Link>

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
