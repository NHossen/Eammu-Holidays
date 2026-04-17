import JapanVisa from '@/Components/Server/VisaCountry/JapanVisa/JapanVisa'
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Japan Visa Requirements for Bangladeshis | Tourist, Business & Student Support",

  description:
    "Apply for your Japan visa from Bangladesh with Eammu Holidays. Expert assistance for Japan tourist visa requirements, fees, document checklists, and JVAC appointment guidance for Bangladeshi citizens.",

  keywords: [
    "Japan visa requirements for Bangladeshi",
    "Japan visa fee from Bangladesh",
    "Japan tourist visa Bangladesh",
    "Apply Japan visa from Bangladesh",
    "Japan business visa requirements",
    "Japan visa processing time Bangladesh",
    "JVAC Dhaka appointment",
    "Japan visa application form Bangladesh",
    "Eammu Holidays Japan visa",
    "Japan student visa support"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/japan-visa-application",
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
      "Japan Visa Requirements for Bangladeshis | Fees & Document Support",

    description:
      "Planning a trip to Tokyo or Osaka? Eammu Holidays provides professional guidance for Japan visa applications, including document preparation and appointment scheduling at JVAC Dhaka.",

    url:
      "https://www.eammu.com/our-services/visa/japan-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_japan_banner.webp",
        width: 1200,
        height: 630,
        alt: "Japan visa requirements and expert application support from Bangladesh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Japan Visa Assistance for Bangladesh Citizens",

    description:
      "Hassle-free Japan visa processing. Tourist and business visa support with accurate document checklists and processing timelines.",

    images: ["/eammu_japan_banner.webp"],
  },
};
export default function page() {
  return (
    <div>
      <JapanVisa />
    </div>
  )
}
