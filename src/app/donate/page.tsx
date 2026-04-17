'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { Heart, CheckCircle } from 'lucide-react';

export default function DonatePage() {
  const donationOptions = [
    { amount: '5 TL', description: 'Küçük bir destek.' },
    { amount: '10 TL', description: 'Gelişimimize katkıda bulunun.' },
    { amount: '100 TL', description: 'Sunucumuzun ayakta kalmasını sağlayın.' },
    { amount: '200 TL', description: 'En büyük destekçilerimizden biri olun.' },
  ];

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <main className="container mx-auto px-4 py-32 space-y-12 min-h-screen" id="main-content">
      <div className="text-center space-y-4">
        {/* H1: Sayfa başlığı */}
        <h1 className="text-5xl font-bold tracking-tighter text-white font-creepy">BAĞIŞ YAP</h1>
        {/* Kontrast artırıldı: text-gray-400 -> text-gray-300 */}
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Soulet projesini desteklemek ve topluluğumuzun büyümesine yardımcı olmak için bağış yapabilirsiniz. Tüm bağışlar geliştirme masrafları için kullanılır.
        </p>
      </div>

      {/* Reklam Alanı */}
      <div className="flex flex-col items-center justify-center w-full py-4 bg-white/5 border border-dashed border-white/10 rounded-xl overflow-hidden min-h-[120px]">
        {/* Kontrast artırıldı: text-gray-500 -> text-gray-200 */}
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
              {/* H2: Alt başlıklar */}
              <h2 className="text-4xl font-bold text-white mb-2">
                {option.amount}
              </h2>
              {/* Kontrast artırıldı: text-gray-400 -> text-gray-300 */}
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
              </ul>
            </div>

            <button 
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
