import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import AskAssistant from "./components/AskAssistant";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const BASE_URL = "https://comparet.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CompareT — Testosterone Provider Comparison",
    template: "%s | CompareT",
  },
  description:
    "Browse and compare testosterone-related providers and programs in one place. An independent, informational reference.",
  openGraph: {
    siteName: "CompareT",
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "CompareT — Compare Testosterone Providers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@comparet",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        {/* Header */}
        <header className="border-b border-[#e3dfd6] bg-[#f5f3ee]">
          <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1c1917] hover:text-[#2a6e47] transition-colors tracking-tight"
            >
              CompareT
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-sm text-[#78716c] hover:text-[#1c1917] transition-colors">
                Home
              </Link>
              <Link href="/testosterone/enclomiphene" className="text-sm text-[#78716c] hover:text-[#1c1917] transition-colors">
                T Providers
              </Link>
              <Link href="/about" className="text-sm text-[#78716c] hover:text-[#1c1917] transition-colors">
                About
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-[#e3dfd6] bg-[#f5f3ee] mt-auto">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-base font-bold text-[#1c1917]">
                  CompareT
                </span>
                <p className="mt-1.5 text-xs text-[#a8a29e] leading-relaxed max-w-xs">
                  Informational comparison of testosterone-related providers.
                  Not medical advice.
                </p>
              </div>
              <nav className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  { label: "About",          href: "/about" },
                  { label: "Disclaimer",     href: "/disclaimer" },
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms",          href: "/terms" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs text-[#a8a29e] hover:text-[#1c1917] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <p className="mt-6 text-xs text-[#b5b0a8] leading-relaxed">
              Information is based on publicly available sources and may change
              over time.
            </p>
            <p className="mt-4 pt-6 border-t border-[#e3dfd6] text-xs text-[#b5b0a8] leading-relaxed">
              This site is for informational purposes only and does not
              constitute medical advice, diagnosis, or treatment. Always consult
              a qualified healthcare provider. Prices shown are approximate and
              subject to change.
            </p>
          </div>
        </footer>

        <AskAssistant />
      </body>
    </html>
  );
}
