import ArmeniaVisa from '@/Components/Server/VisaCountry/ArmeniaVisa/ArmeniaVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: "Armenia Visa Requirements , fees , and Application | Tourist & Student Visa Support",

  description:
    "Apply for Armenia visa from Bangladesh with Eammu Holidays. Get expert support for tourist visa application, required documents, visa processing guidance, travel planning, and appointment assistance.",

  keywords: [
    "Armenia visa application from Bangladesh",
    "Armenia tourist visa Bangladesh",
    "Apply Armenia visa",
    "Armenia visit visa requirements",
    "Armenia visa processing Bangladesh",
    "Armenia e visa Bangladesh",
    "Yerevan travel visa support",
    "Armenia travel agency Bangladesh",
    "Eammu Holidays Armenia visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/armenia-visa-application",
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
      "Armenia Visa Application from Bangladesh | Eammu Holidays",

    description:
      "Professional Armenia visa support for Bangladeshi travelers. Tourist visa guidance, document review, processing support, and Yerevan travel assistance.",

    url:
      "https://www.eammu.com/our-services/visa/armenia-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Armenia visa application from Bangladesh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Armenia Visa Application from Bangladesh",

    description:
      "Get Armenia tourist visa support with Eammu Holidays.",

    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <ArmeniaVisa />
    </div>
  )
}
