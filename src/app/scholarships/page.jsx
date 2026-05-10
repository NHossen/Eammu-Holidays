import ScholarshipsMain from '@/Components/Client/ScholarshipsMain/ScholarshipsMain'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Scholarships for Bangladeshi Students | Fully Funded Study Abroad",
    template: "%s | Eammu Holidays Scholarships",
  },

  description:
    "Explore fully funded scholarships for Bangladeshi students. Expert guidance for UK, USA, Canada, Australia, and European university applications and funding support.",

  keywords: [
    "scholarships for Bangladeshi students",
    "study abroad scholarships",
    "fully funded scholarships 2026",
    "undergraduate scholarships for international students",
    "masters scholarships for Bangladeshis",
    "PhD funding abroad",
    "scholarship consultants in Bangladesh",
    "Commonwealth scholarship Bangladesh",
    "Erasmus Mundus scholarship help",
    "study in UK with scholarship"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa-services/scholarships",
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
    url: "https://www.eammu.com/our-services/visa-services/scholarships",
    siteName: "Eammu Holidays",

    title:
      "Fully Funded Scholarships for Bangladeshi Students | Study Abroad",

    description:
      "Apply for international scholarships with Eammu Holidays. We provide end-to-end support for university admissions and funding applications.",

    images: [
      {
        url: "/scholarship-banner.webp", // Ensure this image exists
        width: 1200,
        height: 630,
        alt: "Scholarships and study abroad opportunities for Bangladeshi students",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "International Scholarships for Bangladeshi Students",
    description:
      "Expert assistance for fully funded scholarship applications worldwide.",
    images: ["/scholarship-banner.webp"],
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
            "serviceType": "Scholarship Consultancy & Educational Support",
            "provider": {
              "@type": "TravelAgency",
              "name": "Eammu Holidays",
              "url": "https://www.eammu.com"
            },
            "areaServed": "Bangladesh",
            "description": "Comprehensive support for Bangladeshi students seeking international scholarships and university admissions."
          }),
        }}
      />
      <ScholarshipsMain />
    </div>
  )
}
