"use client";
import { useState } from "react";
import countries from "@/app/data/countries";

// ============================================================
// DOCUMENT TEMPLATES — Build the actual document text from form data
// Coder: edit the template strings below to customize documents
// ============================================================
const DOCUMENT_TEMPLATES = {
  sop: {
    label: "Statement of Purpose (SOP)",
    icon: "🎓",
    description: "For university admissions abroad",
    color: "emerald",
    fields: ["full_name", "passport", "nationality", "destination", "university", "course", "education", "work_experience", "why_country", "why_course", "career_goal", "financial", "notes"],
    build: (d) => `To Whomsoever It May Concern,

I, ${d.full_name}, holder of Passport No. ${d.passport}, a citizen of ${d.nationality}, am writing this Statement of Purpose in support of my application for a student visa to ${d.destination}. I wish to pursue ${d.course} at ${d.university}, and I believe this opportunity will be a defining milestone in my academic and professional journey.

${d.education}. This academic foundation has equipped me with a strong theoretical and practical understanding of my chosen field. ${d.work_experience ? `In addition to my academic background, I have gained practical experience: ${d.work_experience}.` : ""} These experiences have sharpened my analytical skills and deepened my commitment to advancing further in this discipline.

My decision to pursue this course in ${d.destination} is driven by several compelling reasons. ${d.why_country}. The academic environment, research opportunities, and multicultural exposure that ${d.destination} offers are unparalleled, and I am confident that studying there will broaden both my intellectual and personal horizons. Specifically regarding my chosen program: ${d.why_course}.

Upon successful completion of my studies, I intend to return to ${d.nationality} and apply the knowledge and skills I have acquired. ${d.career_goal}. I am firmly committed to contributing to the development of my home country and have strong ties — family, professional, and social — that will ensure my return.

With respect to my financial arrangements, ${d.financial}. I am confident that all academic and living expenses will be met without any difficulty throughout the duration of my studies.

${d.notes ? `Additional Information: ${d.notes}` : ""}

I sincerely request the concerned authorities to grant me a student visa and look forward to a positive response. I assure you that I will abide by all visa conditions and regulations during my stay in ${d.destination}.

Yours faithfully,

${d.full_name}
Passport No.: ${d.passport}
Date: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`,
  },

  cover_letter: {
    label: "Cover Letter",
    icon: "📝",
    description: "For visa applications & embassy",
    color: "blue",
    fields: ["full_name", "passport", "nationality", "destination", "purpose", "occupation", "employer", "education", "financial", "travel_history", "notes"],
    build: (d) => `Date: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}

The Visa Officer
Embassy / Consulate of ${d.destination}

Subject: Application for ${d.destination} Visa — ${d.purpose}

Respected Sir/Madam,

I, ${d.full_name}, a citizen of ${d.nationality} holding Passport No. ${d.passport}, respectfully submit this cover letter in support of my visa application to ${d.destination}. The purpose of my visit is ${d.purpose}.

I am currently employed as ${d.occupation} at ${d.employer}. My educational background: ${d.education}. I am a responsible individual with strong ties to my home country, and I intend to return upon completion of my visit. ${d.travel_history ? `My travel history includes: ${d.travel_history}.` : "This will be my first international travel."}

Regarding my financial capability, ${d.financial}. I am fully prepared to meet all travel-related expenses including accommodation, transportation, and daily living costs during my stay in ${d.destination}.

${d.notes ? `Additional details: ${d.notes}` : ""}

I sincerely request you to consider my application favorably. I assure you that I will comply with all visa terms and conditions and will return to ${d.nationality} before the expiry of my visa.

Yours sincerely,

${d.full_name}
Passport No.: ${d.passport}
Nationality: ${d.nationality}`,
  },

  noc: {
    label: "No Objection Certificate (NOC)",
    icon: "🏢",
    description: "From employer or institution",
    color: "violet",
    fields: ["full_name", "passport", "nationality", "destination", "purpose", "occupation", "employer", "employer_address", "travel_dates", "issuer_name", "issuer_designation", "notes"],
    build: (d) => `NO OBJECTION CERTIFICATE

Date: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
Ref No.: NOC-${Date.now().toString().slice(-6)}

${d.employer}
${d.employer_address}

TO WHOMSOEVER IT MAY CONCERN

This is to certify that Mr./Ms. ${d.full_name}, holding Passport No. ${d.passport}, is a bonafide employee of ${d.employer}, currently serving as ${d.occupation}. The employee has been associated with our organization in good standing.

We have no objection to ${d.full_name} traveling to ${d.destination} for the purpose of ${d.purpose} during the period of ${d.travel_dates}. The employee has been duly granted leave for this purpose.

We confirm that ${d.full_name} will resume duties upon return from the trip and that all their employment responsibilities will be appropriately managed during their absence.

${d.notes ? `Additional Note: ${d.notes}` : ""}

This certificate is issued on the request of the employee for visa purposes only.

Issued by:

${d.issuer_name}
${d.issuer_designation}
${d.employer}
Date: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}

[Company Seal]`,
  },

  salary_certificate: {
    label: "Salary Certificate",
    icon: "💰",
    description: "Proof of income for visa",
    color: "amber",
    fields: ["full_name", "passport", "nationality", "destination", "occupation", "employer", "employer_address", "monthly_salary", "joining_date", "issuer_name", "issuer_designation", "notes"],
    build: (d) => `SALARY CERTIFICATE

Date: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
Ref No.: SAL-${Date.now().toString().slice(-6)}

${d.employer}
${d.employer_address}

TO WHOMSOEVER IT MAY CONCERN

This is to certify that Mr./Ms. ${d.full_name}, holding Passport No. ${d.passport}, Nationality: ${d.nationality}, is employed with ${d.employer} as ${d.occupation} since ${d.joining_date}.

The employee's salary details are as follows:

  Monthly Gross Salary : ${d.monthly_salary}
  Net Take-Home Salary : ${d.monthly_salary} (after applicable deductions)
  Nature of Employment : Permanent / Regular

The employee is in active service and their conduct and performance have been satisfactory throughout their tenure with us.

This certificate is issued for visa application purposes for travel to ${d.destination} and should not be used for any other purpose.

${d.notes ? `Note: ${d.notes}` : ""}

Certified by:

${d.issuer_name}
${d.issuer_designation}
${d.employer}
Date: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}

[Company Seal / Stamp]`,
  },

  power_of_attorney: {
    label: "Power of Attorney",
    icon: "⚖️",
    description: "Legal authority document",
    color: "red",
    fields: ["full_name", "passport", "nationality", "grantor_address", "attorney_name", "attorney_passport", "attorney_relation", "attorney_address", "purpose", "scope", "duration", "notes"],
    build: (d) => `POWER OF ATTORNEY

Date: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}

KNOW ALL MEN BY THESE PRESENTS that I, ${d.full_name}, Passport No. ${d.passport}, Nationality: ${d.nationality}, residing at ${d.grantor_address} (hereinafter referred to as the "Principal"), do hereby appoint and constitute:

${d.attorney_name}
Passport / NID: ${d.attorney_passport}
Relation: ${d.attorney_relation}
Address: ${d.attorney_address}

as my true and lawful Attorney-in-Fact (hereinafter referred to as the "Attorney") to act in my name, place, and stead for the following purposes:

PURPOSE:
${d.purpose}

SCOPE OF AUTHORITY:
${d.scope}

DURATION:
This Power of Attorney shall remain valid for ${d.duration} from the date of execution, unless revoked earlier by the Principal in writing.

${d.notes ? `ADDITIONAL TERMS:\n${d.notes}` : ""}

I hereby ratify and confirm all acts lawfully done by my Attorney in pursuance of this authority.

IN WITNESS WHEREOF, I have set my hand on the date first written above.

PRINCIPAL (Grantor):                    ATTORNEY (Agent):
Name: ${d.full_name}                    Name: ${d.attorney_name}
Signature: ___________________          Signature: ___________________
Date: _______________________          Date: _______________________

WITNESS 1:                              WITNESS 2:
Name: ___________________               Name: ___________________
Signature: ___________________          Signature: ___________________

[Notary Seal / Attestation]`,
  },

  sponsor_letter: {
    label: "Sponsor Letter",
    icon: "🤝",
    description: "Financial sponsor declaration",
    color: "teal",
    fields: ["full_name", "passport", "nationality", "destination", "purpose", "sponsor_name", "sponsor_passport", "sponsor_relation", "sponsor_occupation", "sponsor_income", "sponsor_address", "travel_dates", "notes"],
    build: (d) => `Date: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}

The Visa Officer
Embassy / Consulate of ${d.destination}

Subject: Sponsorship Declaration for ${d.full_name} — Visa Application

Respected Sir/Madam,

I, ${d.sponsor_name}, holding Passport / NID No. ${d.sponsor_passport}, residing at ${d.sponsor_address}, am writing this letter to formally declare my financial sponsorship for ${d.full_name} (Passport No.: ${d.passport}), who is my ${d.sponsor_relation}, in relation to their visa application for ${d.destination}.

I am currently employed as ${d.sponsor_occupation}, with a monthly/annual income of ${d.sponsor_income}. I am fully capable of bearing all expenses related to ${d.full_name}'s travel, including air tickets, accommodation, daily living expenses, and any other costs incurred during the visit to ${d.destination} from ${d.travel_dates}.

I will also be providing accommodation arrangements for ${d.full_name} during their stay. I take full financial and moral responsibility for ensuring that ${d.full_name} complies with all visa conditions and returns to ${d.nationality} before the visa expiry date.

${d.notes ? `Additional Information: ${d.notes}` : ""}

I kindly request the embassy authorities to grant the visa and assure you of our sincerity and commitment.

Yours faithfully,

${d.sponsor_name}
Relation: ${d.sponsor_relation} of ${d.full_name}
Passport / NID: ${d.sponsor_passport}
Address: ${d.sponsor_address}
Date: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`,
  },
};

