import Link from "next/link";

const VISA_GUIDES = [
  {
    label: "Tourist Visa",
    slug: "tourist-visa",
    icon: "✈️",
    color: "#0057FF",
    description: "Leisure travel visas for Bangladeshi passport holders",
    href: "/our-services/visa-services/tourist-visa-from-bangladesh",
    links: [
      { label: "Dubai Visa Application", href: "/our-services/visa/dubai-visa-application" },
      { label: "Malaysia Visa Application", href: "/our-services/visa/malaysia-visa-application" },
      { label: "Thailand Visa Application", href: "/our-services/visa/thailand-visa-application" },
      { label: "Singapore Visa Application", href: "/our-services/visa/singapore-visa-application" },
      { label: "Turkey Visa Application", href: "/our-services/visa/turkey-visa-application" },
      { label: "Georgia Visa Application", href: "/our-services/visa/georgia-visa-application" },
      { label: "Armenia Visa Application", href: "/our-services/visa/armenia-visa-application" },
      { label: "Albania Visa Application", href: "/our-services/visa/albania-visa-application" },
      { label: "Indonesia Visa Application", href: "/our-services/visa/indonesia-visa-application" },
      { label: "Sri Lanka Visa Application", href: "/our-services/visa/srilanka-visa-application" },
      { label: "All Visa Services", href: "/our-services/visa-services" },
    ],
  },
  {
    label: "Student Visa",
    slug: "student-visa",
    icon: "🎓",
    color: "#7C3AED",
    description: "Study abroad visa guidance from Bangladesh",
    href: "/our-services/visa-services/student-visa-from-bangladesh",
    links: [
      { label: "USA Student Visa", href: "/study-abroad/student-visa/united-states" },
      { label: "UK Student Visa", href: "/study-abroad/student-visa/united-kingdom" },
      { label: "Canada Student Visa", href: "/study-abroad/student-visa/canada" },
      { label: "Australia Student Visa", href: "/study-abroad/student-visa/australia" },
      { label: "Germany Student Visa", href: "/study-abroad/student-visa/germany" },
      { label: "Japan Student Visa", href: "/study-abroad/student-visa/japan" },
      { label: "South Korea Student Visa", href: "/study-abroad/student-visa/south-korea" },
      { label: "Malaysia Student Visa", href: "/study-abroad/student-visa/malaysia" },
      { label: "Albania Student Visa", href: "/study-abroad/student-visa/albania" },
      { label: "Andorra Student Visa", href: "/study-abroad/student-visa/andorra" },
      { label: "All Student Visas", href: "/study-abroad/student-visa" },
    ],
  },
  {
    label: "Work Visa",
    slug: "work-visa",
    icon: "💼",
    color: "#059669",
    description: "Employment visa guidance for Bangladeshi professionals abroad",
    href: "/our-services/visa-services/work-visa-from-bangladesh",
    links: [
      { label: "Saudi Arabia Work Visa", href: "/our-services/visa/saudi-arabia-visa-application" },
      { label: "Qatar Work Visa", href: "/our-services/visa/qatar-visa-application" },
      { label: "Dubai / UAE Work Visa", href: "/our-services/visa/dubai-visa-application" },
      { label: "Malaysia Work Visa", href: "/our-services/visa/malaysia-visa-application" },
      { label: "All Work Visa Services", href: "/our-services/visa-services/work-visa-from-bangladesh" },
    ],
  },
  {
    label: "E-Visa",
    slug: "e-visa",
    icon: "🌐",
    color: "#2563eb",
    description: "Electronic visa processing and requirements for international travel",
    href: "/visa/e-visa",
    links: [
      { label: "Bangladesh to Albania E-Visa", href: "/visa-checker/bangladesh-visa-for-albania/e-visa" },
      { label: "India to Albania E-Visa", href: "/visa-checker/india-visa-for-albania/e-visa" },
      { label: "Bangladesh to Malaysia E-Visa", href: "/visa-checker/bangladesh-visa-for-malaysia/e-visa" },
      { label: "India to Malaysia E-Visa", href: "/visa-checker/india-visa-for-malaysia/e-visa" },
      { label: "Bangladesh to Singapore E-Visa", href: "/visa-checker/bangladesh-visa-for-singapore/e-visa" },
      { label: "India to Singapore E-Visa", href: "/visa-checker/india-visa-for-singapore/e-visa" },
      { label: "Egypt to Armenia E-Visa", href: "/visa-checker/egypt-visa-for-armenia/e-visa" },
      { label: "India to Armenia E-Visa", href: "/visa-checker/india-visa-for-armenia/e-visa" },
      { label: "Bangladesh to Nigeria E-Visa", href: "/visa-checker/bangladesh-visa-for-nigeria/e-visa" },
      { label: "Sri Lanka to Albania E-Visa", href: "/visa-checker/sri-lanka-visa-for-albania/e-visa" },
      { label: "All E-Visa Guides", href: "/visa/e-visa" },
    ],
  },
  {
    label: "Europe Visa",
    slug: "europe-visa",
    icon: "🇪🇺",
    color: "#DC2626",
    description: "Schengen & European country visas",
    href: "/visa-checker",
    links: [
      { label: "Germany Visa", href: "/visa-checker/india-visa-for-germany/visa-required" },
      { label: "Spain Visa", href: "/visa-checker/india-visa-for-spain/visa-required" },
      { label: "Portugal Visa", href: "/visa-checker/india-visa-for-portugal/visa-required" },
      { label: "Albania Visa", href: "/visa-checker/india-visa-for-albania/e-visa" },
      { label: "Serbia Visa", href: "/visa-checker/india-visa-for-serbia/visa-required" },
      { label: "Montenegro Visa For Bangladeshi", href: "/visa-checker/bangladesh-visa-for-montenegro/visa-required" },
      { label: "Kosovo Visa For Indian Nationals", href: "/visa-checker/india-visa-for-kosovo/visa-required" },
      { label: "Cyprus Visa For Indian", href: "/visa-checker/india-visa-for-cyprus/visa-required" },
      { label: "Schengen Visa Guide", href: "/schengen-visa" },
      { label: "Europe Visa Overview", href: "/visa-checker/india-visa-for-italy/visa-required" },
    ],
  },
];

