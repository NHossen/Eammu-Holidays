"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhyChoiceEammu = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const values = [
    { id: "mission", title: "Mission", icon: "🎯", text: "Eammu Holidays provides inbound and outbound tour operate. Inbound tours provide experience guide, standard and any category’s hotel, best tours spot selection and your security. Holidays are meant for relaxation, to rejuvenate your energy moreover to spend your quality time with your loved ones and it is imperative to have the best Tour Operator to be your travel planner, who has got the experience, Infrastructure, commitment and who is a real professional to plan your valuable Tour." },
    { id: "vision", title: "Vision", icon: "👁️", text: "To be the leading ethical travel partner in Bangladesh and the UAE, known for transparency and excellence." },
    { id: "customer", title: "Focus On Customer", icon: "✅", text: "Eammu Holidays is leading tour operator of Bangladesh. Eammu Holidays is established in 2022 with a view to develop sustainable tours to various destinations in this beautiful Bangladesh and as such you can meet the generous peoples of this country. Our team is committed to give you a new light of tourism experiences which you had never before." },
    { id: "promise", title: "Our Promise", icon: "🤝", text: "We’re your partner in the journey of life abroad. From day one to departure and beyond, Eammu Holidays stands with you." },
  ];

  const features = [
    { title: "6+ Years of Experience", text: "Reliable and ethical visa consulting across Bangladesh and UAE.", icon: "✅" },
    { title: "Student Visa Experts", text: "Secure study permits for Canada, UK, USA, Russia, and more.", icon: "🎓" },
    { title: "Global Tour Planning", text: "Customized tours, Umrah packages, and air ticketing solutions.", icon: "🌍" },
    { title: "Customer Support", text: "Dedicated team for after-service and relationship management.", icon: "📞" },
    { title: "One-Stop Travel Solution", text: "From visa to tickets to accommodation—all in one place.", icon: "🛫" },
    { title: "Multiple Country Visas", text: "Europe, USA, Canada, Australia—certified consultants.", icon: "🌐" },
  ];

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 min-h-screen">
      <div className="container mx-auto">
        
        {/* SEO Header: Using H2 for Homepage Sections to preserve H1 for the main Banner */}
        <header className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#005a31] mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Best Travel Agency in Bangladesh & UAE
          </motion.h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
            Eammu Holidays is a leading **online travel agency** in Bangladesh and UAE — offering seamless **flight bookings**, **worldwide visa assistance**, and premium **Holiday Tour Packages**. We are your trusted partner for professional visa consulting and international tourism.
          </p>
        </header>

        {/* CLICKABLE VALUES NAVIGATION */}
        <nav className="flex flex-wrap gap-4 justify-center mb-10" aria-label="Eammu Holidays Values">
          {values.map((v) => (
            <button
              key={v.id}
              onClick={() => setActiveTab(v.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 font-semibold ${
                activeTab === v.id 
                ? "border-[#005a31] bg-[#005a31] text-white shadow-xl scale-105" 
                : "border-gray-200 bg-white text-gray-700 hover:border-[#005a31]/50"
              }`}
            >
              <span>{v.icon}</span>
              <span className="uppercase text-xs tracking-widest">{v.title}</span>
            </button>
          ))}
        </nav>

        {/* DYNAMIC CONTENT DISPLAY */}
        <div className="max-w-7xl mx-auto mb-24 min-h-[220px] sm:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <span className="text-9xl font-black text-[#005a31] uppercase">
                    {activeTab}
                </span>
              </div>
              <h3 className="text-[#005a31] font-bold mb-4 text-2xl uppercase tracking-tighter">
                Our {values.find(v => v.id === activeTab).title}
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed font-medium relative z-10">
               `{values.find(v => v.id === activeTab).text}`
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FEATURES GRID: Articles for SEO indexing */}
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <article
              key={idx}
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative"
            >
              {/* Branding Strip */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#005a31] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-xl group-hover:bg-[#005a31]/10 transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#005a31] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-lg leading-snug">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoiceEammu;