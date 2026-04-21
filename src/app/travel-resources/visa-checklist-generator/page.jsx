import VisaChecklistGenerator from '@/Components/Client/VisaChecklistGenerator/VisaChecklistGenerator'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Visa Checklist Generator | Personalized Visa Document Checklist for All Categories",

  description:
    "Create a personalized visa checklist instantly with Eammu Holidays Visa Checklist Generator. Add, edit, and download visa document checklists for tourist visa, student visa, work visa, business visa, family visit visa, Schengen visa, UK visa, USA visa, Canada visa, and worldwide applications.",

  keywords: [
    "visa checklist generator",
    "visa document checklist",
    "tourist visa checklist",
    "student visa checklist",
    "work visa checklist",
    "Schengen visa checklist",
    "UK visa documents list",
    "USA visa checklist",
    "Canada visa checklist",
    "visa papers required",
    "download visa checklist",
    "custom visa checklist",
    "online visa tools",
    "Eammu Holidays visa tool"
  ],

  alternates: {
    canonical: "https://www.eammu.com/travel-resources/visa-checklist-generator",
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
      "Visa Checklist Generator | Personalized Visa Documents Tool",

    description:
      "Generate and download custom visa document checklists for tourist, student, work, and worldwide visa applications.",

    url: "https://www.eammu.com/travel-resources/visa-checklist-generator",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Visa checklist generator for all categories",
      },
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Personalized visa checklist by Eammu Holidays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Visa Checklist Generator | Download Personalized Checklist",

    description:
      "Create custom visa document checklists online for any visa category worldwide.",

    images: ["/preview-banner.webp"],
  },
};
export default function page() {
  return (
    <div>
      <VisaChecklistGenerator />
    </div>
  )
}
