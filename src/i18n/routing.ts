export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "id";

export function isLocale(value: string | undefined | null): value is Locale {
  return locales.includes(value as Locale);
}

export function resolveLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return resolveLocale(firstSegment);
}

export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  if (isLocale(segments[0])) {
    const unprefixed = `/${segments.slice(1).join("/")}`;
    return unprefixed === "/" ? "/" : unprefixed.replace(/\/$/, "");
  }

  return pathname === "" ? "/" : pathname.replace(/\/$/, "") || "/";
}

export function localizedPath(pathname: string, locale: Locale): string {
  const unprefixedPath = stripLocalePrefix(pathname);

  if (locale === defaultLocale) {
    return unprefixedPath;
  }

  return unprefixedPath === "/" ? `/${locale}` : `/${locale}${unprefixedPath}`;
}

export function languagePath(pathname: string, locale: Locale): string {
  return localizedPath(pathname, locale);
}
