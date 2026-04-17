import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Discord from "next-auth/providers/discord";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { verifyTurnstileToken } from "@/lib/turnstile";
import bcrypt from "bcryptjs";

const isVercelPreview = process.env.VERCEL_ENV === "preview";
const hasGoogleOAuth = Boolean(process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET);
const hasDiscordOAuth = Boolean(process.env.AUTH_DISCORD_ID && process.env.AUTH_DISCORD_SECRET);

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" }, // Required for Credentials provider
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
        const token = credentials?.turnstileToken as string;
        if (!token) {
          throw new Error("Bot dogrulamasi eksik.");
        }

        const isValid = await verifyTurnstileToken(token);
        if (!isValid) {
          throw new Error("Bot dogrulamasi basarisiz.");
        }

        const email = credentials?.email as string;
        const password = credentials?.password as string;

        if (!email || !password) {
          return null;
        }

        // Demo login check
        if (email === "demo@soulet.com" && password === "demo123") {
          return { id: "demo-id", name: "Demo Kullanıcı", email: "demo@soulet.com" };
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
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // @ts-ignore
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/giris",
  },
});
