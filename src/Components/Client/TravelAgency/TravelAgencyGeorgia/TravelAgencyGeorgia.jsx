"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, Globe, Plane, ShieldCheck, MapPin, PhoneCall, 
  MessageCircle, Mail, Clock, Briefcase, Landmark, GraduationCap,
  ArrowRight
} from 'lucide-react';

const TravelAgencyGeorgia = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 1. CAROUSEL DATA (Matches Armenia/Bangladesh style)
  const slides = [
    {
      image: "https://visitgeorgia.ge/wp-content/uploads/2-4.png",
      badge: "Your Bridge to Tbilisi",
      title: "Trusted Travel Partner in Georgia",
      desc: "Navigating Georgia's tourism and business landscape made easy. Expert visa and tour solutions in Tbilisi.",
      btnText: "Explore Services"
    },
    {
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2000&auto=format&fit=crop",
      badge: "Business & Residency",
      title: "Georgia TRC & Business Setup",
      desc: "Get your Temporary Residence Permit and legal business license with our expert PRO team.",
      btnText: "Get Started"
    },
    {
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2000&auto=format&fit=crop",
      badge: "Study in Europe",
      title: "Student Consultancy Georgia",
      desc: "Direct admissions to top-ranked medical and engineering universities in Tbilisi.",
      btnText: "Apply Now"
    }
  ];

  // 2. AUTO-PLAY LOGIC (5 Seconds - Same as Armenia/Bangladesh)
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
        
        {/* --- FULL-WIDTH HERO CAROUSEL (Armenia/Bangladesh Style) --- */}
        <section className="relative h-[70vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-[#005a31]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 z-0"
            >
              <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#005a31]/80 via-transparent to-[#005a31]"></div>
            </motion.div>
          </AnimatePresence>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-20 text-center px-4 max-w-5xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-orange-500 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest mb-8 inline-block shadow-lg">
                  {slides[currentSlide].badge}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-white leading-tight drop-shadow-2xl">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 font-medium max-w-3xl mx-auto leading-relaxed">
                  {slides[currentSlide].desc}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-orange-500 hover:bg-white hover:text-[#005a31] text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl flex items-center gap-2">
                    {slides[currentSlide].btnText} <ArrowRight size={20}/>
                  </button>
                  <a href="https://wa.me/995574446218" className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white hover:text-[#005a31] text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all flex items-center gap-3">
                    <MessageCircle size={22}/> WhatsApp
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex gap-4">
              {slides.map((_, i) => (
                <div key={i} className={`h-2 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-12 bg-orange-500' : 'w-4 bg-white/30'}`} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* --- TBILISI OFFICE CONTACT STRIP (Preserved) --- */}
        <section className="relative z-30 -mt-16 max-w-7xl mx-auto px-6">
          <div className="bg-white shadow-2xl rounded-[3rem] p-10 grid grid-cols-1 md:grid-cols-3 gap-10 border border-slate-100">
            <div className="flex items-center gap-4">
               <div className="p-4 bg-[#005a31] text-white rounded-xl shadow-lg"><MapPin size={24}/></div>
               <div><h4 className="text-xs uppercase font-bold text-gray-400">Tbilisi Office</h4><p className="font-bold text-[#005a31] leading-tight text-sm">Floor 5, Levan Gotua St #3</p></div>
            </div>
            <div className="flex items-center gap-4">
               <div className="p-4 bg-orange-500 text-white rounded-xl shadow-lg"><PhoneCall size={24}/></div>
               <div><h4 className="text-xs uppercase font-bold text-gray-400">Hotline</h4><p className="font-bold text-slate-800">+995 574 446 218</p></div>
            </div>
            <div className="flex items-center gap-4">
               <div className="p-4 bg-[#005a31] text-white rounded-xl shadow-lg"><Mail size={24}/></div>
               <div><h4 className="text-xs uppercase font-bold text-gray-400">Email Us</h4><p className="font-bold text-slate-800">georgia@eammu.com</p></div>
            </div>
          </div>
        </section>

        {/* --- GEORGIA SPECIALIST SERVICES (Preserved) --- */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-4 uppercase tracking-tighter">Georgia Specialist Services</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceBlock icon={<Briefcase/>} title="Business Visa" desc="End-to-end support for business formation and commercial visas in Georgia." />
            <ServiceBlock icon={<GraduationCap/>} title="Study in Georgia" desc="Top-tier consultancy for international students seeking admission in Tbilisi." />
            <ServiceBlock icon={<Landmark/>} title="TRC Assistance" desc="Expert guidance for Temporary Residence Permits and legal stay in Georgia." />
            <ServiceBlock icon={<Globe/>} title="Batumi Tours" desc="Explore the beauty of the Black Sea and the mountains with our guided tours." />
          </div>
        </section>

        {/* --- POPULAR GEORGIA TOURS (Preserved) --- */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#005a31] mb-3 sm:mb-4">Popular Georgia Tours</h2>
            <div className="w-16 sm:w-20 h-1.5 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Tbilisi City Tour", duration: "1 Day", img: "https://www.advantour.com/img/georgia/images/tbilisi.jpg" },
              { title: "Mtskheta Heritage Tour", duration: "1 Day", img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/16/40/15/e8.jpg" },
              { title: "Kazbegi Mountain Adventure", duration: "2 Days", img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/15/73/b0/36.jpg" },
              { title: "Batumi & Black Sea Tour", duration: "2 Days", img: "https://cdn.sanity.io/images/nxpteyfv/goguides/730a0b0e027f8a02a6a6eb16a2dfda803852fc2a-1600x1066.jpg" },
              { title: "Wine & Kakheti Valley", duration: "1 Day", img: "https://eurasia.travel/wp-content/uploads/2025/04/19.-Tusheti-Kakheti-region-Georgia.jpg" },
              { title: "Uplistsikhe & Gori Tour", duration: "1 Day", img: "https://georgiantour.com/wp-content/uploads/2015/03/ufliscixe.jpg" }
            ].map((tour, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl transition-all">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-xl text-[10px] font-black flex items-center gap-2 uppercase">
                    <Clock size={12}/> {tour.duration}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-[#005a31] mb-6">{tour.title}</h3>
                  <a href="https://wa.me/995574446218" className="block text-center bg-orange-500 hover:bg-[#005a31] text-white py-4 rounded-2xl font-bold transition-all">
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SEO AUTHORITATIVE CONTENT (Preserved) --- */}
        <section className="bg-[#fcfcfc] py-24 px-6 border-y border-slate-100">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/2">
              <h3 className="text-xl font-bold text-orange-500 mb-4 uppercase tracking-widest">About Eammu Holidays Georgia</h3>
              <h2 className="text-4xl font-black text-[#005a31] mb-8 leading-tight">Connecting the World via <span className="text-orange-500">Tbilisi</span></h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                As a prominent <strong>travel agency in Georgia</strong>, Eammu Holidays understands the local legalities and tourism landscape. We help international clients navigate visa requirements, residency permits, and discover the breathtaking landscapes of Tbilisi, Batumi, and Kazbegi. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Floor 5 Corporate Office", "Business License Support", "TRC & Residency Experts", "Multilingual Support Staff"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-[#005a31]">
                    <CheckCircle className="text-orange-500" size={18}/> {text}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Georgia Specific FAQ */}
            <div className="lg:w-1/2 bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
               <h4 className="text-2xl font-bold text-[#005a31] mb-8 border-b-2 border-orange-500 pb-2 inline-block">Georgia Travel FAQ</h4>
               <div className="space-y-8">
                  <div className="group">
                    <h5 className="font-black text-slate-800 group-hover:text-orange-500 transition-colors cursor-pointer">Can I get a residence permit in Georgia?</h5>
                    <p className="text-slate-600 text-sm mt-2">Yes, through investment or business. Our Tbilisi team specializes in TRC (Temporary Residence Card) processing.</p>
                  </div>
                  <div className="group pt-6 border-t border-slate-100">
                    <h5 className="font-black text-slate-800 group-hover:text-orange-500 transition-colors cursor-pointer">Where is your office located?</h5>
                    <p className="text-slate-600 text-sm mt-2">We are at Floor 5, Levan Gotua Street #3, Tbilisi. You can reach us on +995 574 446 218.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Mobile Sticky WhatsApp */}
        <a href="https://wa.me/995574446218" className="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-2xl z-50 md:hidden animate-bounce transition-all">
          <MessageCircle size={28}/>
        </a>
      </main>
    </>
  );
};

// --- HELPER COMPONENT (Preserved) ---
const ServiceBlock = ({ icon, title, desc }) => (
  <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-orange-500 hover:shadow-2xl transition-all h-full">
    <div className="w-12 h-12 bg-[#005a31] text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors shadow-md">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <h3 className="text-xl font-bold text-[#005a31] mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default TravelAgencyGeorgia;