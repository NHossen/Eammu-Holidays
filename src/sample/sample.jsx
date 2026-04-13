import visaData from '@/app/data/visaguide.json';
import { createSlug } from '@/app/lib/utils';
import Link from 'next/link';

export default async function VisaDetails({ params }) {
  const { slug } = await params;

  const parts = slug.split('-visa-for-');
  const destSlug = parts[0];
  const originSlug = parts[1];

  const destinationData = visaData.find((c) => createSlug(c.country) === destSlug);
  const originData = visaData.find((c) => createSlug(c.country) === originSlug);

  if (!destinationData || !originData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center bg-slate-50">
        <h1 className="text-3xl font-black text-slate-900 mb-4">Route Intelligence Not Found</h1>
        <Link href="/visa-guide" className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold">Return to Search</Link>
      </div>
    );
  }

  const destinationName = destinationData.country;
  const originName = originData.country;
  
  const whatsappNumber = "+8801631312524";
  const message = encodeURIComponent(`Hello, I need assistance for a ${destinationName} Visa application for a ${originName} citizen. I have reviewed the document checklist.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 font-sans antialiased text-slate-900">
      
      {/* Premium Hero Header */}
      <div className="relative bg-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
          <div className="absolute top-[20%] left-[-5%] w-64 h-64 bg-indigo-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8">
            <img src={originData.flag} className="w-6 h-4 object-cover rounded-sm shadow-sm" alt="" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Protocol Verified 2026</span>
            <img src={destinationData.flag} className="w-6 h-4 object-cover rounded-sm shadow-sm" alt="" />
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1] capitalize tracking-tight">
            {destinationName} Visa <span className="text-blue-500">Checklist</span> <br />
            <span className="text-2xl md:text-3xl font-medium text-slate-500">Official Requirements for {originName} Citizens</span>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-14 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* Primary Documentation Grid */}
            <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 border-b border-slate-50 pb-8">
                <div>
                  <h2 className="text-3xl font-black tracking-tight text-slate-900">Mandatory Dossier</h2>
                  <p className="text-slate-500 font-medium">Please ensure all documents are scanned in high resolution.</p>
                </div>
                <div className="flex -space-x-2">
                   <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center text-white text-xs font-bold">✓</div>
                   <div className="w-10 h-10 rounded-full bg-slate-800 border-4 border-white flex items-center justify-center text-white text-xs font-bold">26</div>
                </div>
              </div>

              <div className="space-y-12">
                
                {/* Section: Identity & Travel History */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-6 flex items-center gap-2">
                    <span className="w-8 h-px bg-blue-600"></span> 01. Identity & Travel History
                  </h3>
                  <div className="grid gap-4">
                    <DocItem 
                      title={`Original ${originName} Passport`} 
                      desc="Current passport with minimum 6 months validity from date of entry and at least 2 blank pages." 
                    />
                    <DocItem 
                      title="Previous Travel Records" 
                      desc="Mandatory submission of all old passports if any previous visas were issued." 
                    />
                    <DocItem 
                      title={`${destinationName} Application Form`} 
                      desc="Digital form with valid QR Code. Must be typed and signed (Handwritten forms are no longer accepted for 2026 standards)." 
                    />
                  </div>
                </div>

                {/* Section: Purpose of Visit */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-6 flex items-center gap-2">
                    <span className="w-8 h-px bg-blue-600"></span> 02. Purpose of Visit
                  </h3>
                  <div className="grid gap-4">
                    <DocItem 
                      title="Visa Request / Cover Letter" 
                      desc={`Formal letter addressed to the ${destinationName} Consulate stating specific travel dates, purpose, and itinerary.`} 
                    />
                    <DocItem 
                      title="Detailed Travel Itinerary" 
                      desc={`A day-by-day breakdown of your activities in ${destinationName}, including exact addresses and contact details for each location.`} 
                    />
                    <DocItem 
                      title="Flight & Logistics" 
                      desc="Confirmed Ticket Reservation (PNR) showing round-trip flights between our departure and return." 
                    />
                    <DocItem 
                      title="Accommodation Manifest" 
                      desc={`Confirmed hotel reservations for the entire duration of stay in ${destinationName}, featuring the traveler's name as per passport.`} 
                    />
                  </div>
                </div>

                {/* Section: Professional & Financial Standing */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-6 flex items-center gap-2">
                    <span className="w-8 h-px bg-blue-600"></span> 03. Professional & Financial Standing
                  </h3>
                  <div className="grid gap-4">
                    <DocItem 
                      title="Business Credentials (If Applicable)" 
                      desc="Trade License (English Translation + Notary), Company Bank Statements, and Membership Certificates from Chambers/Associations." 
                    />
                    <DocItem 
                      title="Corporate Authorization (NOC)" 
                      desc={`Original No Objection Certificate (NOC) from the employer in ${originName} on official letterhead.`} 
                    />
                    <DocItem 
                      title="Personal Asset Verification" 
                      desc="Last 6 months personal bank statement. Must be original with official bank seal on every single page." 
                    />
                    <DocItem 
                      title="Bank Solvency Certificate" 
                      desc="Official certificate mentioning the current available balance in BDT/USD equivalent." 
                    />
                    <DocItem 
                      title="Tax Compliance (ITDR)" 
                      desc="Income Tax Deposit Receipt or Tax Return Certificates for the last 3 consecutive years." 
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Sidebar Action Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white sticky top-8 shadow-2xl overflow-hidden">
               {/* Accent decoration */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl"></div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center border border-green-500/30">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-black">Fast-Track Apply</h4>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Connect with Consultant</p>
                    </div>
                 </div>

                 <div className="space-y-4 mb-10">
                   <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                      <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Expected Lead Time</p>
                      <p className="text-lg font-bold">10 - 15 Working Days</p>
                   </div>
                   <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                      <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Submission Center</p>
                      <p className="text-lg font-bold">Embassy / VFS Global</p>
                   </div>
                 </div>

                 <a 
                   href={whatsappUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-3 w-full py-5 bg-green-600 hover:bg-green-500 text-white rounded-[1.2rem] font-black shadow-lg shadow-green-900/20 transition-all active:scale-95 group"
                 >
                   <span>Apply via WhatsApp</span>
                   <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                 </a>
                 
                 <p className="text-[10px] text-center text-slate-500 mt-8 font-bold leading-relaxed">
                   BY CLICKING APPLY, YOU AGREE TO OUR DOCUMENT VERIFICATION PROTOCOLS AND PRIVACY TERMS.
                 </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Sub-component for clean, reusable document items
function DocItem({ title, desc }) {
  return (
    <div className="group flex items-start gap-5 p-6 rounded-3xl border border-slate-50 hover:border-blue-100 hover:bg-blue-50/30 transition-all">
      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
         <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-white"></div>
      </div>
      <div>
        <h4 className="font-black text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{title}</h4>
        <p className="text-sm text-slate-500 font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}