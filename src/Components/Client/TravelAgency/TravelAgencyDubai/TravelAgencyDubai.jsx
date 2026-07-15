"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Globe, Award, MapPin, PhoneCall,
  MessageCircle, Landmark, ShieldCheck, ArrowRight,
  Briefcase, Star, Clock, ChevronDown,
  FileText, GraduationCap, Navigation, BookOpen,
  Building2, Plane, Users, TrendingUp,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const slides = [
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80",
    badge: "Eammu Holidays Dubai",
    title: "Your Premier Travel Partner in Business Bay",
    desc: "World-class visa solutions, UAE residency processing, and luxury tours — 100% transparent, 24/7 VIP support.",
    cta: "/visa/dubai-residents",
    ctaText: "Dubai Resident Visas",
  },
  {
    image: "https://images.unsplash.com/photo-1582672093583-0979318b846e?auto=format&fit=crop&q=80",
    badge: "UAE Residency Experts",
    title: "Unlock Your Future with a Golden Visa",
    desc: "Specialised 10-year UAE Golden Visa and investor visa processing for entrepreneurs and professionals in Dubai.",
    cta: "/visa/dubai-residents",
    ctaText: "Check Eligibility",
  },
  {
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80",
    badge: "Global Visa Specialist",
    title: "Travel the World from Dubai",
    desc: "Expert documentation for Schengen, USA, UK, Canada, India and 50+ countries with industry-leading success rates.",
    cta: "/visa",
    ctaText: "All Visa Services",
  },
];

// Dubai-resident visa country cards — direct internal links
const dubaiResidentVisas = [
  {
    flag: "🇦🇱", country: "Albania",  href: "/visa/dubai-residents/albania",
    desc: "Schengen candidate. Strong tourism. Easy process for UAE residents.",
    processing: "5–10 days", difficulty: "Easy",
  },
  {
    flag: "🇦🇩", country: "Andorra",  href: "/visa/dubai-residents/andorra",
    desc: "Micro-state between France & Spain. Visa through French consulate.",
    processing: "10–15 days", difficulty: "Moderate",
  },
  {
    flag: "🇦🇲", country: "Armenia",  href: "/visa/dubai-residents/armenia",
    desc: "Visa-on-arrival OR e-visa available for UAE residents. Easy process.",
    processing: "1–3 days",  difficulty: "Very Easy",
  },
  {
    flag: "🇷🇸", country: "Serbia",   href: "/visa/dubai-residents/serbia",
    desc: "Popular Balkan destination. UAE residents can enter visa-free.",
    processing: "Visa-free",  difficulty: "Very Easy",
  },
  {
    flag: "🇽🇰", country: "Kosovo",   href: "/visa/dubai-residents/kosovo",
    desc: "Emerging travel destination. Special entry rules for UAE residents.",
    processing: "3–7 days",  difficulty: "Easy",
  },
  {
    flag: "🇮🇳", country: "India (Kosovo holders)", href: "/visa/india/kosovo",
    desc: "India e-visa guide specifically for Kosovo passport holders from Dubai.",
    processing: "3–5 days",  difficulty: "Easy",
  },
];

