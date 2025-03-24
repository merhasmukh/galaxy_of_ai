import { NextResponse } from "next/server";
import axios from "axios";

const NEXT_PUBLIC_BE_API_URL = process.env.NEXT_PUBLIC_BE_API_URL;

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Request token from Django backend
    const response = await axios.post(
      `${NEXT_PUBLIC_BE_API_URL}/auth/token/`,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    if (!response.data) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const { access_token, refresh_token, user_id, username, phone, dob } = response.data;
    const userData = { name: username, email, phone, dob };

    // Define cookie options
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development", // Secure in production
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    };

    const responseWithCookies = new NextResponse(JSON.stringify({ message: "Login successful", userData }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": [
          `accessToken=${access_token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${cookieOptions.maxAge}`,
          `refreshToken=${refresh_token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${cookieOptions.maxAge}`,
          `userId=${user_id}; Path=/; Secure; SameSite=Strict; Max-Age=${cookieOptions.maxAge}`,
        ].join("; "),
      },
    });

    return responseWithCookies;
  } catch (error) {
    console.error("Login API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
