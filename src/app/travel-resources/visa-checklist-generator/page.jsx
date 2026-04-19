"use client";
import { useState, useMemo, useRef, useEffect } from "react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
import countries from "@/app/data/countries.json";


const visaTypes = [
  { id: "student", label: "Student Visa", icon: "🎓" },
  { id: "tourist", label: "Tourist Visa", icon: "✈️" },
  { id: "work", label: "Work Visa", icon: "💼" },
  { id: "business", label: "Business Visa", icon: "🤝" },
];

const baseChecklists = {
  student: [
    { id: "s1", text: "Valid Passport (min. 6 months validity)", category: "Identity", required: true },
    { id: "s2", text: "Passport-size Photographs (white background)", category: "Identity", required: true },
    { id: "s3", text: "University/College Acceptance Letter", category: "Academic", required: true },
    { id: "s4", text: "Academic Transcripts & Certificates", category: "Academic", required: true },
    { id: "s5", text: "IELTS/TOEFL Score Certificate", category: "Academic", required: true },
    { id: "s6", text: "Bank Statement (Last 6 months)", category: "Financial", required: true },
    { id: "s7", text: "Sponsor's Financial Guarantee Letter", category: "Financial", required: true },
    { id: "s8", text: "Visa Application Form (Completed)", category: "Application", required: true },
    { id: "s9", text: "Visa Fee Payment Receipt", category: "Application", required: true },
    { id: "s10", text: "Health Insurance Certificate", category: "Health", required: true },
    { id: "s11", text: "Medical Fitness Certificate", category: "Health", required: false },
    { id: "s12", text: "Police Clearance Certificate", category: "Background", required: true },
  ],
  tourist: [
    { id: "t1", text: "Valid Passport (min. 6 months validity)", category: "Identity", required: true },
    { id: "t2", text: "Passport-size Photographs", category: "Identity", required: true },
    { id: "t3", text: "Visa Application Form", category: "Application", required: true },
    { id: "t4", text: "Visa Fee Payment Receipt", category: "Application", required: true },
    { id: "t5", text: "Hotel Booking Confirmation", category: "Travel", required: true },
    { id: "t6", text: "Return Flight Ticket", category: "Travel", required: true },
    { id: "t7", text: "Travel Itinerary", category: "Travel", required: true },
    { id: "t8", text: "Bank Statement (Last 3 months)", category: "Financial", required: true },
    { id: "t9", text: "Travel Insurance", category: "Health", required: true },
    { id: "t10", text: "Employment/Business Proof", category: "Background", required: false },
    { id: "t11", text: "Leave Letter from Employer", category: "Background", required: false },
  ],
  work: [
    { id: "w1", text: "Valid Passport (min. 6 months validity)", category: "Identity", required: true },
    { id: "w2", text: "Passport-size Photographs", category: "Identity", required: true },
    { id: "w3", text: "Job Offer Letter from Employer", category: "Employment", required: true },
    { id: "w4", text: "Employment Contract", category: "Employment", required: true },
    { id: "w5", text: "Educational Certificates (Attested)", category: "Academic", required: true },
    { id: "w6", text: "Professional Experience Certificates", category: "Employment", required: true },
    { id: "w7", text: "Bank Statement", category: "Financial", required: true },
    { id: "w8", text: "Medical Fitness Certificate", category: "Health", required: true },
    { id: "w9", text: "Police Clearance Certificate", category: "Background", required: true },
    { id: "w10", text: "Visa Application Form", category: "Application", required: true },
  ],
  business: [
    { id: "b1", text: "Valid Passport (min. 6 months validity)", category: "Identity", required: true },
    { id: "b2", text: "Passport-size Photographs", category: "Identity", required: true },
    { id: "b3", text: "Business Invitation Letter", category: "Business", required: true },
    { id: "b4", text: "Company Registration Documents", category: "Business", required: true },
    { id: "b5", text: "Business Bank Statement", category: "Financial", required: true },
    { id: "b6", text: "Chamber of Commerce Letter", category: "Business", required: true },
    { id: "b7", text: "Hotel Booking & Return Ticket", category: "Travel", required: true },
    { id: "b8", text: "Visa Application Form", category: "Application", required: true },
    { id: "b9", text: "Travel Insurance", category: "Health", required: true },
    { id: "b10", text: "Business Card", category: "Business", required: false },
  ],
};

