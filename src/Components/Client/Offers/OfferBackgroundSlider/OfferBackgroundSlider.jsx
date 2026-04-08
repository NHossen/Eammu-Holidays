"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const heroOffers = [
  {
    image: "/flight_eammu.webp",
    badge: "Hot Deal",
    title: "Special Travel Offers",
    description: "Explore the world with Eammu Holidays exclusive 2026 packages.",
    buttonText: "Contact Us"
  },
  {
    image: "/sylhet_eammu.webp",
    badge: "Limited Time",
    title: "Eid Ul Fitr Discounts",
    description: "Huge savings on domestic and international flights for the festive season.",
    buttonText: "Claim Offer"
  },
  {
    image: "/bangladesh_europe_couple.webp",
    badge: "Last Minute",
    title: "Visa Support Deals",
    description: "Get up to 20% off on consultancy fees for student and tourist visas.",
    buttonText: "Check Now"
  }
];

const OfferBackgroundSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroOffers.length);
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
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          {/* Background Image with Zoom Effect */}
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
            className="relative w-full h-full"
          >
            <Image
              src={heroOffers[index].image}
              alt={heroOffers[index].title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
          
          {/* Gradient Overlay - darker on mobile for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/30 to-transparent md:from-black/20 md:via-black/20" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center mt-6 px-6 md:px-16 z-10">
            <div className="max-w-xl text-white">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block bg-[#e7d000] text-black text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-lg"
              >
                {heroOffers[index].badge}
              </motion.span>
              
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-4 drop-shadow-md"
              >
                {heroOffers[index].title}
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-sm md:text-lg font-medium text-gray-200 mb-8 max-w-sm md:max-w-md"
              >
                {heroOffers[index].description}
              </motion.p>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#005a31] hover:bg-[#004d2c] text-[#e7d000] font-black py-3 px-8 rounded-full uppercase tracking-tighter transition-colors shadow-xl"
              >
                {heroOffers[index].buttonText}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {heroOffers.map((_, i) => (
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

export default OfferBackgroundSlider;