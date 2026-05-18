"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FlashDealsCarousel from "./FlashDealsCarousel/FlashDealsCarousel";
import OfferBackgroundSlider from "./OfferBackgroundSlider/OfferBackgroundSlider";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const offers = [
  {
    id: 1,
    title: "Summer Special Discount",
    slug: "summer-special-discount",
    badge: "15% OFF",
    badgeColor: "bg-[#ffcc00] text-[#005a31]",
    category: "Holiday Tour",
    description:
      "Get 15% off on all international tour packages booked before July 31. Valid for Dubai, Europe, Thailand, Malaysia, and more.",
    image: "/summer-offer.avif",
    tags: ["Dubai", "Europe", "Thailand"],
    validUntil: "July 31, 2025",
    highlight: true,
  },
  {
    id: 2,
    title: "Student Visa Promo",
    slug: "student-visa-promo",
    badge: "$100 OFF",
    badgeColor: "bg-blue-500 text-white",
    category: "Visa Processing",
    description:
      "Flat $100 off on student visa processing fees for UK, USA, Canada, and Australia. Professional documentation support included.",
    image: "/limited-offer.webp",
    tags: ["UK", "USA", "Canada", "Australia"],
    validUntil: "Limited Time",
    highlight: false,
  },
  {
    id: 3,
    title: "Early Bird Flight Deal",
    slug: "early-bird-flight-deal",
    badge: "SAVE 20%",
    badgeColor: "bg-orange-500 text-white",
    category: "Flights",
    description:
      "Book your international air tickets 3 months in advance and save up to 20% on flights from Bangladesh to anywhere in the world.",
    image: "/offer-eammu-travel-agency-bangladesh-dhaka.webp",
    tags: ["International Flights", "Bangladesh"],
    validUntil: "Ongoing",
    highlight: false,
  },
  {
    id: 4,
    title: "Family Tour Package Offer",
    slug: "family-tour-package",
    badge: "GROUP DEAL",
    badgeColor: "bg-purple-500 text-white",
    category: "Family Tour",
    description:
      "Book for 4 or more family members and enjoy special group discounts on international holiday packages. More family, more savings.",
    image: "/friends-family-offer.avif",
    tags: ["Family", "Group Tour", "Holiday"],
    validUntil: "Ongoing",
    highlight: false,
  },
  {
    id: 5,
    title: "Fast Track Visa Offer",
    slug: "fast-track-visa",
    badge: "ZERO CHARGE",
    badgeColor: "bg-red-500 text-white",
    category: "Visa Processing",
    description:
      "Fast track your visa application with zero extra processing charge for June. Available for UAE, UK, Schengen, and more countries.",
    image: "/best-travel-agency-bangladesh-offer.webp",
    tags: ["Fast Track", "UAE", "Schengen", "UK"],
    validUntil: "June 2025",
    highlight: false,
  },
  {
    id: 6,
    title: "Travel Promo Deals 2025",
    slug: "travel-promo-2026",
    badge: "HOT DEAL",
    badgeColor: "bg-[#005a31] text-white",
    category: "Promo",
    description:
      "Exclusive 2025 promo travel deals with zero extra visa charge for select months. Best rates for international and domestic packages.",
    image: "/travel-promo-deals-travel-agency-offer-bangladesh.webp",
    tags: ["International", "Promo 2025"],
    validUntil: "2025",
    highlight: false,
  },
];

const whyBook = [
  { icon: "🏆", title: "95% Visa Success Rate", desc: "One of the highest approval rates among Bangladesh travel agencies." },
  { icon: "💰", title: "Best Price Guarantee", desc: "We match or beat any comparable deal from another licensed agency." },
  { icon: "⚡", title: "Fast Processing", desc: "Same-day confirmation on most bookings via WhatsApp or phone." },
  { icon: "🔒", title: "100% Secure Booking", desc: "Fully licensed travel agency with transparent pricing and no hidden fees." },
  { icon: "🌍", title: "4 Global Offices", desc: "Support from Bangladesh, Dubai, Armenia, and Georgia — local wherever you are." },
  { icon: "🕐", title: "24/7 WhatsApp Support", desc: "Our consultants are available around the clock for urgent queries." },
];

const dealFaqs = [
  {
    q: "What travel deals does Eammu Holidays offer in 2025?",
    a: "We offer summer discounts (15% off international tours), student visa promos ($100 off), early bird flight deals (save 20%), family group discounts, fast track visa offers at zero extra charge, and exclusive 2025 travel promo packages.",
  },
  {
    q: "How do I claim an offer from Eammu Holidays?",
    a: "Contact us via WhatsApp (+8801701699743) or email (info@eammu.com) mentioning the offer name. Our team confirms availability and guides you through the booking process — usually within 2 hours.",
  },
  {
    q: "Are there any Umrah package discounts from Bangladesh?",
    a: "Yes. We regularly run Umrah package promotions including early booking discounts and group rates. All-inclusive packages cover visa, flights, hotel, and guide. Contact us for the latest deals.",
  },
  {
    q: "Does Eammu Holidays offer student visa processing discounts?",
    a: "Yes. Our Student Visa Promo offers a flat $100 off processing fees for UK, USA, Canada, and Australia student visas — with full documentation support and interview preparation included.",
  },
  {
    q: "Do travel deals apply to family or group bookings?",
    a: "Absolutely. Groups of 4+ family members receive special discounts on international holiday packages. Corporate group bookings also qualify for custom pricing — contact us for a quote.",
  },
];

