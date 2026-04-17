"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import TurnstileWidget from "@/components/TurnstileWidget";

export default function GirisPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCredentialsLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!turnstileToken) {
      setError("Lütfen bot doğrulamasını tamamlayın.");
      return;
    }

    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      turnstileToken,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      setError("E-posta veya şifre hatalı.");
    } else {
      window.location.href = "/";
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-white/5 blur-[100px]" />

      <div className="relative z-10 w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
            <span className="text-lg font-semibold text-white">Soulet</span>
          </Link>
          <h1 className="text-xl font-semibold mb-1 text-white">Hesabına giriş yap</h1>
          <p className="text-sm text-text-secondary">Soulet topluluğuna katıl</p>
        </div>

        <div className="p-6 rounded-2xl border border-white/5 bg-surface">
          <div className="flex flex-col gap-2.5 mb-5">
            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="flex items-center justify-center gap-2.5 w-full py-2.5 border border-white/10 rounded-lg text-sm text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#ffffff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#ffffff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#ffffff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#ffffff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google ile devam et
            </button>
            <button
              onClick={() => signIn("discord", { callbackUrl: "/" })}
              className="flex items-center justify-center gap-2.5 w-full py-2.5 border border-white/10 rounded-lg text-sm text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="#ffffff" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              Discord ile devam et
            </button>
          </div>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-surface text-xs text-text-muted">veya</span>
            </div>
          </div>

          <form onSubmit={handleCredentialsLogin} className="flex flex-col gap-3">
            <div>
              <label htmlFor="email" className="block text-xs text-text-secondary mb-1.5">E-posta</label>
              <input
                id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-black border border-white/10 rounded-lg text-sm text-white placeholder-text-muted focus:border-white/30 focus:outline-none transition-colors"
                placeholder="ornek@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs text-text-secondary mb-1.5">Şifre</label>
              <input
                id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-black border border-white/10 rounded-lg text-sm text-white placeholder-text-muted focus:border-white/30 focus:outline-none transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            
            <TurnstileWidget onVerify={setTurnstileToken} />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 mt-1 bg-white hover:bg-white/90 text-black text-sm font-bold rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-text-muted">
            Demo: demo@soulet.com / demo123
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-text-muted flex flex-col gap-3">
          <Link href="/kayit" className="text-white hover:underline">Hesabın yok mu? Kayıt Ol</Link>
          <Link href="/" className="text-text-secondary hover:text-white transition-colors">← Ana Sayfaya Dön</Link>
        </p>
      </div>
    </div>
  );
}
