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
    window.location.reload(); 
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-end justify-center md:justify-end p-6 pointer-events-none">
      <div className="bg-black border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl w-full max-w-md pointer-events-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h3 className="text-white font-semibold mb-2">Çerez Kullanımı ve Gizlilik</h3>
        <p className="text-text-secondary text-sm mb-6 leading-relaxed">
          Soulet deneyimini en iyi şekilde yaşamanız için çerezleri kullanıyoruz. 
          <span className="text-white"> Kişisel bilgileriniz asla toplanmaz ve verileriniz tamamen anonim olarak analiz edilir.</span> 
          Devam ederek bu kullanımı kabul etmiş sayılırsınız.
        </p>
        <div className="flex">
          <button
            onClick={handleAccept}
            className="w-full px-4 py-2.5 bg-white text-black text-xs font-bold rounded-lg hover:bg-white/90 transition-all cursor-pointer"
          >
            Anladım ve Kabul Ediyorum
          </button>
        </div>
      </div>
    </div>
  );
}
