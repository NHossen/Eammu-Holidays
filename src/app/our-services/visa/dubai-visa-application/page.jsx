import DubaiVisa from '@/Components/Server/VisaCountry/DubaiVisa/DubaiVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Dubai Visa Requirements, Fees, and Application | Tourist, Visit & Transit Visa Support",

  description:
    "Check Dubai visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, visit visa, transit visa, required documents, urgent processing, and UAE travel assistance.",

  keywords: [
    "Dubai visa requirements",
    "Dubai visa fees Bangladesh",
    "Dubai visa application",
    "Dubai tourist visa Bangladesh",
    "Dubai visit visa Bangladesh",
    "Dubai transit visa Bangladesh",
    "UAE visa Bangladesh",
    "Apply Dubai visa from Bangladesh",
    "Dubai visa documents",
    "Eammu Holidays Dubai visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/dubai-visa-application",
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
      "Dubai Visa Requirements, Fees, and Application | Tourist, Visit & Transit Visa Support",

    description:
      "Professional Dubai visa support for Bangladeshi travelers. Tourist, visit, transit visa guidance with fees, documents, and fast processing support.",

    url:
      "https://www.eammu.com/our-services/visa/dubai-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Dubai visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Dubai Visa Requirements, Fees, and Application",

    description:
      "Tourist, visit, and transit visa support for Dubai from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <DubaiVisa />
    </div>
  )
}
