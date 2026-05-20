import TravelResources from '@/Components/Client/TravelResources/TravelResources'
import React from 'react'

/* ─────────────────────────────────────────────────────────────────────────────
   STRUCTURED DATA (JSON-LD)
───────────────────────────────────────────────────────────────────────────── */

const SITE_URL = "https://www.eammu.com"
const PAGE_URL = `${SITE_URL}/travel-resources`
const LOGO_URL = `${SITE_URL}/eammu-logo.png`

/** CollectionPage — tells Google this is a hub of resources */
const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${PAGE_URL}#collectionpage`,
  "name": "Travel Resources — Visa Templates, SOP, NOC, Cover Letters & AI Travel Tools",
  "description":
    "A free hub of professional visa documents, legal drafts, financial templates, and AI-optimised prompts for tourist, student, work, and business visa applications worldwide.",
  "url": PAGE_URL,
  "inLanguage": "en",
  "isPartOf": { "@id": `${SITE_URL}#website` },
  "breadcrumb": { "@id": `${PAGE_URL}#breadcrumb` },
  "publisher": { "@id": `${SITE_URL}#organization` },
  "image": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/preview-banner.webp`,
    "width": 1200,
    "height": 630
  },
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Travel Document Generator",
      "url": `${SITE_URL}/travel-resources/travel-document-generator`,
      "description":
        "Generate embassy-ready visa documents including SOP, NOC, salary certificate, sponsor letter, and power of attorney instantly for free."
    },
    {
      "@type": "WebPage",
      "name": "Visa Checklist Generator",
      "url": `${SITE_URL}/travel-resources/visa-checklist-generator`,
      "description":
        "Country-specific visa document checklists for Schengen, USA, UK, Canada, and Australia visa applications."
    },
    {
      "@type": "WebPage",
      "name": "Visa Processing Time Tracker",
      "url": `${SITE_URL}/travel-resources/visa-processing-time-tracker`,
      "description":
        "Check current visa processing times for all major embassies and consulates worldwide."
    }
  ]
}

/** WebSite schema — enables Sitelinks Searchbox */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  "name": "Eammu Holidays",
  "url": SITE_URL,
  "publisher": { "@id": `${SITE_URL}#organization` },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SITE_URL}/travel-resources?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
}

/** Organization schema */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  "name": "Eammu Holidays",
  "alternateName": "Eammu",
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": LOGO_URL,
    "width": 200,
    "height": 60
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+8801631312524",
    "contactType": "customer service",
    "availableLanguage": ["English", "Bengali"]
  },
  "areaServed": ["BD", "AE", "AM", "GE"],
  "sameAs": [
    "https://www.facebook.com/eammu",
    "https://www.instagram.com/eammu"
  ]
}

/** BreadcrumbList */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE_URL
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Travel Resources",
      "item": PAGE_URL
    }
  ]
}

/**
 * ItemList — surfaces individual resources as rich results.
 * Each item maps to a downloadable document or tool in the vault.
 */
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Free Visa Document Templates & Tools",
  "description":
    "A curated list of free, professional-grade visa document templates, legal drafts, financial formats, and AI prompts for successful visa applications.",
  "url": PAGE_URL,
  "numberOfItems": 9,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Standard No Objection Certificate (NOC)",
      "description":
        "No Objection Certificate template for private and government employees. Required for tourist, work, and business visa applications.",
      "url": `${PAGE_URL}#noc`
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Salary Certificate Template for Visa",
      "description":
        "Official monthly income breakdown including house rent and medical allowance. Used as financial proof for all visa types.",
      "url": `${PAGE_URL}#salary-certificate`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Power of Attorney for Visa Processing",
      "description":
        "Legal draft authorising a third-party agent to process visa applications on your behalf.",
      "url": `${PAGE_URL}#power-of-attorney`
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Bank Statement Log (6-Month)",
      "description":
        "Excel tracker to organise your 6-month transaction history as required by Schengen, UK, and USA visa applications.",
      "url": `${PAGE_URL}#bank-statement`
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Schengen Visa Itinerary Planner",
      "description":
        "Day-by-day activity planner designed specifically for Schengen and US visa applications.",
      "url": `${PAGE_URL}#itinerary-planner`
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Trade License (English Translation)",
      "description":
        "Translated trade license template for business owners in Bangladesh and the UAE.",
      "url": `${PAGE_URL}#trade-license`
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Affidavit of Support for Visa",
      "description":
        "Legal affidavit required when a sponsor is funding the traveller's expenses for a visa application.",
      "url": `${PAGE_URL}#affidavit-of-support`
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "Tax Return Certificate (IT-10B)",
      "description":
        "Standard tax certificate format for high-net-worth visa applicants as proof of financial standing.",
      "url": `${PAGE_URL}#tax-return`
    },
    {
      "@type": "ListItem",
      "position": 9,
      "name": "Visa Cover Letter Template",
      "description":
        "Persuasive cover letter template focused on demonstrating ties to home country — critical for tourist visa approvals.",
      "url": `${PAGE_URL}#cover-letter`
    }
  ]
}