// All internal links from sitemap
const internalLinks = [
  { href: "/visa/dubai-residents",           icon: <Building2 size={15} />,     label: "Dubai Residents — All Visas",         desc: "Visas for 50+ countries" },
  { href: "/visa/dubai-residents/albania",   icon: <Globe size={15} />,         label: "Albania Visa — Dubai Residents",      desc: "5–10 day processing" },
  { href: "/visa/dubai-residents/andorra",   icon: <Globe size={15} />,         label: "Andorra Visa — Dubai Residents",      desc: "Via French consulate" },
  { href: "/visa/dubai-residents/armenia",   icon: <Globe size={15} />,         label: "Armenia Visa — Dubai Residents",      desc: "e-Visa / on arrival" },
  { href: "/visa/dubai-residents/serbia",    icon: <Globe size={15} />,         label: "Serbia Visa — Dubai Residents",       desc: "Visa-free for UAE residents" },
  { href: "/visa/dubai-residents/kosovo",    icon: <Globe size={15} />,         label: "Kosovo Visa — Dubai Residents",       desc: "3–7 day processing" },
  { href: "/visa/india/kosovo",              icon: <Plane size={15} />,         label: "India Visa for Kosovo Holders",       desc: "e-Visa from Dubai" },
  { href: "/visa",                           icon: <ShieldCheck size={15} />,   label: "All Visa Services",                   desc: "50+ countries covered" },
  { href: "/visa/e-visa",                    icon: <FileText size={15} />,      label: "E-Visa Processing",                   desc: "Fast online visas" },
  { href: "/visa/visa-guide",                icon: <BookOpen size={15} />,      label: "Visa Guides",                         desc: "Step-by-step guides" },
  { href: "/study-abroad",                   icon: <GraduationCap size={15} />, label: "Study Abroad",                        desc: "UK, USA, Canada, Australia" },
  { href: "/study-abroad/student-visa",      icon: <Award size={15} />,         label: "Student Visa",                        desc: "University admission support" },
  { href: "/visa-rejection",                 icon: <ShieldCheck size={15} />,   label: "Visa Rejection Help",                 desc: "Re-application support" },
  { href: "/scholarships",                   icon: <Star size={15} />,          label: "Scholarships",                        desc: "Funded study abroad" },
  { href: "/offers",                         icon: <TrendingUp size={15} />,    label: "Latest Offers",                       desc: "Tour & visa deals" },
  { href: "/travel-resources/visa-processing-time-tracker", icon: <Clock size={15} />, label: "Processing Time Tracker", desc: "Real visa timelines" },
  { href: "/travel-resources/visa-checklist-generator",     icon: <CheckCircle size={15} />, label: "Visa Checklist",     desc: "Document checklist tool" },
  { href: "/contact/travel-agency-bangladesh", icon: <MapPin size={15} />,      label: "Bangladesh Office",                   desc: "Cumilla & Dhaka" },
  { href: "/contact/travel-agency-armenia",    icon: <Plane size={15} />,       label: "Armenia Office",                      desc: "Lambron 39, Yerevan" },
  { href: "/contact/travel-agency-georgia",    icon: <Plane size={15} />,       label: "Georgia Office",                      desc: "Tbilisi, Georgia" },
  { href: "/blogs",                            icon: <BookOpen size={15} />,    label: "Travel Blog",                         desc: "Visa guides & tips" },
  { href: "/testimonials",                     icon: <Star size={15} />,        label: "Client Testimonials",                 desc: "10,000+ happy travelers" },
];

