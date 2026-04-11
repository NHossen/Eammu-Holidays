import countries from "@/app/data/countries.json";
import visadata from "@/app/data/visadata.json";
import { createSlug } from "@/app/lib/utils";
import { 
  CheckCircle, Clock, CreditCard, Camera, Info, 
  MapPin, AlertTriangle, Lightbulb, HelpCircle, Calendar 
} from "lucide-react";

export default async function CountryPage({ params }) {
  const { slug } = await params;
  const cleanSlug = slug.replace("-visa-application", "");
  const country = countries.find((c) => createSlug(c.country) === cleanSlug);
  const d = visadata[cleanSlug];

  if (!country) return <div className="p-20 text-center font-serif">Country data not found.</div>;

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2D2D2D]">
      {/* LUXURY HERO SECTION */}
      <div className="relative bg-[#f5c800] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-64 h-40 bg-white p-2 rounded-2xl shadow-2xl">
              <img src={country.flag} alt={country.country} className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Official 2026 Guide</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight italic">
              {country.country} <span className="text-[#C5A059]">Visa</span>
            </h1>
            <p className="text-gray-400 max-w-2xl text-lg leading-relaxed font-light">
              {d?.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-20">
        
        {/* MAIN CONTENT AREA (Left 8 Columns) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* 1. REQUIREMENTS - GRID DESIGN */}
          <section className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 p-10 border border-gray-100">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-green-50 rounded-2xl text-green-600"><CheckCircle size={28} /></div>
              <h2 className="text-3xl font-bold text-[#1A1A1A]">Comprehensive Checklist</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-[#C5A059] font-bold text-xs uppercase tracking-widest border-b pb-2">Mandatory Documents</h3>
                {d?.comprehensive_requirements_checklist?.primary_documents.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0 group-hover:scale-150 transition-transform"></div>
                    <p className="text-gray-600 leading-snug">{item}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <h3 className="text-[#C5A059] font-bold text-xs uppercase tracking-widest border-b pb-2">Financial Evidence</h3>
                {d?.comprehensive_requirements_checklist?.financial_proofs.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0 group-hover:scale-150 transition-transform"></div>
                    <p className="text-gray-600 leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. PHOTO SPECIFICATIONS - CARDS */}
          <section className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-[#f5c800]  text-white p-10 rounded-[2rem] shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <Camera className="text-[#C5A059]" />
                <h2 className="text-2xl font-bold italic">Photo Standards</h2>
              </div>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-gray-400 text-xs uppercase font-bold mb-1">Dimensions</p>
                  <p className="text-2xl font-mono">{d?.technical_photo_specifications?.dimensions}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase font-bold mb-1">Background</p>
                  <p className="text-2xl">{d?.technical_photo_specifications?.background_color}</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-2 text-sm text-gray-400 italic">
                {d?.technical_photo_specifications?.strict_donots.map((no, i) => (
                  <li key={i}>• {no}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#C5A059] p-8 rounded-[2rem] flex flex-col justify-center items-center text-center text-white">
              <HelpCircle size={48} className="mb-4 opacity-50" />
              <p className="font-bold text-lg mb-2 italic underline decoration-white/30">Need Help?</p>
              <p className="text-sm opacity-90 leading-relaxed">Our experts provide professional form-filling & photo verification.</p>
            </div>
          </section>

          {/* 3. SUBMISSION CENTERS - MAP STYLE */}
          <section className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100">
             <div className="flex items-center gap-4 mb-8">
              <MapPin className="text-[#C5A059]" />
              <h2 className="text-2xl font-bold">Submission Centers</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {d?.geospatial_submission_data?.map((loc, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                  <h4 className="font-black text-[#1A1A1A] mb-2 tracking-tight">{loc.center}</h4>
                  <p className="text-sm text-gray-500 mb-4">{loc.address}</p>
                  <div className="flex justify-between text-xs font-bold text-[#C5A059]">
                    <span>Submission: {loc.submission_hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. EXPERT HACKS - THE GOLDEN SECTION */}
          <section className="bg-gradient-to-r from-amber-50 to-orange-50 p-10 rounded-[2rem] border border-orange-100">
            <div className="flex items-center gap-4 mb-8">
              <Lightbulb className="text-orange-600" />
              <h2 className="text-2xl font-bold text-orange-950">Expert Approval Hacks</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {d?.expert_approval_hacks.map((hack, i) => (
                <div key={i} className="bg-white/60 p-4 rounded-xl flex gap-3 items-start border border-orange-200/50">
                  <div className="text-orange-600 font-bold">0{i+1}.</div>
                  <p className="text-sm text-orange-900 leading-relaxed">{hack}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* SIDEBAR AREA (Right 4 Columns) */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* TIME & METRICS */}
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-[#C5A059]" size={20} />
              <h3 className="font-bold uppercase tracking-tighter">Processing Timeline</h3>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b pb-4">
                <span className="text-gray-400 text-sm">Standard</span>
                <span className="text-2xl font-black text-[#1A1A1A]">{d?.processing_time_metrics?.standard_turnaround}</span>
              </div>
              <div className="flex justify-between items-end border-b pb-4">
                <span className="text-gray-400 text-sm">Peak Season</span>
                <span className="text-xl font-bold text-orange-600">{d?.processing_time_metrics?.peak_season_delay}</span>
              </div>
              <p className="text-[10px] leading-tight text-gray-400 uppercase tracking-widest">{d?.processing_time_metrics?.notes}</p>
            </div>
          </div>

          {/* FINANCIAL THRESHOLD */}
          <div className="bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl shadow-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard size={20} />
              <h3 className="font-bold uppercase tracking-tighter">Min. Bank Balance</h3>
            </div>
            <div className="text-4xl font-black mb-2">{d?.financial_thresholds_2026?.solo_traveler_min}</div>
            <p className="text-sm opacity-80 mb-6">Recommended: {d?.financial_thresholds_2026?.solo_traveler_recommended}</p>
            <div className="bg-white/10 p-4 rounded-xl text-xs flex gap-3">
              <AlertTriangle size={16} className="shrink-0" />
              <p>{d?.financial_thresholds_2026?.warning}</p>
            </div>
          </div>

          {/* RISK ANALYSIS */}
          <div className="bg-[#1A1A1A] p-8 rounded-[2rem] text-white">
            <h3 className="font-bold text-[#C5A059] mb-4">Rejection Risk Matrix</h3>
            <div className="space-y-4">
              {d?.rejection_risk_matrix?.high_risk.map((risk, i) => (
                <div key={i} className="flex gap-3 items-center text-sm text-red-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  {risk}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-white/10 italic text-xs text-gray-400">
                <span className="text-green-400 font-bold block mb-1">MITIGATION:</span>
                {d?.rejection_risk_matrix?.mitigation}
              </div>
            </div>
          </div>

          {/* CALL TO ACTION */}
          <button className="w-full bg-[#C5A059] hover:bg-[#D4AF37] text-white py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-[#C5A059]/30 transition-all transform hover:-translate-y-1">
            Apply Now
          </button>
        </aside>
      </div>

      {/* FAQ SECTION - MINIMALIST */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="text-4xl font-black text-center mb-16 italic">Frequent <span className="text-[#C5A059]">Queries</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          {d?.faq_extended.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-bold text-[#1A1A1A] mb-3 text-lg">Q: {item.question}</p>
              <p className="text-gray-500 leading-relaxed text-sm">A: {item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}