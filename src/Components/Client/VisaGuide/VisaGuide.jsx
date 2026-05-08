"use client";
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import visaData from '@/app/data/visaguide.json';
import { createSlug } from '@/app/lib/utils';

// ── POPULAR ROUTES (high search volume) ──────────────────────────────────
const POPULAR_ROUTES = [
  { origin: 'Bangladesh', dest: 'Canada' },
  { origin: 'Bangladesh', dest: 'United States' },
  { origin: 'Bangladesh', dest: 'United Kingdom' },
  { origin: 'Bangladesh', dest: 'Australia' },
  { origin: 'Bangladesh', dest: 'Germany' },
  { origin: 'Bangladesh', dest: 'Italy' },
  { origin: 'Bangladesh', dest: 'Malaysia' },
  { origin: 'Bangladesh', dest: 'Thailand' },
];

// ── TRUST STATS ───────────────────────────────────────────────────────────
const STATS = [
  { value: '195+', label: 'Countries',       icon: '🌏' },
  { value: '98%',  label: 'Success Rate',    icon: '✅' },
  { value: '42K+', label: 'Travelers Helped',icon: '✈️' },
  { value: '24/7', label: 'Expert Support',  icon: '🛡️' },
];

// ── VISA TYPE LINKS — now real hrefs ─────────────────────────────────────
const VISA_TYPES = [
  { icon: '🏖️', label: 'Tourist',  desc: 'Leisure & sightseeing',  href: '/our-services/visa-services/tourist-visa-from-bangladesh' },
  { icon: '💼', label: 'Business', desc: 'Meetings, conferences',   href: '/our-services/visa-services' },
  { icon: '🎓', label: 'Student',  desc: 'Academic enrollment',     href: '/our-services/visa-services/student-visa-from-bangladesh' },
  { icon: '👨‍👩‍👧', label: 'Family',   desc: 'Reunification & sponsor', href: '/our-services/visa-services' },
  { icon: '💊', label: 'Medical',  desc: 'Treatment & health',      href: '/our-services/visa-services' },
  { icon: '🧳', label: 'Transit',  desc: 'Layover & onward travel', href: '/our-services/visa-services' },
];

// ── CONTEXTUAL RESOURCE LINKS ─────────────────────────────────────────────
const RESOURCE_LINKS = [
  { icon: '✓',  label: 'Visa checklist generator',     href: '/travel-resources/visa-checklist-generator',          desc: 'Build your document list' },
  { icon: '⏱', label: 'Processing time tracker',       href: '/travel-resources/visa-processing-time-tracker',      desc: 'Check wait times by country' },
  { icon: '📄', label: 'Travel document generator',    href: '/travel-resources/travel-document-generator',         desc: 'Itinerary & booking letters' },
  { icon: '📊', label: 'Visa rejection rates',         href: '/visa-rejection',                                     desc: 'Know your approval odds' },
  { icon: '🇪🇺', label: 'Schengen visa guide',          href: '/schengen-visa',                                      desc: 'Europe multi-country visa' },
  { icon: '🎓', label: 'Study abroad',                 href: '/study-abroad',                                       desc: 'Student visa + scholarships' },
];

// ── BREADCRUMB DATA ────────────────────────────────────────────────────────
const BREADCRUMB = [
  { label: 'Home',        href: '/' },
  { label: 'Visa',        href: '/visa' },
  { label: 'Visa guide' },
];

// ── RELATED PAGES (across-silo links) ────────────────────────────────────
const RELATED_PAGES = [
  { label: 'All visa services',              href: '/visa' },
  { label: 'E-visa countries',               href: '/visa/e-visa' },
  { label: 'Visas for Dubai residents',      href: '/visa/dubai-residents' },
  { label: 'Visas from India',               href: '/visa/india' },
  { label: 'Schengen visa',                  href: '/schengen-visa' },
  { label: 'Visa rejection rates',           href: '/visa-rejection' },
  { label: 'Tourist visa from Bangladesh',   href: '/our-services/visa-services/tourist-visa-from-bangladesh' },
  { label: 'Student visa from Bangladesh',   href: '/our-services/visa-services/student-visa-from-bangladesh' },
  { label: 'Work visa from Bangladesh',      href: '/our-services/visa-services/work-visa-from-bangladesh' },
  { label: 'Flight booking',                 href: '/flight-booking' },
  { label: 'Tour packages',                  href: '/our-services/tour-packages' },
  { label: 'Scholarships by country',        href: '/scholarships' },
];

