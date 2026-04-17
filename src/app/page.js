import HeroSection from "@/Components/Server/HeroSection/HeroSection";
import "./globals.css";
import FlightOfferBanner from "@/Components/Client/HeroHome/FlightOfferBanner/FlightOfferBanner";
import SpecialOffers from "@/Components/Client/HeroHome/SpecialOffers/SpecialOffers";
import PosterGallery from "@/Components/Client/HeroHome/PosterGallery/PosterGallery";
import SpecialDayBanner from "@/Components/Client/HeroHome/SpecialDayBanner/SpecialDayBanner";
import VisaServices from "@/Components/Client/HeroHome/VisaServices/VisaServices";
import Caresoul_BG_Mix from "@/Components/Server/Caresoul_BG_Mix/Caresoul_BG_Mix";
import Our_Succsses_State from "@/Components/Server/Our_Succsses_State/Our_Succsses_State";
import TourPackages from "@/Components/Server/TourPackages/TourPackages";
import LandingModal from "@/Components/Client/LandingModal/LandingModal";
import VisaSearch from "@/Components/Client/visaServices/Visa/TouristVisaBangladesh/TouristVisa/VisaSearch/VisaSearch";


export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Best Travel Agency in Bangladesh, Dubai & Georgia | Visa, Tours & Umrah 2026",
    template: "%s | Eammu Holidays",
  },

  description:
    "Eammu Holidays is a leading international travel agency offering tourist visas, Umrah packages, flight booking, and luxury holiday tours from Bangladesh, Dubai, Armenia, and Georgia. Trusted visa experts with global services.",

  keywords: [
    "travel agency Bangladesh",
    "best travel agency Dubai",
    "Georgia tour package from Bangladesh",
    "Armenia holiday package",
    "Dubai visa processing",
    "Umrah package 2026 Bangladesh",
    "international travel agency UAE",
    "cheap flight booking Bangladesh",
    "Europe visa from Bangladesh",
    "tour operator Bangladesh to Dubai"
  ],

  authors: [{ name: "Eammu Holidays" }],
  creator: "Eammu Holidays",
  publisher: "Eammu Holidays",

  alternates: {
    canonical: "https://www.eammu.com",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.eammu.com",
    siteName: "Eammu Holidays",

    title:
      "Eammu Holidays | Global Visa, Tours & Travel Experts",
    description:
      "Apply for visas, book flights, and explore premium holiday packages with Eammu Holidays. Offices in Bangladesh, Dubai, Armenia & Georgia.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Best Travel Agency in Bangladesh and Dubai",
      },
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Luxury International Tour Packages",
      },
    ],

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Travel Agency | Visa, Tours & Umrah Packages",
    description:
      "Book visas, flights & holiday tours with Eammu Holidays – your trusted global travel partner.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
    shortcut: "/emf.jpg",
    apple: "/emf.jpg",
  },
};

export default function Home() {
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Eammu Holidays",
    "url": "https://www.eammu.com",
    "logo": "https://www.eammu.com/emf.jpg",
    "image": "https://www.eammu.com/eammu_banner_four.webp",
    "description": "Premium travel agency providing visa services, tour packages, and flight bookings across Bangladesh, UAE, Armenia, and Georgia.",
    "telephone": "+8801631312524",
    "priceRange": "$$",
    "areaServed": ["BD", "AE", "AM", "GE"],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Office No-178, 1st Floor, Gomoti Tower, Cantonment",
        "addressLocality": "Cumilla",
        "addressCountry": "Bangladesh"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Business Bay",
        "addressLocality": "Dubai",
        "addressCountry": "UAE"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Lambron 39",
        "addressLocality": "Yerevan",
        "addressCountry": "Armenia"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Levan Gotua Street #3",
        "addressLocality": "Tbilisi",
        "addressCountry": "Georgia"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+8801631312524",
        "contactType": "customer service",
        "availableLanguage": ["English", "Bengali"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+971507078334",
        "contactType": "Dubai Office",
        "availableLanguage": ["English", "Arabic", "Hindi"]
      }
    ]
  };

  return (
    <>
    {/* Structured Data for Google Search Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main >
      <LandingModal />
      <HeroSection />
      <VisaSearch />
      <SpecialDayBanner />
      <SpecialOffers />
      <FlightOfferBanner />
      <VisaServices />
      <PosterGallery />
      <TourPackages />
      <Caresoul_BG_Mix />
      <Our_Succsses_State />
      </main>
      

    </>
  );
}