"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
  { 
    url: 'https://sunsetdesertsafari.com/wp-content/uploads/2025/01/Dubai-Desert-Safari.jpg', 
    title: 'DUBAI ADVENTURES', 
    sub: 'Desert Safaris & City Tours',
    alt: 'Golden sand dunes in Dubai desert'
  },
  { 
    url: 'https://d1i3enf1i5tb1f.cloudfront.net/assets/SmallWebsite/images/mydesertsafari/Desert-Safari.jpg', 
    title: 'GEORGIA EXPLORATION', 
    sub: 'Caucasus Mountains & Wine Tours',
    alt: 'Scenic view of Caucasus mountains'
  },
  { 
    url: 'https://dubaitaliaexperiences.com/assets/w=1500&h=740&fit=fill&f=center___images.ctfassets.net_7dc7gq8ix1ml_diJdY07KlurPDhaqroXkW_817cee95a371ba25b2af488f1953df14_cover_mongolfiere.jpg', 
    title: 'ARMENIA HERITAGE', 
    sub: 'Ancient Temples & History',
    alt: 'Ancient stone temple in Armenia'
  }
];

const ActivitiesHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    /* Change 1: Use 'w-full' instead of 'w-screen' to avoid disappearing act.
       Change 2: Ensure 'relative' and a high 'z-index' so it stays on top.
    */
    <section className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden bg-zinc-900 z-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Change 3: Ensure Next.js Image has proper 'fill' 
             and its parent has 'absolute inset-0' 
          */}
          <img
            src={heroSlides[index].url}
            alt={heroSlides[index].alt}
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 z-10" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-7xl font-bold text-white drop-shadow-lg"
            >
              {heroSlides[index].title}
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 text-lg md:text-2xl text-gray-100 max-w-2xl"
            >
              {heroSlides[index].sub}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === index ? "w-12 bg-white" : "w-3 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ActivitiesHero;