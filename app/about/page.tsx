import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "CompareT is an informational website that helps users browse publicly available information about testosterone-related providers and programs.",
  openGraph: {
    title: "About | CompareT",
    description:
      "CompareT is an informational website that helps users browse publicly available information about testosterone-related providers and programs.",
    url: "https://comparet.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <nav className="flex items-center gap-2 text-sm text-[#b5b0a8] mb-10">
        <Link href="/" className="hover:text-[#1c1917] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#78716c]">About</span>
      </nav>

      <div className="max-w-2xl">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#a8a29e] uppercase mb-4">
          About
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-semibold text-[#1c1917] leading-tight mb-10">
          About CompareT
        </h1>

        <div className="rounded-2xl bg-white border border-[#e3dfd6] overflow-hidden shadow-sm">
          <div className="px-7 py-6 border-b border-[#f0ece4]">
            <p className="text-[11px] font-semibold text-[#b5b0a8] uppercase tracking-[0.12em] mb-3">
              What is CompareT?
            </p>
            <p className="text-sm text-[#44403c] leading-relaxed">
              CompareT is an informational website that helps users browse
              publicly available information about testosterone-related providers
              and programs in one place.
            </p>
            <p className="mt-3 text-sm text-[#44403c] leading-relaxed">
              We do not provide medical advice, diagnosis, or treatment.
            </p>
            <p className="mt-3 text-sm text-[#44403c] leading-relaxed">
              Information is based on publicly available sources and may change
              over time.
            </p>
          </div>

          <div className="px-7 py-6 border-b border-[#f0ece4]">
            <p className="text-[11px] font-semibold text-[#b5b0a8] uppercase tracking-[0.12em] mb-3">
              How it works
            </p>
            <p className="text-sm text-[#44403c] leading-relaxed">
              We collect and display publicly available pricing and program
              information from online providers. All information shown is for
              reference only. Prices, availability, and program details change
              frequently — always verify directly with each provider.
            </p>
          </div>

          <div className="px-7 py-6 border-b border-[#f0ece4]">
            <p className="text-[11px] font-semibold text-[#b5b0a8] uppercase tracking-[0.12em] mb-3">
              Independence
            </p>
            <p className="text-sm text-[#44403c] leading-relaxed">
              CompareT is independent and does not endorse or recommend any
              specific provider, product, or treatment. Some links may be
              affiliate links, which are clearly disclosed on relevant pages.
            </p>
          </div>

          <div className="px-7 py-6">
            <p className="text-[11px] font-semibold text-[#b5b0a8] uppercase tracking-[0.12em] mb-3">
              Medical disclaimer
            </p>
            <p className="text-sm text-[#44403c] leading-relaxed">
              Nothing on this site constitutes medical advice, diagnosis, or
              treatment. Always consult a qualified healthcare provider before
              starting, stopping, or changing any treatment or program.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
