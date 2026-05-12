// app/visa/tourist-visa/page.jsx  ← Server Component (no "use client")
import Link from "next/link";
import CountryExplorer from "./CountryExplorer"; // client component

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA — App Router (server-only export)
// ─────────────────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Tourist Visa for Dubai Residents 2026 — 200+ Countries | Visa Expert Hub",
  description:
    "Apply for a tourist visa as a Dubai resident. Expert consultancy for USA, UK, Canada, Schengen, Japan, Australia & 200+ countries. 98% approval rate. Embassy-verified documents for UAE residents.",
  keywords:
    "tourist visa Dubai residents 2026, visa consultancy Dubai, USA visa Dubai residents, UK visa Dubai residents, Schengen visa Dubai, Canada visa Dubai residents, tourist visa UAE residents, visa on arrival Dubai residents",
  alternates: { canonical: "https://yourdomain.com/visa/tourist-visa" },
};

// ─────────────────────────────────────────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────────────────────────────────────────
const POPULAR = [
  { name: "United States", emoji: "🇺🇸" },
  { name: "United Kingdom", emoji: "🇬🇧" },
  { name: "Canada",         emoji: "🇨🇦" },
  { name: "Australia",      emoji: "🇦🇺" },
  { name: "Germany",        emoji: "🇩🇪" },
  { name: "France",         emoji: "🇫🇷" },
  { name: "Japan",          emoji: "🇯🇵" },
  { name: "Singapore",      emoji: "🇸🇬" },
  { name: "Thailand",       emoji: "🇹🇭" },
  { name: "Malaysia",       emoji: "🇲🇾" },
  { name: "Italy",          emoji: "🇮🇹" },
  { name: "Turkey",         emoji: "🇹🇷" },
];

const WHY_US = [
  { icon: "🛡️", title: "98% Approval Rate",         desc: "Our consultants have helped 1,00,000+ Dubai residents get approved. We know exactly what embassies look for from UAE-based applicants." },
  { icon: "📋", title: "Embassy-Accurate Documents", desc: "Every checklist verified against official embassy circulars & VFS Global announcements, updated monthly for 2026 protocols for Dubai residents." },
  { icon: "⚡", title: "24-Hour Document Review",    desc: "Rapid document review and feedback eliminates back-and-forth delays before submission from Dubai." },
  { icon: "🌍", title: "200+ Countries Covered",     desc: "Schengen to Southeast Asia — tourist, business, student & medical visas for Dubai and UAE residents." },
];

const TESTIMONIALS = [
  { name: "Priya Sharma",  country: "UK Visa Approved ✅",     text: "Got my UK Standard Visitor visa in 12 days applying from Dubai. The team reviewed all my documents and cover letter — zero issues at the British Embassy in Abu Dhabi.", stars: 5 },
  { name: "Rahul Mehta",   country: "Schengen Approved ✅",    text: "Applied for Germany Schengen as a Dubai resident through them. Perfect document checklist, no rejection. Highly recommend for first-timers applying from the UAE.", stars: 5 },
  { name: "Ananya Iyer",   country: "Canada Visa Approved ✅", text: "Canada Visitor Visa (TRV) — they helped me format everything the IRCC way as a UAE resident. Approved in 3 weeks from Dubai!", stars: 5 },
];

const SEO_LINKS = [
  { name: "USA B1/B2 Tourist Visa",    slug: "united-states", desc: "DS-160 form, bank statement, interview tips from Dubai" },
  { name: "UK Standard Visitor Visa",  slug: "united-kingdom", desc: "UKVI checklist, photo specs, financial proof for UAE residents" },
  { name: "Canada Visitor Visa (TRV)", slug: "canada",         desc: "IRCC requirements, biometrics, checklist from Dubai" },
  { name: "Schengen Visa from Dubai",  slug: "germany",        desc: "Germany, France, Italy — single Schengen visa guide for UAE residents" },
  { name: "Japan Tourist Visa",        slug: "japan",          desc: "Embassy checklist, bank balance for Dubai residents" },
  { name: "Australia Tourist Visa",    slug: "australia",      desc: "Subclass 600, documents, processing time from Dubai" },
  { name: "Malaysia e-Visa",           slug: "malaysia",       desc: "eNTRI, eVISA — quick & easy for Dubai residents" },
  { name: "Thailand Tourist Visa",     slug: "thailand",       desc: "TR visa from Royal Thai Consulate, Dubai" },
  { name: "Singapore Tourist Visa",    slug: "singapore",      desc: "ICA requirements, tourist pass guide from Dubai" },
];

