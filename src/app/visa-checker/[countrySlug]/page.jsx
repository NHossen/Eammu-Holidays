// app/visa-checker/[countrySlug]/page.jsx
import Link from "next/link";
import { getVisaInfo } from "@/app/lib/eammuApi";
import { notFound } from "next/navigation";

// ── Helpers ───────────────────────────────────────────────────────────────────
function parseCountryPairSlug(slug) {
  const match = slug.match(/^(.+)-visa-for-(.+)$/);
  if (!match) return null;
  const toTitle = s => s.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { from: toTitle(match[1]), to: toTitle(match[2]) };
}

function toSlug(str = "") {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

const STATUS_META = {
  "visa-free":       { icon: "✅", label: "Visa Free",       color: "green",  bg: "bg-green-50",  border: "border-green-200", text: "text-green-700",  badgeBg: "bg-green-100" },
  "e-visa":          { icon: "💻", label: "eVisa",           color: "blue",   bg: "bg-blue-50",   border: "border-blue-200",  text: "text-blue-700",   badgeBg: "bg-blue-100"  },
  "visa-on-arrival": { icon: "🛬", label: "Visa on Arrival", color: "amber",  bg: "bg-amber-50",  border: "border-amber-200", text: "text-amber-700",  badgeBg: "bg-amber-100" },
  "eta":             { icon: "📲", label: "ETA Required",    color: "purple", bg: "bg-purple-50", border: "border-purple-200",text: "text-purple-700", badgeBg: "bg-purple-100"},
  "visa-required":   { icon: "🔴", label: "Visa Required",   color: "red",    bg: "bg-red-50",    border: "border-red-200",   text: "text-red-700",    badgeBg: "bg-red-100"   },
  "no-admission":    { icon: "🚫", label: "No Admission",    color: "gray",   bg: "bg-gray-50",   border: "border-gray-200",  text: "text-gray-700",   badgeBg: "bg-gray-100"  },
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

// ── SEO Metadata ──────────────────────────────────────────────────────────────
// ✅ generateMetadata returns a plain OBJECT — never JSX
export async function generateMetadata({ params }) {
  const { countrySlug } = await params;
  const pair = parseCountryPairSlug(countrySlug);
  if (!pair) return {};
  return {
    title:       `${pair.from} Visa for ${pair.to} — Requirements & Guide`,
    description: `Check visa requirements for ${pair.from} citizens traveling to ${pair.to}. Get the latest entry rules, documents, fees, and step-by-step application guide.`,
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────
// ✅ Default export returns JSX — this is the actual page component
export default async function CountryPairPage({ params }) {
  const { countrySlug } = await params;
  const pair = parseCountryPairSlug(countrySlug);
  if (!pair) notFound();

  let data;
  try {
    data = await getVisaInfo(pair.from, pair.to);
  } catch {
    notFound();
  }

  const statusKey  = getStatusKey(data.visa_status);
  const meta       = STATUS_META[statusKey];
  const days       = typeof data.visa_status === "number" ? data.visa_status : null;
  const fromSlug   = toSlug(data.from?.name || pair.from);
  const toSlug_    = toSlug(data.to?.name   || pair.to);
  const pairSlug   = `${fromSlug}-visa-for-${toSlug_}`;
  const deepLink   = `/visa-checker/${pairSlug}/${statusKey}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">

      {/* ── Nav ── */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link href="/visa-checker" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-xl">🌍</span>
            <span className="font-black text-gray-900 tracking-tight text-lg">VisaCheck</span>
          </Link>
          <span className="text-gray-200">/</span>
          <span className="text-sm text-gray-500 truncate">
            {data.from?.name} → {data.to?.name}
          </span>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-10">

        {/* ── Breadcrumb ── */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
          <Link href="/visa-checker" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <span className="text-gray-600">{data.from?.name} to {data.to?.name}</span>
        </div>

        {/* ── Hero ── */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            {data.from?.flag && (
              <img src={data.from.flag} className="w-12 h-12 rounded-full shadow-md border-2 border-white object-cover" alt={data.from.name} />
            )}
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">From</div>
              <div className="text-xl font-black text-gray-900">{data.from?.name}</div>
            </div>
          </div>
          <div className="text-3xl text-gray-300 font-light hidden sm:block">→</div>
          <div className="flex items-center gap-3">
            {data.to?.flag && (
              <img src={data.to.flag} className="w-12 h-12 rounded-full shadow-md border-2 border-white object-cover" alt={data.to.name} />
            )}
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">To</div>
              <div className="text-xl font-black text-gray-900">{data.to?.name}</div>
            </div>
          </div>
          <div className={`sm:ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 ${meta.bg} ${meta.border} ${meta.text} font-bold text-sm`}>
            {meta.icon} {meta.label}{days ? ` — ${days} days` : ""}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Main Content ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Status card */}
            <div className={`rounded-2xl border-2 p-6 ${meta.bg} ${meta.border}`}>
              <div className={`text-2xl font-black mb-2 ${meta.text}`}>
                {meta.icon} {meta.label}{days ? ` — ${days} days` : ""}
              </div>
              <p className="text-gray-700 leading-relaxed text-sm m-0">
                {days
                  ? `Citizens of ${data.from?.name} can enter ${data.to?.name} without a visa for up to ${days} days. No prior visa application is needed — simply present your passport at the border.`
                  : statusKey === "visa-required"
                    ? `Citizens of ${data.from?.name} are required to obtain a visa before traveling to ${data.to?.name}. The visa must be obtained from the embassy or consulate in advance.`
                    : statusKey === "e-visa"
                      ? `Citizens of ${data.from?.name} can apply for an Electronic Visa (eVisa) online. The process is simple and can be completed from home without visiting an embassy.`
                      : statusKey === "visa-on-arrival"
                        ? `Citizens of ${data.from?.name} can obtain a Visa on Arrival at designated airports and border crossings in ${data.to?.name}. No advance visa application is needed.`
                        : statusKey === "eta"
                          ? `Citizens of ${data.from?.name} must obtain an Electronic Travel Authorization (ETA) before departure. This is a simple online process linked to your passport.`
                          : `Citizens of ${data.from?.name} are currently not permitted to enter ${data.to?.name}. Please contact the embassy for specific details.`
                }
              </p>
            </div>

            {/* Deep-link CTA */}
            <Link
              href={deepLink}
              className="block rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all text-white p-5 shadow-lg shadow-orange-100 no-underline group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-black text-lg mb-1">
                    {statusKey === "visa-free"       && "✈️ Full Visa-Free Entry Guide"}
                    {statusKey === "e-visa"          && "💻 Complete eVisa Application Guide"}
                    {statusKey === "visa-required"   && "📋 Step-by-Step Visa Application Guide"}
                    {statusKey === "visa-on-arrival" && "🛬 Full Visa on Arrival Guide"}
                    {statusKey === "eta"             && "📲 Full ETA Application Guide"}
                    {statusKey === "no-admission"    && "🚫 Entry Restriction Details"}
                  </div>
                  <p className="text-orange-100 text-sm m-0">
                    Documents required · Fees & costs · Processing time · Embassy contacts · Pro tips
                  </p>
                </div>
                <span className="text-3xl ml-4 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Quick facts */}
            {data.guide && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h2 className="text-sm font-black text-gray-700 uppercase tracking-widest mb-4">Quick Facts</h2>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "💰 Fee",       value: data.guide.fee },
                    { label: "⏱ Processing", value: data.guide.processing_time },
                    { label: "📅 Validity",  value: data.guide.validity },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                      <div className="text-sm font-bold text-gray-800">{item.value || "—"}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Requirements preview */}
            {data.guide?.requirements?.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h2 className="text-sm font-black text-gray-700 uppercase tracking-widest mb-4">
                  📄 Documents Required
                </h2>
                <div className="space-y-2">
                  {data.guide.requirements.slice(0, 4).map((req, i) => (
                    <div key={i} className="flex gap-3 items-start px-3 py-2.5 bg-gray-50 rounded-xl border border-gray-100">
                      <span className={`text-xs font-black mt-0.5 flex-shrink-0 ${meta.text}`}>{i + 1}</span>
                      <span className="text-sm text-gray-700">{req}</span>
                    </div>
                  ))}
                  {data.guide.requirements.length > 4 && (
                    <Link href={deepLink} className={`block text-xs font-semibold ${meta.text} hover:underline pt-1`}>
                      + {data.guide.requirements.length - 4} more documents → View full guide
                    </Link>
                  )}
                </div>
              </div>
            )}

          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-4">

            {/* Check another */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3">Check Another</h3>
              <Link
                href="/visa-checker"
                className="block w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-bold text-center transition-colors no-underline"
              >
                🔍 New Search
              </Link>
            </div>

            {/* Status options */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3">
                Other Visa Types
              </h3>
              <div className="space-y-2">
                {Object.entries(STATUS_META).map(([key, m]) => (
                  <Link
                    key={key}
                    href={`/${pairSlug}/${key}`}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border transition-all no-underline text-sm font-medium ${
                      key === statusKey
                        ? `${m.bg} ${m.border} ${m.text} font-bold`
                        : "bg-gray-50 border-gray-100 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span>{m.icon}</span>
                    <span>{m.label}</span>
                    {key === statusKey && (
                      <span className="ml-auto text-xs font-bold">← Current</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <div className="text-xs font-bold text-amber-800 mb-1.5">⚠️ Important Notice</div>
              <p className="text-xs text-amber-700 leading-relaxed m-0">
                Visa requirements can change without notice. Always verify with the official embassy or consulate before traveling.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}