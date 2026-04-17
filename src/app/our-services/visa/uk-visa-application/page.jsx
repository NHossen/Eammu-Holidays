import UkVisa from '@/Components/Server/VisaCountry/UkVisa/UkVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "UK Visa Requirements, Fees, and Application | Tourist, Student & Work Visa Support",

  description:
    "Check UK visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for UK tourist visa, student visa, work visa, family visit visa, required documents, biometrics guidance, and fast processing assistance for the United Kingdom.",

  keywords: [
    "UK visa requirements",
    "UK visa fees Bangladesh",
    "UK visa application",
    "UK tourist visa Bangladesh",
    "UK student visa Bangladesh",
    "UK work visa Bangladesh",
    "Apply UK visa from Bangladesh",
    "UK visit visa Bangladesh",
    "UK visa documents",
    "London visa support Bangladesh",
    "Eammu Holidays UK visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/uk-visa-application",
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
      "UK Visa Requirements, Fees, and Application | Tourist, Student & Work Visa Support",

    description:
      "Professional UK visa support for Bangladeshi travelers. Tourist, student, work, and visit visa guidance with documents, fees, and application assistance.",

    url:
      "https://www.eammu.com/our-services/visa/uk-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "UK visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "UK Visa Requirements, Fees, and Application",

    description:
      "Tourist, student, work, and family visa support for UK from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <UkVisa />
    </div>
  )
}
