

import PremiumHero from '@/Components/Client/eammuGroupClient/EammuMarketing/PremiumHero/PremiumHero'
import PremiumCard from '@/Components/Client/eammuGroupClient/EammuMarketing/PremiumCard/PremiumCard'
import React from 'react'
import OurCoreServices from '@/Components/Client/eammuGroupClient/EammuMarketing/OurCoreServices/OurCoreServices'

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Web Development & Digital Marketing Services | SEO, Websites & Branding",
    template: "%s | Eammu Digital Services",
  },

  description:
    "Professional web development and digital marketing services by Eammu Holidays. We build modern websites, SEO-optimized platforms, branding solutions, and online marketing strategies to grow your business in Bangladesh, UAE, and worldwide.",

  keywords: [
    "web development company Bangladesh",
    "digital marketing agency UAE",
    "SEO services Bangladesh",
    "website design services",
    "business website development",
    "online marketing agency",
    "branding and SEO services",
    "social media marketing agency",
    "affordable web development",
    "lead generation services"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/web-development-digital-marketing",
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
    url: "https://www.eammu.com/web-development-digital-marketing",
    siteName: "Eammu Holidays",

    title:
      "Web Development & Digital Marketing Services",

    description:
      "Grow your business online with professional websites, SEO, and digital marketing solutions.",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Web development and digital marketing services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Web Development & Digital Marketing | Eammu",
    description:
      "Professional websites, SEO, and marketing services for business growth.",
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
      serviceType: "Web Development and Digital Marketing",
      provider: {
        "@type": "Organization",
        name: "Eammu Holidays",
        url: "https://www.eammu.com"
      },
      areaServed: ["Bangladesh", "UAE", "Worldwide"]
    }),
  }}
/>
     <PremiumHero />
     <OurCoreServices />
     <PremiumCard />

     
    </div>
  )
}
