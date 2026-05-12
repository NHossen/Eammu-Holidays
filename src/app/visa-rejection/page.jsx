/**
 * ✅ SERVER COMPONENT - MAIN LANDING PAGE
 * File: app/travel-resources/visa-rejection-checker/page.jsx
 * 
 * PURE SERVER-SIDE:
 * ✅ Fetch countries from MongoDB
 * ✅ Generate JSON-LD schema
 * ✅ Set metadata
 * 
 * Then pass to CLIENT component for interactivity
 */

import VisaRejectionMain from '@/Components/Client/VisaRejectionMain/VisaRejectionMain';
import { MongoClient } from 'mongodb';


const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB || 'Eammu-Holidays';

export const revalidate = 86400; // 24 hours cache
export const dynamic = 'force-static';

// ==========================================
// ✅ METADATA
// ==========================================
export const metadata = {
  title: 'Visa Rejection Checker - Know Your Approval Risk | Eammu Holidays',
  description: 'Check real visa rejection rates for 195+ countries. Learn why visas get refused and what you can do to improve your approval chances.',
  keywords: [
    'visa rejection checker',
    'visa rejection rate',
    'visa approval chances',
    'visa refusal reasons',
    'how to get visa approved',
    'visa application tips',
  ],
  openGraph: {
    title: 'Visa Rejection Checker - 195+ Countries',
    description: 'Real visa rejection data from 195+ countries and all visa types',
    url: 'https://eammu.com/visa-rejection',
    type: 'website',
    siteName: 'Eammu Holidays',
    images: [
      {
        url: 'https://eammu.com/og/visa-rejection-checker.jpg',
        width: 1200,
        height: 630,
        alt: 'Visa Rejection Checker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visa Rejection Checker',
    description: 'Know your visa approval risk for 195+ countries',
  },
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
    },
  },
};

// ==========================================
// ✅ FETCH COUNTRIES FROM MONGODB
// ==========================================
async function getCountries() {
  try {
    console.log('🔄 Fetching countries from MongoDB...');
    
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

    console.log(`✅ Fetched ${countries?.length || 0} countries`);
    return countries || [];
  } catch (error) {
    console.error('❌ MongoDB Error:', error.message);
    return [];
  }
}

// ==========================================
// ✅ MAIN SERVER COMPONENT
// ==========================================
export default async function VisaRejectionCheckerPage() {
  // ✅ Fetch countries on server
  const countries = await getCountries();

  // ✅ JSON-LD SCHEMA (for Google)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Visa Rejection Checker',
    url: 'https://eammu.com/visa-rejection',
    applicationCategory: 'UtilityApplication',
    description: 'Check real visa rejection rates for 195+ countries and learn how to improve your approval chances',
    screenshot: 'https://eammu.com/og/visa-rejection-checker.jpg',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Eammu Holidays',
      url: 'https://eammu.com',
      logo: 'https://eammu.com/logo.png',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://eammu.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Travel Resources',
          item: 'https://eammu.com/travel-resources',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Visa Rejection Checker',
          item: 'https://eammu.com/visa-rejection',
        },
      ],
    },
  };

  return (
    <>
      {/* ✅ JSON-LD Script for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ✅ Pass countries to CLIENT component */}
      <VisaRejectionMain countries={countries} />

    
    </>
  );
}