const tours = [
  { title: "Burj Khalifa & Dubai Mall",  duration: "Half Day",       price: "AED 179", img: "https://climatecontrol.imiplc.com/_next/image?url=https%3A%2F%2Fcdn.tessa.imihy.eimed-project.de%2F621346%2FWeb_Header%2FBurj_Khalifa_Tower.webp&w=3840&q=75" },
  { title: "Desert Safari Adventure",   duration: "1 Day / Evening", price: "AED 150", img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/13/bb/6a/7b.jpg" },
  { title: "Dubai Marina Cruise",       duration: "Evening Dinner",  price: "AED 120", img: "https://www.pelago.com/img/products/AE-United%20Arab%20Emirates/dubai-marina-dhow-cruise-dinner-with-entertainment/036dfefa-c682-4f9e-8d85-72fda3b852f7_dubai-marina-dhow-cruise-dinner-with-entertainment.jpg" },
  { title: "Palm Jumeirah Tour",        duration: "Half Day",        price: "AED 140", img: "https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/activities/f9cxlacfjbuydsfrl4ke.jpg" },
  { title: "Global Village Experience", duration: "Evening",         price: "AED 80",  img: "https://faredxb.com/wp-content/uploads/2024/10/1-12.jpg" },
  { title: "Abu Dhabi Day Trip",        duration: "Full Day",        price: "AED 250", img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/11/f7/6d/f8.jpg" },
];

const trustBadges = [
  "100% Transparent Pricing",
  "UAE Golden Visa Specialist",
  "DED Licensed PRO Services",
  "24/7 WhatsApp VIP Support",
  "50+ Countries Visa Expert",
  "Corporate Business Setup",
];

const faqs = [
  {
    q: "Where is Eammu Holidays' Dubai office?",
    a: "We are located at Office 12B, Executive Tower, Business Bay, Dubai, UAE. Open Mon–Thu 9AM–8PM, Fri 2PM–8PM, Sat 9AM–6PM. Walk-ins are welcome — no appointment needed for general visa enquiries.",
  },
  {
    q: "Can Dubai residents apply for Albania visa through Eammu Holidays?",
    a: "Yes. UAE residents can apply for Albania visa through our Business Bay office. Albania is a Schengen candidate state with beautiful coastlines and mountains. Processing typically takes 5–10 working days. Full details: /visa/dubai-residents/albania.",
  },
  {
    q: "Do UAE residents need a visa for Serbia?",
    a: "UAE residents with a valid UAE residence visa can enter Serbia visa-free for short stays. Our Dubai team can confirm eligibility based on your passport and residency status. See: /visa/dubai-residents/serbia.",
  },
  {
    q: "How do I get an Armenia visa as a Dubai resident?",
    a: "Armenia offers e-visa and visa-on-arrival options for many nationalities. UAE residents can apply online through our team within 1–3 days. Armenia is also visa-free for Bangladeshi passport holders for 365 days. See: /visa/dubai-residents/armenia.",
  },
  {
    q: "Does Eammu Holidays process Kosovo visa for UAE residents?",
    a: "Yes. Kosovo is an emerging Balkan destination and our Dubai office processes Kosovo visas for UAE residents in 3–7 working days. We also handle India visa specifically for Kosovo passport holders. See: /visa/dubai-residents/kosovo and /visa/india/kosovo.",
  },
  {
    q: "What is the UAE Golden Visa and who is eligible?",
    a: "The UAE Golden Visa is a 10-year renewable residency for investors (min AED 2M property or AED 2M business investment), entrepreneurs, specialised talent, researchers, and outstanding students. Eammu Holidays provides end-to-end Golden Visa processing including medical, Emirates ID, and family sponsorship.",
  },
  {
    q: "Does Eammu Holidays process Schengen visas from Dubai?",
    a: "Yes. We specialise in Schengen visa applications for UAE residents covering all 27 Schengen countries. We also process UK, USA, Canada, and India visas from our Business Bay office. Check our visa guides at /visa/visa-guide.",
  },
  {
    q: "How can I contact Eammu Holidays Dubai?",
    a: "Call or WhatsApp: +971 50 707 8334 | Email: dubai@eammu.com | Office: 12B Executive Tower, Business Bay, Dubai. WhatsApp is monitored 24/7 for urgent travel queries.",
  },
];

const fadeIn = {
  hidden:  { opacity: 0, y: 28 },
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
      className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:border-[#c4a456]/40 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left focus:outline-none"
        aria-expanded={open}
      >
        <span className={`font-bold text-sm md:text-base transition-colors ${open ? "text-[#004d2c]" : "text-slate-800"}`}>
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 mt-0.5 text-[#c4a456] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
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
            <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-l-4 border-[#c4a456] ml-6">
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
const TravelAgencyDubai = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        aria-label="Eammu Holidays Dubai travel agency hero"
        className="relative h-[70vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-[#004d2c]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#004d2c]/80 via-transparent to-[#004d2c]" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 text-center px-4 max-w-6xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-[#c4a456] text-[#004d2c] px-5 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest mb-6 inline-block shadow-lg">
                {slides[currentSlide].badge}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-5 text-white leading-tight drop-shadow-2xl">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 font-medium max-w-3xl mx-auto leading-relaxed">
                {slides[currentSlide].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link
              href={slides[currentSlide].cta}
              className="bg-[#c4a456] hover:bg-white text-[#004d2c] px-10 py-4 rounded-2xl font-black text-base transition-all shadow-2xl flex items-center justify-center gap-2 group"
            >
              {slides[currentSlide].ctaText}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <a
              href="https://wa.me/971507078334"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white hover:text-[#004d2c] text-white px-10 py-4 rounded-2xl font-black text-base transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> WhatsApp Now
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 flex gap-3 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 focus:outline-none ${i === currentSlide ? "w-12 bg-[#c4a456]" : "w-4 bg-white/30"}`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OFFICE INFO STRIP
      ══════════════════════════════════════════ */}
      <section
        aria-label="Eammu Holidays Dubai office contact"
        className="relative z-30 -mt-12 sm:-mt-16 max-w-7xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-white shadow-2xl rounded-[3rem] p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 border border-slate-100">
          <DubaiInfoCard icon={<MapPin />}    title="Business Bay HQ"   desc="Office 12B, Executive Tower, Dubai"  color="bg-[#004d2c] text-[#c4a456]" />
          <DubaiInfoCard icon={<PhoneCall />} title="VIP Hotline"        desc="+971 50 707 8334"                   color="bg-[#c4a456] text-[#004d2c]" />
          <DubaiInfoCard icon={<Award />}     title="Office Hours"       desc="Mon–Thu 9AM–8PM · Sat 9AM–6PM"     color="bg-[#004d2c] text-[#c4a456]" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES + TRUST BADGES
      ══════════════════════════════════════════ */}
      <section
        aria-label="Visa and travel services offered by Eammu Holidays Dubai"
        className="max-w-7xl mx-auto py-20 sm:py-24 px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <span className="text-[#c4a456] text-xs font-black uppercase tracking-widest">Business Bay Dubai</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#004d2c] mt-2 mb-6 leading-tight">
              Your Trusted Global Partner in{" "}
              <span className="text-[#c4a456]">Business Bay</span>
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                When searching for a <strong>travel agency in Dubai</strong>, reliability and speed are non-negotiable. Eammu Holidays' Business Bay office is a <strong>DED-licensed travel and visa consultancy</strong> serving UAE residents, expatriates, and international clients since 2012. We process <strong>UAE Golden Visa</strong>, <strong>Dubai resident visas for Albania, Andorra, Armenia, Serbia, and Kosovo</strong>, Schengen, UK, USA, Canada, and India visas — all under one roof.
              </p>
              <p>
                Our team of certified visa consultants maintains a <strong>high approval rate</strong> through meticulous document preparation, embassy relationship management, and priority appointment access. Whether you're a Bangladeshi expatriate in Dubai planning a Europe trip or a professional seeking a <Link href="/visa/dubai-residents" className="text-[#004d2c] font-bold hover:underline">UAE residency upgrade</Link>, we have the expertise to get your visa approved.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {trustBadges.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl font-bold text-[#004d2c] shadow-sm border border-slate-100 text-sm">
                  <CheckCircle size={16} className="text-[#c4a456] shrink-0" /> {item}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <DetailedServiceCard
              href="/visa/dubai-residents"
              icon={<Landmark />}
              title="UAE Residency"
              desc="Golden Visa (10-Year), Investor Visa, and Freelance permits with full PRO support."
              points={["Medical Assistance", "Emirates ID Filing", "Family Sponsorship"]}
            />
            <DetailedServiceCard
              href="/visa"
              icon={<ShieldCheck />}
              title="Global Visas"
              desc="Schengen, UK, Canada, USA, India and 50+ countries from our Dubai hub."
              points={["Interview Prep", "Document Review", "Priority Slots"]}
            />
            <DetailedServiceCard
              href="/offers"
              icon={<Globe />}
              title="Luxury Tours"
              desc="Exclusive tours to Maldives, Europe, and Central Asia for UAE residents."
              points={["Group Tours", "VIP Transfers", "5-Star Hotels"]}
            />
            <DetailedServiceCard
              href="/contact/travel-agency-dubai"
              icon={<Briefcase />}
              title="Business Setup"
              desc="Mainland and Freezone company formation with full legal assistance in UAE."
              points={["Trade License", "PRO Services", "Bank Account"]}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DUBAI RESIDENT VISA HUB — INTERNAL LINKS
      ══════════════════════════════════════════ */}
      <section
        aria-label="Visa services for Dubai and UAE residents by country"
        className="bg-[#004d2c] py-16 sm:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#c4a456] text-xs font-black uppercase tracking-widest">UAE Residents</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Dubai Resident Visa Services by Country
            </h2>
            <p className="text-green-200 text-sm mt-3 max-w-2xl mx-auto">
              Are you a UAE resident planning to travel? Eammu Holidays processes visas for Dubai and UAE residents to Albania, Andorra, Armenia, Serbia, Kosovo, India, and 50+ other countries — complete documentation, embassy submission, and follow-up.
            </p>
            <div className="w-12 h-1 bg-[#c4a456] mx-auto rounded-full mt-4" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {dubaiResidentVisas.map((v) => (
              <motion.div key={v.country} variants={fadeIn}>
                <Link href={v.href}>
                  <div className="group bg-white/10 hover:bg-white/20 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-[#c4a456]/60 transition-all cursor-pointer h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{v.flag}</span>
                      <div>
                        <h3 className="text-white font-black text-lg leading-tight group-hover:text-[#c4a456] transition-colors">
                          {v.country}
                        </h3>
                        <div className="flex items-center gap-3 mt-0.5">
                          <span className="text-[10px] font-bold text-green-300 uppercase tracking-wide">⏱ {v.processing}</span>
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                            v.difficulty === "Very Easy" ? "bg-green-500/30 text-green-300" :
                            v.difficulty === "Easy"     ? "bg-blue-500/30 text-blue-300"   :
                            "bg-yellow-500/30 text-yellow-300"
                          }`}>
                            {v.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-200 text-xs leading-relaxed mb-3">{v.desc}</p>
                    <div className="flex items-center gap-1 text-[#c4a456] text-xs font-black uppercase tracking-wide">
                      View Full Guide <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              href="/visa/dubai-residents"
              className="inline-flex items-center gap-2 bg-[#c4a456] text-[#004d2c] px-8 py-4 rounded-2xl font-black text-sm hover:bg-white transition shadow-lg"
            >
              View All Dubai Resident Visas <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          POPULAR TOURS
      ══════════════════════════════════════════ */}
      <section
        aria-label="Popular Dubai tour packages from Eammu Holidays"
        className="py-20 sm:py-24 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#c4a456] text-xs font-black uppercase tracking-widest">2025 Season</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#004d2c] mt-2 mb-4">Popular Dubai Tours</h2>
            <div className="w-24 h-2 bg-[#c4a456] mx-auto rounded-full" />
            <p className="text-slate-400 text-sm mt-4 max-w-xl mx-auto">
              Book directly from our Business Bay office or via WhatsApp. All tours include licensed guides and transport.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            {tours.map((tour, i) => (
              <TourCard key={i} {...tour} />
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              href="/offers"
              className="inline-flex items-center gap-2 bg-[#004d2c] text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-[#c4a456] hover:text-[#004d2c] transition shadow-lg"
            >
              View All Offers & Packages <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ALL SERVICES INTERNAL LINK HUB
      ══════════════════════════════════════════ */}
      <section
        aria-label="All Eammu Holidays services and resources"
        className="bg-slate-100 py-16 sm:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#c4a456] text-xs font-black uppercase tracking-widest">Quick Access</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#004d2c] mt-2">
              All Services & Resources
            </h2>
            <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
              Everything from Dubai resident visas to student visas, IELTS centres, and tour packages — explore all Eammu Holidays services.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {internalLinks.map((link) => (
              <motion.div key={link.href} variants={fadeIn}>
                <Link href={link.href}>
                  <div className="group bg-white hover:bg-[#004d2c] rounded-2xl p-4 border border-slate-100 hover:border-[#004d2c] transition-all cursor-pointer h-full shadow-sm hover:shadow-lg">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="text-[#c4a456] group-hover:scale-110 transition-transform shrink-0">
                        {link.icon}
                      </div>
                      <span className="text-[#004d2c] group-hover:text-white font-black text-xs leading-tight transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <p className="text-slate-400 group-hover:text-green-200 text-[11px] leading-relaxed transition-colors">
                      {link.desc}
                    </p>
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
        aria-label="Frequently asked questions about Eammu Holidays Dubai"
        className="py-16 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <span className="text-[#c4a456] text-xs font-black uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#004d2c] mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
            Expert answers about Dubai resident visas, UAE Golden Visa, tour bookings, and our Business Bay office.
          </p>
          <div className="w-12 h-1 bg-[#c4a456] mx-auto rounded-full mt-4" />
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://wa.me/971507078334"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#004d2c] text-white px-10 py-4 rounded-2xl font-black hover:bg-[#c4a456] hover:text-[#004d2c] transition shadow-lg uppercase tracking-wide text-sm"
          >
            <MessageCircle size={18} /> Ask on WhatsApp
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEO RICH TEXT + INTERNAL LINKS
      ══════════════════════════════════════════ */}
      <section
        aria-label="About Eammu Holidays Dubai travel agency"
        className="py-4 pb-16 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="bg-white rounded-3xl border border-slate-100 p-7 md:p-10 shadow-sm">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#004d2c] mb-4">
            Eammu Holidays Dubai — DED-Licensed Travel Agency & Visa Consultancy in Business Bay
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed max-w-5xl">
            <p>
              <strong className="text-slate-800">Eammu Holidays Dubai</strong> is a DED-licensed travel and visa consultancy operating from <strong>Office 12B, Executive Tower, Business Bay, Dubai, UAE</strong>. We serve UAE residents, Bangladeshi expatriates, and international travelers requiring{" "}
              <Link href="/visa/dubai-residents" className="text-[#004d2c] font-bold hover:underline">Dubai resident visa services</Link>,{" "}
              UAE Golden Visa processing, and global travel arrangements. Our Dubai office is the regional hub for Eammu Holidays — a global agency with branches in{" "}
              <Link href="/contact/travel-agency-bangladesh" className="text-[#004d2c] font-bold hover:underline">Bangladesh (Cumilla & Dhaka)</Link>,{" "}
              <Link href="/contact/travel-agency-armenia" className="text-[#004d2c] font-bold hover:underline">Armenia (Yerevan)</Link>, and{" "}
              <Link href="/contact/travel-agency-georgia" className="text-[#004d2c] font-bold hover:underline">Georgia (Tbilisi)</Link>.
            </p>
            <p>
              Our Dubai team specialises in visa processing for UAE residents travelling to{" "}
              <Link href="/visa/dubai-residents/albania" className="text-[#004d2c] font-bold hover:underline">Albania</Link>,{" "}
              <Link href="/visa/dubai-residents/andorra" className="text-[#004d2c] font-bold hover:underline">Andorra</Link>,{" "}
              <Link href="/visa/dubai-residents/armenia" className="text-[#004d2c] font-bold hover:underline">Armenia</Link>,{" "}
              <Link href="/visa/dubai-residents/serbia" className="text-[#004d2c] font-bold hover:underline">Serbia</Link>,{" "}
              <Link href="/visa/dubai-residents/kosovo" className="text-[#004d2c] font-bold hover:underline">Kosovo</Link>, and{" "}
              <Link href="/visa/india/kosovo" className="text-[#004d2c] font-bold hover:underline">India (for Kosovo passport holders)</Link>.
              We also cover all{" "}
              <Link href="/visa" className="text-[#004d2c] font-bold hover:underline">global visas</Link> including{" "}
              <Link href="/visa/visa-guide" className="text-[#004d2c] font-bold hover:underline">Schengen, UK, USA, and Canada</Link>.
              Students can explore{" "}
              <Link href="/study-abroad/student-visa" className="text-[#004d2c] font-bold hover:underline">student visa services</Link> and{" "}
              <Link href="/scholarships" className="text-[#004d2c] font-bold hover:underline">scholarship opportunities</Link>.
              If you've had a{" "}
              <Link href="/visa-rejection" className="text-[#004d2c] font-bold hover:underline">visa rejection</Link>, our Dubai consultants can analyse the refusal and build a stronger re-application.
            </p>
            <p>
              For real-time visa timelines, use our{" "}
              <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#004d2c] font-bold hover:underline">Visa Processing Time Tracker</Link>{" "}
              or generate a personalised{" "}
              <Link href="/travel-resources/visa-checklist-generator" className="text-[#004d2c] font-bold hover:underline">Visa Document Checklist</Link>.
              Read our latest{" "}
              <Link href="/blogs" className="text-[#004d2c] font-bold hover:underline">travel blog</Link> for visa guides and destination tips.
              Contact Dubai office: <a href="tel:+971507078334" className="text-[#004d2c] font-bold hover:underline">+971 50 707 8334</a> |{" "}
              <a href="https://wa.me/971507078334" className="text-[#004d2c] font-bold hover:underline">WhatsApp</a>
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            {[
              "Travel Agency Dubai", "Business Bay Visa Consultant", "UAE Golden Visa",
              "Dubai Resident Visa Albania", "Dubai Resident Visa Serbia", "Dubai Resident Visa Kosovo",
              "Schengen Visa Dubai", "UK Visa Dubai", "USA Visa Dubai", "India Visa Dubai",
              "Desert Safari Dubai", "Luxury Tours UAE", "Eammu Holidays Dubai",
            ].map((kw) => (
              <span key={kw} className="text-[11px] px-3 py-1 bg-slate-50 border border-slate-200 text-slate-500 font-semibold rounded-full">
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
        aria-label="Contact Eammu Holidays Dubai for visa and tour services"
        className="bg-white border-t border-slate-100 py-20 sm:py-24 px-4 sm:px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-[#c4a456] text-[#004d2c] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-5">
            Business Bay · 24/7 VIP Support
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#004d2c] mb-5">
            Need Expert Advice?
          </h2>
          <p className="text-slate-500 text-base mb-4 max-w-xl mx-auto leading-relaxed">
            Our Business Bay office is always open for visa queries, tour bookings, UAE Golden Visa, and Dubai resident travel planning.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm mb-10">
            {["✅ DED Licensed", "✅ 50+ Countries", "✅ 24/7 Support", "✅ High Approval Rate"].map((f) => (
              <span key={f} className="text-slate-500 font-semibold">{f}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <a
              href="tel:+971507078334"
              className="w-full sm:w-auto bg-[#004d2c] text-white px-10 py-4 rounded-2xl font-black text-base hover:bg-[#c4a456] hover:text-[#004d2c] transition-all flex items-center justify-center gap-3 shadow-2xl"
            >
              <PhoneCall size={20} /> Call Now
            </a>
            <a
              href="https://wa.me/971507078334"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white px-10 py-4 rounded-2xl font-black text-base hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-2xl"
            >
              <MessageCircle size={20} /> WhatsApp Now
            </a>
            <Link
              href="/visa/dubai-residents"
              className="w-full sm:w-auto bg-[#c4a456] text-[#004d2c] px-10 py-4 rounded-2xl font-black text-base hover:bg-[#004d2c] hover:text-white transition-all flex items-center justify-center gap-3 shadow-2xl"
            >
              <Globe size={20} /> Dubai Resident Visas
            </Link>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/971507078334"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Eammu Holidays Dubai"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 transition-all hover:scale-110"
      >
        <MessageCircle size={28} />
      </a>
    </main>
  );
};

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

const DubaiInfoCard = ({ icon, title, desc, color }) => (
  <div className="flex items-center gap-4 sm:gap-5">
    <div className={`p-3.5 ${color} rounded-2xl flex items-center justify-center shrink-0 shadow-lg`}>
      {React.cloneElement(icon, { size: 22 })}
    </div>
    <div>
      <h4 className="font-black text-[#004d2c] uppercase text-[10px] tracking-widest mb-0.5">{title}</h4>
      <p className="text-slate-600 font-bold text-sm leading-tight">{desc}</p>
    </div>
  </div>
);

const DetailedServiceCard = ({ icon, title, desc, points, href }) => (
  <Link href={href}>
    <div className="group bg-white p-7 sm:p-8 rounded-[2.5rem] shadow-xl border border-slate-50 hover:border-[#c4a456] transition-all flex flex-col cursor-pointer h-full">
      <div className="w-13 h-13 w-12 h-12 bg-slate-50 text-[#004d2c] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#004d2c] group-hover:text-[#c4a456] transition-all">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h3 className="text-lg font-black text-[#004d2c] mb-2 group-hover:text-[#c4a456] transition-colors">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-grow">{desc}</p>
      <div className="space-y-1.5 pt-4 border-t border-slate-100">
        {points.map((p, i) => (
          <div key={i} className="flex items-center gap-2 text-[10px] font-black text-[#004d2c]/60 uppercase tracking-tighter">
            <CheckCircle size={11} className="text-[#c4a456]" /> {p}
          </div>
        ))}
      </div>
    </div>
  </Link>
);

const TourCard = ({ img, title, duration, price }) => (
  <motion.div
    variants={fadeIn}
    className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-500"
  >
    <div className="relative h-56 overflow-hidden">
      <img
        src={img}
        alt={`${title} — Eammu Holidays Dubai`}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-4 right-4 bg-[#c4a456] text-[#004d2c] px-3 py-1.5 rounded-xl font-black shadow-lg text-sm">
        {price}
      </div>
    </div>
    <div className="p-7">
      <h3 className="text-xl font-black text-[#004d2c] mb-2">{title}</h3>
      <p className="text-[#c4a456] font-bold text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
        <Clock size={13} /> {duration}
      </p>
      <a
        href="https://wa.me/971507078334"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-[#004d2c] text-white py-3.5 rounded-2xl font-black hover:bg-[#c4a456] hover:text-[#004d2c] transition-all text-sm"
      >
        Book Now
      </a>
    </div>
  </motion.div>
);



export default TravelAgencyDubai;