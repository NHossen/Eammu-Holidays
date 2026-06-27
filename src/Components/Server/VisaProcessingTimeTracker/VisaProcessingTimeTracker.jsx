// /Components/Server/VisaProcessingTimeTracker/VisaProcessingTimeTracker.jsx
// ✅ OPTIMIZED SERVER COMPONENT
// পরিবর্তন:
//  1. params/searchParams prop নেই — শুধু { slug } prop
//  2. VISA_RULES duplicate সরানো হয়েছে (page.jsx থেকে আলাদা ছিল)
//  3. VisaTypeSwitcher-এ baseSlug পাঠানো হচ্ছে (slug নয়) — type prefix ছাড়া
//  4. Related links এখন slug-based: "...for-canada-e-visa" (query param নয়)
//  5. relatedPages links-এ ?type= → -type suffix

import Link from "next/link";
import {
  Clock, AlertCircle, CheckCircle2, ChevronRight, ArrowLeft,
  Calendar, Timer, Zap, Info, TrendingUp, FileText,
  AlertTriangle, Globe, Phone, ExternalLink,
} from "lucide-react";
import COUNTRIES from "@/app/data/countries.json";
import { VisaTypeSwitcher } from "@/Components/Client/VisaProcessingSlugPage/VisaTypeSwitcher/VisaTypeSwitcher";
import { ReverseCalculator } from "@/Components/Client/VisaProcessingSlugPage/ReverseCalculator/ReverseCalculator";

// ── VISA TYPE KEYS (longest first) ────────────────────────────────────────
const VISA_TYPE_KEYS = ["sticker-extended", "e-visa", "sticker", "transit"];

