"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import Image from 'next/image';
import NoticeBarHeader from "@/Components/Server/NoticeBarHeader/NoticeBarHeader";

export default function Header() {
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
    <div>
       {/* ================= NOTICE BAR ================= */}
      <NoticeBarHeader />
    </div>
     

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-[42px] sm:top-[35px] w-full bg-white z-50 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 sm:h-16 flex items-center justify-between">
          
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

{/* Premium Desktop Menu with Multi-Color Gradient Border */}
<div className="hidden lg:flex items-center gap-2 p-1.5 backdrop-blur-xl rounded-full">
  {navItems.map((item) => {
    const isActive = pathname === item.path;

    return (
      <Link
        key={item.path}
        href={item.path}
        className={`relative px-8 py-2.5 text-sm font-bold transition-all duration-500 rounded-full group flex items-center justify-center ${
          isActive ? "text-gray-900" : "text-[#005a31] hover:text-gray-900"
        }`}
      >
        {/* The Animated Multi-Color Border */}
        {isActive && (
          <motion.div
            layoutId="nav-border"
            className="absolute inset-0 rounded-full p-[1.8px] overflow-hidden" 
            initial={false}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            {/* 1. Multi-Color Cycling Gradient (Green, Yellow, Blue, Pink) */}
            <motion.div
              className="absolute inset-[-150%] z-0"
              style={{
                background: "conic-gradient(from 0deg, #34A853, #FBBC05,white, #34A853)",
              }}
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* 2. The Inner White Mask (Creates the border effect) */}
            <div className="absolute inset-[1.8px] bg-white rounded-full z-[1]" />
            
            {/* 3. Subtle outer glow for that "Premium" feel */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.05)]" />
          </motion.div>
        )}

        {/* 4. Text Layer */}
        <span className="relative z-10 tracking-wide uppercase text-[11px] font-extrabold">
          {item.name}
        </span>

        {/* Hover Background for non-active items */}
        {!isActive && (
          <motion.span
            className="absolute inset-0 z-0 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            layoutId="hover-bg"
          />
        )}
      </Link>
    );
  })}
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
                    className={`text-2xl font-black uppercase tracking-tighter ${
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
      <div className="pt-[50px] sm:pt-[50px]" />
    </>
  );
}