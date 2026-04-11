"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaPassport, FaCheckCircle, FaFileAlt, 
  FaGlobeAmericas, FaClock, FaHeadset,
  FaArrowRight, FaMapMarkerAlt, FaSuitcase,
  FaUserShield, FaHandHoldingHeart, FaPlaneDeparture,
  FaBuilding, FaFileSignature, FaHistory
} from "react-icons/fa";
import TouristVisa from "@/Components/Client/visaServices/Visa/TouristVisaBangladesh/TouristVisa/TouristVisa";

const TouristVisaBangladesh = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const steps = [
    { title: "Profile Analysis", desc: "Deep assessment of your financial and home ties." },
    { title: "Error-Free Docs", desc: "Personalized checklists for NOC, Trade License & Tax files." },
    { title: "Slot & Submission", desc: "Fast-track appointment booking at VFS & Embassies." },
    { title: "Visa Stamping", desc: "Receive your passport with professional success tracking." }
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans overflow-x-hidden">
      
      <div>
        <TouristVisa />
      </div>

      {/* 🌍 SEO Content Section */}
      <section id="services" className="py-16 md:py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-6 leading-tight">
              Your Trusted Partner for <br /> <span className="text-orange-500">Global Travel Visas</span>
            </h2>
            <div className="prose prose-slate max-w-none text-gray-600 mb-8">
              <p className="text-base md:text-lg leading-relaxed">
                Applying for a <strong>tourist visa from Bangladesh</strong> requires more than just a form. At <strong>Eammu Holidays</strong>, we focus on <strong>"Home Ties"</strong> and <strong>"Financial Solvency"</strong>—the two biggest reasons for rejection. Whether you are a business owner with a Trade License or a service holder with an NOC, we customize your file to 2026 embassy standards.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <FaFileSignature className="text-orange-500 mb-2 text-xl" />
                <h4 className="font-bold text-gray-800">Custom Checklists</h4>
                <p className="text-xs text-gray-500">Tailored to your specific profession and income source.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <FaHistory className="text-[#005a31] mb-2 text-xl" />
                <h4 className="font-bold text-gray-800">Rejection Recovery</h4>
                <p className="text-xs text-gray-500">Expert analysis of previous refusal letters to re-apply successfully.</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "IATA-Standard Flight & Hotel Reservations for Visa",
                "Professional Cover Letter & Detailed Itinerary Writing",
                "Embassy Interview Grooming (USA/Schengen)",
                "Bank Statement & Financial Document Audit"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-50">
                  <FaCheckCircle className="text-green-600 text-lg flex-shrink-0" />
                  <span className="font-bold text-gray-700 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureBox icon={<FaPassport />} title="USA B1/B2" desc="5-10 Year Multiple Entry support. Interview prep included." color="bg-blue-50 text-blue-600" />
            <FeatureBox icon={<FaGlobeAmericas />} title="Schengen 2026" desc="Access 29 countries including Bulgaria & Romania." color="bg-orange-50 text-orange-600" />
            <FeatureBox icon={<FaFileAlt />} title="UK Visitor" desc="Standard 6-month to 10-year visitor visa expertise." color="bg-red-50 text-red-600" />
            <FeatureBox icon={<FaPlaneDeparture />} title="Asia Express" desc="Vietnam, Thailand, & UAE E-visas in 24-72 hours." color="bg-green-50 text-green-600" />
          </div>
        </div>
      </section>

      {/* 📊 Trust Bar */}
      <section className="container mx-auto py-12 bg-[#005a31]">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-3xl md:text-5xl font-black text-orange-400">98%</h4>
              <p className="text-white text-[10px] uppercase font-bold tracking-widest">Success Rate</p>
            </div>
            <div>
              <h4 className="text-3xl md:text-5xl font-black text-orange-400">12k+</h4>
              <p className="text-white text-[10px] uppercase font-bold tracking-widest">Passports Processed</p>
            </div>
            <div>
              <h4 className="text-3xl md:text-5xl font-black text-orange-400">29</h4>
              <p className="text-white text-[10px] uppercase font-bold tracking-widest">Schengen States</p>
            </div>
            <div>
              <h4 className="text-3xl md:text-5xl font-black text-orange-400">24/7</h4>
              <p className="text-white text-[10px] uppercase font-bold tracking-widest">Expert Support</p>
            </div>
        </div>
      </section>

      {/* 📊 Process Timeline */}
      <section className="py-16 md:py-24 container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-[#005a31] uppercase italic">Our 4-Step Success Method</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="text-center relative">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-3xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
      </section>

      {/* 📑 Branch Info */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto container px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="bg-orange-500 text-white px-5 py-1.5 rounded-xl text-[10px] font-black mb-6 inline-block uppercase">Official Headquarters</span>
            <h3 className="text-3xl md:text-4xl font-black text-[#005a31] mb-6">Expert Visa Advice <br /> is Just a Visit Away</h3>
            <div className="space-y-6">
              <ContactInfo icon={<FaMapMarkerAlt />} text="Gomoti Tower (4th Floor), Cantonment, Cumilla" />
              <ContactInfo icon={<FaBuilding />} text="Corporate Hub: Dhaka & Dubai (UAE)" />
              <ContactInfo icon={<FaHeadset />} text="Call: +8801631312524" />
            </div>
          </div>
          <div className="flex-1 w-full bg-white h-64 md:h-80 rounded-[3rem] shadow-2xl border-8 border-white overflow-hidden relative">
            <Image 
               src="/eammuicon.jpg" 
               alt="Eammu Holidays Office" 
               fill 
               className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 🏠 Sticky Footer CTA */}
      <footer className="py-20 text-center bg-white px-6 border-t border-slate-100">
        <motion.div whileHover={{ scale: 1.02 }}>
           <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-8">Ready to travel in 2026?</h2>
           <Link href="https://wa.me/8801631312524" className="inline-flex items-center gap-3 bg-[#005a31] text-white px-12 py-6 rounded-[2rem] text-lg font-black shadow-2xl hover:bg-orange-600 transition-all">
             START FREE ASSESSMENT <FaArrowRight />
           </Link>
           <p className="mt-6 text-gray-400 text-xs font-bold uppercase tracking-widest">Trusted by 10,000+ Bangladeshi Travelers</p>
        </motion.div>
      </footer>
    </div>
  );
};

// --- HELPER COMPONENTS (Standard JSX) ---

const FeatureBox = ({ icon, title, desc, color }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-50 flex flex-col items-center text-center group"
  >
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm`}>
      {icon}
    </div>
    <h3 className="text-xl font-black text-gray-800 mb-3 uppercase tracking-tighter">{title}</h3>
    <p className="text-[11px] text-gray-500 leading-relaxed font-bold uppercase tracking-widest">{desc}</p>
  </motion.div>
);

const ContactInfo = ({ icon, text }) => (
    <div className="flex items-center gap-4 group">
        <div className="w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">{icon}</div>
        <span className="font-bold text-gray-700 text-sm md:text-base">{text}</span>
    </div>
);

export default TouristVisaBangladesh;