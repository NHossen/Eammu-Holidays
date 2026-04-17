import KosovoVisa from '@/Components/Server/VisaCountry/KosovoVisa/KosovoVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Kosovo Visa Requirements for Bangladeshi Citizens | Embassy & Support",

  description:
    "Apply for your Kosovo visa in Dhaka with Eammu Holidays. Get expert help with Kosovo tourist, business, and transit visa requirements, fees, and application guidance for Bangladeshi passport holders.",

  keywords: [
    "Kosovo visa requirements for Bangladeshi",
    "Kosovo visa fee Bangladesh",
    "Kosovo embassy in Dhaka",
    "Apply Kosovo visa from Bangladesh",
    "Kosovo tourist visa for Bangladeshis",
    "Kosovo visa application form",
    "Schengen visa entry to Kosovo",
    "Kosovo business visa Bangladesh",
    "Balkan visa support Bangladesh",
    "Eammu Holidays Kosovo visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/kosovo-visa-application",
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
      "Kosovo Visa for Bangladeshis | Document Checklist & Fees",

    description:
      "Expert assistance for Kosovo visa applications in Bangladesh. We provide updated information on required documents, embassy appointments in Dhaka, and processing times.",

    url:
      "https://www.eammu.com/our-services/visa/kosovo-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_kosovo_banner.webp",
        width: 1200,
        height: 630,
        alt: "Kosovo visa application support and requirements for Bangladeshis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Apply for Kosovo Visa from Bangladesh",

    description:
      "Complete support for your Kosovo visa application. Learn about fees, documents, and the submission process at the Kosovo Embassy in Dhaka.",

    images: ["/eammu_kosovo_banner.webp"],
  },
};
export default function page() {
  return (
    <div>
      <KosovoVisa />
    </div>
  )
}
