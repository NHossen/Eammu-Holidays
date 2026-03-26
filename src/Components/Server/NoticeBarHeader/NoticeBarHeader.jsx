import React from 'react'
import { motion,} from "framer-motion";

export default function NoticeBarHeader() {
  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 w-full z-[60] flex items-center justify-between px-4 py-2 bg-gradient-to-r from-[#005a31] via-[#007842] to-[#005a31]"
        animate={{ backgroundPosition: ["0% center", "100% center", "0% center"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex-1 text-center text-[10px] sm:text-xs text-white">
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
