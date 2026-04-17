
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, Globe, Plane, ShieldCheck, MapPin, 
  PhoneCall, MessageCircle, Mail, Clock, ArrowRight, 
  Star, Users, Landmark, FileText, BadgeCheck, Compass,
  Coffee, Waves, Mountain, Camera
} from 'lucide-react';

const TravelAgencyBangladesh = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 1. CAROUSEL DATA (3 Slides with unique imagery and Bangla/English text)
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&q=80",
      badge: "Trusted Excellence Since 2022",
      title: "Leading Travel Agency in Bangladesh",
      desc: "ভিসা প্রসেসিং থেকে বিশ্বভ্রমণ—আপনার প্রতিটি স্বপ্ন পূরণে Eammu Holidays আছে আপনার পাশে।",
      btnText: "প্যাকেজ দেখুন"
    },
    {
      image: "https://ttg.com.bd/uploads/tours/destinations/6444446K.jpg",
      badge: "Exclusive Holiday Deals",
      title: "Explore the Beauty of Bangladesh",
      desc: "সাজেক ভ্যালি থেকে সুন্দরবন—সাশ্রয়ী মূল্যে সেরা ট্যুর প্যাকেজ বুক করুন আমাদের সাথে।",
      btnText: "ট্যুর প্ল্যান"
    },
    {
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80",
      badge: "Expert Visa Support",
      title: "Global Visa & Migration Experts",
      desc: "USA, UK, Canada ও ইউরোপের স্টুডেন্ট এবং ভিজিট ভিসা প্রসেসিংয়ে আমরাই সেরা।",
      btnText: "ভিসা প্রসেসিং"
    }
  ];

  // 2. AUTO-PLAY LOGIC
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <>
    
      <main className="min-h-screen bg-white relative">
        
        {/* --- DYNAMIC HERO SECTION --- */}
        <section className="relative h-[70vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-[#005a31]">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="absolute inset-0 z-0">
              <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#005a31]/70 via-[#005a31]/60 to-[#005a31]/90"></div>
            </motion.div>
          </AnimatePresence>

          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-20 text-center px-4 max-w-5xl">
            <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest mb-6 inline-block shadow-2xl animate-pulse">
              {slides[currentSlide].badge}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-white leading-tight drop-shadow-xl">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-12 font-medium max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <button className="bg-orange-500 hover:bg-white hover:text-[#005a31] text-white px-8 sm:px-12 py-4 rounded-2xl font-black text-lg transition-all shadow-2xl flex items-center gap-2">
                {slides[currentSlide].btnText} <ArrowRight size={20}/>
              </button>
              <a href="tel:+8801701699743" className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-[#005a31] px-8 sm:px-12 py-4 rounded-2xl font-black text-lg transition-all flex items-center gap-2">
                <PhoneCall size={18}/> কল করুন
              </a>
            </div>
          </motion.div>

          <div className="absolute bottom-10 flex gap-3 z-30">
            {slides.map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-12 bg-orange-500' : 'w-4 bg-white/40'}`} />
            ))}
          </div>
        </section>

        {/* --- INFO CONTACT STRIP --- */}
        <section className="relative z-30 -mt-16 sm:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard icon={<MapPin />} title="Main Office" desc="Gomoti Tower (Office-178), Cumilla Cantonment" color="bg-[#005a31]" />
            <InfoCard icon={<PhoneCall />} title="Direct Hotline" desc="+880 1701-699743" color="bg-orange-500" />
            <InfoCard icon={<MessageCircle />} title="WhatsApp Support" desc="+880 1631-312524" color="bg-[#25D366]" />
          </div>
        </section>

        {/* --- VISA SPECIALIZATION SECTION --- */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-4">ভিসা প্রসেসিং ও কনসালটেন্সি</h2>
            <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <VisaCard icon={<Globe/>} title="Student Visa" desc="USA, Canada, UK এবং ইউরোপের সেরা বিশ্ববিদ্যালয়ের ভর্তি সহায়তা।" />
            <VisaCard icon={<Landmark/>} title="Visit/Tourist" desc="দুবাই, থাইল্যান্ড, সিঙ্গাপুর ও ইন্ডিয়ার দ্রুততম ভিসা সার্ভিস।" />
            <VisaCard icon={<FileText/>} title="Work Permit" desc="ইউরোপ ও মধ্যপ্রাচ্যের বৈধ কাজের ভিসা ফাইল প্রসেসিং সাপোর্ট।" />
            <BadgeCard icon={<BadgeCheck/>} title="Document Help" desc="নোটারি, পুলিশ ক্লিয়ারেন্স ও পেপারস প্রসেসিংয়ে বিশেষ সহায়তা।" />
          </div>
        </section>

        {/* --- DETAILED BANGLADESH TOUR PACKAGES SECTION --- */}
        <section className="bg-slate-50 py-24 px-6 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-orange-500 font-black uppercase tracking-tighter text-sm">Premium Local Experiences</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mt-2">Explore Bangladesh Packages</h2>
              <div className="w-24 h-2 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Package 1 */}
              <DetailedTourCard 
                img="https://images.unsplash.com/photo-1623945359624-946764d08f31?auto=format&fit=crop&q=80"
                title="Sajek Valley Paradise"
                duration="2 Night / 3 Days"
                price="৳৭,৫০০"
                location="Rangamati"
                features={["Resort Accommodation", "Jeep (Chander Gari) Rides", "All Meals Included", "Professional Guide"]}
                icon={<Mountain className="text-blue-500" />}
              />
              {/* Package 2 */}
              <DetailedTourCard 
                img="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&q=80"
                title="Cox's Bazar Beach Luxury"
                duration="3 Night / 4 Days"
                price="৳৮,৯৯৯"
                location="Chattogram"
                features={["4 Star Sea-View Hotel", "Marine Drive Tour", "Inani & Himchari Visit", "Airport Transfers"]}
                icon={<Waves className="text-cyan-500" />}
              />
              {/* Package 3 */}
              <DetailedTourCard 
                img="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/32/d3/98.jpg"
                title="Srimangal Tea Heritage"
                duration="1 Night / 2 Days"
                price="৳৪,২০০"
                location="Sylhet"
                features={["Eco-Resort Stay", "Lawachara Forest Trek", "7 Layer Tea Tasting", "Cycle Tour in Tea Gardens"]}
                icon={<Coffee className="text-emerald-500" />}
              />
              {/* Package 4 */}
              <DetailedTourCard 
                img="https://www.yoyotripsindia.com/images/package/eoHG24yCWc/banner3.jpg"
                title="Sundarbans Jungle Safari"
                duration="3 Night / 4 Days"
                price="৳১২,৫০০"
                location="Khulna"
                features={["Cruise Ship Living", "Wildlife Tracking", "Kotka & Hiron Point", "Forest Permission Included"]}
                icon={<Camera className="text-orange-500" />}
              />
              {/* Package 5 */}
              <DetailedTourCard 
                img="https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/5e/1a/6b.jpg"
                title="Old Dhaka Heritage"
                duration="1 Day (Full)"
                price="৳১,৮০০"
                location="Dhaka"
                features={["Lalbagh Fort Visit", "Ahsan Manzil Tour", "Traditional Lunch", "Rickshaw City Explore"]}
                icon={<Landmark className="text-amber-700" />}
              />
              {/* Package 6 */}
              <DetailedTourCard 
                img="https://www.travelmate.com.bd/wp-content/uploads/2018/07/maxresdefault-2.jpg"
                title="Kaptai Lake Cruise"
                duration="1 Night / 2 Days"
                price="৳৫,৫০০"
                location="Rangamati"
                features={["Boat House Experience", "Shuvolong Waterfall", "Island Lunch", "Tribal Handicrafts Visit"]}
                icon={<Compass className="text-indigo-500" />}
              />
            </div>
          </div>
        </section>

        {/* --- TRUST STATS SECTION --- */}
        <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-[#005a31] mb-6">নির্ভরযোগ্যতার সাথে <br/> আপনার যাত্রা নিশ্চিত করুন</h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              ইম্মু হলিডেজ শুধু একটি এজেন্সি নয়, বরং আপনার ভ্রমণের প্রতিটি ধাপে এক বিশ্বস্ত সহযোগী। কুমিল্লা ক্যান্টনমেন্টের প্রাণকেন্দ্রে আমাদের অফিসে সরাসরি এসে পরামর্শ নিতে পারেন।
            </p>
            <div className="grid grid-cols-2 gap-6">
              <StatItem number="5000+" label="Happy Clients" />
              <StatItem number="1200+" label="Visas Approved" />
              <StatItem number="15+" label="Tour Destinations" />
              <StatItem number="24/7" label="Active Support" />
            </div>
          </div>
          <div className="relative">
             <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80" className="rounded-[3rem] shadow-2xl border-8 border-white" alt="Travel Agency Office" />
             <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-10 rounded-3xl shadow-2xl">
                <Star size={40} className="mb-2" />
                <p className="text-3xl font-black">4.9/5</p>
                <p className="font-bold text-xs uppercase">Google Rating</p>
             </div>
          </div>
        </section>

        {/* Sticky WhatsApp CTA Mobile */}
        <a href="https://wa.me/8801631312524" className="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-2xl z-50 md:hidden transition-all hover:scale-110">
          <MessageCircle size={28} />
        </a>
      </main>
    </>
  );
};

// --- COMPONENT HELPERS ---

const InfoCard = ({ icon, title, desc, color }) => (
  <div className="bg-white p-8 rounded-[2rem] shadow-xl flex items-center gap-5 border border-slate-100 hover:-translate-y-2 transition-transform duration-500">
    <div className={`${color} text-white p-4 rounded-2xl`}>
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h4 className="text-gray-400 text-xs font-black uppercase tracking-tighter">{title}</h4>
      <p className="text-[#005a31] font-black text-lg">{desc}</p>
    </div>
  </div>
);

const VisaCard = ({ icon, title, desc }) => (
  <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-50 hover:border-orange-500 transition-all group">
    <div className="w-16 h-16 bg-slate-50 text-[#005a31] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#005a31] group-hover:text-white transition-all">
      {React.cloneElement(icon, { size: 30 })}
    </div>
    <h3 className="text-2xl font-black text-[#005a31] mb-4">{title}</h3>
    <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
  </div>
);

const BadgeCard = ({ icon, title, desc }) => (
  <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-50 hover:border-orange-500 transition-all group">
    <div className="w-16 h-16 bg-slate-50 text-orange-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all">
      {React.cloneElement(icon, { size: 30 })}
    </div>
    <h3 className="text-2xl font-black text-[#005a31] mb-4">{title}</h3>
    <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
  </div>
);

const DetailedTourCard = ({ img, title, duration, price, location, features, icon }) => (
  <div className="group bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-100 flex flex-col">
    <div className="relative h-64 overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full font-black text-[#005a31] shadow-xl">
        {price}
      </div>
      <div className="absolute bottom-6 left-6 bg-orange-500 text-white px-4 py-1.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg">
        <MapPin size={14}/> {location}
      </div>
    </div>
    <div className="p-8 flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-black text-[#005a31]">{title}</h3>
        <div className="mt-1">{icon}</div>
      </div>
      <p className="text-orange-500 font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
        <Clock size={16}/> {duration}
      </p>
      <ul className="space-y-3 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-500 text-sm font-medium">
            <CheckCircle className="text-green-500" size={16}/> {f}
          </li>
        ))}
      </ul>
      <a href="https://wa.me/8801631312524" className="block text-center bg-slate-100 hover:bg-[#005a31] hover:text-white text-[#005a31] py-4 rounded-2xl font-black transition-all">
        প্যাকেজ বুক করুন
      </a>
    </div>
  </div>
);

const StatItem = ({ number, label }) => (
  <div className="bg-white p-6 rounded-3xl shadow-lg border-l-8 border-[#005a31]">
    <h4 className="text-3xl font-black text-orange-500 mb-1">{number}</h4>
    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">{label}</p>
  </div>
);

export default TravelAgencyBangladesh;