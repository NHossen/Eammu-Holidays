import TravelAgencyBangladesh from '@/Components/Client/TravelAgency/TravelAgencyBangladesh/TravelAgencyBangladesh';
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Travel Agency in Cumilla, Bangladesh | Eammu Holidays Visa & Tour Services",

  description:
    "Looking for a reliable travel agency in Cumilla, Bangladesh? Eammu Holidays provides expert visa services, tour packages, Umrah deals, and flight booking. Visit our office at Gomoti Tower or contact us for fast support.",

  keywords: [
    "travel agency Cumilla Bangladesh",
    "visa services Bangladesh Cumilla",
    "Eammu Holidays Bangladesh office",
    "tour packages from Bangladesh",
    "Umrah package Cumilla",
    "Dubai visa from Bangladesh",
    "visa consultant Bangladesh",
    "travel agency near me Cumilla"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/contact/travel-agency-bangladesh",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://www.eammu.com/contact/travel-agency-bangladesh",
    siteName: "Eammu Holidays",

    title:
      "Eammu Holidays Bangladesh | Travel & Visa Experts in Cumilla",

    description:
      "Visit Eammu Holidays in Cumilla for visa processing, tour packages, Umrah services, and international travel support.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Travel agency in Cumilla Bangladesh for visa and tour services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Travel Agency in Cumilla | Eammu Holidays Bangladesh",
    description:
      "Get visa help, Umrah packages, and tour services from our Cumilla office.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};
export default function page() {
  return (
    <div>
      <TravelAgencyBangladesh />
    </div>
  )
}
