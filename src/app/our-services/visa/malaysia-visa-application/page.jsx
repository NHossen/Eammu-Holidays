import MalaysiaVisa from '@/Components/Server/VisaCountry/MalaysiaVisa/MalaysiaVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Malaysia Visa Requirements, Fees, and Application | Tourist, Work & Student Visa Support",

  description:
    "Check Malaysia visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, work visa, student visa, required documents, eVisa guidance, and fast processing assistance.",

  keywords: [
    "Malaysia visa requirements",
    "Malaysia visa fees Bangladesh",
    "Malaysia visa application",
    "Malaysia tourist visa Bangladesh",
    "Malaysia work visa Bangladesh",
    "Malaysia student visa Bangladesh",
    "Apply Malaysia visa from Bangladesh",
    "Malaysia eVisa Bangladesh",
    "Malaysia visa documents",
    "Eammu Holidays Malaysia visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/malaysia-visa-application",
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
      "Malaysia Visa Requirements, Fees, and Application | Tourist, Work & Student Visa Support",

    description:
      "Professional Malaysia visa support for Bangladeshi travelers. Tourist, work, and student visa guidance with documents, fees, and eVisa processing help.",

    url:
      "https://www.eammu.com/our-services/visa/malaysia-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Malaysia visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Malaysia Visa Requirements, Fees, and Application",

    description:
      "Tourist, work, and student visa support for Malaysia from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <MalaysiaVisa />
    </div>
  )
}
