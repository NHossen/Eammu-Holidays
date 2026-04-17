
import AboutServer from '@/Components/Server/AboutServer/AboutServer';
import React from 'react'

export const metadata = {
  title:
    "Leading Online Travel Agency Bangladesh | Trusted Travel & Visa Experts in Bangladesh, Dubai & Beyond",

  description:
    "Leading Online Travel Agency Bangladesh ,Learn about Eammu Holidays, a trusted international travel agency offering visa services, Umrah packages, flight booking, and luxury tours. With offices in Bangladesh, Dubai, Armenia, and Georgia, we help travelers explore the world بسهولة and confidently.",

  keywords: [
    "about Eammu Holidays",
    "travel agency Bangladesh",
    "visa experts Bangladesh",
    "Dubai travel agency company",
    "international tour operator",
    "Umrah travel agency",
    "trusted visa service provider",
    "global travel agency Bangladesh"
  ],

  metadataBase: new URL("https://www.eammu.com"),

  alternates: {
    canonical: "https://www.eammu.com/about",
  },

  openGraph: {
    title:
      "About Eammu Holidays | Your Trusted Travel Partner",

    description:
      "Discover Eammu Holidays – a global travel agency helping thousands with visas, tours, and Umrah packages from Bangladesh, UAE, Armenia & Georgia.",

    url: "https://www.eammu.com/about",
    siteName: "Eammu Holidays",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays travel and visa services",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Eammu Holidays",
    description:
      "Trusted travel agency for visas, tours, and Umrah packages worldwide.",
    images: ["/preview-banner.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function page() {
  return (
    <div>
     {/* AboutServer already contains AboutClient inside it with all the data */}
      <AboutServer />
      
    </div>
  )
}
