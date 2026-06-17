import StudentVisaBangladesh from '@/Components/Client/visaServices/Visa/StudentVisaBangladesh/StudentVisaBangladesh'
import HomeSeoLinks from '@/Components/HomeSeoLinks/HomeSeoLinks';
import React from 'react'

// ─── PAGE METADATA ────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Student Visa from Bangladesh 2026 | USA, UK, Canada, Australia, Germany",
    template: "%s | Eammu Holidays",
  },

  description:
    "Apply for a student visa from Bangladesh in 2026. Expert consultancy for USA F-1, UK Student Route, Canada Study Permit, Australia Subclass 500 & Germany blocked account. 1,000+ students placed. Free counseling available.",

  keywords: [
    "student visa from Bangladesh",
    "student visa Bangladesh 2026",
    "study abroad from Bangladesh",
    "USA student visa Bangladesh",
    "UK student visa Bangladesh",
    "Canada study permit Bangladesh",
    "Australia student visa Bangladesh",
    "Germany student visa Bangladesh blocked account",
    "student visa consultancy Bangladesh",
    "IELTS requirement student visa 2026",
    "student visa rejection rate Bangladesh",
    "education consultancy Cumilla Bangladesh",
    "Eammu Holidays student visa",
    "how to apply student visa from Bangladesh",
    "foreign university admission Bangladesh",
  ],

  alternates: {
    canonical: "https://www.eammu.com/our-services/visa-services/student-visa-from-bangladesh",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.eammu.com/our-services/visa-services/student-visa-from-bangladesh",
    siteName: "Eammu Holidays",
    locale: "en_BD",

    title:
      "Student Visa from Bangladesh 2026 — USA, UK, Canada, Australia & Germany",

    description:
      "Get expert help applying for a student visa from Bangladesh. Eammu Holidays has placed 1,000+ students in top universities across 25+ countries. Free counseling available.",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Student visa consultancy from Bangladesh — Eammu Holidays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Student Visa from Bangladesh 2026 | Eammu Holidays",
    description:
      "USA F-1, UK Student Route, Canada Study Permit & more. 1,000+ placements. Free counseling.",
    images: ["/eammu_banner_four.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};

// ─── STRUCTURED DATA ──────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://www.eammu.com/#organization",
  name: "Eammu Holidays",
  url: "https://www.eammu.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.eammu.com/images/logo.png",
    width: 200,
    height: 60,
  },
  description:
    "Bangladesh's leading student visa consultancy. Helping Bangladeshi students get admitted to top universities in the USA, UK, Canada, Australia, Germany, and 25+ countries since 2018.",
  foundingDate: "2018",
  areaServed: {
    "@type": "Country",
    name: "Bangladesh",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gomoti Tower, 4th Floor, Cantonment",
    addressLocality: "Cumilla",
    addressCountry: "BD",
    postalCode: "3500",
  },
  telephone: "+8801631312524",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+8801631312524",
    availableLanguage: ["Bengali", "English"],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "10:00",
      closes: "19:00",
    },
  },
  sameAs: [
    "https://www.facebook.com/eammuholidays",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.eammu.com/our-services/visa-services/student-visa-from-bangladesh#service",
  name: "Student Visa Consultancy from Bangladesh",
  serviceType: "Student Visa Application Assistance",
  provider: {
    "@id": "https://www.eammu.com/#organization",
  },
  areaServed: {
    "@type": "Country",
    name: "Bangladesh",
  },
  description:
    "Complete student visa application support for Bangladeshi students — from university selection, SOP writing, and document preparation to visa filing and pre-departure briefing.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BDT",
    description: "Free initial counseling session",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Student Visa Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "USA F-1 Student Visa Assistance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UK Student Route Visa Assistance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Canada Study Permit Assistance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Australia Subclass 500 Student Visa Assistance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Germany Student Visa Blocked Account Guidance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SOP & Documentation Preparation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scholarship Application Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Embassy Interview Preparation" } },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eammu.com" },
    { "@type": "ListItem", position: 2, name: "Visa Services", item: "https://www.eammu.com/our-services/visa-services" },
    { "@type": "ListItem", position: 3, name: "Student Visa from Bangladesh", item: "https://www.eammu.com/our-services/visa-services/student-visa-from-bangladesh" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the IELTS requirement for a student visa in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 6.0 for Bachelor's and 6.5 for Master's level programs in the USA, UK, Canada, and Australia. However, some UK and USA universities now offer IELTS waivers based on Medium of Instruction (MOI) letters from Bangladeshi universities. Germany may require TestDaF or Goethe certificates for German-language programs. Contact Eammu Holidays for country-specific IELTS requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can Eammu Holidays help with spousal visas alongside student visas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Eammu Holidays processes dependent visas for spouses and children alongside the UK Student Route and Canada Study Permit. Contact our Cumilla office to plan a combined application that covers both the primary student and dependents.",
      },
    },
    {
      "@type": "Question",
      name: "When should I start my student visa application from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For the September intake, Bangladeshi students should begin the process at least 6 months in advance — ideally between January and February. This allows enough time to secure university admission, apply for scholarships, book IELTS, prepare financial documents, and schedule visa appointments.",
      },
    },
    {
      "@type": "Question",
      name: "Which countries have the lowest student visa rejection rates for Bangladeshi applicants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Countries such as Georgia, Malaysia, Albania, and Serbia typically have higher student visa approval rates for Bangladeshi passport holders. Countries like the USA and UK have stricter requirements. Eammu Holidays helps applicants identify and fix weak points in their application before submission to improve approval odds.",
      },
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Student Visa Guide by Country for Bangladeshi Students",
  description: "Top study destinations with student visa guides for Bangladeshi passport holders in 2026.",
  numberOfItems: 6,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "USA Student Visa (F-1) from Bangladesh", url: "https://www.eammu.com/study-abroad/student-visa/usa" },
    { "@type": "ListItem", position: 2, name: "UK Student Route Visa from Bangladesh", url: "https://www.eammu.com/study-abroad/student-visa/uk" },
    { "@type": "ListItem", position: 3, name: "Canada Study Permit from Bangladesh", url: "https://www.eammu.com/study-abroad/student-visa/canada" },
    { "@type": "ListItem", position: 4, name: "Australia Subclass 500 Student Visa from Bangladesh", url: "https://www.eammu.com/study-abroad/student-visa/australia" },
    { "@type": "ListItem", position: 5, name: "Germany Student Visa from Bangladesh", url: "https://www.eammu.com/study-abroad/student-visa/germany" },
    { "@type": "ListItem", position: 6, name: "Portugal D-Student Visa from Bangladesh", url: "https://www.eammu.com/study-abroad/student-visa/portugal" },
  ],
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function StudentVisaFromBangladeshPage() {
  return (
    <>
      {/* Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* FAQ — powers Google FAQ rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ItemList — for country cards */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <StudentVisaBangladesh />

      <HomeSeoLinks />
    </>
  );
}