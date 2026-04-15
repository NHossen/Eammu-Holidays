"use client"
import React, { useState } from "react";
import Link from "next/link";
import { 
  Calendar, 
  Users, 
  Music, 
  Camera, 
  Utensils, 
  Gem, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Star,
  Plus,
  Minus,
  ChevronRight
} from "lucide-react";

const EammuEvent = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans text-slate-900 overflow-x-hidden">
      
      {/* --- HERO SECTION (Optimized for Mobile/Desktop) --- */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-32">
        <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-slate-50 -z-10 lg:skew-x-6 lg:translate-x-20" />
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
              <Sparkles size={14} className="text-orange-500" />
              <span className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-slate-600">The Gold Standard in Events</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#004d2c] leading-[1.1]">
              Crafting <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Luminous Moments
              </span>
            </h1>
            
            <p className="text-base lg:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From Royal Weddings in Cumilla to high-stakes Corporate Summits nationwide. 
              We curate legacies with surgical precision and artistic flair.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="https://wa.me/8801631312524" 
                className="w-full sm:w-auto bg-[#005a31] text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all hover:shadow-xl active:scale-95"
              >
                Book Consultation <ArrowRight size={18} />
              </a>
              <div className="flex -space-x-3 items-center">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" />
                  </div>
                ))}
                <p className="pl-6 text-sm font-bold text-slate-500">100+ Reviews</p>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            {/* Main Hero Image */}
            <div className="relative z-10 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-[8px] lg:border-[12px] border-white">
               <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Event Setup"
                className="w-full h-[350px] lg:h-[550px] object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-2 lg:-bottom-6 lg:-left-6 z-20 bg-white p-4 lg:p-6 rounded-2xl lg:rounded-3xl shadow-2xl max-w-[180px] lg:max-w-[240px] border border-slate-100">
              <div className="flex items-center gap-2 mb-1 lg:mb-2">
                <Star size={16} fill="#f97316" className="text-orange-500" />
                <span className="font-bold text-slate-800 text-xs lg:text-sm">Trusted Choice</span>
              </div>
              <p className="text-[10px] lg:text-xs text-slate-500 leading-tight font-medium">Ranked #1 for bespoke event execution in the Cumilla region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONSULTATION BENTO --- */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-[#005a31] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden relative shadow-2xl">
          <div className="p-8 lg:p-20 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-white space-y-6 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-black italic">Offline Consultations</h2>
              <p className="text-green-100/80 text-base lg:text-lg">
                High-end events require high-touch service. We invite you to a private 
                session to architect your event’s logistics and bespoke design.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BookingPoint text="Custom Budgeting" />
                <BookingPoint text="On-site Survey" />
                <BookingPoint text="Vendor Selection" />
                <BookingPoint text="Timeline Design" />
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl border border-white/20 p-6 lg:p-10 rounded-[2rem] text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Headquarters: Cumilla</h4>
                  <p className="text-xs text-green-200">Serving Bangladesh Nationwide</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6 opacity-90">
                Our central management hub coordinates premium logistics across all districts.
              </p>
              <a href="https://wa.me/8801631312524" className="block text-center w-full py-4 bg-orange-500 hover:bg-orange-600 rounded-xl font-black transition-all shadow-lg active:scale-95 uppercase tracking-tighter text-sm">
                Request Office Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="py-20 lg:py-32 container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-black text-[#005a31] uppercase tracking-tighter">Signature Solutions</h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <ServiceCard icon={<Sparkles />} title="Royal Weddings" desc="Luxury stage craft and floral architecture." />
          <ServiceCard icon={<Users />} title="Corporate Gala" desc="Seamless summits and professional seminars." />
          <ServiceCard icon={<Music />} title="Concert Logistics" desc="High-fidelity sound and artist management." />
          <ServiceCard icon={<Camera />} title="Pro Coverage" desc="Ultra-HD cinematography and photography." />
          <ServiceCard icon={<Utensils />} title="Fine Dining" desc="Curated menus for elite hospitality." />
          <div className="bg-orange-50 p-8 rounded-[2rem] border-2 border-dashed border-orange-200 flex flex-col justify-center items-center text-center group hover:bg-orange-100 transition-colors">
             <Gem className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" size={40} />
             <h3 className="font-bold text-orange-900 text-xl">And More</h3>
             <p className="text-xs text-orange-700 font-bold mt-1">TAILORED REQUESTS</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-[#005a31] mb-4 uppercase">Common Questions</h2>
            <p className="text-slate-500">Everything you need to know about our process.</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="Where do you offer your services?" 
              answer="While our main service hub is in Cumilla, we provide full-scale event management services across all major cities in Bangladesh, including Dhaka, Chittagong, and Sylhet."
            />
            <FAQItem 
              question="How far in advance should I book?" 
              answer="For large-scale weddings or corporate summits, we recommend booking 3 to 6 months in advance. However, for smaller private events, we can often accommodate requests with a 4-week notice."
            />
            <FAQItem 
              question="Can you work within a specific budget?" 
              answer="Absolutely. One of our core strengths is 'Transparent Budgeting.' During our offline consultation, we provide a detailed breakdown to ensure high-end results without hidden costs."
            />
            <FAQItem 
              question="Do you handle vendor coordination?" 
              answer="Yes. We manage everything from catering and decor to photography and security. You will have a single point of contact (your event manager) to handle all logistics."
            />
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 text-center container mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-[120px]" />
          </div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black leading-tight">Ready to create <br /> an icon?</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Skip the stress and embrace the excellence. Let's build your next big moment together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/8801631312524"
                className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all active:scale-95"
              >
                <PhoneCall size={20} /> START NOW
              </a>
              <Link 
                href="/"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-12 py-5 rounded-2xl font-black transition-all"
              >
                BACK TO HOME
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sub-components
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-100 rounded-2xl bg-slate-50/50 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-slate-800 lg:text-lg">{question}</span>
        {isOpen ? <Minus size={20} className="text-orange-500" /> : <Plus size={20} className="text-[#005a31]" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm lg:text-base animate-in fade-in slide-in-from-top-2 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
    <div className="w-14 h-14 bg-green-50 text-[#005a31] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#005a31] group-hover:text-white transition-all">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h3 className="text-xl font-black text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    <div className="mt-6 flex items-center gap-2 text-[#005a31] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
      Learn More <ChevronRight size={14} />
    </div>
  </div>
);

const BookingPoint = ({ text }) => (
  <div className="flex items-center gap-3 text-white/90 font-semibold text-sm">
    <ShieldCheck size={18} className="text-orange-400 shrink-0" />
    <span>{text}</span>
  </div>
);

export default EammuEvent;