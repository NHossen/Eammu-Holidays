import SchengenVisaPage from '@/Components/Client/SchengenVisa/SchengenVisa'
import React from 'react'
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Schengen Visa from Bangladesh 2026 | Checklist & Appointment Help",
    template: "%s | Eammu Holidays Europe Visa",
  },

  description:
    "Apply for a Schengen Visa from Bangladesh with expert assistance. Get the 2026 document checklist, VFS Global appointment help, and guaranteed travel insurance for France, Italy, Germany, and more.",

  keywords: [
    "Schengen visa from Bangladesh 2026",
    "Europe visit visa price in Bangladesh",
    "Schengen visa document checklist",
    "VFS Global Bangladesh appointment",
    "France visa from Bangladesh",
    "Italy tourist visa requirements",
    "Germany visit visa process",
    "Schengen travel insurance Bangladesh",
    "Europe tour package from Bangladesh",
    "Schengen visa processing agency Dhaka"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa-services/schengen-visa-from-bangladesh",
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
    url: "https://www.eammu.com/our-services/visa-services/schengen-visa-from-bangladesh",
    siteName: "Eammu Holidays",

    title:
      "Schengen Visa for Bangladeshis | Expert Europe Visa Processing",

    description:
      "Fast-track your Europe travel plans. We provide complete file preparation for Schengen visas, including flight reservations and hotel bookings.",

    images: [
      {
        url: "/schengen-preview.webp", // Ensure this high-quality image is in your public folder
        width: 1200,
        height: 630,
        alt: "Schengen Visa processing services for Europe travel from Bangladesh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Schengen Visa Assistance | Travel to Europe from Bangladesh",
    description:
      "Complete documentation and appointment support for all 29 Schengen countries.",
    images: ["/schengen-preview.webp"],
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
            "serviceType": "Schengen Visa Consultancy",
            "provider": {
              "@type": "TravelAgency",
              "name": "Eammu Holidays",
              "url": "https://www.eammu.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dhaka",
                "addressCountry": "BD"
              }
            },
            "areaServed": "Bangladesh",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Schengen Visa Support",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "VFS Appointment Scheduling"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Schengen Travel Insurance"
                  }
                }
              ]
            }
          }),
        }}
      />
      <SchengenVisaPage />
    </div>
  )
}
