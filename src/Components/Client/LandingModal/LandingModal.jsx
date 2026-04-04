"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';

const carouselImages = [
  { url: "https://www.dubaidesertsafaris.com/wp-content/uploads/2025/01/95100e6bbb4e0728dbb90a5033802b73.webp", title: "Desert Safari" },
  { url: "/desert_kamel_egypt.jpg", title: "Thailand Tour" },
  { url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80", title: "Dubai Luxury" }
];

const LandingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Preload images
    carouselImages.forEach((image) => {
      const img = new Image();
      img.src = image.url;
    });

    // Auto-open modal after 1.5 seconds
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    // Image carousel interval
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Successfully subscribed!', {
        duration: 3000,
        position: 'top-center',
        style: { background: '#005a31', color: '#fff' },
        icon: <CheckCircle size={20} />
      });
      // Close modal after success
      setTimeout(() => setIsOpen(false), 1500);
    }
  };

  return (
    <>
      <Toaster />
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-hidden">
            
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-[2px] cursor-pointer"
            />

            {/* Modal Container */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto will-change-transform"
            >

              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 md:top-4 md:right-4 z-50 p-2 bg-white/80 hover:bg-white md:bg-gray-100 md:hover:bg-gray-200 rounded-full transition-all shadow-sm"
                aria-label="Close modal"
              >
                <X size={18} className="text-gray-800" />
              </button>

              {/* LEFT SIDE: Animated Carousel */}
              <div className="relative w-full md:w-1/2 h-48 sm:h-56 md:h-auto bg-gray-200 overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={currentImg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={carouselImages[currentImg].url} 
                      className="w-full h-full object-cover" 
                      alt={carouselImages[currentImg].title}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-8">
                      <h3 className="text-white text-xl md:text-3xl font-black uppercase italic tracking-tighter leading-none">
                        {carouselImages[currentImg].title}
                      </h3>
                      <p className="text-gray-200 text-[10px] md:text-xs font-bold mt-1 md:mt-2 uppercase tracking-wider">
                        Exclusive Benefits with Eammu Holidays
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-8 flex gap-2 z-20">
                  {carouselImages.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-500 ${currentImg === i ? 'w-6 md:w-8 bg-[#25D366]' : 'w-2 bg-white/40'}`} 
                    />
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE: Auth/Subscription Form */}
              <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-10 flex flex-col justify-center bg-white">
                
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-black text-[#001f3f] mb-1">Welcome!</h2>
                  <p className="text-gray-500 text-[9px] md:text-[10px] mb-6 md:mb-8 font-bold uppercase tracking-[0.2em]">
                    Sign-in to unlock member rates
                  </p>
                </div>

                {/* Google Auth Button */}
                <button className="w-full flex items-center justify-center gap-3 border-[1.5px] border-gray-200 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all mb-5 md:mb-6">
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5" alt="google logo" />
                  Continue with Google
                </button>

                {/* Divider */}
                <div className="relative flex items-center mb-6 md:mb-8">
                  <div className="flex-grow border-t border-gray-100"></div>
                  <span className="mx-3 text-gray-400 text-[8px] md:text-[9px] font-black uppercase tracking-widest">
                    Or login with email
                  </span>
                  <div className="flex-grow border-t border-gray-100"></div>
                </div>

                {/* Email Form */}
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
                      className="w-full border-b-2 border-gray-100 focus:border-[#005a31] py-2 outline-none font-bold text-gray-800 transition-all placeholder:text-gray-300"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-[#005a31] text-white py-3.5 md:py-4 rounded-xl font-black uppercase tracking-[0.15em] text-[10px] md:text-[11px] hover:bg-[#004d2a] transition-all shadow-lg shadow-[#005a31]/10 active:scale-[0.98]"
                  >
                    Get Started
                  </button>
                </form>

                {/* Legal Footer */}
                <p className="text-[8px] md:text-[9px] text-gray-400 mt-6 md:mt-8 text-center leading-relaxed">
                  By continuing, you agree to our <span className="text-gray-600 underline cursor-pointer">Privacy Policy</span> and <span className="text-gray-600 underline cursor-pointer">Terms</span>.
                </p>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LandingModal;