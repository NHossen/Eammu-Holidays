"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Mic2,
  UserCheck,
  FileText,
  GraduationCap,
  Globe,
  PhoneCall,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Star,
  Award,
  Users,
  Calendar,
  MessageCircle,
  Plane,
  BookOpen,
  Clock,
  AlertTriangle,
  TrendingUp,
  Landmark,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────────────────────────────────────────

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1523240715630-971c9e11a277?auto=format&fit=crop&w=1500&q=80",
    badge: "F1 Student Visa Specialist",
    title: "Achieve Your American Study Dreams",
    desc: "Comprehensive coaching for F1 interviews. We help you articulate your study plans, academic goals, and financial ties with confidence.",
  },
  {
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1500&q=80",
    badge: "B1/B2 Visitor & Business Visa",
    title: "Expert Guidance for Tourism & Business",
    desc: "Proven strategies for B1/B2 applicants to demonstrate strong home-country ties, clear travel purpose, and financial stability.",
  },
  {
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1500&q=80",
    badge: "Mock Interview Simulation",
    title: "Face the Embassy with Zero Fear",
    desc: "Real-time US embassy simulation with 2026's most updated questions. Practice until your answers are natural and confident.",
  },
];

// Visa types covered — SEO keyword targets
const VISA_TYPES = [
  {
    code: "F-1",
    label: "Student Visa",
    icon: "🎓",
    desc: "For full-time academic students at SEVP-approved US universities. We coach you on I-20 explanation, financial proof, and non-immigrant intent.",
    link: "/our-services/visa-services/student-visa-from-bangladesh",
  },
  {
    code: "B1/B2",
    label: "Tourist & Business Visa",
    icon: "✈️",
    desc: "For tourism, medical visits, and business meetings. We focus on ties to Bangladesh, travel itinerary, and financial documents.",
    link: "/our-services/visa-services/tourist-visa-from-bangladesh",
  },
  {
    code: "F-2",
    label: "Dependent Visa",
    icon: "👨‍👩‍👧",
    desc: "For spouses and children of F-1 visa holders. We prepare you to demonstrate the primary holder's F-1 status and shared financial support.",
    link: "/study-abroad/student-visa",
  },
  {
    code: "J-1",
    label: "Exchange Visitor",
    icon: "🔬",
    desc: "For research scholars, professors, and exchange program participants. We help you explain your program sponsor and return intent.",
    link: "/scholarships/united-states",
  },
  {
    code: "H-1B",
    label: "Work Visa",
    icon: "💼",
    desc: "We provide interview coaching for H-1B applicants called for consular processing, including specialty occupation explanation.",
    link: "/visa/visa-guide",
  },
  {
    code: "EB-1/2/3",
    label: "Immigrant Visa",
    icon: "🏛️",
    desc: "For immigrant visa applicants at the US Embassy Dhaka. We help you present your qualifying evidence and petition correctly.",
    link: "/visa/visa-guide",
  },
];

// What's inside the preparation package
const SERVICES = [
  {
    icon: <Mic2 className="text-white" />,
    title: "Mock Interview Simulation",
    desc: "Real embassy environment simulation. Updated with 2026 US Embassy Dhaka Q&A patterns for F1, B1/B2, and F2 visa categories.",
  },
  {
    icon: <FileText className="text-white" />,
    title: "DS-160 Form Review",
    desc: "Line-by-line review of your DS-160 application. We identify inconsistencies before your embassy appointment that could trigger rejection.",
  },
  {
    icon: <GraduationCap className="text-white" />,
    title: "50+ Sample Answers",
    desc: "High-success-rate answers tailored to your profile, university, course, and financial background — not generic scripts.",
  },
  {
    icon: <UserCheck className="text-white" />,
    title: "Dress Code & Demeanor",
    desc: "First impressions matter. We coach you on appearance, body language, eye contact, and verbal confidence for the 2-minute interview window.",
  },
  {
    icon: <ShieldCheck className="text-white" />,
    title: "Document Checklist",
    desc: "Complete visa folder organization — I-20, SEVIS receipt, financial proof, bank statements, admission letters — in the exact order consular officers expect.",
  },
  {
    icon: <Globe className="text-white" />,
    title: "Private Online Sessions",
    desc: "Zoom-based 1-on-1 sessions for students in Dhaka, Chittagong, Sylhet, or UAE. Flexible scheduling around your embassy appointment date.",
  },
];

