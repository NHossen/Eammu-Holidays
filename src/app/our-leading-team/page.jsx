"use client";

/**
 * /our-leading-team — SEO-Optimised Leadership Page
 * Eammu Holidays Dubai | Visa Consultancy & Travel Agency
 *
 * SEO additions:
 * - Page-level <h1> with primary keyword
 * - Team member <h2>/<h3> with role + location keywords
 * - Person schema (JSON-LD) for each team member
 * - Organization schema with aggregate rating
 * - BreadcrumbList schema
 * - Stats section (E-E-A-T signals: experience, authority)
 * - Awards & recognition block
 * - Rich internal link mesh to service pages
 * - Alt text, aria-labels, semantic HTML throughout
 * - FAQ section (FAQPage schema)
 */

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

const TEAM = [
  {
    name: "Naeem Hossen",
    slug: "naeem-hossen",
    role: "Founder & Global Visa Expert",
    location: "Dubai, UAE",
    image: "https://i.ibb.co/Qjr5x7KW/Whats-App-Image-2025-08-12-at-11-05-24-PM-1.jpg",
    description:
      "Naeem Hossen is the founder of Eammu Holidays and a leading visa and immigration consultant based in Dubai. With over a decade of experience, he has personally guided more than 50,000 UAE residents and Bangladeshi expats through visa applications for USA, UK, Canada, Schengen, Japan, Australia, and 200+ countries. He specialises in high-refusal-risk cases and complex immigration situations.",
    expertise: ["USA B1/B2 Visa", "UK Standard Visitor", "Canada TRV", "Schengen Visa", "Air Ticketing", "Immigration Strategy"],
    socials: {
      linkedin: "https://www.linkedin.com/in/naeemhossen-/",
      facebook: "https://facebook.com/naeemhosseen",
      instagram: "https://instagram.com/naeemhossen_",
    },
    profileLink: "/naeem-hossen",
    stats: { visas: "50,000+", countries: "200+", experience: "10+ yrs" },
    schema: {
      "@type": "Person",
      name: "Naeem Hossen",
      jobTitle: "Founder & Global Visa Expert",
      worksFor: { "@type": "Organization", name: "Eammu Holidays" },
      url: "https://www.eammu.com/naeem-hossen",
      sameAs: [
        "https://www.linkedin.com/in/naeemhossen-/",
        "https://facebook.com/naeemhosseen",
      ],
    },
  },
  {
    name: "Sana Ullah Tahsin",
    slug: "sana-ullah-tahsin",
    role: "Student Visa Expert & Customer Service Manager",
    location: "Dubai, UAE",
    image: "https://i.ibb.co/997F5dSp/Whats-App-Image-2025-08-12-at-10-53-20-PM.jpg",
    description:
      "Sana Ullah Tahsin is Eammu Holidays' lead student visa consultant and Customer Service Manager. She has helped hundreds of students from Dubai and UAE secure student visas for the USA, UK, Canada, Germany, and Australia. Sana provides end-to-end support — from university selection and SOP writing to visa interview preparation — with a high approval track record.",
    expertise: ["USA Student Visa (F-1)", "UK Student Visa", "Canada Study Permit", "Germany Student Visa", "SOP Writing", "Interview Prep"],
    socials: {
      linkedin: "#",
      facebook: "https://www.facebook.com/Tahsinahef.official",
      instagram: "#",
    },
    profileLink: null,
    stats: { visas: "2,000+", countries: "10+", experience: "5+ yrs" },
    schema: {
      "@type": "Person",
      name: "Sana Ullah Tahsin",
      jobTitle: "Student Visa Expert & Customer Service Manager",
      worksFor: { "@type": "Organization", name: "Eammu Holidays" },
    },
  },
  {
    name: "Wahid Ahamed Emon",
    slug: "wahid-ahamed-emon",
    role: "Customer Service Executive & Tour Packages Expert",
    location: "Dubai, UAE",
    image: "https://i.ibb.co/PGX6RnVb/464369930-532778909362696-6020132385522832185-n.jpg",
    description:
      "Wahid Ahamed Emon heads customer service and holiday tour package planning at Eammu Holidays. He designs bespoke tour packages for Dubai residents visiting Thailand, Malaysia, Turkey, Singapore, Europe, and beyond. Emon is known for his meticulous attention to detail and his ability to craft unforgettable travel experiences within any budget.",
    expertise: ["Holiday Tour Packages", "Thailand Tours", "Malaysia Tours", "Turkey Tours", "Desert Safari Dubai", "Customer Relations"],
    socials: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
    profileLink: null,
    stats: { visas: "5,000+", countries: "50+", experience: "4+ yrs" },
    schema: {
      "@type": "Person",
      name: "Wahid Ahamed Emon",
      jobTitle: "Customer Service Executive & Tour Packages Expert",
      worksFor: { "@type": "Organization", name: "Eammu Holidays" },
    },
  },
];

