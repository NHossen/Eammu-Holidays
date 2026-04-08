"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaBriefcase, FaBuilding, FaArrowRight, 
  FaClock, FaCheckCircle, FaShieldAlt, 
  FaHardHat, FaTools, FaStethoscope,
  FaLaptopCode, FaCogs, FaHeadset, FaMapMarkerAlt, FaGlobe , FaHandshake
} from "react-icons/fa";

/**
 * NOTE: In Next.js App Router, SEO Metadata is usually handled in a 
 * separate 'layout.js' or 'page.js' file using the `export const metadata` 
 * object. Since this is a "use client" component, I have included a 
 * JSON-LD script tag directly for structured data.
 */

export default function WorkVisaBangladesh() {
  const industries = [
    { name: "IT & Software", icon: <FaLaptopCode />, color: "text-blue-600" },
    { name: "Healthcare", icon: <FaStethoscope />, color: "text-red-600" },
    { name: "Engineering", icon: <FaCogs />, color: "text-slate-700" },
    { name: "Construction", icon: <FaHardHat />, color: "text-orange-600" },
    { name: "Manufacturing", icon: <FaTools />, color: "text-gray-600" },
    { name: "Hospitality", icon: <FaBuilding />, color: "text-amber-600" },
  ];

  const destinations = [
    { country: "United Kingdom", type: "Skilled Worker Visa", detail: "Pathway to ILR (Permanent Residency) in 5 years." },
    { country: "Canada", type: "Work Permit (LMIA)", detail: "Employer-driven pathways for various skill levels." },
    { country: "Romania / Poland", type: "EU Work Permit", detail: "High demand for construction and manufacturing." },
    { country: "Middle East", type: "Employment Visa", detail: "Fast processing for UAE, KSA, and Qatar permits." },
  ];

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Eammu Holidays",
    "url": "https://eammu.com",
    "logo": "https://eammu.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gomoti Tower, 1st Floor, Cantonment",
      "addressLocality": "Cumilla",
      "addressCountry": "BD"
    },
    "contactPoint": [
      { "@type": "ContactPoint", "telephone": "+8801631312524", "contactType": "customer service" }
    ]
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans overflow-x-hidden">
      {/* Add JSON-LD to Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 🚀 Corporate Hero Section */}
      <section className="relative min-h-[85vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920" 
            alt="Corporate Skyscrapers" 
            fill
            priority
            className="object-cover scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-tr from-[#004d2a] via-[#004d2a]/90 to-black/20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-10 items-center pt-24 pb-12 md:py-0">
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-center md:text-left">
            <span className="bg-orange-500 text-white px-5 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 inline-flex items-center gap-2 shadow-lg">
              <FaShieldAlt /> Certified Work Permit Consultant
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Build Your <br /> 
              <span className="text-orange-400 drop-shadow-md italic">Global Career</span>
            </h1>
            <p className="text-white/90 max-w-xl mb-10 leading-relaxed text-base md:text-lg font-medium border-l-4 border-orange-500/50 pl-6">
              Get expert guidance for <strong>work visa applications from Bangladesh</strong>. We specialize in <strong>Skilled Worker Visas</strong>, <strong>LMIA Permits</strong>, and <strong>European Work Contracts</strong>.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href="https://wa.me/8801631312524" className="bg-white text-[#004d2a] px-10 py-4 rounded-2xl font-black hover:bg-orange-500 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-2 text-sm md:text-base uppercase tracking-tighter">
                Eligibility Check <FaArrowRight />
              </a>
            </div>
          </motion.div>
          
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="hidden lg:block">
             <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[4rem] border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-8 text-center">
                    <div>
                        <h4 className="text-4xl md:text-5xl font-black text-orange-400">98%</h4>
                        <p className="text-white text-[10px] uppercase font-bold tracking-widest mt-2">Success Rate</p>
                    </div>
                    <div>
                        <h4 className="text-4xl md:text-5xl font-black text-orange-400">15+</h4>
                        <p className="text-white text-[10px] uppercase font-bold tracking-widest mt-2">Active Regions</p>
                    </div>
                    <div>
                        <h4 className="text-4xl md:text-5xl font-black text-orange-400">2026</h4>
                        <p className="text-white text-[10px] uppercase font-bold tracking-widest mt-2">Quota Intake</p>
                    </div>
                    <div>
                        <h4 className="text-4xl md:text-5xl font-black text-orange-400">24/7</h4>
                        <p className="text-white text-[10px] uppercase font-bold tracking-widest mt-2">Support</p>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 💼 Key Work Visa Services */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#004d2a] mb-4 uppercase tracking-tighter italic">
            Skilled Immigration Pathways
          </h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-500 max-w-3xl mx-auto mt-6 text-sm md:text-base font-medium leading-relaxed">
            Professional guidance for Bangladeshi workers seeking legal employment abroad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <WorkCard 
            icon={<FaBriefcase />} 
            title="Skilled Worker" 
            desc="For IT, Healthcare, and Engineering. Pathway to PR in the UK & Australia."
            tag="Professional"
          />
          <WorkCard 
            icon={<FaBuilding />} 
            title="Employer Sponsored" 
            desc="Full management for job offers in Canada, USA, or the Middle East."
            tag="Corporate"
          />
          <WorkCard 
            icon={<FaHandshake />} 
            title="Blue Collar" 
            desc="Legal permits for construction and manufacturing in Romania & Poland."
            tag="General"
          />
        </div>
      </section>

      {/* 🚀 Industry Focus */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] md:rounded-[5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white">
            <div className="lg:w-1/3 bg-[#004d2a] p-10 md:p-16 text-white flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-black mb-6 italic leading-tight">Trending Sectors for 2026</h3>
              <div className="space-y-4">
                <CheckItem text="CV Branding" />
                <CheckItem text="Portal Optimization" />
                <CheckItem text="Contract Review" />
                <CheckItem text="Post-Arrival Help" />
              </div>
            </div>
            <div className="lg:w-2/3 p-10 md:p-16 grid grid-cols-2 md:grid-cols-3 gap-6">
              {industries.map((item, idx) => (
                <div key={idx} className="text-center p-6 rounded-3xl border border-slate-100 hover:bg-green-50/50 transition-all group">
                  <div className={`text-3xl md:text-4xl mb-4 ${item.color} group-hover:scale-110 transition-transform flex justify-center`}>
                    {item.icon}
                  </div>
                  <p className="font-black text-gray-800 text-sm md:text-base">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🌍 Global Destinations List */}
      <section className="py-16 md:py-24 container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-[#004d2a] mb-12 text-center tracking-tighter italic">Popular Destinations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                    <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6"><FaGlobe /></div>
                    <h4 className="font-black text-gray-800 text-xl mb-2">{dest.country}</h4>
                    <p className="text-orange-600 text-xs font-black uppercase tracking-widest mb-3">{dest.type}</p>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">{dest.detail}</p>
                </div>
            ))}
          </div>
      </section>

      {/* 📅 Process Timeline */}
      <section className="py-16 md:py-24 bg-[#004d2a] rounded-[3rem] md:rounded-[5rem] mx-4 my-12 text-white shadow-2xl overflow-hidden relative">
        <FaBriefcase className="absolute -bottom-10 -left-10 text-white/5 text-[20rem] hidden md:block" />
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-6xl font-black text-center mb-16 tracking-tighter italic">Application Timeline</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                <TimelineStep num="01" title="Assessment" desc="Skills review." />
                <TimelineStep num="02" title="Contracting" desc="Verifying offers." />
                <TimelineStep num="03" title="Submission" desc="Embassy filing." />
                <TimelineStep num="04" title="Deployment" desc="Pre-departure." />
            </div>
        </div>
      </section>

      {/* 📑 Branch Section */}
      <section className="py-12 md:py-24 container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white shadow-2xl rounded-[3rem] p-8 md:p-16 border border-slate-100">
          <div className="flex-1 w-full">
            <h3 className="text-3xl md:text-5xl font-black text-[#004d2a] mb-6 tracking-tighter italic">Visit Our Office</h3>
            <div className="space-y-6">
              <ContactInfo icon={<FaMapMarkerAlt />} text="Gomoti Tower, Cantonment, Cumilla" />
              <ContactInfo icon={<FaClock />} text="Sat - Thu: 10:00 AM - 7:00 PM" />
              <ContactInfo icon={<FaHeadset />} text="+8801631312524" />
            </div>
          </div>
          <div className="flex-1 w-full bg-slate-100 h-72 md:h-[400px] rounded-[3rem] flex items-center justify-center relative overflow-hidden group">
              <span className="text-slate-400 font-black italic tracking-widest uppercase">Office Location Loading...</span>
          </div>
        </div>
      </section>

      {/* 🏠 Footer */}
      <footer className="py-20 text-center px-6 border-t border-slate-100">
        <motion.div whileHover={{ scale: 1.02 }}>
            <h2 className="text-3xl md:text-4xl font-black text-[#004d2a] mb-10 tracking-tighter uppercase italic underline decoration-orange-400 decoration-4">Ready to start?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="https://wa.me/8801631312524" className="bg-[#004d2a] text-white px-12 py-5 rounded-2xl text-lg font-black shadow-2xl hover:bg-orange-500 transition-all flex items-center justify-center gap-3">
                WhatsApp Us <FaArrowRight />
              </a>
            </div>
        </motion.div>
        <p className="mt-12 text-gray-400 font-black uppercase text-[10px] tracking-[0.4em]">International Work Permits 2026</p>
      </footer>
    </div>
  );
}

