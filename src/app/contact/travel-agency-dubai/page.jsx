import TravelAgencyDubai from '@/Components/Client/TravelAgency/TravelAgencyDubai/TravelAgencyDubai';
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Travel Agency in Business Bay Dubai | Eammu Holidays Visa & Tour Services",

  description:
    "Looking for a trusted travel agency in Dubai? Eammu Holidays provides visa services, tour packages, flight booking, and holiday planning from our Business Bay office. Fast, reliable, and professional support in UAE.",

  keywords: [
    "travel agency Dubai Business Bay",
    "Dubai visa service",
    "tour packages Dubai",
    "Eammu Holidays Dubai office",
    "UAE travel agency contact",
    "Dubai holiday packages",
    "visa consultant Dubai",
    "cheap flights Dubai"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/contact/travel-agency-dubai",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://www.eammu.com/contact/travel-agency-dubai",
    siteName: "Eammu Holidays",

    title:
      "Eammu Holidays Dubai | Travel & Visa Experts in Business Bay",

    description:
      "Visit our Dubai office in Business Bay for visa processing, tours, and travel services. Trusted UAE travel agency support.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Travel agency in Dubai Business Bay visa and tour services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Travel Agency in Dubai | Eammu Holidays",
    description:
      "Visa services, tour packages, and travel support from Business Bay Dubai.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};

export default function page() {
  return (
    <div>
      <TravelAgencyDubai />
    </div>
  )
}