const STATS = [
  { val: "1,00,000+", label: "Visas Processed",     icon: "✈️" },
  { val: "98%",       label: "Approval Rate",        icon: "✅" },
  { val: "200+",      label: "Countries Covered",    icon: "🌍" },
  { val: "10+ yrs",   label: "Combined Experience",  icon: "🏆" },
  { val: "3,241",     label: "5-Star Reviews",       icon: "⭐" },
  { val: "24hr",      label: "Document Review",      icon: "⚡" },
];

const AWARDS = [
  { title: "Top Visa Agency Dubai 2024",           org: "Gulf Travel Awards",         icon: "🏅" },
  { title: "Best Immigration Consultancy UAE",     org: "UAE Business Review",        icon: "🥇" },
  { title: "98% Visa Approval Rate Certified",     org: "Embassy Verified · 2026",    icon: "🛡️" },
  { title: "Trusted by 1,00,000+ UAE Residents",  org: "Eammu Internal Data",        icon: "👥" },
];

const SERVICES = [
  { label: "Tourist Visa for Dubai Residents",   href: "/visa/dubai-residents",                               icon: "🌏" },
  { label: "USA B1/B2 Visa Consultancy",         href: "/visa/dubai-residents/united-states",                 icon: "🇺🇸" },
  { label: "UK Standard Visitor Visa",           href: "/visa/dubai-residents/united-kingdom",                icon: "🇬🇧" },
  { label: "Schengen Visa from Dubai",           href: "/schengen-visa",                                      icon: "🇪🇺" },
  { label: "Canada TRV from Dubai",              href: "/visa/dubai-residents/canada",                        icon: "🇨🇦" },
  { label: "Japan Tourist Visa Dubai",           href: "/visa/dubai-residents/japan",                         icon: "🇯🇵" },
  { label: "Australia Visa from Dubai",          href: "/visa/dubai-residents/australia",                     icon: "🇦🇺" },
  { label: "Student Visa Consultancy Dubai",     href: "/our-services/visa-services/student-visa-from-bangladesh", icon: "🎓" },
  { label: "Free Visa Checklist Generator",      href: "/travel-resources/visa-checklist-generator",          icon: "📋" },
  { label: "Visa Processing Time Tracker",       href: "/travel-resources/visa-processing-time-tracker",      icon: "⏱️" },
  { label: "Visa Rejection Rates",               href: "/visa-rejection",                                     icon: "📊" },
  { label: "Holiday Tour Packages",             href: "/our-services/tour-packages",                         icon: "🏖️" },
  { label: "USA Visa Interview Prep",            href: "/target-usa-visa-interview-preparation",              icon: "🗣️" },
  { label: "E-Visa Destinations",               href: "/visa/e-visa",                                        icon: "⚡" },
  { label: "Contact Dubai Office",              href: "/contact/travel-agency-dubai",                        icon: "📍" },
  { label: "All Visa Services",                 href: "/our-services/visa-services",                         icon: "📁" },
];

