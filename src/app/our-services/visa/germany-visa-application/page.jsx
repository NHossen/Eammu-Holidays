import GermanyVisa from '@/Components/Server/VisaCountry/GermanyVisa/GermanyVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Germany Visa Requirements, Fees, and Application | Schengen Tourist, Student & Work Visa Support",

  description:
    "Check Germany visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for Schengen tourist visa, student visa, work visa, required documents, embassy appointment guidance, travel insurance support, and professional visa processing assistance.",

  keywords: [
    "Germany visa requirements",
    "Germany visa fees Bangladesh",
    "Germany visa application",
    "Germany tourist visa Bangladesh",
    "Germany student visa Bangladesh",
    "Germany work visa Bangladesh",
    "Apply Germany visa from Bangladesh",
    "Schengen Germany visa Bangladesh",
    "Germany visa documents",
    "Germany embassy appointment Bangladesh",
    "Eammu Holidays Germany visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/germany-visa-application",
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
      "Germany Visa Requirements, Fees, and Application | Schengen Tourist, Student & Work Visa Support",

    description:
      "Professional Germany visa support for Bangladeshi applicants. Schengen tourist, student, and work visa guidance with documents, fees, and embassy support.",

    url:
      "https://www.eammu.com/our-services/visa/germany-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Germany visa requirements fees and Schengen visa application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Germany Visa Requirements, Fees, and Application",

    description:
      "Schengen tourist, student, and work visa support for Germany from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};

export default function page() {
  return (
    <div>
      <GermanyVisa />
    </div>
  )
}
