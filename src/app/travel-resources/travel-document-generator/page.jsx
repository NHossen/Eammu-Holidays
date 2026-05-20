import DocumentGenerator from '@/Components/Client/DocumentGenerator/DocumentGenerator'
import React from 'react'

/* ─────────────────────────────────────────────────────────────────────────────
   STRUCTURED DATA (JSON-LD)
   Injected server-side — zero client JS cost, fully crawlable
───────────────────────────────────────────────────────────────────────────── */

const SITE_URL = "https://www.eammu.com"
const PAGE_URL = `${SITE_URL}/travel-resources/travel-document-generator`
const LOGO_URL = `${SITE_URL}/eammu-logo.png`

/** WebApplication schema — primary rich-result type for tool pages */
const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${PAGE_URL}#webapp`,
  "name": "Visa Document Generator",
  "alternateName": [
    "SOP Generator",
    "Statement of Purpose Generator",
    "NOC Generator",
    "Visa Cover Letter Generator",
    "Sponsor Letter Generator",
    "Salary Certificate Generator",
    "Power of Attorney Generator"
  ],
  "description":
    "Generate embassy-ready visa documents instantly — Statement of Purpose (SOP), Cover Letter, No Objection Certificate (NOC), Salary Certificate, Power of Attorney, and Sponsor Letter — for student, tourist, work, and business visa applications.",
  "url": PAGE_URL,
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web Browser",
  "browserRequirements": "Requires JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "featureList": [
    "Statement of Purpose (SOP) generator for student visa",
    "Visa cover letter generator for all visa types",
    "No Objection Certificate (NOC) template builder",
    "Salary certificate generator for visa applications",
    "Power of Attorney document generator",
    "Sponsor letter generator for visa applicants",
    "PDF download with professional letterhead",
    "Editable output before download",
    "100% free, no login required",
    "Private — data stays in your browser"
  ],
  "screenshot": `${SITE_URL}/preview-banner.webp`,
  "creator": {
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    "name": "Eammu Holidays",
    "url": SITE_URL,
    "logo": { "@type": "ImageObject", "url": LOGO_URL }
  },
  "publisher": {
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`
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
    "email": "info@eammu.com",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/eammu",
    "https://www.instagram.com/eammu"
  ],
  "areaServed": ["BD", "AE", "AM", "GE"]
}

/** BreadcrumbList schema */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
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
      "item": `${SITE_URL}/travel-resources`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Travel Document Generator",
      "item": PAGE_URL
    }
  ]
}

/** FAQPage schema — Q&A captures featured snippets & People Also Ask */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an SOP for a student visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A Statement of Purpose (SOP) is a personal essay submitted with a student visa application that explains your educational background, why you chose a specific university and course, your career goals, and your intention to return home after studies. A strong SOP significantly improves visa approval chances."
      }
    },
    {
      "@type": "Question",
      "name": "How do I write a No Objection Certificate (NOC) for a visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A No Objection Certificate (NOC) is issued by your employer or educational institution confirming they have no objection to you travelling abroad. It should include your name, passport number, designation, travel dates, destination, and be signed by an authorized person with a company seal. Use Eammu's free NOC generator to create a professional NOC in minutes."
      }
    },
    {
      "@type": "Question",
      "name": "What documents are required for a tourist visa application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Common tourist visa documents include a cover letter explaining the purpose of your trip, a financial support statement (bank statement or salary certificate), a No Objection Certificate from your employer, a sponsor letter if someone else is funding the trip, and a confirmed travel itinerary. Requirements vary by destination country."
      }
    },
    {
      "@type": "Question",
      "name": "Is this visa document generator free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, Eammu's Visa Document Generator is 100% free. No account or login is required. Your data stays in your browser and is never uploaded to any server. You can generate, edit, and download documents as PDF or TXT instantly."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a generated SOP for a UK, Canada, or Schengen visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. The SOP and cover letter templates generated by this tool are designed to be embassy-ready for major destinations including the UK, Canada, USA, Schengen countries, Australia, and others. You should review and personalise the output to accurately reflect your situation before submitting."
      }
    },
    {
      "@type": "Question",
      "name": "What is a sponsor letter for a visa application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A sponsor letter is a declaration from a person (parent, relative, employer) who is financially supporting your visa application. It confirms their relationship to you, their income, and their commitment to cover your travel expenses. It is required for tourist, student, and dependent visa applications when the applicant does not self-fund."
      }
    },
    {
      "@type": "Question",
      "name": "How do I generate a salary certificate for a visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A salary certificate is issued by your employer and confirms your designation, monthly gross salary, and employment status. Use Eammu's free salary certificate generator — select Salary Certificate under the document type, fill in your details, and download the professionally formatted PDF in under two minutes."
      }
    },
    {
      "@type": "Question",
      "name": "What is a Power of Attorney and when do I need one for visa purposes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A Power of Attorney (POA) is a legal document that authorises a trusted person to act on your behalf. For visa and immigration purposes, it may be needed when you are abroad and need someone at home to handle property, banking, or documentation on your behalf. Eammu's POA generator creates a formal, editable POA document you can get notarised."
      }
    }
  ]
}

/** HowTo schema — can surface as rich result for "how to generate an SOP" queries */
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Generate a Visa Document Using Eammu's Free Tool",
  "description":
    "Step-by-step guide to generating an embassy-ready visa document — SOP, NOC, cover letter, salary certificate, sponsor letter, or power of attorney — using Eammu's free online visa document generator.",
  "totalTime": "PT2M",
  "tool": [
    { "@type": "HowToTool", "name": "Eammu Visa Document Generator (free, web-based)" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Select your visa type",
      "text":
        "Choose the type of visa you are applying for: Student, Tourist, Work, or Business. The tool will automatically suggest the most relevant documents for your visa category.",
      "url": `${PAGE_URL}#step-1`
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Choose the document to generate",
      "text":
        "Select the document you need from the recommended list — for example, Statement of Purpose (SOP) for a student visa, or a Cover Letter and NOC for a tourist visa.",
      "url": `${PAGE_URL}#step-2`
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Fill in your personal details",
      "text":
        "Enter your name, passport number, nationality, destination country, employer details, and other information relevant to the document. Optional fields can be skipped.",
      "url": `${PAGE_URL}#step-3`
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Generate and download your document",
      "text":
        "Click 'Generate Document' to instantly create your personalised document. Edit it if needed, then download as a professional PDF with Eammu letterhead, or copy the text.",
      "url": `${PAGE_URL}#step-4`
    }
  ]
}

