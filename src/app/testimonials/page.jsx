
import CustomerTestimonialSection from "@/Components/Client/Testimonials/CustomerTestimonialSection";
import React from "react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Customer Reviews & Testimonials | Eammu Holidays – Trusted Travel Agency Bangladesh",
    template: "%s | Eammu Holidays",
  },

  description:
    "Explore verified customer reviews and success stories from Eammu Holidays clients. Real experiences on visa approvals (Canada, UK, USA, Dubai, Schengen), student visas, work permits, group tours, and Umrah packages — proudly serving clients from Bangladesh and the Middle East.",

  keywords: [
    "Eammu Holidays reviews",
    "Eammu Holidays testimonials",
    "travel agency testimonials Bangladesh",
    "visa success stories Bangladesh",
    "Canada visa approved Bangladesh",
    "UK student visa Bangladesh",
    "Dubai work permit success",
    "Schengen visa consultancy review",
    "best travel agency Dhaka",
    "trusted visa agency Bangladesh",
    "Umrah package reviews Bangladesh",
    "tour package customer feedback",
    "study abroad success stories Bangladesh",
    "work permit visa consultancy Bangladesh",
    "happy clients Eammu Holidays",
    "immigration consultant Bangladesh reviews",
    "travel agency Dubai Bangladeshi",
    "eammu holidays customer photos",
    "visa approved testimonial video",
    "group tour review Bangladesh travel",
  ],

  alternates: {
    canonical: "https://www.eammu.com/testimonials",
    languages: {
      "en-US": "https://www.eammu.com/testimonials",
    },
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
    url: "https://www.eammu.com/testimonials",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Real Customer Reviews & Success Stories | Eammu Holidays",
    description:
      "Hundreds of verified clients share their Eammu Holidays experience — visa approvals, holiday tours, study abroad success, and work permits. See why we are Bangladesh's most trusted travel agency.",
    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays – Customer Testimonials and Visa Success Stories",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "Customer Testimonials | Eammu Holidays Travel Agency",
    description:
      "Real visa approvals, tour reviews, and work permit success stories from Eammu Holidays clients across Bangladesh and beyond.",
    images: ["/eammu_banner_four.webp"],
  },

  icons: {
    icon: "/emf.jpg",
    shortcut: "/emf.jpg",
    apple: "/emf.jpg",
  },

  category: "travel",
};

// ─── Structured Data ───────────────────────────────────────────────────────────
const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Eammu Holidays",
  url: "https://www.eammu.com",
  logo: "https://www.eammu.com/emf.jpg",
  image: "https://www.eammu.com/eammu_banner_four.webp",
  description:
    "Eammu Holidays is a leading travel agency in Bangladesh specializing in visa processing, tour packages, Umrah, work permits, and study abroad services.",
  telephone: "+880-XXXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BD",
    addressLocality: "Dhaka",
    addressRegion: "Dhaka Division",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "320",
    reviewCount: "280",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Mrs. Sadiya" },
      reviewBody:
        "Eammu Holidays helped me get my Canada visa approved without any hassle. Their team is professional and very supportive throughout the entire process.",
      datePublished: "2024-11-15",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Ms. Sara" },
      reviewBody:
        "My UK student visa was approved in just 3 weeks. Eammu Holidays guided me through every step. Highly recommended for students aspiring to study abroad.",
      datePublished: "2025-01-20",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Tanvir Hasan" },
      reviewBody:
        "Got my Dubai work permit with the help of Eammu Holidays. Best travel and visa consultancy in Bangladesh. Very trustworthy and experienced team.",
      datePublished: "2025-02-10",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.eammu.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Testimonials",
      item: "https://www.eammu.com/testimonials",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Eammu Holidays a trusted travel agency in Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Eammu Holidays is one of the most trusted travel agencies in Bangladesh with a 4.9/5 rating from over 300 verified clients. They specialize in visa processing, tour packages, Umrah, and study abroad services.",
      },
    },
    {
      "@type": "Question",
      name: "What type of visa services does Eammu Holidays provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eammu Holidays provides visa services for Canada, UK, USA, Dubai, Schengen countries, student visas, work permits, and tourist visas for clients from Bangladesh.",
      },
    },
    {
      "@type": "Question",
      name: "How can I see real customer testimonials for Eammu Holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can view real customer photos and video testimonials on the Eammu Holidays testimonials page at https://www.eammu.com/testimonials, showcasing verified visa approvals and travel success stories.",
      },
    },
  ],
};

// ─── Page Component ────────────────────────────────────────────────────────────
export default function TestimonialsPage() {
  return (
    <>
      {/* Structured Data: Aggregate Rating + Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />

      {/* Structured Data: Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Structured Data: FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* SEO: Hidden semantic content for crawlers */}
      <div className="sr-only" aria-hidden="true">
        <h1>Customer Reviews & Testimonials – Eammu Holidays Travel Agency Bangladesh</h1>
        <p>
          Eammu Holidays is rated 4.9 out of 5 by over 320 satisfied clients. Our customers
          share verified success stories for Canada visa, UK student visa, Dubai work permit,
          Schengen visa, Umrah packages, and group tours from Bangladesh.
        </p>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://www.eammu.com">Home</a></li>
            <li><a href="https://www.eammu.com/testimonials">Testimonials</a></li>
          </ol>
        </nav>
      </div>

      {/* Client Component */}
    <CustomerTestimonialSection />
      {/* SEO: FAQ Section (visible, crawlable) */}
      <section
        className="max-w-3xl mx-auto px-4 py-16"
        aria-label="Frequently Asked Questions about Eammu Holidays"
      >
        <h2 className="text-2xl font-black text-[#005a31] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <details className="border border-gray-200 rounded-xl p-5">
            <summary className="font-bold text-[#005a31] cursor-pointer">
              Is Eammu Holidays a trusted travel agency in Bangladesh?
            </summary>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Yes, Eammu Holidays is one of the most trusted travel agencies in Bangladesh
              with a 4.9/5 rating from over 300 verified clients. They specialize in visa
              processing, tour packages, Umrah, and study abroad services.
            </p>
          </details>
          <details className="border border-gray-200 rounded-xl p-5">
            <summary className="font-bold text-[#005a31] cursor-pointer">
              What type of visa services does Eammu Holidays provide?
            </summary>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Eammu Holidays provides visa services for Canada, UK, USA, Dubai, Schengen
              countries, student visas, work permits, and tourist visas for clients across
              Bangladesh.
            </p>
          </details>
          <details className="border border-gray-200 rounded-xl p-5">
            <summary className="font-bold text-[#005a31] cursor-pointer">
              How can I see real customer testimonials for Eammu Holidays?
            </summary>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Browse verified customer photos and video testimonials right here on this page —
              showcasing real visa approvals, group tour experiences, and work permit successes
              from happy Eammu Holidays clients.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}