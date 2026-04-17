import ChinaVisa from '@/Components/Server/VisaCountry/ChinaVisa/ChinaVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "China Visa Requirements, Fees, and Application | Tourist, Business & Student Visa Support",

  description:
    "Check China visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, business visa, student visa, required documents, invitation letters, appointments, and professional visa assistance.",

  keywords: [
    "China visa requirements",
    "China visa fees Bangladesh",
    "China visa application",
    "China tourist visa Bangladesh",
    "China business visa Bangladesh",
    "China student visa Bangladesh",
    "Apply China visa from Bangladesh",
    "China visa invitation letter",
    "China visa documents",
    "Eammu Holidays China visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/china-visa-application",
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
      "China Visa Requirements, Fees, and Application | Tourist, Business & Student Visa Support",

    description:
      "Professional China visa support for Bangladeshi applicants. Tourist, business, and student visa guidance with documents, fees, and appointment support.",

    url:
      "https://www.eammu.com/our-services/visa/china-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "China visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "China Visa Requirements, Fees, and Application",

    description:
      "Tourist, business, and student visa support for China from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <ChinaVisa />
    </div>
  )
}
