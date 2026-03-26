import React, { useState, useRef, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const countries = [
  {
    name: "USA",
    description: "Tourist, Student, and Work visa services for the United States with guidance through DS-160 and I-20 support.",
    image: "https://visadone.com/wp-content/uploads/2023/02/USA-VISA.png",
    link: "/visa-services/usa-visa-application",
  },
  {
    name: "United Kingdom",
    description: "Expert support for UK Student visas, Visitor visas, and Skilled Worker routes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgBKQsFv4LdWUzfgaoMj5srhPn0vAuU9X6Q&s",
    link: "/visa-services/uk-visa-application",
  },
  {
    name: "Schengen",
    description: "Multiple Schengen countries covered under one visa – ideal for students, tourists, and job seekers.",
    image: "https://www.babaaztravels.com/wp-content/uploads/2023/05/Schengen-Visit-Visa-Requirements-Babaaz-Travels.jpeg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Canada",
    description: "We assist with SDS and Non-SDS streams, visitor visas, and work permits for Canada.",
    image: "canada_visa_from_india.webp",
    link: "/visa-services/canada-visa-application",
  },
  {
    name: "Japan",
    description: "Student and visitor visa assistance with high-quality documentation and embassy submission tips.",
    image: "https://www.babaaztravels.com/wp-content/uploads/2022/04/japan.jpg",
    link: "/visa-services/japan-visa-application",
  },
  {
    name: "Albania",
    description: "New trending destination for work and student visas. Visa documentation made easy.",
    image: "/albania_visa_from_bangladesh.webp",
    link: "/visa-services/albania-visa-application",
  },
  {
    name: "Dubai",
    description: "Tourist visas, freelance permits, and employment visas for UAE. Fast processing.",
    image: "https://canadiangeographic.ca/wp-content/uploads/2022/10/dubai-skyline-1440x1011.jpg",
    link: "/visa-services/dubai-visa-application",
  },
  {
    name: "Malaysia",
    description: "Tourist and student visa processing for Malaysia with university admission help.",
    image: "https://travelobiz.com/wp-content/uploads/2023/01/Malaysia-eVisa-with-Map.jpg",
    link: "/visa-services/malaysia-visa-application",
  },
  {
    name: "Thailand",
    description: "Seamless processing for Thailand and Singapore tourist and short-term business visas.",
    image: "https://www.tmtvisaservicephuket.com/wp-content/uploads/2024/10/Living-Or-Working-In-Thailand-Vs-Singapore-tmt-visa-service-thailand.jpg",
    link: "/visa-services/thailand-visa-application",
  },
  {
    name: "Hajj & Umrah",
    description: "Affordable and premium packages for Umrah and Hajj with all required documents and tickets.",
    image: "https://umrahtransport.com/wp-content/uploads/2025/03/how-long-is-umrah-closed-after-hajj.jpg",
    link: "/visa-services/saudi-arabia-visa-application",
  },
  {
    name: "Australia",
    description: "Student, work, and tourist visa assistance with pathways to permanent residency.",
    image: "https://www.kkday.com/en-sg/blog/wp-content/uploads/Aussie-VTL-1170x680.jpg",
    link: "/visa-services/australia-visa-application",
  },
  {
    name: "New Zealand",
    description: "Expert guidance on student, work, and visitor visas for New Zealand.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
    link: "/visa-services/new-zealand-visa-application",
  },
  {
    name: "South Korea",
    description: "Student exchange, tourist and work visa services with Korean embassy expertise.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
    link: "/visa-services/south-korea-visa-application",
  },
  {
    name: "Germany",
    description: "Work, study and tourist visa facilitation for Germany with German consulate support.",
    image: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    link: "/visa-services/germany-visa-application",
  },
  {
    name: "France",
    description: "Visa assistance for French student programs, work permits, and visitor visas.",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Netherlands",
    description: "Student visa, work visa, and tourist visa services with embassy-approved procedures.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Italy",
    description: "Comprehensive visa services for study, work, and tourism in Italy.",
    image: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Spain",
    description: "Student, work, and visitor visa services with expert documentation help.",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    link: "/visa-services/spain-visa-application",
  },
  {
    name: "Sweden",
    description: "Student and work visa assistance for Sweden’s top universities and companies.",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Norway",
    description: "Tourist, work, and study visa facilitation for Norway with personalized service.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Ireland",
    description: "Visa services for students, workers, and tourists planning to visit Ireland.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Portugal",
    description: "Student, work and travel visa support for Portugal with local expertise.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
    link: "/visa-services/portugal-visa-application",
  },
  {
    name: "Belgium",
    description: "Work, study and tourist visa services for Belgium with efficient processing.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Switzerland",
    description: "Visa guidance for Switzerland’s academic and professional opportunities.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Austria",
    description: "Comprehensive visa support for Austrian study, work, and tourist visas.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Poland",
    description: "Visa facilitation for Poland’s growing student and work visa programs.",
    image: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Czech Republic",
    description: "Work, study and tourist visa assistance for the Czech Republic.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Greece",
    description: "Tourist, study, and work visa services with Greek embassy documentation help.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Hungary",
    description: "Visa support for Hungary’s student and employment permits.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Finland",
    description: "Visa services for Finland's academic and workforce opportunities.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Denmark",
    description: "Comprehensive support for Denmark’s student, tourist, and work visas.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
    link: "/visa-services/europe-visa-application",
  },
  {
    name: "Mexico",
    description: "Tourist and business visa assistance for Mexico with streamlined processing.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    link: "/visa-services/mexico-visa-application",
  },
  {
    name: "Brazil",
    description: "Work, study, and tourist visa services for Brazil with local embassy support.",
    image: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    link: "/visa-services/brazil-visa-application",
  },
  {
    name: "Turkey",
    description: "Expert assistance for Turkey e-Visas and sticker visas for UAE residents.",
    image: "https://www.gokite.travel/wp-content/uploads/2025/01/Turkey-Visiting-Visa-Requirements-for-UAE-Residents.webp",
    link: "/visa-services/turkey-visa-application",
  },
  {
    name: "Qatar",
    description: "Hassle-free Qatar Hayya entry and tourist visa processing services.",
    image: "https://myqatarvisacheck.com/wp-content/uploads/2025/05/Qatar-e-visa-appliction-process-gudie-2025.webp",
    link: "/visa-services/qatar-visa-application",
  },
  {
    name: "Saudi Arabia",
    description: "Professional support for Saudi Tourist e-Visas, Business visas, and Family visits.",
    image: "https://www.utilities-me.com/cloud/2023/07/24/uXpUiIfF-Saudi-Arabia-visa-1200x846.jpg",
    link: "/visa-services/saudi-arabia-visa-application",
  },
  {
    name: "Armenia",
    description: "Easy e-Visa and sticker visa services for tourists and business travelers to Armenia.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
    link: "/visa-services/armenia-visa-application",
  },
  {
    name: "Georgia",
    description: "Explore the Caucasus with our streamlined Georgia e-Visa and visitor permit assistance.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
    link: "/visa-services/georgia-visa-application",
  },
  {
    name: "China",
    description: "Expert guidance for China L, M, and X visas, including appointment scheduling and document review.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    link: "/visa-services/china-visa-application",
  },
  {
    name: "Kosovo",
    description: "Specialized visa assistance for tourism and business travel to Kosovo.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo.svg",
    link: "/visa-services/kosovo-visa-application",
  },
  {
    name: "Serbia",
    description: "Comprehensive support for Serbian visitor visas and work permit applications.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg",
    link: "/visa-services/serbia-visa-application",
  },
  {
    name: "Singapore",
    description: "Fast-track entry visas for Singapore, including tourist and business social visit passes.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
    link: "/visa-services/singapore-visa-application",
  },
  {
    name: "Indonesia",
    description: "Hassle-free Bali tourist visas and B211A business visas for Indonesia.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
    link: "/visa-services/indonesia-visa-application",
  },
  {
    name: "India",
    description: "Efficient e-Visa and regular sticker visa processing for tourism, business, and medical travel to India.",
    image: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    link: "/visa-services/india-visa-application",
  },
  {
    name: "Morocco",
    description: "Professional assistance for Morocco tourist visas and e-Visa applications.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
    link: "/visa-services/morocco-visa-application",
  },
  {
    name: "South Africa",
    description: "Guided support for South African visitor visas, study permits, and work authorizations.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
    link: "/visa-services/south-africa-visa-application",
  },
  {
    name: "Azerbaijan",
    description: "Get your ASAN e-Visa for Azerbaijan quickly with our 24/7 online support.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
    link: "/visa-services/azerbaijan-visa-application",
  },
  {
    name: "Cyprus",
    description: "Visa services for the Republic of Cyprus, ideal for tourists and international students.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg",
    link: "/visa-services/cyprus-visa-application",
  },
  {
    name: "Sri Lanka",
    description: "Online ETA and tourist visa processing for your next trip to Sri Lanka.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
    link: "/visa-services/sri-lanka-visa-application",
  },
  {
    name: "Russia",
    description: "Navigating Russian tourist, business, and private visa invitations and applications.",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
    link: "/visa-services/russia-visa-application",
  },
  {
    name: "Montenegro",
    description: "Tourist and digital nomad visa assistance for the beautiful Adriatic coast of Montenegro.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg",
    link: "/visa-services/montenegro-visa-application",
  },
];

const popularRoutes = [
  { name: "USA", image: "https://visadone.com/wp-content/uploads/2023/02/USA-VISA.png" },
  { name: "UK", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgBKQsFv4LdWUzfgaoMj5srhPn0vAuU9X6Q&s" },
  { name: "Europe (Schengen)", image: "https://www.babaaztravels.com/wp-content/uploads/2023/05/Schengen-Visit-Visa-Requirements-Babaaz-Travels.jpeg" },
  { name: "Canada", image: "https://pelicanmigration.com/wp-content/uploads/2024/01/Canada-Visitor-Visa.jpg" },
  { name: "Japan", image: "https://www.babaaztravels.com/wp-content/uploads/2022/04/japan.jpg" },
   {
    name: "Saudi Arabia",
    image: "https://www.utilities-me.com/cloud/2023/07/24/uXpUiIfF-Saudi-Arabia-visa-1200x846.jpg",
  },
];


const VisaServices = () => {

  const ITEMS_PER_PAGE = 3;

  // 2. Define the images (Change these paths to your actual banners)
  const heroSlides = [
    { id: 1, image: '/flight_eammu.webp' },
    { id: 2, image: '/eammu_banner.webp' },
    { id: 3, image: '/plan_eammu.webp' },
  ];

  // 1. Declare state for carousel
  const [currentHero, setCurrentHero] = useState(0);


  // 3. Set up the timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  // Category Filtering
  const categories = {
    america: ["USA", "Canada", "Mexico", "Brazil"],
    europe: ["United Kingdom", "Albania", "Germany", "Cyprus" ,"France", "Netherlands", "Italy", "Spain", "Sweden", "Norway", "Ireland", "Portugal", "Belgium", "Switzerland", "Austria", "Poland", "Czech Republic", "Greece", "Hungary", "Finland", "Denmark"],
    asia: ["Japan", "Malaysia", "Thailand", "South Korea", "china", "Singapore", "Indonesia", "India", "Sri Lanka", "Russia"],
    middleEast: ["Dubai", "Hajj & Umrah", "Qatar", "Saudi Arabia" ,"Turkey", "Armenia", "Georgia", "Azerbaijan", "Morocco" ,"Kosovo","Serbia"],
    oceania: ["Australia", "New Zealand", "South Africa", "Montenegro"]
  };

  // Pagination State
  const [pages, setPages] = useState({ america: 1, europe: 1, asia: 1, middleEast: 1, oceania: 1 });

  // Refs for Smooth Scrolling
  const refs = {
    america: useRef(null),
    europe: useRef(null),
    asia: useRef(null),
    middleEast: useRef(null),
    oceania: useRef(null),
    popular: useRef(null)
  };

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  // Pagination Logic
  const getPaginatedData = (catKey) => {
    const list = countries.filter(c => categories[catKey].includes(c.name));
    const start = (pages[catKey] - 1) * ITEMS_PER_PAGE;
    return {
      data: list.slice(start, start + ITEMS_PER_PAGE),
      total: Math.ceil(list.length / ITEMS_PER_PAGE)
    };
  };

  const Pagination = ({ catKey }) => {
    const { total } = getPaginatedData(catKey);
    if (total <= 1) return null;
    return (
      <div className="flex justify-center items-center gap-2 mt-8">
        {[...Array(total)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPages({ ...pages, [catKey]: i + 1 })}
            className={`w-9 h-9 rounded-lg font-bold transition-all ${
              pages[catKey] === i + 1 ? "bg-[#005a31] text-white" : "border border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
  };

  

  return (
    <HelmetProvider>
      <div className="bg-gray-50 min-h-screen">
        <Helmet>
          <title> Visa Consultancy Bangladesh | Leading Travel Agency Bangladesh | Education Consultancy Dhaka</title>
          <meta name="description" content="Eammu Holidays provides expert visa services for Tourist, Student, and Work visas across USA, UK, Europe, Canada, Australia, Japan, UAE, Malaysia, and more." />
          <meta name="keywords" content="Visa services Bangladesh, USA tourist visa, UK student visa, Canada visitor visa, Europe work visa, Hajj & Umrah packages" />
          <link rel="canonical" href="https://eammu.com/visa-services" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Eammu Holidays",
              "url": "https://eammu.com",
              "logo": "https://eammu.com/images/logo.png",
              "telephone": "+8801631312524",
              "email": "info@eammu.com",
              "areaServed": countries.map(c => ({ "@type": "Country", "name": c.name })),
            })}
          </script>
        </Helmet>

     {/* --- PREMIUM HERO SECTION --- */}
<header className="relative w-full py-24 px-4 overflow-hidden min-h-[500px] flex items-center">
  
  {/* --- AUTOMATIC CAROUSEL BACKGROUND --- */}
  <div className="absolute inset-0 z-0">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentHero} // Ensure currentHero state is defined at the top of your component
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <img 
          src={heroSlides[currentHero].image} // Using the heroSlides array from your previous setup
          alt="Eammu Visa Background" 
          className="w-full h-full object-cover"
        />
      </motion.div>
    </AnimatePresence>
    
    {/* Consistent Dark Overlay */}
    <div className="absolute inset-0 bg-black/10 bg-gradient-to-b from-[#005a31]/30 to-black/60 z-10"></div>
  </div>

  {/* --- CONTENT LAYER (STAYS THE SAME) --- */}
  <div className="container mx-auto text-center relative z-20">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
      Global Visa Application Services for Tourist & Student Visas
    </h1>
    
    <p className="max-w-5xl mx-auto text-gray-100 text-lg mb-10 leading-relaxed drop-shadow-md">
      Eammu provides professional <strong className="text-white">visa application services</strong> for 
      tourist visas, student visas, and work permits in more than 25 countries including 
      Canada, UK, Australia, Europe, and the USA. Our experts guide you with documentation, 
      embassy requirements, and interview preparation to increase visa approval success.
    </p>
    
    <div className="flex flex-wrap justify-center gap-3">
      {['Asia', 'Europe', 'America', 'MiddleEast', 'Oceania', 'Popular'].map(cat => (
        <button 
          key={cat}
          onClick={() => scrollTo(refs[cat.toLowerCase()])}
          className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-[#005a31] px-6 py-2.5 rounded-full transition-all font-bold text-sm text-white"
        >
          {cat === 'MiddleEast' ? 'Middle East' : cat}
        </button>
      ))}
    </div>
  </div>
</header>

        <div className="container mx-auto px-4 py-12">
          
          {/* QUICK LINKS SECTION (From Original) */}
          <div className="bg-white p-8 rounded-3xl shadow-sm mb-16 border border-gray-100">
            <h2 className="text-center text-gray-500 font-semibold mb-6 uppercase tracking-widest text-xs">Direct Visa Application Links</h2>
            <div className="flex flex-wrap justify-center gap-2">
              <a href="/visa-services/tourist-visa-application-from-bangladesh" className="bg-[#005a31] text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-800 transition">Tourist Visa</a>
              <a href="/visa-services/student-visa-application-from-bangladesh" className="bg-[#005a31] text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-800 transition">Student Visa</a>
              <a href="/visa-services/work-visa-application-from-bangladesh" className="bg-[#005a31] text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-800 transition">Work Visa</a>
              {[ "USA", "UK", "Europe", "Canada", "Australia", "Germany", "Portugal", "Armenia", "Georgia", "Albania", "Dubai", "Qatar", "Japan", "China", "South Korea", "Spain", "Kosovo", "Serbia", "Thailand", "Singapore", "Malaysia", "Turkey" , "Indonesia" , "India" , "Saudi Arabia" , "Morocco" , "Brazil" , "South Africa" , "Azerbaijan" , "Cyprus" , "Srilanka" , "Russia" , "Montenegro" ].map((name) => (
                <Link key={name} to={`/visa-services/${name.toLowerCase().replace(' ', '-')}-visa-application`} className="px-4 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm hover:border-[#005a31] hover:text-[#005a31] transition">
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* ASIA SECTION */}
          <section ref={refs.asia} className="mb-24">
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Asia Visa Services</h2>
              <p className="text-gray-500">Fast processing for major Asian hubs</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {getPaginatedData('asia').data.map((country, i) => (
                <VisaCardItem key={i} country={country} />
              ))}
            </div>
            <Pagination catKey="asia" />
          </section>

          {/* EUROPE SECTION */}
          <section ref={refs.europe} className="mb-24">
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Europe & Schengen</h2>
              <p className="text-gray-500">Expert guidance for UK and 26+ Schengen countries</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {getPaginatedData('europe').data.map((country, i) => (
                <VisaCardItem key={i} country={country} />
              ))}
            </div>
            <Pagination catKey="europe" />
          </section>

          {/* AMERICA SECTION */}
          <section ref={refs.america} className="mb-24">
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">North & South America</h2>
              <p className="text-gray-500">Assisting with USA DS-160 and Canada SDS streams</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {getPaginatedData('america').data.map((country, i) => (
                <VisaCardItem key={i} country={country} />
              ))}
            </div>
            <Pagination catKey="america" />
          </section>

          {/* MIDDLE EAST SECTION */}
          <section ref={refs.middleeast} className="mb-24">
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Middle East & Umrah</h2>
              <p className="text-gray-500">Quick UAE tourist visas and dedicated Hajj services</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {getPaginatedData('middleEast').data.map((country, i) => (
                <VisaCardItem key={i} country={country} />
              ))}
            </div>
            <Pagination catKey="middleEast" />
          </section>

          {/* OCEANIA SECTION */}
          <section ref={refs.oceania} className="mb-24">
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Oceania Regions</h2>
              <p className="text-gray-500">Explore pathways to Australia and New Zealand</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {getPaginatedData('oceania').data.map((country, i) => (
                <VisaCardItem key={i} country={country} />
              ))}
            </div>
            <Pagination catKey="oceania" />
          </section>

          {/* POPULAR ROUTES SECTION (From Original) */}
          <section ref={refs.popular} className="mt-12 bg-gray-100 p-10 rounded-[3rem]">
            <h2 className="text-3xl font-bold text-[#005a31] text-center mb-10">Popular Routes & Best Deals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularRoutes.map((route, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-xl transition-all group border border-gray-200">
                  <img src={route.image} alt={route.name} className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{route.name}</h3>
                    <a href={`https://wa.me/8801631312524?text=Hello%2C%20I%20want%20the%20${route.name}%20visa%20deal.`} className="block w-full text-center bg-[#005a31] text-white py-3 rounded-2xl font-bold hover:bg-black transition">Get Deal Now</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* BOTTOM CTA SECTION */}
          <section className="mt-20 bg-[#005a31] text-white p-12 rounded-[3.5rem] text-center relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Visa Consultation Today</h2>
            <p className="text-green-50 max-w-2xl mx-auto mb-10 text-lg">
              End-to-end support for <strong>student, work, and tourist visas</strong>, Hajj & Umrah, and group travel. Fast, reliable, and affordable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801631312524" className="bg-white text-[#005a31] px-10 py-4 rounded-full font-bold shadow-xl hover:bg-green-50 transition">WhatsApp Consultation</a>
              <Link to="/" className="bg-transparent border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition">Back to Home</Link>
            </div>
          </section>

        </div>
      </div>
    </HelmetProvider>
  );
};

// Reusable Card Component to keep code clean
const VisaCardItem = ({ country }) => (
  <article className="bg-white shadow-sm border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group">

    {/* Image Section */}
    <div className="h-52 overflow-hidden relative">
      <img
        src={country.image}
        alt={`${country.name} visa application service`}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />

      {/* Badge */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[#005a31] text-xs font-bold shadow-sm">
        Official Service
      </div>
    </div>

    {/* Content Section */}
    <div className="p-6 flex flex-col flex-1">

      {/* SEO Heading */}
      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#005a31] transition-colors">
        {country.name} Visa Application
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
        Professional {country.name} visa application services including tourist visa,
        student visa and work permit support with complete documentation guidance
        and embassy submission assistance.
      </p>

      {/* Button */}
      <Link
        to={country.link}
        className="w-full bg-[#005a31] text-white text-center py-3.5 rounded-2xl font-bold hover:bg-black transition-all shadow-md active:scale-95"
      >
        View Visa Details
      </Link>

    </div>
  </article>

);

export default VisaServices;