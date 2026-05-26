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

  portugal: {
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
  malaysia: {
    name: "Malaysia", flag: "🇲🇾",
    types: {
      "e-visa":           { min:1,  max:3,   label:"Malaysia eVisa (eNTRI/evisa)" },
      "sticker":          { min:7,  max:14,  label:"Malaysia Sticker Visa" },
      "sticker-extended": { min:21, max:45,  label:"Employment Pass / Long-Stay" },
      "transit":          { min:6,  max:24,  unit:"hours", label:"Transit Without Visa / TVP" },
    },
    embassyUrl: "https://www.imi.gov.my/",
    embassyPhone: "+603-8000-8000",
    embassyAddress: "High Commission of Malaysia, Road 7, House 7, Baridhara, Dhaka 1212",
    vfsUrl: "https://www.vfsglobal.com/malaysia/bangladesh/",
    approvalRate: "84%",
    avgWaitWeeks: "1–3 weeks",
    peakMonths: "June – August, December (school holidays)",
    requiredDocuments: [
      "Valid passport (6 months validity beyond return date)",
      "Completed Malaysia visa application (eVisa portal or embassy form)",
      "Recent passport-size photograph (35mm × 45mm, white background)",
      "Confirmed return flight ticket",
      "Hotel/accommodation booking for full stay",
      "Bank statements for last 3 months (showing min MYR 3,000 equivalent)",
      "Employment letter with salary, designation, and approved leave",
      "Income tax returns (last 2 years)",
      "Travel insurance (recommended)",
      "Invitation letter from Malaysian host (for social/business visit)",
      "Business registration or license (for business visa)",
      "Yellow fever vaccination certificate (if arriving from endemic country)",
    ],
    successStats: {
      avgProcessingDays: 7,
      approvalRate: "84%",
      refusalRate: "16%",
      peakDelay: "+3–5 business days June–August",
      fastestEver: "24 hours (eNTRI)",
    },
    notes: [
      "eNTRI available for Bangladeshi nationals — single entry, 15 days, BDT ~2,700",
      "Malaysia evisa (multi-entry) available for 3 or 6 months, processed 1–3 days",
      "Malaysia is Muslim-majority — halal food widely available, Friday prayer observed",
      "Transit Without Visa (TWOV) available for many nationalities at KLIA for 24 hours",
    ],
    delayReasons: [
      "Photo not meeting specification (common cause of e-visa rejection)",
      "Inconsistent passport details and travel document",
      "Overstay history in Malaysia or ASEAN countries",
      "Employment visa: salary not meeting minimum for pass category",
    ],
    tips: [
      "Apply eNTRI for short trips — fastest and cheapest option for Bangladeshis",
      "For longer stays use the Malaysia evisa portal directly at malaysiavisa.imi.gov.my",
      "Strong bank statement showing consistent balance is key for longer visa approvals",
      "TWOV: must have onward confirmed flight and valid visa for destination country",
    ],
    faq: [
      {
        q: (nat) => `Can ${nat} nationals get a Malaysia eNTRI visa?`,
        a: (nat) => `Yes, ${nat} nationals can apply for the Malaysia eNTRI (Electronic Travel Registration & Information) visa online. It allows a single entry for up to 15 days and is typically processed within 24 hours. It is the fastest and most affordable Malaysia visa option for ${nat} applicants.`,
      },
      {
        q: (nat) => `What is the Malaysia visa processing time for ${nat} nationals?`,
        a: (nat) => `Malaysia eNTRI processing takes 1–3 business days. Standard Malaysia eVisa (multi-entry 3–6 months) takes 3–7 business days. Embassy sticker visas take 7–14 business days. ${nat} nationals are recommended to apply at least 2 weeks before travel.`,
      },
      {
        q: () => `Is Malaysia halal-friendly for Bangladeshi tourists?`,
        a: () => `Yes. Malaysia is one of the most Muslim-friendly travel destinations globally. Over 60% of the population is Muslim, halal food is available everywhere, mosques are in every city, and prayer facilities are provided in all major shopping malls and transport hubs. Kuala Lumpur, Penang, and Langkawi all have significant Muslim-friendly infrastructure.`,
      },
      {
        q: (nat) => `Can ${nat} nationals transit Malaysia without a visa?`,
        a: () => `Holders of valid US, UK, Australian, Canadian, or Schengen visas may qualify for Transit Without Visa (TWOV) at Kuala Lumpur International Airport (KLIA) for up to 120 hours. Others may need a Transit Visa. Always verify with Malaysian Immigration before booking connecting flights through KLIA.`,
      },
    ],
    relatedPages: [
      { label: "Singapore Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-singapore?type=sticker" },
      { label: "Thailand Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-thailand?type=sticker" },
      { label: "Indonesia Visa Timeline", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-indonesia?type=e-visa" },
      { label: "UAE e-Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-arab-emirates?type=e-visa" },
    ],
  },
 
  thailand: {
    name: "Thailand", flag: "🇹🇭",
    types: {
      "e-visa":           { min:1,  max:3,  label:"Thailand e-Visa / eVOA" },
      "sticker":          { min:7,  max:14, label:"Thailand Tourist Visa (TR)" },
      "sticker-extended": { min:21, max:45, label:"Non-Immigrant Visa / Long-Stay" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Transit Visa (TS)" },
    },
    embassyUrl: "https://www.thaievisa.go.th/",
    embassyPhone: "+880-2-5566-2300",
    embassyAddress: "Royal Thai Embassy, 18 Madani Avenue, Baridhara, Dhaka 1212",
    vfsUrl: "https://www.thaievisa.go.th/",
    approvalRate: "87%",
    avgWaitWeeks: "1–2 weeks",
    peakMonths: "November – February (high season), April (Songkran)",
    requiredDocuments: [
      "Valid passport (6 months validity beyond departure from Thailand)",
      "Completed Thai visa application form or Thailand eVisa online form",
      "Recent passport-size photograph (3.5cm × 4.5cm, white background)",
      "Confirmed return flight ticket",
      "Hotel/accommodation bookings for full stay",
      "Bank statements for last 3–6 months (showing min THB 20,000 equivalent per applicant)",
      "Employment letter with leave approval (for employee applicants)",
      "Business registration (for self-employed applicants)",
      "Travel insurance covering Thailand (recommended)",
      "Proof of sufficient funds for stay (THB 10,000/person or THB 20,000/family)",
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
      "Visa-on-arrival available for Bangladeshi nationals at BKK Suvarnabhumi airport (~$35)",
      "Visa Exemption does not apply to Bangladeshi nationals — visa required",
      "Transit Visa (TS) required for Bangladeshi nationals connecting through Thai airports",
    ],
    delayReasons: [
      "Insufficient proof of funds (most common for VOA rejections at the airport)",
      "No confirmed return flight or hotel booking",
      "Previous overstay in Thailand — automatic flag in TM system",
      "Inconsistent travel history or purpose declared",
    ],
    tips: [
      "Apply Thailand eVisa online instead of arriving for VOA — faster and more reliable",
      "Always carry THB 10,000+ cash per person for VOA immigration inspection",
      "Book refundable hotel and flexible flights for visa application, confirm after approval",
      "For Bangkok + Pattaya trip: 14 days visa is usually sufficient and easiest to get",
    ],
    faq: [
      {
        q: (nat) => `Can ${nat} nationals get a Thailand visa on arrival?`,
        a: (nat) => `Yes, ${nat} nationals can obtain a Thailand Visa on Arrival (VOA) at Suvarnabhumi (BKK) and Phuket airports for stays up to 30 days. The fee is approximately THB 2,000 (~$55 USD). However, applying for the Thailand eVisa online before travel is safer and faster, avoiding airport queues.`,
      },
      {
        q: (nat) => `What is the Thailand eVisa processing time for ${nat} nationals?`,
        a: (nat) => `Thailand eVisa applications for ${nat} nationals are typically processed within 1–3 business days through thaievisa.go.th. Standard Tourist Visa (TR) applications at the Thai Embassy in Dhaka take 7–14 business days. We recommend applying at least 2 weeks before travel.`,
      },
      {
        q: () => `How much cash must I carry for Thailand visa on arrival?`,
        a: () => `Thai immigration requires proof of sufficient funds: THB 10,000 per person or THB 20,000 per family. This can be cash or a bank card. Immigration officers at major airports do check this requirement, and entry can be denied if you cannot demonstrate sufficient funds.`,
      },
      {
        q: (nat) => `Does Thailand have halal food for ${nat} Muslim tourists?`,
        a: () => `Yes. Bangkok, Phuket, and Pattaya all have extensive halal food options, especially in areas popular with South Asian tourists. Central Bangkok's Pratunam area, Soi Arab in Nana, and Phuket's Patong Beach area all have halal restaurants widely available.`,
      },
    ],
    relatedPages: [
      { label: "Malaysia e-Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-malaysia?type=e-visa" },
      { label: "Singapore Visa Processing", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-singapore?type=sticker" },
      { label: "Indonesia Visa on Arrival Guide", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-indonesia?type=e-visa" },
      { label: "Japan Tourist Visa", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-japan?type=sticker" },
    ],
  },
 
  "south-korea": {
    name: "South Korea", flag: "🇰🇷",
    types: {
      "e-visa":          { min:3,  max:5,  label:"Korea Electronic Visa (K-ETA)" },
      "sticker":         { min:5,  max:10, label:"Korea Tourist Visa (C-3)" },
      "sticker-extended":{ min:30, max:60, label:"Korea D-2/D-10 Student or Long-Stay" },
      "transit":         { min:6,  max:24, unit:"hours", label:"Korea Transit Visa (TWOV)" },
    },
    embassyUrl: "https://overseas.mofa.go.kr/bd-en/",
    embassyPhone: "+880-2-5566-2200",
    embassyAddress: "Embassy of the Republic of Korea, 4 Madani Avenue, Baridhara, Dhaka 1212",
    vfsUrl: "https://overseas.mofa.go.kr/bd-en/",
    approvalRate: "78%",
    avgWaitWeeks: "1–2 weeks",
    peakMonths: "March – May (cherry blossom), September – November (autumn foliage)",
    requiredDocuments: [
      "Valid passport (6 months validity)",
      "Completed Korea visa application form (available online or at embassy)",
      "Recent passport-size photograph (35mm × 45mm, white/light background)",
      "Bank statements for last 3–6 months",
      "Employment letter with salary, leave approval, and company stamp",
      "Income tax returns (last 2 years)",
      "Confirmed return flight ticket and accommodation",
      "Travel itinerary (day-by-day)",
      "Invitation letter from Korean host (if applicable)",
      "Tourism purpose: proof of tourist intent (hotel bookings, tourist attraction plans)",
      "For KGSP scholarship applicants: complete academic documents in addition",
    ],
    successStats: {
      avgProcessingDays: 7,
      approvalRate: "78%",
      refusalRate: "22%",
      peakDelay: "+4–5 business days Mar–May, Sep–Oct",
      fastestEver: "3 business days",
    },
    notes: [
      "K-ETA launched for 112 nationalities — Bangladeshis are not currently eligible for K-ETA",
      "Korean Tourist Visa (C-3) allows stays up to 90 days single/double entry",
      "Korea is also a popular destination for KGSP (government scholarship) applicants",
      "Strong travel history to USA, UK, Japan, Schengen significantly boosts approval",
    ],
    delayReasons: [
      "Weak financial documentation or sudden deposit before application",
      "No previous international travel history — makes risk profile higher",
      "Incomplete or vague travel itinerary",
      "Previous visa refusals in other countries not declared",
    ],
    tips: [
      "Apply 3–4 weeks ahead — peak autumn/spring seasons add processing time",
      "Include strong employment letter and 6 months consistent bank balance",
      "Detail-rich itinerary covering K-pop sites, temples, and palaces improves approval narrative",
      "Previous Japan or Schengen visa holders have significantly higher Korea visa approval rates",
    ],
    faq: [
      {
        q: (nat) => `What is the South Korea visa processing time for ${nat} nationals?`,
        a: (nat) => `South Korea Tourist Visa (C-3) for ${nat} applicants takes 5–10 business days under normal conditions. During peak travel seasons (cherry blossom: March–May; autumn: September–November), processing can extend to 14–21 business days. Apply at least 3–4 weeks before your intended travel date.`,
      },
      {
        q: (nat) => `Is K-ETA available for ${nat} nationals?`,
        a: (nat) => `As of 2025, ${nat} passport holders are not eligible for K-ETA (Korea Electronic Travel Authorization). ${nat} nationals must apply for a full C-3 Tourist Visa at the Korean Embassy in Dhaka. K-ETA is currently available for nationals of 112 countries — mainly developed nations without a visa requirement for Korea.`,
      },
      {
        q: () => `What is the KGSP Korea scholarship and how does it help visa applicants?`,
        a: () => `The Korean Government Scholarship Program (KGSP) offers fully funded undergraduate and postgraduate scholarships in South Korea covering full tuition, monthly stipend (KRW 900,000), Korean language training, and return airfare. KGSP recipients receive a D-2 student visa which is processed through the embassy after receiving an offer letter.`,
      },
      {
        q: (nat) => `How can ${nat} applicants improve their South Korea visa approval rate?`,
        a: () => `Key factors: (1) Strong 6-month bank balance showing consistent deposits. (2) Solid employment letter with clear leave approval dates. (3) Prior international travel history — especially Japan, Schengen, or USA visas. (4) Detailed day-by-day itinerary with Korean tourist sites. (5) Travel insurance certificate.`,
      },
    ],
    relatedPages: [
      { label: "Japan Tourist Visa Processing", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-japan?type=sticker" },
      { label: "Singapore Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-singapore?type=sticker" },
      { label: "Korea KGSP Scholarship Guide", href: "/scholarships/south-korea" },
      { label: "Schengen Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen?type=sticker" },
    ],
  },
 
  georgia: {
    name: "Georgia", flag: "🇬🇪",
    types: {
      "e-visa":           { min:1,  max:5,  label:"Georgia e-Visa" },
      "sticker":          { min:1,  max:1,  label:"Georgia Visa-Free Entry (365 days)" },
      "sticker-extended": { min:30, max:60, label:"Georgia TRC (Temporary Residence)" },
      "transit":          { min:1,  max:3,  unit:"hours", label:"Georgia Transit (Visa-Free)" },
    },
    embassyUrl: "https://evisa.gov.ge/",
    embassyPhone: "+995-32-298-5959",
    embassyAddress: "Ministry of Foreign Affairs of Georgia, 4 Chitadze Street, Tbilisi",
    vfsUrl: "https://evisa.gov.ge/",
    approvalRate: "98%",
    avgWaitWeeks: "Immediate (visa-free) / 1–5 days (e-visa)",
    peakMonths: "June – September (summer tourism peak)",
    requiredDocuments: [
      "Valid passport only (for visa-free Bangladeshi nationals)",
      "For e-visa: online application at evisa.gov.ge + passport scan + photo",
      "For TRC: business registration, employment contract, or investment proof",
      "Sufficient funds proof (for TRC): bank statements showing financial sustainability",
      "Medical insurance (for TRC applications)",
      "Accommodation proof (for TRC or long-stay applications)",
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
      "No visa application needed — simply arrive at Tbilisi airport",
      "Georgia TRC (Temporary Residence Card) available for investors, students, and employees",
      "Eammu Holidays has a full office in Tbilisi at Floor 5, Levan Gotua St #3",
      "Most affordable Caucasus destination — BDT 2,500–5,000/day total living cost",
    ],
    delayReasons: [
      "TRC application delays: business registration pending",
      "Investment visa: minimum USD 100,000 threshold documentation",
      "e-Visa (for other nationalities): incomplete scanned documents",
      "Transit: virtually no delays — instant on arrival",
    ],
    tips: [
      "No visa needed — just arrive with your valid Bangladeshi passport",
      "For TRC: start business registration process at least 4 weeks before applying",
      "Eammu Holidays Georgia office provides full TRC support in Tbilisi",
      "Tbilisi→Kazbegi→Batumi is the classic budget Caucasus route — 7–10 days",
    ],
    faq: [
      {
        q: (nat) => `Do ${nat} nationals need a visa to enter Georgia?`,
        a: (nat) => `No. ${nat} passport holders can enter Georgia completely visa-free for up to 365 days. Simply arrive at Tbilisi International Airport (TBS) or any Georgian border crossing with a valid passport. No prior visa application, no fees, no appointment needed.`,
      },
      {
        q: () => `What is the Georgia TRC and how do I apply?`,
        a: () => `The Georgia Temporary Residence Card (TRC) allows foreigners to legally reside in Georgia for 1–6 years with renewal options. It can be obtained through company registration, employment, investment (USD 100,000+), or family reunion. Processing at the Public Service Hall takes 10–30 working days. Eammu Holidays' Tbilisi office provides full TRC support.`,
      },
      {
        q: (nat) => `How much does a trip to Georgia cost for ${nat} travelers?`,
        a: () => `Georgia is one of the most affordable destinations for Bangladeshi travelers — estimated BDT 2,500–5,000/day all-inclusive. Return flights from Dhaka cost BDT 30,000–55,000. Hotel costs BDT 1,200–4,000/night. Combined with 365-day visa-free entry, Georgia offers the best value for money for long-stay travelers.`,
      },
      {
        q: () => `Where is Eammu Holidays' Georgia office?`,
        a: () => `Eammu Holidays has a full branch office in Tbilisi, Georgia at Floor 5, Levan Gotua Street #3. We offer Georgia TRC processing, guided tours to Kazbegi, Batumi, Mtskheta and Kakheti, accommodation support, university admissions, and Schengen/UK visa processing for Georgia-based clients. Contact: +995 574 446 218.`,
      },
    ],
    relatedPages: [
      { label: "Armenia Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-armenia?type=e-visa" },
      { label: "Turkey e-Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-turkey?type=e-visa" },
      { label: "Schengen Visa from Tbilisi", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen?type=sticker" },
      { label: "Georgia TRC & Business Setup", href: "/contact/travel-agency-georgia" },
      { label: "Travel Budget: Georgia", href: "/travel-budget-planner" },
    ],
  },
 
  armenia: {
    name: "Armenia", flag: "🇦🇲",
    types: {
      "e-visa":           { min:1,  max:3,  label:"Armenia e-Visa (evisa.am)" },
      "sticker":          { min:3,  max:5,  label:"Armenia Visa on Arrival" },
      "sticker-extended": { min:30, max:60, label:"Armenia Residence Permit" },
      "transit":          { min:1,  max:3,  unit:"hours", label:"Armenia Transit Visa" },
    },
    embassyUrl: "https://evisa.mfa.am/",
    embassyPhone: "+374-10-544-041",
    embassyAddress: "Ministry of Foreign Affairs of Armenia, Government House 2, Republic Square, Yerevan 0010",
    vfsUrl: "https://evisa.mfa.am/",
    approvalRate: "95%",
    avgWaitWeeks: "1–3 business days (e-visa)",
    peakMonths: "June – September (summer), April (Easter/Vardavar)",
    requiredDocuments: [
      "Valid passport (6 months validity from date of travel)",
      "Online e-Visa application at evisa.mfa.am",
      "Passport-size photograph (for visa on arrival)",
      "Return flight confirmation",
      "Hotel/accommodation booking",
      "Proof of sufficient funds (USD 50/day minimum recommended)",
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
      "Armenia + Georgia Caucasus combo trip is highly popular for Bangladeshi travelers",
      "Geghard Monastery and Garni Temple are UNESCO-listed — 1 day trip from Yerevan",
    ],
    delayReasons: [
      "e-Visa: photo not meeting specification",
      "Residency permit: business documentation incomplete",
      "Peak season: +1–2 days for standard e-visa",
    ],
    tips: [
      "Apply Armenia e-visa at evisa.mfa.am — simple 5-minute process",
      "Urgent e-visa processing available for same-day approval at higher fee",
      "Combine with Georgia: Yerevan + Tbilisi 7-day Caucasus tour is excellent value",
      "Eammu Holidays Yerevan office at Lambron 39 provides full travel support",
    ],
    faq: [
      {
        q: (nat) => `How do ${nat} nationals apply for an Armenia e-visa?`,
        a: (nat) => `${nat} nationals can apply for an Armenia e-visa at evisa.mfa.am. The process takes 5–10 minutes: fill in your passport details, upload a photo, pay the fee online, and receive the e-visa by email within 1–3 business days. An urgent option provides same-day processing at a higher fee.`,
      },
      {
        q: (nat) => `Can ${nat} nationals get an Armenia visa on arrival?`,
        a: (nat) => `Yes. ${nat} passport holders can obtain an Armenia visa on arrival at Zvartnots International Airport (EVN) in Yerevan. The VOA allows stays up to 120 days. However, applying for an e-visa online before travel is recommended to avoid airport queues.`,
      },
      {
        q: () => `Where is the Eammu Holidays Armenia office?`,
        a: () => `Eammu Holidays Armenia branch is located at Lambron 39, Yerevan, Republic of Armenia. We offer visa processing, guided tours to Garni, Geghard, Lake Sevan, and Khor Virap, airport transfers, hotel bookings, and full travel support. Contact: +374 94 810585.`,
      },
      {
        q: (nat) => `How much does an Armenia trip cost for ${nat} travelers?`,
        a: () => `Armenia is one of the most affordable Caucasus destinations — estimated BDT 2,500–5,500/day all-inclusive. Return flights from Dhaka cost BDT 32,000–58,000. Combined with easy e-visa processing (~1–3 days), Armenia is an excellent hidden gem for Bangladeshi travelers looking for history, nature, and budget travel.`,
      },
    ],
    relatedPages: [
      { label: "Georgia Visa-Free Entry Guide", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-georgia?type=sticker" },
      { label: "Turkey e-Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-turkey?type=e-visa" },
      { label: "Armenia Tours & Office", href: "/contact/travel-agency-armenia" },
      { label: "Dubai Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-arab-emirates?type=e-visa" },
    ],
  },
 
  turkey: {
    name: "Turkey", flag: "🇹🇷",
    types: {
      "e-visa":           { min:1,  max:2,  label:"Turkey e-Visa (evisa.gov.tr)" },
      "sticker":          { min:10, max:21, label:"Turkey Sticker Visa" },
      "sticker-extended": { min:30, max:60, label:"Turkey Residence / Long-Stay" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Turkey Airport Transit Visa" },
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
      "Turkey e-Visa online application at evisa.gov.tr (credit/debit card payment)",
      "Confirmed return flight ticket",
      "Hotel/accommodation booking",
      "Bank statements (last 3 months) — USD 50/day minimum",
      "Employment letter (for sticker visa)",
      "Travel insurance (recommended)",
      "For sticker visa: all above + income tax, detailed itinerary",
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
      "Single-entry e-visa allows up to 30 days stay in Turkey",
      "Istanbul is a popular transit and tourism hub — connects Asia, Europe, and Africa",
      "Istanbul Airport (IST) is one of the world's busiest — direct flights from Dhaka",
    ],
    delayReasons: [
      "e-Visa: payment issue (use international Visa/Mastercard)",
      "Sticker visa: insufficient financial proof",
      "History of overstay in Turkey or MENA region",
    ],
    tips: [
      "Apply Turkey e-visa at evisa.gov.tr — takes 2 minutes, approved same day",
      "Use an international Visa or Mastercard for payment — local cards often fail",
      "For sticker visa: apply at least 3 weeks before travel to allow buffer time",
      "Istanbul 5-day + Cappadocia 3-day is the most popular Bangladeshi Turkey itinerary",
    ],
    faq: [
      {
        q: (nat) => `Can ${nat} nationals apply for a Turkey e-visa online?`,
        a: (nat) => `Yes. ${nat} nationals can apply for a Turkey e-visa in minutes at evisa.gov.tr. The e-visa is approved same-day to within 24 hours, allows a single entry, and permits stays up to 30 days. Payment is by international credit/debit card.`,
      },
      {
        q: (nat) => `What is the Turkey visa processing time for ${nat} nationals in 2025?`,
        a: (nat) => `Turkey e-visa for ${nat} applicants is processed within 1–2 business days (same-day in most cases). Turkey embassy sticker visas take 10–21 business days and are required for stays over 30 days or for work/study purposes.`,
      },
      {
        q: () => `Is Istanbul good for Bangladeshi Muslim tourists?`,
        a: () => `Yes. Istanbul is considered one of the most Muslim-friendly cities in Europe. The city has 3,000+ mosques, halal food everywhere, and is deeply Islamic in culture and heritage. Hagia Sophia (converted back to a mosque in 2020), Sultanahmet Mosque, and Topkapi Palace are top attractions. Ramadan in Istanbul is a unique cultural experience.`,
      },
    ],
    relatedPages: [
      { label: "Georgia Visa-Free Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-georgia?type=sticker" },
      { label: "Schengen Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen?type=sticker" },
      { label: "UAE e-Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-arab-emirates?type=e-visa" },
      { label: "Travel Budget: Turkey", href: "/travel-budget-planner" },
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
      { label: "Canada Visa Processing Time", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada-sticker" },
      { label: "UK Visitor Visa Guide", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom-sticker" },
      { label: "Schengen Visa from Bangladesh", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen-sticker" },
      { label: "Australia Visitor Visa", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-australia-sticker" },
      { label: "UAE Tourist e-Visa", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-arab-emirates-e-visa" },
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
// ── GLOBAL INTERNAL LINKS — to be rendered on EVERY slug page ────────────────
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
// ── TOP VISA PROCESSING TIMES — for homepage/tracker hub SEO ────────────────
export const TOP_PROCESSING_TIMES_2025 = [
  { dest: "Canada",               nat: "Bangladeshi", type: "sticker",           days: "15–21 business days", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada?type=sticker" },
  { dest: "United States",        nat: "Bangladeshi", type: "sticker",           days: "21–60 business days", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-states?type=sticker" },
  { dest: "United Kingdom",       nat: "Bangladeshi", type: "sticker",           days: "15–21 business days", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom?type=sticker" },
  { dest: "Schengen Area",        nat: "Bangladeshi", type: "sticker",           days: "15–30 business days", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen?type=sticker" },
  { dest: "Australia",            nat: "Bangladeshi", type: "sticker",           days: "20–35 business days", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-australia?type=sticker" },
  { dest: "Germany",              nat: "Bangladeshi", type: "sticker",           days: "15–21 business days", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-germany?type=sticker" },
  { dest: "Japan",                nat: "Bangladeshi", type: "sticker",           days: "5–7 business days",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-japan?type=sticker" },
  { dest: "Singapore",            nat: "Bangladeshi", type: "sticker",           days: "7–14 business days",  href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-singapore?type=sticker" },
  { dest: "South Korea",          nat: "Bangladeshi", type: "sticker",           days: "5–10 business days",  href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-south-korea?type=sticker" },
  { dest: "Malaysia",             nat: "Bangladeshi", type: "e-visa",            days: "1–3 business days",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-malaysia?type=e-visa" },
  { dest: "Thailand",             nat: "Bangladeshi", type: "sticker",           days: "7–14 business days",  href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-thailand?type=sticker" },
  { dest: "UAE (Dubai)",          nat: "Bangladeshi", type: "e-visa",            days: "2–4 business days",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-arab-emirates?type=e-visa" },
  { dest: "Saudi Arabia",         nat: "Bangladeshi", type: "e-visa",            days: "2–4 business days",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-saudi-arabia?type=e-visa" },
  { dest: "Turkey",               nat: "Bangladeshi", type: "e-visa",            days: "1–2 business days",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-turkey?type=e-visa" },
  { dest: "Georgia",              nat: "Bangladeshi", type: "sticker",           days: "Visa-free 365 days",  href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-georgia?type=sticker" },
  { dest: "Armenia",              nat: "Bangladeshi", type: "e-visa",            days: "1–3 business days",   href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-armenia?type=e-visa" },
  { dest: "France",               nat: "Bangladeshi", type: "sticker",           days: "15–30 business days", href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-france?type=sticker" },
  { dest: "Canada (Transit)",     nat: "Bangladeshi", type: "transit",           days: "6–24 hours",          href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-canada?type=transit" },
  { dest: "UK (DATV Transit)",    nat: "Bangladeshi", type: "transit",           days: "6–24 hours",          href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-united-kingdom?type=transit" },
  { dest: "Schengen Transit ATV", nat: "Bangladeshi", type: "transit",           days: "6–24 hours",          href: "/travel-resources/visa-processing-time-tracker/bangladeshi-national-visa-processing-time-for-schengen?type=transit" },
];

// Add this helper component inside your file, above your main component
const GlobalLinksNav = () => (
  <nav className="p-6 bg-gray-50 rounded-lg">
    <h3 className="font-bold mb-4">Quick Links</h3>
    <div className="grid grid-cols-2 gap-4">
      {GLOBAL_INTERNAL_LINKS.map((link) => (
        <Link 
          key={link.href} 
          href={link.href}
          className="text-blue-600 hover:underline text-sm"
        >
          {link.label}
        </Link>
      ))}
    </div>
  </nav>
);
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

           {/* Global Internal Links — Site-wide Navigation */}
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
        <ChevronRight 
          size={16} 
          className="text-slate-400 group-hover:text-amber-400 shrink-0 ml-2" 
        />
      </Link>
    ))}
  </div>
</div>

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
                      href={`/travel-resources/visa-processing-time-tracker/${slug}-${k}`}
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

          {/* ── BACK CTA ── */}
      <section className="bg-[#005a31] py-14 px-6 text-center" aria-label="Search more visa processing times">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-black text-white mb-3">Check Another Country's Processing Time</h2>
          <p className="text-green-200/70 font-medium mb-8 text-sm">
            195+ countries covered — E-Visa, Sticker, Transit, and long-stay visas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/travel-resources/visa-processing-time-tracker"
              className="inline-flex items-center gap-3 bg-[#ffcc00] text-[#004d2c] px-10 py-5 rounded-2xl font-black hover:bg-white transition-all shadow-xl">
              <Timer size={19} aria-hidden="true" /> Back to Visa Tracker
            </Link>
            <Link href="/visa/visa-guide"
              className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-5 rounded-2xl font-bold hover:bg-white/20 transition text-sm">
              Full Visa Guide →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}