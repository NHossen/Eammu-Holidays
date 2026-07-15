"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   GLOBAL CONTACT
   Single source of truth used in the hero, quick-
   contact strip, FAQ answers, structured data, and
   the final CTA. Update these to your primary
   headquarters number/email.
───────────────────────────────────────────── */
const GLOBAL_CONTACT = {
  phone: "+971507078334",
  whatsapp: "+971507078334",
  email: "info@eammu.com",
};

const SITE_URL = "https://eammu.com"; // TODO: confirm production domain

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/eammutourism", color: "blue" },
  { name: "Instagram", href: "https://instagram.com/eammuholidays", color: "pink" },
  { name: "LinkedIn", href: "https://linkedin.com/company/eammu-immigration-services", color: "blue" },
  { name: "YouTube", href: "https://www.youtube.com/@Eammutour", color: "red" },
];

/* ─────────────────────────────────────────────
   DATA
   NOTE: entries marked "TODO" are new branches
   (New York, Dhaka) that didn't come with phone /
   email / hours / services yet — placeholders keep
   the layout working; swap in real details whenever
   you have them.
───────────────────────────────────────────── */
const offices = [
  {
    holding: "Eammu Holidays - USA",
    name: "Eammu Holidays Headquarters - New York",
    location: "New York, USA",
    flag: "🇺🇸",
    badge: "Global Headquarters",
    address: "New York, United States of America",
    phone: ["+1 (000) 000-0000"], // TODO: add real US number
    whatsapp: "+971507078334", // TODO: add dedicated US WhatsApp if available
    email: ["usa@eammu.com", "info@eammu.com"], // TODO: confirm usa@eammu.com is live
    hours: "Mon–Fri: 9AM–6PM (EST)", // TODO: confirm hours
    // Paste the link you copied from Google Maps "Share" here
    mapLink: "https://maps.app.goo.gl/iTW2XsRCHqMq47hi7",
    lat: 40.7128,
    lng: -74.006,
    website: "/contact/travel-agency-usa",
    services: ["Global Partnerships", "Corporate Travel", "Visa Consultation", "Holiday Tours"],
  },
  {
    holding: "Eammu Holidays - Bangladesh",
    name: "Eammu Holidays - Cumilla Branch",
    location: "Cumilla, Bangladesh",
    flag: "🇧🇩",
    badge: "Headquarters",
    address: "Office No-178, 1st Floor, Gomoti Tower, Cantonment, Cumilla, Bangladesh",
    phone: ["+8801631312524", "+971507078334"],
    whatsapp: "+8801631312524",
    email: ["bangladesh@eammu.com", "info@eammu.com"],
    hours: "Sun–Thu: 9AM–9PM (BD Time)",
    // Paste the link you copied from Google Maps "Share" here
    mapLink: "https://maps.app.goo.gl/sgbsHeeDCQkk6xvn7",
    lat: 23.483984,
    lng: 91.139884,
    website: "/contact/travel-agency-bangladesh",
    services: ["Student Visa", "Umrah Packages", "Holiday Tours", "Immigration"],
  },
  {
    holding: "Eammu Holidays - Bangladesh",
    name: "Eammu Holidays - Dhaka Branch",
    location: "Dhaka, Bangladesh",
    flag: "🇧🇩",
    badge: "Branch Office",
    address: "Gulshan Avenue, Dhaka, Bangladesh",
    phone: ["+971507078334"], // TODO: add dedicated Dhaka branch number
    whatsapp: "+971507078334",
    email: ["dhaka@eammu.com", "info@eammu.com"], // TODO: confirm dhaka@eammu.com is live
    hours: "Sun–Thu: 9AM–9PM (BD Time)", // TODO: confirm hours
    // Paste the link you copied from Google Maps "Share" here
    mapLink: "https://maps.app.goo.gl/ANah7V16vQWGacCy8",
    lat: 23.7925,
    lng: 90.4078,
    website: "/contact/travel-agency-dhaka",
    services: ["Student Visa", "Tourist Visa", "Holiday Tours", "Immigration"],
  },
  {
    holding: "Eammu Holidays - UAE",
    name: "Eammu Holidays - Dubai Business Bay",
    location: "Business Bay, Dubai, UAE",
    flag: "🇦🇪",
    badge: "Middle East Office",
    address: "Business Bay, Dubai, United Arab Emirates",
    phone: ["+971507078334"],
    whatsapp: "+971507078334",
    email: ["dubai@eammu.com", "info@eammu.com"],
    hours: "Sun–Thu: 9AM–6PM (GST)",
    // Paste the link you copied from Google Maps "Share" here
    mapLink: "https://maps.app.goo.gl/S9d4brsF5eWjJRKD7",
    lat: 25.185,
    lng: 55.2708,
    website: "/contact/travel-agency-dubai",
    services: ["Work Permit UAE", "Tourist Visa", "Holiday Packages", "Event Management"],
  },
  {
    holding: "Eammu Holidays - Armenia",
    name: "Eammu Holidays - Yerevan Hub",
    location: "Yerevan, Armenia",
    flag: "🇦🇲",
    badge: "Europe Hub",
    address: "Lambron 39, Yerevan, Armenia",
    phone: ["+37494810585"],
    whatsapp: "+37494810585",
    email: ["armenia@eammu.com", "info@eammu.com"],
    hours: "Mon–Fri: 9AM–6PM (YERT)",
    // Paste the link you copied from Google Maps "Share" here
    mapLink: "https://maps.app.goo.gl/btAxXjZGKM1xEgqZ8",
    lat: 40.1,
    lng: 44.5,
    website: "/contact/travel-agency-armenia",
    services: ["Europe Visa", "Schengen Visa", "Armenia Residency", "Student Visa EU"],
  },
  {
    holding: "Eammu Holidays - Georgia",
    name: "Eammu Holidays - Tbilisi Office",
    location: "Tbilisi, Georgia",
    flag: "🇬🇪",
    badge: "Caucasus Office",
    address: "Floor 5, Levan Gotua Street #3, Tbilisi, Georgia",
    phone: ["+995574446218"],
    whatsapp: "+995574446218",
    email: ["georgia@eammu.com", "info@eammu.com"],
    hours: "Mon–Fri: 9AM–6PM (GET)",
    // Paste the link you copied from Google Maps "Share" here
    mapLink: "https://maps.app.goo.gl/jvfYo9RTB2QuTejD9",
    lat: 41.7,
    lng: 44.7,
    website: "/contact/travel-agency-georgia",
    services: ["Georgia Residency", "Europe Tour", "Business Visa", "Immigration"],
  },
];

