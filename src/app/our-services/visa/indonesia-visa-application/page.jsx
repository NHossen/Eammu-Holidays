import IndonesiaVisa from '@/Components/Server/VisaCountry/IndonesiaVisa/IndonesiaVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Indonesia Visa Requirements for Bangladeshis | Tourist & Business Visa Fees",

  description:
    "Apply for your Indonesia visa from Bangladesh with Eammu Holidays. Detailed guidance on Indonesia tourist visa requirements, e-visa fees, documents, and fast processing for Bangladeshi citizens.",

  keywords: [
    "Indonesia visa requirements for Bangladeshi",
    "Indonesia visa fee from Bangladesh",
    "Indonesia e-visa for Bangladesh citizens",
    "Apply Indonesia visa from Bangladesh",
    "Indonesia tourist visa requirements",
    "Indonesia business visa for Bangladeshis",
    "Indonesia visa processing time Bangladesh",
    "Eammu Holidays Indonesia visa support",
    "Bali visa for Bangladeshi citizens",
    "Indonesia visa agency Bangladesh"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/indonesia-visa-application",
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
      "Indonesia Visa Requirements for Bangladeshis | Expert Application Support",

    description:
      "Planning a trip to Bali or Jakarta? Get expert support for your Indonesia visa application from Bangladesh. Reliable guidance on documents and e-visa fees.",

    url:
      "https://www.eammu.com/our-services/visa/indonesia-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_indonesia_banner.webp", // Ensure this image exists
        width: 1200,
        height: 630,
        alt: "Indonesia visa requirements and application support Bangladesh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Indonesia Visa for Bangladeshis | Fees & Requirements",

    description:
      "Get your Indonesia tourist or business visa easily with Eammu Holidays. Fast processing and expert document guidance.",

    images: ["/eammu_indonesia_banner.webp"],
  },
};
export default function page() {
  return (
    <div>
      <IndonesiaVisa />
    </div>
  )
}
