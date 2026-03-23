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

        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 text-white border border-white/30 px-2 py-1 rounded text-[10px] hover:bg-white/10 transition-colors"
          >
            <Globe size={12} />
            <span className="hidden sm:inline">Lang</span>
            <ChevronDown size={10} />
          </button>

          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute right-0 mt-2 w-28 bg-white rounded-xl shadow-2xl p-2 z-[70] border border-gray-100"
              >
                {["English", "বাংলা", "Հայերեն", "Русский"].map((lang) => (
                  <button
                    key={lang}
                    className="block w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-green-50 hover:text-[#005a31] rounded-lg transition-colors"
                  >
                    {lang}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-[55px] sm:top-[40px] w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
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
            <Link href="/contact">
              <button className="bg-[#005a31] hover:bg-[#004225] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-green-900/20 transition-all hover:scale-105 active:scale-95">
                Book Now
              </button>
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