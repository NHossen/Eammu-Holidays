



import AustraliaVisa from '@/Components/Server/VisaCountry/AustraliaVisa/AustraliaVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Australia Visa Requirements, Fees, and Application | Tourist & Student Visa Support",

  description:
    "Check Australia visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, student visa, required documents, processing guidance, and travel consultation.",

  keywords: [
    "Australia visa requirements",
    "Australia visa fees Bangladesh",
    "Australia visa application",
    "Australia tourist visa Bangladesh",
    "Australia student visa Bangladesh",
    "Apply Australia visa from Bangladesh",
    "Australia visa documents",
    "Australia visa processing time",
    "Study in Australia visa support",
    "Eammu Holidays Australia visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/australia-visa-application",
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
      "Australia Visa Requirements, Fees, and Application | Tourist & Student Visa Support",

    description:
      "Get professional Australia visa support for tourist and student visas. Learn requirements, fees, documents, and application steps.",

    url:
      "https://www.eammu.com/our-services/visa/australia-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Australia visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Australia Visa Requirements, Fees, and Application",

    description:
      "Tourist and student visa support for Australia from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
    <AustraliaVisa />
    </div>
  )
}
