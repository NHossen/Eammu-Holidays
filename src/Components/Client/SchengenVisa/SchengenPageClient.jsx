'use client';

// app/schengen-visa/SchengenPageClient.jsx
// CLIENT COMPONENT — handles all dynamic/interactive parts:
// 1. Country grid with flags from MongoDB /api/countries
// 2. Country-specific visa links hub (dark section)
// 3. Dynamic sidebar country list (passed as slot via server component)
// 4. Loading skeletons

import Link from 'next/link';
import { useEffect, useState } from 'react';

/* ─── COUNTRY CARD ──────────────────────────────────────────────── */
function SchengenCountryCard({ name, slug, flag, flagUrl, code }) {
  const imgSrc = flag || flagUrl || `https://flagcdn.com/w80/${code}.png`;
  return (
    <Link
      href={`/visa/${slug}`}
      className="group flex flex-col items-center gap-2 p-4 bg-white border border-slate-100 rounded-2xl hover:border-amber-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center"
    >
      <div className="relative w-12 h-8 rounded-md overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
        <img
          src={imgSrc}
          alt={`${name} flag`}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>
      <span className="text-xs font-bold text-slate-700 group-hover:text-amber-700 transition-colors leading-tight">{name}</span>
      <span className="text-[9px] font-semibold text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
        Apply →
      </span>
    </Link>
  );
}

function CountrySkeleton() {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-slate-50 border border-slate-100 rounded-2xl animate-pulse">
      <div className="w-12 h-8 bg-slate-200 rounded-md" />
      <div className="w-16 h-3 bg-slate-200 rounded" />
    </div>
  );
}

