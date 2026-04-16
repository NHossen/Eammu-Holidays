
import Offers from '@/Components/Client/Offers/Offers'
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Best Travel Deals & Offers 2026 | Visa, Flights & Tour Packages",
    template: "%s | Eammu Holidays Offers",
  },

  description:
    "Discover the latest travel deals on visa services, Dubai tours, Umrah packages, and international flights. Save more with exclusive offers from Eammu Holidays for Bangladesh, UAE, and worldwide travelers.",

  keywords: [
    "travel deals 2026",
    "cheap tour packages",
    "Dubai travel offers",
    "Umrah package discount",
    "visa service offers",
    "flight ticket deals",
    "holiday packages discount",
    "travel agency offers Bangladesh",
    "Dubai tour package price",
    "cheap international tours"
  ],

  alternates: {
    canonical: "https://www.eammu.com/offers",
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
    url: "https://www.eammu.com/offers",
    siteName: "Eammu Holidays",

    title:
      "Latest Travel Deals | Visa, Flights & Holiday Packages",

    description:
      "Get the best deals on visa processing, flights, and tour packages. Limited-time offers available now.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Best travel deals and offers for visa and tour packages",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Travel Offers & Deals 2026",
    description:
      "Save on visas, flights, and holiday packages with Eammu Holidays.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};
export default function page() {
  return (
    <div>
     <Offers />
    </div>
  )
}
