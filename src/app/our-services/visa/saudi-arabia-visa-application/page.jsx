import SaudiArabiaVisa from '@/Components/Server/VisaCountry/SaudiArabiaVisa/SaudiArabiaVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Saudi Arabia Visa Requirements, Fees, and Application | Tourist, Work & Umrah Visa Support",

  description:
    "Check Saudi Arabia visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, work visa, Umrah visa, visit visa, required documents, sponsorship guidance, and fast processing assistance.",

  keywords: [
    "Saudi Arabia visa requirements",
    "Saudi visa fees Bangladesh",
    "Saudi visa application",
    "Saudi tourist visa Bangladesh",
    "Saudi work visa Bangladesh",
    "Saudi visit visa Bangladesh",
    "Saudi Umrah visa Bangladesh",
    "Apply Saudi Arabia visa from Bangladesh",
    "Saudi visa documents",
    "Eammu Holidays Saudi visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/saudi-arabia-visa-application",
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
      "Saudi Arabia Visa Requirements, Fees, and Application | Tourist, Work & Umrah Visa Support",

    description:
      "Professional Saudi Arabia visa support for Bangladeshi travelers. Tourist, work, visit, and Umrah visa guidance with documents, fees, and sponsorship assistance.",

    url:
      "https://www.eammu.com/our-services/visa/saudi-arabia-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Saudi Arabia visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Saudi Arabia Visa Requirements, Fees, and Application",

    description:
      "Tourist, work, and Umrah visa support for Saudi Arabia from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <SaudiArabiaVisa />
    </div>
  )
}
