import MontenegroVisa from '@/Components/Server/VisaCountry/MontenegroVisa/MontenegroVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Montenegro Visa Requirements, Fees, and Application | Tourist & Visit Visa Support",

  description:
    "Check Montenegro visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, visit visa, required documents, travel guidance, and fast processing assistance.",

  keywords: [
    "Montenegro visa requirements",
    "Montenegro visa fees Bangladesh",
    "Montenegro visa application",
    "Montenegro tourist visa Bangladesh",
    "Montenegro visit visa Bangladesh",
    "Apply Montenegro visa from Bangladesh",
    "Montenegro visa documents",
    "Montenegro travel visa support",
    "Montenegro visa processing time",
    "Eammu Holidays Montenegro visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/montenegro-visa-application",
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
      "Montenegro Visa Requirements, Fees, and Application | Tourist & Visit Visa Support",

    description:
      "Professional Montenegro visa support for Bangladeshi travelers. Tourist and visit visa guidance with documents, fees, and application assistance.",

    url:
      "https://www.eammu.com/our-services/visa/montenegro-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Montenegro visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Montenegro Visa Requirements, Fees, and Application",

    description:
      "Tourist and visit visa support for Montenegro from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <MontenegroVisa />
    </div>
  )
}