// ── FEATURED COUNTRY VISA PAGES (direct spoke links) ──────────────────────
const FEATURED_COUNTRY_VISAS = [
  { name: 'Canada',       href: '/our-services/visa/canada-visa-application',       flag: '🇨🇦' },
  { name: 'USA',          href: '/our-services/visa/usa-visa-application',           flag: '🇺🇸' },
  { name: 'UK',           href: '/our-services/visa/uk-visa-application',           flag: '🇬🇧' },
  { name: 'Australia',    href: '/our-services/visa/australia-visa-application',    flag: '🇦🇺' },
  { name: 'Germany',      href: '/our-services/visa/germany-visa-application',      flag: '🇩🇪' },
  { name: 'Dubai',        href: '/our-services/visa/dubai-visa-application',        flag: '🇦🇪' },
  { name: 'Japan',        href: '/our-services/visa/japan-visa-application',        flag: '🇯🇵' },
  { name: 'Malaysia',     href: '/our-services/visa/malaysia-visa-application',     flag: '🇲🇾' },
  { name: 'Thailand',     href: '/our-services/visa/thailand-visa-application',     flag: '🇹🇭' },
  { name: 'Singapore',    href: '/our-services/visa/singapore-visa-application',    flag: '🇸🇬' },
  { name: 'Turkey',       href: '/our-services/visa/turkey-visa-application',       flag: '🇹🇷' },
  { name: 'Portugal',     href: '/our-services/visa/portugal-visa-application',     flag: '🇵🇹' },
];

// ── ANIMATION VARIANTS ────────────────────────────────────────────────────
const containerVars = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.08 } },
};
const itemVars = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ── BREADCRUMB COMPONENT ──────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb" className="bg-white/80 border-b border-slate-100 py-2.5 px-5">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-1.5 items-center text-xs text-slate-500">
        {BREADCRUMB.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className="hover:text-blue-600 transition">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-800 font-semibold">{item.label}</span>
            )}
            {i < BREADCRUMB.length - 1 && <span className="text-slate-300">/</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}

