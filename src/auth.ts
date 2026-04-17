import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Discord from "next-auth/providers/discord";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { verifyTurnstileToken } from "@/lib/turnstile";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      checks: ["none"],
    }),
    Discord,
    Credentials({
      name: "Giriş",
      credentials: {
        email: { label: "E-posta", type: "email" },
        password: { label: "Şifre", type: "password" },
        turnstileToken: { label: "Turnstile Token", type: "text" },
      },
      async authorize(credentials) {
        const token = credentials?.turnstileToken as string;
        if (!token) {
          throw new Error("Bot doğrulaması eksik.");
        }

        const isValid = await verifyTurnstileToken(token);
        if (!isValid) {
          throw new Error("Bot doğrulaması başarısız.");
        }

        // Demo login
        if (credentials?.email === "demo@soulet.com" && credentials?.password === "demo123") {
          return { id: "1", name: "Demo Kullanıcı", email: "demo@soulet.com", role: "USER" };
        }

        // In a real app, you would verify the password here
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email as string },
        });

        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        // @ts-ignore
        session.user.role = user.role;
        // @ts-ignore
        session.user.id = user.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/giris",
  },
});