// --- SUB-COMPONENTS ---

const WorkCard = ({ icon, title, desc, tag }) => (
  <motion.div whileHover={{ y: -15 }} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-50 group hover:border-[#004d2a] transition-all duration-500 relative overflow-hidden">
    <div className="absolute top-0 right-0 bg-green-50 text-[#004d2a] px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-bl-3xl">
      {tag}
    </div>
    <div className="w-16 h-16 bg-slate-50 text-[#004d2a] rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-[#004d2a] group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm font-medium">{desc}</p>
  </motion.div>
);

const CheckItem = ({ text }) => (
    <div className="flex items-center gap-3 font-bold text-sm">
        <FaCheckCircle className="text-orange-400 flex-shrink-0" />
        <span>{text}</span>
    </div>
);

const TimelineStep = ({ num, title, desc }) => (
    <div className="text-center group">
        <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 transition-transform italic">
            {num}
        </div>
        <h4 className="font-black text-xl mb-3 text-orange-400 uppercase tracking-tighter italic">{title}</h4>
        <p className="text-green-100/70 text-sm font-medium">{desc}</p>
    </div>
);

const FAQItem = ({ question, answer }) => (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
        <h4 className="text-lg font-black text-[#004d2a] mb-3 flex items-start gap-3 italic">
            <span className="bg-orange-100 text-orange-600 w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1 font-sans">Q</span> {question}
        </h4>
        <p className="text-gray-600 text-sm font-medium ml-9">{answer}</p>
    </div>
);

const ContactInfo = ({ icon, text }) => (
    <div className="flex items-center gap-5 group">
        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">{icon}</div>
        <span className="font-black text-gray-700 text-base md:text-xl">{text}</span>
    </div>
);