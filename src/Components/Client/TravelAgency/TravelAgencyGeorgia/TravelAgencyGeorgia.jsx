"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Globe, Plane, ShieldCheck, MapPin, PhoneCall,
  MessageCircle, Mail, Clock, Briefcase, Landmark, GraduationCap,
  ArrowRight, ChevronDown, Star, Navigation, FileText,
  BookOpen, Award, Building2, TrendingUp, Users, Camera,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const slides = [
  {
    image: "https://visitgeorgia.ge/wp-content/uploads/2-4.png",
    badge: "Your Bridge to Tbilisi",
    title: "Trusted Travel Partner in Georgia",
    desc: "Navigating Georgia's tourism and business landscape made easy. Expert TRC, visa, and tour solutions from our Tbilisi office.",
    cta: "/study-abroad",
    ctaText: "Study in Georgia",
  },
  {
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2000&auto=format&fit=crop",
    badge: "Business & Residency",
    title: "Georgia TRC & Business Setup",
    desc: "Get your Temporary Residence Permit and legal business license with our certified PRO team in Tbilisi.",
    cta: "/visa",
    ctaText: "Visa Services",
  },
  {
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2000&auto=format&fit=crop",
    badge: "Study in Europe's Gateway",
    title: "Student Consultancy Georgia",
    desc: "Direct admissions to top-ranked medical and engineering universities in Tbilisi with full documentation support.",
    cta: "/study-abroad/student-visa",
    ctaText: "Apply Now",
  },
];

const services = [
  {
    href: "/visa",
    icon: <Briefcase />,
    title: "Business Visa & Setup",
    desc: "End-to-end support for business formation, commercial visas, and company registration in Georgia.",
    points: ["Trade License", "Bank Account Support", "Legal Documentation"],
  },
  {
    href: "/study-abroad/student-visa",
    icon: <GraduationCap />,
    title: "Study in Georgia",
    desc: "Top-tier consultancy for Bangladeshi and international students seeking admissions in Tbilisi universities.",
    points: ["Medical & Engineering", "Document Apostille", "Student Visa Filing"],
  },
  {
    href: "/visa",
    icon: <Landmark />,
    title: "TRC & Residency",
    desc: "Expert guidance for Temporary Residence Permits and long-term legal stay in Georgia.",
    points: ["Investment Route", "Employment Route", "Public Service Hall"],
  },
  {
    href: "/offers",
    icon: <Globe />,
    title: "Tours — Batumi & Kazbegi",
    desc: "Guided tours to Black Sea Batumi, Kazbegi mountains, Kakheti wine region, and Mtskheta UNESCO site.",
    points: ["Bengali-Speaking Guide", "Hotel + Transport", "Custom Itineraries"],
  },
  {
    href: "/visa/visa-guide",
    icon: <ShieldCheck />,
    title: "Schengen / UK Visas",
    desc: "Processing Schengen, UK, USA, and Canada visas for Georgia-based clients and expatriates.",
    points: ["Document Review", "Embassy Appointments", "Interview Prep"],
  },
  {
    href: "/visa-rejection",
    icon: <FileText />,
    title: "Visa Rejection Support",
    desc: "Visa refused? Our consultants analyse the refusal and rebuild a stronger re-application strategy.",
    points: ["Refusal Analysis", "Re-application Filing", "Appeal Support"],
  },
  {
    href: "/scholarships",
    icon: <Award />,
    title: "Scholarships",
    desc: "Guidance on funded study programmes in Georgia and Europe for Bangladeshi students.",
    points: ["Full & Partial Funding", "Application Strategy", "Document Prep"],
  },
  {
    href: "/online-travel-agency-bangladesh",
    icon: <Plane />,
    title: "Flight & Hotel Booking",
    desc: "Competitive flight bookings from Tbilisi to Dhaka, Dubai, and worldwide destinations.",
    points: ["Best Fare Search", "Group Bookings", "Hotel Partnerships"],
  },
];

