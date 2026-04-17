import Link from "next/link";

export default function KullanimSartlari() {
  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-text-muted hover:text-white transition-colors mb-8 inline-block text-sm">
          ← Ana Sayfaya Dön
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-white">Kullanım Şartları</h1>
        
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Şartların Kabulü</h2>
            <p>
              Soulet web sitesine erişerek ve kullanarak, bu kullanım şartlarını tamamen kabul etmiş sayılırsınız. Eğer bu şartları kabul etmiyorsanız, lütfen siteyi kullanmayınız.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Fikri Mülkiyet Hakları</h2>
            <p>
              Sitede yer alan tüm içerikler, logolar, grafikler ve oyun materyalleri Soulet Studios'a aittir. İzinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Kullanıcı Sorumlulukları</h2>
            <p>
              Kullanıcılar, site üzerindeki formları doldururken doğru bilgi vermekle yükümlüdür. Site güvenliğini bozmaya yönelik her türlü girişim yasal takibata tabi tutulacaktır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Sorumluluk Reddi</h2>
            <p>
              Soulet Studios, sitenin kesintisiz veya hatasız çalışacağını garanti etmez. Site içeriğinde önceden haber vermeksizin değişiklik yapma hakkını saklı tutar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Değişiklikler</h2>
            <p>
              Bu şartlar zaman zaman güncellenebilir. Güncel şartlar sitede yayınlandığı andan itibaren geçerli olur.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
