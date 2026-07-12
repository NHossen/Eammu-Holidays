import SchengenVisaPage from "@/Components/Client/SchengenVisa/SchengenVisa";
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";

// ─── Page URL constant ────────────────────────────────────────────────────────
const PAGE_URL =
  "https://eammu.com/schengen-visa";
const BASE_URL = "https://eammu.com";
const OG_IMAGE = `${BASE_URL}/schengen-preview.webp`;

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(BASE_URL),

  // ✅ Page-level title = plain string (template from layout.jsx auto-appends "| Eammu Holidays")
  title: "Apply For Schengen Visa from Dubai | Eammu Holidays",

  description:
    "Apply for a Schengen Visa from Bangladesh with Eammu Holidays. Expert file preparation, VFS Global appointment support, travel insurance, and hotel/flight reservations for all 29 Schengen countries — France, Italy, Germany, Spain & more.",

  keywords: [
    // High-volume primary
    "Schengen visa from Bangladesh 2026",
    "Schengen visa Bangladesh",
    "Europe visa from Bangladesh",
    "Europe visit visa price in Bangladesh",
    // Document & process
    "Schengen visa document checklist Bangladesh",
    "VFS Global Bangladesh appointment",
    "Schengen visa fee 2026",
    "Schengen visa processing time Bangladesh",
    "Schengen visa requirements Bangladesh",
    // Country-specific (high intent)
    "France visa from Bangladesh",
    "Italy tourist visa Bangladesh",
    "Germany visit visa Bangladesh",
    "Spain visa from Bangladesh",
    "Netherlands visa Bangladesh",
    // Long-tail
    "Schengen visa rejection reasons Bangladesh",
    "how long is Schengen visa valid",
    "Schengen travel insurance Bangladesh",
    "flight reservation for Schengen visa",
    "hotel booking for Schengen visa",
    // Agency
    "Schengen visa processing agency Dhaka",
    "Schengen visa consultancy Bangladesh",
    "Europe visa agency Cumilla",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    title: "Schengen Visa from Bangladesh 2026 | Eammu Holidays",
    description:
      "Expert Schengen visa assistance for Bangladeshis. Complete file prep, VFS appointment, travel insurance & hotel bookings for all 29 European countries.",
    images: [
      {
        url: OG_IMAGE, // absolute URL via metadataBase
        width: 1200,
        height: 630,
        alt: "Schengen Visa processing services for Europe travel from Bangladesh – Eammu Holidays",
        type: "image/webp",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "Schengen Visa from Bangladesh 2026 | Eammu Holidays",
    description:
      "Complete documentation, VFS appointment & travel insurance for all 29 Schengen countries. Apply now with Eammu Holidays.",
    images: [OG_IMAGE],
  },
};

// ─── STRUCTURED DATA (JSON-LD) ────────────────────────────────────────────────
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. BreadcrumbList — shows path in Google search results
    {
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
          name: "Our Services",
          item: `${BASE_URL}/our-services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Visa Services",
          item: `${BASE_URL}/our-services/visa-services`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Schengen Visa",
          item: PAGE_URL,
        },
      ],
    },

    // 2. Service schema — detailed, enables rich results
    {
      "@type": "Service",
      "@id": `${PAGE_URL}`,
      name: "Schengen Visa Consultancy",
      alternateName: "Europe Visa Processing Bangladesh",
      url: PAGE_URL,
      description:
        "Professional Schengen visa assistance for Bangladeshi travelers. Services include complete document preparation, VFS Global appointment booking, dummy flight reservations, hotel bookings, and Schengen-compliant travel insurance for all 29 European countries.",
      serviceType: "Visa Consultancy",
      category: "Travel & Visa Services",
      provider: {
        "@id": `${BASE_URL}/#organization`,
      },
      areaServed: [
        { "@type": "Country", name: "Bangladesh" },
        { "@type": "City", name: "Dhaka" },
        { "@type": "City", name: "Cumilla" },
        { "@type": "City", name: "Chittagong" },
      ],
      audience: {
        "@type": "Audience",
        audienceType: "Bangladeshi travelers applying for Schengen visa",
        geographicArea: { "@type": "Country", name: "Bangladesh" },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Schengen Visa Support Packages",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Complete File Preparation",
              description:
                "Full Schengen visa document checklist preparation and review",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VFS Global Appointment Booking",
              description:
                "VFS Global appointment scheduling for all Schengen embassies in Bangladesh",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Schengen Travel Insurance",
              description:
                "Guaranteed Schengen-compliant travel insurance covering minimum €30,000",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dummy Flight & Hotel Reservation",
              description:
                "Onward flight ticket reservation and hotel booking confirmation for visa application",
            },
          },
        ],
      },
      // Aggregate rating boosts CTR in search results
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "185",
        bestRating: "5",
        worstRating: "1",
      },
      image: OG_IMAGE,
      mainEntityOfPage: PAGE_URL,
    },

    // 3. FAQPage — triggers "People also ask" in Google search
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What documents are required for a Schengen visa from Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Required documents include a valid passport (minimum 6 months validity), completed visa application form, recent passport-size photos, travel insurance (minimum €30,000 coverage), confirmed flight reservation, hotel bookings, bank statements (last 6 months), NOC from employer or business documents, and income tax certificate.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Schengen visa processing take from Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Schengen visa processing typically takes 15 calendar days from the date of your VFS Global appointment. During peak season (June–August), it can take up to 30 days. We recommend applying at least 3–4 weeks before your travel date.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Schengen visa fee from Bangladesh in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The official Schengen visa fee is €90 (approximately BDT 10,800) for adults and €45 for children aged 6–12 years. Children under 6 years are exempt from the visa fee. VFS Global service charges are separate and typically around BDT 2,500–3,000.",
          },
        },
        {
          "@type": "Question",
          name: "Can Eammu Holidays help with Schengen visa rejection cases?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Eammu Holidays provides expert consultation for previously rejected Schengen visa applicants. We analyze the rejection reason, help strengthen your application with stronger financial documents, detailed travel itinerary, and cover letter, and guide you through the re-application or appeal process.",
          },
        },
        {
          "@type": "Question",
          name: "Which Schengen countries can I apply for through Eammu Holidays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We assist with visa applications for all 29 Schengen member countries including France, Germany, Italy, Spain, Netherlands, Greece, Portugal, Austria, Switzerland, Belgium, Sweden, Norway, Denmark, Finland, and more.",
          },
        },
      ],
    },
  ],
};

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────
export default function SchengenVisaRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <SchengenVisaPage />
      <HomeSeoLinks />
    </>
  );
}