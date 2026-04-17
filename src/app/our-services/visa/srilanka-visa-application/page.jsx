import SrilankaVisa from '@/Components/Server/VisaCountry/SrilankaVisa/SrilankaVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Sri Lanka Visa Requirements, Fees, and Application | Tourist & Visit Visa Support",

  description:
    "Check Sri Lanka visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, visit visa, required documents, travel guidance, and fast eVisa processing assistance for Sri Lanka.",

  keywords: [
    "Sri Lanka visa requirements",
    "Sri Lanka visa fees Bangladesh",
    "Sri Lanka visa application",
    "Sri Lanka tourist visa Bangladesh",
    "Sri Lanka visit visa Bangladesh",
    "Apply Sri Lanka visa from Bangladesh",
    "Sri Lanka eVisa Bangladesh",
    "Sri Lanka visa documents",
    "Colombo visa support Bangladesh",
    "Eammu Holidays Sri Lanka visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/srilanka-visa-application",
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
      "Sri Lanka Visa Requirements, Fees, and Application | Tourist & Visit Visa Support",

    description:
      "Professional Sri Lanka visa support for Bangladeshi travelers. Tourist and visit visa guidance with documents, fees, and fast eVisa assistance.",

    url:
      "https://www.eammu.com/our-services/visa/srilanka-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Sri Lanka visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Sri Lanka Visa Requirements, Fees, and Application",

    description:
      "Tourist and visit visa support for Sri Lanka from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <SrilankaVisa />
    </div>
  )
}
