import FlightSearch from "@/Components/Client/eammuGroupClient/FlightSearch/FlightSearch";



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
</section>
    </main>
  );
}