const countrySpecific = {
  us: {
    student: [
      { id: "us_s1", text: "DS-160 Form Confirmation Page", category: "US Specific", required: true },
      { id: "us_s2", text: "SEVIS Fee Receipt (I-901)", category: "US Specific", required: true },
      { id: "us_s3", text: "I-20 Form from University", category: "US Specific", required: true },
      { id: "us_s4", text: "GRE/GMAT Score (if required)", category: "Academic", required: false },
    ],
    tourist: [
      { id: "us_t1", text: "DS-160 Form Confirmation", category: "US Specific", required: true },
      { id: "us_t2", text: "B-2 Visa Interview Appointment Letter", category: "US Specific", required: true },
    ],
    work: [
      { id: "us_w1", text: "I-129 Petition (H-1B or relevant)", category: "US Specific", required: true },
      { id: "us_w2", text: "Labor Condition Application (LCA)", category: "US Specific", required: true },
      { id: "us_w3", text: "DS-160 Form Confirmation", category: "US Specific", required: true },
    ],
    business: [
      { id: "us_b1", text: "DS-160 Form Confirmation", category: "US Specific", required: true },
      { id: "us_b2", text: "B-1 Visa Appointment Confirmation", category: "US Specific", required: true },
    ],
  },
  gb: {
    student: [
      { id: "gb_s1", text: "CAS (Confirmation of Acceptance for Studies)", category: "UK Specific", required: true },
      { id: "gb_s2", text: "TB Test Certificate", category: "Health", required: true },
      { id: "gb_s3", text: "ATAS Clearance (if applicable)", category: "UK Specific", required: false },
      { id: "gb_s4", text: "Biometric Residence Permit (BRP) if applicable", category: "UK Specific", required: false },
    ],
    work: [
      { id: "gb_w1", text: "Certificate of Sponsorship (CoS)", category: "UK Specific", required: true },
      { id: "gb_w2", text: "TB Test Certificate", category: "Health", required: true },
      { id: "gb_w3", text: "English Language Proof (B1 level)", category: "UK Specific", required: true },
    ],
    tourist: [
      { id: "gb_t1", text: "Strong Ties to Home Country Evidence", category: "UK Specific", required: true },
    ],
  },
  ca: {
    student: [
      { id: "ca_s1", text: "Letter of Acceptance from DLI", category: "Canada Specific", required: true },
      { id: "ca_s2", text: "Proof of Financial Support (CAD 10,000+)", category: "Financial", required: true },
      { id: "ca_s3", text: "Biometrics Enrollment", category: "Canada Specific", required: true },
      { id: "ca_s4", text: "Quebec Acceptance Certificate (CAQ) if applicable", category: "Canada Specific", required: false },
    ],
    work: [
      { id: "ca_w1", text: "LMIA (Labour Market Impact Assessment)", category: "Canada Specific", required: true },
      { id: "ca_w2", text: "Biometrics Enrollment", category: "Canada Specific", required: true },
      { id: "ca_w3", text: "Work Permit Application (IMM 1295)", category: "Canada Specific", required: true },
    ],
    tourist: [
      { id: "ca_t1", text: "eTA (Electronic Travel Authorization) if applicable", category: "Canada Specific", required: true },
      { id: "ca_t2", text: "Biometrics if required", category: "Canada Specific", required: false },
    ],
  },
  au: {
    student: [
      { id: "au_s1", text: "CoE (Confirmation of Enrollment)", category: "Australia Specific", required: true },
      { id: "au_s2", text: "OSHC Health Insurance", category: "Health", required: true },
      { id: "au_s3", text: "GTE Statement (Genuine Temporary Entrant)", category: "Australia Specific", required: true },
      { id: "au_s4", text: "Skills Assessment (if required)", category: "Australia Specific", required: false },
    ],
    work: [
      { id: "au_w1", text: "Nomination by Australian Employer (subclass 482)", category: "Australia Specific", required: true },
      { id: "au_w2", text: "Skills Assessment", category: "Australia Specific", required: true },
      { id: "au_w3", text: "English Language Test Results", category: "Academic", required: true },
    ],
    tourist: [
      { id: "au_t1", text: "eVisitor or ETA Application", category: "Australia Specific", required: true },
    ],
  },
  de: {
    student: [
      { id: "de_s1", text: "Blocked Account (Sperrkonto) — €11,208/year", category: "Financial", required: true },
      { id: "de_s2", text: "APS Certificate (for some nationalities)", category: "Academic", required: true },
      { id: "de_s3", text: "German Language Certificate or English Program Proof", category: "Academic", required: true },
    ],
    work: [
      { id: "de_w1", text: "Recognition of Foreign Qualifications", category: "Academic", required: true },
      { id: "de_w2", text: "Blocked Account or Employer Confirmation of Salary", category: "Financial", required: true },
    ],
  },
  ae: {
    tourist: [
      { id: "ae_t1", text: "Online Visa Application (ICP Portal)", category: "UAE Specific", required: true },
      { id: "ae_t2", text: "Return Ticket Confirmation", category: "Travel", required: true },
    ],
    work: [
      { id: "ae_w1", text: "Emirates ID Application", category: "UAE Specific", required: true },
      { id: "ae_w2", text: "Employer's Trade License Copy", category: "UAE Specific", required: true },
      { id: "ae_w3", text: "Medical Test (UAE approved center)", category: "Health", required: true },
      { id: "ae_w4", text: "Labour Contract (MOHRE Attested)", category: "Employment", required: true },
    ],
    student: [
      { id: "ae_s1", text: "UAE University Acceptance Letter", category: "Academic", required: true },
      { id: "ae_s2", text: "Emirates ID Application", category: "UAE Specific", required: true },
    ],
  },
  sa: {
    work: [
      { id: "sa_w1", text: "Iqama (Residence Permit) Application", category: "Saudi Specific", required: true },
      { id: "sa_w2", text: "Medical Examination at Approved Center", category: "Health", required: true },
      { id: "sa_w3", text: "Attested Educational Certificates", category: "Academic", required: true },
    ],
    tourist: [
      { id: "sa_t1", text: "Online Saudi Visa Application (Tawakkalna)", category: "Saudi Specific", required: true },
    ],
  },
  sg: {
    work: [
      { id: "sg_w1", text: "Employment Pass Application (EP/S-Pass)", category: "Singapore Specific", required: true },
      { id: "sg_w2", text: "Fixed Monthly Salary Evidence", category: "Financial", required: true },
    ],
    student: [
      { id: "sg_s1", text: "Student's Pass Application (ICA)", category: "Singapore Specific", required: true },
      { id: "sg_s2", text: "In-Principle Approval Letter", category: "Singapore Specific", required: true },
    ],
  },
  jp: {
    tourist: [
      { id: "jp_t1", text: "Itinerary & Accommodation Details", category: "Travel", required: true },
      { id: "jp_t2", text: "Certificate of Employment or Enrollment", category: "Background", required: true },
    ],
    student: [
      { id: "jp_s1", text: "Certificate of Eligibility (COE)", category: "Japan Specific", required: true },
      { id: "jp_s2", text: "Residence Tax Payment Certificate", category: "Financial", required: false },
    ],
  },
  fr: {
    student: [
      { id: "fr_s1", text: "Campus France Attestation", category: "France Specific", required: true },
      { id: "fr_s2", text: "Carte de Séjour (Long-Stay Visa)", category: "France Specific", required: true },
    ],
    tourist: [
      { id: "fr_t1", text: "Schengen Visa Application Form", category: "Schengen", required: true },
      { id: "fr_t2", text: "Schengen Travel Insurance", category: "Health", required: true },
    ],
    work: [
      { id: "fr_w1", text: "Work Authorization from DIRECCTE", category: "France Specific", required: true },
      { id: "fr_w2", text: "Schengen Long-Stay Visa (D-Visa)", category: "France Specific", required: true },
    ],
  },
};

