import countries from "@/app/data/countries.json";
import visadata from "@/app/data/visadata.json";
import { createSlug } from "@/app/lib/utils";
import { 
  CheckCircle, Clock, CreditCard, Camera, Info, 
  MapPin, AlertTriangle, Lightbulb, HelpCircle, 
  Calendar, ShieldCheck, Landmark, Map 
} from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cleanSlug = slug.replace("-visa-application", "");
  const country = countries.find((c) => createSlug(c.country) === cleanSlug);
  const d = visadata[cleanSlug];
  
  return {
    title: d?.seo_and_metadata?.meta_title || `${country.country} Visa - Requirements, Price and Application`,
    description: d?.description,
    alternates: { canonical: d?.seo_and_metadata?.canonical_url },
    keywords: d?.seo_and_metadata?.keywords?.join(", "),
  };
}

export default async function CountryPage({ params }) {
  const { slug } = await params;
  const cleanSlug = slug.replace("-visa-application", "");
  const country = countries.find((c) => createSlug(c.country) === cleanSlug);
  const d = visadata[cleanSlug];

  if (!country) return <div className="p-20 text-center font-serif text-2xl">Country data not found.</div>;

  return (
    <div className="min-h-screen text-[#2D2D2D] font-sans">
      {/* LUXURY HERO SECTION */}
      <div className="relative bg-[#f5c800] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative w-72 h-44 bg-white p-2 rounded-2xl shadow-2xl overflow-hidden">
              <img src={country.flag} alt={country.country} className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <span className="bg-white/20 backdrop-blur-md text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/30">
                Official 2026 Protocol
              </span>
              <span className="bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {d?.visa_category_details?.visa_type}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter italic drop-shadow-lg">
              {country.country} <span className="text-[#267700]"> Tourist Visa</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-black/80 mb-6 max-w-3xl leading-relaxed">
              {d?.title}
            </h2>
            <p className="text-gray-700 max-w-2xl text-lg leading-relaxed font-light mb-2">
              {d?.description}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 text-black/60 font-mono text-sm">
              <Calendar size={16} /> Last Updated: {d?.last_updated}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-20 pb-20">
        
        {/* MAIN CONTENT AREA */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* QUICK SUMMARY CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Category", val: d?.visa_category_details?.main_category, icon: <ShieldCheck className="text-green-600" /> },
              { label: "Stay Duration", val: d?.stay_and_validity_rules?.standard_stay, icon: <Clock className="text-[#C5A059]" /> },
              { label: "Validity", val: d?.stay_and_validity_rules?.visa_validity_window, icon: <Calendar className="text-blue-600" /> },
              { label: "Embassy Fee", val: d?.visa_fee_structure_2026?.embassy_visa_fee, icon: <Landmark className="text-purple-600" /> }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="mb-2 opacity-80">{stat.icon}</div>
                <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mb-1">{stat.label}</span>
                <span className="text-sm font-bold text-gray-800">{stat.val}</span>
              </div>
            ))}
          </div>

          {/* REQUIREMENTS CHECKLIST */}
          <section className="bg-white rounded-[2rem] shadow-xl p-10 border border-gray-100">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-green-50 rounded-2xl text-green-600"><CheckCircle size={28} /></div>
              <div>
                <h2 className="text-3xl font-bold text-[#1A1A1A]">Required Documents</h2>
                <p className="text-gray-400 text-sm">Mandatory submission files for Bangladeshi applicants</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.2em] border-b border-gray-100 pb-3">Primary Checklist</h3>
                {d?.comprehensive_requirements_checklist?.primary_documents.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle size={12} /></div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <h3 className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.2em] border-b border-gray-100 pb-3">Financial Documentation</h3>
                {d?.comprehensive_requirements_checklist?.financial_proofs.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle size={12} /></div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PHOTO SPECS & LOGISTICS */}
          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-[#ffe1e1] text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <Camera className="absolute top-10 right-10 text-white/5" size={120} />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white/10 rounded-xl text-[#f5c800]"><Camera size={24} /></div>
                  <h2 className="text-2xl font-bold italic tracking-tight text-[#f5c800]">Photo Specs</h2>
                </div>
                <div className="space-y-6 mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-gray-500 text-[10px] uppercase font-bold mb-1">Standard Size</p>
                      <p className="text-xl font-mono">{d?.technical_photo_specifications?.dimensions}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-gray-500 text-[10px] uppercase font-bold mb-1">Background</p>
                      <p className="text-xl">{d?.technical_photo_specifications?.background_color}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {d?.technical_photo_specifications?.strict_donots.map((no, i) => (
                      <p key={i} className="text-xs text-red-400/80 flex gap-2"><span>✕</span> {no}</p>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-orange-50 rounded-xl text-orange-600"><Map size={24} /></div>
                <h2 className="text-2xl font-bold tracking-tight">Itinerary Strategy</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-2xl border-l-4 border-[#C5A059]">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Golden Route Suggestion</p>
                  <p className="text-[#1A1A1A] font-bold">{d?.itinerary_design_strategy?.golden_route}</p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed italic border-t pt-4">
                  {d?.itinerary_design_strategy?.requirements}
                </p>
              </div>
            </section>
          </div>

          {/* SUBMISSION CENTERS */}
          <section className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100">
             <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><MapPin size={24} /></div>
              <h2 className="text-2xl font-bold">Official JVAC Submission Centers</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {d?.geospatial_submission_data?.map((loc, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-3xl hover:bg-white hover:shadow-2xl hover:scale-[1.02] transition-all border border-transparent hover:border-gray-200">
                  <h4 className="font-black text-lg text-[#1A1A1A] mb-3">{loc.center}</h4>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed flex items-start gap-2">
                    <MapPin size={14} className="shrink-0 mt-1" /> {loc.address}
                  </p>
                  <div className="flex flex-col gap-2 text-xs font-bold text-[#C5A059] bg-white p-4 rounded-xl">
                    <span className="flex justify-between">Submission: <b className="text-gray-800">{loc.submission_hours}</b></span>
                    {loc.passport_collection && <span className="flex justify-between border-t pt-2">Collection: <b className="text-gray-800">{loc.passport_collection}</b></span>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERT HACKS */}
          <section className="bg-gradient-to-br from-[#fdfbf2] to-[#fffef0] p-12 rounded-[3rem] border border-yellow-100 relative overflow-hidden">
            <Lightbulb className="absolute -bottom-10 -right-10 text-yellow-200/50" size={200} />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-orange-600"><Lightbulb size={28} /></div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight italic uppercase">Insider Approval Hacks</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {d?.expert_approval_hacks.map((hack, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl flex gap-4 items-start shadow-sm border border-white/50 hover:shadow-md transition-shadow">
                    <span className="text-2xl font-black text-orange-200">0{i+1}</span>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">{hack}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* SIDEBAR AREA */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* COST ESTIMATOR CARD */}
          <div className="bg-[#ffe0a7] p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 italic">
              <CreditCard className="text-[#C5A059]" /> Cost Estimator 2026
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Embassy Visa Fee</span>
                <span className="text-red-500 font-bold">{d?.visa_fee_structure_2026?.embassy_visa_fee}</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>VFS Service Charge</span>
                <span className="text-black font-bold">{d?.visa_fee_structure_2026?.vfs_service_charge}</span>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[10px] uppercase text-gray-500 font-black tracking-[0.2em] mb-3">Optional Add-ons</p>
                <div className="space-y-2">
                  {Object.entries(d?.visa_fee_structure_2026?.optional_value_added_services || {}).map(([key, val], idx) => (
                    <div key={idx} className="flex justify-between text-xs">
                      <span className="capitalize text-gray-400">{key.replace(/_/g, " ")}</span>
                      <span className="text-black/80">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a 
  href={`https://wa.me/8801631312524?text=${encodeURIComponent(`Hi, I am interested in applying for a ${country.country} Visa. Please provide more details.`)}`}
  target="_blank" 
  rel="noopener noreferrer"
  className="w-full bg-[#C5A059] hover:bg-[#D4AF37] text-white py-5 rounded-2xl font-black text-lg transition-all shadow-lg shadow-[#C5A059]/20 flex items-center justify-center gap-3 no-underline"
>
  Start Application <ShieldCheck size={20} />
</a>
            <p className="text-center text-[10px] text-gray-500 mt-4 uppercase tracking-tighter">
              {d?.visa_fee_structure_2026?.payment_policy}
            </p>
          </div>

          {/* TIMELINE & DELAYS */}
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="text-[#C5A059]" size={22} />
              <h3 className="font-bold text-lg uppercase tracking-tight">Processing Times</h3>
            </div>
            <div className="space-y-8 relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-100"></div>
              {[
                { label: "Standard Turnaround", time: d?.processing_time_metrics?.standard_turnaround, color: "bg-green-500" },
                { label: "Embassy Review Phase", time: d?.processing_time_metrics?.embassy_review_phase, color: "bg-blue-500" },
                { label: "Peak Season Delay", time: d?.processing_time_metrics?.peak_season_delay, color: "bg-orange-500" }
              ].map((item, i) => (
                <div key={i} className="relative pl-8">
                  <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${item.color} border-4 border-white shadow-sm`}></div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{item.label}</p>
                  <p className="text-lg font-black text-gray-800">{item.time}</p>
                </div>
              ))}
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

          {/* RISK & MITIGATION */}
          <div className="bg-red-50 p-8 rounded-[2rem] border border-red-100">
             <div className="flex items-center gap-3 mb-6 text-red-700">
              <AlertTriangle size={22} />
              <h3 className="font-bold text-lg italic">Rejection Risk Matrix</h3>
            </div>
            <div className="space-y-4">
              {d?.rejection_risk_matrix?.high_risk.map((risk, i) => (
                <div key={i} className="flex gap-3 text-sm text-red-900 font-medium">
                  <span className="shrink-0 text-red-400">●</span> {risk}
                </div>
              ))}
              <div className="mt-6 p-4 bg-white rounded-xl text-xs text-gray-600 border border-red-200 leading-relaxed">
                <b className="text-green-700 block mb-1">PRO-TIP:</b>
                {d?.rejection_risk_matrix?.mitigation}
              </div>
            </div>
          </div>

          {/* ADDITIONAL LOGISTICS */}
          <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2 underline decoration-[#C5A059] decoration-2 underline-offset-4">
              <Info size={18} /> Essential 2026 Logistics
            </h3>
            <div className="space-y-4 text-xs font-medium text-gray-600">
              <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <b className="text-black block mb-1">Visit Japan Web:</b> {d?.additional_logistics_2026?.visit_japan_web}
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <b className="text-black block mb-1">Currency Advice:</b> {d?.additional_logistics_2026?.currency_advice}
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <b className="text-black block mb-1">JR Pass Note:</b> {d?.additional_logistics_2026?.jr_pass_note}
              </div>
            </div>
          </div>
          <div className="bg-[#C5A059] p-8 rounded-[2rem] flex flex-col justify-center items-center text-center text-white">
              <HelpCircle size={48} className="mb-4 opacity-50" />
              <p className="font-bold text-lg mb-2 italic underline decoration-white/30">Need Help?</p>
              <p className="text-sm opacity-90 leading-relaxed">Our experts provide professional form-filling & photo verification.</p>
              <p className="text-green-800">support@eammu.com</p>
            </div>
        </aside>
      </div>

      {/* FAQ SECTION */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 italic tracking-tight uppercase">
            Frequently Asked <span className="text-[#C5A059]">Questions</span>
          </h2>
          <div className="space-y-6">
            {d?.faq_extended.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-200 hover:border-[#C5A059] transition-all group">
                <p className="font-black text-[#1A1A1A] mb-4 text-xl flex gap-3 italic">
                  <span className="text-[#C5A059]">Q.</span> {item.question}
                </p>
                <p className="text-gray-500 leading-relaxed text-base pl-8 border-l-2 border-gray-100 group-hover:border-[#C5A059]/30 transition-all">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}