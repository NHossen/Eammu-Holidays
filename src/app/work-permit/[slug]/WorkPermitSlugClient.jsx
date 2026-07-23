"use client";

// app/work-permit/[slug]/WorkPermitSlugClient.jsx
// Fetches live visa data from api.eammu.com and renders the full country guide page.

import { useState, useEffect } from "react";
import {
  Globe, FileText, CheckCircle, ArrowRight, Clock,
  AlertCircle, Building2, BadgeCheck, Users, ChevronRight,
} from "lucide-react";

const API_KEY = process.env.NEXT_PUBLIC_EAMMU_API_KEY;
const BASE    = "https://api.eammu.com/api/v1";

// ─── Fetch helpers ────────────────────────────────────────────────────────────

async function fetchCountryInfo(countryName) {
  // Fetches general country data (flag, code, etc.)
  try {
    const r = await fetch(`${BASE}/suggest?q=${encodeURIComponent(countryName)}&api_key=${API_KEY}`);
    if (!r.ok) return null;
    const d = await r.json();
    return (d.suggestions || []).find(
      (s) => s.name.toLowerCase() === countryName.toLowerCase()
    ) || (d.suggestions || [])[0] || null;
  } catch { return null; }
}

async function fetchVisaGuide(slug) {
  // Fetches structured visa guide data if available
  try {
    const r = await fetch(`/api/visa-guide/${slug}`);
    if (!r.ok) return null;
    return await r.json();
  } catch { return null; }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatPill({ label, value, color = "yellow" }) {
  const colors = {
    yellow: "bg-yellow-50 border-yellow-200 text-yellow-800",
    blue:   "bg-blue-50  border-blue-200  text-blue-800",
    green:  "bg-green-50 border-green-200 text-green-800",
    gray:   "bg-gray-50  border-gray-200  text-gray-700",
  };
  return (
    <div className={`border rounded-xl px-4 py-3 text-center ${colors[color]}`}>
      <p className="text-lg font-extrabold leading-none">{value}</p>
      <p className="text-xs mt-1 font-medium opacity-75">{label}</p>
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-9 h-9 rounded-xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-yellow-600" />
        </div>
        <h3 className="font-bold text-gray-900 text-base">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function SkeletonBlock({ className = "" }) {
  return <div className={`bg-gray-100 rounded-xl animate-pulse ${className}`} />;
}

function LoadingSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <SkeletonBlock className="h-10 w-2/3" />
      <SkeletonBlock className="h-5 w-full max-w-xl" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => <SkeletonBlock key={i} className="h-20" />)}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <SkeletonBlock className="h-48" />
        <SkeletonBlock className="h-48" />
      </div>
    </div>
  );
}

function NotFoundPage({ slug }) {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <Globe className="w-12 h-12 text-gray-200 mx-auto mb-4" />
        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Country not found</h1>
        <p className="text-gray-500 mb-6">
          We don't have a work permit guide for <strong>{slug}</strong> yet. Our team is adding new countries regularly.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/work-permit" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-bold px-6 py-3 rounded-xl transition-colors">
            All Work Permits <ArrowRight className="w-4 h-4" />
          </a>
          <a href="/contact" className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:border-yellow-300 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}

// ─── Main Client Component ────────────────────────────────────────────────────

