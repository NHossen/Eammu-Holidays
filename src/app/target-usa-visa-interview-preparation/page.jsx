"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  Mic2, 
  UserCheck, 
  FileText, 
  GraduationCap, 
  Globe, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Star,
  Award,
  Users,
  Calendar,
  MessageCircle,
  Plane
} from "lucide-react";
import Link from "next/link";
const TargetUsaInterview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1523240715630-971c9e11a277?auto=format&fit=crop&w=1500&q=80",
      badge: "F1 Student Visa Specialist",
      title: "Achieve Your American Study Dreams",
      desc: "Comprehensive coaching for F1 interviews. We help you articulate your study plans and financial ties with confidence."
    },
    {
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1500&q=80",
      badge: "B1/B2 Visitor Visa",
      title: "Expert Guidance for Tourism & Business",
      desc: "Proven strategies for B1/B2 applicants to demonstrate strong home-country ties and clear travel purposes."
    },
    {
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1500&q=80",
      badge: "Mock Interview Simulation",
      title: "Face the Embassy with Zero Fear",
      desc: "Real-time embassy simulation with 2026's most updated questions. Practice until you're perfect."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen">

      {/* 🔥 RE-DESIGNED PREMIUM HERO SECTION */}
      <section className="relative h-[70vh] md:[70vh] flex items-center justify-center overflow-hidden bg-[#0a0f0d]">
        
        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#005a31]/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px]"></div>

        {/* Image Carousel with Motion Blur */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={slides[currentSlide].image} 
              alt="USA Visa" 
              className="w-full h-full object-cover scale-110" 
            />
            {/* Multi-layered Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f0d] via-[#0a0f0d]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-transparent to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-3/5 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/40 rounded-full text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
                <Plane size={14} /> {slides[currentSlide].badge}
              </div>

              <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Master Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  USA Visa Interview
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-xl font-medium mb-10 leading-relaxed">
                {slides[currentSlide].desc}
              </p>

              <div className="flex flex-wrap gap-5">
                <a href="https://wa.me/8801701699743" className="px-10 py-5 bg-[#005a31] hover:bg-[#007a41] text-white rounded-2xl font-black text-lg flex items-center gap-3 transition-all shadow-[0_20px_40px_rgba(0,90,49,0.3)] hover:-translate-y-1">
                  <MessageCircle size={22} /> Start Now
                </a>
                <div className="flex items-center gap-4 text-white font-bold bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-xl">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0f0d] bg-gray-400 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm">Join 1.5k+ Students</span>
                </div>
              </div>
            </motion.div>

            {/* Glassmorphic Indicator Card (Visual Eye-Candy) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:w-2/5 hidden lg:block"
            >
              <div className="bg-white/5 border border-white/10 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:rotate-12 transition-transform">
                  <Star size={80} className="text-orange-500" />
                </div>
                <h3 className="text-orange-500 font-black text-5xl mb-2">98%</h3>
                <p className="text-white text-xl font-bold mb-6">Visa Success Rate</p>
                <ul className="space-y-4 text-gray-400 font-medium">
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#005a31]" /> DS-160 Form Review</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#005a31]" /> SEVIS Fee Support</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#005a31]" /> Mock Interview Simulation</li>
                </ul>
              </div>
            </motion.div>

          </div>

          {/* Centered Modern Indicators */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="group p-2"
              >
                <div className={`h-1.5 rounded-full transition-all duration-700 ${i === currentSlide ? 'w-16 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]' : 'w-4 bg-white/20'}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 SUCCESS METRICS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatBox icon={<Award />} value="98%" label="Success Rate" />
          <StatBox icon={<Calendar />} value="7 Years" label="Expertise" />
          <StatBox icon={<Users />} value="1500+" label="Students Guided" />
          <StatBox icon={<Globe />} value="Global" label="Standard" />
        </div>
      </section>

      {/* 🎯 CORE SERVICES */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#005a31] uppercase tracking-tighter">What We Offer</h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard icon={<Mic2 className="text-white" />} title="Interview Coaching" desc="Personalized training for F1, B1/B2, F2 with 2026's most updated embassy questions." />
          <ServiceCard icon={<UserCheck className="text-white" />} title="Dress Code Tips" desc="Learn the psychology of first impressions. Dress to radiate confidence and professionalism." />
          <ServiceCard icon={<FileText className="text-white" />} title="Document Checklist" desc="Complete folder organization & PDF support to ensure you have every paper ready." />
          <ServiceCard icon={<GraduationCap className="text-white" />} title="50+ Sample Answers" desc="Get access to high-success rate answers tailored to your specific profile and background." />
          <ServiceCard icon={<ShieldCheck className="text-white" />} title="Mock Sessions" desc="Real-time feedback & embassy simulation to remove your fear before the actual day." />
          <ServiceCard icon={<Globe className="text-white" />} title="Private Groups" desc="Individual care through Zoom or in-office sessions for personalized strategy building." />
        </div>
      </section>

      {/* 🏆 WHY CHOOSE SECTION */}
      <section className="py-24 bg-[#005a31] text-white rounded-[4rem] mx-4 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-6xl font-black mb-16 tracking-tight">Why Choose <span className="text-orange-400 italic">Target USA</span>?</h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <TrustItem title="Education + Immigration" desc="We don't just process visas; we provide expert career guidance for your future university life." />
              <TrustItem title="24/7 Advisor Access" desc="Call or WhatsApp us any time—even the night before your interview for last-minute tips." />
              <TrustItem title="Legal Transparency" desc="Proper contracts and clear fee structures for every applicant. No hidden costs." />
              <TrustItem title="Global Support" desc="Presence in Bangladesh and UAE means you get international standard consultancy." />
            </div>
          </div>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-4xl font-black text-center text-[#005a31] mb-16 uppercase italic">Expert Q&A</h2>
           <div className="space-y-6">
              <FaqItem q="Why is the USA visa interview so important?" a="The interview is the final step. Even with perfect documents, the Consular Officer makes a decision based on your communication skills and confidence." />
              <FaqItem q="Do you provide guarantee for visas?" a="No one can guarantee a visa. However, our 98% success rate comes from preparing you so well that you meet all embassy requirements naturally." />
              <FaqItem q="Can I take sessions from Dhaka?" a="Yes! We offer both physical sessions in Cumilla and online Zoom sessions for students across Bangladesh and the UAE." />
           </div>
        </div>
      </section>

      {/* 📞 CONTACT SECTION */}
      <section className="py-24 container mx-auto px-4 border-t border-gray-100">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-10">
            <h2 className="text-5xl font-black text-[#005a31] leading-tight">Let's Start Your <br /> Journey Today</h2>
            <div className="space-y-8">
              <ContactItem icon={<PhoneCall />} title="Call / WhatsApp" value="+8801701699743, +971507078334" />
              <ContactItem icon={<Mail />} title="Email Support" value="info@eammu.com, support@eammu.com" />
              <ContactItem icon={<MapPin />} title="Visit Office" value="Office 178, Gomoti Tower, Cantonment, Cumilla" />
            </div>
          </div>

          <div className="lg:w-1/2 w-full bg-slate-100 p-12 rounded-[3.5rem] border border-white shadow-xl relative">
            <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-6 rounded-3xl rotate-12 font-black">Join Today!</div>
            <h3 className="text-2xl font-black text-gray-800 mb-8 uppercase tracking-widest">Global Connect</h3>
            <div className="grid gap-5">
              <SocialLink color="bg-[#1877F2]" name="Facebook Page" link="https://www.facebook.com/TargetUSAInterviewPreparation" />
              <SocialLink color="bg-[#E4405F]" name="Instagram Feed" link="#" />
              <SocialLink color="bg-[#0A66C2]" name="LinkedIn Network" link="#" />
            </div>
          </div>
        </div>
      </section>

      {/* 🏠 FOOTER CTA */}
      <footer className="py-16 text-center">
        <Link href="/" className="group inline-flex items-center gap-4 bg-[#0a0f0d] text-white px-12 py-5 rounded-2xl font-black hover:bg-orange-600 transition-all shadow-2xl">
          Back to Home <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </footer>
    </div>
  );
};

// --- Helper Components ---
const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 hover:border-orange-100 hover:shadow-2xl transition-all group text-center">
    <div className="w-16 h-16 bg-[#005a31] rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-xl group-hover:rotate-6 transition-transform">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h3 className="text-2xl font-black text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed font-medium">{desc}</p>
  </div>
);

const TrustItem = ({ title, desc }) => (
  <div className="flex gap-6 group">
    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
       <CheckCircle2 className="text-white" size={24} />
    </div>
    <div>
      <h4 className="text-2xl font-black mb-3 text-orange-400">{title}</h4>
      <p className="text-green-50/70 text-base leading-relaxed">{desc}</p>
    </div>
  </div>
);

const StatBox = ({ icon, value, label }) => (
  <div className="text-center p-8 bg-slate-50 rounded-[2.5rem] border border-gray-100 hover:border-orange-200 transition-all">
    <div className="text-orange-500 flex justify-center mb-4">{React.cloneElement(icon, { size: 32 })}</div>
    <p className="text-4xl font-black text-[#005a31] mb-1">{value}</p>
    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{label}</p>
  </div>
);

const FaqItem = ({ q, a }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <h4 className="font-black text-xl text-[#005a31] mb-3 uppercase italic">{q}</h4>
    <p className="text-gray-600 font-medium">{a}</p>
  </div>
);

const ContactItem = ({ icon, title, value }) => (
  <div className="flex gap-6 items-center group">
    <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-[#005a31] group-hover:bg-orange-500 group-hover:text-white transition-all">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{title}</p>
      <p className="text-gray-800 font-black text-xl">{value}</p>
    </div>
  </div>
);

const SocialLink = ({ color, name, link }) => (
  <a href={link} target="_blank" rel="noreferrer" className={`${color} text-white px-8 py-5 rounded-2xl font-black flex items-center justify-between hover:scale-[1.02] transition-all shadow-lg`}>
    {name} <ArrowRight size={20} />
  </a>
);

export default TargetUsaInterview;