const heroSlides = [
  {
    id: 1,
    image: "/ileand-2.png",
    badge: "24/7 Support",
    title: "Contact Eammu Holidays",
    subtitle: "Travel & Visa Agency – USA, Bangladesh, Dubai, Armenia & Georgia",
    description:
      "Reach our certified visa consultants and travel experts for student visas, Umrah packages, holiday tours, and immigration support from anywhere in the world.",
  },
  {
    id: 2,
    image: "/bangladesh_europe_couple.webp",
    badge: "6 Global Offices",
    title: "Visit Our Offices Worldwide",
    subtitle: "New York · Cumilla · Dhaka · Dubai · Yerevan · Tbilisi",
    description:
      "Walk into any of our global offices for face-to-face visa consultation, travel planning, and premium customer service from our expert team.",
  },
  {
    id: 3,
    image: "/flight_eammu.webp",
    badge: "95% Visa Success",
    title: "Start Your Journey Today",
    subtitle: "Student Visa · Umrah · Holiday Tours · Work Permit",
    description:
      "With a 95% visa success rate and 10,000+ happy clients, Eammu Holidays is Bangladesh's most trusted travel and visa consultancy. Get in touch now.",
  },
];

const whyContactUs = [
  { icon: "🏆", title: "95% Visa Success Rate", desc: "One of the highest visa approval rates among Bangladesh travel agencies." },
  { icon: "⚡", title: "Fast Response", desc: "We reply to all WhatsApp and email queries within 2 hours during business hours." },
  { icon: "🌍", title: "6 Global Offices", desc: "Local support across the USA, Bangladesh, UAE, Armenia, and Georgia." },
  { icon: "🎓", title: "Certified Consultants", desc: "All our visa consultants are professionally trained and certified." },
  { icon: "🕐", title: "24/7 WhatsApp Support", desc: "Round-the-clock assistance for urgent visa and travel queries." },
  { icon: "💯", title: "10,000+ Happy Clients", desc: "Trusted by thousands of travelers from Bangladesh and beyond since 2012." },
];

