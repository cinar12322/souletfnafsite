import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Discord from "next-auth/providers/discord";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
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
      },
      async authorize(credentials) {
        if (credentials?.email === "demo@soulet.com" && credentials?.password === "demo123") {
          return { id: "1", name: "Demo Kullanıcı", email: "demo@soulet.com" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/giris",
  },
});
