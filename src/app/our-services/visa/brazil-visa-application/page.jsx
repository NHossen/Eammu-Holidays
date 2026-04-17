import BrazilVisa from '@/Components/Server/VisaCountry/BrazilVisa/BrazilVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Brazil Visa Requirements, Fees, and Application | Tourist & Business Visa Support",

  description:
    "Check Brazil visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, business visa, required documents, appointment guidance, and professional visa assistance.",

  keywords: [
    "Brazil visa requirements",
    "Brazil visa fees Bangladesh",
    "Brazil visa application",
    "Brazil tourist visa Bangladesh",
    "Brazil business visa Bangladesh",
    "Apply Brazil visa from Bangladesh",
    "Brazil visa documents",
    "Brazil visa processing time",
    "Brazil visit visa Bangladesh",
    "Eammu Holidays Brazil visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/brazil-visa-application",
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
      "Brazil Visa Requirements, Fees, and Application | Tourist & Business Visa Support",

    description:
      "Professional Brazil visa support for Bangladeshi travelers. Tourist visa, business visa, fees, documents, and application guidance.",

    url:
      "https://www.eammu.com/our-services/visa/brazil-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Brazil visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Brazil Visa Requirements, Fees, and Application",

    description:
      "Tourist and business visa support for Brazil from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <BrazilVisa />
    </div>
  )
}
