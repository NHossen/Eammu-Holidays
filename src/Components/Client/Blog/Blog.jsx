"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import BlogSection from "@/Components/Client/BlogSection/BlogSection";

/* ─────────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────────── */

const heroSlides = [
  {
    id: 1,
    image: "/desert_kamel_egypt.jpg",
    badge: "Visa Guides 2025",
    title: "Latest Visa Updates & Travel News",
    subtitle: "Student Visa · Umrah · Holiday Tours · Immigration",
    description:
      "Stay informed with the latest visa policy changes, student visa guides, Umrah package updates, and travel tips for Bangladeshi travelers — updated regularly by Eammu Holidays experts.",
  },
  {
    id: 2,
    image: "/flight_eammu.webp",
    badge: "Expert Advice",
    title: "Student Visa Tips for UK, USA, Canada & Australia",
    subtitle: "From Bangladesh's Most Trusted Visa Consultancy",
    description:
      "Get step-by-step student visa guides, document checklists, SOP writing tips, and interview preparation advice from certified consultants at Eammu Holidays.",
  },
  {
    id: 3,
    image: "/russia-tour-packages-from-india.webp",
    badge: "Destination Guides",
    title: "Travel Guides, Holiday Tips & Tour Packages",
    subtitle: "Europe · Dubai · Thailand · Georgia · Malaysia",
    description:
      "Discover affordable holiday packages, visa-on-arrival destinations, and expert travel guides for Bangladeshi tourists looking to explore the world confidently.",
  },
];

const staticPosts = [
  {
    slug: "uk-student-visa-bangladesh-2025",
    title: "UK Student Visa Guide for Bangladeshis 2025: Documents, Cost & Process",
    category: "Student Visa",
    date: "January 15, 2025",
    readTime: "8 min read",
    excerpt:
      "Complete step-by-step guide to applying for a UK student visa from Bangladesh in 2025. Covers CAS letter, IELTS requirements, financial proof, and TB test. Updated with latest UKVI guidelines.",
    image: "/flight_eammu.webp",
    tags: ["UK Visa", "Student Visa", "Bangladesh"],
  },
  {
    slug: "umrah-packages-bangladesh-2025",
    title: "Umrah Packages from Bangladesh 2025: Cost, Airlines & Best Deals",
    category: "Umrah",
    date: "February 3, 2025",
    readTime: "6 min read",
    excerpt:
      "Everything you need to know about Umrah packages from Bangladesh in 2025 — pricing, airlines, hotel options, visa process, and the best time to travel for affordable packages.",
    image: "/the-love-island.webp",
    tags: ["Umrah", "Saudi Arabia", "Bangladesh"],
  },
  {
    slug: "canada-pr-process-bangladesh",
    title: "Canada PR Process from Bangladesh 2025: Express Entry & Points Calculator",
    category: "Immigration",
    date: "February 20, 2025",
    readTime: "10 min read",
    excerpt:
      "Full guide to Canada Permanent Residency from Bangladesh via Express Entry, PNP, and Federal Skilled Worker programs. Includes CRS score calculator tips and document checklist.",
    image: "/bangladesh_europe_couple.webp",
    tags: ["Canada PR", "Immigration", "Express Entry"],
  },
  {
    slug: "georgia-visa-free-bangladesh",
    title: "Georgia Visa Free for Bangladesh: 365-Day Entry Guide 2025",
    category: "Destination Guide",
    date: "March 5, 2025",
    readTime: "5 min read",
    excerpt:
      "Bangladeshi passport holders can enter Georgia visa-free for up to 365 days. Here's everything to know about costs, entry requirements, and top things to do in Tbilisi.",
    image: "/russia-tour-packages-from-india.webp",
    tags: ["Georgia", "Visa Free", "Travel Tips"],
  },
  {
    slug: "schengen-visa-bangladesh-2025",
    title: "Schengen Visa from Bangladesh 2025: Requirements, Countries & Tips",
    category: "Visa Guide",
    date: "March 18, 2025",
    readTime: "9 min read",
    excerpt:
      "Applying for a Schengen visa from Bangladesh? Learn the requirements, best countries to apply through (Germany, Spain, France), document checklist, and how to avoid rejection.",
    image: "/desert_kamel_egypt.jpg",
    tags: ["Schengen Visa", "Europe", "Bangladesh"],
  },
  {
    slug: "dubai-tourist-visa-bangladesh-2025",
    title: "Dubai Tourist Visa for Bangladeshis 2025: Apply Online & Costs",
    category: "Visa Guide",
    date: "April 2, 2025",
    readTime: "6 min read",
    excerpt:
      "Step-by-step guide to getting a Dubai tourist visa from Bangladesh — 30-day vs 60-day visa, online application process, cost, and documents required for approval.",
    image: "/the-love-island.webp",
    tags: ["Dubai Visa", "UAE", "Tourism"],
  },
  {
    slug: "malaysia-evisa-bangladesh-2025",
    title: "Malaysia e-Visa for Bangladeshis 2025: Apply Online Step by Step",
    category: "Visa Guide",
    date: "April 15, 2025",
    readTime: "5 min read",
    excerpt:
      "How to apply for a Malaysia e-Visa from Bangladesh online. Covers eligibility, required documents, fee structure, processing time, and common rejection reasons to avoid.",
    image: "/flight_eammu.webp",
    tags: ["Malaysia Visa", "e-Visa", "Southeast Asia"],
  },
  {
    slug: "thailand-visa-on-arrival-bangladesh",
    title: "Thailand Visa on Arrival for Bangladeshis: Complete 2025 Guide",
    category: "Destination Guide",
    date: "May 1, 2025",
    readTime: "5 min read",
    excerpt:
      "Bangladeshis can get a Thailand visa on arrival for 30 days. Learn the process, fees, what to carry at the counter, and how to extend your stay legally.",
    image: "/the-love-island.webp",
    tags: ["Thailand", "Visa on Arrival", "Travel"],
  },
  {
    slug: "australia-student-visa-bangladesh-2025",
    title: "Australia Student Visa (Subclass 500) from Bangladesh: 2025 Full Guide",
    category: "Student Visa",
    date: "May 20, 2025",
    readTime: "11 min read",
    excerpt:
      "Planning to study in Australia from Bangladesh? This complete guide covers the Subclass 500 student visa — CoE, GTE statement, financial evidence, health insurance, and English requirements.",
    image: "/bangladesh_europe_couple.webp",
    tags: ["Australia Visa", "Student Visa", "Study Abroad"],
  },
];

