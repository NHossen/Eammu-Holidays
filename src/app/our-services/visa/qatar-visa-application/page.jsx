import QatarVisa from '@/Components/Server/VisaCountry/QatarVisa/QatarVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Qatar Visa Requirements, Fees, and Application | Tourist, Visit & Work Visa Support",

  description:
    "Check Qatar visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, visit visa, work visa, required documents, sponsorship guidance, and fast processing assistance for Qatar travel.",

  keywords: [
    "Qatar visa requirements",
    "Qatar visa fees Bangladesh",
    "Qatar visa application",
    "Qatar tourist visa Bangladesh",
    "Qatar visit visa Bangladesh",
    "Qatar work visa Bangladesh",
    "Apply Qatar visa from Bangladesh",
    "Doha visa Bangladesh",
    "Qatar visa documents",
    "Eammu Holidays Qatar visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/qatar-visa-application",
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
      "Qatar Visa Requirements, Fees, and Application | Tourist, Visit & Work Visa Support",

    description:
      "Professional Qatar visa support for Bangladeshi travelers. Tourist, visit, and work visa guidance with documents, fees, and application assistance.",

    url:
      "https://www.eammu.com/our-services/visa/qatar-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Qatar visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Qatar Visa Requirements, Fees, and Application",

    description:
      "Tourist, visit, and work visa support for Qatar from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <QatarVisa />
    </div>
  )
}
