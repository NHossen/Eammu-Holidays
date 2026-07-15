"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FlashDealsCarousel from "./FlashDealsCarousel/FlashDealsCarousel";
import OfferBackgroundSlider from "./OfferBackgroundSlider/OfferBackgroundSlider";
import { useState } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const offers = [
  {
    id: 1,
    title: "Summer Special — 15% Off All Tours",
    slug: "summer-special-discount",
    badge: "15% OFF",
    badgeColor: "bg-[#ffcc00] text-[#005a31]",
    category: "Holiday Tour",
    description:
      "Get 15% off on all international tour packages booked before July 31, 2026. Includes Dubai, Europe, Thailand, Malaysia, Turkey, Georgia — with hotel + visa support bundled.",
    image: "/summer-offer.avif",
    tags: ["Dubai", "Europe", "Thailand", "Malaysia"],
    validUntil: "July 31, 2026",
    highlight: true,
    saving: "Save up to BDT 18,000",
    icon: "☀️",
  },
  {
    id: 2,
    title: "Student Visa Processing Promo",
    slug: "student-visa-promo",
    badge: "$100 OFF",
    badgeColor: "bg-blue-600 text-white",
    category: "Visa Processing",
    description:
      "Flat $100 off on student visa processing fees for UK, USA, Canada, and Australia. Includes full documentation review, SOP writing support, and interview preparation — no hidden charges.",
    image: "/limited-offer.webp",
    tags: ["UK", "USA", "Canada", "Australia"],
    validUntil: "Limited Time",
    highlight: false,
    saving: "Save $100 on fees",
    icon: "🎓",
  },
  {
    id: 3,
    title: "Early Bird International Flight Deal",
    slug: "early-bird-flight-deal",
    badge: "SAVE 20%",
    badgeColor: "bg-orange-500 text-white",
    category: "Flights",
    description:
      "Book international air tickets 3 months in advance and save up to 20% on flights from Bangladesh to Dubai, UK, USA, Canada, Malaysia, Thailand, and Europe. Best rates guaranteed.",
    image: "/offer-eammu-travel-agency-bangladesh-dhaka.webp",
    tags: ["International Flights", "Bangladesh", "Early Bird"],
    validUntil: "Ongoing",
    highlight: false,
    saving: "Save up to 20%",
    icon: "✈️",
  },
  {
    id: 4,
    title: "Family Tour Group Package Deal",
    slug: "family-tour-package",
    badge: "GROUP DEAL",
    badgeColor: "bg-purple-600 text-white",
    category: "Family Tour",
    description:
      "Book for 4+ family members and enjoy exclusive group pricing on international holiday packages. Dubai, Thailand, Malaysia, Europe — more family, more savings, zero hassle.",
    image: "/friends-family-offer.avif",
    tags: ["Family", "Group Tour", "Dubai", "Holiday"],
    validUntil: "Ongoing",
    highlight: false,
    saving: "Custom group pricing",
    icon: "👨‍👩‍👧",
  },
  {
    id: 5,
    title: "Fast Track Visa — Zero Extra Charge",
    slug: "fast-track-visa",
    badge: "ZERO FEE",
    badgeColor: "bg-red-600 text-white",
    category: "Visa Processing",
    description:
      "Fast track your visa application at zero extra processing charge. Available for UAE, UK, Schengen, Canada, and more — with guaranteed embassy submission within 48 hours.",
    image: "/best-travel-agency-bangladesh-offer.webp",
    tags: ["Fast Track", "UAE", "Schengen", "UK", "Canada"],
    validUntil: "Limited — June 2026",
    highlight: false,
    saving: "Zero extra fees",
    icon: "⚡",
  },
  {
    id: 6,
    title: "Exclusive Promo Travel Deals 2026",
    slug: "travel-promo-2026",
    badge: "HOT DEAL",
    badgeColor: "bg-[#005a31] text-white",
    category: "Promo",
    description:
      "Exclusive 2026 promo packages — zero extra visa charge for select months, best rates for international tours from Bangladesh. Dubai, Europe, Southeast Asia, and Umrah packages included.",
    image: "/travel-promo-deals-travel-agency-offer-bangladesh.webp",
    tags: ["International", "Umrah", "Europe", "Promo 2026"],
    validUntil: "2026",
    highlight: false,
    saving: "Bundle savings available",
    icon: "🔥",
  },
];