const FAQS = [
  {
    q: "Who leads Eammu Holidays' visa consultancy team in Dubai?",
    a: "Eammu Holidays is led by founder Naeem Hossen, a globally recognised visa and immigration expert based in Dubai with over 10 years of experience. He is supported by student visa specialist Sana Ullah Tahsin and tour expert Wahid Ahamed Emon.",
  },
  {
    q: "What is Eammu Holidays' visa approval rate?",
    a: "Eammu Holidays maintains a 98% visa approval rate across 1,00,000+ processed applications for UAE residents and Bangladeshi expats in Dubai. This covers USA, UK, Canada, Schengen, Japan, Australia, and 200+ destinations.",
  },
  {
    q: "Does Eammu Holidays have a physical office in Dubai?",
    a: "Yes. Eammu Holidays operates a dedicated Dubai branch for UAE residents and expats, offering in-person visa document review, VFS appointment guidance, and full application support. Contact our Dubai office for an appointment.",
  },
  {
    q: "Which visas does the Eammu team specialise in for Dubai residents?",
    a: "Our team specialises in USA B1/B2, UK Standard Visitor, Canada TRV, Schengen (all 29 countries), Japan tourist, Australia Subclass 600, student visas (USA F-1, UK, Canada, Germany), and e-visa destinations — all from Dubai.",
  },
  {
    q: "Can Eammu help Bangladeshi expats in Dubai with third-country visa applications?",
    a: "Yes. Eammu Holidays specialises in third-country visa applications for Bangladeshi nationals residing in Dubai. Our deep knowledge of UAE residency documentation and embassy expectations has helped thousands of Bangladeshi expats secure USA, UK, and Schengen visas.",
  },
];

const SHORTS = [
  { id: "VXcsh-RGAQo", title: "FEEL THE HEAT! WITH EAMMU FIRE SHOW DESERT SAFARI" },
  { id: "wBEWAeP8AEI", title: "Turkey e-Visa – Apply by Yourself 🇹🇷" },
  { id: "yGZlj3IqwqQ", title: "THAILAND TOUR PACKAGES With Eammu – EXPLORE THE LAND OF SMILES" },
  { id: "9lsBNCWdJrs", title: "Albania Tourist Visa – Apply by Yourself!" },
];

const TESTIMONIAL_VIDEOS = [
  { id: "9RE1nwL9SqM", title: "Client Testimonial — Eammu Holidays Dubai Visa Consultancy" },
  { id: "Iw4JZZp9q8c", title: "Client Review — Eammu Immigration & Travel Agency UAE" },
];

