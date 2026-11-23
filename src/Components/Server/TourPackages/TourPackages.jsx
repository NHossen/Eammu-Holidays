'use client';

import { useState } from 'react';
import Image from 'next/image';

const WHATSAPP_NUMBER = '8801631312524';
const VALID_TILL = '31st January 2027';

const packages = [
  {
    id: 1,
    country: 'Thailand',
    flag: '🇹🇭',
    title: 'THAILAND BUDGET ESCAPE',
    subtitle: 'BANGKOK & PATTAYA',
    duration: '4 Days / 3 Nights',
    description:
      'Cheap Thailand tour package with city sightseeing, island beaches and street-food nights in Bangkok and Pattaya.',
    price: 199,
    oldPrice: 299,
    badge: 'Cheapest Deal',
    badgeColor: 'bg-red-600',
    image: '/tour-packages/thailand.webp',
    inclusions: ['Hotel', 'Airport Transfer', 'City Tour', 'Visa Support'],
  },
  {
    id: 2,
    country: 'Dubai',
    flag: '🇦🇪',
    title: 'DUBAI CITY LIGHTS',
    subtitle: 'DUBAI & DESERT SAFARI',
    duration: '4 Days / 3 Nights',
    description:
      'Affordable Dubai holiday with desert safari, Burj Khalifa views and Dubai Marina cruise at an unbeatable price.',
    price: 179,
    oldPrice: 269,
    badge: 'Best Seller',
    badgeColor: 'bg-orange-500',
    image: '/tour-packages/dubai.webp',
    inclusions: ['Hotel', 'Desert Safari', 'City Tour', 'Transfers'],
  },
  {
    id: 3,
    country: 'Singapore',
    flag: '🇸🇬',
    title: 'SINGAPORE SMART TRIP',
    subtitle: 'MARINA BAY & SENTOSA',
    duration: '4 Days / 3 Nights',
    description:
      'Budget Singapore tour package covering Gardens by the Bay, Marina Bay Sands skyline and Sentosa Island fun.',
    price: 249,
    oldPrice: 369,
    badge: 'Hot Deal',
    badgeColor: 'bg-pink-600',
    image: '/tour-packages/singapore.webp',
    inclusions: ['Hotel', 'Sentosa Entry', 'City Tour', 'Transfers'],
  },
  {
    id: 4,
    country: 'Indonesia',
    flag: '🇮🇩',
    title: 'BALI LOW-COST GETAWAY',
    subtitle: 'BALI, UBUD & BEACHES',
    duration: '5 Days / 4 Nights',
    description:
      'Cheap Bali holiday with rice terraces, temples, waterfalls and sunset beaches in Indonesia, perfect for couples and families.',
    price: 229,
    oldPrice: 339,
    badge: 'Honeymoon Pick',
    badgeColor: 'bg-purple-600',
    image: '/tour-packages/indonesia.webp',
    inclusions: ['Resort Stay', 'Breakfast', 'Island Tour', 'Transfers'],
  },
  {
    id: 5,
    country: 'Armenia',
    flag: '🇦🇲',
    title: 'ARMENIA DISCOVERY',
    subtitle: 'YEREVAN & LAKE SEVAN',
    duration: '4 Days / 3 Nights',
    description:
      'Low-price Armenia tour from Yerevan with Garni Temple, Lake Sevan and ancient monasteries, supported by our Yerevan office.',
    price: 199,
    oldPrice: 299,
    badge: 'Limited Offer',
    badgeColor: 'bg-blue-600',
    image: '/tour-packages/armenia.webp',
    inclusions: ['Hotel', 'Breakfast', 'Guided Tour', 'Transfers'],
  },
  {
    id: 6,
    country: 'Georgia',
    flag: '🇬🇪',
    title: 'GEORGIA MOUNTAIN & CITY',
    subtitle: 'TBILISI & KAZBEGI',
    duration: '5 Days / 4 Nights',
    description:
      'Budget Georgia holiday through Tbilisi old town and the Kazbegi mountains, backed by our Tbilisi office on the ground.',
    price: 189,
    oldPrice: 289,
    badge: 'Value Pack',
    badgeColor: 'bg-emerald-600',
    image: '/tour-packages/georgia.webp',
    inclusions: ['Hotel', 'Breakfast', 'Mountain Tour', 'Transfers'],
  },
];

