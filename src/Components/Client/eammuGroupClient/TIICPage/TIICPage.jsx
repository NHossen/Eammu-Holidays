"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, GraduationCap, BookOpen, Users, Award,
  Globe, MessageCircle, PhoneCall, MapPin, ChevronRight,
  Star, Clock, Laptop, Check, Plane, ArrowRight,
  ChevronDown, FileText, ShieldCheck, Building2,
  TrendingUp, Navigation, Mail,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const slides = [
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1500",
    badge: "IELTS Academic & General",
    title: "Elevate Your Future at TIIC",
    desc: "The most trusted IELTS & Study Abroad academy in Cumilla. Empowering students with world-class education pathways.",
    cta: "/study-abroad/student-visa",
    ctaText: "Free Assessment",
  },
  {
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1500",
    badge: "PTE Academic Training",
    title: "Master PTE with AI Technology",
    desc: "Experience real exam environments with our AI-based scoring software. Fast-track your success in just 30 days.",
    cta: "/study-abroad",
    ctaText: "Study Abroad Guide",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1500",
    badge: "Global Study Solutions",
    title: "Your Bridge to Global Universities",
    desc: "Comprehensive visa and admission support for USA, UK, Canada, and Australia with a 98% success rate.",
    cta: "/study-abroad/student-visa",
    ctaText: "Apply Now",
  },
];

// All internal links from sitemap
const internalLinks = [
  { href: "/study-abroad",                                  icon: <GraduationCap size={15} />, label: "Study Abroad",                    desc: "UK, USA, Canada, Australia" },
  { href: "/study-abroad/student-visa",                     icon: <FileText size={15} />,      label: "Student Visa",                    desc: "University admission support" },
  { href: "/scholarships",                                  icon: <Award size={15} />,         label: "Scholarships",                    desc: "Funded study opportunities" },
  { href: "/target-usa-visa-interview-preparation",         icon: <Users size={15} />,         label: "USA Visa Interview Prep",         desc: "Mock interview coaching" },
  { href: "/visa",                                          icon: <ShieldCheck size={15} />,   label: "All Visa Services",               desc: "50+ countries covered" },
  { href: "/visa/e-visa",                                   icon: <FileText size={15} />,      label: "E-Visa Processing",               desc: "Fast online visa processing" },
  { href: "/visa/visa-guide",                               icon: <BookOpen size={15} />,      label: "Visa Guides",                     desc: "Step-by-step country guides" },
  { href: "/visa-rejection",                                icon: <ShieldCheck size={15} />,   label: "Visa Rejection Help",             desc: "Re-application & appeal" },
  { href: "/offers",                                        icon: <TrendingUp size={15} />,    label: "Latest Offers",                   desc: "Tour & visa package deals" },
  { href: "/travel-resources/visa-processing-time-tracker", icon: <Clock size={15} />,         label: "Visa Processing Time Tracker",    desc: "Real visa timelines" },
  { href: "/travel-resources/visa-checklist-generator",     icon: <CheckCircle size={15} />,   label: "Visa Checklist Generator",        desc: "Personalised document list" },
  { href: "/contact/travel-agency-bangladesh",              icon: <MapPin size={15} />,        label: "Bangladesh Offices",              desc: "Cumilla & Dhaka" },
  { href: "/contact/travel-agency-dubai",                   icon: <Building2 size={15} />,     label: "Dubai Office",                    desc: "Business Bay, UAE" },
  { href: "/contact/travel-agency-georgia",                 icon: <Plane size={15} />,         label: "Georgia Office",                  desc: "Tbilisi, Georgia" },
  { href: "/contact/travel-agency-armenia",                 icon: <Plane size={15} />,         label: "Armenia Office",                  desc: "Lambron 39, Yerevan" },
  { href: "/online-travel-agency-bangladesh",               icon: <Navigation size={15} />,    label: "Online Travel Agency",            desc: "Book tours & visas online" },
  { href: "/visa/dubai-residents",                          icon: <Globe size={15} />,         label: "Dubai Resident Visas",            desc: "Visas for UAE residents" },
  { href: "/blogs",                                         icon: <BookOpen size={15} />,      label: "Travel & Visa Blog",              desc: "Guides & latest updates" },
  { href: "/testimonials",                                  icon: <Star size={15} />,          label: "Client Testimonials",             desc: "10,000+ happy travelers" },
  { href: "/contact",                                       icon: <MessageCircle size={15} />, label: "Contact All Offices",             desc: "Global Eammu network" },
];

