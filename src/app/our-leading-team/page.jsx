"use client";

/**
 * /our-leading-team — Premium Leadership Page
 * Eammu Holidays Dubai | Visa Consultancy & Travel Agency
 *
 * Keeps all SEO: Organization + Person + Breadcrumb + FAQ JSON-LD,
 * keyword headings, internal link mesh, FAQ, video sections.
 * Needs: framer-motion, next/link, Tailwind CSS.
 */

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  MotionConfig,
  AnimatePresence,
  animate,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/* ───────────────────────── DATA ───────────────────────── */

const TEAM = [
  {
    name: "Naeem Hossen",
    slug: "naeem-hossen",
    role: "Business Development Manager & Global Visa Expert",
    location: "Dubai, United Arab Emirates",
    image: "https://i.ibb.co/Qjr5x7KW/Whats-App-Image-2025-08-12-at-11-05-24-PM-1.jpg",
    description:
      "Naeem Hossen is the founder of Eammu Holidays and a leading visa and Education consultant based in Dubai. With over a decade of experience, he has personally guided more than 50,000 UAE residents and Bangladeshi expats through visa applications for USA, UK, Canada, Schengen, Japan, Australia, and 200+ countries. He specialises in high-refusal-risk cases and complex immigration situations.",
    expertise: ["USA B1/B2 Visa", "UK Standard Visitor", "Canada TRV", "Schengen Visa", "Air Ticketing", "Immigration Strategy"],
    socials: {
      linkedin: "https://www.linkedin.com/in/naeemhossen-/",
      facebook: "https://facebook.com/naeemhosseen",
      instagram: "https://instagram.com/naeemhossen_",
    },
    profileLink: "/naeem-hossen",
    stats: { visas: "50,000+", countries: "200+", experience: "10+ yrs" },
    schema: {
      "@type": "Person",
      name: "Naeem Hossen",
      jobTitle: "Business Development Manager & Global Visa Expert",
      worksFor: { "@type": "Organization", name: "Eammu Holidays" },
      url: "https://eammu.com/naeem-hossen",
      sameAs: ["https://www.linkedin.com/in/naeemhossen-/", "https://facebook.com/naeemhosseen"],
    },
  },
  {
    name: "Sana Ullah Tahsin",
    slug: "sana-ullah-tahsin",
    role: "Customer Service Manager & Student Visa Expert",
    location: "Cumilla, Bangladesh",
    image: "https://i.ibb.co/997F5dSp/Whats-App-Image-2025-08-12-at-10-53-20-PM.jpg",
    description:
      "Sana Ullah Tahsin is Eammu Holidays' lead student visa consultant and Customer Service Manager. She has helped hundreds of students from Dubai and UAE secure student visas for the USA, UK, Canada, Germany, and Australia. Sana provides end-to-end support — from university selection and SOP writing to visa interview preparation — with a high approval track record.",
    expertise: ["USA Student Visa (F-1)", "UK Student Visa", "Canada Study Permit", "Germany Student Visa", "SOP Writing", "Interview Prep"],
    socials: { linkedin: "#", facebook: "https://www.facebook.com/Tahsinahef.official", instagram: "#" },
    profileLink: null,
    stats: { visas: "2,000+", countries: "10+", experience: "5+ yrs" },
    schema: {
      "@type": "Person",
      name: "Sana Ullah Tahsin",
      jobTitle: "Student Visa Expert & Customer Service Manager",
      worksFor: { "@type": "Organization", name: "Eammu Holidays" },
    },
  },
  {
    name: "Wahid Ahamed Emon",
    slug: "wahid-ahamed-emon",
    role: "Sales And Marketing Manager",
    location: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/PGX6RnVb/464369930-532778909362696-6020132385522832185-n.jpg",
    description:
      "Wahid Ahamed Emon heads customer service and holiday tour package planning at Eammu Holidays. He designs bespoke tour packages for Dubai residents visiting Thailand, Malaysia, Turkey, Singapore, Europe, and beyond. Emon is known for his meticulous attention to detail and his ability to craft unforgettable travel experiences within any budget.",
    expertise: ["Holiday Tour Packages", "Thailand Tours", "Malaysia Tours", "Turkey Tours", "Desert Safari Dubai", "Customer Relations"],
    socials: { linkedin: "#", facebook: "#", instagram: "#" },
    profileLink: null,
    stats: { visas: "5,000+", countries: "50+", experience: "4+ yrs" },
    schema: {
      "@type": "Person",
      name: "Wahid Ahamed Emon",
      jobTitle: "Customer Service Executive & Tour Packages Expert",
      worksFor: { "@type": "Organization", name: "Eammu Holidays" },
    },
  },
];

