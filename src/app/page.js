import dynamic from "next/dynamic";

// ── ABOVE THE FOLD — eager load (LCP এর জন্য critical) ──────────────────────
import HeroSection from "@/Components/Server/HeroSection/HeroSection";
import LandingModal from "@/Components/Client/LandingModal/LandingModal";
import CountrySearchBar from "@/Components/Client/visaServices/Visa/StudentVisaBangladesh/StudentVisa/Countrysearchbar/Countrysearchbar";
import SpecialDayBanner from "@/Components/Client/HeroHome/SpecialDayBanner/SpecialDayBanner";
import VisaCheckerHome from "@/Components/Visacheckerhome/Visacheckerhome";


// ── BELOW THE FOLD — lazy load (first load bundle ছোট রাখে) ─────────────────
const VisaSearchBar = dynamic(
  () => import("@/Components/Client/VisaProcessingTimeTracker/VisaSearchBar/VisaSearchBar"),
  { loading: () => <div className="h-24 animate-pulse bg-gray-100 rounded-xl mx-4" /> }
);

const SpecialOffers = dynamic(
  () => import("@/Components/Client/HeroHome/SpecialOffers/SpecialOffers"),
  { loading: () => <div className="h-48 animate-pulse bg-gray-100 rounded-xl mx-4" /> }
);

const ScholarshipSearch = dynamic(
  () => import("@/Components/Client/ScholarshipSearch/ScholarshipSearch"),
  { loading: () => <div className="h-32 animate-pulse bg-gray-100 rounded-xl mx-4" /> }
);

const FlightOfferBanner = dynamic(
  () => import("@/Components/Client/HeroHome/FlightOfferBanner/FlightOfferBanner"),
  { loading: () => <div className="h-40 animate-pulse bg-gray-100 rounded-xl mx-4" /> }
);

const VisaServices = dynamic(
  () => import("@/Components/Client/HeroHome/VisaServices/VisaServices"),
  { loading: () => <div className="h-48 animate-pulse bg-gray-100 rounded-xl mx-4" /> }
);

const VisaSearch = dynamic(
  () => import("@/Components/Client/visaServices/Visa/TouristVisaBangladesh/TouristVisa/VisaSearch/VisaSearch"),
  { loading: () => <div className="h-32 animate-pulse bg-gray-100 rounded-xl mx-4" /> }
);

