import TurkeyVisa from '@/Components/Server/VisaCountry/TurkeyVisa/TurkeyVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Turkey Visa Requirements, Fees, and Application | Tourist, Business & Student Visa Support",

  description:
    "Check Turkey visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, business visa, student visa, required documents, eVisa guidance, and fast processing assistance for Turkey travel including Istanbul.",

  keywords: [
    "Turkey visa requirements",
    "Turkey visa fees Bangladesh",
    "Turkey visa application",
    "Turkey tourist visa Bangladesh",
    "Turkey business visa Bangladesh",
    "Turkey student visa Bangladesh",
    "Apply Turkey visa from Bangladesh",
    "Turkey eVisa Bangladesh",
    "Istanbul visa support",
    "Turkey visa documents",
    "Eammu Holidays Turkey visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/turkey-visa-application",
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
      "Turkey Visa Requirements, Fees, and Application | Tourist, Business & Student Visa Support",

    description:
      "Professional Turkey visa support for Bangladeshi travelers. Tourist, business, and student visa guidance with documents, fees, and fast eVisa assistance.",

    url:
      "https://www.eammu.com/our-services/visa/turkey-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Turkey visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Turkey Visa Requirements, Fees, and Application",

    description:
      "Tourist, business, and student visa support for Turkey from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <TurkeyVisa />
    </div>
  )
}
