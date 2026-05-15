import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Client/Header/Header";
import Footer from "@/Components/Server/Footer/Footer";
import WhatsAppFloatingButton from "@/Components/Client/WhatsAppFloatingButton/WhatsAppFloatingButton";
import Scroll from "@/Components/Client/Scroll/Scroll";

const BASE_URL = "https://www.eammu.com";

// ── Font setup ────────────────────────────────────────────────────────────────
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // prevents FOUT; improves CLS (Core Web Vitals ranking factor)
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ── GLOBAL / FALLBACK SEO METADATA ───────────────────────────────────────────
// These apply to every page. Page-level metadata in page.jsx always overrides.
export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:
      "Eammu Holidays | Best Travel Agency in Bangladesh & Dubai | Visa, Tours & Umrah Packages",
    template: "%s | Eammu Holidays",
  },

  description:
    "Eammu Holidays is Bangladesh's leading travel agency offering tourist visas, student visas, Umrah packages 2026, international flight booking, and luxury tour packages to Dubai, Europe, Georgia, Armenia & more. Offices in Dhaka, Cumilla, Dubai, Yerevan & Tbilisi.",

  keywords: [
    // Core brand
    "Eammu Holidays",
    "eammu travel",
    "eammu.com",
    // Bangladesh travel
    "travel agency Bangladesh",
    "best travel agency in Bangladesh",
    "travel agency Dhaka",
    "travel agency Cumilla",
    "tour operator Bangladesh",
    "online travel agency Bangladesh",
    // Visa
    "tourist visa Bangladesh",
    "student visa Bangladesh",
    "Dubai visa from Bangladesh",
    "Europe visa from Bangladesh",
    "Schengen visa Bangladesh",
    "visa processing Bangladesh",
    "visa consultancy Bangladesh",
    "visa services UAE",
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
    "desert safari Dubai",
    // Flights
    "cheap flight booking Bangladesh",
    "international flight ticket Bangladesh",
    "online flight booking Dhaka",
    // Dubai local
    "best travel agency Dubai",
    "Bangladesh travel agency Dubai",
    "international travel agency UAE",
    // Education
    "education consultancy Bangladesh",
    "study abroad Bangladesh",
    "student visa consultancy",
  ],

  authors: [{ name: "Eammu Holidays", url: BASE_URL }],
  creator: "Eammu Holidays",
  publisher: "Eammu Holidays",
  category: "travel",

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
    nocache: false,          // nocache:true was hurting SEO — corrected
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,   // lets Google show full rich snippets
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
        url: `${BASE_URL}/flight_eammu_offer.webp`,  // absolute URL required for OG
        width: 1200,
        height: 630,
        alt: "Eammu Holidays – Best Travel Agency in Bangladesh and Dubai",
        type: "image/webp",
      },
      {
        url: `${BASE_URL}/flight_eammu_offer.webp`,
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
    title:
      "Eammu Holidays | Best Travel Agency – Visa, Tours & Umrah Packages",
    description:
      "Book tourist visas, Umrah packages 2026, international flights & holiday tours with Eammu Holidays – your trusted global travel partner from Bangladesh.",
    images: [`${BASE_URL}/flight_eammu_offer.webp`],
  },

  icons: {
    icon: [
      { url: "/emf.jpg", type: "image/jpeg" },
      { url: "/flight_eammu_offer.webp", sizes: "32x32", type: "image/png" },
      { url: "/flight_eammu_offer.webp", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/emf.jpg",
    apple: [{ url: "/emf.jpg", sizes: "180x180", type: "image/jpeg" }],
  },

  verification: {
    // ✅ Paste your real token from Google Search Console here:
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // bing: "YOUR_BING_WEBMASTER_TOKEN",
  },

  other: {
    // Geo meta — associates the site with Bangladesh & Dubai for local SEO
    "geo.region": "BD",
    "geo.placename": "Cumilla, Bangladesh",
    "geo.position": "23.4607;91.1809",
    ICBM: "23.4607, 91.1809",
    // Dublin Core — extra entity signals for crawlers
    "DC.title": "Eammu Holidays",
    "DC.description":
      "Bangladesh's leading travel agency for visa, tours, Umrah, and flight booking.",
    "DC.publisher": "Eammu Holidays",
    "DC.language": "en",
    "DC.coverage": "Worldwide",
    "DC.subject":
      "Travel Agency, Visa Services, Tour Packages, Umrah, Flight Booking",
    // Misc
    "theme-color": "#0f172a",
    "color-scheme": "light dark",
    rating: "general",
    revisitAfter: "7 days",
    language: "English",
  },
};

// ── GLOBAL STRUCTURED DATA (site-wide entity definitions) ────────────────────
// Defines WHO Eammu Holidays is — lives in layout so every page inherits it.
// Page-level schemas in page.jsx add WHAT each specific page is about.
const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. WebSite — enables Google Sitelinks Search Box
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Eammu Holidays",
      alternateName: ["Eammu", "Eammu Travel", "Eammu Holiday" ,"Travel Agency Bangladesh"],
      description:
        "Bangladesh's leading travel agency for visa services, tour packages, Umrah, and flight booking.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: ["en-US", "bn-BD"],
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    // 2. Organization — powers Google knowledge panel
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Eammu Holidays",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/eammu_logo.webp`,
        url: `${BASE_URL}/emf.jpg`,
        contentUrl: `${BASE_URL}/emf.jpg`,
        width: 200,
        height: 200,
        caption: "Eammu Holidays",
      },
      image: { "@id": `${BASE_URL}/eammu_logo.webp` },
      description:
        "Premium travel agency providing visa services, Umrah packages, tour packages, and flight bookings across Bangladesh, UAE, Armenia, and Georgia.",
      email: "info@eammu.com",
      telephone: "+8801631312524",
      foundingLocation: {
        "@type": "Place",
        name: "Cumilla, Bangladesh",
      },
      areaServed: [
        { "@type": "Country", name: "Bangladesh" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Armenia" },
        { "@type": "Country", name: "Georgia" },
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
        "https://www.facebook.com/eammutourism",
        "https://www.instagram.com/eammuholidays",
        "https://www.youtube.com/@eammutour",
        "https://www.linkedin.com/company/eammu-immigration-services",
      ],
    },

    // 3. TravelAgency LocalBusiness — multi-location for local pack rankings
    {
      "@type": ["TravelAgency", "LocalBusiness"],
      "@id": `${BASE_URL}/#localbusiness`,
      name: "Eammu Holidays",
      url: BASE_URL,
      image: `${BASE_URL}/flight_eammu_offer.webp`,
      telephone: "+8801631312524",
      email: "info@eammu.com",
      priceRange: "$$",
      currenciesAccepted: "BDT, USD, AED",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      description:
        "Leading travel agency with offices in Bangladesh, Dubai, Yerevan and Tbilisi offering visa services, Umrah packages, holiday tours and flight bookings.",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress:
            "Office No-178, 1st Floor, Gomoti Tower, Cantonment",
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
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"],
          opens: "09:00",
          closes: "21:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Friday","Saturday"],
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Travel Services by Eammu Holidays",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tourist Visa Processing",
              description:
                "Tourist visa services for Europe, Dubai, USA, and 100+ destinations",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Umrah Package 2026",
              description:
                "Affordable and premium Umrah packages from Bangladesh including flights and hotels",
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
              name: "International Flight Booking",
              description:
                "Affordable international and domestic flight ticket booking",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Student Visa & Education Consultancy",
              description:
                "Student visa processing and education consultancy for studying abroad",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Desert Safari Dubai",
              description:
                "Luxury and budget desert safari tour packages in Dubai",
            },
          },
        ],
      },
    },
        // 4. Person — Naeem Hossen, Founder & CEO
    // Google uses this for Knowledge Panel and "People also search for" cards.
    // Linking founder ↔ organizations ↔ websites creates a strong entity web.
    {
      "@type": "Person",
      "@id": `${BASE_URL}/naeem-hossen`,
      name: "Naeem Hossen",
      givenName: "Naeem",
      familyName: "Hossen",
      jobTitle: "Founder & CEO",
      description:
        "Naeem Hossen is the Founder and CEO of Eammu Holidays and Visa Express Hub, and the founding figure of Eammu Group. Based in Bangladesh, he leads a global travel and visa services network with offices in Cumilla, Dubai, Yerevan, and Tbilisi.",
      url: `${BASE_URL}/about`,
      worksFor: { "@id": `${BASE_URL}/#organization` },
      founder: [
        { "@id": `${BASE_URL}/#organization` },            // Eammu Holidays
        {
          "@type": "Organization",
          name: "Visa Express Hub",
          url: "https://visaexpresshub.com",
        },
        {
          "@type": "Organization",
          name: "Eammu Group",
          url: "https://eammu.com",
        },
      ],
      nationality: {
        "@type": "Country",
        name: "Bangladesh",
      },
      // Add Naeem's real social profiles below to strengthen entity recognition:
      sameAs: [
        "https://www.facebook.com/naeemhosseen",
        "https://www.linkedin.com/in/naeemhossen-",
        "https://www.instagram.com/naeemhossen_",
      ],
    },
    // 5. Organization — Eammu Group (parent entity)
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/our-services`,
      name: "Eammu Group",
      description:
        "Eammu Group is a business conglomerate founded by Naeem Hossen, encompassing Eammu Holidays and Visa Express Hub, with operations across Bangladesh, UAE, Armenia, and Georgia.",
      founder: { "@id": `${BASE_URL}/naeem-hossen` },
      member: [
        { "@id": `${BASE_URL}/#organization` },
        {
          "@type": "Organization",
          name: "Visa Express Hub",
          url: "https://visaexpresshub.com",
        },
      ],
    },
  ],
};



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* ── Performance: preconnect reduces DNS/TLS latency (Core Web Vitals) ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://pagead2.googlesyndication.com"
        />

        {/* ── Google AdSense ── */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3033816186833488"
          crossOrigin="anonymous"
        />

        {/* ── Global Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalSchema),
          }}
        />
      </head>
      <body>
        <Header />
        {/* role="main" + id help screen readers & search crawlers */}
        <main id="main-content" role="main">
          {children}
        </main>
        <WhatsAppFloatingButton />
        <Scroll />
        <Footer />
      </body>
    </html>
  );
}