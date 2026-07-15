"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Globe, Plane, ShieldCheck, MapPin,
  PhoneCall, MessageCircle, Mail, Clock, ArrowRight,
  Star, Users, Landmark, FileText, BadgeCheck, Compass,
  Coffee, Waves, Mountain, Camera, BookOpen, Building2,
  GraduationCap, ChevronDown, Navigation, Award, TrendingUp,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const slides = [
  {
    image: "https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&q=80",
    badge: "Trusted Excellence Since 2012",
    title: "Leading Travel Agency in Bangladesh",
    desc: "ভিসা প্রসেসিং থেকে বিশ্বভ্রমণ—আপনার প্রতিটি স্বপ্ন পূরণে Eammu Holidays আছে আপনার পাশে।",
    cta: "/visa",
    ctaText: "ভিসা সার্ভিস দেখুন",
  },
  {
    image: "https://ttg.com.bd/uploads/tours/destinations/6444446K.jpg",
    badge: "Premium Domestic Packages",
    title: "Explore the Beauty of Bangladesh",
    desc: "সাজেক ভ্যালি থেকে সুন্দরবন—সাশ্রয়ী মূল্যে সেরা ট্যুর প্যাকেজ বুক করুন আমাদের সাথে।",
    cta: "/offers",
    ctaText: "অফার দেখুন",
  },
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80",
    badge: "Expert Visa & Student Support",
    title: "Global Visa & Migration Experts",
    desc: "USA, UK, Canada ও ইউরোপের স্টুডেন্ট এবং ভিজিট ভিসা প্রসেসিংয়ে আমরাই সেরা। ১০,০০০+ সফল ক্লায়েন্ট।",
    cta: "/study-abroad/student-visa",
    ctaText: "স্টুডেন্ট ভিসা",
  },
];

const branches = [
  {
    id: "cumilla",
    tag: "🏢 Main Branch",
    name: "Cumilla Cantonment",
    address: "Gomoti Tower, Office-178, Cumilla Cantonment, Cumilla",
    phone: "+880 1701-699743",
    whatsapp: "8801701699743",
    hours: "শনি–বৃহঃ: সকাল ৯টা–রাত ৮টা · শুক্র: দুপুর ২টা–রাত ৮টা",
    hoursEn: "Sat–Thu: 9AM–8PM · Fri: 2PM–8PM",
    map: "https://maps.google.com/?q=Gomoti+Tower+Cumilla+Cantonment",
    color: "border-[#005a31]",
    tagColor: "bg-[#005a31] text-white",
  },
  {
    id: "dhaka",
    tag: "🏙️ Dhaka Branch",
    name: "Mirpur 12, Dhaka",
    address: "Mirpur 12, Dhaka, Bangladesh",
    phone: "+880 1631-312524",
    whatsapp: "8801631312524",
    hours: "শনি–বৃহঃ: সকাল ৯টা–রাত ৮টা",
    hoursEn: "Sat–Thu: 9AM–8PM",
    map: "https://maps.google.com/?q=Mirpur+12+Dhaka+Bangladesh",
    color: "border-orange-500",
    tagColor: "bg-orange-500 text-white",
  },
];

