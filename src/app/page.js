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

// ── HOME PAGE SEO METADATA ────────────────────────────────────────────────────
// These override the global defaults set in layout.jsx for this page only.
export const metadata = {
  // Lead with what people search — brand is appended by layout template
  title:
    "Tourist Visa, Student Visa, Tour Packages & Flight Booking from Bangladesh",

  description:
    "Eammu Holidays — Bangladesh's #1 travel agency. Apply for tourist, student & work visas, book Umrah packages 2026, international flights, and holiday tours to Dubai, Georgia, Armenia & Europe. Visa processing, SOP guides & real-time tracking. Call: +880 1631 312524.",

  keywords: [
    // Homepage-specific high-volume terms
    "travel agency Bangladesh",
    "best travel agency Bangladesh",
    "tourist visa Bangladesh",
    "Umrah package 2026 Bangladesh",
    "cheap Umrah package Bangladesh",
    "visa processing time Bangladesh",
    "Georgia tour package Bangladesh",
    "Armenia tour package Bangladesh",
    "Dubai tour package Bangladesh",
    "cheap flight booking Dhaka",
    "international flight booking Bangladesh",
    "student visa consultancy Bangladesh",
    "Schengen visa Bangladesh",
    "Europe visa from Bangladesh",
    "Dubai visa from Bangladesh",
    "Cox's Bazar tour package",
    "desert safari Dubai",
    "Eammu Holidays",
    "travel agency Cumilla",
    "visa services Dubai",
    "holiday packages Bangladesh",
    "tour operator Bangladesh 2026",
    "visa agent Bangladesh",
  ],

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title:
      "Eammu Holidays | Tourist Visa, Umrah 2026, Tours & Flight Booking from Bangladesh",
    description:
      "Apply for visas, book Umrah packages, holiday tours & international flights with Eammu Holidays. Offices in Bangladesh, Dubai, Armenia & Georgia. Trusted by 10,000+ travellers.",
    url: BASE_URL,
    siteName: "Eammu Holidays",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/preview-banner.webp`,
        width: 1200,
        height: 630,
        alt: "Eammu Holidays – Best Travel Agency in Bangladesh and Dubai",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    creator: "@eammuholidays",
    title:
      "Eammu Holidays | Tourist Visa, Umrah 2026 & Tours from Bangladesh",
    description:
      "Apply for visas, book Umrah packages & holiday tours with Bangladesh's trusted travel agency. Call: +880 1631 312524.",
    images: [`${BASE_URL}/flight_eammu_offer.webp`],
  },
};

// ── HOME PAGE STRUCTURED DATA ─────────────────────────────────────────────────
// Complements the global schemas in layout.jsx.
// layout.jsx  → WHO Eammu is (Organization, LocalBusiness, WebSite)
// page.jsx    → WHAT the homepage offers (FAQs, ItemList, BreadcrumbList)

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. BreadcrumbList — shows path in Google results
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
      ],
    },

    // 2. WebPage — homepage entity with SpeakableSpecification for voice search
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#homepage`,
      url: BASE_URL,
      name: "Eammu Holidays – Tourist Visa, Umrah 2026, Tours & Flights from Bangladesh",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/about` },
      description:
        "Bangladesh's leading travel agency for visa services, Umrah packages, international tour packages, and flight booking.",
      inLanguage: "en-US",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".speakable"],
      },
      significantLink: [
        `${BASE_URL}/visa`,
        `${BASE_URL}/visa/e-visa`,
        `${BASE_URL}/our-services/tour-packages`,
        `${BASE_URL}/flight-booking`,
        `${BASE_URL}/study-abroad/student-visa`
      ],
    },

    // 3. ItemList — showcases homepage sections for Google Discover & rich results
    {
      "@type": "ItemList",
      name: "Eammu Holidays – Travel Services & Tools",
      url: BASE_URL,
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Tourist Visa Services",
          description:
            "Apply for tourist visas to Europe, Dubai, USA, UK, Canada and 100+ countries from Bangladesh.",
          url: `${BASE_URL}/our-services/visa-services`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Visa Processing Time Tracker",
          description:
            "Real-time visa processing time tracker for all major embassies and destinations.",
          url: `${BASE_URL}/travel-resources/visa-processing-time-tracker`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Umrah Packages 2026",
          description:
            "Affordable and premium Umrah packages 2026 from Bangladesh including flights, hotel and visa.",
          url: `${BASE_URL}/offers`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "International Tour Packages",
          description:
            "Holiday tour packages to Georgia, Armenia, Dubai, Europe, and Cox's Bazar.",
          url: `${BASE_URL}/our-services/tour-packages`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Flight Booking",
          description:
            "Cheap international and domestic flight ticket booking from Bangladesh.",
          url: `${BASE_URL}/flight-booking`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Student Visa & Education Consultancy",
          description:
            "Student visa processing and overseas education consultancy for studying abroad.",
          url: `${BASE_URL}/study-abroad/student-visa`,
        },
      ],
    },

    // 4. FAQPage — generates expandable rich snippets in Google results (big CTR boost)
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I apply for a tourist visa through Eammu Holidays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visit eammu.com, select your destination country, and submit your documents online or visit our Cumilla office. Our team handles the full application process including document checklist, SOP preparation, and embassy appointment.",
          },
        },
        {
          "@type": "Question",
          name: "Does Eammu Holidays offer Umrah packages from Bangladesh in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Eammu Holidays offers both affordable and premium Umrah packages 2026 from Bangladesh including return flights, hotel accommodation in Makkah and Madinah, Umrah visa processing, and ground transport. Call +880 1631 312524 for current pricing.",
          },
        },
        {
          "@type": "Question",
          name: "Which countries does Eammu Holidays have offices in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eammu Holidays has offices in Cumilla (Bangladesh), Dubai (UAE), Yerevan (Armenia), and Tbilisi (Georgia), giving clients local support in multiple time zones.",
          },
        },
        {
          "@type": "Question",
          name: "Can Eammu Holidays help with student visa processing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We provide complete student visa processing and education consultancy — including university selection, admission assistance, SOP writing, and visa application filing for countries including UK, Canada, Australia, and Europe.",
          },
        },
        {
          "@type": "Question",
          name: "What tour packages does Eammu Holidays offer from Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer holiday tour packages to Georgia, Armenia, Dubai (including desert safari), Europe, Cox's Bazar, and other international destinations. Packages include flights, hotels, visa processing, and guided tours.",
          },
        },
        {
          "@type": "Question",
          name: "How long does visa processing take with Eammu Holidays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Processing times depend on the destination. Schengen visas typically take 15 calendar days, Dubai visas 3–5 working days, and UK/Canada visas 4–8 weeks. Use our real-time Visa Processing Time Tracker on our website for updated timelines.",
          },
        },
      ],
    },

    // 5. Event — for Umrah 2026 (seasonal rich result opportunity)
    {
      "@type": "Event",
      name: "Umrah Package 2026 – Eammu Holidays Bangladesh",
      description:
        "Book your Umrah 2026 package with Eammu Holidays. Includes return flights, hotel, and visa from Bangladesh.",
      startDate: "2026-01-01",
      endDate: "2026-12-31",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode:
        "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Makkah al-Mukarramah",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Makkah",
          addressCountry: "SA",
        },
      },
      organizer: { "@id": `${BASE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}/umrah-packages`,
        availability: "https://schema.org/InStock",
        priceCurrency: "BDT",
        validFrom: "2026-01-01",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Page-level structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      <main>
        <LandingModal />

        {/* Section IDs referenced in ItemList schema above — enables deep links */}
        <HeroSection />

        <section id="student-visa" aria-label="Student Visa Country Search">
          <CountrySearchBar />
        </section>

        <SpecialDayBanner />

        <section id="visa-processing-time-Tracker" aria-label="Visa Processing Time Tracker">
          <VisaSearchBar />
        </section>

        <section id="offers" aria-label="Special Offers and Umrah Packages">
          <SpecialOffers />
        </section>

        <section id="flight-booking" aria-label="International Flight Offers">
          <FlightOfferBanner />
        </section>

        <section id="visa-services" aria-label="Tourist Visa Services">
          <VisaServices />
        </section>

        <section id="visa-search" aria-label="Tourist Visa Search">
          <VisaSearch />
        </section>

        <section id="poster-gallery" aria-label="Tour Destination Gallery">
          <PosterGallery />
        </section>

        <section id="tour-packages" aria-label="International Tour Packages">
          <TourPackages />
        </section>

        <Caresoul_BG_Mix />

        <section id="our-success" aria-label="Our Success and Client Statistics">
          <Our_Succsses_State />
        </section>
      </main>
    </>
  );
}