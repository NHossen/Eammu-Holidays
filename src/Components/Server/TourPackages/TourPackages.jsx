// TourPackages.jsx
// IMPORTANT: No 'use client' here. This is a Server Component for maximum SEO Indexing.

import Image from 'next/image';

export default function TourPackages() {
  const packages = [
    {
      id: 1,
      title: "EURO TRIO",
      subtitle: "ATHENS, PARIS & AMSTERDAM",
      description: "Discover Greece's golden horizons, France's iconic romance, and the Netherlands' picturesque canals in a seamless European adventure.",
      price: "8,199",
      validity: "20th November 2026",
      image: "/the-love-island.webp", 
      badge: "Hop-on Hop-off Bus Ticket Included",
      appointment: "Within 3-4 Weeks",
      badgeColor: "bg-purple-600"
    },
    {
      id: 2,
      title: "BEST OF EGYPT",
      subtitle: "CAIRO, SHARM EL SHEIKH, LUXOR",
      description: "A popular Trio! Cairo offers ancient wonders, Sharm el Sheikh captivates with its beaches, and Luxor shines with its historical sites.",
      price: "8,199",
      validity: "20th November 2026",
      image: "/desert_kamel_egypt.jpg",
      badge: "Breakfast Included",
      appointment: "Within 3-4 Weeks",
      badgeColor: "bg-blue-500"
    },
    {
      id: 3,
      title: "SWISS ESCAPE WITH SWISS PASS",
      subtitle: "LUCERNE & ZURICH",
      description: "From storybook bridges in Lucerne to Zurich's sleek sophistication — Switzerland at its finest with an included Swiss Pass.",
      price: "9,999",
      validity: "20th November 2026",
      image: "/russia-header.jpg",
      badge: "Breakfast Included",
      appointment: "Within 2-3 Weeks",
      badgeColor: "bg-blue-500"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 font-sans">
         {/* Header Section */}
        <div className="mb-16 text-left border-l-[10px] border-[#005a31] pl-8">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            Exclusive Holiday Packages
          </h2>
          <p className="text-slate-500 font-medium mt-4 max-w-2xl leading-relaxed">
            Eammu Holidays provides guaranteed <strong>Schengen visa appointments</strong> within weeks. 
          Book your dream 2026 European tour from the <strong className="text-[#005a31]">best travel agency in Bangladesh and UAE</strong>.
          </p>
        </div>


      {/* PACKAGE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {packages.map((pkg) => (
          <article key={pkg.id} className="relative bg-[#005a31] rounded-lg overflow-hidden flex flex-col shadow-2xl">
            
            {/* TOP BADGE (Breakfast/Bus) */}
            <div className={`absolute top-0 left-0 ${pkg.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-br-lg z-20 flex items-center gap-1`}>
              <span>{pkg.badge.includes('Breakfast') ? '🍴' : '🚌'}</span>
              {pkg.badge}
            </div>

            {/* IMAGE AREA */}
            <div className="relative h-64 overflow-hidden">
              <Image 
                src={pkg.image} 
                alt={`${pkg.title} - ${pkg.subtitle} Tour Package 2026`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* SCHENGEN GUARANTEE STICKER */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full px-4 text-center">
                <div className="inline-block bg-gradient-to-r from-pink-600 to-orange-500 text-white rounded-full py-2 px-6 shadow-lg transform -rotate-2 border-2 border-white/20">
                  <p className="text-[10px] font-bold uppercase tracking-tighter leading-none">Guaranteed Schengen Appointment</p>
                  <p className="text-xs font-black italic">Within {pkg.appointment}</p>
                </div>
              </div>
            </div>

            {/* CONTENT AREA */}
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-[#facc15] text-xl font-black mb-1 tracking-wide">{pkg.title}</h3>
              <h4 className="text-white text-xs font-bold mb-4 tracking-widest opacity-90 uppercase italic">{pkg.subtitle}</h4>
              
              {/* VALIDITY BADGE */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded px-2 py-1 mb-4 self-start">
                <span className="text-cyan-400 text-xs">🛡️</span>
                <p className="text-white text-[10px] font-bold uppercase">Travel Validity: {pkg.validity}</p>
              </div>

              {/* DESCRIPTION - SEO P TAG */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                {pkg.description}
              </p>

              {/* PRICE AND CTA */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                <div>
                  <span className="text-white text-[10px] font-bold uppercase block opacity-70">Starting From</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white text-xs font-bold uppercase tracking-tighter">AED</span>
                    <span className="text-white text-3xl font-black tracking-tighter leading-none">{pkg.price}</span>
                  </div>
                </div>
                
                <button className="bg-[#facc15] hover:bg-yellow-500 text-gray-900 font-black px-6 py-3 rounded transition-colors uppercase text-sm shadow-lg">
                  Get Deal
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* VIEW ALL DEALS CTA */}
      <div className="flex flex-col items-center justify-center gap-4 mb-20">
        <a 
          href="/all-tour-packages" 
          className="inline-flex items-center justify-center px-10 border-2 border-[#005a31] text-[#005a31] font-black rounded-full hover:bg-[#005a31] hover:text-white transition-all duration-300 uppercase tracking-widest text-sm shadow-sm"
        >
          View All Tour Deals
        </a>
        <p className="text-sm text-gray-500 font-medium italic">
          Discover 50+ more exclusive destinations across Europe, Asia, and Africa.
        </p>
      </div>
    </section>
  );
}