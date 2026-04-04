"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const bgSlides = [
  { 
    url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/afmqgg5h0jl9wnr1dfmf.jpg", 
    alt: "Sylhet tea garden tour Bangladesh – popular travel destination and holiday packages from Dhaka" 
  },
  { 
    url: "/the-love-island.webp", 
    alt: "International student visa consultancy Bangladesh – study abroad and global university admission support" 
  },
  { 
    url: "/desert_kamel_egypt.jpg", 
    alt: "Desert travel experience and tour packages – Middle East holiday deals from Bangladesh" 
  },
  { 
    url: "/ileand-2.png", 
    alt: "Maldives luxury island resort packages from Bangladesh – affordable honeymoon and holiday tours" 
  }
];
export default function BackgroundSlider() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="wait">
        <motion.div key={bgIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="relative w-full h-full">
         <Image 
    src={bgSlides[bgIndex].url} 
    alt={bgSlides[bgIndex].alt || "Eammu Holidays - Best Travel Agency in Bangladesh"} 
    fill 
    priority 
    className="object-cover"
    sizes="100vw"
  />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/30" />
    </div>
  );
}