const tours = [
  {
    img: "https://images.unsplash.com/photo-1623945359624-946764d08f31?auto=format&fit=crop&q=80",
    title: "Sajek Valley Paradise",
    duration: "2 রাত / ৩ দিন",
    price: "৳৭,৫০০",
    location: "Rangamati",
    features: ["Resort Accommodation", "Jeep (Chander Gari) Rides", "All Meals Included", "Professional Guide"],
    icon: <Mountain className="text-blue-500" size={22} />,
  },
  {
    img: "https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&q=80",
    title: "Cox's Bazar Beach Luxury",
    duration: "৩ রাত / ৪ দিন",
    price: "৳৮,৯৯৯",
    location: "Chattogram",
    features: ["4 Star Sea-View Hotel", "Marine Drive Tour", "Inani & Himchari Visit", "Airport Transfers"],
    icon: <Waves className="text-cyan-500" size={22} />,
  },
  {
    img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/32/d3/98.jpg",
    title: "Srimangal Tea Heritage",
    duration: "১ রাত / ২ দিন",
    price: "৳৪,২০০",
    location: "Sylhet",
    features: ["Eco-Resort Stay", "Lawachara Forest Trek", "7 Layer Tea Tasting", "Cycle Tour in Tea Gardens"],
    icon: <Coffee className="text-emerald-500" size={22} />,
  },
  {
    img: "https://www.yoyotripsindia.com/images/package/eoHG24yCWc/banner3.jpg",
    title: "Sundarbans Jungle Safari",
    duration: "৩ রাত / ৪ দিন",
    price: "৳১২,৫০০",
    location: "Khulna",
    features: ["Cruise Ship Living", "Wildlife Tracking", "Kotka & Hiron Point", "Forest Permission Included"],
    icon: <Camera className="text-orange-500" size={22} />,
  },
  {
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/5e/1a/6b.jpg",
    title: "Old Dhaka Heritage",
    duration: "১ দিন (ফুল ডে)",
    price: "৳১,৮০০",
    location: "Dhaka",
    features: ["Lalbagh Fort Visit", "Ahsan Manzil Tour", "Traditional Lunch", "Rickshaw City Explore"],
    icon: <Landmark className="text-amber-700" size={22} />,
  },
  {
    img: "https://www.travelmate.com.bd/wp-content/uploads/2018/07/maxresdefault-2.jpg",
    title: "Kaptai Lake Cruise",
    duration: "১ রাত / ২ দিন",
    price: "৳৫,৫০০",
    location: "Rangamati",
    features: ["Boat House Experience", "Shuvolong Waterfall", "Island Lunch", "Tribal Handicrafts Visit"],
    icon: <Compass className="text-indigo-500" size={22} />,
  },
];

// Internal links drawn from sitemap
const internalLinks = [
  { href: "/visa",                                          icon: <Globe size={15} />,         label: "All Visa Services",                    desc: "UK, Dubai, Schengen, India & more" },
  { href: "/visa/e-visa",                                   icon: <FileText size={15} />,       label: "E-Visa Services",                      desc: "Fast online visa processing" },
  { href: "/visa/visa-guide",                               icon: <BookOpen size={15} />,       label: "Visa Guides",                          desc: "Step-by-step country guides" },
  { href: "/study-abroad",                                  icon: <GraduationCap size={15} />,  label: "Study Abroad",                         desc: "UK, USA, Canada, Australia" },
  { href: "/study-abroad/student-visa",                     icon: <Award size={15} />,          label: "Student Visa",                         desc: "University admission support" },
  { href: "/offers",                                        icon: <TrendingUp size={15} />,     label: "Latest Offers",                        desc: "Deals on tours & visa packages" },
  { href: "/visa/dubai-residents",                          icon: <Building2 size={15} />,      label: "Dubai Resident Visas",                 desc: "Visas for UAE residents" },
  { href: "/visa/india",                                    icon: <MapPin size={15} />,         label: "India Visa",                           desc: "e-Visa & sticker visa for India" },
  { href: "/target-ielts-immigration-center",               icon: <BookOpen size={15} />,       label: "IELTS & Immigration Center",           desc: "IELTS prep & immigration support" },
  { href: "/target-usa-visa-interview-preparation",         icon: <Users size={15} />,          label: "USA Visa Interview Prep",              desc: "Mock interview & coaching" },
  { href: "/visa-rejection",                                icon: <ShieldCheck size={15} />,    label: "Visa Rejection Help",                  desc: "Re-application & appeal support" },
  { href: "/scholarships",                                  icon: <Star size={15} />,           label: "Scholarships",                         desc: "Funded study opportunities abroad" },
  { href: "/travel-resources/visa-processing-time-tracker", icon: <Clock size={15} />,          label: "Processing Time Tracker",              desc: "Check real visa timelines" },
  { href: "/travel-resources/visa-checklist-generator",     icon: <CheckCircle size={15} />,    label: "Visa Checklist Generator",             desc: "Personalised document checklist" },
  { href: "/online-travel-agency-bangladesh",               icon: <Navigation size={15} />,     label: "Online Travel Agency",                 desc: "Book tours & visas online" },
  { href: "/contact/travel-agency-armenia",                 icon: <Plane size={15} />,          label: "Our Armenia Office",                   desc: "Lambron 39, Yerevan" },
  { href: "/contact/travel-agency-georgia",                 icon: <Plane size={15} />,          label: "Our Georgia Office",                   desc: "Tbilisi, Georgia" },
  { href: "/contact/travel-agency-dubai",                   icon: <Plane size={15} />,          label: "Our Dubai Office",                     desc: "UAE travel services" },
  { href: "/testimonials",                                  icon: <Star size={15} />,           label: "Client Testimonials",                  desc: "10,000+ happy travelers" },
  { href: "/blogs",                                         icon: <BookOpen size={15} />,       label: "Travel Blog",                          desc: "Visa guides & travel tips" },
];

