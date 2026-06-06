import TargetUsaInterview from '@/Components/Client/eammuGroupClient/TargetUsaInterview/TargetUsaInterview'
import HomeSeoLinks from '@/Components/HomeSeoLinks/HomeSeoLinks';
import React from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA — Next.js App Router
// Targets: "USA visa interview preparation Bangladesh", "F1 visa coaching Cumilla",
//          "B1/B2 visa interview tips", "mock visa interview Bangladesh 2026",
//          "DS-160 help Bangladesh", "target USA interview center"
// ─────────────────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Target USA Visa Interview Preparation 2026 — F1, B1/B2, F2 | eammu.com",
  description:
    "Bangladesh's #1 USA visa interview coaching center. Expert preparation for F1 student visa, B1/B2 tourist visa, F2 dependent visa. DS-160 review, mock interviews, SEVIS fee guidance. 98% success rate. Cumilla & Online (Zoom) sessions available.",
  keywords: [
    "USA visa interview preparation Bangladesh",
    "F1 visa interview coaching Bangladesh",
    "B1/B2 visa interview tips 2026",
    "mock USA visa interview Bangladesh",
    "DS-160 form help Bangladesh",
    "SEVIS fee payment Bangladesh",
    "target USA visa interview Cumilla",
    "F1 student visa Bangladesh 2026",
    "US embassy interview Bangladesh",
    "USA visa preparation online Bangladesh",
    "visa interview coaching Dhaka",
    "student visa USA from Bangladesh",
  ].join(", "),
  alternates: {
    canonical: "https://eammu.com/target-usa-visa-interview-preparation",
  },
  openGraph: {
    title: "Target USA Visa Interview Preparation 2026 — 98% Success Rate",
    description:
      "Expert F1, B1/B2 & F2 visa interview coaching for Bangladeshi applicants. Mock sessions, DS-160 review, SEVIS support. Book your session today.",
    url: "https://eammu.com/target-usa-visa-interview-preparation",
    siteName: "eammu.com",
    locale: "en_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Target USA Visa Interview Preparation 2026 — 98% Success Rate",
    description:
      "Expert F1, B1/B2 & F2 visa interview coaching for Bangladeshi applicants. Mock sessions, DS-160 review, SEVIS support.",
  },
  // JSON-LD structured data injected via script in the layout,
  // or add a <Script> tag in this file for LocalBusiness + FAQPage schemas.
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD — LocalBusiness + FAQPage + Course schema
// Google uses this for rich results: star ratings, FAQs in SERP, course cards.
// ─────────────────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://eammu.com/target-usa-visa-interview-preparation",
      name: "Target USA — Visa Interview Preparation Center",
      description:
        "Bangladesh's #1 USA visa interview coaching center for F1, B1/B2, and F2 applicants. Expert coaching, DS-160 review, mock interviews, and SEVIS fee guidance.",
      url: "https://eammu.com/target-usa-visa-interview-preparation",
      telephone: ["+8801701699743", "+971507078334"],
      email: "info@eammu.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office 178, Gomoti Tower, Cantonment",
        addressLocality: "Cumilla",
        addressCountry: "BD",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.4607,
        longitude: 91.1809,
      },
      openingHours: "Mo-Sa 09:00-20:00",
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1500",
        bestRating: "5",
      },
      sameAs: ["https://www.facebook.com/TargetUSAInterviewPreparation"],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is the USA visa interview so important for Bangladeshi applicants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The consular interview is the final and most critical step. Even with perfect documents, the Consular Officer at the US Embassy Dhaka makes the final decision based on your communication, confidence, and ability to establish non-immigrant intent. Our coaching addresses all these factors.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the Target USA interview preparation package?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our package includes: DS-160 form review, mock interview simulation, 50+ updated 2026 embassy questions, dress code guidance, document checklist & folder preparation, SEVIS fee payment support, and F1/B1/B2/F2-specific coaching.",
          },
        },
        {
          "@type": "Question",
          name: "Can I take Target USA sessions from Dhaka or online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We offer in-person sessions at our Cumilla office and online Zoom sessions for students across Bangladesh and the UAE. Session times are flexible to accommodate students in all time zones.",
          },
        },
      ],
    },
    {
      "@type": "Course",
      name: "USA Visa Interview Preparation — F1, B1/B2, F2",
      description:
        "Comprehensive visa interview coaching course for Bangladeshi applicants targeting F1 student visa, B1/B2 tourist/business visa, and F2 dependent visa. Includes mock interviews, DS-160 review, and 50+ updated embassy Q&A.",
      provider: {
        "@type": "Organization",
        name: "Target USA — eammu.com",
        url: "https://eammu.com",
      },
      educationalLevel: "Beginner to Advanced",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: ["Blended", "Online", "Onsite"],
        location: {
          "@type": "Place",
          name: "Gomoti Tower, Cumilla, Bangladesh",
        },
        inLanguage: "bn",
      },
    },
  ],
};

export default function TargetUsaInterviewPage() {
  return (
    <>
      {/* Inject JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TargetUsaInterview />
      <HomeSeoLinks />
    </>
  )
}