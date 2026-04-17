import EuropeVisa from '@/Components/Server/VisaCountry/EuropeVisa/EuropeVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Europe Visa Requirements, Fees, and Application | Schengen Tourist & Visit Visa Support",

  description:
    "Check Europe visa requirements, fees, and Schengen visa application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, visit visa, required documents, embassy appointments, travel insurance, and visa guidance.",

  keywords: [
    "Europe visa requirements",
    "Europe visa fees Bangladesh",
    "Europe visa application",
    "Schengen visa Bangladesh",
    "Europe tourist visa Bangladesh",
    "Europe visit visa Bangladesh",
    "Apply Europe visa from Bangladesh",
    "Schengen visa documents",
    "Europe travel visa support",
    "Eammu Holidays Europe visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/europe-visa-application",
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
      "Europe Visa Requirements, Fees, and Application | Schengen Tourist & Visit Visa Support",

    description:
      "Professional Europe visa support for Bangladeshi travelers. Schengen tourist visa, visit visa, fees, documents, and embassy appointment guidance.",

    url:
      "https://www.eammu.com/our-services/visa/europe-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Europe visa requirements fees and Schengen visa application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Europe Visa Requirements, Fees, and Application",

    description:
      "Schengen tourist and visit visa support for Europe from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <EuropeVisa />
    </div>
  )
}
