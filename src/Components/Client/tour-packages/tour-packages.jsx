"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";

// --- CONFIG ---
const WHATSAPP_NUMBER = "8801701699743"; // existing official number
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
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31]";

// --- Sub-components (defined outside to avoid remounting) ---
function TourCard({ tour, onAgencyInquiry }) {
  const bookingMessage = `Hello, I would like to book a ${tour.name} tour.`;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
      <div className="relative h-60 overflow-hidden bg-gray-100">
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
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#005a31] shadow-sm">
          {tour.country}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-800">{tour.name}</h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">{tour.description}</p>
        <div className="flex flex-col gap-2">
          <a
            href={waLink(bookingMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-xl bg-[#005a31] py-3 text-center font-semibold text-white transition hover:bg-[#003e24] ${focusRing}`}
          >
            Book via WhatsApp
          </a>
          <button
            type="button"
            onClick={() => onAgencyInquiry(tour)}
            className={`rounded-xl border border-[#005a31] py-3 text-center text-sm font-semibold text-[#005a31] transition hover:bg-green-50 ${focusRing}`}
          >
            Agency / group inquiry
          </button>
        </div>
      </div>
    </article>
  );
}

function Pagination({ current, total, onChange }) {
  if (total <= 1) return null;
  return (
    <nav aria-label="Tour packages pagination" className="mt-10 flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        disabled={current <= 1}
        onClick={() => onChange(Math.max(1, current - 1))}
        className={`rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 ${focusRing}`}
      >
        Prev
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          aria-label={`Page ${n}`}
          aria-current={current === n ? "page" : undefined}
          onClick={() => onChange(n)}
          className={`h-10 w-10 rounded-lg font-medium transition ${focusRing} ${
            current === n ? "bg-[#005a31] text-white" : "border border-gray-300 hover:bg-gray-50"
          }`}
        >
          {n}
        </button>
      ))}
      <button
        type="button"
        disabled={current >= total}
        onClick={() => onChange(Math.min(total, current + 1))}
        className={`rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 ${focusRing}`}
      >
        Next
      </button>
    </nav>
  );
}

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold text-gray-800">
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
  `w-full rounded-lg border bg-white px-3 py-2.5 text-gray-900 ${
    hasError ? "border-red-500" : "border-gray-300"
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
  const [page, setPage] = useState(1);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [waUrl, setWaUrl] = useState("");

  const catalogRef = useRef(null);
  const formRef = useRef(null);

  // Only show filters that have at least one package
  const availableFilters = useMemo(
    () => FILTER_DEFS.filter((d) => d.key === "all" || safeTours.some(d.test)),
    [safeTours]
  );

  const filtered = useMemo(() => {
    const def = FILTER_DEFS.find((d) => d.key === filter) || FILTER_DEFS[0];
    return safeTours.filter(def.test);
  }, [safeTours, filter]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const changeFilter = (key) => {
    setFilter(key);
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

  // Server-rendered CTAs (anchors with data-inquiry-type) pre-select the inquiry type
  useEffect(() => {
    const handler = (ev) => {
      const el = ev.target instanceof Element ? ev.target.closest("a[data-inquiry-type]") : null;
      if (el) setInquiryType(el.getAttribute("data-inquiry-type"));
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
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* CATALOG */}
      <section id="packages" ref={catalogRef} className="container mx-auto scroll-mt-24 px-4 pb-20" aria-labelledby="packages-title">
        <div className="mb-8 flex flex-col justify-between gap-3 border-b border-gray-200 pb-4 md:flex-row md:items-end">
          <div>
            <h2 id="packages-title" className="text-3xl font-bold text-gray-900">
              Tour Packages
            </h2>
            <p className="mt-1 text-gray-500">
              International and Bangladesh destinations. Every trip can be discussed and customized on request.
            </p>
          </div>
          <p className="text-sm font-semibold text-[#005a31]" aria-live="polite">
            Showing {visible.length} of {filtered.length} packages
          </p>
        </div>

        <div role="group" aria-label="Filter tour packages" className="mb-8 flex flex-wrap gap-2">
          {availableFilters.map((f) => (
            <button
              key={f.key}
              type="button"
              aria-pressed={filter === f.key}
              onClick={() => changeFilter(f.key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${focusRing} ${
                filter === f.key
                  ? "bg-[#005a31] text-white"
                  : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-600">
            No packages match this filter. Try another category or request a custom itinerary below.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((tour) => (
              <TourCard key={tour.id} tour={tour} onAgencyInquiry={handleAgencyInquiry} />
            ))}
          </div>
        )}

        <Pagination current={currentPage} total={pageCount} onChange={changePage} />
      </section>

      {/* Server-rendered sections (B2B, corporate, process) */}
      {children}

      {/* INQUIRY FORM (WhatsApp flow) */}
      <section id="inquiry" ref={formRef} className="container mx-auto scroll-mt-24 px-4 py-20" aria-labelledby="inquiry-title">
        <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          <h2 id="inquiry-title" className="text-2xl font-bold text-gray-900 md:text-3xl">
            Request a Custom Itinerary or Proposal
          </h2>
          <p className="mt-2 text-gray-600">
            Fill in your details and we will prepare a structured WhatsApp message to our team. Your
            inquiry is only sent once you press send in WhatsApp.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
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
                className={`w-full rounded-xl bg-[#005a31] py-3.5 font-bold text-white transition hover:bg-[#003e24] sm:w-auto sm:px-10 ${focusRing}`}
              >
                Continue in WhatsApp
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
      </section>
    </>
  );
}