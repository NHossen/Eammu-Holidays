"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle, Globe, ShieldCheck, FileText, 
  HelpCircle, Clock, Wallet, TrendingUp, PlayCircle, 
  ArrowRight, MapPin, Star, Users, Award,
  ChevronDown, ExternalLink, Phone, Mail, MessageCircle,
  Landmark, Building2, Plane, CalendarDays, BadgeCheck,
  TreePine, Mountain, Camera, Coffee
} from 'lucide-react';

// ─── INTERNAL LINK DATA ────────────────────────────────────────────────────
const visaServiceLinks = [
  { label: "Dubai Visa Application", href: "/our-services/visa/dubai-visa-application", flag: "🇦🇪" },
  { label: "Malaysia Visa Application", href: "/our-services/visa/malaysia-visa-application", flag: "🇲🇾" },
  { label: "Thailand Visa Application", href: "/our-services/visa/thailand-visa-application", flag: "🇹🇭" },
  { label: "Singapore Visa Application", href: "/our-services/visa/singapore-visa-application", flag: "🇸🇬" },
  { label: "Turkey Visa Application", href: "/our-services/visa/turkey-visa-application", flag: "🇹🇷" },
  { label: "Georgia Visa Application", href: "/our-services/visa/georgia-visa-application", flag: "🇬🇪" },
  { label: "Albania Visa Application", href: "/our-services/visa/albania-visa-application", flag: "🇦🇱" },
  { label: "Indonesia Visa Application", href: "/our-services/visa/indonesia-visa-application", flag: "🇮🇩" },
  { label: "Sri Lanka Visa Application", href: "/our-services/visa/srilanka-visa-application", flag: "🇱🇰" },
];

const dubaiResidentLinks = [
  { label: "Canada Visa for Dubai Residents", href: "/visa/dubai-residents/canada", flag: "🇨🇦" },
  { label: "Albania Visa for Dubai Residents", href: "/visa/dubai-residents/albania", flag: "🇦🇱" },
  { label: "Serbia Visa for Dubai Residents", href: "/visa/dubai-residents/serbia", flag: "🇷🇸" },
  { label: "Georgia Visa for Dubai Residents", href: "/visa/dubai-residents/georgia", flag: "🇬🇪" },
  { label: "UK Visa for Dubai Residents", href: "/visa/dubai-residents/united-kingdom", flag: "🇬🇧" },
  { label: "USA Visa for Dubai Residents", href: "/visa/dubai-residents/united-states", flag: "🇺🇸" },
  { label: "Australia Visa for Dubai Residents", href: "/visa/dubai-residents/australia", flag: "🇦🇺" },
  { label: "Germany Visa for Dubai Residents", href: "/visa/dubai-residents/germany", flag: "🇩🇪" },
  { label: "Japan Visa for Dubai Residents", href: "/visa/dubai-residents/japan", flag: "🇯🇵" },
  { label: "South Korea Visa for Dubai Residents", href: "/visa/dubai-residents/south-korea", flag: "🇰🇷" },
  { label: "Turkey Visa for Dubai Residents", href: "/visa/dubai-residents/turkey", flag: "🇹🇷" },
];

