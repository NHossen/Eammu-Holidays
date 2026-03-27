"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Globe, Code, Cpu, BarChart3, ShieldCheck } from 'lucide-react';

const slides = [
  { id: 1, title: "Next-Gen Web Development", color: "from-[#7B61FF]/20" },
  { id: 2, title: "Cloud Hosting & Security", color: "from-[#4F8CFF]/20" },
  { id: 3, title: "SEO & Digital Growth", color: "from-[#FF6FD8]/20" },
];

const floatingCards = [
  { id: 1, icon: <Code size={20} />, text: "React/Next.js Expert", top: "15%", left: "10%", delay: 0 },
  { id: 2, icon: <Globe size={20} />, text: "99.9% Uptime", top: "20%", right: "12%", delay: 0.5 },
  { id: 3, icon: <BarChart3 size={20} />, text: "+140% Growth", bottom: "25%", left: "15%", delay: 1 },
  { id: 4, icon: <ShieldCheck size={20} />, text: "Enterprise Security", bottom: "30%", right: "10%", delay: 1.5 },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#fafafa]">
      
      {/* --- ANIMATED GRADIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color} via-white to-transparent`}
          />
        </AnimatePresence>
        
        {/* Slow Moving Mesh Gradient */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#7B61FF]/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 50, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-[#FF6FD8]/10 blur-[100px] rounded-full"
        />
      </div>

      {/* --- FLOATING ELEMENTS --- */}
      <div className="absolute inset-0 z-10 hidden lg:block pointer-events-none">
        {floatingCards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: card.delay, ease: "easeInOut" }}
            style={{ position: 'absolute', top: card.top, left: card.left, right: card.right, bottom: card.bottom }}
            className="flex items-center gap-3 px-5 py-3 bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-2xl"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7B61FF] to-[#FF6FD8] flex items-center justify-center text-white shadow-lg">
              {card.icon}
            </div>
            <span className="text-sm font-bold text-gray-800 tracking-tight">{card.text}</span>
          </motion.div>
        ))}
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7B61FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7B61FF]"></span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">
            Trusted by 500+ Tech Leaders
          </span>
        </motion.div>

        {/* Dynamic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-gray-900 leading-[0.95] tracking-tighter mb-8"
        >
          All-in-One <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] via-[#4F8CFF] to-[#FF6FD8] animate-gradient-x">
            Digital IT Solutions
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-medium mb-12 leading-relaxed"
        >
          Powering your business with smart technology. We build, host, and scale 
          your digital presence with enterprise-grade precision.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button className="relative group px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF] via-[#4F8CFF] to-[#FF6FD8] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              Get Started <ChevronRight size={20} />
            </span>
          </button>
          
          <button className="px-10 py-5 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all active:scale-95">
            Request a Demo
          </button>
        </motion.div>

        {/* --- LOGO CAROUSEL (Infinite Loop) --- */}
        <div className="mt-24 w-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fafafa] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fafafa] to-transparent z-10" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-20 whitespace-nowrap opacity-40 grayscale"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-16">
                <span className="text-2xl font-black italic">TECHNO</span>
                <span className="text-2xl font-black italic">CLOUD.LY</span>
                <span className="text-2xl font-black italic">VORTEX</span>
                <span className="text-2xl font-black italic">NEXUS</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}