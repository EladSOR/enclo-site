import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for CompareT.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <nav className="flex items-center gap-2 text-sm text-[#b5b0a8] mb-10">
        <Link href="/" className="hover:text-[#1c1917] transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-[#78716c]">Privacy Policy</span>
      </nav>

      <div className="max-w-2xl">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#a8a29e] uppercase mb-4">
          Legal
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-semibold text-[#1c1917] leading-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#b5b0a8] mb-10">
          Last updated: March 2026
        </p>

        <div className="rounded-2xl bg-white border border-[#e3dfd6] overflow-hidden shadow-sm">
          {[
            {
              heading: "Information we collect",
              body: "CompareT is a static informational website. We do not collect personal information, require account registration, or store user data. We may use analytics tools to understand aggregate traffic patterns (e.g. page views).",
            },
            {
              heading: "Cookies",
              body: "This site may use minimal cookies for analytics purposes. No personally identifiable information is collected via cookies. You can disable cookies in your browser settings.",
            },
            {
              heading: "Third-party links",
              body: "This site links to third-party provider websites. We are not responsible for the privacy practices of any external sites. Please review the privacy policies of any third-party sites you visit.",
            },
            {
              heading: "Analytics",
              body: "We may use third-party analytics services to understand how visitors use this site. These services collect anonymous, aggregated data only. No personal information is sold or shared.",
            },
            {
              heading: "Changes to this policy",
              body: "We may update this Privacy Policy from time to time. Continued use of the site following any changes constitutes acceptance of the updated policy.",
            },
            {
              heading: "Contact",
              body: "If you have questions about this Privacy Policy, please use the contact information available on the About page.",
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
