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

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0];
  const { pathname } = request.nextUrl;

  if (isStaticPath(pathname)) {
    return NextResponse.next();
  }

  if (host === ROOT_HOST || host === WWW_HOST || host === ADS_HOST) {
    return NextResponse.next(requestWithLocaleHeader(request));
  }

  if (host === DEV_HOST && !pathname.startsWith("/dev")) {
    const url = request.nextUrl.clone();
    url.pathname = `/dev${pathname}`;
    return NextResponse.rewrite(url);
  }

  if (host === FULLSTACK_HOST && !pathname.startsWith("/fullstack")) {
    const url = request.nextUrl.clone();
    url.pathname = `/fullstack${pathname}`;
    return NextResponse.rewrite(url);
  }

  if (host === WEB_HOST && !pathname.startsWith("/fullstack")) {
    const url = request.nextUrl.clone();
    url.pathname = `/fullstack${pathname}`;
    return NextResponse.rewrite(url);
  }

  if (host === SEO_HOST && !pathname.startsWith("/seo")) {
    const url = request.nextUrl.clone();
    url.pathname = `/seo${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next(requestWithLocaleHeader(request));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