const categoryColors = {
  Identity: "badge-primary",
  Academic: "badge-secondary",
  Financial: "badge-success",
  Application: "badge-warning",
  Health: "badge-error",
  Background: "badge-info",
  Travel: "badge-accent",
  Employment: "badge-neutral",
  Business: "badge-warning",
  "US Specific": "badge-error",
  "UK Specific": "badge-primary",
  "Canada Specific": "badge-error",
  "Australia Specific": "badge-success",
  "UAE Specific": "badge-secondary",
  "Saudi Specific": "badge-warning",
  "Singapore Specific": "badge-info",
  "Japan Specific": "badge-neutral",
  "France Specific": "badge-primary",
  Schengen: "badge-accent",
  Custom: "badge-ghost",
};

const categoryDotColors = {
  Identity: "#3b82f6",
  Academic: "#8b5cf6",
  Financial: "#22c55e",
  Application: "#f59e0b",
  Health: "#ef4444",
  Background: "#06b6d4",
  Travel: "#14b8a6",
  Employment: "#84cc16",
  Business: "#f97316",
  "US Specific": "#dc2626",
  "UK Specific": "#1d4ed8",
  "Canada Specific": "#b91c1c",
  "Australia Specific": "#15803d",
  "UAE Specific": "#7c3aed",
  "Saudi Specific": "#16a34a",
  "Singapore Specific": "#0284c7",
  "Japan Specific": "#be123c",
  "France Specific": "#1e40af",
  Schengen: "#0d9488",
  Custom: "#6b7280",
};

