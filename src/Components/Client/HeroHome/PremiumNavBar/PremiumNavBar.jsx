"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Globe, 
  Plane, 
  Map, 
  Wind, 
  GraduationCap, 
  Gift 
} from "lucide-react";

const menuItems = [
  { id: 0, label: "Visa", icon: Globe, path: "our-services/visa-services" },
  { id: 1, label: "Flights", icon: Plane, path: "/air-tickets" },
  { id: 2, label: "Holidays", icon: Map, path: "/tour-packages" },
  { id: 3, label: "Activities", icon: Wind, path: "/activities" },
  { id: 4, label: "Study Abroad", icon: GraduationCap, path: "/visa-services/student-visa-application-from-bangladesh" },
  { id: 5, label: "Offers", icon: Gift, path: "/offers" },
];

const PremiumNavBar = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
  const currentIndex = menuItems.findIndex(item => item.path === pathname);
  if (currentIndex !== -1 && currentIndex !== activeIndex) {
    // defer the state update to the next tick to avoid cascading renders
    const timer = setTimeout(() => setActiveIndex(currentIndex), 0);
    return () => clearTimeout(timer);
  }
}, [pathname, activeIndex]);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % menuItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full p-2 sm:p-6 mt-26">
      <nav className="relative flex items-center justify-around w-full max-w-5xl h-[65px] sm:h-[80px] 
                      bg-gradient-to-r from-[#005a31] via-[#009552] to-[#005a31] bg-[length:200%_auto]
                      hover:bg-right transition-all duration-1000 rounded-[15px] shadow-2xl overflow-visible">

        {/* SHIMMER LAYER */}
        <div className="absolute inset-0 overflow-hidden rounded-[15px] pointer-events-none">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5, 
              ease: "linear", 
              repeatDelay: 1.5 
            }}
          />
        </div>

        {/* LIQUID INDICATOR */}
        <motion.div
          className="absolute top-0 h-full flex justify-center pointer-events-none"
          animate={{ x: `${activeIndex * 100}%` }} 
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
          style={{ width: `${100 / menuItems.length}%`, left: 0 }}
        >
          <div className="relative w-[120px] -top-[1.2px] pointer-events-none bg-transparent" />

         {/* FLOATING CIRCLE LINK */}
<Link
  href={menuItems[activeIndex].path}
  className="absolute -top-8 sm:-top-12 w-[55px] h-[55px] sm:w-[80px] sm:h-[80px] 
             rounded-full flex items-center justify-center 
             shadow-[0_10px_20px_-10px_rgba(255,204,0,0.5)] z-30 pointer-events-auto 
             overflow-hidden p-[3px] sm:p-[3px]" // Padding creates the "border" thickness
>
  {/* 1. THE ANIMATED GRADIENT BORDER LAYER */}
  <motion.div
    className="absolute inset-[-150%] z-0"
    style={{
      background: "conic-gradient(from 0deg, #34A853, #FBBC05,white, #34A853)",
    }}
    animate={{ rotate: [360, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  {/* 2. THE MAIN BACKGROUND (Kept your original gradient & styles) */}
  <div className="absolute inset-[2px] sm:inset-[2.5px] rounded-full z-10 
                  bg-gradient-to-r from-[#005a31] via-[#009552] to-[#005a31] 
                  bg-[length:200%_auto] hover:bg-right transition-all duration-500" />

  {/* 3. THE ICON LAYER (Kept original logic) */}
  <AnimatePresence mode="wait">
    <motion.div
      key={activeIndex}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="relative z-20 text-[#ffffff]"
    >
      {React.createElement(menuItems[activeIndex].icon, {
        size: typeof window !== "undefined" && window.innerWidth < 640 ? 22 : 32,
        strokeWidth: 2.5,
      })}
    </motion.div>
  </AnimatePresence>
</Link>
        </motion.div>

        {/* MENU ITEMS */}
        {menuItems.map((item, index) => {
          const isActive = activeIndex === index;
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.path}
              onClick={() => setActiveIndex(index)}
              className="relative z-10 flex flex-col items-center justify-center w-full h-full no-underline"
            >
              <div className={`transition-all duration-700 ease-in-out 
                ${isActive ? "opacity-0 -translate-y-12 sm:-translate-y-16 scale-50" : "hover:opacity-100"}`}>
                <Icon size={typeof window !== "undefined" && window.innerWidth < 640 ? 20 : 24} className="text-[#ffcc00]" />
              </div>

              <span className={`text-[8px] xs:text-[10px] sm:text-xs font-bold transition-all duration-500
                ${isActive ? "text-[#ffcc00] translate-y-1 sm:translate-y-2" : "text-white translate-y-2 sm:translate-y-4"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default PremiumNavBar;