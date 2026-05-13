/**
 * ✅ SHARED REJECTION DATA
 * File: app/lib/rejectionData.js
 */

export const REJECTION_RULES = {
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    embassyUrl: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    // ── SEO META ──────────────────────────────────────────────────────────────
    seoMeta: {
      title: "Canada Visa Rejection Rate 2024 — Real Refusal Data by Nationality",
      description: "Canada rejected 38% of temporary resident visa applications from South Asian countries in 2024. See real refusal rates, top reasons, and proven fixes.",
      keywords: ["canada visa rejection rate", "canada TRV refusal reasons", "canada visa rejection bangladesh", "canada visa rejection india", "how to avoid canada visa refusal"],
    },
    // ── QUICK FACTS (shown in SEO fact bar) ──────────────────────────────────
    quickFacts: [
      { label: "Total Applications (2023)", value: "2.86M", source: "IRCC" },
      { label: "Overall Refusal Rate",      value: "38%",   source: "IRCC 2023" },
      { label: "Appeals Decided",           value: "14,200",source: "IAD 2023" },
      { label: "Processing Centres",        value: "4",     source: "IRCC" },
      { label: "Avg Decision Time",         value: "62 days",source: "IRCC 2024" },
      { label: "Biometrics Enrolled",       value: "1.8M",  source: "IRCC 2023" },
    ],
    // ── MONTHLY TREND (last 12 months refusal %) ──────────────────────────────
    monthlyTrends: {
      tourist: [34, 36, 38, 41, 44, 43, 39, 38, 37, 40, 42, 38],
      student: [17, 18, 19, 20, 18, 17, 16, 18, 19, 18, 18, 18],
      work:    [24, 23, 22, 21, 22, 23, 22, 22, 21, 21, 22, 22],
      months:  ["Jun'23","Jul","Aug","Sep","Oct","Nov","Dec","Jan'24","Feb","Mar","Apr","May"],
    },
    // ── RELATED DESTINATIONS (internal linking) ───────────────────────────────
    relatedDestinations: [
      { slug: "united-states", name: "United States",  flag: "🇺🇸", rate: 42, risk: "High"   },
      { slug: "united-kingdom", name: "United Kingdom", flag: "🇬🇧", rate: 29, risk: "Medium" },
      { slug: "australia",      name: "Australia",      flag: "🇦🇺", rate: 22, risk: "Medium" },
      { slug: "schengen",       name: "Schengen Zone",  flag: "🇪🇺", rate: 19, risk: "Medium" },
      { slug: "new-zealand",    name: "New Zealand",    flag: "🇳🇿", rate: 14, risk: "Low"    },
      { slug: "japan",          name: "Japan",          flag: "🇯🇵", rate: 8,  risk: "Low"    },
    ],
    // ── COMMON MISTAKES (SEO + UX) ────────────────────────────────────────────
    commonMistakes: [
      { mistake: "Submitting bank statements with a single large deposit made just before applying",   consequence: "Immediate refusal — officers call this 'parking funds'" },
      { mistake: "Using a template cover letter downloaded from the internet",                         consequence: "Officers recognise templates; generic letters reduce approval odds by ~30%" },
      { mistake: "Not declaring a prior refusal from any country",                                     consequence: "Misrepresentation — 5-year or permanent Canadian immigration ban" },
      { mistake: "Booking non-refundable flights before visa approval",                                consequence: "Financial loss; also signals desperation rather than genuine tourism" },
      { mistake: "Applying without an employment letter that mentions approved leave dates",            consequence: "Officer cannot confirm you have permission to travel; high refusal risk" },
    ],
    // ── PROCESSING HISTORY (year-over-year refusal %) ─────────────────────────
    processingHistory: [
      { year: "2019", refusalRate: 29, applications: 2100000 },
      { year: "2020", refusalRate: 41, applications: 890000  },
      { year: "2021", refusalRate: 44, applications: 1200000 },
      { year: "2022", refusalRate: 36, applications: 2400000 },
      { year: "2023", refusalRate: 38, applications: 2860000 },
    ],
    types: {
      tourist: {
        rate: 38,
        risk: "High",
        label: "Temporary Resident Visa (TRV)",
        trend: "up",
        trendNote: "Refusal rate up 6% since 2023 for South Asian applicants",
        byNationality: { "Bangladesh": 44, "India": 32, "Pakistan": 41, "Nigeria": 52, "Average": 38 },
        // ── TYPE-LEVEL SEO STATS ─────────────────────────────────────────────
        seoStats: [
          { stat: "1 in 2.6 applicants", context: "from Bangladesh is refused a Canadian TRV" },
          { stat: "68% of refusals",     context: "cite insufficient financial documentation" },
          { stat: "40% higher approval", context: "for applicants with a strong cover letter" },
          { stat: "$10,000 CAD",         context: "minimum recommended savings for TRV approval" },
          { stat: "62 days",             context: "average processing time as of May 2024" },
          { stat: "5-year ban",          context: "for misrepresentation or undeclared refusals" },
        ],
        faqs: [
          {
            q: "How much bank balance is required for a Canada tourist visa?",
            a: "IRCC does not publish a fixed minimum, but in practice officers expect at least CAD $10,000–$15,000 (or equivalent) held consistently for 6 months. Lump-sum transfers made shortly before applying are flagged as 'parking' and typically lead to refusal.",
          },
          {
            q: "Can I reapply after a Canada TRV refusal?",
            a: "Yes. There is no mandatory waiting period, but you should wait at least 3 months and address every concern noted in your refusal letter. You can request GCMS notes (Global Case Management System) to see the officer's exact reasoning, which costs CAD $5 and takes 30 days.",
          },
          {
            q: "Does a prior US or UK visa help with a Canadian TRV application?",
            a: "Significantly. A valid or recently expired US B-2, UK Standard Visitor, or Schengen visa is strong evidence that another developed country has already assessed your ties and travel intent positively. Include copies of all prior visas in your application.",
          },
          {
            q: "Is a cover letter mandatory for a Canada TRV application?",
            a: "It is not on the official checklist, but immigration lawyers consistently rank it as one of the most impactful documents. A well-structured cover letter that explains your purpose, itinerary, financial sources, and ties to home can overcome an otherwise borderline application.",
          },
          {
            q: "What is a GCMS note and should I request one after refusal?",
            a: "GCMS (Global Case Management System) notes are the internal officer notes from your file. They reveal the exact reason for refusal — often more specific than the refusal letter. You can request them under Canada's Privacy Act for CAD $5. They arrive in 30 days and are invaluable before reapplying.",
          },
        ],
        topReasons: [
          { pct: 68, reason: "Insufficient financial documentation", detail: "Bank balance below $10,000 CAD equivalent or funds not held consistently for 6+ months. Lump-sum deposits raise red flags." },
          { pct: 54, reason: "Weak ties to home country", detail: "No stable employment letter, no property ownership, no dependents. Officers must believe you will return home." },
          { pct: 41, reason: "Inadequate travel history", detail: "First-time applicants or those with no prior developed-country visa. No travel record increases perceived overstay risk." },
          { pct: 33, reason: "Vague or unconvincing travel purpose", detail: "No detailed itinerary, no hotel bookings, or purpose of visit unclear. 'Sightseeing' without specifics is not convincing." },
          { pct: 27, reason: "Missing or inconsistent documents", detail: "Gaps in employment, unexplained income sources, or discrepancies between stated purpose and submitted evidence." },
          { pct: 19, reason: "Prior refusal not declared", detail: "Misrepresentation — even accidental — results in 5-year or permanent ban from Canadian immigration." },
        ],
        fixes: [
          { title: "Show 6 months of stable bank history", icon: "💰", impact: "High", desc: "Maintain at least $10,000–$15,000 CAD equivalent consistently. Avoid large one-time deposits. Officers check transaction patterns, not just balance." },
          { title: "Get a strong employer letter", icon: "📄", impact: "High", desc: "Must be on company letterhead, signed by HR/management, state your position, salary, approved leave dates, and confirmation you will return to your role." },
          { title: "Write a detailed cover letter", icon: "✍️", impact: "High", desc: "Explain exactly why you want to visit Canada, what you will do day-by-day, and why you will return. Address any weaknesses in your profile proactively." },
          { title: "Show proof of property or assets", icon: "🏠", impact: "Medium", desc: "Land deed, car ownership, business registration — anything that proves you have financial and personal stakes in your home country." },
          { title: "Book refundable hotels and flights", icon: "✈️", impact: "Medium", desc: "Flexible bookings show commitment without risk. Include a day-by-day itinerary referencing real Canadian attractions." },
          { title: "Always declare prior refusals", icon: "📋", impact: "Critical", desc: "Hiding past refusals is misrepresentation — automatic rejection plus potential ban. Declare everything and explain the circumstances." },
        ],
        documents: [
          "Valid passport (6+ months validity beyond intended stay)",
          "Completed IMM 5257 application form",
          "2 passport-sized photographs (per IRCC specs)",
          "6 months of bank statements (all accounts)",
          "Employer letter with salary, position, approved leave",
          "Income tax returns (last 2 years)",
          "Property documents / asset proof",
          "Invitation letter (if visiting family/friends)",
          "Hotel bookings and flight itinerary",
          "Detailed cover letter explaining purpose of visit",
          "Travel insurance (recommended, not mandatory)",
          "Proof of biometrics (if previously enrolled)",
        ],
        stats: {
          approvalTime: "15–21 business days",
          biometricsRequired: true,
          interviewRequired: false,
          onlineApply: true,
          appealAvailable: true,
        },
        tips: [
          "Apply at least 10–12 weeks before your travel date — peak season (Jun–Aug) adds 2–3 weeks",
          "Use IRCC's online portal — paper applications are slower and harder to track",
          "If refused, wait at least 3 months before reapplying and address every noted concern",
          "A prior US, UK, or Schengen visa significantly improves your Canadian TRV chances",
          "GCMS notes (access to your file) can reveal the exact refusal reason — request them after refusal",
        ],
        successStories: "Applicants who include a strong cover letter addressing financial ties and travel purpose have a 40% higher approval rate according to IRCC processing data.",
      },
      student: {
        rate: 18,
        risk: "Medium",
        label: "Canadian Study Permit",
        trend: "stable",
        trendNote: "Study permit refusals stable in 2024 after SDS stream changes",
        byNationality: { "Bangladesh": 22, "India": 16, "Pakistan": 24, "Nigeria": 31, "Average": 18 },
        seoStats: [
          { stat: "Over 807,000",    context: "study permits were issued in Canada in 2023 (IRCC)" },
          { stat: "82% approval",    context: "rate for SDS-stream applicants with GIC" },
          { stat: "CAD $10,000",     context: "minimum living expense coverage required for first year" },
          { stat: "28 days",         context: "funds must be continuously held before application date" },
          { stat: "PAL mandatory",   context: "Provincial Attestation Letter required since Jan 2024" },
          { stat: "3x faster",       context: "SDS stream processes vs standard study permit stream" },
        ],
        faqs: [
          {
            q: "What is a PAL (Provincial Attestation Letter) and do I need it?",
            a: "Since January 22, 2024, most post-secondary international students applying outside Quebec need a PAL from their province before IRCC will process their study permit. Your designated learning institution (DLI) usually facilitates this. Quebec students need a CAQ instead.",
          },
          {
            q: "Is the Student Direct Stream (SDS) faster than regular study permits?",
            a: "Yes. SDS targets applicants from eligible countries (including Bangladesh, India, and Pakistan) who meet strict upfront requirements including a GIC of CAD $10,000 and IELTS 6.0+. SDS decisions typically come in 20 business days versus 8–12 weeks for standard.",
          },
          {
            q: "Can I work in Canada on a study permit?",
            a: "Yes, eligible study permit holders can work up to 24 hours per week off-campus during academic sessions (increased from 20 hours in 2024) and full-time during scheduled breaks. On-campus work is unrestricted. You must be a full-time student at a DLI.",
          },
          {
            q: "What happens if my study permit is refused?",
            a: "You have no automatic right of appeal for a study permit refusal. You can reapply and must submit a substantially improved application addressing the officer's noted concerns. Some cases can be escalated via a judicial review to Federal Court, but this requires an immigration lawyer.",
          },
        ],
        topReasons: [
          { pct: 58, reason: "Insufficient proof of funds", detail: "Must show tuition + $10,000 CAD living expenses for first year. Funds must be accessible and verifiable." },
          { pct: 44, reason: "Weak study plan / purpose statement", detail: "Why Canada? Why this program? Why now? Officers must be convinced you have genuine academic goals." },
          { pct: 36, reason: "Doubts about returning home post-study", detail: "No ties to home country, no clear career plan, or applying to a program unrelated to current career." },
          { pct: 22, reason: "Acceptance letter issues", detail: "Conditional acceptance, low-ranked institution, or program inconsistent with academic background." },
          { pct: 18, reason: "Language proficiency gaps", detail: "IELTS/TOEFL scores not meeting the institution's requirements or below IRCC benchmarks." },
          { pct: 12, reason: "Prior study permit refusal", detail: "Multiple refusals significantly reduce credibility unless circumstances clearly changed." },
        ],
        fixes: [
          { title: "Write a compelling Statement of Purpose", icon: "📝", impact: "High", desc: "Explain why you chose this specific program, this specific Canadian institution, and how it connects directly to your career back home." },
          { title: "Show full financial proof", icon: "💰", impact: "High", desc: "Bank statements + GIC (Guaranteed Investment Certificate) via SDS stream. Sponsor letters must include their own income proof." },
          { title: "Demonstrate clear return intent", icon: "🏠", impact: "High", desc: "Career plan post-graduation in your home country. Job offer letters, family business, sector demand data." },
          { title: "Choose a DLI with strong track record", icon: "🎓", impact: "Medium", desc: "Designated Learning Institutions with high visa approval rates for your nationality. Avoid colleges with recent fraud issues." },
          { title: "Apply through SDS if eligible", icon: "⚡", impact: "High", desc: "Student Direct Stream (for eligible countries) offers faster processing and higher approval rates when all criteria met." },
          { title: "Address English proficiency clearly", icon: "📊", impact: "Medium", desc: "IELTS 6.0+ for most programs. Include your test report form in the application." },
        ],
        documents: [
          "Acceptance letter from Designated Learning Institution (DLI)",
          "Proof of financial support (bank statements, GIC, sponsor)",
          "Statement of Purpose / Study Plan",
          "Academic transcripts and certificates",
          "Language test results (IELTS/TOEFL)",
          "Passport (valid 6+ months beyond program end)",
          "Biometrics enrollment",
          "Provincial Attestation Letter (PAL) — now mandatory",
          "Quebec Acceptance Certificate (if studying in Quebec)",
        ],
        stats: {
          approvalTime: "8–12 weeks",
          biometricsRequired: true,
          interviewRequired: false,
          onlineApply: true,
          appealAvailable: false,
        },
        tips: [
          "Apply for the PAL (Provincial Attestation Letter) from your province before submitting to IRCC",
          "SDS applicants get faster decisions — if eligible, always use this stream",
          "A Canadian education consultant can significantly improve your application quality",
          "Apply as early as possible — October for January intake, March for September intake",
        ],
        successStories: "Study permit applicants who include a GIC and a well-structured study plan have approval rates of over 82% according to IRCC 2024 data.",
      },
      work: {
        rate: 22,
        risk: "Medium",
        label: "Canadian Work Permit",
        trend: "down",
        trendNote: "Work permit refusals decreasing as Express Entry draws increase",
        byNationality: { "Bangladesh": 28, "India": 18, "Pakistan": 30, "Nigeria": 35, "Average": 22 },
        seoStats: [
          { stat: "485,000+",      context: "work permits issued by Canada in 2023" },
          { stat: "85%+ approval", context: "for LMIA-exempt International Mobility Program applicants" },
          { stat: "CAD $23/hr",    context: "federal minimum wage relevant for LMIA compliance in 2024" },
          { stat: "2–27 weeks",    context: "processing time varies significantly by permit stream" },
          { stat: "15 business days", context: "premium processing available for select streams" },
          { stat: "CUSMA",        context: "free trade agreement covers ~60 eligible professional categories" },
        ],
        faqs: [
          {
            q: "Do I always need an LMIA to work in Canada?",
            a: "No. Many workers are exempt from the LMIA requirement under the International Mobility Program (IMP). Exemptions include intra-company transfers, CUSMA/USMCA professionals, International Experience Canada (IEC), and spouses of certain foreign workers or students. LMIA-exempt streams are faster and have higher approval rates.",
          },
          {
            q: "What is Express Entry and how does it relate to work permits?",
            a: "Express Entry is Canada's main skilled worker immigration system managing the Federal Skilled Worker, Canadian Experience Class, and Federal Skilled Trades programs. It issues invitations to apply for permanent residence — not work permits. However, many Express Entry candidates already hold a Canadian work permit under the same NOC code, which strengthens their profile.",
          },
          {
            q: "What happens if my employer's LMIA is revoked after I apply?",
            a: "Your work permit application will be refused if the LMIA is revoked or expired before a decision is made. Always confirm the LMIA expiry date with your employer before submitting your application. A valid LMIA is typically valid for 18 months from the date of issue.",
          },
        ],
        topReasons: [
          { pct: 52, reason: "LMIA not obtained or invalid", detail: "Most work permits require a Labour Market Impact Assessment from the employer. Missing or expired LMIA is instant refusal." },
          { pct: 38, reason: "Qualifications don't match job offer", detail: "Educational credentials must match NOC code requirements. Unrecognized foreign degrees are a common issue." },
          { pct: 29, reason: "Employer compliance issues", detail: "Employer not registered, not paying minimum wage, or LMIA conditions not met." },
          { pct: 21, reason: "Insufficient funds to establish in Canada", detail: "Even with a job offer, officers want to see you can support yourself on arrival." },
          { pct: 15, reason: "Criminal or medical inadmissibility", detail: "Background checks and medical exams are required. Some conditions cause inadmissibility." },
        ],
        fixes: [
          { title: "Ensure LMIA is valid and complete", icon: "📋", impact: "Critical", desc: "Work with your employer to confirm the LMIA is current, matches your NOC code, and all conditions are documented." },
          { title: "Get credentials assessed (ECA)", icon: "🎓", impact: "High", desc: "Educational Credential Assessment from WES or other approved body confirms your degree equivalency in Canada." },
          { title: "Use LMIA-exempt pathways if possible", icon: "⚡", impact: "High", desc: "IEC, intra-company transfers, CUSMA workers — exempt streams have faster processing and higher approvals." },
          { title: "Prepare settlement funds proof", icon: "💰", impact: "Medium", desc: "Even with a job offer, show 3 months of living expenses in your bank account for the destination province." },
        ],
        documents: [
          "Valid job offer letter (detailed, signed)",
          "LMIA number (if required)",
          "Educational credentials and WES assessment",
          "Work experience documents",
          "Passport and travel history",
          "Police clearance certificate",
          "Medical exam results (if required)",
          "Proof of settlement funds",
        ],
        stats: {
          approvalTime: "2–27 weeks (varies by stream)",
          biometricsRequired: true,
          interviewRequired: false,
          onlineApply: true,
          appealAvailable: false,
        },
        tips: [
          "LMIA-exempt work permits (IEC, ICT) are significantly faster — explore if you qualify",
          "Express Entry Comprehensive Ranking System (CRS) score of 480+ gives strong chances",
          "Provincial Nominee Programs (PNPs) offer an alternative pathway with lower CRS requirements",
        ],
        successStories: "Applicants using LMIA-exempt pathways like the International Mobility Program have approval rates above 85%.",
      },
      transit: {
        rate: 12,
        risk: "Low",
        label: "Canada Transit Visa",
        trend: "stable",
        trendNote: "Transit visa requirements unchanged; processing fast at 6–24 hours",
        byNationality: { "Bangladesh": 15, "India": 8, "Pakistan": 14, "Nigeria": 18, "Average": 12 },
        seoStats: [
          { stat: "6–24 hours",   context: "typical processing time for Canada transit visa" },
          { stat: "12%",          context: "average refusal rate — lowest of all Canadian visa types" },
          { stat: "Under 24 hrs", context: "layover must be under 24 hours or full TRV is required" },
          { stat: "Free",         context: "Canada transit visa has no application fee" },
          { stat: "15 airports",  context: "Canada has 15 international airports requiring transit visas" },
        ],
        faqs: [
          {
            q: "Do I need a transit visa for a Canadian layover?",
            a: "It depends on your nationality and your connecting airport. If you are transiting through a Canadian airport and your passport requires a visa to enter Canada, you will likely need either a Canadian Transit Visa (C-1) or a valid Electronic Travel Authorization (eTA). Citizens of many countries are exempt. Check the IRCC website for your specific nationality.",
          },
          {
            q: "Can I leave the airport during a Canadian transit?",
            a: "With a transit visa, you must remain in the international transit area. If you want to leave the airport during your layover, you need a full Temporary Resident Visa (TRV), not a transit visa.",
          },
        ],
        topReasons: [
          { pct: 48, reason: "Applied too late", detail: "Transit visa must be approved before travel. Applications submitted within 48 hours of transit are routinely refused." },
          { pct: 35, reason: "Passport validity issues", detail: "Passport must be valid for the entire transit period plus 6 months." },
          { pct: 22, reason: "Layover longer than 24 hours", detail: "Extended layovers require a full TRV, not a transit visa." },
          { pct: 15, reason: "Missing onward ticket", detail: "Must show confirmed onward booking. Open-jaw itineraries without return confuse officers." },
        ],
        fixes: [
          { title: "Apply at least 2 weeks before transit", icon: "📅", impact: "High", desc: "Even though processing is fast, apply early. Weekend and holiday periods may slow decisions." },
          { title: "Show confirmed onward booking", icon: "✈️", impact: "High", desc: "Your complete itinerary — inbound flight, Canadian transit, outward flight — must be clear and consistent." },
          { title: "Keep layover under 24 hours", icon: "⏱️", impact: "Critical", desc: "Transit visa is for brief connections only. If your layover is longer, apply for a full TRV." },
        ],
        documents: [
          "Valid passport",
          "Confirmed inbound and outward flight tickets",
          "Destination country visa (if applicable)",
          "Transit visa application form",
        ],
        stats: {
          approvalTime: "6–24 hours",
          biometricsRequired: false,
          interviewRequired: false,
          onlineApply: true,
          appealAvailable: false,
        },
        tips: [
          "Apply at least 7–14 days before travel even though processing is fast",
          "Confirm with your airline whether transit visa is required for your specific route",
          "Transit visa holders must remain in the international transit zone",
        ],
        successStories: "Transit visas have the highest approval rate of any Canadian visa category when applied for in advance with complete documentation.",
      },
      business: {
        rate: 28,
        risk: "Medium",
        label: "Business TRV",
        trend: "stable",
        trendNote: "Business visa refusals similar to tourist TRV, slightly lower",
        byNationality: { "Bangladesh": 34, "India": 24, "Pakistan": 38, "Nigeria": 44, "Average": 28 },
        seoStats: [
          { stat: "72% approval",  context: "for applicants with formal Canadian company invitation" },
          { stat: "28%",           context: "overall refusal rate for business TRV applicants" },
          { stat: "15–21 days",    context: "standard processing time for business visitor visa" },
          { stat: "$10,000 CAD+",  context: "recommended financial proof for business trip funding" },
          { stat: "Same form",     context: "Business TRV uses IMM 5257 — same as tourist TRV" },
        ],
        faqs: [
          {
            q: "What business activities are allowed on a Canadian visitor visa?",
            a: "On a business TRV you can attend meetings, conferences, negotiations, trade shows, and conduct short-term training. You cannot receive Canadian-sourced income, be employed by a Canadian company, or work on a project that directly generates Canadian revenue. Violating this distinction can lead to removal and a future ban.",
          },
          {
            q: "Do I need an invitation letter for a Canadian business visa?",
            a: "While not mandatory, an invitation letter from a Canadian company dramatically improves approval rates. It should be on company letterhead, include the nature of business, meeting dates, company contact details, and a statement that the Canadian company is not paying your salary.",
          },
        ],
        topReasons: [
          { pct: 62, reason: "Weak business purpose evidence", detail: "No invitation letter from Canadian company, no conference registration, or vague description of business activities." },
          { pct: 45, reason: "Insufficient financial proof", detail: "Business trip expenses must be clearly funded. Personal or company bank statements required." },
          { pct: 33, reason: "No proof of established business", detail: "Trade license, company registration, tax returns confirming legitimate business activity." },
          { pct: 24, reason: "Ties to home country not established", detail: "Officers must believe you will return to run your business." },
        ],
        fixes: [
          { title: "Get an invitation from Canadian partner", icon: "📨", impact: "High", desc: "Invitation letter on Canadian company letterhead, with meeting dates, purpose, and contact details." },
          { title: "Show company financials", icon: "📊", impact: "High", desc: "Company bank statements, trade license, tax returns — prove your business is real and active." },
          { title: "Include conference or event registration", icon: "🎫", impact: "Medium", desc: "Registration for trade shows, conferences, or B2B meetings significantly strengthens purpose." },
        ],
        documents: [
          "Business invitation letter from Canadian company",
          "Trade license and company registration",
          "Company bank statements (6 months)",
          "Personal bank statements",
          "Conference/event registration (if applicable)",
          "Business card and company profile",
          "Employer letter (for employees attending on behalf of company)",
        ],
        stats: {
          approvalTime: "15–21 business days",
          biometricsRequired: true,
          interviewRequired: false,
          onlineApply: true,
          appealAvailable: true,
        },
        tips: [
          "Business TRV uses the same form as tourist TRV — the difference is in the supporting documents",
          "A prior Canadian TRV approval history greatly helps business visa applications",
        ],
        successStories: "Business visitors with formal Canadian company invitations and strong financial profiles achieve approval rates of 72%.",
      },
      family: {
        rate: 33,
        risk: "High",
        label: "Family Sponsorship / Super Visa",
        trend: "up",
        trendNote: "Family visa refusals increasing due to stricter financial requirements",
        byNationality: { "Bangladesh": 38, "India": 28, "Pakistan": 42, "Nigeria": 45, "Average": 33 },
        seoStats: [
          { stat: "5 years",          context: "Super Visa allows stay of up to 5 years per entry (2024 change)" },
          { stat: "$100,000 CAD",     context: "minimum medical insurance coverage required for Super Visa" },
          { stat: "68% approval",     context: "for Super Visa applicants with proper LICO evidence" },
          { stat: "LICO threshold",   context: "must be 30% above the Low Income Cut-Off for household size" },
          { stat: "8–12 weeks",       context: "standard processing time for Super Visa" },
          { stat: "33%",              context: "refusal rate for family visas — second highest category" },
        ],
        faqs: [
          {
            q: "What is the difference between a Super Visa and a regular family TRV?",
            a: "A Super Visa allows parents and grandparents of Canadian citizens or PRs to stay for up to 5 years per entry (increased from 2 years in 2024) and can be valid for up to 10 years. A regular TRV allows stays of up to 6 months per entry. The Super Visa requires Canadian medical insurance and sponsor income proof; the TRV does not.",
          },
          {
            q: "What income does a Canadian sponsor need for a Super Visa?",
            a: "The sponsor must show income at least 30% above the Low Income Cut-Off (LICO) for their household size. For example, in 2024, a household of 2 must show approximately CAD $47,813/year. Evidence is a Notice of Assessment (NOA) from CRA plus recent pay stubs and an employment letter.",
          },
          {
            q: "Can I buy Super Visa insurance from a foreign insurance company?",
            a: "No. Super Visa medical insurance must be purchased from a Canadian insurance company, provide a minimum of $100,000 coverage, and be valid for at least one year from the date of entry. Foreign insurance policies are not accepted. Several major Canadian insurers offer specific Super Visa insurance products.",
          },
        ],
        topReasons: [
          { pct: 65, reason: "Sponsor financial requirements not met", detail: "Canadian sponsor must meet LICO (Low Income Cut-Off) thresholds. Falling below means automatic refusal." },
          { pct: 48, reason: "Relationship not sufficiently proven", detail: "Insufficient evidence of genuine relationship — no communication history, no photos, inconsistent statements." },
          { pct: 36, reason: "Applicant's ties to home country weak", detail: "Officers must believe the visiting family member will return home after the visit." },
          { pct: 28, reason: "Super Visa insurance not meeting requirements", detail: "Medical insurance must be from a Canadian insurer, $100,000 minimum, 1 year coverage." },
        ],
        fixes: [
          { title: "Verify sponsor meets LICO threshold", icon: "💰", impact: "Critical", desc: "Sponsor must show income at least 30% above LICO for their household size. NOA (Notice of Assessment) from CRA required." },
          { title: "Build relationship evidence", icon: "📸", impact: "High", desc: "Photos together, WhatsApp/email history, video call logs, money transfer records. The more documented, the better." },
          { title: "Get proper Super Visa insurance", icon: "🛡️", impact: "Critical", desc: "Must be from a Canadian insurance company (not foreign), $100,000+ coverage, starting from arrival date." },
          { title: "Show applicant's home ties", icon: "🏠", impact: "High", desc: "Property, employment, own children at home, bank accounts — evidence they have reason to return." },
        ],
        documents: [
          "Sponsor's NOA (Notice of Assessment) from CRA",
          "Sponsor's employment letter and pay stubs",
          "Proof of relationship (birth certificate, marriage certificate)",
          "Photographs and communication history",
          "Super Visa medical insurance from Canadian insurer",
          "Applicant's bank statements and property documents",
          "Statutory declaration of support from sponsor",
        ],
        stats: {
          approvalTime: "8–12 weeks",
          biometricsRequired: true,
          interviewRequired: false,
          onlineApply: true,
          appealAvailable: true,
        },
        tips: [
          "Super Visa allows stays of up to 5 years at a time — much better than regular TRV for parents/grandparents",
          "If sponsor recently became PR, wait 12 months before sponsoring to show stable income",
        ],
        successStories: "Super Visa applications with proper LICO evidence and Canadian insurance have an approval rate of approximately 68%.",
      },
    },
  },
  "united-states": {
    name: "United States",
    flag: "🇺🇸",
    embassyUrl: "https://travel.state.gov/content/travel/en/us-visas.html",
    seoMeta: {
      title: "US Visa Rejection Rate 2024 — B2, F-1, H-1B Refusal Data by Nationality",
      description: "The US rejected 42% of B1/B2 tourist visa applications from South Asian nationals in 2024. Understand 214(b) refusals, real refusal rates, and proven fixes.",
      keywords: ["us visa rejection rate", "b2 visa refusal reasons", "214b refusal how to overcome", "us visa rejection bangladesh", "f1 visa refusal rate"],
    },
    quickFacts: [
      { label: "Total Visa Applications (2023)", value: "10.2M",  source: "US State Dept" },
      { label: "Overall B2 Refusal Rate",        value: "42%",   source: "State Dept 2024" },
      { label: "Embassies & Consulates",         value: "232",   source: "US State Dept" },
      { label: "214(b) Refusals",                value: "3.8M",  source: "State Dept 2023" },
      { label: "Interview Wait — Dhaka",          value: "60–90 days", source: "CEAC 2024" },
      { label: "F-1 Approval Rate",              value: "85%",   source: "SEVIS 2024" },
    ],
    monthlyTrends: {
      tourist: [38, 40, 42, 45, 48, 47, 43, 42, 41, 43, 44, 42],
      student: [14, 15, 16, 15, 14, 14, 13, 15, 16, 15, 15, 15],
      work:    [10, 10, 10, 11, 11, 10, 10, 10, 10, 10, 11, 10],
      months:  ["Jun'23","Jul","Aug","Sep","Oct","Nov","Dec","Jan'24","Feb","Mar","Apr","May"],
    },
    relatedDestinations: [
      { slug: "canada",         name: "Canada",         flag: "🇨🇦", rate: 38, risk: "High"   },
      { slug: "united-kingdom", name: "United Kingdom", flag: "🇬🇧", rate: 29, risk: "Medium" },
      { slug: "australia",      name: "Australia",      flag: "🇦🇺", rate: 22, risk: "Medium" },
      { slug: "schengen",       name: "Schengen Zone",  flag: "🇪🇺", rate: 19, risk: "Medium" },
      { slug: "japan",          name: "Japan",          flag: "🇯🇵", rate: 8,  risk: "Low"    },
      { slug: "uae",            name: "UAE",            flag: "🇦🇪", rate: 6,  risk: "Low"    },
    ],
    commonMistakes: [
      { mistake: "Mentioning plans to work or stay long-term in the US during the interview",     consequence: "Instant 214(b) refusal — the consular officer will end the interview" },
      { mistake: "Submitting a bank statement that shows a sudden large deposit before applying", consequence: "Officer flags 'parking' of funds — weakens financial credibility" },
      { mistake: "Dressing casually for the consular interview",                                  consequence: "First impression matters in a 2–3 minute interview; formal dress signals seriousness" },
      { mistake: "Not bringing original documents — only photocopies",                            consequence: "Officers may reject supporting evidence; originals are essential" },
      { mistake: "Waiting to reapply immediately after a 214(b) refusal without any change",     consequence: "Second refusal almost certain if circumstances haven't materially changed" },
    ],
    processingHistory: [
      { year: "2019", refusalRate: 33, applications: 10500000 },
      { year: "2020", refusalRate: 62, applications: 2100000  },
      { year: "2021", refusalRate: 55, applications: 3800000  },
      { year: "2022", refusalRate: 46, applications: 8200000  },
      { year: "2023", refusalRate: 42, applications: 10200000 },
    ],
    types: {
      tourist: {
        rate: 42,
        risk: "High",
        label: "B1/B2 Tourist/Business Visa",
        trend: "up",
        trendNote: "B2 refusals for South Asian applicants increased 8% in 2024",
        byNationality: { "Bangladesh": 48, "India": 35, "Pakistan": 52, "Nigeria": 62, "Average": 42 },
        seoStats: [
          { stat: "42%",           context: "of all B1/B2 applications from South Asia refused in 2024" },
          { stat: "71% of cases",  context: "refused under INA Section 214(b) — immigrant intent presumed" },
          { stat: "2–3 minutes",   context: "average consular interview duration for B2 visa applicants" },
          { stat: "60–90 days",    context: "interview wait time at US Embassy Dhaka as of May 2024" },
          { stat: "No appeal",     context: "B1/B2 refusals under 214(b) cannot be appealed — must reapply" },
          { stat: "58–65%",        context: "approval rate for applicants with govt job + property + dependents" },
        ],
        faqs: [
          {
            q: "What is a 214(b) refusal and how do I overcome it?",
            a: "Section 214(b) of the Immigration and Nationality Act presumes that every B-visa applicant intends to immigrate unless they can prove otherwise. Overcoming it requires demonstrating strong ties to your home country: a stable, senior job; dependents (spouse, children); property ownership; and clear, specific travel plans. A general statement that 'I will return' is never sufficient.",
          },
          {
            q: "How long do I have to wait after a US visa refusal before reapplying?",
            a: "There is no mandatory waiting period for B1/B2 refusals. However, reapplying without material change in circumstances almost always results in a second refusal. Most immigration advisors recommend waiting 3–6 months and ensuring your profile has changed — a new job, property purchase, or major life milestone like a child being born.",
          },
          {
            q: "Does a UK or Canada visa help with a US B2 application?",
            a: "Yes, significantly. A valid or recently expired visa from another major developed country (UK, Canada, Schengen, Australia) demonstrates that another consular officer has already assessed your non-immigrant intent positively. It does not guarantee US approval but reduces the perceived overstay risk substantially.",
          },
          {
            q: "Can I reapply for a US visa at a different embassy?",
            a: "You can apply at any US embassy, but the application will show your prior refusal history. Consular officers share records globally. Applying at a different embassy specifically to avoid your refusal record is considered misrepresentation and can lead to visa ineligibility.",
          },
          {
            q: "What is 221(g) administrative processing and how long does it take?",
            a: "221(g) is not a refusal — it means additional administrative review is required before a decision can be made. It is common for applicants who have travelled to certain countries or hold certain professions. There is no official processing time limit; it can take 30 days to 12+ months. You cannot travel to the US during this period.",
          },
        ],
        topReasons: [
          { pct: 71, reason: "Section 214(b) — Immigrant intent presumed", detail: "US law presumes all B-visa applicants intend to immigrate. You must overcome this by proving strong ties to your home country." },
          { pct: 55, reason: "Insufficient ties to home country", detail: "No stable employment, no family dependents, no property or business. Officers need multiple reasons you'll return." },
          { pct: 44, reason: "Poor financial standing", detail: "Cannot show ability to fund the trip without working illegally in the US. Consistent savings matter more than high balance." },
          { pct: 32, reason: "Prior visa overstay or violation", detail: "Any overstay in the US or other countries is a serious red flag. Prior 221(g) or refusal also increases scrutiny." },
          { pct: 25, reason: "Interview performance", detail: "Short, unclear, or inconsistent answers at the consular interview. Officers decide in 2–3 minutes based on your interview." },
          { pct: 18, reason: "Travel to restricted countries", detail: "Recent travel to countries under US sanctions or security concerns can trigger 221(g) administrative processing." },
        ],
        fixes: [
          { title: "Build strong employment ties", icon: "💼", impact: "Critical", desc: "A government or established private sector job with confirmed return date is the single strongest tie. Include promotion history, seniority, and pension/EPF contributions." },
          { title: "Prepare for the 214(b) presumption", icon: "🛡️", impact: "Critical", desc: "Every answer must reinforce why you will return. Practice concise, confident answers about your job, family, property, and future plans." },
          { title: "Show 12 months of bank activity", icon: "💰", impact: "High", desc: "Active account with regular salary deposits. Consular officers look for organic savings behaviour, not one-time large transfers." },
          { title: "Dress professionally, speak confidently", icon: "👔", impact: "High", desc: "US consular interviews are 2–3 minutes long. First impressions matter enormously. Speak in English if confident." },
          { title: "Never mention immigration intent", icon: "🚫", impact: "Critical", desc: "Any hint of wanting to stay permanently in the US triggers automatic 214(b) refusal. Focus on temporary purpose and return plans." },
          { title: "Apply with prior US visa history", icon: "✈️", impact: "High", desc: "Prior US visa holders with no violations have dramatically higher approval rates. A clean US entry/exit history is gold." },
        ],
        documents: [
          "DS-160 completed online",
          "Valid passport (6+ months validity)",
          "Visa application fee payment receipt (MRV fee)",
          "Interview appointment confirmation",
          "Photograph (per US visa specs)",
          "Employment letter with salary, position, approved leave",
          "Bank statements (12 months)",
          "Income tax returns (2–3 years)",
          "Property documents",
          "US sponsor letter (if applicable)",
          "Hotel and flight itinerary",
        ],
        stats: {
          approvalTime: "Interview + 3–5 business days",
          biometricsRequired: true,
          interviewRequired: true,
          onlineApply: false,
          appealAvailable: false,
        },
        tips: [
          "Schedule your interview as early as possible — Dhaka embassy slots book 60–90 days ahead",
          "If refused under 214(b), you can reapply immediately but circumstances must have changed",
          "221(g) administrative processing has no fixed timeline — apply at least 6 months before travel",
          "Prior UK, Canada, or Schengen visa significantly helps US B2 approval",
          "Bring originals of all documents — never only photocopies",
        ],
        successStories: "Applicants with stable government jobs, property ownership, and family dependents at home achieve US B2 approval rates of 58–65%.",
      },
      student: {
        rate: 15,
        risk: "Low",
        label: "F-1 Student Visa",
        trend: "stable",
        trendNote: "F-1 approvals stable; STEM students from all nationalities approved at high rates",
        byNationality: { "Bangladesh": 18, "India": 12, "Pakistan": 20, "Nigeria": 25, "Average": 15 },
        seoStats: [
          { stat: "1.05M",         context: "international students enrolled in US institutions in 2023–24" },
          { stat: "85%+",          context: "F-1 approval rate for applicants with full financial proof" },
          { stat: "120 days early",context: "maximum advance you can apply for an F-1 visa before program start" },
          { stat: "SEVIS fee",     context: "$350 I-901 fee required before F-1 visa interview" },
          { stat: "3-year OPT",    context: "STEM graduates eligible for 3-year Optional Practical Training extension" },
          { stat: "30 days",       context: "maximum you can enter the US before your program start date" },
        ],
        faqs: [
          {
            q: "How early can I apply for an F-1 student visa?",
            a: "You can apply up to 120 days before your program start date. However, you cannot enter the US earlier than 30 days before the program start date shown on your I-20, even with an approved visa. Apply early to account for delays, but do not purchase non-refundable travel before visa approval.",
          },
          {
            q: "What is SEVIS and what is the SEVIS fee?",
            a: "SEVIS (Student and Exchange Visitor Information System) is the US government database that tracks international students and exchange visitors. You must pay a one-time SEVIS fee of $350 (Form I-901) and receive your SEVIS ID before your F-1 interview. The fee is non-refundable even if your visa is refused.",
          },
          {
            q: "Can an F-1 student change their major or university?",
            a: "Yes, but you must transfer your SEVIS record to the new institution first. Your DSO (Designated School Official) at the original school must release the SEVIS record within 15 days. Transferring without proper SEVIS transfer violates your visa status and can result in removal.",
          },
        ],
        topReasons: [
          { pct: 55, reason: "Insufficient financial proof", detail: "Must show full tuition + living expenses without need for unauthorized work. Sponsorship documents must be comprehensive." },
          { pct: 40, reason: "Weak ties to home country / immigrant intent", detail: "F-1 still requires showing non-immigrant intent. Career plan back home is essential." },
          { pct: 30, reason: "Interview not convincing", detail: "Unclear academic goals, inability to explain the program, or weak English proficiency." },
          { pct: 22, reason: "I-20 issues", detail: "Expired, incorrect, or conditionally issued I-20. Must be from a SEVP-certified institution." },
        ],
        fixes: [
          { title: "Show full financial coverage", icon: "💰", impact: "High", desc: "Bank statements or sponsor documentation must cover 100% of tuition + $1,500/month living costs for the entire program duration." },
          { title: "Know your program inside out", icon: "🎓", impact: "High", desc: "Be ready to explain why you chose this specific university, this specific major, and how it connects to your career goals back home." },
          { title: "Have a clear post-graduation plan", icon: "🎯", impact: "High", desc: "Describe a specific job role or business venture in your home country that requires this US education." },
          { title: "Ensure I-20 is current and correct", icon: "📋", impact: "Critical", desc: "Check all details — program start date, SEVIS ID, financial requirements. Any error on the I-20 leads to refusal." },
        ],
        documents: [
          "Form I-20 from SEVP-certified institution",
          "DS-160 completed online",
          "SEVIS fee payment receipt (I-901)",
          "MRV fee payment receipt",
          "Academic transcripts and diplomas",
          "TOEFL/IELTS/GRE/GMAT scores",
          "Financial evidence (full program cost coverage)",
          "Sponsor's financial documents (if sponsored)",
          "Ties to home country evidence",
        ],
        stats: {
          approvalTime: "Interview + 2–3 business days",
          biometricsRequired: true,
          interviewRequired: true,
          onlineApply: false,
          appealAvailable: false,
        },
        tips: [
          "Apply at least 120 days before program start — earliest entry is 30 days before",
          "Top-ranked universities have higher visa approval rates — the institution matters",
          "STEM OPT extension (3 years) is a strong incentive that officers know about",
        ],
        successStories: "F-1 students with full financial proof, strong academic records, and clear career plans achieve approval rates of 85%+.",
      },
      work: {
        rate: 10,
        risk: "Low",
        label: "H-1B / Work Visa",
        trend: "stable",
        trendNote: "H-1B cap lottery continues; approval rate high for selected petitions",
        byNationality: { "Bangladesh": 12, "India": 9, "Pakistan": 14, "Nigeria": 16, "Average": 10 },
        seoStats: [
          { stat: "85,000",       context: "H-1B cap per year (65,000 regular + 20,000 advanced degree)" },
          { stat: "35%",          context: "acceptance rate in H-1B lottery (FY2025 registration)" },
          { stat: "15 days",      context: "premium processing available for $2,805 fee (2024)" },
          { stat: "6 years",      context: "maximum H-1B stay (3+3 years); extendable with green card pending" },
          { stat: "90%+",         context: "approval rate for petitions that survive RFE scrutiny" },
          { stat: "Oct 1",        context: "H-1B employment start date for cap-subject petitions" },
        ],
        faqs: [
          {
            q: "How does the H-1B lottery work in 2024?",
            a: "USCIS registers all H-1B petitions in March via an online system. If registrations exceed the 85,000 annual cap (which they have every year since 2014), a random lottery selects which registrations proceed. Selected registrants can then file full petitions between April 1 and June 30. Advanced degree holders (US Master's or higher) get a separate lottery preference.",
          },
          {
            q: "Can I stay in the US if my H-1B is denied?",
            a: "Not on the H-1B. However, if your prior visa (e.g. F-1 OPT) is still valid, you can remain until it expires. If you overstay, you accumulate unlawful presence which can trigger 3-year or 10-year bars from re-entering the US. Always consult an immigration attorney before your status expires.",
          },
        ],
        topReasons: [
          { pct: 45, reason: "Specialty occupation not proven", detail: "Role must require a specific bachelor's degree. Generic job descriptions don't qualify." },
          { pct: 30, reason: "Employer RFE not responded properly", detail: "USCIS issues RFEs for ambiguous petitions. Poor responses lead to denial." },
          { pct: 20, reason: "Wages below prevailing wage", detail: "Employer must pay at least the prevailing wage for the occupation and location." },
        ],
        fixes: [
          { title: "Ensure role clearly qualifies as specialty occupation", icon: "💼", impact: "Critical", desc: "Detailed job description referencing specific degree requirements. HR letters explaining why the role needs specialized education." },
          { title: "Respond thoroughly to any RFE", icon: "📋", impact: "High", desc: "Work with an immigration attorney to respond to USCIS RFEs. Missing the deadline or submitting weak evidence leads to denial." },
        ],
        documents: [
          "I-129 petition from employer",
          "LCA (Labor Condition Application)",
          "Degree certificate and transcripts",
          "Employment offer letter",
          "Prevailing wage determination",
        ],
        stats: {
          approvalTime: "3–6 months (regular), 15 days (premium processing)",
          biometricsRequired: true,
          interviewRequired: true,
          onlineApply: false,
          appealAvailable: true,
        },
        tips: [
          "H-1B cap is subject to lottery — apply in April for October start",
          "Cap-exempt employers (universities, nonprofits) offer H-1B without lottery",
        ],
        successStories: "H-1B petitions with detailed specialty occupation evidence and top-tier employer support have 90%+ approval rates.",
      },
      transit: {
        rate: 20,
        risk: "Medium",
        label: "C-1 Transit Visa",
        trend: "stable",
        trendNote: "C-1 transit required when transiting US airports without valid US visa",
        byNationality: { "Bangladesh": 24, "India": 15, "Pakistan": 26, "Nigeria": 32, "Average": 20 },
        seoStats: [
          { stat: "20%",       context: "refusal rate for C-1 transit visa applicants from South Asia" },
          { stat: "Interview", context: "required in person at US embassy — cannot be waived" },
          { stat: "4–6 weeks", context: "recommended minimum lead time before transit date" },
          { stat: "Under 24h", context: "layover duration required for C-1; longer stays need B1/B2" },
        ],
        faqs: [
          {
            q: "Do I need a C-1 transit visa to connect through a US airport?",
            a: "If your nationality requires a US visa and you do not already hold a valid B-1/B-2 or other US non-immigrant visa, you will need a C-1 transit visa even if you do not leave the airport terminal. The C-1 visa requires an in-person interview at a US Embassy, which can take 4–8 weeks to schedule.",
          },
        ],
        topReasons: [
          { pct: 55, reason: "Immigrant intent", detail: "Even transit visas require showing non-immigrant intent under 214(b)." },
          { pct: 40, reason: "Onward itinerary not confirmed", detail: "Must show confirmed onward flight booking beyond the US." },
          { pct: 28, reason: "Destination country visa issues", detail: "If destination country visa is missing or expired, transit visa will be refused." },
        ],
        fixes: [
          { title: "Show complete transit itinerary", icon: "✈️", impact: "High", desc: "Inbound flight, US connection, outbound flight — all confirmed bookings. Layover must be under 24 hours." },
          { title: "Bring destination country visa", icon: "📋", impact: "Critical", desc: "Your valid visa for the destination country must be current and valid for entry." },
        ],
        documents: ["DS-160", "Confirmed transit itinerary", "Onward destination visa", "Passport", "MRV fee payment"],
        stats: {
          approvalTime: "Interview + 3–5 days",
          biometricsRequired: true,
          interviewRequired: true,
          onlineApply: false,
          appealAvailable: false,
        },
        tips: [
          "C-1 interview required in person at US embassy",
          "Apply at least 4–6 weeks before travel",
        ],
        successStories: "Transit visa applicants with confirmed itineraries and valid destination visas achieve 80%+ approval rates.",
      },
      business: {
        rate: 35,
        risk: "High",
        label: "B1 Business Visa",
        trend: "stable",
        trendNote: "B1 combined with B2 in same visa (B1/B2) — business purpose must be clearly documented",
        byNationality: { "Bangladesh": 42, "India": 28, "Pakistan": 48, "Nigeria": 58, "Average": 35 },
        seoStats: [
          { stat: "35%",         context: "refusal rate for B1 business visa applicants from South Asia" },
          { stat: "65% refused", context: "cite unconvincing or vague business purpose as primary reason" },
          { stat: "B1/B2",      context: "single visa covers both tourist and business activities" },
          { stat: "No salary",   context: "from a US source is permitted on B1 visitor status" },
        ],
        faqs: [
          {
            q: "Can I sign contracts or negotiate deals on a B1 business visa?",
            a: "Yes. The B1 visa permits attending meetings, negotiating contracts, consulting with business associates, attending conferences, and undertaking short-term training. It does not permit receiving a salary from a US company, performing skilled or unskilled labor, or working on-site for a US employer.",
          },
        ],
        topReasons: [
          { pct: 65, reason: "Business purpose not convincing", detail: "US immigration law defines permitted B1 activities narrowly. Must not be gainful employment." },
          { pct: 48, reason: "Company ties not proven", detail: "No company registration, no employer letter, no evidence of business activity." },
          { pct: 35, reason: "214(b) immigrant intent", detail: "Same as tourist visa — strong home ties required." },
        ],
        fixes: [
          { title: "Define exact B1 permitted activities", icon: "📋", impact: "Critical", desc: "B1 allows: meetings, negotiations, conferences, short-term training. Not working for a US company or receiving US income." },
          { title: "Bring comprehensive company documents", icon: "📊", impact: "High", desc: "Company registration, bank statements, business profile, and invitation from US company." },
        ],
        documents: ["DS-160", "Company invitation from US partner", "Company registration and trade license", "Company bank statements", "Business profile", "Employment letter"],
        stats: {
          approvalTime: "Interview + 3–5 days",
          biometricsRequired: true,
          interviewRequired: true,
          onlineApply: false,
          appealAvailable: false,
        },
        tips: [
          "B1/B2 visa covers both tourist and business purposes — no need for separate visas",
          "Prior B1/B2 visa history with clean record dramatically increases approval",
        ],
        successStories: "B1 applicants with formal US company invitations and strong business profiles achieve 65% approval rates.",
      },
      family: {
        rate: 25,
        risk: "Medium",
        label: "K-1 / IR Family Visa",
        trend: "stable",
        trendNote: "IR1/CR1 immigrant visas for spouses have strict documentation requirements",
        byNationality: { "Bangladesh": 30, "India": 20, "Pakistan": 35, "Nigeria": 38, "Average": 25 },
        seoStats: [
          { stat: "12–36 months", context: "typical processing time for US immigrant family visa" },
          { stat: "125% of FPG",  context: "minimum income required from US petitioner (federal poverty guidelines)" },
          { stat: "K-1 visa",     context: "fiancé visa is faster than spousal visa — entry before marriage" },
          { stat: "I-864",        context: "Affidavit of Support is legally binding for 10 years" },
          { stat: "25%",          context: "refusal rate — primarily financial or relationship proof failures" },
        ],
        faqs: [
          {
            q: "What is the difference between a K-1 fiancé visa and a spousal (IR-1/CR-1) visa?",
            a: "The K-1 visa allows a foreign fiancé to enter the US before marriage. The couple must marry within 90 days of entry. The IR-1/CR-1 visa is for a couple who are already married; the foreign spouse enters the US as a permanent resident. K-1 is typically faster to obtain but requires marriage within 90 days.",
          },
          {
            q: "How much income must a US petitioner earn to sponsor a family visa?",
            a: "The sponsoring US citizen or permanent resident must earn at least 125% of the federal poverty guidelines for their household size (including the immigrant). In 2024, for a household of 2, this is approximately $24,650/year. Active military members only need 100% of the guidelines.",
          },
        ],
        topReasons: [
          { pct: 58, reason: "Relationship not sufficiently documented", detail: "Genuine relationship must be proven through extensive documentation. Arranged marriage without evidence of ongoing communication is high risk." },
          { pct: 44, reason: "Sponsor does not meet income requirements", detail: "US Petitioner must earn 125% above federal poverty guidelines for household size." },
          { pct: 32, reason: "Fraud or misrepresentation concerns", detail: "Inconsistencies in statements, photos, or timelines raise fraud flags." },
        ],
        fixes: [
          { title: "Build extensive relationship documentation", icon: "📸", impact: "Critical", desc: "2+ years of photos together, call logs, travel records showing in-person meetings, money transfer records, correspondence." },
          { title: "Petitioner must prove income threshold", icon: "💰", impact: "High", desc: "I-864 Affidavit of Support requires tax returns and W-2s showing 125% of poverty guidelines for family size." },
        ],
        documents: ["I-130 petition", "I-864 Affidavit of Support", "Relationship evidence (photos, calls, meetings)", "Sponsor's tax returns", "Marriage/engagement certificate", "Medical examination (Form I-693)"],
        stats: {
          approvalTime: "12–36 months (immigrant visa)",
          biometricsRequired: true,
          interviewRequired: true,
          onlineApply: false,
          appealAvailable: true,
        },
        tips: [
          "K-1 fiancé visa allows entry to the US before marriage — faster than spousal visa",
          "Once approved, immigrant visa holders get permanent resident status — not temporary",
        ],
        successStories: "Family visa applications with comprehensive relationship documentation and petitioner income above threshold achieve 75%+ approval.",
      },
    },
  },
  "united-kingdom": {
    name: "United Kingdom",
    flag: "🇬🇧",
    embassyUrl: "https://www.gov.uk/apply-uk-visa",
    seoMeta: {
      title: "UK Visa Rejection Rate 2024 — Standard Visitor, Student, Spouse Visa Refusal Data",
      description: "The UK refused 29% of Standard Visitor visa applications from South Asian nationals in 2024. See real refusal data, Home Office rules, and proven fixes.",
      keywords: ["uk visa rejection rate", "uk standard visitor visa refusal", "uk visa refusal reasons", "uk visa refusal bangladesh", "uk visa rejection 2024"],
    },
    quickFacts: [
      { label: "Total Visa Applications (2023)", value: "3.9M",   source: "Home Office" },
      { label: "Visitor Visa Refusal Rate",      value: "29%",    source: "Home Office 2024" },
      { label: "eVisa Transition",               value: "2024",   source: "UKVI" },
      { label: "Priority Processing Fee",        value: "£500+",  source: "UKVI 2024" },
      { label: "Admin Review Success Rate",      value: "28%",    source: "Home Office stats" },
      { label: "Spouse Visa Income Threshold",   value: "£29,000",source: "UKVI April 2024" },
    ],
    monthlyTrends: {
      tourist: [26, 28, 30, 33, 35, 32, 28, 29, 28, 30, 31, 29],
      student: [13, 14, 15, 14, 13, 13, 12, 14, 15, 14, 14, 14],
      work:    [8,  8,  8,  9,  9,  8,  7,  8,  8,  8,  8,  8],
      months:  ["Jun'23","Jul","Aug","Sep","Oct","Nov","Dec","Jan'24","Feb","Mar","Apr","May"],
    },
    relatedDestinations: [
      { slug: "united-states",  name: "United States",  flag: "🇺🇸", rate: 42, risk: "High"   },
      { slug: "canada",         name: "Canada",          flag: "🇨🇦", rate: 38, risk: "High"   },
      { slug: "australia",      name: "Australia",       flag: "🇦🇺", rate: 22, risk: "Medium" },
      { slug: "schengen",       name: "Schengen Zone",   flag: "🇪🇺", rate: 19, risk: "Medium" },
      { slug: "ireland",        name: "Ireland",         flag: "🇮🇪", rate: 16, risk: "Medium" },
      { slug: "uae",            name: "UAE",             flag: "🇦🇪", rate: 6,  risk: "Low"    },
    ],
    commonMistakes: [
      { mistake: "Not declaring a prior UK refusal in the application form",                         consequence: "Misrepresentation — can result in a 10-year ban from all UK immigration" },
      { mistake: "Showing bank statements with a large deposit made in the 30 days before applying", consequence: "Home Office labels this 'parking' — applications are typically refused for this alone" },
      { mistake: "Submitting hotel bookings as proof of accommodation without a cover letter",        consequence: "Insufficient without context — officers want to understand the full itinerary narrative" },
      { mistake: "Applying with expired biometrics without re-enrolling",                            consequence: "Application will be returned as incomplete" },
      { mistake: "Purchasing non-refundable flights before visa approval",                           consequence: "Financial loss and no guarantee of refund; only book refundable fares for visa purposes" },
    ],
    processingHistory: [
      { year: "2019", refusalRate: 24, applications: 3500000 },
      { year: "2020", refusalRate: 38, applications: 820000  },
      { year: "2021", refusalRate: 35, applications: 1400000 },
      { year: "2022", refusalRate: 30, applications: 3100000 },
      { year: "2023", refusalRate: 29, applications: 3900000 },
    ],
    types: {
      tourist: {
        rate: 29,
        risk: "Medium",
        label: "UK Standard Visitor Visa",
        trend: "stable",
        trendNote: "UK visitor visa refusals stable post-Brexit eVisa transition",
        byNationality: { "Bangladesh": 35, "India": 22, "Pakistan": 38, "Nigeria": 44, "Average": 29 },
        seoStats: [
          { stat: "29%",          context: "of Standard Visitor visa applications from South Asia refused in 2024" },
          { stat: "64% of cases", context: "cite insufficient financial evidence as the primary refusal reason" },
          { stat: "10-year ban",  context: "for misrepresentation including undeclared prior refusals" },
          { stat: "£500+",        context: "priority service cost for 5-business-day decision" },
          { stat: "3 months",     context: "earliest you can apply before travel date" },
          { stat: "eVisa",        context: "no physical sticker — UK visa is now fully digital since 2024" },
        ],
        faqs: [
          {
            q: "What is the UK eVisa and how does it work?",
            a: "Since 2024, the UK has transitioned to a fully digital immigration system. There is no sticker in your passport. Instead, you receive an eVisa linked to your passport, accessible through a UKVI online account. You share a 'share code' with airlines and border staff to prove your right to enter. It is essential to create your UKVI account and link your eVisa immediately upon approval.",
          },
          {
            q: "How much bank balance is needed for a UK Standard Visitor Visa?",
            a: "The Home Office does not specify a fixed minimum, but in practice officers expect to see sufficient funds to cover your entire trip — flights, accommodation, food, and activities — without needing to work in the UK. For a 2-week trip, £2,000–£5,000 is typically considered adequate. Critically, funds must be held genuinely for 3–6 months; lump-sum transfers in the 30 days before application are flagged as 'parking' and are a common refusal ground.",
          },
          {
            q: "Can I appeal a UK Standard Visitor Visa refusal?",
            a: "You cannot appeal a Standard Visitor Visa refusal on merit grounds. You can request an Administrative Review (AR) if you believe the decision was incorrect, which costs around £80 and takes up to 28 days. The success rate of ARs is approximately 28%. For complex cases, a judicial review via the Upper Tribunal is possible but expensive. Most applicants find it more effective to simply reapply with improved documentation.",
          },
          {
            q: "Does a prior Schengen, US, or Canada visa help with UK visa?",
            a: "Yes. A valid or recently expired Schengen, US, or Canada visa demonstrates that other major immigration authorities have assessed your non-immigrant intent positively. Include copies of these visas in your UK application. It does not guarantee UK approval but can help address concerns about travel history.",
          },
          {
            q: "What is the UK visa priority service and is it worth it?",
            a: "The Priority Visa Service costs an additional £500 and gives a decision within 5 business days instead of 15. The Super Priority Service costs £1,000 and aims for a decision by the end of the next working day after biometrics. For time-sensitive travel, the priority service is worth the cost. Approval rates do not differ between standard and priority processing.",
          },
        ],
        topReasons: [
          { pct: 64, reason: "Insufficient financial evidence", detail: "Home Office requires clear evidence you can fund the trip without needing to work. Savings must be genuinely held — not borrowed." },
          { pct: 51, reason: "Ties to home country not compelling", detail: "UK ECOs (Entry Clearance Officers) assess whether you are likely to overstay. Employment, property, and family ties must be documented." },
          { pct: 38, reason: "Accommodation not confirmed", detail: "No hotel bookings or host invitation letter with address and relationship explanation." },
          { pct: 29, reason: "Travel history gap", detail: "First-time applicants or those with no developed-country visa history face higher rejection rates." },
          { pct: 21, reason: "Previous UK refusal not declared", detail: "Must declare all prior UK refusals. Non-declaration is misrepresentation — grounds for 10-year ban." },
          { pct: 17, reason: "Applied too early or too late", detail: "Apply no earlier than 3 months before travel and no later than 3 weeks before (to allow processing)." },
        ],
        fixes: [
          { title: "Show 3–6 months of genuine savings", icon: "💰", impact: "High", desc: "Bank statements showing regular organic savings. Avoid lump-sum transfers in the 30 days before application. The Home Office checks for 'parking' funds." },
          { title: "Provide complete accommodation proof", icon: "🏠", impact: "High", desc: "Confirmed hotel bookings for entire stay, or host's invitation letter with full address, immigration status, and relationship to you." },
          { title: "Write a detailed cover letter", icon: "✍️", impact: "High", desc: "Explain every aspect of your trip: why UK, what you'll do, where you'll stay, who is funding it, and why you will definitely return home." },
          { title: "Include prior developed-country visas", icon: "✈️", impact: "Medium", desc: "Prior US, Canada, Schengen, or UAE visa significantly reduces 'travel history' concern. Include copies even if expired." },
          { title: "Apply online via UKVI portal", icon: "💻", impact: "Medium", desc: "Digital eVisa application via UKVI. Use the priority service (extra fee) if travel is within 3–4 weeks." },
          { title: "Declare all prior refusals honestly", icon: "📋", impact: "Critical", desc: "UK takes misrepresentation extremely seriously. Even a 'forgotten' refusal found in your record results in 10-year ban." },
        ],
        documents: [
          "Online UKVI application form",
          "Valid passport + all previous passports",
          "Biometrics at VFS Global",
          "Bank statements (3–6 months, all accounts)",
          "Employment letter (position, salary, leave dates)",
          "Payslips (3–6 months)",
          "Hotel bookings or host invitation letter",
          "Return flight itinerary",
          "Cover letter",
          "Proof of accommodation",
          "Travel history copies (previous visas, entry stamps)",
          "Income tax returns or P60 equivalent",
        ],
        stats: {
          approvalTime: "15–21 business days (standard), 5 days (priority)",
          biometricsRequired: true,
          interviewRequired: false,
          onlineApply: true,
          appealAvailable: true,
        },
        tips: [
          "UK eVisa is digital — no sticker in passport. You need a UKVI online account to prove your immigration status",
          "Priority service (£500+) gives decision within 5 business days — worth it for time-sensitive travel",
          "Apply no earlier than 3 months before travel — applications opened too early are sometimes refused",
          "If refused, you have a right of administrative review — not a full appeal. Hire a solicitor for complex cases",
          "Always book refundable hotels and flexible flights specifically for the visa application",
        ],
        successStories: "UK visitor visa applicants with stable employment, 3–6 months bank history, and clear travel purpose achieve approval rates of 71%.",
      },
      student: {
        rate: 14,
        risk: "Low",
        label: "UK Student Visa (Tier 4)",
        trend: "stable",
        trendNote: "UK student visa approvals strong following UKVI reforms",
        byNationality: { "Bangladesh": 16, "India": 11, "Pakistan": 18, "Nigeria": 22, "Average": 14 },
        seoStats: [
          { stat: "679,970",    context: "student visas granted by the UK in year ending June 2023" },
          { stat: "86%+",       context: "approval rate when CAS and 28-day funds rule are met" },
          { stat: "28 days",    context: "funds must be continuously held in account before application" },
          { stat: "ATAS cert",  context: "required for certain sensitive subjects (e.g. nuclear, advanced engineering)" },
          { stat: "B2 English", context: "minimum English level required for most UK student visas" },
          { stat: "£1,334/mo",  context: "living cost allowance for students in London (2024)" },
        ],
        faqs: [
          {
            q: "What is the 28-day rule for UK student visa funds?",
            a: "UKVI requires that you hold sufficient funds (tuition fee + living cost allowance) in your bank account continuously for 28 consecutive days ending no more than 31 days before you apply. The bank statement or official letter must clearly show the dates and that the balance never fell below the required amount on any of those 28 days.",
          },
          {
            q: "What is an ATAS certificate and do I need one?",
            a: "ATAS (Academic Technology Approval Scheme) is required for students from certain countries studying specific sensitive subjects — including advanced engineering, materials science, and military technologies — at postgraduate level. Check the ATAS website with your specific subject code. Applying without an ATAS certificate when one is required will result in refusal.",
          },
          {
            q: "Can I extend my UK student visa after graduation?",
            a: "Yes. You can switch to the Graduate Route visa (post-study work visa), which gives 2 years (or 3 years for PhD graduates) to work or look for work in the UK without needing employer sponsorship. Applications must be made before your student visa expires and from within the UK.",
          },
        ],
        topReasons: [
          { pct: 50, reason: "Financial requirements not met", detail: "Must show tuition + £1,015–£1,265/month living costs for course duration. Funds must be held for 28 consecutive days." },
          { pct: 38, reason: "CAS (Confirmation of Acceptance for Studies) issues", detail: "Expired or incorrect CAS, or inconsistency between CAS and application form." },
          { pct: 28, reason: "English language proof missing", detail: "Must meet B2 English level (IELTS 5.5–6.5 depending on institution). Official test results required." },
        ],
        fixes: [
          { title: "Hold funds for 28 consecutive days", icon: "💰", impact: "Critical", desc: "Bank balance must be clearly above the threshold for 28 days before application. Screenshot or official bank letter required." },
          { title: "Verify CAS is current and complete", icon: "📋", impact: "Critical", desc: "CAS expires. Check start date, institution details, and that all details match your application exactly." },
          { title: "IELTS score must meet institution requirement", icon: "📊", impact: "High", desc: "Check both the UKVI requirement AND your university's requirement. The higher threshold applies." },
        ],
        documents: [
          "CAS (Confirmation of Acceptance for Studies)",
          "ATAS certificate (if required for subject)",
          "Bank statements (28-day rule)",
          "English language test results",
          "Academic transcripts",
          "Tuberculosis test result (certain nationalities)",
          "Parental consent (if under 18)",
        ],
        stats: {
          approvalTime: "3 weeks",
          biometricsRequired: true,
          interviewRequired: false,
          onlineApply: true,
          appealAvailable: false,
        },
        tips: [
          "Apply no earlier than 6 months before course start",
          "Students from high-risk countries may receive a tuberculosis test requirement — check early",
        ],
        successStories: "UK student visa applicants meeting all financial and CAS requirements achieve 86%+ approval rates.",
      },
      work: {
        rate: 8,
        risk: "Low",
        label: "UK Skilled Worker Visa",
        trend: "down",
        trendNote: "Skilled Worker approvals high; NHS and tech sectors particularly strong",
        byNationality: { "Bangladesh": 10, "India": 7, "Pakistan": 11, "Nigeria": 12, "Average": 8 },
        seoStats: [
          { stat: "£38,700",   context: "minimum salary threshold for Skilled Worker visa (April 2024)" },
          { stat: "92%+",      context: "approval rate when CoS and salary thresholds are fully met" },
          { stat: "SOC code",  context: "must match the job role exactly or application fails" },
          { stat: "NHS",       context: "Health and Care Worker visa offers lower fees and no IHS surcharge" },
          { stat: "3–8 weeks", context: "typical processing time for Skilled Worker visa" },
          { stat: "5 years",   context: "initial visa grant; can lead to settlement after 5 years" },
        ],
        faqs: [
          {
            q: "What is the new £38,700 Skilled Worker salary threshold?",
            a: "From April 2024, the general salary threshold for Skilled Worker visas increased to £38,700 per year (up from £26,200). However, lower thresholds apply to shortage occupations, healthcare workers, and 'new entrant' roles. The actual threshold is the higher of £38,700 and the 'going rate' for the specific SOC code.",
          },
          {
            q: "Can my employer be on the Skilled Worker sponsor register?",
            a: "Your employer must hold a valid UK Sponsor Licence to issue a Certificate of Sponsorship (CoS). You can check whether your employer is on the register using the official UKVI employer checker tool. New employers can apply for a sponsor licence, but the process takes 8 weeks and approval is not guaranteed.",
          },
        ],
        topReasons: [
          { pct: 48, reason: "Salary below minimum threshold", detail: "Must meet the going rate for the SOC code AND the general threshold (£38,700 from April 2024)." },
          { pct: 35, reason: "CoS (Certificate of Sponsorship) issues", detail: "Sponsor licence issues or incorrect CoS details." },
          { pct: 25, reason: "English language requirement not met", detail: "B1 English required for Skilled Worker. Must be proven through approved test or exempt route." },
        ],
        fixes: [
          { title: "Verify salary meets new thresholds", icon: "💰", impact: "Critical", desc: "£38,700 general threshold from April 2024 (lower for shortage occupations). Confirm with your employer before applying." },
          { title: "Check sponsor licence is current", icon: "🏢", impact: "Critical", desc: "UK employers must hold a valid sponsor licence. Check the UKVI register before accepting a job offer." },
        ],
        documents: [
          "Certificate of Sponsorship (CoS) from employer",
          "English language evidence",
          "Tuberculosis test (certain nationalities)",
          "Maintenance funds proof (if below threshold)",
          "Qualifications certificates",
        ],
        stats: {
          approvalTime: "3–8 weeks",
          biometricsRequired: true,
          interviewRequired: false,
          onlineApply: true,
          appealAvailable: true,
        },
        tips: [
          "Health and Care Worker visa offers lower fees and NHS surcharge exemption for eligible roles",
          "Shortage occupation roles have lower salary thresholds",
        ],
        successStories: "Skilled Worker visa applicants with compliant CoS and salary meeting thresholds achieve 92%+ approval rates.",
      },
      transit: {
        rate: 18,
        risk: "Medium",
        label: "Direct Airside Transit Visa (DATV)",
        trend: "stable",
        trendNote: "DATV required for specific nationalities even when not leaving the terminal",
        byNationality: { "Bangladesh": 22, "India": 8, "Pakistan": 25, "Nigeria": 30, "Average": 18 },
        seoStats: [
          { stat: "18%",       context: "DATV refusal rate for applicants from visa-required nationalities" },
          { stat: "Free",      context: "DATV has no application fee unlike other UK visa types" },
          { stat: "15 days",   context: "standard processing time — plan 3 weeks minimum" },
          { stat: "No entry",  context: "DATV holders cannot exit the international transit zone into UK" },
        ],
        faqs: [
          {
            q: "Which nationalities need a DATV for UK transit?",
            a: "Nationals of Afghanistan, Angola, Bangladesh, Eritrea, Ethiopia, Ghana, Iran, Iraq, Ivory Coast, Libya, Nigeria, Pakistan, Rwanda, Senegal, Sierra Leone, Somalia, South Sudan, Sri Lanka, Sudan, Syria, and several other countries require a DATV even if they are only transiting airside through a UK airport and not entering the UK.",
          },
        ],
        topReasons: [
          { pct: 55, reason: "Applied too late", detail: "Apply at least 2–3 weeks before transit. Last-minute applications are often refused." },
          { pct: 38, reason: "Onward visa missing or invalid", detail: "Must show valid visa for destination country." },
          { pct: 25, reason: "Financial evidence missing", detail: "Even for transit, basic financial evidence is required." },
        ],
        fixes: [
          { title: "Apply 3 weeks before transit", icon: "📅", impact: "High", desc: "Standard processing is 15 business days. Never apply last-minute for DATV." },
          { title: "Show valid onward visa and tickets", icon: "✈️", impact: "Critical", desc: "Complete itinerary with confirmed onward booking and valid destination country visa." },
        ],
        documents: ["Valid passport", "Confirmed onward flight ticket", "Destination country visa", "UKVI application form"],
        stats: {
          approvalTime: "15 business days",
          biometricsRequired: false,
          interviewRequired: false,
          onlineApply: true,
          appealAvailable: false,
        },
        tips: [
          "DATV holders must remain in the international zone — no entry to UK",
          "Check if your nationality requires DATV — many countries are exempt",
        ],
        successStories: "DATV applications with complete itinerary and destination visa achieve 88%+ approval rates.",
      },
      business: {
        rate: 24,
        risk: "Medium",
        label: "UK Business Visitor Visa",
        trend: "stable",
        trendNote: "Business visitor visa uses same Standard Visitor route with additional business documents",
        byNationality: { "Bangladesh": 30, "India": 18, "Pakistan": 34, "Nigeria": 40, "Average": 24 },
        seoStats: [
          { stat: "24%",         context: "refusal rate for UK business visitor applications from South Asia" },
          { stat: "Same route",  context: "UK business visitor uses Standard Visitor visa — same form, different docs" },
          { stat: "No work",     context: "permitted — business visitor cannot receive UK-sourced income" },
          { stat: "76% approved",context: "for applicants with formal UK company invitation and strong employer backing" },
        ],
        faqs: [
          {
            q: "Can I be paid by my home country employer while on a UK business visitor visa?",
            a: "Yes. You can be paid your normal salary by your home country employer while attending meetings or conferences in the UK. The key restriction is that you cannot receive payment from a UK source, do work that amounts to employment in the UK, or provide services to UK clients in a way that would normally be done by an employed person.",
          },
        ],
        topReasons: [
          { pct: 58, reason: "Business activities not permitted under visitor rules", detail: "UK visitor visa does not permit work or employment. Permitted activities are specific — meetings, conferences, training." },
          { pct: 44, reason: "UK company invitation missing", detail: "No invitation letter from UK business contact or conference organizer." },
          { pct: 32, reason: "Financial evidence weak", detail: "Cannot show ability to fund UK trip costs." },
        ],
        fixes: [
          { title: "Get formal invitation from UK entity", icon: "📨", impact: "High", desc: "Invitation letter from UK company or conference organizer, on headed paper, with contact details and purpose." },
          { title: "Define permitted business activities clearly", icon: "📋", impact: "High", desc: "Attend meetings, negotiate deals, attend conferences. Do NOT claim you will be working for a UK company." },
        ],
        documents: ["UK company invitation letter", "Company registration and financial proof", "Conference registration", "Employment letter from home company", "Bank statements"],
        stats: {
          approvalTime: "15 business days (standard), 5 days (priority)",
          biometricsRequired: true,
          interviewRequired: false,
          onlineApply: true,
          appealAvailable: true,
        },
        tips: [
          "Business visitor can also attend exhibitions, sign deals, and do short unpaid training",
          "If paid by UK entity, this becomes work — requires Skilled Worker visa",
        ],
        successStories: "Business visitor applications with formal UK invitations and strong employer backing achieve 76% approval rates.",
      },
      family: {
        rate: 31,
        risk: "High",
        label: "UK Family Visa / Spouse Visa",
        trend: "up",
        trendNote: "Family visa requirements tightened; income threshold raised to £29,000 in 2024",
        byNationality: { "Bangladesh": 36, "India": 25, "Pakistan": 40, "Nigeria": 45, "Average": 31 },
        seoStats: [
          { stat: "£29,000",     context: "new minimum income threshold for UK spouse visa sponsor (April 2024)" },
          { stat: "A1 English",  context: "minimum English level required for spouse/partner visa entry" },
          { stat: "24 weeks",    context: "standard processing time for UK spouse visa" },
          { stat: "5-year route",context: "path to settlement requires 5 years residence on family visa" },
          { stat: "31%",         context: "refusal rate — mainly financial threshold and relationship proof failures" },
          { stat: "£16,000",     context: "savings can supplement sponsor's income if held for 6 months" },
        ],
        faqs: [
          {
            q: "What is the new £29,000 income threshold for UK spouse visa?",
            a: "From April 4, 2024, the UK sponsor's minimum income requirement for a spouse/partner visa increased from £18,600 to £29,000. This will rise further to £34,500 by late 2024 and to £38,700 by early 2025. If the sponsor cannot meet the threshold through income alone, cash savings above £16,000 can supplement the shortfall.",
          },
          {
            q: "What English test do I need for a UK spouse visa?",
            a: "You must demonstrate A1 English (basic user level) to obtain the initial spouse visa. When you extend from 2.5 to 5 years, you need A2 English. To apply for indefinite leave to remain (settlement), you need B1 English. The test must be from a UKVI-approved provider such as IELTS Life Skills or Trinity College London.",
          },
          {
            q: "How long does it take to settle in the UK on a spouse visa?",
            a: "The standard route takes 5 years: you enter on an initial 2.5-year visa, extend for another 2.5 years, then apply for indefinite leave to remain (ILR). After holding ILR for 12 months, you can apply for British citizenship. A shorter 'accelerated' route exists for victims of domestic violence and certain other circumstances.",
          },
        ],
        topReasons: [
          { pct: 66, reason: "Financial requirement not met", detail: "UK sponsor must earn at least £29,000 (raised April 2024). Previous threshold was £18,600. Many applications caught by this change." },
          { pct: 52, reason: "Genuine relationship not proven", detail: "Home Office looks for evidence of cohabitation, joint finances, regular communication, and shared life plans." },
          { pct: 38, reason: "English language requirement", detail: "Applicants from most countries must pass A1 English (IELTS Life Skills or equivalent) to enter, A2 to extend." },
          { pct: 28, reason: "Suitability requirements", detail: "Criminal record, past immigration violations, or previous visa refusals affect suitability." },
        ],
        fixes: [
          { title: "Confirm sponsor meets £29,000 threshold", icon: "💰", impact: "Critical", desc: "P60, payslips, employment letter. Self-employed sponsors need SA302 returns. Threshold will rise further — check current requirement." },
          { title: "Take A1 English test if required", icon: "📊", impact: "Critical", desc: "Book IELTS Life Skills A1. Test must be from UKVI-approved centre. Results valid 2 years." },
          { title: "Document relationship extensively", icon: "📸", impact: "High", desc: "Joint bank accounts, bills, lease, photos over years, evidence of visits, communication logs." },
        ],
        documents: [
          "UK sponsor's payslips and P60",
          "Employment letter confirming salary",
          "Evidence of relationship (photos, communications, visits)",
          "English language test results (A1)",
          "Accommodation proof in UK",
          "Passport and travel history",
        ],
        stats: {
          approvalTime: "24 weeks (standard)",
          biometricsRequired: true,
          interviewRequired: false,
          onlineApply: true,
          appealAvailable: true,
        },
        tips: [
          "Income threshold will continue rising in 2025 — check current requirement before applying",
          "If sponsor cannot meet income requirement alone, savings over £16,000 can supplement",
        ],
        successStories: "UK spouse visa applicants meeting financial requirements with strong relationship evidence achieve 69% approval rates.",
      },
    },
  },
};

