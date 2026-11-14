"use client"
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head'; // Remove if using standard React
import HomeSeoLinks from '@/Components/HomeSeoLinks/HomeSeoLinks';

const WHATSAPP = 'https://wa.me/8801701699743';

const expertise = [
  { title: 'Global visa consulting', note: 'Tourist, business and long-stay visa strategy across major destinations.', icon: '🛂' },
  { title: 'Student migration strategy', note: 'University selection, documentation and application pathways.', icon: '🎓' },
  { title: 'Air ticketing and GDS systems', note: 'Fare search, reservations and ticketing on professional GDS platforms.', icon: '✈️' },
  { title: 'Digital branding and SEO', note: 'Websites, search visibility and brand presence that bring in clients.', icon: '📈' },
  { title: 'International logistics', note: 'Cross-border coordination for people, documents and goods.', icon: '📦' },
  { title: 'Corporate event planning', note: 'Exhibitions, launches and promotional events from brief to delivery.', icon: '🎪' },
];

const companies = [
  { name: 'Eammu Holidays', sector: 'Travel', desc: 'Premium travel planning and global destination management.', featured: true },
  { name: 'Eammu IT & Marketing', sector: 'Technology', desc: 'Web development, SEO and digital growth strategies.' },
  { name: 'Eammu Event Management', sector: 'Events', desc: 'Tailored corporate exhibitions and promotional events.' },
  { name: 'Eammu Dairy & Poultry', sector: 'Agriculture', desc: 'Sustainable agriculture and high-quality food production.' },
  { name: 'Eammu Fashion & Textile', sector: 'Apparel', desc: 'Apparel manufacturing and lifestyle branding.' },
  { name: 'Flyzoo', sector: 'Aviation', desc: 'Simplified flight booking and aviation-related technologies.' },
];

const marquee = [
  'Visa consulting',
  'Student migration',
  'Air ticketing',
  'Digital branding',
  'International logistics',
  'Event planning',
  'UAE',
  'Armenia',
  'South Asia',
];

/* ---------- helpers ---------- */

