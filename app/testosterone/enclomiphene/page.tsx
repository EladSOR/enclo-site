import type { Metadata } from "next";
import Link from "next/link";
import { getAllBrands } from "../../lib/brands";
import BrandCard from "../../components/BrandCard";

const PAGE_URL = "https://comparet.com/testosterone/enclomiphene";

export const metadata: Metadata = {
  title: "Testosterone & Enclomiphene Providers Comparison | CompareT",
  description:
    "Browse and compare testosterone-related providers and enclomiphene programs by pricing, onboarding, and structure.",
  openGraph: {
    title: "Testosterone & Enclomiphene Providers Comparison | CompareT",
    description:
      "Browse and compare testosterone-related providers and enclomiphene programs by pricing, onboarding, and structure.",
    url: PAGE_URL,
  },
  twitter: {
    title: "Testosterone & Enclomiphene Providers Comparison | CompareT",
    description:
      "Browse and compare testosterone-related providers and enclomiphene programs by pricing, onboarding, and structure.",
  },
};

export default function EnclomiphenePage() {
  const brands = getAllBrands();
  const lowestPrice = brands[0].priceFromMonthly;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://comparet.com" },
      { "@type": "ListItem", position: 2, name: "T Providers", item: PAGE_URL },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Enclomiphene Providers Comparison",
    url: PAGE_URL,
    numberOfItems: brands.length,
    itemListElement: brands.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      url: `https://comparet.com/testosterone/enclomiphene/${b.slug}`,
    })),
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#b5b0a8] mb-10 sm:mb-14">
          <Link href="/" className="hover:text-[#1c1917] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#78716c]">T Providers</span>
        </nav>

        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#a8a29e] uppercase mb-4">
            Informational Comparison
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1c1917] mb-4 leading-tight">
            Compare Enclomiphene Providers
          </h1>
          <p className="text-base text-[#78716c] leading-relaxed">
            Browse pricing and program details for enclomiphene providers in one
            place. All providers listed offer online access. Information is based
            on publicly available sources and may change over time.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 gap-4 mb-10 sm:mb-12 rounded-2xl bg-white border border-[#e3dfd6] p-5 sm:p-6 shadow-sm">
          <div className="text-center">
            <p className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-semibold text-[#2a6e47] tabular-nums">
              From ${lowestPrice}
            </p>
            <p className="text-xs text-[#b5b0a8] mt-1.5">Starting from / mo</p>
          </div>
          <div className="text-center border-l border-[#e3dfd6]">
            <p className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-semibold text-[#1c1917] tabular-nums">
              {brands.length}
            </p>
            <p className="text-xs text-[#b5b0a8] mt-1.5">Providers listed</p>
          </div>
        </div>

        {/* List header */}
        <div className="mb-4 sm:mb-5 flex items-center justify-between">
          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#1c1917]">
            All providers
          </h2>
          <span className="text-xs text-[#b5b0a8]">Price low → high</span>
        </div>

        {/* Provider cards */}
        <div className="flex flex-col gap-3">
          {brands.map((brand, i) => (
            <BrandCard key={brand.slug} brand={brand} highlight={i === 0} />
          ))}
        </div>

        <p className="mt-5 text-xs text-[#b5b0a8] leading-relaxed">
          Pricing is indicative and may vary based on consultation, dosage, and
          location. Verify current pricing directly with each provider.
        </p>
      </div>
    </>
  );
}
