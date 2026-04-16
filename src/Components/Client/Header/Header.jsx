"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  ChevronDown, 
  Menu, 
  X,
  Plane, 
  Hotel, 
  Palmtree, 
  FileText, 
  Gift, 
  ShieldCheck,
  Facebook,
  Instagram,
  MessageCircle
} from "lucide-react";
import Image from 'next/image';
import NoticeBarHeader from "@/Components/Server/NoticeBarHeader/NoticeBarHeader";

// Mobile Menu Data Structure
const menuGroups = [
  {
    title: "Travel",
    items: [
      { label: "Flight", icon: Plane, path: "/our-services/air-tickets" },
      { label: "Offers", icon: Gift, path: "/offers" },
      { label: "Tour", icon: Palmtree, path: "/our-services/tour-packages" },
      { label: "Visa", icon: FileText, path: "/our-services/visa-services" },
    ]
  },
  {
    title: "Extras",
    items: [
      { label: "Gift Card", icon: Gift, path: "/offers" },
    ]
  },
  {
    title: "Rewards",
    items: [
      { label: "Club Limitless", icon: ShieldCheck, path: "/rewards" },
    ]
  }
];

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
      <nav className="fixed top-13 md:top-9 left-0 w-full z-50 glass-liquid-water transition-all duration-300">
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

          {/* Premium Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 p-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-8 py-2.5 text-md font-bold transition-all duration-500 rounded-full group flex items-center justify-center ${
                    isActive ? "text-[#005a31]" : "text-gray-900 hover:text-[#ffcc00]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-border"
                      className="absolute inset-0 rounded-full p-[1.8px] overflow-hidden" 
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    >
                      <motion.div
                        className="absolute inset-[-150%] z-0"
                        style={{
                          background: "conic-gradient(from 0deg, #34A853, #FBBC05, white, #34A853)",
                        }}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="absolute inset-[1.8px] bg-white rounded-full z-[1]" />
                    </motion.div>
                  )}
                  <span className="relative z-10 tracking-wide uppercase text-[11px] font-extrabold">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link 
              href="/contact"
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
                <motion.div 
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent w-full h-full"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 1 }}
                />
                <span className="relative z-10">GET TOUCH</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= FULL SCREEN MOBILE MENU (UPDATED) ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col overflow-y-auto"
          >
            {/* Header & Close Button */}
            <div className="p-6 flex justify-between items-center border-b border-gray-50">
              <div className="relative h-10 w-32">
                <Image 
                  src="/eammu_holidays_Travel_agency.webp" 
                  alt="Logo" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-500">
                <X size={32} />
              </button>
            </div>

            <div className="px-6 pb-10 flex-1">
              {/* Blue "Hello Traveler" Banner */}
              <div className="mt-6 bg-[#FFCC00] rounded-2xl p-6 mb-8 text-white shadow-lg">
                <h2 className="text-2xl font-bold mb-1">Hello, Traveler</h2>
                <p className="text-sm opacity-90 mb-5">Get exclusive deals & plan your trips!</p>
                <button className="bg-[#ffffff] text-[#005a1b] font-bold py-2.5 px-8 rounded-lg hover:bg-[#e6b800] transition-colors">
                  Sign In
                </button>
              </div>

              {/* Menu Sections (Travel, Extras, Rewards) */}
              <div className="flex flex-col gap-10">
                {menuGroups.map((group) => (
                  <div key={group.title} className="border-b border-gray-50 pb-6 last:border-none">
                    <h3 className="text-gray-900 font-bold text-lg mb-6">{group.title}</h3>
                    <div className="flex flex-col gap-6">
                      {group.items.map((item) => (
                        <Link 
                          key={item.label} 
                          href={item.path}
                          className="flex items-center gap-4 text-gray-600 hover:text-[#005a31] transition-colors"
                        >
                          <item.icon size={26} className="text-[#005a31]" />
                          <span className="text-lg font-medium">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                
                {/* Original Nav Items (Home, About, etc.) for Mobile */}
                <div className="border-t border-gray-50 pt-6">
                  <h3 className="text-gray-900 font-bold text-lg mb-6">Explore</h3>
                  <div className="flex flex-col gap-6">
                    {navItems.map((item) => (
                      <Link 
                        key={item.path} 
                        href={item.path} 
                        className={`text-lg font-medium ${pathname === item.path ? "text-[#005a31]" : "text-gray-600"}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connection Footer */}
            <div className="p-8 border-t border-gray-100 bg-gray-50">
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-4">Connect with us</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#005a31] shadow-sm border border-gray-100"><Facebook size={20} /></div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#005a31] shadow-sm border border-gray-100"><Instagram size={20} /></div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#005a31] shadow-sm border border-gray-100"><MessageCircle size={20} /></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= SPACING ================= */}
      <div className="sm:-mt-4" />
    </>
  );
}