/* ─────────────────────────────────────────────────────────────────────────────
   NEXT.JS METADATA EXPORT
───────────────────────────────────────────────────────────────────────────── */

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Free Visa Document Generator — SOP, NOC, Cover Letter, Salary Certificate & More | Eammu",
    template: "%s | Eammu Visa Document Generator"
  },

  description:
    "Generate 100% free, embassy-ready visa documents in under 2 minutes. Create Statement of Purpose (SOP), visa cover letters, No Objection Certificates (NOC), salary certificates, sponsor letters, and Power of Attorney for student, tourist, work, and business visa applications — no login required.",

  keywords: [
    // Core intent — generation tools
    "SOP generator",
    "statement of purpose generator",
    "SOP generator for student visa",
    "SOP generator online free",
    "NOC generator",
    "no objection certificate generator",
    "NOC for visa online",
    "visa cover letter generator",
    "cover letter for visa application",
    "salary certificate generator",
    "salary certificate for visa",
    "sponsor letter generator",
    "sponsor letter for visa",
    "power of attorney generator",
    "power of attorney template online",
    "travel document generator",
    "visa document generator",
    // Destination-specific
    "SOP for UK visa",
    "SOP for Canada student visa",
    "SOP for USA student visa",
    "SOP for Schengen visa",
    "cover letter for Schengen visa",
    "NOC for Schengen visa",
    "visa documents for Australia",
    // Format-specific
    "embassy ready documents",
    "how to write SOP for visa",
    "how to write NOC for visa",
    "how to write sponsor letter for visa",
    "how to write cover letter for visa application",
    "visa letter templates free",
    "free visa document templates",
    // Brand + service
    "Eammu document generator",
    "Eammu Holidays visa tools",
    "Eammu SOP",
    "online visa tools Bangladesh",
    "visa consultant Bangladesh",
    "student visa documents Bangladesh"
  ],

  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-US": PAGE_URL,
      "en-GB": PAGE_URL,
      "x-default": PAGE_URL
    }
  },

  category: "Travel & Immigration Tools",

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
      "Free Visa Document Generator — SOP, NOC, Cover Letter & More | Eammu",
    description:
      "Create professional embassy-ready visa documents instantly and for free. SOP, cover letters, NOC, salary certificates, sponsor letters, power of attorney — for student, tourist, work and business visas.",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Eammu free visa document generator — SOP, NOC, cover letter and more",
        type: "image/webp"
      },
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Embassy-ready documents generated by Eammu Holidays",
        type: "image/webp"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    creator: "@eammuholidays",
    title:
      "Free Visa Document Generator — SOP, NOC, Cover Letter & More | Eammu",
    description:
      "Generate embassy-ready SOP, NOC, cover letters, salary certificates & sponsor letters for free. No login. Instant PDF download.",
    images: [
      {
        url: "/preview-banner.webp",
        alt: "Eammu free visa document generator tool"
      }
    ]
  },

  /* Additional meta tags via `other` */
  other: {
    // Speed dial / search engines
    "rating": "general",
    "revisit-after": "7 days",
    "language": "English",
    "geo.region": "BD",
    "geo.placename": "Dhaka, Bangladesh",
    // App / tool signals
    "application-name": "Eammu Visa Document Generator",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Visa Doc Generator",
    // Dublin Core (boosts crawl context)
    "DC.title":
      "Free Visa Document Generator — SOP, NOC, Cover Letter | Eammu Holidays",
    "DC.description":
      "Generate free embassy-ready visa documents including SOP, NOC, cover letter, salary certificate, sponsor letter and power of attorney.",
    "DC.creator": "Eammu Holidays",
    "DC.subject":
      "Visa Documents, SOP Generator, NOC Generator, Travel Documents, Immigration",
    "DC.type": "InteractiveResource",
    "DC.format": "text/html",
    "DC.language": "en"
  }
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────────────────────────── */

export default function DocumentGeneratorPage() {
  const schemas = [
    webApplicationSchema,
    organizationSchema,
    breadcrumbSchema,
    faqSchema,
    howToSchema
  ]

  return (
    <>
      {/* ── Structured Data (JSON-LD) — injected into <head> server-side ── */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml — static trusted data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/*
        ── Visually hidden H1 for SEO (screen readers + crawlers)
           The DocumentGenerator component renders its own visible heading,
           so this stays hidden to avoid duplicate visible H1s while still
           giving crawlers a keyword-rich primary heading.
      ── */}
      <h1
        className="sr-only"
        aria-hidden="false"
      >
        Free Visa Document Generator — SOP, NOC, Cover Letter, Salary
        Certificate, Sponsor Letter &amp; Power of Attorney | Eammu Holidays
      </h1>

      <DocumentGenerator />
    </>
  )
}