// ─── FAQ DATA ─────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How long does the Armenia E-Visa take to process?",
    a: "The standard Armenia e-visa processing time is 3 to 4 working days from submission of complete documents. Express processing may be available in urgent cases. We strongly recommend applying at least 7 days before your travel date. Eammu Holidays monitors every application to ensure timely delivery."
  },
  {
    q: "How much does an Armenia visa cost in 2026?",
    a: "The official Armenian government e-visa fee is approximately $6 USD for a 21-day single-entry stay and $31 USD for a 120-day stay. Eammu Holidays service fee covers professional document review, application submission, follow-up, and full consultation. Contact us for a personalised quote."
  },
  {
    q: "Can Dubai residents apply for an Armenia visa online?",
    a: "Yes. UAE and Dubai residents — including Indian, Pakistani, Bangladeshi, Filipino, and other expat nationalities — can apply for an Armenia e-visa entirely online. Eammu Holidays, with offices in Dubai and Yerevan, provides complete end-to-end support for UAE-based applicants."
  },
  {
    q: "Do Bangladeshi nationals need a visa for Armenia?",
    a: "Yes, Bangladeshi passport holders need a visa to travel to Armenia. The good news is that Armenia offers an online e-visa system accessible to Bangladeshi citizens. Eammu Holidays, with roots in Bangladesh and offices in Dubai, provides full document preparation and application support."
  },
  {
    q: "What documents are required for an Armenia visa application?",
    a: "The standard Armenia visa requirements include: a valid passport (minimum 6 months validity beyond travel date), digital biometric photo (35x45mm), confirmed return flight booking, hotel reservation or accommodation address, valid email address, and proof of occupation. A bank statement and travel insurance are strongly recommended for all applicants."
  },
  {
    q: "Can GCC residents get a visa on arrival in Armenia?",
    a: "Many GCC-based residents, including Indians, Pakistanis, Bangladeshis, and Filipinos with valid GCC residency permits, may be eligible for an Armenia visa on arrival or e-visa. Eligibility varies by passport nationality. Contact Eammu Holidays before booking travel to confirm your specific requirements."
  },
  {
    q: "Is the Armenia E-Visa valid for multiple entries?",
    a: "Armenia issues both single-entry and multiple-entry e-visas. The 21-day visa is typically single entry while longer-duration visas may include multiple entry. Frequent travelers to Armenia for business purposes should apply for a multiple-entry visa. Our team will advise the best option for your situation."
  },
  {
    q: "Can I get Armenia Residency through employment?",
    a: "Yes. If you secure an employment contract with a registered Armenian company, Eammu Holidays can process your Temporary Residence Card (TRC) — valid for 1 year and fully renewable. Our Yerevan office provides complete on-the-ground support for residence registration, company formation, and renewals."
  },
  {
    q: "Is Armenia safe to visit in 2026?",
    a: "Armenia is widely considered safe for tourists in 2026. Yerevan is a vibrant, modern capital with excellent infrastructure. The country is known for its warm hospitality, rich culture, UNESCO heritage sites, and stunning mountain landscapes. Eammu Holidays provides updated travel advisories with every application."
  },
  {
    q: "Do EU and US citizens need a visa for Armenia?",
    a: "No. Citizens of EU member states and the United States of America can enter Armenia visa-free for up to 180 days per year. GCC nationals and UAE citizens are also among the nationalities enjoying visa-free access. Check our full visa-free eligibility guide or contact us for confirmation."
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────
const ArmeniaVisa = () => {
  return (
    <main className="bg-white min-h-screen font-sans text-slate-900 selection:bg-orange-100">


      {/* ── HERO SECTION ── */}
      <section
        aria-label="Armenia Visa Application Hero"
        className="relative pt-16 md:pt-24 pb-16 px-6 lg:px-12 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-60" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl -z-10 opacity-60" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#005a31] px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-emerald-100">
              <ShieldCheck size={14} /> IATA Accredited · Official 2026 Partner
            </div>

            {/* H1 – Primary Keyword */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#005a31] mb-4 leading-[1.05] tracking-tight">
              Armenia Visa <br />
              <span className="text-[#ff6b00]">Made Simple.</span>
            </h1>

            {/* Rich semantic subtitle */}
            <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-xl leading-relaxed font-medium">
              Apply for your <strong>Armenia e-visa</strong>, <strong>tourist visa</strong>, <strong>work permit</strong>, or <strong>residency permit</strong> with Eammu Holidays — the trusted IATA-accredited visa agency for UAE, Dubai, and Bangladesh applicants.
            </p>
            <p className="text-sm text-slate-500 mb-8 max-w-xl leading-relaxed">
              We guide Indian, Pakistani, Bangladeshi, Filipino and other expats in Dubai through every step of the Armenia visa process — from documents to delivery. 98% approval rate · 3–5 day processing · Office in Yerevan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/37494810585"
                rel="noopener noreferrer"
                className="bg-[#005a31] hover:bg-[#ff6b00] text-white px-8 py-4 rounded-2xl font-black text-base shadow-xl transition-all flex items-center justify-center gap-3"
                aria-label="Apply for Armenia visa via WhatsApp"
              >
                <MessageCircle size={20} /> Apply via WhatsApp
              </a>
              <a
                href="tel:+971507078334"
                className="bg-white border-2 border-slate-100 hover:border-[#005a31] text-[#005a31] px-8 py-4 rounded-2xl font-black text-base transition-all flex items-center justify-center gap-3"
                aria-label="Call Eammu Holidays UAE hotline"
              >
                <Phone size={18} /> +971 50 707 8334
              </a>
            </div>

            {/* Quick trust signals */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span className="flex items-center gap-1"><BadgeCheck size={14} className="text-[#005a31]" /> IATA Accredited</span>
              <span className="flex items-center gap-1"><Star size={14} className="text-[#ff6b00]" /> 4.9/5 Rating</span>
              <span className="flex items-center gap-1"><Users size={14} className="text-[#005a31]" /> 5,000+ Visas</span>
              <span className="flex items-center gap-1"><MapPin size={14} className="text-[#ff6b00]" /> Office in Yerevan</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-slate-100">
              <img
                src="https://images.unsplash.com/photo-1544171242-2007887d9063?q=80&w=1200"
                alt="Yerevan Armenia visa application - Eammu Holidays"
                width="1200"
                height="450"
                className="w-full h-[300px] md:h-[450px] object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#005a31]/60 to-transparent flex items-end p-8">
                <div>
                  <p className="text-white font-black text-2xl">Yerevan, Armenia</p>
                  <p className="text-white/80 text-sm">The Rose City · Ancient History · Modern Living</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 hidden md:block">
              <p className="text-[#005a31] font-black text-3xl">98%</p>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Approval Rate</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#ff6b00] p-4 rounded-2xl shadow-xl hidden md:block">
              <p className="text-white font-black text-lg leading-none">3–5</p>
              <p className="text-white/80 text-[9px] font-bold uppercase tracking-wider">Days</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRIC BOXES ── */}
      <section aria-label="Armenia Visa Key Statistics" className="py-10 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <MetricBox icon={<Clock />} label="Processing Time" value="3–5 Days" sub="Working days" />
          <MetricBox icon={<Wallet />} label="E-Visa Fee" value="From $6" sub="Govt. fee" />
          <MetricBox icon={<TrendingUp />} label="Approval Rate" value="98.4%" sub="Track record" />
          <MetricBox icon={<Globe />} label="Application" value="100% Online" sub="No embassy visit" />
        </div>
      </section>

      {/* ── SEO RICH TEXT INTRODUCTION ── */}
      <section aria-label="Armenia Visa Information" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mb-4 tracking-tight">
              Armenia Visa Application 2026 — Complete Guide
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Whether you are applying for an <strong>Armenia tourist visa</strong>, planning a long-term stay with a <strong>residency permit</strong>, 
              or exploring <strong>Armenia for business</strong> — Eammu Holidays provides expert, end-to-end visa support from 
              <strong> Dubai, UAE</strong> and <strong>Bangladesh</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard
              icon={<Plane size={28} />}
              title="Armenia E-Visa for Tourists"
              desc="The Armenia e-visa is available online for most nationalities. Apply for a 21-day or 120-day tourist visa from the comfort of your home. No embassy visit required. Eammu Holidays handles the entire application on your behalf."
              link={{ label: "Apply Now →", href: "https://wa.me/37494810585" }}
            />
            <InfoCard
              icon={<Building2 size={28} />}
              title="Armenia Business Visa"
              desc="Traveling to Yerevan for meetings, conferences or business development? The Armenia business visa allows multiple entries and extended stays. Our team prepares all supporting documents including invitation letters and company registration proof."
              link={{ label: "Get Business Visa →", href: "https://wa.me/37494810585" }}
            />
            <InfoCard
              icon={<Landmark size={28} />}
              title="Armenia Residency & Work Permit"
              desc="Relocating to Armenia? Eammu Holidays' Yerevan office provides full support for Armenia residency permits, work permits, Temporary Residence Cards (TRC), and company registration. Start your Armenia journey with confidence."
              link={{ label: "Explore Residency →", href: "https://wa.me/37494810585" }}
            />
          </div>
        </div>
      </section>

      {/* ── VIDEO GUIDE ── */}
      <section aria-label="Armenia Visa Video Guide" className="py-20 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#ff6b00] font-black text-xs uppercase tracking-widest">Watch & Learn</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#005a31] uppercase tracking-tighter mt-2 mb-4">
              Armenia Visa Application Video Guide
            </h2>
            <div className="h-1.5 w-20 bg-[#ff6b00] mx-auto rounded-full" />
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-sm">
              Watch our step-by-step Armenia visa tutorials — from document preparation to e-visa portal submission. Specifically tailored for Dubai residents and Bangladeshi applicants.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VideoCard id="98fSRoZIkWs" title="Avoid Armenia Visa Rejection" desc="Top reasons for Armenia visa rejection and how to avoid them. Essential tips for first-time applicants from UAE and Bangladesh." />
            <VideoCard id="mVo9V7RR5fE" title="Dubai to Armenia — Visa Guide" desc="Complete Armenia visa application walkthrough for UAE and Dubai residents including Indians, Pakistanis and Bangladeshis." />
            <VideoCard id="NrSjr1GnotY" title="Fast Armenia Visa Processing" desc="How Eammu Holidays processes Armenia e-visas in as little as 3 working days — documents, portal access and delivery." />
          </div>
        </div>
      </section>

      {/* ── VISA TYPE POSTER CARDS ── */}
      <section aria-label="Armenia Visa Types" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-[#ff6b00] font-black text-xs uppercase tracking-widest">All Visa Types</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mt-2 mb-2 uppercase tracking-tighter">
              Armenia <span className="text-[#ff6b00]">Visa Programs</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-2xl">
              From short-stay e-visas to permanent residency — Eammu Holidays covers every Armenia immigration pathway for UAE residents, Bangladeshis and GCC expats.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <PosterCard
              img="https://images.unsplash.com/photo-1544171242-2007887d9063?q=80&w=800"
              type="Tourist"
              title="Short Term E-Visa"
              desc="21 or 120 days · Online · From $6"
            />
            <PosterCard
              img="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800"
              type="Business"
              title="Business Visa"
              desc="Multiple entry · Meetings & Conferences"
            />
            <PosterCard
              img="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800"
              type="Remote Work"
              title="Work Permit"
              desc="Employment-based · 1 Year · Renewable"
            />
            <PosterCard
              img="https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=800"
              type="Long-term"
              title="Residency Permit"
              desc="TRC · Permanent · Company Registration"
            />
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR GRID ── */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

        <div className="lg:col-span-8 space-y-16">

          {/* ── DOCUMENT CHECKLIST ── */}
          <section aria-label="Armenia Visa Document Requirements">
            <div className="flex items-center gap-5 mb-10">
              <div className="bg-[#005a31] p-4 rounded-[1.25rem] text-white shadow-xl">
                <FileText size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tight">Armenia Visa Document Checklist</h2>
                <p className="text-slate-500 font-medium mt-1 text-sm">Complete requirements for 2026 Armenia visa applications</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#f8fafc] p-7 rounded-[2rem] border border-slate-100 hover:border-emerald-200 transition-colors">
                <h3 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-5">Identity & Travel Docs</h3>
                <div className="space-y-3">
                  <CheckItem text="Passport (Valid 6+ months beyond travel)" />
                  <CheckItem text="Copy of Previous Visas (if applicable)" />
                  <CheckItem text="Digital Biometric Photo (35×45mm)" />
                  <CheckItem text="Completed Online Application Form" />
                </div>
              </div>

              <div className="bg-[#f8fafc] p-7 rounded-[2rem] border border-slate-100 hover:border-emerald-200 transition-colors">
                <h3 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-5">Logistics & Accommodation</h3>
                <div className="space-y-3">
                  <CheckItem text="Confirmed Return Flight Booking" />
                  <CheckItem text="Hotel Reservation or Host Address" />
                  <CheckItem text="Valid Email Address" />
                  <CheckItem text="Travel Insurance (Strongly Recommended)" />
                </div>
              </div>

              <div className="bg-[#f8fafc] p-7 rounded-[2rem] border border-slate-100 hover:border-emerald-200 transition-colors">
                <h3 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-5">Financial & Professional</h3>
                <div className="space-y-3">
                  <CheckItem text="Proof of Occupation / Employment" />
                  <CheckItem text="Bank Statement (Recommended)" />
                  <CheckItem text="Contact Details in Armenia" />
                  <CheckItem text="Company Letter (For Business Visa)" />
                </div>
              </div>

              <div className="bg-[#005a31] md:col-span-3 p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-[#ff6b00] font-black text-xs uppercase tracking-[0.2em] mb-5">Armenia Residency & Work Permit Additional Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <CheckItem light text="Employment Contract (Armenian Company)" />
                    <CheckItem light text="Medical / Health Check Certificate" />
                    <CheckItem light text="Police Clearance Certificate" />
                    <CheckItem light text="Notarized Passport Translation" />
                  </div>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <ShieldCheck size={200} />
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="mt-8 p-7 bg-orange-50 border border-orange-100 rounded-[2rem] flex flex-col md:flex-row items-start gap-5">
              <div className="bg-[#ff5722] text-white p-3.5 rounded-2xl shadow-lg shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-[#005a31] font-black uppercase text-xs tracking-wider mb-2">Important Notice for 2026 Applicants</p>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  While Armenia offers e-visas to citizens of most countries, some nationalities require a physical sticker visa through the Armenian embassy. Our Yerevan office provides full ground support for <strong>Permanent Residency applications</strong>, <strong>Temporary Residence Cards (TRC)</strong>, and <strong>company registration in Armenia</strong>. Contact us to verify your nationality requirements before applying.
                </p>
              </div>
            </div>
          </section>

          {/* ── VISA FREE SECTION ── */}
          <section aria-label="Armenia Visa Free Entry" className="bg-emerald-50 rounded-[2rem] p-8 md:p-10 border border-emerald-100">
            <h2 className="text-2xl font-black text-[#005a31] mb-4 tracking-tight uppercase">
              Armenia Visa-Free Countries 2026
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6 text-sm font-medium">
              Armenia offers visa-free entry for up to <strong>180 days per year</strong> to citizens of many countries. The following nationals can enter Armenia without a visa:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                "All European Union (EU) member state citizens",
                "United States of America (USA) passport holders",
                "United Arab Emirates (UAE) nationals",
                "All GCC (Gulf Cooperation Council) country citizens",
                "United Kingdom (UK) passport holders",
                "Russia, Belarus, and CIS country citizens",
                "Argentina, Brazil, and many Latin American nations",
                "Switzerland, Norway, Iceland passport holders",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <CheckCircle size={16} className="text-[#ff6b00] mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 bg-white/60 rounded-xl p-4 border border-emerald-100">
              <strong>Note:</strong> GCC residents (holding valid residency permits) from countries such as India, Pakistan, Bangladesh, Philippines, and Sri Lanka may also be eligible for visa-on-arrival or e-visa under certain conditions. Confirm eligibility with Eammu Holidays before booking.
            </p>
          </section>

          {/* ── WHY ARMENIA SECTION ── */}
          <section aria-label="Why Visit Armenia">
            <h2 className="text-3xl font-black text-[#005a31] mb-3 uppercase tracking-tight">
              Why Visit Armenia in 2026?
            </h2>
            <p className="text-slate-500 text-sm mb-8 max-w-2xl">Armenia is one of the world's oldest civilizations and an increasingly popular destination for UAE and Bangladesh-based travelers seeking affordability, culture, and natural beauty.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: <Landmark size={22} />, title: "UNESCO Heritage Sites", desc: "Garni Temple, Geghard Monastery, Haghpat — among the oldest Christian heritage sites in the world." },
                { icon: <Mountain size={22} />, title: "Mount Ararat Views", desc: "Iconic views of biblical Mount Ararat visible from Yerevan and surrounding regions." },
                { icon: <Coffee size={22} />, title: "Vibrant Capital Yerevan", desc: "Rose-colored Yerevan is a modern, cosmopolitan city with thriving cafes, arts, and nightlife." },
                { icon: <Camera size={22} />, title: "Affordable Travel Hub", desc: "Armenia offers excellent value for money — low cost of living, cheap flights, and affordable accommodation." },
                { icon: <TreePine size={22} />, title: "Pristine Natural Landscapes", desc: "Lake Sevan, Dilijan National Park, and the Debed Canyon offer spectacular outdoor experiences." },
                { icon: <Globe size={22} />, title: "Strategic Caucasus Location", desc: "Armenia borders Georgia, Iran, Turkey and Azerbaijan — ideal as a Caucasus travel hub." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start bg-white rounded-2xl p-5 border border-slate-100 hover:border-[#005a31]/20 transition-colors">
                  <div className="text-[#005a31] bg-emerald-50 p-2.5 rounded-xl shrink-0">{icon}</div>
                  <div>
                    <h3 className="font-black text-[#005a31] text-sm uppercase tracking-wide mb-1">{title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ SECTION ── */}
          <section aria-label="Armenia Visa FAQ" itemScope itemType="https://schema.org/FAQPage">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b-2 border-slate-100 pb-6">
              <div>
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tighter">
                  Armenia Visa FAQ 2026
                </h2>
                <p className="text-[#ff5722] font-black uppercase text-xs tracking-[0.2em] mt-2">
                  Common Questions · Armenia Visa Guide
                </p>
              </div>
              <HelpCircle size={40} className="text-slate-100 hidden md:block" />
            </div>
            <div className="space-y-3">
              {faqs.map(({ q, a }, i) => (
                <FAQBox key={i} q={q} a={a} />
              ))}
            </div>
          </section>

          {/* ── INTERNAL LINKS: VISA SERVICES ── */}
          <section aria-label="Other Visa Services by Eammu Holidays">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-[#005a31] uppercase tracking-tight mb-1">
                Other Visa Services by Eammu Holidays
              </h2>
              <p className="text-slate-500 text-sm">
                Explore our full range of visa application services. We support UAE, Dubai, and Bangladesh residents with visas to popular destinations worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {visaServiceLinks.map(({ label, href, flag }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 bg-white border border-slate-100 hover:border-[#005a31] hover:bg-emerald-50 px-5 py-4 rounded-2xl transition-all group"
                  title={label}
                >
                  <span className="text-2xl">{flag}</span>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-[#005a31] leading-tight flex-1">{label}</span>
                  <ArrowRight size={14} className="text-slate-300 group-hover:text-[#ff6b00] transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </section>

          {/* ── INTERNAL LINKS: DUBAI RESIDENTS ── */}
          <section aria-label="Visa Services for Dubai Residents">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-[#005a31] uppercase tracking-tight mb-1">
                Visa Guides for Dubai Residents
              </h2>
              <p className="text-slate-500 text-sm">
                Living in Dubai? Access country-specific visa guides tailored for UAE residents — including Indians, Pakistanis, Bangladeshis, Filipinos, and other expats.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dubaiResidentLinks.map(({ label, href, flag }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-100 hover:border-[#005a31] hover:bg-emerald-50 px-5 py-4 rounded-2xl transition-all group"
                  title={label}
                >
                  <span className="text-xl">{flag}</span>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-[#005a31] leading-tight flex-1">{label}</span>
                  <ExternalLink size={12} className="text-slate-300 group-hover:text-[#ff6b00] transition-colors shrink-0" />
                </Link>
              ))}
              {/* Armenia self-link highlighted */}
              <Link
                href="/visa/dubai-residents/armenia"
                className="flex items-center gap-3 bg-[#005a31] border border-[#005a31] px-5 py-4 rounded-2xl transition-all group col-span-1 sm:col-span-2"
                title="Armenia Visa for Dubai Residents"
              >
                <span className="text-xl">🇦🇲</span>
                <span className="text-sm font-black text-white leading-tight flex-1">Armenia Visa for Dubai Residents — Full Guide</span>
                <ArrowRight size={14} className="text-[#ff6b00] shrink-0" />
              </Link>
            </div>
          </section>

          {/* ── ABOUT EAMMU ── */}
          <section aria-label="About Eammu Holidays" className="bg-gradient-to-br from-[#005a31] to-[#003d21] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[#ff6b00] font-black text-xs uppercase tracking-widest mb-3 block">Why Choose Us</span>
              <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">
                About Eammu Holidays — Your Armenia Visa Partner
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-2xl">
                Eammu Holidays is an <strong className="text-white">IATA-accredited travel agency</strong> with offices in <strong className="text-white">Dubai, UAE</strong>, <strong className="text-white">Yerevan, Armenia</strong>, and <strong className="text-white">Bangladesh</strong>. We have helped over 5,000 travelers successfully obtain Armenia visas — including UAE-based expats, Bangladeshi nationals, and GCC residents. Our team of experienced visa consultants ensures every application meets the latest Armenian immigration requirements.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { val: "5,000+", label: "Visas Processed" },
                  { val: "98%", label: "Approval Rate" },
                  { val: "3", label: "Office Locations" },
                  { val: "10+", label: "Years Experience" },
                ].map(({ val, label }) => (
                  <div key={label} className="text-center bg-white/10 rounded-2xl p-4">
                    <p className="text-2xl font-black text-[#ff6b00]">{val}</p>
                    <p className="text-white/70 text-xs uppercase tracking-wider mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -right-16 -bottom-16 opacity-5">
              <Award size={300} />
            </div>
          </section>

        </div>

        {/* ── STICKY SIDEBAR ── */}
        <aside className="lg:col-span-4 lg:sticky lg:top-8 self-start space-y-8">

          {/* Contact Card */}
          <div
            className="bg-[#005a31] text-white p-8 rounded-[2.5rem] shadow-[0_35px_60px_-15px_rgba(0,90,49,0.3)] relative overflow-hidden"
            aria-label="Contact Eammu Holidays for Armenia Visa"
          >
            <h3 className="text-lg font-black mb-6 border-b border-white/10 pb-4 text-[#ff6b00] italic">
              Eammu Holidays
            </h3>
            <p className="text-white/70 text-xs mb-6">Apply for your Armenia visa now. Our visa consultants are available 7 days a week.</p>

            <div className="space-y-6 mb-8">
              <SidebarContact label="UAE / Dubai Hotline" val="+971 50 707 8334" href="tel:+971507078334" />
              <SidebarContact label="Armenia Office (Yerevan)" val="+374 94 810 585" href="tel:+37494810585" />
              <SidebarContact label="Bangladesh Hotline" val="+880 1701 699 743" href="tel:+971507078334" />
              <SidebarContact label="Email Us" val="info@eammu.com" href="mailto:info@eammu.com" />
            </div>

            <a
              href="https://wa.me/37494810585"
              rel="noopener noreferrer"
              className="block w-full bg-[#ff6b00] text-white text-center py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-300 shadow-xl text-sm"
              aria-label="Chat on WhatsApp for Armenia visa"
            >
              💬 Chat on WhatsApp
            </a>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          </div>

          {/* Quick Info Box */}
          <div className="bg-[#f8fafc] border border-slate-100 rounded-[2rem] p-8">
            <h3 className="text-[#005a31] font-black uppercase tracking-tight text-sm mb-5">Armenia Visa Quick Facts</h3>
            <div className="space-y-3 text-sm">
              {[
                ["Currency", "Armenian Dram (AMD)"],
                ["Capital", "Yerevan"],
                ["Official Language", "Armenian"],
                ["Time Zone", "UTC+4 (AMT)"],
                ["E-Visa Portal", "evisa.mfa.am"],
                ["E-Visa Fee", "$6–$31 USD"],
                ["Processing", "3–5 working days"],
                ["Max Stay", "21 or 120 days"],
                ["Embassy (UAE)", "Abu Dhabi"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-center py-1.5 border-b border-slate-100 last:border-0">
                  <span className="text-slate-500 font-medium text-xs uppercase tracking-wide">{k}</span>
                  <span className="font-bold text-[#005a31] text-xs text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Visa Quick Links */}
          <div className="bg-white border border-slate-100 rounded-[2rem] p-8">
            <h3 className="text-[#005a31] font-black uppercase tracking-tight text-sm mb-5">Related Visa Services</h3>
            <div className="space-y-2">
              {[
                { label: "Georgia Visa Application", href: "/our-services/visa/georgia-visa-application", flag: "🇬🇪" },
                { label: "Turkey Visa Application", href: "/our-services/visa/turkey-visa-application", flag: "🇹🇷" },
                { label: "Albania Visa Application", href: "/our-services/visa/albania-visa-application", flag: "🇦🇱" },
                { label: "Georgia for Dubai Residents", href: "/visa/dubai-residents/georgia", flag: "🇬🇪" },
                { label: "Turkey for Dubai Residents", href: "/visa/dubai-residents/turkey", flag: "🇹🇷" },
              ].map(({ label, href, flag }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 py-2 border-b border-slate-50 last:border-0 hover:text-[#005a31] text-slate-600 transition-colors group"
                  title={label}
                >
                  <span>{flag}</span>
                  <span className="text-xs font-bold flex-1 group-hover:text-[#005a31]">{label}</span>
                  <ArrowRight size={12} className="text-slate-300 group-hover:text-[#ff6b00]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Trust Badge */}
          <div className="bg-[#f8fafc] border border-slate-100 rounded-[2rem] p-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#005a31] mb-4 border border-slate-50">
              <ShieldCheck size={28} />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-1">IATA ACCREDITED</p>
            <p className="text-[#005a31] font-black italic text-xl tracking-tighter">EAMMU HOLIDAYS</p>
            <p className="text-xs text-slate-400 mt-2">Dubai · Yerevan · Bangladesh</p>
            <div className="flex justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-[#ff6b00]" fill="currentColor" />
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-1">4.9 / 5 · 312 Reviews</p>
          </div>

        </aside>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section aria-label="Apply for Armenia Visa CTA" className="py-20 px-6 bg-gradient-to-br from-[#005a31] to-[#003d21] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#ff6b00] font-black text-xs uppercase tracking-widest mb-3 block">Ready to Travel?</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
            Start Your Armenia Visa Application Today
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed text-sm max-w-xl mx-auto">
            Join 5,000+ travelers who successfully got their Armenia visa with Eammu Holidays. Fast processing, expert guidance, and a dedicated visa consultant assigned to your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/37494810585"
              rel="noopener noreferrer"
              className="bg-[#ff6b00] hover:bg-white hover:text-[#005a31] text-white px-8 py-4 rounded-2xl font-black text-base shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle size={20} /> Apply via WhatsApp
            </a>
            <a
              href="tel:+971507078334"
              className="bg-white/10 border-2 border-white/20 hover:bg-white hover:text-[#005a31] text-white px-8 py-4 rounded-2xl font-black text-base transition-all flex items-center justify-center gap-3"
            >
              <Phone size={18} /> Call UAE Hotline
            </a>
          </div>
          <p className="text-white/40 text-xs mt-6">
            By applying, you agree to our terms. Visa approval is subject to Armenian immigration authority decisions.
          </p>
        </div>
      </section>

      {/* ── BREADCRUMB (SEO) ── */}
      <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-100 px-6 py-3">
        <div className="max-w-7xl mx-auto">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="hover:text-[#005a31] transition-colors" itemProp="item"><span itemProp="name">Home</span></Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden>/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/our-services" className="hover:text-[#005a31] transition-colors" itemProp="item"><span itemProp="name">Our Services</span></Link>
              <meta itemProp="position" content="2" />
            </li>
            <li aria-hidden>/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/our-services/visa" className="hover:text-[#005a31] transition-colors" itemProp="item"><span itemProp="name">Visa Services</span></Link>
              <meta itemProp="position" content="3" />
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#005a31] font-bold" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Armenia Visa Application</span>
              <meta itemProp="position" content="4" />
            </li>
          </ol>
        </div>
      </nav>
    </main>
  );
};

// ─── HELPER COMPONENTS ────────────────────────────────────────────────────

const MetricBox = ({ icon, label, value, sub }) => (
  <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
    <div className="text-[#ff6b00] mb-3">{React.cloneElement(icon, { size: 24 })}</div>
    <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-0.5">{label}</span>
    <span className="text-[#005a31] font-black text-sm md:text-base leading-tight">{value}</span>
    {sub && <span className="text-[9px] text-slate-400 mt-0.5">{sub}</span>}
  </div>
);

const InfoCard = ({ icon, title, desc, link }) => (
  <div className="bg-[#f8fafc] border border-slate-100 rounded-[2rem] p-8 hover:border-[#005a31]/30 transition-colors flex flex-col">
    <div className="text-[#005a31] bg-emerald-50 p-3 rounded-2xl w-fit mb-5">{icon}</div>
    <h3 className="text-[#005a31] font-black text-base uppercase tracking-tight mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed flex-1">{desc}</p>
    {link && (
      <a href={link.href} className="mt-4 text-[#ff6b00] font-black text-xs uppercase tracking-wider hover:text-[#005a31] transition-colors inline-flex items-center gap-1">
        {link.label}
      </a>
    )}
  </div>
);

const VideoCard = ({ id, title, desc }) => (
  <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm">
    <div className="aspect-video">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allowFullScreen
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <h4 className="font-black text-[#005a31] uppercase mb-2 text-sm leading-tight">{title}</h4>
      <p className="text-slate-500 text-xs font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const PosterCard = ({ img, type, title, desc }) => (
  <div className="relative w-full min-h-[380px] rounded-[2rem] overflow-hidden group shadow-xl bg-slate-100 flex flex-col justify-end">
    <img
      src={img}
      alt={`Armenia ${type} visa - ${title}`}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
      loading="lazy"
      width="800"
      height="600"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#005a31] via-[#005a31]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10 p-7 w-full">
      <span className="text-[#ff6b00] font-black text-xs uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg mb-3 inline-block">
        {type}
      </span>
      <h3 className="text-white font-black text-xl uppercase tracking-tight leading-tight mb-1">
        {title}
      </h3>
      {desc && <p className="text-white/70 text-xs font-medium">{desc}</p>}
      <div className="w-0 group-hover:w-10 h-1 bg-[#ff6b00] mt-3 transition-all duration-500 rounded-full" />
    </div>
  </div>
);

const CheckItem = ({ text, light = false }) => (
  <div className="flex items-start gap-3 group">
    <div className={`p-0.5 rounded-full mt-0.5 shrink-0 ${light ? 'text-[#ff6b00]' : 'text-[#ff6b00]'}`}>
      <CheckCircle size={16} className={light ? 'text-[#ff6b00]' : 'text-[#005a31]'} />
    </div>
    <span className={`text-sm font-medium leading-snug ${light ? 'text-white/90' : 'text-slate-700'}`}>
      {text}
    </span>
  </div>
);

const SidebarContact = ({ label, val, href }) => (
  <div className="relative pl-5">
    <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-[#ff5722] rounded-full shadow-[0_0_8px_rgba(255,87,34,0.4)]" />
    <p className="text-[#ff6b00] text-[9px] font-black uppercase tracking-widest mb-0.5">{label}</p>
    <a href={href} className="text-sm font-bold hover:text-[#ff6b00] transition-colors">{val}</a>
  </div>
);

const FAQBox = ({ q, a }) => (
  <details
    className="group bg-white border border-slate-100 rounded-2xl p-5 open:shadow-md transition-all"
    itemScope
    itemProp="mainEntity"
    itemType="https://schema.org/Question"
  >
    <summary className="flex justify-between items-start cursor-pointer font-black text-[#005a31] text-sm uppercase tracking-tight list-none gap-4" itemProp="name">
      <span>{q}</span>
      <ChevronDown size={18} className="text-[#ff6b00] shrink-0 mt-0.5 group-open:rotate-180 transition-transform" />
    </summary>
    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
      <p className="mt-4 text-sm text-slate-500 font-medium leading-relaxed border-l-2 border-orange-200 pl-4" itemProp="text">
        {a}
      </p>
    </div>
  </details>
);

export default ArmeniaVisa;