// Cornerstone service pages: /our-services/visa/[country]-visa-application
const VISA_APPLICATION_COUNTRIES = [
  { label: "Albania Visa", href: "/our-services/visa/albania-visa-application", flag: "🇦🇱" },
  { label: "Armenia Visa", href: "/our-services/visa/armenia-visa-application", flag: "🇦🇲" },
  { label: "Australia Visa", href: "/our-services/visa/australia-visa-application", flag: "🇦🇺" },
  { label: "Azerbaijan Visa", href: "/our-services/visa/azerbaijan-visa-application", flag: "🇦🇿" },
  { label: "Brazil Visa", href: "/our-services/visa/brazil-visa-application", flag: "🇧🇷" },
  { label: "Canada Visa", href: "/our-services/visa/canada-visa-application", flag: "🇨🇦" },
  { label: "China Visa", href: "/our-services/visa/china-visa-application", flag: "🇨🇳" },
  { label: "Cyprus Visa", href: "/our-services/visa/cyprus-visa-application", flag: "🇨🇾" },
  { label: "Dubai / UAE Visa", href: "/our-services/visa/dubai-visa-application", flag: "🇦🇪" },
  { label: "Europe (Schengen) Visa", href: "/our-services/visa/europe-visa-application", flag: "🇪🇺" },
  { label: "Georgia Visa", href: "/our-services/visa/georgia-visa-application", flag: "🇬🇪" },
  { label: "Germany Visa", href: "/our-services/visa/germany-visa-application", flag: "🇩🇪" },
  { label: "India Visa", href: "/our-services/visa/india-visa-application", flag: "🇮🇳" },
  { label: "Indonesia Visa", href: "/our-services/visa/indonesia-visa-application", flag: "🇮🇩" },
  { label: "Japan Visa", href: "/our-services/visa/japan-visa-application", flag: "🇯🇵" },
  { label: "Kosovo Visa", href: "/our-services/visa/kosovo-visa-application", flag: "🇽🇰" },
  { label: "Malaysia Visa", href: "/our-services/visa/malaysia-visa-application", flag: "🇲🇾" },
  { label: "Montenegro Visa", href: "/our-services/visa/montenegro-visa-application", flag: "🇲🇪" },
  { label: "Morocco Visa", href: "/our-services/visa/morocco-visa-application", flag: "🇲🇦" },
  { label: "Portugal Visa", href: "/our-services/visa/portugal-visa-application", flag: "🇵🇹" },
  { label: "Qatar Visa", href: "/our-services/visa/qatar-visa-application", flag: "🇶🇦" },
  { label: "Russia Visa", href: "/our-services/visa/russia-visa-application", flag: "🇷🇺" },
  { label: "Saudi Arabia Visa", href: "/our-services/visa/saudi-arabia-visa-application", flag: "🇸🇦" },
  { label: "Serbia Visa", href: "/our-services/visa/serbia-visa-application", flag: "🇷🇸" },
  { label: "Singapore Visa", href: "/our-services/visa/singapore-visa-application", flag: "🇸🇬" },
  { label: "South Africa Visa", href: "/our-services/visa/south-africa-visa-application", flag: "🇿🇦" },
  { label: "South Korea Visa", href: "/our-services/visa/south-korea-visa-application", flag: "🇰🇷" },
  { label: "Spain Visa", href: "/our-services/visa/spain-visa-application", flag: "🇪🇸" },
  { label: "Sri Lanka Visa", href: "/our-services/visa/srilanka-visa-application", flag: "🇱🇰" },
  { label: "Thailand Visa", href: "/our-services/visa/thailand-visa-application", flag: "🇹🇭" },
  { label: "Turkey Visa", href: "/our-services/visa/turkey-visa-application", flag: "🇹🇷" },
  { label: "UK Visa", href: "/our-services/visa/uk-visa-application", flag: "🇬🇧" },
  { label: "USA Visa", href: "/our-services/visa/usa-visa-application", flag: "🇺🇸" },
];

// Tourist Visa Bangladesh Nationals — /visa/[country]-visa
const BANGLADESH_TOURIST_VISAS = [
  { label: "Japan Visa", href: "/visa/japan-visa", flag: "🇯🇵" },
  { label: "Albania Visa", href: "/visa-checker/bangladesh-visa-for-albania/e-visa", flag: "🇦🇱" },
  { label: "Georgia Visa", href: "/visa/georgia-visa", flag: "🇬🇪" },
  { label: "Armenia Visa", href: "/visa/armenia-visa", flag: "🇦🇲" },
  { label: "Turkey Visa", href: "/visa/turkey-visa", flag: "🇹🇷" },
  { label: "Dubai Visa", href: "/visa/united-arab-emirates-visa", flag: "🇦🇪" },
  { label: "Malaysia Visa", href: "/visa-checker/bangladesh-visa-for-malaysia/e-visa", flag: "🇲🇾" },
  { label: "Thailand Visa", href: "/visa-checker/bangladesh-visa-for-thailand/e-visa", flag: "🇹🇭" },
  { label: "Singapore Visa", href: "/visa-checker/bangladesh-visa-for-singapore/e-visa", flag: "🇸🇬" },
  { label: "Indonesia Visa", href: "/visa/indonesia-visa", flag: "🇮🇩" },
  { label: "Sri Lanka Visa", href: "/visa-checker/bangladesh-visa-for-srilanka/eta", flag: "🇱🇰" },
  { label: "Bhutan Visa", href: "/visa-checker/bangladesh-visa-for-bhutan/visa-free", flag: "🇧🇹" },
  { label: "Canada Visa", href: "/visa/canada-visa", flag: "🇨🇦" },
  { label: "UK Visa", href: "/visa/united-kingdom-visa", flag: "🇬🇧" },
  { label: "USA Visa", href: "/visa/united-states-visa", flag: "🇺🇸" },
  { label: "Australia Visa", href: "/visa/australia-visa", flag: "🇦🇺" },
  { label: "Germany Visa", href: "/visa/germany-visa", flag: "🇩🇪" },
  { label: "South Korea Visa", href: "/visa/south-korea-visa", flag: "🇰🇷" },
  { label: "Serbia Visa", href: "/visa/serbia-visa", flag: "🇷🇸" },
  { label: "Portugal Visa", href: "/visa/portugal-visa", flag: "🇵🇹" },
  { label: "Spain Visa", href: "/visa/spain-visa", flag: "🇪🇸" },
  { label: "China Visa", href: "/visa/china-visa", flag: "🇨🇳" },
  { label: "Russia Visa", href: "/visa/russia-visa", flag: "🇷🇺" },
  { label: "Saudi Arabia Visa", href: "/visa/saudi-arabia-visa", flag: "🇸🇦" },
  { label: "Qatar Visa", href: "/visa/qatar-visa", flag: "🇶🇦" },
];

// Visa Guide slug pages: /visa/visa-guide/[destination]-visa-for-[nationality]
const VISA_GUIDE_SLUGS = [
  { label: "Armenia Visa for India", href: "/visa-checker/india-visa-for-armenia/e-visa" },
  { label: "Albania Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-albania/e-visa" },
  { label: "Georgia Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-georgia/visa-required" },
  { label: "Dubai Visa for India", href: "/visa/visa-guide/united-arab-emirates-visa-for-india" },
  { label: "Turkey Visa for Bangladesh", href: "/visa/visa-guide/turkey-visa-for-bangladesh" },
  { label: "Malaysia Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-malaysia/e-visa" },
  { label: "Singapore Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-singapore/e-visa" },
  { label: "Canada Visa for Bangladesh", href: "/visa/visa-guide/canada-visa-for-bangladesh" },
  { label: "Canada Visa for Philippines", href: "/visa/visa-guide/canada-visa-for-philippines" },
  { label: "UK Visa for Bangladesh", href: "/visa/visa-guide/united-kingdom-visa-for-bangladesh" },
  { label: "Japan Visa for Bangladesh", href: "/visa/visa-guide/japan-visa-for-bangladesh" },
  { label: "South Korea Visa for Bangladesh", href: "/visa/visa-guide/south-korea-visa-for-bangladesh" },
  { label: "Australia Visa for Bangladesh", href: "/visa/visa-guide/australia-visa-for-bangladesh" },
  { label: "USA Visa for Bangladesh", href: "/visa/visa-guide/united-states-visa-for-bangladesh" },
  { label: "Germany Visa for Bangladesh", href: "/visa/visa-guide/germany-visa-for-bangladesh" },
  { label: "Thailand Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-thailand/e-visa" },
  { label: "Serbia Visa for Bangladesh", href: "/visa/visa-guide/serbia-visa-for-bangladesh" },
  { label: "Armenia Visa for Bangladesh", href: "/visa/visa-guide/armenia-visa-for-bangladesh" },
  { label: "Portugal Visa for Bangladesh", href: "/visa-checker/portugal-visa-for-bangladesh/visa-required" },
  { label: "Bangladesh Visa for Morocco", href: "/visa/visa-guide/bangladesh-visa-for-morocco" },
  { label: "Check All Visa Requirements", href: "/visa-checker" },
];