// SEO-enriched visa offer types — linkable to real pages
const VISA_OFFER_LINKS = [
  {
    icon: "🎓", label: "Student Visa Offer",
    desc: "$100 off documentation fees",
    href: "/our-services/visa-services/student-visa-from-bangladesh",
    badge: "$100 OFF",
    badgeClass: "bg-blue-100 text-blue-700",
  },
  {
    icon: "🏖️", label: "Tourist Visa Deal",
    desc: "Fast track at zero extra charge",
    href: "/our-services/visa-services/tourist-visa-from-bangladesh",
    badge: "ZERO FEE",
    badgeClass: "bg-red-100 text-red-700",
  },
  {
    icon: "💼", label: "Work Visa Promo",
    desc: "Professional processing bundled",
    href: "/our-services/visa-services/work-visa-from-bangladesh",
    badge: "PROMO",
    badgeClass: "bg-purple-100 text-purple-700",
  },
  {
    icon: "🇪🇺", label: "Schengen Visa Deal",
    desc: "Europe multi-country — expert support",
    href: "/schengen-visa",
    badge: "BUNDLE",
    badgeClass: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: "🇨🇦", label: "Canada Visa Offer",
    desc: "Full document package — discounted",
    href: "/our-services/visa/canada-visa-application",
    badge: "SAVE NOW",
    badgeClass: "bg-green-100 text-green-700",
  },
  {
    icon: "🇬🇧", label: "UK Visa Promo",
    desc: "UK Standard Visitor — bundled support",
    href: "/our-services/visa/uk-visa-application",
    badge: "PROMO",
    badgeClass: "bg-slate-100 text-slate-700",
  },
  {
    icon: "🇺🇸", label: "USA Visa Deal",
    desc: "B1/B2 + Interview coaching",
    href: "/our-services/visa/usa-visa-application",
    badge: "COACHING",
    badgeClass: "bg-blue-100 text-blue-700",
  },
  {
    icon: "🇦🇪", label: "Dubai Visa Offer",
    desc: "UAE visa — 3–5 day processing",
    href: "/our-services/visa/dubai-visa-application",
    badge: "FAST",
    badgeClass: "bg-orange-100 text-orange-700",
  },
];

// Popular destinations with real internal links
const POPULAR_DESTINATIONS = [
  { name: "Dubai, UAE",    icon: "🏙️", deal: "Tour from BDT 65,000", href: "/our-services/visa/dubai-visa-application" },
  { name: "Thailand",      icon: "🌴", deal: "Package from BDT 45,000", href: "/our-services/visa/thailand-visa-application" },
  { name: "Malaysia",      icon: "🇲🇾", deal: "Package from BDT 50,000", href: "/our-services/visa/malaysia-visa-application" },
  { name: "Georgia",       icon: "🇬🇪", deal: "Visa-free · BDT 55,000", href: "/our-services/visa/georgia-visa-application" },
  { name: "UK",            icon: "🇬🇧", deal: "Student Visa + Tour", href: "/our-services/visa/uk-visa-application" },
  { name: "Maldives",      icon: "🐠", deal: "Resort from BDT 70,000", href: "/our-services/tour-packages" },
  { name: "Canada",        icon: "🇨🇦", deal: "Full visa package", href: "/our-services/visa/canada-visa-application" },
  { name: "Turkey",        icon: "🇹🇷", deal: "eVisa + Tour bundle", href: "/our-services/visa/turkey-visa-application" },
  { name: "Singapore",     icon: "🇸🇬", deal: "Package from BDT 60,000", href: "/our-services/visa/singapore-visa-application" },
  { name: "South Korea",   icon: "🇰🇷", deal: "K-tour + visa bundle", href: "/our-services/visa/south-korea-visa-application" },
  { name: "Australia",     icon: "🇦🇺", deal: "Student visa promo", href: "/our-services/visa/australia-visa-application" },
  { name: "Japan",         icon: "🇯🇵", deal: "Tour from BDT 90,000", href: "/our-services/visa/japan-visa-application" },
];

const WHY_BOOK = [
  { icon: "🏆", title: "95% Visa Success Rate",        desc: "One of Bangladesh's highest embassy approval rates across 195+ countries." },
  { icon: "💰", title: "Best Price Guarantee",          desc: "We match or beat any comparable deal from another licensed agency — guaranteed." },
  { icon: "⚡", title: "48-Hour Processing",             desc: "Same-day WhatsApp confirmation on most bookings. Embassy submissions within 48 hours." },
  { icon: "🔒", title: "Zero Hidden Charges",           desc: "Fully licensed agency. Transparent pricing, signed agreement, no surprise fees." },
  { icon: "🌍", title: "4 Global Offices",              desc: "Dhaka, Dubai, Armenia, Georgia — local support wherever you are." },
  { icon: "🕐", title: "24/7 WhatsApp Support",         desc: "Expert consultants on standby around the clock for urgent visa and travel queries." },
];

