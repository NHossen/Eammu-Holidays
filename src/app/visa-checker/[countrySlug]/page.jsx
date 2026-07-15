// app/visa-checker/[countrySlug]/page.jsx
// ✅ Dynamic SEO: generateMetadata + on-page H1/H2/paragraphs

import { Suspense } from "react";
import CountryVisaClient from "./Countryvisaclient";
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";


// ── helpers (server-safe, no hooks) ──────────────────────────────────────────

function parseSlug(raw) {
  const s = decodeURIComponent(raw || "");
  const toTitle = (t) =>
    t.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const m = s.match(/^(.+?)-visa-for-(.+)$/);
  if (m) return { passport: toTitle(m[1]), destination: toTitle(m[2]) };
  return { passport: toTitle(s), destination: null };
}

// ── Dynamic metadata (Next.js App Router) ────────────────────────────────────

export async function generateMetadata({ params }) {
  const { countrySlug } = await params;
  const { passport, destination } = parseSlug(countrySlug);

  if (destination) {
    // Single-pair: e.g. "Bangladesh Visa for Canada"
    return {
      title: `${passport} Passport Visa for ${destination} – Requirements & Guide | Eammu Holidays`,
      description: `Complete visa requirements for ${passport} passport holders travelling to ${destination}. Check visa status, fees, documents needed, and apply with Eammu Holidays – IATA-accredited travel consultancy.`,
      keywords: [
        `${passport} visa for ${destination}`,
        `${destination} visa for ${passport} passport`,
        `${passport} to ${destination} visa requirements`,
        `how to get ${destination} visa from ${passport}`,
        `${destination} visa process ${passport}`,
        "Eammu Holidays visa",
        "visa consultancy Bangladesh",
      ].join(", "),
      alternates: {
        canonical: `https://eammu.com//visa-checker/${countrySlug}`,
      },
      openGraph: {
        title: `${passport} → ${destination} Visa Requirements | Eammu Holidays`,
        description: `Find out everything a ${passport} passport holder needs to travel to ${destination} – visa type, fees, documents & step-by-step guide.`,
        url: `https://eammu.com//visa-checker/${countrySlug}`,
        siteName: "Eammu Holidays",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${passport} Visa for ${destination} | Eammu Holidays`,
        description: `Visa requirements for ${passport} passport holders visiting ${destination}. Powered by Eammu Holidays.`,
      },
    };
  }

  // All-destinations: e.g. "Bangladesh Passport Visa Requirements"
  return {
    title: `${passport} Passport Visa Requirements for All Countries | Eammu Holidays`,
    description: `Explore visa requirements for ${passport} passport holders across all countries – visa-free, e-visa, visa on arrival, and more. Plan your travel with Eammu Holidays.`,
    keywords: [
      `${passport} passport visa requirements`,
      `${passport} visa-free countries`,
      `${passport} e-visa countries`,
      `visa on arrival ${passport} passport`,
      `${passport} passport travel guide`,
      "Eammu Holidays",
      "visa consultancy Bangladesh",
    ].join(", "),
    alternates: {
      canonical: `https://eammu.com//visa-checker/${countrySlug}`,
    },
    openGraph: {
      title: `${passport} Passport – Global Visa Requirements | Eammu Holidays`,
      description: `Comprehensive visa information for ${passport} passport holders travelling worldwide.`,
      url: `https://eammu.com//visa-checker/${countrySlug}`,
      siteName: "Eammu Holidays",
      type: "website",
    },
  };
}

// ── Page shell (server component) ─────────────────────────────────────────────

export default async function CountryVisaPage({ params }) {
  const { countrySlug } = await params;
  const { passport, destination } = parseSlug(countrySlug);

  return (
    <Suspense fallback={null}>
      <CountryVisaClient
        countrySlug={countrySlug}
        passportName={passport}
        destinationName={destination}
      />
      <HomeSeoLinks/>
    </Suspense>


  );
}