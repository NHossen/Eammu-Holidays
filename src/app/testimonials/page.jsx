
import CustomerTestimonialSection from "@/Components/Client/Testimonials/CustomerTestimonialSection";
import React from "react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Customer Reviews & Testimonials | Eammu Holidays – #1 Trusted Travel Agency Bangladesh",
    template: "%s | Eammu Holidays",
  },

  description:
    "Read 320+ verified customer testimonials from Eammu Holidays — Bangladesh's most trusted visa consultancy. Real stories: Canada visa approved, UK student visa, Dubai work permit, Schengen visa, USA tourist visa, Umrah packages & group tours. 4.9★ rated. 98% success rate.",

  keywords: [
    // Brand + review intent
    "Eammu Holidays reviews",
    "Eammu Holidays testimonials",
    "Eammu Holidays customer feedback",
    "eammu.com reviews",
    "is Eammu Holidays trusted",
    // Core service + testimonial
    "visa approval testimonial Bangladesh",
    "Canada visa success story Bangladesh",
    "UK student visa approved Bangladesh",
    "Dubai work permit Bangladesh success",
    "Schengen visa Bangladesh testimonial",
    "USA tourist visa Bangladesh success",
    "work permit consultancy review Bangladesh",
    "Umrah package review Bangladesh",
    "group tour testimonial Bangladesh",
    "study abroad success Bangladesh",
    // Agency + location
    "best travel agency Bangladesh",
    "best visa consultancy Dhaka",
    "trusted visa agency Bangladesh",
    "top visa consultancy Bangladesh",
    "travel agency near me Dhaka",
    "immigration consultant Bangladesh reviews",
    // Intent-specific
    "visa agency 5 star review Bangladesh",
    "98% visa approval rate Bangladesh",
    "Bangladesh to Canada visa consultancy",
    "Bangladesh to UK visa consultancy",
    "Bangladesh to Dubai work visa agency",
    "travel agency Dubai Bangladeshi expat",
    "verified visa approval photos Bangladesh",
  ],

  alternates: {
    canonical: "https://www.eammu.com/testimonials",
    languages: {
      "en-US": "https://www.eammu.com/testimonials",
      "bn-BD": "https://www.eammu.com/bn/testimonials",
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
    title: "5,000+ Happy Clients | Real Visa Success Stories – Eammu Holidays Bangladesh",
    description:
      "320+ verified customers share their Eammu Holidays experience — Canada visa, UK student visa, Dubai work permit, Schengen visa, Umrah & group tours from Bangladesh. Rated 4.9★ with 98% approval rate.",
    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays – Verified Customer Testimonials & Visa Success Stories Bangladesh",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    creator: "@eammuholidays",
    title: "5,000+ Happy Clients | Eammu Holidays Testimonials",
    description:
      "Real visa approvals, work permit success & tour reviews from Eammu Holidays clients across Bangladesh. 4.9★ rated. 98% visa success rate.",
    images: ["/eammu_banner_four.webp"],
  },

  icons: {
    icon: "/emf.jpg",
    shortcut: "/emf.jpg",
    apple: "/emf.jpg",
  },

  other: {
    "geo.region": "BD-13",
    "geo.placename": "Dhaka",
    "geo.position": "23.8103;90.4125",
    ICBM: "23.8103, 90.4125",
  },

  category: "travel",
};

