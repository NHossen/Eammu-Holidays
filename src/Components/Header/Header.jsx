"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import Image from 'next/image';

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

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
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-3 sm:px-4 py-2 bg-gradient-to-r from-[#005a31] via-[#007842] to-[#005a31]"
        animate={{ backgroundPosition: ["0% center", "100% center", "0% center"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
       {/* Center Text */}
        <div className="flex-1 text-center">
          📢 Enjoy <span className="text-yellow-300 font-semibold">20% OFF</span> +{" "}
          <span className="text-cyan-200 font-semibold">
            FREE Visa Assistance
          </span>{" "}
          One place for everything —{" "}
          <span className="text-yellow-300 font-semibold">With Eammu !</span>
        </div>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 text-white border border-white px-2 py-1 rounded text-xs"
          >
            <Globe size={14} />
            <span className="hidden sm:inline">Lang</span>
            <ChevronDown size={12} />
          </button>

          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute right-0 mt-2 w-28 bg-white rounded shadow p-2 z-50"
              >
                {["English", "বাংলা", "Հայերեն", "Русский"].map((lang) => (
                  <button
                    key={lang}
                    className="block w-full text-left px-2 py-1 text-xs hover:bg-gray-100"
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
      <div className="fixed top-[60px] sm:top-[42px] w-full z-40 shadow-xl bg-white">
        <div className="navbar max-w-7xl mx-auto px-3 sm:px-5">

          {/* LEFT */}
          <div className="navbar-start">
            {/* Mobile Menu */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                ☰
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 z-[100]"
              >
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`${
                        pathname === item.path
                          ? "text-[#005a31] font-bold"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

           {/* Logo */}
<Link href="/" className="flex items-center">
  <div className="relative h-[40px] w-[120px] sm:h-[50px] sm:w-[150px]">
    <Image
      src="/eammu_holidays_Travel_agency.webp" // Ensure the extension (.png, .webp, .svg) matches your file
      alt="Eammu Holidays Logo"
      fill
      priority
      sizes="(max-width: 640px) 120px, 150px"
      className="object-contain object-left" 
    />
  </div>
</Link>
          </div>

          {/* CENTER (Desktop Menu) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`hover:text-[#005a31] ${
                      pathname === item.path
                        ? "text-[#005a31] font-bold underline"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end">
            <Link href="/contact">
              <button className="btn bg-[#005a31] text-white border-none text-xs sm:text-sm">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= SPACING ================= */}
      <div className="pt-[110px] sm:pt-[107px]" />
    </>
  );
}