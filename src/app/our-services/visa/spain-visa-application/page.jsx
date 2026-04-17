import SpainVisa from '@/Components/Server/VisaCountry/SpainVisa/SpainVisa'
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Spain Visa Requirements, Fees, and Application | Schengen Tourist, Student & Work Visa Support",

  description:
    "Check Spain visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for Schengen tourist visa, student visa, work visa, required documents, embassy appointment guidance, travel insurance, and fast visa processing assistance for Spain.",

  keywords: [
    "Spain visa requirements",
    "Spain visa fees Bangladesh",
    "Spain visa application",
    "Spain tourist visa Bangladesh",
    "Spain student visa Bangladesh",
    "Spain work visa Bangladesh",
    "Apply Spain visa from Bangladesh",
    "Schengen Spain visa Bangladesh",
    "Spain visa documents",
    "Spain embassy appointment Bangladesh",
    "Eammu Holidays Spain visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/spain-visa-application",
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
      "Spain Visa Requirements, Fees, and Application | Schengen Tourist, Student & Work Visa Support",

    description:
      "Professional Spain visa support for Bangladeshi travelers. Schengen tourist, student, and work visa guidance with documents, fees, and embassy support.",

    url:
      "https://www.eammu.com/our-services/visa/spain-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Spain visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Spain Visa Requirements, Fees, and Application",

    description:
      "Schengen tourist, student, and work visa support for Spain from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <SpainVisa />
    </div>
  )
}