// Dubai Residents hub: /visa/dubai-residents/[country]
const DUBAI_RESIDENTS = {
  label: "Dubai Residents",
  href: "/visa/dubai-residents",
  icon: "🇦🇪",
  tagline: "Visas for UAE-based expats",
  links: [
    { label: "Canada Visa for Dubai Residents", href: "/visa/dubai-residents/canada" },
    { label: "Albania Visa for Dubai Residents", href: "/visa/dubai-residents/albania" },
    { label: "Montenegro Visa for Dubai Residents", href: "/visa/dubai-residents/montenegro" },
    { label: "Serbia Visa for Dubai Residents", href: "/visa/dubai-residents/serbia" },
    { label: "Armenia Visa for Dubai Residents", href: "/visa/dubai-residents/armenia" },
    { label: "Georgia Visa for Dubai Residents", href: "/visa/dubai-residents/georgia" },
    { label: "UK Visa for Dubai Residents", href: "/visa/dubai-residents/united-kingdom" },
    { label: "USA Visa for Dubai Residents", href: "/visa/dubai-residents/united-states" },
    { label: "Australia Visa for Dubai Residents", href: "/visa/dubai-residents/australia" },
    { label: "Germany Visa for Dubai Residents", href: "/visa/dubai-residents/germany" },
    { label: "Japan Visa for Dubai Residents", href: "/visa/dubai-residents/japan" },
    { label: "South Korea Visa for Dubai Residents", href: "/visa/dubai-residents/south-korea" },
    { label: "Turkey Visa for Dubai Residents", href: "/visa/dubai-residents/turkey" },
  ],
};

// India hub: /visa/india/[country]
const INDIA_HUB = {
  label: "India Passport",
  href: "/visa/india",
  icon: "🇮🇳",
  tagline: "Visas for Indian passport holders",
  links: [
    { label: "Albania Visa for India", href: "/visa-checker/india-visa-for-albania/e-visa" },
    { label: "Serbia Visa for India", href: "/visa/india/serbia" },
    { label: "Armenia Visa for India", href: "/visa-checker/india-visa-for-armenia/e-visa" },
    { label: "Georgia Visa for India", href: "/visa-checker/india-visa-for-georgia/e-visa" },
    { label: "Nigeria Visa for India", href: "/visa/india/nigeria" },
    { label: "Canada Visa for India", href: "/visa/india/canada" },
    { label: "UK Visa for India", href: "/visa/india/united-kingdom" },
    { label: "USA Visa for India", href: "/visa/india/united-states" },
    { label: "Australia Visa for India", href: "/visa-checker/india-visa-for-australia/e-visa" },
    { label: "Germany Visa for India", href: "/visa/india/germany" },
    { label: "Japan Visa for India", href: "/visa/india/japan" },
    { label: "Turkey Visa for India", href: "/visa/india/turkey" },
    { label: "Malaysia Visa for India", href: "/visa-checker/india-visa-for-malaysia/e-visa" },
  ],
};

// E-Visa requirement guides: /visa/e-visa/[nationality]-national-e-visa-requirements-for-[destination]
const E_VISA_GUIDES = [
  { label: "Bangladesh E-Visa Requirements for Albania", href: "/visa/e-visa/bangladesh-national-e-visa-requirements-for-albania" },
  { label: "India E-Visa Requirements for Armenia", href: "/visa/e-visa/india-national-e-visa-requirements-for-armenia" },
  { label: "Bangladesh E-Visa Requirements for Sri Lanka", href: "/visa/e-visa/bangladesh-national-e-visa-requirements-for-sri-lanka" },
  { label: "Bangladesh E-Visa Requirements for Malaysia", href: "/visa/e-visa/bangladesh-national-e-visa-requirements-for-malaysia" },
  { label: "India E-Visa Requirements for Singapore", href: "/visa/e-visa/india-national-e-visa-requirements-for-singapore" },
  { label: "Australia E-Visa Requirements for USA", href: "/visa/e-visa/australia-national-e-visa-requirements-for-united-states" },
  { label: "All E-Visa Requirement Guides", href: "/visa/e-visa" },
];

// Popular visa destinations
const POPULAR_DESTINATIONS = [
  { label: "Dubai", href: "/visa/india/united-arab-emirates", flag: "🇦🇪" },
  { label: "Canada", href: "/visa/dubai-residents/canada", flag: "🇨🇦" },
  { label: "USA", href: "/visa/dubai-residents/united-states", flag: "🇺🇸" },
  { label: "UK", href: "/visa/dubai-residents/united-kingdom", flag: "🇬🇧" },
  { label: "Germany", href: "/visa/dubai-residents/germany", flag: "🇩🇪" },
  { label: "Australia", href: "/visa/dubai-residents/australia", flag: "🇦🇺" },
  { label: "Japan", href: "/visa/dubai-residents/japan", flag: "🇯🇵" },
  { label: "Singapore", href: "/visa-checker/india-visa-for-singapore/e-visa", flag: "🇸🇬" },
  { label: "Malaysia", href: "/visa-checker/india-visa-for-malaysia/e-visa", flag: "🇲🇾" },
  { label: "Turkey", href: "/visa/dubai-residents/turkey", flag: "🇹🇷" },
  { label: "Georgia", href: "/visa-checker/india-visa-for-georgia/e-visa", flag: "🇬🇪" },
  { label: "Armenia", href: "/visa-checker/india-visa-for-armenia/e-visa", flag: "🇦🇲" },
  { label: "Thailand", href: "/visa-checker/india-visa-for-thailand/e-visa", flag: "🇹🇭" },
  { label: "South Korea", href: "/visa/dubai-residents/south-korea", flag: "🇰🇷" },
  { label: "Portugal", href: "/visa/dubai-residents/portugal", flag: "🇵🇹" },
  { label: "Qatar", href: "/visa-checker/india-visa-for-qatar/e-visa", flag: "🇶🇦" },
];

// Study abroad
const STUDY_ABROAD = [
  { label: "Study in USA", href: "/study-abroad/student-visa/united-states", flag: "🇺🇸" },
  { label: "Study in UK", href: "/study-abroad/student-visa/united-kingdom", flag: "🇬🇧" },
  { label: "Study in Canada", href: "/study-abroad/student-visa/canada", flag: "🇨🇦" },
  { label: "Study in Australia", href: "/study-abroad/student-visa/australia", flag: "🇦🇺" },
  { label: "Study in Germany", href: "/study-abroad/student-visa/germany", flag: "🇩🇪" },
  { label: "Study in Japan", href: "/study-abroad/student-visa/japan", flag: "🇯🇵" },
  { label: "Study in South Korea", href: "/study-abroad/student-visa/south-korea", flag: "🇰🇷" },
  { label: "Study in Malaysia", href: "/study-abroad/student-visa/malaysia", flag: "🇲🇾" },
  { label: "Study in Russia", href: "/study-abroad/student-visa/russia", flag: "🇷🇺" },
  { label: "Study in China", href: "/study-abroad/student-visa/china", flag: "🇨🇳" },
  { label: "Study in Albania", href: "/study-abroad/student-visa/albania", flag: "🇦🇱" },
  { label: "Study in Andorra", href: "/study-abroad/student-visa/andorra", flag: "🇦🇩" },
  { label: "All Student Visas", href: "/study-abroad/student-visa", flag: "🌐" },
];

// Scholarships
const SCHOLARSHIPS = [
  { label: "USA Scholarships", href: "/scholarships/united-states" },
  { label: "UK Scholarships", href: "/scholarships/united-kingdom" },
  { label: "Canada Scholarships", href: "/scholarships/canada" },
  { label: "Australia Scholarships", href: "/scholarships/australia" },
  { label: "Germany Scholarships", href: "/scholarships/germany" },
  { label: "Japan Scholarships", href: "/scholarships/japan" },
  { label: "South Korea Scholarships", href: "/scholarships/south-korea" },
  { label: "Malaysia Scholarships", href: "/scholarships/malaysia" },
  { label: "Albania Scholarships", href: "/scholarships/albania" },
  { label: "Armenia Scholarships", href: "/scholarships/armenia" },
  { label: "Georgia Scholarships", href: "/scholarships/georgia" },
  { label: "All Scholarships", href: "/scholarships" },
];

