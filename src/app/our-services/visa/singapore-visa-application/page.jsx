import SingaporeVisa from '@/Components/Server/VisaCountry/SingaporeVisa/SingaporeVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Singapore Visa Requirements, Fees, and Application | Tourist & Business Visa Support",

  description:
    "Check Singapore visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, business visa, required documents, embassy guidance, travel planning, and fast processing assistance for Singapore.",

  keywords: [
    "Singapore visa requirements",
    "Singapore visa fees Bangladesh",
    "Singapore visa application",
    "Singapore tourist visa Bangladesh",
    "Singapore business visa Bangladesh",
    "Apply Singapore visa from Bangladesh",
    "Singapore visa documents",
    "Singapore travel visa support",
    "Singapore visa processing time",
    "Eammu Holidays Singapore visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/singapore-visa-application",
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
      "Singapore Visa Requirements, Fees, and Application | Tourist & Business Visa Support",

    description:
      "Professional Singapore visa support for Bangladeshi travelers. Tourist and business visa guidance with documents, fees, and application assistance.",

    url:
      "https://www.eammu.com/our-services/visa/singapore-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Singapore visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Singapore Visa Requirements, Fees, and Application",

    description:
      "Tourist and business visa support for Singapore from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <SingaporeVisa />
    </div>
  )
}
