import Link from "next/link";

export default function GizlilikPolitikasi() {
  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-text-muted hover:text-white transition-colors mb-8 inline-block text-sm">
          ← Ana Sayfaya Dön
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-white">Gizlilik Politikası</h1>
        
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Veri Toplama</h2>
            <p>
              Soulet olarak, kullanıcılarımızın gizliliğine önem veriyoruz. Sitemizde yer alan waitlist ve kayıt formları aracılığıyla sadece e-posta adresi ve kullanıcı adı gibi temel bilgileri topluyoruz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Verilerin Kullanımı</h2>
            <p>
              Toplanan veriler sadece oyun güncellemeleri hakkında sizi bilgilendirmek, hesap güvenliğinizi sağlamak ve kullanıcı deneyimini iyileştirmek amacıyla kullanılır. Verileriniz asla üçüncü şahıslarla reklam amacıyla paylaşılmaz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Çerezler (Cookies)</h2>
            <p>
              Sitemiz, temel işlevselliği sağlamak ve Google Analytics/Microsoft Clarity üzerinden anonim istatistikler toplamak için çerezleri kullanır. Kullanıcılar çerez tercihlerini tarayıcı ayarları üzerinden yönetebilirler.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Üçüncü Taraf Servisler</h2>
            <p>
              Güvenlik için Cloudflare Turnstile, analiz için Google Analytics ve reklamlar için Google Adsense servislerini kullanmaktayız. Bu servislerin kendi gizlilik politikaları geçerlidir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. İletişim</h2>
            <p>
              Gizlilik politikamız hakkında sorularınız için <a href="mailto:game@soulet.com.tr" className="text-white hover:underline">game@soulet.com.tr</a> adresinden bize ulaşabilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
