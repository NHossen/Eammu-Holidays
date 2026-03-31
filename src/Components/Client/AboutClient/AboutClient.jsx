"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group focus:outline-none px-4"
      >
        <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? "text-[#005a31]" : "text-gray-800 group-hover:text-[#005a31]"}`}>
          {question}
        </span>
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0 }} 
          className="text-2xl text-[#005a31] font-light w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 group-hover:border-[#005a31] transition-colors"
        >
          {isOpen ? "✕" : "+"}
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
          >
            <p className="pb-6 px-4 text-gray-600 leading-relaxed text-base md:text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function AboutClient({ heroSlides = [], stats = [], services = [], faqs = [] }) {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  // Fallback check to prevent crashing if data is hydrating
  if (!heroSlides || heroSlides.length === 0) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center justify-center py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentHero} 
              initial={{ opacity: 0, scale: 1.1 }} 
              animate={{ opacity: 1, scale: 1.05 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 1.5 }} 
              className="absolute inset-0"
            >
              <Image 
                src={heroSlides[currentHero].image} 
                alt="Hero" 
                fill 
                priority 
                className="object-cover transition-transform duration-[5000ms]" 
              />
              {/* Enhanced cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50 z-10"></div>
              
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <motion.div 
                  initial="hidden" 
                  animate="visible" 
                  variants={fadeIn} 
                  className="max-w-7xl mx-auto text-center space-y-8 px-4"
                >
                  <span className="inline-block px-5 py-2 bg-[#005a31] text-white rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-[#005a31]/30">
                    {heroSlides[currentHero].badge}
                  </span>
                  
                  <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
                    <span className="text-[#ffcc00]">{heroSlides[currentHero].highlight}</span> {heroSlides[currentHero].title}
                  </h1>
                  
                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg md:text-xl text-gray-100 mt-6 leading-relaxed drop-shadow-md">
                      <strong className="text-white font-bold">{heroSlides[currentHero].boldText}</strong> {heroSlides[currentHero].description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentHero(i)}
              className={`h-2 rounded-full transition-all duration-500 focus:outline-none ${
                i === currentHero ? 'w-10 bg-[#ffcc00] shadow-lg shadow-[#ffcc00]/50' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-24">
        
        {/* Stats Section */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer} 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              variants={fadeIn} 
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)" }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center transition-all duration-300"
            >
              <div className="text-4xl mb-4 bg-gray-50 w-16 h-16 flex items-center justify-center mx-auto rounded-2xl">{stat.icon}</div>
              <h4 className="text-4xl font-extrabold text-[#005a31] mb-1">{stat.val}</h4>
              <p className="text-gray-500 font-medium text-sm tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Services Section */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[#005a31] text-sm font-bold uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Our Multi-Industrial Services</h2>
            <div className="w-16 h-1 bg-[#ffcc00] mx-auto rounded-full"></div>
          </div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer} 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn} 
                whileHover={{ y: -12 }} 
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-2xl hover:shadow-[#005a31]/5 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={service.img} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#005a31] transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                  
                  <Link href={service.link} className="inline-flex items-center text-[#005a31] font-bold uppercase text-xs tracking-wider group-hover:text-[#ffcc00] transition-colors duration-300">
                    Explore
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
     {/* --- Vision Section --- */}
                <section className="relative rounded-[3rem] bg-[#005a31] text-white p-10 md:p-16 overflow-hidden shadow-2xl">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-3xl space-y-8"
                  >
                    <div className="space-y-2">
                      <span className="uppercase tracking-[0.2em] text-green-300 font-semibold text-sm">Future Roadmap</span>
                      <h2 className="text-4xl md:text-5xl font-bold">Our Vision</h2>
                    </div>
                    <p className="text-lg md:text-2xl text-green-50/90 leading-relaxed font-light">
                      "Eammu Holidays provides inbound and outbound tour operate... it is imperative to have the best Tour Operator to be your travel planner."
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      {["Transparency", "Innovation", "Empowerment"].map((tag) => (
                        <div key={tag} className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-medium">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-400 rounded-full blur-[100px] opacity-20" />
                </section>

        {/* FAQ Section */}
        <section className="py-10 max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[#005a31] text-sm font-bold uppercase tracking-wider">Got Questions?</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-4 md:p-8 space-y-2">
            {faqs.map((faq, i) => (
              <FAQItem key={i} index={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

    
        

          {/* --- Contact / CTA Section --- */}
        <section className="bg-white border-2 border-green-100 rounded-[2.5rem] p-8 md:p-16 text-center space-y-8 shadow-sm relative overflow-hidden">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Contact Eammu Holidays</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Need visa assistance or immigration consultation? Our experts are available 24/7 to guide you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl">
              <span className="text-2xl">📞</span>
              <div>
                <h4 className="font-bold text-green-900">Call/WhatsApp</h4>
                <p className="text-xs lg:text-sm text-green-800">+8801631312524, +8801701699743, +971507078334</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl">
              <span className="text-2xl">📧</span>
              <div>
                <h4 className="font-bold text-green-800">Email Support</h4>
                <p className="text-sm text-green-800">info@eammu.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/8801701699743" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#005a31] text-white px-10 py-4 rounded-2xl font-bold hover:bg-green-800 transition shadow-lg">
              Start Your Journey Now
            </a>
            <Link href="/" className="w-full sm:w-auto bg-white border-2 border-[#005a31] text-[#005a31] px-10 py-4 rounded-2xl font-bold hover:bg-green-50 transition">
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}