"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Globe,
  MessageCircle,
  PhoneCall,
  MapPin,
  ChevronRight,
  Star,
  Clock,
  Laptop,
  Check,
  Plane
} from "lucide-react";

const TIICPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1500",
      badge: "IELTS Academic & General",
      title: "Elevate Your Future at TIIC",
      desc: "The most trusted IELTS & Study Abroad academy in Cumilla. Empowering students with world-class education pathways."
    },
    {
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1500",
      badge: "PTE Academic Training",
      title: "Master PTE with AI Technology",
      desc: "Experience real exam environments with our AI-based scoring software. Fast-track your success in just 30 days."
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1500",
      badge: "Global Study Solutions",
      title: "Your Bridge to Global Universities",
      desc: "Comprehensive visa and admission support for USA, UK, Canada, and Australia. We handle the heavy lifting."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
 
      <div className="bg-[#fcfcfc] text-slate-900 font-sans overflow-x-hidden">
      

        {/* 🔥 PREMIUM FULL-WIDTH HERO CAROUSEL (USA STYLE) */}
        <section className="relative h-[70vh] lg:h-[70vh] flex items-center justify-center overflow-hidden bg-[#004a28]">
          
          {/* Background Image with Emerald/Green Gradient (No Black) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 z-0"
            >
              <img 
                src={slides[currentSlide].image} 
                alt="Academy Excellence" 
                className="w-full h-full object-cover" 
              />
              {/* Green Brand Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#005a31] via-[#005a31]/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#005a31] via-transparent to-transparent"></div>
            </motion.div>
          </AnimatePresence>

          <div className="container mx-auto px-6 relative z-20 py-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              
              {/* Left Content */}
              <motion.div 
                key={currentSlide + "text"}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:w-3/5 text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/40 rounded-xl text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
                  <Plane size={14} /> {slides[currentSlide].badge}
                </div>

                <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                  {slides[currentSlide].title.split('at')[0]} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500 italic">
                    {slides[currentSlide].title.split('at')[1] || "at TIIC"}
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-200 max-w-xl font-medium mb-10 leading-relaxed">
                  {slides[currentSlide].desc}
                </p>

                <div className="flex flex-wrap gap-5">
                  <a href="https://wa.me/8801701699743" className="px-10 py-5 bg-orange-500 hover:bg-white hover:text-orange-500 text-white rounded-2xl font-black text-lg flex items-center gap-3 transition-all shadow-2xl hover:-translate-y-1">
                    <MessageCircle size={22} /> FREE ASSESSMENT
                  </a>
                  <a href="tel:+8801701699743" className="px-10 py-5 border-2 border-white/30 hover:bg-white/10 text-white rounded-2xl font-black text-lg transition-all backdrop-blur-sm">
                    CALL ACADEMY
                  </a>
                </div>
              </motion.div>

              {/* Right Floating Card (Glassmorphism) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="lg:w-2/5 hidden lg:block"
              >
                <div className="bg-white/5 border border-white/10 backdrop-blur-2xl p-8 rounded-[3rem] shadow-2xl">
                  <div className="flex gap-1 text-orange-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <h3 className="text-white font-black text-3xl mb-4 italic uppercase tracking-tighter">Best in Cumilla</h3>
                  <ul className="space-y-4 text-gray-300 font-medium">
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-orange-500" /> Band 8.5 Strategy</li>
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-orange-500" /> AI-Powered PTE Software</li>
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-orange-500" /> Weekly Full Mock Tests</li>
                  </ul>
                  <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center font-black text-white">TIIC</div>
                    <div>
                        <p className="text-white font-bold text-sm">Join 5,000+ Students</p>
                        <p className="text-gray-400 text-xs uppercase tracking-widest font-black">Success Guaranteed</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-4">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)} className="group p-2">
                  <div className={`h-1.5 rounded-full transition-all duration-700 ${i === currentSlide ? 'w-16 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]' : 'w-4 bg-white/20'}`} />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 📊 TRUST STATS */}
        <section className="relative -mt-12 z-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <StatCard icon={<Users />} title="5000+" desc="Students Trained" />
            <StatCard icon={<Award />} title="8.5" desc="Highest Band" />
            <StatCard icon={<Globe />} title="50+" desc="Partner Uni" />
            <StatCard icon={<CheckCircle />} title="98%" desc="Visa Success" />
          </div>
        </section>

        {/* 📚 COURSES SECTION */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] uppercase tracking-tighter italic">Premium Programs</h2>
            <div className="w-24 h-2 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CourseCard icon={<GraduationCap size={40} />} title="IELTS Academic & General" color="border-blue-100 text-blue-600" points={["British Council exam pattern", "Weekly full mock tests", "Exclusive Band 8+ strategy", "Personalized feedback"]} />
            <CourseCard icon={<Laptop size={40} />} title="PTE Academic Training" color="border-purple-100 text-purple-600" points={["AI-based practice software", "Real exam environment", "Scoring techniques"]} />
            <CourseCard icon={<BookOpen size={40} />} title="Spoken English" color="border-orange-100 text-orange-600" points={["Daily conversation drills", "Grammar & Lexical resource", "Job interview preparation"]} />
          </div>
        </section>

        {/* 🌍 STUDY ABROAD - Corporate Section */}
        <section className="bg-slate-50 py-24 px-6 border-y border-slate-200">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1471" alt="Consultancy" className="rounded-[3rem] shadow-2xl border-8 border-white" />
            </div>
            <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-8 uppercase tracking-tighter italic">Global Study Solutions</h2>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium">Operating under <span className="text-[#005a31] font-bold">Eammu Holidays</span>, TIIC bridges the gap for students. Whether in <strong>Cumilla or Dubai</strong>, we handle the heavy lifting.</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {["USA & Canada Experts", "UK & Australia Specialists", "Scholarship Assistance", "Visa Interview Prep"].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                            <Check className="text-green-600 bg-green-50 rounded-full p-1" size={24} />
                            <span className="font-bold text-gray-700 text-sm">{text}</span>
                        </div>
                    ))}
                </div>
                <a href="https://eammu.com" className="inline-flex items-center gap-2 text-orange-500 font-black uppercase tracking-widest text-sm border-b-2 border-orange-500 pb-1 hover:text-[#005a31] transition-all">
                    Explore Eammu Holidays <ChevronRight size={18} />
                </a>
            </div>
          </div>
        </section>

        {/* 🪜 PROCESS SECTION */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-[#005a31] mb-16 text-center italic tracking-tighter uppercase">Your Road to Success</h2>
          <div className="grid gap-6">
            <Step num="01" title="Free Diagnostic Assessment" desc="Find your current level before you start." />
            <Step num="02" title="Customized Study Plan" desc="Tailored modules based on your strengths." />
            <Step num="03" title="Unlimited Mock Exams" desc="Practice until you are perfect for the real test." />
            <Step num="04" title="Visa & University Support" desc="Seamless transition to your study destination." />
          </div>
        </section>

        {/* 📍 CONTACT & LOCATION */}
        <section className="bg-[#005a31] mx-4 md:mx-10 mb-12 rounded-[3rem] md:rounded-[5rem] overflow-hidden py-20 px-8 text-white relative shadow-2xl">
          <div className="absolute top-0 right-0 p-20 opacity-5"><GraduationCap size={400} /></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tighter uppercase">Join The TIIC Academy</h2>
            <p className="text-white/70 text-lg mb-12 font-medium">Gomoti Tower (1st Floor), Cumilla, Bangladesh. <br /><span className="text-orange-400 font-bold uppercase tracking-widest">Trusted across Bangladesh & UAE</span></p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                    <MapPin className="mx-auto mb-4 text-orange-400" />
                    <p className="font-black text-sm uppercase tracking-widest mb-1">Cumilla Head Office</p>
                    <p className="text-white/60">Gomoti Tower, Cantonment</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                    <Clock className="mx-auto mb-4 text-orange-400" />
                    <p className="font-black text-sm uppercase tracking-widest mb-1">Office Hours</p>
                    <p className="text-white/60">Sat - Thu: 10:00 AM - 7:00 PM</p>
                </div>
            </div>
            <div className="mt-12">
                 <a href="tel:+8801701699743" className="bg-white text-[#005a31] px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-all shadow-xl">
                    <PhoneCall size={18} /> CALL: +880 1701 699743
                 </a>
            </div>
          </div>
        </section>
        
        <footer className="py-12 text-center text-gray-400 font-black text-xs uppercase tracking-[0.4em]">Target IELTS & Immigration Center — 2026</footer>
      </div>
  );
};

