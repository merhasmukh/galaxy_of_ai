// src/types/next-auth.d.ts
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken?: string;
    refreshToken?: string;
    userId?: number;
    userData?: {
      email: string;
      username: string;
      profile_image?: string;
      phone?: string;
      dob?: string;
    };
  }
}
