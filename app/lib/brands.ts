import brandsData from "../data/brands.json";

export interface BrandWhy {
  onboarding: string;
  pricing: string;
  positioning: string;
}

export interface Brand {
  slug: string;
  name: string;
  category: string;
  priceFromMonthly: number;
  priceLabel: string;
  onboardingType: "faster-start" | "standard";
  shortLabel: string;
  shortDescription: string;
  overview: string;
  notes: string[];
  affiliateUrl: string;
  sourceUrls: string[];
  lastReviewed: string;
  seoTitle: string;
  seoDescription: string;
  why: BrandWhy;
}

export function getAllBrands(): Brand[] {
  return [...(brandsData as Brand[])].sort(
    (a, b) => a.priceFromMonthly - b.priceFromMonthly
  );
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return (brandsData as Brand[]).find((b) => b.slug === slug);
}
