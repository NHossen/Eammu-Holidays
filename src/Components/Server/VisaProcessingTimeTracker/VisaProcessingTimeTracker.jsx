// /app/travel-resources/visa-processing-time-tracker/[slug]/_client.jsx
// ── NO "use client" at the top — this is now a SERVER COMPONENT ──────────
// Interactive islands are split into separate tiny client components below.

import Link from "next/link";
import {
  Clock, AlertCircle, CheckCircle2, ChevronRight, ArrowLeft,
  Calendar, Timer, Zap, Info, TrendingUp, FileText,
  AlertTriangle, Globe, Phone, ExternalLink, ChevronDown
} from "lucide-react";
import COUNTRIES from "@/app/data/countries.json";
import { VisaTypeSwitcher } from "@/Components/Client/VisaProcessingSlugPage/VisaTypeSwitcher/VisaTypeSwitcher";
import { ReverseCalculator } from "@/Components/Client/VisaProcessingSlugPage/ReverseCalculator/ReverseCalculator";


// ── FULL VISA RULES (including Transit) ───────────────────────────────────
// ── FULL VISA RULES (including Transit) ───────────────────────────────────
// faq items use arrow functions: q: (nat) => `...${nat}...`
// Render with: typeof item.q === "function" ? item.q(nationalityName) : item.q