// ── RESOURCE STRIP COMPONENT ──────────────────────────────────────────────
function ResourceStrip() {
  return (
    <motion.div variants={itemVars} className="mb-14">
      <div className="flex items-center gap-4 mb-5">
        <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 shrink-0">
          Visa tools &amp; resources
        </h2>
        <div className="h-px flex-1 bg-slate-200/80" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {RESOURCE_LINKS.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="flex flex-col items-center gap-2 p-4 bg-white border-2 border-slate-100 rounded-2xl text-center hover:border-blue-300 hover:shadow-md transition-all group"
          >
            <span className="text-xl" aria-hidden="true">{r.icon}</span>
            <span className="text-xs font-black text-slate-700 group-hover:text-blue-600 transition leading-snug">
              {r.label}
            </span>
            <span className="text-[9px] text-slate-400 leading-snug">{r.desc}</span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

// ── RELATED PAGES FOOTER ──────────────────────────────────────────────────
function RelatedPagesFooter() {
  return (
    <motion.div variants={itemVars} className="mt-24 pt-10 border-t border-slate-100">
      <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-5">
        Related visa services
      </h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {RELATED_PAGES.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-semibold hover:border-blue-400 hover:text-blue-600 transition"
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-blue-50 border border-blue-100 rounded-2xl p-6">
        <p className="text-sm text-slate-600 max-w-lg leading-relaxed">
          Need personalised visa help?{' '}
          <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
            Speak to our visa experts
          </Link>{' '}
          or visit our{' '}
          <Link href="/contact/travel-agency-dubai" className="text-blue-600 font-semibold hover:underline">
            Dubai
          </Link>{' '}
          /{' '}
          <Link href="/contact/travel-agency-bangladesh" className="text-blue-600 font-semibold hover:underline">
            Bangladesh
          </Link>{' '}
          office.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <Link
            href="/our-services/tour-packages"
            className="px-5 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:border-blue-400 hover:text-blue-600 transition"
          >
            Tour packages
          </Link>
          <Link
            href="/flight-booking"
            className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition"
          >
            Book flights
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────
export default function VisaGuide() {
  const [origin, setOrigin] = useState('bangladesh');
  const [destination, setDestination] = useState('canada');

  const originData = useMemo(() => visaData.find(c => c.country.toLowerCase() === origin), [origin]);
  const destData   = useMemo(() => visaData.find(c => c.country.toLowerCase() === destination), [destination]);

  return (
    <div className="min-h-screen bg-[#fafbfc] font-sans antialiased text-slate-900 overflow-x-hidden">

      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-50/60 to-transparent" />
        <div className="absolute top-[-5%] right-[-8%] w-[500px] h-[500px] bg-blue-200/15 rounded-full blur-[140px]" />
        <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] bg-indigo-100/20 rounded-full blur-[100px]" />
      </div>

      {/* ── BREADCRUMB ── */}
      <Breadcrumb />

      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="max-w-6xl mx-auto px-5 py-14 md:py-20"
      >

        {/* ── HERO ── */}
        <motion.div variants={itemVars} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-50 border border-blue-100 rounded-full">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.2em] text-blue-700 uppercase">
              Eammu Holidays · Official Visa Intelligence Portal 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-5 tracking-tight text-slate-900 leading-[1.05]">
            Visa requirements,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              instantly verified.
            </span>
          </h1>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed mb-3">
            Embassy-accurate visa requirements, document checklists, processing times, and fees — for every country, every nationality. Trusted by{' '}
            <strong className="text-slate-700">42,000+ Bangladeshi travelers</strong>.
          </p>

          {/* Contextual upward links in hero */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link href="/visa" className="text-xs font-semibold text-blue-600 border border-blue-200 px-4 py-1.5 rounded-full hover:bg-blue-600 hover:text-white transition">
              ← All visa services
            </Link>
            <Link href="/schengen-visa" className="text-xs font-semibold text-slate-600 border border-slate-200 px-4 py-1.5 rounded-full hover:border-blue-400 hover:text-blue-600 transition">
              Schengen visa guide
            </Link>
            <Link href="/visa/e-visa" className="text-xs font-semibold text-slate-600 border border-slate-200 px-4 py-1.5 rounded-full hover:border-blue-400 hover:text-blue-600 transition">
              E-visa countries
            </Link>
            <Link href="/visa-rejection" className="text-xs font-semibold text-slate-600 border border-slate-200 px-4 py-1.5 rounded-full hover:border-blue-400 hover:text-blue-600 transition">
              Rejection rates
            </Link>
          </div>
        </motion.div>

        {/* ── STATS BAR ── */}
        <motion.div variants={itemVars} className="grid grid-cols-4 gap-3 mb-10 max-w-2xl mx-auto">
          {STATS.map(s => (
            <div key={s.label} className="text-center bg-white/80 backdrop-blur border border-slate-100 rounded-2xl p-4 shadow-sm">
              <div className="text-xl mb-1">{s.icon}</div>
              <div className="text-lg font-black text-slate-900">{s.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── SEARCH COMMAND CENTER ── */}
        <motion.div variants={itemVars} className="relative z-20 mb-16">
          <div className="bg-white/80 backdrop-blur-2xl p-4 md:p-6 rounded-[2.5rem] shadow-[0_32px_100px_-20px_rgba(59,130,246,0.12)] border border-white/80">
            <p className="text-center text-xs font-black uppercase tracking-widest text-slate-400 mb-6">
              Select your nationality &amp; destination to get your personalised visa guide
            </p>

            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">

              {/* Origin */}
              <div className="flex-1 bg-slate-50 p-5 rounded-[1.8rem] border-2 border-slate-100 hover:border-blue-300 focus-within:border-blue-400 transition-all">
                <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  🌍 Your nationality / passport
                </label>
                <div className="flex items-center gap-3">
                  {originData?.flag && (
                    <img src={originData.flag} className="w-8 h-5 object-cover rounded shadow-sm shrink-0" alt="" />
                  )}
                  <select
                    value={origin}
                    onChange={e => setOrigin(e.target.value)}
                    className="bg-transparent text-lg font-bold outline-none cursor-pointer capitalize w-full appearance-none text-slate-800"
                  >
                    {visaData.filter(c => c.country.toLowerCase() !== destination).map(c => (
                      <option key={c.code} value={c.country.toLowerCase()}>{c.country}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg shadow-blue-200 text-white shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </div>

              {/* Destination */}
              <div className="flex-1 bg-slate-50 p-5 rounded-[1.8rem] border-2 border-slate-100 hover:border-blue-300 focus-within:border-blue-400 transition-all">
                <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  📍 Destination country
                </label>
                <div className="flex items-center gap-3">
                  {destData?.flag && (
                    <img src={destData.flag} className="w-8 h-5 object-cover rounded shadow-sm shrink-0" alt="" />
                  )}
                  <select
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                    className="bg-transparent text-lg font-bold outline-none cursor-pointer capitalize w-full appearance-none text-slate-800"
                  >
                    {visaData.filter(c => c.country.toLowerCase() !== origin).map(c => (
                      <option key={c.code} value={c.country.toLowerCase()}>{c.country}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* CTA */}
              <Link
                href={`/visa/visa-guide/${createSlug(destination)}-visa-for-${createSlug(origin)}`}
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-6 rounded-[1.8rem] font-black transition-all shadow-xl shadow-blue-200 active:scale-95 text-center flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>Check requirements</span>
                <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </Link>
            </div>

            {/* Quick preview */}
            {originData && destData && (
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 font-semibold">
                <span>Showing guide for:</span>
                <img src={originData.flag} className="w-5 h-3 object-cover rounded-sm" alt="" />
                <span className="capitalize font-black text-slate-700">{origin}</span>
                <span className="text-slate-300">→</span>
                <img src={destData.flag} className="w-5 h-3 object-cover rounded-sm" alt="" />
                <span className="capitalize font-black text-slate-700">{destination}</span>
                <span className="ml-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-black text-[9px] uppercase tracking-wider">Ready</span>
                <span className="text-slate-300">·</span>
                <Link
                  href={`/visa-rejection/${createSlug(destination)}-visa-rejection-rate-for-${createSlug(origin)}`}
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Check rejection rate →
                </Link>
              </div>
            )}
          </div>
        </motion.div>

        {/* ── RESOURCE STRIP ── */}
        <ResourceStrip />

        {/* ── VISA TYPE QUICK LINKS — now real Links ── */}
        <motion.div variants={itemVars} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-lg font-black tracking-tight text-slate-800 shrink-0">Browse by visa type</h2>
            <div className="h-px flex-1 bg-slate-200/80" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {VISA_TYPES.map(v => (
              <Link
                key={v.label}
                href={v.href}
                className="group flex flex-col items-center gap-2 p-4 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-300 hover:shadow-md transition-all"
              >
                <span className="text-2xl">{v.icon}</span>
                <span className="text-xs font-black text-slate-700 group-hover:text-blue-600 transition">{v.label}</span>
                <span className="text-[9px] text-slate-400 text-center leading-tight hidden md:block">{v.desc}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ── FEATURED COUNTRY VISA APPLICATION LINKS ── */}
        <motion.div variants={itemVars} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-lg font-black tracking-tight text-slate-800 shrink-0">
              Visa application guides by country
            </h2>
            <div className="h-px flex-1 bg-slate-200/80" />
            <Link href="/visa" className="text-xs font-semibold text-blue-600 hover:underline shrink-0">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {FEATURED_COUNTRY_VISAS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="flex flex-col items-center gap-2 p-4 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-300 hover:shadow-md transition-all group text-center"
              >
                <span className="text-2xl">{c.flag}</span>
                <span className="text-xs font-black text-slate-700 group-hover:text-blue-600 transition leading-tight">
                  {c.name}
                </span>
                <span className="text-[9px] text-slate-400 group-hover:text-blue-400 transition">
                  Apply →
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ── POPULAR ROUTES ── */}
        <motion.div variants={itemVars} className="mb-16">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-black tracking-tight text-slate-900">🔥 Most searched visa routes</h2>
              </div>
              <p className="text-sm text-slate-500 mt-1">
                Based on real monthly search volume — updated weekly.{' '}
                <Link href="/visa-rejection" className="text-blue-600 hover:underline font-semibold">
                  Check rejection rates
                </Link>{' '}before you apply.
              </p>
            </div>
            <Link
              href="/travel-resources/visa-checklist-generator"
              className="text-xs font-bold text-blue-600 border border-blue-200 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition shrink-0"
            >
              Generate checklist →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {POPULAR_ROUTES.map((r, i) => {
              const destEntry = visaData.find(c => c.country === r.dest);
              const origEntry = visaData.find(c => c.country === r.origin);
              return (
                <Link
                  key={i}
                  href={`/visa/visa-guide/${createSlug(r.dest)}-visa-for-${createSlug(r.origin)}`}
                  className="group flex items-center gap-4 p-4 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="w-9 h-9 bg-slate-50 rounded-xl flex items-center justify-center text-sm font-black text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    {origEntry?.flag && <img src={origEntry.flag} className="w-7 h-5 object-cover rounded shadow-sm" alt="" />}
                    <span className="text-xs text-slate-400 font-bold">→</span>
                    {destEntry?.flag && <img src={destEntry.flag} className="w-7 h-5 object-cover rounded shadow-sm" alt="" />}
                    <div className="ml-1">
                      <div className="text-sm font-black text-slate-800">{r.origin} → {r.dest}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-400 font-semibold">Tourist · Sticker Visa · 15–21 days</span>
                        <Link
                          href={`/visa-rejection/${createSlug(r.dest)}-visa-rejection-rate-for-${createSlug(r.origin)}`}
                          onClick={e => e.stopPropagation()}
                          className="text-[10px] text-blue-500 font-semibold hover:underline"
                        >
                          Rejection rate →
                        </Link>
                      </div>
                    </div>
                  </div>
                  <svg className="text-slate-300 group-hover:text-blue-500 shrink-0 transition-colors" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* ── ALL COUNTRY GRID ── */}
        <motion.div variants={itemVars} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-black tracking-tight shrink-0">
              All destinations for {origin.charAt(0).toUpperCase() + origin.slice(1)} citizens
            </h2>
            <div className="h-px w-full bg-slate-200/60" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {visaData
              .filter(item => item.country.toLowerCase() !== origin)
              .slice(0, 20)
              .map((item, idx) => (
                <motion.div
                  key={item.code}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  whileHover={{ y: -6 }}
                >
                  <Link
                    href={`/visa/visa-guide/${createSlug(item.country)}-visa-for-${createSlug(origin)}`}
                    className="group relative flex flex-col items-center p-6 bg-white rounded-[2rem] border-2 border-slate-100 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 w-14 h-9 mb-4 overflow-hidden rounded-lg shadow-md group-hover:shadow-blue-200 transition-all">
                      <img src={item.flag} alt={item.country} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <span className="relative z-10 text-sm font-black text-slate-800 tracking-tight text-center capitalize group-hover:text-blue-700 transition-colors leading-tight">
                      {item.country}
                    </span>
                    <span className="relative z-10 text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                      View guide →
                    </span>
                  </Link>
                </motion.div>
              ))}
          </div>

          {/* See all link */}
          <div className="text-center mt-6">
            <Link
              href="/visa"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-2xl font-bold text-sm hover:border-blue-400 hover:text-blue-600 transition"
            >
              View all visa application guides →
            </Link>
          </div>
        </motion.div>

        {/* ── STUDY ABROAD BANNER ── */}
        <motion.div variants={itemVars} className="mb-14">
          <div className="bg-gradient-to-r from-[#005a31]/5 to-blue-50 border border-[#005a31]/20 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <h3 className="font-black text-slate-800 text-xl mb-2">Planning to study abroad?</h3>
              <p className="text-sm text-slate-600 max-w-lg leading-relaxed">
                We handle{' '}
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
                </Link>{' '}
                — all in one place.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link href="/study-abroad" className="px-6 py-3 bg-[#005a31] text-white rounded-xl font-bold text-sm hover:bg-black transition">
                Study abroad guide
              </Link>
              <Link href="/scholarships" className="px-6 py-3 border border-[#005a31] text-[#005a31] rounded-xl font-bold text-sm hover:bg-[#005a31] hover:text-white transition">
                Find scholarships
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ── WHY CHOOSE US ── */}
        <motion.div variants={itemVars} className="grid md:grid-cols-3 gap-8 border-t border-slate-100 pt-16">
          {[
            {
              icon: '📡',
              title: 'Live 2026 data',
              desc: 'Embassy requirements refreshed monthly across 195+ countries. Policy changes tracked so your application is never rejected for outdated info.',
              href: '/travel-resources/visa-processing-time-tracker',
              linkLabel: 'Check processing times',
            },
            {
              icon: '🛡️',
              title: 'Expert verification',
              desc: 'Every document checklist is reviewed by our certified visa consultants. We catch errors before the embassy does.',
              href: '/travel-resources/visa-checklist-generator',
              linkLabel: 'Generate your checklist',
            },
            {
              icon: '📈',
              title: '98% approval rate',
              desc: 'Our proven document preparation process has helped 42,000+ travelers get approved. We know exactly what embassies look for.',
              href: '/visa-rejection',
              linkLabel: 'See rejection rates by country',
            },
          ].map((f, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-4xl shrink-0">{f.icon}</span>
              <div>
                <h4 className="font-black text-slate-900 mb-2 text-lg">{f.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">{f.desc}</p>
                <Link href={f.href} className="text-xs font-semibold text-blue-600 hover:underline">
                  {f.linkLabel} →
                </Link>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── SEO TEXT BLOCK ── */}
        <motion.div variants={itemVars} className="mt-16 bg-white rounded-[2rem] border border-slate-100 p-8 md:p-12">
          <h2 className="text-2xl font-black text-slate-900 mb-4">
            Complete visa guide for Bangladeshi travelers — 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-500 leading-relaxed">
            <div className="space-y-4">
              <p>
                Navigating international visa requirements can be overwhelming — different embassies, different rules, constantly changing policies.
                Eammu Holidays&apos; Visa Intelligence Portal gives Bangladeshi travelers instant access to accurate, embassy-verified requirements for every destination worldwide.
              </p>
              <p>
                Whether you&apos;re applying for a{' '}
                <Link href="/our-services/visa/canada-visa-application" className="text-blue-600 font-semibold hover:underline">
                  Canada tourist visa
                </Link>
                , a{' '}
                <Link href="/our-services/visa/uk-visa-application" className="text-blue-600 font-semibold hover:underline">
                  UK Standard Visitor Visa
                </Link>
                , or a{' '}
                <Link href="/schengen-visa" className="text-blue-600 font-semibold hover:underline">
                  Schengen multi-entry visa
                </Link>
                , our guides cover mandatory documents, photo specifications, bank statement requirements, and step-by-step processing timelines.
              </p>
              <p>
                Worried about rejection? Check our{' '}
                <Link href="/visa-rejection" className="text-blue-600 font-semibold hover:underline">
                  visa rejection rate database
                </Link>{' '}
                before you apply, and use our{' '}
                <Link href="/travel-resources/visa-checklist-generator" className="text-blue-600 font-semibold hover:underline">
                  checklist generator
                </Link>{' '}
                to ensure your documents are complete.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our team of certified visa consultants monitors embassy circulars, VFS Global announcements, and consulate policy updates to ensure every guide reflects current 2026 protocols.
              </p>
              <p>
                From{' '}
                <Link href="/travel-resources/travel-document-generator" className="text-blue-600 font-semibold hover:underline">
                  travel document generation
                </Link>{' '}
                (itineraries, hotel bookings, cover letters) to{' '}
                <Link href="/travel-resources/visa-processing-time-tracker" className="text-blue-600 font-semibold hover:underline">
                  processing time tracking
                </Link>
                , we tell you exactly what to prepare so your application is complete, accurate, and compelling.
              </p>
              <p>
                Planning to study abroad? We also assist with{' '}
                <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-blue-600 font-semibold hover:underline">
                  student visas from Bangladesh
                </Link>{' '}
                and{' '}
                <Link href="/scholarships" className="text-blue-600 font-semibold hover:underline">
                  scholarship applications
                </Link>{' '}
                for 258+ countries.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── RELATED PAGES FOOTER ── */}
        <RelatedPagesFooter />

      </motion.div>
    </div>
  );
}