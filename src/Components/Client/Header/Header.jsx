"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import Image from 'next/image';

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when path changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <>
      {/* ================= NOTICE BAR ================= */}
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

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-[55px] sm:top-[38px] w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 text-[#005a31] hover:bg-green-50 rounded-full transition-colors"
            >
              <Menu size={28} />
            </button>
            <Link href="/" className="relative h-[40px] w-[120px] sm:h-[50px] sm:w-[150px]">
              <Image
                src="/eammu_logo.webp"
                alt="Eammu Holidays Logo"
                fill
                priority
                className="object-contain object-left" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-semibold transition-all duration-300 hover:text-[#005a31] relative group ${
                  pathname === item.path ? "text-[#005a31]" : "text-gray-600"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#005a31] transition-all duration-300 group-hover:w-full ${pathname === item.path ? "w-full" : ""}`} />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
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
      
      <span className="relative z-10"> Book Now</span>
    </motion.div>
  </Link>
          </div>
        </div>
      </nav>

      {/* ================= FULL SCREEN MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-gray-50">
              <div className="relative h-10 w-32">
                <Image src="/eammu_holidays_Travel_agency.webp" alt="Logo" fill className="object-contain object-left" />
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-500 hover:text-[#005a31]">
                <X size={32} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-10 gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className={`text-4xl font-black uppercase tracking-tighter ${
                      pathname === item.path ? "text-[#005a31]" : "text-gray-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-10 border-t border-gray-50">
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">Connect with us</p>
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[#005a31]">FB</div>
                 <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[#005a31]">IG</div>
                 <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[#005a31]">WA</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= SPACING ================= */}
      <div className="pt-[100px] sm:pt-[120px]" />
    </>
  );
}