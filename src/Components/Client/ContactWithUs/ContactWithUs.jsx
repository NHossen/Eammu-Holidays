"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const offices = [
  {
    location: "Cumilla, Bangladesh",
    address: "Office No-178, 1st Floor, Gomoti Tower, Cantonment, Cumilla",
    phone: ["+8801631312524", "+8801701699743"],
    whatsapp: "+8801631312524",
    email: ["bangladesh@eammu.com", "info@eammu.com"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3475734898495!2d91.139884!3d23.483984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI5JzAyLjMiTiA5McKwMDgnMjMuNiJF!5e0!3m2!1sen!2sbd!4v1631312524000!5m2!1sen!2sbd",
    website: "/travel-agency-bangladesh",
  },
  {
    location: "Business Bay, Dubai, UAE",
    address: "Business Bay, Dubai, United Arab Emirates",
    phone: ["+971507078334"],
    whatsapp: "+971507078334",
    email: ["dubai@eammu.com", "info@eammu.com"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178652414707!2d55.2708!3d25.185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6834751ac001%3A0x8cf6347c00000000!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1631312524001!5m2!1sen!2sae",
    website: "/travel-agency-dubai",
  },
  {
    location: "Lambron 39, Yerevan, Armenia",
    address: "Eammu Holidays, Lambron 39, Yerevan",
    phone: ["+37494810585"],
    whatsapp: "+37494810585",
    email: ["armenia@eammu.com", "info@eammu.com"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2435!2d44.5!3d40.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA2JzAwLjAiTiA0NMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sam!4v1631312524002!5m2!1sen!2sam",
    website: "/travel-agency-armenia",
  },
  {
    location: "Tbilisi, Georgia",
    address: "Eammu , Floor 5 ,Levan Gotua Street #3, Tbilisi, Georgia",
    phone: ["+995574446218"],
    whatsapp: "+995574446218",
    email: ["georgia@eammu.com", "info@eammu.com"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.5!2d44.7!3d41.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzAwLjAiTiA0NMKwNDInMDAuMCJF!5e0!3m2!1sen!2sge!4v1631312524003!5m2!1sen!2sge",
    website: "/travel-agency-georgia",
  },
];

const heroSlides = [
  { 
    id: 1, 
    image: "/sylhet_eammu.webp",
    title: "Contact Eammu Holidays – Travel & Visa Support",
    description: "Contact Eammu Holidays for professional travel services, visa assistance, flight bookings, and international tour packages."
  },
  { 
    id: 2, 
    image: "/bangladesh_europe_couple.webp",
    title: "Our Global Travel Agency Offices & Partners",
    description: "Reach our travel agency offices and global partners for trusted tourism services, visa guidance, and international travel support."
  },
  { 
    id: 3, 
    image: "/flight_eammu.webp",
    title: "24/7 Travel Customer Support & Consultation",
    description: "Need help with travel planning, visa applications, or tour packages? Contact our 24/7 customer support team."
  }
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Eammu Holidays Cumilla",
  "alternateName": "Travel Agency Cumilla",
  "url": "https://eammu.com",
  "logo": "https://eammu.com/logo.png",
  "description": "Premium travel agency in Bangladesh providing student visa, tourist visa, and international tour packages.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office No-178, 1st Floor, Gomoti Tower, Cantonment",
    "addressLocality": "Cumilla",
    "addressRegion": "Chittagong",
    "postalCode": "3500",
    "addressCountry": "BD"
  },
  "telephone": "+8801631312524",
  "sameAs": [
    "https://facebook.com/eammutourism",
    "https://instagram.com/eammuholidays",
    "https://linkedin.com/company/eammu-immigration-services",
    "https://www.youtube.com/@Eammutour"
  ],
  "subOrganization": [
    {
      "@type": "TravelAgency",
      "name": "Eammu Holidays Dubai",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Business Bay",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "telephone": "+971507078334"
    },
    {
      "@type": "TravelAgency",
      "name": "Eammu Holidays Armenia",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lambron 39",
        "addressLocality": "Yerevan",
        "addressCountry": "AM"
      },
      "telephone": "+37494810585"
    },
    {
      "@type": "TravelAgency",
      "name": "Eammu Georgia",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Levan Gotua Street #3",
        "addressLocality": "Tbilisi",
        "addressCountry": "GE"
      },
      "telephone": "+995574446218"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where are Eammu Holidays offices located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eammu Holidays has a global presence with its headquarters in Cumilla, Bangladesh, and branch offices in Business Bay (Dubai), Yerevan (Armenia), and Tbilisi (Georgia)."
      }
    },
    {
      "@type": "Question",
      "name": "How can I apply for a visa through Eammu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can apply by contacting us via WhatsApp at +8801631312524, emailing info@eammu.com, or visiting any of our international offices."
      }
    }
  ]
};

