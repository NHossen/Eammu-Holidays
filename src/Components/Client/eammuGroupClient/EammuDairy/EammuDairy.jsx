"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Fraunces, DM_Sans } from "next/font/google";
import {
  Truck,
  Droplets,
  Egg,
  Drumstick,
  Leaf,
  MessageCircle,
  PhoneCall,
  Sunrise,
  ShieldCheck,
  Plus,
  MapPin,
  Milk,
  CalendarCheck,
  Flame,
  ChevronRight,
} from "lucide-react";

const display = Fraunces({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], display: "swap" });

const WHATSAPP = "https://wa.me/8801701699743";

/* Palette: pasture #1F3D2B · milk #FBFAF6 · yolk #E8A317 · sage #E3EAD8 · ink #16231B */

const slides = [
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/047/547/980/non_2x/dairy-products-horizontal-banner-with-nature-landscape-summer-rural-landscape-with-set-of-milk-products-from-farm-and-herd-cows-design-elements-for-infographics-websites-and-print-media-vector.jpg",
    tab: "Milk",
    badge: "Farm fresh, organic",
    title: "Pure milk from the fields of Cumilla",
    desc: "Collected every day, non-pasteurized, with no additives or preservatives, and delivered fresh to your door.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1600&auto=format&fit=crop",
    tab: "Eggs & poultry",
    badge: "Healthy and nutritious",
    title: "Free-range eggs from open-grazing hens",
    desc: "Rich in protein and Omega-3, from chickens raised outdoors on natural grains.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600&auto=format&fit=crop",
    tab: "Our promise",
    badge: "Chemical-free living",
    title: "From our green fields to your dining table",
    desc: "Clean, chemical-free nutrition for your family, with nothing added and nothing hidden.",
  },
];

const facts = [
  { icon: Sunrise, title: "Collected daily", text: "Milk and eggs gathered each morning" },
  { icon: ShieldCheck, title: "Zero hormones", text: "No shortcuts, just nature" },
  { icon: Leaf, title: "Natural feed", text: "Grass and organic grains only" },
  { icon: Truck, title: "Home delivery", text: "Dhaka and Cumilla" },
];

const steps = [
  { title: "Morning collection", text: "Milk and eggs are collected at the farm every day, never stored for weeks." },
  { title: "Hygienic handling", text: "Clean containers and strict hygiene checks before anything leaves the farm." },
  { title: "Packed fresh", text: "Packed the same day in clean, sealed containers to keep quality intact." },
  { title: "At your door", text: "Delivered to your home within hours of collection." },
];

const faqs = [
  {
    q: "Is the milk pasteurized?",
    a: "No. Our milk is pure and non-pasteurized, with no additives or preservatives. As with any fresh farm milk, we recommend boiling it before you drink it.",
  },
  {
    q: "Where do you deliver?",
    a: "We deliver to homes in Dhaka and Cumilla. Message us on WhatsApp with your area and we will confirm delivery.",
  },
  {
    q: "How do I place an order?",
    a: "Tap Order Now to message us on WhatsApp. Tell us what you need and how often, and we will confirm the details.",
  },
  {
    q: "What do your animals eat?",
    a: "Our livestock is raised on grass and organic grains. We do not use hormones, and our chicken is antibiotic-free.",
  },
];

