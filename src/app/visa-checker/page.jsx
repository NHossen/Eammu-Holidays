"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// ── helpers ──────────────────────────────────────────────────────────────────
function toSlug(str = "") {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

const STATUS_META = {
  "visa-free":       { color: "green",  icon: "✅", label: "Visa Free",       bg: "bg-green-50",  border: "border-green-200", text: "text-green-700",  badge: "bg-green-100 text-green-700 border-green-200"  },
  "e-visa":          { color: "blue",   icon: "💻", label: "eVisa",           bg: "bg-blue-50",   border: "border-blue-200",  text: "text-blue-700",   badge: "bg-blue-100 text-blue-700 border-blue-200"     },
  "visa-on-arrival": { color: "amber",  icon: "🛬", label: "Visa on Arrival", bg: "bg-amber-50",  border: "border-amber-200", text: "text-amber-700",  badge: "bg-amber-100 text-amber-700 border-amber-200"  },
  "eta":             { color: "purple", icon: "📲", label: "ETA Required",    bg: "bg-purple-50", border: "border-purple-200",text: "text-purple-700", badge: "bg-purple-100 text-purple-700 border-purple-200"},
  "visa-required":   { color: "red",    icon: "🔴", label: "Visa Required",   bg: "bg-red-50",    border: "border-red-200",   text: "text-red-700",    badge: "bg-red-100 text-red-700 border-red-200"        },
  "no-admission":    { color: "gray",   icon: "🚫", label: "No Admission",    bg: "bg-gray-50",   border: "border-gray-200",  text: "text-gray-700",   badge: "bg-gray-100 text-gray-700 border-gray-200"     },
};

function getStatusKey(visa_status) {
  if (typeof visa_status === "number") return "visa-free";
  const map = {
    "visa required":   "visa-required",
    "e-visa":          "e-visa",
    "visa on arrival": "visa-on-arrival",
    "eta":             "eta",
    "no admission":    "no-admission",
  };
  return map[(visa_status || "").toLowerCase()] || "visa-required";
}

// ── CountryDropdown ───────────────────────────────────────────────────────────
function CountryDropdown({ label, subLabel, value, onChange }) {
  const [query, setQuery]       = useState(value || "");
  const [suggestions, setSugg]  = useState([]);
  const [open, setOpen]         = useState(false);
  const [loading, setLoading]   = useState(false);
  const ref    = useRef();
  const timer  = useRef();

  useEffect(() => { setQuery(value || ""); }, [value]);

  useEffect(() => {
    function outside(e) { if (!ref.current?.contains(e.target)) setOpen(false); }
    document.addEventListener("mousedown", outside);
    return () => document.removeEventListener("mousedown", outside);
  }, []);

  async function search(q) {
    if (q.length < 1) { setSugg([]); setOpen(false); return; }
    setLoading(true);
    try {
      const res  = await fetch(`/api/country-suggest?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setSugg(data.suggestions || []);
      setOpen((data.suggestions || []).length > 0);
    } catch { setSugg([]); }
    setLoading(false);
  }

  function handleChange(v) {
    setQuery(v);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => search(v), 280);
  }

  function pick(c) {
    onChange(c.name);
    setQuery(c.name);
    setOpen(false);
  }

  const selected = suggestions.find(s => s.name === value);

  return (
    <div ref={ref} className="relative flex-1 min-w-0">
      <div
        className="flex items-center gap-3 px-4 py-3.5 bg-white border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-gray-300 transition-all shadow-sm"
        onClick={() => setOpen(o => !o)}
      >
        {/* Flag or placeholder */}
        <div className="w-7 h-7 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 flex items-center justify-center">
          {selected?.flag
            ? <img src={selected.flag} className="w-full h-full object-cover" alt="" />
            : <span className="text-gray-300 text-base">🌐</span>
          }
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{label}</div>
          <input
            value={query}
            onChange={e => handleChange(e.target.value)}
            onFocus={() => query.length > 0 && search(query)}
            placeholder={subLabel}
            className="w-full text-sm font-semibold text-gray-800 bg-transparent outline-none placeholder-gray-400 truncate"
            onClick={e => e.stopPropagation()}
          />
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {loading && <span className="w-3.5 h-3.5 border-2 border-gray-300 border-t-green-500 rounded-full animate-spin block" />}
          <svg className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {open && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden max-h-52 overflow-y-auto">
          {suggestions.map((c, i) => (
            <div
              key={i}
              onMouseDown={() => pick(c)}
              className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
            >
              {c.flag && <img src={c.flag} className="w-5 h-5 rounded-full object-cover flex-shrink-0" alt="" />}
              <span className="text-sm font-medium text-gray-800 flex-1">{c.name}</span>
              {c.code && <span className="text-xs font-bold text-gray-300">{c.code.toUpperCase()}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function VisaCheckerPage() {
  const router = useRouter();

  const [from, setFrom]     = useState("Brazil");
  const [to, setTo]         = useState("Japan");
  const [result, setResult] = useState(null);
  const [loading, setLoad]  = useState(false);
  const [checked, setCheck] = useState(false);

  async function check() {
    if (!from || !to) return;
    setLoad(true);
    setResult(null);
    setCheck(true);

    // Update URL to country-pair slug
    const fromSlug = toSlug(from);
    const toSlug_  = toSlug(to);
    router.replace(`/visa-checker/${fromSlug}-visa-for-${toSlug_}`, { scroll: false });

    try {
      const res  = await fetch(`/api/visa-check?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`);
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ error: "Something went wrong. Please try again." });
    }
    setLoad(false);
  }

  const statusKey = result ? getStatusKey(result.visa_status) : null;
  const meta      = statusKey ? STATUS_META[statusKey] : null;

  const days       = typeof result?.visa_status === "number" ? result.visa_status : null;
  const fromSlug   = toSlug(result?.from?.name || from);
  const toSlug_    = toSlug(result?.to?.name || to);
  const pairSlug   = `${fromSlug}-visa-for-${toSlug_}`;
  const deepLink   = `/${pairSlug}/${statusKey}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">

      {/* ── Top Nav ── */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌍</span>
            <span className="font-black text-gray-900 tracking-tight text-lg">VisaCheck</span>
          </div>
          <div className="text-xs text-gray-400 font-medium">Powered by Eammu</div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ── Hero ── */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-xs font-semibold text-green-700 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
            Find Your Visa Requirement
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-3">
            Ready to Travel?<br />
            <span className="text-green-600">Check Your Visa Requirements</span> Instantly.
          </h1>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Real-time visa data for 200+ countries. Know before you go.
          </p>
        </div>

        {/* ── Search Card ── */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/60 p-5 mb-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

            {/* From */}
            <CountryDropdown
              label="I am from (Nationality)"
              subLabel="Select Country"
              value={from}
              onChange={setFrom}
            />

            {/* Arrow divider */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-sm shadow-inner">
                →
              </div>
            </div>

            {/* To */}
            <CountryDropdown
              label="I am going to (Destination)"
              subLabel="Select Destination"
              value={to}
              onChange={setTo}
            />

            {/* Button */}
            <button
              onClick={check}
              disabled={loading || !from || !to}
              className={`flex-shrink-0 flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all shadow-lg whitespace-nowrap ${
                loading || !from || !to
                  ? "bg-green-200 text-green-800 cursor-not-allowed shadow-none"
                  : "bg-green-600 hover:bg-green-700 active:bg-green-800 text-white cursor-pointer hover:shadow-green-200/60"
              }`}
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Checking...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  CHECK ELIGIBILITY
                </>
              )}
            </button>
          </div>
        </div>

        {/* ── Loading Skeleton ── */}
        {loading && (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 animate-pulse space-y-4">
            <div className="h-4 bg-gray-100 rounded-full w-1/2" />
            <div className="h-16 bg-gray-100 rounded-2xl" />
            <div className="h-20 bg-gray-100 rounded-2xl" />
            <div className="h-12 bg-gray-100 rounded-2xl" />
          </div>
        )}

        {/* ── Error ── */}
        {result?.error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-5 text-sm text-red-600 flex gap-3 items-start">
            <span className="text-lg flex-shrink-0">⚠️</span>
            <div>
              <div className="font-semibold mb-0.5">Request failed</div>
              {result.error}
            </div>
          </div>
        )}

        {/* ── Results Panel ── */}
        {result && !result.error && meta && (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/60 overflow-hidden">

            {/* Results header */}
            <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/50">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Results for</span>
                <div className="flex items-center gap-1.5">
                  {result.from?.flag && <img src={result.from.flag} className="w-4 h-4 rounded-full" alt="" />}
                  <span className="text-sm font-bold text-gray-700">{result.from?.name} Citizen</span>
                </div>
                <span className="text-gray-300">→</span>
                <div className="flex items-center gap-1.5">
                  {result.to?.flag && <img src={result.to.flag} className="w-4 h-4 rounded-full" alt="" />}
                  <span className="text-sm font-bold text-gray-700">{result.to?.name}</span>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">

              {/* Status card */}
              <div className={`flex items-start gap-4 px-5 py-4 rounded-2xl border-2 ${meta.bg} ${meta.border}`}>
                <div className="text-3xl flex-shrink-0">{meta.icon}</div>
                <div>
                  <div className={`text-lg font-black mb-1 ${meta.text}`}>
                    {meta.label}{days ? ` — ${days} days` : ""}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed m-0">
                    {days
                      ? `Citizens of ${result.from?.name} can enter ${result.to?.name} without a visa for up to ${days} days.`
                      : statusKey === "visa-required"
                        ? `Citizens of ${result.from?.name} need to obtain a visa before traveling to ${result.to?.name}.`
                        : statusKey === "e-visa"
                          ? `Citizens of ${result.from?.name} can apply for an eVisa online before traveling to ${result.to?.name}.`
                          : statusKey === "visa-on-arrival"
                            ? `Citizens of ${result.from?.name} can obtain a visa upon arrival at ${result.to?.name} airports.`
                            : statusKey === "eta"
                              ? `Citizens of ${result.from?.name} must obtain an Electronic Travel Authorization before traveling to ${result.to?.name}.`
                              : `Entry from ${result.from?.name} to ${result.to?.name} is not permitted.`
                    }
                  </p>
                </div>
              </div>

              {/* ── Deep Link CTA ── */}
              <a
                href={deepLink}
                className="block w-full px-5 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white transition-all shadow-lg shadow-orange-200/50 cursor-pointer no-underline"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-base font-black mb-0.5">
                      {statusKey === "visa-free"       && "✈️ View Visa-Free Entry Details"}
                      {statusKey === "e-visa"          && "💻 Apply for eVisa — Full Guide"}
                      {statusKey === "visa-required"   && "📋 How to Apply for Visa — Full Guide"}
                      {statusKey === "visa-on-arrival" && "🛬 Visa on Arrival — Full Guide"}
                      {statusKey === "eta"             && "📲 Apply for ETA — Full Guide"}
                      {statusKey === "no-admission"    && "🚫 Entry Restriction Details"}
                    </div>
                    <p className="text-orange-100 text-xs m-0">
                      Requirements · Documents · Fees · Processing time · Embassy info
                    </p>
                  </div>
                  <span className="text-2xl ml-3 flex-shrink-0">→</span>
                </div>
              </a>

              {/* Summary line */}
              <p className="text-xs text-center text-gray-400 m-0">
                Showing {meta.label} status for{" "}
                <span className="font-semibold">{result.from?.name}</span> passport holders traveling to{" "}
                <span className="font-semibold">{result.to?.name}</span>.
                {" "}Data is regularly updated but always verify with official embassy sources.
              </p>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}