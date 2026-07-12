/**
 * SERVER COMPONENT — /visa-rejection
 * File: app/visa-rejection/page.jsx
 *
 * SEO Strategy:
 * ✅ 7 JSON-LD schemas (WebPage, FAQPage, Service, HowTo, Article, BreadcrumbList, Organization)
 * ✅ 30+ keyword-rich metadata targeting every rejection-related query
 * ✅ Pre-linked to all dynamic slug pages for internal PageRank flow
 * ✅ MongoDB countries fetched server-side (SSG, revalidated daily)
 */

import VisaRejectionMain from '@/Components/Client/VisaRejectionMain/VisaRejectionMain';
import HomeSeoLinks from '@/Components/HomeSeoLinks/HomeSeoLinks';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME     = process.env.MONGODB_DB || 'Eammu-Holidays';

export const revalidate = 86400;
export const dynamic    = 'force-static';

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL('https://eammu.com'),

  title: {
    default: 'Visa Rejection Checker 2026 – Real Refusal Rates for 195+ Countries | Eammu Holidays',
    template: '%s | Eammu Holidays Visa Rejection',
  },

  description:
    'Check real visa rejection rates for 195+ countries by nationality and visa type. Discover why visas get refused, understand your approval risk, and learn exactly what to fix before applying. Trusted by 38,000+ travelers.',

  keywords: [
    // High-volume transactional
    'visa rejection checker',
    'visa rejection rate',
    'visa refusal rate by country',
    'visa rejection rate for bangladesh',
    'visa rejection rate 2026',
    'check visa approval chances',
    'visa refusal reasons',
    // Nationality-specific (top converting)
    'bangladesh visa rejection rate canada',
    'bangladesh visa rejection rate usa',
    'bangladesh visa rejection rate uk',
    'bangladesh visa rejection rate schengen',
    'bangladesh visa rejection rate australia',
    'why was my visa rejected',
    'visa rejected what to do',
    'how to avoid visa rejection',
    'visa refusal letter explanation',
    // Visa-type specific
    'tourist visa rejection rate',
    'student visa rejection rate',
    'schengen visa rejection rate bangladesh',
    'uk visa refusal rate bangladeshi',
    'canada visa refusal rate',
    'usa b2 visa rejection rate',
    // Informational / intent
    'visa rejection reasons embassies',
    'how to get visa approved after rejection',
    'visa reapplication after rejection',
    'visa rejection appeal process',
    'what documents to fix after visa rejection',
    'visa approval tips 2026',
    'embassy visa refusal statistics',
    'eammu holidays visa rejection checker',
  ],

  alternates: {
    canonical: 'https://eammu.com/visa-rejection',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    url: 'https://eammu.com/visa-rejection',
    siteName: 'Eammu Holidays',
    locale: 'en_US',
    title: 'Visa Rejection Checker 2026 – Real Refusal Rates for 195+ Countries',
    description:
      'Real visa rejection rates by nationality, destination, and visa type. Know your risk before applying. Trusted by 38,000+ travelers monthly.',
    images: [
      {
        url: '/og/visa-rejection-checker.jpg',
        width: 1200,
        height: 630,
        alt: 'Eammu Holidays Visa Rejection Checker – Real Refusal Rates 2026',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@eammuholidays',
    creator: '@eammuholidays',
    title: 'Visa Rejection Checker 2026 | Real Refusal Rates by Country',
    description:
      'Know your visa rejection risk before applying. Real data for 195+ countries.',
    images: ['/og/visa-rejection-checker.jpg'],
  },

  icons: {
    icon: '/emf.jpg',
    shortcut: '/emf.jpg',
    apple: '/emf.jpg',
  },

  other: {
    'geo.region': 'BD',
    'geo.placename': 'Bangladesh',
    'DC.language': 'en',
    'DC.coverage': 'Worldwide',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD SCHEMAS
// ─────────────────────────────────────────────────────────────────────────────

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': 'https://eammu.com/#organization',
  name: 'Eammu Holidays',
  url: 'https://eammu.com',
  logo: { '@type': 'ImageObject', url: 'https://eammu.com/emf.jpg' },
  description:
    'Bangladesh-based travel and visa consultancy offering visa rejection analysis, document preparation, and application support for 195+ countries.',
  areaServed: [
    { '@type': 'Country', name: 'Bangladesh' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Bengali'],
      url: 'https://eammu.com/contact/travel-agency-bangladesh',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English'],
      url: 'https://eammu.com/contact/travel-agency-dubai',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '1247',
    bestRating: '5',
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://eammu.com/visa-rejection#webpage',
  url: 'https://eammu.com/visa-rejection',
  name: 'Visa Rejection Checker 2026 – Real Refusal Rates for 195+ Countries',
  description:
    'Check real visa rejection rates by nationality, destination, and visa type. Understand why visas get refused and improve your approval chances.',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://eammu.com/#website',
    url: 'https://eammu.com',
    name: 'Eammu Holidays',
    publisher: { '@id': 'https://eammu.com/#organization' },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',          item: 'https://eammu.com' },
      { '@type': 'ListItem', position: 2, name: 'Visa Services', item: 'https://eammu.com/visa' },
      { '@type': 'ListItem', position: 3, name: 'Visa Rejection Checker', item: 'https://eammu.com/visa-rejection' },
    ],
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://eammu.com/og/visa-rejection-checker.jpg',
    width: 1200,
    height: 630,
  },
  dateModified: new Date().toISOString().split('T')[0],
  inLanguage: 'en-US',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.seo-speakable'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://eammu.com/visa-rejection#service',
  name: 'Visa Rejection Risk Analysis & Consultation',
  provider: { '@id': 'https://eammu.com/#organization' },
  serviceType: 'Visa Rejection Analysis',
  description:
    'Real-time visa rejection rate checker covering 195+ countries and all visa types. Includes document gap analysis, rejection reason breakdown, and expert consultation to improve approval chances.',
  areaServed: { '@type': 'Country', name: 'Bangladesh' },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free visa rejection rate check. Paid consultation available.',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Visa Rejection Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tourist Visa Rejection Check', url: 'https://eammu.com/visa-rejection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Student Visa Rejection Check', url: 'https://eammu.com/visa-rejection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Schengen Visa Rejection Check', url: 'https://eammu.com/visa-rejection/bangladesh-visa-rejection-rate-for-schengen-tourist' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UK Visa Rejection Analysis', url: 'https://eammu.com/visa-rejection/bangladesh-visa-rejection-rate-for-united-kingdom-tourist' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '1247',
    bestRating: '5',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the visa rejection rate for Bangladeshi passport holders to Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The tourist visa rejection rate for Bangladeshi applicants to Canada is approximately 35–42%, making it one of the harder destinations. The main reasons are insufficient bank balance, weak employment ties, and lack of prior travel history. Use our Visa Rejection Checker for the current rate and specific tips to improve your application.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why was my visa rejected and what can I do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common visa rejection reasons are: (1) insufficient bank balance or unstable financial history, (2) missing or incorrect documents, (3) weak ties to home country — no job, property, or family evidence, (4) poor or no prior travel history, (5) undeclared previous visa refusals, and (6) inconsistent travel purpose. After rejection, request the refusal letter, address every stated reason, and reapply with stronger documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Schengen visa rejection rate for Bangladesh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schengen visa rejection rates for Bangladeshi applicants range from 28–35% depending on the embassy and time of year. German and French embassies historically have stricter approval criteria. Strong bank statements, employer NOC, hotel bookings, and travel insurance are critical for approval.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I reapply for a visa after rejection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, visa rejection does not permanently bar reapplication. You must wait for the cooling-off period (typically 3–6 months for Schengen; varies per country), address all reasons stated in the refusal letter, and declare the previous rejection in the new application. Hiding a prior rejection causes automatic rejection for misrepresentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a UK visa rejection affect other visa applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A UK visa rejection must be declared when applying to most other countries, including USA, Canada, and Schengen. However, it does not automatically disqualify you elsewhere if you address the original rejection reasons and strengthen your application. Some countries like Malaysia and Thailand are less affected by UK rejections.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much bank balance do I need to avoid visa rejection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Required bank balance varies by destination: UK Standard Visitor Visa typically requires £2,000–£5,000+; Schengen visa requires approximately €3,000–€5,000 (€100/day of stay minimum); Canada requires CAD $5,000–$10,000+; USA requires at least 3 months of consistent salary deposits plus savings. The key is a stable 3–6 month banking history, not just a recent lump sum deposit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the USA B2 tourist visa rejection rate for Bangladesh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The USA B1/B2 tourist visa rejection rate for Bangladeshi applicants is approximately 38–45%. The primary factors are establishing non-immigrant intent (proving you will return home), strong employment and financial ties, prior travel history to third countries, and a credible travel purpose. Use our rejection checker for the latest data and document tips.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Avoid Visa Rejection – Step-by-Step Guide for Bangladeshi Applicants',
  description:
    'Follow these steps to maximize your visa approval chances and avoid common rejection reasons.',
  image: 'https://eammu.com/og/visa-rejection-checker.jpg',
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Check your rejection risk first',
      text: 'Use the Visa Rejection Checker to see the real refusal rate for your nationality and destination combination before applying.',
      url: 'https://eammu.com/visa-rejection',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Build your document checklist',
      text: 'Generate a personalized document checklist for your destination to ensure nothing is missing.',
      url: 'https://eammu.com/travel-resources/visa-checklist-generator',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Prepare strong financial evidence',
      text: 'Ensure 3–6 months of consistent bank statements showing stable income. Avoid large lump-sum deposits immediately before applying.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Prove strong ties to Bangladesh',
      text: 'Gather employment letter, property documents, family evidence, and any other proof that you will return after your trip.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Get your application reviewed',
      text: 'Have our certified visa consultants review your complete application before submission.',
      url: 'https://eammu.com/contact',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://eammu.com/visa-rejection#article',
  headline: 'Visa Rejection Checker 2026 – Real Refusal Rates, Reasons & Fix Guide',
  description:
    'Real visa rejection rates for 195+ countries by nationality and visa type. Why visas get refused and how to improve your approval chances.',
  image: {
    '@type': 'ImageObject',
    url: 'https://eammu.com/og/visa-rejection-checker.jpg',
    width: 1200,
    height: 630,
  },
  datePublished: '2024-01-01T00:00:00Z',
  dateModified: new Date().toISOString(),
  author: {
    '@type': 'Organization',
    name: 'Eammu Holidays',
    url: 'https://eammu.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Eammu Holidays',
    logo: { '@type': 'ImageObject', url: 'https://eammu.com/emf.jpg' },
  },
  mainEntityOfPage: 'https://eammu.com/visa-rejection',
  keywords:
    'visa rejection rate, visa refusal reasons, how to avoid visa rejection, bangladesh visa rejection, schengen rejection rate, uk visa refusal',
  articleSection: 'Visa Guides',
  wordCount: 3200,
  inLanguage: 'en-US',
  about: [
    { '@type': 'Thing', name: 'Visa Rejection' },
    { '@type': 'Thing', name: 'Visa Approval' },
    { '@type': 'Place', name: 'Bangladesh' },
  ],
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': 'https://eammu.com/visa-rejection#app',
  name: 'Eammu Visa Rejection Risk Checker',
  url: 'https://eammu.com/visa-rejection',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web Browser',
  description:
    'Free visa rejection rate checker for 195+ countries. Enter your nationality, destination, and visa type to see your refusal risk and learn how to improve your chances.',
  screenshot: 'https://eammu.com/og/visa-rejection-checker.jpg',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  publisher: { '@id': 'https://eammu.com/#organization' },
  featureList: [
    'Real rejection rates for 195+ countries',
    'All visa types covered (tourist, student, work, business, transit, family)',
    'Rejection reason breakdown',
    'Document fix recommendations',
    'Nationality × destination combination lookup',
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// MONGODB FETCH
// ─────────────────────────────────────────────────────────────────────────────
async function getCountries() {
  try {
    const client = await MongoClient.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      family: 4,
    });
    const db = client.db(DB_NAME);
    const countries = await db
      .collection('countries')
      .find({})
      .project({ country: 1, flag: 1, code: 1, _id: 0 })
      .sort({ country: 1 })
      .toArray();
    await client.close();
    return countries || [];
  } catch (error) {
    console.error('MongoDB Error:', error.message);
    return [];
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default async function VisaRejectionCheckerPage() {
  const countries = await getCountries();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <VisaRejectionMain countries={countries} />
      <HomeSeoLinks />
    </>
  );
}