"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Scroll() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-[99] flex flex-col items-center gap-2 group"
          aria-label="Scroll to top"
        >
          {/* The Animated Pill/Arrow Container */}
          <div className="relative w-10 h-10 bg-[#005a31] rounded-full flex items-center justify-center shadow-lg border border-[#e7d000]/20 transition-colors group-hover:bg-[#004d2c]">
            {/* The Specific 8x16 px Animated Icon */}
            <motion.div 
              animate={{ y: [2, -2, 2] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-[8px] h-[16px] flex flex-col items-center justify-between"
            >
              <div className="w-full h-[2px] bg-[#e7d000] rotate-45 origin-left" />
              <div className="w-[2px] h-full bg-[#e7d000]" />
              <div className="w-full h-[2px] bg-[#e7d000] -rotate-45 origin-left" />
            </motion.div>
          </div>
          
          {/* Optional small text label */}
          <span className="text-[10px] font-black uppercase tracking-tighter text-[#005a31] bg-white/80 px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}