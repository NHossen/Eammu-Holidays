import TravelResources from '@/Components/Client/TravelResources/TravelResources'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Travel Resources | Visa Templates, SOP, NOC, Cover Letters & AI Travel Tools | Travel Make Simple ",

  description:
    "Access premium travel resources by Eammu Holidays including visa templates, NOC letters, SOP drafts, bank statement formats, salary certificates, affidavits, travel itinerary planners, cover letters, and AI travel prompts. Professional tools for tourist visa, student visa, Schengen, UK, USA, Canada, and worldwide applications.",

  keywords: [
    "travel resources",
    "visa templates download",
    "NOC letter for visa",
    "SOP for student visa",
    "visa cover letter template",
    "bank statement for visa",
    "salary certificate format",
    "Schengen visa itinerary",
    "USA visa documents",
    "UK visa templates",
    "Canada visa application tools",
    "travel prompt generator",
    "AI visa prompts",
    "visa legal drafts",
    "travel documents Bangladesh",
    "Eammu travel resources"
  ],

  alternates: {
    canonical: "https://www.eammu.com/travel-resources",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "Travel Resources | Visa Templates, AI Prompts & Legal Drafts",

    description:
      "Download professional visa templates, NOC letters, bank formats, cover letters, itinerary tools, and AI travel prompts for successful visa applications worldwide.",

    url: "https://www.eammu.com/travel-resources",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Travel resources visa templates and AI prompts",
      },
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Professional visa resources by Eammu Holidays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Travel Resources | Visa Templates & AI Tools",

    description:
      "Professional visa drafts, templates, itinerary tools, and travel prompts for global applications.",

    images: ["/preview-banner.webp"],
  },
};
export default function page() {
  return (
    <div>
      <TravelResources />
    </div>
  )
}