const faqs = [
  {
    q: "Where are Eammu Holidays offices located?",
    a: "Eammu Holidays has offices in New York (USA), Cumilla and Dhaka (Bangladesh), Business Bay (Dubai, UAE), Yerevan (Armenia), and Tbilisi (Georgia).",
  },
  {
    q: "How can I apply for a visa through Eammu Holidays?",
    a: `Contact us via WhatsApp (${GLOBAL_CONTACT.whatsapp}), email (${GLOBAL_CONTACT.email}), or fill in our contact form. Our certified consultants handle UK, USA, Canada, Europe, and UAE visas.`,
  },
  {
    q: "Does Eammu Holidays offer 24/7 support?",
    a: "Yes. Our WhatsApp support is available 24/7. Office consultation hours vary by branch — contact us for local hours.",
  },
  {
    q: "What is Eammu Holidays' phone number?",
    a: `You can reach our team at ${GLOBAL_CONTACT.phone}, available across all our branches.`,
  },
  {
    q: "Does Eammu Holidays provide Umrah packages from Bangladesh?",
    a: "Yes. We offer all-inclusive Umrah packages from Bangladesh including visa, flights, hotel, and guide services.",
  },
  {
    q: "How long does visa processing take with Eammu Holidays?",
    a: "Processing time varies by country and visa type. Student visas typically take 4–12 weeks. Tourist visas can be as quick as 5–10 business days. Contact us for a personalized timeline.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/* ─────────────────────────────────────────────
   STRUCTURED DATA (JSON-LD)
   Organization + all branches as departments,
   FAQPage, and BreadcrumbList — the three schema
   types that matter most for a contact page.
───────────────────────────────────────────── */
const buildStructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Eammu Holidays",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/ileand-2.png`,
    telephone: GLOBAL_CONTACT.phone,
    email: GLOBAL_CONTACT.email,
    sameAs: socialLinks.map((s) => s.href),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "10000",
    },
    department: offices.map((o) => ({
      "@type": "TravelAgency",
      name: o.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: o.address,
        addressCountry: o.location.split(",").pop().trim(),
      },
      telephone: o.phone[0],
      email: o.email[0],
      geo: {
        "@type": "GeoCoordinates",
        latitude: o.lat,
        longitude: o.lng,
      },
      openingHours: o.hours,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
    ],
  };

  return [organizationSchema, faqSchema, breadcrumbSchema];
};

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  </svg>
);

/* ─────────────────────────────────────────────
   OFFICE CARD
───────────────────────────────────────────── */
const OfficeCard = ({ office, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-green-900/5 hover:border-green-100 hover:-translate-y-1 transition-all duration-500 flex flex-col"
      itemScope
      itemType="https://schema.org/TravelAgency"
    >
      <meta itemProp="name" content={office.name} />

      {/* Card header */}
      <div className="relative bg-[#005a31] p-5 flex items-center justify-between gap-3 overflow-hidden">
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/5 rounded-full" />
        <div className="relative flex items-center gap-3 min-w-0">
          <span className="text-3xl flex-shrink-0" role="img" aria-label={`${office.location} flag`}>
            {office.flag}
          </span>
          <div className="min-w-0">
            <h3 className="text-white font-extrabold text-base leading-tight truncate">
              {office.name || office.location}
            </h3>
            <span className="text-xs text-[#ffcc00] font-bold uppercase tracking-wider block truncate">
              {office.badge}
            </span>
          </div>
        </div>
        <a
          href={`https://wa.me/${office.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with Eammu Holidays ${office.location} on WhatsApp`}
          className="relative bg-[#ffcc00] text-[#005a31] text-xs font-black px-3 py-1.5 rounded-xl hover:bg-yellow-300 transition flex-shrink-0"
        >
          WhatsApp
        </a>
      </div>

      {/* Card body */}
      <div className="p-5 space-y-3 flex-grow">
        {office.holding && (
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            {office.holding}
          </p>
        )}

        <p itemProp="address" className="text-gray-600 text-sm leading-relaxed flex gap-2">
          <span className="text-[#005a31] mt-0.5 flex-shrink-0" aria-hidden="true">📍</span>
          <span>{office.address}</span>
        </p>

        <div className="flex gap-2 text-sm text-gray-600">
          <span className="text-[#005a31] flex-shrink-0" aria-hidden="true">📞</span>
          <div className="space-y-0.5">
            {office.phone.map((p, i) => (
              <a
                key={i}
                href={`tel:${p.replace(/[()\s]/g, "")}`}
                itemProp="telephone"
                className="block hover:text-[#005a31] hover:underline transition-colors"
              >
                {p}
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-2 text-sm text-gray-600">
          <span className="text-[#005a31] flex-shrink-0" aria-hidden="true">✉️</span>
          <div className="space-y-0.5">
            {office.email.map((em, i) => (
              <a
                key={i}
                href={`mailto:${em}`}
                itemProp="email"
                className="block hover:text-[#005a31] hover:underline transition-colors break-all"
              >
                {em}
              </a>
            ))}
          </div>
        </div>

        <p className="flex gap-2 text-sm text-gray-500">
          <span className="text-[#005a31] flex-shrink-0" aria-hidden="true">🕐</span>
          <span>{office.hours}</span>
        </p>

        {/* Service tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {office.services.map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 bg-green-50 text-[#005a31] text-xs font-semibold rounded-full border border-green-100"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Direct Google Maps link */}
        <a
          href={office.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Get directions to Eammu Holidays ${office.location} on Google Maps`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#005a31] hover:underline pt-1"
        >
          <PinIcon />
          Get Directions on Google Maps
        </a>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-50">
        <Link
          href={office.website}
          className="w-full flex items-center justify-center gap-2 bg-[#005a31] text-white py-2.5 rounded-xl text-sm font-bold hover:bg-green-800 transition"
          aria-label={`View full details for Eammu Holidays ${office.location}`}
        >
          🌐 View Office Page
        </Link>
      </div>
    </motion.article>
  );
};

/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */
const ContactForm = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Replace with your real form handler / API route
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center space-y-4"
      >
        <div className="text-5xl" aria-hidden="true">✅</div>
        <h3 className="text-2xl font-extrabold text-[#005a31]">Message Sent!</h3>
        <p className="text-gray-500 text-sm">
          Thank you for contacting Eammu Holidays. Our team will reply within 2 hours via email or
          WhatsApp.
        </p>
        <button
          onClick={() => { setStatus("idle"); setFormData({ name: "", email: "", phone: "", service: "", message: "" }); }}
          className="mt-4 px-6 py-2.5 bg-[#005a31] text-white rounded-xl text-sm font-bold hover:bg-green-800 transition"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white p-7 md:p-9 rounded-3xl shadow-xl border border-gray-100"
    >
      <div className="mb-6 space-y-1">
        <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">
          Free Consultation
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Send Us a Message</h2>
        <p className="text-gray-400 text-sm">
          Fill in the form and our expert will get back to you within 2 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005a31] focus:border-transparent transition"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
              Phone / WhatsApp *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005a31] focus:border-transparent transition"
              placeholder="+880 or +971..."
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005a31] focus:border-transparent transition"
            placeholder="you@email.com"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005a31] focus:border-transparent transition bg-white text-gray-700"
          >
            <option value="">Select a service...</option>
            <option value="student-visa">Student Visa (UK / USA / Canada / Australia)</option>
            <option value="umrah">Umrah Packages from Bangladesh</option>
            <option value="tourist-visa">Tourist Visa</option>
            <option value="work-permit">Work Permit / Immigration</option>
            <option value="holiday-tour">Holiday Tour Package</option>
            <option value="event-management">Event Management</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#005a31] focus:border-transparent transition"
            placeholder="Tell us about your travel plans, visa needs, or questions..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-[#005a31] text-white px-6 py-4 rounded-2xl font-black text-sm hover:bg-green-800 transition shadow-lg shadow-green-900/20 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wide"
        >
          {status === "sending" ? "Sending..." : "✉️ Send Message"}
        </button>

        {status === "error" && (
          <p className="text-center text-xs text-red-500 font-semibold">
            Something went wrong. Please try WhatsApp or email below.
          </p>
        )}

        <p className="text-center text-xs text-gray-400">
          Or reach us instantly:{" "}
          <a
            href={`https://wa.me/${GLOBAL_CONTACT.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#005a31] font-bold hover:underline"
          >
            WhatsApp {GLOBAL_CONTACT.whatsapp}
          </a>
        </p>
      </form>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const ContactWithUs = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const structuredData = buildStructuredData();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      {/* Structured data for search engines (Organization, FAQ, Breadcrumb) */}
      {structuredData.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        aria-label="Contact Eammu Holidays hero"
        className="relative min-h-[55vh] md:min-h-[60vh] flex items-center justify-center py-24 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHero}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1.02 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4 }}
              className="absolute inset-0"
            >
              <Image
                src={heroSlides[currentHero].image}
                alt={`${heroSlides[currentHero].title} – Eammu Holidays visa and travel agency`}
                fill
                priority={currentHero === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-black/15 z-10" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-20 w-full max-w-4xl mx-auto text-center px-4">
          {/* Breadcrumb — small SEO/UX win, also helps Google show breadcrumbs in results */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center justify-center gap-2 text-xs text-white/70 font-medium">
              <li>
                <Link href="/" className="hover:text-[#ffcc00] transition">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#ffcc00]" aria-current="page">Contact</li>
            </ol>
          </nav>

          <motion.div
            key={currentHero}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <span className="inline-block px-5 py-2 bg-[#ffcc00] text-[#005a31] rounded-full text-xs font-black tracking-widest uppercase">
              {heroSlides[currentHero].badge}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              {heroSlides[currentHero].title}
            </h1>
            <p className="text-[#ffcc00] font-bold text-base md:text-lg">
              {heroSlides[currentHero].subtitle}
            </p>
            <p className="max-w-2xl mx-auto text-gray-200 text-sm md:text-base leading-relaxed">
              {heroSlides[currentHero].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={`https://wa.me/${GLOBAL_CONTACT.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#ffcc00] text-[#005a31] px-8 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-yellow-300 transition shadow-xl"
              >
                📞 WhatsApp Now
              </a>
              <a
                href={`mailto:${GLOBAL_CONTACT.email}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition"
              >
                ✉️ Email Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Slide indicator dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setCurrentHero(i)}
              aria-label={`Show slide: ${slide.title}`}
              aria-current={i === currentHero}
              className={`h-2 rounded-full transition-all duration-500 focus:outline-none ${
                i === currentHero ? "w-10 bg-[#ffcc00]" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUICK CONTACT STRIP
      ══════════════════════════════════════════ */}
      <section aria-label="Quick contact details" className="bg-[#005a31] py-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white text-xs md:text-sm">
            <a href={`tel:${GLOBAL_CONTACT.phone}`} className="flex items-center gap-2 hover:text-[#ffcc00] transition font-semibold">
              📞 {GLOBAL_CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${GLOBAL_CONTACT.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#ffcc00] transition font-semibold"
            >
              💬 WhatsApp (24/7)
            </a>
            <a href={`mailto:${GLOBAL_CONTACT.email}`} className="flex items-center gap-2 hover:text-[#ffcc00] transition font-semibold">
              ✉️ {GLOBAL_CONTACT.email}
            </a>
            <span className="flex items-center gap-2 opacity-80">🌍 6 Global Offices</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">

        {/* ══════════════════════════════════════════
            WHY CONTACT US (SEO prose)
        ══════════════════════════════════════════ */}
        <section aria-labelledby="why-contact-heading" className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">
              Why Choose Us
            </span>
            <h2 id="why-contact-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Why Contact Eammu Holidays?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
              Eammu Holidays is Bangladesh's most trusted travel and visa consultancy, with a{" "}
              <strong className="text-[#005a31]">95% visa success rate</strong>,{" "}
              <strong className="text-[#005a31]">10,000+ happy clients</strong>, and dedicated offices
              across <strong className="text-[#005a31]">the USA, Bangladesh, UAE, Armenia, and Georgia</strong>.
            </p>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {whyContactUs.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeIn}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-green-100 transition-all"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-extrabold text-gray-800 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════
            OFFICES + FORM GRID
        ══════════════════════════════════════════ */}
        <section aria-labelledby="offices-heading" className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Offices (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-1 mb-2">
              <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">
                Our Offices
              </span>
              <h2 id="offices-heading" className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Visit Us in Person
              </h2>
              <p className="text-gray-400 text-sm">
                Walk into any of our offices across the USA, Bangladesh, UAE, Armenia, and Georgia for
                personal consultation on student visa, Umrah, holiday tours, and immigration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {offices.map((office, idx) => (
                <OfficeCard key={office.name} office={office} index={idx} />
              ))}
            </div>

            {/* Social links */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-gray-700 font-bold text-xs uppercase tracking-wider mb-4">
                Follow Eammu Holidays on Social Media
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Eammu Holidays on ${s.name}`}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition
                      ${s.color === "blue" ? "bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white" : ""}
                      ${s.color === "pink" ? "bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white" : ""}
                      ${s.color === "red" ? "bg-red-50 text-red-600 hover:bg-red-600 hover:text-white" : ""}
                    `}
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form (2 cols on lg, sticky) */}
          <div className="lg:col-span-2 lg:sticky lg:top-24 h-fit">
            <ContactForm />
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">
              Got Questions?
            </span>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-100 transition-colors"
              >
                <h3 className="font-extrabold text-gray-800 text-sm md:text-base mb-2">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════ */}
        <section aria-label="Contact Eammu Holidays call to action" className="relative bg-[#005a31] rounded-[2.5rem] p-8 md:p-14 text-center text-white overflow-hidden space-y-7">
          <div className="relative z-10 space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[#ffcc00] text-[#005a31] rounded-full text-xs font-black uppercase tracking-wider">
              Start Your Journey
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold">Ready to Travel? Let's Talk.</h2>
            <p className="text-green-100 max-w-xl mx-auto text-sm md:text-base">
              Whether you need a student visa, Umrah package, holiday tour, or immigration support —
              Eammu Holidays is one message away. Contact us now for a free consultation.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${GLOBAL_CONTACT.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#ffcc00] text-[#005a31] px-10 py-4 rounded-2xl font-black text-sm hover:bg-yellow-300 transition shadow-xl uppercase tracking-wide"
            >
              💬 WhatsApp Us Now
            </a>
            <a
              href={`mailto:${GLOBAL_CONTACT.email}`}
              className="w-full sm:w-auto bg-white/10 backdrop-blur text-white border border-white/30 px-10 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 transition uppercase tracking-wide"
            >
              ✉️ Email: {GLOBAL_CONTACT.email}
            </a>
            <Link
              href="/"
              className="w-full sm:w-auto bg-white/10 backdrop-blur text-white border border-white/30 px-10 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 transition uppercase tracking-wide"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#ffcc00] rounded-full blur-[90px] opacity-10 pointer-events-none" />
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-green-300 rounded-full blur-[90px] opacity-10 pointer-events-none" />
        </section>
      </div>
    </main>
  );
};

export default ContactWithUs;