import Testimonials from '@/Components/Client/Testimonials/Testimonials'
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Customer Reviews & Testimonials | Eammu Holidays Travel Agency",
    template: "%s | Eammu Holidays",
  },

  description:
    "Read real customer reviews and testimonials about Eammu Holidays. Discover how we help clients with visa processing, tour packages, study abroad, and travel services across Bangladesh, Dubai, and worldwide destinations.",

  keywords: [
    "Eammu Holidays reviews",
    "travel agency testimonials Bangladesh",
    "visa success reviews",
    "Dubai travel agency reviews",
    "tour package reviews",
    "study abroad success stories",
    "customer feedback travel agency",
    "trusted travel agency Bangladesh",
    "visa consultancy reviews",
    "happy clients Eammu Holidays"
  ],

  alternates: {
    canonical: "https://www.eammu.com/testimonials",
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
    url: "https://www.eammu.com/testimonials",
    siteName: "Eammu Holidays",

    title:
      "Customer Reviews & Success Stories | Eammu Holidays",

    description:
      "See what our clients say about visa approvals, tours, and study abroad services with Eammu Holidays.",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays customer testimonials and reviews",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Testimonials | Eammu Holidays Reviews",
    description:
      "Real customer feedback and success stories from our travel services.",
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
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Eammu Holidays",
        url: "https://www.eammu.com"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.9",
        bestRating: "5"
      },
      author: {
        "@type": "Organization",
        name: "Eammu Customers"
      }
    }),
  }}
/>
      <Testimonials />
    </div>
  )
}