const faqs = [
  {
    q: "Where is Target IELTS & Immigration Center (TIIC) located?",
    a: "TIIC is located at Gomoti Tower, 1st Floor, Cumilla Cantonment, Bangladesh — the same building as the Eammu Holidays main office. We are open Saturday–Thursday, 10AM–7PM. Walk-ins are welcome for a free assessment.",
  },
  {
    q: "What courses does TIIC offer?",
    a: "TIIC offers: (1) IELTS Academic & General Training — British Council pattern, weekly mock tests, Band 8+ strategy. (2) PTE Academic Training — AI-based practice software, real exam environment, 30-day fast-track. (3) Spoken English — daily conversation drills, grammar, job interview prep. (4) Study Abroad consultancy for UK, USA, Canada, and Australia.",
  },
  {
    q: "What is the highest IELTS band achieved at TIIC?",
    a: "TIIC students have achieved a highest IELTS band of 8.5. Our personalised feedback system, weekly full mock tests, and proprietary Band 8+ strategy consistently push students above their target score.",
  },
  {
    q: "How long does the IELTS course take at TIIC?",
    a: "We offer three durations: Intensive (30 days), Standard (60 days), and Extended (90 days). After a free diagnostic assessment, a customised study plan is created. Most students achieve their target band within 60 days.",
  },
  {
    q: "Does TIIC help with UK, USA, or Canada student visa applications?",
    a: "Yes. Under the Eammu Holidays umbrella, TIIC provides complete student visa support — including CAS letter guidance (UK), I-20 support (USA), SOP writing, financial statement review, TB test coordination, and embassy submission. Our visa success rate is 98%. See our student visa page for details.",
  },
  {
    q: "Does TIIC offer scholarship guidance?",
    a: "Yes. We provide scholarship guidance for fully and partially funded programmes in UK (Chevening, Commonwealth), USA (Fulbright), Canada, and Australia. Our consultants help identify eligible scholarships and prepare strong applications.",
  },
  {
    q: "Can students in Dubai also access TIIC services?",
    a: "Yes. Through Eammu Holidays' Dubai office at Business Bay, UAE, TIIC's study abroad and immigration services are available to UAE-based students. Contact our Dubai team at +971 50 707 8334 or visit /contact/travel-agency-dubai.",
  },
  {
    q: "What is the difference between IELTS Academic and IELTS General Training?",
    a: "IELTS Academic is required for undergraduate, postgraduate, and professional registration (medical, nursing, engineering) abroad. IELTS General Training is for secondary education, work experience, and migration to UK, Canada, and Australia. TIIC offers dedicated courses for both modules with module-specific mock tests.",
  },
];

const whyTIIC = [
  { icon: "🎯", title: "Band 8.5 Achieved",        desc: "Our students consistently achieve top scores including 8.5 — the highest band score possible in most categories." },
  { icon: "🤖", title: "AI-Powered PTE Software",   desc: "Real exam simulation with AI scoring gives instant feedback on pronunciation, fluency, and grammar in real time." },
  { icon: "📋", title: "Weekly Full Mock Tests",    desc: "Unlimited mock tests in exact British Council format — timed, scored, and reviewed individually." },
  { icon: "🎓", title: "98% Visa Success Rate",     desc: "Our student visa processing team under Eammu Holidays maintains a 98% approval rate across UK, USA, Canada, and Australia." },
  { icon: "🌍", title: "50+ Partner Universities",  desc: "Direct admission partnerships with universities in UK, USA, Canada, Australia, Georgia, and Europe." },
  { icon: "👨‍🏫", title: "Expert IELTS Trainers",   desc: "All TIIC trainers are British Council-trained, CELTA-certified, and hold IELTS Band 9 experience." },
];

