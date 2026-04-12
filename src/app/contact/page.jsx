

import ContactWithUs from '@/Components/Client/ContactWithUs/ContactWithUs'
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Contact Eammu Holidays | Visa & Travel Support in Bangladesh, Dubai, Armenia & Georgia",

  description:
    "Need help with visas or travel planning? Contact Eammu Holidays for fast and reliable support. Visit our offices in Cumilla (Bangladesh), Dubai (UAE), Yerevan (Armenia), and Tbilisi (Georgia) or connect via phone, WhatsApp, and email.",

  keywords: [
    "contact travel agency Bangladesh",
    "visa support Cumilla",
    "Dubai travel agency contact",
    "Eammu Holidays phone number",
    "travel agency Business Bay Dubai",
    "visa consultant Bangladesh contact",
    "international travel agency contact",
    "Eammu Holidays office locations"
  ],

  alternates: {
    canonical: "https://www.eammu.com/contact",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://www.eammu.com/contact",
    siteName: "Eammu Holidays",

    title:
      "Contact Eammu Holidays – Global Travel & Visa Experts",

    description:
      "Get in touch with Eammu Holidays for visa assistance, tour packages, and travel services. Offices in Bangladesh, UAE, Armenia & Georgia.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Contact Eammu Holidays travel and visa support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Contact Eammu Holidays",
    description:
      "Reach our travel experts for visa services, tours, and travel support worldwide.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};
export default function page() {
  return (
    <div>
      <ContactWithUs />
    </div>
  )
}
