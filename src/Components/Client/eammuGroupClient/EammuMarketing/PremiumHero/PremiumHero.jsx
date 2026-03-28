"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, CheckCircle2, Star, Code, BarChart3, ShieldCheck, ChevronRight, MousePointer2 } from 'lucide-react';
import InfiniteTechStrip from '../InfiniteTechStrip/InfiniteTechStrip';

// --- DATA STRUCTURES ---
const slides = [
  { id: 1, type: 'LUXURY_BRANDING' },
  { id: 2, type: 'IT_PLATFORM' },
  { id: 3, type: 'SERVICE_HIGHLIGHTS' }
];

const floatingElementsSlide2 = [
  { id: 1, type: 'image', src: 'https://www.svgrepo.com/show/354112/nextjs.svg', top: '15%', left: '10%', delay: 0 },
  { id: 2, type: 'icon', icon: <Zap className="text-yellow-500" />, top: '10%', left: '25%', bg: 'bg-yellow-100', delay: 0.5 },
  { id: 3, type: 'image', src: 'https://www.citypng.com/public/uploads/preview/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn.png', bottom: '25%', left: '15%', delay: 1 },
  { id: 4, type: 'icon', icon: <Shield className="text-green-600" />, top: '12%', right: '22%', bg: 'bg-green-100', delay: 1.5 },
  { id: 5, type: 'image', src: 'https://images.icon-icons.com/2108/PNG/512/react_icon_130845.png', top: '22%', right: '8%', delay: 0.8 },
  { id: 6, type: 'icon', icon: <MousePointer2 className="text-yellow-500" />, bottom: '30%', right: '15%', bg: 'bg-yellow-100', delay: 2 },
];

const floatingCardsSlide3 = [
  { id: 1, icon: <Code size={20} />, text: "React/Next.js Expert", top: "15%", left: "10%", delay: 0 },
  { id: 2, icon: <Globe size={20} />, text: "99.9% Uptime", top: "20%", right: "12%", delay: 0.5 },
  { id: 3, icon: <BarChart3 size={20} />, text: "+140% Growth", bottom: "25%", left: "15%", delay: 1 },
  { id: 4, icon: <ShieldCheck size={20} />, text: "Enterprise Security", bottom: "30%", right: "10%", delay: 1.5 },
];

