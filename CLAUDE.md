@AGENTS.md

# Soulet — Oyun Tanıtım Sitesi

## Proje Özeti
Soulet, FNAF tarzı bir korku oyununun tanıtım/landing page sitesidir. Tek sayfalık (SPA-benzeri) yapıda, karanlık mor neon temalı tasarıma sahiptir. Site Türkçedir.

## Tech Stack
| Katman | Teknoloji | Versiyon |
|--------|-----------|---------|
| Framework | Next.js (App Router, `src/` dizini) | 16.x |
| Dil | TypeScript | 6.x |
| Stil | TailwindCSS v4 (`@theme` directive, CSS-first config) | 4.2 |
| Auth | NextAuth v5 beta (Google, Discord, Credentials) | 5.0.0-beta.31 |
| DB / ORM | Prisma + MongoDB | 6.x |
| Güvenlik | Cloudflare Turnstile (Bot Koruması) | @marsidev/react-turnstile |
| React | React 19 | 19.2 |
| Deploy | Vercel | - |

**Tailwind v4 Uyarısı:** `tailwind.config.ts` YOKTUR. Tema `src/app/globals.css` içinde `@theme {}` bloğuyla tanımlanır. Eski v3 config syntax'ı kullanma.

## Dosya Yapısı ve Her Dosyanın Görevi

```
src/
├── app/
│   ├── actions.ts                       → Server Actions (Waitlist vb.)
│   ├── api/auth/[...nextauth]/route.ts  → NextAuth API route
│   ├── giris/page.tsx                   → Giriş sayfası
│   ├── kayit/page.tsx                   → Kayıt sayfası
│   ├── globals.css                      → Tailwind v4 tema + custom animasyonlar
│   ├── layout.tsx                       → Root layout
│   └── page.tsx                         → Ana sayfa
├── components/
│   ├── TurnstileWidget.tsx → Cloudflare Bot Koruması widget'ı
│   ├── Navbar.tsx          → Üst navbar
│   ├── Footer.tsx          → Alt footer
│   ├── GameCard.tsx        → Özellik kartı
│   └── Providers.tsx       → SessionProvider wrapper
├── lib/
│   ├── prisma.ts           → Prisma Client singleton
│   └── turnstile.ts        → Server-side Turnstile doğrulama logic'i
└── auth.ts                 → NextAuth config + Turnstile doğrulaması
```

## Tema & Renk Paleti (globals.css @theme)
| Token | Hex | Kullanım |
|-------|-----|----------|
| `primary` | `#7c3aed` | Ana mor renk, butonlar, vurgular |
| `primary-dark` | `#6d28d9` | Hover state |
| `primary-light` | `#a78bfa` | Badge metinleri |
| `dark` | `#0c0a1a` | Input arka planları |
| `surface` | `#13112a` | Kart arka planları |
| `surface-light` | `#1e1b3a` | Scrollbar |
| `text-primary` | `#e8e6f0` | Ana metin |
| `text-secondary` | `#9b95b5` | İkincil metin |
| `text-muted` | `#6b6490` | Soluk metin |
| `success` | `#22c55e` | Durum göstergeleri |
| Body bg | `#08061a` | Sayfa arka planı |

## Custom CSS Animasyonları
- `scanline-overlay` — FNAF tarzı yatay çizgi overlay (fixed, z-100)
- `static-bg` — SVG noise texture (body'de kullanılıyor)
- `animate-flicker` — 8s titreme efekti
- `animate-pulse-glow` — 4s mor parıltı
- `animate-cam-blink` — 3s güvenlik kamerası yanıp sönme
- `vignette` — Radial gradient karartma
- `warning-stripe` — Sarı uyarı şeridi deseni

## Fontlar
- **Inter** — Body font (`--font-body` CSS variable)
- **Creepster** — Korku temalı başlık fontu (`--font-creepy` CSS variable, henüz kullanılmıyor)

## Auth Sistemi (src/auth.ts)
- **NextAuth v5** export pattern: `export const { handlers, signIn, signOut, auth } = NextAuth({...})`
- API route: `src/app/api/auth/[...nextauth]/route.ts` → `export const { GET, POST } = handlers`
- **Provider'lar:** Google, Discord, Credentials
- **Credentials:** Turnstile bot koruması zorunludur.
- **Custom giriş sayfası:** `/giris`
- **SessionProvider:** `Providers.tsx` ile layout'ta sarmalanmış

## Sayfa Bölümleri (page.tsx)
Ana sayfa tek bir server component, 5 bölümden oluşur:
1. **Hero** — Badge ("Erken Erişim v0.8.2"), başlık, açıklama, 2 CTA butonu, 4 istatistik
2. **Özellikler** (`#ozellikler`) — 6 adet GameCard grid (3 sütun)
3. **Trailer** (`#trailer`) — Video placeholder ("Trailer yakında yayınlanacak")
4. **İndirme** (`#indirme`) — Windows (aktif) + macOS (disabled) download kartları
5. **Hakkında** (`#hakkinda`) — Oyun açıklaması + bilgi tablosu

## Navbar (Navbar.tsx)
- Scroll > 20px → blur arka plan + border
- Desktop: 4 link (Özellikler, Medya, İndir, Hakkında) + Giriş Yap + İndir butonu
- Mobil: Hamburger menü, aynı linkler

## Yapılanlar & Yapılacaklar
- [x] Prisma + MongoDB veritabanı bağlantısı
- [x] Cloudflare Turnstile Bot Koruması (Login, Register, Waitlist)
- [ ] Google Analytics + Microsoft Clarity entegrasyonu
- [x] Vercel deploy (Yapıldı, `git push` unutma!)
- [ ] Gerçek OAuth provider env variable'ları (AUTH_GOOGLE_ID vb.)
- [ ] Trailer video embed
- [x] Gerçek kullanıcı kayıt/giriş sistemi (Prisma entegrasyonu başladı)

## Env Variables (Vercel/Local)
```env
AUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
AUTH_DISCORD_ID=
AUTH_DISCORD_SECRET=
DATABASE_URL=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

## Komutlar
```bash
npm run dev          # Dev server
npm run build        # Production build
npm run lint         # ESLint
npx prisma generate  # Prisma şeması değişirse mutlaka çalıştır
```

## Deployment Checklist (UNUTMA!)
1. `git add .`
2. `git commit -m "açıklama"`
3. **`git push origin main`** (Vercel'e gitmesi için zorunlu!)
4. Vercel Dashboard'dan build durumunu kontrol et.
5. Yeni bir `.env` değişkeni eklediysen Vercel Settings -> Environment Variables kısmına ekle ve "Redeploy" yap.

## Önemli Kurallar
- Kullanıcı Türkçe konuşuyor, site içeriği Türkçe
- Tailwind v4 kullanılıyor — `@theme {}` bloğu ile CSS-first config
- NextAuth v5 beta
- Turnstile bot koruması Credentials login ve Waitlist formlarında aktiftir.
- path alias: `@/*` → `./src/*`
