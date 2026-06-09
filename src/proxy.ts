import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getLocaleFromPathname, isLocale } from "@/i18n/routing";

const ADS_HOST = "ads.khusnudhoni.online";
const DEV_HOST = "dev.khusnudhoni.online";
const ROOT_HOST = "khusnudhoni.online";
const WWW_HOST = "www.khusnudhoni.online";
const FULLSTACK_HOST = "fullstack.khusnudhoni.online";
const WEB_HOST = "web.khusnudhoni.online";
const SEO_HOST = "seo.khusnudhoni.online";

function isStaticPath(pathname: string): boolean {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  );
}

function requestWithLocaleHeader(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-active-locale", getLocaleFromPathname(request.nextUrl.pathname));

  return {
    request: {
      headers,
    },
  };
}

function hasSegmentAfterOptionalLocale(pathname: string, segment: string): boolean {
  const parts = pathname.split("/").filter(Boolean);
  const segmentIndex = isLocale(parts[0]) ? 1 : 0;

  return parts[segmentIndex] === segment;
}

function rewriteToSegment(request: NextRequest, segment: string) {
  const { pathname } = request.nextUrl;

  if (hasSegmentAfterOptionalLocale(pathname, segment)) {
    return NextResponse.next(requestWithLocaleHeader(request));
  }

  const parts = pathname.split("/").filter(Boolean);
  const locale = isLocale(parts[0]) ? parts[0] : null;
  const restParts = locale ? parts.slice(1) : parts;
  const url = request.nextUrl.clone();

  if (locale) {
    const restPath = restParts.length > 0 ? `/${restParts.join("/")}` : "";
    url.pathname = `/${locale}/${segment}${restPath}`;
  } else {
    url.pathname = `/${segment}${pathname === "/" ? "" : pathname}`;
  }

  return NextResponse.rewrite(url, requestWithLocaleHeader(request));
}

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0];
  const { pathname } = request.nextUrl;

  if (isStaticPath(pathname)) {
    return NextResponse.next();
  }

  if (host === ROOT_HOST || host === WWW_HOST || host === ADS_HOST) {
    return NextResponse.next(requestWithLocaleHeader(request));
  }

  if (host === DEV_HOST) {
    return rewriteToSegment(request, "dev");
  }

  if (host === FULLSTACK_HOST) {
    return rewriteToSegment(request, "fullstack");
  }

  if (host === WEB_HOST) {
    return rewriteToSegment(request, "fullstack");
  }

  if (host === SEO_HOST) {
    return rewriteToSegment(request, "seo");
  }

  return NextResponse.next(requestWithLocaleHeader(request));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
