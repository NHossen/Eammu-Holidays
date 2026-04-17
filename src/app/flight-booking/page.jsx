import FlightSearch from '@/Components/Client/eammuGroupClient/FlightSearch/FlightSearch'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Flight Booking | Cheap Air Tickets & International Flight Search",

  description:
    "Search and book cheap international flights with Eammu Holidays. Compare airline prices, find best deals, and get support for Dubai, UK, USA, Canada, Europe, and Asia flight bookings with easy and secure reservation service.",

  keywords: [
    "flight booking Bangladesh",
    "cheap flights from Bangladesh",
    "international flight search",
    "air ticket booking Dubai",
    "USA flight tickets Bangladesh",
    "UK flight booking Bangladesh",
    "Canada flight tickets",
    "Europe flight deals",
    "online flight booking system",
    "Eammu flight booking"
  ],

  alternates: {
    canonical: "https://www.eammu.com/flight-booking",
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
    title: "Flight Booking | Cheap International Air Tickets",

    description:
      "Find and book cheap international flights with Eammu Holidays. Compare prices and get best deals worldwide.",

    url: "https://www.eammu.com/flight-booking",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Flight booking and air ticket search",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Flight Booking | Cheap Air Tickets",
    description:
      "Search and book international flights at best prices with Eammu Holidays.",
    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <FlightSearch />
    </div>
  )
}