const fadeIn = {
  hidden:  { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

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
      className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:border-orange-200 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left focus:outline-none"
        aria-expanded={open}
      >
        <span className={`font-bold text-sm md:text-base transition-colors ${open ? "text-[#005a31]" : "text-slate-800"}`}>
          {faq.q}
        </span>
        <ChevronDown size={18} className={`shrink-0 mt-0.5 text-orange-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-l-4 border-orange-400 ml-6">
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
const TIICPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#fcfcfc] text-slate-900 font-sans overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO CAROUSEL
      ══════════════════════════════════════════ */}
      <section
        aria-label="Target IELTS Immigration Center Cumilla hero"
        className="relative h-[70vh] lg:h-[75vh] flex items-center justify-center overflow-hidden bg-[#004a28]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <img src={slides[currentSlide].image} alt="TIIC Academy Cumilla" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#005a31] via-[#005a31]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#005a31] via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-4 sm:px-6 relative z-20 py-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              key={currentSlide + "text"}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-3/5 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/40 rounded-xl text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                <Plane size={14} /> {slides[currentSlide].badge}
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
                {slides[currentSlide].title.includes("at") ? (
                  <>
                    {slides[currentSlide].title.split("at")[0]}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500 italic">
                      at {slides[currentSlide].title.split("at")[1]}
                    </span>
                  </>
                ) : (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500 italic">
                    {slides[currentSlide].title}
                  </span>
                )}
              </h1>
              <p className="text-base md:text-xl text-gray-200 max-w-xl font-medium mb-8 leading-relaxed">
                {slides[currentSlide].desc}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a
                  href="https://wa.me/8801701699743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-orange-500 hover:bg-white hover:text-orange-500 text-white rounded-2xl font-black text-base flex items-center justify-center gap-3 transition-all shadow-2xl hover:-translate-y-1"
                >
                  <MessageCircle size={20} /> Free Assessment
                </a>
                <Link
                  href={slides[currentSlide].cta}
                  className="px-8 py-4 border-2 border-white/30 hover:bg-white/10 text-white rounded-2xl font-black text-base transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  {slides[currentSlide].ctaText} <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Floating card — desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:w-2/5 hidden lg:block"
            >
              <div className="bg-white/5 border border-white/10 backdrop-blur-2xl p-8 rounded-[3rem] shadow-2xl">
                <div className="flex gap-1 text-orange-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <h3 className="text-white font-black text-2xl mb-4 italic uppercase tracking-tighter">Best in Cumilla</h3>
                <ul className="space-y-3 text-gray-300 font-medium text-sm">
                  <li className="flex items-center gap-3"><CheckCircle size={16} className="text-orange-500 shrink-0" /> Band 8.5 Strategy</li>
                  <li className="flex items-center gap-3"><CheckCircle size={16} className="text-orange-500 shrink-0" /> AI-Powered PTE Software</li>
                  <li className="flex items-center gap-3"><CheckCircle size={16} className="text-orange-500 shrink-0" /> Weekly Full Mock Tests</li>
                  <li className="flex items-center gap-3"><CheckCircle size={16} className="text-orange-500 shrink-0" /> 98% Visa Success Rate</li>
                  <li className="flex items-center gap-3"><CheckCircle size={16} className="text-orange-500 shrink-0" /> 50+ Partner Universities</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center font-black text-white text-xs">TIIC</div>
                  <div>
                    <p className="text-white font-bold text-sm">Join 5,000+ Students</p>
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-black">Success Guaranteed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className="group p-2" aria-label={`Slide ${i + 1}`}>
                <div className={`h-1.5 rounded-full transition-all duration-700 ${i === currentSlide ? "w-16 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]" : "w-4 bg-white/20"}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRUST STATS
      ══════════════════════════════════════════ */}
      <section
        aria-label="TIIC achievements and student success statistics"
        className="relative -mt-12 z-20 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { icon: <Users size={26} />,       title: "5,000+", desc: "Students Trained"  },
            { icon: <Award size={26} />,        title: "8.5",    desc: "Highest Band Score" },
            { icon: <Globe size={26} />,        title: "50+",    desc: "Partner Universities" },
            { icon: <CheckCircle size={26} />,  title: "98%",    desc: "Visa Success Rate" },
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              whileHover={{ y: -8 }}
              className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-xl text-center flex flex-col items-center"
            >
              <div className="text-orange-500 mb-3 bg-orange-50 p-4 rounded-2xl shadow-inner">{s.icon}</div>
              <h3 className="text-2xl md:text-3xl font-black text-[#005a31]">{s.title}</h3>
              <p className="text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-widest mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          SEO INTRO BLOCK
      ══════════════════════════════════════════ */}
      <section
        aria-label="About Target IELTS Immigration Center TIIC Cumilla"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
      >
        <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl border border-green-100 p-7 md:p-10 space-y-5">
          <span className="text-orange-500 text-xs font-black uppercase tracking-widest">About TIIC</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Cumilla's Most Trusted <span className="text-[#005a31]">IELTS & Immigration Center</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl">
            <strong>Target IELTS & Immigration Center (TIIC)</strong> operates under <strong>Eammu Holidays</strong> at <strong>Gomoti Tower, 1st Floor, Cumilla Cantonment</strong>. Since 2022, TIIC has trained 5,000+ students in <strong>IELTS Academic & General Training</strong>, <strong>PTE Academic</strong>, and Spoken English — achieving a highest band of 8.5 and a 98% visa success rate. Our British Council-trained instructors use weekly mock tests, personalised feedback, and AI-powered PTE software to ensure every student reaches their target band score.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-4xl">
            Beyond exam preparation, TIIC provides <strong>complete study abroad consultancy</strong> for UK, USA, Canada, and Australia — from university selection and application to{" "}
            <Link href="/study-abroad/student-visa" className="text-[#005a31] font-bold hover:underline">student visa processing</Link> and{" "}
            <Link href="/scholarships" className="text-[#005a31] font-bold hover:underline">scholarship guidance</Link>. Students in UAE can also access TIIC services through our{" "}
            <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-bold hover:underline">Dubai office</Link>. For{" "}
            <Link href="/target-usa-visa-interview-preparation" className="text-[#005a31] font-bold hover:underline">USA visa interview preparation</Link>, we offer dedicated mock interview coaching sessions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              { icon: "📚", title: "IELTS & PTE Coaching",    desc: "British Council-pattern mock tests, AI PTE software, and Band 8+ proven strategy" },
              { icon: "🎓", title: "Study Abroad Consultancy", desc: "UK, USA, Canada, Australia admissions with SOP writing and full visa support" },
              { icon: "✈️", title: "Immigration Support",      desc: "Student visa filing, financial statement review, and 98% approval success rate" },
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
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COURSES SECTION
      ══════════════════════════════════════════ */}
      <section
        aria-label="IELTS, PTE, and Study Abroad courses at TIIC"
        className="pb-16 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="text-center mb-14">
          <span className="text-orange-500 text-xs font-black uppercase tracking-widest">Our Programmes</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#005a31] uppercase tracking-tighter italic mt-2">Premium Programs</h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          <CourseCard
            href="/study-abroad/student-visa"
            icon={<GraduationCap size={40} />}
            title="IELTS Academic & General"
            color="border-blue-100 text-blue-600"
            points={["British Council exam pattern", "Weekly full mock tests", "Exclusive Band 8+ strategy", "Personalised written feedback", "Listening, Reading, Writing, Speaking"]}
          />
          <CourseCard
            href="/study-abroad"
            icon={<Laptop size={40} />}
            title="PTE Academic Training"
            color="border-purple-100 text-purple-600"
            points={["AI-based practice software", "Real exam environment", "30-day fast-track programme", "Instant AI scoring feedback", "All 4 skills covered"]}
          />
          <CourseCard
            href="/study-abroad/student-visa"
            icon={<BookOpen size={40} />}
            title="Study Abroad Consultancy"
            color="border-orange-100 text-orange-600"
            points={["University selection & application", "SOP & LOR writing support", "Student visa processing", "Financial statement review", "50+ partner universities"]}
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          WHY TIIC — 6 REASONS
      ══════════════════════════════════════════ */}
      <section
        aria-label="Why choose TIIC Cumilla for IELTS and study abroad"
        className="bg-[#005a31] py-16 sm:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-400 text-xs font-black uppercase tracking-widest">Why Choose TIIC?</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              What Makes TIIC the Best in Cumilla
            </h2>
            <p className="text-green-200 text-sm mt-3 max-w-xl mx-auto">
              From AI-powered PTE software to Band 8.5-proven strategies — here's why 5,000+ students chose TIIC.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {whyTIIC.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeIn}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-black text-white text-base mb-2">{item.title}</h3>
                <p className="text-green-200 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STUDY ABROAD — INTERNAL LINKS
      ══════════════════════════════════════════ */}
      <section
        aria-label="Study abroad destinations supported by TIIC Eammu Holidays"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50 border-y border-slate-200"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1471"
              alt="TIIC study abroad consultancy Cumilla"
              className="rounded-[3rem] shadow-2xl border-8 border-white w-full object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <span className="text-orange-500 text-xs font-black uppercase tracking-widest">Study Abroad</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mt-2 mb-6 uppercase tracking-tighter italic">
              Global Study Solutions
            </h2>
            <p className="text-gray-500 text-base mb-8 leading-relaxed font-medium">
              Operating under{" "}
              <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-bold hover:underline">Eammu Holidays</Link>,
              TIIC bridges the gap for Bangladeshi students. Whether in Cumilla or Dubai, we handle every step — from IELTS preparation to{" "}
              <Link href="/study-abroad/student-visa" className="text-[#005a31] font-bold hover:underline">student visa filing</Link>.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: "USA & Canada Experts",    href: "/study-abroad/student-visa" },
                { label: "UK & Australia Specialists", href: "/study-abroad" },
                { label: "Scholarship Assistance",  href: "/scholarships" },
                { label: "Visa Interview Prep",     href: "/target-usa-visa-interview-preparation" },
                { label: "Visa Rejection Support",  href: "/visa-rejection" },
                { label: "Visa Checklist Generator",href: "/travel-resources/visa-checklist-generator" },
              ].map((item, i) => (
                <Link key={i} href={item.href}>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-[#005a31] hover:shadow-md transition-all cursor-pointer">
                    <Check className="text-green-600 bg-green-50 rounded-full p-1 shrink-0" size={22} />
                    <span className="font-bold text-gray-700 text-sm">{item.label}</span>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/study-abroad"
              className="inline-flex items-center gap-2 text-orange-500 font-black uppercase tracking-widest text-sm border-b-2 border-orange-500 pb-1 hover:text-[#005a31] transition-all"
            >
              Explore All Study Abroad Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════ */}
      <section
        aria-label="TIIC step by step process for IELTS and student visa"
        className="py-16 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-black text-[#005a31] mb-12 text-center italic tracking-tighter uppercase">
          Your Road to Success
        </h2>
        <div className="grid gap-4">
          {[
            { num: "01", title: "Free Diagnostic Assessment",   desc: "Find your current IELTS or PTE level with a free timed test before your course starts." },
            { num: "02", title: "Customised Study Plan",        desc: "Tailored modules based on your target band score, weak areas, and available time." },
            { num: "03", title: "Unlimited Mock Exams",         desc: "Practice weekly full mock tests in exact British Council format until you're test-ready." },
            { num: "04", title: "Visa & University Support",    desc: "Seamless transition — from IELTS certificate to university offer letter to visa approval.", link: "/study-abroad/student-visa" },
          ].map((step) => (
            <div
              key={step.num}
              className="flex flex-col md:flex-row gap-6 items-center md:items-start group p-6 sm:p-8 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-slate-100"
            >
              <div className="text-5xl font-black text-slate-100 group-hover:text-orange-400 transition-colors italic leading-none shrink-0">
                {step.num}
              </div>
              <div>
                <h4 className="font-black text-xl text-slate-800 mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">{step.desc}</p>
                {step.link && (
                  <Link href={step.link} className="inline-flex items-center gap-1 text-orange-500 font-black text-xs uppercase tracking-wider mt-2 hover:text-[#005a31] transition-colors">
                    Learn More <ArrowRight size={12} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ALL SERVICES — INTERNAL LINK HUB
      ══════════════════════════════════════════ */}
      <section
        aria-label="All Eammu Holidays and TIIC services"
        className="bg-slate-50 py-14 sm:py-16 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-orange-500 text-xs font-black uppercase tracking-widest">Quick Access</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#005a31] mt-2">All Services & Resources</h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
              IELTS, student visa, scholarships, visa rejection support, global offices — all Eammu Holidays services.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
          >
            {internalLinks.map((link) => (
              <motion.div key={link.href} variants={fadeIn}>
                <Link href={link.href}>
                  <div className="group bg-white hover:bg-[#005a31] rounded-2xl p-4 border border-slate-100 hover:border-[#005a31] transition-all cursor-pointer h-full shadow-sm hover:shadow-lg">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="text-orange-500 group-hover:scale-110 transition-transform shrink-0">{link.icon}</div>
                      <span className="text-[#005a31] group-hover:text-white font-black text-xs leading-tight transition-colors">{link.label}</span>
                    </div>
                    <p className="text-slate-400 group-hover:text-green-200 text-[11px] leading-relaxed transition-colors">{link.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section
        aria-label="FAQ about TIIC IELTS center and study abroad Cumilla"
        className="py-14 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <span className="text-orange-500 text-xs font-black uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mt-2">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
            Everything about IELTS courses, PTE training, student visas, and our Cumilla office.
          </p>
          <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full mt-4" />
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => <FaqItem key={i} faq={faq} index={i} />)}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://wa.me/8801701699743"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#005a31] text-white px-10 py-4 rounded-2xl font-black hover:bg-orange-500 transition shadow-lg uppercase tracking-wide text-sm"
          >
            <MessageCircle size={18} /> Ask on WhatsApp
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEO RICH TEXT FOOTER
      ══════════════════════════════════════════ */}
      <section
        aria-label="About Target IELTS Immigration Center Bangladesh"
        className="py-4 pb-16 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="bg-gray-50 rounded-3xl border border-gray-100 p-7 md:p-10">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">
            Target IELTS & Immigration Center (TIIC) — Best IELTS Coaching in Cumilla, Bangladesh
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed max-w-5xl">
            <p>
              <strong className="text-gray-800">Target IELTS & Immigration Center (TIIC)</strong> is Cumilla's most trusted IELTS preparation and study abroad consultancy, operating under{" "}
              <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-bold hover:underline">Eammu Holidays</Link> at{" "}
              <strong>Gomoti Tower, 1st Floor, Cumilla Cantonment</strong>. Since 2022, TIIC has trained 5,000+ students achieving a highest IELTS band of 8.5 — using British Council-pattern mock tests, personalised feedback, and AI-powered PTE software. Our CELTA-certified trainers cover all four IELTS skills and provide module-specific strategies for both Academic and General Training candidates.
            </p>
            <p>
              TIIC provides complete{" "}
              <Link href="/study-abroad/student-visa" className="text-[#005a31] font-bold hover:underline">student visa processing</Link> for UK, USA, Canada, and Australia with a 98% approval rate. We assist with university selection, SOP writing, financial statement review, and embassy submission. Students can also access{" "}
              <Link href="/scholarships" className="text-[#005a31] font-bold hover:underline">scholarship guidance</Link> for Chevening, Commonwealth, Fulbright, and other funded programmes. For dedicated mock interview coaching, visit our{" "}
              <Link href="/target-usa-visa-interview-preparation" className="text-[#005a31] font-bold hover:underline">USA Visa Interview Preparation</Link> page. If you've had a{" "}
              <Link href="/visa-rejection" className="text-[#005a31] font-bold hover:underline">visa rejection</Link>, our immigration consultants provide re-application analysis and stronger application filing.
            </p>
            <p>
              Use our{" "}
              <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#005a31] font-bold hover:underline">Visa Processing Time Tracker</Link> and{" "}
              <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-bold hover:underline">Visa Checklist Generator</Link> to prepare your application. Read our{" "}
              <Link href="/blogs" className="text-[#005a31] font-bold hover:underline">Travel & Visa Blog</Link> for the latest IELTS tips and student visa guides. TIIC services are also available through our{" "}
              <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-bold hover:underline">Dubai office</Link> for UAE-based students.
              Contact: <a href="tel:+8801701699743" className="text-[#005a31] font-bold hover:underline">+880 1701-699743</a> |{" "}
              <a href="https://wa.me/8801701699743" className="text-[#005a31] font-bold hover:underline">WhatsApp</a>
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            {["IELTS Coaching Cumilla", "PTE Training Cumilla", "IELTS Band 8 Bangladesh",
              "Study Abroad Cumilla", "Student Visa Bangladesh", "Scholarship Guidance",
              "IELTS Mock Test Cumilla", "UK Student Visa", "Canada Student Visa",
              "USA Visa Interview Prep", "TIIC Cumilla", "Eammu Holidays IELTS"].map((kw) => (
              <span key={kw} className="text-[11px] px-3 py-1 bg-white border border-gray-200 text-gray-500 font-semibold rounded-full">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT CTA (Green rounded section)
      ══════════════════════════════════════════ */}
      <section
        aria-label="Join TIIC academy Cumilla contact and location"
        className="bg-[#005a31] mx-4 md:mx-auto max-w-7xl mb-12 rounded-[3rem] md:rounded-[5rem] overflow-hidden py-16 sm:py-20 px-6 sm:px-8 text-white relative shadow-2xl"
      >
        <div className="absolute top-0 right-0 p-16 opacity-5"><GraduationCap size={300} /></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-5">
            Gomoti Tower, Cumilla · Open Now
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-5 italic tracking-tighter uppercase">
            Join The TIIC Academy
          </h2>
          <p className="text-white/70 text-base mb-10 font-medium max-w-xl mx-auto">
            Gomoti Tower (1st Floor), Cumilla Cantonment, Bangladesh.{" "}
            <br /><span className="text-orange-400 font-bold uppercase tracking-widest text-sm">Trusted across Bangladesh & UAE</span>
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center">
              <MapPin className="mx-auto mb-3 text-orange-400" size={22} />
              <p className="font-black text-sm uppercase tracking-widest mb-1">Cumilla Head Office</p>
              <p className="text-white/60 text-xs">Gomoti Tower, 1st Floor, Cantonment</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center">
              <Clock className="mx-auto mb-3 text-orange-400" size={22} />
              <p className="font-black text-sm uppercase tracking-widest mb-1">Office Hours</p>
              <p className="text-white/60 text-xs">Saturday–Thursday: 10AM–7PM</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+8801701699743"
              className="bg-white text-[#005a31] px-10 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-all shadow-xl text-sm"
            >
              <PhoneCall size={18} /> CALL: +880 1701 699743
            </a>
            <a
              href="https://wa.me/8801701699743"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-10 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-green-400 transition-all shadow-xl text-sm"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <Link
              href="/study-abroad/student-visa"
              className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-orange-400 transition-all shadow-xl text-sm"
            >
              <GraduationCap size={18} /> Student Visa
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-400 font-black text-xs uppercase tracking-[0.4em]">
        Target IELTS & Immigration Center — 2026
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/8801701699743"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp TIIC Cumilla"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 transition-all hover:scale-110 md:hidden"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */
const CourseCard = ({ title, points, icon, color, href }) => (
  <motion.div variants={fadeIn}>
    <Link href={href}>
      <div className={`bg-white p-8 md:p-10 rounded-[3.5rem] border-2 shadow-lg shadow-slate-200/50 group hover:border-[#005a31] transition-all duration-500 cursor-pointer h-full ${color}`}>
        <div className="mb-5 group-hover:scale-110 transition-transform bg-slate-50 w-16 h-16 flex items-center justify-center rounded-3xl">
          {icon}
        </div>
        <h3 className="font-black text-xl text-slate-800 mb-5 group-hover:text-[#005a31] transition-colors">{title}</h3>
        <ul className="space-y-3">
          {points.map((p, i) => (
            <li key={i} className="flex gap-3 text-gray-500 font-medium text-sm items-start">
              <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" /> <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center gap-1 text-orange-500 text-xs font-black uppercase tracking-wide">
          Learn More <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  </motion.div>
);

export default TIICPage;