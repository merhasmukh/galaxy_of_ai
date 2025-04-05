// middleware.ts
import { NextRequest, NextResponse } from "next/server";

// These are the names of cookies used by NextAuth
const nextAuthSessionCookie = [
  "next-auth.session-token", // default on prod
  "__Secure-next-auth.session-token", // secure cookie on HTTPS
];

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const isAuthPage = url.pathname.startsWith("/user/login") ||
                     url.pathname.startsWith("/user/register") ||
                     url.pathname.startsWith("/user/reset-password");

  // ✅ Check for custom accessToken (JWT)
  const accessToken = req.cookies.get("accessToken")?.value;

  // ✅ Check for next-auth session cookies
  const hasNextAuthSession = nextAuthSessionCookie.some((name) =>
    req.cookies.has(name)
  );

  // ✅ If either exists, allow access
  const isAuthenticated = accessToken || hasNextAuthSession;

  if (!isAuthenticated && !isAuthPage) {
    // Redirect to login if unauthenticated and trying to access protected route
    url.pathname = "/user/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// ✅ Apply middleware only on protected routes
export const config = {
  matcher: ["/user/:path*", "/admin/:path*"],
};
