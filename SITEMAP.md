# Soulet Site Haritası

Bu belge, Soulet projesinin mevcut sayfa yapısını ve bölümlerini listeler.

## 1. Ana Sayfalar (Routes)
- **[Ana Sayfa (Home)](/)**: Oyunun tanıtımı, özellikleri ve waitlist katılım alanı.
- **[Giriş Yap](/giris)**: Kullanıcı giriş sayfası (Google, Discord ve E-posta/Şifre desteği).
- **[Kayıt Ol](/kayit)**: Yeni hesap oluşturma sayfası.

## 2. Ana Sayfa Bölümleri (Sections)
- **Hero Bölümü**: Karşılama ekranı, oyun sloganı ve istatistikler.
- **Özellikler (#ozellikler)**: Oyunun temel mekanikleri ve özellikleri (GameCard bileşenleri).
- **Waitlist (#waitlist)**: Erken erişim için e-posta kayıt formu (Turnstile korumalı).
- **Hakkımızda (#hakkinda)**: Soulet Studios ve oyun hakkında detaylı teknik bilgiler.

## 3. Global Bileşenler
- **Navbar**: Tüm sayfalarda üst kısımda yer alan navigasyon menüsü.
- **Footer**: Tüm sayfalarda alt kısımda yer alan bilgi ve topluluk linkleri.
- **Turnstile Widget**: Formlarda bot koruması sağlayan güvenlik bileşeni.

## 4. Teknik Altyapı
- **Authentication**: NextAuth.js v5
- **Database**: Prisma ORM (PostgreSQL)
- **Styling**: Tailwind CSS 4.0
- **Framework**: Next.js 16 (App Router)
