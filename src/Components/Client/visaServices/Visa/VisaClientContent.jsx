"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { countries, popularRoutes, categories } from '@/data/visaData/visaData';
import VisaSearchBar from '../../HeroHome/VisaSearchBar/VisaSearchBar';

// ─── INTERNAL LINKING DATA ───────────────────────────────────────────────────

const VISA_TYPES = [
  { label: 'Tourist Visa', href: '/our-services/visa-services/tourist-visa-from-bangladesh' },
  { label: 'Student Visa', href: '/our-services/visa-services/student-visa-from-bangladesh' },
  { label: 'Work Visa',    href: '/our-services/visa-services/work-visa-from-bangladesh' },
];

const COUNTRY_QUICK_LINKS = [
  { name: 'USA',          href: '/our-services/visa/usa-visa-application' },
  { name: 'UK',           href: '/our-services/visa/uk-visa-application' },
  { name: 'Europe',       href: '/our-services/visa/europe-visa-application' },
  { name: 'Canada',       href: '/our-services/visa/canada-visa-application' },
  { name: 'Australia',    href: '/our-services/visa/australia-visa-application' },
  { name: 'Germany',      href: '/our-services/visa/germany-visa-application' },
  { name: 'Portugal',     href: '/our-services/visa/portugal-visa-application' },
  { name: 'Armenia',      href: '/our-services/visa/armenia-visa-application' },
  { name: 'Georgia',      href: '/our-services/visa/georgia-visa-application' },
  { name: 'Albania',      href: '/our-services/visa/albania-visa-application' },
  { name: 'Dubai',        href: '/our-services/visa/dubai-visa-application' },
  { name: 'Qatar',        href: '/our-services/visa/qatar-visa-application' },
  { name: 'Japan',        href: '/our-services/visa/japan-visa-application' },
  { name: 'China',        href: '/our-services/visa/china-visa-application' },
  { name: 'South Korea',  href: '/our-services/visa/south-korea-visa-application' },
  { name: 'Spain',        href: '/our-services/visa/spain-visa-application' },
  { name: 'Kosovo',       href: '/our-services/visa/kosovo-visa-application' },
  { name: 'Serbia',       href: '/our-services/visa/serbia-visa-application' },
  { name: 'Thailand',     href: '/our-services/visa/thailand-visa-application' },
  { name: 'Singapore',    href: '/our-services/visa/singapore-visa-application' },
  { name: 'Malaysia',     href: '/our-services/visa/malaysia-visa-application' },
  { name: 'Turkey',       href: '/our-services/visa/turkey-visa-application' },
  { name: 'Indonesia',    href: '/our-services/visa/indonesia-visa-application' },
  { name: 'India',        href: '/our-services/visa/india-visa-application' },
  { name: 'Saudi Arabia', href: '/our-services/visa/saudi-arabia-visa-application' },
  { name: 'Morocco',      href: '/our-services/visa/morocco-visa-application' },
  { name: 'Brazil',       href: '/our-services/visa/brazil-visa-application' },
  { name: 'South Africa', href: '/our-services/visa/south-africa-visa-application' },
  { name: 'Azerbaijan',   href: '/our-services/visa/azerbaijan-visa-application' },
  { name: 'Cyprus',       href: '/our-services/visa/cyprus-visa-application' },
  { name: 'Sri Lanka',    href: '/our-services/visa/srilanka-visa-application' },
  { name: 'Russia',       href: '/our-services/visa/russia-visa-application' },
  { name: 'Montenegro',   href: '/our-services/visa/montenegro-visa-application' },
];

// Resource links shown in the "Tools & Resources" strip
const RESOURCE_LINKS = [
  { label: 'Visa Checklist Generator',      href: '/travel-resources/visa-checklist-generator',            icon: '✓' },
  { label: 'Visa Processing Time Tracker',  href: '/travel-resources/visa-processing-time-tracker',        icon: '⏱' },
  { label: 'Travel Document Generator',     href: '/travel-resources/travel-document-generator',           icon: '📄' },
  { label: 'Schengen Visa Guide',           href: '/schengen-visa',                                        icon: '🇪🇺' },
  { label: 'Visa Rejection Rates',          href: '/visa-rejection',                                       icon: '📊' },
  { label: 'Study Abroad',                  href: '/study-abroad',                                         icon: '🎓' },
];

