import TouristVisaBangladesh from "@/Components/Client/visaServices/Visa/TouristVisaBangladesh/TouristVisaBangladesh";

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Tourist Visa from Bangladesh | Visit Visa Processing & Assistance",
    template: "%s | Eammu Holidays Tourist Visa",
  },

  description:
    "Apply for a tourist visa from Bangladesh بسهولة with Eammu Holidays. We provide expert assistance for Dubai, UK, Europe, USA, Canada, and more with fast processing and simple documentation.",

  keywords: [
    "tourist visa from Bangladesh",
    "visit visa Bangladesh",
    "Dubai tourist visa Bangladesh",
    "Europe visit visa",
    "UK tourist visa Bangladesh",
    "USA visit visa process",
    "Canada tourist visa",
    "visa agency Bangladesh",
    "apply visit visa online",
    "travel visa Bangladesh"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa-services/tourist-visa-from-bangladesh",
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
    url: "https://www.eammu.com/our-services/visa-services/tourist-visa-from-bangladesh",
    siteName: "Eammu Holidays",

    title:
      "Tourist Visa from Bangladesh | Easy Travel Visa Support",

    description:
      "Get tourist visa assistance for Dubai, UK, USA, Canada, and Europe with expert guidance and fast approval.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Tourist visa services from Bangladesh for international travel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tourist Visa from Bangladesh | Visit Visa Help",
    description:
      "Apply for visit visas بسهولة with expert support.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};


export default function Page() {
  return (
    <>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Tourist Visa Services",
      provider: {
        "@type": "TravelAgency",
        name: "Eammu Holidays"
      },
      areaServed: "Bangladesh"
    }),
  }}
/>
      <TouristVisaBangladesh />
    </>
  )
}