const visaServices = [
  { href: "/visa",              icon: <Globe />,        title: "All Visa Services",   desc: "UK, USA, Canada, Dubai, Schengen, India ও আরো দেশের ভিসা সার্ভিস এক জায়গায়।" },
  { href: "/study-abroad/student-visa", icon: <GraduationCap />, title: "Student Visa", desc: "USA, Canada, UK ও ইউরোপের সেরা বিশ্ববিদ্যালয়ে ভর্তি ও ভিসা সহায়তা।" },
  { href: "/visa/e-visa",       icon: <FileText />,     title: "E-Visa Processing",   desc: "দুবাই, থাইল্যান্ড, মালয়েশিয়া ও ভারতের দ্রুততম ই-ভিসা সার্ভিস।" },
  { href: "/visa-rejection",    icon: <BadgeCheck />,   title: "Visa Rejection Help", desc: "ভিসা রিজেকশনের পর পুনরায় আবেদন ও আপিলে বিশেষজ্ঞ সহায়তা।" },
];

const faqs = [
  {
    q: "Eammu Holidays-এর বাংলাদেশে কোথায় অফিস আছে?",
    a: "Eammu Holidays-এর বাংলাদেশে দুটি অফিস রয়েছে: (১) প্রধান শাখা — Gomoti Tower, Office-178, Cumilla Cantonment, Cumilla। (২) ঢাকা শাখা — Mirpur 12, Dhaka। উভয় অফিস শনি থেকে বৃহস্পতিবার সকাল ৯টা থেকে রাত ৮টা পর্যন্ত খোলা থাকে।",
  },
  {
    q: "Eammu Holidays কি Dubai ভিসা প্রসেস করে?",
    a: "হ্যাঁ। আমরা কুমিল্লা ও ঢাকা উভয় অফিস থেকে Dubai tourist ও visit ভিসা প্রসেস করি। সাধারণত ৩–৫ কর্মদিনে ভিসা হয়। সকল ডকুমেন্টেশন, অনলাইন সাবমিশন ও ফলো-আপ আমরাই করি। বিস্তারিত জানতে: /visa/dubai-residents পেজ দেখুন।",
  },
  {
    q: "UK Student Visa-এ Eammu Holidays কীভাবে সাহায্য করে?",
    a: "আমরা CAS letter গাইডেন্স, IELTS রেফারেল, ব্যাংক স্টেটমেন্ট রিভিউ, TB টেস্ট কোঅর্ডিনেশন এবং সম্পূর্ণ application filing সহ UK student visa-এর প্রতিটি ধাপে সহায়তা করি। আমাদের IELTS সেন্টারেও ভর্তি নিতে পারেন: /target-ielts-immigration-center",
  },
  {
    q: "Eammu Holidays কি Umrah প্যাকেজ অফার করে?",
    a: "হ্যাঁ। বাংলাদেশ থেকে Umrah প্যাকেজ BDT ১,২০,০০০ থেকে শুরু। ফ্লাইট, Umrah ভিসা, মক্কা ও মদিনায় ৩–৫ স্টার হোটেল এবং গাইড সহ অল-ইনক্লুসিভ প্যাকেজ পাওয়া যায়। কুমিল্লা ও ঢাকা — উভয় অফিস থেকে বুকিং দেওয়া যাবে।",
  },
  {
    q: "ভিসা রিজেকশন হলে Eammu Holidays কি সাহায্য করতে পারবে?",
    a: "হ্যাঁ। আমাদের বিশেষজ্ঞ কনসালট্যান্ট রিজেকশনের কারণ বিশ্লেষণ করে পুনরায় আবেদনের কৌশল তৈরি করেন। বিস্তারিত জানুন: /visa-rejection পেজে।",
  },
  {
    q: "Eammu Holidays-এ কীভাবে যোগাযোগ করব?",
    a: "কুমিল্লা মেইন অফিস: +880 1701-699743 | ঢাকা (Mirpur 12): +880 1631-312524 | WhatsApp: +880 1631-312524 | Email: info@eammu.com। সরাসরি অফিসে এসেও পরামর্শ নিতে পারেন।",
  },
];

