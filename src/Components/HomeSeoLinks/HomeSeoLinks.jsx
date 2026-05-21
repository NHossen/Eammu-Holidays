// components/Home/HomeSeoLinks.jsx
// ─────────────────────────────────────────────────────────────────────────────
// PURPOSE:
//   Adds a keyword-rich internal link mesh to the homepage WITHOUT touching
//   any existing component. Keeps the visual page clean but gives Google a
//   dense, crawlable link cluster — same pattern used by Booking.com, Airbnb,
//   and Skyscanner.
//
// USAGE in app/page.jsx:
//   import HomeSeoLinks from "@/components/Home/HomeSeoLinks";
//   ...
//   <section id="seo-links" aria-label="Visa and Travel Resources">
//     <HomeSeoLinks />
//   </section>
//
// DESIGN RULE:
//   Visually subtle — gray background, small text, pill links. Users barely
//   notice it. Googlebot crawls every link and distributes PageRank across
//   the site.
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";

// ─── LINK DATA ───────────────────────────────────────────────────────────────

const LINK_GROUPS = [
  {
    heading: "Tourist Visa from Bangladesh",
    headingHref: "/visa",
    links: [
      { label: "USA B1/B2 Tourist Visa",           href: "/visa/united-states-visa" },
      { label: "UK Standard Visitor Visa",          href: "/visa/united-kingdom-visa" },
      { label: "Canada Tourist Visa",               href: "/visa/canada-visa" },
      { label: "Schengen Visa 2026",                href: "/schengen-visa" },
      { label: "Japan Tourist Visa",                href: "/visa/japan-visa" },
      { label: "Australia Visitor Visa",            href: "/visa/australia-visa" },
      { label: "Germany Visa Bangladesh",           href: "/our-services/visa/germany-visa-application" },
      { label: "France Visa Bangladesh",            href: "/our-services/visa/europe-visa-application" },
      { label: "Malaysia Tourist Visa",             href: "/visa/malaysia-visa" },
      { label: "Thailand Tourist Visa",             href: "/visa/thailand-visa" },
      { label: "Singapore Visa Bangladesh",         href: "/visa/singapore-visa" },
      { label: "Dubai Tourist Visa",                href: "/our-services/visa/dubai-visa-application" },
    ],
  },
  {
    heading: "Tourist Visa for Dubai Residents",
    headingHref: "/visa/dubai-residents",
    links: [
      { label: "USA Visa from Dubai",               href: "/visa/dubai-residents/united-states" },
      { label: "UK Visa from Dubai",                href: "/visa/dubai-residents/united-kingdom" },
      { label: "Canada Visa Dubai Residents",       href: "/visa/dubai-residents/canada" },
      { label: "Schengen Visa from Dubai",          href: "/schengen-visa" },
      { label: "Japan Visa from Dubai",             href: "/visa/dubai-residents/japan" },
      { label: "Australia Visa from Dubai",         href: "/visa/dubai-residents/australia" },
      { label: "Singapore Visa from Dubai",         href: "/visa/dubai-residents/singapore" },
      { label: "Malaysia Visa Dubai Residents",     href: "/visa/dubai-residents/malaysia" },
      { label: "Thailand Visa from Dubai",          href: "/visa/dubai-residents/thailand" },
      { label: "Turkey e-Visa from Dubai",          href: "/visa/dubai-residents/turkey" },
      { label: "South Korea Visa from Dubai",       href: "/visa/dubai-residents/south-korea" },
      { label: "Italy Schengen Visa Dubai",         href: "/visa/dubai-residents/italy" },
    ],
  },
  {
    heading: "Visa Tools & Resources",
    headingHref: "/travel-resources",
    links: [
      { label: "Free Visa Checklist Generator",     href: "/travel-resources/visa-checklist-generator" },
      { label: "VFS Processing Time Tracker",       href: "/travel-resources/visa-processing-time-tracker" },
      { label: "Travel Document Generator",         href: "/travel-resources/travel-document-generator" },
      { label: "Visa Rejection Rates Bangladesh",   href: "/visa-rejection" },
      { label: "E-Visa Destinations 2026",          href: "/visa/e-visa" },
      { label: "India Visa from Bangladesh",        href: "/visa/india" },
      { label: "Visa Guide Hub",                    href: "/visa/visa-guide" },
      { label: "Dubai Residents Visa Guide",        href: "/visa/dubai-residents" },
      { label: "USA Visa Interview Preparation",    href: "/target-usa-visa-interview-preparation" },
      { label: "IELTS & Immigration Center",        href: "/target-ielts-immigration-center" },
      { label: "PDF Editor Tool",                   href: "/pdf-editor" },
      { label: "News & Visa Updates",               href: "/news-feeds" },
    ],
  },
  {
    heading: "Student Visa & Study Abroad",
    headingHref: "/study-abroad",
    links: [
      { label: "Student Visa from Bangladesh",      href: "/our-services/visa-services/student-visa-from-bangladesh" },
      { label: "Study Abroad Guide 2026",           href: "/study-abroad" },
      { label: "Student Visa Hub",                  href: "/study-abroad/student-visa" },
      { label: "UK Student Visa",                   href: "/study-abroad/student-visa/united-kingdom" },
      { label: "USA Student Visa",                  href: "/study-abroad/student-visa/united-states" },
      { label: "Canada Student Visa",               href: "/study-abroad/student-visa/canada" },
      { label: "Germany Student Visa",              href: "/study-abroad/student-visa/germany" },
      { label: "Malaysia Student Visa",             href: "/study-abroad/student-visa/malaysia" },
      { label: "Scholarships from Bangladesh",      href: "/scholarships" },
      { label: "Work Visa from Bangladesh",         href: "/our-services/visa-services/work-visa-from-bangladesh" },
      { label: "Tourist Visa from Bangladesh",      href: "/our-services/visa-services/tourist-visa-from-bangladesh" },
      { label: "All Visa Services",                 href: "/our-services/visa-services" },
    ],
  },
  {
    heading: "Tours, Flights & Services",
    headingHref: "/our-services",
    links: [
      { label: "International Tour Packages",       href: "/our-services/tour-packages" },
      { label: "Things To Do Abroad",               href: "/our-services/things-to-do" },
      { label: "Flight Booking Bangladesh",         href: "/flight-booking" },
      { label: "Event Management",                  href: "/event-management" },
      { label: "Special Offers & Deals",            href: "/offers" },
      { label: "Online Travel Agency Bangladesh",   href: "/online-travel-agency-bangladesh" },
      { label: "Eammu Fashion Store",               href: "/eammu-fashion/eammu-store" },
      { label: "Web & Digital Marketing",           href: "/web-development-digital-marketing" },
      { label: "Eammu Social Responsibility",       href: "/eammu-social-responsibility" },
      { label: "Eammu Textile Bangladesh",          href: "/eammu-textile-bangladesh" },
      { label: "Careers at Eammu",                  href: "/careers" },
      { label: "About Eammu Holidays",              href: "/about" },
    ],
  },
  {
    heading: "Contact & Office Locations",
    headingHref: "/contact",
    links: [
      { label: "Visa Consultancy Dubai Office",     href: "/contact/travel-agency-dubai" },
      { label: "Travel Agency Bangladesh (Cumilla)", href: "/contact/travel-agency-bangladesh" },
      { label: "Travel Agency Armenia",             href: "/contact/travel-agency-armenia" },
      { label: "Travel Agency Georgia",             href: "/contact/travel-agency-georgia" },
      { label: "Client Testimonials",               href: "/testimonials" },
      { label: "Our Leading Team",                  href: "/our-leading-team" },
      { label: "Sponsored by Eammu Holidays",            href: "https://visaexpresshub.com/" },
      { label: "Terms & Privacy Policy",            href: "/terms-privacy-policy" },
    ],
  },
];

