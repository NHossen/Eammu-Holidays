import Blogs from '@/Components/Client/Blog/Blog';
import React from 'react';

export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: {
    default:
      "Travel Blogs & Visa Guides 2026 : Eammu Holidays",
    template: "%s | Eammu Holidays Blog",
  },

  description:
    "Eammu Holidays travel blog — expert visa guides, student visa tips for UK, USA, Canada & Australia, Umrah package updates, holiday destination guides, Schengen visa requirements, and immigration news from Bangladesh's top travel agency.",

  keywords: [
    "travel blog Bangladesh",
    "visa guide Bangladesh 2025",
    "student visa tips UK USA Canada Australia",
    "Schengen visa requirements 2025",
    "UK student visa process Bangladesh",
    "Dubai tourist visa update",
    "Umrah package Bangladesh 2025",
    "how to apply student visa",
    "visa rejection reasons",
    "Europe tour packages Bangladesh",
    "immigration news Bangladesh",
    "holiday destination guide",
    "Canada PR from Bangladesh",
    "USA visa process Bangladeshi",
    "travel tips international",
    "Eammu Holidays blog",
    "visa application help Bangladesh",
    "best countries for Bangladesh tourists",
    "work permit abroad Bangladesh",
    "Georgia visa on arrival Bangladesh",
  ],

  alternates: {
    canonical: "https://eammu.com/blogs",
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
    url: "https://eammu.com/blogs",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Travel Blog & Visa Guides 2025 | Eammu Holidays Bangladesh",
    description:
      "Expert visa guides, student visa tips, Umrah updates, holiday destination guides, and immigration news from Eammu Holidays — Bangladesh's trusted travel agency.",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays Travel Blog – Visa Guides and Travel Tips Bangladesh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Travel Blog & Visa Guides | Eammu Holidays",
    description:
      "Latest student visa guides, Umrah updates, holiday tips, and immigration news from Bangladesh's trusted travel agency.",
    images: ["/preview-banner.webp"],
  },

  icons: { icon: "/emf.jpg" },
};

/* ─── JSON-LD Schemas ─── */

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Eammu Holidays Travel & Visa Blog",
  url: "https://eammu.com/blogs",
  description:
    "Expert travel guides, visa tips, student visa updates, Umrah package news, and holiday destination insights from Eammu Holidays — Bangladesh's leading travel and visa consultancy.",
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "Eammu Holidays",
    url: "https://eammu.com",
    logo: {
      "@type": "ImageObject",
      url: "https://eammu.com/logo.png",
      width: 200,
      height: 60,
    },
  },
  about: [
    { "@type": "Thing", name: "Student Visa" },
    { "@type": "Thing", name: "Umrah Packages" },
    { "@type": "Thing", name: "Holiday Tours" },
    { "@type": "Thing", name: "Immigration" },
    { "@type": "Thing", name: "Travel Tips" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://eammu.com/blogs" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which country offers the easiest student visa for Bangladeshis in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Germany (free tuition public universities), UK, and Japan currently offer the most streamlined student visa processes for Bangladeshi applicants with high approval rates and clear documentation requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How do I avoid visa rejection for USA and Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The key factors are strong financial documentation, proving 'Home Ties' (property, job, family), and a credible travel history. Eammu Holidays provides expert case analysis to optimize your application.",
      },
    },
    {
      "@type": "Question",
      name: "Can Bangladeshis get Georgia visa on arrival in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Georgian citizens and most nationalities including Bangladeshis may enter Georgia visa-free for 365 days. It is one of the easiest travel destinations for Bangladeshi passport holders.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for a UK student visa from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Required documents include a valid CAS (Confirmation of Acceptance for Studies) from a licensed UK university, proof of English proficiency (IELTS 6.0+), financial evidence (£1,334/month for London or £1,023/month elsewhere), valid passport, and tuberculosis test results.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an Umrah package from Bangladesh cost in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Umrah packages from Bangladesh typically range from BDT 1,20,000 to BDT 2,50,000+ depending on the season, hotel star rating (3-star to 5-star), and package duration (7 to 21 days). Eammu Holidays offers competitive all-inclusive Umrah packages.",
      },
    },
    {
      "@type": "Question",
      name: "What are the cheapest countries to visit from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most affordable international destinations for Bangladeshi tourists include Georgia, Thailand, Malaysia, Nepal, India, Sri Lanka, and the Maldives — all offering visa-on-arrival or easy e-visa processes with low travel costs.",
      },
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Travel Blog & Visa Guides | Eammu Holidays",
  url: "https://eammu.com/blogs",
  description:
    "Expert visa guides, student visa tips, Umrah package updates, holiday destination guides, and immigration news from Eammu Holidays.",
  isPartOf: { "@type": "WebSite", url: "https://eammu.com", name: "Eammu Holidays" },
  about: { "@type": "Thing", name: "Travel and Visa Consultancy Bangladesh" },
  inLanguage: "en-US",
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Blogs />
      
    </>
  );
}