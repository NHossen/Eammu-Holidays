import FlightIframe from "@/Components/FlightIframe";


export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-black text-center mb-3">
          Search Cheap Flights
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Best Airfare Worldwide • Instant Booking
        </p>

       <FlightIframe />
      </section>
    </main>
  );
}