const DEAL_FAQS = [
  {
    q: "What visa processing deals does Eammu Holidays offer in 2026?",
    a: "We offer: $100 off student visa processing fees (UK, USA, Canada, Australia), zero extra fast-track fee for UAE, UK, and Schengen visas, bundled document preparation for tourist and work visas, and early bird flight booking discounts of up to 20%. All deals include full professional documentation support with zero hidden charges.",
  },
  {
    q: "Is there a discount for UK or Schengen visa applications from Bangladesh?",
    a: "Yes. Our Fast Track Visa Offer waives extra processing charges for UK Standard Visitor Visas and Schengen visas. We also offer bundled packages that include documentation review, cover letter writing, and embassy submission support — at no additional fee during promo periods.",
  },
  {
    q: "Does Eammu Holidays offer student visa processing discounts for Canada, UK, USA, and Australia?",
    a: "Yes. Our Student Visa Promo gives a flat $100 off processing fees for UK, USA, Canada, and Australia student visa applications. This includes full documentation preparation, SOP (Statement of Purpose) writing support, financial document review, and interview preparation — everything you need in one package.",
  },
  {
    q: "Are there any Umrah or Hajj package deals from Bangladesh?",
    a: "Yes. We regularly run Umrah package promotions including early booking discounts and all-inclusive group rates covering visa, flights, hotel in Makkah and Madinah, and ground transport. Contact us via WhatsApp for the latest Umrah deal availability.",
  },
  {
    q: "How do I claim an offer or travel deal from Eammu Holidays?",
    a: "Contact us via WhatsApp (+971507078334) or email (info@eammu.com) mentioning the offer name. Our team confirms availability and guides you through booking — typically within 2 hours. Deals are subject to availability and stated validity periods.",
  },
  {
    q: "Do group or family travel bookings get special deals?",
    a: "Absolutely. Groups of 4+ family members receive exclusive discounts on international holiday packages to Dubai, Europe, Thailand, and Malaysia. Corporate groups and school tour groups also qualify for custom pricing. Contact us for a group-specific quote.",
  },
  {
    q: "Can I combine a visa processing deal with a tour package?",
    a: "Yes — this is our most popular offering. We bundle visa processing (tourist, student, or work visa) with hotel booking, flight tickets, and travel insurance into a single all-inclusive package at a lower combined rate than booking separately. Available for Dubai, UK, Canada, Schengen, and Southeast Asia.",
  },
  {
    q: "What is included in the 15% summer discount on international tours?",
    a: "The Summer Special Discount applies to all international holiday tour packages booked before the offer deadline. It covers the package price (which typically includes visa support, hotel accommodation, and guided itinerary). Air tickets and personal expenses are separate unless specified. Destinations include Dubai, Europe, Thailand, Malaysia, and Georgia.",
  },
];

