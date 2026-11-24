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
  { loading: () => null }
);

const BASE_URL = "https://eammu.com";
// ✅ Must match SITE_NAME in layout.jsx
const SITE_NAME = "Eammu Holidays - Travel Agency Bangladesh";

// ── HOME PAGE SEO METADATA ────────────────────────────────────────────────────
export const metadata = {
  // ✅ Brand name first = strongest signal for Google's Site Name
  title: {
    absolute: "Eammu Holidays - Travel Agency Bangladesh | Visa & Flights",
  },

  // ✅ Description with services + call to action + phone
  description:
    "Eammu Holidays is a leading travel agency in Bangladesh & Dubai: tourist, student & Schengen visas, Umrah 2026 packages, air tickets, Dubai tours and holiday packages. Call +880 1631 312524.",

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
    languages: {
      "bn-BD": `${BASE_URL}/bn`,
      "en-US": BASE_URL,
      "x-default": BASE_URL,
    },
  },

  openGraph: {
    title: "Eammu Holidays | Bangladesh & Dubai Visa, Air Tickets & Holiday Packages",
    description:
      "Bangladesh and Dubai leading travel agency providing tourist, student & Schengen visa services, international air tickets, Dubai tours, holiday packages, and worldwide travel solutions. IATA-accredited.",
    url: BASE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
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
    title: "Eammu Holidays | Visa, Umrah 2026 & Tours from Bangladesh",
    description:
      "Apply for visas, book Umrah packages & holiday tours with Bangladesh's IATA-accredited travel agency. Call: +880 1631 312524.",
    images: [`${BASE_URL}/preview-banner.webp`],
  },
};

// ── FAQ DATA — single source for BOTH the visible FAQ and the FAQPage schema ──
const faqs = [
  {
    q: "How do I apply for a tourist visa through Eammu Holidays?",
    a: "Visit eammu.com, select your destination country, and submit your documents online or visit our Cumilla office. Our team handles the full application process including document checklist, SOP preparation, and embassy appointment.",
  },
  {
    q: "Does Eammu Holidays offer Umrah packages from Bangladesh in 2026?",
    a: "Yes. Eammu Holidays offers both affordable and premium Umrah packages 2026 from Bangladesh including return flights, hotel accommodation in Makkah and Madinah, Umrah visa processing, and ground transport. Call +880 1631 312524 for current pricing.",
  },
  {
    q: "Which countries does Eammu Holidays have offices in?",
    a: "Eammu Holidays has offices in Cumilla (Bangladesh), Dhaka (Bangladesh), Dubai (UAE), Yerevan (Armenia), and Tbilisi (Georgia), giving clients local support in multiple time zones.",
  },
  {
    q: "Can Eammu Holidays help with student visa processing?",
    a: "Yes. We provide complete student visa processing and education consultancy — including university selection, admission assistance, SOP writing, and visa application filing for countries including UK, Canada, Australia, and Europe.",
  },
  {
    q: "What tour packages does Eammu Holidays offer from Bangladesh?",
    a: "We offer holiday tour packages to Georgia, Armenia, Dubai (including desert safari), Europe, Cox's Bazar, and other international destinations. Packages include flights, hotels, visa processing, and guided tours.",
  },
  {
    q: "How long does visa processing take with Eammu Holidays?",
    a: "Processing times depend on the destination. Schengen visas typically take 15 calendar days, Dubai visas 3–5 working days, and UK/Canada visas 4–8 weeks. Use our real-time Visa Processing Time Tracker on our website for updated timelines.",
  },
  {
    q: "Is Eammu Holidays IATA accredited?",
    a: "Yes. Eammu Holidays is an IATA-accredited travel agency headquartered in Bangladesh with offices in Dubai, Armenia, and Georgia. IATA accreditation ensures we meet international standards for ticketing and travel services.",
  },
  {
    q: "Can Bangladeshi passport holders get a visa-free or visa-on-arrival to Georgia?",
    a: "Bangladeshi passport holders can obtain a Georgia e-visa online. Eammu Holidays assists with the complete e-visa application process. Use our Visa Checker at eammu.com to see current entry requirements.",
  },
];