const VISA_RULES = {
  canada: {
    name: "Canada", flag: "🇨🇦",
    types: {
      "e-visa":           { min:2,  max:4,   label:"eTA (Electronic Travel Authorization)" },
      "sticker":          { min:15, max:21,  label:"Temporary Resident Visa (TRV)" },
      "sticker-extended": { min:45, max:60,  label:"TRV (Complex / Administrative Processing)" },
      "transit":          { min:6,  max:24,  unit:"hours", label:"Canada Transit Visa" },
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
      { label: "Canada Student Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada?type=sticker-extended" },
      { label: "USA Visitor Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-states?type=sticker" },
      { label: "UK Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom?type=sticker" },
      { label: "Schengen Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen?type=sticker" },
      { label: "Australia Visitor Visa Timeline", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-australia?type=sticker" },
    ],
  },

  "united-states": {
    name: "United States", flag: "🇺🇸",
    types: {
      "e-visa":           { min:3,  max:5,   label:"ESTA (Visa Waiver Program)" },
      "sticker":          { min:21, max:60,  label:"B1/B2 Tourist/Business Visa" },
      "sticker-extended": { min:60, max:180, label:"Administrative Processing (221g)" },
      "transit":          { min:6,  max:24,  unit:"hours", label:"C-1 Transit Visa" },
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
      { label: "Canada TRV from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada?type=sticker" },
      { label: "UK Visitor Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom?type=sticker" },
      { label: "Schengen Visa Timeline 2025", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen?type=sticker" },
      { label: "Australia Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-australia?type=sticker" },
      { label: "US Transit (C-1) Visa Guide", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-states?type=transit" },
    ],
  },

  "united-kingdom": {
    name: "United Kingdom", flag: "🇬🇧",
    types: {
      "e-visa":           { min:3,  max:5,  label:"eVisa (UK digital visa)" },
      "sticker":          { min:15, max:21, label:"Standard Visitor Visa" },
      "sticker-extended": { min:30, max:60, label:"Priority / Complex Case" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Direct Airside Transit Visa (DATV)" },
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
      "DATV (Direct Airside Transit Visa) required for Bangladeshi, Pakistani, Ghanaian and several other nationalities even for short UK layovers",
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
        a: (nat) => `Yes. ${nat} passport holders require a Direct Airside Transit Visa (DATV) even for short layovers at UK airports (Heathrow, Gatwick, Manchester, etc.). The DATV allows transit through the international zone without entering the UK. Processing takes 6–24 hours.`,
      },
      {
        q: () => `What changed with the UK eVisa in 2024?`,
        a: () => `From 2024, the UK moved to a fully digital eVisa system. Physical vignette stickers in passports have been phased out. Approved applicants receive a digital status linked to their UKVI online account, which they must show to airlines and border control.`,
      },
      {
        q: (nat) => `How much money should ${nat} applicants show in their bank account for a UK visa?`,
        a: () => `While there is no official minimum, UK visa officers typically expect sufficient funds to cover accommodation, meals, transport, and activities for your entire trip duration. As a guideline, £100–£150 per day of stay is a commonly cited benchmark. Consistent bank balance history over 6 months is more important than a sudden large deposit.`,
      },
      {
        q: () => `Can I appeal a UK visitor visa refusal?`,
        a: () => `For standard visitor visas, there is no right of appeal. However, you can request an Administrative Review (AR) within 28 days if you believe a caseworker made an error. Alternatively, you can reapply with additional supporting documentation.`,
      },
    ],
    relatedPages: [
      { label: "US B1/B2 Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-states?type=sticker" },
      { label: "Canada TRV Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada?type=sticker" },
      { label: "Schengen Visa 2025 Guide", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen?type=sticker" },
      { label: "UK Transit Visa (DATV)", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom?type=transit" },
      { label: "Australia Visitor Visa Timeline", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-australia?type=sticker" },
    ],
  },

  schengen: {
    name: "Schengen Area", flag: "🇪🇺",
    types: {
      "e-visa":           { min:5,  max:10, label:"ETIAS (From 2025)" },
      "sticker":          { min:15, max:30, label:"Schengen Short-Stay Visa (C Visa)" },
      "sticker-extended": { min:45, max:90, label:"Complex Case / Document Request" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Airport Transit Visa (ATV)" },
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
      "Confirmed round-trip flight bookings (cancellable for application purposes)",
      "Hotel reservations or proof of accommodation for entire stay",
      "Detailed travel itinerary (day-by-day plan for the full trip duration)",
      "Bank statements for last 3–6 months (showing €50–100/day of stay minimum)",
      "Employment letter with salary, designation, and approved leave",
      "Income tax returns or business ownership documents",
      "Proof of ties to home country (property, family responsibilities, employment)",
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
      "Airport Transit Visa (ATV) required for specific nationalities transiting Schengen airports without entering the zone",
    ],
    delayReasons: [
      "Incomplete or inconsistent itinerary and hotel bookings",
      "Insufficient financial proof (min €50–100/day of stay recommended)",
      "Hotel bookings not in applicant's name or non-refundable bookings suspicious",
      "Previous Schengen refusals significantly slow down new applications",
      "Missing travel insurance or insufficient coverage amount",
    ],
    tips: [
      "Apply 3–6 weeks in advance (no earlier than 6 months before travel)",
      "Book refundable hotels and flexible flights specifically for the application",
      "Show strong bank balance — ideally 3× the estimated trip cost",
      "A prior Schengen visa record significantly improves future approval chances",
      "ATV applicants must remain in the international zone — not allowed into Schengen territory",
    ],
    faq: [
      {
        q: (nat) => `Which Schengen country embassy should ${nat} nationals apply at?`,
        a: () => `You must apply at the embassy of the Schengen country where you will spend the most nights. If your nights are equally split, apply at the first country you will enter. France, Germany, Italy, Netherlands, and Spain all have embassies or VFS centers accessible from most countries.`,
      },
      {
        q: (nat) => `What is the minimum bank balance for a Schengen visa for ${nat} passport holders in 2025?`,
        a: () => `There is no official fixed amount, but a common benchmark is €50–100 per day of stay. For a 10-day trip, €500–1,000 minimum is advisable. More important than the exact figure is demonstrating consistent financial stability across 3–6 months of bank statements rather than a large sudden deposit.`,
      },
      {
        q: () => `Can I visit multiple Schengen countries on one visa?`,
        a: () => `Yes. A Schengen C visa (short-stay) allows entry to all 27 Schengen member states for up to 90 days within a 180-day period. The visa is issued based on your primary destination but is valid across the entire zone.`,
      },
      {
        q: (nat) => `Does a Schengen visa refusal affect future applications for ${nat} nationals?`,
        a: () => `All future Schengen applications require you to declare previous refusals. However, a refusal does not permanently bar future applications. Submitting a stronger application that directly addresses the refusal reason (most commonly insufficient financial proof or weak ties to home country) often results in approval on reapplication.`,
      },
      {
        q: () => `What is the ETIAS and does it replace the Schengen visa?`,
        a: (nat) => `ETIAS (European Travel Information and Authorisation System) is an online pre-travel authorization for nationalities who currently don't need a Schengen visa (e.g., US, UK, Australian passport holders). It does NOT replace the Schengen visa. ${nat} nationals who currently require a visa still need to submit a full Schengen visa application.`,
      },
    ],
    relatedPages: [
      { label: "Germany Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-germany?type=sticker" },
      { label: "France Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-france?type=sticker" },
      { label: "UK Visitor Visa Timeline", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom?type=sticker" },
      { label: "Canada TRV from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada?type=sticker" },
      { label: "Schengen Airport Transit Visa", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen?type=transit" },
    ],
  },

  australia: {
    name: "Australia", flag: "🇦🇺",
    types: {
      "e-visa":           { min:1,  max:3,   label:"ETA / eVisitor (Subclass 601/651)" },
      "sticker":          { min:20, max:35,  label:"Visitor Visa (Subclass 600)" },
      "sticker-extended": { min:60, max:120, label:"Complex Health/Character Check" },
      "transit":          { min:6,  max:24,  unit:"hours", label:"Transit Visa (Subclass 771)" },
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
      "Completed online application via ImmiAccount (no paper form for Subclass 600)",
      "Recent passport-size photographs meeting Australia's specifications",
      "Bank statements for last 6 months (personal and/or business)",
      "Evidence of funds to cover trip (AUD 5,000+ recommended for a 2-week trip)",
      "Employment letter confirming position, salary, and approved leave",
      "Income tax returns (last 2 years) or business registration documents",
      "Confirmed flight itinerary and hotel/accommodation bookings",
      "Genuine Temporary Entrant (GTE) statement (most critical document)",
      "Health insurance covering the full trip duration",
      "Ties to home country (property, family, employment obligations)",
      "Health examination results if required by the Department of Home Affairs",
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
      "ImmiAccount portal tracks real-time application status with document requests",
      "Health examination required for stays over 12 months or specific health conditions",
      "Character requirements apply — police clearance may be needed for some nationalities",
      "Subclass 771 Transit Visa required for some nationalities transiting Australian airports",
    ],
    delayReasons: [
      "Health examination results pending or referral to Medical Officer of Commonwealth",
      "Character assessment or police certificate requested",
      "High application volume from South and Southeast Asian nationalities",
      "Sponsor or host verification delays for visitor visa streams",
      "Genuine Temporary Entrant (GTE) concerns",
    ],
    tips: [
      "Submit complete health exam results upfront if medical is likely required",
      "The 600 visa can be applied for up to 12 months in advance of travel",
      "Keep ImmiAccount notifications active — document requests expire in 28 days",
      "A convincing GTE (Genuine Temporary Entrant) statement is the most critical document",
      "771 transit visa processing: apply at least 2 weeks before transit date",
    ],
    faq: [
      {
        q: (nat) => `What is the Australia Subclass 600 visa processing time for ${nat} nationals in 2025?`,
        a: (nat) => `The Australia Visitor Visa (Subclass 600) processing time for ${nat} applicants is typically 20–35 business days in 2025. Complex cases involving health or character checks can take 60–120 business days.`,
      },
      {
        q: () => `What is a Genuine Temporary Entrant (GTE) statement and why is it important?`,
        a: (nat) => `The GTE statement is a written statement explaining why you want to visit Australia and why you will return home afterward. It is the single most important document for Australian visitor visas from ${nat} applicants. A compelling GTE demonstrates strong ties to your home country — employment, family, property — and a clear, genuine purpose for visiting Australia.`,
      },
      {
        q: (nat) => `Do ${nat} nationals need health insurance for an Australian visitor visa?`,
        a: () => `Health insurance is not a mandatory requirement for the Subclass 600 visitor visa, but it is strongly recommended and can support your GTE. Australia has no reciprocal health care agreements with most countries, meaning all medical costs are out-of-pocket.`,
      },
      {
        q: () => `Can I extend my Australian visitor visa from inside Australia?`,
        a: () => `Yes, Subclass 600 visa holders can apply to extend their stay from within Australia before their current visa expires. However, extension is not guaranteed and requires strong justification and financial evidence.`,
      },
      {
        q: (nat) => `Do ${nat} passport holders need a transit visa for Australian airports?`,
        a: () => `Most nationalities can transit Australian international airports without a visa if they remain in the international transit area. However, some nationalities require a Subclass 771 Transit Visa. Check the Australian Department of Home Affairs website for your specific nationality.`,
      },
    ],
    relatedPages: [
      { label: "Canada Visitor Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada?type=sticker" },
      { label: "UK Standard Visitor Visa", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom?type=sticker" },
      { label: "Singapore Visit Visa Timeline", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-singapore?type=sticker" },
      { label: "Japan Tourist Visa Processing", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-japan?type=sticker" },
      { label: "Australia Transit Visa (Subclass 771)", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-australia?type=transit" },
    ],
  },

  "united-arab-emirates": {
    name: "United Arab Emirates", flag: "🇦🇪",
    types: {
      "e-visa":           { min:2,  max:4,  label:"UAE e-Visa (Tourist/Visit)" },
      "sticker":          { min:5,  max:10, label:"Visa on Arrival / Embassy Visa" },
      "sticker-extended": { min:15, max:30, label:"Complex / Employment Visa" },
      "transit":          { min:6,  max:24, unit:"hours", label:"UAE Transit Visa (96-hour)" },
    },
    embassyUrl: "https://icp.gov.ae/",
    embassyPhone: "+971-2-495-5555",
    embassyAddress: "UAE Embassy, Road 108, House 4, Baridhara, Dhaka 1212",
    vfsUrl: "https://icp.gov.ae/",
    approvalRate: "88%",
    avgWaitWeeks: "3–5 days",
    peakMonths: "Ramadan, Eid, December–January (Dubai Shopping Festival)",
    requiredDocuments: [
      "Valid passport (minimum 6 months validity from date of travel)",
      "Clear scanned copy of passport bio-data page",
      "Recent passport-size photograph (white background, 35mm × 45mm)",
      "Confirmed return flight ticket or travel itinerary",
      "Hotel booking confirmation or accommodation proof",
      "Bank statements for last 3 months (showing sufficient funds)",
      "Employment letter or business registration (for employment visa)",
      "Sponsor's Emirates ID copy (for visit visa sponsored by UAE resident)",
      "Travel insurance (recommended, not mandatory for tourist e-visa)",
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
      "No medical required for tourist visas under 90 days",
      "96-hour transit visa available for travelers connecting through Dubai or Abu Dhabi",
    ],
    delayReasons: [
      "Criminal record or previous overstay in any GCC country",
      "Name mismatch or inconsistency across passport and booking documents",
      "Expired or near-expiry passport (must have 6+ months validity)",
      "High application volume during Ramadan, Eid, and Dubai Shopping Festival",
      "Background check delays for certain nationalities",
    ],
    tips: [
      "Apply 3–5 days before travel for e-visa — processing is very fast",
      "Use Dubai Tourism official portal or established travel agents only",
      "Ensure passport photo meets UAE-specific background and size requirements",
      "96-hour transit visa can be extended to allow Dubai city access between flights",
      "Travel insurance is not mandatory for UAE but strongly recommended",
    ],
    faq: [
      {
        q: (nat) => `How long does a UAE tourist e-visa take for ${nat} nationals?`,
        a: (nat) => `UAE tourist e-visas for ${nat} nationals are typically processed within 48–96 hours (2–4 business days). During peak periods like Eid or the Dubai Shopping Festival, processing can take up to 5–7 days. We recommend applying at least 5–7 days before your travel date to be safe.`,
      },
      {
        q: (nat) => `Can ${nat} nationals get a UAE visa on arrival?`,
        a: (nat) => `Most ${nat} passport holders cannot get a UAE visa on arrival. You must apply for an e-visa through the ICP portal (icp.gov.ae), your airline (Emirates/Etihad offer integrated visa services), or a licensed travel agent before your departure. Check icp.gov.ae for your specific nationality's eligibility.`,
      },
      {
        q: () => `What is the UAE 96-hour transit visa and who needs it?`,
        a: (nat) => `The UAE 96-hour transit visa allows travelers to enter Dubai or Abu Dhabi for up to 96 hours while connecting to another destination. ${nat} nationals require this visa when their layover in the UAE exceeds the airside transit period. It includes city access and is available through airlines and registered agents.`,
      },
      {
        q: () => `What happens if I overstay my UAE visa?`,
        a: () => `Overstaying a UAE visa results in a fine of AED 100 per day, plus a one-time AED 100 administrative fee. Serious overstays can result in detention, deportation, and a long-term or permanent entry ban. Always ensure your visa validity aligns with your travel dates.`,
      },
      {
        q: () => `Is a UAE tourist visa extendable?`,
        a: () => `Yes, UAE tourist visas can typically be extended once for an additional 30 days. Extension must be applied for before the original visa expires, through the ICP portal or a licensed typing center in the UAE. Extensions are not guaranteed and are subject to approval.`,
      },
    ],
    relatedPages: [
      { label: "Saudi Arabia Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-saudi-arabia?type=sticker" },
      { label: "Singapore Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-singapore?type=sticker" },
      { label: "Malaysia Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-malaysia?type=sticker" },
      { label: "UAE Transit Visa (96-Hour)", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-arab-emirates?type=transit" },
      { label: "Schengen Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen?type=sticker" },
    ],
  },

  germany: {
    name: "Germany", flag: "🇩🇪",
    types: {
      "sticker":          { min:15, max:21, label:"National Visa / Schengen Visa" },
      "sticker-extended": { min:45, max:90, label:"Complex Case / Student Visa" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Airport Transit Visa (TATV)" },
    },
    embassyUrl: "https://www.germany-visa.org/",
    embassyPhone: "+880-2-5566-3500",
    embassyAddress: "Embassy of the Federal Republic of Germany, 178 Gulshan Avenue, Dhaka 1212",
    vfsUrl: "https://www.vfsglobal.com/germany/bangladesh/",
    approvalRate: "69%",
    avgWaitWeeks: "3–5 weeks",
    peakMonths: "May – September, October – November (university intakes)",
    requiredDocuments: [
      "Valid passport (at least 3 months validity beyond planned departure from Schengen zone)",
      "Completed German visa application form (signed and dated)",
      "Two recent biometric photographs",
      "APS Certificate (Academic Evaluation Centre) — required for Bangladeshi students",
      "University admission letter (for student visa)",
      "Proof of blocked account (Sperrkonto) showing €11,208/year (student visa)",
      "Travel health insurance with €30,000 coverage for tourist/short-stay visas",
      "Confirmed hotel bookings and flight itinerary (for tourist visas)",
      "Proof of accommodation in Germany (for student/long-stay visas)",
      "Bank statements for last 3 months and income tax returns",
      "Employment letter (for short-stay/business visas)",
      "Language proficiency proof (IELTS/TestDaF for many German university programs)",
    ],
    successStats: {
      avgProcessingDays: 20,
      approvalRate: "69%",
      refusalRate: "31%",
      peakDelay: "+14–21 business days for student visa in peak intake months",
      fastestEver: "12 business days",
    },
    notes: [
      "APS Certificate (Academic Evaluation Centre) required for Bangladeshi students",
      "Blocked account (Sperrkonto) with €11,208/year required for student visas",
      "Visa appointments at German embassies can be 4–8 weeks ahead — book early",
      "TATV (Temporary Airport Transit Visa) required for Bangladeshis transiting Frankfurt, Munich",
    ],
    delayReasons: [
      "APS or document authentication pending",
      "Blocked account not yet funded or certificate not received",
      "University enrollment proof not meeting German standards",
      "High application volume — German embassies in South Asia handle large numbers",
    ],
    tips: [
      "Start your blocked account process 6–8 weeks before application",
      "Book your appointment as soon as you have your university acceptance",
      "For TATV: apply 3–4 weeks before your German transit to allow processing",
      "German language skills (even basic) significantly strengthen non-language course applications",
    ],
    faq: [
      {
        q: (nat) => `What is the APS certificate and why do ${nat} students need it for a Germany visa?`,
        a: (nat) => `The APS (Academic Evaluation Centre) certificate verifies the authenticity of ${nat} educational credentials for German universities. It is mandatory for most ${nat} student visa applicants. The APS process involves submitting educational documents and an interview, and usually takes 4–8 weeks, so it should be started as early as possible.`,
      },
      {
        q: () => `What is a Sperrkonto (blocked account) and how much do I need for a Germany student visa?`,
        a: () => `A Sperrkonto is a German blocked bank account that proves you have sufficient funds to support yourself in Germany. For 2025, you need to deposit €11,208 per year (approximately €934/month). The funds are released monthly once you are in Germany. Deutsche Bank, Fintiba, and Expatrio are popular providers.`,
      },
      {
        q: (nat) => `How long does a Germany student visa take for ${nat} nationals?`,
        a: (nat) => `Germany student visa processing for ${nat} applicants typically takes 45–90 business days in 2025, particularly due to APS certificate requirements and high demand during university intake periods (October–November and March–April). Apply at least 3–4 months before your course start date.`,
      },
      {
        q: (nat) => `Do ${nat} nationals need a transit visa for Frankfurt or Munich airports?`,
        a: (nat) => `Yes. ${nat} passport holders require a Temporary Airport Transit Visa (TATV) when transiting through German airports including Frankfurt and Munich, even if they do not leave the international transit zone. The TATV is processed within 6–24 hours and should be applied for at least 3–4 weeks in advance.`,
      },
      {
        q: () => `Can I convert a German Schengen visa to a long-stay national visa?`,
        a: () => `No. A Schengen short-stay (C visa) cannot be converted to a German national long-stay (D visa) from within Germany. If you need to stay longer or study/work in Germany, you must apply for the appropriate national visa from your home country before departure.`,
      },
    ],
    relatedPages: [
      { label: "Schengen Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen?type=sticker" },
      { label: "France Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-france?type=sticker" },
      { label: "UK Student Visa Processing", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom?type=sticker-extended" },
      { label: "Germany Airport Transit Visa", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-germany?type=transit" },
      { label: "Canada Student Visa Timeline", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada?type=sticker-extended" },
    ],
  },

  france: {
    name: "France", flag: "🇫🇷",
    types: {
      "e-visa":           { min:5,  max:10, label:"ETIAS (from 2025)" },
      "sticker":          { min:15, max:30, label:"Schengen C Visa / Long-Stay D Visa" },
      "sticker-extended": { min:45, max:90, label:"Complex Case" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Airport Transit Visa (ATV)" },
    },
    embassyUrl: "https://france-visas.gouv.fr/",
    embassyPhone: "+880-2-5566-2620",
    embassyAddress: "Embassy of France, Road 108, House 18, Gulshan 2, Dhaka 1212",
    vfsUrl: "https://www.vfsglobal.com/france/bangladesh/",
    approvalRate: "70%",
    avgWaitWeeks: "3–6 weeks",
    peakMonths: "May – August, December",
    requiredDocuments: [
      "Valid passport (3 months validity beyond planned departure from Schengen zone)",
      "Completed and signed France visa application form",
      "Two biometric photographs (35mm × 45mm, white background)",
      "Travel insurance with minimum €30,000 coverage",
      "Confirmed flight bookings (round trip, cancellable)",
      "Hotel reservations for full stay (cancellable)",
      "Detailed day-by-day itinerary",
      "Bank statements for last 3–6 months",
      "Employment letter with salary, leave approval, and company letterhead",
      "Campus France pre-registration confirmation (for student visa applicants)",
      "Proof of accommodation in France (for student/long-stay)",
      "Income tax returns (last 2 years)",
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
      "Long-stay D visa (over 3 months) requires OFII registration on arrival",
      "VFS Global handles biometrics for French visa applications in most countries",
      "ATV required for Bangladeshi, Pakistani, Nigerian nationals transiting French airports",
    ],
    delayReasons: [
      "Campus France evaluation pending",
      "Insufficient financial proof per day of stay",
      "Travel insurance not meeting minimum €30,000 coverage",
      "Hotel bookings not confirmed or inconsistent with itinerary",
    ],
    tips: [
      "Complete Campus France pre-registration at least 6 weeks before applying",
      "Book refundable hotels for application — switch to actual booking after visa approval",
      "Show strong bank balance and employment evidence for tourist visas",
      "ATV applicants must stay in the international transit zone — no entry to France",
    ],
    faq: [
      {
        q: (nat) => `What is Campus France and why do ${nat} students need it for a France visa?`,
        a: (nat) => `Campus France is the French government's official agency for promoting French higher education. ${nat} students applying for a France student visa must complete a Campus France pre-registration process, which includes submitting academic documents and attending an interview at the local Campus France office. This process takes 4–8 weeks and must be completed before applying for the visa.`,
      },
      {
        q: (nat) => `What is the France visa processing time for ${nat} nationals in 2025?`,
        a: (nat) => `Standard France Schengen visa processing for ${nat} applicants takes 15–30 business days in 2025. For student and long-stay visas, complex cases can take 45–90 business days. Summer months (June–August) add a further 10–15 business days due to high global application volume.`,
      },
      {
        q: (nat) => `Do ${nat} nationals need an Airport Transit Visa (ATV) for French airports?`,
        a: (nat) => `${nat} passport holders should verify current ATV requirements for French airports (including Paris CDG) with the French Embassy, as requirements vary by nationality. If required, the ATV must be obtained in advance and is typically processed within 6–24 hours.`,
      },
      {
        q: (nat) => `What financial evidence is needed for a France Schengen visa for ${nat} applicants?`,
        a: () => `France visa officers expect applicants to demonstrate €50–100 per day of stay in their bank account. For a 10-day trip, €500–1,000 minimum is advisable. Three to six months of consistent bank statements, employment proof, and tax returns together form the strongest financial evidence package.`,
      },
      {
        q: () => `Can I travel to other Schengen countries on a French Schengen visa?`,
        a: () => `Yes. A France-issued Schengen C visa allows travel to all 27 Schengen member states for up to 90 days in any 180-day period. The visa is tied to France as your main destination but permits travel throughout the entire Schengen zone.`,
      },
    ],
    relatedPages: [
      { label: "Schengen Visa Complete Guide", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen?type=sticker" },
      { label: "Germany Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-germany?type=sticker" },
      { label: "UK Visitor Visa Timeline", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom?type=sticker" },
      { label: "France Airport Transit Visa", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-france?type=transit" },
      { label: "Canada TRV Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada?type=sticker" },
    ],
  },

  "saudi-arabia": {
    name: "Saudi Arabia", flag: "🇸🇦",
    types: {
      "e-visa":           { min:2,  max:4,  label:"Saudi e-Visa (Tourist)" },
      "sticker":          { min:10, max:21, label:"Saudi Sticker Visa" },
      "sticker-extended": { min:30, max:60, label:"Work Visa / Iqama" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Saudi Transit Visa" },
    },
    embassyUrl: "https://visa.mofa.gov.sa/",
    embassyPhone: "+880-2-5566-0100",
    embassyAddress: "Royal Embassy of Saudi Arabia, Road 106, House 5, Gulshan, Dhaka 1212",
    vfsUrl: "https://visa.mofa.gov.sa/",
    approvalRate: "82%",
    avgWaitWeeks: "2–4 weeks",
    peakMonths: "Ramadan, Hajj season (Dhul Hijjah), December",
    requiredDocuments: [
      "Valid passport (minimum 6 months validity)",
      "Completed Saudi visa application (via Enjazit or Tawakkalna portals)",
      "Recent passport-size photograph (white background, Saudi specifications)",
      "Confirmed return flight ticket",
      "Hotel booking confirmation",
      "Bank statements for last 3 months",
      "Employment letter (for visit/tourist visa)",
      "Medical fitness certificate from MOH-approved center (for employment visas)",
      "Attested educational certificates (for employment visas — degree attestation chain)",
      "Sponsor/employer's Saudi Iqama copy (for work and visit visas)",
      "Police clearance certificate (for employment visas)",
      "For Umrah/Hajj: Umrah/Hajj visa application through authorized agent",
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
      "Women under 21 require guardian's consent documentation",
      "Iqama (residence permit) required for work visa holders within 90 days of arrival",
      "Medical examination at MOH-approved centers required for employment visas",
    ],
    delayReasons: [
      "Ministry of Foreign Affairs manual review for certain nationalities",
      "Sponsor delays for employment or family visit visas",
      "Medical fitness certificate not from approved Saudi MOH center",
      "Attested educational certificates not meeting Saudi standards",
    ],
    tips: [
      "Use Tawakkalna or Enjazit official portals only for visa applications",
      "Ensure all documents are attested through proper channels (MFA, Saudi Embassy)",
      "Medical examination must be done at MOH-approved center in your home country",
      "Transit visa applicants should confirm their transit airport and layover duration",
    ],
    faq: [
      {
        q: (nat) => `Can ${nat} nationals get a Saudi Arabia tourist e-visa?`,
        a: (nat) => `${nat} nationals should check eligibility on the official Saudi Tourism portal or Tawakkalna, as the e-visa is available for 50+ nationalities. If eligible, processing takes 2–4 business days and allows a stay of up to 90 days, valid for one year with multiple entries.`,
      },
      {
        q: (nat) => `What is the Saudi Arabia employment visa process for ${nat} workers?`,
        a: () => `The Saudi employment visa process involves: employer/sponsor obtaining visa approval from the Ministry of Human Resources, applicant completing medical fitness examination at an MOH-approved center, document attestation (degree, police clearance), and visa stamping at the Saudi Embassy. Total processing takes 30–60 business days.`,
      },
      {
        q: () => `What is an Iqama and when must it be obtained?`,
        a: () => `An Iqama is the Saudi Arabia residence permit required for all foreign workers. It must be obtained within 90 days of arriving in Saudi Arabia on a work visa. The Iqama is issued by the employer/sponsor through the Absher platform and is linked to your passport and employment contract.`,
      },
      {
        q: () => `What document attestation is required for a Saudi Arabia work visa?`,
        a: () => `Educational and professional certificates must go through a specific attestation chain: notarization → Ministry of Foreign Affairs (MFA) in your home country → Saudi Embassy. Some documents may also require Saudi Ministry of Foreign Affairs (MOFA) authentication after arrival.`,
      },
      {
        q: (nat) => `How long does a Saudi Arabia visit visa take for ${nat} applicants?`,
        a: (nat) => `Saudi Arabia visit visas for ${nat} applicants (sponsored by a Saudi resident) typically take 10–21 business days. The processing timeline depends heavily on the speed of sponsor action on the Absher/Enjazit platform and any background checks.`,
      },
    ],
    relatedPages: [
      { label: "UAE e-Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-arab-emirates?type=e-visa" },
      { label: "Qatar Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-qatar?type=sticker" },
      { label: "Oman Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-oman?type=sticker" },
      { label: "Bahrain Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-bahrain?type=sticker" },
      { label: "Saudi Arabia Work Visa Guide", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-saudi-arabia?type=sticker-extended" },
    ],
  },

  singapore: {
    name: "Singapore", flag: "🇸🇬",
    types: {
      "e-visa":           { min:3,  max:5,  label:"Singapore e-Visa (SAVE)" },
      "sticker":          { min:7,  max:14, label:"Singapore Visit Visa" },
      "sticker-extended": { min:21, max:45, label:"Employment Pass / S-Pass" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Transit Without Visa / Transit Visa" },
    },
    embassyUrl: "https://www.ica.gov.sg/",
    embassyPhone: "+65-6391-6100",
    embassyAddress: "Singapore High Commission, Plot 2, Road 22, Baridhara, Dhaka 1212",
    vfsUrl: "https://www.vfsglobal.com/singapore/bangladesh/",
    approvalRate: "76%",
    avgWaitWeeks: "1–3 weeks",
    peakMonths: "June – August, December",
    requiredDocuments: [
      "Valid passport (6 months validity from travel dates)",
      "Completed Singapore visa application form (ICA e-Service or through accredited agent)",
      "Recent passport photograph (35mm × 45mm, white background)",
      "Bank statements for last 3 months",
      "Employment letter with designation, salary, and approved leave",
      "Income tax documents (last year)",
      "Confirmed hotel/accommodation booking in Singapore",
      "Round-trip flight itinerary",
      "Invitation letter from Singapore host (if applicable)",
      "Travel insurance (recommended)",
      "Previous Singapore or international visa copies",
    ],
    successStats: {
      avgProcessingDays: 10,
      approvalRate: "76%",
      refusalRate: "24%",
      peakDelay: "+5–7 business days June–August",
      fastestEver: "5 business days",
    },
    notes: [
      "Most visa applications submitted through ICA (Immigration and Checkpoints Authority)",
      "Singapore Employment Pass requires monthly salary above SGD 5,000",
      "In-Principle Approval (IPA) letter issued first, then physical pass on arrival",
      "Many nationalities can transit Singapore without a visa for short layovers",
    ],
    delayReasons: [
      "Salary assessment for EP/S-Pass below Fair Consideration Framework guidelines",
      "Previous immigration violations in Singapore or ASEAN countries",
      "Incomplete company sponsorship documentation for employment visas",
      "Background check delays for certain nationalities",
    ],
    tips: [
      "Student visa holders must complete STP (Student's Pass) formalities within 30 days",
      "Employment Pass applications: submit all educational credentials upfront",
      "Check Singapore TVWP (Transit Without Visa) eligibility before assuming you need a visa",
      "Keep ICA online portal notifications on for document requests",
    ],
    faq: [
      {
        q: (nat) => `What is the Singapore visa processing time for ${nat} nationals in 2025?`,
        a: (nat) => `Singapore visit visa processing for ${nat} passport holders typically takes 7–14 business days in 2025. Applications are processed by ICA and submitted through VFS Global or accredited travel agents.`,
      },
      {
        q: (nat) => `Can ${nat} nationals transit Singapore without a visa?`,
        a: (nat) => `${nat} nationals should check the ICA website for current Transit Without Visa (TWOV) eligibility. Generally, holders of valid US, UK, Australian, Canadian, or Schengen visas may qualify for TWOV at Changi Airport. Otherwise, a Singapore transit visa is required.`,
      },
      {
        q: () => `What is the Singapore Employment Pass and who qualifies?`,
        a: () => `The Singapore Employment Pass (EP) is for foreign professionals earning at least SGD 5,000/month (higher for financial services roles). It requires a job offer from a Singapore employer, who applies on the employee's behalf through the Ministry of Manpower's EP Online portal. Processing takes 21–45 business days.`,
      },
      {
        q: (nat) => `How do ${nat} applicants apply for a Singapore visa?`,
        a: () => `Most applicants apply through accredited Singapore visa agents or VFS Global. ICA does not accept direct applications from all countries. After submitting documents to the agent, they submit to ICA on your behalf. The decision is communicated back through the same channel.`,
      },
      {
        q: (nat) => `What should ${nat} applicants do if their Singapore visa is refused?`,
        a: () => `Singapore does not provide reasons for visa refusals. You can reapply after 3–6 months with a stronger application — particularly stronger financial evidence, clearer travel purpose, and proof of ties to your home country. Prior Singapore visa records or endorsements from Singapore employers significantly improve approval chances.`,
      },
    ],
    relatedPages: [
      { label: "Malaysia Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-malaysia?type=sticker" },
      { label: "Japan Tourist Visa Timeline", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-japan?type=sticker" },
      { label: "Thailand Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-thailand?type=sticker" },
      { label: "Australia Visitor Visa Guide", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-australia?type=sticker" },
      { label: "UAE e-Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-arab-emirates?type=e-visa" },
    ],
  },

  japan: {
    name: "Japan", flag: "🇯🇵",
    types: {
      "sticker":          { min:5,  max:7,  label:"Japan Tourist Visa" },
      "sticker-extended": { min:21, max:45, label:"Japan Long-Stay / Work Visa" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Japan Shore Pass / Transit" },
    },
    embassyUrl: "https://www.mofa.go.jp/j_info/visit/visa/",
    embassyPhone: "+880-2-5882-0000",
    embassyAddress: "Embassy of Japan, Plot 5 & 7, Madani Avenue, Baridhara, Dhaka 1212",
    vfsUrl: "https://www.vfsglobal.com/japan/bangladesh/",
    approvalRate: "79%",
    avgWaitWeeks: "1–2 weeks",
    peakMonths: "March – May (Cherry Blossom), October – November (Autumn)",
    requiredDocuments: [
      "Valid passport (must be valid for the entire duration of stay in Japan)",
      "Completed Japan visa application form (available at embassy or VFS Global)",
      "One recent passport-size photograph (45mm × 45mm, white background, no glasses)",
      "Bank statements for last 3–6 months (showing stable balance, minimum ¥100,000–¥200,000 equivalent)",
      "Employment letter with designation, salary, leave approval, and company contact",
      "Income tax certificate (last year)",
      "Day-by-day detailed travel itinerary (required — Japan embassies verify itinerary carefully)",
      "Hotel/accommodation bookings for entire stay",
      "Round-trip flight reservation",
      "Proof of relationship if visiting family or friends (invitation letter and host's residence card copy)",
      "Previous international visa copies (US, UK, Schengen significantly boost approval chances)",
    ],
    successStats: {
      avgProcessingDays: 6,
      approvalRate: "79%",
      refusalRate: "21%",
      peakDelay: "+5 business days March–May, October–November",
      fastestEver: "3 business days",
    },
    notes: [
      "Japanese embassy does not do interviews — application submitted through embassy or agent",
      "All Japan visas are sticker visas — no e-visa system for most nationalities",
      "Financial documents must be translated into Japanese or English",
      "Japan transit (shore pass or transit without visa) available for short layovers at specified airports",
    ],
    delayReasons: [
      "Insufficient financial documentation or inconsistent bank statements",
      "Travel history raises concerns about overstay risk",
      "Incomplete itinerary or hotel bookings",
      "Previous Japan visa refusal significantly impacts new applications",
    ],
    tips: [
      "Include a highly detailed day-by-day itinerary — Japan embassies love specifics",
      "Book hotels before applying — cancellable bookings are acceptable",
      "Apply 3–4 weeks in advance; peak season adds 3–5 business days",
      "Strong bank statement and employer letter are the two most critical documents",
    ],
    faq: [
      {
        q: (nat) => `What is the Japan tourist visa processing time for ${nat} nationals in 2025?`,
        a: (nat) => `Japan tourist visa processing for ${nat} applicants takes 5–7 business days in 2025 under normal conditions. During peak travel seasons (cherry blossom: March–May, autumn: October–November), processing can extend to 10–14 business days. We recommend applying 3–4 weeks before your travel date.`,
      },
      {
        q: (nat) => `Does Japan have an e-visa for ${nat} nationals?`,
        a: (nat) => `As of 2025, Japan does not offer an e-visa for most nationalities including ${nat} passport holders. All Japan visa applications require physical submission of documents at the Embassy of Japan or through an authorized visa agent. The visa is a physical sticker placed in your passport.`,
      },
      {
        q: () => `Why is a detailed itinerary important for a Japan visa application?`,
        a: () => `Japan's embassy is known for scrutinizing itineraries closely. A day-by-day plan including specific cities, tourist attractions, transportation between cities, and accommodation for every night demonstrates that your trip is well-planned and genuine. Vague or incomplete itineraries are a leading cause of Japan visa delays and refusals.`,
      },
      {
        q: (nat) => `What financial proof is needed for a Japan tourist visa from ${nat}?`,
        a: () => `Japan embassy expects bank statements showing a stable balance equivalent to ¥100,000–¥200,000 minimum for a short trip. Six months of consistent statement history — showing regular income, not sudden deposits — is the gold standard. Salary slips, tax certificates, and fixed deposit documents strengthen the financial profile.`,
      },
      {
        q: (nat) => `Can a previous Japan visa refusal prevent future applications for ${nat} nationals?`,
        a: () => `A prior refusal does not permanently bar you from applying again. However, you must declare the refusal on your new application. Addressing the specific reason for the refusal with stronger evidence — particularly around financial stability and ties to home country — and demonstrating additional travel history (US, UK, Schengen visas) significantly improves approval odds on reapplication.`,
      },
    ],
    relatedPages: [
      { label: "South Korea Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-south-korea?type=sticker" },
      { label: "Singapore Visit Visa Timeline", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-singapore?type=sticker" },
      { label: "Thailand Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-thailand?type=sticker" },
      { label: "Australia Visitor Visa Guide", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-australia?type=sticker" },
      { label: "Japan Long-Stay / Work Visa", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-japan?type=sticker-extended" },
    ],
  },
};

// ── GENERIC FALLBACK ───────────────────────────────────────────────────────
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
    embassyUrl: null,
    embassyPhone: null,
    embassyAddress: null,
    vfsUrl: null,
    approvalRate: null,
    avgWaitWeeks: null,
    peakMonths: null,
    requiredDocuments: [
      "Valid passport (6+ months validity beyond intended stay)",
      "Completed visa application form",
      "Recent passport-size photographs",
      "Bank statements for last 3–6 months",
      "Employment letter with salary and leave approval",
      "Flight itinerary and hotel bookings",
      "Travel insurance",
      "Income tax returns (last 2 years)",
    ],
    successStats: null,
    notes: [
      "Processing times are estimates based on typical embassy timelines",
      "Always verify with the official embassy or consulate of the destination country",
      "Apply well in advance — at least 6–8 weeks before travel for sticker visas",
      "Transit visa (6–24 hours): confirm with your airline and destination embassy",
    ],
    delayReasons: [
      "Incomplete or inconsistent documentation",
      "High application volume or peak seasonal demand",
      "Additional security or background checks",
      "Administrative processing delays at the embassy",
    ],
    tips: [
      "Submit a complete, well-organized application package with all required documents",
      "Include a strong cover letter and detailed supporting documents",
      "Track your application status regularly via the official portal",
      "Contact the embassy if no update is received after the maximum stated timeframe",
    ],
    faq: [],
    relatedPages: [
      { label: "Canada Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada?type=sticker" },
      { label: "UK Visitor Visa Guide", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom?type=sticker" },
      { label: "Schengen Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen?type=sticker" },
      { label: "Australia Visitor Visa", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-australia?type=sticker" },
      { label: "UAE Tourist e-Visa", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-arab-emirates?type=e-visa" },
    ],
  };
}

// ── VISA TYPE CONFIG ────────────────────────────────────────────────────────
const VISA_TYPE_LABELS = {
  "e-visa":           { label:"E-Visa",      color:"bg-emerald-100 text-emerald-800 border-emerald-200" },
  "sticker":          { label:"Sticker Visa", color:"bg-blue-100 text-blue-800 border-blue-200"         },
  "sticker-extended": { label:"Complex Case", color:"bg-amber-100 text-amber-800 border-amber-200"      },
  "transit":          { label:"Transit Visa", color:"bg-purple-100 text-purple-800 border-purple-200"   },
};

// ── MAIN SERVER COMPONENT ──────────────────────────────────────────────────
export default async function VisaProcessingSlugPage({ params, searchParams }) {
  const slug          = params?.slug || "";
  const visaTypeParam = searchParams?.type || "sticker";

  const marker = "-national-visa-processing-time-for-";
  const idx    = slug.indexOf(marker);
  const [nationalitySlug, destinationSlug] =
    idx === -1
      ? [slug, "unknown"]
      : [slug.slice(0, idx), slug.slice(idx + marker.length)];

  const found = COUNTRIES.find(
    c => c.country.toLowerCase().replace(/\s+/g, "-") === nationalitySlug
  );
  const nationalityName =
    found?.country ||
    nationalitySlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const countryData = getCountryData(destinationSlug);

  const activeType =
    countryData.types[visaTypeParam] ? visaTypeParam : "sticker";
  const activeRule = countryData.types[activeType];
  const isHours    = activeRule?.unit === "hours";

  const RELATED = Object.entries(countryData.types).filter(([k]) => k !== activeType);

  const timeDisplay = isHours
    ? `${activeRule.min}–${activeRule.max} hours`
    : `${activeRule.min}–${activeRule.max} business days`;

  return (
    <div className="min-h-screen bg-white font-sans my-20">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
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

      {/* ── HERO ────────────────────────────────────────────────────────── */}
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

          <VisaTypeSwitcher
            types={countryData.types}
            activeType={activeType}
            slug={slug}
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
                <span
                  className={`px-4 py-2 rounded-xl border text-xs font-black uppercase tracking-wider ${
                    VISA_TYPE_LABELS[activeType]?.color || "bg-slate-50 border-slate-200 text-slate-600"
                  }`}
                >
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
                  {isHours ? "hours" : "business\ndays"}
                </span>
              </div>
              <div className="text-sm text-green-200/70 font-semibold mb-6">{activeRule?.label}</div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-lg font-black text-amber-400">
                    {activeRule?.min}{isHours ? "h" : "d"}
                  </div>
                  <div className="text-[10px] text-green-300/60 font-bold uppercase">Best Case</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-lg font-black text-white">
                    {Math.round(((activeRule?.min || 0) + (activeRule?.max || 0)) / 2)}
                    {isHours ? "h" : "d"}
                  </div>
                  <div className="text-[10px] text-green-300/60 font-bold uppercase">Average</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-lg font-black text-red-300">
                    {activeRule?.max}{isHours ? "h" : "d"}
                  </div>
                  <div className="text-[10px] text-green-300/60 font-bold uppercase">Worst Case</div>
                </div>
              </div>

              {isHours && (
                <div className="mt-4 bg-purple-500/20 border border-purple-400/30 rounded-xl px-4 py-3 text-xs font-bold text-purple-200">
                  🔁 Transit visa — same-day or overnight decision in most cases
                </div>
              )}

              {/* Quick stats row */}
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

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left — main info */}
          <div className="lg:col-span-2 space-y-10">

            {/* Real approval stats */}
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
                <p className="text-xs text-green-300/40 mt-4">* Statistics based on aggregated applicant reports and embassy data. Individual results vary.</p>
              </div>
            )}

            {/* Required Documents checklist */}
            {countryData.requiredDocuments && countryData.requiredDocuments.length > 0 && (
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

            {/* Important notes */}
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

            {/* Why delays */}
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

            {/* Pro tips */}
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

           {/* FAQ section — rich SEO content */}
{countryData.faq && countryData.faq.length > 0 && (
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

            {/* SEO article */}
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
                    A complete application package is the single most important factor in getting your{" "}
                    <strong>{countryData.name}</strong> visa approved on time. The checklist above covers all{" "}
                    {countryData.requiredDocuments.length} required documents for the{" "}
                    <strong>{activeRule?.label}</strong>. Missing even one document can result in a delay of 5–10
                    additional business days or, in some cases, a straight refusal.
                  </p>
                )}
                {isHours ? (
                  <p>
                    Transit visas are the fastest visa category available. Most decisions are made within 6–24 hours,
                    making same-day or next-day processing common. {nationalityName} travelers transiting{" "}
                    {countryData.name} should confirm transit visa requirements with their airline and the official
                    embassy portal before booking connecting flights.
                  </p>
                ) : (
                  <p>
                    The key to a smooth, on-time visa approval is applying well in advance and submitting a complete,
                    well-organized application. {nationalityName} applicants should pay particular attention to
                    financial documentation, as embassies often request additional proof of funds from South Asian
                    and African nationalities. In peak travel seasons — typically June through August and December
                    through January — processing times can increase by 30–50%.
                  </p>
                )}
                {countryData.successStats && (
                  <p>
                    Based on aggregated applicant data, the approval rate for{" "}
                    <strong>{nationalityName} applicants applying for a {countryData.name} visa</strong> stands at{" "}
                    <strong className="text-[#005a31]">{countryData.successStats.approvalRate}</strong>. The average
                    processing time across all cases is{" "}
                    <strong>{countryData.successStats.avgProcessingDays} business days</strong>, with the fastest
                    recorded approval at <strong>{countryData.successStats.fastestEver}</strong>. During peak months,
                    expect additional delays of {countryData.successStats.peakDelay}.
                  </p>
                )}
                <p>
                  We strongly recommend using the <strong>Reverse Application Calculator</strong> on this page to
                  determine your ideal application submission date based on your intended travel or transit date.
                  Applying with at least the maximum processing time plus a 2-week buffer gives you the safest margin.
                </p>
                {countryData.embassyAddress && (
                  <p>
                    For {nationalityName} applicants, applications are submitted at or through{" "}
                    <strong>{countryData.embassyAddress}</strong>.
                    {countryData.embassyPhone && (
                      <> You can contact the embassy directly at <strong>{countryData.embassyPhone}</strong> for
                      appointment queries and application status updates.</>
                    )}
                  </p>
                )}
              </div>
            </div>

            {/* Internal linking — related visa pages */}
            {countryData.relatedPages && countryData.relatedPages.length > 0 && (
              <div className="border-t border-slate-100 pt-10">
                <h2 className="text-xl font-black text-[#004d2c] mb-5 flex items-center gap-3">
                  <Globe size={20} className="text-[#005a31]" />
                  Related Visa Processing Times You May Need
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {countryData.relatedPages.map((page, i) => (
                    <Link
                      key={i}
                      href={page.href}
                      className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-[#004d2c] hover:border-[#004d2c] hover:text-white transition-all group"
                    >
                      <span className="text-sm font-bold text-slate-700 group-hover:text-white leading-snug">{page.label}</span>
                      <ChevronRight size={16} className="text-slate-400 group-hover:text-amber-400 shrink-0 ml-2" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right sidebar */}
          <div className="space-y-6">

            <ReverseCalculator
              min={activeRule?.min || 15}
              max={activeRule?.max || 21}
              unit={activeRule?.unit}
            />

            {/* Embassy contact card */}
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
                    <a
                      href={`tel:${countryData.embassyPhone}`}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-[#005a31]/8 transition-colors"
                    >
                      <Phone size={14} className="text-[#005a31] shrink-0" />
                      <span className="text-xs font-bold text-slate-700">{countryData.embassyPhone}</span>
                    </a>
                  )}
                  {countryData.embassyUrl && (
                    <a
                      href={countryData.embassyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-[#005a31]/8 transition-colors"
                    >
                      <ExternalLink size={14} className="text-[#005a31] shrink-0" />
                      <span className="text-xs font-bold text-slate-700">Official Portal</span>
                    </a>
                  )}
                  {countryData.vfsUrl && countryData.vfsUrl !== countryData.embassyUrl && (
                    <a
                      href={countryData.vfsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-[#005a31]/8 transition-colors"
                    >
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
                Our visa experts handle your entire {countryData.name} application from start to finish — documents,
                forms, and submission.
              </p>
              <a
                href="https://wa.me/8801631312524"
                className="block w-full py-4 bg-amber-400 text-[#004d2c] font-black rounded-xl hover:bg-white transition-all text-sm"
              >
                Talk to an Expert →
              </a>
            </div>

            {/* Other visa types — static links, fully crawlable */}
            {RELATED.length > 0 && (
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6">
                <h4 className="font-black text-sm text-slate-800 uppercase tracking-wider mb-4">
                  Other Visa Types for {countryData.name}
                </h4>
                <div className="space-y-3">
                  {RELATED.map(([k, v]) => (
                    <Link
                      key={k}
                      href={`/travel-resources/visa-processing-time-tracker/${slug}?type=${k}`}
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

            {/* Quick apply tips card */}
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

          </div>
        </div>
      </div>

      {/* ── BACK CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[#005a31] py-16 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-black text-white mb-4">Check Another Country</h2>
          <p className="text-green-200/70 font-medium mb-8">
            Search 195+ countries — E-Visa, Sticker, Transit &amp; complex cases
          </p>
          <Link
            href="/travel-resources/visa-processing-time-tracker"
            className="inline-flex items-center gap-3 bg-amber-400 text-[#004d2c] px-10 py-5 rounded-2xl font-black hover:bg-white transition-all shadow-xl"
          >
            <Timer size={20} /> Back to Visa Tracker
          </Link>
        </div>
      </section>

    </div>
  );
}