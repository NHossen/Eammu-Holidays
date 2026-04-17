import RussiaVisa from '@/Components/Server/VisaCountry/RussiaVisa/RussiaVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Russia Visa Requirements, Fees, and Application | Tourist, Business & Student Visa Support",

  description:
    "Check Russia visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, business visa, student visa, required documents, invitation letter guidance, embassy appointment, and professional visa assistance.",

  keywords: [
    "Russia visa requirements",
    "Russia visa fees Bangladesh",
    "Russia visa application",
    "Russia tourist visa Bangladesh",
    "Russia business visa Bangladesh",
    "Russia student visa Bangladesh",
    "Apply Russia visa from Bangladesh",
    "Russia invitation letter visa",
    "Russia visa documents",
    "Eammu Holidays Russia visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/russia-visa-application",
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
      "Russia Visa Requirements, Fees, and Application | Tourist, Business & Student Visa Support",

    description:
      "Professional Russia visa support for Bangladeshi travelers. Tourist, business, and student visa guidance with documents, fees, and invitation support.",

    url:
      "https://www.eammu.com/our-services/visa/russia-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Russia visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Russia Visa Requirements, Fees, and Application",

    description:
      "Tourist, business, and student visa support for Russia from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <RussiaVisa />
    </div>
  )
}