const VISA_CATEGORIES = [
  { label: "Europe & Schengen",    icon: "🏰", desc: "Germany, France, Italy, Spain & 22 more Schengen nations",    href: "/visa/schengen-visa" },
  { label: "North America",        icon: "🗽", desc: "USA B1/B2, Canada TRV, Mexico & beyond",                       href: "/visa/usa-visa" },
  { label: "Asia Pacific",         icon: "🏯", desc: "Japan, Singapore, Thailand, Malaysia, South Korea",            href: "/visa/asia-visa" },
  { label: "Australia & NZ",       icon: "🦘", desc: "Australian Subclass 600, NZ Visitor Visa",                     href: "/visa/australia-visa" },
  { label: "Americas & Caribbean", icon: "🌴", desc: "USA, Canada, Brazil, Mexico — Dubai resident guides",          href: "/visa/americas-visa" },
  { label: "Business Visa",        icon: "💼", desc: "Short-stay business visas — USA, UK, Schengen & Asia",         href: "/visa/business-visa" },
];

const STATS = [
  { val: "1,00,000+", label: "Visas Processed" },
  { val: "98%",       label: "Approval Rate" },
  { val: "200+",      label: "Countries Covered" },
  { val: "24hr",      label: "Document Review" },
  { val: "2026",      label: "Updated Protocols" },
];

const SLIDES = [
  { img: "/the-love-island.webp",               tag: "Island Getaways", title: "Explore Paradise" },
  { img: "/top-travel-agency.webp",             tag: "Trusted Agency",  title: "Expert Guidance" },
  { img: "/travel_banner_second_part_one.webp", tag: "200+ Countries",  title: "Your World Awaits" },
];