const STATS = [
  { to: 100000, locale: "en-IN", suffix: "+", label: "Visas Processed", icon: "✈️" },
  { to: 98, locale: "en-US", suffix: "%", label: "Approval Rate", icon: "✅" },
  { to: 200, locale: "en-US", suffix: "+", label: "Countries Covered", icon: "🌍" },
  { to: 10, locale: "en-US", suffix: "+ yrs", label: "Combined Experience", icon: "🏆" },
  { to: 3241, locale: "en-US", suffix: "", label: "5-Star Reviews", icon: "⭐" },
  { to: 24, locale: "en-US", suffix: "hr", label: "Document Review", icon: "⚡" },
];

const AWARDS = [
  { title: "Top Visa Agency Dubai 2024", org: "Gulf Travel Awards", icon: "🏅" },
  { title: "Best Immigration Consultancy UAE", org: "UAE Business Review", icon: "🥇" },
  { title: "98% Visa Approval Rate Certified", org: "Embassy Verified · 2026", icon: "🛡️" },
  { title: "Trusted by 1,00,000+ UAE Residents", org: "Eammu Internal Data", icon: "👥" },
];

const SERVICES = [
  { label: "Tourist Visa for Dubai Residents", href: "/visa/dubai-residents", icon: "🌏" },
  { label: "USA B1/B2 Visa Consultancy", href: "/visa/dubai-residents/united-states", icon: "🇺🇸" },
  { label: "UK Standard Visitor Visa", href: "/visa/dubai-residents/united-kingdom", icon: "🇬🇧" },
  { label: "Schengen Visa from Dubai", href: "/schengen-visa", icon: "🇪🇺" },
  { label: "Canada TRV from Dubai", href: "/visa/dubai-residents/canada", icon: "🇨🇦" },
  { label: "Japan Tourist Visa Dubai", href: "/visa/dubai-residents/japan", icon: "🇯🇵" },
  { label: "Australia Visa from Dubai", href: "/visa/dubai-residents/australia", icon: "🇦🇺" },
  { label: "Student Visa Consultancy Dubai", href: "/our-services/visa-services/student-visa-from-bangladesh", icon: "🎓" },
  { label: "Free Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator", icon: "📋" },
  { label: "Visa Processing Time Tracker", href: "/travel-resources/visa-processing-time-tracker", icon: "⏱️" },
  { label: "Visa Rejection Rates", href: "/visa-rejection", icon: "📊" },
  { label: "Holiday Tour Packages", href: "/our-services/tour-packages", icon: "🏖️" },
  { label: "USA Visa Interview Prep", href: "/target-usa-visa-interview-preparation", icon: "🗣️" },
  { label: "E-Visa Destinations", href: "/visa/e-visa", icon: "⚡" },
  { label: "Contact Dubai Office", href: "/contact/travel-agency-dubai", icon: "📍" },
  { label: "All Visa Services", href: "/our-services/visa-services", icon: "📁" },
];

