import EammuDairy from '@/Components/Client/eammuGroupClient/EammuDairy/EammuDairy'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Eammu Dairy & Poultry | Quality Farm Products, Production & Supply",

  description:
    "Eammu Dairy & Poultry provides high-quality dairy and poultry products with hygienic production standards. Learn about our fresh milk supply, eggs, poultry farming services, quality control, and sustainable farming practices in Bangladesh.",

  keywords: [
    "dairy and poultry Bangladesh",
    "fresh milk supply Bangladesh",
    "poultry farm Bangladesh",
    "egg supply Bangladesh",
    "Eammu Dairy Poultry",
    "organic dairy products Bangladesh",
    "farm fresh milk",
    "poultry production Bangladesh",
    "hygienic poultry farm",
    "Eammu agricultural business"
  ],

  alternates: {
    canonical: "https://www.eammu.com/eammu-dairy-poultry",
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
    title: "Eammu Dairy & Poultry | Fresh & Hygienic Farm Products",

    description:
      "High-quality dairy and poultry products from Eammu. Fresh milk, eggs, and farm-based food supply with strict hygiene standards in Bangladesh.",

    url: "https://www.eammu.com/eammu-dairy-poultry",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Dairy and Poultry farm products",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Eammu Dairy & Poultry | Farm Fresh Products",
    description:
      "Fresh milk, eggs, and poultry products with hygienic standards in Bangladesh.",
    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <EammuDairy />
    </div>
  )
}