const FAQS = [
  {
    q: "Which countries can Dubai residents visit without a visa in 2026?",
    a: "Dubai residents (holding a UAE residence visa) enjoy several travel benefits depending on their passport nationality. Many countries also offer visa-on-arrival or e-Visa options specifically for UAE residents. Use our country search above to check requirements for any destination.",
  },
  {
    q: "How much bank balance is required for a tourist visa for Dubai residents?",
    a: "Most embassies expect the equivalent of AED 5,000–15,000 (USD 1,500–4,000) for solo travel with 3–6 months of stable UAE bank history. Schengen visas typically require €3,000–5,000 equivalent. USA and UK require strong financial documentation. Our consultants advise based on your specific destination and nationality.",
  },
  {
    q: "What documents do Dubai residents need for a tourist visa application?",
    a: "Core documents include: valid passport, UAE residence visa copy, Emirates ID, UAE bank statements (3–6 months), employment or business proof in Dubai, confirmed flight and hotel bookings, and a cover letter. Specific requirements vary by destination country.",
  },
  {
    q: "Where do Dubai residents submit visa applications in the UAE?",
    a: "Depending on the destination country, you submit at the respective Embassy or Consulate in Dubai or Abu Dhabi, at a VFS Global centre in the UAE, or through a BLS/TLScontact centre. Our team will guide you to the correct submission point for your target country.",
  },
  {
    q: "How long does visa processing take for Dubai residents?",
    a: "Processing times vary: Schengen typically 15 working days, UK 3 weeks, USA 2–6 months (due to interview wait times at the US Embassy in Abu Dhabi), Canada 4–8 weeks, Japan 4–7 working days. Apply well in advance and always book refundable flights.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SERVER-SIDE DATA FETCH
// ─────────────────────────────────────────────────────────────────────────────
async function getCountries() {
  try {
    // Use absolute URL for server-side fetch in Next.js App Router.
    // Replace with your actual base URL or use an env variable.
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/countries`, {
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE — Server Component
// ─────────────────────────────────────────────────────────────────────────────
export default async function TouristVisaDubaiResidents() {
  // Fetched on the server — no useEffect, no loading state needed
  const countries = await getCountries();

  return (
    <div
      className="min-h-[60vh] bg-white text-black font-sans"
      style={{ fontFamily: "'Plus Jakarta Sans','DM Sans',system-ui,sans-serif" }}
    >
      {/* ── HERO (interactive: slides + search) — delegated to Client Component ── */}
      {/*
        HeroSection contains the auto-rotating slides, search input, A-Z filter,
        and autocomplete dropdown — all of which require client-side state.
        We pass the countries array so the server renders the initial HTML
        with full data (no waterfall fetch on the client).
      */}
      <CountryExplorer countries={countries} slides={SLIDES} popular={POPULAR} />

      {/* ── STATS STRIP ─────────────────────────────────────────────────────── */}
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

      {/* ── VISA CATEGORIES ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 py-16" aria-labelledby="categories-heading">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">Browse by Region</p>
            <h2 id="categories-heading" className="text-3xl md:text-4xl font-black text-black">
              Popular Visa Categories — Dubai &amp; UAE Residents
            </h2>
          </div>
          <Link
            href="/visa/dubai-residents"
            className="text-xs font-bold text-black/40 hover:text-[#f5c800] transition border border-black/10 px-4 py-2 rounded-xl hover:border-[#f5c800]/40"
          >
            All visa types →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VISA_CATEGORIES.map((cat, i) => (
            <Link
              key={i}
              href={cat.href}
              className="group flex items-start gap-4 p-5 rounded-2xl border border-black/5 bg-gray-50 hover:bg-white hover:shadow-lg hover:border-[#f5c800]/30 transition-all duration-300"
            >
              <span className="text-3xl">{cat.icon}</span>
              <div>
                <h3 className="font-black text-black text-sm mb-1 group-hover:text-[#d4a800] transition">{cat.label}</h3>
                <p className="text-xs text-black/40 leading-relaxed">{cat.desc}</p>
              </div>
              <span className="ml-auto text-[#f5c800] font-black text-sm opacity-0 group-hover:opacity-100 transition">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────────── */}
      <section className="border-t border-black/5 py-24 bg-gray-50" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-3">
              Why 1,00,000+ UAE Residents Trust Us
            </p>
            <h2 id="why-heading" className="text-4xl md:text-5xl font-black text-black mb-4">
              Dubai's Most Trusted<br />Tourist Visa Consultancy
            </h2>
            <p className="text-black/40 max-w-xl mx-auto text-sm leading-relaxed">
              We don't just tell you what documents you need — we verify them, format them, and ensure
              your application is embassy-ready from Dubai.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((w, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-5">{w.icon}</div>
                <h3 className="font-black text-black text-lg mb-2">{w.title}</h3>
                <p className="text-sm text-black/40 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-5" aria-labelledby="testimonials-heading">
        <div className="text-center mb-12">
          <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-3">Real Stories</p>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-black text-black">
            Approved by Dubai Residents
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {"★".repeat(t.stars).split("").map((_, j) => (
                  <span key={j} className="text-[#f5c800] text-sm">★</span>
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

      {/* ── SEO INTERNAL LINKS ───────────────────────────────────────────────── */}
      <section className="border-t border-black/5 py-20 bg-gray-50" aria-labelledby="guides-heading">
        <div className="max-w-6xl mx-auto px-5">
          <h2 id="guides-heading" className="text-2xl md:text-3xl font-black text-black mb-3">
            Popular Tourist Visa Guides — Dubai Residents 2026
          </h2>
          <p className="text-black/40 text-sm mb-10">
            Complete visa guides with required documents, embassy fees, bank balance requirements &amp; expert
            tips for Dubai and UAE residents
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SEO_LINKS.map((link, i) => (
              <Link
                key={i}
                href={`/visa/dubai-residents/${link.slug}`}
                className="flex items-start gap-3 p-4 rounded-xl border border-black/5 bg-white hover:border-[#f5c800]/30 hover:shadow-md transition-all group"
                title={`${link.name} — Complete guide for Dubai & UAE residents`}
              >
                <span className="text-[#f5c800] font-black text-lg mt-0.5">→</span>
                <div>
                  <p className="font-bold text-black/80 text-sm group-hover:text-black transition">{link.name}</p>
                  <p className="text-xs text-black/35 mt-0.5">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO ARTICLE + FAQ ────────────────────────────────────────────────── */}
      <section className="border-t border-black/5 py-20" aria-label="About tourist visa from Dubai">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-black text-black mb-8">
            Tourist Visa Consultancy for Dubai Residents — Complete Guide 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-black/50 leading-relaxed">
            <div className="space-y-4">
              <p>
                We are Dubai's leading tourist visa consultancy, helping thousands of UAE residents secure visas
                for <strong className="text-black/80">USA, UK, Canada, Schengen, Japan, Australia</strong> and
                200+ destinations worldwide. Our embassy-certified consultants prepare every document to the
                exact specification required by each embassy — so your application gets approved from Dubai.
              </p>
              <p>
                From <strong className="text-black/80">bank statement formatting</strong> and NOC letter drafting
                to photo compliance checks and cover letter writing — we handle everything so your visa
                application is complete, accurate, and embassy-ready whether you hold a UAE residence visa,
                work permit, or any other residency status in Dubai.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our 2026 visa guides are updated monthly based on official embassy circulars and VFS Global
                announcements in Dubai and Abu Dhabi. We track policy changes — so you don't have to. Every
                checklist, fee, and processing timeline is verified by our team before publication.
              </p>
              <p>
                Whether you're a first-time traveler or a frequent flyer residing in Dubai, our expert
                consultants provide personalised guidance — from document preparation to application submission
                and passport collection at VFS Global and Consulate centres across the UAE.
              </p>
            </div>
          </div>

          {/* Quick internal navigation */}
          <div className="mt-10 pt-8 border-t border-black/5">
            <p className="text-xs text-black/25 font-bold uppercase tracking-widest mb-4">More Visa Guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Tourist Visa",  href: "/visa" },
                { label: "Business Visa", href: "/visa" },
                { label: "Student Visa",  href: "/visa/study-abroad" },
                { label: "Medical Visa",  href: "/visa" },
                { label: "Schengen Visa", href: "/visa/schengen-visa" },
                { label: "E-Visa",        href: "/visa/e-visa" },
                { label: "USA Visa",      href: "/visa/dubai-residents/united-states" },
                { label: "UK Visa",       href: "/visa/dubai-residents/united-kingdom" },
                { label: "Canada Visa",   href: "/visa/dubai-residents/canada" },
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

          {/* FAQ — rendered server-side for full SEO value */}
          <div className="mt-8 pt-8 border-t border-black/5">
            <p className="text-xs text-black/25 font-bold uppercase tracking-widest mb-4">
              Frequently Asked Questions
            </p>
            <div className="space-y-4 text-sm">
              {FAQS.map((faq, i) => (
                <details key={i} className="border border-black/5 rounded-xl overflow-hidden group">
                  <summary className="px-5 py-4 cursor-pointer font-bold text-black/80 text-sm flex items-center justify-between list-none hover:bg-gray-50">
                    {faq.q}
                    <span className="text-[#f5c800] font-black group-open:rotate-45 transition-transform inline-block">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-4 pt-2 text-sm text-black/50 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}