// ─── Structured Data ───────────────────────────────────────────────────────────

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": "https://www.eammu.com/#organization",
  name: "Eammu Holidays",
  alternateName: "Eammu Holidays Bangladesh",
  url: "https://www.eammu.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.eammu.com/emf.jpg",
    width: 200,
    height: 200,
  },
  image: "https://www.eammu.com/eammu_banner_four.webp",
  description:
    "Eammu Holidays is Bangladesh's most trusted travel and visa consultancy, specializing in Canada, UK, USA, Dubai, and Schengen visa processing, work permits, student visas, Umrah packages, and group tour services.",
  telephone: "+880-XXXXXXXXXX",
  email: "info@eammu.com",
  foundingDate: "2015",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address",
    addressLocality: "Dhaka",
    addressRegion: "Dhaka Division",
    postalCode: "1000",
    addressCountry: "BD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.8103",
    longitude: "90.4125",
  },
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
  priceRange: "৳৳",
  currenciesAccepted: "BDT, USD",
  hasMap: "https://www.google.com/maps?q=Eammu+Holidays+Dhaka",
  sameAs: [
    "https://www.facebook.com/eammuholidays",
    "https://www.instagram.com/eammuholidays",
    "https://www.youtube.com/@eammuholidays",
    "https://www.linkedin.com/company/eammuholidays",
  ],
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
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Mrs. Sadiya Rahman" },
      reviewBody:
        "Eammu Holidays helped me get my Canada visa approved without any hassle. Their team is professional and very supportive throughout the entire process. Highly recommended for anyone applying from Bangladesh.",
      datePublished: "2024-11-15",
      publisher: { "@type": "Organization", name: "Eammu Holidays" },
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Ms. Sara Begum" },
      reviewBody:
        "My UK student visa was approved in just 3 weeks. Eammu Holidays guided me through every step with patience and professionalism. Best visa consultancy in Bangladesh for students going abroad.",
      datePublished: "2025-01-20",
      publisher: { "@type": "Organization", name: "Eammu Holidays" },
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Tanvir Hasan" },
      reviewBody:
        "Got my Dubai work permit with the help of Eammu Holidays. Most trustworthy and experienced visa agency I have dealt with in Bangladesh. Zero stress from start to finish.",
      datePublished: "2025-02-10",
      publisher: { "@type": "Organization", name: "Eammu Holidays" },
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Sharmin Sultana" },
      reviewBody:
        "I had failed the Schengen visa twice on my own. Eammu Holidays restructured my entire application and I got approved on the next attempt. They genuinely care about your success.",
      datePublished: "2025-04-05",
      publisher: { "@type": "Organization", name: "Eammu Holidays" },
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Kamal Uddin" },
      reviewBody:
        "The Umrah package was perfectly arranged. Hotel, transport, group guidance — everything was excellent. Our group of 18 had a completely smooth and spiritually fulfilling experience.",
      datePublished: "2024-12-18",
      publisher: { "@type": "Organization", name: "Eammu Holidays" },
    },
  ],
  knowsAbout: [
    "Canada Visa Processing Bangladesh",
    "UK Student Visa Bangladesh",
    "USA Tourist Visa Bangladesh",
    "Dubai Work Permit Bangladesh",
    "Schengen Visa Bangladesh",
    "Malaysia Work Permit Bangladesh",
    "Umrah Packages Bangladesh",
    "Group Tour Packages Bangladesh",
    "Study Abroad Consultancy Bangladesh",
    "Immigration Consultancy Bangladesh",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eammu.com" },
    { "@type": "ListItem", position: 2, name: "Testimonials", item: "https://www.eammu.com/testimonials" },
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
        text: "Yes, Eammu Holidays is Bangladesh's most trusted travel agency with a 4.9/5 rating from over 320 verified clients. Founded in 2015, they have successfully processed 5,000+ visa applications and tour bookings with a 98% success rate.",
      },
    },
    {
      "@type": "Question",
      name: "What visa services does Eammu Holidays provide in Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eammu Holidays provides visa services for Canada, UK, USA, Dubai, Malaysia, all Schengen countries, student visas, work permits, and tourist visas. They also offer Umrah packages, group tours, and study abroad consultancy from Bangladesh.",
      },
    },
    {
      "@type": "Question",
      name: "What is the visa success rate at Eammu Holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eammu Holidays maintains a 98% visa approval rate across all categories including Canada, UK, USA, Dubai, and Schengen visas, making them the highest-success-rate visa consultancy in Bangladesh.",
      },
    },
    {
      "@type": "Question",
      name: "How can I see real customer testimonials for Eammu Holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can view verified customer photos, YouTube video testimonials, and written reviews on https://www.eammu.com/testimonials, showcasing real visa approvals, work permit successes, group tour experiences, and Umrah package reviews from happy clients.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact Eammu Holidays for a free visa consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Eammu Holidays through their website at https://www.eammu.com/contact, via phone, or through their official Facebook page. They offer free initial consultations for all visa categories.",
      },
    },
  ],
};

const videoObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Eammu Holidays Video Testimonials",
  description: "Customer video reviews and visa success stories from Eammu Holidays Bangladesh",
  url: "https://www.eammu.com/testimonials",
  numberOfItems: 5,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "VideoObject",
        name: "Canada Visa Success Story – Eammu Holidays Client Review",
        description: "A verified client from Bangladesh shares their Canada visa approval experience with Eammu Holidays.",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        uploadDate: "2024-11-15",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        publisher: { "@type": "Organization", name: "Eammu Holidays", logo: "https://www.eammu.com/emf.jpg" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "VideoObject",
        name: "UK Student Visa Experience – Eammu Holidays",
        description: "A student from Bangladesh shares their UK student visa journey with Eammu Holidays consultancy.",
        thumbnailUrl: "https://img.youtube.com/vi/7e90gBu4pas/maxresdefault.jpg",
        uploadDate: "2025-01-20",
        embedUrl: "https://www.youtube.com/embed/7e90gBu4pas",
        publisher: { "@type": "Organization", name: "Eammu Holidays", logo: "https://www.eammu.com/emf.jpg" },
      },
    },
  ],
};

