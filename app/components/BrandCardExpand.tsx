"use client";

import { useState } from "react";
import Link from "next/link";
import type { BrandWhy } from "../lib/brands";

interface BrandCardExpandProps {
  slug: string;
  why: BrandWhy;
  highlight: boolean;
}

const rows: { label: string; key: keyof BrandWhy }[] = [
  { label: "Onboarding", key: "onboarding" },
  { label: "Pricing",    key: "pricing" },
  { label: "Overview",   key: "positioning" },
];

export default function BrandCardExpand({ slug, why, highlight }: BrandCardExpandProps) {
  const [open, setOpen] = useState(false);

  const footerBg   = highlight ? "border-[#b8d9c6] bg-[#e8f4ee]" : "border-[#ede9e0] bg-[#faf9f7]";
  const expandBg   = highlight ? "bg-[#f0f7f3] border-[#c6e0d0]" : "bg-[#fafaf8] border-[#ede9e0]";

  return (
    <>
      {/* Footer bar */}
      <div className={`flex items-center justify-between px-6 py-3 border-t ${footerBg}`}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-1.5 text-xs font-medium text-[#78716c] hover:text-[#2a6e47] transition-colors"
          aria-expanded={open}
        >
          Why this provider?
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <Link
          href={`/testosterone/enclomiphene/${slug}`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#2a6e47] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#22593a] transition-colors"
        >
          View details
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      {/* Expandable panel — smooth height via grid trick */}
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className={`border-t ${expandBg} rounded-b-2xl px-6 py-4`}>
            <dl className="flex flex-col gap-3">
              {rows.map((row) => (
                <div key={row.key} className="flex flex-col sm:flex-row sm:items-start gap-0.5 sm:gap-6">
                  <dt className="text-[11px] font-semibold text-[#b5b0a8] uppercase tracking-[0.12em] sm:w-24 shrink-0 pt-0.5">
                    {row.label}
                  </dt>
                  <dd className="text-xs text-[#44403c] leading-relaxed">
                    {why[row.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
