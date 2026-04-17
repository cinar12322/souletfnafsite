import type { Metadata } from "next";
import { Inter, Creepster } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creepy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FNAFO | Soulet - Karanl\u0131kta Hayatta Kal",
  description:
    "FNAFO: Terk edilmi\u015f bir tesiste ge\u00e7en atmosferik korku-gerilim oyunu. Animatroniklere kar\u015f\u0131 hayatta kal.",
  keywords: [
    "fnafo",
    "soulet",
    "oyun",
    "indie game",
    "korku",
    "fnaf",
    "t\u00fcrk oyun",
    "animatronik",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${creepster.variable}`}>
      <body className="min-h-screen antialiased">
        <Script 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2383320302375930"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Script id="consent-logic" strategy="afterInteractive">
          {`
            const consent = localStorage.getItem("cookie_consent");
            if (consent === "accepted") {
              // Google Analytics
              const gaScript = document.createElement("script");
              gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-4G8HC9L0PY";
              gaScript.async = true;
              document.head.appendChild(gaScript);

              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4G8HC9L0PY');

              // Microsoft Clarity
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wcuq80rlir");
            }
          `}
        </Script>
        <Providers>
          <header>
            <Navbar />
          </header>
          <main id="main-content">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
