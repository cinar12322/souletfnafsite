import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Discord from "next-auth/providers/discord";
import Credentials from "next-auth/providers/credentials";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

const isVercelPreview = process.env.VERCEL_ENV === "preview";
const hasGoogleOAuth = Boolean(process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET);
const hasDiscordOAuth = Boolean(process.env.AUTH_DISCORD_ID && process.env.AUTH_DISCORD_SECRET);

export const { handlers, signIn, signOut, auth } = NextAuth({
  // On Vercel Preview deployments, OAuth callback URLs change per-deploy.
  // Unless you whitelist every preview URL in Google/Discord, OAuth will fail.
  providers: [
    ...(isVercelPreview || !hasGoogleOAuth ? [] : [Google({ checks: ["none"] })]),
    ...(isVercelPreview || !hasDiscordOAuth ? [] : [Discord]),
    Credentials({
      name: "Giris",
      credentials: {
        email: { label: "E-posta", type: "email" },
        password: { label: "Sifre", type: "password" },
        turnstileToken: { label: "Turnstile Token", type: "text" },
      },
      async authorize(credentials) {
        const token = credentials?.turnstileToken as string | undefined;
        if (!token) {
          throw new Error("Bot dogrulamasi eksik.");
        }

        const isValid = await verifyTurnstileToken(token);
        if (!isValid) {
          throw new Error("Bot dogrulamasi basarisiz.");
        }

        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;

        if (!email || !password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) {
          return null;
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  pages: {
    signIn: "/giris",
  },
});
