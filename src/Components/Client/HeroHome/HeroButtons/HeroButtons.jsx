"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Binoculars, Star } from 'lucide-react';

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-5">
       {/* Explore More Link */}
  <Link 
    href="/our-services"
    className="relative flex items-center gap-2 px-6 py-2.5 rounded-[10px] font-bold text-sm text-[#005a31] shadow-[0_10px_20px_-10px_rgba(255,204,0,0.5)] 
               bg-linear-to-r from-[#ffcc00] via-[#ffeca1] to-[#ffcc00] bg-size-[200%_auto]
               hover:bg-right transition-all duration-500 overflow-hidden cursor-pointer"
  >
    <motion.div
      className="flex items-center gap-2 w-full h-full"
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
      <Binoculars size={20} className="relative z-10" />
      <span className="relative z-10">Explore More</span>
    </motion.div>
  </Link>

        {/* Customer Review Link */}
  <Link 
    href="/testimonials"
    className="relative flex items-center gap-2 px-6 py-2.5 rounded-[10px] font-bold text-sm text-white shadow-[0_10px_20px_-10px_rgba(0,90,49,0.6)] 
               bg-linear-to-r from-[#005a31] via-[#00a45a] to-[#005a31] bg-size-[200%_auto]
               hover:bg-right transition-all duration-500 overflow-hidden cursor-pointer"
  >
    <motion.div
      className="flex items-center gap-2 w-full h-full"
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
      <Star size={20} className="relative z-10" />
      <span className="relative z-10"> Customer Review</span>
    </motion.div>
  </Link>
    </div>
  );
}