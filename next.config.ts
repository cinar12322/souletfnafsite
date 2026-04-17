import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.1.5", "localhost:3000"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.clarity.ms https://challenges.cloudflare.com https://static.cloudflareinsights.com https://fundingchoicesmessages.google.com;",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fundingchoicesmessages.google.com;",
              "img-src 'self' data: https://*.google-analytics.com https://*.googlesyndication.com https://*.clarity.ms https://*.doubleclick.net https://fundingchoicesmessages.google.com;",
              "connect-src 'self' https://*.google-analytics.com https://*.googlesyndication.com https://*.analytics.google.com https://*.clarity.ms https://challenges.cloudflare.com https://*.doubleclick.net https://fundingchoicesmessages.google.com;",
              "frame-src 'self' https://challenges.cloudflare.com https://googleads.g.doubleclick.net https://www.google.com https://fundingchoicesmessages.google.com;",
              "font-src 'self' https://fonts.gstatic.com;",
              "frame-ancestors 'self';",
              "upgrade-insecure-requests;",
            ].join(" "),
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
