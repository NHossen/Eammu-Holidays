"use client";
import React from "react";
import Image from "next/image";
import { 
  CheckCircle, ClipboardList, Send, Globe, ShieldCheck, 
  FileText, Landmark, Palmtree, HelpCircle, Clock, Wallet, Info, 
  Briefcase, Coffee, MapPin, TrendingUp, PlayCircle, Image as ImageIcon
} from 'lucide-react';

const ArmeniaVisa = () => {
  return (
    <>

      <main className="min-h-screen font-sans text-slate-900">
        
        {/* Header Section (Kept green/orange as requested) */}
        <section className="bg-[#005a31] py-24 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Landmark size={500} className="text-white" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Official 2026 Policy
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    Armenia Visa Application
                </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-tight">
             Armenia Visa Application By Travel Agency
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              Fast-track E-Visa processing, Digital Nomad Registration, and the new 2026 Work Visa portal. Expert support by Eammu Holidays.
            </p>
          </div>
        </section>

        {/* --- VIDEO GALLERY --- */}
        <section className=" py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-orange-500" size={32} />
                <h2 className="text-4xl font-black text-[#005a31] uppercase">Armenia Travel Guides</h2>
              </div>
              <p className="text-gray-500 text-center max-w-2xl italic">Watch our curated selection of travel and lifestyle guides for your move to the Caucasus.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard 
                id="shPQI7ARv_I" 
                title="How to Apply for an Armenia E-Visa from Dubai: A Step-by-Step Guide" 
                desc="A glimpse into the vibrant lifestyle and hospitality of Armenia's capital."
              />
              <VideoCard 
                id="7N6Xv-9fXas" 
                title="Business in Armenia" 
                desc="How entrepreneurs are utilizing the new 2026 residency reforms."
              />
              <VideoCard 
                id="WpG_E86R_0M" 
                title="Expat Living 2026" 
                desc="Everything you need to know about safety, costs, and culture."
              />
            </div>
          </div>
        </section>

        {/* --- POSTER GALLERY --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
              <ImageIcon className="text-orange-500" size={32} />
              <h2 className="text-4xl font-black text-[#005a31] uppercase">Armenia Visa Program</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard 
                image="/plan_eammu.webp" 
                badge="Tourist" 
                title="E-Visa (21/120 Days)" 
                detail="3-5 Days Approval"
              />
              <PosterCard 
                image="/plan_eammu.webp" 
                badge="Employment" 
                title="Work Permit & Visa" 
                detail="1-Year Residency"
              />
              <PosterCard 
                image="/plan_eammu.webp" 
                badge="Expat Hub" 
                title="UAE Resident Waiver" 
                detail="Entry till July 2026"
              />
              <PosterCard 
                image="/plan_eammu.webp" 
                badge="Nomad" 
                title="Private Entrepreneur" 
                detail="Tax ID Registration"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          <div className="lg:col-span-2 space-y-24">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricBox label="E-Visa Approval" value="99.2%" icon={<TrendingUp size={20}/>} />
                <MetricBox label="E-Visa Cost" value="$7 - $35" icon={<Wallet size={20}/>} />
                <MetricBox label="Processing" value="3 Days" icon={<Clock size={20}/>} />
                <MetricBox label="Service Mode" value="100% Online" icon={<Globe size={20}/>} />
            </div>

            {/* ALERT: UAE/GCC Waiver 2026 */}
            <section className="bg-orange-50 p-8 rounded-[3rem] border-2 border-orange-200">
                <h3 className="text-2xl font-black text-[#005a31] mb-6 flex items-center gap-3 uppercase">
                    <ShieldCheck className="text-orange-500" /> 2026 Special Exemption
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  <strong>Important Update:</strong> From January 1 to July 1, 2026, residents of 113 countries holding a valid 
                  <strong> UAE, GCC, US, or EU Residence Permit</strong> can enter Armenia <strong>Visa-Free</strong> for up to 180 days. 
                  Contact us to verify your eligibility before traveling.
                </p>
            </section>
            
            {/* Armenia Work Visa Update */}
            <section>
              <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-4">
                <Briefcase size={32} className="text-orange-500" />
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Work Permits & New Work Visas</h2>
              </div>
              <p className="text-gray-600 mb-10 leading-relaxed">
                As of 2026, Armenia has introduced a dedicated <strong>Work Entry Visa (Type V)</strong>. 
                Applicants must now apply for this specific visa category before entering for employment. Transitioning from a tourist visa to a work permit within the country is no longer permitted under the new August 2026 regulations.
              </p>
              
              <div className="space-y-10">
                <StepItem number="01" title="Digital Work Portal" desc="We register your employment contract on the official 'workpermit.am' platform for government review." />
                <StepItem number="02" title="National Security Check" desc="Automated processing with the Police and NSS ensures a response within 5 working days." />
                <StepItem number="03" title="Biometric Collection" desc="Once approved, we assist with your appointment at the Migration Service in Yerevan for your biometric card." />
              </div>
            </section>

            {/* Checklist Section */}
            <section className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <FileText size={120} className="text-[#005a31]" />
              </div>
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-[#005a31] p-3 rounded-2xl text-white shadow-lg">
                  <ClipboardList size={28} />
                </div>
                <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">E-Visa Requirements</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RequirementCard text="Valid Passport (6+ Months)" />
                <RequirementCard text="High-Res Digital Photo" />
                <RequirementCard text="Confirmed Flight Details" />
                <RequirementCard text="Hotel Booking or Invitation" />
                <RequirementCard text="Valid Residence Visa (GCC/UAE)" />
                <RequirementCard text="Bank Statement (Optional)" />
              </div>
            </section>
            
            {/* FAQ Section */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <HelpCircle size={32} className="text-orange-500" />
                    <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tight">Armenia Visa FAQs</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    <FAQItem 
                        question="Which countries can enter Armenia Visa-Free?" 
                        answer="Citizens of the EU, USA, UAE, Qatar, and many others can stay visa-free for up to 180 days per year."
                    />
                    <FAQItem 
                        question="How long does the Armenia E-Visa take?" 
                        answer="Standard E-Visa processing is usually 3-5 working days. We recommend applying at least 10 days before your flight."
                    />
                    <FAQItem 
                        question="Can I apply for residency after arriving?" 
                        answer="Yes. Many of our clients arrive on a tourist visa and transition to a residency permit through business or employment while in Yerevan."
                    />
                </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-10 z-20 self-start">
            <div className="bg-[#005a31] text-white p-10 rounded-[3rem] shadow-2xl overflow-hidden relative group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 italic text-orange-400">Armenia Support</h3>
              <div className="space-y-8 text-sm">
                <ContactLink label="Yerevan HQ" href="tel:+37494810585" text="+374 94 810585" highlight />
                <ContactLink label="UAE Support" href="tel:+971507078334" text="+971 50 707 8334" />
                <ContactLink label="BD Hotline" href="tel:+8801701699743" text="+880 1701 699 743" />
                <ContactLink label="Inquiry Email" href="mailto:info@eammu.com" text="info@eammu.com" />
              </div>
              <a href="https://wa.me/37494810585" className="mt-12 block w-full bg-orange-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all duration-500 shadow-xl">
                Chat on WhatsApp
              </a>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

// --- Component Helpers ---
const VideoCard = ({ id, title, desc }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-all duration-300">
    <div className="relative aspect-video">
      <iframe className="w-full h-full border-0" src={`https://www.youtube.com/embed/${id}`} title={title} allowFullScreen></iframe>
    </div>
    <div className="p-6"><h3 className="font-black text-[#005a31] uppercase mb-2">{title}</h3><p className="text-gray-500 text-sm">{desc}</p></div>
  </div>
);
const PosterCard = ({ image, badge, title, detail }) => (
  <div className="relative rounded-3xl overflow-hidden aspect-square group cursor-pointer shadow-md" style={{ aspectRatio: '1 / 1' }}>
    <Image src={image} alt={title} fill className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 "></div>
    <div className="absolute top-4 left-4"><span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">{badge}</span></div>
    <div className="absolute bottom-6 left-6"><h3 className="text-white font-black text-xl leading-tight uppercase">{title}</h3><p className="text-orange-400 font-bold text-xs uppercase tracking-widest">{detail}</p></div>
  </div>
);

const StepItem = ({ number, title, desc }) => (
    <div className="flex gap-6 group">
      <div className="text-4xl font-black text-slate-200 group-hover:text-orange-500 transition-all duration-300 leading-none">{number}</div>
      <div className="pt-1">
        <h4 className="text-xl font-black text-[#005a31] mb-2 uppercase tracking-tight">{title}</h4>
        <p className="text-gray-500 leading-relaxed text-base">{desc}</p>
      </div>
    </div>
);

const RequirementCard = ({ text }) => (
  <div className="flex items-start gap-3 group">
    <div className="bg-orange-100 p-1 rounded-full group-hover:bg-[#005a31] transition-colors"><CheckCircle size={16} className="text-orange-600 group-hover:text-white" /></div>
    <span className="text-gray-700 font-medium text-sm leading-tight">{text}</span>
  </div>
);

const MetricBox = ({ label, value, icon }) => (
    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center">
        <div className="text-orange-500 mb-2">{icon}</div>
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{label}</span>
        <span className="text-[#005a31] font-black text-sm">{value}</span>
    </div>
);

const ContactLink = ({ label, href, text, highlight }) => (
  <div className={`flex flex-col ${highlight ? 'border-l-2 border-orange-500 pl-4' : ''}`}>
    <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">{label}</span>
    <a href={href} className="text-lg font-bold hover:text-orange-300 transition-colors">{text}</a>
  </div>
);
const FAQItem = ({ question, answer }) => (
    <div className="py-6">
        <h4 className="text-lg font-black text-[#005a31] mb-3 uppercase flex items-center gap-2"><span className="text-orange-500">Q.</span> {question}</h4>
        <p className="text-gray-600 leading-relaxed pl-6 border-l-2 border-orange-200">{answer}</p>
    </div>
);

export default ArmeniaVisa;