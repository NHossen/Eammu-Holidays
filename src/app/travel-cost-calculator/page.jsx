
import Link from 'next/link';
import TravelBudgetPlanner from './Travelbudgetplanner';
import HomeSeoLinks from '@/Components/HomeSeoLinks/HomeSeoLinks';

/* ─────────────────────────────────────────────────────────────────────────────
   SERVER COMPONENT — /travel-budget-planner
   Goal: Rank #1–5 for every travel budget / trip planning search query
───────────────────────────────────────────────────────────────────────────── */

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Travel Budget Planner 2025 — Plan Your Trip Cost, Best Budget Countries & Flight Deals | Eammu Holidays",

  description:
    "Free travel budget planner for Bangladesh travelers. Calculate trip costs, find the cheapest countries to visit, get flight ticket price estimates, hotel costs, visa fees, and daily budget for 100+ destinations. Plan your dream trip with our 2025 travel cost calculator and guide.",

  keywords: [
    // Primary intent
    "travel budget planner",
    "travel budget planner Bangladesh",
    "trip budget calculator",
    "how much does travel cost from Bangladesh",
    "travel cost calculator 2025",
    "trip cost estimator Bangladesh",
    // Budget travel
    "cheapest countries to visit from Bangladesh",
    "best budget travel destinations 2025",
    "affordable holiday destinations Bangladesh",
    "cheap countries to visit from Dhaka",
    "budget trip from Bangladesh",
    "low cost travel destinations Bangladesh 2025",
    // Flight
    "cheap flights from Dhaka",
    "flight ticket price Bangladesh 2025",
    "cheapest flights from Bangladesh",
    "flight booking tips Bangladesh",
    "how to find cheap flights from Dhaka",
    "flight cost estimator Bangladesh",
    // Hotels & daily cost
    "cheap hotels abroad for Bangladeshi tourists",
    "daily travel budget by country",
    "how much money needed for Thailand trip",
    "Dubai trip cost from Bangladesh",
    "Europe trip budget from Bangladesh",
    "Malaysia trip cost from Bangladesh",
    // Planning
    "trip planning guide Bangladesh",
    "how to plan international trip from Bangladesh",
    "international travel checklist Bangladesh",
    "travel tips Bangladesh 2025",
    "best time to travel from Bangladesh",
    "travel itinerary planner Bangladesh",
    // Specific destinations
    "Thailand trip budget from Bangladesh",
    "Georgia trip cost from Bangladesh",
    "Turkey trip budget Bangladesh",
    "Malaysia trip budget Bangladesh",
    "Maldives trip cost Bangladesh",
    "Singapore trip budget Bangladesh",
    "Japan trip cost from Bangladesh",
    // Long-tail
    "how much does a 7 day trip to Thailand cost from Bangladesh",
    "cheapest international destinations for Bangladeshi passport holders",
    "travel budget breakdown by country 2025",
  ],

  alternates: {
    canonical: "https://www.eammu.com/travel-cost-calculator",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.eammu.com/travel-cost-calculator",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Travel Cost Calculator 2025 — Plan Your Trip Cost from Bangladesh | Eammu Holidays",
    description:
      "Plan your next international trip with our free travel cost calculator. Flight costs, hotel prices, visa fees, daily expenses, and best budget destinations for Bangladeshi travelers — all in one place.",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Travel cost calculator for Bangladesh travelers — trip cost calculator 2025",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Travel Cost Calculator 2025 | Eammu Holidays Bangladesh",
    description:
      "Free trip cost calculator, cheapest destinations, flight prices, and travel planning guide for Bangladeshi travelers.",
    images: ["/preview-banner.webp"],
  },

  icons: { icon: "/emf.jpg" },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD — WebPage + FAQPage + BreadcrumbList + HowTo
