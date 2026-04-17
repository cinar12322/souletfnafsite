"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
  { href: "#ozellikler", label: "Özellikler" },
  { href: "#trailer", label: "Medya" },
  { href: "#waitlist", label: "Waitlist" },
  { href: "#hakkinda", label: "Hakkında" },
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
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-lg font-semibold text-text-primary">Soulet</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {status === "authenticated" ? (
              <>
                <span className="text-sm text-text-secondary">Hoş geldin, <span className="text-white font-medium">{session.user?.name}</span></span>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 text-sm text-red-400 hover:text-red-300 transition-colors border border-red-900/30 rounded-lg hover:bg-red-900/10"
                >
                  Çıkış Yap
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/giris"
                  className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Giriş Yap
                </Link>
                <Link
                  href="/kayit"
                  className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors border border-white/10 rounded-lg hover:bg-white/5"
                >
                  Kayıt Ol
                </Link>
              </>
            )}
            <a
              href="#waitlist"
              className="px-5 py-2 text-sm font-semibold bg-white hover:bg-white/90 text-black rounded-lg transition-colors"
            >
              Waitlist
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            aria-label="Menü"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-white/5 flex flex-col gap-2">
              {status === "authenticated" ? (
                <>
                  <div className="px-4 py-2 text-sm text-text-secondary">
                    Hoş geldin, <span className="text-white font-medium">{session.user?.name}</span>
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="px-4 py-2.5 text-sm font-medium text-red-400 border border-red-900/30 rounded-lg text-center"
                  >
                    Çıkış Yap
                  </button>
                </>
              ) : (
                <>
                  <Link href="/giris" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 text-sm text-text-secondary">
                    Giriş Yap
                  </Link>
                  <Link href="/kayit" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 text-sm text-text-secondary">
                    Kayıt Ol
                  </Link>
                </>
              )}
              <a href="#waitlist" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 text-sm font-bold bg-white text-black rounded-lg text-center">
                Waitlist
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
