import VisaClientContent from '@/Components/Client/visaServices/Visa/VisaClientContent';
import { countries } from '@/data/visaData/visaData';

import Link from 'next/link';

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Visa Services & Processing | Tourist, Work & Student Visa Assistance",
    template: "%s | Eammu Holidays Visa Services",
  },

  description:
    "Get expert visa services with Eammu Holidays. We assist with tourist visas, work permits, student visas, and business visas for Dubai, Europe, UK, USA, Canada, and more. Fast processing and trusted support from Bangladesh and UAE.",

  keywords: [
    "visa services Bangladesh",
    "Dubai visa processing",
    "tourist visa application",
    "work permit Europe",
    "student visa consultancy",
    "UK USA Canada visa help",
    "visa consultant Bangladesh",
    "international visa services",
    "visa agency near me",
    "fast visa processing"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa-services",
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
    url: "https://www.eammu.com/our-services/visa-services",
    siteName: "Eammu Holidays",

    title:
      "Visa Services & Travel Visa Assistance Worldwide",

    description:
      "Apply for tourist, work, and student visas with expert guidance. Trusted visa services from Bangladesh and Dubai.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Visa services for Dubai Europe UK USA Canada",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Visa Services | Tourist, Work & Student Visas",
    description:
      "Fast and reliable visa processing with expert support.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};

export default function VisaServicesPage() {

  return (
    <div className="bg-gray-50 min-h-screen">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Visa Services",
      provider: {
        "@type": "TravelAgency",
        name: "Eammu Holidays"
      },
      areaServed: [
        "Bangladesh",
        "UAE",
        "Armenia",
        "Georgia"
      ],
      availableChannel: {
        "@type": "ServiceChannel",
        serviceLocation: {
          "@type": "Place",
          name: "Eammu Holidays Offices"
        }
      }
    }),
  }}
/>

      {/* Hero এবং Filterable Content সব এই Client Component এ থাকবে */}
      <VisaClientContent />

      {/* Static Footer CTA - Server Side */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-[#005a31] text-white p-12 rounded-[3.5rem] text-center relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Visa Consultation Today</h2>
          <p className="text-green-50 max-w-2xl mx-auto mb-10 text-lg">
            End-to-end support for <strong>student, work, and tourist visas</strong>, Hajj & Umrah, and group travel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/8801631312524" className="bg-white text-[#005a31] px-10 py-4 rounded-full font-bold shadow-xl hover:bg-green-50 transition">WhatsApp Consultation</a>
            <Link href="/" className="bg-transparent border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition">Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}