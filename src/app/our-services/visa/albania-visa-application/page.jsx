import AlbaniaVisa from '@/Components/Server/VisaCountry/AlbaniaVisa/AlbaniaVisa'
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: "Albania Visa Requirements , fees , and Application | Tourist & Student Visa Support",

  description:
    "Apply for Albania visa from Bangladesh with Eammu Holidays. Get expert support for tourist visa application, required documents, processing guidance, travel consultation, and appointment assistance.",

  keywords: [
    "Albania visa application from Bangladesh",
    "Albania tourist visa Bangladesh",
    "Apply Albania visa",
    "Albania visit visa requirements",
    "Albania visa processing Bangladesh",
    "Albania travel visa agency Bangladesh",
    "Albania Schengen alternative visa",
    "Eammu Holidays Albania visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/albania-visa-application",
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
      "Albania Visa Application from Bangladesh | Eammu Holidays",

    description:
      "Professional Albania visa support for Bangladeshi travelers. Tourist visa guidance, document review, and travel assistance.",

    url:
      "https://www.eammu.com/our-services/visa/albania-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Albania visa application from Bangladesh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Albania Visa Application from Bangladesh",

    description:
      "Get Albania tourist visa support with Eammu Holidays.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <AlbaniaVisa />
    </div>
  )
}
