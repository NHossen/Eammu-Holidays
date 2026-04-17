import CyprusVisa from '@/Components/Server/VisaCountry/CyprusVisa/CyprusVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Cyprus Visa Requirements, Fees, and Application | Tourist, Student & Work Visa Support",

  description:
    "Check Cyprus visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, student visa, work visa, required documents, appointment guidance, and professional visa assistance.",

  keywords: [
    "Cyprus visa requirements",
    "Cyprus visa fees Bangladesh",
    "Cyprus visa application",
    "Cyprus tourist visa Bangladesh",
    "Cyprus student visa Bangladesh",
    "Cyprus work visa Bangladesh",
    "Apply Cyprus visa from Bangladesh",
    "Cyprus visa documents",
    "Cyprus visit visa Bangladesh",
    "Eammu Holidays Cyprus visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/cyprus-visa-application",
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
      "Cyprus Visa Requirements, Fees, and Application | Tourist, Student & Work Visa Support",

    description:
      "Professional Cyprus visa support for Bangladeshi applicants. Tourist, student, and work visa guidance with fees, documents, and application support.",

    url:
      "https://www.eammu.com/our-services/visa/cyprus-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Cyprus visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cyprus Visa Requirements, Fees, and Application",

    description:
      "Tourist, student, and work visa support for Cyprus from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <CyprusVisa />
    </div>
  )
}
