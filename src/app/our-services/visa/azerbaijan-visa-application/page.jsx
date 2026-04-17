import AzerbaijanVisa from '@/Components/Server/VisaCountry/AzerbaijanVisa/AzerbaijanVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Azerbaijan Visa Requirements, Fees, and Application | Tourist & Business Visa Support | Travel Agency Bangladesh",

  description:
    "Check Azerbaijan visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, business visa, e-visa, required documents, and fast processing guidance.",

  keywords: [
    "Azerbaijan visa requirements",
    "Azerbaijan visa fees Bangladesh",
    "Azerbaijan visa application",
    "Azerbaijan tourist visa Bangladesh",
    "Azerbaijan business visa Bangladesh",
    "Azerbaijan e visa Bangladesh",
    "Apply Azerbaijan visa from Bangladesh",
    "Baku visa application",
    "Azerbaijan visa documents",
    "Eammu Holidays Azerbaijan visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/azerbaijan-visa-application",
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
      "Azerbaijan Visa Requirements, Fees, and Application | Tourist & Business Visa Support",

    description:
      "Professional Azerbaijan visa support for Bangladeshi travelers. Tourist visa, business visa, e-visa, documents, fees, and application guidance.",

    url:
      "https://www.eammu.com/our-services/visa/azerbaijan-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Azerbaijan visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Azerbaijan Visa Requirements, Fees, and Application",

    description:
      "Tourist, business, and e-visa support for Azerbaijan from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <AzerbaijanVisa/>
    </div>
  )
}
