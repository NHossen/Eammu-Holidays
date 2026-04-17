import ThailandVisa from '@/Components/Server/VisaCountry/ThailandVisa/ThailandVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Thailand Visa Requirements, Fees, and Application | Tourist & Visit Visa Support",

  description:
    "Check Thailand visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, visit visa, required documents, eVisa guidance, and fast processing assistance for Thailand travel including Bangkok and Phuket.",

  keywords: [
    "Thailand visa requirements",
    "Thailand visa fees Bangladesh",
    "Thailand visa application",
    "Thailand tourist visa Bangladesh",
    "Thailand visit visa Bangladesh",
    "Apply Thailand visa from Bangladesh",
    "Thailand eVisa Bangladesh",
    "Bangkok visa support",
    "Phuket visa Bangladesh",
    "Thailand visa documents",
    "Eammu Holidays Thailand visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/thailand-visa-application",
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
      "Thailand Visa Requirements, Fees, and Application | Tourist & Visit Visa Support",

    description:
      "Professional Thailand visa support for Bangladeshi travelers. Tourist and visit visa guidance with documents, fees, and fast processing assistance.",

    url:
      "https://www.eammu.com/our-services/visa/thailand-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Thailand visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Thailand Visa Requirements, Fees, and Application",

    description:
      "Tourist and visit visa support for Thailand from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <ThailandVisa />
    </div>
  )
}
