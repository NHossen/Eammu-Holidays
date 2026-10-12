// Shared, serializable data. No "use client" so both Server and Client Components can import it.

export const SITE_URL = "https://eammu.com";
export const WHATSAPP_NUMBER = "8801631312524"; // same number used by the existing Things to Do page

export const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const ACTIVITIES = [
  {
    id: "sylhet-tour",
    title: "Sylhet Tour",
    region: "Bangladesh",
    img: "https://ttg.com.bd/uploads/tours/plans/207_ratargul_swamp_forest_sylhetjpg.jpg",
    alt: "Ratargul Swamp Forest boat tour in Sylhet - Eammu Holidays",
    link: "/our-services/tour-packages",
    waMsg: "I want to book the Sylhet Tour",
    summary:
      "Sylhet, in north-eastern Bangladesh, is known for green hills, tea estates and waterways. This tour is built around its best-known nature spots.",
    highlights: [
      "Boat trip through Ratargul Swamp Forest",
      "Scenic hills and river views at Jaflong",
      "Lalakhal's blue water and tea plantations",
      "Tea garden visits around Srimangal",
    ],
    note: "The exact stops and duration are agreed with you when you book.",
    secondary: { href: "/our-services/tour-packages", label: "See all tour packages" },
  },
  {
    id: "dhaka-tour",
    title: "Dhaka Tour",
    region: "Bangladesh",
    img: "https://res.klook.com/images/w_1200,h_630,c_fill,q_65/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/wxekabbs9sdnofxhjgqe/Dhaka%20Fantasy%20Kingdom%20Tour.jpg",
    alt: "Fantasy Kingdom and Dhaka City Day Tour Packages",
    link: "/our-services/tour-packages",
    waMsg: "I want to book the Dhaka Tour",
    summary:
      "A city day out that mixes Dhaka's history with modern attractions, suitable for families, visitors on a layover and groups.",
    highlights: [
      "Old Dhaka and Mughal-era landmarks such as Lalbagh Fort and Ahsan Manzil",
      "The National Parliament House (Jatiya Sangsad Bhaban)",
      "Fantasy Kingdom amusement park for a family-friendly stop",
      "Local food and shopping stops on request",
    ],
    note: "Itineraries can be shortened or extended to fit your time in the city.",
    secondary: { href: "/our-services/tour-packages", label: "See all tour packages" },
  },
  {
    id: "desert-safari",
    title: "Desert Safari",
    region: "Dubai, UAE",
    img: "https://cdn.hotairballoonindubai.com/wp-content/uploads/2012/06/Morning-Bliss-Balloon-Ride-Home-Page-thumbnail-820x520.jpg",
    alt: "Morning Hot Air Balloon and Desert Safari in Dubai",
    link: "/our-services/tour-packages",
    waMsg: "I want to book the Desert Safari",
    summary:
      "Dubai's desert experiences range from dune drives to evening camp-style programmes and morning hot air balloon flights. Tell us what you prefer and we will check the options for your dates.",
    highlights: [
      "Dune drive across the desert",
      "Evening desert camp experience",
      "Morning hot air balloon flight (where available)",
      "Hotel pick-up and drop-off can be discussed when you book",
    ],
    note: "Inclusions, timings and availability depend on the programme and date you choose.",
    secondary: { href: "/our-services/tour-packages", label: "See all tour packages" },
  },
  {
    id: "armenia-city",
    title: "Armenia City",
    region: "Yerevan, Armenia",
    img: "https://southtravels.com/public/uploads/MZcyf88tObOWPA5x3wSCXBHA0t3jxXpKyJYC7Bji.jpeg",
    alt: "Armenia City Sightseeing and Cultural Heritage Tour",
    link: "/visa-services/armenia-visa-application",
    waMsg: "I want to book the Armenia City Tour",
    summary:
      "Yerevan is a compact capital with a strong cultural and historical identity, and a good base for day trips to monasteries and mountain scenery.",
    highlights: [
      "Yerevan city sightseeing, including Republic Square and the Cascade Complex",
      "Heritage sites such as Garni Temple and Geghard Monastery",
      "Lake Sevan as a scenic day trip",
      "Museums and local cuisine",
    ],
    note: "Entry requirements depend on your nationality. Check the visa guide before you travel.",
    secondary: { href: "/visa-services/armenia-visa-application", label: "Armenia visa guide" },
  },
  {
    id: "georgia-wine",
    title: "Georgia Wine",
    region: "Tbilisi & Kakheti, Georgia",
    img: "https://cdn.yourholiday.me/static/dynimg/itinerary/64/600x300/2969418-2969417_georgia.jpg",
    alt: "Georgia Wine Tasting and Caucasus Mountain Exploration Tour",
    link: "/visa-services/georgia-visa-application",
    waMsg: "I want to book the Georgia Wine Tour",
    summary:
      "Georgia combines one of the world's oldest wine-making traditions with the Caucasus mountains and the character of old Tbilisi.",
    highlights: [
      "Tbilisi old town and its sulphur-bath district",
      "Wine tasting in the Kakheti region, home to traditional qvevri winemaking",
      "Caucasus mountain scenery, including Kazbegi",
      "Local food experiences",
    ],
    note: "Entry requirements depend on your nationality. Check the visa guide before you travel.",
    secondary: { href: "/visa-services/georgia-visa-application", label: "Georgia visa guide" },
  },
];