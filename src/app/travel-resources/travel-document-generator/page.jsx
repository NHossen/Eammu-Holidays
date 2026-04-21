import DocumentGenerator from '@/Components/Client/DocumentGenerator/DocumentGenerator'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Travel Document Generator | SOP, Cover Letter, NOC & Visa Documents Online",

  description:
    "Generate embassy-ready travel documents instantly with Eammu Holidays Travel Document Generator. Create Statement of Purpose (SOP), visa cover letters, No Objection Certificates (NOC), salary certificates, power of attorney, sponsor letters, and professional travel documents for student, tourist, work, and business visa applications.",

  keywords: [
    "travel document generator",
    "visa document generator",
    "SOP generator",
    "statement of purpose generator",
    "cover letter for visa",
    "NOC generator",
    "salary certificate generator",
    "power of attorney template",
    "sponsor letter generator",
    "embassy ready documents",
    "student visa SOP",
    "Schengen visa cover letter",
    "UK visa cover letter",
    "USA visa documents",
    "online visa tools",
    "Eammu Holidays document generator"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/travel-resources/travel-document-generator",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "Travel Document Generator | SOP, NOC & Visa Letter Creator",

    description:
      "Create professional embassy-ready SOPs, cover letters, NOCs, salary certificates, sponsor letters, and legal travel documents instantly online.",

    url:
      "https://www.eammu.com/travel-resources/travel-document-generator",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Travel document generator for visa and study abroad",
      },
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Embassy ready document generator by Eammu Holidays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Travel Document Generator | SOP & Visa Documents",

    description:
      "Generate SOP, visa cover letters, NOC, salary certificate and more instantly online.",

    images: ["/preview-banner.webp"],
  },
};
export default function page() {
  return (
    <div>
      <DocumentGenerator />
    </div>
  )
}