// The DS-160 / SEVIS process explained — informational SEO content
const PROCESS_STEPS = [
  {
    n: "01",
    title: "DS-160 Form Completion",
    desc: "The DS-160 is the mandatory online nonimmigrant visa application. Every answer must be consistent with your supporting documents. Our experts review every field before submission.",
    link: "/travel-resources/visa-checklist-generator",
    linkLabel: "Generate checklist →",
  },
  {
    n: "02",
    title: "SEVIS Fee Payment (F-1/J-1)",
    desc: "F-1 and J-1 applicants must pay the SEVIS I-901 fee ($350 for F-1, $220 for J-1) before the embassy appointment. We guide you through payment and receipt verification.",
    link: "/study-abroad/student-visa",
    linkLabel: "Student visa guide →",
  },
  {
    n: "03",
    title: "Embassy Appointment Scheduling",
    desc: "Book your visa appointment via the USVISA-INFO system. We advise on optimal timing — early morning slots historically have shorter wait times and fresher officers.",
    link: "/contact",
    linkLabel: "Get help booking →",
  },
  {
    n: "04",
    title: "Mock Interview & Final Prep",
    desc: "48–72 hours before your appointment, we run a full timed mock session simulating the actual interview. We focus on your weak points and refine your strongest answers.",
    link: "/contact",
    linkLabel: "Book mock session →",
  },
];

// Common rejection reasons — "why was my US visa rejected" searches
const REJECTION_REASONS = [
  {
    reason: "Failure to demonstrate non-immigrant intent",
    fix: "You must prove you will return to Bangladesh. Strong ties: job offer letter, family ties, property ownership, bank assets — all coached in our sessions.",
  },
  {
    reason: "Vague or inconsistent answers",
    fix: "Memorized scripts sound unnatural. We train you to give specific, genuine answers that align precisely with your DS-160 and supporting documents.",
  },
  {
    reason: "Insufficient financial documentation",
    fix: "Bank statements, sponsor letters, and solvency certificates must tell a coherent financial story. We review every document before your appointment.",
  },
  {
    reason: "Poor explanation of study plan (F-1)",
    fix: "You must explain why this specific university, this specific course, and why the USA — not a Bangladeshi institution. We build a compelling narrative for your profile.",
  },
  {
    reason: "Previous visa rejection history",
    fix: "Prior rejections must be disclosed. We help you present a stronger, updated application with clear explanations of what has changed since your last attempt.",
  },
  {
    reason: "Nervousness and lack of eye contact",
    fix: "Confidence is coached, not born. Our mock sessions eliminate interview anxiety so your natural confidence shines through on the actual day.",
  },
];

// Frequently asked questions
const FAQS = [
  {
    q: "Why is the USA visa interview so critical for Bangladeshi applicants?",
    a: "Bangladesh has one of the highest B1/B2 visa rejection rates in South Asia — estimated at 35–40% in 2025. The consular officer makes the final decision in a 2-minute interaction. Even with perfect documents, poor communication or unclear non-immigrant intent leads to immediate rejection. Our coaching directly addresses this.",
  },
  {
    q: "What documents should I bring to my US visa interview?",
    a: "For F-1: valid passport, DS-160 confirmation, SEVIS fee receipt, I-20 from your university, admission letter, financial proof (sponsor bank statements, affidavit of support), academic certificates, IELTS/TOEFL/GRE scores. For B1/B2: passport, DS-160, appointment confirmation, financial documents, invitation letters if applicable, ties to Bangladesh evidence. We provide a complete, appointment-specific checklist.",
  },
  {
    q: "Can I take Target USA preparation sessions from Dhaka or online?",
    a: "Yes. We offer in-person sessions at our Cumilla office and full online Zoom sessions. Students from Dhaka, Chittagong, Sylhet, Rajshahi, and our Dubai office regularly attend online. Sessions can be scheduled as late as the evening before your interview.",
  },
  {
    q: "Do you guarantee a US visa approval?",
    a: "No visa consultancy can legally guarantee a visa — the decision is solely the US consular officer's. Our 98% success rate comes from comprehensive preparation that ensures you meet every embassy requirement naturally, confidently, and consistently.",
  },
  {
    q: "How long before my interview should I start preparation?",
    a: "Ideally 2–4 weeks before your appointment. This allows time for DS-160 review, multiple mock sessions, document organisation, and refining weak areas. For urgent cases, we also offer intensive 48–72 hour crash preparation packages.",
  },
  {
    q: "What is the difference between F-1 and B1/B2 interview preparation?",
    a: "F-1 interviews focus heavily on your study plan, choice of university, post-graduation intentions, and financial sponsor credibility. B1/B2 interviews focus on your purpose of travel, ties to Bangladesh (job, family, property), and proof you will return. Both require demonstrating non-immigrant intent, but with different evidence and narratives.",
  },
  {
    q: "Does Target USA also help with IELTS preparation?",
    a: "Yes — through our sister program, Target IELTS Immigration Center. Many US university F-1 applicants need IELTS or TOEFL scores. We provide coordinated coaching for both. Visit our IELTS center page for details.",
  },
  {
    q: "What is the current US visa interview wait time in Dhaka?",
    a: "As of 2026, B1/B2 interview wait times at the US Embassy Dhaka range from 400–600+ days for first-time applicants. F-1 student visa wait times are considerably shorter, often 4–8 weeks. We advise applying and booking appointments as early as possible.",
  },
];

