import { NextResponse, type NextRequest } from "next/server";
import { CANONICAL_HOST } from "@/lib/site";

const ALIAS_HOSTS = new Set(["grannsam.vercel.app"]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";

  if (ALIAS_HOSTS.has(host)) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  if (host.endsWith(".vercel.app")) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, follow");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
