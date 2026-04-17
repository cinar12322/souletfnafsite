'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { Heart, CheckCircle } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export default function DonatePage() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);

  const donationOptions = [
    { 
      amount: '5 TL', 
      description: 'Küçük bir destek.', 
      link: 'https://www.shopier.com/soulet/46248479',
      requiresLogin: true
    },
    { amount: '10 TL', description: 'Gelişimimize katkıda bulunun.' },
    { amount: '100 TL', description: 'Sunucumuzun ayakta kalmasını sağlayın.' },
    { amount: '200 TL', description: 'En büyük destekçilerimizden biri olun.' },
  ];

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  const handleDonate = (option: any) => {
    if (option.link) {
      if (status !== 'authenticated') {
        const confirmResult = window.confirm(
          "Emin misin? Hesabın açık değil. Bağışçı rolün otomatik olarak hesabına eklenmeyebilir. Yine de devam etmek istiyor musun?"
        );
        if (!confirmResult) return;
      } else {
        alert(`Teşekkürler ${session.user?.name}! Ödeme sayfasına yönlendiriliyorsun. Ödeme tamamlandıktan sonra Bağışçı rolün eklenecektir.`);
      }
      window.location.href = option.link;
    } else {
      alert("Bu bağış seçeneği şu an aktif değil. Lütfen 5 TL seçeneğini kullanın.");
    }
  };

  return (
    <main className="container mx-auto px-4 py-32 space-y-12 min-h-screen" id="main-content">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-green-500 text-white px-8 py-4 rounded-2xl shadow-2xl font-bold animate-bounce">
          Bağışınız için çok teşekkür ederiz! ❤️
        </div>
      )}

      {/* Google AdSense Script */}
      <Script 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2383320302375930"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter text-white font-creepy">BAĞIŞ YAP</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Soulet projesini desteklemek ve topluluğumuzun büyümesine yardımcı olmak için bağış yapabilirsiniz. Tüm bağışlar geliştirme masrafları için kullanılır.
        </p>
      </div>

      {/* Reklam Alanı */}
      <div className="flex flex-col items-center justify-center w-full py-4 bg-white/5 border border-dashed border-white/10 rounded-xl overflow-hidden min-h-[120px]">
        <p className="text-[10px] text-gray-200 uppercase tracking-widest mb-2 font-semibold">Reklam / Advertisement</p>
        <ins className="adsbygoogle"
             style={{ display: 'block', width: '100%', textAlign: 'center' }}
             data-ad-client="ca-pub-2383320302375930"
             data-ad-slot="auto"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {donationOptions.map((option) => (
          <div key={option.amount} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col hover:border-white/20 transition-all hover:bg-white/10 group">
            <div className="text-center mb-6">
              <Heart className="mx-auto text-red-500 w-12 h-12 mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <h2 className="text-4xl font-bold text-white mb-2">
                {option.amount}
              </h2>
              <p className="text-gray-300 text-sm">
                {option.description}
              </p>
            </div>
            
            <div className="flex-1 space-y-4 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-200">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" aria-hidden="true" />
                  Hızlı İşlem
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-200">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" aria-hidden="true" />
                  Güvenli Ödeme
                </li>
                {option.link && (
                  <li className="flex items-center gap-3 text-sm text-yellow-500 font-medium">
                    <CheckCircle className="w-5 h-5 text-yellow-500 shrink-0" aria-hidden="true" />
                    Bağışçı Rolü Verir
                  </li>
                )}
              </ul>
            </div>

            <button 
              onClick={() => handleDonate(option)}
              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors focus:ring-4 focus:ring-white/20 outline-none"
              aria-label={`${option.amount} bağış yap - güvenli ödeme`}
            >
              Şimdi Bağış Yap
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 p-8 border border-white/5 rounded-2xl bg-white/2">
        <p className="text-gray-300">
          Bağışlarınız için teşekkür ederiz. Herhangi bir sorunuz varsa lütfen topluluğumuza katılın.
        </p>
      </div>
    </main>
  );
}
