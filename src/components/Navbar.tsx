"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
  { href: "/#ozellikler", label: "Özellikler" },
  { href: "/#waitlist", label: "Waitlist" },
  { href: "/#hakkinda", label: "Hakkımızda" },
  { href: "/donate", label: "Bağış Yap" },
];

export default function Navbar() {
  const { data: session, status } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
      aria-label="Ana Gezinti"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Soulet Ana Sayfa">
            <span className="text-lg font-semibold text-white">Soulet</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {status === "authenticated" ? (
              <>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-400">Hoş geldin</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white font-medium">{session.user?.name}</span>
                    {/* @ts-ignore */}
                    {session.user?.role === "DONATOR" && (
                      <span className="px-1.5 py-0.5 text-[10px] bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 rounded font-bold uppercase tracking-wider">
                        Bağışçı
                      </span>
                    )}
                    {/* @ts-ignore */}
                    {session.user?.role === "ADMIN" && (
                      <span className="px-1.5 py-0.5 text-[10px] bg-red-500/20 text-red-500 border border-red-500/30 rounded font-bold uppercase tracking-wider">
                        Admin
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 text-sm text-red-400 hover:text-red-300 transition-colors border border-red-900/30 rounded-lg hover:bg-red-900/10 focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Oturumu Kapat"
                >
                  Çıkış Yap
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/giris"
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  Giriş Yap
                </Link>
                <Link
                  href="/kayit"
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors border border-white/10 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  Kayıt Ol
                </Link>
              </>
            )}
            <Link
              href="/#waitlist"
              className="px-5 py-2 text-sm font-semibold bg-white hover:bg-white/90 text-black rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Waitlist
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg"
            aria-label={menuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-white/5 flex flex-col gap-2">
              {status === "authenticated" ? (
                <>
                  <div className="px-4 py-2 flex flex-col items-start gap-1">
                    <span className="text-xs text-gray-400">Hoş geldin</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-white font-medium">{session.user?.name}</span>
                      {/* @ts-ignore */}
                      {session.user?.role === "DONATOR" && (
                        <span className="px-1.5 py-0.5 text-[10px] bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 rounded font-bold uppercase tracking-wider">
                          Bağışçı
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="px-4 py-2.5 text-sm font-medium text-red-400 border border-red-900/30 rounded-lg text-center focus:ring-2 focus:ring-red-500"
                    aria-label="Oturumu Kapat"
                  >
                    Çıkış Yap
                  </button>
                </>
              ) : (
                <>
                  <Link href="/giris" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 text-sm text-gray-300">
                    Giriş Yap
                  </Link>
                  <Link href="/kayit" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 text-sm text-gray-300">
                    Kayıt Ol
                  </Link>
                </>
              )}
              <Link href="/#waitlist" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 text-sm font-bold bg-white text-black rounded-lg text-center">
                Waitlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
