// app/api/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Clear both possible session cookies
  response.cookies.set("next-auth.session-token", "", {
    path: "/",
    maxAge: 0,
  });

  response.cookies.set("__Secure-next-auth.session-token", "", {
    path: "/",
    maxAge: 0,
  });

  response.cookies.set("accessToken", "", {
    path: "/",
    maxAge: 0,
  });

  return response;
}
