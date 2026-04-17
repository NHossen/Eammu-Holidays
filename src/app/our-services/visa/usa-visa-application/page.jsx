import UsaVisa from '@/Components/Server/VisaCountry/UsaVisa/UsaVisa'
import React from 'react'

// 1. SEO METADATA SET HERE
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "USA Visa Requirements, Fees, and Application | Tourist, Student & Work Visa Support",

  description:
    "Check USA visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for US tourist visa, student visa (F1), work visa, visit visa, required documents, interview guidance, and fast processing assistance for the United States.",

  keywords: [
    "USA visa requirements",
    "USA visa fees Bangladesh",
    "USA visa application",
    "USA tourist visa Bangladesh",
    "USA student visa Bangladesh",
    "USA work visa Bangladesh",
    "Apply USA visa from Bangladesh",
    "US visa interview Bangladesh",
    "USA visa documents",
    "New York visa support Bangladesh",
    "Eammu Holidays USA visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/usa-visa-application",
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
    title:
      "USA Visa Requirements, Fees, and Application | Tourist, Student & Work Visa Support",

    description:
      "Professional USA visa support for Bangladeshi travelers. Tourist (B1/B2), student (F1), and work visa guidance with documents, fees, and interview assistance.",

    url:
      "https://www.eammu.com/our-services/visa/usa-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "USA visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "USA Visa Requirements, Fees, and Application",

    description:
      "Tourist, student, and work visa support for USA from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <UsaVisa />
    </div>
  )
}
