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
      { label: "Flight", icon: Plane, path: "/flight-booking" },
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
    sizes="(max-width: 640px) 120px, 150px"
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
      {/* ================= FULL SCREEN MOBILE MENU ================= */}
<AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", damping: 28, stiffness: 220 }}
      className="fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden"
    >
      {/* ── Top bar ── */}
      <div className="flex-shrink-0 flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div className="relative h-9 w-28">
          <Image
            src="/eammu_holidays_Travel_agency.webp"
            alt="Eammu Holidays"
            fill
            className="object-contain object-left"
          />
        </div>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
      </div>

      {/* ── Scrollable body ── */}
      <div className="flex-1 overflow-y-auto overscroll-contain">

        {/* ── Quick Actions Grid ── */}
        <div className="px-5 pt-6 pb-2">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-gray-400 mb-4">
            Quick Actions
          </p>
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "Visa",    icon: FileText,  path: "/visa-checker",  bg: "bg-green-50",  iconColor: "text-[#005a31]" },
              { label: "Flight",  icon: Plane,     path: "/flight-booking",               bg: "bg-sky-50",    iconColor: "text-sky-600"   },
              { label: "Tour",    icon: Palmtree,  path: "/our-services/tour-packages",   bg: "bg-orange-50", iconColor: "text-orange-500"},
              { label: "Umrah",   icon: ShieldCheck, path: "/our-services/umrah-packages",bg: "bg-amber-50",  iconColor: "text-amber-600" },
            ].map((tile) => (
              <Link
                key={tile.label}
                href={tile.path}
                className="flex flex-col items-center gap-2 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm active:scale-95 transition-transform"
              >
                <div className={`w-11 h-11 rounded-xl ${tile.bg} flex items-center justify-center`}>
                  <tile.icon size={22} className={tile.iconColor} />
                </div>
                <span className="text-[11px] font-bold text-gray-700">{tile.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Visa Destinations strip ── */}
        <div className="px-5 pt-6 pb-2">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-gray-400 mb-3">
            Popular Visa Destinations
          </p>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {[
              { flag: "🇦🇪", label: "Dubai",     path: "/visa/united-arab-emirates-visa"  },
              { flag: "🇲🇾", label: "Malaysia",  path: "/visa-checker"       },
              { flag: "🇹🇭", label: "Thailand",  path: "/visa-checker"       },
              { flag: "🇬🇧", label: "UK",        path: "/visa-checker"       },
              { flag: "🇩🇪", label: "Schengen",  path: "/schengen-visa"                    },
              { flag: "🇨🇦", label: "Canada",    path: "/visa-checker"       },
              { flag: "🇦🇺", label: "Australia", path: "/visa-checker"       },
              { flag: "🇯🇵", label: "Japan",     path: "/visa-checker"       },
            ].map((dest) => (
              <Link
                key={dest.label}
                href={dest.path}
                className="flex-shrink-0 flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-100 active:bg-green-50 transition-colors"
              >
                <span className="text-2xl leading-none">{dest.flag}</span>
                <span className="text-[10px] font-semibold text-gray-600 whitespace-nowrap">{dest.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Main nav links ── */}
        <div className="px-5 pt-6">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-gray-400 mb-3">
            Services
          </p>
          <div className="rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {[
              { label: "Visa Services",         sub: "Tourist, student, business",    icon: FileText,   path: "/our-services/visa-services"       },
              { label: "Flight Booking",         sub: "International & domestic",      icon: Plane,      path: "/flight-booking"                   },
              { label: "Tour Packages",          sub: "Family, group, honeymoon",      icon: Palmtree,   path: "/our-services/tour-packages"       },
              { label: "Umrah Packages",         sub: "Makkah & Madinah travel",       icon: ShieldCheck,path: "/our-services"      },
              { label: "Visa Checker",           sub: "Check 195 countries",           icon: Globe,      path: "/visa-checker"                     },
              { label: "Schengen Visa Guide",    sub: "Europe travel from Bangladesh", icon: FileText,   path: "/schengen-visa"                    },
              { label: "Study Abroad",           sub: "Student visa consultancy",      icon: Gift,       path: "/study-abroad/student-visa"        },
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="flex items-center gap-4 px-4 py-3.5 bg-white hover:bg-green-50 active:bg-green-100 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-[#005a31]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900 leading-tight">{item.label}</p>
                  <p className="text-[11px] text-gray-400 leading-tight mt-0.5">{item.sub}</p>
                </div>
                <ChevronDown size={16} className="text-gray-300 ml-auto flex-shrink-0 -rotate-90" />
              </Link>
            ))}
          </div>
        </div>

        {/* ── Tools & Resources ── */}
        <div className="px-5 pt-5">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-gray-400 mb-3">
            Free Tools
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Visa Checker",           path: "/visa-checker"                                },
              { label: "Processing Time",         path: "/travel-resources/visa-processing-time-tracker" },
              { label: "Cost Calculator",         path: "/travel-cost-calculator"                     },
              { label: "Travel Resources",        path: "/travel-resources"                           },
            ].map((tool) => (
              <Link
                key={tool.path}
                href={tool.path}
                className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm font-semibold text-gray-700 hover:bg-green-50 hover:text-[#005a31] hover:border-green-200 transition-colors"
              >
                {tool.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Explore (pages) ── */}
        <div className="px-5 pt-5">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-gray-400 mb-3">
            Explore
          </p>
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  pathname === item.path
                    ? "bg-[#005a31] text-white border-[#005a31]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#005a31] hover:text-[#005a31]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="px-5 pt-5">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-[#005a31] text-white text-sm font-extrabold tracking-wide shadow-md active:scale-[0.98] transition-transform"
          >
            Get Free Travel Consultation
          </Link>
        </div>

        {/* bottom breathing room */}
        <div className="h-8" />
      </div>

      {/* ── Sticky footer ── */}
      <div className="flex-shrink-0 px-5 py-4 border-t border-gray-100 bg-white flex items-center justify-between">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Follow us
        </p>
        <div className="flex gap-3">
          <a href="#" aria-label="Facebook"  className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[#005a31] hover:bg-green-50 transition-colors"><Facebook  size={17} /></a>
          <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[#005a31] hover:bg-green-50 transition-colors"><Instagram size={17} /></a>
          <a href="#" aria-label="WhatsApp"  className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[#005a31] hover:bg-green-50 transition-colors"><MessageCircle size={17} /></a>
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