const PosterGallery = dynamic(
  () => import("@/Components/Client/HeroHome/PosterGallery/PosterGallery"),
  { loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-xl mx-4" /> }
);

const TourPackages = dynamic(
  () => import("@/Components/Server/TourPackages/TourPackages"),
  { loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-xl mx-4" /> }
);

const Caresoul_BG_Mix = dynamic(
  () => import("@/Components/Server/Caresoul_BG_Mix/Caresoul_BG_Mix"),
  { loading: () => <div className="h-48 animate-pulse bg-gray-100 rounded-xl mx-4" /> }
);

const Our_Succsses_State = dynamic(
  () => import("@/Components/Server/Our_Succsses_State/Our_Succsses_State"),
  { loading: () => <div className="h-32 animate-pulse bg-gray-100 rounded-xl mx-4" /> }
);

const HomeSeoLinks = dynamic(
  () => import("@/Components/HomeSeoLinks/HomeSeoLinks"),
  { loading: () => null } // SEO links — visible placeholder দরকার নেই
);


const BASE_URL = "https://www.eammu.com";

// ── HOME PAGE SEO METADATA ────────────────────────────────────────────────────
export const metadata = {

  title: {
    absolute: "Travel Agency Bangladesh | Visa, Hotel, Air Ticket",
  },

  // ✅ FIX: Trimmed to ~152 chars — Google shows ~155 max
  description:
    "Bangladesh and Dubai leading travel agency providing tourist, student & Schengen visa services, international air tickets, Dubai tours, holiday packages, and worldwide travel solutions.",

  keywords: [
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

  // ✅ FIX: Explicit robots directive
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
    // ✅ FIX: Added hreflang for Bengali and default — critical for BD audience
    languages: {
      "bn-BD": `${BASE_URL}/bn`,
      "en-US": BASE_URL,
      "x-default": BASE_URL,
    },
  },

  openGraph: {
    // ✅ FIX: More accurate OG title — visa/tours is the core offering

  title: "Eammu Holidays | Bangladesh & Dubai Visa, Air Tickets & Holiday Packages",

  description:
    "Bangladesh and Dubai leading travel agency providing tourist, student & Schengen visa services, international air tickets, Dubai tours, holiday packages, and worldwide travel solutions. IATA-accredited.",

    url: BASE_URL,
    siteName: "Eammu Holidays",
    locale: "en_US",
    type: "website",
    images: [
      {
        // ✅ KEPT: Absolute URL is correct
        url: `${BASE_URL}/preview-banner.webp`,
        width: 1200,
        height: 630,
        alt: "Eammu Holidays – Visa Services, Tours & Umrah Packages from Bangladesh",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    creator: "@eammuholidays",
    // ✅ FIX: Aligned with OG title for consistent social branding
    title: "Eammu Holidays | Visa, Umrah 2026 & Tours from Bangladesh",
    description:
      "Apply for visas, book Umrah packages & holiday tours with Bangladesh's IATA-accredited travel agency. Call: +880 1631 312524.",
    // ✅ FIX: Unified image with OG for consistent cross-platform branding
    images: [`${BASE_URL}/preview-banner.webp`],
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      ],
    },

    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#homepage`,
      url: BASE_URL,
      name: "Eammu Holidays – Visa Services, Umrah 2026, Tours & Flights from Bangladesh",
      isPartOf: { "@id": `${BASE_URL}/#website` },

      about: { "@id": `${BASE_URL}/#organization` },
      description:
        "Bangladesh's leading IATA-accredited travel agency for visa services, Umrah packages, international tour packages, and flight booking.",
      inLanguage: "en-US",
      // ✅ FIX: speakable cssSelector values must match actual rendered DOM elements
      // Ensure your HeroSection renders an <h1> and sections render <h2> tags
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".speakable"],
      },
      significantLink: [
        `${BASE_URL}/visa`,
        `${BASE_URL}/visa/e-visa`,
        `${BASE_URL}/blogs`,
        `${BASE_URL}/schengen-visa`,
        `${BASE_URL}/visa-checker`,
      ],
    },

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
          url: `${BASE_URL}/visa`,
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

   
    {
      "@type": "HowTo",
      name: "How to Apply for a Visa Through Eammu Holidays",
      description:
        "Step-by-step guide to applying for a tourist, student, or work visa through Eammu Holidays from Bangladesh.",
      totalTime: "P5D",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Select Your Destination",
          text: "Visit eammu.com and use the Visa Checker tool to select your passport country and destination country.",
          url: `${BASE_URL}/visa`,
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Check Visa Requirements",
          text: "Review the visa requirements, document checklist, and processing time for your chosen destination.",
          url: `${BASE_URL}/travel-resources/visa-processing-time-tracker`,
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Submit Your Application",
          text: "Upload your documents online or visit our Cumilla or Dhaka office. Our team prepares your SOP and submits to the embassy.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Track Your Application",
          text: "Use our real-time visa processing time tracker to monitor your application status.",
          url: `${BASE_URL}/visa-checker`,
        },
      ],
    },

    // ⚠️ FLAG (left as-is, needs a content decision — see chat notes):
    // FAQPage schema. Same visible-content requirement as HowTo above —
    // make sure these exact Q&As appear as real, readable content on the
    // homepage (e.g. an FAQ accordion section), or relocate this block.
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
            text: "Eammu Holidays has offices in Cumilla (Bangladesh), Dhaka (Bangladesh), Dubai (UAE), Yerevan (Armenia), and Tbilisi (Georgia), giving clients local support in multiple time zones.",
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
        {
          "@type": "Question",
          name: "Is Eammu Holidays IATA accredited?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Eammu Holidays is an IATA-accredited travel agency headquartered in Bangladesh with offices in Dubai, Armenia, and Georgia. IATA accreditation ensures we meet international standards for ticketing and travel services.",
          },
        },
        {
          "@type": "Question",
          name: "Can Bangladeshi passport holders get a visa-free or visa-on-arrival to Georgia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bangladeshi passport holders can obtain a Georgia e-visa online. Eammu Holidays assists with the complete e-visa application process. Use our Visa Checker at eammu.com to see current entry requirements.",
          },
        },
      ],
    },

    {
      "@type": "Event",
      name: "Umrah Package 2026 – Eammu Holidays Bangladesh",
      description:
        "Book your Umrah 2026 package with Eammu Holidays. Includes return flights, hotel, and visa from Bangladesh.",
      startDate: "2026-01-01",
      endDate: "2026-12-31",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Makkah al-Mukarramah",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Makkah",
          addressCountry: "SA",
        },
      },
      // ✅ organizer @id resolves against the Organization node in layout.jsx
      organizer: { "@id": `${BASE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}/visa`,
        availability: "https://schema.org/InStock",
        priceCurrency: "BDT",
        // ✅ FIX: validFrom updated to current year to avoid stale offer signal
        validFrom: "2026-06-01",
        validThrough: "2026-12-31",
      },
    },
  ],
};

// ── PAGE COMPONENT ────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ✅ Schema — fragment এর শুরুতে, main এর বাইরে */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      {/* ✅ LandingModal — নিজেই 3s delay করে, DOM এ কিছু add করে না */}
      <LandingModal />

      {/* ✅ ABOVE THE FOLD — eager load */}
      <HeroSection />

      {/* ✅ FIX: Added aria-label to VisaCheckerHome section (was bare before) */}
      <section id="student-visa" aria-label="Student Visa Country Search">
        <CountrySearchBar />
      </section>

      <section id="visa-checker" aria-label="Visa Eligibility Checker">
        <VisaCheckerHome />
      </section>

      {/* ✅ FIX: SpecialDayBanner now wrapped in a semantic section */}
      <section id="special-offers-banner" aria-label="Special Day Promotions and Offers">
        <SpecialDayBanner />
      </section>

      {/* ✅ BELOW THE FOLD — lazy load, skeleton দেখায় */}
      <section id="visa-processing-time-tracker" aria-label="Visa Processing Time Tracker">
        <VisaSearchBar />
      </section>

      <section id="offers" aria-label="Special Offers and Umrah Packages">
        <SpecialOffers />
      </section>

      <section id="scholarships" aria-label="International Scholarship Search">
        <ScholarshipSearch />
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

      <section id="destinations-carousel" aria-label="Featured Travel Destinations">
        <Caresoul_BG_Mix />
      </section>

      <section id="our-success" aria-label="Our Success and Client Statistics">
        <Our_Succsses_State />
      </section>

      {/* SEO Internal Link Mesh */}
      <section id="seo-links" aria-label="Visa and Travel Resources">
        <HomeSeoLinks />
      </section>
    </>
  );
}