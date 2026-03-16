import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEV_HOST = "dev.khusnudhoni.online";
const ROOT_HOST = "khusnudhoni.online";
const WWW_HOST = "www.khusnudhoni.online";
const ADS_HOST = "ads.khusnudhoni.online";

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

  if (host === ROOT_HOST || host === WWW_HOST) {
    if (pathname === "/services") {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = "/services";
    return NextResponse.rewrite(url);
  }

  if (host === DEV_HOST && !pathname.startsWith("/dev")) {
    const url = request.nextUrl.clone();
    url.pathname = `/dev${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