// ============================================================
// FIELD DEFINITIONS
// ============================================================
const FIELD_META = {
  full_name:          { label: "Full Name",                placeholder: "e.g. Mohammad Rahman",                     type: "text",     optional: false },
  passport:           { label: "Passport Number",          placeholder: "e.g. AA1234567",                           type: "text",     optional: false },
  nationality:        { label: "Nationality",              placeholder: "e.g. Bangladeshi",                         type: "text",     optional: false },
  destination:        { label: "Destination Country",      placeholder: "Select country",                           type: "country",  optional: false },
  purpose:            { label: "Purpose of Visit",         placeholder: "e.g. Tourism, Business, Education",        type: "text",     optional: false },
  university:         { label: "University Name",          placeholder: "e.g. University of Toronto",               type: "text",     optional: false },
  course:             { label: "Course / Program",         placeholder: "e.g. MSc Computer Science",                type: "text",     optional: false },
  education:          { label: "Academic Background",      placeholder: "e.g. BSc in CSE from BUET, GPA 3.8",       type: "textarea", optional: false },
  work_experience:    { label: "Work Experience",          placeholder: "e.g. 2 years as Software Engineer at XYZ", type: "textarea", optional: true  },
  why_country:        { label: "Why This Country?",        placeholder: "e.g. World-class universities, research",  type: "textarea", optional: false },
  why_course:         { label: "Why This Course?",         placeholder: "e.g. Aligns with my career goals in AI",   type: "textarea", optional: false },
  career_goal:        { label: "Career Goal After Study",  placeholder: "e.g. Return to BD, contribute to tech",    type: "textarea", optional: false },
  financial:          { label: "Financial Support",        placeholder: "e.g. Father sponsoring, BDT 15 lakh",      type: "text",     optional: false },
  travel_history:     { label: "Travel History",           placeholder: "e.g. India 2022, Malaysia 2023",           type: "text",     optional: true  },
  notes:              { label: "Additional Notes",         placeholder: "Any extra information to include",         type: "textarea", optional: true  },
  occupation:         { label: "Occupation / Designation", placeholder: "e.g. Software Engineer",                   type: "text",     optional: false },
  employer:           { label: "Employer / Company Name",  placeholder: "e.g. ABC Technologies Ltd",                type: "text",     optional: false },
  employer_address:   { label: "Employer Address",         placeholder: "e.g. House 12, Road 3, Gulshan, Dhaka",    type: "textarea", optional: false },
  travel_dates:       { label: "Travel Dates",             placeholder: "e.g. 01 June 2025 to 15 June 2025",        type: "text",     optional: false },
  issuer_name:        { label: "Issued By (Name)",         placeholder: "e.g. Mr. Kamal Hossain",                  type: "text",     optional: false },
  issuer_designation: { label: "Issuer Designation",       placeholder: "e.g. HR Manager / Director",              type: "text",     optional: false },
  monthly_salary:     { label: "Monthly Salary",           placeholder: "e.g. BDT 85,000",                         type: "text",     optional: false },
  joining_date:       { label: "Date of Joining",          placeholder: "e.g. 01 January 2022",                    type: "text",     optional: false },
  grantor_address:    { label: "Your (Grantor) Address",   placeholder: "Full residential address",                 type: "textarea", optional: false },
  attorney_name:      { label: "Attorney Full Name",       placeholder: "Person receiving authority",               type: "text",     optional: false },
  attorney_passport:  { label: "Attorney Passport / NID",  placeholder: "e.g. NID 1234567890",                     type: "text",     optional: false },
  attorney_relation:  { label: "Relation to You",          placeholder: "e.g. Father, Brother, Lawyer",            type: "text",     optional: false },
  attorney_address:   { label: "Attorney Address",         placeholder: "Full address of attorney",                 type: "textarea", optional: false },
  scope:              { label: "Scope of Authority",       placeholder: "e.g. Handle property, sign documents",    type: "textarea", optional: false },
  duration:           { label: "Validity / Duration",      placeholder: "e.g. 6 months from signing date",         type: "text",     optional: false },
  sponsor_name:       { label: "Sponsor Full Name",        placeholder: "e.g. Mr. Abdul Karim",                    type: "text",     optional: false },
  sponsor_passport:   { label: "Sponsor Passport / NID",   placeholder: "e.g. NID 9876543210",                     type: "text",     optional: false },
  sponsor_relation:   { label: "Sponsor Relation",         placeholder: "e.g. Father, Uncle, Employer",            type: "text",     optional: false },
  sponsor_occupation: { label: "Sponsor Occupation",       placeholder: "e.g. Business Owner",                     type: "text",     optional: false },
  sponsor_income:     { label: "Sponsor Income",           placeholder: "e.g. Monthly BDT 1,50,000",               type: "text",     optional: false },
  sponsor_address:    { label: "Sponsor Address",          placeholder: "Full address of sponsor",                  type: "textarea", optional: false },
};

