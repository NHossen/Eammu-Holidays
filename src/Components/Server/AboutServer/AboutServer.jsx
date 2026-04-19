
import AboutClient from '@/Components/Client/AboutClient/AboutClient';
import Image from 'next/image';
import Link from 'next/link';


const heroSlides = [
  {
    id: 1,
    image: "/the-love-island.webp",
    badge: "Since 2022",
    highlight: "Eammu Holidays",
    title: "Premium Travel Agency Worldwide",
    boldText: "Eammu Holidays",
    description: "is a professional global travel Agency, tourism, and Visa application services company offering visa assistance, holiday packages, and international relocation solutions.",
    subDescription: "From luxury holidays to global Travel support, Eammu Holidays connects your dreams to destinations worldwide."
  },
  {
    id: 2,
    image: "/flight_eammu.webp",
    badge: "Expert Consultancy",
    highlight: "Student Visa",
    title: "Global Education Support Services",
    boldText: "Apply with Eammu",
    description: "to secure your admission in top universities across UK, USA, Canada, and Australia with professional documentation and interview preparation.",
    subDescription: "Your journey to world-class education starts with trusted guidance from our expert consultants."
  },
  {
    id: 3,
    image: "/bangladesh_europe_couple.webp",
    badge: "Exclusive Deals",
    highlight: "Tour Packages",
    title: "Unforgettable Journeys Across Borders",
    boldText: "Explore the World",
    description: "with our custom-tailored holiday packages, from pristine beaches to historic city tours, designed for comfort and luxury.",
    subDescription: "Discover hidden gems and popular destinations with Eammu's all-inclusive tourism services."
  }
];

const stats = [
  { label: "Global Offices", val: "4+", icon: "🌍" },
  { label: "Visa Success", val: "95%", icon: "✅" },
  { label: "Years Experience", val: "3+", icon: "🚀" },
  { label: "Happy Clients", val: "10k+", icon: "🤝" },
];

const services = [
  { 
    title: "Immigration & Visa", 
    img: "/eammu-visa-services.jpg", 
    alt: "Professional visa processing services for UAE, Canada, and Europe travel and immigration",
    link: "/", 
    desc: "Expert assistance for student visas, PR, and work permits for UAE, Canada, and Europe.", 
    btn: "Explore Visa Options" 
  },
  { 
    title: "IT & Digital Marketing", 
    img: "/it-marketing-eammu.png", 
    alt: "Professional web development and digital marketing agency services for startups",
    link: "/web-development-digital-marketing", 
    desc: "Cutting-edge web development, SEO, and lead generation for global startups.", 
    btn: "Get IT Support" 
  },
  { 
    title: "Event Management", 
    img: "/event-eammu-holidays.jpeg", 
    alt: "Luxury corporate event planning and wedding management services",
    link: "/event-management", 
    desc: "Creating unforgettable corporate events and luxury weddings globally.", 
    btn: "Book Consultation" 
  },
  { 
    title: "Fashion & Lifestyle", 
    img: "/eammu-fashion.jpeg", 
    alt: "Premium apparel collection featuring traditional and modern fashion styles",
    link: "/eammu-fashion", 
    desc: "Premium apparel blending traditional Bangladeshi craft with Dubai style.", 
    btn: "Shop Collection" 
  },
  { 
    title: "Dairy & Agro", 
    img: "/eammu-dairy-farm.avif", 
    alt: "Sustainable organic dairy farming and agricultural produce",
    link: "/eammu-dairy-poultry", 
    desc: "Ethical and sustainable farming providing fresh organic produce.", 
    btn: "Order Fresh" 
  },
  { 
    title: "Textile & Industry", 
    img: "/eammu-textile.jpg", 
    alt: "Eco-friendly textile manufacturing and premium fabric production",
    link: "/eammu-textile-bangladesh", 
    desc: "Sustainable manufacturing of premium fabrics and eco-friendly garments.", 
    btn: "Bulk Inquiry" 
  },
];

const faqs = [
  { question: "Why Travel With Eammu Holidays?", answer: "With years of international experience, we provide ethical, transparent, and comprehensive visa solutions." },
  { question: "Customer Help 24/7", answer: "Our support team is available via WhatsApp and email around the clock." },
  { question: "What Can Eammu Holidays Offer?", answer: "From student visa processing to luxury holiday packages and industrial manufacturing." },
  { question: "Benefits Of Choosing Eammu?", answer: "Choosing us means choosing transparency with a 95% visa success rate." },
];

export default function AboutServer() {
  return (
    <>
    <AboutClient 
  heroSlides={heroSlides} 
      stats={stats} 
      services={services} 
      faqs={faqs} 
  />

    </>
  
  );
}