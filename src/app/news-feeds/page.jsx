import React from 'react';
import Link from 'next/link';
import { 
  Newspaper, 
  BellRing, 
  PlaneTakeoff, 
  GraduationCap, 
  Globe2, 
  ArrowRight, 
  Sparkles,
  Clock
} from 'lucide-react';


const EammuNewsfeeds = () => {
  return (
    <>
     
      <main className="min-h-screen bg-[#f8fafc]">
        {/* 📰 Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#005a31]">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://img.freepik.com/premium-vector/travel-time-vector-banner-design-time-travel-text-with-travelling-elements_572293-801.jpg"
              alt="Eammu News Banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-bounce">
              <Sparkles size={14} /> Stay Informed
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
              Eammu <span className="text-orange-400">Newsfeeds</span>
            </h1>
            <p className="text-lg text-green-50 max-w-2xl mx-auto font-medium opacity-90">
              আপনার গ্লোবাল জার্নির জন্য লেটেস্ট ভিসা পলিসি, ইমিগ্রেশন আপডেট এবং ট্রাভেল নিউজ এখন এক জায়গায়।
            </p>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-4 -mt-16 relative z-20 pb-20">
          
          {/* 🚀 Coming Soon Status Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-green-900/10 border border-slate-100 mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1 space-y-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#005a31] font-bold">
                  <BellRing className="animate-pulse" />
                  <span>Launching Very Soon!</span>
                </div>
                <h2 className="text-3xl font-black text-gray-800 leading-tight">
                  We are building a world-class <span className="text-orange-500">Editorial Portal</span> for you.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  At Eammu Holidays, we believe information is power. Our upcoming newsfeed will cover breaking visa news, scholarship alerts, and travel insights.
                </p>
                <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
                   <button className="bg-[#005a31] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-orange-500 transition-all shadow-lg active:scale-95">
                     Notify Me <BellRing size={18} />
                   </button>
                   <Link href="/" className="bg-slate-100 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all">
                     Back to Home
                   </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/3 grid grid-cols-2 gap-4">
                <TopicIcon icon={<Globe2 />} label="Policy" color="bg-blue-500" />
                <TopicIcon icon={<GraduationCap />} label="Scholarship" color="bg-purple-500" />
                <TopicIcon icon={<PlaneTakeoff />} label="Flights" color="bg-orange-500" />
                <TopicIcon icon={<Newspaper />} label="Embassy" color="bg-green-600" />
              </div>
            </div>
          </div>

          {/* 📚 Topics Preview Grid */}
          <div className="grid md:grid-cols-2 gap-8">
             <InfoCard 
               title="🌍 Global Immigration Updates"
               description=" breaking visa rule changes for USA, Canada, UK, and European countries will be posted here."
               items={["Visa Policy Changes", "Work Permit Updates", "Embassy Alerts"]}
             />
             <InfoCard 
               title="🎓 Student Success & Tips"
               description="Get detailed guides on how to secure student visas and apply for international scholarships."
               items={["IELTS/PTE Tips", "Bank Statement Guides", "Interview Prep"]}
             />
          </div>
        </div>
      </main>
    </>
  );
};

// --- Helper Components ---

const TopicIcon = ({ icon, label, color }) => (
  <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-50 flex flex-col items-center justify-center gap-3 group hover:-translate-y-2 transition-transform">
    <div className={`${color} text-white p-3 rounded-2xl shadow-lg group-hover:rotate-12 transition-transform`}>
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</span>
  </div>
);

const InfoCard = ({ title, description, items }) => (
  <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col justify-between group hover:shadow-2xl transition-all">
    <div>
      <h3 className="text-2xl font-black text-[#005a31] mb-4 flex items-center gap-2">
        <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 text-gray-700 font-semibold text-sm">
            <ArrowRight size={16} className="text-orange-500" /> {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default EammuNewsfeeds;