// Fades/slides children in when they scroll into view
const Reveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`nh-reveal ${shown ? 'nh-in' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

// Counts up to a number when visible
const CountUp = ({ to, suffix = '' }) => {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setVal(to);
      return;
    }
    let raf;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(to * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
};

/* ---------- page ---------- */

const NaeemHossen = () => {
  const tiltRef = useRef(null);

  const onMove = (e) => {
    const el = tiltRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  };
  const onLeave = () => {
    if (tiltRef.current) tiltRef.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0)';
  };

  return (
    <>
      <Head>
        <title>Naeem Hossen | Business Development Manager of Eammu Holidays</title>
        <meta
          name="description"
          content="Naeem Hossen is a global visa consultant, entrepreneur and Business Development Manager of Eammu Holidays, specializing in international tourism and IT solutions."
        />
        <meta
          name="keywords"
          content="Naeem Hossen, Eammu Holidays, Visa Consultant, Entrepreneur, Eammu IT Solutions"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .nh-display { font-family: 'Bricolage Grotesque', 'Plus Jakarta Sans', system-ui, sans-serif; letter-spacing: -0.02em; }
        .nh-body    { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', sans-serif; }

        /* hero entrance */
        @keyframes nh-rise { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
        .nh-hero { opacity: 0; animation: nh-rise .9s cubic-bezier(.2,.7,.2,1) forwards; }
        .nh-d1 { animation-delay: .05s } .nh-d2 { animation-delay: .18s } .nh-d3 { animation-delay: .32s }
        .nh-d4 { animation-delay: .46s } .nh-d5 { animation-delay: .6s }

        /* photo */
        @keyframes nh-pop { from { opacity: 0; transform: scale(.88) rotate(-3deg); } to { opacity: 1; transform: none; } }
        .nh-photo-wrap { opacity: 0; animation: nh-pop 1.1s cubic-bezier(.2,.8,.2,1) .25s forwards; }
        @keyframes nh-morph {
          0%,100% { border-radius: 42% 58% 55% 45% / 48% 42% 58% 52%; }
          33%     { border-radius: 58% 42% 40% 60% / 55% 55% 45% 45%; }
          66%     { border-radius: 46% 54% 60% 40% / 42% 58% 42% 58%; }
        }
        .nh-blob { animation: nh-morph 9s ease-in-out infinite; }
        @keyframes nh-spin { to { transform: rotate(360deg); } }
        .nh-ring { animation: nh-spin 28s linear infinite; }
        @keyframes nh-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .nh-float   { animation: nh-float 5s ease-in-out infinite; }
        .nh-float-2 { animation: nh-float 6.5s ease-in-out -2s infinite; }
        .nh-float-3 { animation: nh-float 7s ease-in-out -4s infinite; }
        @keyframes nh-drift { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-24px) scale(1.12); } }
        .nh-drift   { animation: nh-drift 14s ease-in-out infinite; }
        .nh-drift-2 { animation: nh-drift 18s ease-in-out -6s infinite; }
        .nh-tilt { transition: transform .25s ease-out; will-change: transform; }

        /* marquee */
        @keyframes nh-scroll { to { transform: translateX(-50%); } }
        .nh-marquee { animation: nh-scroll 32s linear infinite; }
        .nh-marquee-wrap:hover .nh-marquee { animation-play-state: paused; }

        /* scroll reveal */
        .nh-reveal { opacity: 0; transform: translateY(32px); transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1); }
        .nh-reveal.nh-in { opacity: 1; transform: none; }

        /* shimmering gradient text on the name */
        @keyframes nh-shine { to { background-position: 200% center; } }
        .nh-shine {
          background: linear-gradient(90deg, #047857, #10b981, #34d399, #10b981, #047857);
          background-size: 200% auto;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: nh-shine 6s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .nh-hero, .nh-photo-wrap { animation: none; opacity: 1; }
          .nh-blob, .nh-ring, .nh-float, .nh-float-2, .nh-float-3, .nh-drift, .nh-drift-2, .nh-marquee, .nh-shine { animation: none; }
          .nh-reveal { opacity: 1; transform: none; transition: none; }
          .nh-tilt { transition: none; }
        }
      `}</style>

      <main className="nh-body overflow-x-hidden bg-white text-[#0f2a20] selection:bg-emerald-200 selection:text-emerald-950">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          <div aria-hidden="true" className="nh-drift pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-emerald-300/40 blur-3xl" />
          <div aria-hidden="true" className="nh-drift-2 pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-teal-300/40 blur-3xl" />
          <div aria-hidden="true" className="nh-drift pointer-events-none absolute left-1/2 top-1/3 h-56 w-56 rounded-full bg-amber-200/40 blur-3xl" />

          <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 md:py-28 lg:grid-cols-12 lg:py-32">
            <div className="lg:col-span-7">
              <p className="nh-hero nh-d1 mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm backdrop-blur">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Business Development Manager, Eammu Holidays
              </p>

              <h1 className="nh-display nh-hero nh-d2 text-6xl font-extrabold leading-[0.98] sm:text-7xl lg:text-[96px]">
                Naeem
                <br />
                <span className="nh-shine">Hossen</span>
              </h1>

              <p className="nh-hero nh-d3 mt-8 max-w-xl text-lg leading-relaxed text-[#40594d] md:text-xl">
                Entrepreneur and global visa strategist working across international
                immigration, digital transformation and travel.
              </p>

              <div className="nh-hero nh-d4 mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP}
                  className="inline-flex items-center rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:-translate-y-0.5 hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  Message on WhatsApp
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center rounded-full border border-emerald-300 bg-white/70 px-8 py-4 font-semibold text-emerald-800 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  See the companies
                </a>
              </div>

              <div className="nh-hero nh-d5 mt-14 grid max-w-md grid-cols-3 gap-6">
                {[
                  { n: 100, s: '+', l: 'Clients helped' },
                  { n: 6, s: '', l: 'Businesses' },
                  { n: 3, s: '', l: 'Regions' },
                ].map((x) => (
                  <div key={x.l}>
                    <p className="nh-display text-4xl font-bold text-emerald-700">
                      <CountUp to={x.n} suffix={x.s} />
                    </p>
                    <p className="mt-1 text-sm text-[#5f7a6d]">{x.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* animated portrait */}
            <div className="lg:col-span-5">
              <div className="nh-photo-wrap relative mx-auto aspect-[4/5] w-full max-w-sm lg:ml-auto">
                {/* spinning dashed ring */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 200"
                  className="nh-ring absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)] text-emerald-400/70"
                >
                  <circle cx="100" cy="100" r="97" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 6" strokeLinecap="round" />
                </svg>

                {/* morphing colour blob behind the photo */}
                <div aria-hidden="true" className="nh-blob absolute -inset-4 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-30 blur-sm" />

                {/* photo with mouse tilt */}
                <div
                  ref={tiltRef}
                  onMouseMove={onMove}
                  onMouseLeave={onLeave}
                  className="nh-tilt relative h-full w-full"
                >
                  <div className="nh-blob h-full w-full overflow-hidden border-[6px] border-white shadow-2xl shadow-emerald-900/20">
                    <img
                      src="https://i.ibb.co/jkfRFd4Z/IMG-0450.jpg"
                      alt="Naeem Hossen, Business Development Manager of Eammu Holidays"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                {/* floating chips */}
                <div className="nh-float absolute -left-6 top-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-emerald-900/10 sm:-left-12">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-xl">🛂</span>
                  <div>
                    <p className="text-sm font-bold leading-tight">Visa expert</p>
                    <p className="text-xs text-[#5f7a6d]">Global consulting</p>
                  </div>
                </div>

                <div className="nh-float-2 absolute -right-4 top-1/2 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-emerald-900/10 sm:-right-10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-xl">✈️</span>
                  <div>
                    <p className="text-sm font-bold leading-tight">Travel</p>
                    <p className="text-xs text-[#5f7a6d]">Eammu Holidays</p>
                  </div>
                </div>

                <div className="nh-float-3 absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-emerald-600 px-4 py-3 text-white shadow-xl shadow-emerald-700/30">
                  <span className="text-xl">🌍</span>
                  <p className="text-sm font-semibold">UAE · Armenia · South Asia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MARQUEE ================= */}
        <section aria-label="Areas of work" className="nh-marquee-wrap overflow-hidden bg-emerald-600 py-5 text-white">
          <div className="nh-marquee flex w-max items-center gap-10 whitespace-nowrap">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="nh-display flex items-center gap-10 text-xl font-semibold">
                {m}
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-amber-300" />
              </span>
            ))}
          </div>
        </section>

        {/* ================= PROFILE ================= */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <h2 className="nh-display text-4xl font-bold leading-tight md:sticky md:top-12 md:text-5xl">
                Professional
                <br />
                <span className="text-emerald-600">profile</span>
              </h2>
            </Reveal>

            <Reveal delay={120} className="md:col-span-8">
              <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-[#40594d] md:text-xl md:leading-relaxed">
                <p>
                  <span className="font-bold text-emerald-700">Naeem Hossen</span> is the driving force
                  behind <strong className="font-semibold text-[#0f2a20]">Eammu Holidays</strong>, a
                  consultancy delivering visa assistance, student migration paths and complete travel
                  solutions.
                </p>
                <p>
                  With a footprint across the UAE, Armenia and South Asia, he applies deep industry
                  insight to the complexities of global mobility, helping hundreds of clients reach their
                  international travel and career goals.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= EXPERTISE ================= */}
        <section className="bg-emerald-50/70 py-24 md:py-32">
          <div className="container mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mb-14 max-w-2xl">
                <h2 className="nh-display text-4xl font-bold leading-tight md:text-6xl">
                  Where Naeem can help
                </h2>
                <p className="mt-5 text-lg text-[#5f7a6d]">Six areas of practical, hands-on experience.</p>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {expertise.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <article className="group h-full rounded-3xl border border-emerald-100 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/10">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-emerald-500">
                      {item.icon}
                    </span>
                    <h3 className="nh-display mt-6 text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-[#5f7a6d]">{item.note}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PORTFOLIO ================= */}
        <section id="portfolio" className="py-24 md:py-32">
          <div className="container mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <h2 className="nh-display max-w-xl text-4xl font-bold leading-tight md:text-6xl">
                  The Eammu Group
                </h2>
                <p className="max-w-sm text-lg text-[#5f7a6d]">
                  Six businesses across travel, technology, events, food and fashion.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-3">
              {companies.map((c, i) =>
                c.featured ? (
                  <Reveal key={c.name} className="md:col-span-2" delay={0}>
                    <article className="relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-white md:p-10">
                      <div aria-hidden="true" className="nh-drift absolute -right-16 -top-16 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
                      <div aria-hidden="true" className="nh-drift-2 absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
                      <span className="relative w-fit rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur">{c.sector}</span>
                      <div className="relative">
                        <h3 className="nh-display text-4xl font-bold md:text-5xl">{c.name}</h3>
                        <p className="mt-4 max-w-md text-lg leading-relaxed text-white/90">{c.desc}</p>
                      </div>
                    </article>
                  </Reveal>
                ) : (
                  <Reveal key={c.name} delay={i * 70}>
                    <article className="group flex h-full min-h-[220px] flex-col justify-between rounded-3xl border border-emerald-100 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-900/10">
                      <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                        {c.sector}
                      </span>
                      <div>
                        <h3 className="nh-display text-2xl font-bold">{c.name}</h3>
                        <p className="mt-2 leading-relaxed text-[#5f7a6d]">{c.desc}</p>
                      </div>
                    </article>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="px-6 pb-24 md:pb-32">
          <Reveal>
            <div className="relative container mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 px-8 py-20 text-center text-white md:px-16 md:py-28">
              <div aria-hidden="true" className="nh-drift pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
              <div aria-hidden="true" className="nh-drift-2 pointer-events-none absolute -bottom-16 right-0 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
              <div className="relative">
                <h2 className="nh-display mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                  Planning a visa, a move or a business?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-white/90 md:text-xl">
                  Talk to Naeem about visas, business growth or international travel.
                </p>
                <a
                  href={WHATSAPP}
                  className="mt-10 inline-flex items-center rounded-full bg-white px-10 py-4 text-lg font-bold text-emerald-700 shadow-xl shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-600"
                >
                  Contact Naeem Hossen
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <HomeSeoLinks />
      </main>
    </>
  );
};

export default NaeemHossen;