// --- SUB-COMPONENTS ---
const StatCard = ({ icon, title, desc }) => (
  <motion.div whileHover={{ y: -10 }} className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-xl text-center flex flex-col items-center">
    <div className="text-orange-500 mb-4 bg-orange-50 p-4 rounded-2xl shadow-inner">{icon}</div>
    <h3 className="text-2xl md:text-3xl font-black text-[#005a31]">{title}</h3>
    <p className="text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-widest mt-1">{desc}</p>
  </motion.div>
);

const CourseCard = ({ title, points, icon, color }) => (
  <div className={`bg-white p-8 md:p-10 rounded-[3.5rem] border-2 shadow-lg shadow-slate-200/50 group hover:border-[#005a31] transition-all duration-500 ${color}`}>
    <div className="mb-6 group-hover:scale-110 transition-transform bg-slate-50 w-20 h-20 flex items-center justify-center rounded-3xl">{icon}</div>
    <h3 className="font-black text-2xl text-slate-800 mb-6">{title}</h3>
    <ul className="space-y-4">
      {points.map((p, i) => (
        <li key={i} className="flex gap-3 text-gray-500 font-medium text-sm items-start">
          <CheckCircle size={18} className="text-orange-500 flex-shrink-0 mt-0.5" /> <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Step = ({ num, title, desc }) => (
  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start group p-8 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-slate-100">
    <div className="text-5xl font-black text-slate-100 group-hover:text-orange-400 transition-colors italic leading-none">{num}</div>
    <div>
        <h4 className="font-black text-xl text-slate-800 mb-2">{title}</h4>
        <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default TIICPage;