import Link from "next/link";
import type { Brand } from "../lib/brands";
import BrandCardExpand from "./BrandCardExpand";

interface BrandCardProps {
  brand: Brand;
  highlight?: boolean;
}

export default function BrandCard({ brand, highlight = false }: BrandCardProps) {
  return (
    <div
      id={`card-${brand.slug}`}
      className={`group rounded-2xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 overflow-hidden ${
        highlight ? "bg-[#f0f7f3] border-[#8fbc9e]" : "bg-white border-[#d8d3c8]"
      }`}
    >
      {/* Main body — navigates to brand page */}
      <Link
        href={`/testosterone/enclomiphene/${brand.slug}`}
        className="flex items-stretch"
      >
        {/* LEFT — name + labels */}
        <div className="flex flex-col justify-center gap-2 px-5 sm:px-6 py-4 sm:py-5 flex-1 min-w-0 border-r border-[#ede9e0]">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center rounded-full bg-[#f5f3ee] border border-[#e3dfd6] px-2.5 py-0.5 text-[11px] font-semibold text-[#a8a29e] tracking-wide uppercase">
              {brand.shortLabel}
            </span>
            {highlight && (
              <span className="inline-flex items-center rounded-full bg-[#d4eddf] border border-[#8fbc9e] px-2.5 py-0.5 text-[11px] font-semibold text-[#2a6e47] tracking-wide uppercase">
                Lowest starting price
              </span>
            )}
          </div>

          <h3 className="font-[family-name:var(--font-playfair)] text-[1.35rem] sm:text-[1.6rem] font-bold text-[#1c1917] leading-snug group-hover:text-[#2a6e47] transition-colors">
            {brand.name}
          </h3>

          <p className="text-sm text-[#a8a29e]">{brand.shortDescription}</p>
        </div>

        {/* RIGHT — price */}
        <div className="flex flex-col items-end justify-center gap-0.5 px-4 sm:px-7 py-4 sm:py-5 shrink-0 w-[36%] sm:w-[30%] min-w-[130px]">
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#6daa87] tracking-widest uppercase">
            From
          </span>
          <span className="font-[family-name:var(--font-playfair)] text-[1.9rem] sm:text-[2.6rem] font-bold text-[#2a6e47] tabular-nums leading-none">
            ${brand.priceFromMonthly}
          </span>
          <span className="text-xs sm:text-sm text-[#a8a29e]">/mo</span>
        </div>
      </Link>

      {/* Footer bar + expandable panel */}
      <BrandCardExpand
        slug={brand.slug}
        why={brand.why}
        highlight={highlight}
      />
    </div>
  );
}
