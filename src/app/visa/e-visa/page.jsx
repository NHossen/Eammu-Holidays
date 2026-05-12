// /app/visa/e-visa/page.jsx  — SERVER COMPONENT (no "use client")
// ─────────────────────────────────────────────────────────────────────────────
// Strategy:
//  • All static content (hero text, featured combos, countries grid, FAQ,
//    internal links) renders as real HTML — Google crawls every link on page 1.
//  • The interactive checker (autocomplete dropdowns) lives in a tiny client island.
//  • The A-Z filter & pagination use URL search params (?letter=A&page=2) so
//    every filtered view has a stable, crawlable URL.
//  • The countries grid is populated from the countries JSON at build/request time
//    — no client-side fetch needed.
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import COUNTRIES from "@/app/data/countries.json";
import { createSlug } from "@/app/lib/utils";
import { EVISAChecker }     from "./_evisa-checker";      // tiny client island
import { AZFilter }         from "./_az-filter";          // tiny client island
import { ViewModeToggle }   from "./_view-mode-toggle";   // tiny client island

// ── STATIC DATA ───────────────────────────────────────────────────────────────

const FEATURED_COMBOS = [
  { nationality: "Nigerian",   natSlug: "nigerian",   destination: "Turkey",                destSlug: "turkey",               tag: "Visa on Arrival" },
  { nationality: "Ghanaian",   natSlug: "ghanaian",   destination: "UAE",                   destSlug: "united-arab-emirates", tag: "e-Visa" },
  { nationality: "Indian",     natSlug: "indian",     destination: "Sri Lanka",             destSlug: "sri-lanka",            tag: "ETA" },
  { nationality: "Nigerian",   natSlug: "nigerian",   destination: "Malaysia",              destSlug: "malaysia",             tag: "eNTRI" },
  { nationality: "Ghanaian",   natSlug: "ghanaian",   destination: "Kenya",                 destSlug: "kenya",                tag: "e-Visa" },
  { nationality: "Indian",     natSlug: "indian",     destination: "Singapore",             destSlug: "singapore",            tag: "e-Visa" },
  { nationality: "Nigerian",   natSlug: "nigerian",   destination: "Kenya",                 destSlug: "kenya",                tag: "e-Visa" },
  { nationality: "Ghanaian",   natSlug: "ghanaian",   destination: "Turkey",                destSlug: "turkey",               tag: "e-Visa" },
  { nationality: "Indian",     natSlug: "indian",     destination: "Thailand",              destSlug: "thailand",             tag: "e-Visa" },
  { nationality: "Nigerian",   natSlug: "nigerian",   destination: "Cambodia",              destSlug: "cambodia",             tag: "e-Visa" },
  { nationality: "Ghanaian",   natSlug: "ghanaian",   destination: "Rwanda",                destSlug: "rwanda",               tag: "e-Visa" },
  { nationality: "Indian",     natSlug: "indian",     destination: "UAE",                   destSlug: "united-arab-emirates", tag: "e-Visa" },
];

const POPULAR_DESTINATIONS = [
  { name: "Turkey",               emoji: "🇹🇷", tag: "e-Visa Online" },
  { name: "United Arab Emirates", emoji: "🇦🇪", tag: "e-Visa" },
  { name: "Kenya",                emoji: "🇰🇪", tag: "e-Visa" },
  { name: "Sri Lanka",            emoji: "🇱🇰", tag: "ETA" },
  { name: "Cambodia",             emoji: "🇰🇭", tag: "e-Visa" },
  { name: "Rwanda",               emoji: "🇷🇼", tag: "e-Visa" },
  { name: "Malaysia",             emoji: "🇲🇾", tag: "eNTRI / eVISA" },
  { name: "Singapore",            emoji: "🇸🇬", tag: "e-Visa" },
  { name: "Thailand",             emoji: "🇹🇭", tag: "e-Visa" },
  { name: "Egypt",                emoji: "🇪🇬", tag: "e-Visa" },
  { name: "Bahrain",              emoji: "🇧🇭", tag: "e-Visa" },
  { name: "Oman",                 emoji: "🇴🇲", tag: "e-Visa" },
];

