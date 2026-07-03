import React from "react";
import { 
  CheckCircle, Globe, ShieldCheck, FileText, Palmtree, 
  HelpCircle, Clock, Wallet, TrendingUp, PlayCircle, 
  Image as ImageIcon, ArrowRight, Phone, Mail, Check, 
  Instagram, Facebook, Menu, X, Mountain, Plane, CalendarClock,
  AlertTriangle, BadgeCheck, MapPin, Building2, Stamp, 
  ListChecks, Users, Briefcase, Hotel, Umbrella, Landmark
} from 'lucide-react';

const MontenegroVisa = () => {
  return (
    <>
      {/* --- MAIN WRAPPER (WHITE BACKGROUND) --- */}
      <main className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-100">

        {/* --- BREAKING UPDATE STRIP --- */}
        <div className="bg-[#ff5722] text-white py-3 px-6 text-center text-xs md:text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2 flex-wrap">
          <AlertTriangle size={16} className="shrink-0" />
          New 2026 Update: UAE Residents (3+ Years) Can Enter Montenegro Visa-Free — May 1 to Oct 1, 2026
        </div>
        
        {/* --- PREMIUM HERO SECTION --- */}
        <section className="relative pt-16 md:pt-24 pb-16 px-6 lg:px-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-60" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#005a31] px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-blue-100">
                <ShieldCheck size={14} /> 2026 BALKAN TRAVEL PROTOCOL
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#005a31] mb-6 leading-[1.1] tracking-tight">
                Montenegro Visa <br /> 
                <span className="text-[#ff6b00]">for UAE Residents.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-6 max-w-xl leading-relaxed font-medium">
                Complete Montenegro visa guide for 2026 — requirements, fees, processing time, embassy details, and the brand-new seasonal visa-waiver for long-term UAE residents flying direct from the UAE. From the Bay of Kotor to the peaks of Durmitor, Eammu Holidays handles your sticker visa application or waiver eligibility check end-to-end, so you can focus on planning your trip instead of paperwork.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://wa.me/37494810585" className="bg-[#005a31] hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center gap-3">
                  Apply via WhatsApp <ArrowRight size={20} />
                </a>
                <a href="tel:+971507078334" className="bg-white border-2 border-slate-100 hover:border-[#005a31] text-[#005a31] px-8 py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3">
                  Check Waiver Eligibility
                </a>
              </div>
            </div>

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
            <MetricBox icon={<Clock />} label="Processing Time" value="10-15 Working Days" />
            <MetricBox icon={<Wallet />} label="Average Cost" value="~AED 400 - 600" />
            <MetricBox icon={<TrendingUp />} label="Sticker Visa Stay" value="Up to 90 Days" />
            <MetricBox icon={<Plane />} label="UAE Waiver Stay" value="Up to 10 Days" />
          </div>
        </section>

        {/* --- ABOUT MONTENEGRO INTRO (SEO CONTENT) --- */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-black text-[#005a31] uppercase tracking-tighter mb-6">
                Why Travelers From Bangladesh & the UAE Choose Montenegro
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                Montenegro is a small Balkan nation on the Adriatic coast, wedged between Croatia, Bosnia and Herzegovina, Serbia, Kosovo, and Albania. Despite its size, it packs in dramatic fjord-like bays, medieval walled towns, and some of the most affordable luxury coastal real estate in Europe. It is currently in the process of European Union accession, which means it still offers visa-free or simplified entry routes that many EU member states no longer allow — making it an attractive short-haul destination for both leisure travelers and those exploring Schengen-adjacent travel options.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                For residents of Bangladesh, Montenegro visa applications are processed centrally through the Montenegro Embassy in Abu Dhabi, which also handles submissions from applicants based across the UAE, including Dubai, Sharjah, and the Northern Emirates. Eammu Holidays coordinates document preparation, embassy appointment booking, and application tracking so that Bangladeshi nationals and UAE residents alike can apply with confidence and avoid the common documentation errors that lead to delays or refusals.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                With the newly announced 2026 seasonal waiver for long-term UAE residents, more travelers than ever can now visit Montenegro without going through the full embassy visa process — provided they meet the specific residency, flight, and documentation conditions outlined below.
              </p>
            </div>
            <div className="bg-[#f8fafc] rounded-[2rem] p-8 border border-slate-100">
              <h3 className="text-[#005a31] font-black uppercase text-sm tracking-widest mb-5 flex items-center gap-2">
                <ListChecks size={20} className="text-[#ff6b00]" /> Quick Facts
              </h3>
              <div className="space-y-4 text-sm">
                <QuickFact label="Capital" value="Podgorica" />
                <QuickFact label="Currency" value="Euro (€)" />
                <QuickFact label="Official Language" value="Montenegrin" />
                <QuickFact label="Time Zone" value="CET (UTC+1)" />
                <QuickFact label="Embassy Location" value="Abu Dhabi, UAE" />
                <QuickFact label="Best Travel Season" value="May – October" />
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW: UAE RESIDENTS VISA-FREE UPDATE SECTION (DATA-FOCUSED) --- */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#005a31] to-[#00381e] rounded-[3rem] p-8 md:p-14 text-white relative overflow-hidden">
            <div className="absolute -right-16 -top-16 opacity-10">
              <Plane size={260} />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-white/20">
                <BadgeCheck size={14} className="text-orange-400" /> Official Seasonal Update — 2026
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight">
                Montenegro Visa-Free Entry <br className="hidden md:block" />
                <span className="text-orange-400">for Long-Term UAE Residents</span>
              </h2>
              <p className="text-white/85 font-medium leading-relaxed max-w-3xl mb-6 text-base md:text-lg">
                Montenegro has introduced a temporary, seasonal visa-waiver program for holders of foreign travel documents who have held a valid UAE residence permit continuously for at least three years. Eligible travelers can now enter Montenegro without a visa, provided they fly directly from the UAE and meet the conditions below.
              </p>
              <p className="text-white/70 font-medium leading-relaxed max-w-3xl mb-10 text-sm md:text-base">
                This announcement positions Montenegro alongside a small group of destinations offering UAE-residency-based travel privileges, similar in spirit to waiver arrangements already seen for UAE nationals and Golden Visa holders. The measure is widely viewed as an effort to boost inbound tourism from the Gulf region during the peak summer season, and it applies regardless of the traveler's nationality — the deciding factor is the length and continuity of UAE residence, not passport origin.
              </p>

              {/* Data Table: Eligibility Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <DataStatCard label="UAE Residency Required" value="3+ Years" note="Continuous, valid residence permit prior to entry" />
                <DataStatCard label="Waiver Validity Window" value="1 May – 1 Oct 2026" note="Seasonal program, fixed date range only" />
                <DataStatCard label="Maximum Stay Allowed" value="10 Days" note="Per entry, non-extendable under this waiver" />
                <DataStatCard label="Flight Requirement" value="Direct Flights Only" note="Must depart directly from the UAE to Montenegro" />
              </div>

              {/* Requirement Checklist for the waiver */}
              <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 border border-white/15 mb-8">
                <h3 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">What You Must Carry at Entry</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CheckItem light text="Passport/Travel Document (Valid)" />
                  <CheckItem light text="Proof of UAE Residence (3+ Years)" />
                  <CheckItem light text="Confirmed Hotel Booking" />
                  <CheckItem light text="Valid Travel/Health Insurance" />
                </div>
                <p className="text-white/70 text-xs font-medium mt-6 leading-relaxed">
                  Note: A "certificate of tourist arrangement" — meaning your hotel booking confirmation and travel insurance policy — must be available for inspection by border authorities on arrival. Travelers without direct flights or without proof of continuous 3-year UAE residency will not qualify under this seasonal waiver and should apply for a standard Montenegro tourist visa instead.
                </p>
              </div>

              {/* Who Qualifies / Who Doesn't table */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/95 text-slate-800 rounded-[2rem] p-7">
                  <h4 className="text-[#005a31] font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-600" /> You Likely Qualify If
                  </h4>
                  <ul className="space-y-3 text-sm font-medium">
                    <li>• You have held a UAE residence visa continuously for 3+ years</li>
                    <li>• You are booking a direct UAE-to-Montenegro flight</li>
                    <li>• Your trip falls between 1 May and 1 October 2026</li>
                    <li>• Your stay will not exceed 10 days</li>
                    <li>• You can provide hotel booking + insurance proof</li>
                  </ul>
                </div>
                <div className="bg-white/95 text-slate-800 rounded-[2rem] p-7">
                  <h4 className="text-[#005a31] font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-orange-500" /> You Should Apply for a Visa If
                  </h4>
                  <ul className="space-y-3 text-sm font-medium">
                    <li>• Your UAE residency is under 3 years old</li>
                    <li>• Your flight connects through a third country</li>
                    <li>• Your travel dates fall outside May–Oct 2026</li>
                    <li>• You plan to stay longer than 10 days</li>
                    <li>• You are traveling on a UAE visit/tourist visa, not residency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- VISA CATEGORY COMPARISON TABLE (DATA SECTION) --- */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] uppercase tracking-tighter mb-4">All Entry Routes, Compared</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">A side-by-side breakdown of every way UAE-based and Bangladeshi travelers can currently enter Montenegro in 2026.</p>
            <div className="h-1.5 w-20 bg-[#ff6b00] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-slate-100 shadow-sm">
            <table className="w-full text-sm text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-[#005a31] text-white uppercase text-xs tracking-widest">
                  <th className="p-5 font-black">Entry Route</th>
                  <th className="p-5 font-black">Eligibility</th>
                  <th className="p-5 font-black">Max Stay</th>
                  <th className="p-5 font-black">Validity Window</th>
                  <th className="p-5 font-black">Visa Needed?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <TableRow route="Standard Tourist Visa (C)" eligibility="All Bangladeshi & foreign nationals" stay="Up to 90 days / 180" window="Year-round" needed="Yes" />
                <TableRow route="Schengen/US/UK Multiple-Entry Holders" eligibility="Valid multi-entry Schengen, US, UK, or Irish visa" stay="Up to 30 days" window="Year-round" needed="No" />
                <TableRow route="UAE Nationals" eligibility="UAE passport holders" stay="Up to 90 days" window="Year-round" needed="No" />
                <TableRow route="3-Year UAE Resident Waiver (New)" eligibility="3+ years continuous UAE residence, direct flight" stay="Up to 10 days" window="1 May – 1 Oct 2026" needed="No" highlight />
                <TableRow route="Business/Commercial Visa" eligibility="Invited by Montenegrin company" stay="Up to 90 days" window="Year-round" needed="Yes" />
                <TableRow route="Transit Visa" eligibility="Connecting through Montenegro" stay="Up to 5 days" window="Year-round" needed="Case-by-case" />
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-xs font-medium mt-4 text-center">Data is provided for general guidance and reflects published requirements as of 2026. Always confirm current rules with Eammu Holidays or the Embassy before booking non-refundable travel.</p>
        </section>

        {/* --- FEE BREAKDOWN DATA SECTION --- */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#005a31] uppercase tracking-tighter mb-6 flex items-center gap-3">
                <Wallet className="text-[#ff6b00]" size={32} /> Cost Breakdown
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Total Montenegro visa cost depends on visa category, service level, and courier requirements. Below is an approximate breakdown for a standard tourist (Category C) application submitted through Eammu Holidays.
              </p>
              <div className="space-y-3">
                <FeeRow label="Embassy Visa Fee" value="~AED 190 - 250" />
                <FeeRow label="Travel Insurance (Mandatory)" value="~AED 60 - 120" />
                <FeeRow label="Service & Documentation Fee" value="~AED 100 - 180" />
                <FeeRow label="Courier / Appointment Handling" value="~AED 30 - 50" />
                <div className="flex justify-between items-center bg-[#005a31] text-white rounded-2xl px-6 py-4 mt-4 font-black">
                  <span className="uppercase text-xs tracking-widest">Estimated Total</span>
                  <span className="text-lg">AED 400 - 600</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#005a31] uppercase tracking-tighter mb-6 flex items-center gap-3">
                <CalendarClock className="text-[#ff6b00]" size={32} /> Processing Timeline
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Standard processing runs 10-15 working days from the date all documents are submitted and the embassy appointment is completed. Peak summer months (June-August) can see longer queues.
              </p>
              <div className="space-y-4">
                <TimelineStep step="1" title="Document Collection" desc="1-3 days to gather and verify your paperwork with our team" />
                <TimelineStep step="2" title="Embassy Appointment" desc="Booked in Abu Dhabi, typically within 3-7 days" />
                <TimelineStep step="3" title="Embassy Processing" desc="10-15 working days standard review period" />
                <TimelineStep step="4" title="Passport Return" desc="1-2 days for collection or courier delivery" />
              </div>
            </div>
          </div>
        </section>

        {/* --- VIDEO GALLERY --- */}
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
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-4 uppercase tracking-tighter">
              Balkan <span className="text-[#ff6b00]">Passports</span>
            </h2>
            <p className="text-slate-500 font-medium mb-12 max-w-2xl">Montenegro issues several visa categories depending on your purpose of travel. Here's a quick visual guide to the most common types.</p>
            
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
            <section>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                <div className="flex items-center gap-5">
                  <div className="bg-[#005a31] p-4 rounded-[1.25rem] text-white shadow-xl shadow-blue-100">
                    <FileText size={32} />
                  </div>
                  <div>
                    <h2 className="text-4xl font-black uppercase tracking-tight">Standard Visa Checklist</h2>
                    <p className="text-slate-500 font-medium mt-1">Montenegro Embassy Requirements 2026</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="bg-[#f8fafc] p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-colors">
                  <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Identity</h4>
                  <div className="space-y-4">
                    <CheckItem text="Passport (6M+ Valid)" />
                    <CheckItem text="UAE Visa (3M+ Valid)" />
                    <CheckItem text="2 White Background Photos" />
                    <CheckItem text="Emirates ID Copy" />
                  </div>
                </div>

                <div className="bg-[#f8fafc] p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-colors">
                  <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Financials</h4>
                  <div className="space-y-4">
                    <CheckItem text="NOC from UAE Employer" />
                    <CheckItem text="3-Month Bank Statement" />
                    <CheckItem text="Salary Certificate" />
                    <CheckItem text="Trade License (if Partner)" />
                  </div>
                </div>

                <div className="bg-[#f8fafc] p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-colors">
                  <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Travel</h4>
                  <div className="space-y-4">
                    <CheckItem text="Confirmed Hotel Booking" />
                    <CheckItem text="Round Trip Ticket" />
                    <CheckItem text="Travel Health Insurance" />
                    <CheckItem text="Detailed Travel Itinerary" />
                  </div>
                </div>

                <div className="bg-[#005a31] md:col-span-3 p-8 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-[#ff5722] font-black text-xs uppercase tracking-[0.2em] mb-6">Visa-Exempt Entry Routes 2026</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <CheckItem light text="Valid Multiple Schengen (30 Days)" />
                      <CheckItem light text="Valid Multiple US/UK (30 Days)" />
                      <CheckItem light text="UAE Nationals (90 Days)" />
                      <CheckItem light text="3-Yr UAE Resident (10 Days, May–Oct)" />
                    </div>
                  </div>
                  <div className="absolute -right-10 -bottom-10 opacity-10">
                    <Mountain size={200} />
                  </div>
                </div>
              </div>

              <div className="mt-10 p-8 bg-blue-50 border border-blue-100 rounded-[2rem] flex flex-col md:flex-row items-center gap-6">
                <div className="bg-[#ff5722] text-white p-4 rounded-2xl shadow-lg shrink-0">
                  <ShieldCheck size={32} />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-base text-slate-700 font-medium leading-relaxed">
                    <strong className="text-[#005a31] font-black uppercase text-sm block mb-1">Police Registration (24 Hours):</strong> 
                    Every foreigner is legally required to register with the local police or a tourist information office in their town of stay within 24 hours of arrival. Hotels perform this automatically, but if you are staying in private apartments (Airbnb), ensure your host completes the registration to avoid fines upon departure at the airport.
                  </p>
                </div>
              </div>
            </section>

            {/* Step by Step Application Process */}
            <section>
              <div className="flex items-center gap-5 mb-10">
                <div className="bg-[#005a31] p-4 rounded-[1.25rem] text-white shadow-xl shadow-blue-100">
                  <Stamp size={32} />
                </div>
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tight">How to Apply</h2>
                  <p className="text-slate-500 font-medium mt-1">Step-by-Step Through Eammu Holidays</p>
                </div>
              </div>
              <div className="space-y-6">
                <ProcessStep num="01" title="Free Eligibility Check" desc="Send your travel dates and residency details via WhatsApp. We confirm whether you qualify for the 2026 waiver or need a standard visa." />
                <ProcessStep num="02" title="Document Preparation" desc="Our team reviews your passport, bank statements, NOC, and insurance to ensure everything meets embassy standards before submission." />
                <ProcessStep num="03" title="Embassy Appointment" desc="We book and manage your Abu Dhabi embassy appointment slot, including submission of biometric and supporting documents." />
                <ProcessStep num="04" title="Application Tracking" desc="Get regular status updates while your application is under review — no guessing, no radio silence." />
                <ProcessStep num="05" title="Passport Collection" desc="Collect your passport with visa in hand, or have it securely couriered to your address in the UAE or Bangladesh." />
              </div>
            </section>

            {/* Application Guidelines */}
            <div className="bg-emerald-50 rounded-[2.5rem] p-8 md:p-12 border border-emerald-100">
               <h3 className="text-2xl font-black text-[#005a31] mb-6 tracking-tight uppercase">Waiver Routes: Schengen, US & UAE Residents</h3>
               <p className="text-slate-700 leading-relaxed mb-6 font-medium">Montenegro allows visa-free entry for several categories of travelers:</p>
               <ul className="space-y-4">
                  <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-[#ff6b00] mt-1 shrink-0" /> <span><strong>Schengen/US/UK Waiver:</strong> Holders of a valid multiple-entry Schengen, US, UK, or Irish visa can enter Montenegro for up to 30 days without a separate visa.</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-[#ff6b00] mt-1 shrink-0" /> <span><strong>3-Year UAE Resident Waiver (New, 2026):</strong> Holders of foreign travel documents with a continuous UAE residence permit of 3+ years can enter visa-free for up to 10 days on direct UAE-Montenegro flights, valid 1 May – 1 October 2026 only.</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-[#ff6b00] mt-1 shrink-0" /> <span><strong>Validity:</strong> The underlying visa or residence permit must remain valid for the entire duration of your stay in Montenegro.</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-[#ff6b00] mt-1 shrink-0" /> <span><strong>Passport Requirements:</strong> Your passport must be valid for at least 3 months beyond your intended exit from the country.</span></li>
               </ul>
            </div>

            {/* Common Refusal Reasons - additional data content */}
            <section>
              <div className="flex items-center gap-5 mb-10">
                <div className="bg-[#005a31] p-4 rounded-[1.25rem] text-white shadow-xl shadow-blue-100">
                  <Briefcase size={32} />
                </div>
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tight">Avoid These Common Mistakes</h2>
                  <p className="text-slate-500 font-medium mt-1">Top Reasons Montenegro Visa Applications Get Delayed</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MistakeCard title="Insufficient Bank Balance" desc="Embassies expect a clear, consistent balance history — not a single large deposit right before applying." />
                <MistakeCard title="Mismatched Itinerary Dates" desc="Hotel bookings, insurance dates, and flight tickets must all align exactly with your stated travel dates." />
                <MistakeCard title="Expired NOC or Salary Letter" desc="Employer letters older than 30 days are frequently rejected — always submit fresh documentation." />
                <MistakeCard title="Incomplete Insurance Coverage" desc="Travel insurance must meet minimum coverage thresholds and be valid for the entire trip duration, including under the new UAE resident waiver." />
              </div>
            </section>

            {/* FAQ Section */}
            <section>
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
                  q="Can UAE residents enter Montenegro without a visa in 2026?" 
                  a="Yes, seasonally. Holders of a foreign travel document with a continuous UAE residence permit of at least 3 years can enter visa-free between 1 May and 1 October 2026, for up to 10 days, provided they fly directly from the UAE and carry proof of hotel booking and travel insurance." 
                />
                <FAQBox 
                  q="Does the UAE resident waiver apply to indirect flights?" 
                  a="No. The waiver only applies to direct flights from the UAE to Montenegro. Travelers connecting through a third country should apply for a standard Montenegro visa instead." 
                />
                <FAQBox 
                  q="What documents do I need for the 10-day waiver?" 
                  a="A valid travel document, proof of at least 3 years of continuous UAE residency, a confirmed hotel booking, and valid travel/health insurance, all available for inspection at entry." 
                />
                <FAQBox 
                  q="What happens after the 10-day waiver period ends on October 1, 2026?" 
                  a="After 1 October 2026, this seasonal waiver expires and UAE residents without a qualifying Schengen, US, or UK visa will need to apply for a standard Montenegro tourist visa through the Embassy in Abu Dhabi." 
                />
                <FAQBox 
                  q="Can I extend my stay beyond 10 days under the waiver?" 
                  a="No. The seasonal waiver strictly caps stays at 10 days per entry. Travelers wishing to stay longer must apply for a standard Category C tourist visa in advance." 
                />
                <FAQBox 
                  q="Does my residency need to be with the same UAE employer for 3 years?" 
                  a="The requirement concerns continuous UAE residence permit validity, not employment with a single employer. Job changes are generally acceptable as long as your UAE residency itself remained continuous and valid." 
                />
                <FAQBox 
                  q="Do UAE Nationals need a visa for Montenegro?" 
                  a="No. UAE citizens are visa-exempt for stays up to 90 days, separate from the new 3-year residency waiver, which applies to residents holding foreign passports." 
                />
                <FAQBox 
                  q="Where is the Montenegro Embassy located?" 
                  a="The Embassy is located in Abu Dhabi. Applications for residents in Dubai and the Northern Emirates are also submitted here by appointment." 
                />
                <FAQBox 
                  q="Can I get a visa on arrival in Montenegro?" 
                  a="No. Only nationalities with bilateral agreements, holders of qualifying Schengen/US/UK visas, or eligible 3-year UAE residents under the seasonal waiver can enter without a pre-arranged visa." 
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
                  q="How many days can I stay on a standard tourist visa?" 
                  a="A standard Category C visa usually allows for a stay of up to 90 days within a 180-day period, longer than the 10-day seasonal waiver." 
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

            <div className="mt-10 bg-white border border-slate-100 rounded-[2.5rem] p-8">
              <h4 className="text-[#005a31] font-black uppercase text-xs tracking-widest mb-5 flex items-center gap-2">
                <MapPin size={16} className="text-[#ff6b00]" /> Embassy Info
              </h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-3">
                Embassy of Montenegro, Abu Dhabi, UAE — serves applicants from Dubai, Sharjah, Abu Dhabi, and all Northern Emirates by appointment.
              </p>
              <p className="text-slate-400 text-xs font-medium">Appointments recommended 2-3 weeks in advance during peak season (Jun-Aug).</p>
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

const DataStatCard = ({ label, value, note }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-[1.75rem] p-6 border border-white/15">
    <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{label}</p>
    <p className="text-white font-black text-2xl md:text-3xl tracking-tight mb-2">{value}</p>
    <p className="text-white/60 text-xs font-medium leading-relaxed">{note}</p>
  </div>
);

const QuickFact = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-slate-100 pb-3 last:border-0 last:pb-0">
    <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{label}</span>
    <span className="text-[#005a31] font-black">{value}</span>
  </div>
);

const TableRow = ({ route, eligibility, stay, window, needed, highlight }) => (
  <tr className={highlight ? "bg-orange-50" : "bg-white"}>
    <td className="p-5 font-black text-[#005a31]">{route}</td>
    <td className="p-5 text-slate-600 font-medium">{eligibility}</td>
    <td className="p-5 text-slate-600 font-medium">{stay}</td>
    <td className="p-5 text-slate-600 font-medium">{window}</td>
    <td className="p-5">
      <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${needed === "No" ? "bg-green-100 text-green-700" : needed === "Yes" ? "bg-red-100 text-red-600" : "bg-yellow-100 text-yellow-700"}`}>
        {needed}
      </span>
    </td>
  </tr>
);

const FeeRow = ({ label, value }) => (
  <div className="flex justify-between items-center bg-[#f8fafc] rounded-2xl px-6 py-4 border border-slate-100">
    <span className="text-slate-600 font-bold text-sm">{label}</span>
    <span className="text-[#005a31] font-black">{value}</span>
  </div>
);

const TimelineStep = ({ step, title, desc }) => (
  <div className="flex gap-4 items-start">
    <div className="w-10 h-10 rounded-full bg-[#005a31] text-white font-black flex items-center justify-center shrink-0 text-sm">{step}</div>
    <div>
      <p className="font-black text-[#005a31] text-sm uppercase tracking-tight">{title}</p>
      <p className="text-slate-500 text-sm font-medium mt-1">{desc}</p>
    </div>
  </div>
);

const ProcessStep = ({ num, title, desc }) => (
  <div className="flex gap-6 items-start bg-[#f8fafc] p-6 rounded-[2rem] border border-slate-100">
    <span className="text-4xl font-black text-orange-200">{num}</span>
    <div>
      <p className="font-black text-[#005a31] uppercase tracking-tight mb-1">{title}</p>
      <p className="text-slate-500 text-sm font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const MistakeCard = ({ title, desc }) => (
  <div className="bg-red-50 border border-red-100 rounded-[2rem] p-6">
    <h4 className="text-red-600 font-black uppercase text-sm tracking-tight mb-2 flex items-center gap-2">
      <AlertTriangle size={16} /> {title}
    </h4>
    <p className="text-slate-600 text-sm font-medium leading-relaxed">{desc}</p>
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