// ── FULL VISA RULES (with all country details) ────────────────────────────
const VISA_RULES = {
  canada: {
    name: "Canada", flag: "🇨🇦",
    types: {
      "e-visa":            { min:2,  max:4,   label:"eTA (Electronic Travel Authorization)" },
      "sticker":           { min:15, max:21,  label:"Temporary Resident Visa (TRV)" },
      "sticker-extended":  { min:45, max:60,  label:"TRV (Complex / Administrative Processing)" },
      "transit":           { min:6,  max:24,  unit:"hours", label:"Canada Transit Visa" },
    },
    embassyUrl: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    embassyPhone: "+1-888-242-2100",
    embassyAddress: "Immigration, Refugees and Citizenship Canada (IRCC), Ottawa, ON",
    vfsUrl: "https://www.vfsglobal.ca/canada/",
    approvalRate: "61%",
    avgWaitWeeks: "3–4 weeks",
    peakMonths: "June – August, December",
    requiredDocuments: [
      "Valid passport (6+ months validity beyond intended stay)",
      "Completed IMM 5257 application form (online via IRCC portal)",
      "Two recent passport-size photographs (35mm × 45mm, white background)",
      "Bank statements for last 6 months showing consistent balance",
      "Employment letter with salary, leave approval, and job title",
      "Income tax returns (last 2–3 years)",
      "Proof of accommodation in Canada (hotel booking or invitation letter)",
      "Detailed travel itinerary with flight bookings",
      "Travel insurance covering the entire trip duration",
      "Biometrics (collected at VAC — must be done in person)",
      "Cover letter explaining purpose, ties to home country",
      "Previous travel history documents (old passports, prior visas)",
    ],
    successStats: {
      avgProcessingDays: 18,
      approvalRate: "61%",
      refusalRate: "39%",
      peakDelay: "+8 business days in Jun–Aug",
      fastestEver: "7 business days",
    },
    notes: [
      "Biometrics required for most nationalities — must be submitted in person at a VAC",
      "IRCC online portal may show 'Decision Made' 24–48 hrs before physical stamp arrives",
      "Summer months (Jun–Aug) and December add 5–10 business days on average",
      "Students and workers have different processing streams — may be faster or slower",
      "Transit visa (6–24 hrs) is required for Bangladeshi, Pakistani, and several other nationals at Canadian airports",
    ],
    delayReasons: [
      "Background security check (GCMS notes often silent on exact reason)",
      "Additional documents requested via procedural fairness letter",
      "High application volume from Bangladesh, India, Pakistan during peak months",
      "Missing or inconsistent financial proof / travel history gaps",
      "Biometrics not submitted — application put on hold",
    ],
    tips: [
      "Apply at least 8–10 weeks before your intended travel date",
      "Use IRCC's online portal for faster processing vs paper application",
      "Include a strong cover letter clearly explaining ties to home country",
      "Bank statements must show consistent balance for the last 6 months",
      "For transit visa, confirm your layover duration and airline before applying",
    ],
    faq: [
      {
        q: (nat) => `Can I apply for a Canada TRV from ${nat} online?`,
        a: () => `Yes. Since 2022, IRCC strongly prefers online applications via the IRCC portal. Paper applications are still accepted but take significantly longer. Biometrics must still be submitted in person at the nearest VFS Global VAC.`,
      },
      {
        q: (nat) => `What is the Canada visa processing time for ${nat} nationals in 2025?`,
        a: (nat) => `As of 2025, the standard processing time for a ${nat} applicant applying for a Canada Temporary Resident Visa (TRV) is 15–21 business days. During peak months (June–August and December), this can extend to 30+ business days due to high application volume.`,
      },
      {
        q: () => `How do I check my Canada visa application status?`,
        a: () => `Log into your IRCC Secure Account and navigate to 'Check application status'. You can also use the IRCC online tool with your application number. Status changes from 'In Progress' to 'Decision Made' are usually updated 24–48 hours before a physical document is dispatched.`,
      },
      {
        q: () => `Does a Canada TRV refusal affect future applications?`,
        a: (nat) => `A prior refusal must be declared on all future applications. However, a well-explained application with stronger evidence of ties and financial stability can overcome a previous refusal. Many ${nat} applicants successfully obtain a TRV on their second attempt.`,
      },
      {
        q: () => `Is travel insurance mandatory for a Canada visitor visa?`,
        a: () => `Travel insurance is not a strict mandatory requirement for a Canada TRV, but including it significantly strengthens your application. It demonstrates financial preparedness and reduces perceived risk to the visa officer.`,
      },
    ],
    relatedPages: [
      { label: "Canada Student Visa Processing Time",  href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada-sticker-extended" },
      { label: "USA Visitor Visa from Bangladesh",     href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-states-sticker" },
      { label: "UK Visa Processing Time",              href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom-sticker" },
      { label: "Schengen Visa from Bangladesh",        href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen-sticker" },
      { label: "Australia Visitor Visa Timeline",      href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-australia-sticker" },
    ],
  },
  "united-states": {
    name: "United States", flag: "🇺🇸",
    types: {
      "e-visa":            { min:3,  max:5,   label:"ESTA (Visa Waiver Program)" },
      "sticker":           { min:21, max:60,  label:"B1/B2 Tourist/Business Visa" },
      "sticker-extended":  { min:60, max:180, label:"Administrative Processing (221g)" },
      "transit":           { min:6,  max:24,  unit:"hours", label:"C-1 Transit Visa" },
    },
    embassyUrl: "https://travel.state.gov/content/travel/en/us-visas.html",
    embassyPhone: "+880-2-5566-2000",
    embassyAddress: "US Embassy Dhaka, Madani Avenue, Baridhara, Dhaka 1212",
    vfsUrl: "https://www.ustraveldocs.com/bd/",
    approvalRate: "58%",
    avgWaitWeeks: "4–9 weeks (including interview wait)",
    peakMonths: "April – July, November – January",
    requiredDocuments: [
      "Valid passport (must be valid for at least 6 months beyond intended stay)",
      "Completed DS-160 Online Nonimmigrant Visa Application form",
      "Interview appointment confirmation page",
      "MRV fee payment receipt (visa application fee)",
      "Photograph meeting US visa photo requirements (51mm × 51mm, white background)",
      "Bank statements (last 6 months), savings certificates, or FDR documents",
      "Income Tax Returns (IT-10B or TIN certificate for Bangladesh)",
      "Employment letter confirming position, salary, and approved leave",
      "Invitation letter from a US contact (if applicable)",
      "Property or land ownership documents (to prove ties to home country)",
      "Proof of accommodation and flight itinerary",
      "Previous US visas or travel history documents",
    ],
    successStats: {
      avgProcessingDays: 35,
      approvalRate: "58%",
      refusalRate: "42%",
      peakDelay: "+15–20 business days April–July",
      fastestEver: "Same day (after interview approval)",
    },
    notes: [
      "Interview appointment wait times vary greatly — Dhaka embassy often 60–90 days wait",
      "DS-160 form must be completed online before scheduling interview",
      "ESTA only available for 40 Visa Waiver Program countries — not Bangladesh",
      "221(g) administrative processing has no fixed timeline — can take months",
      "C-1 Transit visa needed if you change planes in a US airport without cleared status",
    ],
    delayReasons: [
      "221(g) administrative processing — unpredictable security review period",
      "High demand and long appointment backlogs at South Asian consulates",
      "Prior visa refusals increase scrutiny and processing time significantly",
      "Travel history to certain countries may trigger security review",
      "Incomplete or inconsistent documentation",
    ],
    tips: [
      "Schedule your interview the moment your travel is confirmed — slots fill fast",
      "Strong employment letter and 3–6 months pay stubs significantly help approval",
      "Bring original documents — copies alone may cause interview complications",
      "Previous US visa holders often get faster processing and easier approval",
      "For C-1 transit, apply at least 3–4 weeks before your transit date",
    ],
    faq: [
      {
        q: () => `What is the current US B1/B2 visa interview wait time in Dhaka?`,
        a: () => `As of 2025, interview appointment wait times at the US Embassy in Dhaka vary between 60–120 days during peak periods. We strongly recommend scheduling your interview as soon as you decide to travel, not after booking flights.`,
      },
      {
        q: () => `What is 221(g) administrative processing and how long does it take?`,
        a: () => `221(g) is issued when additional information or review is needed after your interview. Processing can range from a few weeks to several months. There is no fixed timeline — applicants must wait and respond promptly if additional documents are requested.`,
      },
      {
        q: (nat) => `Can a US visa refusal for a ${nat} applicant be overturned?`,
        a: () => `There is no formal appeal process for B1/B2 visa refusals. However, you can reapply at any time with stronger evidence. Addressing the specific reason for refusal (usually insufficient ties to home country or financial evidence) is critical.`,
      },
      {
        q: (nat) => `What financial documents does the US Embassy require from ${nat} applicants?`,
        a: (nat) => `The US Embassy typically expects 6 months of bank statements showing a healthy, consistent balance. For ${nat} applicants, solvency certificates, FDR receipts, land documents, and tax returns are all strong supporting evidence.`,
      },
      {
        q: () => `How long does it take to get a US visa stamp after interview approval?`,
        a: () => `After a successful interview, visa sticker processing at the embassy usually takes 3–7 business days. You will receive an SMS/email notification when your passport is ready for pickup or delivery.`,
      },
    ],
    relatedPages: [
      { label: "Canada TRV from Bangladesh",    href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada-sticker" },
      { label: "UK Visitor Visa Processing",    href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom-sticker" },
      { label: "Schengen Visa Timeline 2025",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen-sticker" },
      { label: "Australia Visa from Bangladesh",href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-australia-sticker" },
      { label: "US Transit (C-1) Visa Guide",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-states-transit" },
    ],
  },
  "united-kingdom": {
    name: "United Kingdom", flag: "🇬🇧",
    types: {
      "e-visa":            { min:3,  max:5,  label:"eVisa (UK digital visa)" },
      "sticker":           { min:15, max:21, label:"Standard Visitor Visa" },
      "sticker-extended":  { min:30, max:60, label:"Priority / Complex Case" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Direct Airside Transit Visa (DATV)" },
    },
    embassyUrl: "https://www.gov.uk/apply-uk-visa",
    embassyPhone: "+44-300-790-6268",
    embassyAddress: "UK Visas & Immigration, VFS Global, Dhaka (appointment required)",
    vfsUrl: "https://www.vfsglobal.co.uk/en/bgd/",
    approvalRate: "67%",
    avgWaitWeeks: "3–5 weeks (standard), 1 week (priority)",
    peakMonths: "May – August, December",
    requiredDocuments: [
      "Valid passport (minimum 6 months validity beyond travel dates)",
      "Completed online UK visa application (gov.uk)",
      "Biometrics collected at VFS Global Dhaka",
      "Bank statements for last 6 months (personal and/or business)",
      "Employment letter on company letterhead with salary details and leave approval",
      "Income tax documents (last 2 years) or business ownership proof",
      "Confirmed hotel bookings and return flight reservations",
      "Detailed day-by-day travel itinerary",
      "Accommodation proof (hotel or invitation letter from UK host)",
      "Travel insurance (minimum £1,000 coverage recommended)",
      "Proof of previous international travel (old passports, prior visas)",
      "Sponsor letter and financial evidence if someone in UK is funding your trip",
    ],
    successStats: {
      avgProcessingDays: 17,
      approvalRate: "67%",
      refusalRate: "33%",
      peakDelay: "+7–10 business days in summer",
      fastestEver: "5 business days (priority service)",
    },
    notes: [
      "UK switched to digital eVisa in 2024 — physical vignette stickers phased out",
      "UKVI online account required to prove permission to enter the UK",
      "Biometrics collected at Visa Application Centre (VFS Global)",
      "Priority service (extra fee) cuts standard time to 5 business days",
      "DATV required for Bangladeshi, Pakistani, Ghanaian and several other nationalities even for short UK layovers",
    ],
    delayReasons: [
      "Incomplete travel history documentation or gaps unexplained",
      "Financial evidence not meeting the required threshold",
      "Gaps in employment history require detailed explanation letters",
      "Deferred decision — Home Office may request further evidence (Section 120)",
      "Incorrect or missing biometrics submission",
    ],
    tips: [
      "Apply no more than 3 months before travel — applications opened too early may be rejected",
      "Use the priority service if your travel is within 4 weeks",
      "Include strong evidence of accommodation, detailed itinerary, and return ticket",
      "An employer letter on company letterhead with salary details is essential",
      "DATV holders must remain in the international transit zone — no entry to UK",
    ],
    faq: [
      {
        q: (nat) => `What is the UK visitor visa processing time for ${nat} nationals in 2025?`,
        a: (nat) => `Standard UK Standard Visitor Visa processing for ${nat} passport holders takes 15–21 business days in 2025. Priority service (available for an additional fee via VFS Global) reduces this to approximately 5 business days.`,
      },
      {
        q: (nat) => `Do ${nat} nationals need a transit visa for UK airports?`,
        a: (nat) => `Yes. ${nat} passport holders require a Direct Airside Transit Visa (DATV) even for short layovers at UK airports (Heathrow, Gatwick, Manchester, etc.). The DATV allows transit through the international zone without entering the UK.`,
      },
      {
        q: () => `What changed with the UK eVisa in 2024?`,
        a: () => `From 2024, the UK moved to a fully digital eVisa system. Physical vignette stickers in passports have been phased out. Approved applicants receive a digital status linked to their UKVI online account.`,
      },
      {
        q: (nat) => `How much money should ${nat} applicants show for a UK visa?`,
        a: () => `While there is no official minimum, UK visa officers typically expect sufficient funds to cover accommodation, meals, transport, and activities. As a guideline, £100–£150 per day of stay is commonly cited.`,
      },
      {
        q: () => `Can I appeal a UK visitor visa refusal?`,
        a: () => `For standard visitor visas, there is no right of appeal. However, you can request an Administrative Review (AR) within 28 days if you believe a caseworker made an error.`,
      },
    ],
    relatedPages: [
      { label: "US B1/B2 Visa from Bangladesh",  href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-states-sticker" },
      { label: "Canada TRV Processing Time",      href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada-sticker" },
      { label: "Schengen Visa 2025 Guide",        href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen-sticker" },
      { label: "UK Transit Visa (DATV)",          href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom-transit" },
      { label: "Australia Visitor Visa Timeline", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-australia-sticker" },
    ],
  },
  schengen: {
    name: "Schengen Area", flag: "🇪🇺",
    types: {
      "e-visa":            { min:5,  max:10, label:"ETIAS (From 2025)" },
      "sticker":           { min:15, max:30, label:"Schengen Short-Stay Visa (C Visa)" },
      "sticker-extended":  { min:45, max:90, label:"Complex Case / Document Request" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Airport Transit Visa (ATV)" },
    },
    embassyUrl: "https://ec.europa.eu/home-affairs/what-we-do/policies/borders-and-visas_en",
    embassyPhone: "Varies by country embassy — see individual embassy sites",
    embassyAddress: "Apply at the embassy of the Schengen country where you spend the most time",
    vfsUrl: "https://www.vfsglobal.com/",
    approvalRate: "72%",
    avgWaitWeeks: "3–6 weeks",
    peakMonths: "April – August, December",
    requiredDocuments: [
      "Valid passport (3 months validity beyond return date, issued within last 10 years)",
      "Completed Schengen visa application form (signed by applicant)",
      "Two recent biometric passport photographs (35mm × 45mm, white background)",
      "Travel insurance with minimum €30,000 coverage valid across all Schengen countries",
      "Confirmed round-trip flight bookings",
      "Hotel reservations or proof of accommodation for entire stay",
      "Detailed travel itinerary (day-by-day plan for the full trip duration)",
      "Bank statements for last 3–6 months",
      "Employment letter with salary, designation, and approved leave",
      "Income tax returns or business ownership documents",
      "Proof of ties to home country",
      "Schengen visa fee payment receipt",
    ],
    successStats: {
      avgProcessingDays: 20,
      approvalRate: "72%",
      refusalRate: "28%",
      peakDelay: "+10–14 business days in summer",
      fastestEver: "10 business days",
    },
    notes: [
      "Apply at the embassy of the country where you'll spend the most time",
      "Maximum stay is 90 days within any 180-day rolling period",
      "Travel insurance with minimum €30,000 coverage is mandatory",
      "Some consulates use VFS Global or TLScontact for appointment booking",
      "Airport Transit Visa (ATV) required for specific nationalities transiting Schengen airports",
    ],
    delayReasons: [
      "Incomplete or inconsistent itinerary and hotel bookings",
      "Insufficient financial proof (min €50–100/day of stay recommended)",
      "Previous Schengen refusals significantly slow down new applications",
      "Missing travel insurance or insufficient coverage amount",
    ],
    tips: [
      "Apply 3–6 weeks in advance (no earlier than 6 months before travel)",
      "Book refundable hotels and flexible flights specifically for the application",
      "Show strong bank balance — ideally 3× the estimated trip cost",
      "A prior Schengen visa record significantly improves future approval chances",
    ],
    faq: [
      {
        q: (nat) => `Which Schengen country embassy should ${nat} nationals apply at?`,
        a: () => `You must apply at the embassy of the Schengen country where you will spend the most nights. If equally split, apply at the first country you will enter.`,
      },
      {
        q: (nat) => `What is the minimum bank balance for a Schengen visa for ${nat} passport holders?`,
        a: () => `A common benchmark is €50–100 per day of stay. More important than the exact figure is demonstrating consistent financial stability across 3–6 months of bank statements.`,
      },
      {
        q: () => `Can I visit multiple Schengen countries on one visa?`,
        a: () => `Yes. A Schengen C visa allows entry to all 27 Schengen member states for up to 90 days within a 180-day period.`,
      },
      {
        q: () => `What is the ETIAS and does it replace the Schengen visa?`,
        a: (nat) => `ETIAS is an online pre-travel authorization for nationalities who don't need a Schengen visa. It does NOT replace the Schengen visa for ${nat} nationals who currently require a visa.`,
      },
    ],
    relatedPages: [
      { label: "Germany Visa from Bangladesh",  href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-germany-sticker" },
      { label: "France Visa Processing Time",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-france-sticker" },
      { label: "UK Visitor Visa Timeline",      href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom-sticker" },
      { label: "Canada TRV from Bangladesh",    href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada-sticker" },
      { label: "Schengen Airport Transit Visa", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen-transit" },
    ],
  },
  australia: {
    name: "Australia", flag: "🇦🇺",
    types: {
      "e-visa":            { min:1,  max:3,   label:"ETA / eVisitor (Subclass 601/651)" },
      "sticker":           { min:20, max:35,  label:"Visitor Visa (Subclass 600)" },
      "sticker-extended":  { min:60, max:120, label:"Complex Health/Character Check" },
      "transit":           { min:6,  max:24,  unit:"hours", label:"Transit Visa (Subclass 771)" },
    },
    embassyUrl: "https://immi.homeaffairs.gov.au/",
    embassyPhone: "+61-2-6264-1111",
    embassyAddress: "Australian High Commission, 184 Gulshan Avenue, Dhaka 1212",
    vfsUrl: "https://immi.homeaffairs.gov.au/",
    approvalRate: "74%",
    avgWaitWeeks: "4–7 weeks",
    peakMonths: "June – September, December – January",
    requiredDocuments: [
      "Valid passport (minimum 6 months validity beyond intended departure from Australia)",
      "Completed online application via ImmiAccount",
      "Recent passport-size photographs",
      "Bank statements for last 6 months",
      "Evidence of funds (AUD 5,000+ recommended for a 2-week trip)",
      "Employment letter confirming position, salary, and approved leave",
      "Income tax returns (last 2 years)",
      "Confirmed flight itinerary and hotel bookings",
      "Genuine Temporary Entrant (GTE) statement",
      "Health insurance covering the full trip duration",
      "Ties to home country (property, family, employment)",
    ],
    successStats: {
      avgProcessingDays: 27,
      approvalRate: "74%",
      refusalRate: "26%",
      peakDelay: "+14 business days in June–September",
      fastestEver: "12 business days",
    },
    notes: [
      "All Australian visas are fully digital — no physical stamp or sticker issued",
      "ImmiAccount portal tracks real-time application status",
      "Health examination required for stays over 12 months",
      "Character requirements apply — police clearance may be needed",
    ],
    delayReasons: [
      "Health examination results pending",
      "Character assessment or police certificate requested",
      "High application volume from South and Southeast Asia",
      "Genuine Temporary Entrant (GTE) concerns",
    ],
    tips: [
      "Submit complete health exam results upfront if medical is likely required",
      "Keep ImmiAccount notifications active — document requests expire in 28 days",
      "A convincing GTE statement is the most critical document",
    ],
    faq: [
      {
        q: (nat) => `What is the Australia Subclass 600 visa processing time for ${nat} nationals?`,
        a: (nat) => `The Australia Visitor Visa (Subclass 600) processing time for ${nat} applicants is typically 20–35 business days. Complex cases involving health or character checks can take 60–120 business days.`,
      },
      {
        q: () => `What is a Genuine Temporary Entrant (GTE) statement?`,
        a: () => `The GTE statement explains why you want to visit Australia and why you will return home. It is the single most important document for Australian visitor visas. A compelling GTE demonstrates strong ties to your home country.`,
      },
    ],
    relatedPages: [
      { label: "Canada Visitor Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada-sticker" },
      { label: "UK Standard Visitor Visa",            href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom-sticker" },
      { label: "Singapore Visit Visa Timeline",       href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-singapore-sticker" },
      { label: "Japan Tourist Visa Processing",       href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-japan-sticker" },
      { label: "Australia Transit Visa (771)",        href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-australia-transit" },
    ],
  },
  "united-arab-emirates": {
    name: "United Arab Emirates", flag: "🇦🇪",
    types: {
      "e-visa":            { min:2,  max:4,  label:"UAE e-Visa (Tourist/Visit)" },
      "sticker":           { min:5,  max:10, label:"Visa on Arrival / Embassy Visa" },
      "sticker-extended":  { min:15, max:30, label:"Complex / Employment Visa" },
      "transit":           { min:6,  max:24, unit:"hours", label:"UAE Transit Visa (96-hour)" },
    },
    embassyUrl: "https://icp.gov.ae/",
    embassyPhone: "+971-2-495-5555",
    embassyAddress: "UAE Embassy, Road 108, House 4, Baridhara, Dhaka 1212",
    vfsUrl: "https://icp.gov.ae/",
    approvalRate: "88%",
    avgWaitWeeks: "3–5 days",
    peakMonths: "Ramadan, Eid, December–January",
    requiredDocuments: [
      "Valid passport (minimum 6 months validity from date of travel)",
      "Clear scanned copy of passport bio-data page",
      "Recent passport-size photograph (white background, 35mm × 45mm)",
      "Confirmed return flight ticket or travel itinerary",
      "Hotel booking confirmation or accommodation proof",
      "Bank statements for last 3 months",
      "Sponsor's Emirates ID copy (for visit visa sponsored by UAE resident)",
      "For 96-hour transit: confirmed onward flight booking within 96 hours",
    ],
    successStats: {
      avgProcessingDays: 3,
      approvalRate: "88%",
      refusalRate: "12%",
      peakDelay: "+2–4 days during Eid/Ramadan",
      fastestEver: "24 hours",
    },
    notes: [
      "Most nationalities can apply online via icp.gov.ae or reputable travel agents",
      "30-day and 60-day tourist visas often approved within 48 hours",
      "Emirates and Etihad offer integrated visa-on-booking for passengers",
      "96-hour transit visa available for travelers connecting through Dubai or Abu Dhabi",
    ],
    delayReasons: [
      "Criminal record or previous overstay in any GCC country",
      "Name mismatch across passport and booking documents",
      "High application volume during Ramadan, Eid, and Dubai Shopping Festival",
    ],
    tips: [
      "Apply 3–5 days before travel for e-visa — processing is very fast",
      "Use Dubai Tourism official portal or established travel agents only",
      "96-hour transit visa can be extended to allow Dubai city access between flights",
    ],
    faq: [
      {
        q: (nat) => `How long does a UAE tourist e-visa take for ${nat} nationals?`,
        a: (nat) => `UAE tourist e-visas for ${nat} nationals are typically processed within 48–96 hours. During peak periods like Eid or the Dubai Shopping Festival, processing can take up to 5–7 days.`,
      },
      {
        q: () => `What is the UAE 96-hour transit visa?`,
        a: (nat) => `The UAE 96-hour transit visa allows travelers to enter Dubai or Abu Dhabi for up to 96 hours while connecting to another destination. It includes city access and is available through airlines and registered agents.`,
      },
    ],
    relatedPages: [
      { label: "Saudi Arabia Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-saudi-arabia-sticker" },
      { label: "Singapore Visa Processing Time",    href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-singapore-sticker" },
      { label: "Malaysia Visa from Bangladesh",     href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-malaysia-sticker" },
      { label: "UAE Transit Visa (96-Hour)",        href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-arab-emirates-transit" },
      { label: "Schengen Visa from Bangladesh",     href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen-sticker" },
    ],
  },
  germany: {
    name: "Germany", flag: "🇩🇪",
    types: {
      "sticker":           { min:15, max:21, label:"National Visa / Schengen Visa" },
      "sticker-extended":  { min:45, max:90, label:"Complex Case / Student Visa" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Airport Transit Visa (TATV)" },
    },
    embassyUrl: "https://www.germany-visa.org/",
    embassyPhone: "+880-2-5566-3500",
    embassyAddress: "Embassy of the Federal Republic of Germany, 178 Gulshan Avenue, Dhaka 1212",
    vfsUrl: "https://www.vfsglobal.com/germany/bangladesh/",
    approvalRate: "69%",
    avgWaitWeeks: "3–5 weeks",
    peakMonths: "May – September, October – November",
    requiredDocuments: [
      "Valid passport (at least 3 months validity beyond planned departure from Schengen zone)",
      "Completed German visa application form",
      "Two recent biometric photographs",
      "APS Certificate (for Bangladeshi students)",
      "University admission letter (for student visa)",
      "Proof of blocked account (Sperrkonto) showing €11,208/year",
      "Travel health insurance with €30,000 coverage",
      "Bank statements for last 3 months",
    ],
    successStats: {
      avgProcessingDays: 20,
      approvalRate: "69%",
      refusalRate: "31%",
      peakDelay: "+14–21 business days for student visa in peak intake months",
      fastestEver: "12 business days",
    },
    notes: [
      "APS Certificate required for Bangladeshi students",
      "Blocked account (Sperrkonto) with €11,208/year required for student visas",
      "Visa appointments at German embassies can be 4–8 weeks ahead — book early",
      "TATV required for Bangladeshis transiting Frankfurt, Munich",
    ],
    delayReasons: [
      "APS or document authentication pending",
      "Blocked account not yet funded",
      "High application volume",
    ],
    tips: [
      "Start your blocked account process 6–8 weeks before application",
      "Book your appointment as soon as you have your university acceptance",
    ],
    faq: [
      {
        q: (nat) => `What is the APS certificate and why do ${nat} students need it?`,
        a: (nat) => `The APS certificate verifies the authenticity of ${nat} educational credentials for German universities. It is mandatory for most ${nat} student visa applicants and usually takes 4–8 weeks.`,
      },
      {
        q: () => `What is a Sperrkonto and how much do I need?`,
        a: () => `A Sperrkonto is a German blocked bank account proving you have sufficient funds. For 2025, you need to deposit €11,208 per year. The funds are released monthly once you are in Germany.`,
      },
    ],
    relatedPages: [
      { label: "Schengen Visa Processing Time",  href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen-sticker" },
      { label: "France Visa from Bangladesh",    href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-france-sticker" },
      { label: "Germany Airport Transit Visa",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-germany-transit" },
      { label: "Canada Student Visa Timeline",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada-sticker-extended" },
    ],
  },
  france: {
    name: "France", flag: "🇫🇷",
    types: {
      "e-visa":            { min:5,  max:10, label:"ETIAS (from 2025)" },
      "sticker":           { min:15, max:30, label:"Schengen C Visa / Long-Stay D Visa" },
      "sticker-extended":  { min:45, max:90, label:"Complex Case" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Airport Transit Visa (ATV)" },
    },
    embassyUrl: "https://france-visas.gouv.fr/",
    embassyPhone: "+880-2-5566-2620",
    embassyAddress: "Embassy of France, Road 108, House 18, Gulshan 2, Dhaka 1212",
    vfsUrl: "https://www.vfsglobal.com/france/bangladesh/",
    approvalRate: "70%",
    avgWaitWeeks: "3–6 weeks",
    peakMonths: "May – August, December",
    requiredDocuments: [
      "Valid passport",
      "Completed France visa application form",
      "Two biometric photographs",
      "Travel insurance with minimum €30,000 coverage",
      "Confirmed flight bookings",
      "Hotel reservations",
      "Bank statements for last 3–6 months",
      "Campus France pre-registration confirmation (for student visa)",
    ],
    successStats: {
      avgProcessingDays: 21,
      approvalRate: "70%",
      refusalRate: "30%",
      peakDelay: "+10–15 business days June–August",
      fastestEver: "12 business days",
    },
    notes: [
      "Campus France pre-registration required for student visa applicants",
      "VFS Global handles biometrics for French visa applications",
      "ATV required for Bangladeshi nationals transiting French airports",
    ],
    delayReasons: [
      "Campus France evaluation pending",
      "Insufficient financial proof per day of stay",
      "Travel insurance not meeting minimum €30,000 coverage",
    ],
    tips: [
      "Complete Campus France pre-registration at least 6 weeks before applying",
      "Show strong bank balance and employment evidence for tourist visas",
    ],
    faq: [
      {
        q: (nat) => `What is Campus France and why do ${nat} students need it?`,
        a: (nat) => `Campus France is the French government's official agency for promoting French higher education. ${nat} students must complete a Campus France pre-registration process before applying for the visa. This takes 4–8 weeks.`,
      },
    ],
    relatedPages: [
      { label: "Schengen Visa Complete Guide", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen-sticker" },
      { label: "Germany Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-germany-sticker" },
      { label: "France Airport Transit Visa",  href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-france-transit" },
    ],
  },
  "saudi-arabia": {
    name: "Saudi Arabia", flag: "🇸🇦",
    types: {
      "e-visa":            { min:2,  max:4,  label:"Saudi e-Visa (Tourist)" },
      "sticker":           { min:10, max:21, label:"Saudi Sticker Visa" },
      "sticker-extended":  { min:30, max:60, label:"Work Visa / Iqama" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Saudi Transit Visa" },
    },
    embassyUrl: "https://visa.mofa.gov.sa/",
    embassyPhone: "+880-2-5566-0100",
    embassyAddress: "Royal Embassy of Saudi Arabia, Road 106, House 5, Gulshan, Dhaka 1212",
    vfsUrl: "https://visa.mofa.gov.sa/",
    approvalRate: "82%",
    avgWaitWeeks: "2–4 weeks",
    peakMonths: "Ramadan, Hajj season, December",
    requiredDocuments: [
      "Valid passport (minimum 6 months validity)",
      "Completed Saudi visa application",
      "Recent passport-size photograph",
      "Confirmed return flight ticket",
      "Hotel booking confirmation",
      "Bank statements for last 3 months",
      "Sponsor's Saudi Iqama copy (for work and visit visas)",
      "Police clearance certificate (for employment visas)",
    ],
    successStats: {
      avgProcessingDays: 14,
      approvalRate: "82%",
      refusalRate: "18%",
      peakDelay: "+7–10 days during Hajj season",
      fastestEver: "48 hours (e-visa for tourist)",
    },
    notes: [
      "Saudi tourist e-visa available for 50+ nationalities through Tawakkalna",
      "Iqama required for work visa holders within 90 days of arrival",
      "Medical examination at MOH-approved centers required for employment visas",
    ],
    delayReasons: [
      "Ministry of Foreign Affairs manual review",
      "Sponsor delays for employment or family visit visas",
      "Medical fitness certificate not from approved center",
    ],
    tips: [
      "Use Tawakkalna or Enjazit official portals only",
      "Ensure all documents are attested through proper channels",
    ],
    faq: [
      {
        q: (nat) => `Can ${nat} nationals get a Saudi Arabia tourist e-visa?`,
        a: (nat) => `${nat} nationals should check eligibility on the official Saudi Tourism portal. If eligible, processing takes 2–4 business days and allows a stay of up to 90 days.`,
      },
    ],
    relatedPages: [
      { label: "UAE e-Visa from Bangladesh",     href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-arab-emirates-e-visa" },
      { label: "Saudi Arabia Work Visa Guide",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-saudi-arabia-sticker-extended" },
    ],
  },
  singapore: {
    name: "Singapore", flag: "🇸🇬",
    types: {
      "e-visa":            { min:3,  max:5,  label:"Singapore e-Visa (SAVE)" },
      "sticker":           { min:7,  max:14, label:"Singapore Visit Visa" },
      "sticker-extended":  { min:21, max:45, label:"Employment Pass / S-Pass" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Transit Without Visa / Transit Visa" },
    },
    embassyUrl: "https://www.ica.gov.sg/",
    embassyPhone: "+65-6391-6100",
    embassyAddress: "Singapore High Commission, Plot 2, Road 22, Baridhara, Dhaka 1212",
    vfsUrl: "https://www.vfsglobal.com/singapore/bangladesh/",
    approvalRate: "76%",
    avgWaitWeeks: "1–3 weeks",
    peakMonths: "June – August, December",
    requiredDocuments: [
      "Valid passport (6 months validity)",
      "Completed Singapore visa application form",
      "Recent passport photograph",
      "Bank statements for last 3 months",
      "Employment letter",
      "Confirmed hotel booking in Singapore",
      "Round-trip flight itinerary",
    ],
    successStats: {
      avgProcessingDays: 10,
      approvalRate: "76%",
      refusalRate: "24%",
      peakDelay: "+5–7 business days June–August",
      fastestEver: "5 business days",
    },
    notes: [
      "Most visa applications submitted through ICA",
      "Singapore Employment Pass requires monthly salary above SGD 5,000",
      "Many nationalities can transit Singapore without a visa for short layovers",
    ],
    delayReasons: [
      "Salary assessment for EP/S-Pass below guidelines",
      "Previous immigration violations",
      "Background check delays",
    ],
    tips: [
      "Check Singapore TVWP eligibility before assuming you need a visa",
      "Keep ICA online portal notifications on",
    ],
    faq: [
      {
        q: (nat) => `What is the Singapore visa processing time for ${nat} nationals?`,
        a: (nat) => `Singapore visit visa processing for ${nat} passport holders typically takes 7–14 business days. Applications are processed by ICA and submitted through VFS Global or accredited travel agents.`,
      },
    ],
    relatedPages: [
      { label: "Malaysia Visa from Bangladesh",  href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-malaysia-sticker" },
      { label: "Japan Tourist Visa Timeline",    href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-japan-sticker" },
      { label: "Thailand Visa Processing Time",  href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-thailand-sticker" },
    ],
  },
  japan: {
    name: "Japan", flag: "🇯🇵",
    types: {
      "sticker":           { min:5,  max:7,  label:"Japan Tourist Visa" },
      "sticker-extended":  { min:21, max:45, label:"Japan Long-Stay / Work Visa" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Japan Shore Pass / Transit" },
    },
    embassyUrl: "https://www.mofa.go.jp/j_info/visit/visa/",
    embassyPhone: "+880-2-5882-0000",
    embassyAddress: "Embassy of Japan, Plot 5 & 7, Madani Avenue, Baridhara, Dhaka 1212",
    vfsUrl: "https://www.vfsglobal.com/japan/bangladesh/",
    approvalRate: "79%",
    avgWaitWeeks: "1–2 weeks",
    peakMonths: "March – May (Cherry Blossom), October – November (Autumn)",
    requiredDocuments: [
      "Valid passport",
      "Completed Japan visa application form",
      "One recent passport-size photograph (45mm × 45mm, white background)",
      "Bank statements for last 3–6 months",
      "Employment letter",
      "Day-by-day detailed travel itinerary",
      "Hotel bookings for entire stay",
      "Round-trip flight reservation",
    ],
    successStats: {
      avgProcessingDays: 6,
      approvalRate: "79%",
      refusalRate: "21%",
      peakDelay: "+5 business days March–May, October–November",
      fastestEver: "3 business days",
    },
    notes: [
      "Japanese embassy does not do interviews",
      "All Japan visas are sticker visas — no e-visa system for most nationalities",
      "Financial documents must be translated into Japanese or English",
    ],
    delayReasons: [
      "Insufficient financial documentation",
      "Incomplete itinerary or hotel bookings",
      "Previous Japan visa refusal significantly impacts new applications",
    ],
    tips: [
      "Include a highly detailed day-by-day itinerary",
      "Apply 3–4 weeks in advance",
    ],
    faq: [
      {
        q: (nat) => `What is the Japan tourist visa processing time for ${nat} nationals?`,
        a: (nat) => `Japan tourist visa processing for ${nat} applicants takes 5–7 business days under normal conditions. During peak travel seasons, processing can extend to 10–14 business days.`,
      },
    ],
    relatedPages: [
      { label: "South Korea Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-south-korea-sticker" },
      { label: "Singapore Visit Visa Timeline",    href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-singapore-sticker" },
      { label: "Japan Long-Stay / Work Visa",      href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-japan-sticker-extended" },
    ],
  },
  malaysia: {
    name: "Malaysia", flag: "🇲🇾",
    types: {
      "e-visa":            { min:1,  max:3,  label:"Malaysia eVisa (eNTRI/evisa)" },
      "sticker":           { min:7,  max:14, label:"Malaysia Sticker Visa" },
      "sticker-extended":  { min:21, max:45, label:"Employment Pass / Long-Stay" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Transit Without Visa / TVP" },
    },
    embassyUrl: "https://www.imi.gov.my/",
    embassyPhone: "+603-8000-8000",
    embassyAddress: "High Commission of Malaysia, Road 7, House 7, Baridhara, Dhaka 1212",
    vfsUrl: "https://www.vfsglobal.com/malaysia/bangladesh/",
    approvalRate: "84%",
    avgWaitWeeks: "1–3 weeks",
    peakMonths: "June – August, December",
    requiredDocuments: [
      "Valid passport (6 months validity beyond return date)",
      "Completed Malaysia visa application",
      "Recent passport-size photograph",
      "Confirmed return flight ticket",
      "Hotel booking for full stay",
      "Bank statements for last 3 months",
      "Employment letter",
    ],
    successStats: {
      avgProcessingDays: 7,
      approvalRate: "84%",
      refusalRate: "16%",
      peakDelay: "+3–5 business days June–August",
      fastestEver: "24 hours (eNTRI)",
    },
    notes: [
      "eNTRI available for Bangladeshi nationals — single entry, 15 days",
      "Malaysia evisa (multi-entry) available for 3 or 6 months",
      "Transit Without Visa (TWOV) available for many nationalities at KLIA for 24 hours",
    ],
    delayReasons: [
      "Photo not meeting specification",
      "Overstay history in Malaysia or ASEAN countries",
    ],
    tips: [
      "Apply eNTRI for short trips — fastest and cheapest option for Bangladeshis",
    ],
    faq: [
      {
        q: (nat) => `Can ${nat} nationals get a Malaysia eNTRI visa?`,
        a: (nat) => `Yes, ${nat} nationals can apply for the Malaysia eNTRI visa online. It allows a single entry for up to 15 days and is typically processed within 24 hours.`,
      },
    ],
    relatedPages: [
      { label: "Singapore Visa from Bangladesh",  href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-singapore-sticker" },
      { label: "Thailand Visa Processing Time",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-thailand-sticker" },
      { label: "UAE e-Visa from Bangladesh",      href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-arab-emirates-e-visa" },
    ],
  },
  thailand: {
    name: "Thailand", flag: "🇹🇭",
    types: {
      "e-visa":            { min:1,  max:3,  label:"Thailand e-Visa / eVOA" },
      "sticker":           { min:7,  max:14, label:"Thailand Tourist Visa (TR)" },
      "sticker-extended":  { min:21, max:45, label:"Non-Immigrant Visa / Long-Stay" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Transit Visa (TS)" },
    },
    embassyUrl: "https://www.thaievisa.go.th/",
    embassyPhone: "+880-2-5566-2300",
    embassyAddress: "Royal Thai Embassy, 18 Madani Avenue, Baridhara, Dhaka 1212",
    vfsUrl: "https://www.thaievisa.go.th/",
    approvalRate: "87%",
    avgWaitWeeks: "1–2 weeks",
    peakMonths: "November – February, April (Songkran)",
    requiredDocuments: [
      "Valid passport (6 months validity)",
      "Completed Thai visa application form",
      "Recent passport-size photograph",
      "Confirmed return flight ticket",
      "Hotel bookings for full stay",
      "Bank statements (min THB 20,000 equivalent per applicant)",
    ],
    successStats: {
      avgProcessingDays: 5,
      approvalRate: "87%",
      refusalRate: "13%",
      peakDelay: "+3 business days Nov–Feb",
      fastestEver: "2 business days",
    },
    notes: [
      "Thailand launched eVisa system — apply online at thaievisa.go.th",
      "Visa-on-arrival available for Bangladeshi nationals at BKK Suvarnabhumi airport",
      "Transit Visa required for Bangladeshi nationals connecting through Thai airports",
    ],
    delayReasons: [
      "Insufficient proof of funds",
      "No confirmed return flight or hotel booking",
      "Previous overstay in Thailand",
    ],
    tips: [
      "Apply Thailand eVisa online instead of arriving for VOA",
      "Always carry THB 10,000+ cash per person for VOA immigration inspection",
    ],
    faq: [
      {
        q: (nat) => `Can ${nat} nationals get a Thailand visa on arrival?`,
        a: (nat) => `Yes, ${nat} nationals can obtain a Thailand Visa on Arrival at Suvarnabhumi and Phuket airports for stays up to 30 days. However, applying for the Thailand eVisa online before travel is safer and faster.`,
      },
    ],
    relatedPages: [
      { label: "Malaysia e-Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-malaysia-e-visa" },
      { label: "Singapore Visa Processing",       href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-singapore-sticker" },
      { label: "Japan Tourist Visa",              href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-japan-sticker" },
    ],
  },
  "south-korea": {
    name: "South Korea", flag: "🇰🇷",
    types: {
      "e-visa":            { min:3,  max:5,  label:"Korea Electronic Visa (K-ETA)" },
      "sticker":           { min:5,  max:10, label:"Korea Tourist Visa (C-3)" },
      "sticker-extended":  { min:30, max:60, label:"Korea D-2/D-10 Student or Long-Stay" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Korea Transit Visa (TWOV)" },
    },
    embassyUrl: "https://overseas.mofa.go.kr/bd-en/",
    embassyPhone: "+880-2-5566-2200",
    embassyAddress: "Embassy of the Republic of Korea, 4 Madani Avenue, Baridhara, Dhaka 1212",
    vfsUrl: "https://overseas.mofa.go.kr/bd-en/",
    approvalRate: "78%",
    avgWaitWeeks: "1–2 weeks",
    peakMonths: "March – May, September – November",
    requiredDocuments: [
      "Valid passport (6 months validity)",
      "Completed Korea visa application form",
      "Recent passport-size photograph",
      "Bank statements for last 3–6 months",
      "Employment letter",
      "Confirmed return flight ticket and accommodation",
      "Travel itinerary (day-by-day)",
    ],
    successStats: {
      avgProcessingDays: 7,
      approvalRate: "78%",
      refusalRate: "22%",
      peakDelay: "+4–5 business days Mar–May, Sep–Oct",
      fastestEver: "3 business days",
    },
    notes: [
      "K-ETA launched for 112 nationalities — Bangladeshis are not currently eligible",
      "Korean Tourist Visa (C-3) allows stays up to 90 days",
      "Strong travel history to USA, UK, Japan, Schengen significantly boosts approval",
    ],
    delayReasons: [
      "Weak financial documentation",
      "No previous international travel history",
      "Incomplete travel itinerary",
    ],
    tips: [
      "Apply 3–4 weeks ahead",
      "Include strong employment letter and 6 months consistent bank balance",
    ],
    faq: [
      {
        q: (nat) => `What is the South Korea visa processing time for ${nat} nationals?`,
        a: (nat) => `South Korea Tourist Visa (C-3) for ${nat} applicants takes 5–10 business days. During peak seasons, processing can extend to 14–21 business days.`,
      },
    ],
    relatedPages: [
      { label: "Japan Tourist Visa Processing",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-japan-sticker" },
      { label: "Singapore Visa from Bangladesh",  href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-singapore-sticker" },
      { label: "Schengen Visa Processing Time",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen-sticker" },
    ],
  },
  georgia: {
    name: "Georgia", flag: "🇬🇪",
    types: {
      "e-visa":            { min:1,  max:5,  label:"Georgia e-Visa" },
      "sticker":           { min:1,  max:1,  label:"Georgia Visa-Free Entry (365 days)" },
      "sticker-extended":  { min:30, max:60, label:"Georgia TRC (Temporary Residence)" },
      "transit":           { min:1,  max:3,  unit:"hours", label:"Georgia Transit (Visa-Free)" },
    },
    embassyUrl: "https://evisa.gov.ge/",
    embassyPhone: "+995-32-298-5959",
    embassyAddress: "Ministry of Foreign Affairs of Georgia, 4 Chitadze Street, Tbilisi",
    vfsUrl: "https://evisa.gov.ge/",
    approvalRate: "98%",
    avgWaitWeeks: "Immediate (visa-free) / 1–5 days (e-visa)",
    peakMonths: "June – September",
    requiredDocuments: [
      "Valid passport only (for visa-free Bangladeshi nationals)",
      "For e-visa: online application at evisa.gov.ge + passport scan + photo",
    ],
    successStats: {
      avgProcessingDays: 1,
      approvalRate: "98%",
      refusalRate: "2%",
      peakDelay: "Virtually none — visa-free entry",
      fastestEver: "Immediate (at port of entry)",
    },
    notes: [
      "Bangladeshi passport holders can enter Georgia VISA-FREE for 365 days",
      "Eammu Holidays has a full office in Tbilisi at Floor 5, Levan Gotua St #3",
    ],
    delayReasons: ["TRC application delays: business registration pending"],
    tips: ["No visa needed — just arrive with your valid Bangladeshi passport"],
    faq: [
      {
        q: (nat) => `Do ${nat} nationals need a visa to enter Georgia?`,
        a: (nat) => `No. ${nat} passport holders can enter Georgia completely visa-free for up to 365 days. Simply arrive at Tbilisi International Airport with a valid passport.`,
      },
    ],
    relatedPages: [
      { label: "Armenia Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-armenia-e-visa" },
      { label: "Turkey e-Visa from Bangladesh",href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-turkey-e-visa" },
      { label: "Schengen Visa from Tbilisi",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen-sticker" },
    ],
  },
  armenia: {
    name: "Armenia", flag: "🇦🇲",
    types: {
      "e-visa":            { min:1,  max:3,  label:"Armenia e-Visa (evisa.am)" },
      "sticker":           { min:3,  max:5,  label:"Armenia Visa on Arrival" },
      "sticker-extended":  { min:30, max:60, label:"Armenia Residence Permit" },
      "transit":           { min:1,  max:3,  unit:"hours", label:"Armenia Transit Visa" },
    },
    embassyUrl: "https://evisa.mfa.am/",
    embassyPhone: "+374-10-544-041",
    embassyAddress: "Ministry of Foreign Affairs of Armenia, Government House 2, Republic Square, Yerevan 0010",
    vfsUrl: "https://evisa.mfa.am/",
    approvalRate: "95%",
    avgWaitWeeks: "1–3 business days (e-visa)",
    peakMonths: "June – September, April",
    requiredDocuments: [
      "Valid passport (6 months validity)",
      "Online e-Visa application at evisa.mfa.am",
      "Return flight confirmation",
      "Hotel/accommodation booking",
    ],
    successStats: {
      avgProcessingDays: 2,
      approvalRate: "95%",
      refusalRate: "5%",
      peakDelay: "+1–2 days in summer",
      fastestEver: "Same day (urgent e-visa)",
    },
    notes: [
      "Armenia e-Visa available for most nationalities including Bangladeshis",
      "Visa on Arrival also available at Zvartnots International Airport, Yerevan",
      "Eammu Holidays has a full office in Yerevan at Lambron 39",
    ],
    delayReasons: ["e-Visa: photo not meeting specification"],
    tips: ["Apply Armenia e-visa at evisa.mfa.am — simple 5-minute process"],
    faq: [
      {
        q: (nat) => `How do ${nat} nationals apply for an Armenia e-visa?`,
        a: (nat) => `${nat} nationals can apply for an Armenia e-visa at evisa.mfa.am. Fill in your passport details, upload a photo, pay online, and receive the e-visa by email within 1–3 business days.`,
      },
    ],
    relatedPages: [
      { label: "Georgia Visa-Free Entry Guide", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-georgia-sticker" },
      { label: "Turkey e-Visa Processing Time",href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-turkey-e-visa" },
      { label: "Dubai Visa from Bangladesh",    href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-arab-emirates-e-visa" },
    ],
  },
  turkey: {
    name: "Turkey", flag: "🇹🇷",
    types: {
      "e-visa":            { min:1,  max:2,  label:"Turkey e-Visa (evisa.gov.tr)" },
      "sticker":           { min:10, max:21, label:"Turkey Sticker Visa" },
      "sticker-extended":  { min:30, max:60, label:"Turkey Residence / Long-Stay" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Turkey Airport Transit Visa" },
    },
    embassyUrl: "https://www.evisa.gov.tr/",
    embassyPhone: "+880-2-5566-5600",
    embassyAddress: "Embassy of the Republic of Turkey, 7A Aziz Mohammed Road, Baridhara, Dhaka 1212",
    vfsUrl: "https://visa.vfsglobal.com/bgd/en/tur/",
    approvalRate: "81%",
    avgWaitWeeks: "1–3 days (e-visa) / 2–3 weeks (sticker)",
    peakMonths: "June – August, Ramadan, December",
    requiredDocuments: [
      "Valid passport (6 months validity)",
      "Turkey e-Visa online application at evisa.gov.tr",
      "Confirmed return flight ticket",
      "Hotel/accommodation booking",
      "Bank statements (last 3 months)",
    ],
    successStats: {
      avgProcessingDays: 2,
      approvalRate: "81%",
      refusalRate: "19%",
      peakDelay: "+1–2 days Ramadan/summer",
      fastestEver: "Same day (e-visa)",
    },
    notes: [
      "Turkey e-Visa available for Bangladeshi nationals — apply at evisa.gov.tr",
      "Single-entry e-visa allows up to 30 days stay",
      "Istanbul Airport (IST) — direct flights from Dhaka",
    ],
    delayReasons: [
      "e-Visa: payment issue (use international Visa/Mastercard)",
      "History of overstay in Turkey or MENA region",
    ],
    tips: [
      "Apply Turkey e-visa at evisa.gov.tr — takes 2 minutes, approved same day",
      "Use an international Visa or Mastercard for payment",
    ],
    faq: [
      {
        q: (nat) => `Can ${nat} nationals apply for a Turkey e-visa online?`,
        a: (nat) => `Yes. ${nat} nationals can apply for a Turkey e-visa in minutes at evisa.gov.tr. The e-visa is approved same-day to within 24 hours, allows a single entry, and permits stays up to 30 days.`,
      },
    ],
    relatedPages: [
      { label: "Georgia Visa-Free Bangladesh",  href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-georgia-sticker" },
      { label: "UAE e-Visa from Bangladesh",    href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-arab-emirates-e-visa" },
    ],
  },
};

// ── GLOBAL INTERNAL LINKS ─────────────────────────────────────────────────
export const GLOBAL_INTERNAL_LINKS = [
  { label: "All Visa Services",                href: "/visa" },
  { label: "E-Visa Destinations",              href: "/visa/e-visa" },
  { label: "Visa Guides A–Z",                  href: "/visa/visa-guide" },
  { label: "Visa Checklist Generator",         href: "/travel-resources/visa-checklist-generator" },
  { label: "Visa Processing Time Tracker",     href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Travel Cost Calculator",           href: "/travel-cost-calculator" },
  { label: "Travel Budget Planner",            href: "/travel-budget-planner" },
  { label: "Study Abroad Hub",                 href: "/study-abroad" },
  { label: "Student Visa Processing",          href: "/study-abroad/student-visa" },
  { label: "Scholarships 2026",                href: "/scholarships" },
  { label: "Visa Rejection Help",              href: "/visa-rejection" },
  { label: "IELTS Center — Cumilla",           href: "/target-ielts-immigration-center" },
  { label: "USA Visa Interview Prep",          href: "/target-usa-visa-interview-preparation" },
  { label: "Dubai Resident Visas",             href: "/visa/dubai-residents" },
  { label: "India Visa from Bangladesh",       href: "/visa/india" },
  { label: "Latest Tour Offers",               href: "/offers" },
  { label: "Bangladesh Offices",               href: "/contact/travel-agency-bangladesh" },
  { label: "Dubai Office",                     href: "/contact/travel-agency-dubai" },
  { label: "Georgia Office — Tbilisi",         href: "/contact/travel-agency-georgia" },
  { label: "Armenia Office — Yerevan",         href: "/contact/travel-agency-armenia" },
  { label: "Online Travel Agency Bangladesh",  href: "/online-travel-agency-bangladesh" },
  { label: "Travel Blog",                      href: "/blogs" },
  { label: "Testimonials",                     href: "/testimonials" },
  { label: "News & Visa Updates",              href: "/news-feeds" },
];

// ── VISA TYPE LABEL CONFIG ────────────────────────────────────────────────
const VISA_TYPE_LABELS = {
  "e-visa":           { label:"E-Visa",       color:"bg-emerald-100 text-emerald-800 border-emerald-200" },
  "sticker":          { label:"Sticker Visa", color:"bg-blue-100 text-blue-800 border-blue-200"          },
  "sticker-extended": { label:"Complex Case", color:"bg-amber-100 text-amber-800 border-amber-200"       },
  "transit":          { label:"Transit Visa", color:"bg-purple-100 text-purple-800 border-purple-200"    },
};

// ── GENERIC FALLBACK ──────────────────────────────────────────────────────
function getCountryData(destSlug) {
  const key = Object.keys(VISA_RULES).find(k => destSlug.includes(k));
  if (key) return { key, ...VISA_RULES[key] };
  const destName = destSlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return {
    key: "generic",
    name: destName,
    flag: "🌍",
    types: {
      "e-visa":           { min:2,  max:5,  label:"E-Visa (Online)" },
      "sticker":          { min:15, max:21, label:"Sticker Visa" },
      "sticker-extended": { min:45, max:60, label:"Complex / Extended Processing" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Transit Visa" },
    },
    embassyUrl: null, embassyPhone: null, embassyAddress: null, vfsUrl: null,
    approvalRate: null, avgWaitWeeks: null, peakMonths: null,
    requiredDocuments: [
      "Valid passport (6+ months validity)", "Completed visa application form",
      "Recent passport-size photographs", "Bank statements for last 3–6 months",
      "Employment letter with salary and leave approval",
      "Flight itinerary and hotel bookings", "Travel insurance",
    ],
    successStats: null,
    notes: [
      "Processing times are estimates based on typical embassy timelines",
      "Always verify with the official embassy or consulate",
      "Apply at least 6–8 weeks before travel for sticker visas",
    ],
    delayReasons: [
      "Incomplete or inconsistent documentation",
      "High application volume or peak seasonal demand",
    ],
    tips: [
      "Submit a complete, well-organized application package",
      "Track your application status regularly",
    ],
    faq: [],
    relatedPages: [
      { label: "Canada Visa Processing Time",  href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada-sticker" },
      { label: "UK Visitor Visa Guide",        href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom-sticker" },
      { label: "Schengen Visa from Bangladesh",href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen-sticker" },
      { label: "UAE Tourist e-Visa",           href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-arab-emirates-e-visa" },
    ],
  };
}

// ── SLUG PARSER ───────────────────────────────────────────────────────────
function parseSlug(slug = "") {
  let visaType = "sticker";
  let baseSlug = slug;

  for (const t of VISA_TYPE_KEYS) {
    if (baseSlug.endsWith(`-${t}`)) {
      visaType = t;
      baseSlug = baseSlug.slice(0, -(t.length + 1));
      break;
    }
  }

  const marker = "-national-visa-processing-time-for-";
  const idx = baseSlug.indexOf(marker);
  if (idx === -1) return { natSlug: baseSlug, destSlug: "unknown", visaType, baseSlug };

  return {
    natSlug:  baseSlug.slice(0, idx),
    destSlug: baseSlug.slice(idx + marker.length),
    visaType,
    baseSlug, // ✅ type suffix ছাড়া — VisaTypeSwitcher-এ পাঠানো হবে
  };
}

// ── MAIN SERVER COMPONENT ─────────────────────────────────────────────────
export default async function VisaProcessingSlugPage({ slug }) {
  // ✅ params/searchParams নেই — শুধু slug prop
  const { natSlug, destSlug, visaType, baseSlug } = parseSlug(slug);

  const found = COUNTRIES.find(
    c => c.country.toLowerCase().replace(/\s+/g, "-") === natSlug
  );
  const nationalityName = found?.country ||
    natSlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const countryData = getCountryData(destSlug);
  const activeType  = countryData.types[visaType] ? visaType : "sticker";
  const activeRule  = countryData.types[activeType];
  const isHours     = activeRule?.unit === "hours";
  const timeDisplay = isHours
    ? `${activeRule.min}–${activeRule.max} hours`
    : `${activeRule.min}–${activeRule.max} business days`;

  // ✅ Related visa types — slug-based links
  const RELATED = Object.entries(countryData.types).filter(([k]) => k !== activeType);

  return (
    <div className="min-h-screen bg-white font-sans my-20">

      {/* BREADCRUMB */}
      <div className="bg-slate-50 border-b border-slate-100 px-6 py-3">
        <div className="container mx-auto max-w-6xl flex items-center gap-2 text-xs text-slate-400 font-semibold flex-wrap">
          <Link href="/" className="hover:text-[#005a31] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/travel-resources/visa-processing-time-tracker" className="hover:text-[#005a31] transition-colors">
            Visa Processing Time Tracker
          </Link>
          <ChevronRight size={12} />
          <span className="text-slate-600 truncate">{nationalityName} → {countryData.name}</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative bg-white pt-16 pb-12 px-6 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 text-[200px] opacity-[0.04] select-none pointer-events-none leading-none">
          {countryData.flag}
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <Link
            href="/travel-resources/visa-processing-time-tracker"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-[#005a31] mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Tracker
          </Link>

          {/* ✅ baseSlug পাঠানো হচ্ছে — slug নয় */}
          <VisaTypeSwitcher
            types={countryData.types}
            activeType={activeType}
            baseSlug={baseSlug}
            visaTypeLabels={VISA_TYPE_LABELS}
          />

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-[#004d2c] leading-tight tracking-tight mb-4">
                {nationalityName} National<br />
                Visa Processing Time<br />
                <span className="text-transparent" style={{ WebkitTextStroke:"2px #004d2c" }}>
                  for {countryData.name}
                </span>
              </h1>
              <p className="text-slate-500 font-medium leading-relaxed mb-6 text-sm">
                Accurate, up-to-date processing time for{" "}
                <strong className="text-slate-800">{nationalityName} passport holders</strong> applying for a{" "}
                <strong className="text-slate-800">{activeRule?.label}</strong> to {countryData.name}.
                Data updated monthly from real applicant reports and embassy guidelines.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className={`px-4 py-2 rounded-xl border text-xs font-black uppercase tracking-wider ${VISA_TYPE_LABELS[activeType]?.color || "bg-slate-50 border-slate-200 text-slate-600"}`}>
                  {VISA_TYPE_LABELS[activeType]?.label}
                </span>
                <span className="px-4 py-2 rounded-xl border bg-slate-50 border-slate-200 text-slate-600 text-xs font-black uppercase tracking-wider">
                  Updated 2025
                </span>
                <span className="px-4 py-2 rounded-xl border bg-slate-50 border-slate-200 text-slate-600 text-xs font-black uppercase tracking-wider">
                  {countryData.flag} {countryData.name}
                </span>
                {countryData.approvalRate && (
                  <span className="px-4 py-2 rounded-xl border bg-green-50 border-green-200 text-green-700 text-xs font-black uppercase tracking-wider">
                    ✓ {countryData.approvalRate} Approval Rate
                  </span>
                )}
              </div>
            </div>

            {/* Processing time card */}
            <div className="bg-[#004d2c] rounded-[2rem] p-8 text-white">
              <div className="text-xs font-black uppercase tracking-widest text-green-300/70 mb-2">
                Estimated Processing Time
              </div>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-6xl font-black text-amber-400 leading-none">
                  {activeRule?.min}–{activeRule?.max}
                </span>
                <span className="text-2xl font-black text-white/60 mb-1">
                  {isHours ? "hours" : "business days"}
                </span>
              </div>
              <div className="text-sm text-green-200/70 font-semibold mb-6">{activeRule?.label}</div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-lg font-black text-amber-400">{activeRule?.min}{isHours ? "h" : "d"}</div>
                  <div className="text-[10px] text-green-300/60 font-bold uppercase">Best Case</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-lg font-black text-white">
                    {Math.round(((activeRule?.min || 0) + (activeRule?.max || 0)) / 2)}{isHours ? "h" : "d"}
                  </div>
                  <div className="text-[10px] text-green-300/60 font-bold uppercase">Average</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-lg font-black text-red-300">{activeRule?.max}{isHours ? "h" : "d"}</div>
                  <div className="text-[10px] text-green-300/60 font-bold uppercase">Worst Case</div>
                </div>
              </div>

              {countryData.avgWaitWeeks && (
                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-[10px] text-green-300/50 font-bold uppercase mb-1">Typical Total Wait</div>
                    <div className="text-xs font-black text-white">{countryData.avgWaitWeeks}</div>
                  </div>
                  {countryData.peakMonths && (
                    <div>
                      <div className="text-[10px] text-green-300/50 font-bold uppercase mb-1">Peak Delay Months</div>
                      <div className="text-xs font-black text-amber-300">{countryData.peakMonths}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Approval stats */}
            {countryData.successStats && (
              <div className="bg-gradient-to-br from-slate-900 to-[#004d2c] rounded-3xl p-8 text-white">
                <h2 className="text-lg font-black text-white mb-6 flex items-center gap-3">
                  <TrendingUp size={20} className="text-amber-400" />
                  Real Approval Statistics — {countryData.name} Visa 2025
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-2xl font-black text-amber-400">{countryData.successStats.avgProcessingDays}d</div>
                    <div className="text-xs text-green-300/60 font-bold uppercase mt-1">Avg Processing</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-2xl font-black text-green-400">{countryData.successStats.approvalRate}</div>
                    <div className="text-xs text-green-300/60 font-bold uppercase mt-1">Approval Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-2xl font-black text-red-300">{countryData.successStats.refusalRate}</div>
                    <div className="text-xs text-green-300/60 font-bold uppercase mt-1">Refusal Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 col-span-2">
                    <div className="text-sm font-black text-amber-300">{countryData.successStats.peakDelay}</div>
                    <div className="text-xs text-green-300/60 font-bold uppercase mt-1">Peak Season Delay</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-sm font-black text-green-300">{countryData.successStats.fastestEver}</div>
                    <div className="text-xs text-green-300/60 font-bold uppercase mt-1">Fastest Recorded</div>
                  </div>
                </div>
              </div>
            )}

            {/* Required Documents */}
            {countryData.requiredDocuments?.length > 0 && (
              <div>
                <h2 className="text-2xl font-black text-[#004d2c] mb-6 flex items-center gap-3">
                  <FileText size={22} className="text-[#005a31]" />
                  Required Documents — {countryData.name} {VISA_TYPE_LABELS[activeType]?.label} Checklist
                </h2>
                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6">
                  <p className="text-xs text-slate-500 font-semibold mb-4 uppercase tracking-wider">
                    ✅ Complete all items before submitting your application
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {countryData.requiredDocuments.map((doc, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white border border-slate-100 rounded-xl p-3">
                        <div className="w-5 h-5 rounded-md border-2 border-[#005a31] shrink-0 mt-0.5 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-sm bg-[#005a31]" />
                        </div>
                        <span className="text-xs text-slate-700 font-medium leading-relaxed">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Notes */}
            <div>
              <h2 className="text-2xl font-black text-[#004d2c] mb-6 flex items-center gap-3">
                <Info size={22} className="text-amber-500" />
                What You Must Know
              </h2>
              <div className="space-y-3">
                {(countryData.notes || []).map((note, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 size={18} className="text-[#005a31] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium leading-relaxed">{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delay Reasons */}
            <div>
              <h2 className="text-2xl font-black text-[#004d2c] mb-6 flex items-center gap-3">
                <AlertTriangle size={22} className="text-red-500" />
                Why Your Visa Might Be Delayed
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {(countryData.delayReasons || []).map((reason, i) => (
                  <div key={i} className="flex items-start gap-3 p-5 bg-red-50 border border-red-100 rounded-2xl">
                    <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-red-900 font-medium leading-relaxed">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div>
              <h2 className="text-2xl font-black text-[#004d2c] mb-6 flex items-center gap-3">
                <Zap size={22} className="text-amber-500" />
                Pro Tips to Speed Up Your Visa
              </h2>
              <div className="space-y-3">
                {(countryData.tips || []).map((tip, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-amber-50 border border-amber-100 rounded-2xl">
                    <span className="text-amber-600 font-black text-sm shrink-0 w-6 text-center">{i + 1}.</span>
                    <span className="text-sm text-amber-900 font-medium leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            {countryData.faq?.length > 0 && (
              <div>
                <h2 className="text-2xl font-black text-[#004d2c] mb-6 flex items-center gap-3">
                  <Info size={22} className="text-blue-500" />
                  Frequently Asked Questions — {nationalityName} {countryData.name} Visa
                </h2>
                <div className="space-y-4">
                  {countryData.faq.map((item, i) => (
                    <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
                      <div className="flex items-start gap-4 p-5 bg-slate-50">
                        <span className="text-xs font-black text-[#005a31] bg-[#005a31]/10 rounded-lg px-2 py-1 shrink-0">
                          Q{i + 1}
                        </span>
                        <h3 className="text-sm font-black text-slate-800 leading-snug">
                          {typeof item.q === "function" ? item.q(nationalityName) : item.q}
                        </h3>
                      </div>
                      <div className="px-5 py-4 bg-white">
                        <p className="text-sm text-slate-600 font-medium leading-relaxed">
                          {typeof item.a === "function" ? item.a(nationalityName) : item.a}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SEO Article */}
            <div className="border-t border-slate-100 pt-10">
              <h2 className="text-2xl font-black text-[#004d2c] mb-4">
                {nationalityName} to {countryData.name} {VISA_TYPE_LABELS[activeType]?.label}: Complete Guide 2025
              </h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  For <strong>{nationalityName}</strong> passport holders, obtaining a{" "}
                  <strong>{countryData.name} {VISA_TYPE_LABELS[activeType]?.label}</strong> ({activeRule?.label}) is
                  one of the most common travel documentation requirements. The current processing time is{" "}
                  <strong className="text-[#005a31]">{timeDisplay}</strong>, though this varies by season, embassy
                  workload, and individual circumstances.
                </p>
                {countryData.requiredDocuments && (
                  <p>
                    A complete application package is the single most important factor. The checklist above covers all{" "}
                    {countryData.requiredDocuments.length} required documents for the{" "}
                    <strong>{activeRule?.label}</strong>. Missing even one document can result in a delay of 5–10
                    additional business days or a straight refusal.
                  </p>
                )}
                {!isHours && (
                  <p>
                    The key to a smooth, on-time visa approval is applying well in advance and submitting a complete
                    application. In peak travel seasons — typically June through August and December through January —
                    processing times can increase by 30–50%.
                  </p>
                )}
                {countryData.successStats && (
                  <p>
                    The approval rate for{" "}
                    <strong>{nationalityName} applicants applying for a {countryData.name} visa</strong> stands at{" "}
                    <strong className="text-[#005a31]">{countryData.successStats.approvalRate}</strong>. The average
                    processing time is <strong>{countryData.successStats.avgProcessingDays} business days</strong>.
                  </p>
                )}
                {countryData.embassyAddress && (
                  <p>
                    Applications are submitted at{" "}
                    <strong>{countryData.embassyAddress}</strong>.
                    {countryData.embassyPhone && (
                      <> Contact the embassy at <strong>{countryData.embassyPhone}</strong>.</>
                    )}
                  </p>
                )}
              </div>
            </div>

            {/* Global Internal Links */}
            <div className="border-t border-slate-100 pt-10 mt-10">
              <h2 className="text-xl font-black text-[#004d2c] mb-5 flex items-center gap-3">
                <Globe size={20} className="text-[#005a31]" />
                Explore More Visa & Travel Services
              </h2>
              <div className="grid sm:grid-cols-3 gap-3">
                {GLOBAL_INTERNAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-[#004d2c] hover:border-[#004d2c] hover:text-white transition-all group"
                  >
                    <span className="text-sm font-bold text-slate-700 group-hover:text-white leading-snug">
                      {link.label}
                    </span>
                    <ChevronRight size={16} className="text-slate-400 group-hover:text-amber-400 shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ReverseCalculator
              min={activeRule?.min || 15}
              max={activeRule?.max || 21}
              unit={activeRule?.unit}
            />

            {/* Embassy contact */}
            {(countryData.embassyUrl || countryData.embassyPhone || countryData.embassyAddress) && (
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6">
                <h4 className="font-black text-sm text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Globe size={14} className="text-[#005a31]" />
                  Embassy & Application Info
                </h4>
                <div className="space-y-3">
                  {countryData.embassyAddress && (
                    <div className="text-xs text-slate-600 font-medium leading-relaxed bg-slate-50 rounded-xl p-3">
                      <div className="font-black text-slate-800 mb-1">📍 Address</div>
                      {countryData.embassyAddress}
                    </div>
                  )}
                  {countryData.embassyPhone && (
                    <a href={`tel:${countryData.embassyPhone}`} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-[#005a31]/8 transition-colors">
                      <Phone size={14} className="text-[#005a31] shrink-0" />
                      <span className="text-xs font-bold text-slate-700">{countryData.embassyPhone}</span>
                    </a>
                  )}
                  {countryData.embassyUrl && (
                    <a href={countryData.embassyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-[#005a31]/8 transition-colors">
                      <ExternalLink size={14} className="text-[#005a31] shrink-0" />
                      <span className="text-xs font-bold text-slate-700">Official Portal</span>
                    </a>
                  )}
                  {countryData.vfsUrl && countryData.vfsUrl !== countryData.embassyUrl && (
                    <a href={countryData.vfsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-[#005a31]/8 transition-colors">
                      <ExternalLink size={14} className="text-blue-500 shrink-0" />
                      <span className="text-xs font-bold text-slate-700">VFS / Application Centre</span>
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Expert CTA */}
            <div className="bg-slate-900 rounded-[2rem] p-7 text-white text-center">
              <div className="text-3xl mb-3">🧑‍💼</div>
              <h4 className="font-black text-lg mb-2">Need Help?</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-5">
                Our visa experts handle your entire {countryData.name} application from start to finish.
              </p>
              <a
                href="https://wa.me/8801631312524"
                className="block w-full py-4 bg-amber-400 text-[#004d2c] font-black rounded-xl hover:bg-white transition-all text-sm"
              >
                Talk to an Expert →
              </a>
            </div>

            {/* Other visa types */}
            {RELATED.length > 0 && (
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6">
                <h4 className="font-black text-sm text-slate-800 uppercase tracking-wider mb-4">
                  Other Visa Types for {countryData.name}
                </h4>
                <div className="space-y-3">
                  {RELATED.map(([k, v]) => (
                    // ✅ slug-based link — baseSlug-${k} format
                    <Link
                      key={k}
                      href={`/travel-resources/visa-processing-time-tracker/${baseSlug}-${k}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#005a31]/8 border border-transparent hover:border-[#005a31]/20 transition-all"
                    >
                      <div>
                        <div className="text-xs font-black text-slate-800">{VISA_TYPE_LABELS[k]?.label}</div>
                        <div className="text-[10px] text-slate-400">
                          {v.min}–{v.max} {v.unit === "hours" ? "hours" : "business days"}
                        </div>
                      </div>
                      <ChevronRight size={14} className="text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Quick tips */}
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <h4 className="font-black text-sm text-amber-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Zap size={14} className="text-amber-600" />
                Quick Application Tips
              </h4>
              <div className="space-y-2">
                {[
                  `Apply ${isHours ? "at least 3 days" : "6–8 weeks"} before travel`,
                  "Use the calculator to find your ideal apply date",
                  "Organize documents before starting the form",
                  "Double-check all spellings match your passport exactly",
                  "Keep copies of every document submitted",
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-amber-600 font-black text-xs mt-0.5">→</span>
                    <span className="text-xs text-amber-800 font-medium leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related pages */}
            {countryData.relatedPages?.length > 0 && (
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6">
                <h4 className="font-black text-sm text-slate-800 uppercase tracking-wider mb-4">Related Pages</h4>
                <div className="space-y-2">
                  {countryData.relatedPages.map((page, i) => (
                    <Link
                      key={i}
                      href={page.href}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#005a31]/8 transition-colors"
                    >
                      <span className="text-xs font-bold text-slate-700">{page.label}</span>
                      <ChevronRight size={12} className="text-slate-400 shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Back CTA */}
      <section className="bg-[#005a31] py-14 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-black text-white mb-3">Check Another Country's Processing Time</h2>
          <p className="text-green-200/70 font-medium mb-8 text-sm">
            195+ countries covered — E-Visa, Sticker, Transit, and long-stay visas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/travel-resources/visa-processing-time-tracker"
              className="inline-flex items-center gap-3 bg-[#ffcc00] text-[#004d2c] px-10 py-5 rounded-2xl font-black hover:bg-white transition-all shadow-xl"
            >
              <Timer size={19} /> Back to Visa Tracker
            </Link>
            <Link
              href="/visa/visa-guide"
              className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-5 rounded-2xl font-bold hover:bg-white/20 transition text-sm"
            >
              Full Visa Guide →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}