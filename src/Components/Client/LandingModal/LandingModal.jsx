"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import Image from 'next/image';

const carouselImages = [
  { url: "/dubai-safari.webp", title: "Desert Safari" },
  { url: "/desert_kamel_egypt.jpg", title: "Egypt Tour" },
  { url: "/dubai-luxury.avif", title: "Dubai Luxury" }
];

const LandingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [email, setEmail] = useState('');

  // ✅ FIX 1: একটাই delay — dynamic() না করলে এটাই যথেষ্ট
  // sessionStorage চেক করে, শুধু প্রথমবার 3s পর show করে
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const hasSeenModal = sessionStorage.getItem('hasSeenLandingModal');
      if (hasSeenModal) return;

      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenLandingModal', 'true');
      }, 3000); // ✅ 3s — LCP শেষ হওয়ার পর দেখাবে, CLS হবে না

      return () => clearTimeout(timer);
    } catch {
      // sessionStorage blocked (private mode) হলেও crash করবে না
    }
  }, []);

  // ✅ FIX 2: Carousel শুধু modal open থাকলে চলবে
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen]);

  // ✅ FIX 3: useCallback — re-render এ নতুন function তৈরি হবে না
  const handleClose = useCallback(() => setIsOpen(false), []);

  const handleSubscribe = useCallback((e) => {
    e.preventDefault();
    if (!email) return;

    toast.success('Successfully subscribed!', {
      duration: 3000,
      position: 'top-center',
      style: { background: '#005a31', color: '#fff' },
      icon: <CheckCircle size={20} />,
    });

    setTimeout(handleClose, 1500);
  }, [email, handleClose]);

  // ✅ FIX 4: Modal না খুললে কিছুই render করে না — Toaster ও না
  // এতে initial page load এ কোনো extra DOM নেই
  if (!isOpen) return null;

  return (
    <>
      <Toaster />
      <AnimatePresence>
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-hidden">

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-white/10 backdrop-blur-[8px] cursor-pointer"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-4xl flex flex-col md:flex-row max-h-[90vh] overflow-hidden will-change-transform
                       bg-white/70 backdrop-blur-[20px] rounded-[2rem] md:rounded-[3rem]
                       border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1),inset_0_0_20px_rgba(255,255,255,0.5)]"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2.5 bg-white/40 hover:bg-white/60 backdrop-blur-md rounded-full transition-all border border-white/50 shadow-inner"
              aria-label="Close modal"
            >
              <X size={18} className="text-gray-800" />
            </button>

            {/* LEFT: Image Carousel */}
            <div className="relative w-full md:w-1/2 min-h-[250px] md:h-auto bg-gray-200 overflow-hidden">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentImg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={carouselImages[currentImg].url}
                    alt={carouselImages[currentImg].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    // ✅ FIX 5: Modal দেরিতে খোলে, তাই সব image lazy — priority দরকার নেই
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-4 md:p-8">
                    <h3 className="text-white text-xl md:text-3xl font-black uppercase italic tracking-tighter leading-none">
                      {carouselImages[currentImg].title}
                    </h3>
                    <p className="text-gray-200 text-[10px] md:text-xs font-bold mt-1 md:mt-2 uppercase tracking-wider">
                      Exclusive Benefits with Eammu Holidays
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-8 flex gap-2 z-20">
                {carouselImages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      currentImg === i ? 'w-6 md:w-8 bg-[#25D366]' : 'w-2 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-10 flex flex-col justify-center bg-transparent overflow-y-auto">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-black text-[#001f3f] mb-1">Welcome!</h2>
                <p className="text-gray-500 text-[9px] md:text-[10px] mb-6 md:mb-8 font-bold uppercase tracking-[0.2em]">
                  Sign-in to unlock member rates
                </p>
              </div>

              <button className="w-full flex items-center justify-center gap-3 border border-white/60 bg-white/30 backdrop-blur-sm py-3 rounded-xl font-bold text-gray-700 hover:bg-white/50 transition-all mb-5 md:mb-6 shadow-sm">
                {/* ✅ FIX 6: External img → next/image বা inline SVG — এখানে inline SVG ব্যবহার করা সবচেয়ে ভালো */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <div className="relative flex items-center mb-6 md:mb-8">
                <div className="flex-grow border-t border-black/5"></div>
                <span className="mx-3 text-gray-400 text-[8px] md:text-[9px] font-black uppercase tracking-widest">
                  Or login with email
                </span>
                <div className="flex-grow border-t border-black/5"></div>
              </div>

              <form onSubmit={handleSubscribe} className="space-y-4 md:space-y-5">
                <div>
                  <label className="text-[9px] md:text-[10px] font-black uppercase text-[#005a31] mb-1 block tracking-widest">
                    Email or Mobile
                  </label>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. hello@eammu.com"
                    className="w-full border-b-2 border-black/10 bg-transparent focus:border-[#005a31] py-2 outline-none font-bold text-gray-800 transition-all placeholder:text-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#005a31] text-white py-3.5 md:py-4 rounded-xl font-black uppercase tracking-[0.15em] text-[10px] md:text-[11px] hover:bg-[#004d2a] transition-all shadow-lg shadow-[#005a31]/20 active:scale-[0.98]"
                >
                  Get Started
                </button>
              </form>

              <p className="text-[8px] md:text-[9px] text-gray-400 mt-6 md:mt-8 text-center leading-relaxed">
                By continuing, you agree to our{' '}
                <span className="text-gray-600 underline cursor-pointer">Privacy Policy</span>
                {' '}and{' '}
                <span className="text-gray-600 underline cursor-pointer">Terms</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default LandingModal;