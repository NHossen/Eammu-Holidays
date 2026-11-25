"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { Search, X, ChevronLeft, ChevronRight, MessageCircle, ShieldCheck, Loader2 } from "lucide-react";

// --- CONFIG ---
const WHATSAPP_NUMBER = "8801631312524"; // existing official number
const ITEMS_PER_PAGE = 6;

const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const INQUIRY_TYPES = [
  { value: "Individual", label: "Individual traveler" },
  { value: "B2B", label: "Travel agency / tour operator (B2B)" },
  { value: "Corporate", label: "Corporate / group organizer" },
];

const FILTER_DEFS = [
  { key: "all", label: "All Destinations", test: () => true },
  { key: "international", label: "International", test: (t) => t.type === "international" },
  { key: "domestic", label: "Bangladesh", test: (t) => t.type === "domestic" },
  { key: "Middle East", label: "Middle East", test: (t) => t.regions.includes("Middle East") },
  { key: "Asia", label: "Asia", test: (t) => t.regions.includes("Asia") },
  { key: "Europe", label: "Europe", test: (t) => t.regions.includes("Europe") },
];

const EMPTY_FORM = {
  name: "",
  email: "",
  company: "",
  country: "",
  inquiryType: "Individual",
  destination: "",
  groupSize: "",
  dates: "",
  duration: "",
  requirements: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005A31]";

// --- Sub-components (defined outside to avoid remounting) ---
function TourCard({ tour, onAgencyInquiry }) {
  const bookingMessage = `Hello, I would like to book a ${tour.name} tour.`;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E3ECE6] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F7FAF8]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tour.image}
          alt={`${tour.name} – ${tour.country}`}
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <span className="absolute left-4 top-4 rounded-lg bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#005A31] shadow-sm">
          {tour.country}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-2 text-xl font-bold text-[#17231D]">{tour.name}</h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-[#68756D]">{tour.description}</p>
        <div className="flex flex-col gap-2">
          <a
            href={waLink(bookingMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#005A31] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#003D24] ${focusRing}`}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Book via WhatsApp
            <span className="sr-only"> – {tour.name} (opens in a new tab)</span>
          </a>
          <button
            type="button"
            onClick={() => onAgencyInquiry(tour)}
            className={`min-h-12 rounded-xl border border-[#005A31] px-4 py-3 text-center text-sm font-semibold text-[#005A31] transition hover:bg-[#F7FAF8] ${focusRing}`}
          >
            Agency / group inquiry
            <span className="sr-only"> – {tour.name}</span>
          </button>
        </div>
      </div>
    </article>
  );
}

function Pagination({ current, total, onChange }) {
  if (total <= 1) return null;
  const arrow =
    "flex h-11 min-w-11 items-center justify-center gap-1 rounded-xl border border-[#E3ECE6] bg-white px-3 text-sm font-semibold text-[#17231D] transition hover:border-[#005A31] disabled:cursor-not-allowed disabled:opacity-40";
  return (
    <nav aria-label="Tour packages pagination" className="mt-10 flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        disabled={current <= 1}
        onClick={() => onChange(Math.max(1, current - 1))}
        aria-label="Previous page"
        className={`${arrow} ${focusRing}`}
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">Prev</span>
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          aria-label={`Page ${n}`}
          aria-current={current === n ? "page" : undefined}
          onClick={() => onChange(n)}
          className={`h-11 w-11 rounded-xl text-sm font-semibold transition ${focusRing} ${
            current === n
              ? "bg-[#005A31] text-white shadow-md"
              : "border border-[#E3ECE6] bg-white text-[#17231D] hover:border-[#005A31]"
          }`}
        >
          {n}
        </button>
      ))}
      <button
        type="button"
        disabled={current >= total}
        onClick={() => onChange(Math.min(total, current + 1))}
        aria-label="Next page"
        className={`${arrow} ${focusRing}`}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </nav>
  );
}

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-[#17231D]">
        {label}
        {required && <span aria-hidden="true" className="text-red-600"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = (hasError) =>
  `w-full min-h-12 rounded-xl border bg-white px-3.5 py-2.5 text-[#17231D] placeholder:text-[#9aa5a0] ${
    hasError ? "border-red-500" : "border-[#D5E1DA]"
  } ${focusRing}`;

function buildInquiryMessage(f) {
  const isIndividual = f.inquiryType === "Individual";
  const lines = [
    "Hello Eammu Holidays,",
    "",
    "I would like to request a customized tour proposal.",
    "",
    `Inquiry type: ${f.inquiryType}`,
    `Name: ${f.name.trim()}`,
    `Email: ${f.email.trim()}`,
  ];
  if (!isIndividual || f.company.trim()) lines.push(`Company or agency: ${f.company.trim() || "-"}`);
  lines.push(
    `Country: ${f.country.trim() || "-"}`,
    `Destination: ${f.destination.trim()}`,
    `Travel dates: ${f.dates.trim() || "-"}`,
    `Group size: ${f.groupSize.trim() || "-"}`,
    `Trip duration: ${f.duration.trim() || "-"}`,
    `Additional requirements: ${f.requirements.trim() || "-"}`,
    "",
    "Please share the available options and quotation process.",
    "",
    "Thank you."
  );
  return lines.join("\n");
}

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = "Please enter your full name.";
  if (!f.email.trim()) e.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.inquiryType !== "Individual" && !f.company.trim())
    e.company = "Please enter your company or agency name.";
  if (!f.destination.trim()) e.destination = "Please enter at least one destination.";
  if (f.groupSize.trim()) {
    const n = Number(f.groupSize);
    if (!Number.isInteger(n) || n < 1) e.groupSize = "Group size must be a whole number of 1 or more.";
  }
  return e;
}

