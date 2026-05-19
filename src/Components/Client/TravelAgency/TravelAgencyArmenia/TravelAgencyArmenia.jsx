"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Plane, ShieldCheck, MapPin,
  PhoneCall, MessageCircle, Mail, Camera,
  Building2, ArrowRight, Star, Globe,
  Clock, Users, Award, ChevronDown, Navigation,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const slides = [
  {
    image: "https://www.trekgeorgia.com/wp-content/uploads/2019/04/armenia_h_00000220066588.ngsversion.1501784794813.adapt_.1900.1.jpg",
    badge: "Certified Caucasus Experts",
    title: "Premier Travel Agency in Armenia",
    desc: "Experience the magic of Yerevan with Eammu Holidays. From e-visa processing to luxury guided tours, we are your 24/7 local partner in Armenia.",
  },
  {
    image: "https://janarmenia.com/uploads/0000/687/2024/01/04/garni2.webp",
    badge: "Exclusive Tour Packages",
    title: "Discover Ancient Landmarks in Armenia",
    desc: "Daily guided tours to Garni Temple, Geghard Monastery, and Lake Sevan. Explore 3,000 years of Armenian history with expert Bengali and English-speaking guides.",
  },
  {
    image: "https://visityerevan.am/media/images/7.JPG",
    badge: "24/7 Visa Assistance",
    title: "Hassle-Free Armenia Visa Processing",
    desc: "Fast-track Armenia e-visa and transit visa support for all nationalities. Documentation handled by certified local experts at our Lambron 39 office in Yerevan.",
  },
];

const tours = [
  {
    title: "Yerevan City Tour",
    time: "1 Day",
    img: "https://visityerevan.am/media/images/7.JPG",
    price: "From $45",
    highlights: ["Republic Square", "Cascade Complex", "Vernissage Market", "Matenadaran Manuscript Museum"],
  },
  {
    title: "Lake Sevan & Dilijan",
    time: "2 Days",
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/70/09.jpg",
    price: "From $120",
    highlights: ["Sevanavank Monastery", "Dilijan National Park", "Haghartsin Monastery", "Scenic mountain drives"],
  },
  {
    title: "Garni & Geghard Tour",
    time: "1 Day",
    img: "https://app.conciergetravel.am/storage/uploads/2BQWKJpgB1nO4N1E6hfolAEOz7ymxy3paQe7WIGc.jpg",
    price: "From $55",
    highlights: ["Garni Pagan Temple", "Geghard Monastery (UNESCO)", "Azat River Gorge", "Symphony of Stones"],
  },
  {
    title: "Khor Virap & Ararat",
    time: "1 Day",
    img: "https://www.bidfortrip.com/uploads/0000/83/2021/07/17/khor-virap1.jpg",
    price: "From $50",
    highlights: ["Khor Virap Monastery", "Mount Ararat views", "Areni Wine Village", "Noravank Monastery"],
  },
  {
    title: "Caucasus Multi-Country",
    time: "5–7 Days",
    img: "https://www.trekgeorgia.com/wp-content/uploads/2019/04/armenia_h_00000220066588.ngsversion.1501784794813.adapt_.1900.1.jpg",
    price: "From $450",
    highlights: ["Armenia + Georgia", "Tbilisi & Yerevan", "Cross-border transit support", "Full visa assistance"],
  },
  {
    title: "Armenia Highlights Package",
    time: "4 Days",
    img: "https://janarmenia.com/uploads/0000/687/2024/01/04/garni2.webp",
    price: "From $280",
    highlights: ["All top UNESCO sites", "Hotel + transfers included", "Bengali-speaking guide", "Flexible itinerary"],
  },
];