const trendingTopics = [
  { label: "UK Student Visa 2025", href: "/study-abroad/student-visa/united-kingdom", icon: "🎓" },
  { label: "Umrah Packages", href: "/", icon: "🕌" },
  { label: "Canada PR", href: "/visa/visa-guide/canada-visa-for-bangladesh", icon: "🍁" },
  { label: "Schengen Visa", href: "/schengen-visa", icon: "🇪🇺" },
  { label: "Dubai Tourist Visa", href: "/visa/united-arab-emirates-visa", icon: "🏙️" },
  { label: "Georgia Visa Free", href: "/visa/georgia", icon: "🇬🇪" },
  { label: "Malaysia e-Visa", href: "/visa/malaysia", icon: "🌴" },
  { label: "USA Visa Tips", href: "/visa/united-states", icon: "🗽" },
  { label: "Australia Student Visa", href: "/study-abroad/student-visa/australia", icon: "🦘" },
  { label: "Thailand Visa on Arrival", href: "/visa/thailand", icon: "🐘" },
];

// Extended FAQ — more entries = more long-tail keyword coverage
const blogFaqs = [
  {
    category: "Student Visa",
    q: "Which country offers the easiest student visa for Bangladeshis in 2025?",
    a: "Germany (free tuition at public universities), UK, and Japan currently offer the most accessible student visa processes for Bangladeshi applicants with high approval rates and clear documentation requirements. Germany requires IELTS 6.0 or TestDaF for English-taught programmes and has very low rejection rates for well-prepared applicants.",
  },
  {
    category: "Student Visa",
    q: "What documents are required for a UK student visa from Bangladesh?",
    a: "You need a valid CAS (Confirmation of Acceptance for Studies), IELTS 6.0+ certificate, financial evidence (£1,334/month for London), tuberculosis test, valid passport, and educational certificates. Eammu Holidays helps you prepare every document correctly, check your financial statement, and submit a strong supporting letter.",
  },
  {
    category: "Student Visa",
    q: "How much bank balance is required for a UK student visa from Bangladesh?",
    a: "For a UK student visa, you must show 28 consecutive days of bank statements covering your tuition fees for the first year plus living costs — £1,334/month for London or £1,023/month outside London. For a 9-month course in London, you need approximately £12,000 in addition to the first year's tuition fees.",
  },
  {
    category: "Student Visa",
    q: "Can I work in the UK on a student visa from Bangladesh?",
    a: "Yes. UK student visa holders can work up to 20 hours per week during term time and full-time during official holidays. This applies to courses at UK universities (CAS issued by a licensed sponsor). You cannot be self-employed or work as a professional sportsperson on a student visa.",
  },
  {
    category: "Visa Rejection",
    q: "How can I avoid visa rejection for USA and Canada?",
    a: "Strong financial documentation and proving 'Home Ties' (property, employment, family responsibilities) are critical. Avoid gaps in your travel history, maintain consistent bank statements for 6 months, and write a compelling purpose-of-travel letter. Our consultants review your full case before submission to identify weak points before they reach the embassy.",
  },
  {
    category: "Visa Rejection",
    q: "What are the most common reasons for Schengen visa rejection from Bangladesh?",
    a: "The top reasons for Schengen visa refusal from Bangladesh include: insufficient financial proof, unclear travel itinerary, weak ties to home country, incomplete documentation, and inconsistency between employment/income documents. Applying through Germany or Spain embassies and hiring a certified consultant significantly reduces rejection risk.",
  },
  {
    category: "Umrah",
    q: "How much does an Umrah package from Bangladesh cost in 2025?",
    a: "Umrah packages from Bangladesh range from BDT 1,20,000 to BDT 2,50,000+ depending on season, hotel star rating (3–5 star), and duration (7–21 days). Eammu Holidays offers all-inclusive packages covering visa, flights, hotel, and licensed guide. Ramadan packages are 30–40% more expensive due to high demand.",
  },
  {
    category: "Umrah",
    q: "What documents are required for an Umrah visa from Bangladesh?",
    a: "Required documents for an Umrah visa from Bangladesh include: valid passport (6 months validity), recent passport-size photos with white background, completed Umrah visa application, meningitis vaccination certificate (ACWY), and for women under 45 — a mahram (male guardian) declaration. Eammu Holidays processes all paperwork on your behalf.",
  },
  {
    category: "Destination",
    q: "Can Bangladeshis get a Georgia visa on arrival in 2025?",
    a: "Yes. Bangladeshi passport holders can enter Georgia visa-free for up to 365 days — no prior visa application needed. It is one of the most accessible international destinations with beautiful landscapes, affordable living costs (~$30–50/day), and a welcoming entry policy. Tbilisi, Batumi, and Kazbegi are top destinations.",
  },
  {
    category: "Destination",
    q: "Is Thailand safe for Bangladeshi tourists in 2025?",
    a: "Yes. Thailand is one of the safest and most popular destinations for Bangladeshi tourists. With visa on arrival (30 days, ~$35), abundant halal food in Bangkok and Pattaya, affordable hotel options, and world-famous beaches in Phuket and Koh Samui, Thailand consistently ranks as the top holiday destination for Bangladeshi travelers.",
  },
  {
    category: "Immigration",
    q: "How can I apply for Canada PR from Bangladesh?",
    a: "Canada PR is primarily obtained through Express Entry (Federal Skilled Worker, Canadian Experience Class) or Provincial Nominee Programs (PNP). You need a CRS score (ideally 470+), IELTS 7.0+, relevant work experience, and an ECA (Educational Credential Assessment). The full process takes 6–18 months. Eammu Holidays guides you through every step from profile creation to ITA.",
  },
  {
    category: "Immigration",
    q: "What is the minimum IELTS score required for Canada PR from Bangladesh?",
    a: "For Canada Express Entry (Federal Skilled Worker), the minimum IELTS score is CLB 7, which corresponds to IELTS 6.0 in all bands. However, scoring CLB 9 (IELTS 7.5+) adds 50–74 CRS points, significantly improving your chances of receiving an Invitation to Apply (ITA). Higher IELTS scores are the single most impactful way to increase your CRS score.",
  },
  {
    category: "Destination",
    q: "What are the cheapest countries to visit from Bangladesh?",
    a: "The most affordable destinations for Bangladeshis include: Georgia (365-day visa-free, ~$30/day), Thailand (visa on arrival, ~$40/day), Nepal (visa on arrival, ~$25/day), Malaysia (e-Visa, ~$45/day), India (e-Visa, ~$20/day), Sri Lanka (e-Visa, ~$30/day), and Maldives. Most offer easy entry with low flight costs from Dhaka's Hazrat Shahjalal Airport.",
  },
  {
    category: "Visa Guide",
    q: "How long does Schengen visa processing take from Bangladesh?",
    a: "Schengen visa processing typically takes 15 calendar days from the application date, though it can extend to 30–45 days for complex cases or peak travel seasons (June–August, December). Apply at least 6 weeks before travel. Germany, Spain, and France embassies are generally the fastest in Bangladesh. VFS Global handles most Schengen applications in Dhaka.",
  },
  {
    category: "Visa Guide",
    q: "Can I get a Dubai tourist visa from Bangladesh without a sponsor?",
    a: "Yes. Bangladeshis can apply for a Dubai tourist visa directly online via Dubai Tourism's portal or through travel agencies like Eammu Holidays without needing a UAE sponsor. You need a valid passport, photo, bank statement (3 months), and confirmed return ticket. A 30-day single-entry visa costs approximately BDT 12,000–15,000 all-inclusive.",
  },
  {
    category: "Visa Guide",
    q: "How do I apply for an Australia student visa (Subclass 500) from Bangladesh?",
    a: "Apply online via the ImmiAccount portal after receiving your CoE (Confirmation of Enrolment). Key documents include: valid passport, CoE, English test results (IELTS 6.0+), financial evidence (~AUD 21,041/year), Overseas Student Health Cover (OSHC), and a Genuine Temporary Entrant (GTE) statement. Eammu Holidays provides full document preparation and GTE letter writing support.",
  },
];

