"use client";
import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, Plane, ShieldCheck, MapPin, 
  PhoneCall, MessageCircle, Mail, Camera, 
  Building2, ArrowRight, Star, Globe 
} from 'lucide-react';

const TravelAgencyArmenia = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 1. CAROUSEL DATA (3 Slides with unique text)
  const slides = [
    {
      image: "https://www.trekgeorgia.com/wp-content/uploads/2019/04/armenia_h_00000220066588.ngsversion.1501784794813.adapt_.1900.1.jpg",
      badge: "Certified Caucasus Experts",
      title: "Premier Travel Agency in Armenia",
      desc: "Experience the magic of Yerevan with Eammu Holidays. From visa processing to luxury tours, we are your 24/7 local partner."
    },
    {
      image: "https://janarmenia.com/uploads/0000/687/2024/01/04/garni2.webp",
      badge: "Exclusive Tour Packages",
      title: "Discover Ancient Landmarks",
      desc: "Daily guided tours to Garni Temple, Geghard Monastery, and Lake Sevan. Explore Armenian history with expert Bengali/English guides."
    },
    {
      image: "https://visityerevan.am/media/images/7.JPG",
      badge: "24/7 Visa Assistance",
      title: "Hassle-Free Visa Processing",
      desc: "Fast-track Armenia E-visa and transit visa support for all nationalities. Documentation handled by local experts at Lambron 39."
    }
  ];

  // 2. AUTO-PLAY LOGIC
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <>

      <main className="bg-white text-slate-900 overflow-hidden pb-20">
        
        {/* --- DYNAMIC HERO SECTION WITH CAROUSEL --- */}
        <section className="relative h-[70vh] md:h-[70vh] flex items-center overflow-hidden bg-[#005a31]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title} 
                className="w-full h-full object-cover"
              />
              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#005a31]/90 via-[#005a31]/40 to-black/20"></div>
            </motion.div>
          </AnimatePresence>

          <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 items-center h-full">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={fadeInUp}
              className="max-w-xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block shadow-lg">
                    {slides[currentSlide].badge}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] drop-shadow-md">
                    {slides[currentSlide].title.split('Armenia')[0]} 
                    <span className="text-orange-400 italic">Armenia</span>
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed font-medium">
                    {slides[currentSlide].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#005a31] px-8 py-4 rounded-2xl font-black hover:bg-orange-500 hover:text-white transition-all shadow-xl flex items-center gap-2">
                  Explore Tours <ArrowRight size={18}/>
                </button>
                <a href="https://wa.me/37494810585" className="backdrop-blur-md bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-black transition-all flex items-center gap-2 hover:bg-white/20">
                  <MessageCircle size={20}/> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-10 left-6 z-20 flex gap-2">
            {slides.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-12 bg-orange-400' : 'w-4 bg-white/40'}`}
              />
            ))}
          </div>
        </section>

        {/* --- QUICK CONTACT INFO --- */}
        <section className="relative -mt-10 z-30 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard icon={<MapPin/>} title="Office Location" desc="Lambron 39, Yerevan" color="bg-[#005a31]"/>
            <InfoCard icon={<PhoneCall/>} title="24/7 Helpline" desc="+374 94 810585" color="bg-orange-500"/>
            <InfoCard icon={<Mail/>} title="Email Support" desc="armenia@eammu.com" color="bg-[#005a31]"/>
          </div>
        </section>

        {/* --- SERVICES GRID --- */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-4">Complete Travel Ecosystem</h2>
            <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-500 font-medium max-w-2xl mx-auto italic">
              "Your trusted travel agency in Yerevan, bridging the gap between local culture and global standards."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceBlock icon={<ShieldCheck/>} title="Visa Support" desc="Specialized E-visa and Transit visa support for Bangladeshi and international travelers." />
            <ServiceBlock icon={<Camera/>} title="Cultural Tours" desc="Deep-dive into Armenian heritage with visits to Garni, Sevan, and Geghard." />
            <ServiceBlock icon={<Building2/>} title="Hotel Direct" desc="Direct partnerships with hotels to get you prices lower than Booking.com." />
            <ServiceBlock icon={<Plane/>} title="Airport Service" desc="Seamless Zvartnots (EVN) airport transfers and flight ticket management." />
          </div>
        </section>

        {/* --- POPULAR TOURS CARDS --- */}
        <section className="bg-slate-50 py-20 px-6 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#005a31]">Popular Armenia Tours</h2>
                <p className="text-slate-500 mt-2 font-medium">Most booked experiences in Yerevan for 2026</p>
              </div>
              <button className="text-[#005a31] font-black flex items-center gap-2 hover:text-orange-500 transition-colors uppercase text-sm tracking-tighter">
                View All Packages <ArrowRight size={16}/>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TourCard title="Yerevan City Tour" time="1 Day" img="https://visityerevan.am/media/images/7.JPG" price="From $45" />
              <TourCard title="Lake Sevan & Dilijan" time="2 Days" img="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/70/09.jpg" price="From $120" />
              <TourCard title="Mount Ararat View" time="1 Day" img="https://app.conciergetravel.am/storage/uploads/2BQWKJpgB1nO4N1E6hfolAEOz7ymxy3paQe7WIGc.jpg" price="From $55" />
            </div>
          </div>
        </section>

        {/* --- TRUST SECTION --- */}
        <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://www.bidfortrip.com/uploads/0000/83/2021/07/17/khor-virap1.jpg" 
              className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white"
              alt="Armenia Tourism"
            />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500 rounded-full z-0 animate-pulse"></div>
          </div>

          <div>
            <h3 className="text-orange-500 font-black uppercase tracking-widest text-sm mb-4">Why Eammu Holidays?</h3>
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-8 leading-tight">Your Local Friend in <br/> a Foreign Land</h2>
            <div className="space-y-6">
              <TrustItem icon={<Globe/>} text="Global Standards, Local Prices" />
              <TrustItem icon={<Star/>} text="Bengali & English Speaking Local Guides" />
              <TrustItem icon={<ShieldCheck/>} text="100% Verified Accommodation Partners" />
              <TrustItem icon={<PhoneCall/>} text="Emergency 24/7 Ground Support in Yerevan" />
            </div>
            <a href="https://wa.me/37494810585" className="mt-10 inline-flex items-center gap-4 bg-[#005a31] text-white px-10 py-5 rounded-3xl font-black shadow-xl hover:bg-orange-500 transition-all">
              Schedule a Free Consultation
            </a>
          </div>
        </section>
      </main>

      {/* Floating Action Button (Mobile Only) */}
      <a href="https://wa.me/37494810585" className="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-2xl z-50 md:hidden animate-bounce">
        <MessageCircle size={28}/>
      </a>
    </>
  );
};