/** FAQPage — targets high-volume visa document queries */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a No Objection Certificate (NOC) and why is it needed for a visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A No Objection Certificate (NOC) is a letter from your employer or institution confirming they have no objection to you travelling abroad. It is required for tourist, business, and work visa applications as proof that you have stable employment and are likely to return home. It should include your name, designation, travel dates, destination, and an authorised signature with company seal."
      }
    },
    {
      "@type": "Question",
      "name": "What bank statement format is required for a Schengen visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Schengen visa applications typically require the last 3 to 6 months of bank statements showing a healthy balance. The statements must be original, stamped by the bank, and show regular income. A minimum balance of approximately EUR 50 per day of stay is a common rule of thumb, though requirements vary by consulate and applicant country."
      }
    },
    {
      "@type": "Question",
      "name": "What documents are required for a UK visa application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "UK visa applications generally require a valid passport, completed online application form, biometric enrolment, proof of financial means (bank statements, salary certificate), employment NOC, accommodation proof (hotel bookings or invitation letter), travel itinerary, and travel insurance. Students also need a CAS number from their university."
      }
    },
    {
      "@type": "Question",
      "name": "How do I write a visa cover letter to show ties to my home country?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A visa cover letter showing ties to your home country should include your purpose of travel, exact travel dates, proof of employment or business, financial self-sufficiency, and specific ties like property ownership, dependent family members, or ongoing business responsibilities. Clearly stating your intention to return before visa expiry significantly strengthens the application."
      }
    },
    {
      "@type": "Question",
      "name": "What is an Affidavit of Support and when is it required?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "An Affidavit of Support is a legal declaration from a sponsor — typically a parent, relative, or employer — stating they will bear the full financial cost of the applicant's travel and stay. It is required when the visa applicant is not self-funding, and is commonly needed for student visas, dependent visas, and tourist visa applications where a family member is sponsoring the trip."
      }
    },
    {
      "@type": "Question",
      "name": "What is a salary certificate and how is it different from a bank statement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A salary certificate is a letter from your employer confirming your monthly income, designation, and employment status. A bank statement is a record of your actual account transactions. Visa applications typically require both: the salary certificate proves regular income, while the bank statement shows the actual accumulation of funds. Both are needed to demonstrate financial stability."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use AI tools to help write my visa SOP or cover letter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. AI tools like ChatGPT, Gemini, or Eammu's own Document Generator can help draft a Statement of Purpose or cover letter. However, you must personalise the output with accurate, specific details about your background, travel purpose, and financial situation. Submitting a generic AI output without personalisation can weaken your application. Always review and customise before submitting."
      }
    },
    {
      "@type": "Question",
      "name": "What documents does a business owner need for a Schengen visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Business owners applying for a Schengen visa typically need a trade license, company bank statements (last 6 months), a business cover letter stating the purpose of the visit, an invitation letter from the host company in Europe, proof of accommodation, and travel insurance. A power of attorney may also be required if someone is handling documentation on the owner's behalf."
      }
    }
  ]
}

/** SoftwareApplication — for the sub-tools linked from this hub page */
const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${PAGE_URL}#tools`,
  "name": "Eammu Visa Tools Suite",
  "description":
    "A collection of free web-based tools for visa applicants — including a travel document generator, visa checklist builder, and visa processing time tracker.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Travel Document Generator — SOP, NOC, cover letter, salary certificate",
    "Visa Checklist Generator — country-specific document lists",
    "Visa Processing Time Tracker — live embassy processing times",
    "AI Visa Prompt Library — expert prompts for ChatGPT and Gemini",
    "Downloadable visa templates — DOCX, PDF, XLSX formats"
  ],
  "creator": { "@id": `${SITE_URL}#organization` }
}

