"use client";

import React from "react";
import { motion } from "framer-motion";

// 1. PROJECT TECH STACK CONFIGURATION
// You can easily add more items to this list later
const TECH_STACK = [
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
  { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "SEO Expert", logo: "https://www.gstatic.com/images/branding/product/2x/google_search_console_64dp.png" },
  { name: "Marketing", logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg" },
  { name: "Tailwind", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
];

const InfiniteTechStrip = () => {
  return (
    <div className="absolute bottom-12 w-full opacity-70 overflow-hidden z-40 py-6 border-y border-gray-100 bg-white/80 backdrop-blur-md">
      <motion.div 
        animate={{ x: [0, -2000] }} 
        transition={{ 
          duration: 35, 
          repeat: Infinity, 
          ease: "linear" 
        }} 
        className="flex gap-20 items-center whitespace-nowrap px-10"
      >
        {/* We repeat the array 4 times to ensure there is never a gap in the loop */}
        {[...Array(4)].map((_, setIndex) => (
          <React.Fragment key={setIndex}>
            {TECH_STACK.map((tech, index) => (
              <div 
                key={`${setIndex}-${index}`} 
                className="flex items-center gap-4 transition-all duration-500 cursor-pointer group"
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="h-9 w-auto object-contain transition-transform group-hover:scale-110" 
                />
                <span className="text-lg font-extrabold text-gray-800 tracking-tighter uppercase">
                  {tech.name}
                </span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteTechStrip;