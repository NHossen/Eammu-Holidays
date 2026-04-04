import React from 'react'
import { motion } from "framer-motion";

export default function NoticeBarHeader() {
  return (
    <div className="h-8 sm:h-11"> {/* Spacer to prevent content overlap */}
      <motion.div
        className="fixed top-0 left-0 w-full z-[60] flex items-center justify-between px-4 py-2 bg-gradient-to-r from-[#005a31] via-[#00944f] via-[#00a859]/80 to-[#005a31]"
        style={{ backgroundSize: "200% 100%" }} // CRITICAL: Makes the gradient "slidable"
        animate={{ 
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <div className="flex-1 text-center">
  <p className="relative z-10 text-white text-sm text-center leading-snug sm:text-base sm:px-4">
    📢 Enjoy <span className="text-[#ffcc00] font-bold">20% OFF</span> +
    <span className="text-blue-200 font-semibold"> FREE Visa Assistance</span>.
    One place for everything — <span className="text-[#ffcc00] font-bold">With Eammu</span> !
  </p>
  
</div>
      </motion.div>
    </div>
  )
}