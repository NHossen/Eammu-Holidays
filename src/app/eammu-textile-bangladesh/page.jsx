import EammuTextile from '@/Components/Client/eammuGroupClient/EammuTextile/EammuTextile'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Eammu Textile Bangladesh | Garments Manufacturing, Export & Supply Chain",

  description:
    "Eammu Textile Bangladesh specializes in garments manufacturing, textile production, and export-quality apparel supply. Discover our textile solutions, fabric sourcing, production capacity, quality control, and global export services from Bangladesh.",

  keywords: [
    "Eammu Textile Bangladesh",
    "garments manufacturing Bangladesh",
    "textile industry Bangladesh",
    "apparel export Bangladesh",
    "fabric production Bangladesh",
    "clothing factory Bangladesh",
    "textile supply chain Bangladesh",
    "ready made garments Bangladesh",
    "RMG sector Bangladesh",
    "export textile company Bangladesh"
  ],

  alternates: {
    canonical: "https://www.eammu.com/eammu-textile-bangladesh",
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
    title: "Eammu Textile Bangladesh | Garments & Apparel Manufacturing",

    description:
      "High-quality textile and garments production by Eammu Textile Bangladesh. Export-ready apparel manufacturing with strong quality control and global standards.",

    url: "https://www.eammu.com/eammu-textile-bangladesh",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Eammu textile and garments Bangladesh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Eammu Textile Bangladesh | Garments Manufacturing",
    description:
      "Textile and apparel export solutions from Bangladesh with premium quality standards.",
    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <EammuTextile />
    </div>
  )
}