/* ─── CLIENT COMPONENT ──────────────────────────────────────────── */
export default function SchengenPageClient({ schengenCountries = [], topRoutes = [] }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch('/api/countries');
        if (!res.ok) throw new Error('Failed to fetch country data');
        const data = await res.json();

        // Build lookup map from MongoDB data
        const dbMap = {};
        data.forEach((c) => {
          if (c.country) dbMap[c.country.trim()] = c;
        });

        // Merge static Schengen list with MongoDB flag/code data
        const merged = schengenCountries.map((sc) => {
          const dbEntry = dbMap[sc.name] || {};
          return {
            name: sc.name,
            slug: sc.slug,
            code: dbEntry.code || sc.code,
            flag: dbEntry.flag || null,
            flagUrl: dbEntry.flag || `https://flagcdn.com/w80/${(dbEntry.code || sc.code).toLowerCase()}.png`,
          };
        });

        setCountries(merged);
      } catch (err) {
        setError(err.message);
        // Fallback: static list with flagcdn
        const fallback = schengenCountries.map((sc) => ({
          name: sc.name,
          slug: sc.slug,
          code: sc.code,
          flag: null,
          flagUrl: `https://flagcdn.com/w80/${sc.code}.png`,
        }));
        setCountries(fallback);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, [schengenCountries]);

  return (
    <>
      {/* ── 29 SCHENGEN COUNTRIES GRID ── */}
      <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        <div className="flex items-start justify-between mb-2 flex-wrap gap-3">
          <div>
            <h2 className="text-xl font-bold">
              All 29 Schengen Countries — One Visa Covers Them All
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              A single Schengen visa grants borderless access across every country below. Click any country to see its specific requirements, consulate details, and visa guide.
            </p>
          </div>
          <a
            href="https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/schengen-area_en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-amber-600 hover:underline underline-offset-4 shrink-0 mt-1"
          >
            Official Schengen list ↗
          </a>
        </div>

        {/* 2024 membership update note */}
        <div className="mb-5 px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-700 font-medium">
          📌 <strong>2024 Update:</strong> Bulgaria and Romania officially joined the Schengen Area for air and sea borders in March 2024. Their airports and seaports now operate as full Schengen entry points.
        </div>

        {error && (
          <div className="mb-4 px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-700 font-semibold">
            ⚠️ Using fallback flag data — {error}
          </div>
        )}

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3" role="list" aria-label="Schengen member countries">
          {loading
            ? Array.from({ length: 29 }).map((_, i) => <CountrySkeleton key={i} />)
            : countries.map((c) => <SchengenCountryCard key={c.name} {...c} />)}
        </div>

        {/* Regional groupings note */}
        {!loading && (
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-slate-100">
            {[
              { region: 'Western Europe', count: '9 countries', examples: 'France, Germany, Netherlands, Belgium, Luxembourg, Austria, Switzerland, Liechtenstein, Italy' },
              { region: 'Southern Europe', count: '5 countries', examples: 'Spain, Portugal, Greece, Malta, Slovenia' },
              { region: 'Nordic Countries', count: '5 countries', examples: 'Norway, Iceland, Sweden, Finland, Denmark' },
              { region: 'Eastern/Baltic', count: '10 countries', examples: 'Poland, Czech Republic, Hungary, Slovakia, Estonia, Latvia, Lithuania, Croatia, Romania, Bulgaria' },
            ].map((r) => (
              <div key={r.region} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-1">{r.region}</p>
                <p className="text-xs font-bold text-slate-700 mb-1">{r.count}</p>
                <p className="text-[9px] text-slate-400 leading-relaxed">{r.examples}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── COUNTRY-SPECIFIC VISA LINKS — SEO Hub ── */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
        <div className="mb-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-2 block">Country-Specific Guides</span>
          <h2 className="text-xl font-bold text-white mb-1">Schengen Visa by Country — Individual Guides</h2>
          <p className="text-sm text-slate-400">
            Each Schengen member state has its own consulate, document requirements, and processing centre. Select your destination for a tailored guide specific to UAE applicants.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {loading
            ? Array.from({ length: 29 }).map((_, i) => (
                <div key={i} className="h-10 bg-slate-700 rounded-xl animate-pulse" />
              ))
            : countries.map((c) => (
                <Link
                  key={c.name}
                  href={`/visa/${c.slug}-visa`}
                  className="group flex items-center gap-2.5 px-3 py-2.5 bg-slate-800 hover:bg-amber-400 border border-slate-700 hover:border-amber-400 rounded-xl transition-all duration-150"
                >
                  <div className="w-6 h-4 rounded overflow-hidden shrink-0 bg-slate-600">
                    <img
                      src={c.flag || c.flagUrl}
                      alt={c.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-colors truncate leading-tight">
                    {c.name} Visa
                  </span>
                  <span className="ml-auto text-slate-600 group-hover:text-slate-800 text-xs font-bold transition-colors">›</span>
                </Link>
              ))}
        </div>

        {/* Popular routes with extra info */}
        {!loading && topRoutes.length > 0 && (
          <div className="mt-6 pt-6 border-t border-slate-700">
            <h3 className="text-sm font-bold text-white mb-3">🔥 Most Popular from UAE — With Consulate Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {topRoutes.map((r) => {
                const countryData = countries.find((c) => c.name === r.name);
                const flagSrc = countryData?.flag || countryData?.flagUrl || `https://flagcdn.com/w40/${r.code}.png`;
                return (
                  <Link
                    key={r.name}
                    href={`/visa/${r.slug}`}
                    className="group flex items-start gap-3 p-3 bg-slate-800 border border-slate-700 hover:border-amber-400 hover:bg-slate-750 rounded-xl transition-all"
                  >
                    <div className="w-8 h-5 rounded overflow-hidden shrink-0 mt-0.5 bg-slate-600">
                      <img src={flagSrc} alt={r.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs text-white group-hover:text-amber-400 transition-colors">{r.name} Schengen Visa</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{r.consulate}</p>
                      <p className="text-[10px] text-slate-500">{r.popular}</p>
                    </div>
                    <span className="text-slate-600 group-hover:text-amber-400 font-bold shrink-0 transition-colors">›</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-5 pt-5 border-t border-slate-700">
          <p className="text-xs text-slate-500">
            Not sure which country to apply through?{' '}
            <Link href="/contact" className="text-amber-400 font-bold hover:underline">
              Ask our Schengen visa experts →
            </Link>
          </p>
        </div>
      </section>

      {/* ── SIDEBAR COUNTRY LIST (Client-only slot, visible on mobile as extra section) ── */}
      {/* On desktop this is shown via the server sidebar — 
          this section appears ONLY on mobile as an extra country reference */}
      <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm lg:hidden">
        <h3 className="text-sm font-bold text-slate-900 mb-1">🌍 All Schengen Countries — Quick Reference</h3>
        <p className="text-[10px] text-slate-400 mb-4">Tourist visa guides by destination</p>
        <div className="grid grid-cols-2 gap-1.5">
          {loading
            ? Array.from({ length: 10 }).map((_, i) => <div key={i} className="h-8 bg-slate-100 rounded-lg animate-pulse" />)
            : countries.map((c) => (
                <Link
                  key={c.name}
                  href={`/visa/tourist-visa/${c.slug}`}
                  className="group flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 border border-transparent hover:border-amber-200 transition-all"
                >
                  <div className="w-6 h-4 rounded overflow-hidden shrink-0 bg-slate-100">
                    <img src={c.flag || c.flagUrl} alt={c.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 group-hover:text-amber-700 transition-colors flex-1 truncate">{c.name}</span>
                  <span className="text-slate-300 group-hover:text-amber-500 text-xs transition-colors">›</span>
                </Link>
              ))}
        </div>
      </section>
    </>
  );
}