const shorts = [
  { id: "Xa_6Big09QM", title: "FEEL THE HEAT! WITH EAMMU FIRE SHOW DESERT SAFARI" },
  { id: "ZwbS9-cnE7U", title: "DESERT SAFARI DUBAI WITH EAMMU" },
  { id: "wBEWAeP8AEI", title: "THAILAND TOUR PACKAGES With Eammu" },
  { id: "HEKzY7yBb24", title: "Love Lake Dubai & Salt Lake Dubai Tour" },
];

// New: Top destinations for Bangladeshis
const topDestinations = [
  { flag: "🇬🇧", name: "United Kingdom",  tag: "Student Favourite", color: "from-blue-600 to-blue-800",   visaType: "Student / Visit",  time: "3 weeks"   },
  { flag: "🇦🇪", name: "Dubai, UAE",       tag: "Most Popular",     color: "from-amber-500 to-orange-600", visaType: "Tourist Visa",     time: "3–5 days"  },
  { flag: "🇨🇦", name: "Canada",           tag: "Top PR Destination",color: "from-red-600 to-red-800",    visaType: "Student / PR",     time: "8–16 wks"  },
  { flag: "🇩🇪", name: "Germany",          tag: "Schengen Gateway",  color: "from-gray-700 to-gray-900",  visaType: "Schengen",         time: "15 days"   },
  { flag: "🇹🇭", name: "Thailand",         tag: "Budget Holiday",    color: "from-purple-600 to-purple-800",visaType: "Visa on Arrival", time: "On Arrival"},
  { flag: "🇬🇪", name: "Georgia",          tag: "Visa-Free 365d",    color: "from-rose-600 to-pink-700",  visaType: "Visa-Free",        time: "Instant"   },
];

