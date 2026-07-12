import React from "react";
import Link from "next/link";
import {
  Newspaper,
  BellRing,
  PlaneTakeoff,
  GraduationCap,
  Globe2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: {
    default:
      "Latest Travel News and Visa Updates in 2026",
  },

  description:
    "Get the latest travel news, visa policy updates, embassy alerts, immigration changes, and scholarship announcements for 2026. Covering Canada, UK, USA, Dubai, Schengen, and Australia — trusted by 5,000+ clients from Bangladesh. Updated daily by Eammu Holidays.",

  keywords: [
    // Core news
    "travel news Bangladesh 2026",
    "visa updates 2026 Bangladesh",
    "immigration news Bangladesh",
    "embassy alerts Bangladesh",
    "visa policy changes 2026",
    // Country specific
    "Canada visa news 2026",
    "UK visa updates Bangladesh",
    "USA visa news Bangladesh",
    "Dubai visa updates 2026",
    "Schengen visa news",
    "Australia immigration news",
    "India e-visa news Bangladesh",
    // Travel
    "flight updates international Bangladesh",
    "travel restrictions 2026",
    "tourism news 2026",
    "work permit news Bangladesh",
    "student visa news Bangladesh",
    // Education
    "scholarship news Bangladesh 2026",
    "IELTS update news",
    "study abroad news Bangladesh",
    // Brand
    "Eammu Holidays news",
    "Eammu Holidays visa updates",
    "best travel news Bangladesh",
    "trusted visa agency news Bangladesh",
  ],

  alternates: {
    canonical: "https://eammu.com/news-feeds",
    languages: {
      "en-US": "https://eammu.com/news-feeds",
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
    url: "https://eammu.com/news-feeds",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title:
      "Latest Travel News, Visa Updates & Immigration Alerts 2026 | Eammu Holidays",
    description:
      "Daily visa news, embassy alerts, immigration policy updates, and scholarship announcements for Canada, UK, USA, Dubai, Schengen & Australia — from Bangladesh's most trusted travel agency.",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays – Latest Travel News and Visa Updates Bangladesh 2026",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "Travel News & Visa Updates 2026 | Eammu Holidays Bangladesh",
    description:
      "Stay ahead with daily visa policy updates, immigration news, embassy alerts, and scholarship announcements from Eammu Holidays.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
    shortcut: "/emf.jpg",
    apple: "/emf.jpg",
  },

  category: "travel",
};

// ─── Structured Data ───────────────────────────────────────────────────────────
const newsMediaSchema = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  name: "Eammu Holidays Newsfeeds",
  url: "https://eammu.com/news-feeds",
  logo: "https://eammu.com/emf.jpg",
  description:
    "Daily travel news, visa policy updates, immigration alerts, and scholarship announcements for Bangladeshi travellers — powered by Eammu Holidays.",
  publishingPrinciples: "https://eammu.com/about",
  parentOrganization: {
    "@type": "TravelAgency",
    name: "Eammu Holidays",
    url: "https://eammu.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
    { "@type": "ListItem", position: 2, name: "News Feeds", item: "https://eammu.com/news-feeds" },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Latest Travel News & Visa Updates 2026 | Eammu Holidays",
  url: "https://eammu.com/news-feeds",
  description:
    "Stay updated with the latest visa policy changes, immigration news, embassy alerts, scholarship announcements, and travel insights from Bangladesh's most trusted travel agency.",
  publisher: {
    "@type": "Organization",
    name: "Eammu Holidays",
    logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
      { "@type": "ListItem", position: 2, name: "News Feeds", item: "https://eammu.com/news-feeds" },
    ],
  },
};

// ─── Static data ───────────────────────────────────────────────────────────────
const topics = [
  { icon: <Globe2 />, label: "Policy", color: "bg-blue-500" },
  { icon: <GraduationCap />, label: "Scholarship", color: "bg-purple-500" },
  { icon: <PlaneTakeoff />, label: "Flights", color: "bg-orange-500" },
  { icon: <Newspaper />, label: "Embassy", color: "bg-green-600" },
];

const infoCards = [
  {
    title: "🌍 Global Immigration Updates",
    description:
      "Breaking visa rule changes for USA, Canada, UK, Schengen, and other countries will be published here as they happen — keeping Bangladeshi travellers ahead of policy shifts.",
    items: ["Visa Policy Changes", "Work Permit Updates", "Embassy Alerts"],
  },
  {
    title: "🎓 Student Success & Scholarship Alerts",
    description:
      "Detailed guides on securing student visas, applying for international scholarships, and study abroad opportunities for Bangladesh students in 2026.",
    items: ["IELTS / PTE Tips", "Bank Statement Guides", "USA & Canada Interview Prep"],
  },
  {
    title: "✈️ Flight & Travel News",
    description:
      "Stay on top of international flight schedule changes, new route launches, airline policy updates, and travel advisories affecting Bangladeshi passengers.",
    items: ["New Flight Routes", "Airline Policy Updates", "Travel Advisories"],
  },
  {
    title: "🛂 Visa Rejection & Recovery",
    description:
      "Expert advice on handling visa rejections, refusal letters, and reapplication strategies for Canada, UK, USA, Schengen, and Dubai from Bangladesh.",
    items: ["Rejection Analysis", "Reapplication Guide", "Appeal Strategies"],
  },
];

