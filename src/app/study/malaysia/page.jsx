import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/malaysia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Malaysia 2026: Bangladesh Guide | Eammu Holidays",
  "description": "Complete 2026 guide to study in Malaysia from Bangladesh: tuition in BDT, EMGS visa steps, scholarships, intakes and free counseling from Eammu Holidays.",
  "keywords": [
    "Study in Malaysia",
    "Study in Malaysia from Bangladesh",
    "Malaysia student visa",
    "Malaysia university admission",
    "Malaysia tuition fees",
    "study abroad in Malaysia",
    "Malaysia scholarships for Bangladeshi students",
    "Malaysia student visa requirements",
    "EMGS Malaysia"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/malaysia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Malaysia 2026: Bangladesh Guide | Eammu Holidays",
    "description": "Complete 2026 guide to study in Malaysia from Bangladesh: tuition in BDT, EMGS visa steps, scholarships, intakes and free counseling from Eammu Holidays.",
    "url": "https://eammu.com/study/malaysia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Malaysia 2026: Bangladesh Guide | Eammu Holidays",
    "description": "Complete 2026 guide to study in Malaysia from Bangladesh: tuition in BDT, EMGS visa steps, scholarships, intakes and free counseling from Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Malaysia", "href": "/study/malaysia"}];
const NAV = [
  {
    "label": "Malaysia Hub",
    "pages": [
      {
        "href": "/study/malaysia",
        "label": "Study in Malaysia Hub",
        "title": "Study in Malaysia 2026: Complete Hub for Bangladeshi Students",
        "d": "Start here: every guide on tuition, visas, EMGS, scholarships, universities and local support for Bangladeshi students planning to study in Malaysia."
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/malaysia/study-in-malaysia-from-bangladesh",
        "label": "Study from Bangladesh",
        "title": "Study in Malaysia from Bangladesh",
        "d": "A practical roadmap for studying in Malaysia from Bangladesh: levels, costs, visa steps and timelines in one place."
      },
      {
        "href": "/study/malaysia/study-in-malaysia-without-ielts",
        "label": "Without IELTS",
        "title": "Study in Malaysia Without IELTS",
        "d": "Learn how Bangladeshi students can enter Malaysian universities without IELTS using HSC English, internal tests or English bridging courses."
      },
      {
        "href": "/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students",
        "label": "Tuition Fees",
        "title": "Tuition Fees in Malaysia for Bangladeshi Students",
        "d": "Realistic tuition ranges in MYR and BDT for foundation, diploma, bachelor’s and master’s programmes in Malaysia."
      },
      {
        "href": "/study/malaysia/cost-of-living-in-malaysia-for-bangladeshi-students",
        "label": "Cost of Living",
        "title": "Cost of Living in Malaysia for Bangladeshi Students",
        "d": "Monthly budget breakdown for rent, food, transport and phone in Kuala Lumpur, Penang, Johor and other student cities."
      },
      {
        "href": "/study/malaysia/cheapest-universities-in-malaysia",
        "label": "Cheapest Universities",
        "title": "Cheapest Universities in Malaysia",
        "d": "How to find low-cost Malaysian universities and what to check beyond the headline tuition fee."
      },
      {
        "href": "/study/malaysia/top-universities-in-malaysia",
        "label": "Top Universities",
        "title": "Top Universities in Malaysia",
        "d": "Overview of leading public, private and branch-campus universities in Malaysia and how to choose among them."
      },
      {
        "href": "/study/malaysia/public-vs-private-universities-in-malaysia",
        "label": "Public vs Private",
        "title": "Public vs Private Universities in Malaysia",
        "d": "Compare fees, entry rules, intakes and campus life at public and private universities in Malaysia."
      },
      {
        "href": "/study/malaysia/scholarships-in-malaysia-for-bangladeshi-students",
        "label": "Scholarships",
        "title": "Scholarships in Malaysia for Bangladeshi Students",
        "d": "Types of scholarships and fee waivers available to Bangladeshi students in Malaysia and how to apply."
      },
      {
        "href": "/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students",
        "label": "Admission Requirements",
        "title": "Admission Requirements in Malaysia for Bangladeshi Students",
        "d": "SSC, HSC, diploma, English and document requirements for Malaysian universities explained for Bangladeshi applicants."
      },
      {
        "href": "/study/malaysia/study-gap-accepted-universities-in-malaysia",
        "label": "Study Gap Accepted",
        "title": "Study Gap Accepted Universities in Malaysia",
        "d": "How study gaps are treated by Malaysian universities and what documents explain a gap for Bangladeshi applicants."
      },
      {
        "href": "/study/malaysia/study-in-malaysia-after-ssc",
        "label": "After SSC",
        "title": "Study in Malaysia After SSC",
        "d": "Foundation, diploma and A-level routes for SSC graduates planning to study in Malaysia."
      },
      {
        "href": "/study/malaysia/study-in-malaysia-after-diploma",
        "label": "After Diploma",
        "title": "Study in Malaysia After Diploma",
        "d": "Credit exemption and degree entry options for Bangladeshi polytechnic and diploma holders in Malaysia."
      },
      {
        "href": "/study/malaysia/malaysia-intake-dates",
        "label": "Intake Dates",
        "title": "Malaysia Intake Dates",
        "d": "Main intake months in Malaysia and the best time for Bangladeshi students to start applications."
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/malaysia/mbbs-in-malaysia-for-bangladeshi-students",
        "label": "MBBS in Malaysia",
        "title": "MBBS in Malaysia for Bangladeshi Students",
        "d": "Entry rules, costs and recognition checks for Bangladeshi students considering medicine in Malaysia."
      },
      {
        "href": "/study/malaysia/mba-in-malaysia-for-bangladeshi-students",
        "label": "MBA in Malaysia",
        "title": "MBA in Malaysia for Bangladeshi Students",
        "d": "MBA entry rules, fees in BDT and work-experience expectations for Bangladeshi applicants in Malaysia."
      },
      {
        "href": "/study/malaysia/cse-and-it-courses-in-malaysia",
        "label": "CSE & IT Courses",
        "title": "CSE and IT Courses in Malaysia",
        "d": "Computer science, software engineering, data science and cybersecurity study options in Malaysia for Bangladeshi students."
      },
      {
        "href": "/study/malaysia/credit-transfer-from-malaysia-to-uk-australia",
        "label": "Credit Transfer to UK/Australia",
        "title": "Credit Transfer from Malaysia to the UK and Australia",
        "d": "How 2+1 and 1+2 twinning and credit transfer from Malaysia to UK or Australian universities work."
      },
      {
        "href": "/study/malaysia/student-accommodation-in-malaysia",
        "label": "Student Accommodation",
        "title": "Student Accommodation in Malaysia",
        "d": "Hostels, shared apartments and off-campus housing options with typical monthly rents for students in Malaysia."
      }
    ]
  },
  {
    "label": "Visa, EMGS & Work Rules",
    "pages": [
      {
        "href": "/study/malaysia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements",
        "title": "Malaysia Student Visa Requirements for Bangladesh",
        "d": "Documents and steps needed for a Malaysian student visa from Bangladesh, including eVAL and student pass."
      },
      {
        "href": "/study/malaysia/emgs-visa-process-and-tracking-guide",
        "label": "EMGS Process & Tracking",
        "title": "EMGS Visa Process and Tracking Guide",
        "d": "What EMGS is, how the percentage stages (5% to 70%) are commonly read, and what the eVAL means."
      },
      {
        "href": "/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa",
        "label": "Bank Solvency",
        "title": "Bank Solvency Requirements for Malaysia Student Visa",
        "d": "How much money proof Bangladeshi students should prepare and how to present bank statements for a Malaysia visa."
      },
      {
        "href": "/study/malaysia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost",
        "title": "Malaysia Student Visa Processing Time and Cost",
        "d": "Typical EMGS and visa processing time plus the main fees Bangladeshi students should budget for."
      },
      {
        "href": "/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia",
        "label": "Work Rules",
        "title": "Part-Time Job and Post-Study Work Rules in Malaysia",
        "d": "What international students may and may not do regarding part-time work and staying after graduation in Malaysia."
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/malaysia/bangladesh-offices",
        "label": "Bangladesh Offices & Support",
        "title": "Eammu Holidays Bangladesh Offices and Support",
        "d": "Walk-in counseling in Dhaka and online or courier processing for Malaysia study applicants in every division of Bangladesh."
      },
      {
        "href": "/study/malaysia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy",
        "title": "Dhaka Consultancy",
        "d": "Study in Malaysia consultancy in Dhaka for 2026: free counseling, university shortlisting, EMGS support and visa guidance from Eammu Holiday"
      },
      {
        "href": "/study/malaysia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy",
        "title": "Uttara Consultancy",
        "d": "Study in Malaysia consultancy for Uttara, Dhaka students in 2026: counseling, EMGS help and visa guidance from Eammu Holidays with easy Metr"
      },
      {
        "href": "/study/malaysia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy",
        "title": "Dhanmondi Consultancy",
        "d": "Study in Malaysia consultancy for Dhanmondi, Dhaka students in 2026: counseling, university shortlisting, EMGS steps and visa help from Eamm"
      },
      {
        "href": "/study/malaysia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy",
        "title": "Mirpur Consultancy",
        "d": "Study in Malaysia consultancy for Mirpur, Dhaka students in 2026: budget-friendly counseling, diploma pathways and EMGS support from Eammu H"
      },
      {
        "href": "/study/malaysia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy",
        "title": "Chattogram Consultancy",
        "d": "Study in Malaysia consultancy for Chattogram students in 2026: online counseling, courier document support, EMGS and visa guidance from Eamm"
      },
      {
        "href": "/study/malaysia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy",
        "title": "Sylhet Consultancy",
        "d": "Study in Malaysia consultancy for Sylhet students in 2026: online counseling, document courier support, EMGS tracking and visa help from Eam"
      },
      {
        "href": "/study/malaysia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy",
        "title": "Rajshahi Consultancy",
        "d": "Study in Malaysia consultancy for Rajshahi students in 2026: online counseling, courier document handling, EMGS steps and visa guidance from"
      },
      {
        "href": "/study/malaysia/consultancy-in-khulna",
        "label": "Khulna Consultancy",
        "title": "Khulna Consultancy",
        "d": "Study in Malaysia consultancy for Khulna students in 2026: online counseling, courier document support, engineering pathways and visa help f"
      },
      {
        "href": "/study/malaysia/consultancy-in-barishal",
        "label": "Barishal Consultancy",
        "title": "Barishal Consultancy",
        "d": "Study in Malaysia consultancy for Barishal students in 2026: online counseling, document courier help, EMGS tracking and visa guidance from "
      },
      {
        "href": "/study/malaysia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy",
        "title": "Rangpur Consultancy",
        "d": "Study in Malaysia consultancy for Rangpur students in 2026: online counseling, courier documents, scholarship tips and EMGS guidance from Ea"
      },
      {
        "href": "/study/malaysia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy",
        "title": "Mymensingh Consultancy",
        "d": "Study in Malaysia consultancy for Mymensingh students in 2026: easy access to Dhaka counseling, online support and EMGS guidance from Eammu "
      },
      {
        "href": "/study/malaysia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy",
        "title": "Cumilla Consultancy",
        "d": "Study in Malaysia consultancy for Cumilla students in 2026: local-area support, online counseling, EMGS help and visa guidance from Eammu Ho"
      },
      {
        "href": "/study/malaysia/consultancy-in-bogura",
        "label": "Bogura Consultancy",
        "title": "Bogura Consultancy",
        "d": "Study in Malaysia consultancy for Bogura students in 2026: online counseling, courier document support and visa guidance from Eammu Holidays"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/malaysia/study-in-malaysia-from-bangladesh",
    "title": "Study in Malaysia from Bangladesh",
    "description": "A practical roadmap for studying in Malaysia from Bangladesh: levels, costs, visa steps and timelines in one place."
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
  },
  {
    "href": "/study/malaysia/bangladesh-offices",
    "title": "Eammu Holidays Bangladesh Offices and Support",
    "description": "Walk-in counseling in Dhaka and online or courier processing for Malaysia study applicants in every division of Bangladesh."
  }
];

// In-page "In this guide" anchors. Each id below must match a section id further down this file.
// These are same-page jump links (/study/malaysia#id), not separate pages, so no new routes are needed.
const TOC = [
  { id: 'why-malaysia', label: 'Why Bangladeshi students choose Malaysia' },
  { id: 'destination', label: 'Malaysia as an education destination' },
  { id: 'education-system', label: 'The Malaysian education system' },
  { id: 'pros-cons', label: 'Advantages, disadvantages and who it suits' },
  { id: 'where-to-begin', label: 'Where to begin: choose your level' },
  { id: 'pathways', label: 'Pathways after SSC, HSC and diploma' },
  { id: 'universities', label: 'Top universities in Malaysia' },
  { id: 'courses', label: 'Popular courses and subjects' },
  { id: 'costs', label: 'Indicative cost snapshot' },
  { id: 'tuition-costs', label: 'Tuition fees and total education costs' },
  { id: 'first-year-budget', label: 'Sample first-year budget' },
  { id: 'cost-of-living', label: 'Cost of living by city' },
  { id: 'scholarships', label: 'Scholarships and financial support' },
  { id: 'intakes', label: 'Intakes and application timeline' },
  { id: 'journey', label: 'Your step-by-step journey' },
  { id: 'emgs-visa', label: 'Student visa and EMGS process' },
  { id: 'visa-requirements', label: 'Visa requirements for Bangladeshi students' },
  { id: 'without-ielts', label: 'Study in Malaysia without IELTS' },
  { id: 'work-rules', label: 'Part-time work and employment rules' },
  { id: 'student-life', label: 'Accommodation and student life' },
  { id: 'recognition', label: 'Degree recognition and future study' },
  { id: 'roadmap', label: 'Complete application roadmap' },
  { id: 'mistakes', label: 'Common mistakes to avoid' },
  { id: 'support', label: 'How Eammu Holidays supports you' },
  { id: 'bangladesh-support', label: 'Support in every division of Bangladesh' },
  { id: 'official-sources', label: 'Official sources to verify' },
  { id: 'faq-heading', label: 'Frequently asked questions' }
];

const FAQS = [
  {
    "q": "Is Malaysia a good choice for Bangladeshi students in 2026?",
    "a": "Yes, for many students. It offers English-medium courses, lower costs than Western destinations and many private universities with Bangladeshi communities. Suitability still depends on your budget, results and career goals."
  },
  {
    "q": "How much does it cost to study in Malaysia from Bangladesh?",
    "a": "A private bachelor's degree typically costs about RM 25,000 to RM 80,000 in total tuition, plus roughly RM 1,200 to RM 2,500 per month for living. Convert at the current rate and confirm with your chosen university."
  },
  {
    "q": "Can I apply without IELTS?",
    "a": "Many private universities accept alternatives such as HSC English results or an internal English test, but requirements vary by course and university."
  },
  {
    "q": "Does Eammu Holidays handle the whole process?",
    "a": "Eammu Holidays assists with counseling, university selection, application, EMGS submission support and pre-departure guidance. Final decisions rest with the university, EMGS and Malaysian immigration."
  },
  {
    "q": "What is the minimum qualification to study in Malaysia?",
    "a": "It depends on the level. Foundation and diploma programmes generally start from SSC or an equivalent qualification, bachelor's programmes generally expect HSC, A-levels, a foundation certificate or a recognised diploma, and master's programmes expect a recognised bachelor's degree. Each university sets its own subject, grade and English requirements, so always confirm the exact criteria for your chosen programme before paying any fee."
  },
  {
    "q": "Can I study in Malaysia after SSC?",
    "a": "Yes, but usually not by entering a bachelor's degree directly. SSC graduates normally begin with a foundation programme, a diploma or a pre-university course such as A-levels, then progress to a bachelor's degree. The duration and eligibility depend on the institution and the programme, and a university must confirm your eligibility in writing."
  },
  {
    "q": "Can I study in Malaysia after HSC?",
    "a": "Yes. HSC graduates can apply for foundation programmes or, at some universities and for some subjects, direct bachelor's entry. Your HSC group, subject combination and grades matter: engineering and computing usually expect mathematics, and medicine and health sciences usually expect specific science subjects. Some universities may still ask for a foundation year even after HSC."
  },
  {
    "q": "How much bank balance is required for a Malaysia student visa?",
    "a": "There is no single figure that applies to every student. Requirements for proof of funds depend on the university, the programme, the level of study and the guidance in force at the time of application. Prepare clear bank statements in the name of the student or sponsor with supporting documents showing the source of funds, and ask your university or counselor for the current requirement. See our bank solvency guide for how to present the documents."
  },
  {
    "q": "How much does a bachelor's degree in Malaysia cost for Bangladeshi students?",
    "a": "Private universities commonly fall in the range of about RM 25,000 to RM 80,000 for the whole programme, which is roughly Tk 7 to 22 lakh at an assumed rate of 1 MYR = 28 BDT. Engineering, computing at branch campuses and medicine can cost more, and branch campuses of foreign universities are usually at the upper end. Always ask whether a quoted fee is per year or for the full programme, and add living costs, visa-related charges and insurance."
  },
  {
    "q": "What are the cheapest universities in Malaysia?",
    "a": "Lower-cost options are usually found among smaller or regional private institutions and some public universities, but the cheapest headline tuition is not always the best value. Check programme accreditation, campus facilities, the city's living costs, additional fees, refund policies and your expected graduate outcomes before you decide. Our cheapest universities guide explains how to compare them."
  },
  {
    "q": "What is the EMGS process for Bangladeshi students?",
    "a": "After you accept an offer from a participating institution, the university or you submit your student pass application through EMGS. EMGS processes the application with the Malaysian Immigration Department and, if approved, issues an electronic Visa Approval Letter (eVAL). Students who need a Single Entry Visa then obtain it from the Malaysian mission, travel to Malaysia, complete the post-arrival medical screening and have the student pass endorsed. Approval is decided by the relevant authorities, not by the university or any agent."
  },
  {
    "q": "How long does the Malaysia student visa process take?",
    "a": "There is no fixed or guaranteed timeline. The time depends on how complete your documents are, the number of applications being processed in your intake season and the authorities' review. Many students allow several weeks, and longer around peak intakes, from complete submission to the eVAL, plus extra time for the Single Entry Visa where required. Do not book flights until you have the appropriate travel authorization."
  },
  {
    "q": "Can international students work part-time in Malaysia?",
    "a": "Only under limited, regulated conditions. Official guidance describes a maximum of 20 hours a week in approved sectors such as restaurants, petrol stations, mini markets and hotels, and an application must be made through your institution with immigration approval before you start. Some official guidance describes this as limited to semester breaks or holidays longer than seven days. Part-time work should never be relied on to pay tuition or living costs, and working without approval can put your student pass at risk."
  },
  {
    "q": "Can I get a scholarship to study in Malaysia?",
    "a": "Some universities offer merit-based scholarships or tuition waivers to international students, and a few government-linked programmes exist, mostly at postgraduate level. Availability, eligibility, deadlines and amounts change every year and are never guaranteed. Apply together with your admission application and be cautious about anyone promising a guaranteed full scholarship."
  },
  {
    "q": "Can I bring my family to Malaysia while I study?",
    "a": "Dependant passes exist in the Malaysian immigration system, but eligibility depends on your level of study, your institution and the rules in force at the time. They are generally considered for postgraduate students rather than undergraduates. Confirm eligibility with your university and the Immigration Department before making any plans, and do not assume that family members can join you automatically."
  },
  {
    "q": "Are Malaysian degrees recognized in Bangladesh?",
    "a": "Recognition depends on the specific university, the programme and the authority asking. Check that the programme is accredited by the Malaysian Qualifications Agency (MQA) and listed in the Malaysian Qualifications Register, and confirm with the relevant Bangladeshi authority, such as UGC for equivalence or the professional council for regulated careers like medicine, pharmacy or engineering, before you enrol."
  },
  {
    "q": "Can I transfer from Malaysia to the UK or Australia?",
    "a": "Some universities offer twinning or credit-transfer arrangements, for example 2+1 or 1+2 structures, which let you complete part of a degree in Malaysia and the rest in the UK or Australia. Transfer is never automatic: the receiving university decides how many credits it accepts, and you must also meet the visa and English requirements of the new country. Our credit transfer guide explains how these pathways work."
  },
  {
    "q": "What happens after graduation in Malaysia?",
    "a": "Your student pass is linked to your studies, so you generally need to leave Malaysia or change your immigration status when it ends. Some graduates return to Bangladesh, some continue to a master's degree or move to another country, and some are hired by employers who sponsor a work pass. Employment is never guaranteed, and the rules for staying on can change, so check current Immigration Department guidance."
  },
  {
    "q": "Can students with a study gap apply to Malaysian universities?",
    "a": "Many students with gaps do receive offers, but acceptance depends on the length of the gap, the programme and how well you can explain it. Prepare an honest statement and supporting evidence such as employment records, short courses, medical documents or family circumstances. Longer gaps and competitive programmes are harder, and no university can be guaranteed to accept a gap in advance."
  },
  {
    "q": "When should I apply for the next intake?",
    "a": "Start four to six months before the intake month. Counting from mid-November 2026, a February or March 2027 start is possible for some programmes but leaves little time for documents, the offer, EMGS and the visa, while May or June 2027 and September or October 2027 intakes allow a comfortable timeline. Intake availability differs by university and programme, so confirm with the admissions office."
  },
  {
    "q": "Can students from outside Dhaka apply through Eammu Holidays?",
    "a": "Yes. Walk-in counseling is available in Dhaka, and students in Chattogram, Sylhet, Rajshahi, Khulna, Barishal, Rangpur, Mymensingh, Cumilla, Bogura and other districts can receive online counseling, document guidance and courier-based support where those services are available. You do not need to move to Dhaka to begin the process."
  },
  {
    "q": "Is halal food easy to find in Malaysia?",
    "a": "Yes. Malaysia is a Muslim-majority country, halal food is widely available in cities and around campuses, and many universities have prayer facilities. Look for halal certification on packaged food and restaurants, as the country is also home to non-halal outlets that are clearly separated."
  },
  {
    "q": "Should I choose a public or private university in Malaysia?",
    "a": "Private universities are usually easier to enter, offer more intakes and more English-medium options, and often have strong industry links, but their fees can be higher. Public universities can offer strong research and lower fees for some programmes, but international places may be limited and some undergraduate programmes use Malay. The better choice depends on your grades, budget and course, as explained in our public vs private comparison."
  },
  {
    "q": "Is it safe for Bangladeshi students to live in Malaysia?",
    "a": "Malaysia is a popular and generally welcoming student destination, but like any large country it has petty theft, scams and traffic risks. Choose well-reviewed accommodation, keep your passport and student pass documents secure, avoid sharing sensitive details with strangers, follow local laws closely, and know the emergency numbers. Your university's international office is your first point of contact for problems."
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
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://eammu.com/study/malaysia",
      "url": "https://eammu.com/study/malaysia",
      "name": "Study in Malaysia 2026: Complete Guide for Bangladeshi Students",
      "inLanguage": "en",
      "hasPart": TOC.map((t) => ({
        "@type": "WebPageElement",
        "name": t.label,
        "url": `${SITE_URL}${PAGE_HREF}#${t.id}`
      }))
    },
    {
      "@type": "Article",
      "headline": "Study in Malaysia 2026: Complete Guide for Bangladeshi Students",
      "description": "Complete 2026 guide to study in Malaysia from Bangladesh: tuition in BDT, EMGS visa steps, scholarships, intakes and free counseling from Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/malaysia",
      "keywords": "Study in Malaysia, Study in Malaysia from Bangladesh, Malaysia student visa, Malaysia tuition fees, Malaysia scholarships for Bangladeshi students, EMGS Malaysia",
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

// Shared class names for the expanded sections (responsive across phone, tablet and desktop).
const secCls = 'mt-10 scroll-mt-20';
const pCls = 'mt-4 leading-7 text-slate-700';
const h2Cls = 'text-xl font-bold leading-snug text-emerald-900 sm:text-2xl';
const h3Cls = 'mt-8 text-lg font-bold leading-snug text-emerald-800 sm:text-xl';
const ulCls = 'mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700 sm:pl-6';
const olCls = 'mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700 sm:pl-6';
const noteCls = 'mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-3 text-sm leading-6 text-slate-700 sm:p-4';
const cardCls = 'rounded-lg border border-slate-200 bg-white p-4';

// Helper: internal link with the existing link style.
const lk = (href = '', text = '') => (
  <Link href={href} className={linkClass}>{text}</Link>
);

const TABLES = [
  {
    id: 'levels',
    caption: 'Malaysian study levels, typical duration, entry and progression',
    head: ['Level', 'Typical duration', 'Typical entry', 'Common progression'],
    rows: [
      ['Foundation / pre-university', 'About 1 year (some run 9 to 18 months)', 'Usually SSC or equivalent; some accept HSC students changing subject area', "Bachelor's degree at the same university or a partner institution"],
      ['Diploma', 'About 2 to 3 years', 'SSC or HSC or equivalent, depending on the programme', "Bachelor's degree, often with credit exemption or advanced entry"],
      ["Bachelor's degree", 'About 3 to 4 years (engineering often 4; medicine and some professional programmes longer)', 'HSC, A-levels, foundation or a recognised diploma', "Master's degree, professional certification or employment"],
      ["Master's (coursework, research, MBA)", 'About 1 to 2 years', "Recognised bachelor's degree; MBA programmes may also ask for work experience", 'PhD, career progression or further professional study'],
      ['PhD', 'About 3 to 4 years or more', "Master's degree (some universities consider strong bachelor's graduates), research proposal and supervisor agreement", 'Research, academia or specialist industry roles'],
      ['Professional and technical education', 'Varies by qualification', 'Varies; some accept SSC or HSC', "Employment, or a bachelor's top-up where credit transfer is available"]
    ]
  },
  {
    id: 'pathways',
    caption: 'Study routes by Bangladeshi qualification',
    head: ['Your situation', 'Routes commonly considered', 'What to keep in mind'],
    rows: [
      ['SSC graduate', 'Foundation, diploma, or A-level style pre-university programmes', 'Direct bachelor\'s entry from SSC alone is generally not available. The route you choose affects total time and cost.'],
      ['HSC graduate', "Foundation, or direct bachelor's entry where the university accepts HSC for that programme", 'Your HSC group, subjects (for example mathematics or physics) and GPA matter. Some universities still ask for a foundation year.'],
      ['Polytechnic diploma holder', 'Credit exemption or advanced entry into a related bachelor\'s degree; sometimes a relevant diploma year', 'Exemptions depend on how your subjects map to the university\'s curriculum. Ask for the credit evaluation in writing.'],
      ["Bachelor's graduate", "Master's, MBA, postgraduate diploma or PhD", 'Universities look at CGPA, subject relevance, English, and for MBA often work experience. PhD needs a research proposal and supervisor.'],
      ['Student with a study gap', 'Foundation, diploma or degree depending on your last qualification', 'Explain the gap honestly with supporting documents. Acceptance varies by university and programme.'],
      ['Student changing subject', 'Foundation in the new field, a diploma, or a conversion master\'s programme', 'Check prerequisites such as mathematics for engineering or computing, and whether extra bridging modules are required.']
    ]
  },
  {
    id: 'cost-detail',
    caption: 'Malaysia study cost components, indicative figures and what to check',
    head: ['Cost item', 'Indicative figure or note', 'What to check with the university'],
    rows: [
      ['Foundation tuition', 'RM 10,000 – 25,000 for the year (about Tk 2.8 – 7 lakh)', 'Whether the fee covers lab, materials and exam charges'],
      ['Diploma tuition', 'RM 15,000 – 40,000 for the programme (about Tk 4.2 – 11.2 lakh)', 'Programme length, credit exemption and internship costs'],
      ["Bachelor's tuition", 'RM 25,000 – 80,000 for the programme at private institutions (about Tk 7 – 22.4 lakh)', 'Branch campuses, engineering and health programmes can be higher. Public universities publish separate international fee schedules.'],
      ["Master's tuition", 'RM 20,000 – 60,000 for the programme (about Tk 5.6 – 16.8 lakh)', 'Coursework versus research fees and thesis supervision charges'],
      ['MBA tuition', 'Often within or above the master\'s range depending on the school; confirm with the school', 'Whether quoted fees are per semester, per year or total'],
      ['PhD tuition', 'No single reliable range; depends on university, field and whether the work is research-based', 'Annual research fees, funding and scholarship options, supervision requirements'],
      ['Medical programme tuition', 'Typically far higher than other degrees, often running into hundreds of thousands of ringgit over the programme at private institutions', 'Total programme fee, clinical placement costs and recognition status for practising'],
      ['University application fee', 'Some universities charge none; others charge a modest fee', 'Whether it is refundable and how to pay safely'],
      ['Registration and admin fees', 'Usually one-time or annual charges plus possible deposits or caution money', 'Refund policy and any compulsory student services fees'],
      ['International student fees', 'Some institutions add international student charges, and a 6% service tax on private tuition for international students has been reported from July 2025', 'Ask for an itemised written quote including any tax'],
      ['EMGS-related charges', 'Processing fee plus separate immigration, medical and insurance components; amounts vary', 'Ask for an itemised EMGS quote. Fees are generally non-refundable once processed.'],
      ['Student visa-related charges', 'Student pass, entry visa, iKad and related costs; vary by nationality, insurance package and institution', 'See our visa time and cost guide and confirm the latest amounts'],
      ['Medical examination', 'Post-arrival screening within 7 days of entry at an approved clinic; a health declaration or pre-arrival report may also be requested', 'Which clinic, what it costs and how failures or appeals are handled'],
      ['Health insurance', 'Usually part of the EMGS visa package for the first year and renewed annually', 'What is covered and what is excluded (dental, pre-existing conditions)'],
      ['Accommodation', 'See the cost-of-living tables below', 'Hostel availability, deposit and contract length'],
      ['Food, transport, personal', 'See the cost-of-living tables below', 'Meal plans, campus transport and student discounts'],
      ['Flight tickets', 'Varies by season and airline; planning figure used below is RM 1,000 (about Tk 28,000) one way', 'Book only after appropriate travel authorization, and check live fares'],
      ['Initial settlement', 'Planning figure used below is RM 1,500 (about Tk 42,000)', 'Deposit, bedding, basic kitchen items, SIM card and transport card']
    ]
  },
  {
    id: 'first-year',
    caption: 'Illustrative first-year budget example for a bachelor\'s student',
    head: ['Item', 'Illustrative MYR', 'Approx. BDT (1 MYR = 28)', 'Notes'],
    rows: [
      ['Year-one tuition', 'RM 20,000', 'Tk 5.6 lakh', 'Example only. Replace with the figure from your offer letter.'],
      ['Application, registration and deposit', 'RM 1,000', 'Tk 28,000', 'Varies widely; some universities waive application fees.'],
      ['EMGS, visa, insurance and medical', 'RM 3,000', 'Tk 84,000', 'Planning figure. Ask for an itemised quote.'],
      ['Flight (one way)', 'RM 1,000', 'Tk 28,000', 'Planning figure; compare live fares.'],
      ['Initial settlement', 'RM 1,500', 'Tk 42,000', 'Deposit, bedding, SIM and setup.'],
      ['Living costs (12 months at RM 1,800)', 'RM 21,600', 'Tk 6.05 lakh', 'Moderate budget example.'],
      ['Estimated first-year total', 'RM 48,100', 'Tk 13.47 lakh', 'Not a quote. Your real total depends on your programme and choices.']
    ]
  },
  {
    id: 'city-costs',
    caption: 'Student locations in Malaysia and relative living costs',
    head: ['Location', 'Typical student profile', 'Cost and lifestyle notes'],
    rows: [
      ['Kuala Lumpur', 'Many private universities, business, design, health and technology campuses', 'Wide choice and strong public transport (LRT, MRT, monorail). Rents are generally among the higher ones in the country.'],
      ['Selangor (Subang Jaya, Sunway, Bangi, Serdang, Semenyih)', 'Large clusters of private and public universities and branch campuses', 'Rents vary a lot by area. Campuses outside the city centre may rely on buses or e-hailing.'],
      ['Cyberjaya', 'Technology and multimedia students; home to Multimedia University', 'Quieter, planned town. Cheaper than central KL in some areas, but fewer entertainment and food options late at night.'],
      ['Penang', 'Universiti Sains Malaysia and private colleges, strong food culture', 'Often considered more affordable than KL for housing and food, but costs depend on the neighbourhood.'],
      ['Johor Bahru', 'Universiti Teknologi Malaysia (Skudai) and private institutions', 'Proximity to Singapore influences prices in some areas. Skudai is more budget-friendly than central JB in many cases.'],
      ['Negeri Sembilan (Nilai)', 'INTI and other campuses; close to KLIA', 'Typically quieter and lower cost, with easy airport access.'],
      ['Other locations (Melaka, Perak, Pahang, Kedah, Sabah, Sarawak)', 'Public universities, specialised colleges and some private campuses', 'Costs vary. Check transport, hostel availability and distance from the nearest city.']
    ]
  },
  {
    id: 'budget-low',
    caption: 'Budget-conscious monthly living costs (shared room, mostly self-prepared or low-cost meals)',
    head: ['Item', 'MYR per month', 'Approx. BDT per month'],
    rows: [
      ['Shared room or hostel', 'RM 450 – 700', 'Tk 12,600 – 19,600'],
      ['Food', 'RM 400 – 600', 'Tk 11,200 – 16,800'],
      ['Local transport', 'RM 100 – 150', 'Tk 2,800 – 4,200'],
      ['Utilities and internet share', 'RM 50 – 100', 'Tk 1,400 – 2,800'],
      ['Mobile data', 'RM 30 – 50', 'Tk 840 – 1,400'],
      ['Personal expenses', 'RM 170 – 250', 'Tk 4,760 – 7,000'],
      ['Approximate total', 'RM 1,200 – 1,850', 'Tk 33,600 – 51,800']
    ]
  },
  {
    id: 'budget-mid',
    caption: 'Moderate monthly living costs (better room, regular eating out, more travel)',
    head: ['Item', 'MYR per month', 'Approx. BDT per month'],
    rows: [
      ['Single or better shared room', 'RM 700 – 1,000', 'Tk 19,600 – 28,000'],
      ['Food', 'RM 600 – 800', 'Tk 16,800 – 22,400'],
      ['Local transport and e-hailing', 'RM 150 – 250', 'Tk 4,200 – 7,000'],
      ['Utilities and internet', 'RM 80 – 150', 'Tk 2,240 – 4,200'],
      ['Mobile data', 'RM 40 – 70', 'Tk 1,120 – 1,960'],
      ['Personal expenses', 'RM 200 – 250', 'Tk 5,600 – 7,000'],
      ['Approximate total (rounded)', 'RM 1,800 – 2,500', 'Tk 50,400 – 70,000']
    ]
  },
  {
    id: 'intakes',
    caption: 'Common intake periods in Malaysia',
    head: ['Intake', 'Commonly suits', 'Notes'],
    rows: [
      ['February / March', 'Foundation, diploma, bachelor\'s and some master\'s programmes', 'Popular at many private universities. Needs early document preparation.'],
      ['May / June', 'Foundation, diploma, bachelor\'s and master\'s programmes', 'A frequent choice for students who finish HSC results and need time for the offer and visa.'],
      ['September / October', 'Main intake at many public universities and a large private-university intake', 'Competitive for popular programmes; apply early.'],
      ['Other institution-specific intakes', 'Some programmes start in other months, for example January, July or November', 'Availability differs by university and programme. Always confirm with admissions.']
    ]
  },
  {
    id: 'timeline',
    caption: 'Sample application timeline for a Bangladeshi student',
    head: ['Time before course start', 'What to do'],
    rows: [
      ['6 to 9 months', 'Take counseling, shortlist courses and universities, check passport validity, and plan English evidence if needed.'],
      ['5 to 6 months', 'Collect certificates, transcripts, photographs and a study-gap statement if relevant; submit applications.'],
      ['4 to 5 months', 'Receive and compare offer letters; accept the best option and pay only what the offer specifies.'],
      ['3 to 4 months', 'Prepare financial documents; begin the EMGS or student pass submission through the university.'],
      ['2 to 3 months', 'Track EMGS progress; receive the eVAL; apply for the Single Entry Visa if applicable.'],
      ['1 to 2 months', 'Arrange accommodation and insurance details; book travel only after the right authorization; complete pre-departure preparation.'],
      ['Arrival', 'Complete the post-arrival medical within the required period, register at the university, and have the student pass endorsed.']
    ]
  },
  {
    id: 'terms',
    caption: 'EMGS, eVAL, SEV and Student Pass compared',
    head: ['Term', 'What it means', 'Who handles it'],
    rows: [
      ['EMGS (Education Malaysia Global Services)', 'The agency that manages the student visa application process for international students at participating institutions', 'Processes applications submitted by or through your institution'],
      ['eVAL (Electronic Visa Approval Letter)', 'The approval letter issued after your application is approved; it is the document used for entry visa and travel purposes and has a validity period shown on the letter', 'Issued via EMGS after immigration approval'],
      ['SEV (Single Entry Visa)', 'A visa label or electronic visa obtained from a Malaysian mission overseas for nationalities that require it, using the eVAL', 'Malaysian embassy, high commission or consulate'],
      ['Student Pass', 'The immigration pass that lets you study in Malaysia; endorsed in your passport after arrival and a successful medical, normally for one year and renewed annually', 'Malaysian Immigration Department, through EMGS and your institution'],
      ['iKad', 'An identification card issued to many foreign students', 'Arranged through EMGS and your institution']
    ]
  },
  {
    id: 'work',
    caption: 'Part-time work and employment rules for international students',
    head: ['Topic', 'What current official and EMGS guidance indicates', 'Practical advice'],
    rows: [
      ['Can international students work part-time?', 'Yes, but only in a limited and regulated way for students at public universities and private higher education institutions', 'Do not plan your finances around it.'],
      ['Weekly limit', 'Maximum 20 hours per week', 'Count hours across all jobs; do not exceed the limit.'],
      ['Eligible sectors', 'Immigration guidance lists approved locations such as restaurants, petrol stations, mini markets and hotels', 'Confirm the specific job type and employer are acceptable before you start.'],
      ['Approval', 'Application is made through your institution and requires immigration approval; EMGS guidance notes the student attends with a university representative', 'Never begin work before written approval.'],
      ['Term time versus breaks', 'Some official guidance describes work as limited to semester breaks or holidays over seven days; other guidance describes the 20-hour limit during the study period', 'Ask your university to confirm in writing which applies to you.'],
      ['Internships', 'Internships and industrial training that are compulsory parts of your programme are arranged through the university', 'Ask the international office whether any immigration endorsement is needed.'],
      ['After graduation', 'Student pass is tied to your studies; staying to work generally needs an employer-sponsored work pass or another approved status', 'Treat post-study work as uncertain and plan accordingly.'],
      ['Penalties', 'Working without approval or breaking conditions can lead to cancellation of the pass and other action', 'Stay within the rules to protect your studies and visa.']
    ]
  },
  {
    id: 'housing',
    caption: 'Accommodation options for students in Malaysia',
    head: ['Option', 'Typical features', 'What to watch out for'],
    rows: [
      ['University hostel', 'On-campus, convenient, often shared rooms; availability depends on the university', 'Limited places for international students; apply early; check meal and curfew rules.'],
      ['Private student residence', 'Managed accommodation near campus with furniture, security and sometimes shuttle service', 'Contract length, deposit terms and what the rent includes.'],
      ['Shared apartment or condominium', 'Common for students; rent is split between housemates', 'Utilities, deposits and who is on the tenancy agreement.'],
      ['Room in a house', 'Often the lowest-cost option', 'Landlord rules, internet quality and safe commute at night.']
    ]
  },
  {
    id: 'recognition',
    caption: 'Degree recognition checks',
    head: ['Topic', 'Why it matters', 'What to verify'],
    rows: [
      ['Malaysian Qualifications Framework (MQF)', 'The national framework that sets qualification levels from certificates to doctoral degrees', 'The programme level on the MQF and your intended career or study route'],
      ['Malaysian Qualifications Agency (MQA)', 'Accredits programmes and maintains the Malaysian Qualifications Register', 'Programme listed with valid accreditation for the intake you will join'],
      ['Programme accreditation versus university approval', 'A university can be legitimate while a specific programme has a different accreditation status', 'Check programme-level status, not just the university name'],
      ['Recognition in Bangladesh', 'UGC Bangladesh and relevant authorities may need to verify or provide equivalence for certain uses', 'Check requirements with UGC and the employer or institution that will ask for equivalence'],
      ['Regulated professions', 'Medicine, pharmacy, engineering and similar fields have professional bodies that set their own rules', 'Ask the Bangladeshi professional council and the Malaysian regulator before enrolling'],
      ['Credit transfer', 'Allows part of your study in Malaysia to count towards a degree elsewhere', 'Written credit-transfer agreements and the receiving university\'s own rules'],
      ['Further study abroad', 'Many students continue to the UK, Australia, Canada or other countries', 'Entry requirements, English tests, visa rules and recognition by the new university']
    ]
  }
];

const LISTS = [
  {
    id: 'pros',
    items: [
      'Lower overall cost than many Western destinations, especially when you add tuition and living costs together.',
      'Many programmes taught in English, particularly at private universities and branch campuses.',
      'Wide choice of institutions, from public research universities to private universities and international branch campuses.',
      'Multicultural environment, easy access to halal food and prayer facilities, and established Bangladeshi student communities in major cities.',
      'Pathways such as foundation, diploma, twinning and credit transfer that can be adapted to your budget and goals.',
      'Geographically close to Bangladesh, with direct flights to Kuala Lumpur and shorter travel time than Europe or North America.'
    ]
  },
  {
    id: 'cons',
    items: [
      'Part-time work is tightly regulated and should not be relied upon to fund your studies.',
      'Post-study work and residence options are limited, so your plan after graduation needs to be realistic.',
      'Quality and recognition vary between institutions and programmes, so verification is essential.',
      'Hot and humid weather, cultural adjustment and different food can take time to get used to.',
      'Some public university undergraduate programmes use Malay, and international places can be limited.',
      'Costs can rise quickly in city centres and with branch-campus or professional programmes.'
    ]
  },
  {
    id: 'uni-docs',
    items: [
      'Passport copy with sufficient validity as specified by the university and EMGS.',
      'SSC and HSC certificates and transcripts, or diploma, bachelor\'s and master\'s certificates and transcripts for postgraduate applicants.',
      'English evidence where the university requires it, such as an IELTS or other accepted test score, or HSC English results where the university accepts them.',
      'Passport-size photographs in the format requested.',
      'Statement of purpose, CV, references or portfolio for some programmes, and a research proposal for research degrees.',
      'Explanation of any study gap with supporting evidence.',
      'Completed application form and any application fee if the university charges one.'
    ]
  },
  {
    id: 'imm-docs',
    items: [
      'Valid passport and, where requested, a clear scanned copy of the bio-data page.',
      'Passport photograph that meets the EMGS photo guidelines.',
      'University offer letter or admission confirmation.',
      'Academic certificates and transcripts as requested for the student pass application.',
      'Financial documents where required by the university or immigration.',
      'Health declaration or pre-arrival medical report where requested, and attendance at the post-arrival medical screening within the required period.',
      'Any declaration forms, insurance selections and payment confirmations requested through EMGS.'
    ]
  },
  {
    id: 'english-routes',
    items: [
      'HSC English results: some universities accept a minimum grade in HSC English as evidence of English ability for certain programmes.',
      'University internal English assessment: the university may test you online or on arrival and place you accordingly.',
      'Accepted alternative tests: depending on the university, tests such as TOEFL, PTE Academic, Cambridge English or MUET may be considered in place of IELTS.',
      'English bridging programmes: an intensive English course or a preparatory programme taken before the main course.',
      'Conditional admission: you may receive an offer that depends on completing an English course or reaching a certain test result.',
      'University-specific requirements: always confirm the exact rule for your programme in writing.'
    ]
  },
  {
    id: 'scholarship-types',
    items: [
      'University merit scholarships and academic excellence awards, usually based on your HSC, A-level, foundation or degree results.',
      'International student scholarships and tuition fee waivers that some private universities offer to attract applicants from specific countries.',
      'Research scholarships and graduate research assistantships at some public and private universities, mainly for master\'s and PhD students.',
      'Government-linked and institutional funding schemes for postgraduate students, which are competitive and change from year to year.',
      'Sports, leadership or special-talent awards offered by certain universities.'
    ]
  },
  {
    id: 'scholar-docs',
    items: [
      'Academic transcripts and certificates, and a strong CGPA or exam record.',
      'Statement of purpose or scholarship essay, CV and recommendation letters.',
      'English evidence, if required by the university.',
      'Research proposal and publications for research scholarships.',
      'Proof of extracurricular achievements, awards or leadership roles where relevant.',
      'Passport copy and completed scholarship application form.'
    ]
  },
  {
    id: 'emgs-steps',
    items: [
      'Choose a programme and university that is registered to enrol international students.',
      'Submit the admission application and supporting documents.',
      'Receive and review the offer letter and accept it according to its terms.',
      'The student pass application is submitted through EMGS, usually by the university or with its guidance, with the required documents and fees.',
      'EMGS processes the application and coordinates with the Malaysian Immigration Department; you track progress online.',
      'Complete any medical or health declaration requirement requested during the application.',
      'Receive the eVAL after approval and check its validity period.',
      'If your nationality requires it, apply for the Single Entry Visa at the relevant Malaysian mission using the eVAL.',
      'Travel to Malaysia only after you hold the appropriate authorization.',
      'Attend the post-arrival medical screening within the required period (commonly 7 days) at an approved clinic.',
      'Complete registration at the university and have the student pass endorsed.'
    ]
  },
  {
    id: 'roadmap',
    items: [
      'First counseling session: discuss your academic background, budget, goals and any study gap.',
      'Academic assessment: review your SSC, HSC, diploma or degree results and subject combination.',
      'Course selection: choose a field and level with realistic career and recognition goals.',
      'University shortlisting: compare 3 to 5 institutions by cost, accreditation, location, intake and entry rules.',
      'Prepare documents: certificates, transcripts, passport, photographs, English evidence and statements.',
      'Submit applications and respond promptly to requests from admissions offices.',
      'Receive offer letters, compare fees, scholarships and conditions, and accept the best fit.',
      'Financial preparation: arrange tuition payment plans, living funds and any required bank documents.',
      'EMGS and student pass: submit the application and track progress.',
      'Receive the eVAL and apply for the Single Entry Visa if required.',
      'Accommodation: reserve a hostel or private residence and confirm the move-in date.',
      'Travel: book flights after authorization, arrange insurance and pack essentials.',
      'Arrival: complete the post-arrival medical, register at the university, have the student pass endorsed and settle in.'
    ]
  },
  {
    id: 'services',
    items: [
      'Student counseling and profile review.',
      'University and programme selection.',
      'Admission application support.',
      'Document guidance and checklists.',
      'EMGS application assistance and tracking support.',
      'Student visa guidance.',
      'Financial planning guidance, including budget estimates in BDT.',
      'Pre-departure support covering travel, accommodation and arrival steps.'
    ]
  }
];

const UNIS = [
  {
    name: 'University of Malaya (UM)',
    type: 'Public research university',
    loc: 'Kuala Lumpur',
    strengths: 'A long-established comprehensive university with strong research activity across medicine, engineering, sciences, business, law and the humanities.',
    check: 'International undergraduate places can be competitive and many international students enter at postgraduate level. Confirm programme language, intake dates and current entry rules on the official international admissions page.'
  },
  {
    name: 'Universiti Putra Malaysia (UPM)',
    type: 'Public research university',
    loc: 'Serdang, Selangor',
    strengths: 'Known for agriculture, food science, veterinary, forestry and environmental fields, plus engineering, sciences and business.',
    check: 'Check whether your chosen undergraduate programme is open to international students and whether it is taught in English or Malay.'
  },
  {
    name: 'Universiti Kebangsaan Malaysia (UKM)',
    type: 'Public research university',
    loc: 'Bangi, Selangor',
    strengths: 'Broad range of programmes in sciences, engineering, health sciences, social sciences and education, with active postgraduate research.',
    check: 'Some undergraduate programmes are delivered in Malay. Confirm the language of instruction and international intake availability.'
  },
  {
    name: 'Universiti Sains Malaysia (USM)',
    type: 'Public research university',
    loc: 'Penang (main campus), with other campuses',
    strengths: 'Strong in sciences, engineering, health sciences, pharmacy, management and social sciences, with a recognised research culture.',
    check: 'Campus location differs by programme. Verify the campus, intake and language of instruction for your course.'
  },
  {
    name: 'Universiti Teknologi Malaysia (UTM)',
    type: 'Public technical university',
    loc: 'Skudai, Johor Bahru (also a Kuala Lumpur campus)',
    strengths: 'Focus on engineering, technology, computing, built environment and applied sciences.',
    check: 'For engineering programmes, confirm accreditation status and whether the programme is open to international students.'
  },
  {
    name: "Taylor's University",
    type: 'Private university',
    loc: 'Subang Jaya, Selangor',
    strengths: 'Known for hospitality and culinary studies, business, architecture and design, health sciences, computing and engineering, with multiple pathway options.',
    check: 'Compare fees, scholarship rules and the entry route (foundation, diploma or direct degree) for your qualification.'
  },
  {
    name: 'Sunway University',
    type: 'Private university',
    loc: 'Bandar Sunway, Selangor',
    strengths: 'Business, computer science, health and life sciences, hospitality and other fields within an integrated campus environment.',
    check: 'Ask about programme-specific entry rules, English requirements and scholarship criteria.'
  },
  {
    name: 'UCSI University',
    type: 'Private university',
    loc: 'Cheras, Kuala Lumpur (with a second campus in Negeri Sembilan)',
    strengths: 'Offers engineering, business, health and pharmacy-related programmes, computing and creative arts.',
    check: 'Confirm which campus your programme is taught at and its accreditation status.'
  },
  {
    name: 'Asia Pacific University (APU)',
    type: 'Private university',
    loc: 'Bukit Jalil, Kuala Lumpur',
    strengths: 'Technology-focused, with computing, artificial intelligence, cybersecurity, engineering and business programmes.',
    check: 'Check the specialisation, pathway (diploma or direct degree) and industry placement terms.'
  },
  {
    name: 'INTI International University',
    type: 'Private university',
    loc: 'Nilai, Negeri Sembilan (other campuses available)',
    strengths: 'Business, computing, engineering, design and health programmes, with pathway and twinning-style options with partner universities.',
    check: 'Confirm campus, partner-degree arrangements and recognition of any twinning pathway.'
  },
  {
    name: 'SEGi University',
    type: 'Private university',
    loc: 'Kota Damansara, Selangor (other campuses available)',
    strengths: 'Engineering, business, health sciences, education, design and computing programmes across several campuses.',
    check: 'Programme availability differs between campuses, so verify the campus and accreditation for your course.'
  },
  {
    name: 'Multimedia University (MMU)',
    type: 'Private university',
    loc: 'Cyberjaya (with a Melaka campus)',
    strengths: 'Information technology, multimedia, engineering, creative arts and business, located in a technology-focused town.',
    check: 'Check the campus, programme accreditation and any entry-level or foundation requirement.'
  },
  {
    name: 'Monash University Malaysia',
    type: 'International branch campus',
    loc: 'Bandar Sunway, Selangor',
    strengths: 'Australian university branch campus with programmes in business, engineering, information technology, sciences and health.',
    check: 'Fees are typically higher than at local private universities. Confirm the entry pathway, English requirements and degree structure.'
  },
  {
    name: 'University of Nottingham Malaysia',
    type: 'International branch campus',
    loc: 'Semenyih, Selangor',
    strengths: 'UK university branch campus with engineering, computer science, business, sciences and health-related programmes.',
    check: 'Fees are typically higher than at local private universities. Confirm entry rules and the recognition of the degree for your goals.'
  }
];

const COURSES = [
  {
    name: 'Computer Science',
    text: 'Covers programming, algorithms, systems and software. Pathway: foundation or diploma in computing, then a bachelor\'s degree, then optional master\'s or PhD. Graduates may pursue roles such as software developer, systems analyst or researcher, but employment is never guaranteed.',
    href: '/study/malaysia/cse-and-it-courses-in-malaysia',
    hrefLabel: 'CSE and IT courses in Malaysia'
  },
  {
    name: 'Information Technology',
    text: 'More applied than pure computer science, with networks, databases, cloud and IT management. Diploma-to-degree routes are common. Possible directions include IT support, network administration and systems roles.',
    href: '/study/malaysia/cse-and-it-courses-in-malaysia',
    hrefLabel: 'IT study options'
  },
  {
    name: 'Software Engineering',
    text: 'Focuses on design, testing and delivery of software projects. Many programmes include industry projects or internships. Check accreditation and whether the course has a strong practical component.',
    href: '',
    hrefLabel: ''
  },
  {
    name: 'Artificial Intelligence',
    text: 'Usually a specialisation inside computer science or a dedicated degree. Entry often requires strong mathematics. Confirm the course content, as the label "AI" is used in different ways.',
    href: '',
    hrefLabel: ''
  },
  {
    name: 'Data Science',
    text: 'Combines statistics, programming and data analysis. Available at bachelor\'s and master\'s levels. Check the mathematics prerequisites and tools taught.',
    href: '',
    hrefLabel: ''
  },
  {
    name: 'Business Administration',
    text: 'General management, marketing, human resources and entrepreneurship. Available from diploma to master\'s level and widely offered by private universities.',
    href: '',
    hrefLabel: ''
  },
  {
    name: 'MBA',
    text: 'Postgraduate management degree. Many schools prefer work experience, and fees vary significantly between institutions. Compare class profile, accreditation and total cost.',
    href: '/study/malaysia/mba-in-malaysia-for-bangladeshi-students',
    hrefLabel: 'MBA in Malaysia'
  },
  {
    name: 'Accounting and Finance',
    text: 'Covers financial reporting, auditing, taxation and corporate finance. Some programmes offer exemptions towards professional qualifications; verify the exemptions directly with the professional body.',
    href: '',
    hrefLabel: ''
  },
  {
    name: 'Engineering (general)',
    text: 'Usually four-year bachelor\'s programmes after foundation or HSC with mathematics and physics. Check accreditation by the relevant Malaysian engineering accreditation body and recognition by Bangladeshi authorities.',
    href: '',
    hrefLabel: ''
  },
  {
    name: 'Civil Engineering',
    text: 'Structures, construction, transportation and water engineering. Fieldwork and lab components are common. Confirm accreditation status before enrolling.',
    href: '',
    hrefLabel: ''
  },
  {
    name: 'Mechanical Engineering',
    text: 'Design, thermodynamics, manufacturing and materials. Industry training is part of many programmes. Equipment and lab facilities differ by campus.',
    href: '',
    hrefLabel: ''
  },
  {
    name: 'Electrical Engineering',
    text: 'Power systems, electronics, control and communications. Choose a specialisation carefully and check lab facilities and accreditation.',
    href: '',
    hrefLabel: ''
  },
  {
    name: 'Hospitality and Tourism Management',
    text: 'Hotel operations, culinary arts, events and tourism management. Practical training and internships are central. Career prospects depend on language skills and experience.',
    href: '',
    hrefLabel: ''
  },
  {
    name: 'Medicine and Health Sciences',
    text: 'Medicine is among the most expensive and tightly regulated study areas, with specific subject, grade and recognition requirements. Health sciences include nursing, biomedical science and public health. Verify recognition for practising in Bangladesh with the relevant authority before applying.',
    href: '/study/malaysia/mbbs-in-malaysia-for-bangladeshi-students',
    hrefLabel: 'MBBS in Malaysia'
  },
  {
    name: 'Pharmacy',
    text: 'A professional degree with strict accreditation and registration requirements. Confirm accreditation in Malaysia and whether the degree meets the requirements of the Bangladeshi regulator if you plan to practise there.',
    href: '',
    hrefLabel: ''
  },
  {
    name: 'Biotechnology',
    text: 'Combines biology, chemistry and technology. Lab-based, with possible research or industry pathways. Confirm laboratory facilities and research opportunities.',
    href: '',
    hrefLabel: ''
  },
  {
    name: 'Media and Communication',
    text: 'Journalism, digital media, advertising, public relations and film. Portfolio-based admission is common for creative tracks. English proficiency matters for writing-intensive programmes.',
    href: '',
    hrefLabel: ''
  }
];

const MISTAKES = [
  {
    t: 'Choosing an unrecognised programme',
    d: 'A university can be genuine while a particular programme is not accredited. Check programme-level accreditation with MQA and the relevant professional body.'
  },
  {
    t: 'Applying without checking entry requirements',
    d: 'Subject combinations, GPA, English and age limits differ. A misunderstood rule can waste fees and time.'
  },
  {
    t: 'Trusting unrealistic scholarship promises',
    d: 'Be wary of guaranteed full scholarships. Real awards are competitive, published by the university and rarely guaranteed before an assessment.'
  },
  {
    t: 'Ignoring total costs',
    d: 'Tuition is only part of the budget. Add visa-related charges, insurance, accommodation, food, transport, flights and settlement costs.'
  },
  {
    t: 'Submitting incorrect documents',
    d: 'Name spelling differences, unclear scans or missing pages cause delays. Match every document to your passport and ask for a document check.'
  },
  {
    t: 'Misunderstanding EMGS',
    d: 'EMGS processes applications but does not decide admission, and approval rests with the authorities. Learn the difference between the eVAL, the entry visa and the student pass.'
  },
  {
    t: 'Booking flights before appropriate travel authorization',
    d: 'Wait for the eVAL and the Single Entry Visa where it applies. Booking too early risks losing money if the application is delayed or refused.'
  },
  {
    t: 'Depending on part-time work to finance the entire degree',
    d: 'Work is limited and needs approval. Plan to fund tuition and living costs without relying on earnings.'
  },
  {
    t: 'Ignoring university refund policies',
    d: 'Read what is refundable and when. Some visa and processing fees are generally non-refundable once the application has been processed.'
  }
];

const OFFICIAL = [
  { label: 'EMGS student visa portal', href: 'https://visa.educationmalaysia.gov.my', note: 'Visa guidelines, fees, tracking and refund policy' },
  { label: 'Malaysian Immigration Department', href: 'https://www.imi.gov.my', note: 'Student Pass rules and part-time work conditions' },
  { label: 'Malaysian Qualifications Agency (MQA)', href: 'https://www.mqa.gov.my', note: 'Programme accreditation and the Malaysian Qualifications Register' },
  { label: 'Ministry of Higher Education Malaysia', href: 'https://www.mohe.gov.my', note: 'Higher education policy and institution information' },
  { label: 'University Grants Commission of Bangladesh', href: 'https://www.ugc.gov.bd', note: 'Bangladesh-side recognition and equivalence guidance' }
];

// Helper: renders a responsive, horizontally scrollable table from the TABLES data.
const tableEl = (id = '') => {
  const t = TABLES.find((x) => x.id === id);
  if (!t) return null;
  const minW = t.head.length > 3 ? 'min-w-[46rem]' : t.head.length === 3 ? 'min-w-[36rem]' : 'min-w-[28rem]';
  return (
    <div role="region" aria-label={t.caption} tabIndex={0} className="mt-5 max-w-full overflow-x-auto rounded-lg border border-slate-200 bg-white">
      <table className={`w-full ${minW} text-xs text-slate-700 sm:text-sm`}>
        <caption className="sr-only">{t.caption}</caption>
        <thead className="bg-emerald-900 text-white">
          <tr>
            {t.head.map((h) => (
              <th key={h} scope="col" className="px-3 py-2 text-left font-bold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {t.rows.map((r) => (
            <tr key={r[0]} className="odd:bg-white even:bg-slate-50">
              {r.map((c, i) => (
                <td key={i} className={i === 0 ? 'px-3 py-2 align-top font-semibold' : 'px-3 py-2 align-top'}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Helper: renders a bulleted or numbered list from the LISTS data.
const listEl = (id = '', ordered = false) => {
  const l = LISTS.find((x) => x.id === id);
  if (!l) return null;
  if (ordered) {
    return (
      <ol className={olCls}>
        {l.items.map((it) => (<li key={it}>{it}</li>))}
      </ol>
    );
  }
  return (
    <ul className={ulCls}>
      {l.items.map((it) => (<li key={it}>{it}</li>))}
    </ul>
  );
};

export default function Page() {
  const whatsapp = `https://wa.me/${AGENCY.phone.replace(/\D/g, '')}`;
  return (
    <div className="overflow-x-clip bg-slate-50 text-slate-900">
      <style dangerouslySetInnerHTML={{ __html: '@media (prefers-reduced-motion: no-preference){html{scroll-behavior:smooth}}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-white">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-3 text-xs text-slate-600 sm:px-6 sm:text-sm lg:px-8">
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
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Malaysia 2026</span>
          <h1 className="mt-4 max-w-4xl text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">Study in Malaysia 2026: Complete Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-emerald-50 sm:text-lg sm:leading-8">Costs in BDT, admission rules, EMGS visa steps and 37 detailed guides built for students and parents in Bangladesh.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8 lg:px-8">
        <aside className="min-w-0 lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Malaysia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Malaysia guides</summary>
            <div className="mt-3 max-h-64 overflow-y-auto overscroll-contain lg:max-h-[70vh]">
              {NAV.map((g) => (
                <details key={g.label} className="mb-1" open={g.pages.some((p) => p.href === PAGE_HREF)}>
                  <summary className="cursor-pointer rounded-md px-2 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-50">{g.label} ({g.pages.length})</summary>
                  <ul className="mb-2 ml-2 border-l border-slate-200 pl-2">
                    {g.pages.map((p) => (
                      <li key={p.href}>
                        <Link
                          href={p.href}
                          aria-current={p.href === PAGE_HREF ? 'page' : undefined}
                          className={`block rounded-md px-2 py-2 text-sm lg:py-1.5 ${p.href === PAGE_HREF ? 'bg-yellow-400 font-bold text-emerald-950' : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'}`}
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

        <div className="min-w-0">
          <article className="min-w-0 break-words">
<nav aria-labelledby="toc-heading" className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
<p id="toc-heading" className="text-base font-bold text-emerald-900 sm:text-lg">In this guide</p>
<ol className="mt-3 max-h-72 list-decimal overflow-y-auto overscroll-contain pl-6 text-sm marker:font-semibold marker:text-emerald-700 sm:max-h-none sm:columns-2 sm:gap-x-8 xl:columns-3">
{TOC.map((t) => (
<li key={t.id} className="break-inside-avoid">
<a href={`#${t.id}`} className="block rounded px-1 py-1.5 text-emerald-800 hover:bg-emerald-50 hover:underline">{t.label}</a>
</li>
))}
</ol>
</nav>

<section className={secCls} id="why-malaysia">
<h2 className="text-xl font-bold leading-snug text-emerald-900 sm:text-2xl">Why Bangladeshi students choose Malaysia</h2>
<p className="mt-4 leading-7 text-slate-700">Malaysia has become one of the most practical study destinations in Asia for families in Bangladesh. Teaching is in English, campuses are multicultural, halal food is easy to find, and total costs sit well below the UK, Australia or Canada. For a full roadmap, read our guide to <Link href="/study/malaysia/study-in-malaysia-from-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">studying in Malaysia from Bangladesh</Link>; budget-minded families usually begin with <Link href="/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Malaysia for Bangladeshi students</Link> and <Link href="/study/malaysia/cost-of-living-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the monthly cost of living in Malaysia</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Flexibility is the other big draw. Foundation, diploma, bachelor&apos;s and master&apos;s routes are all available, and many private institutions accept alternative English proof, which is why <Link href="/study/malaysia/study-in-malaysia-without-ielts" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">studying in Malaysia without IELTS</Link> is one of the most searched topics from Bangladesh. Some programmes also let you finish abroad through <Link href="/study/malaysia/credit-transfer-from-malaysia-to-uk-australia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">credit transfer from Malaysia to the UK and Australia</Link>.</p>
</section>

<section className={secCls} id="destination">
<h2 className={h2Cls}>Malaysia as an international education destination</h2>
<p className={pCls}>Malaysia hosts students from many countries across public universities, private universities and international branch campuses. Its higher education sector is regulated by the Ministry of Higher Education, and programme quality is overseen through the Malaysian Qualifications Agency. For a Bangladeshi student, that means a structured system with clear qualification levels, but also a need to check the status of each programme rather than assuming every course is equal.</p>
<h3 className={h3Cls}>English-medium learning</h3>
<p className={pCls}>Most private universities and branch campuses teach international programmes in English, and English is widely understood in cities such as Kuala Lumpur, Selangor, Penang and Johor Bahru. Some public university undergraduate programmes use Bahasa Malaysia, so always confirm the language of instruction for your course. Strong English still matters for lectures, assignments and presentations, even where an IELTS score is not required.</p>
<h3 className={h3Cls}>International student environment and cultural diversity</h3>
<p className={pCls}>Classrooms usually include students from Asia, Africa, the Middle East and beyond, and Malaysian society itself is made up of Malay, Chinese, Indian and other communities. Students are exposed to different languages, festivals and food, which can help build confidence and a global network. It can also take time to adjust to different communication styles and group work expectations.</p>
<h3 className={h3Cls}>Living environment for Bangladeshi students</h3>
<p className={pCls}>Malaysia is a Muslim-majority country, so halal food, mosques and prayer rooms are easy to find. Bangladeshi and South Asian restaurants and grocery shops exist in major cities, and many universities have student societies that help newcomers settle in. Weather is hot and humid year-round, living costs vary by city, and local laws and customs must be respected. Our guide to <Link href="/study/malaysia/student-accommodation-in-malaysia" className={linkClass}>student accommodation in Malaysia</Link> explains housing in more detail.</p>
</section>

<section className={secCls} id="education-system">
<h2 className={h2Cls}>The Malaysian education system</h2>
<p className={pCls}>Malaysian higher education follows the Malaysian Qualifications Framework (MQF), which places certificates, diplomas, bachelor&apos;s degrees, master&apos;s degrees and doctorates on defined levels. Understanding the framework helps you compare qualifications and plan progression, for example from a diploma into a degree with credit exemption. Durations below are typical only. The actual length depends on the institution, the programme and your entry qualification.</p>
{tableEl('levels')}
<h3 className={h3Cls}>Types of institutions</h3>
<ul className={ulCls}>
<li><strong>Public universities</strong> are government-funded, research-oriented and often have limited places for international undergraduates. Some programmes are taught in Malay, and many international students enter at postgraduate level.</li>
<li><strong>Private universities and colleges</strong> offer more intakes, a wide range of English-medium programmes and flexible pathways. Fees are usually higher than for local students at public institutions.</li>
<li><strong>International branch campuses</strong>, such as Monash University Malaysia and the University of Nottingham Malaysia, deliver degrees linked to their home universities. They usually cost more and often have stricter entry and English requirements.</li>
<li><strong>Twinning and credit-transfer programmes</strong> let you study part of a degree in Malaysia and complete it abroad, for example in the UK or Australia. Read <Link href="/study/malaysia/credit-transfer-from-malaysia-to-uk-australia" className={linkClass}>how credit transfer from Malaysia works</Link> before choosing one.</li>
<li><strong>Professional and technical education</strong> includes vocational, skills-based and professional certification routes, some of which can lead into degrees.</li>
</ul>
<p className={pCls}>If you are deciding between types of institution, our comparison of <Link href="/study/malaysia/public-vs-private-universities-in-malaysia" className={linkClass}>public and private universities in Malaysia</Link> covers fees, intakes and campus life in more detail.</p>
</section>

<section className={secCls} id="pros-cons">
<h2 className={h2Cls}>Advantages and disadvantages of studying in Malaysia</h2>
<p className={pCls}>Malaysia suits many Bangladeshi students, but it is not the right choice for everyone. A balanced view helps you decide before you invest time and money.</p>
<div className="mt-5 grid gap-4 md:grid-cols-2">
<div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
<h3 className="text-lg font-bold text-emerald-900">Advantages</h3>
{listEl('pros')}
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
<h3 className="text-lg font-bold text-emerald-900">Disadvantages and risks</h3>
{listEl('cons')}
</div>
</div>
<h3 className={h3Cls}>Who should consider Malaysia</h3>
<p className={pCls}>Malaysia is a good fit if you want an English-medium degree at a lower overall cost, prefer a Muslim-friendly environment close to home, want a stepping-stone pathway to the UK or Australia, or are comparing several destinations and need a realistic budget option. It also suits students who can document their funds and are open to a diploma or foundation route.</p>
<h3 className={h3Cls}>Who may need to consider alternatives</h3>
<p className={pCls}>If your plan depends on earning enough from part-time work to cover tuition, on staying and working in Malaysia after graduation, or on practising a regulated profession in Bangladesh without confirming recognition first, you may need to look at other options or adjust your plan. Students whose profile does not meet entry requirements should also discuss alternative destinations with a counselor.</p>
</section>

<section className={secCls} id="where-to-begin">
<h2 className="text-xl font-bold leading-snug text-emerald-900 sm:text-2xl">Where to begin: choose your level and route</h2>
<p className="mt-4 leading-7 text-slate-700">Your starting point depends on what you have completed. Students with SSC results can look at <Link href="/study/malaysia/study-in-malaysia-after-ssc" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Malaysia after SSC</Link> through foundation or diploma routes. Those with a diploma from a Bangladeshi polytechnic should read <Link href="/study/malaysia/study-in-malaysia-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Malaysia after diploma</Link> to understand credit exemption. HSC graduates move straight to degree entry, following the <Link href="/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Next, decide which kind of institution suits you. Our comparison of <Link href="/study/malaysia/public-vs-private-universities-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private universities in Malaysia</Link> explains the trade-offs, while <Link href="/study/malaysia/cheapest-universities-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the cheapest universities in Malaysia</Link> and <Link href="/study/malaysia/top-universities-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Malaysia</Link> help you shortlist by budget or reputation.</p>
</section>

<section className={secCls} id="pathways">
<h2 className={h2Cls}>Study options after SSC, HSC and diploma</h2>
<p className={pCls}>Bangladeshi qualifications do not map one-to-one onto the Malaysian system, so each university evaluates your certificates individually. The table below shows common routes. It is a guide, not a promise of admission, and you should always check the university&apos;s actual requirements for your programme.</p>
{tableEl('pathways')}
<p className={pCls}>For detailed entry rules, read the <Link href="/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students" className={linkClass}>admission requirements for Bangladeshi students</Link>. If you have a break in your studies, the guide to <Link href="/study/malaysia/study-gap-accepted-universities-in-malaysia" className={linkClass}>study gap accepted universities in Malaysia</Link> explains how universities usually assess gaps and which documents help.</p>
<p className={noteCls}>No university or consultant can promise admission before reviewing your documents. An offer letter from the university is the only reliable confirmation of eligibility.</p>
</section>

<section className={secCls} id="universities">
<h2 className={h2Cls}>Top universities in Malaysia: an informative comparison</h2>
<p className={pCls}>The institutions below are well-known names that Bangladeshi students frequently research. They are listed for information, not ranked, and this page does not claim any ranking, accreditation or admission requirement on behalf of any university. Programmes, fees, campuses and intakes change, so verify details on each university&apos;s official website, check programme accreditation in the Malaysian Qualifications Register, and confirm recognition before you apply. For a longer overview, see our guide to <Link href="/study/malaysia/top-universities-in-malaysia" className={linkClass}>top universities in Malaysia</Link>.</p>
<div className="mt-5 grid gap-4 md:grid-cols-2">
{UNIS.map((u) => (
<div key={u.name} className={cardCls}>
<h3 className="text-lg font-bold text-emerald-900">{u.name}</h3>
<p className="mt-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">{u.type} &middot; {u.loc}</p>
<p className="mt-3 text-sm leading-6 text-slate-700"><strong>Relevant strengths:</strong> {u.strengths}</p>
<p className="mt-2 text-sm leading-6 text-slate-700"><strong>Check before applying:</strong> {u.check}</p>
</div>
))}
</div>
<p className={noteCls}>Always verify current programme accreditation, recognition and entry requirements on the official university page and in the Malaysian Qualifications Register before paying any fee.</p>
</section>

<section className={secCls} id="courses">
<h2 className={h2Cls}>Popular courses and subjects for Bangladeshi students</h2>
<p className={pCls}>The study areas below are among the most searched by Bangladeshi students. Career outcomes depend on your skills, grades, language ability, internships and the job market, and no course guarantees employment.</p>
<div className="mt-5 grid gap-4 md:grid-cols-2">
{COURSES.map((c) => (
<div key={c.name} className={cardCls}>
<h3 className="text-lg font-bold text-emerald-900">{c.name}</h3>
<p className="mt-2 text-sm leading-6 text-slate-700">{c.text}</p>
{c.href ? (<p className="mt-2 text-sm"><Link href={c.href} className={linkClass}>{c.hrefLabel}</Link></p>) : null}
</div>
))}
</div>
</section>

<section className={secCls} id="costs">
<h2 className="text-xl font-bold leading-snug text-emerald-900 sm:text-2xl">Indicative cost snapshot (MYR and BDT)</h2>
<div role="region" aria-label="Indicative cost snapshot in MYR and BDT" tabIndex={0} className="mt-5 max-w-full overflow-x-auto rounded-lg border border-slate-200 bg-white"><table className="w-full min-w-[28rem] text-xs text-slate-700 sm:text-sm"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. MYR</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. BDT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Foundation (1 year)</td><td className="px-3 py-2 align-top">RM 10,000 – 25,000</td><td className="px-3 py-2 align-top">Tk 2.8 – 7 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Diploma (total)</td><td className="px-3 py-2 align-top">RM 15,000 – 40,000</td><td className="px-3 py-2 align-top">Tk 4.2 – 11.2 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor&apos;s (total, private)</td><td className="px-3 py-2 align-top">RM 25,000 – 80,000</td><td className="px-3 py-2 align-top">Tk 7 – 22.4 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Master&apos;s (total)</td><td className="px-3 py-2 align-top">RM 20,000 – 60,000</td><td className="px-3 py-2 align-top">Tk 5.6 – 16.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs (per month)</td><td className="px-3 py-2 align-top">RM 1,200 – 2,500</td><td className="px-3 py-2 align-top">Tk 33,600 – 70,000</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-3 text-sm leading-6 text-slate-700 sm:p-4">Figures use an assumed rate of 1 MYR = about 28 BDT and are indicative estimates for 2026. Fees, policies and exchange rates change, so always confirm with the university, EMGS or an Eammu Holidays counselor before paying.</p>
<p className="mt-4 leading-7 text-slate-700">Scholarships and fee waivers can lower these numbers; see <Link href="/study/malaysia/scholarships-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Malaysia for Bangladeshi students</Link> for realistic options.</p>
</section>

<section className={secCls} id="tuition-costs">
<h2 className={h2Cls}>Malaysia tuition fees and total education costs explained</h2>
<p className={pCls}>When families ask how much it costs to study in Malaysia, the answer needs two separate parts: what you pay the university, and what you spend to live and travel. Keep them apart in your planning. Tuition is a fee for teaching and facilities, while living costs include accommodation, food, transport and personal spending. Also check whether a quoted fee is <strong>annual tuition</strong> or <strong>total programme tuition</strong>. A figure of RM 20,000 per year over a three-year degree is very different from a total of RM 20,000.</p>
<p className={pCls}>The ranges below are indicative estimates that Eammu Holidays uses for planning, not guaranteed university prices. Exchange-rate assumption: 1 MYR is taken as about 28 BDT, which is the planning rate used throughout this page as of the 14 November 2026 update. It is not a live market rate, so convert again using the rate on the day you pay. For deeper detail, read <Link href="/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students" className={linkClass}>our tuition fee guide</Link> and <Link href="/study/malaysia/student-visa-processing-time-and-cost" className={linkClass}>the Malaysia student visa processing time and cost guide</Link>.</p>
{tableEl('cost-detail')}
<p className={noteCls}>Never treat any estimate on this page as a university quote. Ask each university for an itemised written fee schedule that lists tuition, admin charges, taxes, deposits and refund terms.</p>
</section>

<section className={secCls} id="first-year-budget">
<h2 className={h2Cls}>Sample first-year budget for a Bangladeshi student</h2>
<p className={pCls}>The table below is an illustrative example for a bachelor&apos;s student on a moderate budget. The tuition and visa-related numbers are placeholders chosen to demonstrate how the pieces add up, and the exact amounts for your case will come from your offer letter and EMGS quote.</p>
{tableEl('first-year')}
<p className={pCls}>Because the first year includes one-time costs such as flights, deposits and settlement, it is usually higher than the following years. Ask your counselor to rebuild this table with the actual figures from your shortlisted universities.</p>
</section>

<section className={secCls} id="cost-of-living">
<h2 className={h2Cls}>Cost of living in Malaysia by city</h2>
<p className={pCls}>Living costs depend heavily on where your campus is and how you live. Accommodation is usually the largest item, followed by food and transport. Utilities, internet and mobile data are smaller but add up. For city-by-city detail, see our guide to <Link href="/study/malaysia/cost-of-living-in-malaysia-for-bangladeshi-students" className={linkClass}>the cost of living in Malaysia for Bangladeshi students</Link>.</p>
{tableEl('city-costs')}
<h3 className={h3Cls}>Monthly budget example: budget-conscious student</h3>
{tableEl('budget-low')}
<h3 className={h3Cls}>Monthly budget example: moderate-spending student</h3>
{tableEl('budget-mid')}
<p className={pCls}>These figures are planning estimates, and real costs change with rent trends, inflation and your lifestyle. Food costs fall if you cook, transport costs fall if you live near campus, and a private single room or frequent e-hailing can push costs above the moderate range. Utilities may be included in some student residences and charged separately in apartments, so ask before signing.</p>
</section>

<section className={secCls} id="scholarships">
<h2 className={h2Cls}>Scholarships and financial support in Malaysia</h2>
<p className={pCls}>Scholarships can reduce the cost of study, but they are competitive and never guaranteed. The most reliable ones are published on university scholarship pages and open to international applicants. Our dedicated guide to <Link href="/study/malaysia/scholarships-in-malaysia-for-bangladeshi-students" className={linkClass}>scholarships in Malaysia for Bangladeshi students</Link> explains the options in more detail.</p>
{listEl('scholarship-types')}
<h3 className={h3Cls}>Eligibility and application timing</h3>
<p className={pCls}>Eligibility usually depends on your academic results, the programme, the level of study and sometimes your nationality. Many university awards are assessed together with the admission application, so applying early improves your chances, and some scholarships have separate deadlines. Government-linked or research funding schemes publish their own calls and conditions, so check the official page for the current round instead of relying on older posts. Programmes such as the Malaysian International Scholarship and technical cooperation schemes have historically focused on postgraduate or specific groups, but eligibility changes, so confirm directly.</p>
<h3 className={h3Cls}>Typical documents</h3>
{listEl('scholar-docs')}
<p className={noteCls}>Be cautious about any agent or website that guarantees a full scholarship, asks for payment to secure one, or cannot show the scholarship page on the university&apos;s own website.</p>
</section>

<section className={secCls} id="intakes">
<h2 className={h2Cls}>Intakes and application timeline</h2>
<p className={pCls}>Intake availability differs by university and programme, and some programmes start more than once a year or in less common months. The table shows the usual pattern, and you can check specific dates in our guide to <Link href="/study/malaysia/malaysia-intake-dates" className={linkClass}>Malaysia intake dates</Link>.</p>
{tableEl('intakes')}
<h3 className={h3Cls}>Sample application timeline for a Bangladeshi student</h3>
<p className={pCls}>Use the timeline below as a planning aid and adjust it to your university&apos;s deadlines. Starting four to six months before the intake gives you time to fix document problems without rushing.</p>
{tableEl('timeline')}
</section>

<section className={secCls} id="journey">
<h2 className="text-xl font-bold leading-snug text-emerald-900 sm:text-2xl">Your step-by-step journey</h2>
<ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700 sm:pl-6"><li>Shortlist courses and universities, then check <Link href="/study/malaysia/malaysia-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Malaysia intake dates</Link> for your target month.</li><li>Prepare academic documents and check <Link href="/study/malaysia/study-gap-accepted-universities-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">gap-accepted universities in Malaysia</Link> if you have a study gap.</li><li>Receive an offer letter, then start the <Link href="/study/malaysia/emgs-visa-process-and-tracking-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">EMGS visa process and tracking</Link>.</li><li>Arrange funds as explained in <Link href="/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency requirements for the Malaysia student visa</Link>.</li><li>Review the <Link href="/study/malaysia/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements for Bangladesh</Link> and plan <Link href="/study/malaysia/student-accommodation-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student accommodation in Malaysia</Link>.</li></ol>
</section>

<section className={secCls} id="emgs-visa">
<h2 className={h2Cls}>Malaysia student visa and EMGS process</h2>
<p className={pCls}>The student visa journey is one of the most important and most misunderstood parts of studying in Malaysia. In simple terms, you are admitted by a university, and the student pass application is then processed through Education Malaysia Global Services (EMGS), with the final decision made by the Malaysian authorities. The steps below describe the usual sequence, but individual cases and rules can differ, so check the current guidance on the EMGS portal.</p>
{listEl('emgs-steps', true)}
<h3 className={h3Cls}>EMGS, eVAL, SEV and Student Pass: what is the difference?</h3>
{tableEl('terms')}
<h3 className={h3Cls}>Checking your application status</h3>
<p className={pCls}>You can track your application on the EMGS portal using details such as your passport number and nationality. The portal shows progress stages, commonly read as percentages, and our <Link href="/study/malaysia/emgs-visa-process-and-tracking-guide" className={linkClass}>EMGS visa process and tracking guide</Link> explains what each stage generally means. A stage on the tracker is not a guarantee of approval.</p>
<h3 className={h3Cls}>Processing time, medical screening and travel</h3>
<p className={pCls}>Processing time is not fixed. It depends on how complete your file is, the volume of applications in your intake season and the authorities&apos; review. University guidance for Bangladeshi applicants often recommends submitting early, and the Single Entry Visa step adds extra time where it applies. We do not quote a guaranteed processing time. For typical expectations and fees, see <Link href="/study/malaysia/student-visa-processing-time-and-cost" className={linkClass}>Malaysia student visa processing time and cost</Link>.</p>
<p className={pCls}>New students are required to complete a medical screening after arriving in Malaysia, commonly within 7 days, at an approved clinic. A health declaration or other medical document may also be requested earlier in the process. A failed screening can lead to serious consequences for your student pass, so complete it on time. Do not travel before you hold the appropriate authorization, and read the refund terms because processing fees are generally non-refundable once the application has been handled.</p>
<p className={noteCls}>Approval is subject to the relevant authorities. No consultant, agent or university can guarantee a visa, and anyone who does should be treated with caution.</p>
</section>

<section className={secCls} id="visa-requirements">
<h2 className={h2Cls}>Malaysia student visa requirements for Bangladeshi students</h2>
<p className={pCls}>Two different sets of requirements apply. The first set is for <strong>university admission</strong>, decided by the university. The second set is for the <strong>immigration and EMGS student pass process</strong>, decided by the authorities. Mixing them up is a common reason for delays. Not every student has to submit exactly the same documents, because requirements depend on the university, programme, level of study and current rules. For the full checklist, see our guide to <Link href="/study/malaysia/student-visa-requirements-bangladesh" className={linkClass}>student visa requirements for Bangladesh</Link>.</p>
<h3 className={h3Cls}>University admission documents</h3>
{listEl('uni-docs')}
<h3 className={h3Cls}>Immigration and EMGS documents</h3>
{listEl('imm-docs')}
<p className={pCls}>If financial proof is requested, learn how to prepare it properly in our guide to <Link href="/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa" className={linkClass}>bank solvency requirements for the Malaysia student visa</Link>. There is no single amount that applies to every student, so confirm the requirement with your university before you arrange funds.</p>
</section>

<section className={secCls} id="without-ielts">
<h2 className={h2Cls}>Study in Malaysia without IELTS</h2>
<p className={pCls}>Many Bangladeshi students want to avoid IELTS, and some Malaysian universities do offer alternatives. However, not all universities or programmes accept students without IELTS. Medicine, health sciences, law and some postgraduate programmes usually have stricter English requirements, and branch campuses often ask for formal test scores. The common routes are listed below, and our dedicated page explains <Link href="/study/malaysia/study-in-malaysia-without-ielts" className={linkClass}>how to study in Malaysia without IELTS</Link> in more detail.</p>
{listEl('english-routes')}
<p className={noteCls}>English requirements for university admission are separate from immigration requirements. Always get the English rule for your exact programme in writing from the admissions office.</p>
</section>

<section className={secCls} id="work-rules">
<h2 className={h2Cls}>Part-time work and employment rules for international students</h2>
<p className={pCls}>Malaysia allows limited part-time work for eligible international students, but only under conditions and with approval. Official guidance describes a maximum of 20 hours per week in approved sectors, and approval is requested through the institution. Guidance differs on whether work is permitted during term time or only during semester breaks and holidays longer than seven days, so you should confirm the position that applies to you in writing before you begin. Read more in our guide to <Link href="/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia" className={linkClass}>part-time job and post-study work rules in Malaysia</Link>.</p>
{tableEl('work')}
<p className={noteCls}>Do not present part-time work as a way to pay for your tuition or living costs. Earnings are small compared with the cost of study, and work may be limited or unavailable. Prepare your full budget as if you would earn nothing.</p>
</section>

<section className={secCls} id="student-life">
<h2 className={h2Cls}>Accommodation and student life in Malaysia</h2>
<p className={pCls}>Plan your accommodation before you travel so that you have a safe place to go on arrival. Many universities can arrange hostels, and private student residences and shared apartments are widely available near campuses. Our guide to <Link href="/study/malaysia/student-accommodation-in-malaysia" className={linkClass}>student accommodation in Malaysia</Link> gives typical rents and tips.</p>
{tableEl('housing')}
<h3 className={h3Cls}>Rental agreements and deposits</h3>
<p className={pCls}>Private rentals usually require a written tenancy agreement and a deposit, often equal to a few months of rent plus a utility deposit, although terms vary. Read the contract, confirm what is included, ask for receipts and avoid transferring money to people you have not verified. Take dated photos of the room when you move in so that you can dispute unfair deductions later.</p>
<h3 className={h3Cls}>Transport, food and culture</h3>
<p className={pCls}>Kuala Lumpur and Selangor have LRT, MRT, monorail, commuter trains and buses, and e-hailing apps are widely used. Halal food is easy to find, with Malay, Chinese, Indian and international options, and halal certification is shown on packaged food and in many restaurants. Respect local customs, dress appropriately in religious places and be aware that Malaysia enforces strict laws, especially on drugs.</p>
<h3 className={h3Cls}>Weather, safety, healthcare and community</h3>
<p className={pCls}>Expect hot, humid weather throughout the year with frequent rain, so pack light clothing and an umbrella. Malaysia is generally welcoming to students, but petty theft and scams exist, so keep valuables and documents secure, be careful at night and learn the local emergency numbers. Health insurance is usually part of the student visa package, but check what it covers and what you must pay yourself. Many universities have Bangladeshi or South Asian student societies, which can help with housing leads, festivals and settling in.</p>
</section>

<section className={secCls} id="recognition">
<h2 className={h2Cls}>Degree recognition and future opportunities</h2>
<p className={pCls}>Recognition is one of the most important checks you can make. It depends on the specific university, the specific programme and the authority that will receive your degree. Check that your programme appears in the Malaysian Qualifications Register with valid accreditation, and confirm with Bangladeshi bodies, such as UGC Bangladesh for equivalence or the relevant professional council for regulated careers, before you enrol.</p>
{tableEl('recognition')}
<p className={pCls}>If you plan to continue in the UK, Australia, Canada or another country, ask how the destination university treats Malaysian qualifications and credit. Our guide to <Link href="/study/malaysia/credit-transfer-from-malaysia-to-uk-australia" className={linkClass}>credit transfer from Malaysia to the UK and Australia</Link> explains common structures. For medicine, see <Link href="/study/malaysia/mbbs-in-malaysia-for-bangladeshi-students" className={linkClass}>MBBS in Malaysia for Bangladeshi students</Link>, where recognition checks are especially important.</p>
<p className={noteCls}>No page, counselor or university can promise that a degree will be recognised for every purpose. Confirm in writing with the authority that will assess your qualification.</p>
</section>

<section className={secCls} id="roadmap">
<h2 className={h2Cls}>Complete application roadmap for Bangladeshi students</h2>
<p className={pCls}>This is the practical journey from your first counseling session to your first day in Malaysia. Each step can be done with support from Eammu Holidays or on your own, and timing depends on your intake.</p>
{listEl('roadmap', true)}
</section>

<section className={secCls} id="mistakes">
<h2 className={h2Cls}>Common mistakes Bangladeshi students should avoid</h2>
<p className={pCls}>Most problems students face can be avoided with early checks and honest information. These are the mistakes we see most often.</p>
<div className="mt-5 grid gap-4 md:grid-cols-2">
{MISTAKES.map((m) => (
<div key={m.t} className={cardCls}>
<h3 className="text-base font-bold text-emerald-900">{m.t}</h3>
<p className="mt-2 text-sm leading-6 text-slate-700">{m.d}</p>
</div>
))}
</div>
</section>

<section className={secCls} id="support">
<h2 className="text-xl font-bold leading-snug text-emerald-900 sm:text-2xl">How Eammu Holidays supports you</h2>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays offers walk-in counseling in Dhaka and complete online and courier processing for students across Bangladesh. Find your nearest support route on our <Link href="/study/malaysia/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bangladesh offices and locations page</Link>, or go directly to <Link href="/study/malaysia/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Malaysia consultancy in Dhaka</Link>.</p>
<p className={pCls}>Eammu Holidays is an education and international mobility guidance provider for Bangladeshi students. Our role is to help you understand your options and prepare complete applications. Final decisions on admission, visas and scholarships are made by the universities, EMGS and the Malaysian authorities, and we do not guarantee any outcome.</p>
{listEl('services')}
</section>

<section className={secCls} id="bangladesh-support">
<h2 className={h2Cls}>Support for students in every division of Bangladesh</h2>
<p className={pCls}>You do not need to live in Dhaka to start. Students from every division can receive online counseling and application guidance where those services are available, and documents can be handled by courier. The pages below describe how support works for each area. They describe online and document support, and they do not indicate a physical office in every district.</p>
<p className={pCls}>In Dhaka, students can read about neighbourhood support for <Link href="/study/malaysia/consultancy-in-uttara-dhaka" className={linkClass}>Uttara</Link>, <Link href="/study/malaysia/consultancy-in-dhanmondi-dhaka" className={linkClass}>Dhanmondi</Link> and <Link href="/study/malaysia/consultancy-in-mirpur-dhaka" className={linkClass}>Mirpur</Link>. Across the country, there are dedicated guides for <Link href="/study/malaysia/consultancy-in-chattogram" className={linkClass}>Chattogram</Link>, <Link href="/study/malaysia/consultancy-in-sylhet" className={linkClass}>Sylhet</Link>, <Link href="/study/malaysia/consultancy-in-rajshahi" className={linkClass}>Rajshahi</Link>, <Link href="/study/malaysia/consultancy-in-khulna" className={linkClass}>Khulna</Link>, <Link href="/study/malaysia/consultancy-in-barishal" className={linkClass}>Barishal</Link>, <Link href="/study/malaysia/consultancy-in-rangpur" className={linkClass}>Rangpur</Link>, <Link href="/study/malaysia/consultancy-in-mymensingh" className={linkClass}>Mymensingh</Link>, <Link href="/study/malaysia/consultancy-in-cumilla" className={linkClass}>Cumilla</Link> and <Link href="/study/malaysia/consultancy-in-bogura" className={linkClass}>Bogura</Link>. Students from other districts can follow the same online route.</p>
<p className={pCls}>For a full overview of how counseling and courier support work, visit our <Link href="/study/malaysia/bangladesh-offices" className={linkClass}>Bangladesh offices and support page</Link>.</p>
</section>

<section className={secCls} id="official-sources">
<h2 className={h2Cls}>Official sources to verify before you decide</h2>
<p className={pCls}>Rules, fees and policies change. Use this page as a starting point and confirm the latest information with the official sources below and the university&apos;s own pages.</p>
<ul className={ulCls}>
{OFFICIAL.map((o) => (
<li key={o.href}><a href={o.href} target="_blank" rel="noopener noreferrer" className={linkClass}>{o.label}</a>: {o.note}.</li>
))}
</ul>
<p className={noteCls}>Information on this page is provided for guidance and was last updated in November 2026. If something cannot be verified from an official source, treat it as an estimate and confirm before acting on it.</p>
</section>
          </article>

          <section className="mt-14" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="scroll-mt-20 text-xl font-bold leading-snug text-emerald-900 sm:text-2xl">Frequently Asked Questions</h2>
            <div className="mt-5 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
              {FAQS.map((f, i) => (
                <details key={f.q} className="group px-4 py-4 sm:px-5" open={i === 0}>
                  <summary className="cursor-pointer list-none font-semibold text-emerald-900"><h3 className="inline text-base font-semibold leading-snug">{f.q}</h3></summary>
                  <p className="mt-3 leading-7 text-slate-700">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section aria-labelledby="directory-heading" className="mt-14">
            <h2 id="directory-heading" className="text-xl font-bold leading-snug text-emerald-900 sm:text-2xl">Complete Directory: Every Malaysia Study Guide</h2>
            <p className="mt-3 leading-7 text-slate-700">Browse every guide in the series, grouped by topic. Each page is one click away.</p>
            {NAV.map((g) => {
              const items = g.pages.filter((p) => p.href !== PAGE_HREF);
              if (!items.length) return null;
              return (
                <div key={g.label} className="mt-8">
                  <h3 className="text-lg font-bold text-emerald-800">{g.label}</h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 2xl:grid-cols-3">
                    {items.map((p) => (
                      <Link key={p.href} href={p.href} className="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-yellow-400 hover:shadow">
                        <span className="block font-semibold text-emerald-900">{p.title}</span>
                        <span className="mt-1 block text-sm leading-5 text-slate-600">{p.d}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>

          <section aria-labelledby="related-heading" className="mt-14">
            <h2 id="related-heading" className="text-xl font-bold leading-snug text-emerald-900 sm:text-2xl">Related Malaysia Study Guides</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {RELATED.map((r) => (
                <Link key={r.href} href={r.href} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-yellow-400 hover:shadow-md sm:p-5">
                  <h3 className="text-lg font-bold text-emerald-900">{r.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{r.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-2xl bg-emerald-900 p-5 text-white shadow-lg sm:p-8" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-xl font-bold leading-snug sm:text-2xl">Talk to {AGENCY.name} About Studying in Malaysia</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university shortlist, EMGS guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-5 block w-full rounded-lg bg-yellow-400 px-6 py-3 text-center font-bold text-emerald-950 transition hover:bg-yellow-300 sm:inline-block sm:w-auto">Book Free Counseling with Eammu Holidays</a>
            <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
              <li className="[overflow-wrap:anywhere]"><a href={`tel:${AGENCY.phone}`} className="hover:underline">Call / WhatsApp: {AGENCY.phone}</a></li>
              <li className="[overflow-wrap:anywhere]"><a href={`mailto:${AGENCY.email}`} className="hover:underline">{AGENCY.email}</a></li>
              <li>{AGENCY.address}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}