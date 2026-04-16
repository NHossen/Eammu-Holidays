import React from "react";
import { 
  Heart, 
  Droplets, 
  Stethoscope, 
  Users, 
  Handshake, 
  Globe, 
  ChevronRight,
  Gift
} from "lucide-react";
import EammuSocial from "@/Components/Client/EammuSocial/EammuSocial";


const EammuSocialResponsibility = () => {
  
 
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32  overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-95">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1470&q=80" 
            className="w-full h-full object-cover" 
            alt="Social Background" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-orange-400 text-sm font-bold mb-6">
            <Heart size={16} fill="currentColor" /> Serving Humanity Since Day One
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Our Commitment to <br /> <span className="text-orange-400">Social Responsibility</span>
          </h1>
          <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto leading-relaxed">
            At Eammu Group, we believe that business success is inseparable from social progress. 
            Beyond technology and travel, we are dedicated to building a healthier, more compassionate society.
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <StatBox count="500+" label="Blood Bags Donated" />
          <StatBox count="10k+" label="Free Consultations" />
          <StatBox count="50+" label="Partner NGOs" />
          <StatBox count="200+" label="Active Volunteers" />
        </div>
      </div>

      {/* Core Initiatives */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#005a31] uppercase tracking-tighter">Our Humanitarian Pillars</h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <ImpactCard 
            icon={<Droplets size={40} className="text-red-500" />}
            title="Blood Donation Camps"
            desc="Regularly organizing blood drives in collaboration with major blood banks to save lives during emergencies."
            img="https://overseasnews.in/wp-content/uploads/2019/07/Blood-Donation.png"
          />
          <ImpactCard 
            icon={<Stethoscope size={40} className="text-[#005a31]" />}
            title="Free Medical Camps"
            desc="Providing free health check-ups and basic medicines to underprivileged communities in remote areas."
            img="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
          />
          <ImpactCard 
            icon={<Users size={40} className="text-blue-500" />}
            title="Volunteering Programs"
            desc="Empowering youth and our employees to participate in social reform, disaster relief, and cleaning drives."
            img="https://www.associationsonline.com/wp-content/uploads/2022/08/amo-blog-votunteer-programs.jpg"
          />
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-black text-[#005a31]">Connected with Global & Local Organizations</h2>
            <p className="text-gray-600 leading-relaxed">
              We don't work alone. Eammu Group is proud to be affiliated with renowned NGOs and non-profit organizations 
              to maximize the impact of our social work. Our network allows us to reach those who need it most, 
              ensuring transparency and efficiency in every donation.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 font-bold text-gray-700">
                <Handshake className="text-orange-500" /> Disaster Response & Relief
              </li>
              <li className="flex items-center gap-3 font-bold text-gray-700">
                <Globe className="text-orange-500" /> Community Awareness Campaigns
              </li>
              <li className="flex items-center gap-3 font-bold text-gray-700">
                <Gift className="text-orange-500" /> Scholarship Programs for Poor Students
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1470&q=80" 
              alt="Partnership" 
              className="rounded-[3rem] shadow-2xl border-8 border-white"
            />
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-black text-[#005a31] text-center mb-12">Glimpses of Our Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <GalleryImg src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80" />
          <GalleryImg src="https://www.oceans-research.com/wp-content/uploads/2022/01/Short-term.jpg" />
          <GalleryImg src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80" />
          <GalleryImg src="https://images.unsplash.com/photo-1509059852496-f3822ae057bf?auto=format&fit=crop&w=600&q=80" />
        </div>
      </section>

       {/* Join the Movement CTA <MediaGallerySection /> */}

       <EammuSocial />

      {/* Join the Movement CTA */}
      <section className="py-20 text-center bg-white border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Want to make a difference?</h2>
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto italic">
            "We make a living by what we get, but we make a life by what we give." Join the Eammu Volunteer Network today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className=" bg-[#005a31] text-white px-10 py-4 rounded-2xl font-bold hover:bg-orange-500 transition-all shadow-xl active:scale-95">
              Register as Volunteer
            </a>
            <a href="https://wa.me/8801631312524" className=" bg-orange-50 text-orange-600 border border-orange-200 px-10 py-4 rounded-2xl font-bold hover:bg-orange-100 transition-all">
              Request Collaboration
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const StatBox = ({ count, label }) => (
  <div className="bg-white p-6 rounded-3xl shadow-xl text-center border border-slate-100 transform hover:-translate-y-2 transition-transform duration-300">
    <h3 className="text-2xl md:text-3xl font-black text-[#005a31] mb-1">{count}</h3>
    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</p>
  </div>
);

const ImpactCard = ({ icon, title, desc, img }) => (
  <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-50 hover:shadow-2xl transition-all group">
    <div className="h-56 overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    </div>
    <div className="p-8 text-center">
      <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#005a31]/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
      <button className="text-[#005a31] font-bold text-sm flex items-center gap-1 mx-auto hover:text-orange-500 transition-colors">
        Learn More <ChevronRight size={16} />
      </button>
    </div>
  </div>
);

const GalleryImg = ({ src }) => (
  <div className="overflow-hidden rounded-2xl h-48 md:h-64 shadow-md group">
    <img src={src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer" />
  </div>
);

export default EammuSocialResponsibility;
