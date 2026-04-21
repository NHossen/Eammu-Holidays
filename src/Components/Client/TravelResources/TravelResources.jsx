"use client"
import React, { useState } from "react";
import { 
  FileText, Download, Search, Calculator, Compass, Briefcase, 
  ShieldCheck, Banknote, ScrollText, Lightbulb, ArrowRight, 
  ExternalLink, MessageSquare, FileSearch, CheckCircle, PlusCircle,
  X, Copy, Check, Filter, Globe, Plane, CreditCard, Landmark,
  ChevronRight, Sparkles, FileEdit, ListChecks, Zap
} from "lucide-react";

const TravelResources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [copyStatus, setCopyStatus] = useState(null);
  
  const allResources = [
    { id: 1, category: "corporate", title: "Standard NOC", desc: "No Objection Certificate template for Private & Govt employees.", format: "DOCX", size: "1.2MB", icon: <Briefcase /> },
    { id: 2, category: "financial", title: "Salary Certificate", desc: "Official monthly income breakdown including house rent & medical.", format: "PDF", size: "850KB", icon: <Banknote /> },
    { id: 3, category: "legal", title: "Power of Attorney", desc: "Legal draft for visa processing via third-party agents.", format: "DOCX", size: "2.1MB", icon: <ShieldCheck /> },
    { id: 4, category: "financial", title: "Bank Statement Log", desc: "Excel sheet to track your 6-month transaction history for visas.", format: "XLSX", size: "500KB", icon: <Landmark /> },
    { id: 5, category: "visa-tools", title: "Itinerary Architect", desc: "Day-to-day activity planner designed specifically for Schengen/US visas.", format: "TOOL", size: "WEB", icon: <Compass /> },
    { id: 6, category: "corporate", title: "Trade License (English)", desc: "Translated template for business owners in Bangladesh/UAE.", format: "PDF", size: "1.5MB", icon: <FileText /> },
    { id: 7, category: "legal", title: "Affidavit of Support", desc: "Required when a sponsor is funding the traveler's expenses.", format: "DOCX", size: "1.1MB", icon: <ScrollText /> },
    { id: 8, category: "financial", title: "Tax Return (IT-10B)", desc: "Standard tax certificate format for high-net-worth applicants.", format: "PDF", size: "3.2MB", icon: <CreditCard /> },
    { id: 9, category: "visa-tools", title: "Cover Letter Master", desc: "A persuasive cover letter focusing on 'Ties to Home Country'.", format: "DOCX", size: "900KB", icon: <Plane /> },
  ];

  const aiPrompts = [
    { id: "p1", title: "The 'Ties to Home' SOP", prompt: "Write an SOP for a [Country] visa. Focus heavily on my property ownership, family business, and elderly parents in [Home Country] to prove I will return after my 15-day visit." },
    { id: "p2", title: "Corporate Trip Justifier", prompt: "Draft a formal letter from a company CEO justifying why [Employee Name] needs to attend the [Event Name] in [City], highlighting the business impact." },
    { id: "p3", title: "The 'Gap' Explainer", prompt: "Write a polite explanation for a 6-month employment gap in my CV for a visa application, focusing on personal development and skill acquisition." },
    { id: "p4", title: "Itinerary Detailer", prompt: "Create a detailed 10-day itinerary for [Country]. For each day, provide one historical site, one local restaurant, and the estimated travel time between them." },
    { id: "p5", title: "Interview Prep Bot", prompt: "Act as a Visa Officer at the [Country] Consulate. Ask me 5 tough questions about my financial standing and travel history, then critique my answers." },
  ];

  const filteredResources = allResources.filter((res) => {
    const matchesSearch = 
      res.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      res.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || res.category === activeTab;
    return matchesSearch && matchesTab;
  });

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopyStatus(id);
    setTimeout(() => setCopyStatus(null), 2000);
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans text-slate-900 selection:bg-orange-500 selection:text-white">
      
      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-24 px-6 bg-white overflow-hidden">
        {/* Soft ambient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-80 h-80 bg-amber-400/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#005a31]/8 rounded-full blur-[140px]" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-2xl mb-8 shadow-sm">
            <Sparkles size={14} className="text-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Document Architecture v3.0</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-black text-[#004d2c] leading-[0.9] tracking-tighter mb-6">
            Global <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">Travel Vault.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-14">
            Professional-grade visa templates, legal drafts, and AI-optimized prompts to ensure your application stands out to any Consulate.
          </p>

          {/* ── QUICK ACCESS TOOL CARDS ─────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            
            {/* Card 1 — Travel Document Generator */}
            <a
              href="/travel-resources/travel-document-generator"
              className="group relative bg-[#004d2c] rounded-[2.5rem] p-8 text-left overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              {/* Decorative ring */}
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full border-[20px] border-white/5 group-hover:border-white/10 transition-all duration-500" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-[12px] border-white/5" />

              <div className="relative z-10">
                {/* Icon pill */}
                <div className="inline-flex items-center gap-2 bg-amber-400 text-[#004d2c] px-4 py-2 rounded-2xl mb-6">
                  <FileEdit size={18} strokeWidth={2.5} />
                  <span className="text-xs font-black uppercase tracking-widest">AI Generator</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
                  Travel Documents<br />Generator
                </h2>

                {/* Tags note */}
                <p className="text-green-200/70 text-sm font-medium mb-2 leading-relaxed">
                  Generate professional documents instantly
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["NOC", "Salary Certificate", "SOP", "Power of Attorney"].map(tag => (
                    <span key={tag} className="bg-white/10 text-green-100 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl border border-white/10">
                      {tag}
                    </span>
                  ))}
                  <span className="bg-white/10 text-green-100 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl border border-white/10">
                    & more
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-amber-400 text-[#004d2c] px-6 py-3 rounded-2xl font-black text-sm group-hover:bg-white transition-all duration-300">
                    Generate Now <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </a>

            {/* Card 2 — Visa Checklist Generator */}
            <a
              href="/travel-resources/visa-checklist-generator"
              className="group relative bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 text-left overflow-hidden hover:scale-[1.02] hover:border-[#004d2c]/20 transition-all duration-300 shadow-sm hover:shadow-2xl"
            >
              {/* Decorative ring */}
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full border-[20px] border-slate-100 group-hover:border-[#004d2c]/10 transition-all duration-500" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-[12px] border-slate-50" />

              <div className="relative z-10">
                {/* Icon pill */}
                <div className="inline-flex items-center gap-2 bg-[#004d2c] text-white px-4 py-2 rounded-2xl mb-6">
                  <ListChecks size={18} strokeWidth={2.5} />
                  <span className="text-xs font-black uppercase tracking-widest">Smart Checklist</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-[#004d2c] leading-tight mb-3">
                  Visa Checklist<br />Generator
                </h2>

                <p className="text-slate-400 text-sm font-medium mb-2 leading-relaxed">
                  Country-specific document checklists
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Schengen", "USA", "UK", "Canada", "Australia"].map(tag => (
                    <span key={tag} className="bg-slate-50 text-[#004d2c] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-[#004d2c] group-hover:bg-amber-400 text-white group-hover:text-[#004d2c] px-6 py-3 rounded-2xl font-black text-sm transition-all duration-300">
                    Build Checklist <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* ── END QUICK ACCESS TOOL CARDS ─────────────────────────────── */}

          {/* Search Bar */}
          <div className="w-full max-w-3xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-[#005a31] rounded-[2.5rem] blur opacity-15 group-focus-within:opacity-30 transition duration-500" />
            <div className="relative bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl flex items-center">
              <div className="pl-6 text-slate-400">
                <Search size={24} />
              </div>
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by keyword (e.g. 'NOC', 'SOP', 'Bank')..." 
                className="w-full py-7 px-4 rounded-[2.5rem] outline-none text-xl font-semibold placeholder:text-slate-300 bg-transparent"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")} 
                  className="mr-4 p-2 bg-slate-50 hover:bg-amber-100 text-slate-400 hover:text-amber-600 rounded-full transition-all"
                >
                  <X size={20} />
                </button>
              )}
              <div className="pr-4 hidden sm:block">
                <div className="bg-[#005a31] text-white px-6 py-3 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg">
                  Explore
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT EXPLORER ──────────────────────────────────────────────── */}
      <div className="container mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="sticky top-10 space-y-8">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                  <Filter size={12} /> Filter Resources
                </h4>
                <nav className="flex flex-col gap-3">
                  {["all", "financial", "corporate", "legal", "visa-tools"].map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setActiveTab(cat)}
                      className={`flex items-center justify-between px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border ${
                        activeTab === cat 
                        ? 'bg-[#005a31] text-white border-[#005a31] shadow-xl' 
                        : 'bg-white text-slate-500 border-slate-100 hover:border-amber-400/50 hover:text-amber-600'
                      }`}
                    >
                      {cat.replace("-", " ")}
                      <ChevronRight size={14} className={activeTab === cat ? 'opacity-100' : 'opacity-30'} />
                    </button>
                  ))}
                </nav>
              </div>

              {/* Quick Tool Shortcuts in Sidebar */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Zap size={12} className="text-amber-500" /> Quick Tools
                </h4>
                <a
                  href="/travel-resources/travel-document-generator"
                  className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-amber-50 border border-amber-200 hover:bg-amber-400 hover:border-amber-400 group transition-all"
                >
                  <FileEdit size={16} className="text-amber-600 group-hover:text-white shrink-0" />
                  <span className="text-xs font-black uppercase tracking-tight text-amber-800 group-hover:text-white">Doc Generator</span>
                </a>
                <a
                  href="/travel-resources/visa-checklist-generator"
                  className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-[#004d2c]/5 border border-[#004d2c]/15 hover:bg-[#004d2c] group transition-all"
                >
                  <ListChecks size={16} className="text-[#005a31] group-hover:text-white shrink-0" />
                  <span className="text-xs font-black uppercase tracking-tight text-[#004d2c] group-hover:text-white">Checklist Builder</span>
                </a>
              </div>

              <div className="bg-[#004d2c] p-8 rounded-[2.5rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform duration-500"><Globe size={120} /></div>
                <h5 className="font-black text-xl mb-4 relative z-10">Bespoke Drafts</h5>
                <p className="text-sm text-green-100/60 mb-6 relative z-10 leading-relaxed">
                  Need a specialized legal letter for an unusual visa case?
                </p>
                <a 
                  href="https://wa.me/8801631312524" 
                  className="block text-center w-full py-4 bg-amber-400 text-[#004d2c] rounded-xl font-bold text-sm hover:bg-white transition-all relative z-10"
                >
                  Contact Legal Team
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-black text-[#005a31] uppercase tracking-tighter">
                {activeTab === 'all' ? 'Knowledge Base' : `${activeTab.replace("-", " ")} Documents`}
              </h2>
              <div className="bg-slate-100 px-4 py-1.5 rounded-full text-[10px] font-black text-slate-400 uppercase">
                {filteredResources.length} Results
              </div>
            </div>

            {filteredResources.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredResources.map((res) => (
                  <DocCard key={res.id} {...res} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-slate-50 rounded-[4rem] border-2 border-dashed border-slate-200">
                <FileSearch size={48} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-xl font-black text-slate-800">No matching documents</h3>
                <p className="text-slate-500 mt-2">Try searching for generic terms like "Bank" or "Letter".</p>
              </div>
            )}

            {/* AI Prompts */}
            <div className="mt-32 bg-slate-900 rounded-[4rem] p-10 lg:p-20 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none"><MessageSquare size={300} /></div>
               <div className="relative z-10">
                 <div className="mb-12">
                    <span className="text-amber-400 font-black tracking-widest uppercase text-[10px]">AI Integration</span>
                    <h2 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-6">Visa AI Scripting</h2>
                    <p className="text-slate-400 max-w-xl font-medium">Use these expert-engineered prompts with Gemini or ChatGPT to generate your travel story instantly.</p>
                 </div>
                 <div className="grid gap-6">
                    {aiPrompts.map((p) => (
                      <PromptBox 
                        key={p.id}
                        title={p.title} 
                        prompt={p.prompt} 
                        onCopy={() => handleCopy(p.prompt, p.id)}
                        isCopied={copyStatus === p.id}
                      />
                    ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTRIBUTE ────────────────────────────────────────────────────── */}
      <section className="container mx-auto max-w-7xl px-6 py-20 border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-[#005a31] leading-tight uppercase tracking-tighter">Contribute to <br /> the Vault</h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              Join our network of elite travelers. If you have a document template that secured a visa, share it with the community. 
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <ShieldCheck className="text-[#005a31] mb-3" />
                <h6 className="font-black text-sm uppercase">Verified</h6>
                <p className="text-[10px] text-slate-400 mt-1">Files are checked by admins.</p>
              </div>
              <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <CheckCircle className="text-amber-500 mb-3" />
                <h6 className="font-black text-sm uppercase">Secure</h6>
                <p className="text-[10px] text-slate-400 mt-1">Data is anonymized.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#fcfcfc] border-4 border-dashed border-slate-200 p-12 rounded-[4rem] flex flex-col items-center text-center group hover:border-amber-400/50 transition-all cursor-pointer">
            <PlusCircle size={60} className="text-slate-300 group-hover:text-amber-500 group-hover:scale-110 transition-all" />
            <h4 className="text-2xl font-black text-slate-800 mt-6 mb-2">Upload Resource</h4>
            <p className="text-slate-400 text-sm mb-8">PDF, DOCX, or XLSX (Max 10MB)</p>
            <button className="bg-[#005a31] text-white px-10 py-4 rounded-2xl font-black shadow-xl hover:bg-amber-500 transition-all active:scale-95">
              Select Document
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ────────────────────────────────────────────────────── */}
      <footer className="bg-[#005a31] text-white py-24 text-center mx-6 mb-12 rounded-[4rem]">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Zero-Stress Travel <br /> Documentation.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <a href="https://wa.me/8801631312524" className="bg-amber-400 text-[#004d2c] px-12 py-6 rounded-[2rem] font-black shadow-2xl hover:bg-white transition-all flex items-center justify-center gap-2 text-lg">
               Talk to an Expert <ArrowRight size={20} />
             </a>
             <button className="px-12 py-6 rounded-[2rem] font-black border-2 border-white/20 hover:bg-white/10 transition-all text-lg">
               Explore Eammu Holidays
             </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

// ── HELPER COMPONENTS ──────────────────────────────────────────────────────

const DocCard = ({ icon, title, desc, format, size }) => (
  <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-bl-[4rem] group-hover:bg-amber-400/10 transition-all" />
    <div className="flex justify-between items-start mb-8 relative z-10">
      <div className="w-16 h-16 bg-slate-50 text-[#005a31] rounded-2xl flex items-center justify-center group-hover:bg-[#005a31] group-hover:text-white transition-all duration-300">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <div className="text-right">
        <span className="block text-[10px] font-black text-amber-600 uppercase tracking-widest">{format}</span>
        <span className="block text-[10px] font-bold text-slate-400 mt-1">{size}</span>
      </div>
    </div>
    <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight group-hover:text-[#005a31] transition-colors">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium line-clamp-2">{desc}</p>
    <button className="w-full py-5 bg-[#f8fafc] hover:bg-amber-400 hover:text-[#004d2c] text-[#005a31] font-black rounded-2xl transition-all flex items-center justify-center gap-3 active:scale-95 border border-slate-100">
      <Download size={20} /> Download File
    </button>
  </div>
);

const PromptBox = ({ title, prompt, onCopy, isCopied }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl group hover:border-amber-400/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
    <div className="flex-1">
      <h4 className="font-black text-white uppercase tracking-tight text-lg mb-2 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-amber-400" /> {title}
      </h4>
      <p className="bg-black/20 p-6 rounded-[1.5rem] text-slate-300 text-sm font-medium leading-relaxed italic border border-white/5 group-hover:text-white transition-colors">
        "{prompt}"
      </p>
    </div>
    <button 
      onClick={onCopy}
      className={`shrink-0 flex items-center gap-2 px-6 py-4 rounded-2xl font-black text-xs transition-all ${
        isCopied ? "bg-green-500 text-white" : "bg-amber-400 text-[#004d2c] hover:bg-white hover:text-slate-900"
      }`}
    >
      {isCopied ? <><Check size={16} /> COPIED</> : <><Copy size={16} /> COPY PROMPT</>}
    </button>
  </div>
);

export default TravelResources;