// Priority destination pills — shown above the groups as a visual anchor
const PRIORITY_PILLS = [
  { label: "🇺🇸 USA Visa",        href: "/visa/united-states-visa" },
  { label: "🇬🇧 UK Visa",         href: "/visa/united-kingdom-visa" },
  { label: "🇨🇦 Canada Visa",     href: "/visa/canada-visa" },
  { label: "🇪🇺 Schengen Visa",   href: "/schengen-visa" },
  { label: "🇯🇵 Japan Visa",      href: "/visa/japan-visa" },
  { label: "🇦🇺 Australia Visa",  href: "/visa/australia-visa" },
  { label: "🇦🇪 Dubai Residents", href: "/visa/dubai-residents" },
  { label: "🇮🇳 India Visa",      href: "/visa/india" },
  { label: "✓ Checklist Tool",    href: "/travel-resources/visa-checklist-generator" },
  { label: "⏱ Processing Times",  href: "/travel-resources/visa-processing-time-tracker" },
  { label: "📊 Rejection Rates",  href: "/visa-rejection" },
  { label: "⚡ E-Visa Destinations", href: "/visa/e-visa" },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function HomeSeoLinks() {
  return (
    <section
      aria-label="Visa and travel resources — Eammu Holidays"
      className="pt-12 pb-16"
    >
      <div className="max-w-7xl mx-auto px-5">

        {/* ── Top label ── */}
        <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-5">
          Explore — Visa Services, Tools &amp; Travel Guides
        </p>

        {/* ── Priority destination pills ── */}
        <nav aria-label="Popular visa destinations" className="mb-10">
          <div className="flex flex-wrap gap-2">
            {PRIORITY_PILLS.map(pill => (
              <Link
                key={pill.href}
                href={pill.href}
                className="text-xs font-bold text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-green-400 hover:text-green-700 hover:bg-green-50 transition-all"
              >
                {pill.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* ── Link groups ── */}
        <nav aria-label="Full site navigation — visa and travel services">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
            {LINK_GROUPS.map((group, gi) => (
              <div key={gi}>
                {/* Group heading links to the hub page */}
                <Link
                  href={group.headingHref}
                  className="block text-xs font-black uppercase tracking-widest text-gray-800 hover:text-green-700 transition mb-3 leading-snug"
                >
                  {group.heading}
                </Link>
                <ul className="space-y-1.5" role="list">
                  {group.links.map(link => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs text-gray-400 hover:text-green-700 transition font-medium leading-snug block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* ── Bottom divider + brand note ── */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] text-gray-300 font-medium">
            © {new Date().getFullYear()} Eammu Holidays — Bangladesh&apos;s leading tourist visa consultancy.
            Offices in Cumilla, Bangladesh &amp; Dubai, UAE.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/about"              className="text-[11px] text-gray-300 hover:text-green-600 transition font-medium">About</Link>
            <Link href="/testimonials"       className="text-[11px] text-gray-300 hover:text-green-600 transition font-medium">Testimonials</Link>
            <Link href="/terms-privacy-policy" className="text-[11px] text-gray-300 hover:text-green-600 transition font-medium">Privacy Policy</Link>
            <Link href="/contact"            className="text-[11px] text-gray-300 hover:text-green-600 transition font-medium">Contact</Link>
          </div>
        </div>

      </div>
    </section>
  );
}