// Trust & stats
const STATS = [
  { icon: <Award />, value: "98%", label: "Success Rate" },
  { icon: <Calendar />, value: "7+ Years", label: "Expertise" },
  { icon: <Users />, value: "1,500+", label: "Students Coached" },
  { icon: <Globe />, value: "2 Offices", label: "BD + UAE" },
];

const TRUST_POINTS = [
  {
    title: "Updated 2026 Embassy Questions",
    desc: "Our question bank is refreshed after every reported US Embassy Dhaka interview session. You practice the exact questions currently being asked — not outdated scripts.",
  },
  {
    title: "F1 + B1/B2 + F2 Specialization",
    desc: "Different visa categories require completely different narratives. We don't use a one-size-fits-all approach — your coaching is specific to your visa type and personal profile.",
  },
  {
    title: "24/7 WhatsApp Support",
    desc: "Call or WhatsApp any time — even the night before your interview. Our advisors are available for last-minute tips, document questions, and emergency preparation.",
  },
  {
    title: "Legal Transparency",
    desc: "Proper service agreements and clear fee structures for every applicant. No hidden costs. We are registered under eammu Group with offices in Cumilla and Dubai.",
  },
];

// Internal cross-links from sitemap
const RELATED_LINKS = [
  { label: "Student Visa from Bangladesh",      href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { label: "Tourist Visa from Bangladesh",       href: "/our-services/visa-services/tourist-visa-from-bangladesh" },
  { label: "USA Visa Guide (Indian Passport)",   href: "/visa/india/united-states" },
  { label: "Scholarships in USA",               href: "/scholarships/united-states" },
  { label: "Study Abroad Student Visa",         href: "/study-abroad/student-visa" },
  { label: "IELTS Immigration Center",          href: "/target-ielts-immigration-center" },
  { label: "Visa Guide Hub",                    href: "/visa/visa-guide" },
  { label: "All Visa Services",                 href: "/our-services/visa-services" },
  { label: "e-Visa Guide",                      href: "/visa/e-visa" },
  { label: "Visa Rejection Guide",              href: "/visa-rejection" },
  { label: "Processing Time Tracker",           href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Checklist Generator",               href: "/travel-resources/visa-checklist-generator" },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const TargetUsaInterview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq,      setOpenFaq]      = useState(null);

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide(p => (p + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans','DM Sans',system-ui,sans-serif" }}>

 

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden bg-[#0a0f0d]"
        style={{ minHeight: "min(70vh, 680px)" }}
        aria-label="USA visa interview preparation hero"
      >
        {/* Orbs — clamped width so they never cause horizontal scroll */}
        <div className="absolute top-1/4 -left-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#005a31]/30 rounded-full blur-[120px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-56 sm:w-80 h-56 sm:h-80 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Slide backgrounds */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <img src={SLIDES[currentSlide].image} alt="USA Visa Interview Coaching" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f0d] via-[#0a0f0d]/65 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Content */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="lg:w-3/5">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/40 rounded-full text-orange-400 text-xs font-black uppercase tracking-widest mb-7 backdrop-blur-md">
                <Plane size={13} className="shrink-0" /> {SLIDES[currentSlide].badge}
              </div>

              {/* H1 — primary keyword */}
              <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-5 tracking-tight">
                Master Your<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  USA Visa Interview
                </span>
              </h1>

              {/* H2-level supporting keywords */}
              <p className="text-base md:text-lg text-gray-300 max-w-xl font-medium mb-8 leading-relaxed">
                Bangladesh's #1 coaching center for <strong className="text-white">F1 student visa</strong>,{" "}
                <strong className="text-white">B1/B2 tourist visa</strong>, and{" "}
                <strong className="text-white">F2 dependent visa</strong> interview preparation.
                DS-160 review, mock sessions &amp; 50+ updated 2026 embassy questions.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/8801701699743?text=Hi%2C+I+want+to+book+a+USA+visa+interview+preparation+session."
                  target="_blank" rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#005a31] hover:bg-[#007a41] text-white rounded-2xl font-black text-base flex items-center gap-3 transition-all shadow-[0_16px_40px_rgba(0,90,49,0.35)] hover:-translate-y-1"
                >
                  <MessageCircle size={20} /> Book Session on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white/20 text-white/70 hover:text-white hover:border-white/50 rounded-2xl font-black text-base flex items-center gap-3 transition-all backdrop-blur-md"
                >
                  Contact Us <ArrowRight size={18} />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                {["✅ 98% Success Rate", "📋 DS-160 Review Included", "🎯 2026 Questions Updated", "🌐 Online & In-Person"].map(b => (
                  <span key={b} className="text-xs font-bold text-white/50 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/5">{b}</span>
                ))}
              </div>
            </motion.div>

            {/* Glassmorphic card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:w-2/5 hidden lg:block"
            >
              <div className="bg-white/5 border border-white/10 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Star size={80} className="text-orange-500" />
                </div>
                <p className="text-orange-500 font-black text-5xl mb-1">98%</p>
                <p className="text-white text-xl font-bold mb-6">Visa Success Rate 2026</p>
                <ul className="space-y-4">
                  {[
                    "F1, B1/B2, F2, J-1 Coverage",
                    "DS-160 Form Review",
                    "SEVIS Fee Guidance",
                    "Mock Interview Simulation",
                    "50+ 2026 Embassy Questions",
                    "Document Folder Preparation",
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-gray-300 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-[#005a31] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/our-services/visa-services/student-visa-from-bangladesh"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 bg-[#005a31] hover:bg-[#007a41] text-white rounded-xl font-black text-sm transition"
                >
                  Student Visa Guide <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Slide dots */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className="group p-2" aria-label={`Slide ${i + 1}`}>
                <div className={`h-1.5 rounded-full transition-all duration-700 ${i === currentSlide ? "w-14 bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.6)]" : "w-4 bg-white/20"}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-white border-b border-gray-100" aria-label="Key statistics">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <div key={i} className="text-center p-7 bg-slate-50 rounded-[2rem] border border-gray-100 hover:border-orange-200 transition-all">
              <div className="text-orange-500 flex justify-center mb-3">{React.cloneElement(s.icon, { size: 30 })}</div>
              <p className="text-4xl font-black text-[#005a31] mb-1">{s.value}</p>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VISA TYPES COVERED ──────────────────────────────────────────────── */}
      {/* Targets: "F1 visa interview Bangladesh", "B1/B2 coaching Dhaka", "J1 visa prep" */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6" aria-labelledby="visa-types-heading">
        <div className="text-center mb-14">
          <p className="text-orange-500 text-xs font-black uppercase tracking-widest mb-3">All Visa Categories</p>
          <h2 id="visa-types-heading" className="text-3xl md:text-5xl font-black text-[#005a31] tracking-tight mb-4">
            USA Visa Interview Coaching<br />for Every Visa Type
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            We specialize in interview preparation for every nonimmigrant US visa category issued at the US Embassy Dhaka and processed by Bangladeshi applicants.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VISA_TYPES.map((v, i) => (
            <Link
              key={i}
              href={v.link}
              className="group p-6 rounded-3xl border border-gray-100 bg-white hover:border-orange-200 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{v.icon}</span>
                <div>
                  <span className="text-xs font-black text-orange-500 uppercase tracking-widest">{v.code}</span>
                  <h3 className="font-black text-gray-800 text-base group-hover:text-[#005a31] transition">{v.label}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{v.desc}</p>
              <span className="mt-4 text-xs font-black text-orange-500 opacity-0 group-hover:opacity-100 transition">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 border-t border-gray-100" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-orange-500 text-xs font-black uppercase tracking-widest mb-3">What's Included</p>
            <h2 id="services-heading" className="text-3xl md:text-5xl font-black text-[#005a31] tracking-tight">
              Complete USA Visa Interview<br />Preparation Package
            </h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-5 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.05)] border border-slate-50 hover:border-orange-100 hover:shadow-2xl transition-all group text-center">
                <div className="w-14 h-14 bg-[#005a31] rounded-2xl flex items-center justify-center mb-7 mx-auto shadow-lg group-hover:rotate-6 transition-transform">
                  {React.cloneElement(s.icon, { size: 26 })}
                </div>
                <h3 className="text-xl font-black text-gray-800 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEP-BY-STEP PROCESS ─────────────────────────────────────────────── */}
      {/* Targets: "DS-160 help Bangladesh", "SEVIS fee payment Bangladesh", "US visa appointment Dhaka" */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6" aria-labelledby="process-heading">
        <div className="text-center mb-14">
          <p className="text-orange-500 text-xs font-black uppercase tracking-widest mb-3">Step-by-Step</p>
          <h2 id="process-heading" className="text-3xl md:text-5xl font-black text-[#005a31] tracking-tight">
            USA Visa Application Process<br />for Bangladeshi Applicants — 2026
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="p-7 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all relative group">
              <div className="text-5xl font-black mb-4" style={{ color: "#f97316", opacity: 0.25 }}>{step.n}</div>
              <h3 className="font-black text-gray-800 text-base mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{step.desc}</p>
              <Link href={step.link} className="text-xs font-black text-orange-500 hover:underline opacity-0 group-hover:opacity-100 transition">
                {step.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── REJECTION REASONS ───────────────────────────────────────────────── */}
      {/* Targets: "US visa rejected Bangladesh", "why US visa rejected", "how to avoid visa rejection" */}
      <section className="py-24 bg-[#0a0f0d]" aria-labelledby="rejection-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-orange-500 text-xs font-black uppercase tracking-widest mb-3">Avoid the Most Common Mistakes</p>
            <h2 id="rejection-heading" className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Why US Visa Interviews Fail —<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                And How We Fix Them
              </span>
            </h2>
            <p className="text-gray-500 text-sm mt-4 max-w-2xl mx-auto">
              Bangladesh has a B1/B2 rejection rate of 35–40%. These are the real reasons — and how our coaching eliminates every one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {REJECTION_REASONS.map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-white/8 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle size={16} className="text-orange-500 mt-0.5 shrink-0" />
                  <p className="font-black text-white text-sm">{item.reason}</p>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed pl-6">{item.fix}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/visa-rejection"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 rounded-xl text-sm font-bold text-white/60 hover:text-white hover:border-orange-500/40 transition"
            >
              Read our full visa rejection guide <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#005a31] text-white relative overflow-hidden" aria-labelledby="why-heading">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-orange-400 text-xs font-black uppercase tracking-widest mb-3">Why 1,500+ Students Trust Us</p>
            <h2 id="why-heading" className="text-4xl md:text-6xl font-black tracking-tight">
              Why Choose <span className="text-orange-400 italic">Target USA</span>?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {TRUST_POINTS.map((tp, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                  <CheckCircle2 className="text-white" size={22} />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2 text-orange-400">{tp.title}</h4>
                  <p className="text-green-50/70 text-sm leading-relaxed">{tp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cross-service links */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <p className="text-xs text-white/30 font-black uppercase tracking-widest mb-5">Related Services at eammu.com</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Student Visa from Bangladesh", href: "/our-services/visa-services/student-visa-from-bangladesh" },
                { label: "Tourist Visa from Bangladesh", href: "/our-services/visa-services/tourist-visa-from-bangladesh" },
                { label: "IELTS Immigration Center",     href: "/target-ielts-immigration-center" },
                { label: "Scholarships in USA",         href: "/scholarships/united-states" },
                { label: "Study Abroad Guide",          href: "/study-abroad/student-visa" },
                { label: "All Visa Services",           href: "/our-services/visa-services" },
              ].map(link => (
                <Link key={link.label} href={link.href}
                  className="text-xs font-bold text-white/40 hover:text-orange-400 transition border border-white/10 px-3 py-1.5 rounded-lg hover:border-orange-500/30"
                >{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      {/* Static <details> for server rendering — Google Featured Snippets */}
      <section className="py-24 bg-slate-50" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-orange-500 text-xs font-black uppercase tracking-widest mb-3">Frequently Asked Questions</p>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-black text-[#005a31] tracking-tight italic">
              USA Visa Interview FAQ — 2026
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
                open={openFaq === i}
                onToggle={e => setOpenFaq(e.target.open ? i : null)}
              >
                <summary className="px-6 py-5 cursor-pointer font-black text-base text-[#005a31] flex items-start justify-between list-none hover:bg-green-50/50 gap-4">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className="text-orange-500 shrink-0 mt-0.5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5 pt-2 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          {/* Schema note: FAQPage JSON-LD is in page.jsx */}
          <div className="mt-10 p-5 rounded-2xl bg-orange-50 border border-orange-100 flex items-start gap-4">
            <BookOpen size={20} className="text-orange-500 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              Need country-specific visa guides?{" "}
              <Link href="/visa/india/united-states" className="text-orange-500 font-bold hover:underline">USA visa guide for Indian passport holders</Link>
              {" "}·{" "}
              <Link href="/visa/visa-guide" className="text-orange-500 font-bold hover:underline">Full visa guide hub</Link>
              {" "}·{" "}
              <Link href="/travel-resources/visa-checklist-generator" className="text-orange-500 font-bold hover:underline">Generate your visa checklist</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── SEO ARTICLE SECTION ──────────────────────────────────────────────── */}
      {/* Rich editorial content — targets long-tail informational searches */}
      <section className="py-24 border-t border-gray-100" aria-label="About USA visa interview preparation in Bangladesh">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black text-[#005a31] mb-8">
            USA Visa Interview Preparation in Bangladesh — Complete 2026 Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-500 leading-relaxed">
            <div className="space-y-4">
              <p>
                The <strong className="text-gray-800">US Embassy Dhaka</strong> processes thousands of visa applications from Bangladeshi citizens every year. For{" "}
                <strong className="text-gray-800">F1 student visas</strong>, the embassy evaluates your academic merit, university choice, financial sponsor, and — most critically — your ability to demonstrate you will return to Bangladesh after your studies.
              </p>
              <p>
                For <strong className="text-gray-800">B1/B2 tourist and business visas</strong>, Bangladesh has one of the highest rejection rates in South Asia. The most common reason: applicants cannot convincingly demonstrate strong ties to Bangladesh. Our coaching directly addresses this through role-play, evidence organization, and tailored narrative building.
              </p>
              <p>
                Our sister program, <Link href="/target-ielts-immigration-center" className="text-orange-500 font-bold hover:underline">Target IELTS Immigration Center</Link>, provides coordinated IELTS and TOEFL coaching — many F1 applicants use both services before their embassy appointment.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                The <strong className="text-gray-800">DS-160 form</strong> is the foundation of every US nonimmigrant visa application. Errors or inconsistencies in the DS-160 — even minor ones — are flagged immediately by the consular officer. We review every field, cross-check against your supporting documents, and ensure 100% consistency before you submit.
              </p>
              <p>
                For <strong className="text-gray-800">F1 applicants from Bangladesh</strong>, the SEVIS I-901 fee ($350) must be paid and the receipt must be in your folder before the interview. Our team walks you through the SEVP payment portal and verifies your SEVIS record is active.
              </p>
              <p>
                Whether you're applying from Dhaka, Chittagong, Sylhet, or our{" "}
                <Link href="/contact/travel-agency-dubai" className="text-orange-500 font-bold hover:underline">Dubai office</Link>
                , our online Zoom sessions give you the same quality coaching as our in-person Cumilla sessions.
              </p>
            </div>
          </div>

          {/* All internal links */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-300 font-black uppercase tracking-widest mb-4">More Resources at eammu.com</p>
            <div className="flex flex-wrap gap-3">
              {RELATED_LINKS.map(link => (
                <Link key={link.label} href={link.href}
                  className="text-xs font-bold text-gray-400 hover:text-orange-500 transition border border-gray-100 px-3 py-1.5 rounded-lg hover:border-orange-200 bg-white"
                >{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-gray-100" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-xs font-black uppercase tracking-widest mb-3">Student Successes</p>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-black text-[#005a31] tracking-tight">
              Real Students. Real Approvals.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Tahmina Begum",  result: "F1 Visa Approved ✅", text: "My DS-160 had several inconsistencies I would never have spotted. The team caught them all. Got my F1 for Michigan State on the first attempt. Incredible coaching.", stars: 5 },
              { name: "Rakibul Hasan",  result: "B1/B2 Approved ✅",   text: "After two rejections applying alone, I joined Target USA. They rebuilt my entire narrative around my business ties to Bangladesh. Approved on the first session with them.", stars: 5 },
              { name: "Farida Khanam", result: "F2 Visa Approved ✅",   text: "As an F2 dependent, I wasn't sure how to present myself. The coaching was specific to my situation and the mock interview built real confidence. Approved in one go.", stars: 5 },
            ].map((t, i) => (
              <div key={i} className="p-7 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all">
                <div className="flex gap-1 mb-4">{"★".repeat(t.stars).split("").map((s, j) => <span key={j} className="text-orange-500 text-sm">{s}</span>)}</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div>
                  <p className="font-black text-gray-800 text-sm">{t.name}</p>
                  <p className="text-xs text-[#005a31] font-bold">{t.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/testimonials" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-xl text-sm font-bold text-gray-400 hover:text-[#005a31] hover:border-green-200 transition">
              Read all testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────────── */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 border-t border-gray-100" aria-labelledby="contact-heading">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 space-y-10">
            <div>
              <p className="text-orange-500 text-xs font-black uppercase tracking-widest mb-3">Let's Start Your Journey</p>
              <h2 id="contact-heading" className="text-4xl md:text-5xl font-black text-[#005a31] leading-tight">
                Book Your USA Visa<br />Interview Session
              </h2>
            </div>
            <div className="space-y-7">
              <div className="flex gap-5 items-center group">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#005a31] group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                  <PhoneCall size={22} />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Call / WhatsApp</p>
                  <p className="text-gray-800 font-black text-lg">+971507078334</p>
                  <p className="text-gray-500 font-bold text-sm">+971507078334 (UAE)</p>
                </div>
              </div>
              <div className="flex gap-5 items-center group">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#005a31] group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Email Support</p>
                  <p className="text-gray-800 font-black text-lg">info@eammu.com</p>
                  <p className="text-gray-500 font-bold text-sm">support@eammu.com</p>
                </div>
              </div>
              <div className="flex gap-5 items-center group">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#005a31] group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Visit Office</p>
                  <p className="text-gray-800 font-black text-base">Office 178, Gomoti Tower</p>
                  <p className="text-gray-500 font-bold text-sm">Cantonment, Cumilla, Bangladesh</p>
                  <Link href="/contact/travel-agency-bangladesh" className="text-xs text-orange-500 font-bold hover:underline mt-1 inline-block">Get directions →</Link>
                </div>
              </div>
            </div>

            {/* Office quick links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/contact/travel-agency-bangladesh" className="text-xs font-bold text-gray-400 hover:text-[#005a31] transition border border-gray-100 px-3 py-1.5 rounded-lg hover:border-green-200 bg-white">📍 Bangladesh Office</Link>
              <Link href="/contact/travel-agency-dubai"      className="text-xs font-bold text-gray-400 hover:text-[#005a31] transition border border-gray-100 px-3 py-1.5 rounded-lg hover:border-green-200 bg-white">📍 Dubai Office</Link>
              <Link href="/contact/travel-agency-armenia"    className="text-xs font-bold text-gray-400 hover:text-[#005a31] transition border border-gray-100 px-3 py-1.5 rounded-lg hover:border-green-200 bg-white">📍 Armenia Office</Link>
              <Link href="/contact/travel-agency-georgia"    className="text-xs font-bold text-gray-400 hover:text-[#005a31] transition border border-gray-100 px-3 py-1.5 rounded-lg hover:border-green-200 bg-white">📍 Georgia Office</Link>
            </div>
          </div>

          {/* Social / CTA card */}
          <div className="lg:w-1/2 w-full bg-slate-50 p-10 rounded-[3rem] border border-gray-100 shadow-xl relative">
            <div className="absolute -top-5 -right-5 bg-orange-500 text-white px-5 py-3 rounded-2xl rotate-6 font-black text-sm shadow-lg">
              Join Today!
            </div>
            <h3 className="text-xl font-black text-gray-800 mb-2 uppercase tracking-widest">Connect With Us</h3>
            <p className="text-sm text-gray-400 mb-7">Follow for daily visa tips, embassy news, and success stories.</p>
            <div className="grid gap-4 mb-8">
              <a href="https://www.facebook.com/TargetUSAInterviewPreparation" target="_blank" rel="noopener noreferrer"
                className="bg-[#1877F2] text-white px-7 py-4 rounded-2xl font-black flex items-center justify-between hover:scale-[1.02] transition-all shadow-lg text-sm">
                Facebook — Target USA Interview Prep <ArrowRight size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"
                className="bg-[#E4405F] text-white px-7 py-4 rounded-2xl font-black flex items-center justify-between hover:scale-[1.02] transition-all shadow-lg text-sm">
                Instagram Feed <ArrowRight size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"
                className="bg-[#0A66C2] text-white px-7 py-4 rounded-2xl font-black flex items-center justify-between hover:scale-[1.02] transition-all shadow-lg text-sm">
                LinkedIn Network <ArrowRight size={18} />
              </a>
            </div>
            <a
              href="https://wa.me/8801701699743?text=Hi%2C+I+want+to+book+a+USA+visa+interview+preparation+session."
              target="_blank" rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 bg-[#005a31] hover:bg-[#007a41] text-white rounded-2xl font-black text-sm transition-all shadow-xl"
            >
              <MessageCircle size={20} /> WhatsApp — Book a Session Now
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────────────────────────────── */}
      <footer className="py-16 text-center bg-[#0a0f0d]" aria-label="Footer navigation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-white/25 font-black uppercase tracking-widest mb-6">Explore More on eammu.com</p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { label: "← Back to Home",          href: "/" },
              { label: "All Visa Services",        href: "/our-services/visa-services" },
              { label: "Student Visa Bangladesh",  href: "/our-services/visa-services/student-visa-from-bangladesh" },
              { label: "Tourist Visa Bangladesh",  href: "/our-services/visa-services/tourist-visa-from-bangladesh" },
              { label: "IELTS Center",             href: "/target-ielts-immigration-center" },
              { label: "Scholarships USA",         href: "/scholarships/united-states" },
              { label: "USA Visa Guide",           href: "/visa/india/united-states" },
              { label: "Visa Rejection Guide",     href: "/visa-rejection" },
              { label: "e-Visa Guide",             href: "/visa/e-visa" },
              { label: "Checklist Generator",      href: "/travel-resources/visa-checklist-generator" },
              { label: "Contact Us",               href: "/contact" },
            ].map(link => (
              <Link key={link.label} href={link.href}
                className="text-xs font-bold text-white/30 hover:text-orange-400 transition border border-white/10 px-3 py-1.5 rounded-lg hover:border-orange-500/30"
              >{link.label}</Link>
            ))}
          </div>
          <p className="text-xs text-white/15">
            © {new Date().getFullYear()} eammu.com · Target USA Visa Interview Preparation ·{" "}
            <Link href="/terms-privacy-policy" className="hover:text-white/40 transition">Privacy Policy</Link>
          </p>
        </div>
      </footer>
     {/* ── BREADCRUMB ──────────────────────────────────────────────────────── */}
      <nav className="bg-[#0a0f0d] border-b border-white/5" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <ol className="flex items-center gap-2 text-xs flex-wrap" style={{ color: "rgba(255,255,255,0.35)" }}>
            <li><Link href="/" className="hover:text-orange-400 transition">Home</Link></li>
            <li className="opacity-30">›</li>
            <li><Link href="/our-services" className="hover:text-orange-400 transition">Our Services</Link></li>
            <li className="opacity-30">›</li>
            <li><Link href="/our-services/visa-services" className="hover:text-orange-400 transition">Visa Services</Link></li>
            <li className="opacity-30">›</li>
            <li style={{ color: "rgba(255,255,255,0.6)" }} className="font-bold">USA Visa Interview Preparation</li>
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default TargetUsaInterview;