const WHY_US = [
  { icon: "⚡", title: "100% Online Applications",  desc: "Skip the embassy queue. Our experts guide you through every e-Visa portal step by step — error-free, first time." },
  { icon: "🛡️", title: "98% Approval Rate",         desc: "We know exactly what each e-Visa system flags. Our document review eliminates the most common rejection triggers." },
  { icon: "📋", title: "Up-to-Date Requirements",   desc: "E-Visa rules change frequently. Our 2026 guides are verified monthly against official government portals." },
  { icon: "🌍", title: "200+ Countries Covered",    desc: "From Turkey e-Visa to Cambodia ETA — we cover every major e-Visa destination for every nationality." },
];

const TESTIMONIALS = [
  { name: "Abena Mensah",  country: "Turkey e-Visa Approved ✅",  text: "Got my Turkey e-Visa in 3 hours as a Ghanaian passport holder. The team filled out the form correctly and I avoided the rejection I had last time trying alone.", stars: 5 },
  { name: "Emeka Obi",     country: "UAE e-Visa Approved ✅",     text: "Nigerian passport holder — UAE e-Visa approved in 24 hours. The process was seamless with their guidance. Highly recommended!", stars: 5 },
  { name: "Priya Nair",    country: "Kenya e-Visa Approved ✅",   text: "Got Kenya e-Visa within 48 hours from India. The team walked me through the ETA portal perfectly. No issues at the border.", stars: 5 },
];

const HOW_IT_WORKS = [
  { n: "01", title: "Select Nationality & Destination", desc: "Choose your passport nationality and the country you want to visit. We match you with the correct e-Visa type." },
  { n: "02", title: "Check Requirements",               desc: "View the exact documents, fees, photo specs, and eligibility criteria for your specific nationality + destination combination." },
  { n: "03", title: "Submit Your Application",          desc: "Our team fills the official government e-Visa portal on your behalf — accurately, with zero form errors." },
  { n: "04", title: "Receive Your e-Visa",              desc: "Your approved e-Visa is emailed to you. Print it or show it digitally on arrival — no embassy visit needed." },
];

const SEO_FAQ = [
  {
    q: "What is an e-Visa and how is it different from a regular visa?",
    a: "An e-Visa (electronic visa) is a digital travel authorisation issued entirely online — no embassy visit, no physical sticker, no biometrics appointment needed. You apply on the destination country's official government portal, pay the fee online, and receive your e-Visa by email, usually within minutes to 72 hours. A regular (sticker) visa requires attending an embassy or consulate in person.",
  },
  {
    q: "Which countries offer e-Visa for Nigerian passport holders in 2026?",
    a: "Nigerian passport holders can apply for e-Visas to countries including Turkey, Kenya, Rwanda, Cambodia, Sri Lanka, Egypt, Bahrain, Oman, Mozambique, and several others. The list is growing each year. Use our nationality + destination selector above to check exact e-Visa eligibility for your specific combination.",
  },
  {
    q: "Which countries offer e-Visa for Ghanaian passport holders in 2026?",
    a: "Ghanaian passport holders can access e-Visas for Turkey, Kenya, Rwanda, Cambodia, Sri Lanka, Egypt, Bahrain, UAE, and more. Ghana's passport is among the stronger West African passports for e-Visa access. Check our destination guides above for Ghana-specific requirements.",
  },
  {
    q: "How long does an e-Visa take to process?",
    a: "Most e-Visas are processed within 24–72 hours. Turkey e-Visa is often instant or within a few hours. Kenya ETA takes 1–3 business days. UAE e-Visa takes 2–5 business days. Sri Lanka ETA is typically instant. We always recommend applying at least 7 days before travel to allow buffer time.",
  },
  {
    q: "What documents are needed for an e-Visa application?",
    a: "Most e-Visas require: a valid passport (minimum 6 months validity), a digital passport-size photograph (white background, ICAO compliant), a confirmed return flight booking, hotel or accommodation details, and a debit/credit card to pay the e-Visa fee online. Some countries require additional documents like travel insurance or bank statements.",
  },
];

const STATS = [
  { val: "200+",    label: "e-Visa Destinations" },
  { val: "98%",     label: "Approval Rate" },
  { val: "24–72hr", label: "Avg Processing" },
  { val: "100%",    label: "Online Process" },
  { val: "2026",    label: "Updated Guides" },
];

