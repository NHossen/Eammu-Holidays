import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

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

// Footer quick links — grouped by category
const FOOTER_GROUPS = [
  {
    heading: "Visa Services",
    links: [
      { label: "All Visa Services", href: "/our-services/visa-services" },
      { label: "Our Services", href: "/our-services" },
      { label: "Tourist Visa from Bangladesh", href: "/our-services/visa-services/tourist-visa-from-bangladesh" },
      { label: "Student Visa from Bangladesh", href: "/our-services/visa-services/student-visa-from-bangladesh" },
      { label: "Work Visa from Bangladesh", href: "/our-services/visa-services/work-visa-from-bangladesh" },
      { label: "Bangladesh Tourist Visa", href: "/visa" },
      { label: "Dubai Residents Visa", href: "/visa/dubai-residents" },
      { label: "India Passport Visas", href: "/visa/india" },
      { label: "Visa Guide", href: "/visa/visa-guide" },
      { label: "E-Visa Guide", href: "/visa/e-visa" },
      { label: "Schengen Visa", href: "/schengen-visa" },
      { label: "Visa Checker", href: "/visa-checker" },
    ],
  },
  {
    heading: "Resources & Tools",
    links: [
      { label: "Study Abroad", href: "/study-abroad" },
      { label: "Scholarships", href: "/scholarships" },
      { label: "Processing Times", href: "/travel-resources/visa-processing-time-tracker" },
      { label: "Rejection Rates", href: "/visa-rejection" },
      { label: "Travel Insurance", href: "/travel-insurance" },
      { label: "Flight Booking", href: "/flight-booking" },
      { label: "Things to Do", href: "/our-services/things-to-do" },
      { label: "Tour Packages", href: "/our-services/tour-packages" },
      { label: "Target IELTS Immigration Center", href: "/target-ielts-immigration-center" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/online-travel-agency-bangladesh" },
      { label: "Naeem Hossen — Founder", href: "/naeem-hossen" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Offers", href: "/offers" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
// Note: items already present in the site Footer (Eammu Group ventures, Careers,
// Privacy Policy, Newsfeeds, Our Leading Team, Travel Resources) are intentionally
// left out here to avoid duplicate links between this block and the Footer.

// ─────────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────────────────────────────────────

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
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-[#0057FF] mb-2">
      {children}
    </span>
  );
}

// Subsection heading. Renders as <h3> so the outline nests correctly under
// the single <h2> that introduces this whole block (see component root).
function SectionHeading({ label, title, subtitle, href, linkLabel }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
      <div>
        {label && <SectionLabel>{label}</SectionLabel>}
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
          className="shrink-0 mt-0.5 text-[11px] font-semibold text-[#0057FF] hover:text-[#003FBF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0057FF] rounded flex items-center gap-1 transition-colors whitespace-nowrap"
        >
          {linkLabel || "View all"} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}

function Divider() {
  return <hr className="border-[#F0F0F0] my-6 sm:my-8" />;
}

function VisaTypeCard({ type }) {
  const accentStyle = { borderTopColor: type.color };
  return (
    <div
      className="bg-white border border-[#EBEBEB] rounded-xl p-4 flex flex-col hover:border-[#C8C8C8] hover:shadow-md transition-all duration-200 group border-t-2"
      style={accentStyle}
    >
      <Link
        href={type.href}
        className="flex items-center gap-2 mb-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0057FF] rounded"
      >
        <span className="text-xl" aria-hidden="true">{type.icon}</span>
        <span className="text-[0.9rem] font-bold text-[#0D0D0D] group-hover:text-[#0057FF] transition-colors leading-tight">
          {type.label}
        </span>
      </Link>
      <p className="text-[11px] text-[#9CA3AF] mb-3 leading-relaxed">{type.description}</p>
      <ul className="space-y-1.5 flex-1">
        {type.links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[12px] text-[#4B5563] hover:text-[#0057FF] transition-colors flex items-center gap-1.5 leading-snug"
            >
              <span className="w-1 h-1 rounded-full bg-[#D1D5DB] shrink-0" aria-hidden="true" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={type.href}
        className="mt-3 text-[11px] font-semibold text-[#0057FF] hover:text-[#003FBF] transition-colors"
      >
        All {type.label} guides →
      </Link>
    </div>
  );
}

function ToolCard({ tool }) {
  return (
    <Link
      href={tool.href}
      className="group flex items-start gap-3 bg-white border border-[#EBEBEB] rounded-xl p-3.5 hover:border-[#0057FF] hover:shadow-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0057FF]"
    >
      <span
        className="text-[1.3rem] shrink-0 w-9 h-9 flex items-center justify-center bg-[#F5F8FF] rounded-lg group-hover:bg-[#EBF0FF] transition-colors"
        aria-hidden="true"
      >
        {tool.icon}
      </span>
      <div>
        <div className="text-[0.8rem] font-bold text-[#0D0D0D] group-hover:text-[#0057FF] transition-colors leading-tight mb-0.5">
          {tool.label}
        </div>
        <div className="text-[11px] text-[#9CA3AF] leading-relaxed">{tool.desc}</div>
      </div>
    </Link>
  );
}

function HubCard({ hub }) {
  return (
    <div className="bg-[#FAFAFA] border border-[#EBEBEB] rounded-xl p-4 hover:border-[#C8C8C8] transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <Link href={hub.href} className="flex items-center gap-2 group">
          <span className="text-xl" aria-hidden="true">{hub.icon}</span>
          <div>
            <div className="text-[0.86rem] font-bold text-[#0D0D0D] group-hover:text-[#0057FF] transition-colors leading-tight">
              {hub.label} Visas
            </div>
            <div className="text-[10px] text-[#9CA3AF]">{hub.tagline}</div>
          </div>
        </Link>
        <Link
          href={hub.href}
          className="text-[11px] font-semibold text-[#0057FF] hover:text-[#003FBF] transition-colors whitespace-nowrap"
        >
          View all →
        </Link>
      </div>
      <ul className="grid grid-cols-1 gap-1">
        {hub.links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[12px] text-[#4B5563] hover:text-[#0057FF] transition-colors flex items-center gap-1.5"
            >
              <span className="w-1 h-1 rounded-full bg-[#D1D5DB] shrink-0" aria-hidden="true" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CountryChip({ href, flag, label }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 bg-white border border-[#E5E7EB] hover:border-[#0057FF] hover:bg-[#F5F8FF] rounded-lg px-2.5 py-1.5 text-[12px] font-medium text-[#374151] hover:text-[#0057FF] transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0057FF]"
    >
      <span aria-hidden="true">{flag}</span>
      {label}
    </Link>
  );
}

function PillLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex text-[12px] text-[#4B5563] hover:text-[#0057FF] bg-[#F9FAFB] hover:bg-[#EBF0FF] border border-[#E5E7EB] hover:border-[#0057FF] rounded-full px-3 py-1 transition-all duration-150 leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0057FF]"
    >
      {children}
    </Link>
  );
}

function StatRow({ icon, label, href }) {
  return (
    <li>
      <Link href={href} className="flex items-start gap-2 group py-1">
        <span className="text-[#9CA3AF] text-[12px] mt-0.5 shrink-0" aria-hidden="true">{icon}</span>
        <span className="text-[12px] text-[#4B5563] group-hover:text-[#0057FF] transition-colors leading-snug">
          {label}
        </span>
      </Link>
    </li>
  );
}

// Shows the first `initialCount` pill links, tucking the rest behind a native
// <details> disclosure. No JS required, fully crawlable/indexable, and keeps
// the visible page from looking like an auto-generated link dump.
function ExpandablePills({ items, initialCount = 10 }) {
  const visible = items.slice(0, initialCount);
  const rest = items.slice(initialCount);
  return (
    <div className="flex flex-wrap gap-1.5 items-start">
      {visible.map((v) => (
        <PillLink key={v.href} href={v.href}>
          {v.label}
        </PillLink>
      ))}
      {rest.length > 0 && (
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="list-none cursor-pointer inline-flex text-[12px] font-semibold text-[#0057FF] bg-white hover:bg-[#F5F8FF] border border-[#0057FF] rounded-full px-3 py-1 transition-all duration-150">
            <span className="group-open:hidden">Show {rest.length} more</span>
            <span className="hidden group-open:inline">Show fewer</span>
          </summary>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {rest.map((v) => (
              <PillLink key={v.href} href={v.href}>
                {v.label}
              </PillLink>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

// Same disclosure pattern, but for flag-chip grids (country lists).
function ExpandableChips({ items, initialCount = 16, gridClass }) {
  const visible = items.slice(0, initialCount);
  const rest = items.slice(initialCount);
  return (
    <div>
      <div className={gridClass}>
        {visible.map((v) => (
          <CountryChip key={v.href} href={v.href} flag={v.flag} label={v.label} />
        ))}
      </div>
      {rest.length > 0 && (
        <details className="group mt-2 [&_summary::-webkit-details-marker]:hidden">
          <summary className="list-none cursor-pointer inline-flex text-[12px] font-semibold text-[#0057FF] bg-white hover:bg-[#F5F8FF] border border-[#0057FF] rounded-lg px-3 py-1.5 transition-all duration-150">
            <span className="group-open:hidden">Show {rest.length} more countries</span>
            <span className="hidden group-open:inline">Show fewer</span>
          </summary>
          <div className={`${gridClass} mt-2`}>
            {rest.map((v) => (
              <CountryChip key={v.href} href={v.href} flag={v.flag} label={v.label} />
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

// Same disclosure pattern for the stat-row style lists (processing times, rejections).
function ExpandableStatRows({ items, icon, initialCount = 6 }) {
  const visible = items.slice(0, initialCount);
  const rest = items.slice(initialCount);
  return (
    <div className="bg-white border border-[#EBEBEB] rounded-xl p-3.5">
      <ul className="divide-y divide-[#F3F4F6]">
        {visible.map((item) => (
          <StatRow key={item.href} icon={icon} label={item.label} href={item.href} />
        ))}
      </ul>
      {rest.length > 0 && (
        <details className="group mt-1 [&_summary::-webkit-details-marker]:hidden">
          <summary className="list-none cursor-pointer text-[11px] font-semibold text-[#0057FF] py-1.5">
            <span className="group-open:hidden">Show {rest.length} more →</span>
            <span className="hidden group-open:inline">Show fewer ←</span>
          </summary>
          <ul className="divide-y divide-[#F3F4F6] border-t border-[#F3F4F6]">
            {rest.map((item) => (
              <StatRow key={item.href} icon={icon} label={item.label} href={item.href} />
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}

// Compact bordered list used for the document-guide categories.
function GuideGroupCard({ group }) {
  return (
    <div className="bg-white border border-[#EBEBEB] rounded-xl p-3.5">
      <div className="flex items-center gap-2 mb-2.5">
        <span className="text-base" aria-hidden="true">{group.icon}</span>
        <span className="text-[12.5px] font-bold text-[#0D0D0D]">{group.heading}</span>
      </div>
      <ul className="space-y-1.5">
        {group.links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[12px] text-[#4B5563] hover:text-[#0057FF] transition-colors flex items-start gap-1.5 leading-snug"
            >
              <span className="w-1 h-1 rounded-full bg-[#D1D5DB] shrink-0 mt-1.5" aria-hidden="true" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export default function HomeSeoLinks() {
  const lastUpdated = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const chipGrid = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1.5";

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

        {/* ── SECTION INTRO ─────────────────────────────────────────────── */}
        {/* This is the only heading in the block — kept at h2 so it nests under
            the page's existing h1 instead of competing with it. Every
            sub-section below uses h3, so the outline reads h1 → h2 → h3. */}
        <div className="mb-8 pb-5 border-b border-[#EBEBEB]">
          <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-[#0057FF] mb-2">
            Eammu Holidays — Visa &amp; Travel Services
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-[#0D0D0D] tracking-tight">
            Complete Visa &amp; Travel Resource Hub
          </h2>
          <p className="text-[0.83rem] text-[#6B7280] mt-1.5 max-w-2xl leading-relaxed">
            IATA-accredited visa assistance from Bangladesh — tourist, student, work &amp; e-visas, Europe &amp; Schengen guidance, document preparation guides, study abroad support, local offices, and free travel planning tools.
          </p>
          <p className="text-[11px] text-[#9CA3AF] mt-2">
            Visa rules change often — this hub is reviewed and refreshed monthly. Last reviewed: {lastUpdated}.
          </p>
        </div>

        {/* ── 1. VISA TYPES ────────────────────────────────────────────── */}
        <div id="visa-types">
          <SectionHeading
            label="Visa Services"
            title="Visa Services from Bangladesh"
            subtitle="Tourist, student, work, e-visa, and European visa assistance — expert guidance for every journey"
            href="/our-services/visa-services"
            linkLabel="All visa services"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {VISA_GUIDES.map((type) => (
              <VisaTypeCard key={type.slug} type={type} />
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 2. VISA APPLICATION BY COUNTRY (cornerstone pages) ─────────── */}
        <div id="visa-application">
          <SectionHeading
            label="Cornerstone Guides"
            title="Visa Application Pages by Country"
            subtitle="In-depth requirements, fees, and step-by-step application help for each destination"
            href="/our-services/visa-services"
            linkLabel="All countries"
          />
          <ExpandableChips items={VISA_APPLICATION_COUNTRIES} initialCount={16} gridClass={chipGrid} />
        </div>

        <Divider />

        {/* ── 3. BANGLADESH TOURIST VISAS (/visa/[country]-visa) ────────── */}
        <div id="bangladesh-tourist-visas">
          <SectionHeading
            label="Bangladesh Nationals"
            title="Tourist Visa for Bangladesh Nationals"
            subtitle="Quick-reference tourist visa pages — fees & on-arrival vs. e-visa vs. embassy requirements"
            href="/visa"
            linkLabel="All tourist visas"
          />
          <ExpandableChips items={BANGLADESH_TOURIST_VISAS} initialCount={16} gridClass={chipGrid} />
        </div>

        <Divider />

        {/* ── 4. POPULAR DESTINATIONS ──────────────────────────────────── */}
        <div id="popular-destinations">
          <SectionHeading
            label="Most Popular"
            title="Popular Visa Destinations"
            subtitle="Most searched countries for Bangladeshi passport holders"
            href="/our-services/visa-services"
            linkLabel="All destinations"
          />
          <div className="flex flex-wrap gap-1.5">
            {POPULAR_DESTINATIONS.map((d) => (
              <CountryChip key={d.href} href={d.href} flag={d.flag} label={d.label} />
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 5. COUNTRY VISA GUIDES (slug pages) ──────────────────────── */}
        <div id="visa-guides">
          <SectionHeading
            label="In-Depth Guides"
            title="Visa Guides by Nationality"
            subtitle="Step-by-step visa guides — requirements, documents, fees, and processing times"
            href="/visa/visa-guide"
            linkLabel="All guides"
          />
          <ExpandablePills items={VISA_GUIDE_SLUGS} initialCount={10} />
        </div>

        <Divider />

        {/* ── 6. VISA CHECKER PAIRS ─────────────────────────────────────── */}
        <div id="visa-checker">
          <SectionHeading
            label="Visa Checker"
            title="Check Visa Requirements by Nationality"
            subtitle="Instant visa requirement lookup for Bangladesh, India & other nationalities — visa-on-arrival, e-visa, or embassy required"
            href="/visa-checker"
            linkLabel="Open visa checker"
          />
          <ExpandablePills items={VISA_CHECKER_PAIRS} initialCount={10} />
        </div>

        <Divider />

        {/* ── 7. E-VISA REQUIREMENT GUIDES ─────────────────────────────── */}
        <div id="e-visa-guides">
          <SectionHeading
            label="E-Visa"
            title="E-Visa Requirements by Nationality"
            subtitle="Eligibility, documents, and turnaround times for electronic visas, by passport and destination"
            href="/visa/e-visa"
            linkLabel="All e-visa guides"
          />
          <ExpandablePills items={E_VISA_GUIDES} initialCount={10} />
        </div>

        <Divider />

        {/* ── 8. COUNTRY HUBS ───────────────────────────────────────────── */}
        <div id="country-hubs">
          <SectionHeading
            label="Passport Hubs"
            title="Visa Hub by Passport Country"
            subtitle="Tailored visa guides for Dubai-based residents and Indian passport holders"
            href="/visa"
            linkLabel="All passport hubs"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <HubCard hub={DUBAI_RESIDENTS} />
            <HubCard hub={INDIA_HUB} />
          </div>
        </div>

        <Divider />

        {/* ── 9. STUDY ABROAD + SCHOLARSHIPS ───────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="study-scholarships">

          <div id="study-abroad">
            <SectionHeading
              label="Study Abroad"
              title="Study Abroad Destinations"
              subtitle="Student visa guidance for popular academic destinations"
              href="/study-abroad"
              linkLabel="Full study guide"
            />
            <div className="bg-white border border-[#EBEBEB] rounded-xl p-4">
              <div className="grid grid-cols-2 gap-1.5">
                {STUDY_ABROAD.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-2 text-[12px] text-[#4B5563] hover:text-[#0057FF] transition-colors py-1 border-b border-[#F3F4F6] last:border-0"
                  >
                    <span aria-hidden="true">{s.flag}</span>
                    {s.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/study-abroad/student-visa"
                className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-bold text-[#0057FF] hover:text-[#003FBF] transition-colors"
              >
                🎓 All Student Visa Guides →
              </Link>
            </div>
          </div>

          <div id="scholarships">
            <SectionHeading
              label="Scholarships"
              title="Scholarships by Country"
              subtitle="Fully-funded and partial scholarships for Bangladeshi students"
              href="/scholarships"
              linkLabel="All scholarships"
            />
            <div className="bg-white border border-[#EBEBEB] rounded-xl p-4">
              <ul className="space-y-0.5">
                {SCHOLARSHIPS.map((s, i) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className={`flex items-center gap-2 text-[12px] text-[#4B5563] hover:text-[#0057FF] transition-colors py-1.5 ${
                        i < SCHOLARSHIPS.length - 1 ? "border-b border-[#F3F4F6]" : ""
                      }`}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#D1D5DB] shrink-0" aria-hidden="true" />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── 10. DOCUMENT & APPLICATION GUIDES ─────────────────────────── */}
        <div id="document-guides">
          <SectionHeading
            label="Step-by-Step Help"
            title="Visa Document & Application Guides"
            subtitle="Everything needed to prepare a complete, embassy-ready visa application"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {DOCUMENT_GUIDES.map((group) => (
              <GuideGroupCard key={group.heading} group={group} />
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 11. TOOLS & RESOURCES ─────────────────────────────────────── */}
        <div id="visa-tools">
          <SectionHeading
            label="Free Tools"
            title="Travel &amp; Visa Tools"
            subtitle="Free tools to help you prepare, track, calculate, and successfully apply for any visa"
            href="/travel-resources"
            linkLabel="All resources"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {TOOLS.map((tool) => (
              <ToolCard key={tool.href} tool={tool} />
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 12. PROCESSING TIMES + REJECTION RATES ────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div id="processing-times">
            <SectionHeading
              label="Processing Data"
              title="Visa Processing Time Data"
              subtitle="Real applicant data on how long each embassy takes"
              href="/travel-resources/visa-processing-time-tracker"
              linkLabel="Track all times"
            />
            <ExpandableStatRows items={PROCESSING_TIMES} icon="⏱" initialCount={6} />
          </div>

          <div id="rejection-rates">
            <SectionHeading
              label="Rejection Stats"
              title="Visa Rejection Rate Data"
              subtitle="Country-specific rejection rates to help you apply smarter"
              href="/visa-rejection"
              linkLabel="See all stats"
            />
            <ExpandableStatRows items={REJECTION_RATES} icon="📊" initialCount={6} />
          </div>
        </div>

        <Divider />

        {/* ── 13. OFFICES & LOCAL LANDING PAGES ─────────────────────────── */}
        <div id="our-offices">
          <SectionHeading
            label="Where We Are"
            title="Our Offices & Local Travel Agency Pages"
            subtitle="Reach a local Eammu Holidays team, or find the page for your city"
            href="/contact"
            linkLabel="Contact head office"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-[#EBEBEB] rounded-xl p-3.5">
              <p className="text-[11px] font-bold text-[#6B7280] mb-2.5">Contact a Regional Office</p>
              <div className="flex flex-wrap gap-1.5">
                {OFFICE_CONTACTS.map((o) => (
                  <CountryChip key={o.href} href={o.href} flag={o.flag} label={o.label} />
                ))}
              </div>
            </div>
            <div className="bg-white border border-[#EBEBEB] rounded-xl p-3.5">
              <p className="text-[11px] font-bold text-[#6B7280] mb-2.5">Travel Agency Near You</p>
              <div className="flex flex-wrap gap-1.5">
                {OFFICE_LOCATIONS.map((o) => (
                  <CountryChip key={o.href} href={o.href} flag={o.flag} label={o.label} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── 14. SEO FOOTER NAV ────────────────────────────────────────── */}
        <nav aria-label="Eammu Holidays — site-wide quick navigation" className="pt-1">
          <p className="text-[10px] font-bold text-[#C5C7CB] uppercase tracking-[0.15em] mb-4">
            Quick Navigation
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.heading}>
                <p className="text-[11px] font-bold text-[#6B7280] mb-2.5">{group.heading}</p>
                <ul className="space-y-1.5">
                  {group.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[11.5px] text-[#9CA3AF] hover:text-[#0057FF] hover:underline underline-offset-2 transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[11px] text-[#C5C7CB]">
            © {new Date().getFullYear()} Eammu Holidays · IATA Accredited Travel Agency · Bangladesh
          </p>
        </nav>

      </div>
    </section>
  );
}