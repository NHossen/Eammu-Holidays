import SouthKoreaVisa from '@/Components/Server/VisaCountry/SouthKoreaVisa/SouthKoreaVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "South Korea Visa Requirements, Fees, and Application | Tourist, Business & Student Visa Support",

  description:
    "Check South Korea visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, business visa, student visa, required documents, embassy guidance, travel planning, and fast processing assistance for South Korea.",

  keywords: [
    "South Korea visa requirements",
    "South Korea visa fees Bangladesh",
    "South Korea visa application",
    "South Korea tourist visa Bangladesh",
    "South Korea business visa Bangladesh",
    "South Korea student visa Bangladesh",
    "Apply South Korea visa from Bangladesh",
    "Korea visa Bangladesh",
    "Seoul visa support Bangladesh",
    "Eammu Holidays South Korea visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/south-korea-visa-application",
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
      "South Korea Visa Requirements, Fees, and Application | Tourist, Business & Student Visa Support",

    description:
      "Professional South Korea visa support for Bangladeshi travelers. Tourist, business, and student visa guidance with documents, fees, and application assistance.",

    url:
      "https://www.eammu.com/our-services/visa/south-korea-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "South Korea visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "South Korea Visa Requirements, Fees, and Application",

    description:
      "Tourist, business, and student visa support for South Korea from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <SouthKoreaVisa />
    </div>
  )
}