function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.003 3C9.373 3 4 8.373 4 15c0 2.385.697 4.607 1.894 6.48L4 29l7.7-1.857A11.94 11.94 0 0 0 16.003 27C22.63 27 28 21.627 28 15S22.63 3 16.003 3zm0 21.8a9.77 9.77 0 0 1-4.98-1.363l-.357-.213-4.57 1.102 1.13-4.455-.233-.37A9.77 9.77 0 0 1 6.2 15c0-5.413 4.39-9.8 9.803-9.8 5.41 0 9.797 4.387 9.797 9.8s-4.387 9.8-9.797 9.8zm5.37-7.34c-.294-.147-1.743-.86-2.013-.958-.27-.1-.466-.147-.663.147-.196.294-.76.958-.932 1.155-.172.196-.343.22-.637.074-.294-.147-1.243-.458-2.368-1.46-.875-.78-1.466-1.744-1.638-2.038-.172-.294-.018-.453.13-.6.133-.132.294-.343.44-.515.148-.172.196-.294.295-.49.098-.197.05-.368-.025-.515-.074-.147-.663-1.597-.908-2.186-.24-.575-.483-.497-.663-.506l-.564-.01a1.08 1.08 0 0 0-.785.368c-.27.294-1.03 1.007-1.03 2.457s1.055 2.85 1.2 3.047c.147.196 2.077 3.172 5.034 4.45.704.304 1.253.485 1.68.62.706.225 1.35.193 1.858.117.567-.085 1.743-.713 1.99-1.4.245-.688.245-1.277.172-1.4-.074-.122-.27-.196-.564-.343z" />
    </svg>
  );
}