// Footer contextual links block
const FOOTER_LINKS = [
  {
    heading: 'Visa services',
    links: [
      { label: 'Tourist visa from Bangladesh',  href: '/our-services/visa-services/tourist-visa-from-bangladesh' },
      { label: 'Student visa from Bangladesh',  href: '/our-services/visa-services/student-visa-from-bangladesh' },
      { label: 'Work visa from Bangladesh',     href: '/our-services/visa-services/work-visa-from-bangladesh' },
      { label: 'E-visa countries',              href: '/visa/e-visa' },
      { label: 'Visas for Dubai residents',     href: '/visa/dubai-residents' },
      { label: 'Visas from India',              href: '/visa/india' },
    ],
  },
  {
    heading: 'Travel resources',
    links: [
      { label: 'Schengen visa guide',           href: '/schengen-visa' },
      { label: 'Visa rejection rates',          href: '/visa-rejection' },
      { label: 'Visa checklist generator',      href: '/travel-resources/visa-checklist-generator' },
      { label: 'Processing time tracker',       href: '/travel-resources/visa-processing-time-tracker' },
      { label: 'Travel document generator',     href: '/travel-resources/travel-document-generator' },
      { label: 'Travel resources hub',          href: '/travel-resources' },
    ],
  },
  {
    heading: 'Study & scholarships',
    links: [
      { label: 'Study abroad guide',            href: '/study-abroad' },
      { label: 'Student visa guide',            href: '/study-abroad/student-visa' },
      { label: 'Scholarships by country',       href: '/scholarships' },
      { label: 'IELTS preparation',             href: '/target-ielts-immigration-center' },
      { label: 'USA visa interview prep',       href: '/target-usa-visa-interview-preparation' },
      { label: 'Our services',                  href: '/our-services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Our offices',                   href: '/contact' },
      { label: 'Dubai travel agency',           href: '/contact/travel-agency-dubai' },
      { label: 'Bangladesh travel agency',      href: '/online-travel-agency-bangladesh' },
      { label: 'Our team',                      href: '/our-leading-team' },
      { label: 'Testimonials',                  href: '/testimonials' },
      { label: 'Tour packages',                 href: '/our-services/tour-packages' },
    ],
  },
];

// ─── HERO SLIDES ─────────────────────────────────────────────────────────────

const heroSlides = [
  {
    id: 1,
    image: '/the-love-island.webp',
    title: 'Affordable International Flight Bookings',
    desc: 'Get the best travel deals and seamless flight reservations with Eammu Holidays.',
    altText: 'Affordable International Flight Bookings and Travel Deals by Eammu Holidays',
  },
  {
    id: 2,
    image: '/eammu_banner.webp',
    title: 'Global Visa Application Assistance',
    desc: 'Expert guidance for tourist, student, and work visas from Bangladesh to 25+ countries.',
    altText: 'Global Visa Application Assistance and Tourist Services from Bangladesh',
  },
  {
    id: 3,
    image: '/russia-header.jpg',
    title: 'Personalized Tour & Vacation Planning',
    desc: 'Custom-made holiday packages designed to fit your dream travel experience.',
    altText: 'Personalized Tour Packages and Vacation Planning with Eammu Holidays',
  },
];

// ─── BREADCRUMB ───────────────────────────────────────────────────────────────

function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb" className="bg-white border-b border-gray-100 py-2 px-4">
      <div className="container mx-auto flex flex-wrap gap-1 items-center text-xs text-gray-500">
        <Link href="/" className="hover:text-[#005a31] transition">Home</Link>
        <span>/</span>
        <Link href="/our-services" className="hover:text-[#005a31] transition">Our Services</Link>
        <span>/</span>
        <span className="text-gray-800 font-medium">Visa Services</span>
      </div>
    </nav>
  );
}

// ─── RESOURCE STRIP ──────────────────────────────────────────────────────────

