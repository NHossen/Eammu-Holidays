/**
 * ✅ FIXED [slug]/page.jsx
 * File: app/visa-rejection/[slug]/page.jsx
 *
 * FIXES APPLIED:
 * ─ Removed generateStaticParams() → was generating 407k paths → stack overflow
 * ─ Uses ISR (revalidate + dynamicParams) → pages built on-demand, cached 24h
 * ─ Next.js 15: params & searchParams are Promises → must be awaited
 * ─ Server Component handles metadata + JSON-LD
 * ─ Client Component handles interactive UI
 */

import { getRejectionData } from "@/app/lib/rejectionData";
import VisaRejectionSlugClient from "@/Components/Client/VisaRejectionSlugClient/VisaRejectionSlugClient";

// ─────────────────────────────────────────────
// ISR CONFIG
// ─────────────────────────────────────────────
export const revalidate    = 86400;  // cache each page 24h
export const dynamicParams = true;   // build unknown slugs on first request

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const MARKER = "-visa-rejection-rate-for-";

function parseSlug(slug) {
  const idx = slug.indexOf(MARKER);
  if (idx === -1) return null;
  return {
    natSlug:  slug.slice(0, idx),
    destSlug: slug.slice(idx + MARKER.length),
  };
}

function toName(slug) {
  return slug
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// ─────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────
export async function generateMetadata({ params, searchParams }) {
  // ✅ Next.js 15: params and searchParams are Promises — await before use
  const { slug } = await params;
  const { type } = await searchParams;
  const visaType = type || "tourist";
  const parsed   = parseSlug(slug);

  if (!parsed) {
    return {
      title:       "Visa Rejection Checker | Eammu Holidays",
      description: "Check visa rejection rates for 195+ countries",
    };
  }

  const { natSlug, destSlug } = parsed;
  const natName   = toName(natSlug);
  const rejData   = getRejectionData(destSlug);
  const destName  = rejData.name;
  const rule      = rejData.types[visaType] || rejData.types["tourist"];
  const canonical = `https://eammu.com/visa-rejection/${slug}`;

  return {
    title:       `${natName} ${rule.label} Rejection Rate for ${destName} — ${rule.rate}% | Eammu Holidays`,
    description: `Real ${natName} visa rejection rate for ${destName} ${rule.label}: ${rule.rate}%. ${rule.risk} risk. Learn why visas get rejected and proven fixes.`,
    keywords:    [`${natName} visa rejection`, `${destName} visa rejection rate`, `${natName} ${destName} visa`],
    openGraph: {
      title:       `${natName} → ${destName}: ${rule.rate}% Visa Rejection`,
      description: `${natName} applicants face ${rule.rate}% rejection for ${destName} ${rule.label}. ${rule.risk} risk.`,
      url:         canonical,
      type:        "website",
      siteName:    "Eammu Holidays",
      images: [{
        url:    `https://eammu.com/og/visa-${rule.rate}.jpg`,
        width:  1200,
        height: 630,
        alt:    `${natName} ${destName} Visa Rejection`,
      }],
    },
    twitter: {
      card:        "summary_large_image",
      title:       `${natName} → ${destName}: ${rule.rate}% Visa Rejection`,
      description: `${natName} applicants face ${rule.rate}% rejection for ${destName} ${rule.label}. ${rule.risk} risk.`,
    },
    alternates: { canonical },
    robots:     { index: true, follow: true },
  };
}

// ─────────────────────────────────────────────
// PAGE  (Server Component)
// ─────────────────────────────────────────────
export default async function VisaRejectionSlugPage({ params, searchParams }) {
  // ✅ Next.js 15: await both before accessing properties
  const { slug } = await params;
  const { type } = await searchParams;
  const visaType = type || "tourist";
  const parsed   = parseSlug(slug);

  // Invalid URL format
  if (!parsed) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-black text-red-600 mb-4">Invalid URL</h1>
          <p className="text-slate-500 mb-8">
            Please use the correct visa rejection checker URL format.
          </p>
          <a href="/visa-rejection" className="text-red-500 font-bold hover:underline">
            ← Back to Checker
          </a>
        </div>
      </div>
    );
  }

  const { natSlug, destSlug } = parsed;
  const natName  = toName(natSlug);
  const rejData  = getRejectionData(destSlug);
  const destName = rejData.name;
  const rule     = rejData.types[visaType] || rejData.types["tourist"];

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type":    "FAQPage",
    name:       `${natName} Visa Rejection for ${destName}`,
    url:        `https://eammu.com/visa-rejection/${slug}`,
    publisher: {
      "@type": "Organization",
      name:    "Eammu Holidays",
      logo:    "https://eammu.com/logo.png",
    },
    mainEntity: [
      {
        "@type": "Question",
        name:    `What is ${natName} visa rejection rate for ${destName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:   `${natName} applicants face ${rule.rate}% rejection for ${destName} ${rule.label}. ${rule.risk} risk.`,
        },
      },
    ],
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",           item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Visa Rejection", item: "https://eammu.com/visa-rejection" },
        { "@type": "ListItem", position: 3, name: `${natName} → ${destName}`, item: `https://eammu.com/visa-rejection/${slug}` },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VisaRejectionSlugClient
        slug={slug}
        visaType={visaType}
        natName={natName}
        destName={destName}
        rejData={rejData}
        rule={rule}
      />
    </>
  );
}