const popularDestinations = [
  { name: "Dubai, UAE", icon: "🏙️", deal: "Tour from BDT 65,000" },
  { name: "Thailand", icon: "🌴", deal: "Package from BDT 45,000" },
  { name: "Malaysia", icon: "🇲🇾", deal: "Package from BDT 50,000" },
  { name: "Georgia", icon: "🇬🇪", deal: "Visa-free. Tour from BDT 55,000" },
  { name: "UK", icon: "🇬🇧", deal: "Student Visa from BDT 55,000" },
  { name: "Maldives", icon: "🐠", deal: "Package from BDT 70,000" },
];

/* ─────────────────────────────────────────────
   OFFER CARD
───────────────────────────────────────────── */
const OfferCard = ({ offer }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className={`group bg-white rounded-[2.5rem] overflow-hidden border transition-all duration-500 hover:shadow-2xl flex flex-col h-full ${
      offer.highlight ? "border-[#ffcc00] shadow-lg shadow-yellow-100" : "border-gray-100 shadow-sm"
    }`}
    itemScope
    itemType="https://schema.org/Offer"
  >
    {/* Image */}
    <Link
      href={`/offers/${offer.slug}`}
      className="block relative h-52 overflow-hidden rounded-t-[2rem]"
      aria-label={`View ${offer.title} offer details`}
    >
      <Image
        src={offer.image}
        alt={`${offer.title} – Eammu Holidays travel deal Bangladesh`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        itemProp="image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

      {/* Badge */}
      <div className="absolute top-3 left-3 flex gap-2">
        <span className={`text-xs font-black px-3 py-1.5 rounded-full shadow-lg ${offer.badgeColor}`}>
          {offer.badge}
        </span>
        {offer.highlight && (
          <span className="text-xs font-black px-3 py-1.5 rounded-full bg-[#005a31] text-white shadow-lg">
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
    </Link>

    {/* Content */}
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex items-center gap-1.5 mb-2 text-xs text-gray-400">
        <span>⏰</span>
        <span>Valid: {offer.validUntil}</span>
      </div>

      <h3
        itemProp="name"
        className="text-base font-extrabold text-[#005a31] mb-2 uppercase tracking-tight group-hover:text-black transition-colors"
      >
        {offer.title}
      </h3>

      <p
        itemProp="description"
        className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2 flex-grow"
      >
        {offer.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {offer.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 bg-green-50 text-[#005a31] rounded-full font-semibold border border-green-100">
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href="https://wa.me/8801701699743"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Book ${offer.title} via WhatsApp`}
        className="w-full bg-[#005a31] text-white py-3 rounded-xl font-black text-center text-xs uppercase tracking-wider hover:bg-[#ffcc00] hover:text-[#005a31] transition-all shadow-md"
        itemProp="url"
      >
        💬 Book via WhatsApp
      </a>
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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-green-100 transition-colors overflow-hidden"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-5 flex items-center justify-between gap-4 text-left focus:outline-none"
        aria-expanded={open}
      >
        <span
          itemProp="name"
          className={`font-bold text-sm transition-colors ${open ? "text-[#005a31]" : "text-gray-800"}`}
        >
          {faq.q}
        </span>
        <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-[#005a31] transition-all ${open ? "border-[#005a31] rotate-45" : "border-gray-200"}`}>
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
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
      <meta itemProp="name" content="Best Travel Deals & Offers 2025 | Eammu Holidays Bangladesh" />
      <meta
        itemProp="description"
        content="Exclusive travel deals on visa processing, Umrah packages, holiday tours, and flights from Eammu Holidays Bangladesh. Limited-time offers."
      />

      {/* ── HERO SLIDER (existing component, unchanged) ── */}
      <OfferBackgroundSlider />

      {/* ── QUICK STRIP ── */}
      <section aria-label="Quick contact for travel deals" className="bg-[#005a31] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-5 md:gap-10 text-white text-xs md:text-sm">
            <a href="tel:+8801701699743" className="flex items-center gap-2 font-bold hover:text-[#ffcc00] transition">
              📞 +8801701699743
            </a>
            <a href="https://wa.me/8801701699743" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold hover:text-[#ffcc00] transition">
              💬 WhatsApp Deals (24/7)
            </a>
            <a href="mailto:info@eammu.com" className="flex items-center gap-2 font-bold hover:text-[#ffcc00] transition">
              ✉️ info@eammu.com
            </a>
            <span className="flex items-center gap-2 opacity-80">🌍 4 Global Offices</span>
          </div>
        </div>
      </section>

      {/* ── FLASH DEALS CAROUSEL (existing component, unchanged) ── */}
      <FlashDealsCarousel />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-20">

        {/* ══════════════════════════════════════════
            SEO INTRO TEXT BLOCK
        ══════════════════════════════════════════ */}
        <section aria-label="About Eammu Holidays travel deals">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl border border-green-100 p-7 md:p-10 space-y-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
              Best Travel Deals & Offers 2025 —{" "}
              <span className="text-[#005a31]">Visa, Umrah, Tours & Flights</span>
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-4xl">
              Eammu Holidays brings you Bangladesh's most exclusive travel deals — from{" "}
              <strong>student visa processing discounts</strong> for the UK, USA, and Canada, to{" "}
              <strong>Umrah package promotions</strong>, <strong>early bird flight deals</strong>, and{" "}
              <strong>family tour group discounts</strong>. Our limited-time offers help Bangladeshi
              travelers get the best value on every journey.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm max-w-4xl">
              With a <strong>95% visa success rate</strong>, <strong>10,000+ happy clients</strong>, and
              offices in <strong>Bangladesh, Dubai, Armenia, and Georgia</strong>, Eammu Holidays guarantees
              transparent pricing, zero hidden charges, and professional service on every booking.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["15% Summer Discount", "Student Visa $100 OFF", "Early Bird Flights", "Family Group Deals", "Fast Track Visa", "Umrah Promos"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 bg-white border border-green-100 text-[#005a31] font-bold rounded-full shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            WHY BOOK WITH US
        ══════════════════════════════════════════ */}
        <section aria-label="Why book travel deals with Eammu Holidays">
          <div className="text-center space-y-3 mb-10">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Why Book Your Deal with Eammu Holidays?
            </h2>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {whyBook.map((item, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-green-100 transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-extrabold text-gray-800 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════
            ALL OFFER CARDS (SEO-enriched)
        ══════════════════════════════════════════ */}
        <section aria-label="All travel deals and offers from Eammu Holidays">
          <div className="text-center space-y-3 mb-10">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">Limited Time</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
              Explore All Deals
            </h2>
            <div className="w-20 h-1.5 bg-[#ffcc00] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {offers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            POPULAR DESTINATIONS
        ══════════════════════════════════════════ */}
        <section aria-label="Popular travel destinations with deals from Bangladesh">
          <div className="text-center space-y-3 mb-10">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">Top Picks</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Popular Destinations with Active Deals
            </h2>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularDestinations.map((dest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-green-100 text-center transition-all cursor-pointer group"
              >
                <div className="text-3xl mb-2">{dest.icon}</div>
                <h3 className="font-extrabold text-gray-800 text-xs mb-1 group-hover:text-[#005a31] transition-colors">
                  {dest.name}
                </h3>
                <p className="text-[10px] text-[#005a31] font-bold leading-tight">{dest.deal}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FAQ (Schema-ready)
        ══════════════════════════════════════════ */}
        <section
          aria-label="Travel deals frequently asked questions"
          className="space-y-10"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="text-center space-y-3">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Travel Deals — Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Everything you need to know about claiming Eammu Holidays travel deals and offers.
            </p>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {dealFaqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════ */}
        <section
          aria-label="Claim your travel deal with Eammu Holidays"
          className="relative bg-[#005a31] rounded-[2.5rem] p-8 md:p-14 text-center text-white overflow-hidden space-y-6"
        >
          <div className="relative z-10 space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[#ffcc00] text-[#005a31] rounded-full text-xs font-black uppercase tracking-wider">
              Limited Time Offers
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold">
              Ready to Grab Your Deal?
            </h2>
            <p className="text-green-100 max-w-xl mx-auto text-sm md:text-base">
              Contact Eammu Holidays now to claim any active offer. Our team confirms your deal within
              2 hours via WhatsApp or email — with zero hidden charges and full transparency.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/8801701699743"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#ffcc00] text-[#005a31] px-10 py-4 rounded-2xl font-black text-sm hover:bg-yellow-300 transition uppercase tracking-wide shadow-xl"
            >
              💬 WhatsApp to Claim Deal
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
              📍 Visit Our Office
            </Link>
          </div>

          <div className="absolute -bottom-14 -right-14 w-60 h-60 bg-[#ffcc00] rounded-full blur-[80px] opacity-10 pointer-events-none" />
          <div className="absolute -top-14 -left-14 w-60 h-60 bg-green-300 rounded-full blur-[80px] opacity-10 pointer-events-none" />
        </section>
      </div>
    </main>
  );
};

export default Offers;