/* ─────────────────────────────────────────────────────────────────────────────
   NEXT.JS METADATA EXPORT
───────────────────────────────────────────────────────────────────────────── */

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Free Travel Resources — Visa Templates, SOP, NOC, Cover Letters & AI Tools | Eammu Holidays",
    template: "%s | Eammu Travel Resources"
  },

  description:
    "Download free professional visa documents and templates — NOC letters, salary certificates, SOP drafts, bank statement formats, affidavits, travel itinerary planners, cover letters, and power of attorney. Plus AI visa prompts for Schengen, UK, USA, Canada, Australia, and worldwide applications. No login required.",

  keywords: [
    // Core intent — resource hub
    "travel resources",
    "free visa templates",
    "visa document templates download",
    "visa document resources",
    "travel document templates",
    // NOC
    "NOC letter for visa",
    "no objection certificate template",
    "NOC format for employee",
    "NOC for Schengen visa",
    "NOC for UK visa",
    // SOP
    "SOP for student visa",
    "statement of purpose template",
    "SOP for UK visa",
    "SOP for Canada",
    "how to write SOP for visa",
    // Cover letter
    "visa cover letter template",
    "cover letter for tourist visa",
    "cover letter for Schengen visa",
    "cover letter showing ties to home country",
    // Financial docs
    "salary certificate format for visa",
    "bank statement format for visa",
    "bank statement for Schengen visa",
    "affidavit of support template",
    "tax return for visa",
    "IT-10B tax certificate",
    // Legal
    "power of attorney for visa",
    "power of attorney template",
    "affidavit of support for student visa",
    // Itinerary
    "Schengen visa itinerary template",
    "travel itinerary for visa application",
    "day by day itinerary for visa",
    // Tools
    "visa checklist generator",
    "visa document checklist",
    "visa processing time tracker",
    "AI visa prompts",
    "ChatGPT prompts for visa application",
    "visa prompt generator",
    // Destination-specific
    "UK visa documents",
    "USA visa document checklist",
    "Canada visa application documents",
    "Australia visa templates",
    "Schengen visa required documents",
    // Brand + geo
    "Eammu travel resources",
    "Eammu Holidays visa tools",
    "visa resources Bangladesh",
    "visa help Bangladesh",
    "travel documents Bangladesh"
  ],

  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-US": PAGE_URL,
      "en-GB": PAGE_URL,
      "x-default": PAGE_URL
    }
  },

  category: "Travel & Immigration Resources",

  authors: [{ name: "Eammu Holidays", url: SITE_URL }],

  creator: "Eammu Holidays",

  publisher: "Eammu Holidays",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB"],
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    title:
      "Free Travel Resources — Visa Templates, NOC, SOP, Cover Letters & AI Tools | Eammu",
    description:
      "Download free professional visa document templates and use AI-powered tools. NOC letters, salary certificates, SOP drafts, itinerary planners, cover letters, affidavits — for Schengen, UK, USA, Canada and worldwide applications.",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Eammu free travel resources — visa templates, SOP, NOC, and AI tools",
        type: "image/webp"
      },
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Professional visa document resources by Eammu Holidays",
        type: "image/webp"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    creator: "@eammuholidays",
    title:
      "Free Travel Resources — Visa Templates, NOC, SOP & AI Tools | Eammu",
    description:
      "Download professional visa templates, NOC letters, SOP drafts, cover letters, itinerary planners, and use AI visa prompts — all free.",
    images: [
      {
        url: "/preview-banner.webp",
        alt: "Eammu free visa document resources and AI travel tools"
      }
    ]
  },

  other: {
    "rating": "general",
    "revisit-after": "7 days",
    "language": "English",
    "geo.region": "BD",
    "geo.placename": "Dhaka, Bangladesh",
    "application-name": "Eammu Travel Resources",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Eammu Travel Resources",
    // Dublin Core
    "DC.title":
      "Free Travel Resources — Visa Templates, SOP, NOC, Cover Letters & AI Tools | Eammu Holidays",
    "DC.description":
      "Free visa document templates including NOC, salary certificate, SOP, cover letter, affidavit, bank statement formats, and AI prompts for worldwide visa applications.",
    "DC.creator": "Eammu Holidays",
    "DC.subject":
      "Visa Resources, NOC Template, SOP Generator, Travel Documents, Visa Tools, Immigration",
    "DC.type": "Collection",
    "DC.format": "text/html",
    "DC.language": "en"
  }
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────────────────────────── */

export default function TravelResourcesPage() {
  const schemas = [
    websiteSchema,
    organizationSchema,
    collectionPageSchema,
    breadcrumbSchema,
    itemListSchema,
    faqSchema,
    softwareAppSchema
  ]

  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml — static trusted data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/*
        Visually hidden H1 — keyword-rich primary heading for crawlers.
        The TravelResources component renders its own visible heading,
        so this stays hidden to avoid duplicate visible H1s.
      */}
      <h1 className="sr-only" aria-hidden="false">
        Free Travel Resources — Visa Templates, NOC Letters, SOP Drafts,
        Salary Certificates, Cover Letters, Affidavits &amp; AI Visa Prompts
        for Schengen, UK, USA, Canada and Australia | Eammu Holidays
      </h1>

      <TravelResources />
    </>
  )
}