const faqs = [
  {
    q: "Where is the Eammu Holidays Armenia office located?",
    a: "Our Armenia branch is located at Lambron 39, Yerevan, Armenia (near the city centre). We are open Saturday to Thursday 9 AM–8 PM and Friday 10 AM–6 PM. Walk-ins are welcome — no appointment needed for general enquiries.",
  },
  {
    q: "Does Eammu Holidays help with Armenia e-visa processing?",
    a: "Yes. We provide complete Armenia e-visa and transit visa processing for Bangladeshi and international travelers. Our team handles the online application, document checklist, form submission, and follow-up. Most Armenia e-visas are approved within 3 working days.",
  },
  {
    q: "Is there a Bengali-speaking guide in Yerevan?",
    a: "Yes. Eammu Holidays employs Bengali and English-speaking local guides in Yerevan who understand the cultural needs of Bangladeshi travelers — including halal food recommendations, prayer time coordination, and familiar food options.",
  },
  {
    q: "What tours does Eammu Holidays offer in Armenia?",
    a: "We offer: Yerevan City Tour (1 day, from $45), Garni & Geghard Monastery tour (1 day, from $55), Lake Sevan & Dilijan (2 days, from $120), Khor Virap & Ararat view (1 day, from $50), and multi-country Caucasus packages covering Armenia, Georgia, and Azerbaijan.",
  },
  {
    q: "Does Eammu Holidays provide airport pickup in Yerevan?",
    a: "Yes. We provide seamless airport transfers from Zvartnots International Airport (EVN) to hotels across Yerevan. Advance booking is recommended. Our drivers hold multilingual placards and are available 24/7 for arrivals.",
  },
  {
    q: "Can Eammu Holidays book hotels in Armenia at lower rates?",
    a: "Yes. Through our direct partnerships with hotels across Yerevan and Armenia, we consistently offer prices below Booking.com and Expedia. We work with 3-star budget hotels, boutique guesthouses, and 5-star properties like the Marriott Yerevan.",
  },
  {
    q: "What is the best time to visit Armenia?",
    a: "The best time to visit Armenia is April–June (spring) and September–October (autumn). These months offer mild weather, green landscapes, and excellent visibility of Mount Ararat. Summer (July–August) is hot but popular. Winter offers skiing at Tsaghkadzor resort.",
  },
  {
    q: "How do I contact Eammu Holidays Armenia?",
    a: "WhatsApp: +374 94 810585 | Email: armenia@eammu.com | Office: Lambron 39, Yerevan. We respond to WhatsApp messages 24/7, including weekends and holidays.",
  },
];

const trustStats = [
  { number: "5,000+",  label: "Armenia Tours Completed",  icon: "🏛️" },
  { number: "98%",     label: "Client Satisfaction Rate",  icon: "⭐" },
  { number: "24/7",    label: "WhatsApp Support",          icon: "📱" },
  { number: "10+",     label: "Local Partner Hotels",      icon: "🏨" },
];

const armeniaFacts = [
  { icon: "🏛️", title: "3 UNESCO World Heritage Sites",    desc: "Geghard Monastery, Upper Azat Valley, and Monasteries of Haghpat and Sanahin." },
  { icon: "🍷", title: "World's Oldest Winery",             desc: "Armenia's Areni-1 cave contains the world's oldest winery, dating back 6,100 years." },
  { icon: "🇦🇲", title: "First Christian Nation",           desc: "Armenia adopted Christianity as its state religion in 301 AD — the first country in the world to do so." },
  { icon: "🌄", title: "Mount Ararat Views",                desc: "The iconic snow-capped Mount Ararat (5,137m) is visible from Yerevan on clear days." },
  { icon: "🍑", title: "Land of Apricots",                  desc: "Armenia is considered the ancestral home of the apricot — the word 'apricot' comes from the Latin 'Armeniacum'." },
  { icon: "♟️", title: "Chess in Schools",                  desc: "Armenia is the only country to have chess as a mandatory subject in all primary schools." },
];

const fadeInUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
const TravelAgencyArmenia = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white text-slate-900 overflow-hidden pb-20">

      {/* ══════════════════════════════════════════
          HERO CAROUSEL
      ══════════════════════════════════════════ */}
      <section
        aria-label="Eammu Holidays Armenia travel agency hero"
        className="relative h-[70vh] md:h-[75vh] flex items-center overflow-hidden bg-[#005a31]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#005a31]/90 via-[#005a31]/45 to-black/20" />
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 items-center h-full">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-5 inline-block shadow-lg">
                  {slides[currentSlide].badge}
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-[1.1] drop-shadow-md">
                  {slides[currentSlide].title.includes("Armenia") ? (
                    <>
                      {slides[currentSlide].title.split("Armenia")[0]}
                      <span className="text-orange-400 italic">Armenia</span>
                      {slides[currentSlide].title.split("Armenia")[1]}
                    </>
                  ) : slides[currentSlide].title}
                </h1>
                <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed font-medium">
                  {slides[currentSlide].desc}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="#tours"
                className="bg-white text-[#005a31] px-8 py-4 rounded-2xl font-black hover:bg-orange-500 hover:text-white transition-all shadow-xl flex items-center justify-center gap-2"
              >
                Explore Tours <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/37494810585"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-md bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 hover:bg-white/20"
              >
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-6 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none ${i === currentSlide ? "w-12 bg-orange-400" : "w-4 bg-white/40"}`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUICK CONTACT CARDS
      ══════════════════════════════════════════ */}
      <section
        aria-label="Eammu Holidays Armenia contact information"
        className="relative -mt-10 z-30 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <InfoCard icon={<MapPin />}      title="Branch Office"   desc="Lambron 39, Yerevan, Armenia"   color="bg-[#005a31]" />
          <InfoCard icon={<PhoneCall />}   title="24/7 Helpline"   desc="+374 94 810585"                  color="bg-orange-500" />
          <InfoCard icon={<Mail />}        title="Email Support"   desc="armenia@eammu.com"               color="bg-[#005a31]" />
          <InfoCard icon={<Clock />}       title="Office Hours"    desc="Sat–Thu: 9AM–8PM"               color="bg-orange-500" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRUST STATS
      ══════════════════════════════════════════ */}
      <section
        aria-label="Eammu Holidays Armenia achievements"
        className="py-16 px-4 sm:px-6 max-w-7xl mx-auto"
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
              variants={fadeInUp}
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
          SEO INTRO — BRANCH OFFICE DETAIL
      ══════════════════════════════════════════ */}
      <section
        aria-label="About Eammu Holidays Yerevan Armenia branch office"
        className="py-4 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl border border-green-100 p-7 md:p-10 space-y-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Eammu Holidays — <span className="text-[#005a31]">Your Trusted Travel Partner in Yerevan, Armenia</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl">
            Eammu Holidays opened its <strong>Armenia branch office at Lambron 39, Yerevan</strong> to serve the growing number of Bangladeshi and South Asian travelers visiting the Caucasus region. Our Yerevan office is fully staffed with <strong>certified visa consultants</strong>, Bengali and English-speaking tour guides, and dedicated travel coordinators who specialise in <strong>Armenia e-visa processing</strong>, guided cultural tours, and hassle-free airport transfers from <strong>Zvartnots International Airport (EVN)</strong>.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-4xl">
            Whether you need an <strong>Armenia transit visa</strong> processed in 24 hours, want to explore the <strong>UNESCO World Heritage Site at Geghard Monastery</strong>, taste world-famous Armenian brandy in the Ararat Valley, or simply need a reliable hotel at below-market rates — Eammu Holidays Armenia provides end-to-end travel support with <strong>24/7 WhatsApp response</strong> and a <strong>98% client satisfaction rate</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              { icon: "🛂", title: "Visa Processing",    desc: "Armenia e-visa, transit visa, and multi-entry visa support for all nationalities" },
              { icon: "🗺️", title: "Guided Tours",       desc: "Daily departure tours to Garni, Geghard, Sevan, Ararat, and Dilijan with Bengali guides" },
              { icon: "🏨", title: "Hotel & Transfers",  desc: "Direct hotel partnerships below Booking.com rates + 24/7 airport transfer service" },
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
          SERVICES GRID
      ══════════════════════════════════════════ */}
      <section
        aria-label="Travel services offered by Eammu Holidays Armenia"
        className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="text-center mb-14">
          <span className="text-orange-500 text-xs font-black uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mt-2 mb-4">Complete Travel Ecosystem</h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full" />
          <p className="mt-5 text-slate-500 font-medium max-w-2xl mx-auto italic">
            "Your trusted travel agency in Yerevan — bridging the gap between local culture and global standards."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <ServiceBlock icon={<ShieldCheck />} title="Visa Processing"  desc="Armenia e-visa, transit visa, and multi-entry visa support processed by our Lambron 39 office within 1–3 working days." />
          <ServiceBlock icon={<Camera />}      title="Cultural Tours"   desc="Expert-guided deep-dives into Armenian heritage: Garni, Geghard, Sevan, Khor Virap, and the Ararat Valley." />
          <ServiceBlock icon={<Building2 />}   title="Hotel Direct"     desc="Direct hotel partnerships across Yerevan and Armenia — consistently priced below Booking.com. All budgets catered for." />
          <ServiceBlock icon={<Plane />}       title="Airport Transfer" desc="24/7 Zvartnots Airport (EVN) pickups and drop-offs. Multilingual drivers with hotel sign and flight tracking." />
          <ServiceBlock icon={<Globe />}       title="Multi-Country"    desc="Caucasus packages combining Armenia, Georgia (Tbilisi), and Azerbaijan. Cross-border visa support included." />
          <ServiceBlock icon={<Users />}       title="Group Tours"      desc="Corporate retreats, family groups, and student tours with customised pricing and Bengali-speaking group coordinators." />
          <ServiceBlock icon={<Navigation />}  title="Custom Itinerary" desc="Fully tailored itineraries built around your schedule, budget, and interests — with on-the-ground WhatsApp support throughout." />
          <ServiceBlock icon={<Award />}       title="Certified Guides" desc="All Eammu Armenia guides are licensed by the Armenian Tourism Committee and trained in Bengali and English communication." />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          POPULAR TOURS
      ══════════════════════════════════════════ */}
      <section
        id="tours"
        aria-label="Popular Armenia tour packages from Eammu Holidays"
        className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-orange-500 text-xs font-black uppercase tracking-widest">2025–2026 Season</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mt-1">Popular Armenia Tours</h2>
              <p className="text-slate-500 mt-2 font-medium">Most booked experiences for Bangladeshi & international travelers</p>
            </div>
            <a
              href="https://wa.me/37494810585"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#005a31] font-black flex items-center gap-2 hover:text-orange-500 transition-colors uppercase text-sm tracking-tighter whitespace-nowrap"
            >
              Request Custom Package <ArrowRight size={16} />
            </a>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {tours.map((tour) => (
              <TourCard key={tour.title} {...tour} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section
        aria-label="Why choose Eammu Holidays Armenia"
        className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <div className="relative order-2 lg:order-1">
          <img
            src="https://www.bidfortrip.com/uploads/0000/83/2021/07/17/khor-virap1.jpg"
            className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white w-full object-cover"
            alt="Khor Virap Monastery with Mount Ararat — Eammu Holidays Armenia tours"
          />
          <div className="absolute -top-8 -right-8 w-36 h-36 bg-orange-500 rounded-full z-0 animate-pulse opacity-60" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#005a31] rounded-full z-0 opacity-40" />
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-orange-500 font-black uppercase tracking-widest text-sm">Why Eammu Holidays?</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mt-3 mb-8 leading-tight">
            Your Local Friend in<br />a Foreign Land
          </h2>
          <div className="space-y-5">
            <TrustItem icon={<Globe />}      text="Global Standards, Local Yerevan Prices" />
            <TrustItem icon={<Star />}       text="Bengali & English Speaking Licensed Guides" />
            <TrustItem icon={<ShieldCheck />}text="100% Verified Accommodation Partners" />
            <TrustItem icon={<PhoneCall />}  text="24/7 WhatsApp Ground Support in Yerevan" />
            <TrustItem icon={<Award />}      text="Armenian Tourism Committee Certified Office" />
            <TrustItem icon={<CheckCircle />}text="Halal-Friendly Tour Options Available" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <a
              href="https://wa.me/37494810585"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#005a31] text-white px-8 py-4 rounded-3xl font-black shadow-xl hover:bg-orange-500 transition-all"
            >
              <MessageCircle size={20} /> Free Consultation
            </a>
            <a
              href="mailto:armenia@eammu.com"
              className="inline-flex items-center justify-center gap-3 border-2 border-[#005a31] text-[#005a31] px-8 py-4 rounded-3xl font-black hover:bg-[#005a31] hover:text-white transition-all"
            >
              <Mail size={18} /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ARMENIA FACTS
      ══════════════════════════════════════════ */}
      <section
        aria-label="Interesting facts about Armenia for travelers"
        className="bg-[#005a31] py-16 sm:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-400 text-xs font-black uppercase tracking-widest">Did You Know?</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Why Armenia Is a Must-Visit Destination
            </h2>
            <p className="text-green-200 text-sm mt-3 max-w-xl mx-auto">
              Fascinating facts about Armenia that make it one of the most culturally rich destinations in the world.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {armeniaFacts.map((fact) => (
              <motion.div
                key={fact.title}
                variants={fadeInUp}
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
          FAQ SECTION
      ══════════════════════════════════════════ */}
      <section
        aria-label="Frequently asked questions about Eammu Holidays Armenia"
        className="py-16 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <span className="text-orange-500 text-xs font-black uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
            Everything you need to know about Eammu Holidays' Armenia branch, visa services, tours, and local support.
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
            href="https://wa.me/37494810585"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#005a31] text-white px-10 py-4 rounded-2xl font-black hover:bg-orange-500 transition shadow-lg uppercase tracking-wide text-sm"
          >
            <MessageCircle size={18} /> Ask a Question on WhatsApp
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OFFICE / MAP SECTION
      ══════════════════════════════════════════ */}
      <section
        aria-label="Eammu Holidays Yerevan office location and contact details"
        className="py-4 pb-16 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Map embed */}
            <div className="h-72 md:h-auto min-h-[300px]">
              <iframe
                title="Eammu Holidays Armenia office location — Lambron 39, Yerevan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.8!2d44.5152!3d40.1872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDExJzE0LjAiTiA0NMKwMzAnNTQuNyJF!5e0!3m2!1sen!2sam!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Office details */}
            <div className="p-8 md:p-10 space-y-6">
              <div>
                <span className="text-orange-500 text-xs font-black uppercase tracking-widest">Branch Office</span>
                <h3 className="text-2xl font-black text-[#005a31] mt-1">Eammu Holidays — Yerevan, Armenia</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: <MapPin size={18} />,    label: "Address",      val: "Lambron 39, Yerevan, Armenia" },
                  { icon: <PhoneCall size={18} />, label: "Phone/WhatsApp",val: "+374 94 810585" },
                  { icon: <Mail size={18} />,      label: "Email",        val: "armenia@eammu.com" },
                  { icon: <Clock size={18} />,     label: "Hours",        val: "Sat–Thu: 9AM–8PM · Fri: 10AM–6PM" },
                  { icon: <Plane size={18} />,     label: "Nearest Airport",val:"Zvartnots Intl. Airport (EVN) — 12km" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="text-orange-500 mt-0.5 shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-gray-400">{item.label}</p>
                      <p className="text-gray-800 font-bold text-sm">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/37494810585"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-2xl font-black text-sm hover:bg-green-600 transition shadow-md"
              >
                <MessageCircle size={18} /> Open WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEO RICH TEXT FOOTER
      ══════════════════════════════════════════ */}
      <section
        aria-label="About Eammu Holidays travel agency in Armenia"
        className="py-4 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="bg-gray-50 rounded-3xl border border-gray-100 p-7 md:p-10">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">
            Eammu Holidays Armenia — Certified Travel Agency & Visa Consultancy in Yerevan
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed max-w-5xl">
            <p>
              <strong className="text-gray-800">Eammu Holidays Armenia</strong> is a fully registered travel and visa consultancy operating from <strong>Lambron 39, Yerevan, Republic of Armenia</strong>. We serve Bangladeshi, South Asian, and international travelers who require <strong>Armenia e-visa processing</strong>, <strong>guided cultural tours</strong>, hotel arrangements, and airport transfer services in Yerevan. Our Armenian office is an extension of the Eammu Holidays group — a Bangladesh-based travel consultancy with over 10,000 clients and a 95% visa success rate globally.
            </p>
            <p>
              Our Yerevan team comprises <strong>Armenian Tourism Committee-certified local guides</strong>, visa processing specialists, and Bengali-English bilingual travel coordinators. We are one of the few travel agencies in Armenia that specifically caters to <strong>Bangladeshi and South Asian travelers</strong> — offering halal-friendly tour options, Bengali-language briefings, and community-specific travel support throughout your stay in Yerevan and beyond.
            </p>
            <p>
              Destinations covered from our <strong>Armenia base</strong> include: Yerevan city tours, Garni Temple, Geghard Monastery (UNESCO World Heritage), Lake Sevan, Dilijan National Forest, Khor Virap Monastery, Noravank Canyon, the Areni wine region, and multi-day Caucasus packages to neighbouring <strong>Georgia (Tbilisi)</strong> and Azerbaijan (Baku). Contact us at <a href="mailto:armenia@eammu.com" className="text-[#005a31] font-bold hover:underline">armenia@eammu.com</a> or WhatsApp <a href="https://wa.me/37494810585" className="text-[#005a31] font-bold hover:underline">+374 94 810585</a>.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            {[
              "Travel Agency Yerevan", "Visa Services Armenia", "Eammu Armenia Lambron 39",
              "Armenia e-Visa Processing", "Guided Tours Yerevan", "Bengali Guide Armenia",
              "Airport Transfer EVN", "Lake Sevan Tour", "Garni Geghard Tour",
              "Caucasus Travel Package", "Halal Tours Armenia",
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
        aria-label="Book a tour or get visa help from Eammu Holidays Armenia"
        className="relative bg-[#005a31] rounded-[2.5rem] mx-4 sm:mx-6 max-w-7xl lg:mx-auto mt-12 p-8 md:p-14 text-center text-white overflow-hidden"
      >
        <div className="relative z-10 space-y-5">
          <span className="inline-block px-4 py-1.5 bg-orange-500 text-white rounded-full text-xs font-black uppercase tracking-wider">
            Lambron 39, Yerevan · Open Now
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Ready to Explore Armenia?
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">
            Contact Eammu Holidays Yerevan for visa processing, guided tours, hotel bookings, and 24/7 travel support. Trusted by thousands of Bangladeshi travelers visiting Armenia every year.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm pt-1">
            {["✅ Licensed Local Office", "✅ Bengali-Speaking Guides", "✅ 24/7 WhatsApp Support", "✅ Halal-Friendly Options"].map((f) => (
              <span key={f} className="text-green-200 font-semibold">{f}</span>
            ))}
          </div>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <a
            href="https://wa.me/37494810585"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-green-400 transition uppercase tracking-wide shadow-lg flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} /> WhatsApp Us Now
          </a>
          <a
            href="mailto:armenia@eammu.com"
            className="w-full sm:w-auto bg-white/10 backdrop-blur text-white border border-white/30 px-10 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 transition uppercase tracking-wide flex items-center justify-center gap-2"
          >
            <Mail size={18} /> Send Email
          </a>
          <a
            href="#tours"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-400 text-white px-10 py-4 rounded-2xl font-black text-sm transition uppercase tracking-wide flex items-center justify-center gap-2"
          >
            <Camera size={18} /> View Tours
          </a>
        </div>
        <div className="absolute -bottom-14 -right-14 w-60 h-60 bg-orange-500 rounded-full blur-[80px] opacity-10 pointer-events-none" />
        <div className="absolute -top-14 -left-14 w-60 h-60 bg-green-300 rounded-full blur-[80px] opacity-10 pointer-events-none" />
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/37494810585"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Eammu Holidays Armenia"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center animate-bounce"
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
  <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
    <div className={`${color} text-white p-3.5 rounded-2xl shrink-0`}>
      {React.cloneElement(icon, { size: 22 })}
    </div>
    <div className="min-w-0">
      <h4 className="text-gray-400 text-[10px] font-black uppercase tracking-tighter">{title}</h4>
      <p className="text-[#005a31] font-black text-base leading-tight truncate">{desc}</p>
    </div>
  </div>
);

const ServiceBlock = ({ icon, title, desc }) => (
  <div className="group bg-white p-7 sm:p-8 rounded-[2rem] border border-slate-100 hover:border-[#005a31] hover:shadow-2xl transition-all duration-500">
    <div className="w-14 h-14 bg-slate-50 text-[#005a31] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#005a31] group-hover:text-white transition-all duration-500">
      {React.cloneElement(icon, { size: 26 })}
    </div>
    <h3 className="text-xl font-black text-[#005a31] mb-3">{title}</h3>
    <p className="text-slate-500 font-medium leading-relaxed text-sm">{desc}</p>
  </div>
);

const TourCard = ({ title, time, img, price, highlights }) => (
  <motion.div
    variants={fadeInUp}
    className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100"
  >
    <div className="relative h-56 overflow-hidden">
      <img
        src={img}
        alt={`${title} — Eammu Holidays Armenia`}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full font-black text-[#005a31] text-sm shadow-md">
        {price}
      </div>
      <div className="absolute bottom-4 left-4 bg-[#005a31]/80 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1.5">
        <Plane size={12} /> {time}
      </div>
    </div>
    <div className="p-6 sm:p-7">
      <h3 className="text-xl font-black text-[#005a31] mb-3">{title}</h3>
      <ul className="space-y-1 mb-5">
        {highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-slate-500 text-xs font-medium">
            <CheckCircle size={12} className="text-orange-500 shrink-0" />
            {h}
          </li>
        ))}
      </ul>
      <a
        href="https://wa.me/37494810585"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-slate-50 hover:bg-[#005a31] hover:text-white text-[#005a31] py-3.5 rounded-2xl font-black transition-all text-sm"
      >
        Book This Tour
      </a>
    </div>
  </motion.div>
);

const TrustItem = ({ icon, text }) => (
  <div className="flex items-center gap-4 group">
    <div className="text-orange-500 group-hover:scale-125 transition-transform shrink-0">
      {React.cloneElement(icon, { size: 22 })}
    </div>
    <span className="text-base font-bold text-slate-700">{text}</span>
  </div>
);

export default TravelAgencyArmenia;