// ✅ CLEANED: removed BreadcrumbList (1 item), speakable, HowTo, and Event.
// WebSite + Organization live in layout.jsx — referenced here by @id only.
const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#homepage`,
      url: `${BASE_URL}/`,
      name: "Eammu Holidays – Visa Services, Umrah 2026, Tours & Flights from Bangladesh",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}/preview-banner.webp`,
        width: 1200,
        height: 630,
      },
      description:
        "Bangladesh's leading IATA-accredited travel agency for visa services, Umrah packages, international tour packages, and flight booking.",
      inLanguage: "en-US",
      significantLink: [
        `${BASE_URL}/visa`,
        `${BASE_URL}/visa/e-visa`,
        `${BASE_URL}/blogs`,
        `${BASE_URL}/schengen-visa`,
        `${BASE_URL}/visa-checker`,
        `${BASE_URL}/study/albania`,
      ],
    },

    {
      "@type": "ItemList",
      name: "Eammu Holidays – Travel Services & Tools",
      url: `${BASE_URL}/`,
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
          position: 3,
          name: "International Tour Packages",
          description:
            "Holiday tour packages to Georgia, Armenia, Dubai, Europe, and Cox's Bazar.",
          url: `${BASE_URL}/our-services/tour-packages`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Flight Booking",
          description:
            "Cheap international and domestic flight ticket booking from Bangladesh.",
          url: `${BASE_URL}/flight-booking`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Student Visa & Education Consultancy",
          description:
            "Student visa processing and overseas education consultancy for studying abroad.",
          url: `${BASE_URL}/study-abroad/student-visa`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Umrah Packages 2026",
          description:
            "Affordable and premium Umrah packages from Bangladesh with flights, hotels and visa.",
          url: `${BASE_URL}/#offers`,
        },
      ],
    },

    // ✅ NEW: Service schema — helps Google connect your brand to each service
    ...[
      ["Tourist Visa Processing", "Tourist visa services from Bangladesh for Europe, Dubai, USA, UK, Canada and 100+ destinations."],
      ["Student Visa & Education Consultancy", "Student visa processing, admission help and SOP writing for UK, Canada, Australia and Europe."],
      ["Umrah Packages 2026", "Umrah packages from Bangladesh including flights, Makkah and Madinah hotels, visa and transport."],
      ["International Tour Packages", "Holiday packages to Dubai, Georgia, Armenia, Europe and Cox's Bazar."],
      ["International Flight Booking", "IATA-certified international and domestic air ticket booking from Bangladesh."],
      ["Desert Safari Dubai", "Luxury and budget desert safari tour packages in Dubai."],
    ].map(([name, description]) => ({
      "@type": "Service",
      name,
      description,
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: [
        { "@type": "Country", name: "Bangladesh" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
    })),

    // ✅ KEPT: FAQPage — now matches the visible FAQ section below
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      isPartOf: { "@id": `${BASE_URL}/#homepage` },
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

// ── PAGE COMPONENT ────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      <LandingModal />

      <HeroSection />

      <section id="student-visa" aria-label="Student Visa Country Search">
        <CountrySearchBar />
      </section>

      <section id="visa-checker" aria-label="Visa Eligibility Checker">
        <VisaCheckerHome />
      </section>

      <section id="special-offers-banner" aria-label="Special Day Promotions and Offers">
        <SpecialDayBanner />
      </section>

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

      {/* ✅ NEW: visible FAQ (matches FAQPage schema, server-rendered for Google) */}
      <section
        id="faq"
        aria-label="Frequently Asked Questions about Eammu Holidays"
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Frequently Asked Questions – Eammu Holidays
        </h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-gray-200 bg-white p-4"
            >
              <summary className="cursor-pointer font-semibold text-gray-900">
                {f.q}
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="seo-links" aria-label="Visa and Travel Resources">
        <HomeSeoLinks />
      </section>
    </>
  );
}