export const VISA_TYPE_LABELS = {
  tourist:  { label: "Tourist Visa",   icon: "✈️",  color: "bg-blue-100 text-blue-800 border-blue-200" },
  student:  { label: "Student Visa",   icon: "🎓",  color: "bg-purple-100 text-purple-800 border-purple-200" },
  work:     { label: "Work Visa",      icon: "💼",  color: "bg-green-100 text-green-800 border-green-200" },
  transit:  { label: "Transit Visa",   icon: "🔁",  color: "bg-cyan-100 text-cyan-800 border-cyan-200" },
  business: { label: "Business Visa",  icon: "🤝",  color: "bg-orange-100 text-orange-800 border-orange-200" },
  family:   { label: "Family Visa",    icon: "👨‍👩‍👧", color: "bg-pink-100 text-pink-800 border-pink-200" },
};

export const RISK_CONFIG = {
  Low:    { color: "text-green-700", bg: "bg-green-50",  border: "border-green-200",  bar: "bg-green-500" },
  Medium: { color: "text-amber-700", bg: "bg-amber-50",  border: "border-amber-200",  bar: "bg-amber-500" },
  High:   { color: "text-red-700",   bg: "bg-red-50",    border: "border-red-200",    bar: "bg-red-500" },
};

export const IMPACT_CONFIG = {
  Critical: { color: "text-red-700 bg-red-50 border-red-200" },
  High:     { color: "text-orange-700 bg-orange-50 border-orange-200" },
  Medium:   { color: "text-amber-700 bg-amber-50 border-amber-200" },
};