function ResourceStrip() {
  return (
    <div className="bg-[#f7faf9] border border-gray-100 rounded-3xl p-6 mb-10">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 text-center">
        Visa tools &amp; resources
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {RESOURCE_LINKS.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#005a31] hover:text-[#005a31] transition"
          >
            <span aria-hidden="true">{r.icon}</span>
            {r.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── CONTEXTUAL LINKS FOOTER BLOCK ───────────────────────────────────────────

function ContextualLinksFooter() {
  return (
    <div className="mt-20 border-t border-gray-100 pt-12">
      <h2 className="text-xl font-bold text-gray-800 mb-8">Explore more visa services</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {FOOTER_LINKS.map((col) => (
          <div key={col.heading}>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              {col.heading}
            </h3>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-600 hover:text-[#005a31] transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom CTA row */}
      <div className="mt-10 flex flex-wrap gap-4 items-center justify-between border-t border-gray-100 pt-8">
        <p className="text-sm text-gray-500 max-w-md">
          Need personalised visa advice?{' '}
          <Link href="/contact" className="text-[#005a31] font-semibold hover:underline">
            Speak to our visa experts
          </Link>{' '}
          or visit our{' '}
          <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">
            Dubai
          </Link>{' '}
          /{' '}
          <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
            Bangladesh
          </Link>{' '}
          office.
        </p>
        <div className="flex gap-3">
          <Link
            href="/our-services/tour-packages"
            className="px-5 py-2 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#005a31] hover:text-[#005a31] transition"
          >
            Tour packages
          </Link>
          <Link
            href="/flight-booking"
            className="px-5 py-2 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#005a31] hover:text-[#005a31] transition"
          >
            Flight booking
          </Link>
          <Link
            href="/offers"
            className="px-5 py-2 bg-[#005a31] text-white rounded-full text-sm font-semibold hover:bg-black transition"
          >
            View offers
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function VisaClientContent() {
  const ITEMS_PER_PAGE = 3;
  const [currentHero, setCurrentHero] = useState(0);
  const [pages, setPages] = useState({ america: 1, europe: 1, asia: 1, middleEast: 1, oceania: 1 });
  const sectionRefs = useRef({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (key) => {
    const target = sectionRefs.current[key.toLowerCase()];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getPaginatedData = (catKey) => {
    const categoryList = categories[catKey] || [];
    const filteredList = countries.filter((c) => categoryList.includes(c.name));
    const start = (pages[catKey] - 1) * ITEMS_PER_PAGE;
    return {
      data: filteredList.slice(start, start + ITEMS_PER_PAGE),
      total: Math.ceil(filteredList.length / ITEMS_PER_PAGE),
    };
  };

  return (
    <>
     

      {/* ── HERO ── */}
      <header className="relative pt-14 w-full min-h-[500px] md:min-h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* ── BREADCRUMB (SEO + navigation) ── */}
           <Breadcrumb />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHero}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={heroSlides[currentHero].image}
                alt={heroSlides[currentHero].altText}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/10 bg-gradient-to-b from-[#005a31]/10 via-black/20 to-black/30 z-10" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-20 mt-10 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHero}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 drop-shadow-lg leading-tight">
                {heroSlides[currentHero].title}
              </h1>
              <p className="max-w-3xl mx-auto text-sm md:text-xl text-gray-100 mb-8 md:mb-12 leading-relaxed drop-shadow-md px-4">
                {heroSlides[currentHero].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mb-12">
            <VisaSearchBar />
          </div>

          {/* Quick nav anchors */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto mb-12">
            {['Asia', 'Europe', 'America', 'MiddleEast', 'Oceania', 'Popular'].map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToSection(cat)}
                className="bg-white/10 backdrop-blur-md border text-white border-white/20 hover:bg-white hover:text-[#005a31] px-4 py-2 md:px-8 md:py-3 rounded-full transition-all font-bold text-xs md:text-sm whitespace-nowrap"
              >
                {cat === 'MiddleEast' ? 'Middle East' : cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">

        {/* ── VISA TYPE PILLS (hub → sub-pillar) ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {VISA_TYPES.map((v) => (
            <Link
              key={v.href}
              href={v.href}
              className="bg-[#005a31] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition"
            >
              {v.label}
            </Link>
          ))}
          {/* Schengen gets its own prominent pill — high-value hub page */}
          <Link
            href="/schengen-visa"
            className="bg-white border-2 border-[#005a31] text-[#005a31] px-6 py-2 rounded-full text-sm font-bold hover:bg-[#005a31] hover:text-white transition"
          >
            Schengen Visa
          </Link>
          <Link
            href="/visa/e-visa"
            className="bg-white border-2 border-[#005a31] text-[#005a31] px-6 py-2 rounded-full text-sm font-bold hover:bg-[#005a31] hover:text-white transition"
          >
            E-Visa Countries
          </Link>
        </div>

        {/* ── DIRECT VISA APPLICATION LINKS (hub → spoke) ── */}
        <div className="bg-white p-8 rounded-3xl shadow-sm mb-10 border border-gray-100">
          <h2 className="text-center text-gray-500 font-semibold mb-6 uppercase tracking-widest text-xs">
            Direct visa application links
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {COUNTRY_QUICK_LINKS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="px-4 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm hover:border-[#005a31] hover:text-[#005a31] transition"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        {/* ── RESOURCE STRIP (hub → tools) ── */}
        <ResourceStrip />

        {/* ── SPECIAL SEGMENTS strip (Dubai residents / India / e-visa) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          <Link
            href="/visa/dubai-residents"
            className="group flex flex-col gap-2 p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#005a31] hover:shadow-md transition"
          >
            <span className="text-2xl" aria-hidden="true">🇦🇪</span>
            <span className="font-bold text-gray-800 group-hover:text-[#005a31] transition">
              Visas for Dubai residents
            </span>
            <span className="text-sm text-gray-500">
              Traveling from the UAE? Browse country-specific guides.
            </span>
            <span className="text-[#005a31] text-sm font-semibold mt-auto">
              Explore →
            </span>
          </Link>

          <Link
            href="/visa/india"
            className="group flex flex-col gap-2 p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#005a31] hover:shadow-md transition"
          >
            <span className="text-2xl" aria-hidden="true">🇮🇳</span>
            <span className="font-bold text-gray-800 group-hover:text-[#005a31] transition">
              Visas from India
            </span>
            <span className="text-sm text-gray-500">
              Indian passport holders — find your destination visa guide.
            </span>
            <span className="text-[#005a31] text-sm font-semibold mt-auto">
              Explore →
            </span>
          </Link>

          <Link
            href="/visa/e-visa"
            className="group flex flex-col gap-2 p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#005a31] hover:shadow-md transition"
          >
            <span className="text-2xl" aria-hidden="true">💻</span>
            <span className="font-bold text-gray-800 group-hover:text-[#005a31] transition">
              E-visa countries
            </span>
            <span className="text-sm text-gray-500">
              Apply online without embassy visits. Fast, easy, digital.
            </span>
            <span className="text-[#005a31] text-sm font-semibold mt-auto">
              Explore →
            </span>
          </Link>
        </div>

        {/* ── DYNAMIC CATEGORY SECTIONS ── */}
        {Object.keys(categories).map((catKey) => {
          const { data, total } = getPaginatedData(catKey);
          const searchKey = catKey.toLowerCase();
          const regionLabel = catKey === 'middleEast' ? 'Middle East' : catKey;

          return (
            <section
              key={catKey}
              ref={(el) => (sectionRefs.current[searchKey] = el)}
              className="mb-24 scroll-mt-24"
            >
              <div className="border-b border-gray-200 pb-4 mb-8 flex items-end justify-between flex-wrap gap-4">
                <h2 className="text-3xl font-bold text-gray-800 capitalize">
                  {regionLabel} Visa Services
                </h2>
                {/* Contextual region-level links */}
                <div className="flex gap-3 flex-wrap">
                  {catKey === 'europe' && (
                    <Link
                      href="/schengen-visa"
                      className="text-sm text-[#005a31] font-semibold border border-[#005a31] px-4 py-1.5 rounded-full hover:bg-[#005a31] hover:text-white transition"
                    >
                      Schengen visa guide →
                    </Link>
                  )}
                  {catKey === 'middleEast' && (
                    <Link
                      href="/visa/dubai-residents"
                      className="text-sm text-[#005a31] font-semibold border border-[#005a31] px-4 py-1.5 rounded-full hover:bg-[#005a31] hover:text-white transition"
                    >
                      Visas for Dubai residents →
                    </Link>
                  )}
                  {catKey === 'asia' && (
                    <Link
                      href="/visa/e-visa"
                      className="text-sm text-[#005a31] font-semibold border border-[#005a31] px-4 py-1.5 rounded-full hover:bg-[#005a31] hover:text-white transition"
                    >
                      Asia e-visa options →
                    </Link>
                  )}
                  {catKey === 'america' && (
                    <Link
                      href="/our-services/visa-services/tourist-visa-from-bangladesh"
                      className="text-sm text-[#005a31] font-semibold border border-[#005a31] px-4 py-1.5 rounded-full hover:bg-[#005a31] hover:text-white transition"
                    >
                      Tourist visa guide →
                    </Link>
                  )}
                  <Link
                    href="/travel-resources/visa-checklist-generator"
                    className="text-sm text-gray-500 border border-gray-200 px-4 py-1.5 rounded-full hover:border-[#005a31] hover:text-[#005a31] transition"
                  >
                    Visa checklist →
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.map((country, i) => (
                  <VisaCardItem key={i} country={country} />
                ))}
              </div>

              {/* Pagination */}
              {total > 1 && (
                <div className="flex justify-center gap-2 mt-10">
                  {[...Array(total)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setPages((prev) => ({ ...prev, [catKey]: i + 1 }));
                        scrollToSection(catKey);
                      }}
                      className={`w-10 h-10 rounded-xl font-bold transition-all ${
                        pages[catKey] === i + 1
                          ? 'bg-[#005a31] text-white shadow-lg'
                          : 'bg-white border text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}

              {/* Per-region bottom contextual links */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/visa-rejection`}
                  className="text-xs text-gray-500 hover:text-[#005a31] underline underline-offset-2 transition"
                >
                  {regionLabel} visa rejection rates
                </Link>
                <span className="text-gray-200">|</span>
                <Link
                  href="/travel-resources/visa-processing-time-tracker"
                  className="text-xs text-gray-500 hover:text-[#005a31] underline underline-offset-2 transition"
                >
                  {regionLabel} processing times
                </Link>
                <span className="text-gray-200">|</span>
                <Link
                  href="/our-services/tour-packages"
                  className="text-xs text-gray-500 hover:text-[#005a31] underline underline-offset-2 transition"
                >
                  {regionLabel} tour packages
                </Link>
              </div>
            </section>
          );
        })}

        {/* ── STUDY ABROAD BANNER ── */}
        <div className="bg-[#f7faf9] border border-[#d0e8db] rounded-3xl p-8 mb-14 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">Planning to study abroad?</h2>
            <p className="text-sm text-gray-600 max-w-lg">
              We help students with{' '}
              <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                student visas
              </Link>
              ,{' '}
              <Link href="/scholarships" className="text-[#005a31] font-semibold hover:underline">
                scholarships
              </Link>
              , and{' '}
              <Link href="/target-ielts-immigration-center" className="text-[#005a31] font-semibold hover:underline">
                IELTS preparation
              </Link>
              . Over 258 countries covered.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/study-abroad"
              className="px-6 py-3 bg-[#005a31] text-white rounded-xl font-bold text-sm hover:bg-black transition"
            >
              Study abroad guide
            </Link>
            <Link
              href="/scholarships"
              className="px-6 py-3 border border-[#005a31] text-[#005a31] rounded-xl font-bold text-sm hover:bg-[#005a31] hover:text-white transition"
            >
              Find scholarships
            </Link>
          </div>
        </div>

        {/* ── POPULAR ROUTES ── */}
        <section
          ref={(el) => (sectionRefs.current['popular'] = el)}
          className="mt-12 bg-gray-100 p-10 rounded-[3rem]"
        >
          <h2 className="text-3xl font-bold text-[#005a31] text-center mb-10">
            Popular routes &amp; best deals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularRoutes.map((route, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm group">
                <div className="h-52 w-full relative">
                  <Image
                    src={route.image}
                    alt={route.altText}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{route.name}</h3>
                  {/* Internal link to destination visa page alongside the WhatsApp CTA */}
                  {route.visaHref && (
                    <Link
                      href={route.visaHref}
                      className="block text-sm text-[#005a31] hover:underline mb-3"
                    >
                      View {route.name} visa guide →
                    </Link>
                  )}
                  <a
                    href={`https://wa.me/8801631312524?text=Interested%20in%20${route.name}`}
                    className="bg-[#005a31] text-white py-2.5 px-6 rounded-xl block font-bold hover:bg-black transition"
                  >
                    Get deal now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTEXTUAL LINKS FOOTER ── */}
        <ContextualLinksFooter />
      </div>
    </>
  );
}

// ─── VISA CARD ────────────────────────────────────────────────────────────────

const VisaCardItem = ({ country }) => (
  <article className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all flex flex-col">
    <div className="h-52 overflow-hidden relative">
      <Image
        src={country.image}
        alt={country.altText || `${country.name} Visa Application Services and requirements`}
        fill
        className="object-cover"
      />
      <div className="absolute top-4 left-4 bg-white/90 px-4 py-1 rounded-full text-[#005a31] text-xs font-bold z-10">
        Official Service
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{country.name} Visa Application</h3>
      <p className="text-gray-600 text-sm mb-4 flex-1">{country.description}</p>

      {/* Contextual supporting links within each card */}
      <div className="flex flex-wrap gap-2 mb-5">
        {country.rejectionHref && (
          <Link
            href={country.rejectionHref}
            className="text-xs text-gray-400 hover:text-[#005a31] underline underline-offset-2 transition"
          >
            Rejection rates
          </Link>
        )}
        {country.processingHref && (
          <Link
            href={country.processingHref}
            className="text-xs text-gray-400 hover:text-[#005a31] underline underline-offset-2 transition"
          >
            Processing time
          </Link>
        )}
        {country.evisaHref && (
          <Link
            href={country.evisaHref}
            className="text-xs text-gray-400 hover:text-[#005a31] underline underline-offset-2 transition"
          >
            E-visa option
          </Link>
        )}
      </div>

      <Link
        href={country.link}
        className="w-full bg-[#005a31] text-white text-center py-3.5 rounded-2xl font-bold hover:bg-black transition-all"
      >
        View visa details
      </Link>
    </div>
  </article>
);