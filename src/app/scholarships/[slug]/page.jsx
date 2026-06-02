// app/scholarships/[slug]/page.jsx — SERVER COMPONENT

import ScholarshipsClient from "./ScholarshipsClient";
import clientPromise from "@/app/lib/mongodb";

// ─── Config ───────────────────────────────────────────────────────────────────
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://eammu.com";

export const revalidate = 3600;
export const dynamicParams = true;

// ─── Direct MongoDB Helpers ───────────────────────────────────────────────────
async function getScholarships(slug) {
  if (!slug) return [];
  try {
    const client = await clientPromise;
    const db = client.db("Eammu-Holidays");
    const data = await db
      .collection("scholarships")
      .find({ country_slug: slug })
      .sort({ popular: -1, scholarship_name: 1 })
      .toArray();
    return JSON.parse(JSON.stringify(data));
  } catch (err) {
    console.error("[Scholarships] MongoDB fetch error:", err?.message);
    return [];
  }
}

async function getCountries() {
  try {
    const client = await clientPromise;
    const db = client.db("Eammu-Holidays");
    const data = await db
      .collection("countries")
      .find({})
      .sort({ country: 1 })
      .toArray();
    return JSON.parse(JSON.stringify(data));
  } catch (err) {
    console.error("[Countries] MongoDB fetch error:", err?.message);
    return [];
  }
}

// ─── Helper ───────────────────────────────────────────────────────────────────
function slugToTitle(slug) {
  if (!slug || typeof slug !== "string") return "";
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

// ─── generateStaticParams ─────────────────────────────────────────────────────
export async function generateStaticParams() {
  try {
    const countries = await getCountries();
    return countries.map((c) => ({
      slug: c.country.toLowerCase().replace(/ /g, "-"),
    }));
  } catch {
    return [];
  }
}

// ─── generateMetadata ─────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug ?? "";

  if (!slug) {
    return { title: "Scholarships | Eammu Holidays" };
  }

  const [scholarships, countries] = await Promise.all([
    getScholarships(slug),
    getCountries(),
  ]);

  const countryInfo = countries.find(
    (c) => c.country.toLowerCase().replace(/ /g, "-") === slug
  );
  const countryName = countryInfo?.country || slugToTitle(slug);
  const count = scholarships.length;
  const fullyFundedCount = scholarships.filter(
    (s) => s.funding_type === "Fully Funded"
  ).length;

  const title =
    count > 0
      ? `${countryName} Scholarships 2026 — ${count} Programs (${fullyFundedCount} Fully Funded) | Eammu Holidays`
      : `${countryName} Scholarships 2026 — International Students Guide | Eammu Holidays`;

  const description =
    count > 0
      ? `Browse ${count} verified scholarships to study in ${countryName} in 2026. Includes ${fullyFundedCount} fully funded programs covering tuition, living costs & travel. Updated deadlines and official application links.`
      : `Planning to study in ${countryName}? Explore upcoming scholarship programs for international students in 2026 including government-funded awards, university grants, and bilateral agreements.`;

  const canonicalUrl = `${BASE_URL}/scholarships/${slug}`;
  const ogImage = `${BASE_URL}/og/scholarships/${slug}.jpg`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title,
      description,
      siteName: "Eammu Holidays",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${countryName} Scholarships 2026 — Eammu Holidays`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      site: "@eammuholidays",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    keywords: [
      `${countryName} scholarships 2026`,
      `study in ${countryName} scholarship`,
      `fully funded scholarships ${countryName}`,
      `international student scholarships ${countryName}`,
      `${countryName} government scholarship`,
      `masters scholarship ${countryName} 2026`,
      `phd scholarship ${countryName} 2026`,
      `${countryName} university scholarship international students`,
    ],
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}

// ─── Page (Server Component) ──────────────────────────────────────────────────
export default async function CountryScholarshipsPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug ?? "";

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Page not found.</p>
      </div>
    );
  }

  const [scholarships, allCountries] = await Promise.all([
    getScholarships(slug),
    getCountries(),
  ]);

  const countryInfo =
    allCountries.find(
      (c) => c.country.toLowerCase().replace(/ /g, "-") === slug
    ) || null;

  const countryName = countryInfo?.country || slugToTitle(slug);

  // ── JSON-LD: ItemList or WebPage ──────────────────────────────────────────
  const jsonLd =
    scholarships.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${countryName} Scholarships 2026`,
          description: `Fully funded and partial scholarships for international students in ${countryName} — verified deadlines and official links.`,
          url: `${BASE_URL}/scholarships/${slug}`,
          numberOfItems: scholarships.length,
          itemListElement: scholarships.slice(0, 10).map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.scholarship_name,
            url:
              s.official_link ||
              `${BASE_URL}/scholarships/${slug}`,
          })),
        }
      : {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${countryName} Scholarships 2026`,
          description: `Scholarship listings for ${countryName} are being verified for 2026.`,
          url: `${BASE_URL}/scholarships/${slug}`,
        };

  // ── JSON-LD: BreadcrumbList ───────────────────────────────────────────────
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Scholarships",
        item: `${BASE_URL}/scholarships`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${countryName} Scholarships 2026`,
        item: `${BASE_URL}/scholarships/${slug}`,
      },
    ],
  };

  // ── JSON-LD: FAQPage ──────────────────────────────────────────────────────
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How many scholarships are available in ${countryName} for 2026?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            scholarships.length > 0
              ? `There are ${scholarships.length} verified scholarship programs for international students in ${countryName} for 2026, including ${scholarships.filter((s) => s.funding_type === "Fully Funded").length} fully funded awards.`
              : `We are currently verifying 2026 scholarship listings for ${countryName}. Check back soon.`,
        },
      },
      {
        "@type": "Question",
        name: `Are there fully funded scholarships to study in ${countryName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            scholarships.filter((s) => s.funding_type === "Fully Funded").length > 0
              ? `Yes. There are ${scholarships.filter((s) => s.funding_type === "Fully Funded").length} fully funded scholarships in ${countryName} covering tuition, living expenses, airfare, and health insurance.`
              : `Fully funded scholarships to ${countryName} are available through government programs and university awards. Listings are being verified for 2026.`,
        },
      },
      {
        "@type": "Question",
        name: `What are the eligibility requirements for scholarships in ${countryName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Most scholarships in ${countryName} require a minimum GPA of 3.0–3.5, proof of English proficiency (IELTS or TOEFL), a completed undergraduate degree for graduate programs, and a statement of purpose.`,
        },
      },
      {
        "@type": "Question",
        name: `When do ${countryName} scholarship applications open for 2026?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Application windows typically open between July and December for the following academic year. Begin your application 3–6 months before the posted deadline.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <ScholarshipsClient
        slug={slug}
        initialScholarships={scholarships}
        initialCountryInfo={countryInfo}
        allCountries={allCountries}
        countryName={countryName}
      />
    </>
  );
}