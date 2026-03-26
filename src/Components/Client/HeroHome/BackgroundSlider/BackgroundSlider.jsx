"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const bgSlides = [
  { 
    url: "/sylhet_eammu.webp", 
    alt: "Eammu Holidays - Leading Online Travel Agency in Bangladesh providing Sylhet Tour Packages" 
  },
  { 
    url: "https://res.cloudinary.com/jerrick/image/upload/v1700547867/655c4d1a4132f6001d3a9423.jpg", 
    alt: "Best Student Visa and Education Consultancy in Bangladesh for Global Universities" 
  },
  { 
    url: "/beautiful-places-in-bangladesh.jpg", 
    alt: "Explore Beautiful Places in Bangladesh with Eammu Holidays Travel and Tourism" 
  },
  { 
    url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/afmqgg5h0jl9wnr1dfmf.jpg", 
    alt: "Trusted Visa Processing and Travel Services - Eammu Holidays Bangladesh" 
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
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/50" />
    </div>
  );
}