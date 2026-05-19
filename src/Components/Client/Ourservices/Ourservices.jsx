"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaPlane, FaUniversity, FaTags, FaPassport,
  FaSuitcaseRolling, FaArrowRight, FaShieldAlt,
  FaGlobeAsia, FaCheckCircle, FaStar, FaMapMarkerAlt,
  FaFileAlt, FaClock, FaUserGraduate, FaBuilding,
} from "react-icons/fa";

// ─── Primary Services ──────────────────────────────────────────────────────────
const services = [
  {
    icon: <FaPassport />,
    title: "Global Visa Processing",
    description:
      "Expert visa consultancy for tourist visas, student visas (F1), business visas (B1/B2), work permits, and family visas for USA, UK, Canada, Australia, Schengen, Dubai, and 30+ countries. Trusted by 5,000+ clients from Bangladesh.",
    link: "/our-services/visa-services",
    badge: "Most Popular",
    keywords: "Student Visa, Tourist Visa, Work Permit, Visa Consultancy Bangladesh",
    subLinks: [
      { label: "All Visa Services", href: "/visa" },
      { label: "Visa Guide", href: "/visa/visa-guide" },
      { label: "E-Visa Services", href: "/visa/e-visa" },
      { label: "India Visa", href: "/visa/india" },
      { label: "Dubai Residents Visa", href: "/visa/dubai-residents" },
      { label: "Visa Rejection Help", href: "/visa-rejection" },
    ],
  },
  {
    icon: <FaPlane />,
    title: "Air Ticketing & Flight Booking",
    description:
      "Affordable international and domestic flight booking from Bangladesh, Dubai, Armenia, and Georgia. 24/7 re-issuance, cancellation, and rescheduling support on all major airlines.",
    link: "/flight-booking",
    badge: "24/7 Support",
    keywords: "Cheap Flights Bangladesh, International Air Tickets, Dhaka Airport Tickets",
    subLinks: [
      { label: "Book a Flight", href: "/flight-booking" },
      { label: "Travel Resources", href: "/travel-resources" },
      { label: "Travel Document Generator", href: "/travel-resources/travel-document-generator" },
    ],
  },
  {
    icon: <FaSuitcaseRolling />,
    title: "Holiday & Tour Packages",
    description:
      "Customized holiday deals, Umrah packages, honeymoon packages, and luxury group tours. Cox's Bazar, Thailand, Malaysia, Europe, Dubai, and worldwide destinations from Bangladesh.",
    link: "/our-services/tour-packages",
    badge: "New Deals",
    keywords: "Honeymoon Packages, Group Tours Bangladesh, Umrah Package, Cox's Bazar Tour",
    subLinks: [
      { label: "View All Packages", href: "/our-services/tour-packages" },
      { label: "Special Offers", href: "/offers" },
      { label: "Online Travel Agency BD", href: "/online-travel-agency-bangladesh" },
    ],
  },
  {
    icon: <FaTags />,
    title: "Special Offers & Discounts",
    description:
      "Limited-time travel discounts, seasonal flash sales, and bundle deals on flights, hotels, and visa packages for travelers from Bangladesh, Dubai, Armenia, and Georgia.",
    link: "/offers",
    badge: "Limited Time",
    keywords: "Travel Discounts Bangladesh, Cheap Hotel Deals, Visa Package Offers",
    subLinks: [
      { label: "Current Offers", href: "/offers" },
      { label: "Travel Agency Armenia", href: "/contact/travel-agency-armenia" },
      { label: "Travel Agency Georgia", href: "/contact/travel-agency-georgia" },
    ],
  },
  {
    icon: <FaShieldAlt />,
    title: "USA Visa Interview Preparation",
    description:
      "Bangladesh's #1 USA visa interview coaching program — 'Target USA'. Expert trainers, mock interviews, DS-160 review, and success-focused preparation for B1/B2, F1, J1 applicants.",
    link: "/target-usa-visa-interview-preparation",
    badge: "98% Success",
    keywords: "USA Visa Interview Bangladesh, B1 B2 Visa Coaching, F1 Student Visa Prep, Target USA Program",
    subLinks: [
      { label: "Target USA Program", href: "/target-usa-visa-interview-preparation" },
      { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator" },
      { label: "Processing Time Tracker", href: "/travel-resources/visa-processing-time-tracker" },
    ],
  },
  {
    icon: <FaUniversity />,
    title: "IELTS & Study Abroad",
    description:
      "Official IELTS preparation, study abroad consultancy, and immigration support for Canada, Australia, UK, and Europe. Scholarships, university admissions, and student visa guidance from Bangladesh.",
    link: "/target-ielts-immigration-center",
    badge: "Scholarship Help",
    keywords: "IELTS Preparation Bangladesh, Study Abroad Consultancy, Canada Immigration, Australia Student Visa",
    subLinks: [
      { label: "Study Abroad Overview", href: "/study-abroad" },
      { label: "Student Visa Guide", href: "/study-abroad/student-visa" },
      { label: "Scholarships", href: "/scholarships" },
      { label: "IELTS Center", href: "/target-ielts-immigration-center" },
    ],
  },
];

// ─── Why Choose Us ─────────────────────────────────────────────────────────────
const trustPoints = [
  { icon: <FaStar />, stat: "4.9★", label: "Google Rating", sub: "from 320+ reviews" },
  { icon: <FaCheckCircle />, stat: "98%", label: "Visa Success Rate", sub: "all categories" },
  { icon: <FaUserGraduate />, stat: "5,000+", label: "Happy Clients", sub: "since 2015" },
  { icon: <FaGlobeAsia />, stat: "30+", label: "Countries Covered", sub: "visa & tour" },
];

// ─── Office Locations ──────────────────────────────────────────────────────────
const offices = [
  { city: "Dhaka, Bangladesh", href: "/contact/travel-agency-bangladesh", flag: "🇧🇩" },
  { city: "Dubai, UAE", href: "/contact/travel-agency-dubai", flag: "🇦🇪" },
  { city: "Yerevan, Armenia", href: "/contact/travel-agency-armenia", flag: "🇦🇲" },
  { city: "Tbilisi, Georgia", href: "/contact/travel-agency-georgia", flag: "🇬🇪" },
];

// ─── Popular Visa Destinations ─────────────────────────────────────────────────
const visaDestinations = [
  { country: "Canada Visa", href: "/visa", flag: "🇨🇦", desc: "PR, Student & Tourist" },
  { country: "UK Visa", href: "/visa", flag: "🇬🇧", desc: "Study, Work & Visit" },
  { country: "USA Visa", href: "/target-usa-visa-interview-preparation", flag: "🇺🇸", desc: "B1/B2, F1, J1" },
  { country: "Schengen Visa", href: "/visa", flag: "🇪🇺", desc: "26 European Countries" },
  { country: "Dubai / UAE", href: "/visa/dubai-residents", flag: "🇦🇪", desc: "Visit & Work" },
  { country: "India Visa", href: "/visa/india", flag: "🇮🇳", desc: "e-Visa & On Arrival" },
  { country: "Australia Visa", href: "/visa", flag: "🇦🇺", desc: "Student & Skilled" },
  { country: "E-Visa Services", href: "/visa/e-visa", flag: "🌐", desc: "Fast Online Approval" },
];

// ─── Quick Resources ───────────────────────────────────────────────────────────
const resources = [
  { icon: <FaFileAlt />, label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator", desc: "Get a custom checklist for your visa category" },
  { icon: <FaClock />, label: "Visa Processing Time Tracker", href: "/travel-resources/visa-processing-time-tracker", desc: "Check real-time processing times by country" },
  { icon: <FaFileAlt />, label: "Travel Document Generator", href: "/travel-resources/travel-document-generator", desc: "Generate required travel documents instantly" },
  { icon: <FaShieldAlt />, label: "Visa Rejection Recovery", href: "/visa-rejection", desc: "Get expert help after a visa rejection" },
];

// ─── Animation helpers ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

// ══════════════════════════════════════════════════════════════════════════════
const OurServices = () => {
  return (
    <div className="min-h-screen bg-[#f8faf9] font-sans">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative py-28 text-white overflow-hidden"
        aria-label="Eammu Holidays – Leading Travel & Visa Agency Bangladesh"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Eammu Holidays – Best Travel Agency and Visa Consultancy in Bangladesh"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005a31]/90 to-[#005a31]/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex justify-center gap-2 text-sm text-green-300 flex-wrap">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-green-500" aria-hidden="true">/</li>
                <li className="text-white font-semibold" aria-current="page">Our Services</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-black mb-5 tracking-tight leading-tight">
              Eammu Holidays —{" "}
              <span className="text-orange-400">
                Leading Travel & Visa Agency in Bangladesh
              </span>
            </h1>
            <p className="text-lg md:text-xl text-green-50/90 max-w-4xl mx-auto font-medium leading-relaxed mb-8">
              Eammu Holidays is Bangladesh's most trusted travel agency offering{" "}
              <strong className="text-white">visa processing</strong>,{" "}
              <strong className="text-white">air ticket booking</strong>,{" "}
              <strong className="text-white">tour packages</strong>, Umrah,{" "}
              <strong className="text-white">USA interview preparation</strong>, and{" "}
              <strong className="text-white">IELTS & study abroad</strong> consultancy — serving
              clients from Dhaka, Dubai, Armenia, and Georgia since 2015.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801631312524?text=Hello%2C%20I%20need%20visa%20services"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
                aria-label="Chat on WhatsApp with Eammu Holidays visa expert"
              >
                Free Consultation (WhatsApp)
              </a>
              <Link
                href="/visa"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all"
                aria-label="Browse all visa services"
              >
                Browse Visa Services →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────────────────────── */}
      <section
        className="bg-white border-b border-gray-100 py-8 px-4 shadow-sm"
        aria-label="Eammu Holidays achievements and statistics"
      >
        <dl className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustPoints.map((t) => (
            <div key={t.label} className="flex flex-col items-center">
              <span className="text-[#005a31] text-xl mb-1" aria-hidden="true">{t.icon}</span>
              <dt className="text-2xl md:text-3xl font-black text-[#005a31]">{t.stat}</dt>
              <dd className="font-bold text-gray-700 text-sm">{t.label}</dd>
              <dd className="text-xs text-gray-400">{t.sub}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────────────────── */}
      <section
        className="container mx-auto px-4 md:px-8 py-20"
        aria-label="All services offered by Eammu Holidays"
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mb-3">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            From visa approvals to dream holidays — Eammu Holidays covers every step of your
            international travel journey with certified experts and a 98% success rate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              {...fadeUp(index * 0.08)}
              className="bg-white rounded-[2rem] p-8 shadow-lg shadow-slate-100 border border-slate-100 flex flex-col justify-between hover:shadow-2xl hover:border-green-200 transition-all group"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div>
                {/* Icon + Badge */}
                <header className="flex justify-between items-start mb-7">
                  <div className="w-14 h-14 bg-green-50 text-[#005a31] rounded-2xl flex items-center justify-center text-2xl group-hover:bg-[#005a31] group-hover:text-white transition-all duration-400 shadow-sm">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full uppercase tracking-wide">
                      {service.badge}
                    </span>
                  )}
                </header>

                {/* Title */}
                <h3
                  className="text-xl font-black text-gray-800 mb-3 group-hover:text-[#005a31] transition-colors"
                  itemProp="name"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed mb-5 text-sm" itemProp="description">
                  {service.description}
                </p>

                {/* Sub-links / internal links */}
                <ul className="space-y-1.5 mb-6" aria-label={`Related links for ${service.title}`}>
                  {service.subLinks.map((sl) => (
                    <li key={sl.href}>
                      <Link
                        href={sl.href}
                        className="text-xs text-[#005a31] hover:text-orange-500 font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" aria-hidden="true" />
                        {sl.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Hidden SEO keywords */}
                <p className="hidden" aria-hidden="true">{service.keywords}</p>
              </div>

              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-[#005a31] font-extrabold text-sm uppercase tracking-tight group-hover:gap-4 transition-all mt-2"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More <FaArrowRight className="text-orange-500" aria-hidden="true" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── VISA DESTINATIONS ─────────────────────────────────────────────── */}
      <section
        className="bg-white py-16 px-4 border-y border-gray-100"
        aria-label="Popular visa destinations from Bangladesh"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-[#005a31] mb-2">
              Popular <span className="text-orange-500">Visa Destinations</span> from Bangladesh
            </h2>
            <p className="text-gray-500 text-sm">
              Explore country-specific visa processing, requirements, and success stories.
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4" role="list">
            {visaDestinations.map((d) => (
              <li key={d.country}>
                <Link
                  href={d.href}
                  className="flex flex-col items-center gap-2 bg-gray-50 hover:bg-[#005a31] hover:text-white rounded-2xl p-5 text-center transition-all group border border-gray-100 hover:border-[#005a31] shadow-sm hover:shadow-md"
                  aria-label={`${d.country} visa services from Bangladesh`}
                >
                  <span className="text-3xl" aria-hidden="true">{d.flag}</span>
                  <span className="font-bold text-sm text-gray-800 group-hover:text-white transition-colors">
                    {d.country}
                  </span>
                  <span className="text-xs text-gray-400 group-hover:text-green-200 transition-colors">
                    {d.desc}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TRAVEL RESOURCES ──────────────────────────────────────────────── */}
      <section
        className="py-16 px-4 bg-[#f8faf9]"
        aria-label="Free visa and travel tools"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-[#005a31] mb-2">
              Free <span className="text-orange-500">Visa & Travel Tools</span>
            </h2>
            <p className="text-gray-500 text-sm">
              Use our free tools to prepare your visa application, check processing times, and
              generate required documents — available to all travellers from Bangladesh.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {resources.map((r, i) => (
              <motion.div key={r.label} {...fadeUp(i * 0.07)}>
                <Link
                  href={r.href}
                  className="flex flex-col gap-3 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all group h-full"
                  aria-label={r.label}
                >
                  <span className="w-10 h-10 bg-green-50 text-[#005a31] rounded-xl flex items-center justify-center text-lg group-hover:bg-[#005a31] group-hover:text-white transition-all" aria-hidden="true">
                    {r.icon}
                  </span>
                  <span className="font-bold text-gray-800 text-sm group-hover:text-[#005a31] transition-colors">
                    {r.label}
                  </span>
                  <span className="text-xs text-gray-400 leading-relaxed">{r.desc}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/travel-resources"
              className="inline-flex items-center gap-2 text-[#005a31] font-bold text-sm hover:text-orange-500 transition-colors"
              aria-label="View all travel resources"
            >
              View All Travel Resources <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── OFFICE LOCATIONS ──────────────────────────────────────────────── */}
      <section
        className="bg-white py-14 px-4 border-t border-gray-100"
        aria-label="Eammu Holidays office locations worldwide"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-[#005a31] mb-2">
            Find Us <span className="text-orange-500">Worldwide</span>
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Offices in Dhaka, Dubai, Armenia, and Georgia — serving clients with local expertise.
          </p>
          <ul className="flex flex-wrap justify-center gap-4" role="list">
            {offices.map((o) => (
              <li key={o.city}>
                <Link
                  href={o.href}
                  className="inline-flex items-center gap-2 bg-gray-50 hover:bg-[#005a31] hover:text-white border border-gray-200 rounded-full px-5 py-2.5 font-semibold text-sm text-gray-700 transition-all"
                  aria-label={`Eammu Holidays office in ${o.city}`}
                >
                  <span aria-hidden="true">{o.flag}</span>
                  {o.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── INTERNAL LINKS: STUDY & IMMIGRATION ──────────────────────────── */}
      <section
        className="py-14 px-4 bg-gradient-to-br from-[#004526] to-[#007a45] text-white"
        aria-label="Study abroad and immigration services"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black mb-2">
              Study Abroad &{" "}
              <span className="text-orange-400">Immigration Services</span>
            </h2>
            <p className="text-green-100/80 text-sm max-w-xl mx-auto">
              Bangladesh's leading IELTS preparation centre and immigration consultancy. Get
              into top universities in Canada, UK, Australia, and Europe with Eammu Holidays.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: "Study Abroad Overview", href: "/study-abroad", icon: <FaGlobeAsia />, desc: "Explore countries and university options" },
              { label: "Student Visa Guide", href: "/study-abroad/student-visa", icon: <FaPassport />, desc: "Step-by-step student visa process" },
              { label: "Scholarships", href: "/scholarships", icon: <FaUserGraduate />, desc: "Find full & partial scholarships" },
              { label: "IELTS Center", href: "/target-ielts-immigration-center", icon: <FaUniversity />, desc: "Official IELTS prep & immigration support" },
              { label: "USA Interview Prep", href: "/target-usa-visa-interview-preparation", icon: <FaShieldAlt />, desc: "Target USA — mock interview coaching" },
              { label: "Visa Processing Tracker", href: "/travel-resources/visa-processing-time-tracker", icon: <FaClock />, desc: "Real-time visa processing times" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-start gap-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl p-5 transition-all group"
                aria-label={item.label}
              >
                <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-orange-400 text-lg flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <div className="font-bold text-white text-sm mb-0.5">{item.label}</div>
                  <div className="text-green-200/70 text-xs">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section
        className="bg-white py-16 px-4"
        aria-label="Why choose Eammu Holidays for visa and travel services"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-[#005a31] mb-2">
              Why Choose{" "}
              <span className="text-orange-500">Eammu Holidays?</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Trusted by thousands of Bangladeshi clients for visa approvals, work permits,
              student visas, and travel packages across 30+ countries since 2015.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6" role="list">
            {[
              {
                icon: "🏆",
                title: "Certified Visa Experts",
                desc: "Licensed consultants with a 98% approval rate for Canada, UK, USA, Dubai, and Schengen visas from Bangladesh.",
              },
              {
                icon: "🌍",
                title: "30+ Countries Covered",
                desc: "Student visas, work permits, tourist visas, e-visas, and Umrah packages — all from one trusted agency.",
              },
              {
                icon: "🤝",
                title: "End-to-End Support",
                desc: "Dedicated case managers guide every client from document prep to visa stamping — with WhatsApp support.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-left"
              >
                <span className="text-3xl mb-3 block" aria-hidden="true">{item.icon}</span>
                <h3 className="font-bold text-[#005a31] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── QUICK LINKS: BLOGS, NEWS, TESTIMONIALS ────────────────────────── */}
      <section
        className="bg-gray-50 py-12 px-4 border-t border-gray-100"
        aria-label="Explore Eammu Holidays blogs, news, and testimonials"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-black text-[#005a31] mb-6 text-center">
            Explore More from <span className="text-orange-500">Eammu Holidays</span>
          </h2>
          <nav aria-label="Site-wide quick links" className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Customer Testimonials", href: "/testimonials" },
              { label: "Visa Blogs & Guides", href: "/blogs" },
              { label: "News & Updates", href: "/news-feeds" },
              { label: "Careers at Eammu", href: "/careers" },
              { label: "About Eammu Holidays", href: "/about" },
              { label: "Contact Us", href: "/contact" },
              { label: "Online Travel Agency BD", href: "/online-travel-agency-bangladesh" },
              { label: "Visa Rejection Help", href: "/visa-rejection" },
            ].map((lnk) => (
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
        </div>
      </section>

      {/* ── CTA FOOTER ────────────────────────────────────────────────────── */}
      <motion.section
        {...fadeUp()}
        className="container mx-auto px-4 md:px-8 pb-20 pt-8"
        aria-label="Contact Eammu Holidays for a free consultation"
      >
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-[#005a31] mb-1">
              Ready to plan your next journey?
            </h3>
            <p className="text-gray-500 font-medium text-sm">
              Get a <strong>free initial consultation</strong> from our certified visa and travel advisors.
              Serving clients from Bangladesh, Dubai, Armenia &amp; Georgia.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 flex-shrink-0">
            <a
              href="https://wa.me/8801631312524?text=Hello%2C%20I%20would%20like%20to%20book%20a%20service"
              className="bg-[#005a31] text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-500 transition-all shadow-md text-center"
              aria-label="Talk to a visa expert on WhatsApp"
            >
              Talk to Expert
            </a>
            <Link
              href="/contact"
              className="bg-slate-50 text-slate-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all border border-slate-200 text-center"
              aria-label="Visit Eammu Holidays support center"
            >
              Support Center
            </Link>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default OurServices;