const trustStats = [
  { number: "10,000+", label: "Happy Clients",       icon: "😊" },
  { number: "1,200+",  label: "Visas Approved",       icon: "✅" },
  { number: "15+",     label: "Tour Destinations",    icon: "🗺️" },
  { number: "24/7",    label: "Active Support",       icon: "📱" },
];

const fadeIn = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
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
      className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:border-[#005a31]/20 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left focus:outline-none"
        aria-expanded={open}
      >
        <span className={`font-bold text-sm md:text-base transition-colors ${open ? "text-[#005a31]" : "text-slate-800"}`}>
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 mt-0.5 text-[#005a31] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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
const TravelAgencyBangladesh = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">

      {/* ══════════════════════════════════════════
          HERO CAROUSEL
      ══════════════════════════════════════════ */}
      <section
        aria-label="Eammu Holidays Bangladesh travel agency hero"
        className="relative h-[70vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-[#005a31]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#005a31]/70 via-[#005a31]/60 to-[#005a31]/90" />
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-20 text-center px-4 max-w-5xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest mb-6 inline-block shadow-2xl">
                {slides[currentSlide].badge}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-5 text-white leading-tight drop-shadow-xl">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg sm:text-xl text-white/95 mb-10 font-medium max-w-3xl mx-auto leading-relaxed">
                {slides[currentSlide].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link
              href={slides[currentSlide].cta}
              className="bg-orange-500 hover:bg-white hover:text-[#005a31] text-white px-10 py-4 rounded-2xl font-black text-base transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              {slides[currentSlide].ctaText} <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+971507078334"
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-[#005a31] px-10 py-4 rounded-2xl font-black text-base transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall size={18} /> কল করুন
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-8 flex gap-3 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 focus:outline-none ${i === currentSlide ? "w-12 bg-orange-500" : "w-4 bg-white/40"}`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT STRIP
      ══════════════════════════════════════════ */}
      <section
        aria-label="Eammu Holidays Bangladesh office contacts"
        className="relative z-30 -mt-14 sm:-mt-16 max-w-7xl mx-auto px-4 sm:px-6 mb-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <InfoCard icon={<MapPin />}        title="Cumilla Main Office"  desc="Gomoti Tower (178), Cumilla Cantonment" color="bg-[#005a31]" />
          <InfoCard icon={<Building2 />}     title="Dhaka Branch"         desc="Mirpur 12, Dhaka, Bangladesh"           color="bg-orange-500" />
          <InfoCard icon={<MessageCircle />} title="WhatsApp Support"     desc="+880 1631-312524"                        color="bg-[#25D366]" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRUST STATS
      ══════════════════════════════════════════ */}
      <section
        aria-label="Eammu Holidays Bangladesh achievements"
        className="max-w-7xl mx-auto px-4 sm:px-6 mb-20"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {trustStats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeIn}
              className="text-center bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-3xl p-6 shadow-sm"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#005a31]">{s.number}</div>
              <div className="text-xs font-bold text-gray-500 mt-1 uppercase tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          TWO BRANCH OFFICES
      ══════════════════════════════════════════ */}
      <section
        aria-label="Eammu Holidays branch offices in Bangladesh"
        className="max-w-7xl mx-auto px-4 sm:px-6 mb-20"
      >
        <div className="text-center mb-10">
          <span className="text-orange-500 text-xs font-black uppercase tracking-widest">আমাদের অফিস</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mt-2">
            Bangladesh Branch Offices
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
            কুমিল্লা ক্যান্টনমেন্ট (প্রধান শাখা) ও মিরপুর ১২, ঢাকা — দুটি অফিসে সরাসরি এসে পরামর্শ নিন।
          </p>
          <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {branches.map((b) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`bg-white rounded-3xl border-2 ${b.color} p-6 sm:p-8 shadow-lg`}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <span className={`text-xs font-black px-3 py-1 rounded-full ${b.tagColor} mb-2 inline-block`}>
                    {b.tag}
                  </span>
                  <h3 className="text-xl font-black text-[#005a31]">{b.name}</h3>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: <MapPin size={15} />,    val: b.address },
                  { icon: <PhoneCall size={15} />, val: b.phone },
                  { icon: <Clock size={15} />,     val: b.hoursEn },
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="text-orange-500 mt-0.5 shrink-0">{row.icon}</div>
                    <span className="text-slate-600 text-sm font-medium">{row.val}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href={`https://wa.me/${b.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-2xl font-black text-sm transition hover:bg-green-600"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a
                  href={b.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-[#005a31] text-[#005a31] py-3 rounded-2xl font-black text-sm transition hover:bg-[#005a31] hover:text-white"
                >
                  <Navigation size={16} /> Google Maps
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VISA SERVICES — WITH INTERNAL LINKS
      ══════════════════════════════════════════ */}
      <section
        aria-label="Visa processing services by Eammu Holidays Bangladesh"
        className="py-20 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="text-center mb-14">
          <span className="text-orange-500 text-xs font-black uppercase tracking-widest">আমাদের সেবা</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mt-2 mb-4">
            ভিসা প্রসেসিং ও কনসালটেন্সি
          </h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full" />
          <p className="mt-5 text-slate-500 text-sm max-w-2xl mx-auto">
            UK, USA, Canada, Dubai, Schengen সহ ৫০+ দেশের ভিসা প্রসেসিং সেবা — কুমিল্লা ও ঢাকা অফিস থেকে।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visaServices.map((s) => (
            <Link key={s.href} href={s.href}>
              <div className="group bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-lg border border-slate-50 hover:border-orange-500 hover:shadow-xl transition-all h-full cursor-pointer">
                <div className="w-14 h-14 bg-slate-50 text-[#005a31] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#005a31] group-hover:text-white transition-all">
                  {React.cloneElement(s.icon, { size: 28 })}
                </div>
                <h3 className="text-xl font-black text-[#005a31] mb-3 group-hover:text-orange-500 transition-colors">{s.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-orange-500 text-xs font-black uppercase tracking-wider">
                  জানুন <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TOUR PACKAGES
      ══════════════════════════════════════════ */}
      <section
        aria-label="Domestic Bangladesh tour packages from Eammu Holidays"
        className="bg-slate-50 py-20 sm:py-24 px-4 sm:px-6 border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-black uppercase tracking-tighter text-xs">Premium Local Experiences</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mt-2">Explore Bangladesh Packages</h2>
            <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
              কুমিল্লা ও ঢাকা অফিস থেকে বুকিং করুন। সকল প্যাকেজে গাইড, ট্রান্সপোর্ট ও আবাসন অন্তর্ভুক্ত।
            </p>
            <div className="w-24 h-2 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            {tours.map((t) => (
              <TourCard key={t.title} {...t} />
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/offers"
              className="inline-flex items-center gap-2 bg-[#005a31] text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-green-800 transition shadow-lg uppercase tracking-wide"
            >
              সকল অফার দেখুন <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRUST / WHY US
      ══════════════════════════════════════════ */}
      <section
        aria-label="Why choose Eammu Holidays as your travel agency in Bangladesh"
        className="py-20 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <div>
          <span className="text-orange-500 font-black uppercase tracking-widest text-xs">কেন আমাদের বেছে নেবেন?</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mt-3 mb-6 leading-tight">
            নির্ভরযোগ্যতার সাথে <br /> আপনার যাত্রা নিশ্চিত করুন
          </h2>
          <p className="text-slate-600 text-base mb-8 leading-relaxed">
            ইম্মু হলিডেজ শুধু একটি এজেন্সি নয়, বরং আপনার ভ্রমণের প্রতিটি ধাপে এক বিশ্বস্ত সহযোগী। কুমিল্লা ক্যান্টনমেন্টের প্রধান শাখা ও মিরপুর ১২ ঢাকার শাখায় সরাসরি এসে পরামর্শ নিতে পারেন।
          </p>
          <div className="space-y-4">
            {[
              { icon: <ShieldCheck />, text: "৯৫% ভিসা অ্যাপ্রুভাল রেট — বাংলাদেশের সেরা" },
              { icon: <Star />,        text: "১০,০০০+ সন্তুষ্ট ক্লায়েন্ট — ২০২২ সাল থেকে" },
              { icon: <Globe />,       text: "৫০+ দেশের ভিসা ও ট্যুর সার্ভিস" },
              { icon: <PhoneCall />,   text: "২৪/৭ সাপোর্ট — WhatsApp ও ফোনে" },
              { icon: <Award />,       text: "ATAB নিবন্ধিত ট্রাভেল এজেন্সি" },
              { icon: <CheckCircle />, text: "Cumilla ও Dhaka — দুটি ফিজিক্যাল অফিস" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="text-orange-500 group-hover:scale-125 transition-transform shrink-0">
                  {React.cloneElement(item.icon, { size: 22 })}
                </div>
                <span className="text-slate-700 font-bold text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <a
              href="https://wa.me/8801631312524"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-3xl font-black shadow-xl hover:bg-green-600 transition"
            >
              <MessageCircle size={20} /> WhatsApp করুন
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-[#005a31] text-[#005a31] px-8 py-4 rounded-3xl font-black hover:bg-[#005a31] hover:text-white transition"
            >
              <Mail size={18} /> Contact Page
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80"
            className="rounded-[3rem] shadow-2xl border-8 border-white w-full object-cover"
            alt="Eammu Holidays office Cumilla Bangladesh"
          />
          <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-8 sm:p-10 rounded-3xl shadow-2xl">
            <Star size={36} className="mb-2" />
            <p className="text-3xl font-black">4.9/5</p>
            <p className="font-bold text-xs uppercase">Google Rating</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTERNAL LINK HUB
      ══════════════════════════════════════════ */}
      <section
        aria-label="Eammu Holidays all services and resources"
        className="bg-[#005a31] py-16 sm:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-400 text-xs font-black uppercase tracking-widest">সকল সেবা</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Eammu Holidays — All Services & Resources
            </h2>
            <p className="text-green-200 text-sm mt-3 max-w-xl mx-auto">
              ভিসা, স্টুডেন্ট ভিসা, ট্যুর প্যাকেজ, IELTS সেন্টার, ভিসা রিজেকশন সাপোর্ট — সবকিছু এক জায়গায়।
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {internalLinks.map((link) => (
              <motion.div key={link.href} variants={fadeIn}>
                <Link href={link.href}>
                  <div className="group bg-white/10 hover:bg-white/20 backdrop-blur rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all cursor-pointer h-full">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-orange-400 group-hover:scale-110 transition-transform shrink-0">
                        {link.icon}
                      </div>
                      <span className="text-white font-black text-xs leading-tight">{link.label}</span>
                    </div>
                    <p className="text-green-200 text-[11px] leading-relaxed">{link.desc}</p>
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
        aria-label="Frequently asked questions about Eammu Holidays Bangladesh"
        className="py-16 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <span className="text-orange-500 text-xs font-black uppercase tracking-widest">প্রশ্ন ও উত্তর</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mt-2">
            সচরাচর জিজ্ঞাসা (FAQ)
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
            Eammu Holidays-এর ভিসা সার্ভিস, অফিস লোকেশন ও ট্যুর প্যাকেজ সম্পর্কে সবচেয়ে বেশি জিজ্ঞাসিত প্রশ্নগুলোর উত্তর।
          </p>
          <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full mt-4" />
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://wa.me/8801631312524"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#005a31] text-white px-10 py-4 rounded-2xl font-black hover:bg-green-800 transition shadow-lg uppercase tracking-wide text-sm"
          >
            <MessageCircle size={18} /> WhatsApp-এ প্রশ্ন করুন
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEO RICH TEXT FOOTER
      ══════════════════════════════════════════ */}
      <section
        aria-label="About Eammu Holidays travel agency Bangladesh"
        className="py-4 pb-16 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="bg-gray-50 rounded-3xl border border-gray-100 p-7 md:p-10">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">
            Eammu Holidays — বাংলাদেশের বিশ্বস্ত ট্রাভেল এজেন্সি (Cumilla & Dhaka)
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed max-w-5xl">
            <p>
              <strong className="text-gray-800">Eammu Holidays</strong> বাংলাদেশের একটি ATAB-নিবন্ধিত ট্রাভেল ও ভিসা কনসালটেন্সি। আমাদের <strong>প্রধান শাখা কুমিল্লা ক্যান্টনমেন্টের Gomoti Tower (অফিস-১৭৮)</strong>-এ এবং <strong>দ্বিতীয় শাখা মিরপুর ১২, ঢাকা</strong>-তে অবস্থিত। ২০২২ সাল থেকে আমরা ১০,০০০+ ক্লায়েন্টকে সফলভাবে সেবা দিয়েছি — যার মধ্যে রয়েছে{" "}
              <Link href="/study-abroad/student-visa" className="text-[#005a31] font-bold hover:underline">স্টুডেন্ট ভিসা</Link>,{" "}
              <Link href="/visa/e-visa" className="text-[#005a31] font-bold hover:underline">ই-ভিসা প্রসেসিং</Link>,{" "}
              <Link href="/offers" className="text-[#005a31] font-bold hover:underline">Umrah প্যাকেজ</Link>, ও আন্তর্জাতিক ট্যুর।
            </p>
            <p>
              আমাদের বিশেষজ্ঞ ভিসা কনসালট্যান্টরা <strong>UK, USA, Canada, Australia, Schengen (ইউরোপ), Dubai (UAE), Malaysia</strong> ও অন্যান্য ৫০+ দেশের ভিসার জন্য পূর্ণ সহায়তা প্রদান করেন — ডকুমেন্ট চেকলিস্ট থেকে শুরু করে এম্বাসি সাবমিশন পর্যন্ত। ভিসা রিজেকশন হলেও আমরা{" "}
              <Link href="/visa-rejection" className="text-[#005a31] font-bold hover:underline">পুনরায় আবেদনে সাহায্য করি</Link>। IELTS প্রস্তুতির জন্য আমাদের{" "}
              <Link href="/target-ielts-immigration-center" className="text-[#005a31] font-bold hover:underline">Target IELTS & Immigration Center</Link> এবং{" "}
              <Link href="/target-usa-visa-interview-preparation" className="text-[#005a31] font-bold hover:underline">USA Visa Interview Preparation</Link> সেন্টারেও যোগাযোগ করতে পারেন।
            </p>
            <p>
              বাংলাদেশের মধ্যে ভ্রমণের জন্য Cox's Bazar, Sajek Valley, Sundarbans ও Srimangal-সহ সেরা ট্যুর প্যাকেজও আমাদের কাছে পাওয়া যায়। ভিসা সংক্রান্ত যেকোনো গাইডের জন্য আমাদের{" "}
              <Link href="/visa/visa-guide" className="text-[#005a31] font-bold hover:underline">Visa Guide</Link> ও{" "}
              <Link href="/blogs" className="text-[#005a31] font-bold hover:underline">Travel Blog</Link> পড়ুন।
              যোগাযোগ: <a href="tel:+971507078334" className="text-[#005a31] font-bold hover:underline">+880 1701-699743</a> (Cumilla) |{" "}
              <a href="https://wa.me/8801631312524" className="text-[#005a31] font-bold hover:underline">+880 1631-312524</a> (Dhaka / WhatsApp)
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            {[
              "Travel Agency Cumilla", "Travel Agency Dhaka Mirpur", "Visa Services Bangladesh",
              "Dubai Visa Bangladesh", "UK Student Visa Cumilla", "Umrah Package Bangladesh",
              "Schengen Visa Bangladesh", "Canada PR Bangladesh", "Cox's Bazar Tour Package",
              "Sajek Valley Tour", "Online Travel Agency Bangladesh", "Eammu Holidays",
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
        aria-label="Book visa or tour with Eammu Holidays Bangladesh"
        className="relative bg-[#005a31] rounded-[2.5rem] mx-4 sm:mx-6 max-w-7xl lg:mx-auto mb-12 p-8 md:p-14 text-center text-white overflow-hidden"
      >
        <div className="relative z-10 space-y-5">
          <span className="inline-block px-4 py-1.5 bg-orange-500 text-white rounded-full text-xs font-black uppercase tracking-wider">
            Cumilla · Mirpur 12 Dhaka · ২৪/৭ সাপোর্ট
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold">
            আজই যোগাযোগ করুন — ফ্রি পরামর্শ নিন
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">
            ভিসা প্রসেসিং, Umrah প্যাকেজ, স্টুডেন্ট ভিসা বা ডোমেস্টিক ট্যুর — যেকোনো প্রয়োজনে Eammu Holidays আছে আপনার পাশে।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm pt-1">
            {["✅ ATAB নিবন্ধিত", "✅ ৯৫% ভিসা সাফল্য", "✅ ২৪/৭ সাপোর্ট", "✅ ফ্রি কনসালটেশন"].map((f) => (
              <span key={f} className="text-green-200 font-semibold">{f}</span>
            ))}
          </div>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <a
            href="https://wa.me/8801631312524"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-green-400 transition shadow-lg flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} /> WhatsApp করুন
          </a>
          <a
            href="tel:+971507078334"
            className="w-full sm:w-auto bg-white/10 border border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 transition flex items-center justify-center gap-2"
          >
            <PhoneCall size={18} /> কল করুন
          </a>
          <Link
            href="/visa"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-400 text-white px-10 py-4 rounded-2xl font-black text-sm transition flex items-center justify-center gap-2"
          >
            <Globe size={18} /> ভিসা সার্ভিস
          </Link>
        </div>
        <div className="absolute -bottom-14 -right-14 w-60 h-60 bg-orange-500 rounded-full blur-[80px] opacity-10 pointer-events-none" />
        <div className="absolute -top-14 -left-14 w-60 h-60 bg-green-300 rounded-full blur-[80px] opacity-10 pointer-events-none" />
      </section>

   
    </main>
  );
};

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

const InfoCard = ({ icon, title, desc, color }) => (
  <div className="bg-white p-5 sm:p-7 rounded-[2rem] shadow-xl flex items-center gap-4 border border-slate-100 hover:-translate-y-2 transition-transform duration-500">
    <div className={`${color} text-white p-3.5 rounded-2xl shrink-0`}>
      {React.cloneElement(icon, { size: 22 })}
    </div>
    <div className="min-w-0">
      <h4 className="text-gray-400 text-[10px] font-black uppercase tracking-tighter">{title}</h4>
      <p className="text-[#005a31] font-black text-base leading-tight truncate">{desc}</p>
    </div>
  </div>
);

const TourCard = ({ img, title, duration, price, location, features, icon }) => (
  <motion.div
    variants={fadeIn}
    className="group bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-100 flex flex-col"
  >
    <div className="relative h-56 overflow-hidden">
      <img
        src={img}
        alt={`${title} — Eammu Holidays Bangladesh`}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full font-black text-[#005a31] shadow-xl text-sm">
        {price}
      </div>
      <div className="absolute bottom-5 left-5 bg-orange-500 text-white px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-lg">
        <MapPin size={12} /> {location}
      </div>
    </div>
    <div className="p-7 flex-grow flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-black text-[#005a31]">{title}</h3>
        <div className="mt-0.5 shrink-0">{icon}</div>
      </div>
      <p className="text-orange-500 font-bold mb-5 flex items-center gap-2 text-xs uppercase tracking-widest">
        <Clock size={14} /> {duration}
      </p>
      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-500 text-xs font-medium">
            <CheckCircle className="text-green-500 shrink-0" size={14} /> {f}
          </li>
        ))}
      </ul>
      <a
        href="https://wa.me/8801631312524"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-slate-100 hover:bg-[#005a31] hover:text-white text-[#005a31] py-4 rounded-2xl font-black transition-all text-sm"
      >
        প্যাকেজ বুক করুন
      </a>
    </div>
  </motion.div>
);

export default TravelAgencyBangladesh;