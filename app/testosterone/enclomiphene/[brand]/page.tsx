import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllBrands, getBrandBySlug } from "../../../lib/brands";

const BASE_URL = "https://comparet.com";

type Props = {
  params: Promise<{ brand: string }>;
};

export async function generateStaticParams() {
  return getAllBrands().map((b) => ({ brand: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand: slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) return { title: "Provider not found" };

  const pageUrl = `${BASE_URL}/testosterone/enclomiphene/${brand.slug}`;

  return {
    title: brand.seoTitle,
    description: brand.seoDescription,
    openGraph: {
      title: brand.seoTitle,
      description: brand.seoDescription,
      url: pageUrl,
    },
    twitter: {
      title: brand.seoTitle,
      description: brand.seoDescription,
    },
  };
}

export default async function BrandPage({ params }: Props) {
  const { brand: slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) notFound();

  const pageUrl = `${BASE_URL}/testosterone/enclomiphene/${brand.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",        item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "T Providers", item: `${BASE_URL}/testosterone/enclomiphene` },
      { "@type": "ListItem", position: 3, name: brand.name,    item: pageUrl },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: brand.seoTitle,
    description: brand.seoDescription,
    url: pageUrl,
    dateModified: brand.lastReviewed,
    breadcrumb: breadcrumbSchema,
  };

  const formattedDate = new Date(brand.lastReviewed).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#b5b0a8] mb-10 sm:mb-14 flex-wrap">
          <Link href="/" className="hover:text-[#1c1917] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/testosterone/enclomiphene" className="hover:text-[#1c1917] transition-colors">
            T Providers
          </Link>
          <span>/</span>
          <span className="text-[#78716c]">{brand.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1fr_300px] items-start">
          {/* Left column */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#a8a29e] uppercase mb-4">
              Informational Comparison · Enclomiphene Provider
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-semibold text-[#1c1917] leading-tight mb-2">
              {brand.name}
            </h1>

            {/* Last reviewed */}
            <p className="text-xs text-[#b5b0a8] mb-5">
              Last reviewed: {formattedDate}
            </p>

            {/* Intro */}
            <p className="text-base text-[#78716c] leading-relaxed mb-8 max-w-lg">
              This page provides an overview of {brand.name}&apos;s enclomiphene
              and testosterone-related program, including publicly available
              pricing and onboarding details.
            </p>

            {/* Info card */}
            <div className="rounded-2xl bg-white border border-[#e3dfd6] overflow-hidden shadow-sm mb-8">
              {/* Overview */}
              <div className="px-7 py-5 border-b border-[#f0ece4]">
                <p className="text-[11px] font-semibold text-[#b5b0a8] uppercase tracking-[0.12em] mb-2">
                  Overview
                </p>
                <p className="text-sm text-[#44403c] leading-relaxed">
                  {brand.overview}
                </p>
              </div>

              {/* Pricing */}
              <div className="px-7 py-5 border-b border-[#f0ece4]">
                <p className="text-[11px] font-semibold text-[#b5b0a8] uppercase tracking-[0.12em] mb-2">
                  Pricing
                </p>
                <p className="text-sm text-[#44403c] leading-relaxed">
                  Starting from{" "}
                  <span className="font-semibold text-[#2a6e47]">
                    ${brand.priceFromMonthly}/mo.
                  </span>{" "}
                  Final pricing may vary based on consultation, dosage, and
                  location. Verify directly with the provider.
                </p>
              </div>

              {/* Notes */}
              <div className="px-7 py-5">
                <p className="text-[11px] font-semibold text-[#b5b0a8] uppercase tracking-[0.12em] mb-2">
                  Notes
                </p>
                <ul className="flex flex-col gap-1.5">
                  {brand.notes.map((note, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#44403c] leading-relaxed">
                      <span className="text-[#b5b0a8] mt-0.5 shrink-0">–</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <a
              href={brand.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-[#2a6e47] px-8 py-4 text-sm font-semibold text-white hover:bg-[#22593a] transition-colors shadow-sm"
            >
              Visit {brand.name}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <p className="mt-3 text-xs text-[#b5b0a8]">
              Prices shown are the same as going direct.
            </p>

            {/* Sources — collapsed */}
            <details className="mt-8 group">
              <summary className="cursor-pointer list-none flex items-center gap-1.5 text-xs font-medium text-[#b5b0a8] hover:text-[#78716c] transition-colors select-none">
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                  className="transition-transform duration-150 group-open:rotate-90"
                  aria-hidden="true"
                >
                  <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Sources
              </summary>
              <div className="mt-3 pl-4 border-l border-[#e3dfd6] flex flex-col gap-1.5">
                {brand.sourceUrls.map((url) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#78716c] hover:text-[#2a6e47] hover:underline transition-colors break-all"
                  >
                    {url}
                  </a>
                ))}
              </div>
            </details>
          </div>

          {/* Right column — pricing card */}
          <div>
            <div className="rounded-2xl bg-white border border-[#e3dfd6] p-7 shadow-sm">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#b5b0a8] uppercase mb-5">
                Monthly pricing
              </p>
              <div className="mb-2">
                <span className="text-sm text-[#78716c]">From</span>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#2a6e47] tabular-nums leading-none">
                  ${brand.priceFromMonthly}
                </span>
                <span className="text-base text-[#78716c]">/mo</span>
              </div>
              <p className="text-xs text-[#b5b0a8] leading-relaxed border-t border-[#f0ece4] pt-4">
                Program details may vary by consultation, eligibility, and
                location.
              </p>
            </div>
          </div>
        </div>

        {/* Footer row */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-[#e3dfd6] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link
            href="/testosterone/enclomiphene"
            className="text-sm text-[#78716c] hover:text-[#1c1917] transition-colors"
          >
            ← Back to provider comparison
          </Link>
          <p className="text-xs text-[#b5b0a8] sm:text-right max-w-sm leading-relaxed">
            Verify current information directly with the provider.
          </p>
        </div>
      </div>
    </>
  );
}
