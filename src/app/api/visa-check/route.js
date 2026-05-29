import { NextResponse } from "next/server";

function toTitleCase(str) {
  return str.trim().split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

const statusSlugMap = {
  "visa required":   "visa-required",
  "e-visa":          "e-visa",
  "visa on arrival": "visa-on-arrival",
  "eta":             "eta",
  "no admission":    "no-admission",
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const from = toTitleCase(searchParams.get("from") || "");
  const to   = toTitleCase(searchParams.get("to")   || "");

  if (!from || !to) {
    return NextResponse.json({ error: "from and to required" }, { status: 400 });
  }

  const BASE = process.env.EAMMU_API_URL || "https://api.eammu.com";
  const KEY  = process.env.EAMMU_API_KEY;

  try {
    // ── 1. Passport visa info ────────────────────────────
    const passportRes = await fetch(
      `${BASE}/api/v1/passport?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&api_key=${KEY}`
    );
    const passportData = await passportRes.json();

    if (!passportRes.ok) {
      return NextResponse.json(
        { error: passportData.error || "API error" },
        { status: passportRes.status }
      );
    }

    // ── 2. Visa guide (parallel fetch) ──────────────────
    const visaStatus = passportData.visa_status;
    const isVisaFree = typeof visaStatus === "number";
    const slug = isVisaFree ? "visa-free" : (statusSlugMap[visaStatus] || null);

    let guideData = null;
    if (slug) {
      try {
        const guideRes = await fetch(
          `${BASE}/api/v1/visa-guides/${slug}?api_key=${KEY}`,
          { next: { revalidate: 86400 } }
        );
        if (guideRes.ok) guideData = await guideRes.json();
      } catch {
        guideData = null;
      }
    }

    // ── 3. Return combined ───────────────────────────────
    return NextResponse.json({
      ...passportData,
      guide: guideData,
    });

  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}