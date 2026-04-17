"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShowBanner(false);
    // İleride buraya Google Analytics / Clarity tetikleyicisi eklenebilir
    window.location.reload(); // Çerezlerin aktif olması için sayfayı yenile
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[200] md:max-w-md md:left-auto">
      <div className="bg-black border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl">
        <h3 className="text-white font-semibold mb-2">Çerez Politikası</h3>
        <p className="text-text-secondary text-sm mb-6 leading-relaxed">
          Deneyiminizi geliştirmek ve trafiği analiz etmek için çerezleri kullanıyoruz. 
          Kabul ederek anonim verilerinizin işlenmesine izin vermiş olursunuz.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 px-4 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-white/90 transition-all cursor-pointer"
          >
            Kabul Et
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 px-4 py-2 bg-transparent text-white text-xs font-medium border border-white/10 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
          >
            Reddet
          </button>
        </div>
      </div>
    </div>
  );
}
