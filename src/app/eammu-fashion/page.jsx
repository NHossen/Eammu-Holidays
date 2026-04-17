import EammuFashion from '@/Components/Client/eammuGroupClient/EammuFashion/EammuFashion'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Eammu Fashion | Modern Clothing, Lifestyle & Premium Fashion Collection",

  description:
    "Discover Eammu Fashion – modern clothing, stylish outfits, and premium lifestyle wear. Explore trendy fashion collections for men and women with quality fabrics, affordable pricing, and unique designs in Bangladesh.",

  keywords: [
    "Eammu Fashion",
    "fashion brand Bangladesh",
    "men women clothing Bangladesh",
    "modern fashion collection",
    "stylish outfits Bangladesh",
    "affordable clothing brand",
    "premium fashion wear",
    "Eammu clothing store",
    "lifestyle fashion Bangladesh",
    "trendy dresses Bangladesh"
  ],

  alternates: {
    canonical: "https://www.eammu.com/eammu-fashion",
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
    title: "Eammu Fashion | Trendy & Premium Clothing Collection",

    description:
      "Explore stylish and modern fashion collections from Eammu Fashion. Premium quality clothing designed for comfort, style, and everyday lifestyle.",

    url: "https://www.eammu.com/eammu-fashion",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Fashion clothing collection",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Eammu Fashion | Modern Clothing Brand",
    description:
      "Trendy and premium fashion collection for men and women in Bangladesh.",
    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <EammuFashion />
    </div>
  )
}
