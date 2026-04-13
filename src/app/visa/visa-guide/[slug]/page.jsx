
import visaData from '@/app/data/countries.json';
import { createSlug } from '@/app/lib/utils';
import Link from 'next/link';


// 1. Dynamic Metadata Generator
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  // Parse the slug
  const parts = slug.split('-visa-for-');
  const destSlug = parts[0];
  const originSlug = parts[1];

  // Find country names
  const destination = visaData.find((c) => createSlug(c.country) === destSlug);
  const origin = visaData.find((c) => createSlug(c.country) === originSlug);

  const destName = destination?.country || 'Destination';
  const originName = origin?.country || 'Citizens';

  return {
    title: `${destName} Visa Requirements for ${originName} National | Fees & Processing 2026`,
    description: `Complete guide for ${destName} visa for ${originName} citizens. Check mandatory documents, 47x36mm photo specs, processing time (10-15 days), and embassy fees.`,
    openGraph: {
      title: `${destName} Visa Guide - ${originName} Nationals`,
      description: `Apply for ${destName} visa from ${originName}. Get expert document verification and fast-track processing.`,
      images: [destination?.flag || ''],
    },
  };
}

export default async function VisaDetails({ params }) {
  const { slug } = await params;

  const parts = slug.split('-visa-for-');
  const destSlug = parts[0];
  const originSlug = parts[1];

  const destinationData = visaData.find((c) => createSlug(c.country) === destSlug);
  const originData = visaData.find((c) => createSlug(c.country) === originSlug);

  if (!destinationData || !originData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-3xl font-black text-slate-900 mb-4">Route Intelligence Not Found</h1>
        <Link href="/visa-guide" className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold">Return to Search</Link>
      </div>
    );
  }

  const destinationName = destinationData.country;
  const originName = originData.country;
  
  const whatsappNumber = "+8801631312524";
  const message = encodeURIComponent(`Hello, I am interested in applying for a ${destinationName} Visa for ${originName} citizens. I have checked the requirements.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 font-sans antialiased text-slate-900">
      
      {/* 1. Cinematic Header */}
      <div className="relative bg-[#e9b200] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
            <img src={originData.flag} className="w-6 h-4 object-cover" alt="" />
            <span className="text-white text-[10px] font-black uppercase tracking-widest">Official Protocol</span>
            <img src={destinationData.flag} className="w-6 h-4 object-cover" alt="" />
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight capitalize">
            {destinationName} Visa <span className="text-blue-600">Requirements</span> <br />
            <span className="text-2xl md:text-3xl font-light text-slate-400">for {originName} Citizens</span>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* 2. Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Validity', value: '90-180 Days', icon: '📅' },
                { label: 'Entry', value: 'Multi-Entry', icon: '🛂' },
                { label: 'Process', value: 'High Success', icon: '⚡' },
                { label: 'Fee Est.', value: 'Check Below', icon: '💰' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 text-center hover:translate-y-[-4px] transition-transform">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1">{stat.label}</p>
                  <p className="text-sm font-bold text-slate-800">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* 3. Mandatory Documents Section - UPDATED WITH YOUR REQUIREMENTS */}
            <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h2 className="text-2xl font-black mb-10 tracking-tight underline decoration-blue-500 underline-offset-8">Mandatory Documentation Dossier</h2>
              
              <div className="space-y-8">
                {/* Category: Identity */}
                <div>
                  <h3 className="text-xs font-black uppercase text-blue-600 tracking-[0.2em] mb-4">01. Travel Identity</h3>
                  <div className="grid gap-4">
                    <DocItem title={`Original ${originName} Passport`} desc="Valid for 6+ months from entry date with 2+ blank pages." />
                    <DocItem title="Old Passports" desc="Mandatory to submit if any previous visas were issued for any country." />
                    <DocItem title={`${destinationName} Application Form`} desc="Typed digital form with QR Code (Handwritten is not accepted for 2026 standards)." />
                    <DocItem title="Standard Photography" desc="Recent 47x36mm rectangular photos with a clear white background." />
                  </div>
                </div>

                {/* Category: Logistics */}
                <div>
                  <h3 className="text-xs font-black uppercase text-blue-600 tracking-[0.2em] mb-4">02. Travel Logistics</h3>
                  <div className="grid gap-4">
                    <DocItem title="Visa Request / Cover Letter" desc={`Must state specific travel dates and purpose for visiting ${destinationName}.`} />
                    <DocItem title="Detailed Travel Itinerary" desc={`Day-by-day plan including addresses of accommodations and planned activities in ${destinationName}.`} />
                    <DocItem title="Flight Reservation" desc="Confirmed PNR for round-trip flights." />
                    <DocItem title="Hotel Manifest" desc={`Confirmed reservation details with full address and contact of stay in ${destinationName}.`} />
                  </div>
                </div>

                {/* Category: Professional */}
                <div>
                  <h3 className="text-xs font-black uppercase text-blue-600 tracking-[0.2em] mb-4">03. Professional & Financial Standing</h3>
                  <div className="grid gap-4">
                    <DocItem title="Business Credentials" desc="Trade License (English translation + Notary), Company Bank Statement, and Chamber/Association Membership." />
                    <DocItem title="NOC Certificate" desc={`Original No Objection Certificate (NOC) from your current company in ${originName}.`} />
                    <DocItem title="Personal Bank Statement" desc="Last 6 months original statement with official seal on every single page." />
                    <DocItem title="Bank Solvency Certificate" desc="Must explicitly mention current balance in BDT/USD equivalent." />
                    <DocItem title="Taxation (ITDR)" desc="Income Tax Deposit Receipt or Tax Return Certificates for the last 3 years." />
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Processing Timeline */}
            <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h2 className="text-2xl font-black mb-10 tracking-tight">Step-by-Step Process</h2>
              <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {[
                  { title: "Document Verification", body: "Our experts review your documents for embassy accuracy." },
                  { title: "Fee Submission", body: "Embassy and service fees are processed for the corridor." },
                  { title: "Embassy Interview", body: "Scheduling and preparation for your appointment." },
                  { title: "Visa Collection", body: "Passport returned with your travel authorization." }
                ].map((step, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {i + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <h4 className="font-bold text-slate-800">{step.title}</h4>
                      <p className="text-sm text-slate-500">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

             {/* 5. Country Specific FAQ */}
            <section className="bg-white p-8 md:p-14 rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)] border border-slate-100">
              <div className="flex items-center gap-4 mb-14">
                <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>
                <h2 className="text-3xl font-black tracking-tight">{destinationName} Visa FAQ</h2>
              </div>
              <div className="grid gap-6">
                <FAQItem 
                  question={`Standard processing for ${originName} citizens?`} 
                  answer={`Typically 10-15 working days, depending on embassy volume and specific ${destinationName} travel corridors.`}
                />
                <FAQItem 
                  question="Digital Photo Specifications" 
                  answer="Must be 47x36mm rectangular, white background, no facial shadows, and taken within 90 days."
                />
                <FAQItem 
                  question="Application Form Format" 
                  answer="Handwritten forms are obsolete. You must use a typed digital form with a machine-readable QR code."
                />
              </div>
            </section>

            {/* 5. Why Choose Us */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-blue-600 text-white rounded-[2rem]">
                <h3 className="text-xl font-bold mb-4">Fastest Processing</h3>
                <p className="text-blue-100 text-sm">We reduce the bureaucratic delay for {originName} citizens traveling to {destinationName}.</p>
              </div>
              <div className="p-8 bg-slate-800 text-white rounded-[2rem]">
                <h3 className="text-xl font-bold mb-4">98% Success Rate</h3>
                <p className="text-slate-400 text-sm">Our expert verification ensures your documentation is 100% compliant with embassy rules.</p>
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
          <div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-component for clean, reusable document items
function DocItem({ title, desc }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
      <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <div>
        <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
        <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div className="border border-slate-100 rounded-[2rem] overflow-hidden bg-white">
      <details className="group">
        <summary className="list-none w-full p-6 text-left flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors">
          <span className="font-bold text-slate-800 pr-4">{question}</span>
          
          {/* Custom Arrow - Rotates automatically when <details> is open */}
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-400 group-open:rotate-180 group-open:bg-blue-600 group-open:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </summary>
        
        <div className="p-6 pt-0 text-sm text-slate-500 font-medium leading-relaxed bg-slate-50/30">
          {answer}
        </div>
      </details>
    </div>
  );
}