// Processing times: /travel-resources/visa-processing-time-tracker/[nationality]-national-visa-processing-time-for-[country]-[type]
const PROCESSING_TIMES = [
  { label: "Bangladesh → Andorra Visa Processing Time (Sticker)", href: "/travel-resources/visa-processing-time-tracker/bangladesh-national-visa-processing-time-for-andorra-sticker" },
  { label: "Bangladesh → Albania Visa Processing Time (Transit)", href: "/travel-resources/visa-processing-time-tracker/bangladesh-national-visa-processing-time-for-albania-transit" },
  { label: "Bangladesh → Armenia Visa Processing Time (E-Visa)", href: "/travel-resources/visa-processing-time-tracker/bangladesh-national-visa-processing-time-for-armenia-e-visa" },
  { label: "Bangladesh → UK Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/india-national-visa-processing-time-for-united-kingdom" },
  { label: "Bangladesh → USA Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladesh-national-visa-processing-time-for-usa" },
  { label: "Bangladesh → Germany Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladesh-national-visa-processing-time-for-germany" },
  { label: "Bangladesh → Australia Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladesh-national-visa-processing-time-for-australia" },
  { label: "Bangladesh → Japan Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladesh-national-visa-processing-time-for-japan" },
  { label: "India → Canada Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/india-national-visa-processing-time-for-canada" },
  { label: "India → Armenia Visa Processing Time (E-Visa)", href: "/travel-resources/visa-processing-time-tracker/india-national-visa-processing-time-for-armenia-e-visa" },
  { label: "India → Montenegro Visa Processing Time (Sticker)", href: "/travel-resources/visa-processing-time-tracker/india-national-visa-processing-time-for-montenegro-sticker" },
  { label: "Sri Lanka → Albania Visa Processing Time (E-Visa)", href: "/travel-resources/visa-processing-time-tracker/sri-lanka-national-visa-processing-time-for-albania-e-visa" },
  { label: "Pakistan → Canada Visa Processing Time (Extended Sticker)", href: "/travel-resources/visa-processing-time-tracker/pakistan-national-visa-processing-time-for-canada-sticker-extended" },
  { label: "UAE → Germany Visa Processing Time (Transit)", href: "/travel-resources/visa-processing-time-tracker/united-arab-emirates-national-visa-processing-time-for-germany-transit" },
];

// Rejection rates: /visa-rejection/[nationality]-visa-rejection-rate-for-[country]-[visaType]
const REJECTION_RATES = [
  { label: "Bangladesh Student Visa Rejection — Albania", href: "/visa-rejection/bangladesh-visa-rejection-rate-for-albania-student" },
  { label: "Bangladesh Work Visa Rejection — Armenia", href: "/visa-rejection/bangladesh-visa-rejection-rate-for-armenia-work" },
  { label: "Bangladesh Business Visa Rejection — Armenia", href: "/visa-rejection/bangladesh-visa-rejection-rate-for-armenia-business" },
  { label: "Bangladesh Tourist Visa Rejection — UK", href: "/visa-rejection/bangladesh-visa-rejection-rate-for-united-kingdom-tourist" },
  { label: "Bangladesh Student Visa Rejection — USA", href: "/visa-rejection/bangladesh-visa-rejection-rate-for-united-states-student" },
  { label: "Bangladesh Tourist Visa Rejection — Australia", href: "/visa-rejection/bangladesh-visa-rejection-rate-for-australia-tourist" },
  { label: "Bangladesh Tourist Visa Rejection — UAE", href: "/visa-rejection/bangladesh-visa-rejection-rate-for-united-arab-emirates-tourist" },
  { label: "India Tourist Visa Rejection — Canada", href: "/visa-rejection/india-visa-rejection-rate-for-canada-tourist" },
  { label: "India Tourist Visa Rejection — UK", href: "/visa-rejection/india-visa-rejection-rate-for-united-kingdom-tourist" },
  { label: "Sri Lanka Student Visa Rejection — Germany", href: "/visa-rejection/sri-lanka-visa-rejection-rate-for-germany-student" },
  { label: "Iran Student Visa Rejection — Germany", href: "/visa-rejection/iran-visa-rejection-rate-for-germany-student" },
  { label: "Nigeria Tourist Visa Rejection — Albania", href: "/visa-rejection/nigeria-visa-rejection-rate-for-albania-tourist" },
];

