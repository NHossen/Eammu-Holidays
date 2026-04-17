import EammuSocialResponsibility from '@/Components/Client/eammuGroupClient/EammuSocialResponsibility/EammuSocialResponsibility'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Eammu Social Responsibility | Community Support, Charity & Sustainable Impact",

  description:
    "Eammu Social Responsibility focuses on community development, charity programs, education support, and sustainable initiatives. Discover how Eammu contributes to social welfare, environmental responsibility, and positive impact in Bangladesh and beyond.",

  keywords: [
    "Eammu social responsibility",
    "CSR Bangladesh",
    "community support programs Bangladesh",
    "charity organization Bangladesh",
    "education support initiatives",
    "sustainable business Bangladesh",
    "corporate social responsibility Eammu",
    "social welfare projects Bangladesh",
    "environmental initiatives Bangladesh",
    "Eammu charity work"
  ],

  alternates: {
    canonical: "https://www.eammu.com/eammu-social-responsibility",
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
    title: "Eammu Social Responsibility | Community & CSR Initiatives",

    description:
      "Learn about Eammu’s commitment to social responsibility, including education support, charity programs, and sustainable development initiatives.",

    url: "https://www.eammu.com/eammu-social-responsibility",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Eammu social responsibility community support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Eammu Social Responsibility | CSR & Community Support",
    description:
      "Eammu’s CSR initiatives focused on charity, education, and sustainable development.",
    images: ["/eammu_banner_four.webp"],
  },
};
export default function page() {
  return (
    <div>
      <EammuSocialResponsibility />
    </div>
  )
}