const tours = [
  { title: "Tbilisi City Tour",           duration: "1 Day",  img: "https://www.advantour.com/img/georgia/images/tbilisi.jpg" },
  { title: "Mtskheta Heritage Tour",      duration: "1 Day",  img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/16/40/15/e8.jpg" },
  { title: "Kazbegi Mountain Adventure",  duration: "2 Days", img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/15/73/b0/36.jpg" },
  { title: "Batumi & Black Sea Tour",     duration: "2 Days", img: "https://cdn.sanity.io/images/nxpteyfv/goguides/730a0b0e027f8a02a6a6eb16a2dfda803852fc2a-1600x1066.jpg" },
  { title: "Wine & Kakheti Valley",       duration: "1 Day",  img: "https://eurasia.travel/wp-content/uploads/2025/04/19.-Tusheti-Kakheti-region-Georgia.jpg" },
  { title: "Uplistsikhe & Gori Tour",     duration: "1 Day",  img: "https://georgiantour.com/wp-content/uploads/2015/03/ufliscixe.jpg" },
];

const trustStats = [
  { number: "5,000+", label: "Georgia Tours Completed", icon: "🏔️" },
  { number: "98%",    label: "Client Satisfaction",     icon: "⭐" },
  { number: "24/7",   label: "WhatsApp Support",        icon: "📱" },
  { number: "365",    label: "Visa-Free Days (BD)",     icon: "✈️" },
];

const georgiaFacts = [
  { icon: "🍷", title: "World's Oldest Wine Region",      desc: "Georgia's Kakheti valley has been producing wine for 8,000 years — the birthplace of wine culture." },
  { icon: "🏔️", title: "Greater Caucasus Mountains",      desc: "Mount Shkhara (5,193m) is Georgia's highest peak. Kazbegi offers stunning views of Mt Kazbek year-round." },
  { icon: "✝️", title: "One of the Oldest Christian Nations", desc: "Georgia adopted Christianity as its state religion in 337 AD, making it one of the earliest Christian nations." },
  { icon: "🎭", title: "UNESCO World Heritage Sites",     desc: "Georgia has 4 UNESCO sites including the Upper Svaneti and the historic town of Mtskheta — the ancient capital." },
  { icon: "🌍", title: "Visa-Free for 98 Countries",      desc: "Georgia offers visa-free or visa-on-arrival access to citizens of 98+ countries including Bangladesh (365 days)." },
  { icon: "💰", title: "Low Cost of Living",              desc: "Tbilisi is one of Europe's most affordable capitals — daily costs ~$30–50 for tourists, ideal for long stays." },
];

const internalLinks = [
  { href: "/visa",                                          icon: <ShieldCheck size={15} />,   label: "All Visa Services",              desc: "50+ countries covered" },
  { href: "/visa/e-visa",                                   icon: <FileText size={15} />,      label: "E-Visa Processing",              desc: "Fast online visas" },
  { href: "/visa/visa-guide",                               icon: <BookOpen size={15} />,      label: "Visa Guides",                    desc: "Step-by-step guides" },
  { href: "/study-abroad",                                  icon: <GraduationCap size={15} />, label: "Study Abroad",                   desc: "UK, USA, Canada, Georgia" },
  { href: "/study-abroad/student-visa",                     icon: <Award size={15} />,         label: "Student Visa",                   desc: "University admissions" },
  { href: "/scholarships",                                  icon: <Star size={15} />,          label: "Scholarships",                   desc: "Funded study abroad" },
  { href: "/visa-rejection",                                icon: <ShieldCheck size={15} />,   label: "Visa Rejection Help",            desc: "Re-application support" },
  { href: "/target-ielts-immigration-center",               icon: <BookOpen size={15} />,      label: "IELTS & Immigration Center",     desc: "IELTS prep & support" },
  { href: "/target-usa-visa-interview-preparation",         icon: <Users size={15} />,         label: "USA Visa Interview Prep",        desc: "Mock interview coaching" },
  { href: "/offers",                                        icon: <TrendingUp size={15} />,    label: "Latest Offers",                  desc: "Tour & visa deals" },
  { href: "/travel-resources/visa-processing-time-tracker", icon: <Clock size={15} />,         label: "Processing Time Tracker",        desc: "Real visa timelines" },
  { href: "/travel-resources/visa-checklist-generator",     icon: <CheckCircle size={15} />,   label: "Visa Checklist Generator",       desc: "Document checklist tool" },
  { href: "/online-travel-agency-bangladesh",               icon: <Navigation size={15} />,    label: "Online Travel Agency",           desc: "Book tours & visas online" },
  { href: "/contact/travel-agency-dubai",                   icon: <Building2 size={15} />,     label: "Our Dubai Office",               desc: "Business Bay, UAE" },
  { href: "/contact/travel-agency-armenia",                 icon: <Plane size={15} />,         label: "Our Armenia Office",             desc: "Lambron 39, Yerevan" },
  { href: "/contact/travel-agency-bangladesh",              icon: <MapPin size={15} />,        label: "Our Bangladesh Offices",         desc: "Cumilla & Dhaka" },
  { href: "/visa/dubai-residents",                          icon: <Globe size={15} />,         label: "Dubai Resident Visas",           desc: "Visas for UAE residents" },
  { href: "/blogs",                                         icon: <BookOpen size={15} />,      label: "Travel Blog",                    desc: "Visa guides & tips" },
  { href: "/testimonials",                                  icon: <Star size={15} />,          label: "Client Testimonials",            desc: "10,000+ happy travelers" },
  { href: "/news-feeds",                                    icon: <TrendingUp size={15} />,    label: "Travel News",                    desc: "Latest visa updates" },
  { href: "/contact",                                       icon: <MessageCircle size={15} />, label: "All Offices & Contact",          desc: "Global Eammu network" },
];

const faqs = [
  {
    q: "Where is Eammu Holidays' Tbilisi Georgia office?",
    a: "We are located at Floor 5, Levan Gotua Street #3, Tbilisi, Georgia. Open Monday–Friday 9AM–7PM and Saturday 10AM–5PM. Walk-ins are welcome for visa enquiries, TRC applications, and tour bookings.",
  },
  {
    q: "Can Eammu Holidays help with Georgia TRC (Temporary Residence Permit)?",
    a: "Yes. Our Tbilisi team specialises in Georgia TRC processing through investment (min $100,000), business registration, or employment. We handle all documentation, Public Service Hall submission, and follow-up from start to finish.",
  },
  {
    q: "Is Georgia visa-free for Bangladeshi passport holders?",
    a: "Yes. Bangladeshi passport holders can enter Georgia visa-free for up to 365 days — no prior application needed. Georgia is the most accessible long-stay destination for Bangladeshi travelers with daily costs of only $30–50.",
  },
  {
    q: "Does Eammu Holidays help with student university admissions in Georgia?",
    a: "Yes. We provide direct admissions support for Bangladeshi and international students applying to medical, engineering, and business universities in Tbilisi and Batumi. We assist with application filing, document apostille, and student visa processing. See: /study-abroad/student-visa",
  },
  {
    q: "What Georgia tours does Eammu Holidays offer?",
    a: "We offer: Tbilisi City Tour (1 day), Mtskheta UNESCO Heritage Tour (1 day), Kazbegi Mountain Adventure (2 days), Batumi & Black Sea Tour (2 days), Wine & Kakheti Valley Tour (1 day), and Uplistsikhe & Gori Tour (1 day). Bengali-speaking guides available.",
  },
  {
    q: "Does Eammu Holidays process Schengen or UK visas from Georgia?",
    a: "Yes. Our Tbilisi office processes Schengen (all 27 countries), UK, USA, and Canada visas for Georgia-based clients and expatriates. We handle document preparation, embassy appointment booking, and full application management.",
  },
  {
    q: "Does Eammu Holidays offer halal-friendly tours in Georgia?",
    a: "Yes. We offer halal-friendly tour options for Muslim travelers including Bengali-speaking guides, halal restaurant recommendations in Tbilisi, and prayer time-aware itinerary planning.",
  },
  {
    q: "How do I contact Eammu Holidays Georgia?",
    a: "WhatsApp/Phone: +995 574 446 218 | Email: georgia@eammu.com | Office: Floor 5, Levan Gotua Street #3, Tbilisi. WhatsApp is monitored 24/7 including weekends and holidays.",
  },
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
const TravelAgencyGeorgia = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white text-slate-900 overflow-hidden pb-20">

      {/* ══════════════════════════════════════════
          HERO CAROUSEL
      ══════════════════════════════════════════ */}
      <section
        aria-label="Eammu Holidays Georgia travel agency hero"
        className="relative h-[70vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-[#005a31]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#005a31]/80 via-transparent to-[#005a31]" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 text-center px-4 max-w-5xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-orange-500 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest mb-6 inline-block shadow-lg">
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
              className="bg-orange-500 hover:bg-white hover:text-[#005a31] text-white px-10 py-4 rounded-2xl font-black text-base transition-all shadow-xl flex items-center justify-center gap-2"
            >
              {slides[currentSlide].ctaText} <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/995574446218"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white hover:text-[#005a31] text-white px-10 py-4 rounded-2xl font-black text-base transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 focus:outline-none ${i === currentSlide ? "w-12 bg-orange-500" : "w-4 bg-white/30"}`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OFFICE CONTACT STRIP
      ══════════════════════════════════════════ */}
      <section
        aria-label="Eammu Holidays Tbilisi Georgia office contact"
        className="relative z-30 -mt-12 sm:-mt-16 max-w-7xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-white shadow-2xl rounded-[3rem] p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border border-slate-100">
          <InfoCard icon={<MapPin />}        color="bg-[#005a31] text-white" title="Tbilisi Office"  desc="Floor 5, Levan Gotua St #3" />
          <InfoCard icon={<PhoneCall />}     color="bg-orange-500 text-white" title="Hotline"        desc="+995 574 446 218" />
          <InfoCard icon={<Mail />}          color="bg-[#005a31] text-white" title="Email Support"   desc="georgia@eammu.com" />
          <InfoCard icon={<Clock />}         color="bg-orange-500 text-white" title="Office Hours"   desc="Mon–Fri: 9AM–7PM · Sat: 10AM–5PM" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRUST STATS
      ══════════════════════════════════════════ */}
      <section
        aria-label="Eammu Holidays Georgia achievements"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
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
          SEO INTRO BLOCK
      ══════════════════════════════════════════ */}
      <section
        aria-label="About Eammu Holidays Georgia Tbilisi branch office"
        className="max-w-7xl mx-auto px-4 sm:px-6 pb-16"
      >
        <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl border border-green-100 p-7 md:p-10 space-y-5">
          <span className="text-orange-500 text-xs font-black uppercase tracking-widest">About Our Georgia Office</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Eammu Holidays — <span className="text-[#005a31]">Your Trusted Partner in Tbilisi, Georgia</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl">
            Eammu Holidays opened its <strong>Georgia branch at Floor 5, Levan Gotua Street #3, Tbilisi</strong> to serve Bangladeshi and South Asian travelers, students, and entrepreneurs visiting the Caucasus. Our certified consultants specialise in <strong>Georgia TRC (Temporary Residence Permit)</strong>, business registration, <strong>student university admissions in Tbilisi</strong>, guided tours to Kazbegi, Batumi, and Kakheti, and Schengen/UK visa processing for Georgia-based clients.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-4xl">
            Georgia is unique: <strong>Bangladeshi passport holders can enter visa-free for 365 days</strong> — making it the most accessible long-stay destination in the world for Bangladeshi travelers. Combined with a <strong>low cost of living (~$30–50/day)</strong>, 4 UNESCO World Heritage Sites, and the world's oldest wine culture, Georgia offers exceptional value for tourists, students, and investors. Eammu Holidays Georgia provides <strong>Bengali and English-speaking guidance</strong>, halal-friendly tour itineraries, and 24/7 WhatsApp support throughout your stay.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              { icon: "🛂", title: "TRC & Business Visa", desc: "Full Georgia residence and business registration support by certified PRO consultants" },
              { icon: "🎓", title: "Student Admissions",  desc: "Direct university placement in Tbilisi medical, engineering, and business schools" },
              { icon: "🗺️", title: "Guided Tours",        desc: "Bengali-speaking guides for Kazbegi, Batumi, Mtskheta, and Kakheti wine tours" },
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
          SERVICES — WITH INTERNAL LINKS
      ══════════════════════════════════════════ */}
      <section
        aria-label="Georgia specialist services by Eammu Holidays Tbilisi"
        className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="text-center mb-14">
          <span className="text-orange-500 text-xs font-black uppercase tracking-widest">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mt-2 mb-4 uppercase tracking-tighter">
            Georgia Specialist Services
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm mt-4 max-w-2xl mx-auto">
            From TRC and business setup to student admissions and Caucasus tours — complete travel and visa ecosystem in Tbilisi.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeIn}>
              <Link href={s.href}>
                <div className="group bg-white p-7 sm:p-8 rounded-[2.5rem] border border-slate-100 hover:border-orange-500 hover:shadow-2xl transition-all h-full cursor-pointer flex flex-col">
                  <div className="w-12 h-12 bg-[#005a31] text-white rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors shadow-md">
                    {React.cloneElement(s.icon, { size: 22 })}
                  </div>
                  <h3 className="text-lg font-black text-[#005a31] mb-2 group-hover:text-orange-500 transition-colors">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">{s.desc}</p>
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {s.points.map((p, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] font-black text-[#005a31]/60 uppercase tracking-tighter">
                        <CheckCircle size={11} className="text-orange-500 shrink-0" /> {p}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-orange-500 text-xs font-black uppercase">
                    Learn More <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          POPULAR TOURS
      ══════════════════════════════════════════ */}
      <section
        aria-label="Popular Georgia tour packages by Eammu Holidays"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50 border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 text-xs font-black uppercase tracking-widest">2025 Season</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mt-2 mb-3">Popular Georgia Tours</h2>
            <div className="w-16 h-1.5 bg-orange-500 mx-auto" />
            <p className="text-slate-400 text-sm mt-4 max-w-xl mx-auto">
              All tours include Bengali-speaking guides, hotel accommodation, and transport. Book directly on WhatsApp.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {tours.map((tour) => (
              <motion.div
                key={tour.title}
                variants={fadeIn}
                className="group bg-white rounded-[2.5rem] shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl transition-all"
              >
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img
                    src={tour.img}
                    alt={`${tour.title} — Eammu Holidays Georgia`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl text-[10px] font-black flex items-center gap-1.5 uppercase shadow">
                    <Clock size={11} /> {tour.duration}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-black text-[#005a31] mb-5">{tour.title}</h3>
                  <a
                    href="https://wa.me/995574446218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-orange-500 hover:bg-[#005a31] text-white py-3.5 rounded-2xl font-black transition-all text-sm"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              href="/offers"
              className="inline-flex items-center gap-2 bg-[#005a31] text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-orange-500 transition shadow-lg"
            >
              View All Packages & Offers <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GEORGIA FACTS
      ══════════════════════════════════════════ */}
      <section
        aria-label="Why visit Georgia — facts for travelers"
        className="bg-[#005a31] py-16 sm:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-400 text-xs font-black uppercase tracking-widest">Did You Know?</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Why Georgia Is a Must-Visit Destination
            </h2>
            <p className="text-green-200 text-sm mt-3 max-w-xl mx-auto">
              Fascinating facts that make Georgia one of the most unique and accessible destinations in the world.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {georgiaFacts.map((fact) => (
              <motion.div
                key={fact.title}
                variants={fadeIn}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="text-3xl mb-3">{fact.icon}</div>
                <h3 className="font-black text-white text-base mb-2">{fact.title}</h3>
                <p className="text-green-200 text-sm leading-relaxed">{fact.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ALL SERVICES — INTERNAL LINK HUB
      ══════════════════════════════════════════ */}
      <section
        aria-label="All Eammu Holidays services and global offices"
        className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-xs font-black uppercase tracking-widest">Quick Access</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mt-2">
              All Services & Resources
            </h2>
            <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
              From student visas and IELTS prep to Georgia TRC, global tours, and our worldwide branch offices.
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
                  <div className="group bg-white hover:bg-[#005a31] rounded-2xl p-4 border border-slate-100 hover:border-[#005a31] transition-all cursor-pointer h-full shadow-sm hover:shadow-lg">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="text-orange-500 group-hover:scale-110 transition-transform shrink-0">
                        {link.icon}
                      </div>
                      <span className="text-[#005a31] group-hover:text-white font-black text-xs leading-tight transition-colors">
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
        aria-label="FAQ about Eammu Holidays Georgia Tbilisi"
        className="py-16 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <span className="text-orange-500 text-xs font-black uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
            Expert answers about Georgia TRC, student admissions, tours, and our Tbilisi office.
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
            href="https://wa.me/995574446218"
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
        aria-label="About Eammu Holidays travel agency in Georgia"
        className="py-4 pb-16 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="bg-gray-50 rounded-3xl border border-gray-100 p-7 md:p-10">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">
            Eammu Holidays Georgia — Travel Agency, TRC & Visa Consultancy in Tbilisi
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed max-w-5xl">
            <p>
              <strong className="text-gray-800">Eammu Holidays Georgia</strong> operates from <strong>Floor 5, Levan Gotua Street #3, Tbilisi, Republic of Georgia</strong>. We are part of the global Eammu Holidays network with offices in{" "}
              <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-bold hover:underline">Bangladesh (Cumilla & Dhaka)</Link>,{" "}
              <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-bold hover:underline">Dubai (Business Bay)</Link>, and{" "}
              <Link href="/contact/travel-agency-armenia" className="text-[#005a31] font-bold hover:underline">Armenia (Yerevan)</Link>. Our Tbilisi office serves Bangladeshi expatriates, South Asian students, and international travelers requiring{" "}
              <Link href="/visa" className="text-[#005a31] font-bold hover:underline">Georgia visa services</Link>,{" "}
              TRC processing, university admissions, and Caucasus tours.
            </p>
            <p>
              Georgia is one of the world's most welcoming countries — offering <strong>365-day visa-free access for Bangladeshi passport holders</strong>, one of the most affordable costs of living in Europe, and stunning destinations from the Greater Caucasus mountains to the Black Sea coast in Batumi. Our certified guides lead tours to{" "}
              Kazbegi, Mtskheta (UNESCO), Kakheti wine country, and Batumi. All tours available with Bengali-speaking guides and halal-friendly itineraries. Read our{" "}
              <Link href="/blogs" className="text-[#005a31] font-bold hover:underline">travel blog</Link> for the latest Georgia travel guides and{" "}
              <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#005a31] font-bold hover:underline">visa processing timelines</Link>.
            </p>
            <p>
              For <Link href="/study-abroad/student-visa" className="text-[#005a31] font-bold hover:underline">student visa</Link> and university admissions in Georgia, our team handles the full process from application to apostille and enrollment. Students can also explore{" "}
              <Link href="/scholarships" className="text-[#005a31] font-bold hover:underline">scholarship opportunities</Link> and{" "}
              <Link href="/target-ielts-immigration-center" className="text-[#005a31] font-bold hover:underline">IELTS preparation</Link> through Eammu Holidays' partner centres. If you've received a{" "}
              <Link href="/visa-rejection" className="text-[#005a31] font-bold hover:underline">visa rejection</Link>, contact our Tbilisi team for a free re-application assessment.
              Contact: <a href="tel:+995574446218" className="text-[#005a31] font-bold hover:underline">+995 574 446 218</a> |{" "}
              <a href="https://wa.me/995574446218" className="text-[#005a31] font-bold hover:underline">WhatsApp</a>
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            {[
              "Travel Agency Tbilisi", "Georgia TRC Consultant", "Student Visa Georgia",
              "Kazbegi Tour", "Batumi Tour", "Kakheti Wine Tour", "Georgia Visa-Free Bangladesh",
              "Schengen Visa Georgia", "UK Visa Georgia", "Halal Tours Georgia",
              "Eammu Holidays Tbilisi", "Business Visa Georgia",
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
        aria-label="Contact Eammu Holidays Georgia for visa and tour services"
        className="relative bg-[#005a31] rounded-[2.5rem] mx-4 sm:mx-6 max-w-7xl lg:mx-auto mt-4 p-8 md:p-14 text-center text-white overflow-hidden"
      >
        <div className="relative z-10 space-y-5">
          <span className="inline-block px-4 py-1.5 bg-orange-500 text-white rounded-full text-xs font-black uppercase tracking-wider">
            Levan Gotua St #3, Tbilisi · Open Now
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Ready to Explore Georgia?
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">
            Contact Eammu Holidays Tbilisi for TRC processing, student admissions, guided tours, and 24/7 travel support. Trusted by thousands of Bangladeshi travelers visiting Georgia every year.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm pt-1">
            {["✅ Bengali-Speaking Guides", "✅ Georgia TRC Experts", "✅ 24/7 WhatsApp Support", "✅ Halal-Friendly Tours"].map((f) => (
              <span key={f} className="text-green-200 font-semibold">{f}</span>
            ))}
          </div>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <a
            href="https://wa.me/995574446218"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-green-400 transition shadow-lg flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} /> WhatsApp Us
          </a>
          <a
            href="mailto:georgia@eammu.com"
            className="w-full sm:w-auto bg-white/10 border border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 transition flex items-center justify-center gap-2"
          >
            <Mail size={18} /> Email Us
          </a>
          <Link
            href="/offers"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-400 text-white px-10 py-4 rounded-2xl font-black text-sm transition flex items-center justify-center gap-2"
          >
            <Camera size={18} /> View Tours
          </Link>
        </div>
        <div className="absolute -bottom-14 -right-14 w-60 h-60 bg-orange-500 rounded-full blur-[80px] opacity-10 pointer-events-none" />
        <div className="absolute -top-14 -left-14 w-60 h-60 bg-green-300 rounded-full blur-[80px] opacity-10 pointer-events-none" />
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/995574446218"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Eammu Holidays Georgia"
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
const InfoCard = ({ icon, title, desc, color }) => (
  <div className="flex items-center gap-4">
    <div className={`p-3.5 ${color} rounded-2xl shrink-0 shadow-md`}>
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div className="min-w-0">
      <h4 className="text-[10px] font-black uppercase tracking-tighter text-gray-400">{title}</h4>
      <p className="font-black text-[#005a31] text-sm leading-tight">{desc}</p>
    </div>
  </div>
);

export default TravelAgencyGeorgia;