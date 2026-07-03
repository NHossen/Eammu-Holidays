import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Client/Header/Header";
import Footer from "@/Components/Server/Footer/Footer";
import WhatsAppFloatingButton from "@/Components/Client/WhatsAppFloatingButton/WhatsAppFloatingButton";
import Scroll from "@/Components/Client/Scroll/Scroll";
import ServiceWorkerRegister from "@/Components/ServiceWorkerRegister";

const BASE_URL = "https://www.eammu.com";

// ── Font setup ────────────────────────────────────────────────────────────────
// ✅ FIX: Removed Geist_Mono — monospace font loaded globally on every page
// even though it's only used on code-heavy pages. Load it per-page if needed.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// ── GLOBAL / FALLBACK SEO METADATA ───────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    // Every inner page that sets a plain string title auto-gets the
    // "%s | Eammu Holidays" suffix. Pages that already include the full
    // brand string themselves (like the homepage) should use
    // `title: { absolute: "..." }` to opt out of this template — see page.jsx.
    default: "Tourist Visa & Travel Agency Bangladesh | Eammu Holidays",
    template: "%s | Eammu Holidays",
  },

  description:
    "Eammu Holidays is Bangladesh's IATA-accredited travel agency for tourist visas, student visas, Umrah packages 2026, international flights & tour packages to Dubai, Europe, Georgia & Armenia. Offices in Dhaka, Cumilla, Dubai, Yerevan & Tbilisi.",

  keywords: [
    "Eammu Holidays",
    "eammu travel",
    "eammu.com",
    "travel agency Bangladesh",
    "best travel agency in Bangladesh",
    "travel agency Dhaka",
    "travel agency Cumilla",
    "tour operator Bangladesh",
    "online travel agency Bangladesh",
    "tourist visa Bangladesh",
    "student visa Bangladesh",
    "Dubai visa from Bangladesh",
    "Europe visa from Bangladesh",
    "Schengen visa Bangladesh",
    "visa processing Bangladesh",
    "visa consultancy Bangladesh",
    "visa services UAE",
    "Umrah package 2026 Bangladesh",
    "cheap Umrah package Bangladesh",
    "Umrah visa Bangladesh",
    "Georgia tour package from Bangladesh",
    "Armenia holiday package Bangladesh",
    "Dubai tour package Bangladesh",
    "Cox's Bazar tour package",
    "international holiday packages Bangladesh",
    "luxury tour packages Bangladesh",
    "desert safari Dubai",
    "cheap flight booking Bangladesh",
    "international flight ticket Bangladesh",
    "online flight booking Dhaka",
    "best travel agency Dubai",
    "Bangladesh travel agency Dubai",
    "international travel agency UAE",
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
      "x-default": BASE_URL,
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
    title: "Eammu Holidays | Visa, Tours & Travel Experts from Bangladesh",
    description:
      "Apply for visas, book flights & explore premium holiday packages with Eammu Holidays. IATA-accredited agency with offices in Bangladesh, Dubai, Armenia & Georgia.",
    images: [
      {
        // ✅ FIX: Changed from flight_eammu_offer.webp (a promotional banner)
        // to preview-banner.webp (brand image) — consistent with page.jsx OG image.
        // All pages that don't set their own OG image inherit this fallback.
        url: `${BASE_URL}/preview-banner.webp`,
        width: 1200,
        height: 630,
        alt: "Eammu Holidays – Tourist Visa & Travel Agency Bangladesh",
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
    title: "Eammu Holidays | Visa, Tours & Umrah Packages from Bangladesh",
    description:
      "Book tourist visas, Umrah packages 2026, international flights & holiday tours with Eammu Holidays – IATA-accredited travel partner from Bangladesh.",
    // ✅ FIX: Unified with OG image for consistent cross-platform branding
    images: [`${BASE_URL}/preview-banner.webp`],
  },

  icons: {
    icon: [
      { url: "/emf.jpg", type: "image/jpeg" },
      // ✅ FIX: Removed flight_eammu_offer.webp as 32x32 favicon.
      // A landscape banner image makes a broken/unrecognisable tab icon.
      // Add a proper 32x32 square icon file here when available:
      // { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/emf.jpg",
    apple: [{ url: "/emf.jpg", sizes: "180x180", type: "image/jpeg" }],
  },

   other: {
    "geo.region": "BD",
    "geo.placename": "Cumilla, Bangladesh",
    "geo.position": "23.4607;91.1809",
    ICBM: "23.4607, 91.1809",
    "DC.title": "Eammu Holidays",
    "DC.description":
      "Bangladesh's leading IATA-accredited travel agency for visa, tours, Umrah, and flight booking.",
    "DC.publisher": "Eammu Holidays",
    "DC.language": "en",
    "DC.coverage": "Worldwide",
    "DC.subject":
      "Travel Agency, Visa Services, Tour Packages, Umrah, Flight Booking",
    "theme-color": "#0f172a",
    "color-scheme": "light dark",
    rating: "general",
    language: "English",
    "mobile-web-app-capable": "yes",
  },

 manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Eammu Holidays",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport = {
  themeColor: "#005a31",
};

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. WebSite — enables Google Sitelinks Search Box
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Eammu Holidays",
      alternateName: [
        "Eammu",
        "Eammu Travel",
        "Eammu Holiday",
        "Travel Agency Bangladesh",
      ],
      description:
        "Bangladesh's leading IATA-accredited travel agency for visa services, tour packages, Umrah, and flight booking.",
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

    // 2. Organization — powers Google Knowledge Panel
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Eammu Holidays",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        // ✅ FIX: Unified @id and url — both now point to the same file.
        // @id must be a stable URI (not a file path), using /#logo as convention.
        "@id": `${BASE_URL}/#logo`,
        url: `${BASE_URL}/emf.jpg`,
        contentUrl: `${BASE_URL}/emf.jpg`,
        width: 200,
        height: 200,
        caption: "Eammu Holidays",
      },
      // ✅ FIX: image now back-references the corrected logo @id
      image: { "@id": `${BASE_URL}/#logo` },
      description:
        "Premium IATA-accredited travel agency providing visa services, Umrah packages, tour packages, and flight bookings across Bangladesh, UAE, Armenia, and Georgia.",
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
      image: `${BASE_URL}/preview-banner.webp`,
      telephone: "+8801631312524",
      email: "info@eammu.com",
      priceRange: "$$",
      currenciesAccepted: "BDT, USD, AED",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      description:
        "Leading IATA-accredited travel agency with offices in Bangladesh, Dubai, Yerevan and Tbilisi offering visa services, Umrah packages, holiday tours and flight bookings.",
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
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#naeem-hossen`,
      name: "Naeem Hossen",
      givenName: "Naeem",
      familyName: "Hossen",
      jobTitle: "Founder & CEO",
      description:
        "Naeem Hossen is the Founder and CEO of Eammu Holidays and Visa Express Hub, and the founding figure of Eammu Group. Based in Bangladesh, he leads a global travel and visa services network with offices in Cumilla, Dubai, Yerevan, and Tbilisi.",
      url: `${BASE_URL}/about`,
      worksFor: { "@id": `${BASE_URL}/#organization` },
      // Founding relationship is correctly expressed FROM the Organization
      // side (see Eammu Group's `founder` property below), not here.
      nationality: {
        "@type": "Country",
        name: "Bangladesh",
      },
      sameAs: [
        "https://www.facebook.com/naeemhosseen",
        "https://www.linkedin.com/in/naeemhossen-",
        "https://www.instagram.com/naeemhossen_",
      ],
    },

    // 5. Organization — Eammu Group (parent entity)
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#eammu-group`,
      name: "Eammu Group",
      url: BASE_URL,
      description:
        "Eammu Group is a business conglomerate founded by Naeem Hossen, encompassing Eammu Holidays and Visa Express Hub, with operations across Bangladesh, UAE, Armenia, and Georgia.",
      founder: { "@id": `${BASE_URL}/#naeem-hossen` },
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
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-3033816186833488" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <body className="antialiased">
        {/* ✅ JSON-LD stays as a plain <script> tag (not next/script) —
            structured data must be present verbatim in the initial HTML for
            crawlers, so it should never be deferred or strategy-managed. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />

        <Header />

        {/* ✅ SINGLE <main> landmark for the entire site. page.jsx (and every
            other page) must NOT render its own <main> — they render directly
            into this one. */}
            <ServiceWorkerRegister />
        <main id="main-content" role="main">
          {children}
        </main>

        <WhatsAppFloatingButton />
        <Scroll />
        <Footer />

        {/* Kept as a plain <script> tag (not next/script) — AdSense's
            verification/crawler didn't pick it up when loaded via
            next/script, so reverted to the standard tag it expects. */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3033816186833488"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}