import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "This website is for informational purposes only and does not provide medical advice, diagnosis, or treatment.",
  openGraph: {
    title: "Disclaimer | CompareT",
    url: "https://comparet.com/disclaimer",
  },
};

const sections = [
  {
    heading: "Informational purposes only",
    body: "This website is for informational purposes only and does not provide medical advice, diagnosis, or treatment. Content on this site should not be used as a substitute for professional medical advice.",
  },
  {
    heading: "No endorsements",
    body: "CompareT does not endorse or recommend any specific provider, product, or treatment. Listings are presented for informational comparison purposes only.",
  },
  {
    heading: "Accuracy of information",
    body: null,
    bullets: [
      "While we aim to keep information up to date, details such as pricing, availability, and program structure may change without notice.",
      "Users should verify all information directly with the provider before making any decisions.",
      "We do not guarantee the completeness or accuracy of the information presented.",
      "This website is for informational purposes only and does not provide medical advice, diagnosis, or treatment.",
    ],
  },
  {
    heading: "External links",
    body: "This site contains links to external websites. We are not responsible for the content, accuracy, or practices of any third-party sites. Links to provider websites may be affiliate links.",
  },
  {
    heading: "Consult a professional",
    body: "Always consult a qualified healthcare professional before starting, stopping, or changing any medical treatment or program.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <nav className="flex items-center gap-2 text-sm text-[#b5b0a8] mb-10">
        <Link href="/" className="hover:text-[#1c1917] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#78716c]">Disclaimer</span>
      </nav>

      <div className="max-w-2xl">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#a8a29e] uppercase mb-4">
          Legal
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-semibold text-[#1c1917] leading-tight mb-10">
          Disclaimer
        </h1>

        <div className="rounded-2xl bg-white border border-[#e3dfd6] overflow-hidden shadow-sm">
          {sections.map((section, i) => (
            <div
              key={section.heading}
              className={`px-7 py-6 ${i < sections.length - 1 ? "border-b border-[#f0ece4]" : ""}`}
            >
              <p className="text-[11px] font-semibold text-[#b5b0a8] uppercase tracking-[0.12em] mb-3">
                {section.heading}
              </p>
              {section.body && (
                <p className="text-sm text-[#44403c] leading-relaxed">
                  {section.body}
                </p>
              )}
              {section.bullets && (
                <ul className="flex flex-col gap-2">
                  {section.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#44403c] leading-relaxed">
                      <span className="text-[#b5b0a8] mt-0.5 shrink-0">–</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
