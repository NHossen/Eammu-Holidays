import FlightSearch from "@/Components/Client/eammuGroupClient/FlightSearch/FlightSearch";

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Flight Booking | Cheap Air Tickets, International Flights & Best Deals",

  description:
    "Book cheap air tickets online with Eammu Holidays. Compare international flight fares, search one-way or return tickets, and find best airline deals for Dubai, UK, USA, Canada, Europe, Asia, and worldwide destinations with secure booking support.",

  keywords: [
    "flight booking",
    "cheap air tickets",
    "international flight booking",
    "online flight booking Bangladesh",
    "Dubai flight tickets",
    "UK flight booking",
    "USA air tickets",
    "Canada flight deals",
    "Europe cheap flights",
    "best airline ticket prices",
    "return flight booking",
    "one way flight tickets",
    "travel agency flight booking",
    "Eammu Holidays flights"
  ],

  alternates: {
    canonical: "https://www.eammu.com/flight-booking",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "Flight Booking | Cheap Air Tickets & International Travel Deals",

    description:
      "Search flights and compare airfares worldwide with Eammu Holidays. Find low-cost tickets, premium airlines, and easy online booking support.",

    url: "https://www.eammu.com/flight-booking",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Flight booking cheap air tickets worldwide",
      },
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "International flight booking by Eammu Holidays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Flight Booking | Cheap Air Tickets & Best Deals",

    description:
      "Book international flights online with best airfare deals worldwide.",

    images: ["/preview-banner.webp"],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen">
     <section className="relative max-w-7xl mx-auto px-6 py-24 md:py-24 flex flex-col items-center justify-center">
  {/* TOP BADGE */}
  <div className="mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
    Premium Flight Search
  </div>

{/* SEARCH COMPONENT WRAPPER */}
<div className="w-full">
  <FlightSearch />
</div>

{/* HIGH SEO CONTENT SECTION */}
<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">

  {/* H1 */}
  <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
    Online Leading Travel Agency Bangladesh | Cheap Flight Booking, Visa & Tour Packages
  </h1>

  {/* Intro */}
  <p className="text-lg text-gray-600 leading-relaxed mb-6">
    Welcome to Bangladesh’s leading online travel agency offering cheap flight booking, worldwide visa assistance, 
    holiday tour packages, hotel reservations, Umrah packages, student visa guidance, and luxury travel services. 
    We help travelers from Bangladesh book affordable airline tickets, explore international destinations, 
    and enjoy smooth travel planning with trusted professional support.
  </p>

  <p className="text-lg text-gray-600 leading-relaxed mb-8">
    Whether you need Dubai air tickets, UK visa support, Thailand holiday packages, Europe tours, 
    USA tourist visa help, or family vacation planning, our expert team provides complete travel solutions 
    at the best price. We compare airline fares, secure travel deals, and simplify the booking process online.
  </p>

  {/* H2 */}
  <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
    Why We Are a Trusted Online Travel Agency in Bangladesh
  </h2>

  <div className="grid md:grid-cols-2 gap-6 mb-10">

    <div className="bg-white rounded-2xl shadow-md border p-6">
      <h3 className="font-bold text-xl mb-2">Cheap International Flight Tickets</h3>
      <p className="text-gray-600">
        Compare airfare prices for Dubai, Saudi Arabia, Malaysia, Thailand, UK, Canada, USA and worldwide destinations.
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-md border p-6">
      <h3 className="font-bold text-xl mb-2">Worldwide Visa Processing Support</h3>
      <p className="text-gray-600">
        Tourist visa, student visa, business visa, visit visa and travel documentation support.
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-md border p-6">
      <h3 className="font-bold text-xl mb-2">Holiday Tour Packages</h3>
      <p className="text-gray-600">
        Budget and luxury holiday packages for Dubai, Thailand, Maldives, Europe, Turkey and more.
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-md border p-6">
      <h3 className="font-bold text-xl mb-2">24/7 Customer Support</h3>
      <p className="text-gray-600">
        Friendly travel consultants ready to help before and after booking.
      </p>
    </div>

  </div>

  {/* H2 */}
  <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
    Cheap Flight Booking from Bangladesh to Worldwide Destinations
  </h2>

  <p className="text-gray-600 leading-relaxed mb-6">
    Looking for cheap air tickets from Bangladesh? We provide discounted fares for one-way, round-trip, 
    group booking and last-minute flights. Book flights from Dhaka, Chattogram, Sylhet, Cox’s Bazar and other cities 
    to Dubai, Jeddah, Riyadh, Kuala Lumpur, Bangkok, London, Toronto, New York and many more destinations.
  </p>

  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10 text-gray-700 list-disc list-inside">
    <li>Dhaka to Dubai Cheap Flights</li>
    <li>Dhaka to Kuala Lumpur Flights</li>
    <li>Bangladesh to Saudi Arabia Tickets</li>
    <li>Dhaka to London Flights</li>
    <li>Bangladesh to Thailand Packages</li>
    <li>Dhaka to Canada Flights</li>
  </ul>

  {/* H2 */}
  <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
    Bangladesh Travel Services We Offer
  </h2>

  <p className="text-gray-600 leading-relaxed mb-6">
    We offer complete travel management services for individuals, families, students, workers and corporate travelers.
    Our mission is to provide reliable service, affordable prices and a smooth travel experience.
  </p>

  <div className="grid md:grid-cols-2 gap-4 mb-10 text-gray-700">
    <div>✔ Air Ticket Booking</div>
    <div>✔ Hotel Reservation</div>
    <div>✔ Tourist Visa Support</div>
    <div>✔ Student Visa Guidance</div>
    <div>✔ Umrah Packages</div>
    <div>✔ Honeymoon Tours</div>
    <div>✔ Family Vacation Deals</div>
    <div>✔ Group Travel Booking</div>
  </div>

  {/* FAQ */}
  <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
    Frequently Asked Questions
  </h2>

  <div className="space-y-5">

    <div>
      <h3 className="font-bold">Which is the best online travel agency in Bangladesh?</h3>
      <p className="text-gray-600">
        A trusted travel agency should offer cheap flights, visa support, secure payment and fast customer service.
      </p>
    </div>

    <div>
      <h3 className="font-bold">How can I get cheap flight tickets?</h3>
      <p className="text-gray-600">
        Book early, compare prices, choose flexible dates and monitor airfare offers.
      </p>
    </div>

    <div>
      <h3 className="font-bold">Can I book flights and visa together?</h3>
      <p className="text-gray-600">
        Yes, we provide combined travel support including flights, visa guidance and holiday packages.
      </p>
    </div>

  </div>

</section>
</section>
    </main>
  );
}