"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUniversity, FaFileSignature, 
  FaAward, FaUserGraduate,
  FaArrowRight, FaBookOpen,
  FaClock, FaHeadset, FaMapMarkerAlt, FaSearchLocation,
  FaBriefcase, FaHandHoldingUsd, FaFileContract
} from "react-icons/fa";
import TopStudyDestinations from "./TopStudyDestinations/TopStudyDestinations";
import StudentVisa from "./StudentVisa/StudentVisa";

const StudentVisaBangladesh = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  };

  const countries = [
    { name: "USA", desc: "F1 Visa support for Top-tier Universities.", icon: "🇺🇸", color: "bg-blue-50 text-blue-600" },
    { name: "UK", desc: "Fast-track CAS and Student Route Visa.", icon: "🇬🇧", color: "bg-red-50 text-red-600" },
    { name: "Canada", desc: "Study Permit & PGWP Guidance.", icon: "🇨🇦", color: "bg-orange-50 text-orange-600" },
    { name: "Australia", desc: "Subclass 500 Visa support.", icon: "🇦🇺", color: "bg-green-50 text-green-600" },
  ];



  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans overflow-x-hidden">
      {/* JSON-LD for Next.js */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Eammu Holidays",
          "url": "https://eammu.com",
          "logo": "https://eammu.com/images/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Gomoti Tower, 1st Floor, Cantonment",
            "addressLocality": "Cumilla",
            "addressCountry": "BD"
          }
        }) }}
      />

    <StudentVisa />

      <TopStudyDestinations />

      {/* 🏛️ Services Section */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-4 uppercase italic tracking-tighter">Complete Guidance</h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<FaUniversity />} 
            title="University Mapping" 
            desc="We match your GPA and budget with global universities offering the best scholarships and career prospects."
          />
          <ServiceCard 
            icon={<FaBookOpen />} 
            title="SOP & Documentation" 
            desc="Professional help in writing winning Statements of Purpose and organizing academic transcripts for fast approval."
          />
          <ServiceCard 
            icon={<FaFileSignature />} 
            title="Express Visa Filing" 
            desc="Meticulous financial proof preparation and filing support for UK CAS, US I-20, and Canada Study Permits."
          />
        </div>
      </section>

      {/* 🌎 Destinations Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-[#005a31] mb-8 uppercase tracking-tighter italic leading-tight">
                Top Destinations For <br /> Bangladeshi Students
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {countries.map((c, i) => (
                  <div key={i} className="p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className={`w-12 h-12 ${c.color} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                        {c.icon}
                    </div>
                    <h4 className="font-black text-gray-800 text-xl mb-2">{c.name}</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#005a31]/5 rounded-[3.5rem] rotate-3 -z-10"></div>
              <div className="relative w-full h-[450px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/study-usa.jpg" 
                  alt="Bangladeshi Student Success Abroad" 
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="py-20 container mx-auto px-6">
        <div className="bg-[#005a31] rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 text-white relative overflow-hidden shadow-2xl">
          <FaUserGraduate className="absolute -bottom-20 -right-20 text-white/5 text-[25rem] hidden md:block" />
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-6xl font-black mb-12 tracking-tighter italic">Why Eammu Holidays?</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <TrustItem icon={<FaBriefcase />} title="Pre-Departure Briefs" desc="Know the laws, part-time work limits, and culture before you fly." />
              <TrustItem icon={<FaHandHoldingUsd />} title="Scholarship Help" desc="We target 50% to 100% merit-based funding for students." />
              <TrustItem icon={<FaFileContract />} title="Mock Interviews" desc="Face the embassy with confidence through our intensive training." />
              <TrustItem icon={<FaSearchLocation />} title="Accommodation" desc="We help you find safe, affordable housing near your campus." />
            </div>
          </div>
        </div>
      </section>

      {/* 📑 FAQ Section */}
      <section className="py-20 container mx-auto px-6">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-12 text-center tracking-tighter italic">Common Questions</h2>
            <div className="space-y-4">
                <FAQItem question="What is the IELTS requirement for 2026?" answer="Typically 6.0 for Bachelors and 6.5 for Masters, but some UK/USA universities now offer IELTS waivers based on MOI." />
                <FAQItem question="Can Eammu help with Spousal Visas?" answer="Absolutely. We process dependent visas for spouses and children for UK and Canada routes." />
                <FAQItem question="When should I start applying?" answer="For the September intake, you should start at least 6 months earlier (January/February) to secure seats and scholarships." />
            </div>
         </div>
      </section>

      {/* 📑 Contact Section */}
      <section className="py-12 md:py-24 container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white shadow-2xl rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 border border-slate-50">
          <div className="flex-1 w-full">
            <span className="bg-orange-500 text-white px-5 py-2 rounded-xl text-[10px] font-black mb-6 inline-block uppercase tracking-widest">Counseling Center</span>
            <h3 className="text-3xl md:text-5xl font-black text-[#005a31] mb-6">Let's Design <br /> Your Future</h3>
            <div className="space-y-6">
              <ContactInfo icon={<FaMapMarkerAlt />} text="Gomoti Tower (4th Floor), Cantonment, Cumilla" />
              <ContactInfo icon={<FaClock />} text="Sat - Thu (10 AM - 7 PM)" />
              <ContactInfo icon={<FaHeadset />} text="+8801631312524" />
            </div>
          </div>
          <div className="flex-1 w-full bg-slate-50 h-72 md:h-[400px] rounded-[3rem] md:rounded-[4rem] border-4 border-white shadow-inner flex items-center justify-center">
              <span className="text-slate-400 font-black italic text-sm md:text-base tracking-widest uppercase">Office Location Loading...</span>
          </div>
        </div>
      </section>

      {/* 🏠 Footer CTA */}
      <footer className="py-20 text-center px-6 ">
        <motion.div whileHover={{ scale: 1.02 }}>
           <a href="https://wa.me/8801631312524" className="inline-flex items-center gap-4 bg-[#005a31] text-white px-10 md:px-20 py-5 md:py-7 rounded-[2rem] text-lg md:text-2xl font-black shadow-2xl hover:bg-orange-600 transition-all uppercase">
             Get Free Counseling <FaArrowRight />
           </a>
        </motion.div>
        <p className="mt-12 text-gray-400 font-black uppercase text-[10px] tracking-[0.3em]">Excellence in Education Since 2018</p>
      </footer>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const ServiceCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -15 }}
    className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-50 group hover:border-green-100 transition-all duration-500"
  >
    <div className="w-16 h-16 bg-green-50 text-[#005a31] rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-[#005a31] group-hover:text-white transition-all duration-500 shadow-sm">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm font-medium">{desc}</p>
  </motion.div>
);

const TrustItem = ({ icon, title, desc }) => (
  <div className="flex gap-6">
    <div className="mt-1 text-orange-400 text-3xl flex-shrink-0">{icon}</div>
    <div>
      <h4 className="font-black text-xl md:text-2xl mb-2">{title}</h4>
      <p className="text-green-100/70 text-sm md:text-base leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

const StatCard = ({ count, label }) => (
    <div className="text-center p-4">
        <h4 className="text-4xl md:text-5xl font-black text-orange-400 mb-1">{count}</h4>
        <p className="text-white text-[10px] uppercase font-bold tracking-widest">{label}</p>
    </div>
);

const FAQItem = ({ question, answer }) => (
    <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm">
        <h4 className="text-lg md:text-xl font-black text-[#005a31] mb-3 flex items-start gap-3">
            <span className="bg-orange-100 text-orange-600 w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">Q</span> {question}
        </h4>
        <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed ml-9">{answer}</p>
    </div>
);

const ContactInfo = ({ icon, text }) => (
    <div className="flex items-center gap-5 group">
        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">{icon}</div>
        <span className="font-black text-gray-700 text-base md:text-xl">{text}</span>
    </div>
);

export default StudentVisaBangladesh;