// --- MAIN ---
export default function TourPackages({ tours = [], children }) {
  const safeTours = Array.isArray(tours) ? tours : [];

  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [waUrl, setWaUrl] = useState("");
  const [opening, setOpening] = useState(false);

  const catalogRef = useRef(null);
  const formRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  // Only show filters that have at least one package
  const availableFilters = useMemo(
    () => FILTER_DEFS.filter((d) => d.key === "all" || safeTours.some(d.test)),
    [safeTours]
  );

  const filtered = useMemo(() => {
    const def = FILTER_DEFS.find((d) => d.key === filter) || FILTER_DEFS[0];
    const q = query.trim().toLowerCase();
    return safeTours.filter(
      (t) =>
        def.test(t) &&
        (!q || `${t.name} ${t.country} ${t.description}`.toLowerCase().includes(q))
    );
  }, [safeTours, filter, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const changeFilter = (key) => {
    setFilter(key);
    setPage(1);
  };

  const changeQuery = (value) => {
    setQuery(value);
    setPage(1);
  };

  const changePage = (n) => {
    setPage(Math.min(Math.max(1, n), pageCount));
    catalogRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const setInquiryType = useCallback((type) => {
    if (INQUIRY_TYPES.some((t) => t.value === type)) {
      setForm((p) => ({ ...p, inquiryType: type }));
      setErrors({});
      setWaUrl("");
    }
  }, []);

  // Server-rendered CTAs drive the client state through data attributes:
  //   data-inquiry-type="B2B|Corporate|Individual"  (+ optional data-destination="...")  → pre-select the form
  //   data-catalog-filter="international|domestic|Asia|..." and/or data-catalog-search="Dubai" → filter the catalog
  useEffect(() => {
    const handler = (ev) => {
      const el =
        ev.target instanceof Element
          ? ev.target.closest("a[data-inquiry-type], a[data-catalog-search], a[data-catalog-filter]")
          : null;
      if (!el) return;

      const type = el.getAttribute("data-inquiry-type");
      if (type) {
        setInquiryType(type);
        const dest = el.getAttribute("data-destination");
        if (dest) setForm((p) => ({ ...p, destination: dest }));
      }

      const search = el.getAttribute("data-catalog-search");
      const f = el.getAttribute("data-catalog-filter");
      if (search !== null || f !== null) {
        setFilter(FILTER_DEFS.some((d) => d.key === f) ? f : "all");
        setQuery(search || "");
        setPage(1);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [setInquiryType]);

  const handleAgencyInquiry = (tour) => {
    setForm((p) => ({ ...p, inquiryType: "B2B", destination: tour.name }));
    setErrors({});
    setWaUrl("");
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const update = (key) => (e) => {
    const value = e.target.value;
    setForm((p) => ({ ...p, [key]: value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      document.getElementById(`inq-${firstKey}`)?.focus();
      return;
    }
    const url = waLink(buildInquiryMessage(form));
    setWaUrl(url);
    setOpening(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpening(false), 2500);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* CATALOG */}
      <section
        id="packages"
        ref={catalogRef}
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 pb-16 pt-4 sm:px-6 md:pb-24 lg:px-8"
        aria-labelledby="packages-title"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#E3ECE6] pb-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#005A31]">
              <span aria-hidden="true" className="h-0.5 w-6 bg-[#F5D547]" />
              Tour catalogue
            </p>
            <h2 id="packages-title" className="text-3xl font-bold tracking-tight text-[#17231D] md:text-4xl">
              Tour Packages
            </h2>
            <p className="mt-2 max-w-2xl text-[#68756D]">
              International and Bangladesh destinations. Every trip can be discussed and customized on request.
            </p>
          </div>
          <p className="text-sm font-semibold text-[#005A31]" aria-live="polite">
            Showing {visible.length} of {filtered.length} packages
          </p>
        </div>

        {/* Destination search (real, client-side) */}
        <div className="relative mb-5 max-w-xl">
          <label htmlFor="tour-search" className="sr-only">Search tour packages by destination</label>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#68756D]" aria-hidden="true" />
          <input
            id="tour-search"
            type="search"
            value={query}
            onChange={(e) => changeQuery(e.target.value)}
            placeholder="Search a destination, e.g. Dubai or Sajek"
            autoComplete="off"
            className={`w-full min-h-12 rounded-xl border border-[#D5E1DA] bg-white py-3 pl-12 pr-12 text-[#17231D] placeholder:text-[#9aa5a0] ${focusRing}`}
          />
          {query && (
            <button
              type="button"
              onClick={() => changeQuery("")}
              aria-label="Clear search"
              className={`absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-[#68756D] hover:bg-[#F7FAF8] ${focusRing}`}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>

        <div
          role="group"
          aria-label="Filter tour packages"
          className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {availableFilters.map((f) => (
            <button
              key={f.key}
              type="button"
              aria-pressed={filter === f.key}
              onClick={() => changeFilter(f.key)}
              className={`min-h-11 shrink-0 rounded-xl px-5 text-sm font-semibold transition ${focusRing} ${
                filter === f.key
                  ? "bg-[#005A31] text-white shadow-md"
                  : "border border-[#D5E1DA] bg-white text-[#17231D] hover:border-[#005A31]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#D5E1DA] bg-white p-10 text-center text-[#68756D]">
            <p>No packages match your search. Try another destination or request a custom itinerary below.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  changeFilter("all");
                }}
                className={`min-h-11 rounded-xl border border-[#005A31] px-5 text-sm font-semibold text-[#005A31] hover:bg-[#F7FAF8] ${focusRing}`}
              >
                Show all packages
              </button>
              <a
                href="#inquiry"
                data-inquiry-type="Individual"
                data-destination={query.trim() || undefined}
                className={`inline-flex min-h-11 items-center rounded-xl bg-[#005A31] px-5 text-sm font-semibold text-white hover:bg-[#003D24] ${focusRing}`}
              >
                Request a custom itinerary
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {visible.map((tour) => (
              <TourCard key={tour.id} tour={tour} onAgencyInquiry={handleAgencyInquiry} />
            ))}
          </div>
        )}

        <Pagination current={currentPage} total={pageCount} onChange={changePage} />
      </section>

      {/* Server-rendered sections (categories, destinations, B2B, corporate, process …) */}
      {children}

      {/* INQUIRY FORM (WhatsApp flow) */}
      <section
        id="inquiry"
        ref={formRef}
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 md:py-24 lg:px-8"
        aria-labelledby="inquiry-title"
      >
        <div className="grid overflow-hidden rounded-3xl border border-[#E3ECE6] bg-white shadow-sm lg:grid-cols-[2fr_3fr]">
          <div className="bg-[#003D24] p-6 text-white sm:p-10">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5D547]">
              <span aria-hidden="true" className="h-0.5 w-6 bg-[#F5D547]" />
              Custom inquiry
            </p>
            <h2 id="inquiry-title" className="text-2xl font-bold leading-tight md:text-3xl">
              Request a Custom Itinerary or Proposal
            </h2>
            <p className="mt-4 leading-relaxed text-white/80">
              Fill in your details and we will prepare a structured WhatsApp message to our team. Your
              inquiry is only sent once you press send in WhatsApp.
            </p>
            <div className="mt-8 flex gap-3 rounded-2xl bg-white/10 p-4 text-sm text-white/85">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#F5D547]" aria-hidden="true" />
              <p>
                <strong className="block text-white">How your details are used</strong>
                The information you enter is only used in your browser to write the WhatsApp message.
                It is not saved in a database or sent to Eammu automatically. Our team receives your
                inquiry only after you press Send in WhatsApp.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <p className="text-xs text-[#68756D] sm:col-span-2">
                Fields marked <span className="text-red-600">*</span> are required.
              </p>

              <div className="sm:col-span-2">
                <Field id="inq-inquiryType" label="I am a" required>
                  <select
                    id="inq-inquiryType"
                    value={form.inquiryType}
                    onChange={update("inquiryType")}
                    className={inputClass(false)}
                  >
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field id="inq-name" label="Full name" required error={errors.name}>
                <input id="inq-name" type="text" autoComplete="name" value={form.name} onChange={update("name")}
                  aria-invalid={!!errors.name} aria-describedby={errors.name ? "inq-name-error" : undefined}
                  className={inputClass(errors.name)} />
              </Field>

              <Field id="inq-email" label="Email" required error={errors.email}>
                <input id="inq-email" type="email" autoComplete="email" value={form.email} onChange={update("email")}
                  aria-invalid={!!errors.email} aria-describedby={errors.email ? "inq-email-error" : undefined}
                  className={inputClass(errors.email)} />
              </Field>

              <Field
                id="inq-company"
                label={form.inquiryType === "Individual" ? "Company or agency (optional)" : "Company or agency name"}
                required={form.inquiryType !== "Individual"}
                error={errors.company}
              >
                <input id="inq-company" type="text" autoComplete="organization" value={form.company} onChange={update("company")}
                  aria-invalid={!!errors.company} aria-describedby={errors.company ? "inq-company-error" : undefined}
                  className={inputClass(errors.company)} />
              </Field>

              <Field id="inq-country" label="Country" error={errors.country}>
                <input id="inq-country" type="text" autoComplete="country-name" value={form.country} onChange={update("country")}
                  className={inputClass(false)} />
              </Field>

              <div className="sm:col-span-2">
                <Field id="inq-destination" label="Destination(s)" required error={errors.destination}>
                  <input id="inq-destination" type="text" value={form.destination} onChange={update("destination")}
                    placeholder="e.g. Dubai, or Thailand + Malaysia"
                    aria-invalid={!!errors.destination} aria-describedby={errors.destination ? "inq-destination-error" : undefined}
                    className={inputClass(errors.destination)} />
                </Field>
              </div>

              <Field id="inq-groupSize" label="Estimated group size" error={errors.groupSize}>
                <input id="inq-groupSize" type="number" min="1" step="1" inputMode="numeric" value={form.groupSize} onChange={update("groupSize")}
                  aria-invalid={!!errors.groupSize} aria-describedby={errors.groupSize ? "inq-groupSize-error" : undefined}
                  className={inputClass(errors.groupSize)} />
              </Field>

              <Field id="inq-dates" label="Preferred travel dates">
                <input id="inq-dates" type="text" value={form.dates} onChange={update("dates")}
                  placeholder="e.g. 10–17 March 2027" className={inputClass(false)} />
              </Field>

              <div className="sm:col-span-2">
                <Field id="inq-duration" label="Trip duration">
                  <input id="inq-duration" type="text" value={form.duration} onChange={update("duration")}
                    placeholder="e.g. 7 nights" className={inputClass(false)} />
                </Field>
              </div>

              <div className="sm:col-span-2">
                <Field id="inq-requirements" label="Additional requirements">
                  <textarea id="inq-requirements" rows={4} value={form.requirements} onChange={update("requirements")}
                    className={inputClass(false)} />
                </Field>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={opening}
                  className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#005A31] px-8 py-3.5 font-bold text-white transition hover:bg-[#003D24] disabled:opacity-80 sm:w-auto ${focusRing}`}
                >
                  {opening ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Opening WhatsApp…
                    </>
                  ) : (
                    <>
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      Continue in WhatsApp
                    </>
                  )}
                </button>
              </div>
            </form>

            {waUrl && (
              <div role="status" className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-900">
                Your inquiry message is ready. Please press send in WhatsApp to complete it. It is not
                submitted until you do.{" "}
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                  If WhatsApp did not open, tap here.
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}