// Tools
const TOOLS = [
  { label: "Visa Processing Time Tracker", href: "/travel-resources/visa-processing-time-tracker", icon: "⏱️", desc: "Real-time processing durations by country & visa type" },
  { label: "Visa Rejection Rate Stats", href: "/visa-rejection", icon: "📊", desc: "Historical rejection data to plan smarter applications" },
  { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator", icon: "✅", desc: "Auto-generate a personalized document checklist" },
  { label: "Travel Document Generator", href: "/travel-resources/travel-document-generator", icon: "📄", desc: "Generate required travel documents for any visa" },
  { label: "PDF Editor for Visa Forms", href: "/pdf-editor", icon: "📝", desc: "Edit, fill, and sign visa application PDFs online" },
  { label: "Travel Cost Calculator", href: "/travel-cost-calculator", icon: "🧮", desc: "Estimate total travel & visa costs in advance" },
  { label: "Travel Insurance", href: "/travel-insurance", icon: "🛡️", desc: "Compare and buy travel insurance for your trip" },
  { label: "Travel Insurance Calculator", href: "/travel-insurance/insurance-calculator", icon: "🧾", desc: "Estimate premiums and coverage for your trip" },
  { label: "Study Abroad Guide", href: "/study-abroad", icon: "🎓", desc: "Complete guide to studying outside Bangladesh" },
  { label: "Schengen Visa Guide", href: "/schengen-visa", icon: "🇪🇺", desc: "Requirements & tips for all Schengen countries" },
  { label: "Flight Booking", href: "/flight-booking", icon: "✈️", desc: "Book flights to any destination worldwide" },
];

// Visa Checker — extended country pairs: /visa-checker/[nationality]-visa-for-[country]/[visaType]
const VISA_CHECKER_PAIRS = [
  { label: "Bangladesh Visa for Albania", href: "/visa-checker/bangladesh-visa-for-albania/e-visa" },
  { label: "Bangladesh Visa for Canada", href: "/visa-checker/bangladesh-visa-for-canada/visa-required" },
  { label: "Bangladesh Visa for Malaysia", href: "/visa-checker/bangladesh-visa-for-malaysia/e-visa" },
  { label: "Bangladesh Visa for Thailand", href: "/visa-checker/bangladesh-visa-for-thailand/e-visa" },
  { label: "Bangladesh Visa for Singapore", href: "/visa-checker/bangladesh-visa-for-singapore/e-visa" },
  { label: "Bangladesh Visa for Sri Lanka", href: "/visa-checker/bangladesh-visa-for-srilanka/eta" },
  { label: "Bangladesh Visa for Bhutan", href: "/visa-checker/bangladesh-visa-for-bhutan/visa-free" },
  { label: "Bangladesh Visa for Montenegro", href: "/visa-checker/bangladesh-visa-for-montenegro/visa-required" },
  { label: "Bangladesh Visa for Portugal", href: "/visa-checker/portugal-visa-for-bangladesh/visa-required" },
  { label: "Israel Visa for Bangladesh", href: "/visa-checker/israel-visa-for-bangladesh/no-admission" },
  { label: "India Visa for Albania", href: "/visa-checker/india-visa-for-albania/e-visa" },
  { label: "India Visa for Armenia", href: "/visa-checker/india-visa-for-armenia/e-visa" },
  { label: "India Visa for Georgia", href: "/visa-checker/india-visa-for-georgia/e-visa" },
  { label: "India Visa for Malaysia", href: "/visa-checker/india-visa-for-malaysia/e-visa" },
  { label: "India Visa for Singapore", href: "/visa-checker/india-visa-for-singapore/e-visa" },
  { label: "India Visa for Australia", href: "/visa-checker/india-visa-for-australia/e-visa" },
  { label: "India Visa for Thailand", href: "/visa-checker/india-visa-for-thailand/e-visa" },
  { label: "India Visa for Qatar", href: "/visa-checker/india-visa-for-qatar/e-visa" },
  { label: "India Visa for Germany", href: "/visa-checker/india-visa-for-germany/visa-required" },
  { label: "India Visa for Spain", href: "/visa-checker/india-visa-for-spain/visa-required" },
  { label: "India Visa for Portugal", href: "/visa-checker/india-visa-for-portugal/visa-required" },
  { label: "India Visa for Serbia", href: "/visa-checker/india-visa-for-serbia/visa-required" },
  { label: "India Visa for Kosovo", href: "/visa-checker/india-visa-for-kosovo/visa-required" },
  { label: "India Visa for Cyprus", href: "/visa-checker/india-visa-for-cyprus/visa-required" },
  { label: "India Visa for Italy", href: "/visa-checker/india-visa-for-italy/visa-required" },
  { label: "Sri Lanka Visa for Albania", href: "/visa-checker/sri-lanka-visa-for-albania/e-visa" },
  { label: "Check All Visa Requirements", href: "/visa-checker" },
];

// Document & application guides, grouped — all real top-level content pages
const DOCUMENT_GUIDES = [
  {
    heading: "Document Preparation",
    icon: "📋",
    color: "#EA580C",
    links: [
      { label: "Bank Statement for Visa", href: "/bank-statement-for-visa" },
      { label: "How to Prepare a Bank Statement", href: "/bank-statement-for-visa-how-to-prepare" },
      { label: "Bank Solvency Certificate for Visa", href: "/bank-solvency-certificate-for-visa" },
      { label: "Sponsor Letter Sample for Visa", href: "/sponsor-letter-sample-for-visa" },
      { label: "Sponsor Financial Documents for Visa", href: "/sponsor-financial-documents-for-visa" },
      { label: "Marriage Certificate for Visa", href: "/marriage-certificate-for-visa" },
      { label: "Spouse Visa Documents", href: "/spouse-visa-documents" },
      { label: "SOP Sample for Student Visa", href: "/sop-sample-for-student-visa" },
    ],
  },
  {
    heading: "Application & Interview Prep",
    icon: "🗂️",
    color: "#0891B2",
    links: [
      { label: "DS-160 Form Guide", href: "/ds-160-form-guide" },
      { label: "Embassy Appointment Tips", href: "/embassy-appointment-tips" },
      { label: "VFS Global Appointment Guide", href: "/vfs-global-appointment-guide" },
      { label: "Visa Appointment Booking Guide", href: "/visa-appointment-booking-guide" },
      { label: "Visa Interview Tips", href: "/visa-interview-tips" },
      { label: "USA Visa Interview Preparation", href: "/target-usa-visa-interview-preparation" },
      { label: "How to Track Your Visa Application", href: "/how-to-track-visa-application" },
      { label: "How to Make a Travel Itinerary for Visa", href: "/travel-itinerary-for-visa-how-to-make" },
    ],
  },
  {
    heading: "Rejection, Appeals & Timing",
    icon: "⚖️",
    color: "#7C3AED",
    links: [
      { label: "Common Reasons for Visa Rejection", href: "/common-reasons" },
      { label: "Appeal Process for Visa Rejection", href: "/appeal-process-for-visa" },
      { label: "Can I Reapply After Visa Rejection?", href: "/can-i-reapply-after-visa-rejection" },
      { label: "How Many Times Can I Apply for a Visa?", href: "/how-many-times-can-i-apply-for-visa" },
      { label: "How Much Bank Balance Is Needed for a Visa?", href: "/how-much-bank-balance-needed-for-visa" },
      { label: "Best Time to Apply for a Schengen Visa", href: "/best-time-to-apply-schengen-visa" },
    ],
  },
];

// Office & local landing pages — good for local SEO / NAP consistency
const OFFICE_CONTACTS = [
  { label: "Contact — Armenia Office", href: "/contact/travel-agency-armenia", flag: "🇦🇲" },
  { label: "Contact — Bangladesh Office", href: "/contact/travel-agency-bangladesh", flag: "🇧🇩" },
  { label: "Contact — Dubai Office", href: "/contact/travel-agency-dubai", flag: "🇦🇪" },
  { label: "Contact — Georgia Office", href: "/contact/travel-agency-georgia", flag: "🇬🇪" },
];

const OFFICE_LOCATIONS = [
  { label: "Travel Agency in Abu Dhabi", href: "/travel-agency-abu-dhabi", flag: "🇦🇪" },
  { label: "Travel Agency in Bangladesh", href: "/travel-agency-bangladesh", flag: "🇧🇩" },
  { label: "Travel Agency in Delhi", href: "/travel-agency-delhi", flag: "🇮🇳" },
  { label: "Travel Agency in Dhaka", href: "/travel-agency-dhaka", flag: "🇧🇩" },
  { label: "Travel Agency in Sharjah", href: "/travel-agency-sharjah", flag: "🇦🇪" },
];

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://eammu.com";

function toItemList(name, items) {
  return {
    "@type": "ItemList",
    name,
    itemListElement: items.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: v.label,
      url: `${SITE_URL}${v.href}`,
    })),
  };
}

function buildStructuredData() {
  const allDocGuideLinks = DOCUMENT_GUIDES.flatMap((g) => g.links);
  const allOfficeLinks = [...OFFICE_CONTACTS, ...OFFICE_LOCATIONS];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        name: "Eammu Holidays",
        url: SITE_URL,
        description:
          "IATA-accredited travel agency in Bangladesh offering visa services, tour packages, flight booking, and study abroad guidance.",
        areaServed: ["Bangladesh", "United Arab Emirates", "India"],
        serviceType: [
          "Tourist Visa Services",
          "Student Visa Services",
          "Work Visa Services",
          "E-Visa Services",
          "Europe Visa Services",
          "Tour Packages",
          "Flight Booking",
          "Travel Insurance",
        ],
      },
      toItemList("Visa Application Pages by Country — Eammu Holidays", VISA_APPLICATION_COUNTRIES),
      toItemList("Tourist Visa Pages for Bangladesh Nationals — Eammu Holidays", BANGLADESH_TOURIST_VISAS),
      toItemList("Visa Services by Type — Eammu Holidays", VISA_GUIDES),
      toItemList("Country Visa Guides — Eammu Holidays", VISA_GUIDE_SLUGS),
      toItemList("Visa Checker Country Pairs — Eammu Holidays", VISA_CHECKER_PAIRS),
      toItemList("Dubai Residents Visa Guides — Eammu Holidays", DUBAI_RESIDENTS.links),
      toItemList("India Passport Visa Guides — Eammu Holidays", INDIA_HUB.links),
      toItemList("E-Visa Requirement Guides — Eammu Holidays", E_VISA_GUIDES),
      toItemList("Travel Tools & Resources — Eammu Holidays", TOOLS),
      toItemList("Study Abroad Guides — Eammu Holidays", STUDY_ABROAD),
      toItemList("Scholarships by Country — Eammu Holidays", SCHOLARSHIPS),
      toItemList("Visa Processing Time Data — Eammu Holidays", PROCESSING_TIMES),
      toItemList("Visa Rejection Rate Data — Eammu Holidays", REJECTION_RATES),
      toItemList("Visa Document & Application Guides — Eammu Holidays", allDocGuideLinks),
      toItemList("Office & Local Agency Pages — Eammu Holidays", allOfficeLinks),
    ],
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// COLOR HELPERS
// ─────────────────────────────────────────────────────────────────────────────

