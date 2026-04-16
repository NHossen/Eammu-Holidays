import TouristVisa from '@/Components/Client/visaServices/Visa/TouristVisaBangladesh/TouristVisa/TouristVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Visa Services | Tourist, Student & Work Visa Assistance Worldwide",
    template: "%s | Eammu Holidays Visa Services",
  },

  description:
    "Get professional visa services with Eammu Holidays. We provide tourist visa, student visa, and work permit assistance for Dubai, UK, USA, Canada, Europe, and more with expert guidance and high success rate.",

  keywords: [
    "visa services",
    "visa agency Bangladesh",
    "tourist visa assistance",
    "student visa consultancy",
    "work visa Europe",
    "Dubai visa from Bangladesh",
    "UK USA Canada visa help",
    "international visa service",
    "visa processing agency",
    "travel visa consultant"
  ],

  alternates: {
    canonical: "https://www.eammu.com/visa",
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
    url: "https://www.eammu.com/visa",
    siteName: "Eammu Holidays",

    title:
      "Visa Services | Tourist, Student & Work Visas",

    description:
      "Apply for visas easily with expert support for tourist, student, and work visas worldwide.",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays visa services worldwide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Visa Services | Eammu Holidays",
    description:
      "Fast and reliable visa processing for all countries.",
    images: ["/eammu_banner_four.webp"],
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
      "@type": "Service",
      serviceType: "Visa Services",
      provider: {
        "@type": "TravelAgency",
        name: "Eammu Holidays",
        url: "https://www.eammu.com"
      },
      areaServed: "Worldwide"
    }),
  }}
/>
      <TouristVisa />
    </div>
  )
}
