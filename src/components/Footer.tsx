import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-lg font-semibold text-text-primary">Soulet</span>
            </div>
            <p className="text-sm text-text-muted max-w-sm leading-relaxed">
              Bağımsız Türk geliştiriciler tarafından tasarlanan atmosferik
              korku-gerilim oyunu.
            </p>
            <a href="mailto:game@soulet.com.tr" className="inline-flex items-center gap-2 mt-3 text-sm text-text-muted hover:text-text-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              game@soulet.com.tr
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Oyun</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Özellikler", href: "#ozellikler" },
                { label: "İndir", href: "#indir" },
                { label: "Hakkımızda", href: "#hakkinda" }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-text-muted hover:text-text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Topluluk</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Discord", href: "https://discord.gg/4WxxJ6XXcX" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">© 2026 Soulet Studios. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <Link href="/gizlilik-politikasi" className="text-xs text-text-muted hover:text-text-primary transition-colors">Gizlilik Politikası</Link>
            <Link href="/kullanim-sartlari" className="text-xs text-text-muted hover:text-text-primary transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
