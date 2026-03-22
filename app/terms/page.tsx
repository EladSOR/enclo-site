import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for CompareT.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <nav className="flex items-center gap-2 text-sm text-[#b5b0a8] mb-10">
        <Link href="/" className="hover:text-[#1c1917] transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-[#78716c]">Terms of Use</span>
      </nav>

      <div className="max-w-2xl">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#a8a29e] uppercase mb-4">
          Legal
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-semibold text-[#1c1917] leading-tight mb-4">
          Terms of Use
        </h1>
        <p className="text-sm text-[#b5b0a8] mb-10">
          Last updated: March 2026
        </p>

        <div className="rounded-2xl bg-white border border-[#e3dfd6] overflow-hidden shadow-sm">
          {[
            {
              heading: "Acceptance of terms",
              body: "By accessing or using CompareT, you agree to be bound by these Terms of Use. If you do not agree, please do not use this site.",
            },
            {
              heading: "Informational use only",
              body: "CompareT provides informational content only. Nothing on this site constitutes medical, legal, or financial advice. Use of this site does not create any professional relationship.",
            },
            {
              heading: "Accuracy of content",
              body: "We make reasonable efforts to keep information current, but we make no guarantees about the accuracy, completeness, or timeliness of any content. Pricing and program details may change without notice.",
            },
            {
              heading: "Intellectual property",
              body: "All content on this site is the property of CompareT unless otherwise noted. You may not reproduce, distribute, or create derivative works without prior written permission.",
            },
            {
              heading: "Limitation of liability",
              body: "To the fullest extent permitted by law, CompareT shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of this site or reliance on any information provided.",
            },
            {
              heading: "External links",
              body: "Links to external websites are provided for convenience only. We do not endorse and are not responsible for the content, accuracy, or practices of any linked sites.",
            },
            {
              heading: "Changes to terms",
              body: "We may update these Terms of Use at any time. Continued use of the site following any changes constitutes acceptance of the updated terms.",
            },
          ].map((section, i, arr) => (
            <div
              key={section.heading}
              className={`px-7 py-6 ${i < arr.length - 1 ? "border-b border-[#f0ece4]" : ""}`}
            >
              <p className="text-[11px] font-semibold text-[#b5b0a8] uppercase tracking-[0.12em] mb-3">
                {section.heading}
              </p>
              <p className="text-sm text-[#44403c] leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
