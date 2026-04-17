import CanadaVisa from '@/Components/Server/VisaCountry/CanadaVisa/CanadaVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Canada Visa Requirements, Fees, and Application | Tourist, Student & Work Visa Support",

  description:
    "Check Canada visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, student visa, work permit guidance, required documents, biometrics, and visa application assistance.",

  keywords: [
    "Canada visa requirements",
    "Canada visa fees Bangladesh",
    "Canada visa application",
    "Canada tourist visa Bangladesh",
    "Canada student visa Bangladesh",
    "Canada work visa Bangladesh",
    "Canada work permit Bangladesh",
    "Apply Canada visa from Bangladesh",
    "Canada visa documents",
    "Eammu Holidays Canada visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/canada-visa-application",
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
      "Canada Visa Requirements, Fees, and Application | Tourist, Student & Work Visa Support",

    description:
      "Professional Canada visa support for Bangladeshi applicants. Tourist visa, student visa, work permit guidance, fees, and document assistance.",

    url:
      "https://www.eammu.com/our-services/visa/canada-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Canada visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Canada Visa Requirements, Fees, and Application",

    description:
      "Tourist, student, and work visa support for Canada from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <CanadaVisa />
    </div>
  )
}
