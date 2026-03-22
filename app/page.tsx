import type { Metadata } from "next";
import { getAllBrands } from "./lib/brands";
import BrandCard from "./components/BrandCard";

export const metadata: Metadata = {
  title: "Compare Testosterone & Enclomiphene Providers | CompareT",
  description:
    "Compare testosterone-related providers and enclomiphene programs. Browse pricing, onboarding, and provider differences in one place.",
  openGraph: {
    title: "Compare Testosterone & Enclomiphene Providers | CompareT",
    description:
      "Compare testosterone-related providers and enclomiphene programs. Browse pricing, onboarding, and provider differences in one place.",
    url: "https://comparet.com",
  },
  twitter: {
    title: "Compare Testosterone & Enclomiphene Providers | CompareT",
    description:
      "Compare testosterone-related providers and enclomiphene programs. Browse pricing, onboarding, and provider differences in one place.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CompareT",
  url: "https://comparet.com",
  description:
    "CompareT is an informational website that helps users browse and compare testosterone-related providers and programs.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CompareT",
  url: "https://comparet.com",
  description:
    "Browse and compare testosterone-related providers and enclomiphene programs in one place.",
};

export default function HomePage() {
  const brands = getAllBrands();

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-20">
        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#a8a29e] uppercase mb-4">
            Informational Comparison
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#1c1917] leading-[1.1] tracking-tight mb-4 sm:mb-5">
            Compare Testosterone Providers
          </h1>
          <p className="text-base sm:text-lg text-[#78716c] leading-relaxed max-w-xl mx-auto">
            Browse pricing and program details across testosterone-related
            providers in one place. Sorted by monthly cost.
          </p>
        </div>

        {/* Section header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-semibold text-[#1c1917]">
            Enclomiphene providers
          </h2>
          <span className="text-sm text-[#b5b0a8]">{brands.length} listed</span>
        </div>

        {/* Provider list */}
        <div className="flex flex-col gap-3">
          {brands.map((brand, i) => (
            <BrandCard key={brand.slug} brand={brand} highlight={i === 0} />
          ))}
        </div>

        <p className="mt-5 text-xs text-[#b5b0a8] text-center leading-relaxed">
          Information is based on publicly available sources and may change over
          time. Pricing is indicative — verify directly with each provider.
        </p>

        {/* Trust section */}
        <div className="mt-16 sm:mt-24 pt-16 sm:pt-20 border-t border-[#e3dfd6] text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1c1917] leading-[1.05] tracking-tight mb-6 sm:mb-8">
              Built to make comparison easier.
            </h2>
            <p className="text-lg sm:text-xl text-[#78716c] leading-relaxed max-w-2xl mx-auto">
              CompareT brings publicly available information about
              testosterone-related providers into one place, so you can review
              pricing, onboarding style, and program differences more clearly
              before verifying directly with each provider.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