const alphabet = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

const ITEMS_PER_PAGE = 12;

// ── HELPERS ───────────────────────────────────────────────────────────────────

function buildEvisaSlug(natSlug, destSlug) {
  return `/visa/e-visa/${natSlug}-national-e-visa-requirements-for-${destSlug}`;
}

// ── SERVER COMPONENT ─────────────────────────────────────────────────────────
// searchParams come from the URL: ?letter=A&page=2&view=nationalities
// Next.js 15: searchParams is a Promise — must be awaited before accessing properties
export default async function EVISAMainPage({ searchParams }) {
  const resolvedParams = await searchParams;
  const selectedLetter = resolvedParams?.letter || "All";
  const currentPage    = Math.max(1, parseInt(resolvedParams?.page || "1", 10));
  const viewMode       = resolvedParams?.view === "nationalities" ? "nationalities" : "destinations";

  // ── Filter countries on the server ────────────────────────────────────────
  const filteredCountries = COUNTRIES.filter(c => {
    return selectedLetter === "All" || c.country?.[0]?.toUpperCase() === selectedLetter;
  });

  const totalPages   = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);
  const currentItems = filteredCountries.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'Plus Jakarta Sans','DM Sans',system-ui,sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "#111111", minHeight: "620px" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20" style={{ background: "radial-gradient(ellipse,#f5c800 0%,transparent 70%)", filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-5 pt-16 pb-24">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-8 rounded-full border" style={{ background: "rgba(245,200,0,0.1)", borderColor: "rgba(245,200,0,0.3)" }}>
            <span className="w-2 h-2 rounded-full bg-[#f5c800] animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#f5c800" }}>
              100% Online · No Embassy Visit · Instant to 72hr Processing
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5 text-white">
            e-Visa Requirements<br />
            <span style={{ color: "#f5c800" }}>by Nationality & Destination</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-12 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Check exact e-Visa eligibility, documents required, fees and processing time for any nationality + destination combination — updated for 2026.
          </p>

          {/*
            ── e-VISA CHECKER (client island) ────────────────────────────
            Only the autocomplete dropdowns need JS.
            The hero text, h1, and badge above are fully server-rendered.
          */}
          <EVISAChecker countries={COUNTRIES} />
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────────────────────── */}
      <section style={{ background: "#f5c800" }} className="py-5 shadow-sm" aria-label="Key statistics">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-black text-black">{s.val}</p>
                <p className="text-xs font-bold text-black/60 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COMBOS (SEO internal links — fully static HTML) ─────── */}
      <section className="max-w-6xl mx-auto px-5 py-16" aria-labelledby="featured-heading">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">Most Searched Combinations</p>
            <h2 id="featured-heading" className="text-3xl md:text-4xl font-black text-black">
              Popular e-Visa Guides — 2026
            </h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_COMBOS.map((combo, i) => {
            const destCountry = COUNTRIES.find(c =>
              createSlug(c.country) === combo.destSlug ||
              c.country.toLowerCase().includes(combo.destination.toLowerCase())
            );
            return (
              <Link
                key={i}
                href={buildEvisaSlug(combo.natSlug, combo.destSlug)}
                title={`${combo.nationality} National e-Visa Requirements for ${combo.destination} 2026`}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-black/5 bg-gray-50 hover:bg-white hover:shadow-lg hover:border-[#f5c800]/30 transition-all duration-300"
              >
                {destCountry?.flag
                  ? <img src={destCountry.flag} alt={combo.destination} className="w-12 h-8 object-cover rounded-lg shadow-sm flex-shrink-0" />
                  : <span className="text-3xl flex-shrink-0">{POPULAR_DESTINATIONS.find(d => d.name === combo.destination)?.emoji || "🌍"}</span>}
                <div className="flex-1 min-w-0">
                  <p className="font-black text-black text-sm leading-tight group-hover:text-[#d4a800] transition">
                    {combo.nationality} → {combo.destination}
                  </p>
                  <p className="text-xs text-black/40 mt-0.5">{combo.tag} · e-Visa Requirements 2026</p>
                </div>
                <span className="text-[#f5c800] font-black text-sm opacity-0 group-hover:opacity-100 transition flex-shrink-0">→</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 py-16 border-t border-black/5" aria-labelledby="how-heading">
        <div className="text-center mb-12">
          <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-3">Simple 4-Step Process</p>
          <h2 id="how-heading" className="text-3xl md:text-4xl font-black text-black">How Our e-Visa Service Works</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOW_IT_WORKS.map((step, i) => (
            <div key={i} className="p-7 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-xl transition-all duration-300 relative">
              <div className="text-4xl font-black mb-4" style={{ color: "#f5c800", opacity: 0.3 }}>{step.n}</div>
              <h3 className="font-black text-black text-base mb-2">{step.title}</h3>
              <p className="text-sm text-black/40 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COUNTRIES GRID ───────────────────────────────────────────────── */}
      {/*
        All filtering/pagination uses URL params (?letter=A&page=2&view=nationalities)
        so every combination is a real, indexable URL.
        The toggle buttons and A-Z filter are tiny client islands that just
        call router.push() — the actual grid renders on the server.
      */}
      <main
        className="max-w-6xl mx-auto px-5 pb-20 border-t border-black/5 pt-16"
        id="all-countries"
        aria-labelledby="grid-heading"
      >
        {/* Header + view-mode toggle */}
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 id="grid-heading" className="text-2xl md:text-3xl font-black text-black">
              {viewMode === "destinations"
                ? "All e-Visa Destination Countries — 2026"
                : "Browse e-Visa by Nationality — 2026"}
            </h2>
            <p className="text-black/30 text-sm mt-1">
              {filteredCountries.length} countries · Click to see e-Visa requirements
            </p>
          </div>
          {/* Client island — just two router.push buttons */}
          <ViewModeToggle viewMode={viewMode} selectedLetter={selectedLetter} />
        </div>

        {/* A-Z Filter — client island that calls router.push with ?letter=X */}
        <AZFilter selectedLetter={selectedLetter} viewMode={viewMode} alphabet={alphabet} />

        {/* ── COUNTRIES GRID (server-rendered, real HTML links) ─────────── */}
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {currentItems.map((c, i) => {
              const countrySlug = createSlug(c.country);
              const href = viewMode === "destinations"
                ? buildEvisaSlug("any", countrySlug)
                : buildEvisaSlug(countrySlug, "any");
              const titleText = viewMode === "destinations"
                ? `e-Visa Requirements to Visit ${c.country} — 2026 Guide`
                : `${c.country} Passport e-Visa Requirements — 2026 Guide`;

              return (
                <Link
                  key={`${c.code}-${i}`}
                  href={href}
                  className="group rounded-2xl overflow-hidden border border-black/5 flex flex-col bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
                  title={titleText}
                >
                  <div className="relative h-28 overflow-hidden bg-gray-200">
                    <img
                      src={c.flag}
                      alt={`${c.country} e-Visa requirements 2026`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading={i < 6 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.25) 0%,transparent 60%)" }} />
                  </div>
                  <div className="p-3 flex flex-col flex-1 justify-between">
                    <h3 className="text-sm font-black text-black/80 leading-tight group-hover:text-black transition-colors mb-2">
                      {c.country}
                    </h3>
                    <div className="text-[10px] font-bold text-[#f5c800] bg-[#f5c800]/5 rounded-lg px-2 py-1 text-center group-hover:bg-[#f5c800] group-hover:text-black transition-all">
                      {viewMode === "destinations" ? "e-Visa Guide →" : "Check e-Visa →"}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24 rounded-3xl border border-black/5 bg-gray-50">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-xl font-black text-black">No countries found</h3>
            <p className="text-black/40 mt-2 text-sm">Try a different letter or reset the filter.</p>
            <Link href="/visa/e-visa" className="inline-block mt-5 px-6 py-3 bg-[#f5c800] rounded-xl font-black text-sm">
              Show All Countries
            </Link>
          </div>
        )}

        {/* ── PAGINATION (static server-rendered links) ─────────────────── */}
        {totalPages > 1 && (
          <nav className="mt-12 flex justify-center items-center gap-3" aria-label="Country pagination">
            {safeCurrentPage > 1 && (
              <Link
                href={`/visa/e-visa?letter=${selectedLetter}&page=${safeCurrentPage - 1}&view=${viewMode}`}
                className="px-6 py-3 rounded-xl font-bold text-black/60 hover:text-black transition border border-black/10 hover:border-[#f5c800]/40"
              >
                ← Prev
              </Link>
            )}
            <div className="flex gap-1.5">
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => i + 1).map(n => (
                <Link
                  key={n}
                  href={`/visa/e-visa?letter=${selectedLetter}&page=${n}&view=${viewMode}`}
                  aria-label={`Page ${n}`}
                  aria-current={safeCurrentPage === n ? "page" : undefined}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl font-black text-sm transition-all ${
                    safeCurrentPage === n
                      ? "bg-[#f5c800] text-black shadow-md"
                      : "text-black/40 hover:text-black bg-gray-50 border border-black/5"
                  }`}
                >
                  {n}
                </Link>
              ))}
              {totalPages > 7 && <span className="w-10 h-10 flex items-center justify-center text-black/30">…</span>}
            </div>
            {safeCurrentPage < totalPages && (
              <Link
                href={`/visa/e-visa?letter=${selectedLetter}&page=${safeCurrentPage + 1}&view=${viewMode}`}
                className="px-6 py-3 rounded-xl font-bold text-black/60 hover:text-black transition border border-black/10 hover:border-[#f5c800]/40"
              >
                Next →
              </Link>
            )}
          </nav>
        )}
      </main>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="border-t border-black/5 py-24 bg-gray-50" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-3">Why Thousands Choose Us</p>
            <h2 id="why-heading" className="text-4xl md:text-5xl font-black text-black mb-4">The Smarter Way to Apply for e-Visa</h2>
            <p className="text-black/40 max-w-xl mx-auto text-sm leading-relaxed">
              Stop guessing. Start with accurate requirements, expert guidance, and a near-perfect approval record.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((w, i) => (
              <div key={i} className="p-7 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-5">{w.icon}</div>
                <h3 className="font-black text-black text-lg mb-2">{w.title}</h3>
                <p className="text-sm text-black/40 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-5" aria-labelledby="testimonials-heading">
        <div className="text-center mb-12">
          <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-3">Real Stories</p>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-black text-black">e-Visa Approved — Real Travelers</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="p-7 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {"★".repeat(t.stars).split("").map((s, j) => (
                  <span key={j} className="text-[#f5c800] text-sm">{s}</span>
                ))}
              </div>
              <p className="text-black/70 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div>
                <p className="font-black text-black text-sm">{t.name}</p>
                <p className="text-xs text-[#f5c800] font-bold">{t.country}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SEO ARTICLE + INTERNAL LINKS ─────────────────────────────────── */}
      <section className="border-t border-black/5 py-20" aria-label="About e-Visa requirements">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-black text-black mb-8">
            e-Visa Requirements by Nationality — Complete Guide 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-black/50 leading-relaxed">
            <div className="space-y-4">
              <p>
                An <strong className="text-black/80">e-Visa (electronic visa)</strong> is the fastest, simplest way to
                get travel authorisation for many popular destinations. Unlike traditional visas, e-Visas are applied
                for entirely online — no embassy queues, no biometrics appointments, and no waiting weeks for a decision.
              </p>
              <p>
                However, e-Visa eligibility and requirements vary significantly based on your passport nationality. What
                works for a British passport holder may not apply to a{" "}
                <strong className="text-black/80">Nigerian, Ghanaian, or Indian passport</strong> holder. Our
                nationality-specific guides cut through the confusion and give you exact, verified requirements for your
                passport.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our 2026 e-Visa guides are updated monthly based on official government portals and immigration
                authority announcements. We track policy changes for every nationality + destination combination — so you
                always have the most accurate information.
              </p>
              <p>
                From <strong className="text-black/80">Turkey e-Visa</strong> and{" "}
                <strong className="text-black/80">UAE e-Visa</strong> to{" "}
                <strong className="text-black/80">Kenya ETA</strong> and{" "}
                <strong className="text-black/80">Sri Lanka ETA</strong> — our expert team handles the entire
                application process, ensuring your e-Visa is approved quickly and correctly.
              </p>
            </div>
          </div>

          {/* Internal nav — by nationality */}
          <div className="mt-10 pt-8 border-t border-black/5">
            <p className="text-xs text-black/25 font-bold uppercase tracking-widest mb-4">Browse e-Visa by Nationality</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Nigerian e-Visa",       href: buildEvisaSlug("nigerian",       "turkey") },
                { label: "Ghanaian e-Visa",       href: buildEvisaSlug("ghanaian",       "turkey") },
                { label: "Indian e-Visa",         href: buildEvisaSlug("indian",         "turkey") },
                { label: "Pakistani e-Visa",      href: buildEvisaSlug("pakistani",      "turkey") },
                { label: "Bangladeshi e-Visa",    href: buildEvisaSlug("bangladeshi",    "turkey") },
                { label: "Dubai Resident e-Visa", href: buildEvisaSlug("dubai-resident", "turkey") },
                { label: "South African e-Visa",  href: buildEvisaSlug("south-african",  "turkey") },
                { label: "Kenyan e-Visa",         href: buildEvisaSlug("kenyan",         "turkey") },
              ].map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold text-black/40 hover:text-[#f5c800] transition border border-black/10 px-3 py-1.5 rounded-lg hover:border-[#f5c800]/30 bg-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Internal nav — by destination */}
          <div className="mt-6 pt-6 border-t border-black/5">
            <p className="text-xs text-black/25 font-bold uppercase tracking-widest mb-4">Browse e-Visa by Destination</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Turkey e-Visa",   href: buildEvisaSlug("nigerian", "turkey") },
                { label: "UAE e-Visa",      href: buildEvisaSlug("nigerian", "united-arab-emirates") },
                { label: "Kenya e-Visa",    href: buildEvisaSlug("nigerian", "kenya") },
                { label: "Sri Lanka ETA",   href: buildEvisaSlug("nigerian", "sri-lanka") },
                { label: "Rwanda e-Visa",   href: buildEvisaSlug("nigerian", "rwanda") },
                { label: "Cambodia e-Visa", href: buildEvisaSlug("nigerian", "cambodia") },
                { label: "Egypt e-Visa",    href: buildEvisaSlug("nigerian", "egypt") },
                { label: "Thailand e-Visa", href: buildEvisaSlug("nigerian", "thailand") },
              ].map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold text-black/40 hover:text-[#f5c800] transition border border-black/10 px-3 py-1.5 rounded-lg hover:border-[#f5c800]/30 bg-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ — static HTML, perfect for Google */}
          <div className="mt-10 pt-8 border-t border-black/5">
            <p className="text-xs text-black/25 font-bold uppercase tracking-widest mb-5">
              Frequently Asked Questions — e-Visa
            </p>
            <div className="space-y-4">
              {SEO_FAQ.map((faq, i) => (
                <details key={i} className="border border-black/5 rounded-xl overflow-hidden group">
                  <summary className="px-5 py-4 cursor-pointer font-bold text-black/80 text-sm flex items-center justify-between list-none hover:bg-gray-50">
                    {faq.q}
                    <span className="text-[#f5c800] font-black group-open:rotate-45 transition-transform inline-block flex-shrink-0 ml-3">+</span>
                  </summary>
                  <div className="px-5 pb-4 pt-2 text-sm text-black/50 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <div className="py-20 px-5 text-center" style={{ background: "#111111" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl mb-6">⚡</div>
          <h2 className="text-3xl md:text-4xl font-black mb-3 text-white">
            Ready to Apply for Your <span style={{ color: "#f5c800" }}>e-Visa Online?</span>
          </h2>
          <p className="mb-10 leading-relaxed text-sm max-w-lg mx-auto" style={{ color: "rgba(255,255,255,.45)" }}>
            Select your nationality and destination above, check exact requirements, and let our experts handle your
            complete e-Visa application — approved in 24–72 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971507078334?text=Hi%2C%20I%20want%20to%20apply%20for%20an%20e-Visa.%20Please%20help%20me%20check%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black text-sm text-white transition"
              style={{ background: "#25D366" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp for e-Visa Help
            </a>
            <Link
              href="/visa/e-visa"
              className="inline-flex items-center justify-center px-8 py-5 rounded-2xl font-black text-sm transition hover:bg-white hover:text-black"
              style={{ border: "2px solid rgba(255,255,255,.2)", color: "rgba(255,255,255,.6)" }}
            >
              Browse Tourist Visa Guides
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}