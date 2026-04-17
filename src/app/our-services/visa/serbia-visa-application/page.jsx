import SerbiaVisa from '@/Components/Server/VisaCountry/SerbiaVisa/SerbiaVisa'
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Serbia Visa Requirements, Fees, and Application | Tourist & Visit Visa Support",

  description:
    "Check Serbia visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, visit visa, required documents, travel guidance, and fast processing assistance for Serbia.",

  keywords: [
    "Serbia visa requirements",
    "Serbia visa fees Bangladesh",
    "Serbia visa application",
    "Serbia tourist visa Bangladesh",
    "Serbia visit visa Bangladesh",
    "Apply Serbia visa from Bangladesh",
    "Serbia visa documents",
    "Serbia travel visa support",
    "Belgrade visa Bangladesh",
    "Eammu Holidays Serbia visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/serbia-visa-application",
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
      "Serbia Visa Requirements, Fees, and Application | Tourist & Visit Visa Support",

    description:
      "Professional Serbia visa support for Bangladeshi travelers. Tourist and visit visa guidance with documents, fees, and application assistance.",

    url:
      "https://www.eammu.com/our-services/visa/serbia-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Serbia visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Serbia Visa Requirements, Fees, and Application",

    description:
      "Tourist and visit visa support for Serbia from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <SerbiaVisa />
    </div>
  )
}