export default function WorkPermitSlugClient({ slug, staticMeta }) {
  const [countryData, setCountryData] = useState(null);
  const [guideData,   setGuideData]   = useState(null);
  const [loading,     setLoading]     = useState(true);

  // staticMeta is passed from the server component (COUNTRY_META[slug])
  const c = staticMeta;

  useEffect(() => {
    if (!c) { setLoading(false); return; }

    let cancelled = false;
    async function load() {
      setLoading(true);
      const [cd, gd] = await Promise.all([
        fetchCountryInfo(c.name),
        fetchVisaGuide(c.relatedSlug || slug),
      ]);
      if (!cancelled) {
        setCountryData(cd);
        setGuideData(gd);
        setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [slug, c]);

  if (!c) return <NotFoundPage slug={slug} />;
  if (loading) return <LoadingSkeleton />;

  const flagImg = countryData?.flag || null;
  const themeColor = guideData?.color || guideData?.primary_color || "#FACC15";

  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <header className="relative bg-gray-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full opacity-10 blur-3xl"
          style={{ background: `radial-gradient(ellipse, ${themeColor} 0%, transparent 70%)` }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
            <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <a href="/work-permit" className="hover:text-gray-300 transition-colors">Work Permit</a>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-gray-300">{c.name}</span>
          </nav>

          <div className="flex items-start gap-5 mb-6">
            {/* Flag — real image if fetched, fallback to emoji */}
            {flagImg
              ? <img src={flagImg} alt={`${c.name} flag`} className="w-16 h-11 object-cover rounded-lg shadow-lg border-2 border-white/20 flex-shrink-0 mt-1" />
              : <span className="text-5xl flex-shrink-0 mt-0.5" role="img" aria-label={`${c.name} flag`}>{c.flag}</span>
            }
            <div>
              <p className="text-yellow-400 text-sm font-semibold tracking-wide uppercase mb-1">
                {c.region} · Work Permit Guide
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                {c.name} <span className="text-yellow-400">Work Permit</span>
              </h1>
              <p className="text-gray-300 text-base mt-1">{c.route}</p>
            </div>
          </div>

          <p className="text-gray-300 max-w-2xl leading-relaxed mb-8 text-base">
            {c.summary}
          </p>

          {/* Stat pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatPill label="Processing Time" value={c.processing} color="yellow" />
            <StatPill label="Permit Types"    value={`${c.types.length} Types`}    color="blue"   />
            <StatPill label="Region"          value={c.region}                     color="gray"   />
            <StatPill label="Eammu Support"   value="End-to-End"                   color="green"  />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-bold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-yellow-400/20"
            >
              Free Eligibility Check <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/8801701699743?text=I'm interested in the ${c.name} work permit`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-xl border border-white/15 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </header>

      {/* ── Permit Types ──────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Visa types list */}
          <InfoCard icon={FileText} title={`${c.name} Work Permit Types`}>
            <ul className="space-y-3">
              {c.types.map((type, i) => (
                <li key={type} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{type}</p>
                    {/* Live data from guide if available */}
                    {guideData?.permit_types?.[i]?.description && (
                      <p className="text-xs text-gray-500 mt-0.5">{guideData.permit_types[i].description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </InfoCard>

          {/* Key facts */}
          <InfoCard icon={CheckCircle} title="Key Requirements at a Glance">
            <ul className="space-y-3">
              {c.keyFacts.map((fact) => (
                <li key={fact} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {fact}
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* ── Live guide data section (if API returns enriched data) ────────── */}
      {guideData && (
        <section className="bg-gray-50 py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider mb-1">Live Data</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Current {c.name} Work Permit Information
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {/* Processing time from live data */}
              {guideData.processing_time && (
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Processing Time</span>
                  </div>
                  <p className="text-2xl font-extrabold text-gray-900">{guideData.processing_time}</p>
                  {guideData.processing_note && (
                    <p className="text-xs text-gray-500 mt-1">{guideData.processing_note}</p>
                  )}
                </div>
              )}

              {/* Visa fee from live data */}
              {guideData.fee && (
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <BadgeCheck className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Visa Fee</span>
                  </div>
                  <p className="text-2xl font-extrabold text-gray-900">{guideData.fee}</p>
                  {guideData.fee_note && (
                    <p className="text-xs text-gray-500 mt-1">{guideData.fee_note}</p>
                  )}
                </div>
              )}

              {/* Embassy / consulate */}
              {guideData.embassy && (
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Apply At</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{guideData.embassy}</p>
                  {guideData.embassy_note && (
                    <p className="text-xs text-gray-500 mt-1">{guideData.embassy_note}</p>
                  )}
                </div>
              )}
            </div>

            {/* Requirements list from live data */}
            {Array.isArray(guideData.requirements) && guideData.requirements.length > 0 && (
              <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Document Checklist (Live)</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {guideData.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{typeof req === "string" ? req : req.item || req.name || req}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Eammu Process ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider mb-1">How Eammu Helps</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Your {c.name} Work Permit Journey
          </h2>
        </div>

        <div className="max-w-2xl space-y-0">
          {[
            {
              icon: Users,
              title: "Eligibility Assessment",
              desc: `We evaluate your profile against ${c.name}'s ${c.route} requirements — occupation lists, language thresholds, salary benchmarks, and employer conditions. Written report within 48 hours.`,
            },
            {
              icon: FileText,
              title: "Document Authentication",
              desc: `Apostille, notarisation, and certified translation of educational certificates, employment records, and identity documents to ${c.name}'s accepted standards.`,
            },
            {
              icon: Building2,
              title: "Employer & Authority Liaison",
              desc: `For permits requiring employer sponsorship, we liaise with registered companies and government ministries. Our regional offices in Yerevan and Dubai give on-the-ground access across multiple jurisdictions.`,
            },
            {
              icon: Globe,
              title: "Application Submission",
              desc: `Complete files submitted to the relevant embassy, consulate, or online portal. Every submission tracked with proactive status updates at each milestone.`,
            },
            {
              icon: BadgeCheck,
              title: "Post-Approval Support",
              desc: `Pre-departure orientation on biometric enrolment, document collection, port-of-entry requirements, and initial registration obligations in ${c.name}.`,
            },
          ].map((step, i, arr) => (
            <div key={step.title} className="flex gap-5">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-yellow-400" />
                </div>
                {i < arr.length - 1 && <div className="w-px flex-1 bg-gray-200 mt-2" aria-hidden="true" />}
              </div>
              <div className="pb-8">
                <h3 className="text-sm font-bold text-gray-900 mb-1.5">
                  <span className="text-yellow-500 mr-1">0{i + 1}.</span>{step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-8">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6 max-w-3xl">
            {[
              {
                q: `How long does a ${c.name} work permit take?`,
                a: `Processing typically takes ${c.processing} from the point of a complete application. Timelines depend on the specific permit type, document completeness, and current workload at the relevant authority. Eammu prepares your file thoroughly to avoid delays caused by incomplete documentation.`,
              },
              {
                q: `What work permit types are available in ${c.name}?`,
                a: `${c.name} offers ${c.types.length} main work permit categories: ${c.types.join(", ")}. The right permit depends on your profession, employer sponsorship arrangement, and intended duration of employment.`,
              },
              {
                q: `Does Eammu help with ${c.name} work permits for both individuals and companies?`,
                a: `Yes. Individual applicants receive full case management from assessment through permit collection. Companies sponsoring foreign employees benefit from Eammu's employer compliance advisory, bulk filing services, and workforce immigration planning. Contact our corporate team for group rates.`,
              },
              {
                q: `What documents are typically required for a ${c.name} work permit?`,
                a: `Requirements vary by permit type but generally include: a valid passport, confirmed employment contract or job offer, educational credential assessments, language test results where applicable, police clearance certificates, and proof of health insurance. Eammu provides a personalised document checklist at the start of each case.`,
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-gray-200 pb-6">
                <dt className="font-bold text-gray-900 mb-2 text-sm">{q}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="bg-yellow-400 py-14" aria-label="Call to action">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mb-3 tracking-tight">
            Ready to apply for your {c.name} Work Permit?
          </h2>
          <p className="text-gray-800 max-w-lg mx-auto mb-7 text-sm leading-relaxed">
            Book a free 30-minute consultation with an Eammu immigration specialist. We'll assess your profile, confirm your strongest pathway, and outline a realistic timeline — no cost, no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-950 hover:bg-gray-800 text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg"
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/8801701699743?text=Hi, I need help with a ${c.name} work permit.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-950 font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Internal navigation ────────────────────────────────────────────── */}
      <nav aria-label="Other work permit pages" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
          Other Work Permit Destinations
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Canada",          href: "/work-permit/canada"          },
            { label: "Italy",           href: "/work-permit/italy"           },
            { label: "Portugal",        href: "/work-permit/portugal"        },
            { label: "Serbia",          href: "/work-permit/serbia"          },
            { label: "Kosovo",          href: "/work-permit/kosovo"          },
            { label: "North Macedonia", href: "/work-permit/north-macedonia" },
            { label: "Montenegro",      href: "/work-permit/montenegro"      },
            { label: "Moldova",         href: "/work-permit/moldova"         },
            { label: "Armenia",         href: "/work-permit/armenia"         },
            { label: "Brazil",          href: "/work-permit/brazil"          },
            { label: "Mexico",          href: "/work-permit/mexico"          },
          ]
            .filter((l) => !l.href.endsWith(slug))
            .map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-gray-600 hover:text-yellow-600 border border-gray-200 hover:border-yellow-300 bg-white px-4 py-2 rounded-full transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          <a
            href="/work-permit"
            className="text-sm text-yellow-600 border border-yellow-200 bg-yellow-50 px-4 py-2 rounded-full hover:bg-yellow-100 transition-colors duration-150"
          >
            ← All Countries
          </a>
        </div>
      </nav>

    </main>
  );
}