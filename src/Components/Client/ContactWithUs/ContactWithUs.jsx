"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const offices = [
  {
    location: "Cumilla, Bangladesh",
    flag: "🇧🇩",
    badge: "Headquarters",
    address: "Office No-178, 1st Floor, Gomoti Tower, Cantonment, Cumilla",
    phone: ["+8801631312524", "+8801701699743"],
    whatsapp: "+8801631312524",
    email: ["bangladesh@eammu.com", "info@eammu.com"],
    hours: "Sun–Thu: 9AM–9PM (BD Time)",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3475734898495!2d91.139884!3d23.483984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI5JzAyLjMiTiA5McKwMDgnMjMuNiJF!5e0!3m2!1sen!2sbd!4v1631312524000!5m2!1sen!2sbd",
    website: "/contact/travel-agency-bangladesh",
    services: ["Student Visa", "Umrah Packages", "Holiday Tours", "Immigration"],
  },
  {
    location: "Business Bay, Dubai, UAE",
    flag: "🇦🇪",
    badge: "Middle East Office",
    address: "Business Bay, Dubai, United Arab Emirates",
    phone: ["+971507078334"],
    whatsapp: "+971507078334",
    email: ["dubai@eammu.com", "info@eammu.com"],
    hours: "Sun–Thu: 9AM–6PM (GST)",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178652414707!2d55.2708!3d25.185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6834751ac001%3A0x8cf6347c00000000!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1631312524001!5m2!1sen!2sae",
    website: "/contact/travel-agency-dubai",
    services: ["Work Permit UAE", "Tourist Visa", "Holiday Packages", "Event Management"],
  },
  {
    location: "Yerevan, Armenia",
    flag: "🇦🇲",
    badge: "Europe Hub",
    address: "Eammu Holidays, Lambron 39, Yerevan, Armenia",
    phone: ["+37494810585"],
    whatsapp: "+37494810585",
    email: ["armenia@eammu.com", "info@eammu.com"],
    hours: "Mon–Fri: 9AM–6PM (YERT)",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2435!2d44.5!3d40.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA2JzAwLjAiTiA0NMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sam!4v1631312524002!5m2!1sen!2sam",
    website: "/contact/travel-agency-armenia",
    services: ["Europe Visa", "Schengen Visa", "Armenia Residency", "Student Visa EU"],
  },
  {
    location: "Tbilisi, Georgia",
    flag: "🇬🇪",
    badge: "Caucasus Office",
    address: "Floor 5, Levan Gotua Street #3, Tbilisi, Georgia",
    phone: ["+995574446218"],
    whatsapp: "+995574446218",
    email: ["georgia@eammu.com", "info@eammu.com"],
    hours: "Mon–Fri: 9AM–6PM (GET)",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.5!2d44.7!3d41.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzAwLjAiTiA0NMKwNDInMDAuMCJF!5e0!3m2!1sen!2sge!4v1631312524003!5m2!1sen!2sge",
    website: "/contact/travel-agency-georgia",
    services: ["Georgia Residency", "Europe Tour", "Business Visa", "Immigration"],
  },
];

const heroSlides = [
  {
    id: 1,
    image: "/ileand-2.png",
    badge: "24/7 Support",
    title: "Contact Eammu Holidays",
    subtitle: "Travel & Visa Agency – Bangladesh, Dubai, Armenia & Georgia",
    description:
      "Reach our certified visa consultants and travel experts for student visas, Umrah packages, holiday tours, and immigration support from anywhere in the world.",
  },
  {
    id: 2,
    image: "/bangladesh_europe_couple.webp",
    badge: "4 Global Offices",
    title: "Visit Our Offices Worldwide",
    subtitle: "Cumilla · Dubai · Yerevan · Tbilisi",
    description:
      "Walk into any of our four global offices for face-to-face visa consultation, travel planning, and premium customer service from our expert team.",
  },
  {
    id: 3,
    image: "/flight_eammu.webp",
    badge: "95% Visa Success",
    title: "Start Your Journey Today",
    subtitle: "Student Visa · Umrah · Holiday Tours · Work Permit",
    description:
      "With a 95% visa success rate and 10,000+ happy clients, Eammu Holidays is Bangladesh's most trusted travel and visa consultancy. Get in touch now.",
  },
];

