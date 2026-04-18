import countries from "@/app/data/countries.json";
import visadata from "@/app/data/studentvisadata.json";
import { createSlug } from "@/app/lib/utils";
import { 
  CheckCircle, Clock, CreditCard, Camera, Info, 
  MapPin, AlertTriangle, Lightbulb, HelpCircle, 
  Calendar, ShieldCheck, Landmark, GraduationCap, 
  BookOpen, Briefcase, Award, PlayCircle, ExternalLink,
  Languages, ListOrdered, ArrowRightCircle, Plane
} from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cleanSlug = slug.replace("", "");
  const country = countries.find((c) => createSlug(c.country) === cleanSlug);
  const d = visadata[cleanSlug];
  
  const title = d?.title || (country ? `${country.country} Student Visa Guide 2026` : "Student Visa Guide");
  const description = d?.description || `Complete guide for ${country?.country || "international"} student visa application 2026.`;

  return {
    metadataBase: new URL("https://www.eammu.com"),
    title,
    description,
    alternates: { canonical: `https://www.eammu.com/student-visa/${cleanSlug}` },
  };
}

export default async function StudentVisaPage({ params }) {
  const { slug } = await params;
  const cleanSlug = slug.replace("", "");
  const country = countries.find((c) => createSlug(c.country) === cleanSlug);
  const d = visadata[cleanSlug];

  if (!country) return <div className="p-20 text-center font-serif text-2xl text-gray-400">Country data not found.</div>;

  return (
    <div className="min-h-screen text-[#2D2D2D] font-sans bg-[#F9FAFB]">
      
      {/* HERO SECTION */}
      <div className="relative bg-[#dabeff] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 text-white">
          <div className="relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
             <div className="relative w-72 h-44 bg-white p-2 rounded-2xl shadow-2xl overflow-hidden">
                <img src={country.flag} alt={country.country} className="w-full h-full object-cover rounded-xl" />
             </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase border border-white/30 tracking-widest">Academic Year 2026</span>
              <span className="bg-[#f5c800] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{d?.visa_category_details?.visa_type}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 italic tracking-tighter drop-shadow-lg"><span className="text-[#f5c800]">Study in</span> {country.country}</h1>
            <p className="text-xl md:text-2xl font-semibold opacity-90 mb-4">{d?.title}</p>
            <p className="max-w-3xl opacity-80 leading-relaxed mb-6 font-light">{d?.description}</p>
            <div className="flex items-center justify-center md:justify-start gap-4 text-xs font-mono opacity-70">
              <Calendar size={14} /> Last Updated: {d?.last_updated}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-20 pb-20">
        
        {/* MAIN CONTENT AREA */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* TOP QUICK STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "COE Processing", val: d?.processing_and_approval_metrics?.coe_processing_time, icon: <Clock className="text-blue-600" /> },
              { label: "Visa Approval", val: d?.processing_and_approval_metrics?.approval_chances, icon: <GraduationCap className="text-green-600" /> },
              { label: "Part-Time Work", val: d?.work_rights_and_stay?.part_time_permission.split(' ')[1] + " Hours", icon: <Briefcase className="text-yellow-600" /> },
              { label: "Visa Category", val: d?.visa_category_details?.main_category, icon: <ShieldCheck className="text-purple-600" /> }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <p className="text-[10px] uppercase text-gray-400 font-black mb-1 tracking-tighter">{stat.label}</p>
                <p className="text-xs font-bold text-gray-800">{stat.val}</p>
              </div>
            ))}
          </div>

          {/* SCHOLARSHIP ECOSYSTEM SECTION */}
          <section className="bg-white rounded-[2.5rem] shadow-xl p-10 border border-gray-50">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-yellow-50 rounded-2xl text-yellow-600"><Award size={32} /></div>
              <div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight italic">Scholarships 2026</h2>
                <p className="text-gray-400 text-sm">Funding and financial support for Bangladeshi students</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {d?.scholarship_ecosystem_2026?.government_funded.map((sch, i) => (
                <div key={i} className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 text-blue-100 opacity-20 group-hover:scale-110 transition-transform"><Award size={120} /></div>
                  <h3 className="text-blue-900 font-black text-xl mb-3">{sch.name}</h3>
                  <p className="text-sm text-blue-800/80 mb-4 leading-relaxed">{sch.benefits}</p>
                  <div className="flex flex-wrap gap-4 items-center">
                    <span className="text-[10px] bg-white text-blue-600 px-4 py-1.5 rounded-full font-black shadow-sm uppercase border border-blue-100">Window: {sch.application_window}</span>
                    <p className="text-[10px] text-blue-400 font-medium">Criteria: {sch.selection_criteria}</p>
                  </div>
                </div>
              ))}
              <div className="grid md:grid-cols-2 gap-6">
                {d?.scholarship_ecosystem_2026?.private_and_partial.map((sch, i) => (
                  <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h4 className="font-black text-gray-800 mb-2 italic uppercase text-xs tracking-widest">{sch.name}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{sch.benefits}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* LANGUAGE PROFICIENCY SECTION */}
          {d?.english_language_test_requirements_2026 && (
            <section className="bg-white rounded-[2.5rem] shadow-sm p-10 border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600"><Languages size={32} /></div>
                <h2 className="text-2xl font-black text-gray-900 italic tracking-tight uppercase">Language Benchmarks</h2>
              </div>
              <p className="text-sm text-gray-500 mb-8 border-l-4 border-indigo-100 pl-4">{d?.english_language_test_requirements_2026?.overview}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "IELTS", data: d?.english_language_test_requirements_2026?.ielts_academic },
                  { name: "PTE", data: d?.english_language_test_requirements_2026?.pte_academic },
                  { name: "Duolingo", data: d?.english_language_test_requirements_2026?.duolingo_det },
                  { name: "TOEFL", data: d?.english_language_test_requirements_2026?.toefl_ibt }
                ].map((test, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 hover:bg-white hover:shadow-md transition-all">
                    <p className="font-black text-indigo-900 mb-3 text-lg italic">{test.name}</p>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-indigo-700">Min Score: {test.data.min_score}</p>
                      <p className="text-[10px] font-medium text-indigo-500 uppercase tracking-tighter">Target: {test.data.competitive_score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* DOCUMENTATION PHASE SECTION */}
          <section className="bg-white rounded-[2.5rem] shadow-sm p-10 border border-gray-100">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-green-50 rounded-2xl text-green-600"><BookOpen size={32} /></div>
              <h2 className="text-2xl font-black text-gray-900 italic tracking-tight uppercase">Documentation Matrix</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] border-b pb-4">Embassy Submission</h3>
                <div className="space-y-4">
                  {d?.comprehensive_requirements_checklist?.embassy_submission_docs.map((doc, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle size={12} /></div>
                      <p className="text-gray-600 text-xs font-medium leading-relaxed group-hover:text-blue-600 transition-colors">{doc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-green-600 font-black text-xs uppercase tracking-[0.3em] border-b pb-4">COE / Financial Phase</h3>
                <div className="space-y-4">
                  {d?.comprehensive_requirements_checklist?.coe_phase_documents.map((doc, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle size={12} /></div>
                      <p className="text-gray-600 text-xs font-medium leading-relaxed group-hover:text-green-600 transition-colors">{doc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* STEP BY STEP ROADMAP */}
          {d?.step_by_step_application_roadmap && (
            <section className="bg-[#1A1A1A] text-white rounded-[3rem] p-12 relative overflow-hidden shadow-2xl">
              <Plane className="absolute top-10 right-10 text-white opacity-5 rotate-45" size={200} />
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-yellow-400 rounded-2xl text-black"><ListOrdered size={32} /></div>
                <h2 className="text-3xl font-black italic tracking-tight">Application Roadmap</h2>
              </div>
              <div className="grid gap-8 relative z-10">
                {Object.entries(d.step_by_step_application_roadmap).map(([key, step], i) => (
                  <div key={key} className="flex gap-8 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 font-black text-xl group-hover:bg-yellow-400 group-hover:text-black transition-all">
                      {i + 1}
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-300 font-medium text-base leading-relaxed group-hover:text-white">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* REJECTION RISK MATRIX */}
          <section className="bg-red-50 rounded-[2.5rem] p-10 border border-red-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-red-100 rounded-2xl text-red-600"><AlertTriangle size={32} /></div>
              <h2 className="text-2xl font-black text-red-900 italic tracking-tight uppercase">Rejection Risk Matrix</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                {d?.rejection_risk_matrix?.high_risk_reasons.map((risk, i) => (
                  <div key={i} className="flex gap-4 items-start text-xs font-bold text-red-900/80">
                    <span className="text-red-400">0{i+1}.</span>
                    <p className="leading-relaxed">{risk}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-red-200 flex flex-col justify-center italic">
                <p className="text-[10px] font-black text-green-700 uppercase mb-3 tracking-widest">How to Approve?</p>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{d?.rejection_risk_matrix?.mitigation_strategy}</p>
              </div>
            </div>
          </section>
        </div>

        {/* SIDEBAR AREA */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* FINANCIAL SOLVENCY CARD */}
          <div className="bg-[#1A1A1A] p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
            <Landmark className="absolute -top-6 -right-6 text-white/5 group-hover:scale-110 transition-transform duration-700" size={150} />
            <h3 className="text-xl font-black mb-8 flex items-center gap-2 italic text-[#f5c800] uppercase tracking-tighter">
              <CreditCard size={20} /> Bank Solvency
            </h3>
            <div className="space-y-6 relative z-10">
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-black tracking-widest mb-1">Self-Funded Minimum</p>
                <p className="text-4xl font-black text-white italic tracking-tighter">
                  {d?.financial_solvency_thresholds?.self_funded_min_balance.split(' ')[1]} BDT
                </p>
                <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">{d?.financial_solvency_thresholds?.self_funded_min_balance}</p>
              </div>
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex gap-3 items-start">
                  <Info size={16} className="text-[#f5c800] shrink-0 mt-0.5" />
                  <p className="text-[11px] text-gray-400 font-medium leading-relaxed">{d?.financial_solvency_thresholds?.bank_history_requirement}</p>
                </div>
                <p className="text-[10px] text-gray-500 italic opacity-80">{d?.financial_solvency_thresholds?.logic}</p>
              </div>
              <a 
                href={`https://wa.me/8801631312524?text=${encodeURIComponent(`Hi, I'm interested in the ${country.country} Student Visa roadmap.`)}`}
                className="w-full bg-[#f5c800] hover:bg-white text-black py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 no-underline shadow-lg"
              >
                Start Application <ArrowRightCircle size={20} />
              </a>
            </div>
          </div>

          {/* WORK PERMIT SIDEBAR */}
          <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
             <Briefcase className="absolute -bottom-4 -left-4 text-white opacity-10" size={120} />
             <h3 className="font-black text-lg mb-8 flex items-center gap-2 italic uppercase tracking-tighter">
              <Briefcase size={20} /> Work Rights
            </h3>
            <div className="space-y-4 relative z-10">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                <p className="text-[10px] uppercase opacity-60 font-black mb-1 tracking-widest">Standard Hours</p>
                <p className="text-xl font-black italic">{d?.work_rights_and_stay?.part_time_permission}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                <p className="text-[10px] uppercase opacity-60 font-black mb-1 tracking-widest">Semester Breaks</p>
                <p className="text-xl font-black italic">{d?.work_rights_and_stay?.vacation_hours}</p>
              </div>
              <p className="text-[10px] font-bold text-blue-200 text-center uppercase tracking-widest mt-2">
                Stay Limit: {d?.work_rights_and_stay?.visa_extension}
              </p>
            </div>
          </div>

          {/* EXPERT HACK / ADVICE */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-[2.5rem] border border-orange-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="text-orange-500" size={24} />
              <h3 className="font-black text-gray-900 italic text-sm uppercase tracking-widest">Visa Expert Hack</h3>
            </div>
            <div className="space-y-4">
               <p className="text-xs text-gray-600 leading-relaxed font-medium border-l-2 border-orange-300 pl-4 italic">
                {d?.faq_student_edition?.[0]?.answer}
              </p>
              <p className="text-[11px] text-gray-500 leading-relaxed opacity-75">
                Maintain your minimum balance consistently for 12 months for a 100% success rate on the financial solvency check.
              </p>
            </div>
          </div>
        </aside>
      </div>
{/* YOUTUBE VIDEO SECTION */}
{d?.youtube_video_options && d.youtube_video_options.length > 0 && (
  <div className="py-16">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-black text-center mb-16 italic tracking-tight uppercase">
        Watch & Learn <span className="text-[#C5A059]">About {country.country} Visa Process</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {d.youtube_video_options.map((video, index) => {
          // Robust Regex to extract YouTube ID from any link format
          const getYouTubeId = (url) => {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            const match = url.match(regExp);
            return (match && match[2].length === 11) ? match[2] : null;
          };

          const videoId = getYouTubeId(video.video_link);
          // Using hqdefault as it is more reliably available than maxresdefault
          const thumbUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

          return (
            <div key={index} className="group relative bg-white rounded-[2rem] overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#C5A059] transition-all duration-500">
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={thumbUrl} 
                  alt={video.video_title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#C5A059] rounded-full flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="font-black text-lg text-[#1A1A1A] mb-4 leading-tight group-hover:text-[#C5A059] transition-colors line-clamp-2 italic">
                  {video.video_title}
                </h3>
                <a 
                  href={video.video_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#C5A059] transition-colors no-underline"
                >
                  Watch on YouTube 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
)}
      {/* STUDENT FAQ SECTION */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black italic tracking-tighter uppercase text-gray-900">
              Student <span className="text-blue-600">FAQ</span>
            </h2>
            <div className="h-2 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="space-y-8">
            {d?.faq_student_edition?.map((faq, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-all group">
                <div className="flex gap-6">
                  <span className="text-2xl font-black text-blue-600 italic">Q.</span>
                  <div>
                    <p className="text-xl font-black text-gray-900 mb-4 italic leading-tight group-hover:text-blue-600 transition-colors">{faq.question}</p>
                    <p className="text-gray-500 text-base leading-relaxed font-medium pl-2 border-l-2 border-gray-100 group-hover:border-blue-100 transition-all">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}