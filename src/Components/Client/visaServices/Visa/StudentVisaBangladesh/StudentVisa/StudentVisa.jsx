"use client";
import { useState, useEffect } from "react";
import countries from "@/app/data/countries.json";
import Link from "next/link";
import { createSlug } from "@/app/lib/utils";
import {
  GraduationCap,
  Search,
  Globe,
  BookOpen,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";

// ─── INTERNAL LINKING DATA ────────────────────────────────────────────────────

const VISA_TYPES = [
  { label: "Tourist Visa",  href: "/our-services/visa-services/tourist-visa-from-bangladesh" },
  { label: "Student Visa",  href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { label: "Work Visa",     href: "/our-services/visa-services/work-visa-from-bangladesh" },
];

const COUNTRY_QUICK_LINKS = [
  { name: "Canada",       href: "/our-services/visa/canada-visa-application" },
  { name: "UK",           href: "/our-services/visa/uk-visa-application" },
  { name: "Australia",    href: "/our-services/visa/australia-visa-application" },
  { name: "Germany",      href: "/our-services/visa/germany-visa-application" },
  { name: "USA",          href: "/our-services/visa/usa-visa-application" },
  { name: "Europe",       href: "/our-services/visa/europe-visa-application" },
  { name: "Portugal",     href: "/our-services/visa/portugal-visa-application" },
  { name: "Japan",        href: "/our-services/visa/japan-visa-application" },
  { name: "South Korea",  href: "/our-services/visa/south-korea-visa-application" },
  { name: "Malaysia",     href: "/our-services/visa/malaysia-visa-application" },
  { name: "China",        href: "/our-services/visa/china-visa-application" },
  { name: "Turkey",       href: "/our-services/visa/turkey-visa-application" },
  { name: "Russia",       href: "/our-services/visa/russia-visa-application" },
  { name: "Georgia",      href: "/our-services/visa/georgia-visa-application" },
  { name: "Armenia",      href: "/our-services/visa/armenia-visa-application" },
  { name: "Singapore",    href: "/our-services/visa/singapore-visa-application" },
  { name: "Thailand",     href: "/our-services/visa/thailand-visa-application" },
  { name: "Indonesia",    href: "/our-services/visa/indonesia-visa-application" },
  { name: "India",        href: "/our-services/visa/india-visa-application" },
  { name: "Sri Lanka",    href: "/our-services/visa/srilanka-visa-application" },
];

const RESOURCE_LINKS = [
  { label: "Visa Checklist Generator",     href: "/travel-resources/visa-checklist-generator",       icon: "✓" },
  { label: "Visa Processing Time Tracker", href: "/travel-resources/visa-processing-time-tracker",   icon: "⏱" },
  { label: "Travel Document Generator",    href: "/travel-resources/travel-document-generator",      icon: "📄" },
  { label: "Schengen Visa Guide",          href: "/schengen-visa",                                   icon: "🇪🇺" },
  { label: "Scholarships by Country",      href: "/scholarships",                                    icon: "🏆" },
  { label: "IELTS Preparation",            href: "/target-ielts-immigration-center",                 icon: "📝" },
];

const FOOTER_LINKS = [
  {
    heading: "Student resources",
    links: [
      { label: "Study abroad guide",             href: "/study-abroad" },
      { label: "Student visa guide",             href: "/study-abroad/student-visa" },
      { label: "Scholarships by country",        href: "/scholarships" },
      { label: "IELTS preparation",              href: "/target-ielts-immigration-center" },
      { label: "USA visa interview prep",        href: "/target-usa-visa-interview-preparation" },
      { label: "E-visa countries",               href: "/visa/e-visa" },
    ],
  },
  {
    heading: "Visa services",
    links: [
      { label: "Tourist visa from Bangladesh",   href: "/our-services/visa-services/tourist-visa-from-bangladesh" },
      { label: "Student visa from Bangladesh",   href: "/our-services/visa-services/student-visa-from-bangladesh" },
      { label: "Work visa from Bangladesh",      href: "/our-services/visa-services/work-visa-from-bangladesh" },
      { label: "Visas for Dubai residents",      href: "/visa/dubai-residents" },
      { label: "Visas from India",               href: "/visa/india" },
      { label: "Schengen visa guide",            href: "/schengen-visa" },
    ],
  },
  {
    heading: "Travel resources",
    links: [
      { label: "Visa checklist generator",       href: "/travel-resources/visa-checklist-generator" },
      { label: "Processing time tracker",        href: "/travel-resources/visa-processing-time-tracker" },
      { label: "Travel document generator",      href: "/travel-resources/travel-document-generator" },
      { label: "Visa rejection rates",           href: "/visa-rejection" },
      { label: "Travel resources hub",           href: "/travel-resources" },
      { label: "Tour packages",                  href: "/our-services/tour-packages" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our offices",                    href: "/contact" },
      { label: "Dubai travel agency",            href: "/contact/travel-agency-dubai" },
      { label: "Bangladesh travel agency",       href: "/online-travel-agency-bangladesh" },
      { label: "Our team",                       href: "/our-leading-team" },
      { label: "Testimonials",                   href: "/testimonials" },
      { label: "All visa services",              href: "/our-services/visa-services" },
    ],
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
        <Link href="/study-abroad" className="hover:text-[#005a31] transition">Study Abroad</Link>
        <span>/</span>
        <span className="text-gray-800 font-medium">Student Visa</span>
      </div>
    </nav>
  );
}

// ─── RESOURCE STRIP ───────────────────────────────────────────────────────────

function ResourceStrip() {
  return (
    <div className="bg-[#f7faf9] border border-gray-100 rounded-3xl p-6 mb-10">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 text-center">
        Student visa tools &amp; resources
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
      <h2 className="text-xl font-bold text-gray-800 mb-8">Explore more student visa resources</h2>
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
          Need personalised student visa advice?{" "}
          <Link href="/contact" className="text-[#005a31] font-semibold hover:underline">
            Speak to our consultants
          </Link>{" "}
          or visit our{" "}
          <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">
            Dubai
          </Link>{" "}
          /{" "}
          <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
            Bangladesh
          </Link>{" "}
          office.
        </p>
        <div className="flex gap-3">
          <Link
            href="/scholarships"
            className="px-5 py-2 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#005a31] hover:text-[#005a31] transition"
          >
            Scholarships
          </Link>
          <Link
            href="/target-ielts-immigration-center"
            className="px-5 py-2 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#005a31] hover:text-[#005a31] transition"
          >
            IELTS prep
          </Link>
          <Link
            href="/study-abroad"
            className="px-5 py-2 bg-[#005a31] text-white rounded-full text-sm font-semibold hover:bg-black transition"
          >
            Study abroad guide
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── HERO SLIDES ─────────────────────────────────────────────────────────────

const heroSlides = [
  {
    id: 1,
    src: "/denmark-bottom-slides.jpg",
    alt: "International students exploring Copenhagen while studying abroad in Denmark",
    title: "Study Abroad Visa Guide",
    subtitle: "for Bangladeshi Students",
    desc: "Complete student visa requirements, scholarship opportunities, document checklists and processing timelines for 200+ countries.",
  },
  {
    id: 2,
    src: "/study-uk-banner.jpg",
    alt: "UK student visa guide for international applicants at a British university campus",
    title: "Get Into Top Universities",
    subtitle: "with Expert Visa Support",
    desc: "From application to approval — our consultants have helped 10,000+ Bangladeshi students secure their study visas.",
  },
  {
    id: 3,
    src: "/russia-header.jpg",
    alt: "Student life and higher education opportunities for foreigners in Russia",
    title: "Scholarships & Student Visas",
    subtitle: "Across 200+ Countries",
    desc: "Discover fully funded scholarships, affordable study destinations, and fast-track visa processing.",
  },
];

const stats = [
  { icon: <Globe size={20} />, value: "200+",   label: "Destinations" },
  { icon: <GraduationCap size={20} />, value: "98%", label: "Visa Success" },
  { icon: <Award size={20} />, value: "500+",   label: "Scholarships" },
  { icon: <Users size={20} />, value: "10,000+", label: "Students Helped" },
];

const alphabet = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function StudentVisa() {
  const [searchTerm, setSearchTerm]       = useState("");
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [currentPage, setCurrentPage]     = useState(1);
  const [currentSlide, setCurrentSlide]   = useState(0);
  const itemsPerPage = 12;

  // Auto-advance hero slides
  useEffect(() => {
    const t = setInterval(() => setCurrentSlide((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  // Filter + paginate
  const filteredCountries = countries.filter((c) => {
    const matchesLetter =
      selectedLetter === "All" ||
      (c.country && c.country[0].toUpperCase() === selectedLetter);
    const matchesSearch =
      c.country && c.country.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLetter && matchesSearch;
  });

  const totalPages      = Math.ceil(filteredCountries.length / itemsPerPage);
  const currentItems    = filteredCountries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <>
   <div className="mt-20">
      {/* ── BREADCRUMB ── */}
      <Breadcrumb />

      {/* ── HERO WITH SLIDES ── */}
      <header className="relative w-full min-h-[680px] flex items-center justify-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
          </div>
        ))}

        {/* Slide dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-6 h-2 bg-[#f5c800]" : "w-2 h-2 bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f5c800] text-black text-xs font-black px-5 py-2 rounded-full mb-6 uppercase tracking-wider shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/30 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black/50" />
            </span>
            Bangladesh&apos;s #1 Student Visa Consultancy
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight tracking-tight">
            {heroSlides[currentSlide].title}
            <br />
            <span className="text-[#f5c800]">
              {heroSlides[currentSlide].subtitle}
            </span>
          </h1>
          <p className="text-white/75 text-base md:text-lg font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            {heroSlides[currentSlide].desc}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-5 py-3 rounded-2xl text-sm font-bold"
              >
                <span className="text-[#f5c800]">{s.icon}</span>
                <span className="text-[#f5c800] font-black">{s.value}</span>
                <span className="text-white/70">{s.label}</span>
              </div>
            ))}
          </div>

          {/* ── SEARCH & FILTER PANEL ── */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 p-6 md:p-8">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search destination country (e.g. Canada, UK, Germany...)"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-green-400 focus:ring-0 outline-none transition text-base bg-gray-50 text-gray-800 font-medium"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
              <div className="bg-green-50 border-2 border-green-100 text-green-700 px-6 py-4 rounded-2xl font-black text-sm flex items-center gap-2 whitespace-nowrap">
                <BookOpen size={16} />
                {filteredCountries.length} countries
              </div>
            </div>

            {/* Alphabet filter */}
            <div className="border-t-2 border-gray-100 pt-5">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 text-left">
                Filter by letter
              </p>
              <div className="flex flex-wrap gap-1.5">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => {
                      setSelectedLetter(letter);
                      setCurrentPage(1);
                    }}
                    className={`flex items-center justify-center min-w-[34px] h-[34px] px-1.5 rounded-xl text-xs font-black transition-all duration-150 ${
                      selectedLetter === letter
                        ? "bg-green-600 text-white shadow-lg shadow-green-200 scale-105"
                        : "bg-gray-100 text-gray-500 hover:bg-green-50 hover:text-green-700"
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── PAGE BODY ── */}
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
          <Link
            href="/scholarships"
            className="bg-white border-2 border-[#005a31] text-[#005a31] px-6 py-2 rounded-full text-sm font-bold hover:bg-[#005a31] hover:text-white transition"
          >
            Scholarships
          </Link>
          <Link
            href="/schengen-visa"
            className="bg-white border-2 border-[#005a31] text-[#005a31] px-6 py-2 rounded-full text-sm font-bold hover:bg-[#005a31] hover:text-white transition"
          >
            Schengen Visa
          </Link>
        </div>

        {/* ── DIRECT VISA APPLICATION LINKS ── */}
        <div className="bg-white p-8 rounded-3xl shadow-sm mb-10 border border-gray-100">
          <h2 className="text-center text-gray-500 font-semibold mb-6 uppercase tracking-widest text-xs">
            Direct student visa application links
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

        {/* ── SPECIAL SEGMENTS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          <Link
            href="/scholarships"
            className="group flex flex-col gap-2 p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#005a31] hover:shadow-md transition"
          >
            <span className="text-2xl" aria-hidden="true">🏆</span>
            <span className="font-bold text-gray-800 group-hover:text-[#005a31] transition">
              Scholarships by country
            </span>
            <span className="text-sm text-gray-500">
              Fully funded and partial scholarships for Bangladeshi students worldwide.
            </span>
            <span className="text-[#005a31] text-sm font-semibold mt-auto">
              Explore →
            </span>
          </Link>

          <Link
            href="/target-ielts-immigration-center"
            className="group flex flex-col gap-2 p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#005a31] hover:shadow-md transition"
          >
            <span className="text-2xl" aria-hidden="true">📝</span>
            <span className="font-bold text-gray-800 group-hover:text-[#005a31] transition">
              IELTS preparation
            </span>
            <span className="text-sm text-gray-500">
              Expert coaching to hit your target band score and strengthen your visa application.
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

        {/* ── COUNTRIES GRID ── */}
        <section className="mb-16">
          <div className="border-b border-gray-200 pb-4 mb-8 flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-green-600 mb-1">
                {selectedLetter !== "All"
                  ? `Countries starting with "${selectedLetter}"`
                  : "All Destinations"}
                {searchTerm && ` · "${searchTerm}"`}
              </p>
              <h2 className="text-3xl font-bold text-gray-800">
                Student Visa Guide — {filteredCountries.length} Countries
              </h2>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/schengen-visa"
                className="text-sm text-[#005a31] font-semibold border border-[#005a31] px-4 py-1.5 rounded-full hover:bg-[#005a31] hover:text-white transition"
              >
                Schengen visa guide →
              </Link>
              <Link
                href="/travel-resources/visa-checklist-generator"
                className="text-sm text-gray-500 border border-gray-200 px-4 py-1.5 rounded-full hover:border-[#005a31] hover:text-[#005a31] transition"
              >
                Visa checklist →
              </Link>
            </div>
          </div>

          {/* Grid */}
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {currentItems.map((c, index) => (
                <Link
                  key={`${c.code}-${index}`}
                  href={`/study-abroad/student-visa/${createSlug(c.country)}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-green-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col no-underline"
                >
                  <div className="relative h-40 overflow-hidden bg-gray-100">
                    <img
                      src={c.flag}
                      alt={`Study in ${c.country} — student visa guide for Bangladeshi students`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 right-3 bg-green-600 text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      {new Date().getFullYear()} Guide
                    </div>
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <div className="flex-1 mb-5">
                      <h3 className="text-gray-900 text-lg font-black mb-1 tracking-tight group-hover:text-green-700 transition-colors">
                        {c.country}
                      </h3>
                      <p className="text-gray-400 text-xs font-medium">
                        Student Visa · Scholarships · Requirements
                      </p>
                    </div>

                    {/* Contextual micro-links */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Link
                        href="/travel-resources/visa-checklist-generator"
                        className="text-xs text-gray-400 hover:text-[#005a31] underline underline-offset-2 transition"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Checklist
                      </Link>
                      <Link
                        href="/travel-resources/visa-processing-time-tracker"
                        className="text-xs text-gray-400 hover:text-[#005a31] underline underline-offset-2 transition"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Processing time
                      </Link>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 group-hover:bg-green-50 rounded-2xl px-4 py-3 transition-colors border border-gray-100 group-hover:border-green-200">
                      <span className="text-xs font-black text-gray-600 group-hover:text-green-700 transition-colors">
                        View Full Guide
                      </span>
                      <ArrowRight
                        size={14}
                        className="text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-3xl border border-gray-100">
              <div className="text-6xl mb-5">🔍</div>
              <h3 className="text-xl font-black text-gray-800 mb-2">No countries found</h3>
              <p className="text-gray-400 text-sm">Try a different search term or letter.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center items-center gap-4">
              <button
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage((p) => p - 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-7 py-3.5 bg-white border-2 border-gray-200 rounded-2xl text-gray-700 font-black text-sm disabled:opacity-40 disabled:pointer-events-none hover:border-green-400 hover:text-green-700 transition"
              >
                ← Previous
              </button>
              <span className="text-sm font-black text-gray-600 px-5 py-3 bg-white rounded-2xl border-2 border-gray-100">
                {currentPage} / {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => {
                  setCurrentPage((p) => p + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-7 py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black text-sm disabled:opacity-40 disabled:pointer-events-none transition shadow-lg shadow-green-200"
              >
                Next →
              </button>
            </div>
          )}

          {/* Per-section bottom contextual links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/visa-rejection"
              className="text-xs text-gray-500 hover:text-[#005a31] underline underline-offset-2 transition"
            >
              Student visa rejection rates
            </Link>
            <span className="text-gray-200">|</span>
            <Link
              href="/travel-resources/visa-processing-time-tracker"
              className="text-xs text-gray-500 hover:text-[#005a31] underline underline-offset-2 transition"
            >
              Student visa processing times
            </Link>
            <span className="text-gray-200">|</span>
            <Link
              href="/scholarships"
              className="text-xs text-gray-500 hover:text-[#005a31] underline underline-offset-2 transition"
            >
              Scholarships by country
            </Link>
          </div>
        </section>

        {/* ── STUDY ABROAD BANNER ── */}
        <div className="bg-[#f7faf9] border border-[#d0e8db] rounded-3xl p-8 mb-14 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              Ready to start your study abroad journey?
            </h2>
            <p className="text-sm text-gray-600 max-w-lg">
              We help students with{" "}
              <Link
                href="/our-services/visa-services/student-visa-from-bangladesh"
                className="text-[#005a31] font-semibold hover:underline"
              >
                student visas
              </Link>
              ,{" "}
              <Link href="/scholarships" className="text-[#005a31] font-semibold hover:underline">
                scholarships
              </Link>
              , and{" "}
              <Link
                href="/target-ielts-immigration-center"
                className="text-[#005a31] font-semibold hover:underline"
              >
                IELTS preparation
              </Link>
              . Over 200 countries covered.
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

        {/* ── CONTEXTUAL LINKS FOOTER ── */}
        <ContextualLinksFooter />
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="bg-gray-900 py-16 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#f5c800]/20 border border-[#f5c800]/40 text-[#f5c800] text-xs font-black px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            <GraduationCap size={14} /> Expert Student Visa Consultants
          </div>
          <h2 className="text-3xl font-black text-white mb-3">Ready to Study Abroad?</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Our student visa consultants help Bangladeshi students secure admission and visas for
            universities in Canada, UK, Australia, Germany, and 200+ more countries.
          </p>
          <a
            href={`https://wa.me/8801631312524?text=${encodeURIComponent(
              "Hi, I need help with my student visa application.",
            )}`}
            className="inline-flex items-center gap-3 px-10 py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all text-sm shadow-xl shadow-green-900/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Free Consultation via WhatsApp
          </a>
        </div>
      </div>
   </div>
    
    </>
  );
}