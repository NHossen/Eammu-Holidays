
import React from "react";
import { 
  CheckCircle, Globe, ShieldCheck, FileText, Palmtree, 
  HelpCircle, Clock, Wallet, TrendingUp, PlayCircle, 
  Image as ImageIcon, ArrowRight, Phone, Mail, Check, 
  Instagram, Facebook, Menu, X
} from 'lucide-react';

const AlbaniaVisa = () => {
  return (
    <>
     

      {/* --- MAIN WRAPPER (WHITE BACKGROUND) --- */}
      <main className="bg-white min-h-screen font-sans text-slate-900 selection:bg-orange-100">
        
        {/* --- PREMIUM HERO SECTION --- */}
        <section className="relative pt-24 md:pt-32 pb-16 px-6 lg:px-12">
          {/* Soft Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-60" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl -z-10 opacity-60" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#005a31] px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-emerald-100">
                <ShieldCheck size={14} /> Official 2026 Partner
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#005a31] mb-6 leading-[1.1] tracking-tight">
                Albania Visa <br /> 
                <span className="text-[#ff6b00]">Made Simple.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
                Expert consultancy for <strong>Albania E-Visas</strong> and <strong>Work Permits</strong>. We handle the paperwork while you plan your Balkan adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://wa.me/37494810585" className="bg-[#005a31] hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center gap-3">
                  Apply via WhatsApp <ArrowRight size={20} />
                </a>
                <a href="tel:+971507078334" className="bg-white border-2 border-slate-100 hover:border-[#005a31] text-[#005a31] px-8 py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3">
                  Call Hotline
                </a>
              </div>
            </div>

            {/* Feature Image with Play Button */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200" 
                  alt="Albania Coastline" 
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
                <p className="text-[#005a31] font-black text-3xl">97%</p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- RESPONSIVE GRID BOXES --- */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <MetricBox icon={<Clock />} label="Processing" value="15-20 Days" />
            <MetricBox icon={<Wallet />} label="Work Visa" value="From €120" />
            <MetricBox icon={<TrendingUp />} label="E-Visa Success" value="97.8%" />
            <MetricBox icon={<Globe />} label="Service" value="Global/Online" />
          </div>
        </section>

        {/* --- VIDEO GALLERY (100% RESPONSIVE) --- */}
        <section className="py-24 px-6 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#005a31] uppercase tracking-tighter mb-4">Application Video Guide</h2>
              <div className="h-1.5 w-20 bg-[#ff6b00] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard id="98fSRoZIkWs" title="Avoid Rejection" desc="Essential tips to ensure your Albania visa is approved." />
              <VideoCard id="mVo9V7RR5fE" title="Dubai To Albania" desc="Step-by-step application guide for UAE residents." />
              <VideoCard id="NrSjr1GnotY" title="Fast Processing" desc="How we get results in as little as 10 working days." />
            </div>
          </div>
        </section>

 {/* --- POSTER SECTION --- */}
<section className="py-24 px-6 bg-white w-full">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-12 uppercase tracking-tighter">
      Albania <span className="text-[#ff6b00]">Programs</span>
    </h2>
    
    {/* GRID FIX: 
        We use 'w-full' and 'items-stretch' to ensure all cards 
        take up the maximum available space in the column.
    */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full items-stretch">
      <PosterCard 
        img="https://i.ytimg.com/vi/mVo9V7RR5fE/maxresdefault.jpg" 
        type="Tourist" 
        title="Type C E-Visa" 
      />
      <PosterCard 
        img="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800" 
        type="Business" 
        title="Work Permit D" 
      />
      <PosterCard 
        img="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800" 
        type="Remote" 
        title="Digital Nomad" 
      />
      <PosterCard 
        img="https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=800" 
        type="Long-term" 
        title="Residency" 
      />
    </div>
  </div>
</section>

        {/* --- CONTENT & SIDEBAR GRID --- */}
        <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-20">
            
            {/* Requirement Checklist */}
{/* --- ALBANIA VISA DOCUMENT CHECKLIST --- */}
<section className="py-20 px-6 max-w-7xl mx-auto">
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
    <div className="flex items-center gap-5">
      <div className="bg-[#005a31] p-4 rounded-[1.25rem] text-white shadow-xl shadow-emerald-100">
        <FileText size={32} />
      </div>
      <div>
        <h2 className="text-4xl font-black uppercase tracking-tight">Document Checklist</h2>
        <p className="text-slate-500 font-medium mt-1">Requirements may vary based on your nationality</p>
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* 1. IDENTITY & TRAVEL DOCS */}
    <div className="bg-[#f8fafc] p-8 rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 transition-colors">
      <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Identity & Travel</h4>
      <div className="space-y-4">
        <CheckItem text="Passport (Valid 6+ months beyond stay)" />
        <CheckItem text="National ID (Digital Scan/Copy)" />
        <CheckItem text="2 Biometric Photos (47x36mm, Rectangular)" />
        <CheckItem text="Visa Application Form (Signed)" />
      </div>
    </div>

    {/* 2. TRAVEL LOGISTICS */}
    <div className="bg-[#f8fafc] p-8 rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 transition-colors">
      <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Logistics & Itinerary</h4>
      <div className="space-y-4">
        <CheckItem text="Detailed Travel Itinerary" />
        <CheckItem text="Round-trip Flight Reservation" />
        <CheckItem text="Confirmed Hotel Booking/Address" />
        <CheckItem text="Travel Health Insurance (Min €30k)" />
      </div>
    </div>

    {/* 3. FINANCIAL & PROFESSIONAL */}
    <div className="bg-[#f8fafc] p-8 rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 transition-colors">
      <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Financial & Work</h4>
      <div className="space-y-4">
        <CheckItem text="6 Months Bank Statements" />
        <CheckItem text="Proof of Employment/Business License" />
        <CheckItem text="Proof of Ties (Family/Property/Job)" />
        <CheckItem text="SOP (Statement of Purpose) - Optional" />
      </div>
    </div>

    {/* 4. OFFICIAL CORRESPONDENCE */}
    <div className="bg-[#f8fafc] p-8 rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 transition-colors">
      <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Correspondence</h4>
      <div className="space-y-4">
        <CheckItem text="Cover Letter (Explaining visit)" />
        <CheckItem text="Appointment Scheduling Confirmation" />
        <CheckItem text="Police Clearance (For Type D)" />
        <CheckItem text="Invitation Letter (If applicable)" />
      </div>
    </div>

    {/* 5. HIGHLIGHTED WORK PERMIT SECTION */}
    <div className="bg-[#005a31] md:col-span-2 p-8 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden">
      <div className="relative z-10">
        <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Work Permit Requirements (Type D)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <CheckItem light text="Attested Employment Contract" />
          <CheckItem light text="Degree/Diploma (Notarized)" />
          <CheckItem light text="Health Certificate (Fit to Work)" />
          <CheckItem light text="Company Registration in Albania" />
        </div>
      </div>
      {/* Decorative Background Element */}
      <div className="absolute -right-10 -bottom-10 opacity-10">
        <ShieldCheck size={200} />
      </div>
    </div>
  </div>

  {/* Pro Tip Box */}
  <div className="mt-10 p-8 bg-orange-50 border border-orange-100 rounded-[2rem] flex flex-col md:flex-row items-center gap-6">
    <div className="bg-[#ff5722] text-white p-4 rounded-2xl shadow-lg shrink-0">
      <ShieldCheck size={32} />
    </div>
    <div className="text-center md:text-left">
      <p className="text-base text-slate-700 font-medium leading-relaxed">
        <strong className="text-[#005a31] font-black uppercase text-sm block mb-1">Important Note:</strong> 
        Requirements vary significantly by nationality. All documents for Work Permits must be translated into Albanian by a licensed translator. 
        Our Dubai and Cumilla offices provide certified translation and <strong>Appointment Scheduling</strong> as part of our premium package.
      </p>
    </div>
  </div>
</section>

            {/* Visa-Free Info */}
            <div className="bg-emerald-50 rounded-[2.5rem] p-8 md:p-12 border border-emerald-100">
               <h3 className="text-2xl font-black text-[#005a31] mb-6 tracking-tight uppercase">Visa-Free Entry Conditions</h3>
               <p className="text-slate-700 leading-relaxed mb-6 font-medium">You may enter Albania without a visa for up to 90 days if you hold:</p>
               <ul className="space-y-4">
                  <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-[#ff6b00] mt-1" /> <span>Valid multiple-entry <strong>Schengen, US, UK, or Canadian</strong> Visa.</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-[#ff6b00] mt-1" /> <span>A 10-year <strong>UAE Golden Visa</strong> or high-tier residency.</span></li>
               </ul>
            </div>

           {/* --- EXPANDED FAQ SECTION --- */}
<section className="py-20 px-6 max-w-7xl mx-auto">
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b-2 border-slate-100 pb-8">
    <div>
      <h3 className="text-4xl font-black text-[#005a31] uppercase tracking-tighter">Common Questions</h3>
      <p className="text-[#ff5722] font-black uppercase text-xs tracking-[0.2em] mt-2">Everything you need to know for 2026</p>
    </div>
    <div className="hidden md:block">
      <HelpCircle size={48} className="text-slate-100" />
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <FAQBox 
      q="How long is the Albania E-Visa valid for?" 
      a="Typically, a Type C E-visa allows you to stay for 90 days within a 180-day period. The validity of the visa itself (the window in which you can enter) usually ranges from 3 to 6 months depending on your profile." 
    />
    <FAQBox 
      q="Can I convert a Tourist Visa to a Work Permit inside Albania?" 
      a="Generally, no. Albania requires you to apply for a Type D (Long-stay) visa from your country of residence or the nearest consulate before arriving for work purposes. We handle this entire transition for our clients." 
    />
    <FAQBox 
      q="Is a bank statement mandatory for the E-Visa?" 
      a="Yes. You must provide a bank statement from the last 6 months showing sufficient funds to cover your stay (usually calculated at €50 per day for adults)." 
    />
    <FAQBox 
      q="Do I need to translate my documents into Albanian?" 
      a="For the E-visa (Type C), English is usually accepted. However, for Work Permits (Type D) and Residency, documents like Police Clearances and Degrees must be notarized and translated into Albanian." 
    />
    <FAQBox 
      q="What is the 'Guarantee Letter' and do I need it?" 
      a="If you are visiting a friend or business, a Guarantee Letter from an Albanian host is often required. If you are traveling as a tourist, a confirmed hotel booking and detailed itinerary usually replace this requirement." 
    />
    <FAQBox 
      q="Is Albania part of the Schengen Area?" 
      a="No, Albania is not in the Schengen Area yet. However, it follows similar visa-liberalization rules, and holding a valid Schengen visa allows you to enter Albania visa-free." 
    />
    <FAQBox 
      q="What is the Digital Nomad 'Unique Permit'?" 
      a="Introduced for remote workers, this allows you to live in Albania for up to 1 year if you can prove a monthly income of roughly €1,000 from sources outside Albania. It offers significant tax advantages." 
    />
    <FAQBox 
      q="Can Eammu Holidays help with flight and hotel bookings?" 
      a="Absolutely. As a full-service travel agency, we provide 'Visa-Purpose' flight reservations and hotel vouchers that meet the strict requirements of the Albanian immigration portal." 
    />
  </div>
</section>
          </div>

          {/* --- STICKY SIDEBAR --- */}
        {/* --- 4. SIDEBAR (EXACT MATCH) --- */}
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
             
             {/* Background Glow Effect */}
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          </div>

          {/* Bottom Card (Exact Match) */}
          <div className="mt-10 bg-[#f8fafc] border border-slate-100 rounded-[3rem] p-12 text-center flex flex-col items-center">
             <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#005a31] mb-6 border border-slate-50">
                <ShieldCheck size={32} />
             </div>
             <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] mb-2">GLOBAL IMMIGRATION</p>
             <p className="text-[#005a31] font-black italic text-2xl tracking-tighter">EAMMU HOLIDAYS</p>
          </div>
        </aside>
        </section>

      </main>
    </>
  );
};

// --- HELPER COMPONENTS (REUSABLE) ---

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
    
    {/* Image - Forced to fill the container */}
    <img 
      src={img} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
    />
    
    {/* Stronger Overlay Gradient for White Backgrounds */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#005a31] via-[#005a31]/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
    
    {/* Text Content - Always on top */}
    <div className="relative z-10 p-8 w-full">
      <span className="text-[#ff6b00] font-black text-xs uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg mb-3 inline-block">
        {type}
      </span>
      <h4 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tighter leading-[0.9]">
        {title}
      </h4>
      
      {/* Decorative Line that appears on hover */}
      <div className="w-0 group-hover:w-12 h-1 bg-[#ff6b00] mt-4 transition-all duration-500 rounded-full"></div>
    </div>
  </div>
);
// --- UPDATED CHECK ITEM FOR DARK/LIGHT MODES ---
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
    {/* The Orange accent line from image */}
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

export default AlbaniaVisa;