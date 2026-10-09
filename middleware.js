// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Check if it's a `.html` route (e.g. /fancy.html)
  if (pathname.endsWith(".html")) {
    const cleanPath = pathname.replace(/\.html$/, "");
    const url = request.nextUrl.clone();
    url.pathname = cleanPath;

    console.log("INCOMING PATH:", pathname);
    console.log("REWRITING TO:", cleanPath);

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Apply only to root-level .html paths
export const config = {
  matcher"/*.html"],
};
