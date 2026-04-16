import TourPackages from '@/Components/Client/tour-packages/tour-packages'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Best Tour Packages 2026 | Dubai, Thailand, Europe & More",
    template: "%s | Eammu Holidays Tours",
  },

  description:
    "Explore affordable and luxury tour packages with Eammu Holidays. Book Dubai tours, Thailand holidays, Europe trips, and international travel packages with complete support, guided tours, and best prices.",

  keywords: [
    "tour packages 2026",
    "Dubai tour package price",
    "Thailand tour package from Bangladesh",
    "Europe tour packages",
    "holiday packages international",
    "cheap tour packages",
    "travel packages Bangladesh",
    "luxury holiday tours",
    "Dubai trip cost from Bangladesh",
    "international travel packages"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/tour-packages",
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
    url: "https://www.eammu.com/our-services/tour-packages",
    siteName: "Eammu Holidays",

    title:
      "Top Tour Packages & Holiday Deals Worldwide",

    description:
      "Book the best tour packages for Dubai, Thailand, Europe and more. Affordable and luxury travel options available.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Best international tour packages and holiday deals",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tour Packages | Dubai, Thailand & Europe Trips",
    description:
      "Find and book affordable and luxury tour packages worldwide.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};
export default function page() {
  return (
    <div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: "Tour Packages by Eammu Holidays",
      url: "https://www.eammu.com/our-services/tour-packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Dubai Tour Package",
        },
        {
          "@type": "Offer",
          name: "Thailand Tour Package",
        },
        {
          "@type": "Offer",
          name: "Europe Tour Package",
        }
      ]
    }),
  }}
/>
        
        <TourPackages />
    </div>
  )
}
