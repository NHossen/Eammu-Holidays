// app/visa-checker/[countrySlug]/[statusSlug]/page.jsx
import Link from "next/link";
import { getVisaInfo, getVisaGuide } from "@/app/lib/eammuApi";
import { notFound } from "next/navigation";

// ── Helpers ───────────────────────────────────────────────────────────────────
function parseCountryPairSlug(slug) {
  const match = slug.match(/^(.+)-visa-for-(.+)$/);
  if (!match) return null;
  const toTitle = s => s.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { from: toTitle(match[1]), to: toTitle(match[2]) };
}

const STATUS_META = {
  "visa-free":       { icon: "✅", label: "Visa Free",       bg: "bg-green-50",  border: "border-green-200",  text: "text-green-700",  headerBg: "bg-green-600"  },
  "e-visa":          { icon: "💻", label: "eVisa",           bg: "bg-blue-50",   border: "border-blue-200",   text: "text-blue-700",   headerBg: "bg-blue-600"   },
  "visa-on-arrival": { icon: "🛬", label: "Visa on Arrival", bg: "bg-amber-50",  border: "border-amber-200",  text: "text-amber-700",  headerBg: "bg-amber-500"  },
  "eta":             { icon: "📲", label: "ETA Required",    bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", headerBg: "bg-purple-600" },
  "visa-required":   { icon: "🔴", label: "Visa Required",   bg: "bg-red-50",    border: "border-red-200",    text: "text-red-700",    headerBg: "bg-red-600"    },
  "no-admission":    { icon: "🚫", label: "No Admission",    bg: "bg-gray-50",   border: "border-gray-200",   text: "text-gray-700",   headerBg: "bg-gray-700"   },
};

const ARRIVAL_GUIDE = {
  intro: (from, to) => `When a ${from} citizen arrives at ${to}, the visa-on-arrival process takes place inside the airport at the Immigration counter — before the passport control queue.`,
  airportSteps: [
    "Land at an international airport or designated border crossing",
    "Follow signs to 'Visa on Arrival' counter (separate from passport control)",
    "Complete the arrival card / VOA application form (usually provided on the plane)",
    "Present documents to the immigration officer at the VOA counter",
    "Pay the visa fee in cash (local currency or USD is usually accepted)",
    "Receive your visa stamp or sticker in your passport",
    "Proceed to passport control with your newly stamped visa",
    "Complete health / customs declaration and collect luggage",
  ],
  immigrationTips: [
    "Carry exact change or small USD bills — change is often unavailable",
    "Have a printed or digital copy of your hotel booking or address in the country",
    "Keep return/onward ticket accessible — officers may ask to see it",
    "VOA queues can be long; arrive with time to spare, especially at peak hours",
    "Some airports have a fast-track VOA lane (fee-based) to avoid queues",
    "Passports must be valid for at least 6 months beyond your travel dates",
  ],
};

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { countrySlug, statusSlug } = await params;
  const pair  = parseCountryPairSlug(countrySlug);
  if (!pair) return {};
  const meta  = STATUS_META[statusSlug];
  const label = meta?.label || statusSlug;
  return {
    title:       `${pair.from} to ${pair.to} — ${label} Guide | Eammu`,
    description: `Complete ${label} guide for ${pair.from} citizens traveling to ${pair.to}. Requirements, documents, fees, processing time, and step-by-step instructions.`,
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function StatusGuidePage({ params }) {
  const { countrySlug, statusSlug } = await params;
  const pair      = parseCountryPairSlug(countrySlug);
  const statusKey = statusSlug;
  const meta      = STATUS_META[statusKey];

  if (!pair || !meta) notFound();

  // ── Fetch passport data (required) ───────────────────
  let passportData;
  try {
    passportData = await getVisaInfo(pair.from, pair.to);
  } catch {
    notFound();
  }

  // ── Fetch visa guide by statusSlug directly (optional) ───────────────────
  // statusSlug IS the guide slug: "e-visa", "visa-required", "visa-free" etc.
  let guide = null;
  try {
    guide = await getVisaGuide(statusKey);
  } catch {
    guide = null; // page still renders without guide data
  }

  const from  = passportData?.from?.name || pair.from;
  const to    = passportData?.to?.name   || pair.to;
  const days  = typeof passportData?.visa_status === "number" ? passportData.visa_status : null;
  const isVOA = statusKey === "visa-on-arrival";

  // ── API fields from visa guide (matches your API response shape) ──────────
  // guide.visa_type, guide.label, guide.description, guide.requirements[],
  // guide.steps[], guide.fee, guide.processing_time, guide.validity,
  // guide.tips[], guide.related_links{}
  const applyAt = isVOA
    ? "Port of Entry"
    : statusKey === "e-visa" || statusKey === "eta"
      ? "Online Portal"
      : "Embassy / Consulate";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">

      {/* ── Nav ── */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center gap-3 text-sm">
          <Link href="/visa-checker" className="flex items-center gap-2 hover:opacity-80 transition-opacity font-black text-gray-900 text-lg">
            🌍 VisaCheck
          </Link>
          <span className="text-gray-300">/</span>
          <Link href={`/visa-checker/${countrySlug}`} className="text-gray-500 hover:text-gray-700 truncate hidden sm:block">
            {from} → {to}
          </Link>
          <span className="text-gray-300 hidden sm:block">/</span>
          <span className={`font-semibold ${meta.text}`}>{meta.icon} {meta.label}</span>
        </div>
      </nav>

      {/* ── Hero Banner ── */}
      <div className={`${meta.headerBg} text-white`}>
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex items-center gap-3">
              {passportData?.from?.flag && (
                <img src={passportData.from.flag} className="w-14 h-14 rounded-full border-2 border-white/30 shadow-lg object-cover" alt={from} />
              )}
              <div>
                <div className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-0.5">Passport</div>
                <div className="text-xl font-black">{from}</div>
              </div>
            </div>
            <div className="text-4xl text-white/40 hidden sm:block">→</div>
            <div className="flex items-center gap-3">
              {passportData?.to?.flag && (
                <img src={passportData.to.flag} className="w-14 h-14 rounded-full border-2 border-white/30 shadow-lg object-cover" alt={to} />
              )}
              <div>
                <div className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-0.5">Destination</div>
                <div className="text-xl font-black">{to}</div>
              </div>
            </div>
            <div className="sm:ml-auto text-center sm:text-right">
              <div className="text-5xl mb-1">{meta.icon}</div>
              <div className="text-lg font-black">{meta.label}</div>
              {days && <div className="text-white/80 text-sm">{days} days permitted</div>}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">

        {/* ── Breadcrumb ── */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
          <Link href="/visa-checker" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href={`/visa-checker/${countrySlug}`} className="hover:text-gray-600">{from} → {to}</Link>
          <span>›</span>
          <span className="text-gray-600">{meta.label}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Main Content ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Summary — uses guide.description if available */}
            <div className={`rounded-2xl border-2 p-6 ${meta.bg} ${meta.border}`}>
              <h1 className={`text-xl font-black mb-3 ${meta.text}`}>
                {meta.icon} {from} to {to} — {meta.label} Guide
              </h1>
              <p className="text-gray-700 text-sm leading-relaxed m-0">
                {/* Use API description if present, else fallback prose */}
                {guide?.description
                  ? `${guide.description} — This guide covers everything ${from} citizens need to know before traveling to ${to}.`
                  : isVOA
                    ? ARRIVAL_GUIDE.intro(from, to)
                    : days
                      ? `Citizens of ${from} can enter ${to} without a visa for up to ${days} days.`
                      : statusKey === "visa-required"
                        ? `Citizens of ${from} must apply for a visa at the ${to} embassy before traveling.`
                        : statusKey === "e-visa"
                          ? `Citizens of ${from} can apply for an eVisa online before traveling to ${to}. No embassy visit required.`
                          : statusKey === "eta"
                            ? `Citizens of ${from} must obtain an Electronic Travel Authorization before departure.`
                            : `Citizens of ${from} must obtain a ${meta.label} before or upon arrival in ${to}.`
                }
              </p>
            </div>

            {/* At a Glance — all fields from API */}
            {guide && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-sm font-black text-gray-600 uppercase tracking-widest mb-4">At a Glance</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { icon: "💰", label: "Fee",             value: guide.fee             },
                    { icon: "⏱",  label: "Processing Time", value: guide.processing_time },
                    { icon: "📅", label: "Validity",        value: guide.validity        },
                    { icon: "🏛",  label: "Apply At",       value: applyAt               },
                    { icon: "✈️", label: "Max Stay",        value: days ? `${days} days` : "Varies" },
                    { icon: "📋", label: "Visa Type",       value: guide.label || meta.label },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <div className="text-xs text-gray-400 mb-1">{item.icon} {item.label}</div>
                      <div className="text-sm font-bold text-gray-800">{item.value || "—"}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VOA Airport Steps */}
            {isVOA && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-sm font-black text-gray-600 uppercase tracking-widest mb-4">
                  🛬 Airport Immigration Process
                </h2>
                <div className="space-y-3">
                  {ARRIVAL_GUIDE.airportSteps.map((step, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-black ${meta.headerBg}`}>
                        {i + 1}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed m-0 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Requirements — from guide.requirements[] */}
            {guide?.requirements?.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-sm font-black text-gray-600 uppercase tracking-widest mb-4">
                  📄 Required Documents
                </h2>
                <div className="space-y-2">
                  {guide.requirements.map((req, i) => (
                    <div key={i} className="flex gap-3 items-start px-4 py-3 bg-gray-50 rounded-xl border border-gray-100">
                      <span className={`text-sm font-black flex-shrink-0 mt-0.5 ${meta.text}`}>{i + 1}</span>
                      <span className="text-sm text-gray-700 leading-relaxed">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Steps — from guide.steps[] */}
            {guide?.steps?.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-sm font-black text-gray-600 uppercase tracking-widest mb-4">
                  🪜 Step-by-Step Process
                </h2>
                <div className="space-y-4">
                  {guide.steps.map((step, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-black shadow-sm ${meta.headerBg}`}>
                        {i + 1}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed m-0 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VOA Immigration Tips */}
            {isVOA && (
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
                <h2 className="text-sm font-black text-amber-800 uppercase tracking-widest mb-4">
                  💡 Immigration & Airport Tips
                </h2>
                <div className="space-y-2.5">
                  {ARRIVAL_GUIDE.immigrationTips.map((tip, i) => (
                    <div key={i} className="flex gap-2.5 items-start">
                      <span className="text-amber-500 font-black text-sm flex-shrink-0 mt-0.5">→</span>
                      <p className="text-sm text-amber-900 leading-relaxed m-0">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tips — from guide.tips[] */}
            {guide?.tips?.length > 0 && (
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                <h2 className="text-sm font-black text-yellow-800 uppercase tracking-widest mb-4">
                  💡 Pro Tips
                </h2>
                <div className="space-y-2.5">
                  {guide.tips.map((tip, i) => (
                    <div key={i} className="flex gap-2.5 items-start">
                      <span className="text-yellow-600 font-black text-sm flex-shrink-0 mt-0.5">→</span>
                      <p className="text-sm text-yellow-900 leading-relaxed m-0">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Links — from guide.related_links{} */}
            {guide?.related_links && Object.keys(guide.related_links).length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-sm font-black text-gray-600 uppercase tracking-widest mb-4">
                  🔗 Useful Links
                </h2>
                <div className="space-y-2">
                  {Object.entries(guide.related_links).map(([key, url], i) => (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border bg-gray-50 border-gray-100 hover:bg-gray-100 transition-colors no-underline`}
                    >
                      <span className="text-base">🔗</span>
                      <span className={`text-sm font-semibold capitalize ${meta.text}`}>
                        {key.replace(/_/g, " ")}
                      </span>
                      <span className="ml-auto text-gray-300 text-xs truncate max-w-[160px]">{url}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Disclaimer */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
              <div className="text-xs font-bold text-gray-500 mb-2">⚠️ Disclaimer</div>
              <p className="text-xs text-gray-500 leading-relaxed m-0">
                Visa requirements, fees, and procedures can change without notice. Always verify with the official embassy or immigration authority of {to} before traveling.
              </p>
            </div>

          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-4">

            {/* Visa Types */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3">Visa Types</h3>
              <div className="space-y-2">
                {Object.entries(STATUS_META).map(([key, m]) => (
                  <Link
                    key={key}
                    href={`/visa-checker/${countrySlug}/${key}`}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border transition-all no-underline text-sm font-medium ${
                      key === statusKey
                        ? `${m.bg} ${m.border} ${m.text} font-bold`
                        : "bg-gray-50 border-gray-100 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span>{m.icon}</span>
                    <span className="flex-1">{m.label}</span>
                    {key === statusKey && (
                      <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${m.bg}`}>Active</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Back to overview */}
            <Link
              href={`/visa-checker/${countrySlug}`}
              className="flex items-center justify-between px-4 py-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:bg-gray-50 transition-colors no-underline"
            >
              <div>
                <div className="text-sm font-bold text-gray-700">← Back to Overview</div>
                <div className="text-xs text-gray-400">{from} → {to}</div>
              </div>
            </Link>

            {/* New search */}
            <Link
              href="/visa-checker"
              className="block w-full py-3 rounded-2xl bg-green-600 hover:bg-green-700 text-white text-sm font-bold text-center transition-colors no-underline"
            >
              🔍 New Search
            </Link>

            {/* Quick status box */}
            <div className={`rounded-2xl border-2 p-4 ${meta.bg} ${meta.border}`}>
              <div className={`text-xs font-black mb-2 uppercase tracking-wide ${meta.text}`}>
                {meta.icon} {meta.label}
              </div>
              {guide?.fee && (
                <div className="text-xs text-gray-600 mb-1">💰 {guide.fee}</div>
              )}
              {guide?.processing_time && (
                <div className="text-xs text-gray-600 mb-1">⏱ {guide.processing_time}</div>
              )}
              {guide?.validity && (
                <div className="text-xs text-gray-600 mb-2">📅 {guide.validity}</div>
              )}
              <p className="text-xs text-gray-600 leading-relaxed m-0">
                {isVOA
                  ? `Available at designated ports of entry in ${to}.`
                  : statusKey === "e-visa" || statusKey === "eta"
                    ? `Apply online before travel. No embassy visit needed.`
                    : statusKey === "visa-required"
                      ? `Must be obtained before departure from the ${to} embassy.`
                      : `Check official ${to} immigration website for latest updates.`
                }
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}