// Converts a hex color to an rgba() string so every accent color can be used
// as a soft tint (backgrounds, borders) without hand-picking a separate
// pastel shade for each of the ~15 section colors below.
function hexToRgba(hex, alpha) {
  const clean = hex.replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const bigint = parseInt(full, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function SectionLabel({ children, color = "#0057FF" }) {
  return (
    <span
      className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase mb-2"
      style={{ color }}
    >
      {children}
    </span>
  );
}

// Subsection heading. Renders as <h3> so the outline nests correctly under
// the single <h2> that introduces this whole block (see component root).
// `color` gives every section its own accent (label text + "view all" link)
// so the long page reads as clearly separated, colorful sections.
function SectionHeading({ label, title, subtitle, href, linkLabel, color = "#0057FF" }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
      <div>
        {label && <SectionLabel color={color}>{label}</SectionLabel>}
        <h3 className="text-[1rem] sm:text-[1.1rem] font-bold text-[#0D0D0D] leading-tight tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[0.78rem] text-[#6B7280] mt-1 leading-relaxed max-w-xl">{subtitle}</p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          style={{ color }}
          className="shrink-0 mt-0.5 text-[11px] font-semibold hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded flex items-center gap-1 transition-opacity whitespace-nowrap"
        >
          {linkLabel || "View all"} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}

// Wraps every major section in a soft, color-tinted card: light background
// wash + thin border + a 4px colored left accent. Keeps the design simple
// (no gradients, no heavy shadows) while making each section immediately
// scannable and visually distinct as you scroll — and fully responsive via
// fluid padding.
function SectionWrap({ id, color = "#0057FF", children }) {
  return (
    <div
      id={id}
      className="rounded-2xl p-4 sm:p-6 border border-l-4"
      style={{
        backgroundColor: hexToRgba(color, 0.03),
        borderColor: hexToRgba(color, 0.14),
        borderLeftColor: color,
      }}
    >
      {children}
    </div>
  );
}

// Compact, row-based pill link, tinted with the section's accent color so
// every "column list" reads as a colorful, scannable horizontal row.
function PillLink({ href, children, accent = "#0057FF" }) {
  return (
    <Link
      href={href}
      style={{
        color: accent,
        backgroundColor: hexToRgba(accent, 0.07),
        borderColor: hexToRgba(accent, 0.28),
      }}
      className="inline-flex text-[12px] font-semibold border rounded-full px-3 py-1.5 transition-all duration-150 leading-none hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {children}
    </Link>
  );
}

// Same pill, with a leading icon — used for icon-labelled rows (processing
// times, rejection rates).
function PillLinkIcon({ href, icon, children, accent = "#0057FF" }) {
  return (
    <Link
      href={href}
      style={{
        color: accent,
        backgroundColor: hexToRgba(accent, 0.07),
        borderColor: hexToRgba(accent, 0.28),
      }}
      className="inline-flex items-center gap-1.5 text-[12px] font-semibold border rounded-full px-3 py-1.5 transition-all duration-150 leading-none hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </Link>
  );
}

function VisaTypeCard({ type }) {
  return (
    <div
      className="bg-white rounded-xl p-4 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 hover:shadow-md transition-all duration-200 group border border-l-4"
      style={{ borderColor: hexToRgba(type.color, 0.16), borderLeftColor: type.color }}
    >
      <div className="sm:w-56 shrink-0">
        <Link
          href={type.href}
          className="flex items-center gap-2 mb-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          style={{ outlineColor: type.color }}
        >
          <span
            className="text-xl w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
            style={{ backgroundColor: hexToRgba(type.color, 0.12) }}
            aria-hidden="true"
          >
            {type.icon}
          </span>
          <span className="text-[0.95rem] font-bold text-[#0D0D0D] leading-tight">
            {type.label}
          </span>
        </Link>
        <p className="text-[11px] text-[#9CA3AF] mb-3 leading-relaxed">{type.description}</p>
        <Link
          href={type.href}
          style={{ backgroundColor: type.color }}
          className="inline-flex items-center gap-1 text-[11px] font-bold text-white rounded-full px-3.5 py-1.5 hover:opacity-90 transition-opacity"
        >
          Apply Now <span aria-hidden="true">→</span>
        </Link>
      </div>
      {/* Row-based link layout instead of a vertical bullet list */}
      <div className="flex flex-wrap gap-1.5 content-start flex-1">
        {type.links.map((l) => (
          <PillLink key={l.href} href={l.href} accent={type.color}>
            {l.label}
          </PillLink>
        ))}
      </div>
    </div>
  );
}

function ToolCard({ tool, accent = "#0D9488" }) {
  return (
    <Link
      href={tool.href}
      style={{ borderColor: hexToRgba(accent, 0.18) }}
      className="group flex items-start gap-3 bg-white border rounded-xl p-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <span
        className="text-[1.3rem] shrink-0 w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
        style={{ backgroundColor: hexToRgba(accent, 0.12) }}
        aria-hidden="true"
      >
        {tool.icon}
      </span>
      <div>
        <div
          className="text-[0.8rem] font-bold leading-tight mb-0.5 transition-colors"
          style={{ color: "#0D0D0D" }}
        >
          {tool.label}
        </div>
        <div className="text-[11px] text-[#9CA3AF] leading-relaxed">{tool.desc}</div>
      </div>
    </Link>
  );
}

function HubCard({ hub, accent = "#DB2777" }) {
  return (
    <div
      className="bg-white rounded-xl p-4 border border-l-4"
      style={{ borderColor: hexToRgba(accent, 0.16), borderLeftColor: accent }}
    >
      <div className="flex items-center justify-between mb-3 gap-2">
        <Link href={hub.href} className="flex items-center gap-2 group min-w-0">
          <span
            className="text-xl w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
            style={{ backgroundColor: hexToRgba(accent, 0.12) }}
            aria-hidden="true"
          >
            {hub.icon}
          </span>
          <div className="min-w-0">
            <div className="text-[0.86rem] font-bold text-[#0D0D0D] leading-tight truncate">
              {hub.label} Visas
            </div>
            <div className="text-[10px] text-[#9CA3AF]">{hub.tagline}</div>
          </div>
        </Link>
        <Link
          href={hub.href}
          style={{ color: accent }}
          className="text-[11px] font-semibold hover:opacity-70 transition-opacity whitespace-nowrap shrink-0"
        >
          View all →
        </Link>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {hub.links.map((l) => (
          <PillLink key={l.href} href={l.href} accent={accent}>
            {l.label}
          </PillLink>
        ))}
      </div>
    </div>
  );
}

function CountryChip({ href, flag, label, accent = "#0057FF" }) {
  return (
    <Link
      href={href}
      style={{
        color: accent,
        backgroundColor: hexToRgba(accent, 0.06),
        borderColor: hexToRgba(accent, 0.24),
      }}
      className="inline-flex items-center gap-1.5 border rounded-lg px-2.5 py-1.5 text-[12px] font-semibold transition-all duration-150 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <span aria-hidden="true">{flag}</span>
      {label}
    </Link>
  );
}

// Shows the first `initialCount` pill links, tucking the rest behind a native
// <details> disclosure. No JS required, fully crawlable/indexable, and keeps
// the visible page from looking like an auto-generated link dump.
function ExpandablePills({ items, initialCount = 10, accent = "#0057FF" }) {
  const visible = items.slice(0, initialCount);
  const rest = items.slice(initialCount);
  return (
    <div className="flex flex-wrap gap-1.5 items-start">
      {visible.map((v) => (
        <PillLink key={v.href} href={v.href} accent={accent}>
          {v.label}
        </PillLink>
      ))}
      {rest.length > 0 && (
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            style={{ color: accent, borderColor: accent }}
            className="list-none cursor-pointer inline-flex text-[12px] font-semibold bg-white border rounded-full px-3 py-1.5 transition-all duration-150 hover:shadow-md"
          >
            <span className="group-open:hidden">Show {rest.length} more</span>
            <span className="hidden group-open:inline">Show fewer</span>
          </summary>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {rest.map((v) => (
              <PillLink key={v.href} href={v.href} accent={accent}>
                {v.label}
              </PillLink>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

// Same disclosure pattern, but for flag-chip country lists. Uses a
// horizontal, wrapping flex row so every "country chip" section on the page
// reads as the same style of flowing row regardless of chip count.
function ExpandableChips({ items, initialCount = 16, accent = "#0057FF" }) {
  const visible = items.slice(0, initialCount);
  const rest = items.slice(initialCount);
  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {visible.map((v) => (
          <CountryChip key={v.href} href={v.href} flag={v.flag} label={v.label} accent={accent} />
        ))}
      </div>
      {rest.length > 0 && (
        <details className="group mt-2 [&_summary::-webkit-details-marker]:hidden">
          <summary
            style={{ color: accent, borderColor: accent }}
            className="list-none cursor-pointer inline-flex text-[12px] font-semibold bg-white border rounded-lg px-3 py-1.5 transition-all duration-150 hover:shadow-md"
          >
            <span className="group-open:hidden">Show {rest.length} more countries</span>
            <span className="hidden group-open:inline">Show fewer</span>
          </summary>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {rest.map((v) => (
              <CountryChip key={v.href} href={v.href} flag={v.flag} label={v.label} accent={accent} />
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

// Row-based (flex-wrap) version of the icon-labelled lists — used for
// processing times / rejection rates. Card gets a colored left accent to
// match its SectionHeading.
function ExpandableIconPills({ items, icon, initialCount = 6, color = "#0057FF" }) {
  const visible = items.slice(0, initialCount);
  const rest = items.slice(initialCount);
  return (
    <div
      className="bg-white border border-l-4 rounded-xl p-3.5"
      style={{ borderColor: hexToRgba(color, 0.16), borderLeftColor: color }}
    >
      <div className="flex flex-wrap gap-1.5">
        {visible.map((v) => (
          <PillLinkIcon key={v.href} href={v.href} icon={icon} accent={color}>
            {v.label}
          </PillLinkIcon>
        ))}
      </div>
      {rest.length > 0 && (
        <details className="group mt-2 [&_summary::-webkit-details-marker]:hidden">
          <summary
            style={{ color }}
            className="list-none cursor-pointer inline-flex text-[11px] font-semibold py-1.5"
          >
            <span className="group-open:hidden">Show {rest.length} more →</span>
            <span className="hidden group-open:inline">Show fewer ←</span>
          </summary>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {rest.map((v) => (
              <PillLinkIcon key={v.href} href={v.href} icon={icon} accent={color}>
                {v.label}
              </PillLinkIcon>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

// Compact bordered list used for the document-guide categories — row-based,
// each card carrying its own accent color.
function GuideGroupCard({ group, color = "#EA580C" }) {
  return (
    <div
      className="bg-white border border-l-4 rounded-xl p-3.5"
      style={{ borderColor: hexToRgba(color, 0.16), borderLeftColor: color }}
    >
      <div className="flex items-center gap-2 mb-2.5">
        <span
          className="text-base w-7 h-7 flex items-center justify-center rounded-md"
          style={{ backgroundColor: hexToRgba(color, 0.12) }}
          aria-hidden="true"
        >
          {group.icon}
        </span>
        <span className="text-[12.5px] font-bold text-[#0D0D0D]">{group.heading}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {group.links.map((l) => (
          <PillLink key={l.href} href={l.href} accent={color}>
            {l.label}
          </PillLink>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export default function HomeSeoLinks() {
  const lastUpdated = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });

  return (
    <section
      aria-label="Explore Visa Services, Study Abroad, Tools and Resources — Eammu Holidays"
      className="py-8 sm:py-10 px-3 sm:px-4"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData()) }}
      />

      <div className="max-w-7xl mx-auto">

        {/* ── SECTION INTRO / HERO ─────────────────────────────────────── */}
        {/* This is the only heading in the block — kept at h2 so it nests under
            the page's existing h1 instead of competing with it. Every
            sub-section below uses h3, so the outline reads h1 → h2 → h3. */}
        <div
          className="mb-8 rounded-2xl p-5 sm:p-7 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5"
          style={{
            background: "linear-gradient(135deg, rgba(0,87,255,0.06), rgba(124,58,237,0.05))",
            border: "1px solid rgba(0,87,255,0.14)",
          }}
        >
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-[#0057FF] mb-2">
              Eammu Holidays — Visa &amp; Travel Services
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-[#0D0D0D] tracking-tight">
              Complete Visa &amp; Travel Resource Hub
            </h2>
            <p className="text-[0.83rem] sm:text-[0.9rem] text-[#4B5563] mt-1.5 leading-relaxed">
              IATA-accredited visa assistance from Bangladesh — tourist, student, work &amp; e-visas, Europe &amp; Schengen guidance, document preparation guides, study abroad support, local offices, and free travel planning tools.
            </p>
            <p className="text-[11px] text-[#9CA3AF] mt-2">
              Visa rules change often — this hub is reviewed and refreshed monthly. Last reviewed: {lastUpdated}.
            </p>
          </div>
          <Link
            href="/our-services/visa-services"
            className="inline-flex items-center justify-center gap-2 shrink-0 bg-[#0057FF] hover:bg-[#003FBF] text-white font-bold text-[0.85rem] rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-all duration-200 w-full lg:w-auto"
          >
            Apply for Your Visa <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* ── ALL SECTIONS ──────────────────────────────────────────────── */}
        <div className="flex flex-col gap-5 sm:gap-6">

          {/* 1. VISA TYPES */}
          <SectionWrap id="visa-types" color="#0057FF">
            <SectionHeading
              label="Visa Services"
              title="Visa Services from Bangladesh"
              subtitle="Tourist, student, work, e-visa, and European visa assistance — expert guidance for every journey"
              href="/our-services/visa-services"
              linkLabel="All visa services"
              color="#0057FF"
            />
            <div className="flex flex-col gap-3">
              {VISA_GUIDES.map((type) => (
                <VisaTypeCard key={type.slug} type={type} />
              ))}
            </div>
          </SectionWrap>

          {/* 2. VISA APPLICATION BY COUNTRY (cornerstone pages) */}
          <SectionWrap id="visa-application" color="#7C3AED">
            <SectionHeading
              label="Cornerstone Guides"
              title="Visa Application Pages by Country"
              subtitle="In-depth requirements, fees, and step-by-step application help for each destination"
              href="/our-services/visa-services"
              linkLabel="All countries"
              color="#7C3AED"
            />
            <ExpandableChips items={VISA_APPLICATION_COUNTRIES} initialCount={16} accent="#7C3AED" />
          </SectionWrap>

          {/* 3. BANGLADESH TOURIST VISAS (/visa/[country]-visa) */}
          <SectionWrap id="bangladesh-tourist-visas" color="#059669">
            <SectionHeading
              label="Bangladesh Nationals"
              title="Tourist Visa for Bangladesh Nationals"
              subtitle="Quick-reference tourist visa pages — fees & on-arrival vs. e-visa vs. embassy requirements"
              href="/visa"
              linkLabel="All tourist visas"
              color="#059669"
            />
            <ExpandableChips items={BANGLADESH_TOURIST_VISAS} initialCount={16} accent="#059669" />
          </SectionWrap>

          {/* 4. POPULAR DESTINATIONS */}
          <SectionWrap id="popular-destinations" color="#DC2626">
            <SectionHeading
              label="Most Popular"
              title="Popular Visa Destinations"
              subtitle="Most searched countries for Bangladeshi passport holders"
              href="/our-services/visa-services"
              linkLabel="All destinations"
              color="#DC2626"
            />
            <div className="flex flex-wrap gap-1.5">
              {POPULAR_DESTINATIONS.map((d) => (
                <CountryChip key={d.href} href={d.href} flag={d.flag} label={d.label} accent="#DC2626" />
              ))}
            </div>
          </SectionWrap>

          {/* 5. COUNTRY VISA GUIDES (slug pages) */}
          <SectionWrap id="visa-guides" color="#D97706">
            <SectionHeading
              label="In-Depth Guides"
              title="Visa Guides by Nationality"
              subtitle="Step-by-step visa guides — requirements, documents, fees, and processing times"
              href="/visa/visa-guide"
              linkLabel="All guides"
              color="#D97706"
            />
            <ExpandablePills items={VISA_GUIDE_SLUGS} initialCount={10} accent="#D97706" />
          </SectionWrap>

          {/* 6. VISA CHECKER PAIRS */}
          <SectionWrap id="visa-checker" color="#0891B2">
            <SectionHeading
              label="Visa Checker"
              title="Check Visa Requirements by Nationality"
              subtitle="Instant visa requirement lookup for Bangladesh, India & other nationalities — visa-on-arrival, e-visa, or embassy required"
              href="/visa-checker"
              linkLabel="Open visa checker"
              color="#0891B2"
            />
            <ExpandablePills items={VISA_CHECKER_PAIRS} initialCount={10} accent="#0891B2" />
          </SectionWrap>

          {/* 7. E-VISA REQUIREMENT GUIDES */}
          <SectionWrap id="e-visa-guides" color="#2563EB">
            <SectionHeading
              label="E-Visa"
              title="E-Visa Requirements by Nationality"
              subtitle="Eligibility, documents, and turnaround times for electronic visas, by passport and destination"
              href="/visa/e-visa"
              linkLabel="All e-visa guides"
              color="#2563EB"
            />
            <ExpandablePills items={E_VISA_GUIDES} initialCount={10} accent="#2563EB" />
          </SectionWrap>

          {/* 8. COUNTRY HUBS */}
          <SectionWrap id="country-hubs" color="#DB2777">
            <SectionHeading
              label="Passport Hubs"
              title="Visa Hub by Passport Country"
              subtitle="Tailored visa guides for Dubai-based residents and Indian passport holders"
              href="/visa"
              linkLabel="All passport hubs"
              color="#DB2777"
            />
            <div className="flex flex-col gap-3">
              <HubCard hub={DUBAI_RESIDENTS} accent="#DB2777" />
              <HubCard hub={INDIA_HUB} accent="#DB2777" />
            </div>
          </SectionWrap>

          {/* 9. STUDY ABROAD */}
          <SectionWrap id="study-abroad" color="#4F46E5">
            <SectionHeading
              label="Study Abroad"
              title="Study Abroad Destinations"
              subtitle="Student visa guidance for popular academic destinations"
              href="/study-abroad"
              linkLabel="Full study guide"
              color="#4F46E5"
            />
            <div className="bg-white border border-[#EBEBEB] rounded-xl p-4">
              <div className="flex flex-wrap gap-1.5">
                {STUDY_ABROAD.map((s) => (
                  <CountryChip key={s.href} href={s.href} flag={s.flag} label={s.label} accent="#4F46E5" />
                ))}
              </div>
              <Link
                href="/study-abroad/student-visa"
                className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-bold text-[#4F46E5] hover:opacity-70 transition-opacity"
              >
                🎓 All Student Visa Guides →
              </Link>
            </div>
          </SectionWrap>

          {/* 10. SCHOLARSHIPS */}
          <SectionWrap id="scholarships" color="#16A34A">
            <SectionHeading
              label="Scholarships"
              title="Scholarships by Country"
              subtitle="Fully-funded and partial scholarships for Bangladeshi students"
              href="/scholarships"
              linkLabel="All scholarships"
              color="#16A34A"
            />
            <div className="bg-white border border-[#EBEBEB] rounded-xl p-4">
              <div className="flex flex-wrap gap-1.5">
                {SCHOLARSHIPS.map((s) => (
                  <PillLink key={s.href} href={s.href} accent="#16A34A">
                    {s.label}
                  </PillLink>
                ))}
              </div>
            </div>
          </SectionWrap>

          {/* 11. DOCUMENT & APPLICATION GUIDES */}
          <SectionWrap id="document-guides" color="#EA580C">
            <SectionHeading
              label="Step-by-Step Help"
              title="Visa Document & Application Guides"
              subtitle="Everything needed to prepare a complete, embassy-ready visa application"
              color="#EA580C"
            />
            <div className="flex flex-col gap-3">
              {DOCUMENT_GUIDES.map((group) => (
                <GuideGroupCard key={group.heading} group={group} color={group.color} />
              ))}
            </div>
          </SectionWrap>

          {/* 12. TOOLS & RESOURCES */}
          <SectionWrap id="visa-tools" color="#0D9488">
            <SectionHeading
              label="Free Tools"
              title="Travel &amp; Visa Tools"
              subtitle="Free tools to help you prepare, track, calculate, and successfully apply for any visa"
              href="/travel-resources"
              linkLabel="All resources"
              color="#0D9488"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {TOOLS.map((tool) => (
                <ToolCard key={tool.href} tool={tool} accent="#0D9488" />
              ))}
            </div>
          </SectionWrap>

          {/* 13. PROCESSING TIMES */}
          <SectionWrap id="processing-times" color="#9333EA">
            <SectionHeading
              label="Processing Data"
              title="Visa Processing Time Data"
              subtitle="Real applicant data on how long each embassy takes"
              href="/travel-resources/visa-processing-time-tracker"
              linkLabel="Track all times"
              color="#9333EA"
            />
            <ExpandableIconPills items={PROCESSING_TIMES} icon="⏱" initialCount={6} color="#9333EA" />
          </SectionWrap>

          {/* 14. REJECTION RATES */}
          <SectionWrap id="rejection-rates" color="#E11D48">
            <SectionHeading
              label="Rejection Stats"
              title="Visa Rejection Rate Data"
              subtitle="Country-specific rejection rates to help you apply smarter"
              href="/visa-rejection"
              linkLabel="See all stats"
              color="#E11D48"
            />
            <ExpandableIconPills items={REJECTION_RATES} icon="📊" initialCount={6} color="#E11D48" />
          </SectionWrap>

          {/* 15. OFFICES & LOCAL LANDING PAGES */}
          <SectionWrap id="our-offices" color="#65A30D">
            <SectionHeading
              label="Where We Are"
              title="Our Offices & Local Travel Agency Pages"
              subtitle="Reach a local Eammu Holidays team, or find the page for your city"
              href="/contact"
              linkLabel="Contact head office"
              color="#65A30D"
            />
            <div className="flex flex-col gap-3">
              <div
                className="bg-white border border-l-4 rounded-xl p-3.5"
                style={{ borderColor: hexToRgba("#65A30D", 0.16), borderLeftColor: "#65A30D" }}
              >
                <p className="text-[11px] font-bold text-[#6B7280] mb-2.5">Contact a Regional Office</p>
                <div className="flex flex-wrap gap-1.5">
                  {OFFICE_CONTACTS.map((o) => (
                    <CountryChip key={o.href} href={o.href} flag={o.flag} label={o.label} accent="#65A30D" />
                  ))}
                </div>
              </div>
              <div
                className="bg-white border border-l-4 rounded-xl p-3.5"
                style={{ borderColor: hexToRgba("#0EA5E9", 0.16), borderLeftColor: "#0EA5E9" }}
              >
                <p className="text-[11px] font-bold text-[#6B7280] mb-2.5">Travel Agency Near You</p>
                <div className="flex flex-wrap gap-1.5">
                  {OFFICE_LOCATIONS.map((o) => (
                    <CountryChip key={o.href} href={o.href} flag={o.flag} label={o.label} accent="#0EA5E9" />
                  ))}
                </div>
              </div>
            </div>
          </SectionWrap>

        </div>
      </div>
    </section>
  );
}