const RELATED = [
  { label: "About Eammu Holidays", href: "/about" },
  { label: "Naeem Hossen — Founder Profile", href: "/naeem-hossen" },
  { label: "Tourist Visa Dubai Residents 2026", href: "/visa/dubai-residents" },
  { label: "Schengen Visa 2026", href: "/schengen-visa" },
  { label: "Visa Rejection Rates", href: "/visa-rejection" },
  { label: "Free Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator" },
  { label: "VFS Processing Time Tracker", href: "/travel-resources/visa-processing-time-tracker" },
  { label: "USA Visa Interview Prep Dubai", href: "/target-usa-visa-interview-preparation" },
  { label: "IELTS Center Dubai", href: "/target-ielts-immigration-center" },
  { label: "Scholarships for UAE Residents", href: "/scholarships" },
  { label: "Online Travel Agency", href: "/online-travel-agency-bangladesh" },
  { label: "Work Visa from Dubai", href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { label: "Student Visa from Dubai", href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { label: "Client Testimonials", href: "/testimonials" },
  { label: "Contact Dubai Office", href: "/contact/travel-agency-dubai" },
];

const FAQS = [
  {
    q: "Who leads Eammu Holidays' visa consultancy team in Dubai?",
    a: "Eammu Holidays is led by founder Naeem Hossen, a globally recognised visa and immigration expert based in Dubai with over 10 years of experience. He is supported by student visa specialist Sana Ullah Tahsin and tour expert Wahid Ahamed Emon.",
  },
  {
    q: "What is Eammu Holidays' visa approval rate?",
    a: "Eammu Holidays maintains a 98% visa approval rate across 1,00,000+ processed applications for UAE residents and Bangladeshi expats in Dubai. This covers USA, UK, Canada, Schengen, Japan, Australia, and 200+ destinations.",
  },
  {
    q: "Does Eammu Holidays have a physical office in Dubai?",
    a: "Yes. Eammu Holidays operates a dedicated Dubai branch for UAE residents and expats, offering in-person visa document review, VFS appointment guidance, and full application support. Contact our Dubai office for an appointment.",
  },
  {
    q: "Which visas does the Eammu team specialise in for Dubai residents?",
    a: "Our team specialises in USA B1/B2, UK Standard Visitor, Canada TRV, Schengen (all 29 countries), Japan tourist, Australia Subclass 600, student visas (USA F-1, UK, Canada, Germany), and e-visa destinations — all from Dubai.",
  },
  {
    q: "Can Eammu help Bangladeshi expats in Dubai with third-country visa applications?",
    a: "Yes. Eammu Holidays specialises in third-country visa applications for Bangladeshi nationals residing in Dubai. Our deep knowledge of UAE residency documentation and embassy expectations has helped thousands of Bangladeshi expats secure USA, UK, and Schengen visas.",
  },
];

const SHORTS = [
  { id: "VXcsh-RGAQo", title: "FEEL THE HEAT! WITH EAMMU FIRE SHOW DESERT SAFARI" },
  { id: "wBEWAeP8AEI", title: "Turkey e-Visa – Apply by Yourself 🇹🇷" },
  { id: "yGZlj3IqwqQ", title: "THAILAND TOUR PACKAGES With Eammu – EXPLORE THE LAND OF SMILES" },
  { id: "9lsBNCWdJrs", title: "Albania Tourist Visa – Apply by Yourself!" },
];

const TESTIMONIAL_VIDEOS = [
  { id: "9RE1nwL9SqM", title: "Client Testimonial — Eammu Holidays Dubai Visa Consultancy" },
  { id: "Iw4JZZp9q8c", title: "Client Review — Eammu Immigration & Travel Agency UAE" },
];

/* ───────────────────────── JSON-LD ───────────────────────── */

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://eammu.com/#organization",
  name: "Eammu Holidays",
  url: "https://eammu.com",
  logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" },
  description:
    "Dubai's leading tourist visa consultancy and travel agency for UAE residents and Bangladeshi expats. 98% visa approval rate. 200+ countries. Expert team led by founder Naeem Hossen.",
  areaServed: ["AE", "BD"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3241", bestRating: "5" },
  employee: TEAM.map((m) => ({ ...m.schema, image: m.image })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
    { "@type": "ListItem", position: 2, name: "About Eammu", item: "https://eammu.com/about" },
    { "@type": "ListItem", position: 3, name: "Leadership Team", item: "https://eammu.com/our-leading-team" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/* ───────────────────────── ANIMATION HELPERS ───────────────────────── */

const EASE = [0.2, 0.7, 0.2, 1];

// Words slide up out of a mask, one by one.
// NOTE: visibility is detected on the heading itself (not on the hidden words),
// because words pushed below their overflow-hidden mask never count as "visible".
function SplitWords({ text, className = "", wordClassName = "", as: Tag = "span", delay = 0, srOnly = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const words = text.split(" ");
  return (
    <Tag ref={ref} className={className}>
      {srOnly && <span className="sr-only">{text}</span>}
      <span aria-hidden="true">
        {words.map((w, i) => (
          <Fragment key={i}>
            <span className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
              <motion.span
                className={`inline-block ${wordClassName}`}
                initial={false}
                animate={{ y: inView ? "0%" : "115%" }}
                transition={{ duration: 0.75, ease: EASE, delay: delay + i * 0.06 }}
              >
                {w}
              </motion.span>
            </span>
            {i < words.length - 1 && " "}
          </Fragment>
        ))}
      </span>
    </Tag>
  );
}

function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ to, suffix = "", locale = "en-US" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setV(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (x) => setV(Math.round(x)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {v.toLocaleString(locale)}
      {suffix}
    </span>
  );
}

const listVariants = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

/* ───────────────────────── SUB-COMPONENTS ───────────────────────── */

// Team photo: morphing frame, spinning ring, scroll parallax, floating chips
function TeamPhoto({ member, flip }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div ref={ref} className="relative mx-auto aspect-[4/5] w-full max-w-[19rem] sm:max-w-sm">
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="nh-ring absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] text-emerald-400/70 sm:-inset-8"
      >
        <circle cx="100" cy="100" r="97" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 6" strokeLinecap="round" />
      </svg>
      <div aria-hidden="true" className="nh-blob absolute -inset-3 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-30" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: flip ? 5 : -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: EASE }}
        whileHover={{ scale: 1.03 }}
        className="nh-blob relative h-full w-full overflow-hidden border-[6px] border-white shadow-2xl shadow-emerald-900/20"
      >
        <motion.img
          src={member.image}
          alt={`${member.name} — ${member.role} at Eammu Holidays Dubai`}
          loading="lazy"
          style={{ y, scale: 1.18 }}
          className="h-full w-full object-cover object-top"
        />
      </motion.div>

      <div className="nh-float absolute -left-3 top-8 rounded-2xl bg-white px-3 py-2 shadow-xl shadow-emerald-900/10 sm:-left-10 sm:px-4 sm:py-3">
        <p className="nh-display text-lg font-bold leading-none text-emerald-700 sm:text-2xl">{member.stats.visas}</p>
        <p className="mt-1 text-[11px] text-[#4a6557] sm:text-xs">Visas handled</p>
      </div>
      <div className="nh-float-2 absolute -bottom-4 -right-2 rounded-2xl bg-emerald-700 px-3 py-2 text-white shadow-xl shadow-emerald-700/30 sm:-right-8 sm:px-4 sm:py-3">
        <p className="nh-display text-lg font-bold leading-none sm:text-2xl">{member.stats.experience}</p>
        <p className="mt-1 text-[11px] text-white/80 sm:text-xs">Experience</p>
      </div>
    </div>
  );
}

function SocialLink({ href, label, name }) {
  if (!href || href === "#") return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} ${label} profile`}
      className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-emerald-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
    >
      {label}
    </a>
  );
}

function TeamRow({ member, index }) {
  const flip = index % 2 === 1;
  return (
    <article
      className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16"
      aria-label={`${member.name} — ${member.role}, Eammu Holidays Dubai`}
    >
      <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
        <TeamPhoto member={member} flip={flip} />
      </div>

      <div className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            {member.role}
          </p>
        </Reveal>

        <h3 className="nh-display mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
          {member.profileLink ? (
            <Link href={member.profileLink} className="transition hover:text-emerald-600">
              <SplitWords text={member.name} />
            </Link>
          ) : (
            <SplitWords text={member.name} />
          )}
        </h3>

        <Reveal delay={0.1}>
          <p className="mt-2 text-sm font-medium text-[#4a6557]">📍 {member.location}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#40594d] sm:text-lg">{member.description}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="mt-8 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-100">
            {[
              { v: member.stats.visas, l: "Visas" },
              { v: member.stats.countries, l: "Countries" },
              { v: member.stats.experience, l: "Experience" },
            ].map((s) => (
              <div key={s.l} className="bg-white px-3 py-4 text-center sm:px-5">
                <dd className="nh-display text-xl font-bold text-emerald-700 sm:text-2xl">{s.v}</dd>
                <dt className="mt-0.5 text-xs text-[#4a6557]">{s.l}</dt>
              </div>
            ))}
          </dl>
        </Reveal>

        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-8 flex flex-wrap gap-2"
          aria-label={`${member.name} areas of expertise`}
        >
          {member.expertise.map((skill) => (
            <motion.li
              key={skill}
              variants={itemVariants}
              className="rounded-full bg-emerald-50 px-3.5 py-1.5 text-sm font-medium text-emerald-900 ring-1 ring-emerald-100"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-3">
          <SocialLink href={member.socials.linkedin} label="LinkedIn" name={member.name} />
          <SocialLink href={member.socials.facebook} label="Facebook" name={member.name} />
          <SocialLink href={member.socials.instagram} label="Instagram" name={member.name} />
          {member.profileLink && (
            <Link
              href={member.profileLink}
              aria-label={`Full profile of ${member.name}`}
              className="inline-flex items-center rounded-full bg-emerald-700 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:-translate-y-0.5 hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              Full Profile →
            </Link>
          )}
        </Reveal>
      </div>
    </article>
  );
}

function LazyYouTube({ videoId, title, aspectClass = "aspect-[9/16]" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-3xl bg-black shadow-lg shadow-emerald-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${aspectClass}`}
    >
      {visible ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={title} loading="lazy" className="h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-xl transition-transform group-hover:scale-110">
              <svg className="ml-1 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`overflow-hidden rounded-2xl border bg-white transition-colors ${open ? "border-emerald-300 shadow-lg shadow-emerald-900/5" : "border-emerald-100"}`}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 p-5 text-left transition hover:bg-emerald-50/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-600 sm:p-6"
      >
        <span className="nh-display text-base font-bold leading-snug sm:text-lg">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-700"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <p className="px-5 pb-6 text-sm leading-relaxed text-[#40594d] sm:px-6 sm:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const inlineLink = "font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-4 transition hover:decoration-emerald-600";

/* ───────────────────────── PAGE ───────────────────────── */

export default function MessageFromLeadingTeam() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yC = useTransform(scrollYProgress, [0, 1], [0, 110]);

  return (
    <MotionConfig reducedMotion="user">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .nh-display { font-family: 'Bricolage Grotesque', 'Plus Jakarta Sans', system-ui, sans-serif; letter-spacing: -0.02em; }
        .nh-body    { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', sans-serif; }

        @keyframes nh-morph {
          0%,100% { border-radius: 42% 58% 55% 45% / 48% 42% 58% 52%; }
          33%     { border-radius: 58% 42% 40% 60% / 55% 55% 45% 45%; }
          66%     { border-radius: 46% 54% 60% 40% / 42% 58% 42% 58%; }
        }
        .nh-blob { animation: nh-morph 9s ease-in-out infinite; }
        @keyframes nh-spin { to { transform: rotate(360deg); } }
        .nh-ring { animation: nh-spin 30s linear infinite; }
        @keyframes nh-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .nh-float   { animation: nh-float 5s ease-in-out infinite; }
        .nh-float-2 { animation: nh-float 6.5s ease-in-out -2s infinite; }
        .nh-float-3 { animation: nh-float 7.5s ease-in-out -4s infinite; }
        @keyframes nh-drift { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-24px) scale(1.12); } }
        .nh-drift   { animation: nh-drift 14s ease-in-out infinite; }
        .nh-drift-2 { animation: nh-drift 18s ease-in-out -6s infinite; }
        @keyframes nh-shine { to { background-position: 200% center; } }
        .nh-shine {
          background: linear-gradient(90deg, #065f46, #059669, #10b981, #059669, #065f46);
          background-size: 200% auto;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: nh-shine 6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .nh-blob, .nh-ring, .nh-float, .nh-float-2, .nh-float-3, .nh-drift, .nh-drift-2, .nh-shine { animation: none; }
        }
      `}</style>

      <div className="nh-body overflow-x-hidden bg-white text-[#0f2a20] selection:bg-emerald-200 selection:text-emerald-950">
        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="border-b border-emerald-100 bg-emerald-50/70 px-6 py-3">
          <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 text-xs font-semibold text-emerald-700 sm:text-sm">
            <li><Link href="/" className="transition hover:text-emerald-900">Home</Link></li>
            <li aria-hidden="true" className="text-emerald-400">›</li>
            <li><Link href="/about" className="transition hover:text-emerald-900">About Eammu</Link></li>
            <li aria-hidden="true" className="text-emerald-400">›</li>
            <li aria-current="page" className="font-bold text-emerald-900">Leadership Team</li>
          </ol>
        </nav>

        {/* ── HERO ── */}
        <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 pb-32 pt-16 sm:pt-20 lg:pb-40 lg:pt-24">
          <div aria-hidden="true" className="nh-drift pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl sm:h-96 sm:w-96" />
          <div aria-hidden="true" className="nh-drift-2 pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-300/40 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
          <div aria-hidden="true" className="nh-drift pointer-events-none absolute left-1/2 top-1/3 h-48 w-48 rounded-full bg-amber-200/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur sm:text-sm"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Dubai&apos;s Most Trusted Visa Consultancy · 2026
              </motion.p>

              <h1 className="nh-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="sr-only">Meet the Eammu Holidays Leadership Team — Dubai&apos;s Visa &amp; Travel Experts</span>
                <span aria-hidden="true" className="block">
                  <SplitWords srOnly={false} className="block" text="Meet the Eammu Holidays" delay={0.1} />
                  <SplitWords srOnly={false} className="block" wordClassName="nh-shine" text="Leadership Team" delay={0.35} />
                  <SplitWords srOnly={false} className="block text-[#3d6b55]" text="Dubai's Visa & Travel Experts" delay={0.55} />
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
                className="mt-8 max-w-xl text-base leading-relaxed text-[#40594d] sm:text-lg md:text-xl"
              >
                The expert consultants behind <strong className="font-semibold text-[#0f2a20]">1,00,000+ approved visas</strong> for UAE
                residents and Bangladeshi expats. USA · UK · Canada · Schengen · 200+ countries. Based in Dubai since 2015.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.95 }}
                className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
              >
                <a
                  href="https://wa.me/8801701699743"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:-translate-y-0.5 hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  📞 WhatsApp the Team
                </a>
                <Link
                  href="/visa/dubai-residents"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-300 bg-white/70 px-8 py-4 font-semibold text-emerald-800 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  🌍 View Visa Services
                </Link>
              </motion.div>
            </div>

            {/* photo collage */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: EASE, delay: 0.3 }}
                className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-md lg:ml-auto"
              >
                <svg aria-hidden="true" viewBox="0 0 200 200" className="nh-ring absolute inset-0 h-full w-full text-emerald-400/60">
                  <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 6" strokeLinecap="round" />
                </svg>

                <motion.div style={{ y: yA }} className="absolute left-[2%] top-[4%] w-[62%]">
                  <div className="nh-float">
                    <div className="nh-blob aspect-[4/5] overflow-hidden border-[5px] border-white shadow-2xl shadow-emerald-900/25">
                      <img src={TEAM[0].image} alt={`${TEAM[0].name} — ${TEAM[0].role}`} className="h-full w-full object-cover object-top" />
                    </div>
                  </div>
                </motion.div>

                <motion.div style={{ y: yB }} className="absolute right-0 top-0 w-[34%]">
                  <div className="nh-float-2 aspect-square overflow-hidden rounded-full border-[5px] border-white shadow-xl shadow-emerald-900/20">
                    <img src={TEAM[1].image} alt={`${TEAM[1].name} — ${TEAM[1].role}`} className="h-full w-full object-cover object-top" />
                  </div>
                </motion.div>

                <motion.div style={{ y: yC }} className="absolute bottom-[2%] right-[6%] w-[38%]">
                  <div className="nh-float-3 aspect-square overflow-hidden rounded-full border-[5px] border-white shadow-xl shadow-emerald-900/20">
                    <img src={TEAM[2].image} alt={`${TEAM[2].name} — ${TEAM[2].role}`} className="h-full w-full object-cover object-top" />
                  </div>
                </motion.div>

                <div className="nh-float-2 absolute bottom-[6%] left-0 flex items-center gap-2 rounded-2xl bg-white px-3 py-2.5 shadow-xl shadow-emerald-900/10 sm:gap-3 sm:px-4 sm:py-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-lg sm:h-10 sm:w-10 sm:text-xl">✅</span>
                  <div>
                    <p className="text-sm font-bold leading-tight">98% approval</p>
                    <p className="text-xs text-[#4a6557]">Dubai &amp; UAE</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="relative z-10 -mt-20 px-6 lg:-mt-24" aria-label="Key performance statistics">
          <Reveal className="mx-auto max-w-6xl">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-100 shadow-2xl shadow-emerald-900/10 md:grid-cols-3 lg:grid-cols-6">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white px-4 py-7 text-center transition hover:bg-emerald-50">
                  <p className="text-2xl" aria-hidden="true">{s.icon}</p>
                  <dd className="nh-display mt-2 text-2xl font-extrabold text-emerald-700 sm:text-3xl">
                    <CountUp to={s.to} suffix={s.suffix} locale={s.locale} />
                  </dd>
                  <dt className="mt-1 text-xs font-medium text-[#4a6557] sm:text-sm">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* ── TEAM ── */}
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32" aria-labelledby="team-heading">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 id="team-heading" className="nh-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              <SplitWords srOnly={false} text="Visa & Travel Specialists — Dubai, UAE" />
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-6 text-base leading-relaxed text-[#4a6557] sm:text-lg">
                Every consultant at Eammu Holidays is a specialist — not a generalist. Our team has collectively processed applications
                for over 200 countries, achieving a 98% approval rate for UAE residents and expats from 2015 to {new Date().getFullYear()}.
              </p>
            </Reveal>
          </div>

          <div className="space-y-28 md:space-y-36">
            {TEAM.map((member, i) => (
              <TeamRow key={member.slug} member={member} index={i} />
            ))}
          </div>
        </section>

        {/* ── AWARDS ── */}
        <section className="bg-emerald-50/70 px-6 py-24 md:py-28" aria-labelledby="awards-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 id="awards-heading" className="nh-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
                <SplitWords srOnly={false} text="Trusted · Awarded · Verified" />
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {AWARDS.map(({ title, org, icon }, i) => (
                <Reveal key={title} delay={i * 0.08}>
                  <div className="group h-full rounded-3xl border border-emerald-100 bg-white p-7 text-center transition duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/10">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl transition duration-300 group-hover:rotate-6 group-hover:scale-110" aria-hidden="true">
                      {icon}
                    </div>
                    <h3 className="nh-display mt-5 text-lg font-bold leading-snug">{title}</h3>
                    <p className="mt-2 text-sm text-[#4a6557]">{org}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ARTICLE ── */}
        <section className="mx-auto max-w-5xl px-6 py-24 md:py-32" aria-labelledby="about-team-heading">
          <h2 id="about-team-heading" className="nh-display max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            <SplitWords srOnly={false} text="About the Eammu Holidays Team — Dubai Visa & Travel Consultancy" />
          </h2>
          <div className="mt-12 grid gap-10 text-base leading-relaxed text-[#40594d] md:grid-cols-2 md:gap-14">
            <Reveal className="space-y-5">
              <p>
                Eammu Holidays is led by <strong className="font-semibold text-[#0f2a20]">Naeem Hossen</strong>, one of Dubai&apos;s most
                experienced visa and immigration consultants. Since founding Eammu in 2015, Naeem has personally overseen more than 1,00,000
                visa applications for UAE residents and Bangladeshi expats — achieving a{" "}
                <strong className="font-semibold text-[#0f2a20]">98% approval rate</strong> across 200+ destination countries.
              </p>
              <p>
                The team&apos;s core strength lies in high-scrutiny visa categories:{" "}
                <Link href="/visa/dubai-residents/united-states" className={inlineLink}>USA B1/B2</Link>,{" "}
                <Link href="/visa/dubai-residents/united-kingdom" className={inlineLink}>UK Standard Visitor</Link>,{" "}
                <Link href="/visa/dubai-residents/canada" className={inlineLink}>Canada TRV</Link>, and{" "}
                <Link href="/schengen-visa" className={inlineLink}>Schengen visas</Link> for Dubai-based applicants. Every document is
                reviewed against live embassy circulars and VFS Global UAE announcements before submission.
              </p>
              <p>
                <strong className="font-semibold text-[#0f2a20]">Sana Ullah Tahsin</strong> leads student visa services and customer care,
                helping students from Dubai and UAE gain admission and visas to universities in the USA, UK, Canada, Germany, and Australia
                — with full SOP writing and interview preparation support.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="space-y-5">
              <p>
                <strong className="font-semibold text-[#0f2a20]">Wahid Ahamed Emon</strong> manages holiday tour packages and customer
                experience. From{" "}
                <Link href="/visa/dubai-residents/thailand" className={inlineLink}>Thailand tours</Link> and{" "}
                <Link href="/visa/dubai-residents/malaysia" className={inlineLink}>Malaysia packages</Link> to{" "}
                <Link href="/visa/dubai-residents/turkey" className={inlineLink}>Turkey itineraries</Link> and Dubai desert safaris, Emon
                crafts bespoke travel experiences for every budget.
              </p>
              <p>
                Together, the Eammu team offers a one-stop solution for UAE residents:{" "}
                <Link href="/travel-resources/visa-checklist-generator" className={inlineLink}>visa checklists</Link>,{" "}
                <Link href="/travel-resources/visa-processing-time-tracker" className={inlineLink}>VFS processing time tracking</Link>,{" "}
                <Link href="/visa-rejection" className={inlineLink}>visa rejection rate analysis</Link>,{" "}
                <Link href="/target-usa-visa-interview-preparation" className={inlineLink}>US Embassy interview preparation</Link>, and
                full document review — all under one roof at our{" "}
                <Link href="/contact/travel-agency-dubai" className={inlineLink}>Dubai office</Link>.
              </p>
              <p>
                With <strong className="font-semibold text-[#0f2a20]">3,241 five-star reviews</strong> and a consistent 4.9-star rating
                across platforms, Eammu Holidays is the most reviewed visa consultancy for Dubai residents seeking travel solutions in 2026.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── VIDEO TESTIMONIALS ── */}
        <section className="border-t border-emerald-100 bg-emerald-50/60 px-6 py-24 md:py-28" aria-labelledby="testimonials-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 id="testimonials-heading" className="nh-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                <SplitWords srOnly={false} text="🎥 Client Video Testimonials — Eammu Holidays Dubai" />
              </h2>
              <Reveal delay={0.15}>
                <p className="mt-5 text-base text-[#4a6557]">
                  Real clients, real approvals. Watch how Eammu&apos;s expert team helped UAE residents get visas approved for USA, UK,
                  Schengen, and more.
                </p>
              </Reveal>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {TESTIMONIAL_VIDEOS.map((v, i) => (
                <Reveal key={v.id} delay={i * 0.1}>
                  <LazyYouTube videoId={v.id} title={v.title} aspectClass="aspect-video" />
                </Reveal>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/testimonials"
                className="inline-flex items-center rounded-full bg-emerald-700 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:-translate-y-0.5 hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                📖 Read Written Testimonials →
              </Link>
            </div>
          </div>
        </section>

        {/* ── SHORTS ── */}
        <section className="px-6 py-24 md:py-28" aria-labelledby="shorts-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 id="shorts-heading" className="nh-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                <SplitWords srOnly={false} text="Watch Our Travel & Visa Highlights" />
              </h2>
              <Reveal delay={0.15}>
                <p className="mt-5 text-base text-[#4a6557]">
                  From Dubai desert safaris to Turkey e-visa tutorials — our team documents every journey.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {SHORTS.map((v, i) => (
                <Reveal key={v.id} delay={i * 0.08}>
                  <LazyYouTube videoId={v.id} title={v.title} aspectClass="aspect-[9/16]" />
                </Reveal>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href="https://www.youtube.com/@Eammutour"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:underline"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z" />
                </svg>
                View More on YouTube →
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-4 pb-24 sm:px-6 md:pb-28" aria-labelledby="cta-heading">
          <Reveal>
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-800 px-6 py-16 text-center text-white sm:px-12 md:px-16 md:py-24">
              <div aria-hidden="true" className="nh-drift pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
              <div aria-hidden="true" className="nh-drift-2 pointer-events-none absolute -bottom-16 right-0 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
              <div className="relative mx-auto max-w-3xl">
                <h2 id="cta-heading" className="nh-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                  <SplitWords srOnly={false} text="Talk Directly to Our Visa Experts in Dubai" />
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white sm:text-lg">
                  Whether you need a USA B1/B2, UK Standard Visitor, Schengen, Canada TRV, or a student visa — our team in Dubai is ready.
                  98% approval rate · Embassy-verified documents · 24-hr review.
                </p>
                <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <a
                    href="https://wa.me/8801701699743"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-600"
                  >
                    📞 WhatsApp / Call Now
                  </a>
                  <Link
                    href="/contact/travel-agency-dubai"
                    className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    📍 Visit Dubai Office
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── FAQ ── */}
        <section className="mx-auto max-w-4xl px-6 pb-24 md:pb-28" aria-labelledby="faq-heading">
          <div className="mb-10 text-center">
            <h2 id="faq-heading" className="nh-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              <SplitWords srOnly={false} text="Frequently Asked Questions — Eammu Leadership Team" />
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05} y={18}>
                <FAQItem q={faq.q} a={faq.a} defaultOpen={i === 0} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── INTERNAL LINK MESH ── */}
        <section className="border-t border-emerald-100 bg-emerald-50/50 px-6 py-20" aria-label="Explore Eammu Holidays services">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="nh-display text-2xl font-bold sm:text-3xl">Explore All Eammu Holidays Services — Dubai &amp; UAE</h2>
              <p className="mt-3 max-w-2xl text-sm text-[#4a6557] sm:text-base">
                Our expert team handles visa applications, tour packages, and immigration services for UAE residents across 200+ countries.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map(({ label, href, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white p-4 text-sm font-semibold text-[#2c4539] transition duration-300 hover:-translate-y-1 hover:border-emerald-600 hover:bg-emerald-700 hover:text-white hover:shadow-lg hover:shadow-emerald-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  <span className="text-lg" aria-hidden="true">{icon}</span>
                  <span>{label}</span>
                </Link>
              ))}
            </div>

            <div className="mt-12 border-t border-emerald-100 pt-8">
              <p className="mb-4 text-sm font-semibold text-[#4a6557]">Related pages</p>
              <div className="flex flex-wrap gap-2">
                {RELATED.map(({ label, href }) => (
                  <Link
                    key={href + label}
                    href={href}
                    className="rounded-full border border-emerald-100 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#40594d] transition hover:border-emerald-600 hover:bg-emerald-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 sm:text-sm"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
}