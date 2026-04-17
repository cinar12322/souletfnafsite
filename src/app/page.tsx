"use client";

import { useState } from "react";
import GameCard from "@/components/GameCard";
import { joinWaitlist } from "./actions";
import TurnstileWidget from "@/components/TurnstileWidget";

const features = [
  {
    title: "Hikaye Odaklı",
    description: "Derinlikli bir senaryo, çoklu sonlar ve her kararın hikayeyi şekillendirdiği dallanmalı anlatım yapısı.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Atmosferik Korku",
    description: "3D pozisyonel ses, dinamik aydınlatma ve prosedürel ortam tasarımıyla gerçekçi gerilim deneyimi.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Hayatta Kalma",
    description: "Sınırlı kaynakları yönet, stratejik kararlar al. Her gece daha zorlu, her seçim daha kritik.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Çoklu Sonlar",
    description: "5 farklı son, düzinelerce gizli olay. Oyunu her bitirişinde yeni bir şey keşfedeceksin.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
      </svg>
    ),
  },
  {
    title: "Türkçe Destek",
    description: "Tamamen Türkçe seslendirme, altyazı ve arayüz. Yerli ve milli bir oyun deneyimi.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    title: "Topluluk",
    description: "Aktif Discord sunucusu, haftalık geliştirici günlükleri ve topluluk etkinlikleri.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "50K+", label: "Waitlist Kaydı" },
  { value: "4.8", label: "Ortalama Puan" },
  { value: "12", label: "Ay Geliştirme" },
  { value: "5", label: "Farklı Son" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleWaitlistSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus("error");
      setMessage("Lütfen bot doğrulamasını tamamlayın.");
      return;
    }

    setStatus("loading");
    
    const formData = new FormData();
    formData.append("email", email);
    formData.append("turnstileToken", turnstileToken);
    
    const result = await joinWaitlist(formData);
    
    if (result.error) {
      setStatus("error");
      setMessage(result.error);
    } else {
      setStatus("success");
      setMessage("Waitlist'e başarıyla katıldın! Teşekkürler.");
      setEmail("");
    }
  }

  return (
    <>
      {/* === HERO === */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-white/5 blur-[120px]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white">
            Karanlıkta bir hikaye
            <br />
            <span className="text-text-secondary">keşfedilmeyi bekliyor.</span>
          </h1>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            FNAFO, terk edilmiş bir tesiste geçen atmosferik bir korku-gerilim oyunudur.
            Hayatta kal, ipuçlarını topla ve karanlığın ardındaki gerçeği ortaya çıkar.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white hover:bg-white/90 text-black font-bold rounded-xl transition-all text-sm"
            >
              Waitlist'e Katıl
            </a>
            <button
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all text-sm cursor-default"
            >
              Hakkımızda
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
                <div className="text-xs text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === ÖZELLİKLER === */}
      <section id="ozellikler" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-white uppercase tracking-wider">Özellikler</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-white">
              Neden FNAFO?
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Modern oyun teknolojileri ile tasarlanmış, hikaye odaklı bir korku deneyimi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <GameCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* === WAITLIST === */}
      <section id="waitlist" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-xs font-medium text-white uppercase tracking-wider">Erken Erişim</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-white">Waitlist'e Katıl</h2>
          <p className="text-text-secondary mb-10">
            FNAFO yayınlandığında ilk sen haberdar ol ve özel erken erişim ödüllerini kazan.
          </p>

          <form className="relative group" onSubmit={handleWaitlistSubmit}>
            <div className="mb-4">
              <TurnstileWidget onVerify={setTurnstileToken} />
            </div>
            <div className="relative">
              <input
                type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresini yaz..."
              required
              disabled={status === "loading" || status === "success"}
              className="w-full px-6 py-4 bg-surface border border-white/5 rounded-2xl text-white focus:outline-none focus:border-white/20 transition-all pr-36 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="absolute right-2 top-2 bottom-2 px-6 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "..." : "Katıl"}
            </button>
          </div>
        </form>
          
          {message && (
            <p className={`mt-4 text-sm font-medium ${status === "success" ? "text-green-400" : "text-red-400"}`}>
              {message}
            </p>
          )}

          <p className="mt-4 text-[10px] text-text-muted italic text-center">
            * Spam göndermiyoruz, sadece önemli güncellemeleri paylaşacağız.
          </p>
        </div>
      </section>

      {/* === HAKKIMIZDA === */}
      <section id="hakkinda" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-medium text-white uppercase tracking-wider">Hakkımızda</span>
              <h2 className="text-3xl font-bold mt-3 mb-6 text-white">FNAFO Nedir?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                FNAFO, bağımsız Türk geliştiriciler tarafından yapılan bir atmosferik
                korku-gerilim oyunudur. Terk edilmiş bir tesiste geçen hikayesiyle
                oyuncuları karanlık bir maceraya davet eder.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                Modern oyun motorları ve ses teknolojileri kullanılarak geliştirilen FNAFO,
                FNAF serisinden ilham alarak benzersiz bir Türk korku deneyimi sunmayı hedefler.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Korku", "Gerilim", "Hikaye", "Indie", "Türkçe"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-white/5 text-text-muted rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/5 bg-surface p-8">
              <div className="space-y-4">
                {[
                  { label: "Geliştirici", value: "Soulet Studios" },
                  { label: "Platform", value: "Windows (macOS yakında)" },
                  { label: "Tür", value: "Korku / Gerilim / Hikaye" },
                  { label: "Motor", value: "Unity 6.4" },
                  { label: "Durum", value: "Waitlist" },
                  { label: "Fiyat", value: "Ücretsiz" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-sm text-text-muted">{item.label}</span>
                    <span className="text-sm font-medium text-text-primary">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