// --- SUB-COMPONENTS ---

const InfoCard = ({ icon, title, desc, color }) => (
  <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-5 hover:-translate-y-2 transition-transform duration-300">
    <div className={`${color} text-white p-4 rounded-2xl`}>
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h4 className="text-gray-400 text-xs font-black uppercase tracking-tighter">{title}</h4>
      <p className="text-[#005a31] font-black text-lg">{desc}</p>
    </div>
  </div>
);

const ServiceBlock = ({ icon, title, desc }) => (
  <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-[#005a31] hover:shadow-2xl transition-all duration-500">
    <div className="w-16 h-16 bg-slate-50 text-[#005a31] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#005a31] group-hover:text-white transition-all duration-500">
      {React.cloneElement(icon, { size: 30 })}
    </div>
    <h3 className="text-2xl font-black text-[#005a31] mb-4">{title}</h3>
    <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
  </div>
);

const TourCard = ({ title, time, img, price }) => (
  <div className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100">
    <div className="relative h-64 overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-black text-[#005a31] text-sm shadow-md">
        {price}
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-black text-[#005a31] mb-2">{title}</h3>
      <div className="flex items-center gap-2 text-orange-500 font-bold text-sm uppercase tracking-widest mb-6">
        <Plane size={16}/> {time}
      </div>
      <a href="https://wa.me/37494810585" className="block text-center bg-slate-50 hover:bg-[#005a31] hover:text-white text-[#005a31] py-4 rounded-2xl font-black transition-all">
        Book This Tour
      </a>
    </div>
  </div>
);

const TrustItem = ({ icon, text }) => (
  <div className="flex items-center gap-4 group">
    <div className="text-orange-500 group-hover:scale-125 transition-transform">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <span className="text-lg font-bold text-slate-700">{text}</span>
  </div>
);

export default TravelAgencyArmenia;