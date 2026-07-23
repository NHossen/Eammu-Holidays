import StudentVisaBangladesh from '@/Components/Client/visaServices/Visa/StudentVisaBangladesh/StudentVisaBangladesh'
import HomeSeoLinks from '@/Components/HomeSeoLinks/HomeSeoLinks';
import React from 'react'

// ─── PAGE METADATA ────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: {
    default:
      "Study Abroad Destinations | Study Abroad Consultants in Dubai And Bangladesh",
    template: "%s | Eammu Holidays",
  },

  description:
    "Study abroad from Bangladesh And Dubai in 2026 with expert consultancy. Student visa support for USA F-1, UK Student Route, Canada Study Permit, Australia Subclass 500 & Germany blocked account. 1,000+ students placed. Free counseling available.",

  keywords: [
    "study abroad from Bangladesh",
    "study abroad from Dubai",
    "study abroad Bangladesh 2026",
    "student visa from Bangladesh",
    "student visa Bangladesh 2026",
    "USA student visa Bangladesh",
    "UK student visa Bangladesh",
    "Canada study permit Bangladesh",
    "Australia student visa Bangladesh",
    "Germany student visa Bangladesh blocked account",
    "study abroad consultancy Bangladesh",
    "IELTS requirement student visa 2026",
    "student visa rejection rate Bangladesh",
    "education consultancy Cumilla Bangladesh",
    "Eammu Holidays study abroad",
    "how to study abroad from Bangladesh",
    "foreign university admission Bangladesh",
  ],

  alternates: {
    canonical: "https://eammu.com/study-abroad",
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
    url: "https://eammu.com/study-abroad",
    siteName: "Eammu Holidays",
    locale: "en_BD",

    title:
      "Study Abroad from Bangladesh 2026 | Top Destinations & Student Visa Guide",

    description:
      "Get expert help to study abroad from Bangladesh. Eammu Holidays has placed 1,000+ students in top universities across 25+ countries. Free counseling available.",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Study abroad consultancy from Bangladesh — Eammu Holidays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Study Abroad from Bangladesh 2026 | Eammu Holidays",
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
  "@id": "https://eammu.com/#organization",
  name: "Eammu Holidays",
  url: "https://eammu.com",
  logo: {
    "@type": "ImageObject",
    url: "https://eammu.com/images/logo.png",
    width: 200,
    height: 60,
  },
  description:
    "Bangladesh's leading study abroad consultancy. Helping Bangladeshi students get admitted to top universities in the USA, UK, Canada, Australia, Germany, and 25+ countries since 2012.",
  foundingDate: "2012",
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
  telephone: "+8801701699743",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+8801701699743",
    availableLanguage: ["Bengali", "English"],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "10:00",
      closes: "19:00",
    },
  },
  sameAs: [
    "https://www.facebook.com/eammutourism",
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://eammu.com/study-abroad#webpage",
  url: "https://eammu.com/study-abroad",
  name: "Study Abroad from Bangladesh 2026 | Top Destinations & Student Visa Guide",
  description:
    "Study abroad from Bangladesh in 2026 with expert consultancy. Student visa support for USA, UK, Canada, Australia, and Germany.",
  isPartOf: {
    "@id": "https://eammu.com/#organization",
  },
  about: {
    "@id": "https://eammu.com/#organization",
  },
  inLanguage: "en-BD",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://eammu.com/study-abroad#service",
  name: "Study Abroad Consultancy from Bangladesh",
  serviceType: "Student Visa Application Assistance",
  provider: {
    "@id": "https://eammu.com/#organization",
  },
  areaServed: {
    "@type": "Country",
    name: "Bangladesh",
  },
  description:
    "Complete study abroad and student visa application support for Bangladeshi students — from university selection, SOP writing, and document preparation to visa filing and pre-departure briefing.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BDT",
    description: "Free initial counseling session",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Study Abroad Services",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
    { "@type": "ListItem", position: 2, name: "Study Abroad", item: "https://eammu.com/study-abroad" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I study abroad from Bangladesh in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To study abroad from Bangladesh, you need university admission, proof of English proficiency (IELTS/TOEFL or an MOI waiver), financial documents, and a valid student visa. Eammu Holidays guides Bangladeshi students through every step, from university selection to visa filing, for USA, UK, Canada, Australia, Germany, and 20+ other countries.",
      },
    },
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
      name: "When should I start my study abroad application from Bangladesh?",
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Study Abroad from Bangladesh",
  description: "Step-by-step process for Bangladeshi students to study abroad in 2026.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Free counseling", text: "Book a free counseling session with Eammu Holidays to choose the right country and university." },
    { "@type": "HowToStep", position: 2, name: "University selection & admission", text: "Shortlist universities and apply for admission with SOP and academic documents." },
    { "@type": "HowToStep", position: 3, name: "IELTS/English proficiency", text: "Complete IELTS, TOEFL, or secure an MOI waiver as required by the destination country." },
    { "@type": "HowToStep", position: 4, name: "Financial documentation", text: "Prepare bank statements, sponsorship letters, or blocked account proof as required." },
    { "@type": "HowToStep", position: 5, name: "Student visa filing", text: "Submit the student visa application with embassy interview preparation support." },
    { "@type": "HowToStep", position: 6, name: "Pre-departure briefing", text: "Attend a pre-departure briefing covering travel, accommodation, and settling-in guidance." },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Study Abroad Guide by Country for Bangladeshi Students",
  description: "Top study destinations with student visa guides for Bangladeshi passport holders in 2026.",
  numberOfItems: 6,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "USA Student Visa (F-1) from Bangladesh", url: "https://eammu.com/study-abroad/student-visa/united-states" },
    { "@type": "ListItem", position: 2, name: "UK Student Route Visa from Bangladesh", url: "https://eammu.com/study-abroad/student-visa/united-kingdom" },
    { "@type": "ListItem", position: 3, name: "Canada Study Permit from Bangladesh", url: "https://eammu.com/study-abroad/student-visa/canada" },
    { "@type": "ListItem", position: 4, name: "Australia Subclass 500 Student Visa from Bangladesh", url: "https://eammu.com/study-abroad/student-visa/australia" },
    { "@type": "ListItem", position: 5, name: "Germany Student Visa from Bangladesh", url: "https://eammu.com/study-abroad/student-visa/germany" },
    { "@type": "ListItem", position: 6, name: "Portugal D-Student Visa from Bangladesh", url: "https://eammu.com/study-abroad/student-visa/portugal" },
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
      {/* WebPage — binds this exact URL to the org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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
      {/* HowTo — powers Google HowTo rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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