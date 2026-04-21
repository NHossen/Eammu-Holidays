import VisaGuide from '@/Components/Client/VisaGuide/VisaGuide'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Visa Assistance Guide | Requirements, Process & Application Tips",
    template: "%s | Eammu Holidays Visa Guide",
  },

  description:
    "Complete visa guide for tourist, student, and work visas. Learn requirements, application process, documents, and expert tips for UK, USA, Canada, Dubai, and Europe visa applications.",

  keywords: [
    "visa guide 2026",
    "visa application process",
    "tourist visa requirements",
    "student visa guide",
    "work visa process",
    "how to apply visa",
    "UK USA Canada visa guide",
    "Dubai visa requirements",
    "travel visa tips",
    "visa documentation guide"
  ],

  alternates: {
    canonical: "https://www.eammu.com/visa/visa-guide",
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
    type: "article",
    url: "https://www.eammu.com/visa/visa-guide",
    siteName: "Eammu Holidays",

    title:
      "Complete Visa Guide 2026 | Requirements & Process",

    description:
      "Step-by-step visa guide for tourist, student, and work visas worldwide.",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Visa guide 2026 travel requirements and process",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Visa Guide 2026 | Application Process",
    description:
      "Learn visa requirements, documents, and step-by-step application process.",
    images: ["/eammu_banner_four.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};
export default function page() {
  return (
    <div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Complete Visa Guide 2026",
      author: {
        "@type": "Organization",
        name: "Eammu Holidays"
      },
      publisher: {
        "@type": "Organization",
        name: "Eammu Holidays"
      },
      mainEntityOfPage: "https://www.eammu.com/visa/visa-guide"
    }),
  }}
/>
      <VisaGuide />
    </div>
  )
}
