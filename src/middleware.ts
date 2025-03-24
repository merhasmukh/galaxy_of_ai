import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  if (!accessToken) {
    if (req.nextUrl.pathname !== "/user/login") {
      return NextResponse.redirect(new URL("/user/login", req.url));
    }
  }

  return NextResponse.next();
}

// Apply middleware to protected pages
export const config = {
  matcher: [ "/admin/:path*"],
};
