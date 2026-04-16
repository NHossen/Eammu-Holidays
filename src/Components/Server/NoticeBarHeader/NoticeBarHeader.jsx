import React from 'react'
import { motion } from "framer-motion";

export default function NoticeBarHeader() {
  return (
    <div className="h-8 sm:h-11"> {/* Spacer to prevent content overlap */}
      <motion.div
        className="fixed top-0 left-0 w-full z-[60] flex items-center justify-between px-4 py-2 bg-gradient-to-r from-[#ffdf80] via-[#FFC107] via-[#00a859]/80 to-[#ffd556]"
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
  <p className="relative z-10 text-black text-sm text-center leading-snug sm:text-base sm:px-4">
    📢 Enjoy <span className="text-[#ffffff] font-bold">20% OFF</span> +
    <span className="text-[#005c31] font-semibold"> FREE Visa Assistance</span>.
    One place for everything — <span className="text-[#ffffff] font-bold">With Eammu</span> !
  </p>
  
</div>
      </motion.div>
    </div>
  )
}