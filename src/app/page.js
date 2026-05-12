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
import VisaSearchBar from "@/Components/Client/VisaProcessingTimeTracker/VisaSearchBar/VisaSearchBar";
import CountrySearchBar from "@/Components/Client/visaServices/Visa/StudentVisaBangladesh/StudentVisa/Countrysearchbar/Countrysearchbar";

const BASE_URL = "https://www.eammu.com";

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:
      "Eammu Holidays | Best Travel Agency in Bangladesh & Dubai | Visa, Tours & Umrah Packages",
    template: "%s | Eammu Holidays",
  },

  description:
    "Eammu Holidays is Bangladesh's leading travel agency offering tourist visas, student visas, Umrah packages 2026, international flight booking, and luxury tour packages to Dubai, Europe, Georgia, Armenia & more. Offices in Dhaka, Dubai, Yerevan & Tbilisi.",

  keywords: [
    // Core brand
    "Eammu Holidays",
    "eammu travel agency",
    // Bangladesh travel
    "travel agency Bangladesh",
    "best travel agency in Bangladesh",
    "travel agency Dhaka",
    "travel agency Cumilla",
    "tour operator Bangladesh",
    // Visa services
    "tourist visa Bangladesh",
    "student visa Bangladesh",
    "Dubai visa from Bangladesh",
    "Europe visa from Bangladesh",
    "Schengen visa Bangladesh",
    "visa processing Bangladesh",
    "visa consultancy Bangladesh",
    // Umrah
    "Umrah package 2026 Bangladesh",
    "cheap Umrah package Bangladesh",
    "Umrah visa Bangladesh",
    // Tours
    "Georgia tour package from Bangladesh",
    "Armenia holiday package Bangladesh",
    "Dubai tour package Bangladesh",
    "Cox's Bazar tour package",
    "international holiday packages Bangladesh",
    "luxury tour packages Bangladesh",
    // Flights
    "cheap flight booking Bangladesh",
    "international flight ticket Bangladesh",
    "online flight booking Dhaka",
    // Dubai
    "best travel agency Dubai",
    "international travel agency UAE",
    "Bangladesh travel agency Dubai",
    // Education
    "education consultancy Bangladesh",
    "study abroad Bangladesh",
    "foreign university admission Bangladesh",
  ],

  authors: [{ name: "Eammu Holidays", url: BASE_URL }],
  creator: "Eammu Holidays",
  publisher: "Eammu Holidays",

  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
      "bn-BD": `${BASE_URL}/bn`,
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    url: BASE_URL,
    siteName: "Eammu Holidays",
    title:
      "Eammu Holidays | Global Visa, Tours & Travel Experts from Bangladesh",
    description:
      "Apply for visas, book flights, and explore premium holiday packages with Eammu Holidays. Trusted travel partner with offices in Bangladesh, Dubai, Armenia & Georgia.",
    images: [
      {
        url: `${BASE_URL}/preview-banner.webp`,
        width: 1200,
        height: 630,
        alt: "Eammu Holidays – Best Travel Agency in Bangladesh and Dubai",
        type: "image/webp",
      },
      {
        url: `${BASE_URL}/eammu_banner_four.webp`,
        width: 1200,
        height: 630,
        alt: "Luxury International Tour Packages by Eammu Holidays",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    alternateLocale: ["bn_BD", "ar_AE"],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    creator: "@eammuholidays",
    title: "Eammu Holidays | Best Travel Agency – Visa, Tours & Umrah Packages",
    description:
      "Book tourist visas, Umrah packages 2026, international flights & holiday tours with Eammu Holidays – your trusted global travel partner from Bangladesh.",
    images: [`${BASE_URL}/preview-banner.webp`],
  },

  icons: {
    icon: [
      { url: "/emf.jpg", type: "image/jpeg" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/emf.jpg",
    apple: [{ url: "/emf.jpg", sizes: "180x180", type: "image/jpeg" }],
  },

  // ✅ Verification tokens – add your real values here
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // bing: "YOUR_BING_WEBMASTER_TOKEN",
    // yandex: "YOUR_YANDEX_TOKEN",
  },

  category: "travel",

  other: {
    // Geo targeting for local SEO
    "geo.region": "BD",
    "geo.placename": "Cumilla, Bangladesh",
    "geo.position": "23.4607;91.1809",
    ICBM: "23.4607, 91.1809",
    // Theme
    "theme-color": "#0f172a",
    "color-scheme": "light dark",
    // Rating
    rating: "general",
    revisitAfter: "7 days",
    language: "English",
  },
};

export default function Home() {
  // ── Schema 1: TravelAgency (LocalBusiness) ──────────────────────────────────
  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${BASE_URL}/#organization`,
    name: "Eammu Holidays",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/emf.jpg`,
      width: 200,
      height: 200,
    },
    image: `${BASE_URL}/eammu_banner_four.webp`,
    description:
      "Premium travel agency providing visa services, Umrah packages, tour packages, and flight bookings across Bangladesh, UAE, Armenia, and Georgia.",
    telephone: "+8801631312524",
    email: "info@eammu.com",
    priceRange: "$$",
    currenciesAccepted: "BDT, USD, AED",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: [
      { "@type": "Country", name: "Bangladesh" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Armenia" },
      { "@type": "Country", name: "Georgia" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Travel Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tourist Visa Processing",
            description: "Tourist visa services for Europe, Dubai, USA, and more",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Umrah Package 2026",
            description: "Affordable Umrah packages from Bangladesh",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "International Tour Packages",
            description:
              "Holiday tour packages to Georgia, Armenia, Dubai, Europe and more",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flight Booking",
            description: "International and domestic flight ticket booking",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Student Visa Consultancy",
            description:
              "Student visa processing and education consultancy for studying abroad",
          },
        },
      ],
    },
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Office No-178, 1st Floor, Gomoti Tower, Cantonment",
        addressLocality: "Cumilla",
        addressRegion: "Chattogram Division",
        postalCode: "3500",
        addressCountry: "BD",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Business Bay",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Lambron 39",
        addressLocality: "Yerevan",
        addressCountry: "AM",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Levan Gotua Street #3",
        addressLocality: "Tbilisi",
        addressCountry: "GE",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+8801631312524",
        contactType: "customer service",
        areaServed: "BD",
        availableLanguage: ["English", "Bengali"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
          ],
          opens: "09:00",
          closes: "21:00",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: "+971507078334",
        contactType: "sales",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic", "Hindi", "Bengali"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/eammuholidays",
      "https://www.instagram.com/eammuholidays",
      "https://www.youtube.com/@eammuholidays",
      "https://www.linkedin.com/company/eammuholidays",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "10:00",
        closes: "22:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "320",
      bestRating: "5",
      worstRating: "1",
    },
  };

  // ── Schema 2: WebSite with SearchAction (Google Sitelinks Searchbox) ─────────
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Eammu Holidays",
    description:
      "Bangladesh's leading travel agency for visa services, tour packages, Umrah, and flight booking.",
    publisher: { "@id": `${BASE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["en-US", "bn-BD"],
  };

  // ── Schema 3: BreadcrumbList ─────────────────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
    ],
  };

  // ── Schema 4: FAQPage (high CTR snippet) ────────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I apply for a tourist visa through Eammu Holidays?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can apply for a tourist visa by visiting our website at eammu.com, selecting your destination country, and submitting your documents online. Our team will guide you through the entire process.",
        },
      },
      {
        "@type": "Question",
        name: "Does Eammu Holidays offer Umrah packages from Bangladesh in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Eammu Holidays offers affordable and premium Umrah packages from Bangladesh for 2026. Packages include flights, hotel accommodation, and visa processing.",
        },
      },
      {
        "@type": "Question",
        name: "Which countries does Eammu Holidays have offices in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eammu Holidays has offices in Bangladesh (Cumilla), Dubai (UAE), Yerevan (Armenia), and Tbilisi (Georgia).",
        },
      },
      {
        "@type": "Question",
        name: "Can Eammu Holidays help with student visa processing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide complete student visa processing and education consultancy services to help students get admitted to universities abroad.",
        },
      },
    ],
  };

  return (
    <>
      {/* ── Structured Data ───────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <LandingModal />
        <HeroSection />
        <CountrySearchBar />
        <SpecialDayBanner />
        <VisaSearchBar />
        <SpecialOffers />
        <FlightOfferBanner />
        <VisaServices />
        <VisaSearch />
        <PosterGallery />
        <TourPackages />
        <Caresoul_BG_Mix />
        <Our_Succsses_State />
      </main>
    </>
  );
}