const quickLinks = [
  { label: "All Visa Services", href: "/visa" },
  { label: "Visa Guide", href: "/visa/visa-guide" },
  { label: "Study Abroad", href: "/study-abroad" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "IELTS Center", href: "/target-ielts-immigration-center" },
  { label: "USA Interview Prep", href: "/target-usa-visa-interview-preparation" },
  { label: "Visa Rejection Help", href: "/visa-rejection" },
  { label: "Visa Checklist", href: "/travel-resources/visa-checklist-generator" },
  { label: "Processing Tracker", href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Our Blog", href: "/blogs" },
];

// ─── Helper Components ─────────────────────────────────────────────────────────
const TopicIcon = ({ icon, label, color }) => (
  <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-50 flex flex-col items-center justify-center gap-3 group hover:-translate-y-2 transition-transform">
    <div
      className={`${color} text-white p-3 rounded-2xl shadow-lg group-hover:rotate-12 transition-transform`}
      aria-hidden="true"
    >
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
      {label}
    </span>
  </div>
);

const InfoCard = ({ title, description, items }) => (
  <article
    className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col justify-between group hover:shadow-2xl hover:border-green-100 transition-all"
    itemScope
    itemType="https://schema.org/Article"
  >
    <div>
      <h3
        className="text-xl font-black text-[#005a31] mb-4 flex items-center gap-3"
        itemProp="headline"
      >
        <span className="w-2 h-8 bg-orange-500 rounded-full flex-shrink-0" aria-hidden="true" />
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5" itemProp="description">
        {description}
      </p>
      <ul className="space-y-2.5" aria-label={`Topics under ${title}`}>
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-gray-700 font-semibold text-sm"
          >
            <ArrowRight size={15} className="text-orange-500 flex-shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </article>
);

// ─── Page ──────────────────────────────────────────────────────────────────────
const EammuNewsfeeds = () => {
  return (
    <>
      {/* JSON-LD: NewsMediaOrganization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsMediaSchema) }}
      />
      {/* JSON-LD: Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* JSON-LD: WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Hidden semantic block for crawlers */}
      <div className="sr-only" aria-hidden="true">
        <h1>
          Latest Travel News, Visa Updates & Immigration Alerts 2026 — Eammu Holidays Bangladesh
        </h1>
        <p>
          Eammu Holidays publishes daily travel news, visa policy updates, embassy alerts,
          immigration news, scholarship announcements, and flight updates for Bangladeshi
          travellers. Covering Canada, UK, USA, Dubai, Schengen, Australia, and India visas.
          Trusted by 5,000+ clients since 2015.
        </p>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://eammu.com">Home</a></li>
            <li><a href="https://eammu.com/news-feeds">News Feeds</a></li>
          </ol>
        </nav>
      </div>

      <main className="min-h-screen bg-[#f8fafc]">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section
          className="relative h-[420px] flex items-center justify-center overflow-hidden bg-[#005a31]"
          aria-label="Eammu Holidays news feeds hero"
        >
          <div className="absolute inset-0 opacity-15" aria-hidden="true">
            <img
              src="https://img.freepik.com/premium-vector/travel-time-vector-banner-design-time-travel-text-with-travelling-elements_572293-801.jpg"
              alt=""
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex justify-center gap-2 text-xs text-green-300 flex-wrap">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-green-500" aria-hidden="true">/</li>
                <li className="text-white font-semibold" aria-current="page">
                  News Feeds
                </li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
              <Sparkles size={13} aria-hidden="true" /> Daily Updates · Launching Soon
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter leading-tight">
              Eammu{" "}
              <span className="text-orange-400">Newsfeeds</span>
            </h1>

            <p className="text-base md:text-lg text-green-50/90 max-w-3xl mx-auto font-medium leading-relaxed mb-2">
              Bangladesh's most trusted source for{" "}
              <strong className="text-white">visa policy updates</strong>,{" "}
              <strong className="text-white">immigration news</strong>,{" "}
              <strong className="text-white">embassy alerts</strong>, and{" "}
              <strong className="text-white">travel insights</strong> — covering Canada, UK, USA,
              Dubai, Schengen &amp; more.
            </p>
            <p className="text-sm text-green-200/70">
              আপনার গ্লোবাল জার্নির জন্য লেটেস্ট ভিসা পলিসি ও ইমিগ্রেশন আপডেট এখন এক জায়গায়।
            </p>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-4 -mt-16 relative z-20 pb-20">

          {/* ── COMING SOON CARD ──────────────────────────────────────────── */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-green-900/10 border border-slate-100 mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1 space-y-5 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#005a31] font-bold text-sm">
                  <BellRing size={16} className="animate-pulse" aria-hidden="true" />
                  <span>Launching Very Soon!</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-gray-800 leading-tight">
                  We are building a world-class{" "}
                  <span className="text-orange-500">Visa & Travel News Portal</span> for Bangladesh.
                </h2>

                <p className="text-gray-500 text-base leading-relaxed">
                  At Eammu Holidays, we believe{" "}
                  <strong className="text-gray-700">information is power</strong>. Our upcoming
                  editorial portal will cover breaking{" "}
                  <strong className="text-[#005a31]">Canada, UK, USA &amp; Dubai visa news</strong>,
                  real-time{" "}
                  <strong className="text-[#005a31]">immigration policy changes</strong>,
                  scholarship alerts, IELTS updates, and expert travel insights — all in one place
                  for Bangladeshi travellers.
                </p>

                {/* SEO keyword list — crawlable, styled as tags */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
                  {[
                    "Visa Updates 2026",
                    "Canada Immigration News",
                    "UK Visa Alerts",
                    "USA Embassy News",
                    "Dubai Visa Policy",
                    "Schengen Travel News",
                    "Scholarship Alerts",
                    "IELTS News",
                    "Work Permit Updates",
                    "Flight News Bangladesh",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-green-50 text-[#005a31] text-xs font-semibold px-3 py-1 rounded-full border border-green-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
                  <button
                    className="bg-[#005a31] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-orange-500 transition-all shadow-lg active:scale-95"
                    aria-label="Notify me when news feeds launches"
                  >
                    Notify Me <BellRing size={17} aria-hidden="true" />
                  </button>
                  <Link
                    href="/"
                    className="bg-slate-100 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                    aria-label="Go back to Eammu Holidays homepage"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>

              {/* Topic Icons */}
              <div
                className="w-full lg:w-1/3 grid grid-cols-2 gap-4"
                aria-label="News topics"
              >
                {topics.map((t) => (
                  <TopicIcon key={t.label} icon={t.icon} label={t.label} color={t.color} />
                ))}
              </div>
            </div>
          </div>

          {/* ── INFO CARDS GRID ────────────────────────────────────────────── */}
          <section aria-label="Upcoming news categories">
            <h2 className="text-2xl font-black text-[#005a31] mb-8 text-center">
              What We Will <span className="text-orange-500">Cover</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {infoCards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
          </section>

          {/* ── SEO CONTENT BLOCK ──────────────────────────────────────────── */}
          <section
            className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm mb-14"
            aria-label="About Eammu Holidays news coverage"
          >
            <h2 className="text-2xl font-black text-[#005a31] mb-4">
              Why Follow Eammu Holidays for{" "}
              <span className="text-orange-500">Visa & Travel News?</span>
            </h2>
            <div className="prose prose-sm max-w-none text-gray-500 leading-relaxed space-y-4">
              <p>
                Eammu Holidays is Bangladesh's most trusted travel and visa consultancy,
                serving <strong className="text-gray-700">5,000+ clients</strong> since 2015
                with a{" "}
                <strong className="text-gray-700">98% visa success rate</strong>. Our team of
                certified visa experts and immigration consultants monitor policy changes daily
                across <strong className="text-gray-700">30+ countries</strong> — including
                Canada, UK, USA, Schengen, Dubai/UAE, Australia, and India.
              </p>
              <p>
                Our upcoming <strong className="text-gray-700">Newsfeeds portal</strong> will
                be the go-to destination for Bangladeshi travellers who need{" "}
                <strong className="text-gray-700">
                  real-time visa updates, embassy notifications, scholarship deadlines,
                  immigration policy changes, and flight news
                </strong>{" "}
                — curated and verified by professionals with years of on-ground experience.
              </p>
              <p>
                Whether you are applying for a{" "}
                <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">
                  tourist or student visa
                </Link>
                , preparing for a{" "}
                <Link href="/target-usa-visa-interview-preparation" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">
                  USA visa interview
                </Link>
                , or looking for{" "}
                <Link href="/scholarships" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">
                  international scholarships
                </Link>
                , Eammu Holidays Newsfeeds will keep you informed and ahead.
              </p>
            </div>
          </section>

          {/* ── QUICK LINKS ────────────────────────────────────────────────── */}
          <section aria-label="Explore other Eammu Holidays services">
            <h2 className="text-xl font-black text-[#005a31] mb-5 text-center">
              Explore Our <span className="text-orange-500">Visa & Travel Services</span>
            </h2>
            <nav
              className="flex flex-wrap justify-center gap-3"
              aria-label="Quick links to Eammu Holidays services"
            >
              {quickLinks.map((lnk) => (
                <Link
                  key={lnk.href}
                  href={lnk.href}
                  className="bg-white border border-gray-200 hover:border-[#005a31] hover:text-[#005a31] text-gray-600 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm hover:shadow"
                  aria-label={lnk.label}
                >
                  {lnk.label}
                </Link>
              ))}
            </nav>
          </section>
        </div>
      </main>
      <HomeSeoLinks />
    </>
  );
};

export default EammuNewsfeeds;