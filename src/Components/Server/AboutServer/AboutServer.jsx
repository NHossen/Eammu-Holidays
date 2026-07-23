import AboutClient from '@/Components/Client/AboutClient/AboutClient';

const heroSlides = [
  {
    id: 1,
    image: "/the-love-island.webp",
    badge: "Since 2012",
    highlight: "Eammu Holidays",
    title: "Trusted Travel & Visa Agency — Bangladesh, Dubai & Worldwide",
    boldText: "Eammu Holidays",
    description:
      "is a professional global travel agency offering visa assistance, student visa consultancy, Umrah packages, holiday tours, and international relocation from Bangladesh, Dubai, UAE, Armenia & Georgia.",
    subDescription:
      "From luxury holidays to global immigration support, Eammu Holidays connects your dreams to destinations worldwide with a 95% visa success rate.",
  },
  {
    id: 2,
    image: "/flight_eammu.webp",
    badge: "Expert Visa Consultancy",
    highlight: "Student Visa",
    title: "UK, USA, Canada & Australia Education Visa Support",
    boldText: "Apply with Eammu",
    description:
      "to secure your university admission in top institutions across the UK, USA, Canada, and Australia with professional documentation, SOP writing, and interview preparation.",
    subDescription:
      "Your journey to world-class education starts with trusted guidance from our certified visa consultants in Bangladesh.",
  },
  {
    id: 3,
    image: "/bangladesh_europe_couple.webp",
    badge: "Exclusive Deals",
    highlight: "Holiday Tour Packages",
    title: "Unforgettable Journeys Across Borders",
    boldText: "Explore the World",
    description:
      "with our custom-tailored holiday packages including Europe tours, Umrah packages, Cox's Bazar trips, and Middle East getaways designed for comfort and luxury.",
    subDescription:
      "Discover hidden gems and popular destinations with Eammu's all-inclusive tourism services from Bangladesh.",
  },
];

const stats = [
  { label: "Global Offices", val: "4+", icon: "🌍" },
  { label: "Visa Success Rate", val: "95%", icon: "✅" },
  { label: "Years Experience", val: "3+", icon: "🚀" },
  { label: "Happy Clients", val: "10k+", icon: "🤝" },
];

const services = [
  {
    title: "Immigration & Visa Consultancy",
    img: "/eammu-visa-services.jpg",
    alt: "Professional visa and immigration consultancy services Bangladesh – student visa, work permit, tourist visa",
    link: "/",
    desc: "Expert assistance for student visas, PR, tourist visas, and work permits for UAE, Canada, UK, and Europe. 95% success rate.",
    btn: "Explore Visa Options",
  },
  {
    title: "IT & Digital Marketing",
    img: "/it-marketing-eammu.png",
    alt: "Web development and digital marketing agency services Bangladesh – SEO, lead generation",
    link: "/web-development-digital-marketing",
    desc: "Cutting-edge web development, SEO, and lead generation for global startups and businesses.",
    btn: "Get IT Support",
  },
  {
    title: "Event Management",
    img: "/event-eammu-holidays.jpeg",
    alt: "Luxury corporate event planning and wedding management services Bangladesh and Dubai",
    link: "/event-management",
    desc: "Creating unforgettable corporate events, conferences, and luxury weddings globally.",
    btn: "Book Consultation",
  },
  {
    title: "Fashion & Lifestyle",
    img: "/eammu-fashion.jpeg",
    alt: "Premium apparel collection – traditional and modern fashion styles Bangladesh and Dubai",
    link: "/eammu-fashion",
    desc: "Premium apparel blending traditional Bangladeshi craft with contemporary Dubai style.",
    btn: "Shop Collection",
  },
  {
    title: "Dairy & Agro",
    img: "/eammu-dairy-farm.avif",
    alt: "Sustainable organic dairy farming and agricultural produce Bangladesh",
    link: "/eammu-dairy-poultry",
    desc: "Ethical and sustainable farming providing fresh organic produce across Bangladesh.",
    btn: "Order Fresh",
  },
  {
    title: "Textile & Industry",
    img: "/eammu-textile.jpg",
    alt: "Eco-friendly textile manufacturing and premium fabric production Bangladesh",
    link: "/eammu-textile-bangladesh",
    desc: "Sustainable manufacturing of premium fabrics and eco-friendly garments for global export.",
    btn: "Bulk Inquiry",
  },
];

const faqs = [
  {
    question: "Why travel with Eammu Holidays?",
    answer:
      "With 3+ years of international experience and offices in Bangladesh, Dubai, Armenia, and Georgia, we provide ethical, transparent, and comprehensive visa and travel solutions. Our 95% visa success rate speaks for itself.",
  },
  {
    question: "Does Eammu Holidays offer 24/7 customer support?",
    answer:
      "Yes. Our support team is available 24/7 via WhatsApp (+971507078334) and email (info@eammu.com) to assist with visa applications, tour bookings, and any travel queries.",
  },
  {
    question: "What services does Eammu Holidays offer?",
    answer:
      "We offer student visa processing (UK, USA, Canada, Australia), Umrah packages, holiday tour packages, immigration consulting, work permit assistance, event management, IT & digital marketing, fashion, dairy & agro, and textile services.",
  },
  {
    question: "What is Eammu Holidays' visa success rate?",
    answer:
      "Eammu Holidays maintains a 95% visa success rate across all categories including student visas, tourist visas, and work permits — one of the highest among Bangladesh travel agencies.",
  },
  {
    question: "Which countries does Eammu Holidays serve?",
    answer:
      "We serve clients from Bangladesh, UAE, Armenia, Georgia, UK, Canada, USA, and Australia. Our offices in Dhaka, Dubai, Yerevan, and Tbilisi ensure local support wherever you are.",
  },
  {
    question: "How do I apply for a student visa through Eammu Holidays?",
    answer:
      "Simply contact us via WhatsApp or email. Our certified consultants will assess your profile, guide you through documentation, SOP writing, and interview preparation for UK, USA, Canada, or Australia.",
  },
];

const trustBadges = [
  { label: "Licensed Travel Agency", icon: "🏛️" },
  { label: "IATA Affiliated", icon: "✈️" },
  { label: "Certified Visa Consultants", icon: "📋" },
  { label: "10,000+ Happy Travelers", icon: "🌟" },
];

const officeLocations = [
  { city: "Dhaka", country: "Bangladesh", flag: "🇧🇩", phone: "+971507078334" },
  { city: "Dubai", country: "UAE", flag: "🇦🇪", phone: "+971507078334" },
  { city: "Yerevan", country: "Armenia", flag: "🇦🇲", phone: "+8801701699743" },
  { city: "Tbilisi", country: "Georgia", flag: "🇬🇪", phone: "+8801701699743" },
];

export default function AboutServer() {
  return (
    <AboutClient
      heroSlides={heroSlides}
      stats={stats}
      services={services}
      faqs={faqs}
      trustBadges={trustBadges}
      officeLocations={officeLocations}
    />
  );
}