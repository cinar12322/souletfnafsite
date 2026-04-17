import GameCard from "@/components/GameCard";

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
  { value: "50K+", label: "Wishliste Ekleme" },
  { value: "4.8", label: "Ortalama Puan" },
  { value: "12", label: "Ay Geliştirme" },
  { value: "5", label: "Farklı Son" },
];

export default function Home() {
  return (
    <>
      {/* === HERO === */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            <span className="text-xs font-medium text-primary-light">Erken Erişim — v0.8.2</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Karanlıkta bir hikaye
            <br />
            <span className="text-primary">keşfedilmeyi bekliyor.</span>
          </h1>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Soulet, terk edilmiş bir tesiste geçen atmosferik bir korku-gerilim oyunudur.
            Hayatta kal, ipuçlarını topla ve karanlığın ardındaki gerçeği ortaya çıkar.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <a
              href="#indirme"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-all text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Ücretsiz Demo İndir
            </a>
            <a
              href="#trailer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-text-primary font-medium rounded-xl border border-white/10 transition-all text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Trailer İzle
            </a>
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
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Özellikler</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Neden Soulet?
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

      {/* === TRAILER === */}
      <section id="trailer" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Medya</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">Oynanış Videosu</h2>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-surface">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface to-dark">
              <div className="text-center">
                <button className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all cursor-pointer border border-primary/20">
                  <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <p className="text-text-muted text-sm">Trailer yakında yayınlanacak</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === İNDİRME === */}
      <section id="indirme" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">İndirme</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">Hemen Başla</h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Ücretsiz demo sürümünü indir, Soulet dünyasını keşfetmeye başla.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl border border-white/5 bg-surface hover:border-primary/20 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Windows</h3>
                  <p className="text-xs text-text-muted">Win 10/11 · 64bit · 4GB RAM</p>
                </div>
              </div>
              <button className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors">
                İndir — Demo v0.8.2
              </button>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-surface opacity-50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-text-muted" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.504 0c-.155 0-.311.012-.465.036l-.773.125a3.81 3.81 0 00-.65.168c-1.02.431-1.907 1.31-2.397 2.373-.324.7-.468 1.55-.468 2.298 0 .064.002.133.005.199l.009.13.009.064c.007.088.017.172.029.253a4.8 4.8 0 00.088.467l.023.088c.011.033.019.074.033.11.03.085.062.168.098.252l.078.174.1.19c.029.048.054.096.083.144l.09.138c.04.058.078.116.12.172l.087.111.095.111c.064.071.132.14.2.206a4.094 4.094 0 00.222.198l.024.019a3.93 3.93 0 01-.904 2.421c-.161.183-.334.351-.516.503a5.41 5.41 0 01-.323.237c-.163.106-.338.2-.52.277a4.26 4.26 0 01-.847.258C4.092 11.048 2 13.181 2 15.862c0 2.755 2.08 5.009 4.773 5.062l.143.001h10.168C19.343 20.89 21.5 18.65 21.5 15.862c0-2.588-1.953-4.696-4.429-4.992a4.166 4.166 0 01-.724-.228 3.404 3.404 0 01-.5-.269 4.44 4.44 0 01-.312-.232 3.93 3.93 0 01-.51-.5 3.93 3.93 0 01-.904-2.421l.024-.019c.077-.062.153-.128.222-.198.069-.066.137-.135.2-.206l.095-.111.087-.111c.042-.056.08-.114.12-.172l.09-.138c.029-.048.054-.096.083-.144l.1-.19.078-.174c.036-.084.068-.167.098-.252.014-.036.022-.077.033-.11l.023-.088a4.8 4.8 0 00.088-.467c.012-.081.022-.165.029-.253l.009-.064.009-.13c.003-.066.005-.135.005-.199 0-.748-.144-1.598-.468-2.298-.49-1.063-1.377-1.942-2.397-2.373a3.81 3.81 0 00-.65-.168l-.773-.125A3.53 3.53 0 0012.504 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">macOS</h3>
                  <p className="text-xs text-text-muted">Apple Silicon · Intel</p>
                </div>
              </div>
              <button disabled className="w-full py-2.5 bg-white/5 text-text-muted text-sm font-medium rounded-lg cursor-not-allowed">
                Yakında
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-text-muted mt-6">
            Minimum gereksinimler: Windows 10 64-bit, Intel i5 / Ryzen 5, 8GB RAM, GTX 1060 / RX 580
          </p>
        </div>
      </section>

      {/* === HAKKINDA === */}
      <section id="hakkinda" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Hakkında</span>
              <h2 className="text-3xl font-bold mt-3 mb-6">Soulet Nedir?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Soulet, bağımsız Türk geliştiriciler tarafından yapılan bir atmosferik
                korku-gerilim oyunudur. Terk edilmiş bir tesiste geçen hikayesiyle
                oyuncuları karanlık bir maceraya davet eder.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                Modern oyun motorları ve ses teknolojileri kullanılarak geliştirilen Soulet,
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
                  { label: "Motor", value: "Unreal Engine 5" },
                  { label: "Durum", value: "Erken Erişim" },
                  { label: "Fiyat", value: "Ücretsiz Demo" },
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
