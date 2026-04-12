import React from 'react'

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Travel Agency in Tbilisi Georgia | Eammu Holidays Visa & Tour Services",

  description:
    "Need a trusted travel agency in Georgia? Eammu Holidays offers visa support, tour packages, and international travel services from our Tbilisi office. Fast and reliable assistance for all travelers.",

  keywords: [
    "travel agency Tbilisi Georgia",
    "Georgia visa services",
    "tour packages Georgia",
    "Eammu Holidays Georgia office",
    "Tbilisi travel agency contact",
    "international travel agency Georgia",
    "visa consultant Georgia",
    "cheap tours Georgia"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/contact/travel-agency-georgia",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://www.eammu.com/contact/travel-agency-georgia",
    siteName: "Eammu Holidays",

    title:
      "Eammu Holidays Georgia | Travel Experts in Tbilisi",

    description:
      "Visit Eammu Holidays in Tbilisi for visa services, tours, and international travel planning support.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Travel agency in Tbilisi Georgia visa and tour services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Travel Agency in Georgia | Eammu Holidays",
    description:
      "Visa and travel services from our Tbilisi Georgia office.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};
export default function page() {
  return (
    <div>
      <h1>Georgia</h1>
    </div>
  )
}