function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function PackageCard({ pkg, index, expanded }) {
  const [imgFailed, setImgFailed] = useState(false);
  const discount = Math.round(((pkg.oldPrice - pkg.price) / pkg.oldPrice) * 100);
  const saved = pkg.oldPrice - pkg.price;

  // Collapsed = first row only (1 card mobile, 2 tablet, 3 desktop)
  let visibility = '';
  if (!expanded) {
    if (index === 0) visibility = 'block';
    else if (index === 1) visibility = 'hidden md:block';
    else if (index === 2) visibility = 'hidden lg:block';
    else visibility = 'hidden';
  }

  const message = `Hello Eammu Holidays, I am interested in the "${pkg.title}" (${pkg.subtitle}, ${pkg.duration}) package starting from USD ${pkg.price}. Please share the details and availability.`;

  return (
    <article
      className={`${visibility} group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
      itemScope
      itemType="https://schema.org/TouristTrip"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#005a31] via-emerald-700 to-teal-500">
        {!imgFailed && (
          <Image
            src={pkg.image}
            alt={`${pkg.title} - cheap ${pkg.country} tour package from USD ${pkg.price}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={index === 0}
            onError={() => setImgFailed(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Top badges */}
        <div
          className={`absolute left-0 top-0 z-10 flex items-center gap-1 rounded-br-xl ${pkg.badgeColor} px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-white shadow sm:text-xs`}
        >
          🔥 {pkg.badge}
        </div>
        <div className="absolute right-3 top-3 z-10 rounded-full bg-yellow-400 px-3 py-1 text-xs font-black text-slate-900 shadow-lg sm:text-sm">
          -{discount}% OFF
        </div>

        {/* Country + duration */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between gap-2">
          <div className="flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-900 shadow sm:text-sm">
            <span className="text-base sm:text-lg" aria-hidden="true">{pkg.flag}</span>
            {pkg.country}
          </div>
          <div className="rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur sm:text-xs">
            ⏱ {pkg.duration}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 itemProp="name" className="text-lg font-black leading-tight tracking-tight text-[#005a31] sm:text-xl">
          {pkg.title}
        </h3>
        <h4 className="mt-1 text-[11px] font-bold uppercase italic tracking-widest text-slate-500 sm:text-xs">
          {pkg.subtitle}
        </h4>

        <p itemProp="description" className="mt-3 text-sm leading-relaxed text-slate-600">
          {pkg.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Package inclusions">
          {pkg.inclusions.map((item) => (
            <li
              key={item}
              className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-[#005a31] ring-1 ring-emerald-100 sm:text-xs"
            >
              ✔ {item}
            </li>
          ))}
        </ul>

        <p className="mt-4 inline-flex items-center gap-1.5 self-start rounded bg-amber-50 px-2 py-1 text-[10px] font-bold uppercase text-amber-700 ring-1 ring-amber-200 sm:text-xs">
          🛡️ Valid till {VALID_TILL}
        </p>

        {/* Price + CTA */}
        <div className="mt-5 flex flex-col gap-3 border-t border-dashed border-slate-200 pt-4 sm:flex-row sm:items-end sm:justify-between">
          <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="priceCurrency" content="USD" />
            <meta itemProp="price" content={String(pkg.price)} />
            <span className="block text-[10px] font-bold uppercase tracking-wide text-slate-400">
              Per person from
            </span>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-xs font-bold text-slate-700">USD</span>
              <span className="text-3xl font-black leading-none tracking-tighter text-slate-900 sm:text-4xl">
                ${pkg.price}
              </span>
              <span className="text-sm font-semibold text-slate-400 line-through">${pkg.oldPrice}</span>
            </div>
            <span className="mt-1 inline-block rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-extrabold text-red-600">
              You save ${saved}
            </span>
          </div>

          <a
            href={buildWhatsAppLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get ${pkg.title} deal on WhatsApp`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-black uppercase text-white shadow-lg transition-all hover:bg-[#1ebe5b] hover:shadow-xl active:scale-95 sm:w-auto"
          >
            <WhatsAppIcon />
            Get Deal
          </a>
        </div>
      </div>
    </article>
  );
}

export default function TourPackages() {
  const [expanded, setExpanded] = useState(false);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Cheapest Tour Packages from Eammu Holidays',
    itemListElement: packages.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristTrip',
        name: p.title,
        description: p.description,
        touristType: 'Leisure',
        offers: {
          '@type': 'Offer',
          price: p.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://eammu.com/our-services/tour-packages',
        },
      },
    })),
  };

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-10 font-sans sm:px-6 sm:py-14 lg:px-8"
      aria-labelledby="tour-packages-heading"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Heading */}
      <header className="mb-10 border-l-8 border-[#005a31] pl-4 sm:mb-14 sm:pl-8">
        <span className="mb-3 inline-block rounded-full bg-red-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white sm:text-xs">
          🔥 Cheapest Offers 2026
        </span>
        <h2
          id="tour-packages-heading"
          className="text-3xl font-black uppercase leading-none tracking-tighter text-slate-900 sm:text-4xl md:text-5xl"
        >
          Cheapest Tour Packages
        </h2>
        <p className="mt-4 max-w-4xl text-sm font-medium leading-relaxed text-slate-500 sm:text-base">
          Looking for the <strong>cheapest tour packages from Bangladesh and UAE</strong>? Eammu Holidays brings
          you low-price holiday deals to <strong>Thailand, Singapore, Indonesia (Bali), Dubai, Armenia and Georgia</strong>,
          all including hotels, transfers, sightseeing and visa support. Prices start from just{' '}
          <strong className="text-[#005a31]">USD $179 per person</strong> with the{' '}
          <strong className="text-[#005a31]">best online travel agency in Bangladesh and UAE</strong>.
        </p>
      </header>

      {/* Trust strip */}
      <ul className="mb-8 grid grid-cols-2 gap-3 text-center sm:mb-10 md:grid-cols-4">
        {[
          ['💰', 'Lowest Price Guarantee'],
          ['🛂', 'Free Visa Guidance'],
          ['🏨', 'Hotels & Transfers Included'],
          ['💬', '24/7 WhatsApp Support'],
        ].map(([icon, text]) => (
          <li
            key={text}
            className="rounded-xl bg-emerald-50 px-3 py-3 text-[11px] font-bold text-[#005a31] ring-1 ring-emerald-100 sm:text-sm"
          >
            <span className="mr-1" aria-hidden="true">{icon}</span>
            {text}
          </li>
        ))}
      </ul>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {packages.map((pkg, index) => (
          <PackageCard key={pkg.id} pkg={pkg} index={index} expanded={expanded} />
        ))}
      </div>

      {/* View more / less */}
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#005a31] px-8 py-3 text-xs font-black uppercase tracking-widest text-[#005a31] shadow-sm transition-all duration-300 hover:bg-[#005a31] hover:text-white sm:px-10 sm:text-sm"
        >
          {expanded ? 'Show Less Deals' : 'View More Deals'}
          <span aria-hidden="true" className={`transition-transform ${expanded ? 'rotate-180' : ''}`}>▼</span>
        </button>

        <a
          href={buildWhatsAppLink('Hello Eammu Holidays, I want the cheapest tour package. Please send me the best offers.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs font-black uppercase text-white shadow-lg transition hover:bg-[#1ebe5b] sm:text-sm"
        >
          <WhatsAppIcon />
          Chat on WhatsApp +880 1631-312524
        </a>

        <p className="max-w-4xl text-center text-xs font-medium italic leading-relaxed text-gray-500 sm:text-sm">
          Explore cheap holiday packages, honeymoon trips, family tours and budget group travel across Asia and
          the Caucasus with Eammu Holidays. Book affordable international flights, hotels, visa assistance and
          customized tour packages to Thailand, Singapore, Bali Indonesia, Dubai, Armenia and Georgia from one of
          the leading online travel agencies in Bangladesh and the UAE, with offices in Cumilla, Dhaka, Dubai,
          Yerevan and Tbilisi.
        </p>
      </div>
    </section>
  );
}