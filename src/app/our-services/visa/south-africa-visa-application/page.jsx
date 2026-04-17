import SouthAfricaVisa from '@/Components/Server/VisaCountry/SouthAfricaVisa/SouthAfricaVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "South Africa Visa Requirements, Fees, and Application | Tourist & Business Visa Support",

  description:
    "Check South Africa visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, business visa, required documents, embassy guidance, travel itinerary support, and fast processing assistance for South Africa.",

  keywords: [
    "South Africa visa requirements",
    "South Africa visa fees Bangladesh",
    "South Africa visa application",
    "South Africa tourist visa Bangladesh",
    "South Africa business visa Bangladesh",
    "Apply South Africa visa from Bangladesh",
    "South Africa visa documents",
    "South Africa travel visa support",
    "Cape Town visa Bangladesh",
    "Eammu Holidays South Africa visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/south-africa-visa-application",
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
      "South Africa Visa Requirements, Fees, and Application | Tourist & Business Visa Support",

    description:
      "Professional South Africa visa support for Bangladeshi travelers. Tourist and business visa guidance with documents, fees, and application assistance.",

    url:
      "https://www.eammu.com/our-services/visa/south-africa-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "South Africa visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "South Africa Visa Requirements, Fees, and Application",

    description:
      "Tourist and business visa support for South Africa from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <SouthAfricaVisa />
    </div>
  )
}
