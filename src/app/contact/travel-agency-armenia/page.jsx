import TravelAgencyArmenia from '@/Components/Client/TravelAgency/TravelAgencyArmenia/TravelAgencyArmenia'
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Travel Agency in Yerevan, Armenia | Eammu Holidays Visa & Tour Services",

  description:
    "Looking for a trusted travel agency in Yerevan, Armenia? Eammu Holidays offers expert visa assistance, tour packages, and travel services. Visit our office at Lambron 39 or contact us via phone, WhatsApp, or email for fast support.",

  keywords: [
    "travel agency Yerevan Armenia",
    "visa services Armenia Yerevan",
    "Eammu Holidays Armenia office",
    "tour packages from Armenia",
    "travel agency Lambron 39 Yerevan",
    "visa consultant Armenia",
    "international travel agency Armenia",
    "Armenia visa support company"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/contact/travel-agency-armenia",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://www.eammu.com/contact/travel-agency-armenia",
    siteName: "Eammu Holidays",

    title:
      "Eammu Holidays Armenia | Travel & Visa Experts in Yerevan",

    description:
      "Visit Eammu Holidays in Yerevan for visa services, travel planning, and international tour packages. Fast and reliable support for all travelers.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Travel agency in Yerevan Armenia providing visa and tour services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Travel Agency in Yerevan | Eammu Holidays Armenia",
    description:
      "Get visa help, tour packages, and travel services from our Yerevan office.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};
export default function page() {
  return (
    <div>
      <TravelAgencyArmenia />
    </div>
  )
}