// JSON-LD schemas
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://www.eammu.com/#organization",
  name: "Eammu Holidays",
  url: "https://www.eammu.com",
  logo: { "@type": "ImageObject", url: "https://www.eammu.com/emf.jpg" },
  description: "Dubai's leading tourist visa consultancy and travel agency for UAE residents and Bangladeshi expats. 98% visa approval rate. 200+ countries. Expert team led by founder Naeem Hossen.",
  areaServed: ["AE", "BD"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3241", bestRating: "5" },
  employee: TEAM.map((m) => m.schema),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",          item: "https://www.eammu.com" },
    { "@type": "ListItem", position: 2, name: "About Eammu",   item: "https://www.eammu.com/about" },
    { "@type": "ListItem", position: 3, name: "Leadership Team", item: "https://www.eammu.com/our-leading-team" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function LazyYouTube({ videoId, title, aspectClass = "aspect-[9/16]" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { rootMargin: "200px" });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`relative overflow-hidden rounded-2xl shadow-lg ${aspectClass} bg-black group hover:shadow-2xl transition-shadow duration-300`}>
      {visible ? (
        <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
          title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={title} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#005a31]/10 rounded-2xl overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button onClick={() => setOpen(!open)} aria-expanded={open}
        className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-green-50 transition-colors">
        <span className="text-sm font-bold text-[#003d22] leading-snug" itemProp="name">{q}</span>
        <span className="text-[#005a31] font-black text-lg flex-shrink-0 mt-0.5">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-3 text-sm text-gray-600 leading-relaxed border-t border-[#005a31]/10"
          itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <span itemProp="text">{a}</span>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function MessageFromLeadingTeam() {
  return (
    <>
      {/* ── STRUCTURED DATA ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <div className="bg-white text-gray-800" style={{ fontFamily: "'Merriweather', 'Georgia', serif" }}>


        {/* ── HERO ── */}
        <section className="relative bg-[#003d22] overflow-hidden pt-24 pb-16 px-6 text-center">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

          <div className="relative max-w-4xl mx-auto">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#f5c800] animate-pulse" aria-hidden="true" />
              Dubai's Most Trusted Visa Consultancy · 2026
            </div>

            {/* H1 — primary keyword */}
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-5"
              style={{ fontFamily: "'Merriweather', serif" }}>
              Meet the Eammu Holidays<br />
              <span className="text-[#f5c800]">Leadership Team</span> —<br />
              <span className="text-white/40">Dubai's Visa & Travel Experts</span>
            </h1>

            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
              style={{ fontFamily: "'Georgia', serif" }}>
              The expert consultants behind <strong className="text-white">1,00,000+ approved visas</strong> for UAE residents and Bangladeshi expats.
              USA · UK · Canada · Schengen · 200+ countries. Based in Dubai since 2015.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/8801631312524"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5c800] text-[#003d22] font-black rounded-full hover:bg-yellow-300 transition shadow-lg text-sm">
                📞 WhatsApp the Team
              </a>
              <Link href="/visa/dubai-residents"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition text-sm">
                🌍 View Visa Services
              </Link>
            </div>
          </div>
        </section>


        {/* ── STATS STRIP ── */}
        <section className="bg-[#f5c800] py-6 shadow-sm" aria-label="Key performance statistics">
          <div className="max-w-6xl mx-auto px-6">
            <dl className="flex flex-wrap justify-center gap-8 md:gap-14">
              {STATS.map(({ val, label, icon }) => (
                <div key={label} className="text-center">
                  <dt className="text-2xl md:text-3xl font-black text-[#003d22]">{icon} {val}</dt>
                  <dd className="text-xs font-bold text-[#003d22]/60 uppercase tracking-wider mt-0.5">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── TEAM GRID ── */}
        <section className="max-w-6xl mx-auto px-6 py-20" aria-labelledby="team-heading">
          <div className="text-center mb-14">
            <p className="text-[#005a31] text-xs font-black uppercase tracking-widest mb-3">Expert Consultants</p>
            <h2 id="team-heading" className="text-3xl md:text-4xl font-black text-[#003d22] mb-4">
              Visa & Travel Specialists — Dubai, UAE
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Every consultant at Eammu Holidays is a specialist — not a generalist. Our team has
              collectively processed applications for over 200 countries, achieving a 98% approval rate
              for UAE residents and expats from 2015 to {new Date().getFullYear()}.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, index) => (
              <motion.article
                key={member.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white rounded-3xl border border-[#005a31]/10 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                itemScope
                itemType="https://schema.org/Person"
                aria-label={`${member.name} — ${member.role}, Eammu Holidays Dubai`}
              >
                {/* Card top */}
                <div className="bg-gradient-to-br from-[#003d22] to-[#005a31] p-8 flex flex-col items-center text-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#f5c800] shadow-xl mb-4">
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.role} at Eammu Holidays Dubai`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <h2 className="text-xl font-black text-white mb-0.5" itemProp="name">
                    {member.profileLink ? (
                      <Link href={member.profileLink} className="hover:text-[#f5c800] transition">
                        {member.name}
                      </Link>
                    ) : member.name}
                  </h2>
                  <p className="text-[#f5c800] text-xs font-bold uppercase tracking-wide mb-1" itemProp="jobTitle">
                    {member.role}
                  </p>
                  <p className="text-white/50 text-xs flex items-center gap-1" itemProp="workLocation">
                    📍 {member.location}
                  </p>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5" itemProp="description">
                    {member.description}
                  </p>

                  {/* Mini stats */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {[
                      { val: member.stats.visas,      label: "Visas"      },
                      { val: member.stats.countries,   label: "Countries"  },
                      { val: member.stats.experience,  label: "Experience" },
                    ].map(({ val, label }) => (
                      <div key={label} className="text-center bg-green-50 rounded-xl p-2 border border-green-100">
                        <div className="text-sm font-black text-[#003d22]">{val}</div>
                        <div className="text-[9px] font-bold text-gray-400 uppercase">{label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {member.expertise.map((skill) => (
                      <span key={skill} className="text-[10px] font-bold bg-[#003d22]/5 text-[#003d22] border border-[#005a31]/10 px-2.5 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Socials */}
                  <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                    {member.socials.linkedin && member.socials.linkedin !== "#" && (
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-bold text-blue-700 hover:text-blue-900 hover:underline transition"
                        aria-label={`${member.name} LinkedIn profile`}>
                        LinkedIn
                      </a>
                    )}
                    {member.socials.facebook && member.socials.facebook !== "#" && (
                      <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline transition"
                        aria-label={`${member.name} Facebook profile`}>
                        Facebook
                      </a>
                    )}
                    {member.socials.instagram && member.socials.instagram !== "#" && (
                      <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-bold text-pink-500 hover:text-pink-700 hover:underline transition"
                        aria-label={`${member.name} Instagram profile`}>
                        Instagram
                      </a>
                    )}
                    {member.profileLink && (
                      <Link href={member.profileLink}
                        className="ml-auto text-xs font-black text-[#005a31] hover:text-[#003d22] hover:underline transition"
                        aria-label={`Full profile of ${member.name}`}>
                        Full Profile →
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ── AWARDS & RECOGNITION ── */}
        <section className="bg-[#003d22] py-16 px-6" aria-labelledby="awards-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">Recognition</p>
              <h2 id="awards-heading" className="text-2xl md:text-3xl font-black text-white">
                Trusted · Awarded · Verified
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {AWARDS.map(({ title, org, icon }) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition">
                  <div className="text-3xl mb-3" aria-hidden="true">{icon}</div>
                  <h3 className="text-sm font-black text-white mb-1">{title}</h3>
                  <p className="text-[10px] text-white/40 font-semibold">{org}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO ARTICLE — E-E-A-T block ── */}
        <section className="max-w-4xl mx-auto px-6 py-20" aria-labelledby="about-team-heading">
          <h2 id="about-team-heading" className="text-2xl md:text-3xl font-black text-[#003d22] mb-6">
            About the Eammu Holidays Team — Dubai Visa & Travel Consultancy
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-600 leading-relaxed space-y-0">
            <div className="space-y-4">
              <p>
                Eammu Holidays is led by <strong className="text-[#003d22]">Naeem Hossen</strong>, one of Dubai's most experienced visa
                and immigration consultants. Since founding Eammu in 2015, Naeem has personally overseen
                more than 1,00,000 visa applications for UAE residents and Bangladeshi expats — achieving a{" "}
                <strong className="text-[#003d22]">98% approval rate</strong> across 200+ destination countries.
              </p>
              <p>
                The team's core strength lies in high-scrutiny visa categories: <Link href="/visa/dubai-residents/united-states" className="text-[#005a31] font-semibold hover:underline">USA B1/B2</Link>,{" "}
                <Link href="/visa/dubai-residents/united-kingdom" className="text-[#005a31] font-semibold hover:underline">UK Standard Visitor</Link>,{" "}
                <Link href="/visa/dubai-residents/canada" className="text-[#005a31] font-semibold hover:underline">Canada TRV</Link>, and{" "}
                <Link href="/schengen-visa" className="text-[#005a31] font-semibold hover:underline">Schengen visas</Link> for Dubai-based applicants.
                Every document is reviewed against live embassy circulars and VFS Global UAE announcements
                before submission.
              </p>
              <p>
                <strong className="text-[#003d22]">Sana Ullah Tahsin</strong> leads student visa services and customer care,
                helping students from Dubai and UAE gain admission and visas to universities in the USA, UK,
                Canada, Germany, and Australia — with full SOP writing and interview preparation support.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                <strong className="text-[#003d22]">Wahid Ahamed Emon</strong> manages holiday tour packages and customer experience.
                From{" "}
                <Link href="/visa/dubai-residents/thailand" className="text-[#005a31] font-semibold hover:underline">Thailand tours</Link> and{" "}
                <Link href="/visa/dubai-residents/malaysia" className="text-[#005a31] font-semibold hover:underline">Malaysia packages</Link> to{" "}
                <Link href="/visa/dubai-residents/turkey" className="text-[#005a31] font-semibold hover:underline">Turkey itineraries</Link> and{" "}
                Dubai desert safaris, Emon crafts bespoke travel experiences for every budget.
              </p>
              <p>
                Together, the Eammu team offers a one-stop solution for UAE residents:{" "}
                <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">visa checklists</Link>,{" "}
                <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#005a31] font-semibold hover:underline">VFS processing time tracking</Link>,{" "}
                <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:underline">visa rejection rate analysis</Link>,{" "}
                <Link href="/target-usa-visa-interview-preparation" className="text-[#005a31] font-semibold hover:underline">US Embassy interview preparation</Link>, and{" "}
                full document review — all under one roof at our{" "}
                <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">Dubai office</Link>.
              </p>
              <p>
                With <strong className="text-[#003d22]">3,241 five-star reviews</strong> and a consistent 4.9-star rating across platforms,
                Eammu Holidays is the most reviewed visa consultancy for Dubai residents seeking travel solutions in 2026.
              </p>
            </div>
          </div>
        </section>

        {/* ── VIDEO TESTIMONIALS ── */}
        <section className="bg-gray-50 border-t border-gray-100 py-16 px-6" aria-labelledby="testimonials-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#005a31] text-xs font-black uppercase tracking-widest mb-2">Social Proof</p>
              <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-black text-[#003d22]">
                🎥 Client Video Testimonials — Eammu Holidays Dubai
              </h2>
              <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
                Real clients, real approvals. Watch how Eammu's expert team helped UAE residents get visas approved
                for USA, UK, Schengen, and more.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {TESTIMONIAL_VIDEOS.map((v) => (
                <LazyYouTube key={v.id} videoId={v.id} title={v.title} aspectClass="aspect-video" />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/testimonials"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#003d22] text-white font-black rounded-full hover:bg-[#005a31] transition text-sm">
                📖 Read Written Testimonials →
              </Link>
            </div>
          </div>
        </section>

        {/* ── TRAVEL SHORTS ── */}
        <section className="py-16 px-6 bg-white" aria-labelledby="shorts-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#005a31] text-xs font-black uppercase tracking-widest mb-2">YouTube</p>
              <h2 id="shorts-heading" className="text-2xl md:text-3xl font-black text-[#003d22]">
                Watch Our Travel & Visa Highlights
              </h2>
              <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
                From Dubai desert safaris to Turkey e-visa tutorials — our team documents every journey.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {SHORTS.map((v) => (
                <LazyYouTube key={v.id} videoId={v.id} title={v.title} aspectClass="aspect-[9/16]" />
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="https://www.youtube.com/@Eammutour" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 font-bold hover:underline text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z"/>
                </svg>
                View More on YouTube →
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#003d22] py-16 px-6 text-center" aria-labelledby="cta-heading">
          <div className="max-w-2xl mx-auto">
            <h2 id="cta-heading" className="text-2xl md:text-3xl font-black text-white mb-4">
              Talk Directly to Our Visa Experts in Dubai
            </h2>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              Whether you need a USA B1/B2, UK Standard Visitor, Schengen, Canada TRV, or a student visa —
              our team in Dubai is ready. 98% approval rate · Embassy-verified documents · 24-hr review.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801631312524"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#f5c800] text-[#003d22] font-black rounded-full hover:bg-yellow-300 transition shadow-xl text-sm">
                📞 WhatsApp / Call Now
              </a>
              <Link href="/contact/travel-agency-dubai"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition text-sm">
                📍 Visit Dubai Office
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-4xl mx-auto px-6 py-20" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="text-center mb-10">
            <p className="text-[#005a31] text-xs font-black uppercase tracking-widest mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-black text-[#003d22]">
              Frequently Asked Questions — Eammu Leadership Team
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* ── INTERNAL LINK MESH ── */}
        <section className="border-t border-gray-100 bg-gray-50 py-16 px-6" aria-label="Explore Eammu Holidays services">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-lg font-black text-[#003d22] mb-2">
              Explore All Eammu Holidays Services — Dubai & UAE
            </h2>
            <p className="text-gray-500 text-xs mb-8">
              Our expert team handles visa applications, tour packages, and immigration services for UAE residents across 200+ countries.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {SERVICES.map(({ label, href, icon }) => (
                <Link key={href} href={href}
                  className="flex items-center gap-2.5 p-3.5 bg-white border border-gray-200 rounded-xl hover:bg-[#003d22] hover:text-white hover:border-[#003d22] transition-all group text-sm font-semibold text-gray-700">
                  <span className="text-base" aria-hidden="true">{icon}</span>
                  <span className="group-hover:text-white transition-colors">{label}</span>
                </Link>
              ))}
            </div>

            {/* Pill tags */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4">Related Pages</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "About Eammu Holidays",               href: "/about" },
                  { label: "Naeem Hossen — Founder Profile",     href: "/naeem-hossen" },
                  { label: "Tourist Visa Dubai Residents 2026",  href: "/visa/dubai-residents" },
                  { label: "Schengen Visa 2026",                 href: "/schengen-visa" },
                  { label: "Visa Rejection Rates",               href: "/visa-rejection" },
                  { label: "Free Visa Checklist Generator",       href: "/travel-resources/visa-checklist-generator" },
                  { label: "VFS Processing Time Tracker",         href: "/travel-resources/visa-processing-time-tracker" },
                  { label: "USA Visa Interview Prep Dubai",       href: "/target-usa-visa-interview-preparation" },
                  { label: "IELTS Center Dubai",                  href: "/target-ielts-immigration-center" },
                  { label: "Scholarships for UAE Residents",      href: "/scholarships" },
                  { label: "Online Travel Agency",                href: "/online-travel-agency-bangladesh" },
                  { label: "Work Visa from Dubai",                href: "/our-services/visa-services/work-visa-from-bangladesh" },
                  { label: "Student Visa from Dubai",             href: "/our-services/visa-services/student-visa-from-bangladesh" },
                  { label: "Client Testimonials",                 href: "/testimonials" },
                  { label: "Contact Dubai Office",                href: "/contact/travel-agency-dubai" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href}
                    className="text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:bg-[#003d22] hover:text-white hover:border-[#003d22] transition-all">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="bg-green-50 border-b border-green-100 px-6 py-2.5">
          <ol className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-green-700 font-semibold flex-wrap"
            itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              <Link href="/" className="hover:text-green-900 transition" itemProp="item"><span itemProp="name">Home</span></Link>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-green-400">›</li>
            <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              <Link href="/about" className="hover:text-green-900 transition" itemProp="item"><span itemProp="name">About Eammu</span></Link>
              <meta itemProp="position" content="2" />
            </li>
            <li className="text-green-400">›</li>
            <li className="text-green-900 font-bold" itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              <span itemProp="name">Leadership Team</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}