const whyContactUs = [
  { icon: "🏆", title: "95% Visa Success Rate", desc: "One of the highest visa approval rates among Bangladesh travel agencies." },
  { icon: "⚡", title: "Fast Response", desc: "We reply to all WhatsApp and email queries within 2 hours during business hours." },
  { icon: "🌍", title: "4 Global Offices", desc: "Local support in Bangladesh, UAE, Armenia, and Georgia for your convenience." },
  { icon: "🎓", title: "Certified Consultants", desc: "All our visa consultants are professionally trained and certified." },
  { icon: "🕐", title: "24/7 WhatsApp Support", desc: "Round-the-clock assistance for urgent visa and travel queries." },
  { icon: "💯", title: "10,000+ Happy Clients", desc: "Trusted by thousands of travelers from Bangladesh and beyond since 2022." },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/* ─────────────────────────────────────────────
   OFFICE CARD
───────────────────────────────────────────── */
const OfficeCard = ({ office, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-100 transition-all duration-500 flex flex-col"
    itemScope
    itemType="https://schema.org/LocalBusiness"
  >
    {/* Card header */}
    <div className="bg-[#005a31] p-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{office.flag}</span>
        <div>
          <h2 itemProp="name" className="text-white font-extrabold text-base leading-tight">
            {office.location}
          </h2>
          <span className="text-xs text-[#ffcc00] font-bold uppercase tracking-wider">
            {office.badge}
          </span>
        </div>
      </div>
      <a
        href={`https://wa.me/${office.whatsapp.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp Eammu Holidays ${office.location}`}
        className="bg-[#ffcc00] text-[#005a31] text-xs font-black px-3 py-1.5 rounded-xl hover:bg-yellow-300 transition"
      >
        WhatsApp
      </a>
    </div>

    {/* Card body */}
    <div className="p-5 space-y-3 flex-grow">
      <p itemProp="address" className="text-gray-600 text-sm leading-relaxed flex gap-2">
        <span className="text-[#005a31] mt-0.5 flex-shrink-0">📍</span>
        <span>{office.address}</span>
      </p>

      <div className="flex gap-2 text-sm text-gray-600">
        <span className="text-[#005a31] flex-shrink-0">📞</span>
        <div className="space-y-0.5">
          {office.phone.map((p, i) => (
            <a
              key={i}
              href={`tel:${p}`}
              itemProp="telephone"
              className="block hover:text-[#005a31] hover:underline transition-colors"
            >
              {p}
            </a>
          ))}
        </div>
      </div>

      <div className="flex gap-2 text-sm text-gray-600">
        <span className="text-[#005a31] flex-shrink-0">✉️</span>
        <div className="space-y-0.5">
          {office.email.map((em, i) => (
            <a
              key={i}
              href={`mailto:${em}`}
              itemProp="email"
              className="block hover:text-[#005a31] hover:underline transition-colors"
            >
              {em}
            </a>
          ))}
        </div>
      </div>

      <p className="flex gap-2 text-sm text-gray-500">
        <span className="text-[#005a31] flex-shrink-0">🕐</span>
        <span itemProp="openingHours">{office.hours}</span>
      </p>

      {/* Service tags */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {office.services.map((s) => (
          <span
            key={s}
            className="px-2.5 py-1 bg-green-50 text-[#005a31] text-xs font-semibold rounded-full border border-green-100"
          >
            {s}
          </span>
        ))}
      </div>
    </div>

    {/* Map */}
    <div className="relative h-44 border-t border-gray-100">
      <iframe
        src={office.map}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map – Eammu Holidays ${office.location}`}
        aria-label={`Google Maps location of Eammu Holidays ${office.location}`}
      />
    </div>

    {/* Footer */}
    <div className="p-4 border-t border-gray-50">
      <Link
        href={office.website}
        className="w-full flex items-center justify-center gap-2 bg-[#005a31] text-white py-2.5 rounded-xl text-sm font-bold hover:bg-green-800 transition"
        aria-label={`Visit Eammu Holidays ${office.location} page`}
      >
        🌐 View Office Page
      </Link>
    </div>
  </motion.article>
);

/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */
const ContactForm = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your real form handler / API route
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center space-y-4"
      >
        <div className="text-5xl">✅</div>
        <h3 className="text-2xl font-extrabold text-[#005a31]">Message Sent!</h3>
        <p className="text-gray-500 text-sm">
          Thank you for contacting Eammu Holidays. Our team will reply within 2 hours via email or
          WhatsApp.
        </p>
        <button
          onClick={() => { setStatus("idle"); setFormData({ name:"",email:"",phone:"",service:"",message:"" }); }}
          className="mt-4 px-6 py-2.5 bg-[#005a31] text-white rounded-xl text-sm font-bold hover:bg-green-800 transition"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white p-7 md:p-9 rounded-3xl shadow-xl border border-gray-100"
    >
      <div className="mb-6 space-y-1">
        <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">
          Free Consultation
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Send Us a Message</h2>
        <p className="text-gray-400 text-sm">
          Fill in the form and our expert will get back to you within 2 hours.
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005a31] focus:border-transparent transition"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
              Phone / WhatsApp *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005a31] focus:border-transparent transition"
              placeholder="+880 or +971..."
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005a31] focus:border-transparent transition"
            placeholder="you@email.com"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005a31] focus:border-transparent transition bg-white text-gray-700"
          >
            <option value="">Select a service...</option>
            <option value="student-visa">Student Visa (UK / USA / Canada / Australia)</option>
            <option value="umrah">Umrah Packages from Bangladesh</option>
            <option value="tourist-visa">Tourist Visa</option>
            <option value="work-permit">Work Permit / Immigration</option>
            <option value="holiday-tour">Holiday Tour Package</option>
            <option value="event-management">Event Management</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#005a31] focus:border-transparent transition"
            placeholder="Tell us about your travel plans, visa needs, or questions..."
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={status === "sending"}
          className="w-full bg-[#005a31] text-white px-6 py-4 rounded-2xl font-black text-sm hover:bg-green-800 transition shadow-lg shadow-green-900/20 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wide"
        >
          {status === "sending" ? "Sending..." : "✉️ Send Message"}
        </button>

        <p className="text-center text-xs text-gray-400">
          Or reach us instantly:{" "}
          <a
            href="https://wa.me/8801701699743"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#005a31] font-bold hover:underline"
          >
            WhatsApp +8801701699743
          </a>
        </p>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const ContactWithUs = () => {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main itemScope itemType="https://schema.org/ContactPage">
      {/* Hidden SEO meta */}
      <meta itemProp="name" content="Contact Eammu Holidays – Travel & Visa Agency" />
      <meta
        itemProp="description"
        content="Contact Eammu Holidays for student visa, Umrah packages, holiday tours, and immigration consulting. Offices in Bangladesh, Dubai, Armenia, Georgia."
      />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        aria-label="Contact Eammu Holidays hero"
        className="relative min-h-[55vh] md:min-h-[60vh] flex items-center justify-center py-24 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHero}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1.02 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4 }}
              className="absolute inset-0"
            >
              <Image
                src={heroSlides[currentHero].image}
                alt={`Eammu Holidays contact – ${heroSlides[currentHero].title}`}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-black/15 z-10" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-20 w-full max-w-4xl mx-auto text-center px-4">
          <motion.div
            key={currentHero}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <span className="inline-block px-5 py-2 bg-[#ffcc00] text-[#005a31] rounded-full text-xs font-black tracking-widest uppercase">
              {heroSlides[currentHero].badge}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              {heroSlides[currentHero].title}
            </h1>
            <p className="text-[#ffcc00] font-bold text-base md:text-lg">
              {heroSlides[currentHero].subtitle}
            </p>
            <p className="max-w-2xl mx-auto text-gray-200 text-sm md:text-base leading-relaxed">
              {heroSlides[currentHero].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href="https://wa.me/8801701699743"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#ffcc00] text-[#005a31] px-8 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-yellow-300 transition shadow-xl"
              >
                📞 WhatsApp Now
              </a>
              <a
                href="mailto:info@eammu.com"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition"
              >
                ✉️ Email Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentHero(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 focus:outline-none ${
                i === currentHero
                  ? "w-10 bg-[#ffcc00]"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUICK CONTACT STRIP
      ══════════════════════════════════════════ */}
      <section aria-label="Quick contact details" className="bg-[#005a31] py-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white text-xs md:text-sm">
            <a href="tel:+8801701699743" className="flex items-center gap-2 hover:text-[#ffcc00] transition font-semibold">
              📞 +8801701699743
            </a>
            <a href="https://wa.me/8801701699743" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ffcc00] transition font-semibold">
              💬 WhatsApp (24/7)
            </a>
            <a href="mailto:info@eammu.com" className="flex items-center gap-2 hover:text-[#ffcc00] transition font-semibold">
              ✉️ info@eammu.com
            </a>
            <span className="flex items-center gap-2 opacity-80">
              🌍 4 Global Offices
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">

        {/* ══════════════════════════════════════════
            WHY CONTACT US (SEO prose)
        ══════════════════════════════════════════ */}
        <section aria-label="Why contact Eammu Holidays" className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Why Contact Eammu Holidays?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
              Eammu Holidays is Bangladesh's most trusted travel and visa consultancy with a{" "}
              <strong className="text-[#005a31]">95% visa success rate</strong>,{" "}
              <strong className="text-[#005a31]">10,000+ happy clients</strong>, and dedicated offices in{" "}
              <strong className="text-[#005a31]">Bangladesh, Dubai, Armenia, and Georgia</strong>.
            </p>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {whyContactUs.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-green-100 transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-extrabold text-gray-800 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════
            OFFICES + FORM GRID
        ══════════════════════════════════════════ */}
        <section aria-label="Office locations and contact form" className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Offices (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-1 mb-2">
              <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">
                Our Offices
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Visit Us in Person
              </h2>
              <p className="text-gray-400 text-sm">
                Walk into any of our four offices across Bangladesh, UAE, Armenia, and Georgia for
                personal consultation on student visa, Umrah, holiday tours, and immigration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {offices.map((office, idx) => (
                <OfficeCard key={idx} office={office} index={idx} />
              ))}
            </div>

            {/* Social links */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-gray-700 font-bold text-xs uppercase tracking-wider mb-4">
                Follow Eammu Holidays on Social Media:
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Facebook", href: "https://facebook.com/eammutourism", color: "blue" },
                  { name: "Instagram", href: "https://instagram.com/eammuholidays", color: "pink" },
                  { name: "LinkedIn", href: "https://linkedin.com/company/eammu-immigration-services", color: "blue" },
                  { name: "YouTube", href: "https://www.youtube.com/@Eammutour", color: "red" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Eammu Holidays on ${s.name}`}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition
                      ${s.color === "blue" ? "bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white" : ""}
                      ${s.color === "pink" ? "bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white" : ""}
                      ${s.color === "red" ? "bg-red-50 text-red-600 hover:bg-red-600 hover:text-white" : ""}
                    `}
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form (2 cols on lg, sticky) */}
          <div className="lg:col-span-2 lg:sticky lg:top-24 h-fit">
            <ContactForm />
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════ */}
        <section
          aria-label="Frequently asked questions"
          className="space-y-10"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="text-center space-y-3">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                q: "Where are Eammu Holidays offices located?",
                a: "Eammu Holidays has offices in Cumilla (Bangladesh), Business Bay (Dubai, UAE), Lambron 39 (Yerevan, Armenia), and Levan Gotua Street #3 (Tbilisi, Georgia).",
              },
              {
                q: "How can I apply for a visa through Eammu Holidays?",
                a: "Contact us via WhatsApp (+8801701699743), email (info@eammu.com), or fill in our contact form. Our certified consultants handle UK, USA, Canada, and UAE visas.",
              },
              {
                q: "Does Eammu Holidays offer 24/7 support?",
                a: "Yes. Our WhatsApp support is available 24/7. Office consultation hours are 9AM–9PM (BD time) Sunday to Thursday.",
              },
              {
                q: "What is Eammu Holidays' phone number in Bangladesh?",
                a: "Bangladesh: +8801631312524 and +8801701699743. Dubai: +971507078334. Armenia: +37494810585. Georgia: +995574446218.",
              },
              {
                q: "Does Eammu Holidays provide Umrah packages from Bangladesh?",
                a: "Yes. We offer all-inclusive Umrah packages from Bangladesh including visa, flights, hotel, and guide services.",
              },
              {
                q: "How long does visa processing take with Eammu Holidays?",
                a: "Processing time varies by country and visa type. Student visas typically take 4–12 weeks. Tourist visas can be as quick as 5–10 business days. Contact us for a personalized timeline.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-100 transition-colors"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3 itemProp="name" className="font-extrabold text-gray-800 text-sm md:text-base mb-2">
                  {item.q}
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-gray-500 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════ */}
        <section
          aria-label="Contact Eammu Holidays CTA"
          className="relative bg-[#005a31] rounded-[2.5rem] p-8 md:p-14 text-center text-white overflow-hidden space-y-7"
        >
          <div className="relative z-10 space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[#ffcc00] text-[#005a31] rounded-full text-xs font-black uppercase tracking-wider">
              Start Your Journey
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold">
              Ready to Travel? Let's Talk.
            </h2>
            <p className="text-green-100 max-w-xl mx-auto text-sm md:text-base">
              Whether you need a student visa, Umrah package, holiday tour, or immigration support —
              Eammu Holidays is one message away. Contact us now for a free consultation.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/8801701699743"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#ffcc00] text-[#005a31] px-10 py-4 rounded-2xl font-black text-sm hover:bg-yellow-300 transition shadow-xl uppercase tracking-wide"
            >
              💬 WhatsApp Us Now
            </a>
            <a
              href="mailto:info@eammu.com"
              className="w-full sm:w-auto bg-white/10 backdrop-blur text-white border border-white/30 px-10 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 transition uppercase tracking-wide"
            >
              ✉️ Email: info@eammu.com
            </a>
            <Link
              href="/"
              className="w-full sm:w-auto bg-white/10 backdrop-blur text-white border border-white/30 px-10 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 transition uppercase tracking-wide"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#ffcc00] rounded-full blur-[90px] opacity-10 pointer-events-none" />
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-green-300 rounded-full blur-[90px] opacity-10 pointer-events-none" />
        </section>
      </div>
    </main>
  );
};

export default ContactWithUs;