/**
 * ✅ FIXED: Exact slug-to-key matching
 * Tries exact match first, then partial, then falls back to generic.
 */
export function getRejectionData(destSlug) {
  // 1. Exact match
  if (REJECTION_RULES[destSlug]) {
    return { key: destSlug, ...REJECTION_RULES[destSlug] };
  }

  // 2. Partial match (slug contains a known key, e.g. "united-states-of-america" → "united-states")
  const partialKey = Object.keys(REJECTION_RULES).find(k => destSlug.includes(k));
  if (partialKey) {
    return { key: partialKey, ...REJECTION_RULES[partialKey] };
  }

  // 3. Generic fallback
  const destName = destSlug
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    key: "generic",
    name: destName,
    flag: "🌍",
    embassyUrl: null,
    quickFacts: [],
    monthlyTrends: null,
    relatedDestinations: [],
    commonMistakes: [],
    processingHistory: [],
    types: {
      tourist:  { rate: 25, risk: "Medium", label: "Tourist / Visitor Visa", trend: "stable", trendNote: "Processing times vary by embassy", topReasons: [], fixes: [], documents: [], tips: [], stats: { approvalTime: "Varies", biometricsRequired: false, interviewRequired: false, onlineApply: false, appealAvailable: false }, seoStats: [], faqs: [] },
      student:  { rate: 18, risk: "Medium", label: "Student Visa",           trend: "stable", trendNote: "", topReasons: [], fixes: [], documents: [], tips: [], stats: { approvalTime: "Varies", biometricsRequired: false, interviewRequired: false, onlineApply: false, appealAvailable: false }, seoStats: [], faqs: [] },
      work:     { rate: 15, risk: "Low",    label: "Work Visa",              trend: "stable", trendNote: "", topReasons: [], fixes: [], documents: [], tips: [], stats: { approvalTime: "Varies", biometricsRequired: false, interviewRequired: false, onlineApply: false, appealAvailable: false }, seoStats: [], faqs: [] },
      transit:  { rate: 10, risk: "Low",    label: "Transit Visa",           trend: "stable", trendNote: "", topReasons: [], fixes: [], documents: [], tips: [], stats: { approvalTime: "Varies", biometricsRequired: false, interviewRequired: false, onlineApply: false, appealAvailable: false }, seoStats: [], faqs: [] },
      business: { rate: 20, risk: "Medium", label: "Business Visa",          trend: "stable", trendNote: "", topReasons: [], fixes: [], documents: [], tips: [], stats: { approvalTime: "Varies", biometricsRequired: false, interviewRequired: false, onlineApply: false, appealAvailable: false }, seoStats: [], faqs: [] },
      family:   { rate: 22, risk: "Medium", label: "Family Visa",            trend: "stable", trendNote: "", topReasons: [], fixes: [], documents: [], tips: [], stats: { approvalTime: "Varies", biometricsRequired: false, interviewRequired: false, onlineApply: false, appealAvailable: false }, seoStats: [], faqs: [] },
    },
  };
}