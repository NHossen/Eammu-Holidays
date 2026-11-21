import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/malaysia/credit-transfer-from-malaysia-to-uk-australia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Credit Transfer from Malaysia: UK, Australia, Canada, EU | Eammu",
  "description": "Credit transfer from Malaysia to UK, Australia, Canada and Europe for Bangladeshi students: 2+1 and 1+2 routes, documents, costs, visa checks and risks.",
  "alternates": {
    "canonical": "https://eammu.com/study/malaysia/credit-transfer-from-malaysia-to-uk-australia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Credit Transfer from Malaysia: UK, Australia, Canada, EU | Eammu",
    "description": "Credit transfer from Malaysia to UK, Australia, Canada and Europe for Bangladeshi students: 2+1 and 1+2 routes, documents, costs, visa checks and risks.",
    "url": "https://eammu.com/study/malaysia/credit-transfer-from-malaysia-to-uk-australia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Credit Transfer from Malaysia: UK, Australia, Canada, EU | Eammu",
    "description": "Credit transfer from Malaysia to UK, Australia, Canada and Europe for Bangladeshi students: 2+1 and 1+2 routes, documents, costs, visa checks and risks."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Malaysia", "href": "/study/malaysia"}, {"name": "Credit Transfer to UK/Australia", "href": "/study/malaysia/credit-transfer-from-malaysia-to-uk-australia"}];
const NAV = [
  {
    "label": "Malaysia Hub",
    "pages": [
      {
        "href": "/study/malaysia",
        "label": "Study in Malaysia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/malaysia/study-in-malaysia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/malaysia/study-in-malaysia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/malaysia/cost-of-living-in-malaysia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/malaysia/cheapest-universities-in-malaysia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/malaysia/top-universities-in-malaysia",
        "label": "Top Universities"
      },
      {
        "href": "/study/malaysia/public-vs-private-universities-in-malaysia",
        "label": "Public vs Private"
      },
      {
        "href": "/study/malaysia/scholarships-in-malaysia-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/malaysia/study-gap-accepted-universities-in-malaysia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/malaysia/study-in-malaysia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/malaysia/study-in-malaysia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/malaysia/malaysia-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/malaysia/mbbs-in-malaysia-for-bangladeshi-students",
        "label": "MBBS in Malaysia"
      },
      {
        "href": "/study/malaysia/mba-in-malaysia-for-bangladeshi-students",
        "label": "MBA in Malaysia"
      },
      {
        "href": "/study/malaysia/cse-and-it-courses-in-malaysia",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/malaysia/credit-transfer-from-malaysia-to-uk-australia",
        "label": "Credit Transfer to UK/Australia"
      },
      {
        "href": "/study/malaysia/student-accommodation-in-malaysia",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, EMGS & Work Rules",
    "pages": [
      {
        "href": "/study/malaysia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/malaysia/emgs-visa-process-and-tracking-guide",
        "label": "EMGS Process & Tracking"
      },
      {
        "href": "/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa",
        "label": "Bank Solvency"
      },
      {
        "href": "/study/malaysia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/malaysia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/malaysia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/malaysia/top-universities-in-malaysia",
    "title": "Top Universities in Malaysia",
    "description": "Overview of leading public, private and branch-campus universities in Malaysia and how to choose among them."
  },
  {
    "href": "/study/malaysia/cse-and-it-courses-in-malaysia",
    "title": "CSE and IT Courses in Malaysia",
    "description": "Computer science, software engineering, data science and cybersecurity study options in Malaysia for Bangladeshi students."
  },
  {
    "href": "/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students",
    "title": "Tuition Fees in Malaysia for Bangladeshi Students",
    "description": "Realistic tuition ranges in MYR and BDT for foundation, diploma, bachelor’s and master’s programmes in Malaysia."
  },
  {
    "href": "/study/malaysia/emgs-visa-process-and-tracking-guide",
    "title": "EMGS Visa Process and Tracking Guide",
    "description": "What EMGS is, how the percentage stages (5% to 70%) are commonly read, and what the eVAL means."
  }
];

// Comparison tables (plain data, rendered with the same Tailwind table pattern below).
const TERMS_TABLE = {
  head: ['Term', 'What it means', 'Where it is typically used'],
  rows: [
    ['Credit transfer', 'A receiving institution accepts credits you earned elsewhere and counts them toward its own degree. It decides subject by subject.', 'Moving between universities, within or across countries.'],
    ['University transfer', 'Moving your enrolment from one university to another, usually into a later year of a similar programme.', 'Common label for any move; the real result depends on credits accepted.'],
    ['Course exemption', 'You are excused from specific modules because you already studied equivalent content. You may still need to complete the total credits required for the degree.', 'Diploma-to-degree entry, professional bodies, some Australian and UK courses.'],
    ['Advanced standing', 'Entry beyond the first year, or a reduced study load, based on recognised prior study.', 'Australia, Canada, UK final-year or second-year entry.'],
    ['Articulation / progression agreement', 'A written arrangement between two institutions that maps specific programmes and sets conditions (grades, English) for progression.', 'Partner programmes such as 2+1, 2+2 or diploma-to-degree routes.'],
    ['Twinning programme', 'A programme delivered in part by a local institution and in part by a foreign partner, usually with a structured study plan.', 'Malaysian private institutions with foreign partners.'],
    ['Top-up degree', 'A shorter final stage (often one year) that converts a diploma or foundation degree into a full bachelor’s degree.', 'UK and Australia, usually after an eligible diploma.'],
  ],
};
const PATHWAY_TABLE = {
  head: ['Pathway', 'Meaning', 'Typical study arrangement', 'Important considerations'],
  rows: [
    ['2+1', 'Two years in Malaysia, one year abroad', 'Depends on programme; usually a three-year bachelor’s structure', 'A formal progression agreement may apply; entry grades and English scores are usually set by the receiving university'],
    ['1+2', 'One year in Malaysia, two years abroad', 'Depends on programme', 'Receiving university assessment; most of the cost is paid abroad'],
    ['2+2', 'Two years in Malaysia, two years abroad', 'Common in some articulation arrangements, especially for four-year degrees', 'Subject and credit compatibility must be confirmed module by module'],
    ['3+0', 'Entire degree completed in Malaysia', 'A foreign university may award or validate the degree', 'Not necessarily a transfer pathway; there may be no study period abroad at all'],
    ['Diploma to Degree', 'Eligible diploma credits are transferred into a bachelor’s programme', 'Depends on qualification', 'Subject mapping and academic assessment; some credits may be exempted but not all'],
  ],
};
const COST_TABLE = {
  head: ['Cost area', 'Malaysia', 'United Kingdom', 'Australia', 'Canada', 'Europe'],
  rows: [
    ['Tuition (annual unless stated)', 'MYR per year; varies by university and programme, see our tuition guide', 'GBP per year; varies by university and subject', 'AUD per year; varies by university and field', 'CAD per year; varies by province, institution and programme', 'EUR per year; from low or no tuition at some public universities to high fees at private or English-taught programmes'],
    ['Living costs for visa evidence', 'See our cost of living guide', 'GBP 1,171 per month outside London or GBP 1,529 in London for up to 9 months for applications before 30 Nov 2026; GBP 1,203 and GBP 1,570 from 30 Nov 2026', 'Reported as AUD 29,710 for 12 months for a single student; confirm on the Home Affairs site', 'Annual amount set by IRCC and updated periodically; confirm before applying', 'Set by each country; Germany, for example, uses a blocked account'],
    ['Visa or permit fees', 'See Malaysia visa cost guide', 'Student visa fee reported as GBP 558', 'Visa application charge reported as AUD 2,500 from 1 July 2026', 'Study permit fee set by IRCC, plus biometrics where required', 'National visa and residence permit fees vary by country'],
    ['Health cover', 'Usually arranged through the university or EMGS process', 'Immigration Health Surcharge, reported as GBP 776 per year', 'Overseas Student Health Cover (OSHC) for the visa period', 'Depends on province; many students buy private cover at first', 'Mandatory in most countries; public or private depending on rules'],
    ['Other costs', 'Application, flights, accommodation', 'Document, CAS deposit, flights, accommodation', 'Document, medical checks, flights, accommodation', 'Document, medical checks where required, flights, accommodation', 'Translations, legalisation, language tests, flights, accommodation'],
  ],
};
const ROUTE_TABLE = {
  head: ['Route', 'Advantages', 'Limitations', 'May suit you when'],
  rows: [
    ['Credit transfer', 'Reduces repeated study if credits are accepted', 'Decided subject by subject; may accept only part of your credits', 'You are already studying and the receiving university confirms its assessment in writing'],
    ['Advanced standing', 'Can allow entry into year 2 or 3 and shorten total time', 'Limits and rules differ by institution and course', 'You have completed strongly related subjects with good grades'],
    ['Course exemption', 'Removes specific modules you have already mastered', 'Total credits needed may not fall; you may need to take other modules', 'Your diploma or earlier study closely matches core modules'],
    ['Starting a new bachelor’s degree', 'Clear structure, no dependence on credit assessment', 'Longest and often most expensive route', 'Your subjects do not match or your credits are not accepted'],
    ['Top-up degree', 'Short route to a bachelor’s degree after a diploma', 'Only available for eligible qualifications; fewer course choices', 'You hold a relevant diploma and want a quick completion'],
    ['Twinning programme', 'Planned study structure with a partner university', 'Partnership terms can change; not every student qualifies', 'You want a defined pathway and can confirm the active agreement in writing'],
  ],
};

const EUROPE = [
  { name: 'Germany', possibilities: 'Transfer into a higher semester is possible at some universities, but it is decided by the subject department after comparing your modules with the German programme. Many bachelor’s programmes are taught in German.', language: 'German at B2 or C1 for German-taught programmes; IELTS or TOEFL for English-taught ones.', recognition: 'Admission is checked against the country’s recognition databases and may require a preparatory Studienkolleg year before applying. Some applications run through uni-assist.', cost: 'Public universities often charge low or no tuition, though some states charge non-EU students, and private universities charge fees. Living costs are usually shown through a blocked account.', visa: 'A national student visa is normally required, issued after admission and proof of funds.', limits: 'Course-by-course comparison can leave you with fewer credits than expected. German-language readiness is a common barrier.' },
  { name: 'France', possibilities: 'Public universities and grandes écoles may admit you into a later year of a licence after examining your records. French institutions decide through their own admission committees.', language: 'French (often DELF or DALF level) for French-taught programmes; English-taught options exist mainly at master’s level and some private schools.', recognition: 'Applications for many international students go through the Études en France procedure managed with Campus France. Qualification comparability may be requested.', cost: 'Public tuition is subsidised, but many institutions apply higher fees to non-EU students. Private schools charge more. Paris is expensive for accommodation.', visa: 'Long-stay student visa, typically with proof of funds and accommodation evidence.', limits: 'Strong French skills are often needed, and the academic calendar has fixed deadlines.' },
  { name: 'Italy', possibilities: 'Universities may recognise credits through a case-by-case review and admit you to a later year. Some programmes have limited seats and entrance tests.', language: 'Italian for most bachelor’s programmes; English-taught degrees exist, often with admission tests.', recognition: 'Pre-enrolment normally goes through the national Universitaly portal. A statement of comparability from a qualification centre, or an embassy declaration, is commonly requested.', cost: 'Public tuition is often linked to family income and may be modest, but non-EU students must still show funds. Regional scholarships exist.', visa: 'National study visa after pre-enrolment, followed by a permit to stay.', limits: 'Documentation can be slow, and Italian bureaucracy needs early planning.' },
  { name: 'Netherlands', possibilities: 'Dutch universities generally expect you to start year one, though exemptions are possible if your modules closely match. Research universities and universities of applied sciences differ.', language: 'English-taught bachelor’s programmes are common; some require specific subject prerequisites.', recognition: 'Foreign qualifications are assessed by the institution, sometimes with support from the national credential evaluation service.', cost: 'Non-EU tuition is substantially higher than the statutory rate paid by EU students. Housing is tight and expensive in many cities.', visa: 'The sponsoring university usually handles the residence permit process after admission.', limits: 'Limited credit transfer for first-year entry and difficult housing markets.' },
  { name: 'Finland', possibilities: 'Credit transfer is called recognition of prior learning. Universities and universities of applied sciences can accept comparable studies, but bachelor’s programmes taught in English have competitive entry.', language: 'English-taught programmes exist; Finnish or Swedish for local-language programmes.', recognition: 'Admissions are usually through the national joint application service; entry may use a points-based process.', cost: 'Non-EU students are normally charged tuition for English-taught degrees, although scholarships exist.', visa: 'A residence permit for studies, with proof of funds and insurance.', limits: 'Seats are limited and later-year entry is often not guaranteed.' },
  { name: 'Sweden', possibilities: 'Swedish universities can award credits for prior higher education and some admit applicants to later terms. Credit and programme structure use ECTS-compatible credits.', language: 'English-taught programmes are widely available, mostly at master’s level; Swedish needed for many bachelor’s degrees.', recognition: 'Foreign qualifications may be assessed through the national university admissions service and the national recognition authority.', cost: 'Non-EU students pay tuition fees and application fees; living costs are high in major cities.', visa: 'Residence permit for studies with proof of funds and insurance.', limits: 'English-taught bachelor’s options are fewer than master’s options.' },
  { name: 'Denmark', possibilities: 'Danish institutions may grant credit transfer for related studies and sometimes admit students into later semesters. Rules are set by the institution.', language: 'English-taught bachelor’s programmes exist at some universities and academies; Danish for local programmes.', recognition: 'Qualifications are assessed by the institution, sometimes with national agency guidance.', cost: 'Non-EU students pay tuition; living costs are among the higher costs in Europe.', visa: 'Residence permit for studies after admission, with proof of funds.', limits: 'Strict admission standards and high costs.' },
  { name: 'Ireland', possibilities: 'Irish universities and institutes of technology may offer advanced entry to year two or year three after an assessment of your transcripts. Credits are described under the national framework.', language: 'English, usually IELTS or an equivalent accepted by the institution.', recognition: 'Some programmes are applied for directly; undergraduate routes may involve a central application system. Recognition of Malaysian qualifications is assessed by the institution.', cost: 'Non-EU tuition is considerably higher than for EU students, and housing is expensive in Dublin and Cork.', visa: 'Student permission and visa processing with proof of funds and approved course evidence.', limits: 'Advanced entry is competitive, and housing and work limits affect planning.' },
  { name: 'Poland', possibilities: 'Polish universities may recognise credits for similar programmes and admit transfer students into a later semester when places allow. ECTS is widely used.', language: 'English-taught programmes are common, especially in medicine, engineering and business; Polish for local-language programmes.', recognition: 'Foreign diplomas may need validation or legalisation; the process depends on the university and degree level.', cost: 'Tuition and living costs are often moderate by European standards, but vary by city and institution.', visa: 'A national visa for studies, followed by a residence card.', limits: 'Documents may require certified Polish translations, and acceptance of transfers depends on available places.' },
  { name: 'Hungary', possibilities: 'Several Hungarian universities teach in English and may recognise transferred credits for similar subjects. Medical and engineering programmes have specific entry requirements.', language: 'English-taught programmes are widely available; Hungarian for local degrees.', recognition: 'Foreign documents may require legalisation and recognition steps according to university policy.', cost: 'Tuition and living costs vary; some students apply for scholarship programmes, which have their own eligibility rules.', visa: 'A national student visa and residence permit procedure applies.', limits: 'Policies and scholarship arrangements can change, so confirm current rules directly.' },
  { name: 'Cyprus', possibilities: 'English-taught private and public universities may recognise prior study. Admission departments often assess transfer applications individually.', language: 'English in most degree programmes, with Greek or Turkish for others.', recognition: 'The Republic of Cyprus has national recognition bodies, and institutions in the northern part of the island are in a different recognition position. Verify the institution’s status before applying.', cost: 'Tuition varies widely; living costs are moderate compared with Western Europe.', visa: 'Student permit rules depend on the Republic of Cyprus immigration authorities for institutions there.', limits: 'Check recognition of the final degree for your own career or further-study plans.' },
  { name: 'Malta', possibilities: 'The University of Malta and other institutions may consider transfer or advanced entry in certain programmes, but entry to popular degrees is competitive.', language: 'English is widely used; IELTS or equivalent may be required.', recognition: 'Credentials are assessed by the institution and by relevant national bodies.', cost: 'Tuition, rent and living costs vary, and rental costs can be significant.', visa: 'Student visa and residence documentation under Malta’s immigration rules; requirements have been tightened in recent years, so check current rules.', limits: 'Limited places and changing student visa rules.' },
];

const FAQS = [
  {
    "q": "Is credit transfer guaranteed?",
    "a": "No. Credit transfer is never automatic. It depends on your grades, the subjects you completed, any partner agreement between the universities and the receiving university’s own assessment. Ask for the credit assessment result or conditional offer in writing before you pay large fees."
  },
  {
    "q": "Is a 2+1 route cheaper than going abroad directly?",
    "a": "Often yes for the first two years, because tuition and living costs in Malaysia are commonly lower than in the UK or Australia. However, the final year abroad still carries foreign tuition, visa and living costs. Compare the total cost of the full route with the cost of studying the whole degree abroad before you decide."
  },
  {
    "q": "Do I need IELTS for the UK or Australia?",
    "a": "Usually yes at the transfer stage, even if your Malaysian entry waived it. Some universities accept alternatives such as PTE Academic or their own English assessment, and the visa may have a separate English rule. Check both the university’s and the immigration authority’s current requirements."
  },
  {
    "q": "Can I work after the transfer?",
    "a": "Work and post-study rules are set by the UK or Australia, not Malaysia. They depend on your visa, course level and current immigration policy, and they change over time. Check the official government websites before you rely on work income."
  },
  {
    "q": "Can I transfer from Malaysia to the UK after two years?",
    "a": "It may be possible, especially through a 2+1 programme or a progression agreement, where you study two years in Malaysia and the final year in the UK. Without an agreement, a UK university may still assess your transcript and decide whether to admit you into year two or year three. Acceptance depends on subject match, grades, English and the receiving university’s policy."
  },
  {
    "q": "Can I transfer from Malaysia to Australia?",
    "a": "Yes, some Australian universities assess applications for credit or advanced standing based on prior study in Malaysia. The number of credits depends on the course, your transcript and the university’s equivalency assessment. Credit recognition is separate from the student visa decision."
  },
  {
    "q": "Can I transfer Malaysian university credits to Canada?",
    "a": "Possibly. Canadian universities and colleges have their own transfer-credit policies, and many assess courses one by one. Some have college-to-university or diploma-to-degree pathways. Acceptance depends on the receiving institution, and you also need to satisfy the study permit requirements."
  },
  {
    "q": "Can I transfer from Malaysia to Germany?",
    "a": "It is possible in some cases but not simple. German universities assess whether your Malaysian modules match their programme and decide whether to admit you into a higher semester. Language requirements, recognition of your qualifications and sometimes a preparatory year can affect your options. Always confirm with the university and the official recognition guidance."
  },
  {
    "q": "Can I transfer from Malaysia to other European countries?",
    "a": "Some European universities consider transfer applicants, but the rules differ by country and institution. Being in the European Higher Education Area or using ECTS credits does not mean automatic recognition of a Malaysian qualification. Check language, recognition, cost and visa rules for each country."
  },
  {
    "q": "Which Malaysian universities offer international transfer pathways?",
    "a": "Several Malaysian private universities and branch campuses have international links, but arrangements differ by programme and can change over time. Do not assume that a well-known university has a pathway for your course. Ask the institution for the current written agreement, the receiving university’s name and the exact conditions."
  },
  {
    "q": "Is a 2+1 programme guaranteed?",
    "a": "No. A 2+1 pathway usually has conditions, such as minimum grades, English scores and a continuing agreement between the universities. Confirm that the exact programme you want offers the pathway and ask what happens if you do not meet the conditions."
  },
  {
    "q": "What is the minimum CGPA for credit transfer?",
    "a": "There is no universal minimum. Each university and each programme sets its own standard, and some pathways specify grades in particular subjects. Ask the receiving university what it requires for your programme, and treat any agent’s general number with caution."
  },
  {
    "q": "Can I transfer after completing one semester?",
    "a": "It may be possible to apply, but the number of credits is likely to be small and some universities prefer at least one full year of study. A move after one semester can also delay graduation. Check whether starting at the right place from the beginning would be simpler."
  },
  {
    "q": "Can I transfer after completing a diploma?",
    "a": "Yes, many students use a diploma to progress into a bachelor’s degree, sometimes with exemptions or advanced entry. The amount of credit depends on the subjects, grades and the receiving university’s assessment. See our guide on studying in Malaysia after a diploma for the Malaysian side of the pathway."
  },
  {
    "q": "Can I transfer without IELTS?",
    "a": "Sometimes, if the receiving university accepts another proof of English, such as a medium of instruction letter or another approved test. Many universities and visa systems still require an approved English test. Confirm the English rules for admission and the visa separately."
  },
  {
    "q": "Will all my Malaysian credits be accepted?",
    "a": "Not necessarily. Universities usually accept credits only for subjects that match their own content and level, and some set a maximum on transferable credits. Expect a partial result and plan for the cost and time of the remaining modules."
  },
  {
    "q": "Can I transfer to a different subject?",
    "a": "Yes, but fewer credits are likely to transfer, because the receiving university can usually only recognise subjects relevant to the new programme. General or foundation modules may be accepted more often than specialist ones. Ask for a written credit assessment before changing."
  },
  {
    "q": "Can I transfer from a private Malaysian university to a public university abroad?",
    "a": "It can be possible, since foreign universities assess the programme and your academic record rather than only whether your university is private or public. Accreditation, recognition of the Malaysian institution and subject compatibility matter. Public universities abroad may also have limited transfer places."
  },
  {
    "q": "How long does credit assessment take?",
    "a": "It varies by university, season and the completeness of your documents. It may take from a few weeks to several months, particularly if the university needs module descriptions or extra information. Start early and keep copies of your syllabus documents."
  },
  {
    "q": "How much does international credit transfer cost?",
    "a": "The assessment fee may be small or absent, but the real cost is the remaining study abroad, plus visa, health cover, travel, accommodation and living costs. Fees depend on the destination country, university and course. Ask the university for the current fee schedule and the cost of the remaining years."
  },
  {
    "q": "Will I receive a foreign university degree?",
    "a": "It depends on the arrangement. In a progression or twinning route, the degree may be awarded by the foreign partner, by the Malaysian university, or jointly. At a branch campus, the degree is usually awarded by the parent university. Ask for the awarding body in writing."
  },
  {
    "q": "Can I transfer with a study gap?",
    "a": "Possibly, but a gap may require explanation and supporting documents, and some universities or visa officers look at it closely. Be honest and give evidence for any work, training or personal circumstances during the gap. See our study gap accepted universities guide for Malaysian options."
  },
  {
    "q": "Can I transfer after failing some subjects?",
    "a": "It may still be possible, but failed subjects usually cannot be transferred and may affect your overall academic record. Some universities look at repeats and your recent performance. Be transparent in your application and ask how failed subjects are treated."
  },
  {
    "q": "Does credit transfer guarantee a student visa?",
    "a": "No. Academic acceptance and immigration approval are separate decisions made by different authorities. You still need to satisfy financial, genuine student and other visa requirements for the destination country. No agent or university can guarantee a visa."
  },
  {
    "q": "What happens if only some credits are accepted?",
    "a": "You will probably need to complete additional modules, which may extend your study time and cost. Before accepting an offer, calculate how many terms remain and what they will cost. If the result is too expensive or long, compare it with other options, including a new degree elsewhere."
  },
  {
    "q": "Is it cheaper to start in Malaysia and finish abroad?",
    "a": "It can be cheaper, particularly for the first one or two years, but it is not always cheaper overall. Compare the combined cost of Malaysian study, foreign tuition, visa costs, living costs and any extra time due to credits not being accepted. The answer differs by destination and programme."
  },
  {
    "q": "Can I work while studying after transferring?",
    "a": "The rules depend on the destination country and your visa. The UK, Australia, Canada and European countries each set limits on hours and conditions. Check the official immigration website instead of relying on general claims."
  },
  {
    "q": "Is a Malaysian diploma accepted by European universities?",
    "a": "Some European universities may consider it, but acceptance varies by country, institution and programme. Recognition, language requirements and whether the diploma gives enough academic credit for entry are important. Ask the university for its position on your exact diploma."
  },
  {
    "q": "Should I obtain written credit approval before enrolling in Malaysia?",
    "a": "Yes, wherever possible. Ask the Malaysian university and, if relevant, the receiving university to confirm the pathway, active agreement, conditions and expected credit outcome in writing. If a formal credit assessment cannot be done in advance, ask exactly what is and is not guaranteed."
  }
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://eammu.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Study",
          "item": "https://eammu.com/study"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Malaysia",
          "item": "https://eammu.com/study/malaysia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Credit Transfer to UK/Australia",
          "item": "https://eammu.com/study/malaysia/credit-transfer-from-malaysia-to-uk-australia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Credit Transfer from Malaysia to UK, Australia, Canada and Europe (2026 Guide)",
      "description": "Credit transfer from Malaysia to UK, Australia, Canada and Europe for Bangladeshi students: 2+1 and 1+2 routes, documents, costs, visa checks and risks.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-15",
      "mainEntityOfPage": "https://eammu.com/study/malaysia/credit-transfer-from-malaysia-to-uk-australia",
      "author": {
        "@type": "Organization",
        "name": "Eammu Holidays"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Eammu Holidays",
        "url": "https://eammu.com"
      }
    },
    {
      "@type": "FAQPage",
      // Generated from the same FAQS array that renders the visible FAQ, so schema and page always match.
      "mainEntity": FAQS.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    }
  ]
};

const linkClass = 'text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600';

export default function Page() {
  const whatsapp = `https://wa.me/${AGENCY.phone.replace(/\D/g, '')}`;
  return (
    <div className="bg-slate-50 text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-white">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 text-sm text-slate-600">
          {BREADCRUMBS.map((b, i) => (
            <li key={b.href} className="flex items-center gap-2">
              {i === BREADCRUMBS.length - 1 ? (
                <span aria-current="page" className="font-semibold text-emerald-900">{b.name}</span>
              ) : (
                <Link href={b.href} className="hover:text-emerald-700 hover:underline">{b.name}</Link>
              )}
              {i < BREADCRUMBS.length - 1 && <span aria-hidden="true">/</span>}
            </li>
          ))}
        </ol>
      </nav>

      <header className="bg-emerald-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Malaysia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Credit Transfer from Malaysia to UK, Australia, Canada and Europe (2026 Guide)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Start in Malaysia, finish abroad. A practical guide for Bangladeshi students on how credit transfer, 2+1 and 1+2 routes work, and what to verify in writing first.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-15">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Malaysia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Malaysia guides</summary>
            <div className="mt-3 max-h-[70vh] overflow-y-auto">
              {NAV.map((g) => (
                <details key={g.label} className="mb-1" open={g.pages.some((p) => p.href === PAGE_HREF)}>
                  <summary className="cursor-pointer rounded-md px-2 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-50">{g.label} ({g.pages.length})</summary>
                  <ul className="mb-2 ml-2 border-l border-slate-200 pl-2">
                    {g.pages.map((p) => (
                      <li key={p.href}>
                        <Link
                          href={p.href}
                          aria-current={p.href === PAGE_HREF ? 'page' : undefined}
                          className={`block rounded-md px-2 py-1.5 text-sm ${p.href === PAGE_HREF ? 'bg-yellow-400 font-bold text-emerald-950' : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'}`}
                        >
                          {p.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </details>
        </aside>

        <div>
          <article>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How credit transfer from Malaysia works</h2>
<p className="mt-4 leading-7 text-slate-700">Credit transfer from Malaysia means that a university in another country accepts some of the academic credits you earned at a Malaysian institution and counts them toward its own degree. Several Malaysian universities partner with UK and Australian universities. In a 2+1 route you study two years in Malaysia and one year abroad; in 1+2 you study one year in Malaysia. Total cost is often lower than studying abroad from the start; compare numbers in <Link href="/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Malaysia for Bangladeshi students</Link> and <Link href="/study/malaysia/cost-of-living-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Malaysia</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Popular fields include business, engineering and computing; see <Link href="/study/malaysia/cse-and-it-courses-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT courses in Malaysia</Link> and <Link href="/study/malaysia/top-universities-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Malaysia</Link> for institutions with international partners.</p>
<p className="mt-4 leading-7 text-slate-700">This guide covers more than the UK and Australia. It also explains study in Malaysia then transfer to another country, including Canada, Europe and other destinations, so you can judge whether Malaysia is the right first step for your plans. Read it as an educational overview, not a promise: every receiving university makes its own academic decision, and rules change.</p>

<h3 className="mt-8 text-xl font-bold text-emerald-900">What Malaysian credits represent</h3>
<p className="mt-3 leading-7 text-slate-700">Malaysian higher education follows the Malaysian Qualifications Framework (MQF), which is overseen by the Malaysian Qualifications Agency (MQA). Under the MQF, a credit represents a defined amount of student learning time, commonly described as about 40 hours covering lectures, tutorials, self-study, assignments and assessment. A bachelor’s degree typically carries around 120 credits or more, depending on the programme. These numbers are useful for planning, but a foreign university will not simply multiply or divide them. It will compare what you were taught and at what level.</p>

<h3 className="mt-8 text-xl font-bold text-emerald-900">How receiving universities evaluate completed subjects</h3>
<p className="mt-3 leading-7 text-slate-700">Receiving universities usually compare your Malaysian modules with their own using several factors: subject content and learning outcomes, level of study, credit hours or workload, assessment methods, grades, and the date you studied it. They may also consider whether your Malaysian institution and programme are recognised. If a module is too different, too basic or too old, it may be refused or accepted only as a general elective.</p>
<p className="mt-3 leading-7 text-slate-700">Credit transfer is never automatically guaranteed. Even within a formal partnership, the receiving university usually reviews each student’s record and applies its own rules.</p>
<p className="mt-3 leading-7 text-slate-700">If credits are not accepted, you may need to repeat similar content, which adds time and cost. In some cases you may be offered a lower entry point, such as year one or year two instead of year three. This is why it is wise to ask for a credit assessment before making large payments.</p>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Credit transfer, advanced standing, articulation and twinning: key differences</h2>
<p className="mt-4 leading-7 text-slate-700">Agents and university brochures use these terms loosely, which causes confusion. The table below explains the common meanings. Check how each institution defines the term you are offered.</p>
<div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
<table className="min-w-full text-left text-sm">
<thead className="bg-emerald-900 text-white"><tr>{TERMS_TABLE.head.map((h) => (<th key={h} className="px-4 py-3 font-semibold">{h}</th>))}</tr></thead>
<tbody className="divide-y divide-slate-200">{TERMS_TABLE.rows.map((r) => (<tr key={r[0]} className="align-top">{r.map((c, j) => (<td key={j} className={`px-4 py-3 ${j === 0 ? 'font-semibold text-emerald-900' : 'text-slate-700'}`}>{c}</td>))}</tr>))}</tbody>
</table>
</div>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Can I transfer from a Malaysian university? Common situations</h2>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Can I transfer before finishing my bachelor’s degree?</h3>
<p className="mt-3 leading-7 text-slate-700">Yes, this is how most 2+1, 1+2 and 2+2 routes work. You complete part of your degree in Malaysia and the remaining part at a receiving university. The key point is whether the receiving university recognises the subjects you studied.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Can I change university after studying in Malaysia for one or two years?</h3>
<p className="mt-3 leading-7 text-slate-700">Often you can apply. After one year, you may be considered for year two entry; after two years, year three entry may be possible. What you actually get depends on the credits accepted, the subject match and the receiving university’s own limits on how many credits it will recognise.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Can I transfer after completing a diploma?</h3>
<p className="mt-3 leading-7 text-slate-700">Yes, in many cases. Diploma-to-degree routes can give exemptions or advanced entry, and some top-up degrees take one year. How much credit you receive depends on subject mapping and assessment. For the Malaysian side of this route, see <Link href="/study/malaysia/study-in-malaysia-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Malaysia after diploma</Link>.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Private Malaysian university to a foreign public university</h3>
<p className="mt-3 leading-7 text-slate-700">This can be possible. Receiving universities mostly care about programme quality, accreditation, subject match and your grades, not whether your Malaysian university is private or public. Public foreign universities may, however, have fewer places for transfer students. To understand the Malaysian side, read <Link href="/study/malaysia/public-vs-private-universities-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private universities in Malaysia</Link>.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Malaysian public university to a foreign university</h3>
<p className="mt-3 leading-7 text-slate-700">It is also possible, but international students at Malaysian public universities should check their institution’s rules on leaving or transferring before enrolling, and ask whether it has any partnership or student mobility schemes.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Transfer without an official partnership</h3>
<p className="mt-3 leading-7 text-slate-700">You can still apply directly to many universities as a transfer student. In this case, the receiving university evaluates your documents and decides without any pre-agreed arrangement. It is often less predictable, and you may receive fewer credits than in a partner pathway. Ask for the decision in writing.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Transfer to a different subject or major</h3>
<p className="mt-3 leading-7 text-slate-700">Possible, but the number of credits will usually be lower, because only relevant modules are recognised. Foundation subjects, mathematics, academic writing or business basics may transfer more easily than specialist subjects.</p>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">2+1, 1+2, 2+2 and 3+0: international transfer pathways compared</h2>
<p className="mt-4 leading-7 text-slate-700">The Malaysia 2+1 degree programme and the Malaysia 1+2 transfer programme are widely advertised. Below are common structures. They describe how a pathway is usually arranged, not a guaranteed offer.</p>
<div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
<table className="min-w-full text-left text-sm">
<thead className="bg-emerald-900 text-white"><tr>{PATHWAY_TABLE.head.map((h) => (<th key={h} className="px-4 py-3 font-semibold">{h}</th>))}</tr></thead>
<tbody className="divide-y divide-slate-200">{PATHWAY_TABLE.rows.map((r) => (<tr key={r[0]} className="align-top">{r.map((c, j) => (<td key={j} className={`px-4 py-3 ${j === 0 ? 'font-semibold text-emerald-900' : 'text-slate-700'}`}>{c}</td>))}</tr>))}</tbody>
</table>
</div>
<p className="mt-4 leading-7 text-slate-700">A common structure is not the same as a guaranteed arrangement. Only a written agreement tied to your exact programme, intake and receiving university shows that a pathway applies to you.</p>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Credit transfer from Malaysia to the UK</h2>
<p className="mt-4 leading-7 text-slate-700">The Malaysia to UK university pathway is one of the best-known routes. Some Malaysian institutions work with UK universities through articulation or progression agreements, usually mapped to a particular programme. Not every Malaysian university has a UK transfer agreement, and a partnership with one UK university does not apply to others.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Can I transfer from a Malaysian university to a UK university?</h3>
<p className="mt-3 leading-7 text-slate-700">Yes, through a formal pathway or, in some cases, through a direct application. In a 2+1 route you complete two years in Malaysia and the final year in the UK; in a 1+2 route you spend the second and third years in the UK. A direct application without a partnership is judged on your transcript, module content and grades.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">UK degree structure and final-year entry</h3>
<p className="mt-3 leading-7 text-slate-700">Bachelor’s degrees in England, Wales and Northern Ireland usually take three years, while Scotland’s often take four, with some applicants admitted directly into the second or third year. UK credits are commonly counted as 120 per year of full-time study. Final-year entry may be available if you have completed enough related modules, but UK universities can limit how much credit they recognise from outside their own programmes, and some courses require a minimum time on campus.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Credit recognition and module equivalency</h3>
<p className="mt-3 leading-7 text-slate-700">UK universities compare module descriptions, learning outcomes, level and assessment. You may be asked for detailed syllabi, not just a transcript. Equivalency is decided module by module, so keep your module outlines from the start.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">English-language requirements</h3>
<p className="mt-3 leading-7 text-slate-700">UK universities often ask for IELTS or PTE Academic, with required scores varying by course. Some institutions accept other tests or assess English themselves, but the UK visa system can have a separate English rule. Even if your Malaysian admission waived English tests, the UK stage may not. For the Malaysian side, see <Link href="/study/malaysia/study-in-malaysia-without-ielts" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Malaysia without IELTS</Link>.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">UK student visa, funds and costs</h3>
<p className="mt-3 leading-7 text-slate-700">A UK student visa needs a Confirmation of Acceptance for Studies (CAS) from a licensed sponsor and proof of funds. Reported maintenance amounts were GBP 1,171 per month outside London and GBP 1,529 in London for up to nine months for applications before 30 November 2026, rising to GBP 1,203 and GBP 1,570 for applications from 30 November 2026. Funds usually must be held for 28 consecutive days. Tuition due, the visa fee and the Immigration Health Surcharge are separate. Confirm the amount on the official UK government website on the date you apply.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Timelines, benefits and limitations</h3>
<p className="mt-3 leading-7 text-slate-700">Apply for the UK stage well before the start of your final year, since credit assessment, CAS issue, funds holding and visa processing all take time. Benefits include lower early costs, a gradual move abroad and a UK degree route. Limitations include higher fees in the UK years, strict visa rules, changing policy on post-study work and the risk of partial credit recognition.</p>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Credit transfer from Malaysia to Australia</h2>
<p className="mt-4 leading-7 text-slate-700">Australian universities often assess prior study for credit or advanced standing, which is the Australian term for entry beyond the first year or a reduced load. The Malaysia to Australia university pathway can work through partner programmes, branch campus links or direct applications.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Advanced standing, credit and recognition of prior learning</h3>
<p className="mt-3 leading-7 text-slate-700">Australian universities may grant credit for completed study, and some also recognise work experience, known as recognition of prior learning. They usually assess equivalence through course-by-course comparison, using the Australian Qualifications Framework to understand your level of study. Advanced standing is not the same as automatic university progression: a formal progression agreement may guarantee a place under conditions, while a credit application leaves the decision to the university.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">How many credits can I transfer from Malaysia to Australia?</h3>
<p className="mt-3 leading-7 text-slate-700">There is no standard number. It depends on the Australian course, how closely your subjects match, grades and the university’s credit limits. Entry into the second or third year is sometimes possible where permitted. A written credit outcome is the only reliable answer.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Degree structure, English and documents</h3>
<p className="mt-3 leading-7 text-slate-700">Many Australian bachelor’s degrees take three years, and some take four. English requirements usually involve IELTS, PTE Academic or another accepted test. Documents include transcripts, subject outlines with learning outcomes, certificates and identity documents.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Student visa and costs</h3>
<p className="mt-3 leading-7 text-slate-700">An Australian student visa (subclass 500) requires a Confirmation of Enrolment, Overseas Student Health Cover, a Genuine Student statement and evidence of financial capacity. Sources report a living-cost requirement of about AUD 29,710 for 12 months for a single student and a visa application charge of AUD 2,500 from 1 July 2026, but you should confirm both with the Department of Home Affairs because charges and thresholds change. Tuition, living costs and travel are in addition to these.</p>
<p className="mt-3 leading-7 text-slate-700">Benefits include flexible credit assessment and strong course choice. Limitations include high costs, strict visa assessment and uncertainty about how many credits transfer.</p>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Credit transfer from Malaysia to Canada</h2>
<p className="mt-4 leading-7 text-slate-700">University transfer in Canada is set by provinces and institutions, so there is no single national system. Students often ask whether Bangladeshi students can transfer from Malaysia to Canada. The answer is that they can apply, but acceptance depends on the receiving institution.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Transfer credits, advanced standing and course-by-course assessment</h3>
<p className="mt-3 leading-7 text-slate-700">Canadian universities and colleges usually assess each course for content, level, grade and sometimes how recently it was taken. Some give advanced standing, which allows direct entry to a later year. Provincial credit transfer guides exist in some provinces, but they mainly cover moves between institutions in the same province and may not automatically include foreign courses.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">College-to-university and diploma-to-degree pathways</h3>
<p className="mt-3 leading-7 text-slate-700">Some Canadian colleges and universities have articulation agreements that allow a diploma to be converted into a degree with credit. An overseas Malaysian diploma may be considered but is typically assessed individually, so do not assume it matches a Canadian diploma.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Degree structure, English and study permit</h3>
<p className="mt-3 leading-7 text-slate-700">Many Canadian bachelor’s degrees are four years, with some three-year programmes. English proof usually uses IELTS or another accepted test. A study permit from Immigration, Refugees and Citizenship Canada requires an acceptance letter from a designated learning institution, proof of funds and other documents, and some applicants need a provincial attestation. Rules change, so verify on the IRCC site.</p>
<p className="mt-3 leading-7 text-slate-700">Costs vary by province and institution and are given in Canadian dollars. Benefits include recognised degrees and diverse programmes. Limitations include varied transfer policies, permit rules and uncertainty over credits.</p>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Credit transfer from Malaysia to Europe</h2>
<p className="mt-4 leading-7 text-slate-700">Many students ask whether Malaysia is a good pathway to study in Europe. It can be possible, but Europe is less standardised than the UK or Australia for Malaysian transfer, and language, recognition and visa rules differ by country.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">ECTS credit transfer and why conversion is not simple</h3>
<p className="mt-3 leading-7 text-slate-700">The European Credit Transfer and Accumulation System (ECTS) assigns 60 credits to a full-time academic year, and one ECTS credit commonly corresponds to about 25 to 30 hours of work. Malaysian credits use a different learning-time basis, and course structures, contact hours and assessment differ. Because of this, a direct numerical conversion is not always possible. A European university compares what you learned, not just the credit number.</p>
<p className="mt-3 leading-7 text-slate-700">Being part of the European Higher Education Area or using ECTS does not mean automatic recognition of every foreign qualification. Each institution and national authority may check your qualification, level and subject match. ECTS helps institutions in Europe compare studies, but it does not require them to accept a Malaysian transcript.</p>

<h3 className="mt-6 text-xl font-bold text-emerald-900">Country-by-country guide</h3>
<p className="mt-3 leading-7 text-slate-700">The notes below are general and not a substitute for the university’s own policy. Fees, language rules and immigration conditions change, and you must confirm the current position with the university and the official authority in the country.</p>
{EUROPE.map((c) => (
<div key={c.name} className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
<h3 className="text-lg font-bold text-emerald-900">{c.name}</h3>
<p className="mt-2 leading-7 text-slate-700">{c.possibilities}</p>
<ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700">
<li><span className="font-semibold text-emerald-900">Language and English-taught options:</span> {c.language}</li>
<li><span className="font-semibold text-emerald-900">Recognition and documents:</span> {c.recognition}</li>
<li><span className="font-semibold text-emerald-900">Tuition and living costs:</span> {c.cost}</li>
<li><span className="font-semibold text-emerald-900">Visa:</span> {c.visa}</li>
<li><span className="font-semibold text-emerald-900">Important limitations:</span> {c.limits}</li>
</ul>
</div>
))}
<p className="mt-6 leading-7 text-slate-700">Can I transfer Malaysian university credits to Germany or other European countries? Sometimes, but expect an individual review, possible language requirements and a recognition check. For most students, European transfer is less predictable than a formal UK or Australian partner route.</p>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Other destinations: New Zealand, United States, Japan, South Korea and UAE</h2>
<p className="mt-4 leading-7 text-slate-700">Transfer policies differ between institutions in every country below. Ireland is covered in the European section above.</p>
<h3 className="mt-6 text-xl font-bold text-emerald-900">New Zealand</h3>
<p className="mt-3 leading-7 text-slate-700">New Zealand universities may grant credit or advanced standing after assessing your prior study and use a national qualifications framework to compare levels. English proof, funds evidence and a student visa from Immigration New Zealand apply. Confirm credit outcomes with the university first.</p>
<h3 className="mt-6 text-xl font-bold text-emerald-900">United States</h3>
<p className="mt-3 leading-7 text-slate-700">US colleges evaluate foreign transcripts course by course and often limit how many credits they accept. Some request a credential evaluation. After admission you need an I-20 form and an F-1 visa, with proof of funds and an interview. Total cost is often high, so compare the extra years with the credits accepted.</p>
<h3 className="mt-6 text-xl font-bold text-emerald-900">Japan</h3>
<p className="mt-3 leading-7 text-slate-700">Transfer into later years is limited and may require Japanese. Some universities offer English-taught degrees. Students may need a Certificate of Eligibility and a student visa. Check each university’s international admissions page.</p>
<h3 className="mt-6 text-xl font-bold text-emerald-900">South Korea</h3>
<p className="mt-3 leading-7 text-slate-700">Korean universities may offer transfer admission, but programmes and quotas vary, and Korean language ability often matters, although some English-track programmes exist. A D-2 student visa is typically required. Confirm directly with the university.</p>
<h3 className="mt-6 text-xl font-bold text-emerald-900">United Arab Emirates</h3>
<p className="mt-3 leading-7 text-slate-700">UAE institutions publish their own transfer policies and must be accredited by the relevant education authorities. Check accreditation, programme recognition and whether the degree will be recognised for your future plans. Student visa processing is usually coordinated with the university.</p>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Malaysian universities and international partnerships</h2>
<p className="mt-4 leading-7 text-slate-700">Which Malaysian universities offer international credit transfer? The honest answer is that it depends on the programme, the partner and the year. Do not assume that a famous university offers a pathway for every course. Use these categories to understand what you are being offered.</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><span className="font-semibold text-emerald-900">Articulation agreements:</span> written arrangements that map programmes and set progression conditions.</li><li><span className="font-semibold text-emerald-900">Twinning programmes:</span> structured plans where part of the study is in Malaysia and part with a foreign partner.</li><li><span className="font-semibold text-emerald-900">International branch campuses:</span> Malaysian campuses of foreign universities, which usually award the parent university’s degree.</li><li><span className="font-semibold text-emerald-900">Exchange or mobility programmes:</span> short study periods abroad, not a full transfer.</li><li><span className="font-semibold text-emerald-900">General eligibility to apply for credit recognition:</span> you can apply to a foreign university, but there is no pre-agreed outcome.</li></ul>
<p className="mt-4 leading-7 text-slate-700">Established Malaysian private institutions such as Taylor’s University, Sunway University, UCSI University, HELP University, INTI International University, Asia Pacific University (APU) and SEGi University are often mentioned by students interested in international pathways. We cannot confirm from this page which specific partnerships or pathways each currently offers for each programme. Each student must request current written confirmation from the institution.</p>
<p className="mt-4 leading-7 text-slate-700">International branch campuses in Malaysia include the University of Nottingham Malaysia, Monash University Malaysia, Heriot-Watt University Malaysia, Curtin University Malaysia and Swinburne University of Technology Sarawak. They belong to universities from the UK or Australia, and some offer internal mobility or transfer to the parent campus. Even then, the rules for moving, the credits accepted and the fees depend on each university, so do not assume a guaranteed place abroad.</p>
<p className="mt-4 leading-7 text-slate-700">To compare institutions, start with <Link href="/study/malaysia/top-universities-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Malaysia</Link> and <Link href="/study/malaysia/cheapest-universities-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities in Malaysia</Link>, then ask each one the questions in the next section.</p>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What to verify before you enrol</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Written agreement between the Malaysian and foreign university that confirms the exact transfer terms.</li><li>Required GPA and English score for the final year abroad.</li><li>Visa rules and funds for the UK or Australia, which are separate from Malaysian rules in <Link href="/study/malaysia/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements for Bangladesh</Link>.</li><li>Whether the final degree is awarded by the foreign university.</li><li>Whether the agreement is currently active and covers your exact programme, campus and intake.</li><li>How many credits the receiving university expects to accept, and the maximum it allows.</li><li>What happens if you miss the required grade or English score.</li><li>MQA recognition of the Malaysian programme and the institution.</li></ul>
<p className="mt-4 leading-7 text-slate-700">Rules in the UK and Australia change often, so confirm current immigration policy with official sources.</p>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Credit transfer eligibility for Bangladeshi students</h2>
<p className="mt-4 leading-7 text-slate-700">There is no single set of rules, and we do not give universal CGPA requirements. Eligibility is decided by two layers: the Malaysian institution and the receiving university. Factors commonly considered include:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><span className="font-semibold text-emerald-900">SSC and HSC:</span> entry to a Malaysian programme usually considers your results and subjects. See <Link href="/study/malaysia/study-in-malaysia-after-ssc" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Malaysia after SSC</Link> and <Link href="/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements in Malaysia for Bangladeshi students</Link>.</li><li><span className="font-semibold text-emerald-900">Diploma qualifications:</span> may allow exemptions or advanced entry.</li><li><span className="font-semibold text-emerald-900">Completed bachelor’s study:</span> a completed degree is a different route from transfer, such as a master’s application.</li><li><span className="font-semibold text-emerald-900">CGPA and academic progression:</span> receiving universities may set grade conditions for pathways or transfers.</li><li><span className="font-semibold text-emerald-900">Failed or repeated subjects:</span> failed modules usually do not transfer, and repeats may be noted.</li><li><span className="font-semibold text-emerald-900">Study gaps:</span> may need explanation. See <Link href="/study/malaysia/study-gap-accepted-universities-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study gap accepted universities in Malaysia</Link>.</li><li><span className="font-semibold text-emerald-900">English proficiency:</span> required for most destinations.</li><li><span className="font-semibold text-emerald-900">Programme relevance and subject compatibility:</span> modules must match the target course.</li><li><span className="font-semibold text-emerald-900">Recognition and accreditation:</span> both the Malaysian institution and programme should be recognised.</li></ul>
<p className="mt-4 leading-7 text-slate-700">Why can a student with a higher CGPA get fewer credits? Credit transfer is based on subject match rather than only grades. A student with a CGPA of 3.8 in modules that do not match the target course may receive fewer credits than a student with a lower CGPA whose modules cover the required content. Grades help meet minimum conditions, but coverage decides credits.</p>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Documents required for credit transfer</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Passport.</li><li>SSC certificate and transcript.</li><li>HSC certificate and transcript.</li><li>Malaysian university offer letter.</li><li>Current academic transcript.</li><li>Official course descriptions.</li><li>Detailed module syllabus.</li><li>Credit-hour information.</li><li>Course learning outcomes.</li><li>Grading scale.</li><li>Medium of Instruction certificate, if accepted.</li><li>IELTS or PTE certificate, where required.</li><li>Academic reference, if requested.</li><li>Statement of Purpose.</li><li>Updated CV, where applicable.</li><li>Financial documents.</li><li>Previous visa and immigration records, where relevant.</li></ul>
<p className="mt-4 leading-7 text-slate-700">Module descriptions and learning outcomes are especially important because credit assessors compare content, not only module titles. A title like Marketing may cover very different material in two universities. Save the syllabus for each subject at the time you study it, since older course documents can be hard to obtain later. Some destinations also ask for certified translations or legalised documents.</p>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Credit transfer costs and financial planning</h2>
<p className="mt-4 leading-7 text-slate-700">How much does international credit transfer cost? There is rarely one fee. The main cost is the remaining study abroad. Typical expense categories include Malaysian tuition, application fees, credit assessment fees where applicable, transcript and document fees, certified translations, English-language exams, visa fees, health insurance, medical examinations, flights, accommodation, living expenses, final-year overseas tuition and an emergency fund. How much does it cost to transfer from Malaysia to Australia? It depends on the university and course, so use the university’s current fee schedule.</p>
<div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
<table className="min-w-full text-left text-sm">
<thead className="bg-emerald-900 text-white"><tr>{COST_TABLE.head.map((h) => (<th key={h} className="px-4 py-3 font-semibold">{h}</th>))}</tr></thead>
<tbody className="divide-y divide-slate-200">{COST_TABLE.rows.map((r) => (<tr key={r[0]} className="align-top">{r.map((c, j) => (<td key={j} className={`px-4 py-3 ${j === 0 ? 'font-semibold text-emerald-900' : 'text-slate-700'}`}>{c}</td>))}</tr>))}</tbody>
</table>
</div>
<p className="mt-4 leading-7 text-slate-700">How to read this table: currencies are the local currency of each country (MYR, GBP, AUD, CAD, EUR). Tuition is normally quoted per academic year, and visa maintenance or living-cost amounts are minimum evidence amounts rather than your full budget. Visa-related figures were reported from current sources in November 2026 and can change, so verify on the official government website. University-specific fees vary, so no tuition amounts are shown for individual universities. For Malaysian figures, see <Link href="/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Malaysia</Link>, <Link href="/study/malaysia/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Malaysia visa time and cost</Link> and <Link href="/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency requirements</Link>. For funding support see <Link href="/study/malaysia/scholarships-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Malaysia</Link>.</p>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Step-by-step credit transfer process</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Select a Malaysian university and programme.</li><li>Identify international progression opportunities.</li><li>Confirm whether the agreement is active.</li><li>Check the receiving university’s eligibility criteria.</li><li>Review subject and credit compatibility.</li><li>Maintain the required academic performance.</li><li>Collect official academic documents.</li><li>Submit the credit assessment application.</li><li>Receive the credit evaluation or conditional offer.</li><li>Review the number of credits accepted.</li><li>Calculate remaining study duration and total cost.</li><li>Meet English-language requirements.</li><li>Obtain the relevant destination-country admission documents.</li><li>Apply for the appropriate student visa.</li><li>Arrange accommodation and travel.</li><li>Complete enrolment at the receiving university.</li></ol>
<p className="mt-4 leading-7 text-slate-700">Obtain the credit assessment outcome before making expensive or irreversible decisions, such as paying a large deposit, booking flights or leaving a programme. Plan around the Malaysian <Link href="/study/malaysia/malaysia-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake dates</Link> as well as the intake of the receiving university.</p>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Credit transfer vs starting a new degree</h2>
<div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
<table className="min-w-full text-left text-sm">
<thead className="bg-emerald-900 text-white"><tr>{ROUTE_TABLE.head.map((h) => (<th key={h} className="px-4 py-3 font-semibold">{h}</th>))}</tr></thead>
<tbody className="divide-y divide-slate-200">{ROUTE_TABLE.rows.map((r) => (<tr key={r[0]} className="align-top">{r.map((c, j) => (<td key={j} className={`px-4 py-3 ${j === 0 ? 'font-semibold text-emerald-900' : 'text-slate-700'}`}>{c}</td>))}</tr>))}</tbody>
</table>
</div>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Common reasons for credit transfer rejection</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Different subject content.</li><li>Insufficient learning outcomes.</li><li>Unrecognised or unsuitable qualifications.</li><li>Low academic performance.</li><li>Incomplete transcripts.</li><li>Insufficient credit hours.</li><li>Outdated course content.</li><li>Programme accreditation issues.</li><li>Missing formal documentation.</li><li>Receiving university policy restrictions.</li><li>Professional accreditation limitations.</li></ul>
<h3 className="mt-6 text-xl font-bold text-emerald-900">How to reduce the risk</h3>
<ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Choose a programme with a written pathway to your target university.</li><li>Keep syllabi, outlines and assessment details from every module.</li><li>Maintain strong grades in subjects that match the target course.</li><li>Ask for a pre-assessment or conditional credit statement.</li><li>Confirm the maximum credits allowed and any residency rule.</li><li>For regulated professions, check the professional body’s accreditation rules.</li><li>Submit complete documents early and respond to requests quickly.</li></ul>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Student visa and immigration considerations</h2>
<p className="mt-4 leading-7 text-slate-700">Academic credit recognition and immigration approval are two separate decisions. A university can accept your credits and the immigration authority can still refuse your visa. No one can guarantee visa approval. Do not confuse Malaysian EMGS procedures, which apply only to studying in Malaysia, with immigration systems in the UK, Australia, Canada or Europe. For Malaysia, see <Link href="/study/malaysia/emgs-visa-process-and-tracking-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">EMGS visa process and tracking</Link>.</p>
<h3 className="mt-6 text-xl font-bold text-emerald-900">UK student visa</h3>
<p className="mt-3 leading-7 text-slate-700">Requires a CAS, proof of funds held for 28 days, English evidence where required, and the health surcharge. Previous visa history and any refusals must be declared correctly.</p>
<h3 className="mt-6 text-xl font-bold text-emerald-900">Australian student visa</h3>
<p className="mt-3 leading-7 text-slate-700">Requires a Confirmation of Enrolment, OSHC, a Genuine Student assessment, financial capacity and health and character checks. The Department of Home Affairs assesses each application, and meeting requirements does not guarantee a grant.</p>
<h3 className="mt-6 text-xl font-bold text-emerald-900">Canadian study permit</h3>
<p className="mt-3 leading-7 text-slate-700">Requires an acceptance letter from a designated learning institution, proof of funds, and sometimes a provincial attestation, a medical exam and biometrics. Check IRCC for current rules.</p>
<h3 className="mt-6 text-xl font-bold text-emerald-900">European national student visas</h3>
<p className="mt-3 leading-7 text-slate-700">Each country has its own visa or residence permit process, usually with admission evidence, funds, insurance and accommodation proof. Embassy appointment rules for applicants from Bangladesh can be different from other countries.</p>
<h3 className="mt-6 text-xl font-bold text-emerald-900">What officers commonly review</h3>
<ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Admission documents and course choice.</li><li>Financial evidence and the source of funds.</li><li>Genuine student requirements, where applicable, including why you are changing country and course.</li><li>Immigration history and any previous refusals.</li><li>Health insurance and medical requirements, where applicable.</li></ul>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Is Malaysia a good starting point for international education?</h2>
<p className="mt-4 leading-7 text-slate-700">For some students it is a sensible first step. For others it is not. A balanced view looks at both sides.</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Costs are often lower in the early years than in several Western destinations.</li><li>Many programmes are taught in English, with an international student environment.</li><li>Exposure to international curricula and, in some cases, progression pathways.</li><li>Students can settle into a new country with a lower budget before moving again. See <Link href="/study/malaysia/study-in-malaysia-from-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Malaysia from Bangladesh</Link> for the basics.</li></ul>
<h3 className="mt-6 text-xl font-bold text-emerald-900">Benefits and risks</h3>
<p className="mt-3 leading-7 text-slate-700">Benefits include lower first-year costs and a gentler adjustment. Risks include higher final-year fees, visa refusals and changes in partner agreements. You may also pay for courses that are not accepted abroad. Choose a programme with clear credit articulation and consider the <Link href="/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link> for both institutions.</p>
<p className="mt-4 leading-7 text-slate-700">Choosing the right institution before enrolment matters most. Do not choose Malaysia only because an agent promises an easy transfer to another country. If a pathway cannot be shown in writing, treat it as a possibility, not a plan. If you are uncertain, a second opinion from the university’s admissions office is worth the time.</p>
</section>

<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Plan ahead with Eammu Holidays</h2>
<p className="mt-4 leading-7 text-slate-700">Start with the right <Link href="/study/malaysia/malaysia-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake</Link>, complete the <Link href="/study/malaysia/emgs-visa-process-and-tracking-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">EMGS visa process</Link> for Malaysia, and keep documents ready for your second-country application. Talk to a counselor through <Link href="/study/malaysia/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka desk</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays can assist Bangladeshi students with Malaysian university selection, programme research, admission guidance, research into international progression pathways, document preparation, academic profile assessment, tuition and budget planning, student visa documentation guidance and application coordination. We cannot guarantee admission, credit acceptance, scholarships or visa approval, because those decisions belong to universities and government authorities. We encourage you to ask every institution for written confirmation, and you can find our other locations on the <Link href="/study/malaysia/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bangladesh offices and support</Link> page. For a wider overview, visit the <Link href="/study/malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Study in Malaysia hub</Link> or read about <Link href="/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work rules in Malaysia</Link>, which differ from those in other countries.</p>
</section>
          </article>

          <section className="mt-14" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-emerald-900">Frequently Asked Questions</h2>
            <div className="mt-5 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
              {FAQS.map((f, i) => (
                <details key={f.q} className="group px-5 py-4" open={i === 0}>
                  <summary className="cursor-pointer list-none font-semibold text-emerald-900"><h3 className="inline text-base font-semibold">{f.q}</h3></summary>
                  <p className="mt-3 leading-7 text-slate-700">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section aria-labelledby="related-heading" className="mt-14">
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Malaysia Study Guides</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {RELATED.map((r) => (
                <Link key={r.href} href={r.href} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-yellow-400 hover:shadow-md">
                  <h3 className="text-lg font-bold text-emerald-900">{r.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{r.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-2xl bg-emerald-900 p-6 text-white shadow-lg sm:p-8" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Malaysia</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university shortlist, EMGS guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-lg bg-yellow-400 px-6 py-3 font-bold text-emerald-950 transition hover:bg-yellow-300">Book Free Counseling with Eammu Holidays</a>
            <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
              <li><a href={`tel:${AGENCY.phone}`} className="hover:underline">Call / WhatsApp: {AGENCY.phone}</a></li>
              <li><a href={`mailto:${AGENCY.email}`} className="hover:underline">{AGENCY.email}</a></li>
              <li>{AGENCY.address}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}