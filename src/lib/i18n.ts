export const locales = ["id", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "id";

const englishRouteMap: Record<string, string> = {
  "/": "/en",
  "/seo": "/en/seo",
  "/dev": "/en/dev",
  "/fullstack": "/en/fullstack",
};

const indonesiaRouteMap = Object.fromEntries(
  Object.entries(englishRouteMap).map(([idPath, enPath]) => [enPath, idPath]),
) as Record<string, string>;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return normalized.replace(/\/+$/, "") || "/";
}

function splitPathname(pathname: string): { path: string; suffix: string } {
  const [, rawPath = "/", suffix = ""] = pathname.match(/^([^?#]*)(.*)$/) ?? [];

  return {
    path: normalizePathname(rawPath),
    suffix,
  };
}

function isPathOrNested(pathname: string, routePath: string): boolean {
  return pathname === routePath || pathname.startsWith(`${routePath}/`);
}

export function getLocaleFromPath(pathname: string): Locale {
  const { path } = splitPathname(pathname);
  return isPathOrNested(path, "/en") ? "en" : defaultLocale;
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const { path, suffix } = splitPathname(pathname);

  if (locale === "en") {
    if (isPathOrNested(path, "/en")) {
      return `${path}${suffix}`;
    }

    if (isPathOrNested(path, "/cases") && path !== "/cases") {
      return `/en${path}${suffix}`;
    }

    return `${englishRouteMap[path] ?? "/en"}${suffix}`;
  }

  if (isPathOrNested(path, "/en/cases") && path !== "/en/cases") {
    return `${path.replace(/^\/en/, "")}${suffix}`;
  }

  if (isPathOrNested(path, "/en")) {
    return `${indonesiaRouteMap[path] ?? "/"}${suffix}`;
  }

  return `${path}${suffix}`;
}

export function routeFor(locale: Locale, path: string): string {
  if (locale === "en") {
    return getLocalizedPath(path, "en");
  }

  return getLocalizedPath(path, "id");
}

export const localeLabel: Record<Locale, string> = {
  id: "ID",
  en: "EN",
};
