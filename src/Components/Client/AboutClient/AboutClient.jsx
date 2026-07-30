"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────── FAQ Item ─────────────────────────── */
const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="border-b border-gray-100 last:border-0 hover:bg-amber-50/30 transition-colors duration-300"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left group focus:outline-none px-4"
        aria-expanded={isOpen}
      >
        <span
          itemProp="name"
          className={`text-base md:text-lg font-bold transition-colors duration-300 pr-4 ${
            isOpen ? "text-[#005a31]" : "text-gray-800 group-hover:text-[#005a31]"
          }`}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-xl text-[#005a31] font-light w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-200 group-hover:border-[#005a31] transition-colors"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <p
              itemProp="text"
              className="pb-5 px-4 text-gray-600 leading-relaxed text-sm md:text-base"
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─────────────────────────── Main Component ─────────────────────────── */
export default function AboutClient({
  heroSlides = [],
  stats = [],
  services = [],
  faqs = [],
  trustBadges = [],
  officeLocations = [],
}) {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    if (heroSlides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  if (!heroSlides || heroSlides.length === 0) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <main className="overflow-hidden" itemScope itemType="https://schema.org/TravelAgency">

      {/* ── Hidden SEO metadata for crawlers ── */}
      <meta itemProp="name" content="Eammu Holidays" />
      <meta itemProp="url" content="https://eammu.com" />
      <meta
        itemProp="description"
        content="Eammu Holidays is a trusted travel and visa consultancy in Bangladesh offering student visa, Umrah packages, holiday tours, and immigration consulting with 95% visa success rate."
      />

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section
        aria-label="About Eammu Holidays – Travel and Visa Agency Bangladesh"
        className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center py-24 px-4 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHero}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1.03 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image
                src={heroSlides[currentHero].image}
                alt={`Eammu Holidays – ${heroSlides[currentHero].title}`}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20 z-10" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-5xl mx-auto text-center">
          <motion.div
            key={currentHero}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-6 px-4"
          >
            <span className="inline-block px-5 py-2 bg-[#ffcc00] text-[#005a31] rounded-full text-xs font-black tracking-widest uppercase shadow-lg">
              {heroSlides[currentHero].badge}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
              <span className="text-[#ffcc00]">{heroSlides[currentHero].highlight}</span>{" "}
              {heroSlides[currentHero].title}
            </h1>

            <p className="max-w-3xl mx-auto text-base md:text-xl text-gray-100 leading-relaxed drop-shadow-md">
              <strong className="text-white font-bold">{heroSlides[currentHero].boldText}</strong>{" "}
              {heroSlides[currentHero].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href="https://wa.me/8801701699743"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ffcc00] text-[#005a31] px-8 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-yellow-300 transition-all shadow-xl"
              >
                📞 WhatsApp Us Now
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-all"
              >
                Explore Services
              </Link>
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
                  ? "w-10 bg-[#ffcc00] shadow-lg shadow-[#ffcc00]/50"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRUST BADGES (SEO + credibility)
      ══════════════════════════════════════════ */}
      {trustBadges.length > 0 && (
        <section aria-label="Trust and credibility badges" className="bg-[#005a31] py-5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-white">
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-wide opacity-90">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-20">

        {/* ══════════════════════════════════════════
            ABOUT INTRO (SEO text block)
        ══════════════════════════════════════════ */}
        <section aria-label="About Eammu Holidays" className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Bangladesh's Most Trusted{" "}
                <span className="text-[#005a31]">Travel & Visa Agency</span>
              </h2>
              <div className="w-12 h-1 bg-[#ffcc00] rounded-full" />
            </div>

            <p className="text-gray-600 leading-relaxed">
              Founded in 2012, <strong>Eammu Holidays</strong> is a professional global travel and
              visa consultancy headquartered in <strong>Dhaka, Bangladesh</strong>, with branch
              offices in <strong>Dubai (UAE)</strong>, <strong>Yerevan (Armenia)</strong>, and{" "}
              <strong>Tbilisi (Georgia)</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We specialize in <strong>student visa processing</strong> for the UK, USA, Canada, and
              Australia, <strong>Umrah packages</strong>, holiday tours, immigration consulting, and
              work permit assistance — serving <strong>10,000+ happy clients</strong> with a{" "}
              <strong>95% visa success rate</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're a student dreaming of studying abroad, a family planning the perfect
              holiday, or a professional seeking immigration support, Eammu Holidays is your
              one-stop travel partner in Bangladesh.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Student Visa", "Umrah Packages", "Holiday Tours", "Work Permit", "Immigration"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-green-50 text-[#005a31] text-xs font-bold rounded-full border border-green-100"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-green-900/10"
          >
            <Image
              src="/the-love-island.webp"
              alt="Eammu Holidays – Professional travel and visa consultancy team Bangladesh"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white font-bold text-sm">Since 2012 · 4 Global Offices</p>
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════
            STATS
        ══════════════════════════════════════════ */}
        <motion.section
          aria-label="Eammu Holidays key statistics"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:border-green-100"
            >
              <div className="text-3xl mb-3 bg-green-50 w-14 h-14 flex items-center justify-center mx-auto rounded-2xl">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#005a31] mb-1">
                {stat.val}
              </h3>
              <p className="text-gray-500 font-semibold text-xs tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.section>

        {/* ══════════════════════════════════════════
            SERVICES
        ══════════════════════════════════════════ */}
        <section aria-label="Eammu Holidays services" className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              Our Multi-Industrial Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
              From visa consultancy and Umrah packages to IT services and textile manufacturing —
              Eammu Holidays is more than a travel agency.
            </p>
            <div className="w-14 h-1 bg-[#ffcc00] mx-auto rounded-full" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl hover:shadow-[#005a31]/5 hover:border-green-100 transition-all duration-500"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3
                    itemProp="name"
                    className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#005a31] transition-colors duration-300"
                  >
                    {service.title}
                  </h3>
                  <p
                    itemProp="description"
                    className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow"
                  >
                    {service.desc}
                  </p>

                  <Link
                    href={service.link}
                    className="inline-flex items-center text-[#005a31] font-black uppercase text-xs tracking-wider group-hover:text-[#ffcc00] transition-colors duration-300"
                    aria-label={`${service.btn} – ${service.title}`}
                  >
                    {service.btn}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════
            VISION
        ══════════════════════════════════════════ */}
        <section
          aria-label="Eammu Holidays vision and values"
          className="relative rounded-[2.5rem] bg-[#005a31] text-white p-8 md:p-14 overflow-hidden shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl space-y-6"
          >
            <div className="space-y-1">
              <span className="uppercase tracking-[0.2em] text-[#ffcc00] font-black text-xs">
                Our Vision
              </span>
              <h2 className="text-3xl md:text-5xl font-bold">
                Empowering Every Traveler
              </h2>
            </div>
            <p className="text-lg md:text-xl text-green-50/90 leading-relaxed font-light">
              Eammu Holidays envisions a world where every Bangladeshi traveler can explore the
              globe with confidence, backed by transparent services, expert guidance, and a team
              that genuinely cares about your journey.
            </p>
            <p className="text-base text-green-100/80 leading-relaxed">
              From your first student visa application to a luxury world tour, we are your lifelong
              travel partner — combining local expertise with global reach.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Transparency", "Innovation", "Empowerment", "Trust"].map((tag) => (
                <div
                  key={tag}
                  className="px-5 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 text-sm font-semibold"
                >
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
          <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#ffcc00] rounded-full blur-[100px] opacity-10" />
          <div className="absolute -top-16 right-10 w-52 h-52 bg-green-300 rounded-full blur-[80px] opacity-10" />
        </section>

        {/* ══════════════════════════════════════════
            OFFICE LOCATIONS (Local SEO)
        ══════════════════════════════════════════ */}
        {officeLocations.length > 0 && (
          <section aria-label="Eammu Holidays global office locations" className="space-y-10">
            <div className="text-center space-y-3">
              <span className="text-[#005a31] text-xs font-black uppercase tracking-[0.2em]">
                Global Presence
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Our Offices Around the World
              </h2>
              <div className="w-14 h-1 bg-[#ffcc00] mx-auto rounded-full" />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {officeLocations.map((office, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-green-100 transition-all"
                  itemScope
                  itemType="https://schema.org/LocalBusiness"
                >
                  <div className="text-4xl mb-3">{office.flag}</div>
                  <h3
                    itemProp="name"
                    className="font-extrabold text-gray-800 text-base mb-1"
                  >
                    {office.city}
                  </h3>
                  <p
                    itemProp="addressCountry"
                    className="text-gray-400 text-xs uppercase tracking-wide mb-3"
                  >
                    {office.country}
                  </p>
                  <a
                    href={`tel:${office.phone}`}
                    itemProp="telephone"
                    className="text-[#005a31] text-xs font-semibold hover:underline"
                  >
                    {office.phone}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

        {/* ══════════════════════════════════════════
            FAQ (Schema-ready)
        ══════════════════════════════════════════ */}
        <section
          aria-label="Frequently Asked Questions about Eammu Holidays"
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
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Everything you need to know about Eammu Holidays' visa services, tours, and more.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-2 md:p-6">
            {faqs.map((faq, i) => (
              <FAQItem key={i} index={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA / CONTACT
        ══════════════════════════════════════════ */}
        <section
          aria-label="Contact Eammu Holidays"
          className="bg-gradient-to-br from-white to-green-50/50 border-2 border-green-100 rounded-[2.5rem] p-8 md:p-14 text-center space-y-8 shadow-sm relative overflow-hidden"
        >
          <div className="space-y-3">
            <span className="inline-block px-4 py-1.5 bg-[#ffcc00] text-[#005a31] rounded-full text-xs font-black uppercase tracking-wider">
              Ready to Travel?
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
              Contact Eammu Holidays Today
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
              Need a student visa, Umrah package, holiday tour, or immigration consultation? Our
              certified experts are available 24/7 to guide you from Bangladesh or anywhere in the
              world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
            <div className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-green-100 shadow-sm">
              <span className="text-2xl">📞</span>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">Call / WhatsApp</h4>
                <p className="text-xs text-gray-500 mt-1">+8801631312524</p>
                <p className="text-xs text-gray-500">+971507078334</p>
                <p className="text-xs text-gray-500">+971507078334 (UAE)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-green-100 shadow-sm">
              <span className="text-2xl">📧</span>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">Email Us</h4>
                <a
                  href="mailto:info@eammu.com"
                  className="text-xs text-[#005a31] hover:underline mt-1 block"
                >
                  info@eammu.com
                </a>
                <p className="text-xs text-gray-400 mt-1">We reply within 2 hours</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-green-100 shadow-sm sm:col-span-2 lg:col-span-1">
              <span className="text-2xl">⏰</span>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">Support Hours</h4>
                <p className="text-xs text-gray-500 mt-1">24/7 WhatsApp Support</p>
                <p className="text-xs text-gray-500">Office: 9AM–9PM (BD time)</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <a
              href="https://wa.me/8801701699743"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#005a31] text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-green-800 transition shadow-lg shadow-green-900/20 uppercase tracking-wide"
            >
              💬 Start on WhatsApp
            </a>
            <a
              href="mailto:info@eammu.com"
              className="w-full sm:w-auto bg-[#ffcc00] text-[#005a31] px-10 py-4 rounded-2xl font-black text-sm hover:bg-yellow-300 transition shadow-lg uppercase tracking-wide"
            >
              ✉️ Send Email
            </a>
            <Link
              href="/"
              className="w-full sm:w-auto bg-white border-2 border-[#005a31] text-[#005a31] px-10 py-4 rounded-2xl font-bold text-sm hover:bg-green-50 transition uppercase tracking-wide"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Decorative */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#ffcc00] rounded-full blur-[80px] opacity-20 pointer-events-none" />
        </section>
      </div>
    </main>
  );
}