// ============================================================
// PDF GENERATOR — No API needed, pure browser print
// ============================================================
function generatePDF(docText, docLabel, formData) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>${docLabel} - Eammu.com</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@600;700&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Libre Baskerville', 'Times New Roman', serif; background: #fff; color: #1a1a1a; padding: 0; }
  .page { max-width: 794px; margin: 0 auto; padding: 60px 70px; min-height: 1123px; position: relative; }
  /* Header */
  .letterhead { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 20px; border-bottom: 3px solid #15803d; margin-bottom: 32px; }
  .brand-name { font-family: 'Montserrat', sans-serif; font-size: 22pt; font-weight: 700; color: #14532d; letter-spacing: -0.5px; }
  .brand-tagline { font-size: 8.5pt; color: #6b7280; margin-top: 3px; }
  .doc-meta { text-align: right; font-size: 9pt; color: #6b7280; line-height: 1.6; }
  .doc-meta strong { color: #374151; }
  /* Watermark */
  .watermark { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-35deg); font-size: 80pt; color: rgba(21,128,61,0.04); font-family: 'Montserrat', sans-serif; font-weight: 700; white-space: nowrap; pointer-events: none; z-index: 0; }
  /* Title */
  .doc-title-block { text-align: center; margin-bottom: 32px; }
  .doc-title { font-family: 'Montserrat', sans-serif; font-size: 13pt; font-weight: 700; color: #14532d; letter-spacing: 2px; text-transform: uppercase; display: inline-block; border-bottom: 2px solid #16a34a; padding-bottom: 6px; }
  /* Body */
  .doc-body { font-size: 11.5pt; line-height: 1.95; color: #1f2937; white-space: pre-wrap; word-wrap: break-word; text-align: justify; position: relative; z-index: 1; }
  /* Footer */
  .footer { margin-top: 48px; padding-top: 16px; border-top: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center; }
  .footer-left { font-size: 8.5pt; color: #9ca3af; }
  .footer-right { font-size: 8.5pt; color: #9ca3af; text-align: right; }
  .footer-brand { font-family: 'Montserrat', sans-serif; font-weight: 700; color: #15803d; }
  /* Info chips */
  .info-bar { display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 28px; padding: 12px 16px; background: #f0fdf4; border-radius: 8px; border-left: 4px solid #16a34a; }
  .info-chip { font-size: 9pt; color: #374151; }
  .info-chip strong { color: #14532d; }
  @media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .page { padding: 40px 50px; }
    @page { margin: 0; size: A4; }
  }
</style>
</head>
<body>
<div class="watermark">EAMMU</div>
<div class="page">
  <div class="letterhead">
    <div>
      <div class="brand-name">Eammu.com</div>
      <div class="brand-tagline">Trusted Visa, Travel &amp; Immigration Experts<br/>Bangladesh • Dubai • Armenia • Georgia</div>
    </div>
    <div class="doc-meta">
      <strong>Date:</strong> ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}<br/>
      <strong>Ref:</strong> EAMMU-${Date.now().toString().slice(-6)}<br/>
      <strong>Generated:</strong> eammu.com
    </div>
  </div>

  <div class="doc-title-block">
    <div class="doc-title">${docLabel}</div>
  </div>

  <div class="info-bar">
    ${formData.full_name ? `<div class="info-chip"><strong>Applicant:</strong> ${formData.full_name}</div>` : ""}
    ${formData.passport ? `<div class="info-chip"><strong>Passport:</strong> ${formData.passport}</div>` : ""}
    ${formData.nationality ? `<div class="info-chip"><strong>Nationality:</strong> ${formData.nationality}</div>` : ""}
    ${formData.destination ? `<div class="info-chip"><strong>Destination:</strong> ${formData.destination}</div>` : ""}
  </div>

  <div class="doc-body">${docText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>")}</div>

  <div class="footer">
    <div class="footer-left">This document was generated via <span class="footer-brand">eammu.com</span><br/>For expert assistance, contact us at info@eammu.com</div>
    <div class="footer-right">Page 1 of 1<br/>© ${new Date().getFullYear()} Eammu.com</div>
  </div>
</div>
<script>window.onload = function(){ window.print(); }</script>
</body>
</html>`;
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url  = URL.createObjectURL(blob);
  window.open(url, "_blank");
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function DocumentGenerator() {
  const [selectedDoc,   setSelectedDoc]   = useState(null);
  const [formData,      setFormData]      = useState({});
  const [generatedDoc,  setGeneratedDoc]  = useState("");
  const [editedDoc,     setEditedDoc]     = useState("");
  const [isEditing,     setIsEditing]     = useState(false);
  const [error,         setError]         = useState("");
  const [step,          setStep]          = useState(1);
  const [countrySearch, setCountrySearch] = useState("");
  const [countryOpen,   setCountryOpen]   = useState(false);
  const [copied,        setCopied]        = useState(false);

  const template = selectedDoc ? DOCUMENT_TEMPLATES[selectedDoc] : null;
  const filteredCountries = countries.filter(c =>
    c.country.toLowerCase().includes(countrySearch.toLowerCase())
  );
  const displayDoc = editedDoc || generatedDoc;
  const inputCls = "w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all";

  // ── Generate Document (no API) ──
  const handleGenerate = () => {
    if (!template) return;
    const missing = template.fields.filter(f => {
      const meta = FIELD_META[f];
      if (!meta || meta.optional) return false;
      return !formData[f]?.trim();
    });
    if (missing.length > 0) {
      setError(`Please fill in: ${missing.map(f => FIELD_META[f]?.label).join(", ")}`);
      return;
    }
    setError("");
    const doc = template.build(formData);
    setGeneratedDoc(doc);
    setEditedDoc(doc);
    setIsEditing(false);
    setStep(3);
  };

  // ── Download PDF ──
  const handleDownloadPDF = () => {
    generatePDF(displayDoc, template?.label, formData);
  };

  // ── Download TXT ──
  const handleDownloadTxt = () => {
    const content = `${template?.label?.toUpperCase()}\n${"=".repeat(60)}\nGenerated by Eammu.com | ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}\n${"=".repeat(60)}\n\n${displayDoc}\n\n${"=".repeat(60)}\neammu.com — Trusted Visa, Travel & Immigration Experts`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = `eammu-${selectedDoc}-${(formData.full_name || "document").replace(/\s+/g, "-").toLowerCase()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ── Copy ──
  const handleCopy = async () => {
    await navigator.clipboard.writeText(displayDoc);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ── Reset ──
  const resetAll = () => {
    setStep(1); setSelectedDoc(null); setFormData({});
    setGeneratedDoc(""); setEditedDoc(""); setIsEditing(false); setError("");
  };

  return (
    <div className="min-h-screen py-22 px-4">
      <div className="max-w-3xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-green-100 border border-green-300 text-green-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            📄 Free Tool · Eammu.com
          </span>
          <h1 className="text-4xl font-extrabold text-green-900 mb-2">
            Document <span className="text-green-600">Generator</span>
          </h1>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Fill in your details and download a professional, embassy-ready document instantly
          </p>
        </div>

        {/* ── Step Bar ── */}
        <div className="flex items-center justify-center mb-8">
          {[{ n: 1, label: "Select Type" }, { n: 2, label: "Fill Details" }, { n: 3, label: "Your Document" }].map((s, i) => (
            <div key={s.n} className="flex items-center">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all
                  ${step > s.n ? "bg-green-700 border-green-700 text-white"
                  : step === s.n ? "bg-green-50 border-green-600 text-green-700"
                  : "bg-white border-gray-300 text-gray-400"}`}>
                  {step > s.n ? "✓" : s.n}
                </div>
                <span className={`text-sm font-semibold hidden sm:inline ${step >= s.n ? "text-green-700" : "text-gray-400"}`}>
                  {s.label}
                </span>
              </div>
              {i < 2 && <div className="w-8 sm:w-12 h-0.5 bg-gray-200 mx-2" />}
            </div>
          ))}
        </div>

        {/* ══ STEP 1 — Select Document ══ */}
        {step === 1 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-extrabold text-green-900 mb-1">Choose Document Type</h2>
            <p className="text-sm text-gray-500 mb-5">Select the document you need to generate</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {Object.entries(DOCUMENT_TEMPLATES).map(([key, tpl]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => { setSelectedDoc(key); setFormData({}); setStep(2); setError(""); }}
                  className="text-left p-4 rounded-xl border-2 border-gray-200 bg-white hover:border-green-500 hover:bg-green-50 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                >
                  <div className="text-3xl mb-2">{tpl.icon}</div>
                  <div className="text-sm font-bold text-green-900 mb-1">{tpl.label}</div>
                  <div className="text-xs text-gray-500">{tpl.description}</div>
                </button>
              ))}
            </div>
            {/* Info strip */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icon: "⚡", t: "Instant", s: "No waiting, no API" },
                { icon: "📄", t: "PDF Ready", s: "Print quality output" },
                { icon: "🔒", t: "Private", s: "Data stays on your device" },
              ].map((c, i) => (
                <div key={i} className="text-center p-3 bg-green-50 rounded-xl border border-green-100">
                  <div className="text-xl mb-1">{c.icon}</div>
                  <div className="text-xs font-bold text-green-800">{c.t}</div>
                  <div className="text-xs text-gray-500">{c.s}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ STEP 2 — Fill Form ══ */}
        {step === 2 && template && (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{template.icon}</span>
                <div>
                  <div className="text-lg font-extrabold text-green-900">{template.label}</div>
                  <div className="text-xs text-gray-500">{template.description}</div>
                </div>
              </div>
              <button type="button" onClick={() => setStep(1)}
                className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all">
                ← Change
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
              {template.fields.map(field => {
                const meta = FIELD_META[field];
                if (!meta) return null;
                const isWide = meta.type === "textarea" || meta.type === "country";
                return (
                  <div key={field} className={isWide ? "sm:col-span-2" : ""}>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      {meta.label}
                      {meta.optional
                        ? <span className="ml-1 text-gray-400 normal-case font-normal">(optional)</span>
                        : <span className="ml-1 text-red-400">*</span>}
                    </label>

                    {/* Country Dropdown */}
                    {meta.type === "country" && (
                      <div className="relative">
                        <button type="button" onClick={() => setCountryOpen(o => !o)}
                          className={`${inputCls} flex items-center gap-2 cursor-pointer`}>
                          {formData.destination ? (
                            <>
                              <img src={countries.find(c => c.country === formData.destination)?.flag}
                                width={22} height={15} className="object-contain flex-shrink-0" alt="" />
                              <span className="text-gray-900 font-medium">{formData.destination}</span>
                            </>
                          ) : <span className="text-gray-400">{meta.placeholder}</span>}
                          <span className="ml-auto text-gray-400 text-xs">▼</span>
                        </button>
                        {countryOpen && (
                          <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
                            <input autoFocus value={countrySearch}
                              onChange={e => setCountrySearch(e.target.value)}
                              placeholder="Search country..."
                              className="w-full px-4 py-2.5 text-sm border-b border-gray-100 outline-none" />
                            <div className="max-h-52 overflow-y-auto">
                              {filteredCountries.map(c => (
                                <button key={c.code} type="button"
                                  onClick={() => { setFormData(p => ({ ...p, destination: c.country })); setCountryOpen(false); setCountrySearch(""); }}
                                  className={`w-full flex items-center gap-2.5 px-4 py-2 text-sm text-left hover:bg-green-50 transition-colors
                                    ${formData.destination === c.country ? "bg-green-50 text-green-800 font-semibold" : "text-gray-700"}`}>
                                  <img src={c.flag} width={22} height={15} className="object-contain flex-shrink-0" alt={c.country} />
                                  {c.country}
                                  {formData.destination === c.country && <span className="ml-auto text-green-600 font-bold text-xs">✓</span>}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {meta.type === "textarea" && (
                      <textarea placeholder={meta.placeholder} value={formData[field] || ""}
                        onChange={e => setFormData(p => ({ ...p, [field]: e.target.value }))}
                        rows={3} className={`${inputCls} resize-y`} />
                    )}

                    {meta.type === "text" && (
                      <input type="text" placeholder={meta.placeholder} value={formData[field] || ""}
                        onChange={e => setFormData(p => ({ ...p, [field]: e.target.value }))}
                        className={inputCls} />
                    )}
                  </div>
                );
              })}
            </div>

            {error && (
              <div className="mt-4 flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
                <span>⚠️</span><span>{error}</span>
              </div>
            )}

            <button type="button" onClick={handleGenerate}
              className="mt-5 w-full py-3.5 bg-green-700 hover:bg-green-800 active:scale-[0.99] text-white font-bold text-base rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2">
              📄 Generate Document
            </button>
            <p className="text-center text-xs text-gray-400 mt-2">No API required • Instant • Free</p>
          </div>
        )}

        {/* ══ STEP 3 — Result ══ */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

              {/* Result Header */}
              <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{template?.icon}</span>
                  <div>
                    <div className="text-lg font-extrabold text-green-900">{template?.label}</div>
                    <div className="text-xs text-gray-500">
                      {[formData.full_name, formData.destination].filter(Boolean).join(" · ")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-lg">
                    ✅ Ready
                  </span>
                  <button type="button" onClick={resetAll}
                    className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all">
                    + New
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button type="button" onClick={handleDownloadPDF}
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-green-700 hover:bg-green-800 text-white font-bold text-sm rounded-xl transition-all hover:shadow-md">
                  📄 Download PDF
                </button>
                <button type="button" onClick={() => { setIsEditing(e => !e); }}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-sm rounded-xl transition-all">
                  {isEditing ? "👁️ Preview" : "✏️ Edit"}
                </button>
                <button type="button" onClick={handleDownloadTxt}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-white border border-gray-300 hover:border-green-600 hover:text-green-700 text-gray-700 font-semibold text-sm rounded-xl transition-all">
                  ⬇️ TXT
                </button>
                <button type="button" onClick={handleCopy}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-white border border-gray-300 hover:border-green-600 hover:text-green-700 text-gray-700 font-semibold text-sm rounded-xl transition-all">
                  {copied ? "✅ Copied!" : "📋 Copy"}
                </button>
                <button type="button" onClick={() => setStep(2)}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-white border border-gray-300 hover:border-green-600 hover:text-green-700 text-gray-700 font-semibold text-sm rounded-xl transition-all sm:ml-auto">
                  🔄 Edit Info
                </button>
              </div>

              {isEditing && (
                <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2.5 mb-3 text-sm text-yellow-800 font-medium">
                  ✏️ Edit mode — your changes will appear in the PDF
                </div>
              )}

              {/* Document Preview */}
              {isEditing ? (
                <textarea value={editedDoc} onChange={e => setEditedDoc(e.target.value)}
                  className="w-full min-h-96 px-6 py-5 bg-gray-50 border-2 border-green-400 focus:border-green-600 focus:ring-2 focus:ring-green-100 rounded-xl text-sm text-gray-900 outline-none resize-y transition-all"
                  style={{ fontFamily: "'Times New Roman', Georgia, serif", lineHeight: "1.9" }} />
              ) : (
                <div className="w-full min-h-64 px-6 py-5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 whitespace-pre-wrap break-words"
                  style={{ fontFamily: "'Times New Roman', Georgia, serif", lineHeight: "1.9" }}>
                  {displayDoc}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                <button type="button" onClick={() => setStep(2)}
                  className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all">
                  ← Edit Info
                </button>
                <button type="button" onClick={resetAll}
                  className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all">
                  + New Document
                </button>
                <button type="button" onClick={handleDownloadPDF}
                  className="ml-auto px-5 py-2 text-sm font-bold text-white bg-green-700 hover:bg-green-800 rounded-xl transition-all hover:shadow-md">
                  📄 Download PDF →
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-green-900 to-green-700 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-white font-extrabold text-lg mb-1">Need expert review of your document?</div>
              <div className="text-green-200 text-sm mb-5">Eammu consultants will review, certify & submit your documents</div>
              <a href="/contact"
                className="inline-block px-7 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-extrabold text-sm rounded-xl transition-all hover:shadow-lg">
                Get Expert Review →
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
