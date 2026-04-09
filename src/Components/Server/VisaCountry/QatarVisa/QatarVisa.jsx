
import React from "react";
import { 
  CheckCircle, Globe, ShieldCheck, FileText, Palmtree, 
  HelpCircle, Clock, Wallet, TrendingUp, PlayCircle, 
  Image as ImageIcon, ArrowRight, Phone, Mail, Check, 
  Instagram, Facebook, Menu, X
} from 'lucide-react';

const QatarVisa = () => {
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
                <ShieldCheck size={14} /> Official 2026 Hayya Partner
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#005a31] mb-6 leading-[1.1] tracking-tight">
                Qatar Visa <br /> 
                <span className="text-[#ff6b00]">The Heart of Arabia.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
                Seamless processing for **GCC Resident Visas (A2)**, **Tourist E-Visas (A1)**, and **ETA Entry (A3)**. Navigate the Hayya portal with our expert 2026-compliant documentation support.
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
                  src="https://images.unsplash.com/photo-1590059134320-997f6f38c985?q=80&w=1200" 
                  alt="Doha Skyline, Qatar" 
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
                <p className="text-[#005a31] font-black text-3xl">99%</p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Hayya Approval Rate*</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- RESPONSIVE GRID BOXES --- */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <MetricBox icon={<Clock />} label="Hayya Processing" value="2-5 Working Days" />
            <MetricBox icon={<Wallet />} label="Hayya Fee" value="QAR 100 (Official)" />
            <MetricBox icon={<TrendingUp />} label="GCC Residents" value="A2 Entry Path" />
            <MetricBox icon={<Globe />} label="Stay Period" value="30 Days (Extendable)" />
          </div>
        </section>

        {/* --- VIDEO GALLERY (100% RESPONSIVE) --- */}
        <section className="py-24 px-6 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#005a31] uppercase tracking-tighter mb-4">Qatar Travel Insights</h2>
              <div className="h-1.5 w-20 bg-[#ff6b00] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard id="98fSRoZIkWs" title="Hayya Portal 2026" desc="Latest updates on applying for A1 and A2 visas online." />
              <VideoCard id="mVo9V7RR5fE" title="Mandatory Insurance" desc="How to pay the QAR 50 visitor health insurance fee." />
              <VideoCard id="NrSjr1GnotY" title="Road Trip to Qatar" desc="Crossing the Abu Samra border from UAE with Hayya." />
            </div>
          </div>
        </section>

        {/* --- POSTER SECTION --- */}
        <section className="py-24 px-6 bg-white w-full">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-12 uppercase tracking-tighter">
              Qatar <span className="text-[#ff6b00]">Visas</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full items-stretch">
              <PosterCard 
                img="https://images.unsplash.com/photo-1595123550441-d377e017de6a?q=80&w=800" 
                type="Type A2" 
                title="GCC Resident" 
              />
              <PosterCard 
                img="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800" 
                type="Type A1" 
                title="Tourist E-Visa" 
              />
              <PosterCard 
                img="https://images.unsplash.com/photo-1551041777-ed3103456385?q=80&w=800" 
                type="Type A3" 
                title="ETA (US/UK Visa)" 
              />
              <PosterCard 
                img="https://images.unsplash.com/photo-1523412556233-24751336c2e8?q=80&w=800" 
                type="Transit" 
                title="96-Hour Stopover" 
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
                  <div className="bg-[#005a31] p-4 rounded-[1.25rem] text-white shadow-xl shadow-emerald-100">
                    <FileText size={32} />
                  </div>
                  <div>
                    <h2 className="text-4xl font-black uppercase tracking-tight">Qatar Checklist</h2>
                    <p className="text-slate-500 font-medium mt-1">Digital Submission via Hayya Portal</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* 1. IDENTITY DOCS */}
                <div className="bg-[#f8fafc] p-8 rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 transition-colors">
                  <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Primary Docs</h4>
                  <div className="space-y-4">
                    <CheckItem text="Passport Scan (6+ Months)" />
                    <CheckItem text="UAE Resident Visa (3+ Months)" />
                    <CheckItem text="Clear Color Photo (White BG)" />
                    <CheckItem text="Emirates ID Copy (For A2)" />
                  </div>
                </div>

                {/* 2. LOGISTICS */}
                <div className="bg-[#f8fafc] p-8 rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 transition-colors">
                  <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Arrangements</h4>
                  <div className="space-y-4">
                    <CheckItem text="Confirmed Return Ticket" />
                    <CheckItem text="Hayya Hotel Booking (If Req)" />
                    <CheckItem text="Discover Qatar Voucher" />
                    <CheckItem text="Host Information (Optional)" />
                  </div>
                </div>

                {/* 3. MANDATORY 2026 */}
                <div className="bg-[#f8fafc] p-8 rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 transition-colors">
                  <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Entry Protection</h4>
                  <div className="space-y-4">
                    <CheckItem text="MOPH Health Insurance" />
                    <CheckItem text="QAR 50 Fixed Policy Fee" />
                    <CheckItem text="Hayya Permit QR Code" />
                    <CheckItem text="Proof of Sufficient Funds" />
                  </div>
                </div>

                {/* 4. GCC RESIDENT (A2) PRIVILEGES */}
                <div className="bg-[#005a31] md:col-span-3 p-8 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Special Note for UAE Residents (A2)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <CheckItem light text="Single Entry - 30 Days" />
                      <CheckItem light text="No NOC from Employer Needed" />
                      <CheckItem light text="Apply 2 Weeks in Advance" />
                      <CheckItem light text="Visa fee QAR 100 (Pay Online)" />
                    </div>
                  </div>
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
                    <strong className="text-[#005a31] font-black uppercase text-sm block mb-1">Critical Update April 2026:</strong> 
                    Visitors from Pakistan are currently advised to obtain a pre-approved visa through Hayya as the **Visa-on-Arrival** facility has been temporarily suspended due to regional situations. Furthermore, all non-GCC citizens must purchase 
                    the mandatory **Ministry of Public Health (MOPH)** insurance for QAR 50 via the official portal before the Hayya permit 
                    is finalized. We handle this entire payment and issuance process for you.
                  </p>
                </div>
              </div>
            </section>

            {/* Road Entry Info */}
            <div className="bg-emerald-50 rounded-[2.5rem] p-8 md:p-12 border border-emerald-100">
               <h3 className="text-2xl font-black text-[#005a31] mb-6 tracking-tight uppercase">Driving to Qatar (Hayya Move)</h3>
               <p className="text-slate-700 leading-relaxed mb-6 font-medium">If you are traveling by road through Saudi Arabia to the Abu Samra border:</p>
               <ul className="space-y-4">
                  <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-[#ff6b00] mt-1" /> <span>Ensure your Hayya Entry Permit is printed and shows "Tourist" status.</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-[#ff6b00] mt-1" /> <span>Vehicle insurance (TPL) for Qatar can be purchased online or at the border.</span></li>
               </ul>
            </div>

            {/* FAQ Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b-2 border-slate-100 pb-8">
                <div>
                  <h3 className="text-4xl font-black text-[#005a31] uppercase tracking-tighter">Common Questions</h3>
                  <p className="text-[#ff5722] font-black uppercase text-xs tracking-[0.2em] mt-2">Qatar Entry Protocol 2026</p>
                </div>
                <div className="hidden md:block">
                  <HelpCircle size={48} className="text-slate-100" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FAQBox 
                  q="Does a UAE resident still get Visa on Arrival?" 
                  a="Yes, GCC residents (A2) are eligible, but we strongly recommend applying for the Hayya Entry Permit online before travel to ensure zero delays at immigration and to pre-pay the mandatory health insurance." 
                />
                <FAQBox 
                  q="What is the A3 Visa with ETA?" 
                  a="This is for individuals who do not have a GCC residency but hold a valid visa or residency from the US, UK, Canada, Schengen, or Australia. It grants a 30-day entry permit." 
                />
                <FAQBox 
                  q="Is a hotel booking mandatory for Hayya?" 
                  a="While 70% of apps are approved without it, immigration may request a 'Discover Qatar' booking for certain nationalities. If requested, a minimum 3-night stay is required for approval." 
                />
                <FAQBox 
                  q="How much is the visitor health insurance?" 
                  a="The government-approved fixed price is QAR 50 per month. This must be paid through the Hayya portal or via approved insurance providers before the visa is issued." 
                />
                <FAQBox 
                  q="Can I extend my Qatar visit visa?" 
                  a="Standard tourist and family visit visas are usually valid for 30 days and can be extended once for an additional 30 days through the MoI website or Metrash2 app." 
                />
                <FAQBox 
                  q="What is the validity of the UAE Resident Visa for Qatar entry?" 
                  a="Your UAE Residence Visa must be valid for at least 3 months from the date you intend to enter Qatar." 
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
               <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] mb-2">GCC IMMIGRATION</p>
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

export default QatarVisa;