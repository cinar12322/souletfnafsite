"use client";

import { useState } from "react";
import Link from "next/link";

export default function KayitPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Kayıt mantığı buraya gelecek
    setTimeout(() => {
      setLoading(false);
      alert("Kayıt özelliği yakında eklenecek!");
    }, 1000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-white/5 blur-[100px]" />

      <div className="relative z-10 w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
            <span className="text-lg font-semibold text-white">Soulet</span>
          </Link>
          <h1 className="text-xl font-semibold mb-1 text-white">Yeni hesap oluştur</h1>
          <p className="text-sm text-text-secondary">Karanlığa adım at</p>
        </div>

        <div className="p-6 rounded-2xl border border-white/5 bg-surface">
          <form onSubmit={handleRegister} className="flex flex-col gap-3">
            <div>
              <label htmlFor="name" className="block text-xs text-text-secondary mb-1.5">Ad Soyad</label>
              <input
                id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-black border border-white/10 rounded-lg text-sm text-white placeholder-text-muted focus:border-white/30 focus:outline-none transition-colors"
                placeholder="Adınız"
                required
              />
            </div>
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
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 mt-1 bg-white hover:bg-white/90 text-black text-sm font-bold rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Hesap oluşturuluyor..." : "Kayıt Ol"}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-text-muted flex flex-col gap-3">
          <Link href="/giris" className="text-white hover:underline">Zaten hesabın var mı? Giriş Yap</Link>
          <Link href="/" className="text-text-secondary hover:text-white transition-colors">← Ana Sayfaya Dön</Link>
        </p>
      </div>
    </div>
  );
}
