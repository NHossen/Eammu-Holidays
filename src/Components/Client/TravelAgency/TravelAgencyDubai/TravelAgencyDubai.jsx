"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, Globe, Award, MapPin, PhoneCall, 
  MessageCircle, Landmark, ShieldCheck, ArrowRight, 
  Users, Briefcase, Star, Clock, HeartHandshake, Zap
} from 'lucide-react';

const TravelAgencyDubai = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 1. CAROUSEL DATA (Brand-aligned with Green & Gold aesthetic)
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80",
      badge: "Eammu Holidays Dubai",
      title: "Your Premier Travel Partner in Business Bay",
      desc: "Providing world-class visa solutions and luxury desert adventures with 100% transparency.",
      btnText: "Explore Services"
    },
    {
      image: "https://images.unsplash.com/photo-1582672093583-0979318b846e?auto=format&fit=crop&q=80",
      badge: "UAE Residency Experts",
      title: "Unlock Your Future with a Golden Visa",
      desc: "Specialized 10-year residency and investor visa processing for entrepreneurs and professionals.",
      btnText: "Check Eligibility"
    },
    {
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80",
      badge: "Global Visa Specialist",
      title: "Travel the World from Dubai",
      desc: "Expert documentation for Schengen, USA, UK, and Canada with high success rates.",
      btnText: "Apply Now"
    }
  ];

  // 2. AUTO-PLAY LOGIC (6 Seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <>
      <main className="min-h-screen bg-slate-50 relative">
        
        {/* --- DYNAMIC HERO SECTION WITH CAROUSEL --- */}
        <section className="relative h-[70vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-[#004d2c]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 z-0"
            >
              <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#004d2c]/80 via-transparent to-[#004d2c]"></div>
            </motion.div>
          </AnimatePresence>

          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-20 text-center px-4 max-w-6xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-[#c4a456] text-[#004d2c] px-5 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest mb-8 inline-block shadow-lg">
                  {slides[currentSlide].badge}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-white leading-tight drop-shadow-2xl">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 font-medium max-w-3xl mx-auto leading-relaxed">
                  {slides[currentSlide].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <button className="bg-[#c4a456] hover:bg-white text-[#004d2c] px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-2xl flex items-center gap-2 group">
                {slides[currentSlide].btnText} <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20}/>
              </button>
              <a href="https://wa.me/971507078334" className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white hover:text-[#004d2c] text-white px-10 py-4 rounded-2xl font-black text-lg transition-all flex items-center gap-3">
                <MessageCircle size={22}/> WhatsApp Now
              </a>
            </div>
          </motion.div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-12 flex gap-4 z-30">
            {slides.map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-12 bg-[#c4a456]' : 'w-4 bg-white/30'}`} />
            ))}
          </div>
        </section>

        {/* --- BRANDED INFO STRIP (Preserved Location & Contact) --- */}
        <section className="relative z-30 -mt-16 max-w-7xl mx-auto px-6">
          <div className="bg-white shadow-2xl rounded-[3rem] p-10 grid grid-cols-1 md:grid-cols-3 gap-10 border border-slate-100">
            <DubaiInfoCard icon={<MapPin/>} title="Business Bay HQ" desc="Office 12B, Executive Tower, Dubai" color="bg-[#004d2c] text-[#c4a456]"/>
            <DubaiInfoCard icon={<PhoneCall/>} title="VIP Hotline" desc="+971 50 707 8334" color="bg-[#c4a456] text-[#004d2c]"/>
            <DubaiInfoCard icon={<Award/>} title="Experience" desc="100% Transparency & Support" color="bg-[#004d2c] text-[#c4a456]"/>
          </div>
        </section>

        {/* --- SERVICES & SEO SECTION (Preserved content with expanded details) --- */}
        <section className="max-w-7xl mx-auto py-24 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#004d2c] mb-8 leading-tight">
                Your Trusted Global Partner in <span className="text-[#c4a456]">Business Bay</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  When searching for a <strong>travel agency in Dubai</strong>, reliability and speed are key. Eammu Holidays bridges your travel dreams with reality. From <strong>UAE Resident Visas</strong> to luxury world tours and complex <strong>Schengen, USA, and UK visas</strong>, our Business Bay consultants are ready to assist 24/7.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                {[
                  '100% Success Rate', 'Golden Visa Expert', 
                  'Luxury Tour Planner', '24/7 VIP Support',
                  'DED Licensed PRO', 'Corporate Setup'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl font-bold text-[#004d2c] shadow-sm border border-slate-50">
                    <CheckCircle size={18} className="text-[#c4a456]"/> {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Service Grid with preserved and more details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <DetailedServiceCard 
                icon={<Landmark/>} 
                title="UAE Residency" 
                desc="Golden Visa (10-Year), Investor Visa, and Freelance permits with full PRO support." 
                points={['Medical Assistance', 'Emirates ID Filing', 'Family Sponsorship']}
              />
              <DetailedServiceCard 
                icon={<ShieldCheck/>} 
                title="Global Visas" 
                desc="Specialized in Schengen, UK, Canada, and USA visas from our Dubai hub." 
                points={['Interview Prep', 'Document Review', 'Priority Slots']}
              />
              <DetailedServiceCard 
                icon={<Globe/>} 
                title="Luxury Tours" 
                desc="Exclusive world tours to Maldives, Europe, and Central Asia for residents." 
                points={['Group Tours', 'VIP Transfers', '5-Star Hotels']}
              />
              <DetailedServiceCard 
                icon={<Briefcase/>} 
                title="Business Setup" 
                desc="Mainland and Freezone company formation with full legal assistance." 
                points={['Trade License', 'PRO Services', 'Bank Account']}
              />
            </div>
          </div>
        </section>

        {/* --- POPULAR DUBAI TOURS (Preserved items) --- */}
        <section className="bg-[#004d2c] py-24 px-6 rounded-[4rem] mx-4 mb-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Popular Dubai Tours</h2>
            <div className="w-24 h-2 bg-[#c4a456] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              { title: "Burj Khalifa & Dubai Mall", duration: "Half Day", price: "AED 179", img: "https://climatecontrol.imiplc.com/_next/image?url=https%3A%2F%2Fcdn.tessa.imihy.eimed-project.de%2F621346%2FWeb_Header%2FBurj_Khalifa_Tower.webp&w=3840&q=75" },
              { title: "Desert Safari Adventure", duration: "1 Day / Evening", price: "AED 150", img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/13/bb/6a/7b.jpg" },
              { title: "Dubai Marina Cruise", duration: "Evening Dinner", price: "AED 120", img: "https://www.pelago.com/img/products/AE-United%20Arab%20Emirates/dubai-marina-dhow-cruise-dinner-with-entertainment/036dfefa-c682-4f9e-8d85-72fda3b852f7_dubai-marina-dhow-cruise-dinner-with-entertainment.jpg" },
              { title: "Palm Jumeirah Tour", duration: "Half Day", price: "AED 140", img: "https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/activities/f9cxlacfjbuydsfrl4ke.jpg" },
              { title: "Global Village Experience", duration: "Evening", price: "AED 80", img: "https://faredxb.com/wp-content/uploads/2024/10/1-12.jpg" },
              { title: "Abu Dhabi Day Trip", duration: "Full Day", price: "AED 250", img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/11/f7/6d/f8.jpg" }
            ].map((tour, i) => (
              <TourCard key={i} {...tour} />
            ))}
          </div>
        </section>

        {/* --- PRESERVED CTA SECTION --- */}
        <section className="bg-white border-t border-slate-100 py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-5xl font-black text-[#004d2c] mb-6 underline decoration-[#c4a456]">Need Expert Advice?</h3>
            <p className="text-slate-500 text-lg mb-12 italic">"Our Business Bay office is always open for your travel needs."</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:+971507078334" className="bg-[#004d2c] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#c4a456] hover:text-[#004d2c] transition-all flex items-center gap-3 shadow-2xl">
                <PhoneCall size={24}/> Call Now
              </a>
              <a href="https://wa.me/971507078334" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl hover:opacity-90 transition-all flex items-center gap-3 shadow-2xl">
                <MessageCircle size={24}/> WhatsApp Now
              </a>
            </div>
          </div>
        </section>

        {/* Sticky Mobile WhatsApp */}
        <a href="https://wa.me/971507078334" className="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-2xl z-50 md:hidden animate-bounce transition-all">
          <MessageCircle size={28}/>
        </a>
      </main>
    </>
  );
};

// --- PRESERVED & UPDATED HELPERS ---

const DubaiInfoCard = ({ icon, title, desc, color }) => (
  <div className="flex items-center gap-5">
    <div className={`p-4 ${color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h4 className="font-black text-[#004d2c] uppercase text-xs tracking-widest mb-1">{title}</h4>
      <p className="text-slate-500 font-bold text-sm leading-tight">{desc}</p>
    </div>
  </div>
);

const DetailedServiceCard = ({ icon, title, desc, points }) => (
  <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-50 hover:border-[#c4a456] transition-all group flex flex-col">
    <div className="w-14 h-14 bg-slate-50 text-[#004d2c] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#004d2c] group-hover:text-[#c4a456] transition-all">
      {React.cloneElement(icon, { size: 26 })}
    </div>
    <h3 className="text-xl font-black text-[#004d2c] mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed mb-6">{desc}</p>
    <div className="space-y-2 pt-4 border-t border-slate-100">
      {points.map((p, i) => (
        <div key={i} className="flex items-center gap-2 text-[10px] font-black text-[#004d2c]/60 uppercase tracking-tighter">
          <CheckCircle size={12} className="text-[#c4a456]"/> {p}
        </div>
      ))}
    </div>
  </div>
);

const TourCard = ({ img, title, duration, price }) => (
  <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-500">
    <div className="relative h-56 overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-4 right-4 bg-[#c4a456] text-[#004d2c] px-4 py-2 rounded-xl font-black shadow-lg">
        {price}
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-xl font-black text-[#004d2c] mb-2">{title}</h3>
      <p className="text-[#c4a456] font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
        <Clock size={14}/> {duration}
      </p>
      <a href="https://wa.me/971507078334" className="block text-center bg-[#004d2c] text-white py-4 rounded-2xl font-black hover:bg-[#c4a456] hover:text-[#004d2c] transition-all">
        Book Now
      </a>
    </div>
  </div>
);

export default TravelAgencyDubai;