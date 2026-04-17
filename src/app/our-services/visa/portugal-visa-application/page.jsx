import PortugalVisa from '@/Components/Server/VisaCountry/PortugalVisa/PortugalVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Portugal Visa Requirements, Fees, and Application | Schengen Tourist, Student & Work Visa Support",

  description:
    "Check Portugal visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for Schengen tourist visa, student visa, work visa, required documents, embassy appointment guidance, travel insurance, and visa processing assistance.",

  keywords: [
    "Portugal visa requirements",
    "Portugal visa fees Bangladesh",
    "Portugal visa application",
    "Portugal tourist visa Bangladesh",
    "Portugal student visa Bangladesh",
    "Portugal work visa Bangladesh",
    "Apply Portugal visa from Bangladesh",
    "Schengen Portugal visa",
    "Portugal visa documents",
    "Portugal embassy appointment Bangladesh",
    "Eammu Holidays Portugal visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/portugal-visa-application",
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
      "Portugal Visa Requirements, Fees, and Application | Schengen Tourist, Student & Work Visa Support",

    description:
      "Professional Portugal visa support for Bangladeshi travelers. Schengen tourist, student, and work visa guidance with documents, fees, and embassy support.",

    url:
      "https://www.eammu.com/our-services/visa/portugal-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Portugal visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Portugal Visa Requirements, Fees, and Application",

    description:
      "Schengen tourist, student, and work visa support for Portugal from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <PortugalVisa />
    </div>
  )
}
