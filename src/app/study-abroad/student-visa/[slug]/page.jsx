import countries from "@/app/data/countries.json";
import visadata from "@/app/data/studentvisadata.json"; // Updated data source
import { createSlug } from "@/app/lib/utils";
import { 
  CheckCircle, Clock, CreditCard, Camera, Info, 
  MapPin, AlertTriangle, Lightbulb, HelpCircle, 
  Calendar, ShieldCheck, Landmark, GraduationCap, 
  BookOpen, Briefcase, Award 
} from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cleanSlug = slug.replace("", "");
  const country = countries.find((c) => createSlug(c.country) === cleanSlug);
  const d = visadata[cleanSlug];
  
  const title =
    d?.title ||
    (country
      ? `${country.country} Student Visa Application & Requirements | Scholarships`
      : "Student Visa Guide 2026 | Eammu Holidays");

  const description =
    d?.description ||
     `Complete guide for ${country?.country || "international"} student visa application, requirements, and scholarship opportunities for studying abroad in 2026.`;


  return {
    metadataBase: new URL("https://www.eammu.com"),

    title,
    description,

    keywords: [
      "student visa requirements 2026",
      "study abroad visa guide",
      "COE process",
      "student visa application",
      country?.country && `${country.country} student visa`,
    ].filter(Boolean),

    alternates: {
      canonical: `https://www.eammu.com/student-visa/${cleanSlug}`,
    },

    openGraph: {
      title,
      description,
      url: `https://www.eammu.com/student-visa/${cleanSlug}`,
      siteName: "Eammu Holidays",
      type: "article",
      images: [
        {
          url: "/eammu_banner_four.webp",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/eammu_banner_four.webp"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function StudentVisaPage({ params }) {
  const { slug } = await params;
  const cleanSlug = slug.replace("", "");
  const country = countries.find((c) => createSlug(c.country) === cleanSlug);
  const d = visadata[cleanSlug];

  if (!country) return <div className="p-20 text-center font-serif text-2xl">Country data not found.</div>;

  return (
    <div className="min-h-screen text-[#2D2D2D] font-sans">
      {/* ACADEMIC HERO SECTION */}
      <div className="relative bg-[#dabeff] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative w-72 h-44 bg-white p-2 rounded-2xl shadow-2xl overflow-hidden">
              <img src={country.flag} alt={country.country} className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
          <div className="text-center md:text-left text-white">
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/30">
                Academic Year 2026
              </span>
              <span className="bg-[#f5c800] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {d?.visa_category_details?.visa_type}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter italic drop-shadow-lg">
             <span className="text-[#f5c800]">Study in </span> {country.country} 
            </h1>
            <h2>
              Study in the {country.country}: Your Gateway to World-Class Education and Global Opportunities
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-white/80 mb-6 max-w-3xl leading-relaxed">
              {d?.title}
            </h3>
            <p className="text-white/70 max-w-2xl text-lg leading-relaxed font-light mb-4">
              {d?.description}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 text-white/60 font-mono text-sm">
              <Calendar size={16} /> Updated: {d?.last_updated}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-20 pb-20">
        
        {/* MAIN CONTENT AREA */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* STUDENT QUICK STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "COE Process", val: d?.processing_and_approval_metrics?.coe_processing_time, icon: <Clock className="text-blue-600" /> },
              { label: "Visa Approval", val: d?.processing_and_approval_metrics?.approval_chances, icon: <GraduationCap className="text-green-600" /> },
              { label: "Work Rights", val: d?.work_rights_and_stay?.part_time_permission, icon: <Briefcase className="text-[#C5A059]" /> },
              { label: "Category", val: d?.visa_category_details?.main_category, icon: <ShieldCheck className="text-purple-600" /> }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="mb-2 opacity-80">{stat.icon}</div>
                <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mb-1">{stat.label}</span>
                <span className="text-sm font-bold text-gray-800">{stat.val}</span>
              </div>
            ))}
          </div>

          {/* SCHOLARSHIP ECOSYSTEM */}
          <section className="bg-white rounded-[2rem] shadow-xl p-10 border border-gray-100">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-yellow-50 rounded-2xl text-[#C5A059]"><Award size={28} /></div>
              <div>
                <h2 className="text-3xl font-bold text-[#1A1A1A]">Scholarships 2026</h2>
                <p className="text-gray-400 text-sm">Financial aid and funding opportunities</p>
              </div>
            </div>
            
            <div className="space-y-8">
              {d?.scholarship_ecosystem_2026?.government_funded.map((sch, i) => (
                <div key={i} className="p-6 bg-blue-50/50 rounded-3xl border border-blue-100">
                  <h3 className="text-blue-900 font-black text-xl mb-2">{sch.name}</h3>
                  <p className="text-sm text-blue-800/70 mb-4">{sch.benefits}</p>
                  <div className="flex flex-wrap gap-4">
                    <span className="text-[10px] bg-white px-3 py-1 rounded-full font-bold shadow-sm">Window: {sch.application_window}</span>
                  </div>
                </div>
              ))}
              <div className="grid md:grid-cols-2 gap-6">
                {d?.scholarship_ecosystem_2026?.private_and_partial.map((sch, i) => (
                  <div key={i} className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-800 mb-2">{sch.name}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{sch.benefits}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* REQUIREMENTS CHECKLIST */}
          <section className="bg-white rounded-[2rem] shadow-sm p-10 border border-gray-100">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-green-50 rounded-2xl text-green-600"><CheckCircle size={28} /></div>
              <h2 className="text-3xl font-bold text-[#1A1A1A]">Documentation Phase</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] border-b pb-3">Embassy Submission</h3>
                {d?.comprehensive_requirements_checklist?.embassy_submission_docs.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5"><BookOpen size={12} /></div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <h3 className="text-green-600 font-bold text-xs uppercase tracking-[0.2em] border-b pb-3">COE/Financial Phase</h3>
                {d?.comprehensive_requirements_checklist?.coe_phase_documents.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle size={12} /></div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* RISK & MITIGATION */}
          <section className="bg-red-50 p-10 rounded-[2rem] border border-red-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-red-100 rounded-xl text-red-600"><AlertTriangle size={24} /></div>
              <h2 className="text-2xl font-bold text-red-900">Rejection Risk Matrix</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {d?.rejection_risk_matrix?.high_risk_reasons.map((risk, i) => (
                  <div key={i} className="flex gap-3 text-sm text-red-900/80">
                    <span className="font-bold text-red-400">0{i+1}.</span> {risk}
                  </div>
                ))}
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-200">
                <p className="text-xs font-bold text-green-700 uppercase mb-2">How to Approve?</p>
                <p className="text-sm text-gray-600 leading-relaxed italic">{d?.rejection_risk_matrix?.mitigation_strategy}</p>
              </div>
            </div>
          </section>
        </div>

        {/* SIDEBAR AREA */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* FINANCIAL SOLVENCY CARD */}
          <div className="bg-[#1A1A1A] p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
            <Landmark className="absolute top-10 right-10 text-white/5" size={120} />
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 italic text-[#f5c800]">
              <CreditCard /> Financial Threshold
            </h3>
            <div className="space-y-6 relative z-10">
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-black tracking-widest mb-1">Required Balance</p>
                <p className="text-3xl font-black text-white">{d?.financial_solvency_thresholds?.self_funded_min_balance.split(' ')[1]} BDT</p>
                <p className="text-xs text-gray-400 mt-1">{d?.financial_solvency_thresholds?.self_funded_min_balance}</p>
              </div>
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex gap-3 items-start">
                  <Info size={14} className="text-[#f5c800] shrink-0 mt-1" />
                  <p className="text-xs text-gray-400 leading-relaxed">{d?.financial_solvency_thresholds?.logic}</p>
                </div>
              </div>
              <a 
                href={`https://wa.me/8801631312524?text=${encodeURIComponent(`Hi, I want to apply for a ${country.country} Student Visa.`)}`}
                className="w-full bg-[#f5c800] hover:bg-white text-black py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 no-underline mt-4"
              >
                Apply Now <ShieldCheck size={20} />
              </a>
            </div>
          </div>

          {/* WORK PERMIT PREVIEW */}
          <div className="bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Briefcase size={20} /> Student Work Rights
            </h3>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <p className="text-[10px] uppercase opacity-60 mb-1">During Session</p>
                <p className="text-lg font-bold">{d?.work_rights_and_stay?.part_time_permission}</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl">
                <p className="text-[10px] uppercase opacity-60 mb-1">During Holidays</p>
                <p className="text-lg font-bold">{d?.work_rights_and_stay?.vacation_hours}</p>
              </div>
              <p className="text-[10px] opacity-70 italic mt-2 text-center">
                Extension: {d?.work_rights_and_stay?.visa_extension}
              </p>
            </div>
          </div>

          {/* EXPERT HACKS */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-[2rem] border border-yellow-100">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="text-orange-500" size={22} />
              <h3 className="font-bold text-lg uppercase">Student Hacks</h3>
            </div>
            <div className="space-y-4">
              <p className="text-xs text-gray-600 leading-relaxed border-l-2 border-orange-200 pl-4">
                {d?.faq_student_edition[0].answer}
              </p>
              <p className="text-xs text-gray-600 leading-relaxed border-l-2 border-orange-200 pl-4">
                Always maintain the minimum balance for at least 6 months before application.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* FAQ SECTION */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 italic tracking-tight uppercase">
            Student <span className="text-blue-600">FAQ</span>
          </h2>
          <div className="space-y-6">
            {d?.faq_student_edition.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-200 hover:border-blue-600 transition-all group">
                <p className="font-black text-[#1A1A1A] mb-4 text-xl flex gap-3 italic">
                  <span className="text-blue-600">Q.</span> {item.question}
                </p>
                <p className="text-gray-500 leading-relaxed text-base pl-8 border-l-2 border-gray-100 group-hover:border-blue-600/30 transition-all">
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