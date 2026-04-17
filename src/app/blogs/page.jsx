import Blogs from '@/Components/Client/Blog/Blog'
import React from 'react'

// --- SEO METADATA (BLOG PAGE) ---
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Premium Education Consultancy | Travel Blog & Visa Guides 2026 | Eammu Holidays",
    template: "%s | Eammu Holidays Blog",
  },

  description:
    "Explore the latest travel updates, visa requirements, and destination guides for Dubai, Europe, UK, USA, and more. Get expert tips, step-by-step visa guides, and travel insights from Eammu Holidays.",

  keywords: [
    "visa guide 2026",
    "travel blog Bangladesh",
    "Dubai visa updates",
    "Europe visa requirements",
    "UK tourist visa guide",
    "USA visa process",
    "travel tips international",
    "Eammu Holidays blog",
    "visa application help"
  ],

  alternates: {
    canonical: "https://www.eammu.com/blogs",
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
    url: "https://www.eammu.com/blogs",
    siteName: "Eammu Holidays",

    title:
      "Travel Blog, Visa Guides & Latest Updates",

    description:
      "Stay updated with visa rules, travel tips, and destination guides worldwide. Expert insights from Eammu Holidays.",

    images: [
      {
        url: "/blog-banner.webp",
        width: 1200,
        height: 630,
        alt: "Travel blog with visa guides and updates",
      },
    ],

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Travel Blog & Visa Updates | Eammu Holidays",
    description:
      "Latest visa guides, travel tips, and destination insights for international travelers.",
    images: ["/blog-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
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