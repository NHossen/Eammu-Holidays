import OnlineTravelAgencyBangladesh from '@/Components/Server/OnlineTravelAgencyBangladesh/OnlineTravelAgencyBangladesh'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Online Travel Agency in Bangladesh | Visa, Tours & Flight Booking",
    template: "%s | Eammu Holidays Bangladesh",
  },

  description:
    "Looking for a reliable online travel agency in Bangladesh? Eammu Holidays offers visa services, Dubai tour packages, Umrah deals, and flight booking with fast and trusted support from Cumilla and across Bangladesh.",

  keywords: [
    "online travel agency Bangladesh",
    "visa services Bangladesh online",
    "Dubai tour package from Bangladesh",
    "Umrah package Bangladesh price",
    "flight booking Bangladesh online",
    "travel agency Cumilla Bangladesh",
    "cheap tour packages Bangladesh",
    "international travel agency Bangladesh"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/online-travel-agency-bangladesh",
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
    type: "website",
    url: "https://www.eammu.com/online-travel-agency-bangladesh",
    siteName: "Eammu Holidays",

    title:
      "Online Travel Agency Bangladesh | Visa, Tours & Flights | Travel Agency Cumilla ",

    description:
      "Book visas, flights, and holiday packages online with Eammu Holidays. Trusted travel services across Bangladesh.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Online travel agency Bangladesh visa and tour services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Online Travel Agency in Bangladesh",
    description:
      "Visa services, tour packages, and flight booking made easy.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};
export default function page() {
  return (
    <div>
      <OnlineTravelAgencyBangladesh />
    </div>
  )
}
