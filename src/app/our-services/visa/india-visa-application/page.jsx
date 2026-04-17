import IndiaVisa from '@/Components/Server/VisaCountry/IndiaVisa/IndiaVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "India Visa Requirements, Fees, and Application | Tourist, Medical & Business Visa Support",

  description:
    "Check India visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, medical visa, business visa, required documents, appointment guidance, and fast processing assistance.",

  keywords: [
    "India visa requirements",
    "India visa fees Bangladesh",
    "India visa application",
    "India tourist visa Bangladesh",
    "India medical visa Bangladesh",
    "India business visa Bangladesh",
    "Apply India visa from Bangladesh",
    "India visa documents",
    "India visa processing time",
    "Eammu Holidays India visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/india-visa-application",
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
      "India Visa Requirements, Fees, and Application | Tourist, Medical & Business Visa Support",

    description:
      "Professional India visa support for Bangladeshi travelers. Tourist, medical, and business visa guidance with documents, fees, and application assistance.",

    url:
      "https://www.eammu.com/our-services/visa/india-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "India visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "India Visa Requirements, Fees, and Application",

    description:
      "Tourist, medical, and business visa support for India from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <IndiaVisa />
    </div>
  )
}
