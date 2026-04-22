import React from 'react';
import Head from 'next/head'; // Remove if using standard React

const NaeemHossen = () => {
  return (
    <>
      <Head>
        <title>Naeem Hossen | Founder & CEO of Eammu Group</title>
        <meta name="description" content="Naeem Hossen is a global visa consultant, entrepreneur, and CEO of Eammu Holidays, specializing in international tourism and IT solutions." />
        <meta name="keywords" content="Naeem Hossen, Eammu Holidays, Visa Consultant, Entrepreneur, Eammu IT Solutions" />
      </Head>

      <main className="bg-white text-gray-900 font-sans selection:bg-[#005a31] selection:text-white">
        
        {/* HERO SECTION - Premium Aesthetic */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-[#005a31] transform rotate-6 rounded-2xl opacity-10"></div>
                <img
                  src="https://i.ibb.co/jkfRFd4Z/IMG-0450.jpg"
                  alt="Naeem Hossen - Founder & CEO"
                  className="relative w-44 h-44 md:w-52 md:h-52 object-cover rounded-2xl shadow-2xl border-2 border-white"
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#005a31] tracking-tight mb-4">
                Naeem Hossen
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-gray-600 mb-6 uppercase tracking-widest">
                Founder & CEO — Eammu Group
              </p>
              <div className="w-20 h-1.5 bg-[#005a31] mb-8"></div>
              <p className="max-w-2xl text-lg md:text-xl text-gray-500 leading-relaxed">
                A visionary entrepreneur and global visa strategist specializing in 
                international immigration, digital transformation, and travel ecosystems.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION - Professional Layout */}
        <section className="py-20 border-t border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-4">
                <h2 className="text-3xl font-bold text-[#005a31] sticky top-10">
                  Professional <br /> Profile
                </h2>
              </div>
              <div className="md:col-span-8 space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-bold text-[#005a31]">Naeem Hossen</span> is the driving force behind 
                  <strong> Eammu Holidays</strong>, a premier consultancy delivering world-class visa assistance, 
                  student migration paths, and comprehensive travel solutions.
                </p>
                <p>
                  With a footprint spanning the <strong>UAE, Armenia, and South Asia</strong>, Naeem leverages 
                  deep industry insights to navigate the complexities of global mobility, helping hundreds 
                  of clients achieve their international travel and career goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE - Icons & Grid */}
        <section className="bg-[#f9fafb] py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#005a31] mb-12 text-center">Core Strategic Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Global Visa Consulting",
                "Student Migration Strategy",
                "Air Ticketing & GDS Systems",
                "Digital Branding & SEO",
                "International Logistics",
                "Corporate Event Planning"
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center space-x-4">
                  <span className="text-[#005a31] text-xl">✔</span>
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPANIES - Modern Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#005a31] mb-4">Eammu Group Portfolio</h2>
              <p className="text-gray-500">Diversified business excellence across multiple industries.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Eammu Holidays", desc: "Premium travel planning and global destination management.", icon: "🌍" },
                { name: "Eammu IT & Marketing", desc: "Next-gen web development, SEO, and digital growth strategies.", icon: "💻" },
                { name: "Eammu Event Management", desc: "Tailored corporate exhibitions and promotional events.", icon: "🎉" },
                { name: "Eammu Dairy & Poultry", desc: "Sustainable agriculture and high-quality food production.", icon: "🐄" },
                { name: "Eammu Fashion & Textile", desc: "Innovation in apparel manufacturing and lifestyle branding.", icon: "👗" },
                { name: "Flyzoo", desc: "Simplified flight booking and aviation-related technologies.", icon: "✈️" }
              ].map((company, index) => (
                <div key={index} className="group p-8 bg-white border border-gray-100 rounded-3xl hover:bg-[#005a31] transition-all duration-300">
                  <div className="text-4xl mb-4">{company.icon}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{company.name}</h3>
                  <p className="text-gray-600 group-hover:text-gray-100 transition-colors">{company.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION - High Impact */}
        <section className="bg-[#005a31] py-20">
          <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let’s Start a Conversation</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Ready to explore global opportunities? Get expert consulting for visas, 
              business growth, or international travel.
            </p>
            <a
              href="https://wa.me/8801631312524"
              className="inline-flex items-center bg-white text-[#005a31] font-bold px-10 py-4 rounded-full text-lg shadow-xl hover:scale-105 transition-transform"
            >
              Contact Naeem Hossen
            </a>
          </div>
        </section>

      </main>
    </>
  );
};

export default NaeemHossen;