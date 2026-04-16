import ActivitiesPage from '@/Components/Client/ActivitiesPage/ActivitiesPage'
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Things to Do & Top Activities | Tours, Experiences & Attractions",
    template: "%s | Eammu Holidays Experiences",
  },

  description:
    "Discover the best things to do around the world with Eammu Holidays. Book top activities, guided tours, city attractions, desert safaris, cruises, and unique travel experiences for an unforgettable trip.",

  keywords: [
    "things to do in Dubai",
    "tourist activities booking",
    "desert safari Dubai",
    "city tours worldwide",
    "holiday experiences",
    "top attractions tours",
    "travel activities booking",
    "Dubai tours and excursions",
    "things to do for tourists",
    "international tour activities"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/things-to-do",
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
    url: "https://www.eammu.com/our-services/things-to-do",
    siteName: "Eammu Holidays",

    title:
      "Best Things to Do & Travel Experiences Worldwide",

    description:
      "Explore top activities, attractions, and tours including desert safaris, cruises, and city experiences.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Top travel activities and experiences worldwide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Things to Do | Tours & Activities",
    description:
      "Find and book the best travel experiences and activities worldwide.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};
export default function page() {
  return (
    <div>
      <ActivitiesPage />
    </div>
  )
}
