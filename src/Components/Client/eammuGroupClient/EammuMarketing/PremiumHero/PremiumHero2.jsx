"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, MousePointer2, CheckCircle2 } from 'lucide-react';

const floatingElements = [
  { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', top: '15%', left: '10%', delay: 0 },
  { id: 2, type: 'icon', icon: <Zap className="text-yellow-400" />, top: '10%', left: '25%', bg: 'bg-yellow-50', delay: 0.5 },
  { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', bottom: '25%', left: '15%', delay: 1 },
  { id: 4, type: 'icon', icon: <Shield className="text-red-400" />, top: '12%', right: '22%', bg: 'bg-red-50', delay: 1.5 },
  { id: 5, type: 'image', src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150', top: '22%', right: '8%', delay: 0.8 },
  { id: 6, type: 'icon', icon: <MousePointer2 className="text-blue-400" />, bottom: '30%', right: '15%', bg: 'bg-blue-50', delay: 2 },
];

export default function PremiumHero2() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#FCFCFD]">
      
      {/* 1. ANIMATED MESH GRADIENT BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-200/30 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-blue-200/30 blur-[120px] rounded-full animate-bounce" style={{ animationDuration: '8s' }} />
      </div>

      {/* 2. CONNECTING LINES (SVG Layer) */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none">
          <motion.path 
            d="M200 150 L720 350 M1200 200 L720 350 M250 650 L720 350 M1150 600 L720 350" 
            stroke="url(#lineGradient)" 
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#7B61FF" />
              <stop offset="1" stopColor="#4F8CFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 3. CENTRAL NODE SYSTEM */}
      <div className="relative z-30 flex flex-col items-center mb-12">
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-[#7B61FF] to-[#FF6FD8] rounded-[2.5rem] flex items-center justify-center shadow-[0_20px_50px_rgba(123,97,255,0.3)] mb-10"
        >
          <CheckCircle2 className="text-white w-12 h-12 md:w-16 md:h-16" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-8xl font-black text-[#101828] tracking-tighter leading-[0.9] mb-6">
            All-in-one IT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] via-[#4F8CFF] to-[#FF6FD8]">
              solutions platform
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-500 text-lg md:text-xl font-medium mb-10">
            Streamline your business infrastructure with one centralized <br className="hidden md:block"/> 
            platform, enhancing team efficiency and digital scale.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#7B61FF] text-white rounded-2xl font-bold text-lg shadow-[0_15px_30px_rgba(123,97,255,0.4)] hover:bg-[#6a4df5] transition-all"
          >
            Learn more
          </motion.button>
        </motion.div>
      </div>

      {/* 4. FLOATING ELEMENTS LAYER */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {floatingElements.map((el) => (
          <motion.div
            key={el.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              opacity: { delay: el.delay, duration: 0.5 },
              scale: { delay: el.delay, duration: 0.5 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: el.delay },
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: el.delay }
            }}
            style={{ position: 'absolute', top: el.top, left: el.left, right: el.right, bottom: el.bottom }}
            className={`shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white/60 p-1 bg-white/80 backdrop-blur-md 
              ${el.type === 'image' ? 'rounded-2xl w-16 h-16 md:w-24 md:h-24' : 'rounded-2xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center'}`}
          >
            {el.type === 'image' ? (
              <img src={el.src} className="w-full h-full object-cover rounded-xl" alt="avatar" />
            ) : (
              <div className={`w-full h-full ${el.bg} rounded-xl flex items-center justify-center`}>
                {el.icon}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* 5. BOTTOM SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent" />
      </motion.div>
    </section>
  );
}