// New: Success stats for trust building
const trustStats = [
  { number: "10,000+", label: "Happy Clients", icon: "😊" },
  { number: "95%",     label: "Visa Success Rate", icon: "✅" },
  { number: "50+",     label: "Countries Covered", icon: "🌍" },
  { number: "3+",      label: "Years Experience", icon: "🏆" },
];

const categoryColors = {
  "Student Visa":    "bg-blue-50 text-blue-700 border-blue-100",
  "Umrah":           "bg-yellow-50 text-yellow-700 border-yellow-100",
  "Immigration":     "bg-purple-50 text-purple-700 border-purple-100",
  "Destination Guide":"bg-green-50 text-green-700 border-green-100",
  "Visa Guide":      "bg-orange-50 text-orange-700 border-orange-100",
};

const fadeIn = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ─────────────────────────────────────────────
   STATIC POST CARD
───────────────────────────────────────────── */
const StaticPostCard = ({ post }) => (
  <motion.article
    variants={fadeIn}
    whileHover={{ y: -6 }}
    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-500 flex flex-col h-full"
    itemScope
    itemType="https://schema.org/BlogPosting"
  >
    <meta itemProp="author" content="Eammu Holidays" />
    <meta itemProp="publisher" content="Eammu Holidays" />

    <div className="relative h-48 overflow-hidden">
      <Image
        src={post.image}
        alt={`${post.title} – Eammu Holidays Blog`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        itemProp="image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <div className="absolute top-3 left-3">
        <span className={`text-xs font-black px-3 py-1 rounded-full border ${categoryColors[post.category] || "bg-gray-50 text-gray-600 border-gray-100"}`}>
          {post.category}
        </span>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
        <time dateTime={post.date} itemProp="datePublished">{post.date}</time>
        <span>·</span>
        <span itemProp="timeRequired">{post.readTime}</span>
      </div>

      <h3 itemProp="headline" className="font-extrabold text-gray-800 text-base leading-snug mb-3 group-hover:text-[#005a31] transition-colors line-clamp-2">
        {post.title}
      </h3>

      <p itemProp="description" className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
        {post.excerpt}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 bg-green-50 text-[#005a31] rounded-full font-semibold">
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-50">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-xs font-black text-[#005a31] uppercase tracking-wider group-hover:gap-3 gap-2 transition-all"
          itemProp="url"
        >
          Read Full Guide
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-green-100 transition-colors overflow-hidden"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-5 md:p-6 flex items-start justify-between gap-4 text-left focus:outline-none"
        aria-expanded={open}
      >
        <div className="flex items-start gap-3">
          <span className={`text-xs font-black px-2.5 py-1 rounded-full shrink-0 mt-0.5 ${categoryColors[faq.category] || "bg-gray-50 text-gray-600"}`}>
            {faq.category}
          </span>
          <span itemProp="name" className={`font-bold text-sm md:text-base transition-colors ${open ? "text-[#005a31]" : "text-gray-800"}`}>
            {faq.q}
          </span>
        </div>
        <span className={`text-[#005a31] shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all text-lg leading-none ${open ? "border-[#005a31] rotate-45" : "border-gray-200"}`}>
          +
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <p itemProp="text" className="px-5 md:px-6 pb-5 text-gray-600 text-sm leading-relaxed border-l-4 border-[#ffcc00] ml-5 md:ml-6">
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
const Blogs = () => {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main itemScope itemType="https://schema.org/Blog">
      {/* Hidden SEO meta */}
      <meta itemProp="name"        content="Eammu Holidays Travel & Visa Blog" />
      <meta itemProp="description" content="Expert visa guides, student visa tips, Umrah updates, holiday destination guides, and immigration news from Eammu Holidays Bangladesh." />
      <meta itemProp="url"         content="https://www.eammuholidays.com/blog" />
      <link itemProp="sameAs"      href="https://www.facebook.com/eammuholidays" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        aria-label="Eammu Holidays travel blog hero"
        className="relative min-h-[58vh] md:min-h-[65vh] flex items-center justify-center py-24 px-4 overflow-hidden"
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
                alt={`Eammu Holidays Blog – ${heroSlides[currentHero].title}`}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/15 z-10" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-20 w-full max-w-4xl mx-auto text-center px-4">
          <motion.div
            key={currentHero}
            initial={{ opacity: 0, y: 22 }}
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
            <p className="text-[#ffcc00] font-bold text-sm md:text-base">
              {heroSlides[currentHero].subtitle}
            </p>
            <p className="max-w-2xl mx-auto text-gray-200 text-sm md:text-base leading-relaxed">
              {heroSlides[currentHero].description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/8801701699743"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#ffcc00] text-[#005a31] px-8 py-3 rounded-2xl font-black text-sm hover:bg-yellow-300 transition uppercase tracking-wide shadow-lg"
              >
                💬 Free Visa Consultation
              </a>
              <Link
                href="#guides"
                className="w-full sm:w-auto bg-white/15 backdrop-blur border border-white/30 text-white px-8 py-3 rounded-2xl font-bold text-sm hover:bg-white/25 transition"
              >
                📖 Browse Guides ↓
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentHero(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 focus:outline-none ${
                i === currentHero ? "w-10 bg-[#ffcc00]" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRENDING TOPICS STRIP
      ══════════════════════════════════════════ */}
      <section aria-label="Trending visa and travel topics" className="bg-[#005a31] py-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 flex-nowrap md:flex-wrap md:justify-center">
            <span className="text-[#ffcc00] text-xs font-black uppercase tracking-wider shrink-0 mr-2">
              🔥 Trending:
            </span>
            {trendingTopics.map((topic, i) => (
              <Link
                key={i}
                href={topic.href}
                className="shrink-0 flex items-center gap-1.5 text-white text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#ffcc00] hover:text-[#005a31] transition whitespace-nowrap"
              >
                <span>{topic.icon}</span>
                {topic.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    {/* ══════════════════════════════════════════
            DYNAMIC BLOGGER POSTS
        ══════════════════════════════════════════ */}
        <section aria-label="Latest blog posts from Eammu Holidays">
          <BlogSection />
        </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20 sm:space-y-28">

        {/* ══════════════════════════════════════════
            TRUST STATS BAR
        ══════════════════════════════════════════ */}
        <section aria-label="Eammu Holidays trust statistics">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {trustStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeIn}
                className="text-center bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-3xl p-6 shadow-sm"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#005a31]">{stat.number}</div>
                <div className="text-xs font-bold text-gray-500 mt-1 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>
  

        {/* ══════════════════════════════════════════
            SEO INTRO TEXT BLOCK
        ══════════════════════════════════════════ */}
        <section aria-label="About Eammu Holidays blog">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl border border-green-100 p-7 md:p-10 space-y-5">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Bangladesh's Most Trusted <span className="text-[#005a31]">Travel & Visa Resource</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-4xl">
              Welcome to the <strong>Eammu Holidays Blog</strong> — your go-to source for accurate, up-to-date
              visa guides, travel tips, and immigration news for Bangladeshi travelers. Our certified visa
              consultants regularly publish expert articles covering <strong>UK student visa processes</strong>,{" "}
              <strong>Schengen visa requirements</strong>, <strong>Umrah package updates</strong>,{" "}
              <strong>Canada PR pathways</strong>, and <strong>visa-free destinations for Bangladesh passport holders</strong>.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm max-w-4xl">
              With <strong>10,000+ happy clients</strong> and a <strong>95% visa success rate</strong>, Eammu
              Holidays has been helping Bangladeshis travel the world since 2022 — from student visas to luxury
              holiday tours. Our expert visa consultants hold AIRC certification and have successfully processed
              applications for 50+ countries including the UK, USA, Canada, Australia, Schengen, and the UAE.
              Browse our guides, stay informed, and contact our experts for a free consultation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                { icon: "📋", title: "Document Preparation", desc: "Complete support for all visa documents, bank statements, and supporting letters" },
                { icon: "🎯", title: "High Approval Rate", desc: "95% success rate across UK, Schengen, Canada, and Australia visa applications" },
                { icon: "🚀", title: "Fast Processing", desc: "Express processing available for urgent Dubai, Malaysia, and Thailand visas" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-green-50 shadow-sm">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-sm font-extrabold text-gray-800 mb-1">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {["UK Visa", "USA Visa", "Canada PR", "Schengen", "Umrah", "Dubai", "Georgia", "Malaysia", "Thailand", "Australia"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 bg-white border border-green-100 text-[#005a31] font-bold rounded-full shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            TOP DESTINATIONS CARDS
        ══════════════════════════════════════════ */}
        <section aria-label="Top visa destinations for Bangladeshi travelers">
          <div className="text-center space-y-3 mb-10">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">Popular Routes</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Top Visa Destinations for Bangladeshis
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              The most applied-for countries by Bangladeshi travelers — with visa type and typical processing time.
            </p>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
          >
            {topDestinations.map((dest) => (
              <motion.div
                key={dest.name}
                variants={fadeIn}
                whileHover={{ y: -6, scale: 1.03 }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${dest.color} p-4 sm:p-5 text-white text-center shadow-lg cursor-pointer`}
              >
                <div className="text-3xl sm:text-4xl mb-2">{dest.flag}</div>
                <p className="font-extrabold text-sm leading-tight">{dest.name}</p>
                <p className="text-[10px] font-bold opacity-80 mt-1 uppercase tracking-wider">{dest.visaType}</p>
                <div className="mt-3 bg-white/20 rounded-xl px-2 py-1">
                  <p className="text-[10px] font-black">⏱ {dest.time}</p>
                </div>
                <div className="absolute -top-1 -right-1 bg-[#ffcc00] text-[#005a31] text-[9px] font-black px-2 py-0.5 rounded-bl-xl">
                  {dest.tag}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════
            SEO BLOG POSTS
        ══════════════════════════════════════════ */}
        <section id="guides" aria-label="Featured travel and visa guides">
          <div className="text-center space-y-3 mb-10">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">Expert Guides</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Most Searched Visa & Travel Guides
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Detailed, regularly updated guides on the visa processes and travel destinations Bangladeshi travelers search for most.
            </p>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {staticPosts.map((post, i) => (
              <StaticPostCard key={post.slug} post={post} index={i} />
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#005a31] text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:bg-green-800 transition shadow-md uppercase tracking-wide"
            >
              View All Guides →
            </Link>
          </div>
        </section>

  
        {/* ══════════════════════════════════════════
            VISA QUICK REFERENCE TABLE
        ══════════════════════════════════════════ */}
        <section aria-label="Visa requirements quick reference for Bangladeshis">
          <div className="text-center space-y-3 mb-10">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">Quick Reference</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Popular Visas for Bangladeshis — At a Glance
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Processing times, costs, and difficulty levels for the most-applied-for visas from Bangladesh.
            </p>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm" aria-label="Visa comparison table for Bangladeshi travelers">
                <thead>
                  <tr className="bg-[#005a31] text-white">
                    {["Country / Visa", "Type", "Processing Time", "Approx. Cost", "IELTS Required", "Difficulty"].map((h) => (
                      <th key={h} className="text-left px-4 py-4 font-bold text-xs uppercase tracking-wider whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { country: "🇬🇧 United Kingdom",    type: "Student Visa",       time: "3 weeks",      cost: "BDT ~55,000", ielts: "6.0+",     diff: "Moderate",  diffColor: "text-yellow-600" },
                    { country: "🇺🇸 USA",                type: "Tourist / Student", time: "4–8 weeks",    cost: "BDT ~15,000", ielts: "6.5+",     diff: "Hard",      diffColor: "text-red-600"    },
                    { country: "🇨🇦 Canada",             type: "Student / PR",      time: "8–16 weeks",   cost: "BDT ~25,000", ielts: "7.0+",     diff: "Moderate",  diffColor: "text-yellow-600" },
                    { country: "🇦🇺 Australia",          type: "Student Visa",      time: "4–8 weeks",    cost: "BDT ~50,000", ielts: "6.0+",     diff: "Moderate",  diffColor: "text-yellow-600" },
                    { country: "🇩🇪 Germany (Schengen)", type: "Student / Tourist", time: "15 days",      cost: "BDT ~8,000",  ielts: "Optional", diff: "Moderate",  diffColor: "text-yellow-600" },
                    { country: "🇦🇪 Dubai (UAE)",        type: "Tourist Visa",      time: "3–5 days",     cost: "BDT ~15,000", ielts: "Not req.", diff: "Easy",      diffColor: "text-green-600"  },
                    { country: "🇬🇪 Georgia",            type: "Visa-Free (365d)",  time: "On arrival",   cost: "Free",        ielts: "Not req.", diff: "Very Easy", diffColor: "text-green-600"  },
                    { country: "🇹🇭 Thailand",           type: "Visa on Arrival",   time: "On arrival",   cost: "~$35",        ielts: "Not req.", diff: "Very Easy", diffColor: "text-green-600"  },
                    { country: "🇲🇾 Malaysia",           type: "e-Visa",            time: "1–3 days",     cost: "~$25",        ielts: "Not req.", diff: "Easy",      diffColor: "text-green-600"  },
                    { country: "🇸🇦 Saudi Arabia",       type: "Umrah Visa",        time: "7–14 days",    cost: "In package",  ielts: "Not req.", diff: "Easy",      diffColor: "text-green-600"  },
                    { country: "🇯🇵 Japan",              type: "Tourist Visa",      time: "5–7 days",     cost: "BDT ~5,000",  ielts: "Not req.", diff: "Moderate",  diffColor: "text-yellow-600" },
                    { country: "🇸🇬 Singapore",         type: "Tourist Visa",      time: "3–5 days",     cost: "BDT ~8,000",  ielts: "Not req.", diff: "Moderate",  diffColor: "text-yellow-600" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"} hover:bg-green-50/30 transition-colors`}>
                      <td className="px-4 py-3.5 font-semibold text-gray-800 whitespace-nowrap">{row.country}</td>
                      <td className="px-4 py-3.5 text-gray-600">{row.type}</td>
                      <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">{row.time}</td>
                      <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">{row.cost}</td>
                      <td className="px-4 py-3.5 text-gray-600">{row.ielts}</td>
                      <td className={`px-4 py-3.5 font-bold whitespace-nowrap ${row.diffColor}`}>{row.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-4 bg-green-50/50 border-t border-green-100">
              <p className="text-xs text-gray-500">
                💡 Costs and timelines are approximate and subject to change. Contact{" "}
                <a href="https://wa.me/8801701699743" target="_blank" rel="noopener noreferrer" className="text-[#005a31] font-bold hover:underline">
                  Eammu Holidays
                </a>{" "}
                for current rates and personalised advice for your specific case.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PROCESS STEPS — HOW WE HELP
        ══════════════════════════════════════════ */}
        <section aria-label="How Eammu Holidays helps with visa applications">
          <div className="text-center space-y-3 mb-10">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              How Eammu Holidays Gets You Your Visa
            </h2>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { step: "01", icon: "📞", title: "Free Consultation", desc: "Call or WhatsApp our certified consultants. We assess your profile, travel history, and visa type for free — no commitment required." },
              { step: "02", icon: "📋", title: "Document Checklist", desc: "Receive a personalised checklist of every document needed for your specific visa. We guide you on bank statements, SOPs, and employer letters." },
              { step: "03", icon: "✍️", title: "Application Filing",  desc: "Our team prepares, reviews, and submits your visa application — ensuring every form is correct and every document meets embassy standards." },
              { step: "04", icon: "✈️", title: "Visa & Travel",       desc: "Receive your visa and travel with confidence. We also assist with flight bookings, hotel reservations, and travel insurance if needed." },
            ].map((s) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-green-100 transition-all"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#ffcc00] rounded-xl flex items-center justify-center text-[#005a31] font-black text-xs shadow">
                  {s.step}
                </div>
                <div className="text-3xl mb-4 mt-2">{s.icon}</div>
                <h3 className="font-extrabold text-gray-800 text-base mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FAQ SECTION
        ══════════════════════════════════════════ */}
        <section
          aria-label="Travel and visa FAQ for Bangladeshis"
          className="space-y-10"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="text-center space-y-3">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">Expert Answers</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Frequently Asked Travel & Visa Questions
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Answers from Eammu Holidays' certified visa consultants — covering the most searched
              travel and visa questions from Bangladeshi travelers in 2025.
            </p>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {blogFaqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>

          <div className="text-center pt-2">
            <a
              href="https://wa.me/8801701699743"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#005a31] text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-green-800 transition shadow-lg shadow-green-900/20 uppercase tracking-wide"
            >
              💬 Get Free 1-on-1 Consultation
            </a>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            VIDEO SHORTS
        ══════════════════════════════════════════ */}
        <section aria-label="Eammu Holidays travel videos and holiday packages">
          <div className="text-center space-y-3 mb-10">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">Watch & Explore</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Holiday Packages & Travel Videos
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              See real tour experiences from Eammu Holidays clients — Desert Safari Dubai, Thailand tours, and more.
            </p>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {shorts.map((video) => (
              <div key={video.id} className="rounded-3xl overflow-hidden shadow-lg aspect-[9/16] bg-black border-2 border-white">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=0&mute=1&loop=1&playlist=${video.id}`}
                  title={video.title}
                  allowFullScreen
                  loading="lazy"
                  aria-label={`Watch: ${video.title}`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SEO RICH TEXT FOOTER BLOCK
        ══════════════════════════════════════════ */}
        <section aria-label="About Eammu Holidays visa services Bangladesh">
          <div className="bg-gray-50 rounded-3xl border border-gray-100 p-7 md:p-10">
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">
              About Eammu Holidays — Bangladesh's Leading Visa Consultancy
            </h2>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed max-w-5xl">
              <p>
                <strong className="text-gray-800">Eammu Holidays</strong> is a ATAB-registered travel and visa consultancy based in Dhaka, Bangladesh, specializing in{" "}
                <strong>student visa processing for UK, USA, Canada, and Australia</strong>, Schengen visa applications,{" "}
                <strong>Umrah and Hajj packages</strong>, and affordable holiday tours across Europe, Southeast Asia, and the Middle East. Since 2022, we have successfully processed over 10,000 visa applications with a{" "}
                <strong>95% success rate</strong>.
              </p>
              <p>
                Our certified visa consultants provide end-to-end support — from initial eligibility assessment and document preparation to embassy submission and post-visa travel planning. We specialize in{" "}
                <strong>UK Tier 4 student visas</strong>, <strong>Canada Express Entry</strong>, <strong>Schengen tourist visas</strong>, <strong>Dubai tourist visas</strong>, and{" "}
                <strong>Australia Subclass 500 student visas</strong> for Bangladeshi nationals.
              </p>
              <p>
                Whether you are a student seeking admission to a top UK or Canadian university, a family planning an Umrah trip, or a tourist exploring the visa-free destination of Georgia or Thailand — Eammu Holidays provides expert guidance, transparent pricing, and fast turnaround times. Contact us via{" "}
                <a href="https://wa.me/8801701699743" className="text-[#005a31] font-bold hover:underline">WhatsApp</a> for a free consultation.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Visa Consultancy Bangladesh", "UK Student Visa Dhaka", "Schengen Visa Bangladesh",
                "Canada PR Bangladesh", "Umrah Package 2025", "Dubai Tourist Visa Bangladesh",
                "Australia Student Visa", "Georgia Visa Free Bangladesh", "Thailand Tour Package Dhaka",
              ].map((kw) => (
                <span key={kw} className="text-[11px] px-3 py-1 bg-white border border-gray-200 text-gray-500 font-semibold rounded-full">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════ */}
        <section
          aria-label="Contact Eammu Holidays for visa and travel support"
          className="relative bg-[#005a31] rounded-[2.5rem] p-8 md:p-14 text-center text-white overflow-hidden space-y-6"
        >
          <div className="relative z-10 space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[#ffcc00] text-[#005a31] rounded-full text-xs font-black uppercase tracking-wider">
              Free Consultation
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold">
              Need Visa Help or Travel Planning?
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">
              Contact Eammu Holidays for expert guidance on student visas, Umrah packages, holiday tours,
              and immigration to UK, USA, Canada, Australia, and Europe — with a{" "}
              <strong className="text-[#ffcc00]">95% visa success rate</strong> and{" "}
              <strong className="text-[#ffcc00]">10,000+ happy clients</strong> from across Bangladesh.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm pt-2">
              {["✅ ATAB Registered", "✅ 95% Success Rate", "✅ Free Consultation", "✅ Express Processing"].map((f) => (
                <span key={f} className="text-green-200 font-semibold">{f}</span>
              ))}
            </div>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href="https://wa.me/8801701699743"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#ffcc00] text-[#005a31] px-10 py-4 rounded-2xl font-black text-sm hover:bg-yellow-300 transition uppercase tracking-wide shadow-lg"
            >
              💬 WhatsApp Us Now
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white/10 backdrop-blur text-white border border-white/30 px-10 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 transition uppercase tracking-wide"
            >
              📞 Contact Us
            </Link>
            <Link
              href="/visa"
              className="w-full sm:w-auto bg-white/10 backdrop-blur text-white border border-white/30 px-10 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 transition uppercase tracking-wide"
            >
              🌍 All Visa Services
            </Link>
          </div>
          <div className="absolute -bottom-14 -right-14 w-60 h-60 bg-[#ffcc00] rounded-full blur-[80px] opacity-10 pointer-events-none" />
          <div className="absolute -top-14 -left-14 w-60 h-60 bg-green-300 rounded-full blur-[80px] opacity-10 pointer-events-none" />
        </section>

      </div>
    </main>
  );
};

export default Blogs;