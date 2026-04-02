"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const promoSlides = [
  { 
    id: 1, 
    title: "SHARJAH TO YEREVAN", 
    price1: "135", 
    price2: "255", 
    img: "https://armenianweekly.com/wp-content/uploads/2024/08/Der-Tadeos-Barseghyan-and-parishioners-of-the-Armenian-Church-of-Our-Savior-at-Haghpat-monastery-Photo_-Armenian-Church-of-Our-Savior-Facebook.jpg",
    alt: "Cheap Flight Tickets" 
  },
  { 
    id: 2, 
    title: "DUBAI TO DHAKA", 
    price1: "110", 
    price2: "300", 
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    alt: "Dubai to Dhaka Deals" 
  },
  { 
    id: 3, 
    title: "DHAKA TO DUBAI", 
    price1: "300", 
    price2: "355", 
    img: "https://tripjive.com/wp-content/uploads/2024/09/Khasia-Polli-in-Sylhet-travel-guide-1024x585.jpg",
    alt: "Dhaka to Dubai Air Ticket" 
  },
  { 
    id: 4, 
    title: "JAPAN TO DHAKA", 
    price1: "499", 
    price2: "999", 
    img: "https://japandeluxetours.com/uploads/2025/10/20251009212409_68e827f99d19b.jpg",
    alt: "Japan to Dhaka Airfare" 
  },
  { 
    id: 5, 
    title: "DHAKA TO MALDIVES", 
    price1: "299", 
    price2: "499", 
    img: "https://afar.brightspotcdn.com/dims4/default/3da8482/2147483647/strip/true/crop/3000x1500+0+369/resize/1440x720!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg",
    alt: "Maldives Packages" 
  },
];

export default function PromoCard() {
  const [promoIndex, setPromoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPromoIndex((prev) => (prev + 1) % promoSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center lg:justify-end w-full px-2">
      {/* 1. LIQUID GLASS CONTAINER - h-auto for Mobile, h-64 for Desktop */}
      <div className="relative w-full max-w-md h-auto sm:h-64 rounded-2xl overflow-hidden shadow-2xl 
                      glass-liquid-water bg-[length:200%_auto] hover:bg-right transition-all duration-1000 border border-white/20">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={promoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col sm:flex-row h-full w-full"
          >
            {/* 2. IMAGE SECTION - Uses aspect-video on mobile to save space */}
            <div className="relative w-full sm:w-1/2 aspect-video sm:aspect-auto sm:h-full overflow-hidden">
              <Image 
                src={promoSlides[promoIndex].img} 
                alt={promoSlides[promoIndex].alt}
                fill 
                priority 
                className="object-cover"
              />
            </div>

            {/* 3. CONTENT SECTION - Compact Padding */}
            <div className="w-full sm:w-1/2 p-4 flex flex-col justify-between">
              <div className="space-y-2">
                <h2 className="text-sm sm:text-base font-black uppercase leading-tight text-white">
                  {promoSlides[promoIndex].title}
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-[10px] sm:text-[11px]">
                  <div className="p-2 rounded-lg bg-white/40 border border-white/30 text-center sm:text-left">
                    <span className="block text-[10px] font-bold text-gray-900 uppercase">One Way</span>
                    <b className="text-[#005a31] text-[12px] font-bold">USD {promoSlides[promoIndex].price1}</b>
                  </div>
                  <div className="p-2 rounded-lg bg-white/40 border border-white/30 text-center sm:text-left">
                    <span className="block text-[10px] font-bold text-gray-900 uppercase">Round Trip</span>
                    <b className="text-[#005a31] text-[12px] font-bold">USD {promoSlides[promoIndex].price2}</b>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                       {/* Customer Review Link */}
 <Link 
  href="/testimonials"
  className="relative flex items-center justify-center gap-2 px-6 py-2 rounded-[10px] font-bold text-sm text-white shadow-[0_10px_20px_-10px_rgba(0,90,49,0.6)] 
             bg-linear-to-r from-[#005a31] via-[#00a45a] to-[#005a31] bg-size-[200%_auto]
             hover:bg-right transition-all duration-500 overflow-hidden cursor-pointer"
>
  <motion.div
    className="flex items-center justify-center gap-2" // Added justify-center and removed w-full
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
  >
    {/* Shine Effect Animation */}
    <motion.div 
      className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent w-full h-full"
      animate={{ x: ['-100%', '200%'] }}
      transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 1 }}
    />
    <span className="relative z-10">BOOK NOW</span>
  </motion.div>
</Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 4. INDICATOR DOTS - Moved up slightly for mobile */}
        <div className="absolute bottom-2 right-4 flex gap-1.5 z-30">
          {promoSlides.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === promoIndex ? 'bg-[#ffffff] w-4' : 'bg-black/20 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}