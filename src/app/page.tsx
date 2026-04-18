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
        {/* Animated Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] animate-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-white/2 rounded-full blur-[150px] animate-glow [animation-delay:2s]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-pulse-slow">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/80">Erken Geliştirme Aşaması</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1] text-white horror-title">
            KARANLIKTA BİR <br />
            <span className="text-white/40">HİKAYE</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            FNAFO, terk edilmiş bir tesiste geçen atmosferik bir korku deneyimidir. 
            Hayatta kal, ipuçlarını topla ve karanlığın ardındaki <span className="text-white">kan donduran gerçeği</span> ortaya çıkar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a
              href="#waitlist"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-white text-black font-black rounded-2xl transition-all hover:scale-105 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 tracking-widest uppercase text-xs">Waitlist'e Katıl</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <button
              className="inline-flex items-center justify-center px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all text-xs uppercase tracking-widest glass"
            >
              Fragmanı İzle
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto py-10 border-t border-white/5">
            {stats.map((stat) => (
              <div key={stat.label} className="group cursor-default">
                <div className="text-3xl font-black text-white group-hover:text-white transition-colors tracking-tighter">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-text-muted mt-2 font-bold group-hover:text-white/60 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Fog effect bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 fog-overlay pointer-events-none" />
      </section>

      {/* === ÖZELLİKLER === */}
      <section id="ozellikler" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white horror-title mb-6">NEDEN FNAFO?</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <GameCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* === WAITLIST === */}
      <section id="waitlist" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/[0.02] blur-[120px] rounded-full" />
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white horror-title mb-6">SIRAYA GİR</h2>
          <p className="text-text-secondary mb-12 text-lg font-light">
            FNAFO yayınlandığında ilk sen haberdar ol ve <span className="text-white font-medium">özel erken erişim ödüllerini</span> kazan.
          </p>

          <form className="space-y-6" onSubmit={handleWaitlistSubmit}>
            <div className="glass p-2 rounded-3xl border border-white/10">
              <div className="mb-4 mt-2">
                <TurnstileWidget onVerify={setTurnstileToken} />
              </div>
              <div className="relative flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Korku dolu e-postanı buraya bırak..."
                  required
                  disabled={status === "loading" || status === "success"}
                  className="w-full px-8 py-5 bg-black/40 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-white/20 transition-all disabled:opacity-50 placeholder:text-white/20 font-light"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-gray-200 transition-all disabled:opacity-50 uppercase tracking-widest text-xs shrink-0"
                >
                  {status === "loading" ? "..." : "Sıraya Gir"}
                </button>
              </div>
            </div>
          </form>
          
          {message && (
            <div className={`mt-6 p-4 rounded-2xl border ${status === "success" ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-red-500/10 border-red-500/20 text-red-400"} animate-pulse-slow`}>
              <p className="text-sm font-bold uppercase tracking-widest">{message}</p>
            </div>
          )}
        </div>
      </section>

      {/* === HAKKIMIZDA === */}
      <section id="hakkinda" className="py-32 px-6 border-t border-white/5 bg-surface/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-white/[0.03] rounded-[2rem] blur-2xl group-hover:bg-white/[0.05] transition-all" />
              <div className="relative">
                <h2 className="text-4xl font-bold mb-8 text-white horror-title">FNAFO NEDİR?</h2>
                <div className="space-y-6 text-text-secondary leading-relaxed font-light text-lg">
                  <p>
                    FNAFO, bağımsız Türk geliştiriciler tarafından Unity 6 motoruyla inşa edilen 
                    bir <span className="text-white">atmosferik korku-gerilim</span> oyunudur. 
                  </p>
                  <p>
                    Modern ses teknolojileri ve dinamik aydınlatma sistemleri kullanılarak geliştirilen FNAFO, 
                    yerli ve milli bir korku deneyimi sunmayı hedefler.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-10">
                  {["Korku", "Gerilim", "Hikaye", "Indie", "Türkçe"].map((tag) => (
                    <span key={tag} className="px-5 py-2 text-[10px] uppercase tracking-widest bg-white/5 text-white/60 rounded-xl border border-white/5 font-bold glass">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass rounded-[2rem] p-10 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="space-y-6 relative z-10">
                {[
                  { label: "Geliştirici", value: "Soulet Studios" },
                  { label: "Platform", value: "Windows / macOS" },
                  { label: "Tür", value: "Korku / Gerilim" },
                  { label: "Motor", value: "Unity 6.4" },
                  { label: "Durum", value: "Waitlist" },
                  { label: "Fiyat", value: "Ücretsiz" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 group/item">
                    <span className="text-xs uppercase tracking-[0.2em] text-text-muted font-bold group-hover/item:text-white transition-colors">{item.label}</span>
                    <span className="text-sm font-medium text-white group-hover/item:scale-105 transition-transform origin-right">{item.value}</span>
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
