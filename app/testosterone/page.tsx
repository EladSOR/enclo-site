import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testosterone Treatment Categories",
  description:
    "Browse informational comparisons of testosterone-related treatment categories including enclomiphene and more.",
};

const categories = [
  {
    name: "Enclomiphene",
    slug: "enclomiphene",
    description:
      "A selective estrogen receptor modulator (SERM) that stimulates the body's own testosterone production without direct hormone replacement.",
    providerCount: 5,
    priceFrom: 79,
  },
];

export default function TestosteronePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#a8a29e] mb-12">
        <Link href="/" className="hover:text-[#1c1917] transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-[#78716c]">Testosterone</span>
      </nav>

      <div className="max-w-xl mb-14">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#1c1917] mb-4 leading-tight">
          Testosterone treatment categories
        </h1>
        <p className="text-base text-[#78716c] leading-relaxed">
          Select a category below to view a side-by-side comparison of
          providers and pricing. All information is purely informational.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/testosterone/${category.slug}`}
            className="group flex flex-col gap-3 rounded-2xl bg-white border border-[#e3dfd6] p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#1c1917] group-hover:text-[#2a6e47] transition-colors">
                {category.name}
              </h2>
              <span className="text-xs text-[#a8a29e] tabular-nums mt-1">
                {category.providerCount} providers
              </span>
            </div>
            <p className="text-sm text-[#78716c] leading-relaxed">
              {category.description}
            </p>
            <div className="flex items-center justify-between mt-2 pt-4 border-t border-[#e3dfd6]">
              <span className="text-sm text-[#a8a29e]">
                From{" "}
                <span className="font-semibold text-[#2a6e47]">
                  ${category.priceFrom}/mo
                </span>
              </span>
              <span className="text-xs font-medium text-[#78716c] group-hover:text-[#2a6e47] transition-colors">
                Compare →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