// All internal links for SEO footer
const INTERNAL_LINKS = [
  { label: "Visa Guide 2026",                     href: "/visa/visa-guide" },
  { label: "All Visa Services",                   href: "/visa" },
  { label: "Tourist Visa from Bangladesh",         href: "/our-services/visa-services/tourist-visa-from-bangladesh" },
  { label: "Student Visa from Bangladesh",         href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { label: "Work Visa from Bangladesh",            href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { label: "Schengen Visa Guide",                  href: "/schengen-visa" },
  { label: "E-Visa Countries",                     href: "/visa/e-visa" },
  { label: "Visa Rejection Checker",               href: "/visa-rejection" },
  { label: "Visa Checklist Generator",             href: "/travel-resources/visa-checklist-generator" },
  { label: "Processing Time Tracker",              href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Travel Document Generator",            href: "/travel-resources/travel-document-generator" },
  { label: "Study Abroad Guide",                   href: "/study-abroad" },
  { label: "Scholarships by Country",              href: "/scholarships" },
  { label: "Tour Packages",                        href: "/our-services/tour-packages" },
  { label: "Flight Booking",                       href: "/flight-booking" },
  { label: "IELTS & Immigration Center",           href: "/target-ielts-immigration-center" },
  { label: "USA Visa Interview Prep",              href: "/target-usa-visa-interview-preparation" },
  { label: "Dubai Office",                         href: "/contact/travel-agency-dubai" },
  { label: "Bangladesh Office",                    href: "/contact/travel-agency-bangladesh" },
];

const BREADCRUMB = [
  { label: "Home",   href: "/" },
  { label: "Offers" },
];

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/* ─────────────────────────────────────────────
   OFFER CARD
───────────────────────────────────────────── */
const OfferCard = ({ offer }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className={`group bg-white rounded-[2.5rem] overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl flex flex-col h-full ${
      offer.highlight
        ? "border-[#ffcc00] shadow-lg shadow-yellow-100"
        : "border-gray-100 shadow-sm hover:border-[#005a31]/20"
    }`}
    itemScope
    itemType="https://schema.org/Offer"
  >
    {/* Image */}
    <Link
      href={`/offers/${offer.slug}`}
      className="block relative h-52 overflow-hidden"
      aria-label={`View ${offer.title} deal details`}
    >
      <Image
        src={offer.image}
        alt={`${offer.title} — Eammu Holidays travel deal Bangladesh 2026`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        itemProp="image"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Badges */}
      <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
        <span className={`text-xs font-black px-3 py-1.5 rounded-full shadow-md ${offer.badgeColor}`}>
          {offer.icon} {offer.badge}
        </span>
        {offer.highlight && (
          <span className="text-xs font-black px-3 py-1.5 rounded-full bg-[#005a31] text-white shadow-md">
            ⭐ Featured
          </span>
        )}
      </div>

      {/* Category */}
      <div className="absolute bottom-3 right-3">
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[#005a31]">
          {offer.category}
        </span>
      </div>

      {/* Saving pill */}
      <div className="absolute bottom-3 left-3">
        <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-black/60 text-[#ffcc00] backdrop-blur">
          {offer.saving}
        </span>
      </div>
    </Link>

    {/* Content */}
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex items-center gap-1.5 mb-2 text-xs text-gray-400 font-semibold">
        <span>⏰</span>
        <span>Valid: <strong className="text-[#005a31]">{offer.validUntil}</strong></span>
      </div>

      <h2
        itemProp="name"
        className="text-base font-black text-[#005a31] mb-2 tracking-tight group-hover:text-black transition-colors leading-snug"
      >
        {offer.title}
      </h2>

      <p
        itemProp="description"
        className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3 flex-grow"
      >
        {offer.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {offer.tags.map((tag) => (
          <span key={tag} className="text-[10px] px-2 py-0.5 bg-green-50 text-[#005a31] rounded-full font-bold border border-green-100">
            {tag}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-2">
        <a
          href="https://wa.me/8801701699743"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Book ${offer.title} via WhatsApp`}
          className="w-full bg-[#005a31] text-white py-3 rounded-xl font-black text-center text-xs uppercase tracking-wider hover:bg-[#ffcc00] hover:text-[#005a31] transition-all shadow-sm"
          itemProp="url"
        >
          💬 Book via WhatsApp
        </a>
        <Link
          href={`/offers/${offer.slug}`}
          className="w-full bg-gray-50 border border-gray-100 text-gray-600 py-2.5 rounded-xl font-bold text-center text-xs uppercase tracking-wider hover:bg-[#005a31]/5 hover:text-[#005a31] transition-all"
        >
          View Full Details →
        </Link>
      </div>
    </div>
  </motion.article>
);

/* ─────────────────────────────────────────────
   FAQ ITEM
───────────────────────────────────────────── */
const FaqItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`bg-white rounded-2xl border-2 overflow-hidden transition-all ${
        open ? "border-[#ffcc00] shadow-lg shadow-yellow-50" : "border-gray-100 hover:border-green-100"
      }`}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-5 flex items-start justify-between gap-4 text-left focus:outline-none group"
        aria-expanded={open}
      >
        <span
          itemProp="name"
          className={`font-bold text-sm leading-snug transition-colors ${open ? "text-[#005a31]" : "text-gray-800 group-hover:text-[#005a31]"}`}
        >
          {faq.q}
        </span>
        <span className={`shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center font-black text-sm transition-all ${
          open ? "border-[#005a31] bg-[#ffcc00] text-[#005a31] rotate-45" : "border-gray-200 text-gray-400"
        }`}>
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <p itemProp="text" className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-l-4 border-[#ffcc00] ml-5">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Offers = () => {
  return (
    <main
      className="min-h-screen bg-white font-sans overflow-x-hidden"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* Hidden SEO meta */}
      <meta itemProp="name" content="Best Visa & Travel Deals 2026 | Eammu Holidays Bangladesh" />
      <meta
        itemProp="description"
        content="Exclusive 2026 visa processing deals, student visa discounts, Schengen visa offers, Umrah packages, and international tour deals from Eammu Holidays Bangladesh. Zero hidden charges."
      />

      {/* ── HERO SLIDER ── */}
      <OfferBackgroundSlider />

      {/* ── QUICK CONTACT STRIP ── */}
      <section aria-label="Quick contact for travel and visa deals" className="bg-[#005a31] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-5 md:gap-10 text-white text-xs md:text-sm">
            <a href="tel:+971507078334" className="flex items-center gap-2 font-bold hover:text-[#ffcc00] transition">
              📞 +971507078334
            </a>
            <a href="https://wa.me/8801701699743" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold hover:text-[#ffcc00] transition">
              💬 WhatsApp 24/7 — Claim Any Deal
            </a>
            <a href="mailto:info@eammu.com" className="flex items-center gap-2 font-bold hover:text-[#ffcc00] transition">
              ✉️ info@eammu.com
            </a>
            <span className="flex items-center gap-2 opacity-80">🌍 4 Global Offices — BD · Dubai · Armenia · Georgia</span>
          </div>
        </div>
      </section>

      {/* ── FLASH DEALS CAROUSEL ── */}
      <FlashDealsCarousel />

      {/* ── BREADCRUMB ── */}
      <nav aria-label="breadcrumb" className="bg-gray-50 border-b border-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto flex gap-1.5 items-center text-xs text-gray-400">
          {BREADCRUMB.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {c.href
                ? <Link href={c.href} className="hover:text-[#005a31] transition font-semibold">{c.label}</Link>
                : <span className="text-gray-800 font-black">{c.label}</span>
              }
              {i < BREADCRUMB.length - 1 && <span className="text-gray-300">›</span>}
            </span>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-20">

        {/* ══════════════════════════════════════════
            SEO HERO TEXT — keyword-rich, crawlable
        ══════════════════════════════════════════ */}
        <section aria-label="Best visa and travel deals from Eammu Holidays Bangladesh 2026">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 via-yellow-50/40 to-white rounded-[2rem] border-2 border-green-100 p-8 md:p-12 space-y-5"
          >
            {/* Badge */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffcc00] text-[#005a31] rounded-full text-[10px] font-black uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-[#005a31] rounded-full animate-pulse" />
                Limited Time Offers — Updated 2026
              </span>
              <span className="text-xs text-gray-400 font-semibold">Verified · Zero hidden charges</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              Best Visa &amp; Travel Deals 2026 —{" "}
              <span className="text-[#005a31]">Exclusive Offers from Bangladesh</span>
            </h1>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-4xl seo-speakable">
              Eammu Holidays brings Bangladesh's most exclusive visa processing deals and travel offers — including{" "}
              <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-[#005a31] font-bold hover:underline">
                student visa processing discounts
              </Link>{" "}
              for UK, USA, Canada, and Australia; zero-fee{" "}
              <Link href="/our-services/visa-services/tourist-visa-from-bangladesh" className="text-[#005a31] font-bold hover:underline">
                tourist visa fast-track offers
              </Link>
              ; early bird{" "}
              <Link href="/flight-booking" className="text-[#005a31] font-bold hover:underline">
                international flight deals
              </Link>
              ; family group tour discounts; and{" "}
              <Link href="/schengen-visa" className="text-[#005a31] font-bold hover:underline">
                Schengen visa bundle packages
              </Link>
              . Every deal includes professional documentation support — no hidden fees.
            </p>

            <p className="text-gray-500 leading-relaxed text-sm max-w-4xl">
              With a <strong className="text-gray-700">95% visa approval rate</strong>,{" "}
              <strong className="text-gray-700">42,000+ travelers helped</strong>, and offices in{" "}
              <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-bold hover:underline">Bangladesh</Link>,{" "}
              <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-bold hover:underline">Dubai</Link>,{" "}
              <Link href="/contact/travel-agency-armenia" className="text-[#005a31] font-bold hover:underline">Armenia</Link>, and{" "}
              <Link href="/contact/travel-agency-georgia" className="text-[#005a31] font-bold hover:underline">Georgia</Link> —
              Eammu Holidays guarantees transparent pricing and real results on every booking.
            </p>

            {/* Deal type tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "🎓 Student Visa $100 OFF",
                "☀️ 15% Summer Tour Discount",
                "✈️ Early Bird Flights 20% OFF",
                "👨‍👩‍👧 Family Group Deals",
                "⚡ Fast Track Visa — Zero Fee",
                "🕌 Umrah Package Promos",
                "🇪🇺 Schengen Visa Bundle",
                "🔥 Exclusive 2026 Promos",
              ].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 bg-white border border-green-100 text-[#005a31] font-bold rounded-full shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Quick nav links */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { label: "Visa Guide",              href: "/visa/visa-guide" },
                { label: "Rejection Checker",       href: "/visa-rejection" },
                { label: "Processing Times",        href: "/travel-resources/visa-processing-time-tracker" },
                { label: "Study Abroad",            href: "/study-abroad" },
                { label: "Tour Packages",           href: "/our-services/tour-packages" },
                { label: "Flight Booking",          href: "/flight-booking" },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="text-xs font-semibold text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full hover:border-[#005a31] hover:text-[#005a31] transition">
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════
            VISA OFFER QUICK LINKS — real page links
        ══════════════════════════════════════════ */}
        <section aria-label="Visa processing deals by visa type">
          <div className="flex items-center gap-4 mb-7">
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 shrink-0">Visa Deals by Type</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {VISA_OFFER_LINKS.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="group flex flex-col items-center gap-2 p-4 bg-white border-2 border-gray-100 rounded-2xl text-center hover:border-[#ffcc00] hover:shadow-lg hover:shadow-yellow-50 transition-all"
              >
                <span className="text-2xl" aria-hidden="true">{v.icon}</span>
                <span className="text-[10px] font-black text-gray-700 group-hover:text-[#005a31] transition leading-snug">{v.label}</span>
                <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${v.badgeClass}`}>{v.badge}</span>
                <span className="text-[8px] text-gray-400 leading-tight hidden sm:block">{v.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            WHY BOOK WITH US
        ══════════════════════════════════════════ */}
        <section aria-label="Why book your visa or travel deal with Eammu Holidays">
          <div className="text-center space-y-3 mb-10">
            <span className="text-[#005a31] text-[10px] font-black uppercase tracking-[0.2em]">Why Choose Eammu</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              Why 42,000+ Travelers Choose Eammu Holidays
            </h2>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {WHY_BOOK.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-sm hover:shadow-md hover:border-[#ffcc00]/60 transition-all group"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-black text-gray-800 text-sm mb-1.5 group-hover:text-[#005a31] transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════
            ALL OFFER CARDS
        ══════════════════════════════════════════ */}
        <section
          aria-label="All travel and visa deals from Eammu Holidays Bangladesh 2026"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <div className="text-center space-y-3 mb-10">
            <span className="text-[#005a31] text-[10px] font-black uppercase tracking-[0.2em]">Limited Time</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
              All Active Deals
            </h2>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              Visa processing discounts, tour packages, flight offers, and Umrah promos — all from one trusted agency.
            </p>
            <div className="w-20 h-1.5 bg-[#ffcc00] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {offers.map((offer, i) => (
              <div key={offer.id} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <meta itemProp="position" content={String(i + 1)} />
                <OfferCard offer={offer} />
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            POPULAR DESTINATIONS — all linked
        ══════════════════════════════════════════ */}
        <section aria-label="Popular travel destinations with visa deals from Bangladesh">
          <div className="text-center space-y-3 mb-10">
            <span className="text-[#005a31] text-[10px] font-black uppercase tracking-[0.2em]">Top Picks 2026</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              Popular Destinations — Active Visa &amp; Tour Deals
            </h2>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {POPULAR_DESTINATIONS.map((dest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  href={dest.href}
                  className="flex flex-col items-center p-4 bg-white rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-lg hover:border-[#ffcc00] text-center transition-all group block"
                  aria-label={`${dest.name} visa deal — ${dest.deal}`}
                >
                  <div className="text-3xl mb-2" aria-hidden="true">{dest.icon}</div>
                  <h3 className="font-black text-gray-800 text-xs mb-1 group-hover:text-[#005a31] transition-colors leading-tight">
                    {dest.name}
                  </h3>
                  <p className="text-[9px] text-[#005a31] font-bold leading-snug">{dest.deal}</p>
                  <span className="text-[8px] text-gray-400 mt-1 group-hover:text-[#005a31] transition-colors font-semibold">View deal →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SEO CONTENT BLOCK — keyword-rich prose
        ══════════════════════════════════════════ */}
        <section
          aria-label="Visa and travel deal information for Bangladesh 2026"
          className="bg-gradient-to-br from-gray-50 to-white rounded-[2rem] border-2 border-gray-100 p-8 md:p-12"
        >
          <h2 className="text-2xl font-black text-gray-900 mb-6">
            Visa Deals &amp; Travel Offers from Bangladesh — Complete Guide 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-500 leading-relaxed">
            <div className="space-y-4">
              <p>
                Eammu Holidays is Bangladesh's leading visa consultancy and travel agency, offering some of the most
                competitive deals on{" "}
                <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  student visa processing
                </Link>{" "}
                for top destinations including the UK, USA, Canada, and Australia. Our flat{" "}
                <strong className="text-gray-700">$100 student visa promo</strong> includes full documentation support,
                SOP writing, financial document review, and interview preparation — at zero extra charge.
              </p>
              <p>
                For travelers applying for{" "}
                <Link href="/our-services/visa-services/tourist-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  tourist visas
                </Link>{" "}
                to Dubai, the UK, Schengen countries, or Southeast Asia, our Fast Track Visa Offer waives extra
                processing fees during promo periods — with guaranteed embassy submission within 48 hours.
                Use our{" "}
                <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
                  Visa Checklist Generator
                </Link>{" "}
                to prepare your documents before booking.
              </p>
              <p>
                Planning to travel to Europe?{" "}
                <Link href="/schengen-visa" className="text-[#005a31] font-semibold hover:underline">
                  Schengen visa bundle packages
                </Link>{" "}
                from Eammu include hotel bookings, travel insurance, and complete document preparation — bundled
                at a lower combined rate than booking separately. Check{" "}
                <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:underline">
                  Schengen visa rejection rates
                </Link>{" "}
                for Bangladesh to understand your approval odds before applying.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our{" "}
                <strong className="text-gray-700">Early Bird International Flight Deal</strong> saves up to 20%
                on flights from Bangladesh to Dubai, UK, USA, Canada, Malaysia, Thailand, and Europe when booked
                3 months in advance. We work with all major carriers to secure the lowest rates. Book via our{" "}
                <Link href="/flight-booking" className="text-[#005a31] font-semibold hover:underline">
                  Flight Booking service
                </Link>
                .
              </p>
              <p>
                Family and group travelers enjoy exclusive group pricing on international holiday packages to
                Dubai, Thailand, Malaysia, and Europe for parties of 4 or more. We also run regular{" "}
                <strong className="text-gray-700">Umrah package promotions</strong> with all-inclusive rates
                covering Saudi visa, flights, hotel in Makkah and Madinah, and ground transport.
              </p>
              <p>
                Rejected before? Our{" "}
                <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:underline">
                  Visa Rejection Checker
                </Link>{" "}
                shows real refusal rates by nationality and destination. Our consultants at{" "}
                <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  Dhaka
                </Link>{" "}
                and{" "}
                <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">
                  Dubai offices
                </Link>{" "}
                will review your previous refusal letter and prepare a significantly stronger reapplication —
                backed by our 95% approval rate.
              </p>
            </div>
          </div>

          {/* How to claim — HowTo schema match */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <h3 className="text-lg font-black text-gray-800 mb-5">How to claim a visa or travel deal from Eammu Holidays</h3>
            <ol className="grid sm:grid-cols-4 gap-4 list-none">
              {[
                { n: "01", title: "Pick your deal",        desc: "Choose from our active visa offers, tour packages, or flight deals above.", icon: "🎯" },
                { n: "02", title: "WhatsApp or email us",  desc: "Contact us mentioning the offer name. We confirm within 2 hours.", icon: "💬" },
                { n: "03", title: "Prepare documents",     desc: "Use our Visa Checklist Generator for a personalized document list.", icon: "📋", link: "/travel-resources/visa-checklist-generator" },
                { n: "04", title: "We process & submit",   desc: "Our consultants handle embassy submission within 48 hours.", icon: "🚀" },
              ].map(step => (
                <li key={step.n}>
                  <div className={`flex flex-col gap-2 p-5 bg-white border-2 border-gray-100 hover:border-[#ffcc00] rounded-2xl transition h-full ${step.link ? "cursor-pointer" : ""}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl" aria-hidden="true">{step.icon}</span>
                      <span className="text-3xl font-black text-gray-100">{step.n}</span>
                    </div>
                    <h4 className="text-xs font-black text-gray-800 leading-snug">{step.title}</h4>
                    <p className="text-[10px] text-gray-400 leading-relaxed">{step.desc}</p>
                    {step.link && (
                      <Link href={step.link} className="text-[10px] font-black text-[#005a31] hover:underline mt-auto">
                        Generate checklist →
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            RELATED SERVICES BANNERS
        ══════════════════════════════════════════ */}
        <section aria-label="Related visa and study services" className="grid md:grid-cols-3 gap-4">
          {/* Study abroad */}
          <div className="bg-slate-900 text-white rounded-3xl p-7 flex flex-col justify-between gap-4 col-span-1">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#ffcc00] mb-2">🎓 Student Special</p>
              <h3 className="font-black text-lg mb-1">Study Abroad + Visa Deal</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-[#ffcc00] font-semibold hover:underline">Student visa</Link>{" "}
                + <Link href="/scholarships" className="text-[#ffcc00] font-semibold hover:underline">scholarship guidance</Link>{" "}
                + <Link href="/target-ielts-immigration-center" className="text-[#ffcc00] font-semibold hover:underline">IELTS prep</Link> — all bundled.
              </p>
            </div>
            <Link href="/study-abroad" className="self-start px-5 py-2.5 bg-[#ffcc00] text-[#005a31] rounded-xl font-black text-xs hover:bg-yellow-300 transition">
              View Study Deals →
            </Link>
          </div>
          {/* Rejection checker */}
          <div className="bg-red-600 text-white rounded-3xl p-7 flex flex-col justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-red-200 mb-2">📊 Know Before You Apply</p>
              <h3 className="font-black text-lg mb-1">Visa Rejection Risk Checker</h3>
              <p className="text-sm text-red-100 leading-relaxed">
                Check real rejection rates before claiming any visa deal.
                Our free checker covers 195+ countries and all visa types.
              </p>
            </div>
            <Link href="/visa-rejection" className="self-start px-5 py-2.5 bg-white text-red-600 rounded-xl font-black text-xs hover:bg-red-50 transition">
              Check Rejection Rate →
            </Link>
          </div>
          {/* USA interview */}
          <div className="bg-blue-900 text-white rounded-3xl p-7 flex flex-col justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-300 mb-2">🇺🇸 USA Special</p>
              <h3 className="font-black text-lg mb-1">US Visa Interview Coaching</h3>
              <p className="text-sm text-blue-200 leading-relaxed">
                B1/B2, F1, and immigrant visa interview preparation.
                Dramatically improves approval odds — available at{" "}
                <Link href="/contact/travel-agency-bangladesh" className="text-blue-300 hover:underline font-semibold">Dhaka</Link> office.
              </p>
            </div>
            <Link href="/target-usa-visa-interview-preparation" className="self-start px-5 py-2.5 bg-blue-500 text-white rounded-xl font-black text-xs hover:bg-blue-400 transition">
              Book Interview Prep →
            </Link>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FAQ — schema-ready, keyword-rich
        ══════════════════════════════════════════ */}
        <section
          aria-label="Visa deals and travel offers — frequently asked questions"
          className="space-y-8"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="text-center space-y-3">
            <span className="text-[#005a31] text-[10px] font-black uppercase tracking-[0.2em]">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              Visa Deals FAQ — Everything You Need to Know
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Common questions about Eammu Holidays visa processing deals, tour discounts, and how to claim them.
            </p>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-3 max-w-5xl mx-auto">
            {DEAL_FAQS.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            INTERNAL LINKS FOOTER
        ══════════════════════════════════════════ */}
        <section aria-label="Related visa services and resources">
          <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-5">
            Explore All Visa Services &amp; Travel Resources
          </h2>
          <div className="flex flex-wrap gap-2 mb-10">
            {INTERNAL_LINKS.map((l) => (
              <Link key={l.href} href={l.href}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-full text-xs font-semibold hover:border-[#005a31] hover:text-[#005a31] hover:bg-green-50 transition">
                {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════ */}
        <section
          aria-label="Claim your visa or travel deal with Eammu Holidays"
          className="relative bg-[#005a31] rounded-[2.5rem] p-8 md:p-14 text-center text-white overflow-hidden"
        >
          <div className="relative z-10 space-y-5">
            <span className="inline-block px-4 py-2 bg-[#ffcc00] text-[#005a31] rounded-full text-[10px] font-black uppercase tracking-widest">
              🔥 Limited Time — Claim Now
            </span>
            <h2 className="text-2xl md:text-4xl font-black leading-tight">
              Ready to Claim Your Visa Deal?
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Contact Eammu Holidays to claim any active visa processing discount or tour deal.
              Our team confirms within <strong className="text-[#ffcc00]">2 hours</strong> via WhatsApp or email —
              zero hidden charges, signed agreement, full transparency.
              <br />
              <span className="text-green-200 text-xs">
                Offices in Bangladesh · Dubai · Armenia · Georgia. 95% visa success rate. 42,000+ travelers helped.
              </span>
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <a
              href="https://wa.me/8801701699743"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Claim your deal via WhatsApp"
              className="w-full sm:w-auto bg-[#ffcc00] text-[#005a31] px-10 py-4 rounded-2xl font-black text-sm hover:bg-yellow-300 transition uppercase tracking-wide shadow-xl"
            >
              💬 WhatsApp — Claim Deal Now
            </a>
            <a
              href="mailto:info@eammu.com"
              className="w-full sm:w-auto bg-white/10 backdrop-blur text-white border border-white/30 px-10 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 transition uppercase tracking-wide"
            >
              ✉️ Email Us
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white/10 backdrop-blur text-white border border-white/30 px-10 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 transition uppercase tracking-wide"
            >
              📍 Visit Office
            </Link>
          </div>

          {/* Decorative blobs */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#ffcc00] rounded-full blur-[90px] opacity-10 pointer-events-none" aria-hidden="true" />
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-green-300 rounded-full blur-[90px] opacity-10 pointer-events-none" aria-hidden="true" />
        </section>

      </div>
    </main>
  );
};

export default Offers;