const ContactWithUs = () => {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Structured Data for Next.js */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* --- Hero Section with Carousel --- */}
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative py-32 px-4 text-center overflow-hidden min-h-[450px] flex items-center justify-center"
        >
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHero}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image 
                  src={heroSlides[currentHero].image} 
                  alt="Eammu Background" 
                  fill
                  priority
                  className="object-cover scale-105"
                />
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="container mx-auto px-4">
                    <motion.h1 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg"
                    >
                      {heroSlides[currentHero].title}
                    </motion.h1>
                    
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg text-white max-w-5xl mx-auto font-medium leading-relaxed drop-shadow-md"
                    >
                      {heroSlides[currentHero].description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
          
          {/* Contact Info & Form Grid */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {/* Office Info */}
            <div className="space-y-8">
              {offices.map((office, idx) => (
                <div key={idx} className="bg-[#f4fdf7] rounded-3xl p-6 shadow-md border border-green-100">
                  <h2 className="text-2xl font-bold mb-2 text-[#005a31]">{office.location}</h2>
                  <p className="text-gray-700 mb-2">{office.address}</p>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong>{" "}
                    {office.phone.map((p, i) => (
                      <span key={i}>
                        <a href={`tel:${p}`} className="hover:text-[#005a31] hover:underline">{p}</a>{i < office.phone.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>WhatsApp:</strong>{" "}
                    <a href={`https://wa.me/${office.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#005a31] hover:underline">
                      {office.whatsapp}
                    </a>
                  </p>
                  {office.email && office.email.length > 0 && (
                    <p className="text-gray-700 mb-2">
                      <strong>Email:</strong>{" "}
                      {office.email.map((em, i) => (
                        <span key={i}>
                          <a href={`mailto:${em}`} className="hover:text-[#005a31] hover:underline">{em}</a>
                          {i < office.email.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                  )}
                  <div className="w-full h-48 mt-4 rounded-2xl overflow-hidden border border-gray-200">
                    <iframe
                      src={office.map}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map - ${office.location}`}
                    ></iframe>
                  </div>
                  <div className='mt-6'>
                    <Link 
                      href={office.website} 
                      className="bg-[#005a31] text-white px-6 py-2.5 rounded-xl inline-block font-semibold hover:bg-green-800 transition shadow-sm"
                    >
                      🌍 Visit Website
                    </Link>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-gray-800 font-bold mb-4 uppercase tracking-wider text-sm">Follow Us Globally:</p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://facebook.com/eammutourism" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition">Facebook</a>
                  <a href="https://instagram.com/eammuholidays" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-pink-50 text-pink-600 rounded-xl hover:bg-pink-600 hover:text-white transition">Instagram</a>
                  <a href="https://linkedin.com/company/eammu-immigration-services" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-50 text-blue-800 rounded-xl hover:bg-blue-800 hover:text-white transition">LinkedIn</a>
                  <a href="https://www.youtube.com/@Eammutour" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition">Youtube</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#005a31] transition"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#005a31] transition"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    className="w-full border border-gray-200 rounded-2xl px-5 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#005a31] transition"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#005a31] text-white px-6 py-4 rounded-2xl font-bold hover:bg-green-900 transition shadow-lg shadow-green-100"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.section>

          {/* FAQ Section */}
          <section className="mt-20 border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-[#005a31] text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800">Where are Eammu Holidays offices located?</h3>
                <p className="text-gray-600 mt-2">We have physical offices in Bangladesh (Cumilla), UAE (Dubai), Armenia (Yerevan), and Georgia (Tbilisi) to serve you globally.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800">How can I apply for a visa through Eammu?</h3>
                <p className="text-gray-600 mt-2">Simply reach out via WhatsApp or visit our branch. Our experts handle documentation for Canada, USA, UK, and Europe.</p>
              </div>
            </div>
          </section>

          {/* Final CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 pb-10"
          >
            <a
              href="https://wa.me/8801631312524"
              className="w-full sm:w-auto text-center bg-[#005a31] text-white px-10 py-4 rounded-2xl font-bold hover:bg-green-900 transition shadow-lg shadow-green-200"
            >
              📞 WhatsApp/Call Now
            </a>

            <Link
              href="/"
              className="w-full sm:w-auto text-center bg-white border-2 border-[#005a31] text-[#005a31] px-10 py-4 rounded-2xl font-bold hover:bg-green-50 transition"
            >
              ⬅ Back to Home
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default ContactWithUs;