export default function MasterPremiumHero() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  // Parallax + 3D Tilt Logic
  const x = useSpring(0, { stiffness: 100, damping: 30 });
  const y = useSpring(0, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const xTrans = useTransform(x, (v) => v / 20);
  const yTrans = useTransform(y, (v) => v / 20);
  // 3D Rotations
  const rotateX = useTransform(y, (v) => v / -50); 
  const rotateY = useTransform(x, (v) => v / 50);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      style={{ perspective: "1200px" }}
      className="relative min-h-[90VH] w-full flex flex-col items-center justify-center overflow-hidden bg-[#FAFAFA]"
    >
      <AnimatePresence mode="wait">
        {/* --- SLIDE 1: LUXURY BRANDING (Green/Yellow) --- */}
        {current === 2 && (
          <motion.div 
            key="slide1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center"
          >
            {/* Background 1 */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00D47E]/15 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FACC15]/15 blur-[120px] rounded-full" />
            </div>

            {/* Parallax Elements 1 */}
            <motion.div style={{ x: xTrans, y: yTrans, rotateX, rotateY }} className="absolute inset-0 z-20 pointer-events-none">
              <div className="absolute top-[20%] left-[12%] p-1 bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] hidden lg:block">
                 <div className="flex items-center gap-3 px-4 py-2">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600"><CheckCircle2 size={16}/></div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700">ISO Certified 2026</span>
                 </div>
              </div>
              <div className="absolute bottom-[25%] right-[10%] p-4 bg-white/80 backdrop-blur-2xl border border-white/50 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] hidden lg:block">
                 <div className="flex flex-col gap-2">
                    <div className="flex -space-x-3">
                        {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />)}
                    </div>
                    <span className="text-sm font-black text-[#00a859]">4.9/5 Trust Score</span>
                 </div>
              </div>
            </motion.div>

            {/* Content 1 */}
            <div className="relative z-30 text-center px-6">
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="mb-8 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/20 shadow-sm">
                <Star size={14} className="text-[#FACC15] fill-[#FACC15]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Premium Digital Excellence</span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.85] text-[#101828] mb-8">
                Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D47E] via-[#FACC15] to-[#00D47E] bg-[length:200%_auto] animate-gradient-x">Digital Assets</span>
              </h1>
              <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-2xl font-medium mb-12">Next-gen IT consulting and custom web experiences. Precision in every pixel.</p>
              <div className="flex gap-6 justify-center">
                <button className="group relative px-12 py-5 bg-white text-[#101828] rounded-[2rem] font-bold text-lg transition-all overflow-hidden p-[2px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
  
  {/* 1. THE ANIMATED GRADIENT BORDER (White, Blue, Yellow Cycle) */}
  <motion.div
    className="absolute inset-[-150%] z-0"
    style={{
      background: "conic-gradient(from 0deg, #FFFFFF, #4285F4, #FBBC05, #FFFFFF)",
    }}
    animate={{ rotate: [0, 360] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  {/* 2. THE INNER BUTTON FACE (The White Mask) */}
  <div className="absolute inset-[2px] bg-white rounded-[1.9rem] z-10 transition-colors group-hover:bg-gray-50/50" />

  {/* 3. THE TEXT CONTENT */}
  <span className="relative z-20">
    Start Your Project
  </span>
</button>
              </div>
            </div>
          </motion.div>
        )}

        {/* --- SLIDE 2: ALL-IN-ONE IT PLATFORM --- */}
        {current === 0 && (
          <motion.div 
            key="slide2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center"
          >
            {/* Background 2 + Green/Yellow Lines */}
            <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none">
                <motion.path d="M200 150 L720 350 M1200 200 L720 350 M250 650 L720 350 M1150 600 L720 350" stroke="url(#lineGrad)" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }}/>
                <defs><linearGradient id="lineGrad"><stop stopColor="#00D47E"/><stop offset="1" stopColor="#FACC15"/></linearGradient></defs>
              </svg>
            </div>

            {/* Floating Elements 2 with 3D Parallax */}
            <motion.div style={{ x: xTrans, y: yTrans, rotateX, rotateY }} className="absolute inset-0 z-20 pointer-events-none">
              {floatingElementsSlide2.map((el) => (
                <motion.div key={el.id} animate={{ y: [0, -15, 0], rotateZ: [0, 2, 0] }} transition={{ duration: 4, repeat: Infinity, delay: el.delay }} style={{ position: 'absolute', top: el.top, left: el.left, right: el.right, bottom: el.bottom }} className={`shadow-2xl border border-white/60 p-1 bg-white/80 backdrop-blur-md rounded-2xl ${el.type === 'image' ? 'w-20 h-20' : 'w-14 h-14 flex items-center justify-center'}`}>
                  {el.type === 'image' ? <img src={el.src} className="w-full h-full object-cover rounded-xl" /> : <div className={`w-full h-full ${el.bg} rounded-xl flex items-center justify-center`}>{el.icon}</div>}
                </motion.div>
              ))}
            </motion.div>

            {/* Content 2 */}
            <div className="relative z-30 flex flex-col items-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 md:w-32 bg-gradient-to-tr from-[#00D47E] to-[#FACC15] rounded-[2.5rem] flex items-center justify-center shadow-[0_20px_50px_rgba(0,212,126,0.4)] mb-10">
                <CheckCircle2 className="text-white w-12 h-12" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-black text-[#101828] tracking-tighter leading-[0.9] text-center mb-6">
                All-in-one IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D47E] via-[#FACC15] to-[#00D47E]">solutions hub</span>
              </h1>
              <button className="group relative px-12 py-5 bg-white text-[#101828] rounded-[2rem] font-bold text-lg transition-all overflow-hidden p-[2px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
  
  {/* 1. THE ANIMATED GRADIENT BORDER (White, Blue, Yellow Cycle) */}
  <motion.div
    className="absolute inset-[-150%] z-0"
    style={{
      background: "conic-gradient(from 0deg, #FFFFFF, #4285F4, #FBBC05, #FFFFFF)",
    }}
    animate={{ rotate: [0, 360] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  {/* 2. THE INNER BUTTON FACE (The White Mask) */}
  <div className="absolute inset-[2px] bg-white rounded-[1.9rem] z-10 transition-colors group-hover:bg-gray-50/50" />

  {/* 3. THE TEXT CONTENT */}
  <span className="relative z-20">
    EXPLORE ECOSYSTEM
  </span>
</button>
            </div>
          </motion.div>
        )}

        {/* --- SLIDE 3: NEXT-GEN SERVICES --- */}
        {current === 1 && (
          <motion.div 
            key="slide3"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#00D47E]/10 via-white to-transparent" />
            
            {/* Floating Cards with 3D Depth */}
            <motion.div style={{ x: xTrans, y: yTrans, rotateX, rotateY }} className="absolute inset-0 z-10 hidden lg:block pointer-events-none">
              {floatingCardsSlide3.map((card) => (
                <motion.div key={card.id} animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, delay: card.delay }} style={{ position: 'absolute', top: card.top, left: card.left, right: card.right, bottom: card.bottom }} className="flex items-center gap-3 px-5 py-3 bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_15px_35px_rgba(0,0,0,0.08)] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00D47E] to-[#FACC15] flex items-center justify-center text-white">{card.icon}</div>
                  <span className="text-sm font-bold text-gray-800">{card.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Content 3 */}
            <div className="relative z-20 text-center px-6">
               <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-[0.95] tracking-tighter mb-8">
                Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D47E] via-[#FACC15] to-[#00D47E]">Web Architecture</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-12">Scalable codebases and high-performance interfaces built for the future.</p>
              <div className="flex gap-5 justify-center">
              <button className="group relative px-12 py-5 bg-white text-[#101828] rounded-[2rem] font-bold text-lg transition-all overflow-hidden p-[2px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
  
  {/* 1. THE ANIMATED GRADIENT BORDER (White, Blue, Yellow Cycle) */}
  <motion.div
    className="absolute inset-[-150%] z-0"
    style={{
      background: "conic-gradient(from 0deg, #FFFFFF, #4285F4, #FBBC05, #FFFFFF)",
    }}
    animate={{ rotate: [0, 360] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  {/* 2. THE INNER BUTTON FACE (The White Mask) */}
  <div className="absolute inset-[2px] bg-white rounded-[1.9rem] z-10 transition-colors group-hover:bg-gray-50/50" />

  {/* 3. THE BUTTON CONTENT */}

  <span className="relative z-20 flex items-center gap-2">

    Get Started 

    <ChevronRight 

      size={20} 

      className="group-hover:translate-x-1 transition-transform"

    />

  </span>
</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SHARED INFINITE STRIP --- */}
     
       <InfiniteTechStrip />
     
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 transition-all duration-500 rounded-full ${current === i ? "w-8 bg-[#00613a]" : "w-2 bg-gray-300"}`} />
        ))}
      </div>
    </section>
  );
}