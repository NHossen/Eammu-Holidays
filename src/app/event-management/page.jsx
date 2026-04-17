import EammuEvent from '@/Components/Client/eammuGroupClient/EammuEvent/EammuEvent'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Event Management Services | Corporate, Wedding & Private Event Planning",

  description:
    "Professional event management services by Eammu Holidays. We organize corporate events, weddings, conferences, private parties, and special occasions with complete planning, decoration, logistics, and on-ground coordination in Bangladesh and UAE.",

  keywords: [
    "event management Bangladesh",
    "corporate event planning",
    "wedding planner Bangladesh",
    "event management company",
    "conference management services",
    "private party organizer",
    "Eammu event management",
    "professional event planner Dubai Bangladesh",
    "event decoration services",
    "business event coordination"
  ],

  alternates: {
    canonical: "https://www.eammu.com/event-management",
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
      "Event Management Services | Corporate & Wedding Planning Experts",

    description:
      "Complete event planning and management solutions for corporate events, weddings, and private functions with professional execution.",

    url: "https://www.eammu.com/event-management",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Event management services Eammu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Event Management Services | Eammu Holidays",
    description:
      "Corporate, wedding, and private event planning services with professional execution.",
    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <EammuEvent />
    </div>
  )
}
