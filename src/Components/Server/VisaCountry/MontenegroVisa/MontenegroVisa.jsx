
import React from "react";
import { 
  CheckCircle, Globe, ShieldCheck, FileText, Palmtree, 
  HelpCircle, Clock, Wallet, TrendingUp, PlayCircle, 
  Image as ImageIcon, ArrowRight, Phone, Mail, Check, 
  Instagram, Facebook, Menu, X, Mountain
} from 'lucide-react';

const MontenegroVisa = () => {
  return (
    <>
      {/* --- MAIN WRAPPER (WHITE BACKGROUND) --- */}
      <main className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-100">
        
        {/* --- PREMIUM HERO SECTION --- */}
        <section className="relative pt-24 md:pt-32 pb-16 px-6 lg:px-12">
          {/* Soft Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-60" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#005a31] px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-blue-100">
                <ShieldCheck size={14} /> 2026 BALKAN TRAVEL PROTOCOL
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#005a31] mb-6 leading-[1.1] tracking-tight">
                Montenegro <br /> 
                <span className="text-[#ff6b00]">Wild Beauty.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
                Official Visa processing for the Republic of Montenegro. From the Bay of Kotor to the peaks of Durmitor, we assist UAE residents with sticker visas and **Schengen-waiver** entry verifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://wa.me/37494810585" className="bg-[#005a31] hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center gap-3">
                  Apply via WhatsApp <ArrowRight size={20} />
                </a>
                <a href="tel:+971507078334" className="bg-white border-2 border-slate-100 hover:border-[#005a31] text-[#005a31] px-8 py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3">
                  Visa Waiver Check
                </a>
              </div>
            </div>

            {/* Feature Image with Play Button */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1555990548-64478f7e289d?q=80&w=1200" 
                  alt="Kotor Bay, Montenegro" 
                  className="w-full h-[300px] md:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                   <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 hover:scale-110 transition-transform cursor-pointer">
                      <PlayCircle size={48} fill="currentColor" />
                   </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 hidden md:block">
                <p className="text-[#005a31] font-black text-3xl">10-15</p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Working Days*</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- RESPONSIVE GRID BOXES --- */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <MetricBox icon={<Clock />} label="Processing Time" value="14 Working Days" />
            <MetricBox icon={<Wallet />} label="Average Cost" value="~AED 400 - 600" />
            <MetricBox icon={<TrendingUp />} label="Stay Period" value="Up to 90 Days" />
            <MetricBox icon={<Globe />} label="Waiver Status" value="Schengen/US Holders" />
          </div>
        </section>

        {/* --- VIDEO GALLERY (100% RESPONSIVE) --- */}
        <section className="py-24 px-6 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#005a31] uppercase tracking-tighter mb-4">Discover Montenegro</h2>
              <div className="h-1.5 w-20 bg-[#ff6b00] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard id="98fSRoZIkWs" title="Montenegro Visa 2026" desc="Latest requirements for UAE residents and the Embassy submission process." />
              <VideoCard id="mVo9V7RR5fE" title="Entering via Podgorica" desc="Airport arrival tips and the mandatory 24-hour police registration." />
              <VideoCard id="NrSjr1GnotY" title="Kotor & Budva Tour" desc="Planning your itinerary for the most scenic coastal towns in the Balkans." />
            </div>
          </div>
        </section>

        {/* --- POSTER SECTION --- */}
        <section className="py-24 px-6 bg-white w-full">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-12 uppercase tracking-tighter">
              Balkan <span className="text-[#ff6b00]">Passports</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full items-stretch">
              <PosterCard 
                img="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800" 
                type="Tourist" 
                title="Short Stay (C)" 
              />
              <PosterCard 
                img="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800" 
                type="Business" 
                title="Commercial Visit" 
              />
              <PosterCard 
                img="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800" 
                type="Transit" 
                title="Stopover Permit" 
              />
              <PosterCard 
                img="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800" 
                type="Cultural" 
                title="Events & Sports" 
              />
            </div>
          </div>
        </section>

        {/* --- CONTENT & SIDEBAR GRID --- */}
        <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-20">
            
            {/* Requirement Checklist */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                <div className="flex items-center gap-5">
                  <div className="bg-[#005a31] p-4 rounded-[1.25rem] text-white shadow-xl shadow-blue-100">
                    <FileText size={32} />
                  </div>
                  <div>
                    <h2 className="text-4xl font-black uppercase tracking-tight">Visa Checklist</h2>
                    <p className="text-slate-500 font-medium mt-1">Montenegro Embassy Requirements 2026</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* 1. PRIMARY IDENTITY */}
                <div className="bg-[#f8fafc] p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-colors">
                  <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Identity</h4>
                  <div className="space-y-4">
                    <CheckItem text="Passport (6M+ Valid)" />
                    <CheckItem text="UAE Visa (3M+ Valid)" />
                    <CheckItem text="2 White Background Photos" />
                    <CheckItem text="Emirates ID Copy" />
                  </div>
                </div>

                {/* 2. EMPLOYMENT & FUNDS */}
                <div className="bg-[#f8fafc] p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-colors">
                  <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Financials</h4>
                  <div className="space-y-4">
                    <CheckItem text="NOC from UAE Employer" />
                    <CheckItem text="3-Month Bank Statement" />
                    <CheckItem text="Salary Certificate" />
                    <CheckItem text="Trade License (if Partner)" />
                  </div>
                </div>

                {/* 3. TRIP PROOF */}
                <div className="bg-[#f8fafc] p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-colors">
                  <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Travel</h4>
                  <div className="space-y-4">
                    <CheckItem text="Confirmed Hotel Booking" />
                    <CheckItem text="Round Trip Ticket" />
                    <CheckItem text="Travel Health Insurance" />
                    <CheckItem text="Detailed Travel Itinerary" />
                  </div>
                </div>

                {/* 4. WAIVER PROTOCOL BOX */}
                <div className="bg-[#005a31] md:col-span-3 p-8 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Visa-Exempt Entry 2026</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <CheckItem light text="Valid Multiple Schengen" />
                      <CheckItem light text="Valid Multiple US/UK" />
                      <CheckItem light text="UAE National Passport" />
                      <CheckItem light text="Irish Multiple Visa" />
                    </div>
                  </div>
                  <div className="absolute -right-10 -bottom-10 opacity-10">
                    <Mountain size={200} />
                  </div>
                </div>
              </div>

              {/* Pro Tip Box */}
              <div className="mt-10 p-8 bg-blue-50 border border-blue-100 rounded-[2rem] flex flex-col md:flex-row items-center gap-6">
                <div className="bg-[#ff5722] text-white p-4 rounded-2xl shadow-lg shrink-0">
                  <ShieldCheck size={32} />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-base text-slate-700 font-medium leading-relaxed">
                    <strong className="text-[#005a31] font-black uppercase text-sm block mb-1">Police Registration (24 Hours):</strong> 
                    Every foreigner is legally required to register with the local police or a tourist information office in their town of stay within **24 hours of arrival**. Hotels perform this automatically, but if you are staying in private apartments (Airbnb), ensure your host completes the registration to avoid fines upon departure at the airport.
                  </p>
                </div>
              </div>
            </section>

            {/* Application Guidelines */}
            <div className="bg-emerald-50 rounded-[2.5rem] p-8 md:p-12 border border-emerald-100">
               <h3 className="text-2xl font-black text-[#005a31] mb-6 tracking-tight uppercase">Schengen & US Holders</h3>
               <p className="text-slate-700 leading-relaxed mb-6 font-medium">Montenegro allows visa-free entry for certain document holders:</p>
               <ul className="space-y-4">
                  <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-[#ff6b00] mt-1" /> <span>**Waiver Rule:** Holders of a valid multiple-entry Schengen, US, UK, or Irish visa can enter Montenegro for up to 30 days without a separate visa.</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-[#ff6b00] mt-1" /> <span>**Validity:** The underlying visa must be valid for the entire duration of your stay in Montenegro.</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-[#ff6b00] mt-1" /> <span>**Passport Requirements:** Your passport must be valid for at least 3 months beyond your intended exit from the country.</span></li>
               </ul>
            </div>

            {/* FAQ Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b-2 border-slate-100 pb-8">
                <div>
                  <h3 className="text-4xl font-black text-[#005a31] uppercase tracking-tighter">Common Questions</h3>
                  <p className="text-[#ff5722] font-black uppercase text-xs tracking-[0.2em] mt-2">Balkan Mission 2026</p>
                </div>
                <div className="hidden md:block">
                  <HelpCircle size={48} className="text-slate-100" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FAQBox 
                  q="Do UAE Nationals need a visa for Montenegro?" 
                  a="No. UAE citizens are visa-exempt for stays up to 90 days." 
                />
                <FAQBox 
                  q="Where is the Montenegro Embassy located?" 
                  a="The Embassy is located in Abu Dhabi. All applications for residents in Dubai and Northern Emirates are also submitted here by appointment." 
                />
                <FAQBox 
                  q="Can I get a visa on arrival in Montenegro?" 
                  a="No. Only nationalities with specific bilateral agreements or those holding valid Schengen/US visas as per the waiver rule can enter without a pre-arranged visa." 
                />
                <FAQBox 
                  q="Is the visa fee refundable?" 
                  a="No. All government and service fees paid to the Embassy are non-refundable, even in the case of a visa denial." 
                />
                <FAQBox 
                  q="Does Montenegro use the Euro?" 
                  a="Yes, Montenegro uses the Euro (€) as its official currency, even though it is not yet a member of the European Union." 
                />
                <FAQBox 
                  q="How many days can I stay on a tourist visa?" 
                  a="A standard Category C visa usually allows for a stay of up to 90 days within a 180-day period." 
                />
              </div>
            </section>
          </div>

          {/* --- STICKY SIDEBAR --- */}
          <aside className="lg:col-span-4 lg:sticky lg:top-8 self-start">
            <div className="bg-[#005a31] text-white p-10 md:p-12 rounded-[3.5rem] shadow-[0_35px_60px_-15px_rgba(0,90,49,0.3)] relative overflow-hidden flex flex-col min-h-[640px]">
               
               <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Eammu Holidays</h3>
               
               <div className="space-y-12 flex-grow">
                  <SidebarContact label="UAE SUPPORT" val="+971 50 707 8334" />
                  <SidebarContact label="ARMENIA OFFICE" val="+374 94 810585" />
                  <SidebarContact label="BD HOTLINE" val="+880 1701 699 743" />
                  <SidebarContact label="EMAIL US" val="info@eammu.com" />
               </div>

               <a href="https://wa.me/37494810585" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                  Chat on WhatsApp
                </a>
               
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className="mt-10 bg-[#f8fafc] border border-slate-100 rounded-[3rem] p-12 text-center flex flex-col items-center">
               <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#005a31] mb-6 border border-slate-50">
                  <ShieldCheck size={32} />
               </div>
               <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] mb-2">MONTENEGRO MISSION SERVICES</p>
               <p className="text-[#005a31] font-black italic text-2xl tracking-tighter">EAMMU HOLIDAYS</p>
            </div>
          </aside>
        </section>

      </main>
    </>
  );
};

// --- HELPER COMPONENTS ---

const MetricBox = ({ icon, label, value }) => (
  <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
    <div className="text-[#ff6b00] mb-4">{React.cloneElement(icon, { size: 28 })}</div>
    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">{label}</span>
    <span className="text-[#005a31] font-black text-sm md:text-base leading-tight">{value}</span>
  </div>
);

const VideoCard = ({ id, title, desc }) => (
  <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm group">
    <div className="aspect-video relative">
      <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${id}`} title={title} allowFullScreen></iframe>
    </div>
    <div className="p-6">
      <h4 className="font-black text-[#005a31] uppercase mb-2 leading-tight">{title}</h4>
      <p className="text-slate-500 text-xs font-medium">{desc}</p>
    </div>
  </div>
);

const PosterCard = ({ img, type, title }) => (
  <div className="relative w-full min-h-[400px] md:min-h-[450px] rounded-[2.5rem] overflow-hidden group shadow-2xl bg-slate-100 flex flex-col justify-end">
    <img 
      src={img} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#005a31] via-[#005a31]/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
    <div className="relative z-10 p-8 w-full">
      <span className="text-[#ff6b00] font-black text-xs uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg mb-3 inline-block">
        {type}
      </span>
      <h4 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tighter leading-[0.9]">
        {title}
      </h4>
      <div className="w-0 group-hover:w-12 h-1 bg-[#ff6b00] mt-4 transition-all duration-500 rounded-full"></div>
    </div>
  </div>
);

const CheckItem = ({ text, light = false }) => (
  <div className="flex items-center gap-3 group">
    <div className={`p-1 rounded-full ${light ? 'bg-white/10 text-[#ff5722]' : 'bg-[#005a31]/5 text-[#ff5722]'}`}>
      <CheckCircle size={16} fill="currentColor" className={light ? 'text-[#005a31]' : 'text-white'} />
    </div>
    <span className={`text-sm font-bold tracking-tight ${light ? 'text-white/90' : 'text-slate-700'}`}>
      {text}
    </span>
  </div>
);

const SidebarContact = ({ label, val }) => (
  <div className="relative pl-6">
    <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-[#ff5722] rounded-full shadow-[0_0_8px_rgba(255,87,34,0.4)]" />
    <p className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">{label}</p>
    <p className="text-lg font-bold hover:text-orange-300 transition-colors">{val}</p>
  </div>
);

const FAQBox = ({ q, a }) => (
  <details className="group bg-white border border-slate-100 rounded-2xl p-6 open:shadow-lg transition-all">
    <summary className="flex justify-between items-center cursor-pointer font-black text-[#005a31] uppercase tracking-tight list-none">
       {q}
       <span className="text-orange-500"><HelpCircle size={20}/></span>
    </summary>
    <p className="mt-4 text-sm text-slate-500 font-medium leading-relaxed border-l-2 border-orange-200 pl-4">
      {a}
    </p>
  </details>
);

export default MontenegroVisa;