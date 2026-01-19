import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("clothique_auth")?.value === "true";

  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/products")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