// ─────────────────────────────────────────────
// COUNTRY DROPDOWN
// ─────────────────────────────────────────────
function CountryDropdown({ label, value, onChange, placeholder }) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = countries.filter((c) =>
    c.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div ref={ref} className="relative">
      <label className="label">
        <span className="label-text font-bold text-xs uppercase tracking-widest text-base-content/60">{label}</span>
      </label>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="btn btn-outline w-full justify-between font-normal text-left h-12 px-4 border-base-300 hover:border-primary hover:bg-base-200 transition-all"
      >
        {value ? (
          <span className="flex items-center gap-3">
            <img src={value.flag} width={24} height={17} className="object-contain rounded-sm shadow-sm" alt="" />
            <span className="font-medium">{value.country}</span>
          </span>
        ) : (
          <span className="text-base-content/40">{placeholder}</span>
        )}
        <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-base-100 border border-base-300 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
          <div className="p-2 border-b border-base-200">
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country..."
              className="input input-sm w-full bg-base-200 border-0 focus:outline-none"
            />
          </div>
          <ul className="max-h-56 overflow-y-auto divide-y divide-base-100 scrollbar-thin">
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-sm text-base-content/40">No results found</li>
            ) : (
              filtered.map((c) => (
                <li
                  key={c.code}
                  onClick={() => { onChange(c); setOpen(false); setSearch(""); }}
                  className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-primary/10 transition-colors text-sm ${value?.code === c.code ? "bg-primary/10 text-primary font-semibold" : ""}`}
                >
                  <img src={c.flag} width={22} height={16} className="object-contain rounded-sm" alt="" />
                  {c.country}
                  {value?.code === c.code && <span className="ml-auto text-primary">✓</span>}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// EDIT ITEM MODAL
// ─────────────────────────────────────────────
function EditItemModal({ item, onSave, onClose }) {
  const [text, setText] = useState(item.text);
  const [category, setCategory] = useState(item.category);
  const [required, setRequired] = useState(item.required);

  return (
    <dialog open className="modal modal-open">
      <div className="modal-box max-w-md">
        <h3 className="font-black text-lg mb-4 flex items-center gap-2">
          <span>✏️</span> Edit Document
        </h3>
        <div className="form-control mb-3">
          <label className="label"><span className="label-text font-semibold">Document Name</span></label>
          <input
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Document name..."
          />
        </div>
        <div className="form-control mb-3">
          <label className="label"><span className="label-text font-semibold">Category</span></label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full"
          >
            {Object.keys(categoryColors).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="form-control mb-6">
          <label className="label cursor-pointer">
            <span className="label-text font-semibold">Mark as Required</span>
            <input
              type="checkbox"
              checked={required}
              onChange={(e) => setRequired(e.target.checked)}
              className="toggle toggle-primary"
            />
          </label>
        </div>
        <div className="modal-action">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button
            className="btn btn-primary"
            onClick={() => { if (text.trim()) onSave({ ...item, text: text.trim(), category, required }); }}
          >
            Save Changes
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose} />
    </dialog>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function VisaChecklistGenerator() {
  const [fromCountry, setFromCountry] = useState(null);
  const [toCountry, setToCountry] = useState(null);
  const [visaType, setVisaType] = useState(null);
  const [step, setStep] = useState(1);
  const [checked, setChecked] = useState({});
  const [customItems, setCustomItems] = useState([]);
  const [editedItems, setEditedItems] = useState({});
  const [newItemText, setNewItemText] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("Custom");
  const [addingItem, setAddingItem] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [newItemRequired, setNewItemRequired] = useState(false);

  // Merge base + country-specific + custom items, applying edits
  const checklist = useMemo(() => {
    if (!visaType) return [];
    const base = (baseChecklists[visaType] || []).map((item) =>
      editedItems[item.id] ? { ...item, ...editedItems[item.id] } : item
    );
    const specific = toCountry
      ? (countrySpecific[toCountry.code]?.[visaType] || []).map((item) =>
          editedItems[item.id] ? { ...item, ...editedItems[item.id] } : item
        )
      : [];
    const custom = customItems.map((item) =>
      editedItems[item.id] ? { ...item, ...editedItems[item.id] } : item
    );
    return [...base, ...specific, ...custom];
  }, [visaType, toCountry, customItems, editedItems]);

  const grouped = useMemo(() => {
    return checklist.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});
  }, [checklist]);

  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progress = checklist.length ? Math.round((checkedCount / checklist.length) * 100) : 0;

  const handleGenerate = () => {
    if (fromCountry && toCountry && visaType) {
      setStep(2);
      setChecked({});
      setCustomItems([]);
      setEditedItems({});
    }
  };

  const addCustomItem = () => {
    if (!newItemText.trim()) return;
    const newItem = {
      id: `custom_${Date.now()}`,
      text: newItemText.trim(),
      category: newItemCategory,
      required: newItemRequired,
      custom: true,
    };
    setCustomItems((prev) => [...prev, newItem]);
    setNewItemText("");
    setNewItemRequired(false);
    setAddingItem(false);
  };

  const removeItem = (id) => {
    setCustomItems((prev) => prev.filter((i) => i.id !== id));
    setChecked((prev) => { const n = { ...prev }; delete n[id]; return n; });
    setEditedItems((prev) => { const n = { ...prev }; delete n[id]; return n; });
  };

  const saveEdit = (updated) => {
    setEditedItems((prev) => ({ ...prev, [updated.id]: updated }));
    setEditingItem(null);
  };

  // ── PDF DOWNLOAD ──────────────────────────────
  const downloadPDF = () => {
    const visaLabel = visaTypes.find((v) => v.id === visaType)?.label || visaType;
    const visaIcon = visaTypes.find((v) => v.id === visaType)?.icon || "";
    const dateStr = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

    const categoriesHtml = Object.entries(grouped)
      .map(([cat, items]) => {
        const dot = categoryDotColors[cat] || "#6b7280";
        const itemsHtml = items
          .map((item) => {
            const isChecked = !!checked[item.id];
            return `
              <div class="item ${isChecked ? "item-done" : ""}">
                <div class="checkbox ${isChecked ? "checkbox-checked" : ""}">
                  ${isChecked ? `<svg width="12" height="10" viewBox="0 0 12 10"><path d="M1 5l3.5 3.5L11 1" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>` : ""}
                </div>
                <div class="item-content">
                  <span class="item-text">${item.text}</span>
                  <div class="badges">
                    ${item.required ? `<span class="badge-required">Required</span>` : `<span class="badge-optional">Optional</span>`}
                    ${item.custom ? `<span class="badge-custom">Custom</span>` : ""}
                  </div>
                </div>
              </div>`;
          })
          .join("");

        const catChecked = items.filter((i) => checked[i.id]).length;
        return `
          <div class="category">
            <div class="cat-header">
              <div class="cat-dot" style="background:${dot}"></div>
              <span class="cat-name">${cat}</span>
              <span class="cat-count">${catChecked}/${items.length}</span>
            </div>
            <div class="cat-items">${itemsHtml}</div>
          </div>`;
      })
      .join("");

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Visa Checklist — Eammu.com</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Outfit', 'Segoe UI', sans-serif;
    background: #f8faff;
    color: #1e293b;
    padding: 0;
    margin: 0;
  }
  .page { max-width: 780px; margin: 0 auto; background: #fff; min-height: 100vh; }

  /* HEADER */
  .header {
    background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0d4f3c 100%);
    padding: 36px 40px 28px;
    position: relative;
    overflow: hidden;
  }
  .header::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 200px; height: 200px;
    background: rgba(255,255,255,0.04);
    border-radius: 50%;
  }
  .header::after {
    content: '';
    position: absolute;
    bottom: -40px; left: 40%;
    width: 150px; height: 150px;
    background: rgba(255,255,255,0.03);
    border-radius: 50%;
  }
  .header-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
  .logo { font-size: 22px; font-weight: 900; color: #fff; letter-spacing: -0.5px; }
  .logo span { color: #4ade80; }
  .date-chip { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.18); border-radius: 20px; padding: 4px 14px; font-size: 11px; color: rgba(255,255,255,0.8); font-weight: 500; }
  .header-title { font-size: 28px; font-weight: 900; color: #fff; margin-bottom: 6px; letter-spacing: -0.5px; }
  .header-sub { font-size: 13px; color: rgba(255,255,255,0.65); font-weight: 400; }
  .header-meta { display: flex; gap: 10px; margin-top: 20px; flex-wrap: wrap; }
  .meta-pill {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 100px;
    padding: 6px 16px;
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .meta-pill.green { background: rgba(74,222,128,0.15); border-color: rgba(74,222,128,0.3); color: #4ade80; }

  /* PROGRESS */
  .progress-section { padding: 20px 40px; background: #f8faff; border-bottom: 1px solid #e2e8f0; }
  .progress-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
  .progress-label { font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.8px; }
  .progress-value { font-size: 14px; font-weight: 800; color: #15803d; }
  .progress-track { background: #e2e8f0; border-radius: 100px; height: 8px; overflow: hidden; }
  .progress-fill {
    height: 100%;
    border-radius: 100px;
    background: linear-gradient(90deg, #15803d, #4ade80);
    width: ${progress}%;
  }
  ${progress === 100 ? `.complete-banner { background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1.5px solid #86efac; border-radius: 12px; padding: 12px 18px; margin-top: 12px; text-align: center; font-size: 13px; font-weight: 700; color: #15803d; }` : ""}

  /* BODY */
  .body { padding: 28px 40px; }

  /* CATEGORY */
  .category { margin-bottom: 20px; break-inside: avoid; }
  .cat-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    background: #f8faff;
    border: 1px solid #e2e8f0;
    border-bottom: none;
    border-radius: 12px 12px 0 0;
  }
  .cat-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .cat-name { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.2px; color: #475569; flex: 1; }
  .cat-count { font-size: 11px; color: #94a3b8; font-weight: 600; }
  .cat-items { border: 1px solid #e2e8f0; border-radius: 0 0 12px 12px; overflow: hidden; }

  /* ITEMS */
  .item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px 16px;
    border-bottom: 1px solid #f1f5f9;
    background: #fff;
  }
  .item:last-child { border-bottom: none; }
  .item-done { background: #f0fdf4; }
  .checkbox {
    width: 20px; height: 20px;
    border-radius: 6px;
    border: 2px solid #d1d5db;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .checkbox-checked { background: #16a34a; border-color: #16a34a; }
  .item-content { flex: 1; }
  .item-text { font-size: 13px; color: #374151; font-weight: 500; display: block; margin-bottom: 4px; }
  .item-done .item-text { text-decoration: line-through; color: #9ca3af; }
  .badges { display: flex; gap: 6px; flex-wrap: wrap; }
  .badge-required { font-size: 10px; background: #fef2f2; color: #dc2626; border-radius: 4px; padding: 2px 8px; font-weight: 700; border: 1px solid #fecaca; }
  .badge-optional { font-size: 10px; background: #f8fafc; color: #94a3b8; border-radius: 4px; padding: 2px 8px; font-weight: 600; border: 1px solid #e2e8f0; }
  .badge-custom { font-size: 10px; background: #eff6ff; color: #2563eb; border-radius: 4px; padding: 2px 8px; font-weight: 700; border: 1px solid #bfdbfe; }

  /* FOOTER */
  .footer { background: linear-gradient(135deg, #0f172a, #1e3a5f); padding: 24px 40px; text-align: center; }
  .footer-logo { font-size: 18px; font-weight: 900; color: #fff; margin-bottom: 6px; }
  .footer-logo span { color: #4ade80; }
  .footer-sub { font-size: 11px; color: rgba(255,255,255,0.5); line-height: 1.6; }
  .footer-link { color: #4ade80; font-weight: 700; }

  @media print {
    body { background: #fff; }
    .page { max-width: 100%; }
    .header { padding: 24px 30px 20px; }
    .body { padding: 20px 30px; }
    .footer { padding: 16px 30px; }
  }
</style>
</head>
<body>
<div class="page">

  <div class="header">
    <div class="header-top">
      <div class="logo">eammu<span>.com</span></div>
      <div class="date-chip">📅 ${dateStr}</div>
    </div>
    <div class="header-title">📋 Visa Document Checklist</div>
    <div class="header-sub">Your personalized document guide — generated by Eammu.com</div>
    <div class="header-meta">
      <div class="meta-pill">🌍 From: ${fromCountry.country}</div>
      <div class="meta-pill">✈️ To: ${toCountry.country}</div>
      <div class="meta-pill">${visaIcon} ${visaLabel}</div>
      <div class="meta-pill green">✅ ${checkedCount}/${checklist.length} Completed</div>
    </div>
  </div>

  <div class="progress-section">
    <div class="progress-row">
      <span class="progress-label">Overall Progress</span>
      <span class="progress-value">${progress}% Complete</span>
    </div>
    <div class="progress-track"><div class="progress-fill"></div></div>
    ${progress === 100 ? `<div class="complete-banner">🎉 All documents collected! You're ready to apply.</div>` : ""}
  </div>

  <div class="body">
    ${categoriesHtml}
  </div>

  <div class="footer">
    <div class="footer-logo">eammu<span>.com</span></div>
    <div class="footer-sub">
      Trusted Visa, Travel &amp; Immigration Experts<br/>
      Bangladesh • Dubai • Armenia • Georgia<br/>
      <span class="footer-link">www.eammu.com</span> | info@eammu.com
    </div>
  </div>

</div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const win = window.open(url, "_blank");
    if (win) {
      win.onload = () => {
        setTimeout(() => win.print(), 400);
        setTimeout(() => URL.revokeObjectURL(url), 8000);
      };
    }
  };

  // ── TXT DOWNLOAD ──────────────────────────────
  const downloadTXT = () => {
    const visaLabel = visaTypes.find((v) => v.id === visaType)?.label || visaType;
    let content = `VISA DOCUMENT CHECKLIST\n${"═".repeat(52)}\n`;
    content += `From: ${fromCountry.country}\nTo:   ${toCountry.country}\nType: ${visaLabel}\nSite: eammu.com\nDate: ${new Date().toLocaleDateString()}\n${"═".repeat(52)}\n`;
    Object.entries(grouped).forEach(([cat, items]) => {
      content += `\n▸ ${cat.toUpperCase()}\n${"─".repeat(36)}\n`;
      items.forEach((item) => {
        const s = checked[item.id] ? "[✓]" : "[ ]";
        content += `  ${s}  ${item.text}${item.required ? "  ★" : ""}\n`;
      });
    });
    content += `\n${"═".repeat(52)}\nProgress: ${checkedCount}/${checklist.length} (${progress}%)\n★ = Required documents\n\nFor expert visa assistance: eammu.com\n`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `eammu-visa-checklist-${toCountry.code}-${visaType}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const isReady = fromCountry && toCountry && visaType;

  // ─────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-base-200 font-sans py-8 px-4">
      {/* Edit Modal */}
      {editingItem && (
        <EditItemModal
          item={editingItem}
          onSave={saveEdit}
          onClose={() => setEditingItem(null)}
        />
      )}

      <div className="max-w-2xl mx-auto">
        {/* ── HEADER ── */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success border border-success/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4">
            <span>✈️</span> Free Tool · Eammu.com
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-base-content leading-tight mb-3">
            Visa Checklist{" "}
            <span className="text-primary">Generator</span>
          </h1>
          <p className="text-base-content/50 text-base max-w-md mx-auto">
            Personalized visa document checklist based on your nationality & destination
          </p>
        </div>

        {step === 1 ? (
          /* ── STEP 1: FORM ── */
          <div>
            <div className="card bg-base-100 shadow-xl border border-base-300 mb-4">
              <div className="card-body gap-5">
                {/* From Country */}
                <CountryDropdown
                  label="Your Nationality"
                  value={fromCountry}
                  onChange={setFromCountry}
                  placeholder="Select your country..."
                />

                {/* To Country */}
                <CountryDropdown
                  label="Destination Country"
                  value={toCountry}
                  onChange={setToCountry}
                  placeholder="Select destination..."
                />

                {/* Visa Type */}
                <div>
                  <label className="label">
                    <span className="label-text font-bold text-xs uppercase tracking-widest text-base-content/60">Visa Type</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {visaTypes.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setVisaType(v.id)}
                        className={`btn btn-outline h-auto py-3 justify-start gap-3 font-semibold transition-all ${
                          visaType === v.id
                            ? "btn-primary border-primary bg-primary/10 text-primary"
                            : "border-base-300 text-base-content/60 hover:border-primary hover:text-primary"
                        }`}
                      >
                        <span className="text-xl">{v.icon}</span>
                        <span className="text-sm">{v.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={!isReady}
                  className={`btn btn-primary btn-lg w-full mt-2 font-black tracking-wide ${!isReady ? "btn-disabled" : ""}`}
                >
                  {isReady ? "Generate My Checklist →" : "Fill all fields to continue"}
                </button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "🌍", title: "100+ Countries", sub: "Complete visa data" },
                { icon: "📋", title: "100% Free", sub: "No signup needed" },
                { icon: "⬇️", title: "Downloadable", sub: "PDF & TXT export" },
              ].map((c, i) => (
                <div key={i} className="card bg-base-100 border border-base-300 shadow-sm text-center py-4 px-2">
                  <div className="text-3xl mb-1">{c.icon}</div>
                  <div className="font-bold text-sm">{c.title}</div>
                  <div className="text-base-content/40 text-xs mt-0.5">{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ── STEP 2: CHECKLIST ── */
          <div>
            {/* Result Header Card */}
            <div className="card bg-base-100 shadow-xl border border-base-300 mb-4">
              <div className="card-body">
                {/* Trip info row */}
                <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <img src={fromCountry.flag} width={28} height={20} className="object-contain rounded shadow-sm" alt="" />
                      <span className="text-base-content/30 font-bold">→</span>
                      <img src={toCountry.flag} width={28} height={20} className="object-contain rounded shadow-sm" alt="" />
                      <div className="badge badge-success badge-outline font-bold gap-1">
                        {visaTypes.find((v) => v.id === visaType)?.icon}
                        {visaTypes.find((v) => v.id === visaType)?.label}
                      </div>
                    </div>
                    <p className="font-black text-base">{fromCountry.country} → {toCountry.country}</p>
                    <p className="text-base-content/40 text-sm">{checklist.length} documents required</p>
                  </div>
                  <button
                    onClick={() => { setStep(1); setChecked({}); setCustomItems([]); setEditedItems({}); }}
                    className="btn btn-ghost btn-sm gap-2"
                  >
                    ← New Search
                  </button>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-base-content/50">Progress</span>
                    <span className="font-black text-primary text-sm">{checkedCount}/{checklist.length} — {progress}%</span>
                  </div>
                  <progress className="progress progress-primary w-full h-2.5" value={progress} max={100}></progress>
                </div>

                {progress === 100 && (
                  <div className="alert alert-success mb-4">
                    <span>🎉 All documents collected! You're ready to apply.</span>
                  </div>
                )}

                {/* Download Buttons */}
                <div className="flex gap-3 flex-wrap">
                  <button onClick={downloadPDF} className="btn btn-primary flex-1 gap-2 min-w-36">
                    📄 Download PDF
                  </button>
                  <button onClick={downloadTXT} className="btn btn-success flex-1 gap-2 min-w-36">
                    ⬇️ Download TXT
                  </button>
                </div>
              </div>
            </div>

            {/* Checklist by Category */}
            {Object.entries(grouped).map(([cat, items]) => {
              const dot = categoryDotColors[cat] || "#6b7280";
              const catChecked = items.filter((i) => checked[i.id]).length;
              return (
                <div key={cat} className="card bg-base-100 shadow-sm border border-base-200 mb-3 overflow-hidden">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 px-5 py-3 bg-base-50 border-b border-base-200">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: dot }} />
                    <span className="font-black text-xs uppercase tracking-widest text-base-content/60 flex-1">{cat}</span>
                    <span className="text-xs text-base-content/40 font-semibold">{catChecked}/{items.length}</span>
                  </div>

                  {/* Items */}
                  {items.map((item, idx) => (
                    <div
                      key={item.id}
                      className={`flex items-center gap-3 px-5 py-3.5 cursor-pointer transition-colors group
                        ${idx < items.length - 1 ? "border-b border-base-100" : ""}
                        ${checked[item.id] ? "bg-success/5 hover:bg-success/10" : "hover:bg-base-50"}`}
                      onClick={() => setChecked((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                    >
                      {/* Checkbox */}
                      <div
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all
                          ${checked[item.id] ? "bg-success border-success" : "border-base-300 bg-base-100"}`}
                      >
                        {checked[item.id] && (
                          <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                            <path d="M1 4.5L4 7.5L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>

                      {/* Text */}
                      <span className={`flex-1 text-sm font-medium transition-all ${checked[item.id] ? "line-through text-base-content/30" : "text-base-content"}`}>
                        {item.text}
                      </span>

                      {/* Badges & Actions */}
                      <div className="flex items-center gap-2 ml-2">
                        {item.required && (
                          <span className="badge badge-error badge-xs font-bold">Required</span>
                        )}
                        {/* Edit button — visible on hover */}
                        <button
                          onClick={(e) => { e.stopPropagation(); setEditingItem(item); }}
                          className="btn btn-ghost btn-xs opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Edit item"
                        >
                          ✏️
                        </button>
                        {/* Remove button for custom items */}
                        {item.custom && (
                          <button
                            onClick={(e) => { e.stopPropagation(); removeItem(item.id); }}
                            className="btn btn-ghost btn-xs text-error opacity-0 group-hover:opacity-100 transition-opacity"
                            title="Remove item"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}

            {/* Add Custom Item */}
            <div className={`card border-2 border-dashed mb-4 transition-colors ${addingItem ? "border-primary bg-primary/5" : "border-base-300 bg-base-100"}`}>
              <div className="card-body py-4">
                {!addingItem ? (
                  <button
                    onClick={() => setAddingItem(true)}
                    className="btn btn-ghost w-full gap-2 text-primary font-bold"
                  >
                    <span className="text-lg">＋</span> Add Custom Document
                  </button>
                ) : (
                  <div>
                    <p className="font-black text-sm mb-3">Add Custom Document</p>
                    <input
                      autoFocus
                      value={newItemText}
                      onChange={(e) => setNewItemText(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addCustomItem()}
                      placeholder="Document name (e.g. NOC from employer)"
                      className="input input-bordered w-full mb-3 text-sm"
                    />
                    <div className="flex gap-3 mb-3">
                      <select
                        value={newItemCategory}
                        onChange={(e) => setNewItemCategory(e.target.value)}
                        className="select select-bordered flex-1 text-sm"
                      >
                        {Object.keys(categoryColors).map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                      <label className="label cursor-pointer gap-2 flex-shrink-0">
                        <span className="label-text text-sm font-semibold">Required</span>
                        <input
                          type="checkbox"
                          checked={newItemRequired}
                          onChange={(e) => setNewItemRequired(e.target.checked)}
                          className="toggle toggle-primary toggle-sm"
                        />
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={addCustomItem} className="btn btn-primary flex-1">Add Item</button>
                      <button onClick={() => { setAddingItem(false); setNewItemText(""); setNewItemRequired(false); }} className="btn btn-ghost">Cancel</button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="card text-primary-content mb-4" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0d4f3c 100%)" }}>
              <div className="card-body text-center py-7">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="font-black text-xl text-white mb-2">
                  Need help with your {visaTypes.find((v) => v.id === visaType)?.label}?
                </h3>
                <p className="text-white/60 text-sm mb-5">
                  Eammu experts guide you through the entire process — from documents to approval
                </p>
                <button className="btn btn-sm bg-white text-primary hover:bg-white/90 font-black border-0 px-8">
                  Get Free Consultation →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
