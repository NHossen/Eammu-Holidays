import Blogs from '@/Components/Client/Blog/Blog'
import React from 'react'

// --- SEO METADATA ---
export const metadata = {
  title: 'Travel News - Eammu Holidays | Leading Travel Agency in Bangladesh',
  description: 'Stay updated with the latest visa requirements, travel tips, and destination guides for USA, UK, Canada, and Europe. Expert advice from Eammu Holidays.',
  keywords: [
    'Visa processing blog', 
    'Student visa updates 2026', 
    'Travel agency Bangladesh blog', 
    'Tourist visa requirements', 
    'Eammu Holidays news'
  ],
  alternates: {
    canonical: 'https://eammu.com/blogs',
  },
  openGraph: {
    title: 'Travel Blog & Visa Guides | Eammu Holidays',
    description: 'Latest travel news and comprehensive visa application guides worldwide.',
    url: 'https://eammu.com/blogs',
    siteName: 'Eammu Holidays',
    images: [
      {
        url: 'https://eammu.com/blog-banner.webp', // Make sure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: 'Eammu Holidays Travel Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Blog & Visa Guides | Eammu Holidays',
    description: 'Latest travel news and comprehensive visa application guides.',
    images: ['https://eammu.com/blog-banner.webp'],
  },
};

export default function BlogPage() {
  // Adding JSON-LD for Search Engines to identify this as a Blog
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Eammu Holidays Travel Blog',
    'url': 'https://eammu.com/blog',
    'description': 'Latest visa updates and travel guides.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Eammu Holidays',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://eammu.com/logo.png'
      }
    }
  };

  return (
    <>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Blogs />
      </main>
    </>
  )
}