const EammuDairy = () => {
  const [current, setCurrent] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [current]);

  const slide = slides[current];

  return (
    <div className={`${body.className} bg-[#FBFAF6] text-[#16231B] min-h-screen overflow-x-hidden`}>
      {/* HERO: top padding clears a fixed navbar */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[#E3EAD8] px-4 py-1.5 text-sm font-medium text-[#1F3D2B]">
                  <span className="h-2 w-2 rounded-full bg-[#E8A317]" />
                  {slide.badge}
                </span>
                <h1
                  className={`${display.className} mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-semibold leading-[1.08] tracking-tight text-[#1F3D2B] max-w-xl`}
                >
                  {slide.title}
                </h1>
                <p className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-[#16231B]/75">
                  {slide.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1F3D2B] px-8 py-4 font-bold text-white shadow-lg shadow-[#1F3D2B]/20 transition hover:bg-[#2b5239] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A317]"
              >
                <MessageCircle size={20} /> Order now
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1F3D2B]/25 px-8 py-4 font-bold text-[#1F3D2B] transition hover:bg-[#E3EAD8]"
              >
                See what we offer
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-[#1F3D2B]">
              <span className="inline-flex items-center gap-2"><Truck size={18} /> Home delivery</span>
              <span className="inline-flex items-center gap-2"><Droplets size={18} /> No additives</span>
              <span className="inline-flex items-center gap-2"><MapPin size={18} /> Cumilla farm</span>
            </div>
          </div>

          {/* Image carousel */}
          <div className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-[#1F3D2B] shadow-2xl shadow-[#1F3D2B]/25">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={slide.image}
                  alt={slide.title}
                  initial={reduce ? false : { opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B]/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-3 bottom-24 sm:-left-8 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <p className={`${display.className} text-3xl font-semibold text-[#1F3D2B]`}>100%</p>
              <p className="text-sm text-[#16231B]/70">Chemical free</p>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2" role="tablist" aria-label="Featured products">
              {slides.map((s, i) => (
                <button
                  key={s.tab}
                  role="tab"
                  aria-selected={i === current}
                  onClick={() => setCurrent(i)}
                  className="group text-left focus-visible:outline-none"
                >
                  <span className="block h-1 w-full overflow-hidden rounded-full bg-[#1F3D2B]/15">
                    {i === current && (
                      <motion.span
                        key={current}
                        className="block h-full rounded-full bg-[#E8A317]"
                        initial={{ width: reduce ? "100%" : "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: reduce ? 0 : 6, ease: "linear" }}
                      />
                    )}
                  </span>
                  <span className={`mt-2 block text-sm font-medium ${i === current ? "text-[#1F3D2B]" : "text-[#16231B]/50"}`}>
                    {s.tab}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="bg-[#E3EAD8]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {facts.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#1F3D2B] text-[#E8A317]">
                <Icon size={20} />
              </div>
              <div>
                <p className="font-bold text-[#1F3D2B]">{title}</p>
                <p className="text-sm text-[#16231B]/70 leading-snug">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20 sm:py-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <h2 className={`${display.className} text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F3D2B] leading-tight`}>
              What we offer
            </h2>
            <p className="mt-4 text-lg text-[#16231B]/70">
              Three everyday staples from one farm, produced the way they should be.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-5 gap-6">
            {/* Featured: milk */}
            <div className="lg:col-span-3 overflow-hidden rounded-[2rem] bg-[#1F3D2B] text-white grid sm:grid-cols-2">
              <img
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/191027931/original/924f102a9334b3b5161fea2ce1c15dddabacb5e0/provide-veterinary-services-poultry-and-dairy-farming-ideas.jpg"
                alt="Dairy and poultry products"
                loading="lazy"
                className="h-64 sm:h-full w-full object-cover"
              />
              <div className="p-8 sm:p-10 flex flex-col">
                <Milk className="text-[#E8A317]" size={32} />
                <h3 className={`${display.className} mt-5 text-2xl sm:text-3xl font-semibold`}>Organic cow milk</h3>
                <p className="mt-3 text-white/75 leading-relaxed">
                  Collected daily and non-pasteurized, with zero additives or preservatives.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-white/85">
                  <li className="flex gap-2"><ChevronRight size={16} className="mt-0.5 text-[#E8A317]" /> Fresh from the morning collection</li>
                  <li className="flex gap-2"><ChevronRight size={16} className="mt-0.5 text-[#E8A317]" /> Boil before drinking</li>
                  <li className="flex gap-2"><ChevronRight size={16} className="mt-0.5 text-[#E8A317]" /> Daily or weekly supply on request</li>
                </ul>
                <a href={WHATSAPP} className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#E8A317] px-6 py-3 font-bold text-[#16231B] transition hover:bg-[#f2b42f]">
                  Order milk
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 grid gap-6">
              <ProductCard
                icon={<Egg size={28} />}
                title="Free-range eggs"
                text="Rich in protein and Omega-3, collected from open-grazing hens."
              />
              <ProductCard
                icon={<Drumstick size={28} />}
                title="Deshi poultry meat"
                text="Antibiotic-free local chicken, processed with strict hygiene standards."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FARM STORY */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <img
            src="https://content.jdmagicbox.com/comp/def_content/dairy-farms/f0ea72cad1-dairy-farms-5-tv2jg.jpg"
            alt="Eammu dairy farm in Cumilla"
            loading="lazy"
            className="w-full h-72 sm:h-[28rem] object-cover rounded-[2rem] shadow-xl"
          />
          <div>
            <h2 className={`${display.className} text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F3D2B] leading-tight`}>
              Our farm in Cumilla
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#16231B]/75 max-w-xl">
              Eammu Dairy & Poultry is rooted in the rural landscape of Cumilla, where clean air, open green fields
              and ethical farming come together. We reject factory farming and hormones.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <div className="border-l-4 border-[#1F3D2B] pl-5">
                <p className="font-bold text-[#1F3D2B] text-lg">Modern hygiene</p>
                <p className="text-sm text-[#16231B]/70">Global safety standards at every step</p>
              </div>
              <div className="border-l-4 border-[#E8A317] pl-5">
                <p className="font-bold text-[#1F3D2B] text-lg">Zero hormones</p>
                <p className="text-sm text-[#16231B]/70">No shortcuts, just nature</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS: a real sequence, so numbered */}
      <section className="bg-[#E3EAD8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className={`${display.className} text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F3D2B] max-w-2xl leading-tight`}>
            From our farm to your door
          </h2>
          <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-3xl bg-[#FBFAF6] p-7">
                <span className={`${display.className} text-4xl font-semibold text-[#E8A317]`}>{i + 1}</span>
                <h3 className="mt-4 text-lg font-bold text-[#1F3D2B]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#16231B]/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COMING NEXT */}
      <section className="bg-[#1F3D2B] text-white py-20 sm:py-28 rounded-b-[2.5rem] sm:rounded-b-[4rem]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className={`${display.className} text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight`}>
              What's coming next
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-lg">
              We are growing, to bring more organic goodness to your doorstep.
            </p>
            <div className="mt-10 grid gap-4">
              <UpcomingItem icon={<Flame size={22} />} title="Butter & ghee" text="Traditional wood-churned pure ghee and cultured butter." />
              <UpcomingItem icon={<Truck size={22} />} title="Faster home delivery" text="Fresh delivery in Dhaka and Cumilla within hours of collection." />
              <UpcomingItem icon={<CalendarCheck size={22} />} title="Monthly subscription" text="Never run out of milk, with automatic daily or weekly supply." />
            </div>
          </div>
          <img
            src="https://t4.ftcdn.net/jpg/05/48/62/95/360_F_548629586_cDOlrTXotOkYIENXcXBQ1CaGg5W4yK00.jpg"
            alt="Upcoming Eammu dairy services"
            loading="lazy"
            className="w-full h-72 sm:h-[26rem] object-cover rounded-[2rem] border border-white/15 shadow-2xl"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className={`${display.className} text-3xl sm:text-4xl font-semibold text-[#1F3D2B] text-center`}>
            Common questions
          </h2>
          <div className="mt-10 divide-y divide-[#1F3D2B]/15 border-y border-[#1F3D2B]/15">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-bold text-[#1F3D2B] text-lg"
                  >
                    {f.q}
                    <Plus size={22} className={`shrink-0 transition-transform ${open ? "rotate-45" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 leading-relaxed text-[#16231B]/75">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-[2.5rem] bg-[#E3EAD8] px-6 py-14 sm:px-14 sm:py-20 text-center">
            <h2 className={`${display.className} text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F3D2B] leading-tight`}>
              Ready for farm freshness?
            </h2>
            <p className="mt-4 text-lg text-[#16231B]/70">Farm-fresh food. Zero compromise. Pure quality.</p>
            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={WHATSAPP}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1F3D2B] px-8 py-4 font-bold text-white shadow-lg transition hover:bg-[#2b5239]"
              >
                <PhoneCall size={20} /> Order on WhatsApp
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#1F3D2B] px-8 py-4 font-bold text-[#1F3D2B] transition hover:bg-white"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile floating button */}
      <a
        href={WHATSAPP}
        aria-label="Order on WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl md:hidden"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
};

const ProductCard = ({ icon, title, text }) => (
  <div className="rounded-[2rem] bg-white border border-[#1F3D2B]/10 p-8 flex flex-col justify-between">
    <div className="text-[#E8A317]">{icon}</div>
    <div className="mt-6">
      <h3 className={`${display.className} text-2xl font-semibold text-[#1F3D2B]`}>{title}</h3>
      <p className="mt-2 text-[#16231B]/70 leading-relaxed">{text}</p>
    </div>
  </div>
);

const UpcomingItem = ({ icon, title, text }) => (
  <div className="flex items-start gap-4 rounded-2xl bg-white/5 border border-white/10 p-5">
    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#E8A317] text-[#16231B]">{icon}</div>
    <div>
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="mt-1 text-sm text-white/70 leading-relaxed">{text}</p>
    </div>
  </div>
);

export default EammuDairy;