// ─── Page Component ────────────────────────────────────────────────────────────
export default function TestimonialsPage() {
  return (
    <>
      {/* ── Structured Data ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectSchema) }} />

      {/* ── SEO: Hidden semantic content for crawlers ── */}
      <div className="sr-only" aria-hidden="true">
        <h1>Customer Reviews &amp; Testimonials – Eammu Holidays Travel Agency Bangladesh</h1>
        <p>
          Eammu Holidays is rated 4.9 out of 5 by over 320 satisfied clients from Bangladesh.
          Our verified customers share real success stories for Canada visa, UK student visa,
          Dubai work permit, Schengen visa, USA tourist visa, Malaysia work permit, Umrah packages,
          and group tours. We maintain a 98% visa approval rate across all categories since 2015.
        </p>
        <p>
          As Bangladesh's most trusted visa consultancy and travel agency in Dhaka, Eammu Holidays
          has helped over 5,000 clients fulfil their travel and immigration goals. Our certified visa
          experts provide end-to-end support from document preparation to visa stamping.
        </p>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://www.eammu.com">Home</a></li>
            <li><a href="https://www.eammu.com/testimonials">Testimonials</a></li>
          </ol>
        </nav>
        {/* SEO: List of verified services for crawlers */}
        <ul>
          <li>Canada Visa Processing Bangladesh – Verified Success</li>
          <li>UK Student Visa Bangladesh – 98% Approval Rate</li>
          <li>USA Tourist Visa Bangladesh – Expert Guidance</li>
          <li>Dubai Work Permit Bangladesh – Trusted Consultancy</li>
          <li>Schengen Visa Bangladesh – First-Attempt Approvals</li>
          <li>Malaysia Work Permit Bangladesh – Reliable Service</li>
          <li>Umrah Package Bangladesh – Complete Group Management</li>
          <li>Europe Group Tour Bangladesh – Fully Organized</li>
        </ul>
      </div>

      {/* ── Client Component ── */}
     <CustomerTestimonialSection />

      {/* ── SEO: Crawlable FAQ Section ── */}
      <section
        className="max-w-3xl mx-auto px-4 py-16"
        aria-labelledby="faq-heading"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <h2
          id="faq-heading"
          className="text-2xl font-black text-center mb-8"
          style={{ color: "#005a31" }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "Is Eammu Holidays a trusted travel agency in Bangladesh?",
              a: "Yes, Eammu Holidays is Bangladesh's most trusted travel agency, rated 4.9/5 by over 320 verified clients. Founded in 2015, they maintain a 98% visa success rate and have helped 5,000+ clients with visa processing, tours, Umrah, and work permits.",
            },
            {
              q: "What visa services does Eammu Holidays provide?",
              a: "Eammu Holidays processes visas for Canada, UK, USA, Dubai, Malaysia, all Schengen countries, student visas, work permits, tourist visas, and business visas. They also offer Umrah packages, group tours, and complete study abroad consultancy from Bangladesh.",
            },
            {
              q: "What is Eammu Holidays' visa approval success rate?",
              a: "Eammu Holidays maintains a 98% visa approval rate across all visa categories including Canada, UK, USA, Dubai, and Schengen countries — the highest in Bangladesh.",
            },
            {
              q: "How can I view real Eammu Holidays customer testimonials?",
              a: "Browse verified customer photos, YouTube video testimonials, and written reviews directly on this page (https://www.eammu.com/testimonials). All testimonials show real visa approvals, group tour reviews, and work permit success stories.",
            },
            {
              q: "How do I book a free consultation with Eammu Holidays?",
              a: "Contact Eammu Holidays through their website at https://www.eammu.com/contact or via their official social media channels. They offer free initial consultations for all visa and travel inquiries.",
            },
          ].map(({ q, a }) => (
            <details
              key={q}
              className="border rounded-xl p-5"
              style={{ borderColor: "#dceee4" }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <summary
                className="font-bold cursor-pointer text-base"
                style={{ color: "#005a31" }}
                itemProp="name"
              >
                {q}
              </summary>
              <div
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "#5a7a6a" }}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">{a}</span>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── SEO: Internal Linking Section ── */}
      <nav
        className="max-w-4xl mx-auto px-4 pb-16 text-center"
        aria-label="Explore Eammu Holidays services"
      >
        <h3 className="font-black text-base mb-4" style={{ color: "#005a31" }}>
          Explore Our Services
        </h3>
        <ul className="flex flex-wrap justify-center gap-3 list-none">
          {[
            { href: "/visa/canada", label: "Canada Visa" },
            { href: "/visa/uk", label: "UK Student Visa" },
            { href: "/visa/usa", label: "USA Visa" },
            { href: "/visa/dubai", label: "Dubai Work Permit" },
            { href: "/visa/schengen", label: "Schengen Visa" },
            { href: "/umrah", label: "Umrah Packages" },
            { href: "/tours", label: "Group Tours" },
            { href: "/contact", label: "Free Consultation" },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={`https://www.eammu.com${href}`}
                className="text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                style={{
                  background: "#e8f5ee",
                  color: "#005a31",
                  textDecoration: "none",
                  border: "1px solid #c3e8d3",
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}