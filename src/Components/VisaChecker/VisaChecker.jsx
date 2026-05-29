"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// ── CountryInput ─────────────────────────────────────────────────────────────
function CountryInput({ label, value, onChange }) {
  const [suggestions, setSuggestions] = useState([]);
  const [show, setShow]               = useState(false);
  const [loading, setLoading]         = useState(false);
  const ref      = useRef();
  const timerRef = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (!ref.current?.contains(e.target)) setShow(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  async function fetchSuggestions(q) {
    if (q.length < 1) { setSuggestions([]); setShow(false); return; }
    setLoading(true);
    try {
      const res  = await fetch(`/api/country-suggest?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setSuggestions(data.suggestions || []);
      setShow((data.suggestions || []).length > 0);
    } catch {
      setSuggestions([]);
    }
    setLoading(false);
  }

  function handleInput(val) {
    onChange(val);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => fetchSuggestions(val), 300);
  }

  function select(c) {
    onChange(c.name);
    setShow(false);
  }

  return (
    <div ref={ref} className="relative">
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
        {label}
      </label>
      <div className="relative">
        <input
          value={value}
          onChange={e => handleInput(e.target.value)}
          onFocus={() => value.length > 0 && fetchSuggestions(value)}
          placeholder="Type country..."
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 text-sm outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-50 transition-all bg-white shadow-sm placeholder-gray-400"
        />
        {loading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-yellow-200 border-t-yellow-500 rounded-full animate-spin" />
        )}
      </div>

      {show && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border-2 border-gray-100 rounded-xl shadow-2xl overflow-hidden">
          {suggestions.map((c, i) => (
            <div
              key={i}
              onMouseDown={() => select(c)}
              className="flex items-center gap-2.5 px-4 py-2.5 cursor-pointer hover:bg-yellow-50 border-b border-gray-50 last:border-0 transition-colors"
            >
              {c.flag && <img src={c.flag} width={20} height={20} alt={c.name} className="rounded flex-shrink-0" />}
              <span className="text-sm font-medium text-gray-800">{c.name}</span>
              {c.code && <span className="ml-auto text-xs font-bold text-gray-400">{c.code.toUpperCase()}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Status config ─────────────────────────────────────────────────────────────
const STATUS_CFG = {
  "visa required": {
    icon: "🔴", label: "Visa Required",
    badge: "bg-red-100 text-red-700 border-red-200",
    card:  "bg-red-50 border-red-200",
    title: "text-red-700",
    btn:   "bg-red-50 border-red-300 text-red-700 hover:bg-red-100",
    slug:  "visa-required",
    desc:  "You must apply for a visa before traveling. Visit the embassy or consulate of your destination.",
    cta:   "📋 Full Visa Application Guide",
  },
  "e-visa": {
    icon: "💻", label: "E-Visa Available",
    badge: "bg-blue-100 text-blue-700 border-blue-200",
    card:  "bg-blue-50 border-blue-200",
    title: "text-blue-700",
    btn:   "bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100",
    slug:  "e-visa",
    desc:  "Apply online before travel. No embassy visit required. Receive approval via email.",
    cta:   "🌐 E-Visa Application Steps",
  },
  "visa on arrival": {
    icon: "✅", label: "Visa on Arrival",
    badge: "bg-green-100 text-green-700 border-green-200",
    card:  "bg-green-50 border-green-200",
    title: "text-green-700",
    btn:   "bg-green-50 border-green-300 text-green-700 hover:bg-green-100",
    slug:  "visa-on-arrival",
    desc:  "Get your visa at the port of entry. Bring required documents and cash.",
    cta:   "🛂 Visa on Arrival Instructions",
  },
  "eta": {
    icon: "📋", label: "ETA Required",
    badge: "bg-purple-100 text-purple-700 border-purple-200",
    card:  "bg-purple-50 border-purple-200",
    title: "text-purple-700",
    btn:   "bg-purple-50 border-purple-300 text-purple-700 hover:bg-purple-100",
    slug:  "eta",
    desc:  "Electronic Travel Authorization needed before boarding your flight.",
    cta:   "📱 ETA Application Guide",
  },
  "no admission": {
    icon: "🚫", label: "No Admission",
    badge: "bg-rose-100 text-rose-800 border-rose-200",
    card:  "bg-rose-50 border-rose-200",
    title: "text-rose-800",
    btn:   "bg-rose-50 border-rose-300 text-rose-800 hover:bg-rose-100",
    slug:  "no-admission",
    desc:  "Entry is currently not permitted for your passport.",
    cta:   "ℹ️ Learn About This Restriction",
  },
  "not_applicable": {
    icon: "➖", label: "Not Applicable",
    badge: "bg-gray-100 text-gray-600 border-gray-200",
    card:  "bg-gray-50 border-gray-200",
    title: "text-gray-600",
    btn:   null, slug: null, desc: "Not applicable for the selected route.", cta: null,
  },
};

// ── Main Component ────────────────────────────────────────────────────────────
export default function VisaChecker() {
  const router = useRouter();

  const [from, setFrom]           = useState("Bangladesh");
  const [to, setTo]               = useState("");
  const [result, setResult]       = useState(null);
  const [loading, setLoading]     = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  async function check() {
    if (!to || !from) return;
    setLoading(true);
    setResult(null);
    setShowGuide(false);
    try {
      const res  = await fetch(`/api/visa-check?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`);
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ error: "Something went wrong. Please try again." });
    }
    setLoading(false);
  }

  const isVisaFree = result && typeof result.visa_status === "number";

  const cfg = result?.visa_status
    ? isVisaFree
      ? {
          icon: "🆓", label: `Visa Free — ${result.visa_status} days`,
          badge: "bg-yellow-100 text-yellow-700 border-yellow-200",
          card:  "bg-yellow-50 border-yellow-200",
          title: "text-yellow-700",
          btn:   "bg-yellow-50 border-yellow-300 text-yellow-700 hover:bg-yellow-100",
          slug:  "visa-free",
          desc:  `Citizens of ${result.from?.name} can enter ${result.to?.name} visa-free for up to ${result.visa_status} days.`,
          cta:   "✈️ Visa-Free Entry Details",
        }
      : STATUS_CFG[result.visa_status] || STATUS_CFG["visa required"]
    : null;

  const guide = result?.guide;

  return (
    <div className="bg-white rounded-2xl p-6 max-w-xl w-full shadow-lg border border-gray-100">

      {/* Header */}
      <div className="mb-5">
        <h3 className="text-xl font-bold text-gray-900 mb-0.5">🌍 Visa Checker</h3>
        <p className="text-sm text-gray-500">Check visa requirements for any passport instantly</p>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <CountryInput label="Your Passport" value={from} onChange={setFrom} />
        <CountryInput label="Destination"   value={to}   onChange={setTo} />
      </div>

      {/* Button */}
      <button
        onClick={check}
        disabled={loading || !to || !from}
        className={`w-full py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all ${
          loading || !to
            ? "bg-yellow-200 text-yellow-800 cursor-not-allowed"
            : "bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black cursor-pointer"
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-yellow-600 border-t-transparent rounded-full animate-spin inline-block" />
            Checking...
          </span>
        ) : "Check Visa Requirements →"}
      </button>

      {/* Error */}
      {result?.error && (
        <div className="mt-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
          ⚠️ {result.error}
        </div>
      )}

      {/* Result */}
      {result && !result.error && cfg && (
        <div className="mt-5 space-y-3">

          {/* Country row */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl flex-wrap">
            {result.from?.flag && (
              <img src={result.from.flag} width={24} height={24} alt={result.from.name} className="rounded" />
            )}
            <span className="text-sm font-semibold text-gray-700">{result.from?.name}</span>
            <span className="text-gray-400 mx-1">→</span>
            {result.to?.flag && (
              <img src={result.to.flag} width={24} height={24} alt={result.to.name} className="rounded" />
            )}
            <span className="text-sm font-semibold text-gray-700">{result.to?.name}</span>
            <span className={`ml-auto text-xs font-bold px-3 py-1 rounded-full border ${cfg.badge}`}>
              {cfg.icon} {cfg.label}
            </span>
          </div>

          {/* Status card */}
          <div className={`px-4 py-4 rounded-xl border-2 ${cfg.card}`}>
            <div className={`text-lg font-extrabold mb-1.5 ${cfg.title}`}>
              {cfg.icon} {cfg.label}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed m-0">{cfg.desc}</p>
          </div>

          {/* CTA — show/hide inline guide */}
          {cfg.cta && cfg.slug && guide && (
            <button
              onClick={() => setShowGuide(v => !v)}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border-2 cursor-pointer transition-all ${cfg.btn}`}
            >
              <div className="text-left">
                <div className="text-sm font-bold">{cfg.cta}</div>
                <p className="text-xs text-gray-500 mt-0.5 m-0">
                  Requirements · Steps · Fees · Processing time
                </p>
              </div>
              <span className="text-base ml-3 transition-transform" style={{ transform: showGuide ? "rotate(90deg)" : "none" }}>
                →
              </span>
            </button>
          )}

          {/* Inline guide */}
          {showGuide && guide && (
            <div className="border-2 border-gray-100 rounded-xl overflow-hidden">

              {/* Guide header */}
              <div className={`px-4 py-3 flex items-center justify-between border-b border-gray-100 ${cfg.card}`}>
                <span className={`text-sm font-bold ${cfg.title}`}>
                  {cfg.icon} {guide.label || cfg.label}
                </span>
                <button onClick={() => setShowGuide(false)} className="text-gray-400 hover:text-gray-700 text-xl leading-none">
                  ×
                </button>
              </div>

              <div className="p-4 space-y-4 bg-white">

                {/* Quick info */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "💰 Fee",      value: guide.fee },
                    { label: "⏱ Time",     value: guide.processing_time },
                    { label: "📅 Validity", value: guide.validity },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 border border-gray-100 rounded-lg p-2.5">
                      <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                      <div className="text-xs font-semibold text-gray-800 leading-tight">{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* Requirements */}
                {guide.requirements?.length > 0 && (
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      📄 Required Documents
                    </div>
                    <div className="space-y-1.5">
                      {guide.requirements.map((req, i) => (
                        <div key={i} className="flex gap-2.5 items-start px-3 py-2 bg-gray-50 rounded-lg border border-gray-100">
                          <span className={`text-xs font-bold mt-0.5 flex-shrink-0 ${cfg.title}`}>{i + 1}</span>
                          <span className="text-xs text-gray-700 leading-relaxed">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Steps */}
                {guide.steps?.length > 0 && (
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      🪜 Step-by-Step Process
                    </div>
                    <div className="space-y-2">
                      {guide.steps.map((step, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <div className={`w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 ${cfg.title.replace("text-", "bg-")}`}
                            style={{ background: "currentColor" }}>
                            <span className="text-white">{i + 1}</span>
                          </div>
                          <span className="text-xs text-gray-600 leading-relaxed pt-0.5">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tips */}
                {guide.tips?.length > 0 && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                    <div className="text-xs font-bold text-yellow-800 mb-2">💡 Pro Tips</div>
                    <div className="space-y-1.5">
                      {guide.tips.map((tip, i) => (
                        <div key={i} className="flex gap-2 text-xs text-yellow-800">
                          <span className="flex-shrink-0 font-bold">→</span>
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Full page button */}
                {cfg.slug && (
                  <button
                    onClick={() => router.push(`/visa-guide/${cfg.slug}?from=${encodeURIComponent(result.from?.name || "")}&to=${encodeURIComponent(result.to?.name || "")}`)}
                    className="w-full py-2.5 rounded-xl bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold transition-colors"
                  >
                    View Full Guide Page →
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Full page link — always visible */}
          {cfg.slug && (
            <button
              onClick={() => router.push(`/visa-guide/${cfg.slug}?from=${encodeURIComponent(result.from?.name || "")}&to=${encodeURIComponent(result.to?.name || "")}`)}
              className="w-full py-2.5 rounded-xl border border-gray-200 text-xs text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Open Full Guide Page →
            </button>
          )}

        </div>
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}