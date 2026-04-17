import MoroccoVisa from '@/Components/Server/VisaCountry/MoroccoVisa/MoroccoVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Morocco Visa Requirements, Fees, and Application | Tourist & Visit Visa Support",

  description:
    "Check Morocco visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, visit visa, required documents, travel guidance, and fast processing assistance for Morocco.",

  keywords: [
    "Morocco visa requirements",
    "Morocco visa fees Bangladesh",
    "Morocco visa application",
    "Morocco tourist visa Bangladesh",
    "Morocco visit visa Bangladesh",
    "Apply Morocco visa from Bangladesh",
    "Morocco visa documents",
    "Morocco travel visa support",
    "Morocco visa processing time",
    "Eammu Holidays Morocco visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/morocco-visa-application",
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
      "Morocco Visa Requirements, Fees, and Application | Tourist & Visit Visa Support",

    description:
      "Professional Morocco visa support for Bangladeshi travelers. Tourist and visit visa guidance with documents, fees, and application assistance.",

    url:
      "https://www.eammu.com/our-services/visa/morocco-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Morocco visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Morocco Visa Requirements, Fees, and Application",

    description:
      "Tourist and visit visa support for Morocco from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <MoroccoVisa />
    </div>
  )
}
