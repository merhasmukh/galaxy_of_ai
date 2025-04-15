
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers"; // ✅ Import cookies correctly

interface GoogleAuthResponse {
  access_token: string;
  refresh_token: string;
  user_id: number;
  email: string;
  username: string;
  profile_image?: string;
  phone?: string;
  dob?: string;
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account && account.provider === "google") {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/auth/google/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: account.id_token }),
          });

          if (!response.ok) {
            console.error("Google Auth API Error:", await response.text());
            return token;
          }

          const data: GoogleAuthResponse = await response.json();

          token.accessToken = data.access_token;
          token.refreshToken = data.refresh_token;
          token.userId = data.user_id;
          token.userData = {
            email: data.email,
            name: data.username,
            profile_image: data.profile_image,
            phone: data.phone || "",
            dob: data.dob || "",
          };

          const cookieStore = await cookies();

          cookieStore.set("accessToken", data.access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            sameSite: "lax", // ✅ Corrected to lowercase
          });

          cookieStore.set("refreshToken", data.refresh_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            sameSite: "lax", // ✅ Corrected to lowercase
          });

          cookieStore.set("userId", data.user_id.toString(), {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            sameSite: "lax", // ✅ Corrected to lowercase
          });

        } catch (error) {
          console.error("Google Auth Error:", error);
        }
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken as string | undefined;
      session.refreshToken = token.refreshToken as string | undefined;
      session.userId = token.userId as number | undefined;
      session.userData = token.userData as GoogleAuthResponse | undefined;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});


export { handler as GET, handler as POST };