───────────────────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.eammu.com/travel-cost-calculator#webpage",
      "url": "https://www.eammu.com/travel-cost-calculator",
      "name": "Travel Cost Calculator 2025 — Plan Your Trip Cost from Bangladesh",
      "description":
        "Free travel cost calculator for Bangladeshi travelers. Calculate trip costs, find cheapest countries, get flight and hotel estimates for 100+ destinations.",
      "isPartOf": { "@type": "WebSite", "url": "https://www.eammu.com" },
      "breadcrumb": { "@id": "https://www.eammu.com/travel-cost-calculator#breadcrumb" },
      "publisher": {
        "@type": "Organization",
        "name": "Eammu Holidays",
        "url": "https://www.eammu.com",
        "logo": { "@type": "ImageObject", "url": "https://www.eammu.com/emf.jpg" },
      },
      "dateModified": "2025-05-01",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the cheapest country to visit from Bangladesh in 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cheapest countries to visit from Bangladesh in 2025 are: (1) Georgia — visa-free 365 days, ~$30–50/day, flights from BDT 30,000–50,000. (2) Nepal — visa on arrival, ~$20–35/day, flights from BDT 8,000–15,000. (3) India — e-visa, ~$15–30/day, flights from BDT 5,000–12,000. (4) Thailand — visa on arrival, ~$40–60/day, flights from BDT 20,000–35,000. (5) Malaysia — e-visa, ~$35–55/day, flights from BDT 18,000–30,000.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a trip to Thailand cost from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 7-day Thailand trip from Bangladesh typically costs BDT 50,000–90,000 per person including: return flights (BDT 20,000–35,000), hotels (BDT 1,500–4,000/night), visa on arrival (~$35 ≈ BDT 3,800), daily food & transport (~$25–40/day). Total for 7 days: BDT 55,000–85,000 including all expenses.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a Dubai trip cost from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 5-day Dubai trip from Bangladesh costs approximately BDT 80,000–150,000 per person including: return flights (BDT 25,000–50,000), Dubai tourist visa (BDT 12,000–15,000), hotel (BDT 5,000–12,000/night), daily expenses AED 150–300/day (~BDT 4,500–9,000). Budget range: BDT 80,000 (economy) to BDT 1,50,000 (comfortable).",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Europe trip budget from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 10-day Europe trip (Schengen) from Bangladesh costs BDT 2,00,000–4,00,000 per person: return flights BDT 70,000–1,20,000, Schengen visa BDT 7,000–10,000, accommodation €40–120/night, daily expenses €60–120/day. Eastern Europe (Czech Republic, Hungary, Poland) is 40–50% cheaper than Western Europe (France, UK, Switzerland).",
          },
        },
        {
          "@type": "Question",
          "name": "How do I find cheap flights from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tips to find cheap flights from Bangladesh: (1) Book 6–8 weeks in advance for Asia, 3–6 months for Europe/USA. (2) Fly Tuesday–Thursday for lowest fares. (3) Use budget airlines: AirAsia, IndiGo, Air Arabia for Asia routes. (4) Compare Dhaka (DAC) vs Chittagong (CGP) departure airports. (5) Book during sale seasons (Eid, New Year). (6) Use Google Flights, Skyscanner with price alerts. (7) Consider connecting flights via Dubai, Kuala Lumpur, or Istanbul to save 30–50%.",
          },
        },
        {
          "@type": "Question",
          "name": "How much money should I carry for international travel from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recommended daily spending money by region: Southeast Asia (Thailand/Malaysia/Indonesia) $40–80/day, Middle East (Dubai/Qatar) $100–200/day, South Asia (India/Nepal/Sri Lanka) $20–50/day, Europe $80–150/day, Americas $100–200/day, Australia $100–180/day. Always carry 20% extra as emergency buffer. Use a travel card (Visa/Mastercard prepaid) for better exchange rates than cash.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the hidden costs in international travel from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hidden travel costs Bangladeshi travelers often miss: (1) Travel insurance BDT 2,000–8,000 (required for Schengen). (2) Airport tax/departure fee BDT 500–2,000. (3) Currency exchange loss 3–8% (use Visa prepaid card). (4) Luggage fees for budget airlines $15–50/bag. (5) Hotel resort fees $10–30/night. (6) Transportation from airport to city $10–50. (7) Roaming charges — buy local SIM on arrival. (8) Tips/service charges 10–20% in Western countries.",
          },
        },
        {
          "@type": "Question",
          "name": "When is the best time to travel from Bangladesh for cheap flights?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Best times for cheap international flights from Bangladesh: January–March (low season, 20–40% cheaper) for Southeast Asia and Middle East. May–June (shoulder season) for Europe. September–October for Japan and Korea. Avoid: Eid-ul-Fitr, Eid-ul-Adha, December 20–January 5 (peak prices 50–100% higher). Book 3–6 months before Eid for the best fares.",
          },
        },
      ],
    },
    {
      "@type": "HowTo",
      "name": "How to Plan an International Trip Budget from Bangladesh",
      "description": "Step-by-step guide to planning and calculating your travel budget from Bangladesh.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Choose your destination",     "text": "Select your destination based on visa accessibility, budget, and season. Georgia, Nepal, and Thailand are most budget-friendly for Bangladeshis." },
        { "@type": "HowToStep", "position": 2, "name": "Check visa requirements",     "text": "Check if your destination requires a visa. Use our visa guide or checklist generator to get the exact documents needed." },
        { "@type": "HowToStep", "position": 3, "name": "Calculate flight costs",      "text": "Search flights 6–8 weeks in advance. Use Skyscanner, Google Flights, or contact Eammu Holidays for the best fares from Dhaka." },
        { "@type": "HowToStep", "position": 4, "name": "Estimate daily expenses",    "text": "Research accommodation, food, and transport costs for your destination. Use our per-day budget guide for 50+ countries." },
        { "@type": "HowToStep", "position": 5, "name": "Add visa & insurance costs",  "text": "Add visa application fees and travel insurance to your budget. Travel insurance is compulsory for Schengen and UK visas." },
        { "@type": "HowToStep", "position": 6, "name": "Create final budget",          "text": "Add all costs + 20% buffer for emergencies. Use our travel cost calculator to get the total per person." },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.eammu.com/travel-budget-planner#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",                 "item": "https://www.eammu.com" },
        { "@type": "ListItem", "position": 2, "name": "Travel Resources",     "item": "https://www.eammu.com/travel-resources" },
        { "@type": "ListItem", "position": 3, "name": "Travel Cost Calculator","item": "https://www.eammu.com/travel-cost-calculator" },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────────────────── */
export default function TravelBudgetPlannerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

   

      <TravelBudgetPlanner />
         {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-0">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li><Link href="/"                   className="hover:text-[#005a31] transition-colors font-medium">Home</Link></li>
          <li className="text-gray-300">/</li>
          <li><Link href="/travel-resources"   className="hover:text-[#005a31] transition-colors font-medium">Travel Resources</Link></li>
          <li className="text-gray-300">/</li>
          <li className="text-[#005a31] font-bold">Travel Budget Planner</li>
        </ol>
      </nav>
      <HomeSeoLinks />
    </>
  );
}