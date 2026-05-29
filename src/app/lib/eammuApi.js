const BASE = process.env.EAMMU_API_URL || "https://api.eammu.com";
const KEY  = process.env.EAMMU_API_KEY;

async function get(path, revalidate = 3600) {
  const url = `${BASE}${path}${path.includes("?") ? "&" : "?"}api_key=${KEY}`;
  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

// ── Passport ─────────────────────────────────────────
export async function getVisaInfo(from, to) {
  return get(`/api/v1/passport?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`);
}
export async function getAllDestinations(passport) {
  return get(`/api/v1/passport?from=${encodeURIComponent(passport)}`);
}

// ── Countries ────────────────────────────────────────
export async function getCountries(name = "") {
  return get(`/api/v1/countries?name=${encodeURIComponent(name)}`);
}
export async function getCountryByCode(code) {
  return get(`/api/v1/countries?code=${encodeURIComponent(code)}`);
}

// ── Suggest ──────────────────────────────────────────
export async function suggestCountries(q) {
  return get(`/api/v1/suggest?q=${encodeURIComponent(q)}`, 86400);
}

// ── Embassies ────────────────────────────────────────
export async function getEmbassies(operator = "", country = "") {
  return get(`/api/v1/embassies?operator=${encodeURIComponent(operator)}&country=${encodeURIComponent(country)}`);
}

// ── Airports ─────────────────────────────────────────
export async function getAirports(country = "", code = "") {
  return get(`/api/v1/airports?country=${encodeURIComponent(country)}&code=${encodeURIComponent(code)}`);
}

// ── Visa Guides ──────────────────────────────────────
export async function getAllVisaGuides() {
  return get(`/api/v1/visa-guides`, 86400);
}
export async function getVisaGuide(slug) {
  return get(`/api/v1/visa-guides/${slug}`, 86400);
}