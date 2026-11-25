'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VisaSearchBar from '../../HeroHome/VisaSearchBar/VisaSearchBar';

// ─── 1) Existing search bar, isolated in a client boundary ───────────────────
export function VisaSearchBox() {
  return <VisaSearchBar />;
}

// ─── 2) Region pagination ────────────────────────────────────────────────────
// `pages` is an array of ALREADY server-rendered card groups (React nodes),
// so the cards themselves ship no extra JavaScript. Only page switching is client-side.
const PILL =
  'inline-flex min-h-10 items-center rounded-lg border px-4 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005A31]';
const SMALL_LINK = 'text-xs text-[#68756D] underline underline-offset-2 hover:text-[#005A31]';

export function VisaRegionPager({ id, label, pages, featureLink }) {
  const [page, setPage] = useState(1);
  const sectionRef = useRef(null);
  const total = pages.length;

  const goTo = (n) => {
    setPage(Math.min(Math.max(n, 1), total));
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={sectionRef} id={id} aria-labelledby={`${id}-title`} className="scroll-mt-32 py-10 md:py-14">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-[#E3ECE6] pb-4">
        <h3 id={`${id}-title`} className="text-2xl font-bold text-[#17231D]">{label} Visa Services</h3>
        <div className="flex flex-wrap gap-2">
          {featureLink && (
            <Link href={featureLink.href} className={`${PILL} border-[#005A31] text-[#005A31] hover:bg-[#005A31] hover:text-white`}>
              {featureLink.label}
            </Link>
          )}
          <Link href="/travel-resources/visa-checklist-generator" className={`${PILL} border-[#E3ECE6] text-[#68756D] hover:border-[#005A31] hover:text-[#005A31]`}>
            Visa checklist
          </Link>
        </div>
      </div>

      {/* Every page stays in the HTML (crawlable); inactive pages are hidden so their lazy images never load. */}
      {pages.map((group, i) => (
        <div
          key={i}
          role="group"
          aria-label={`${label} destinations, page ${i + 1} of ${total}`}
          className={page === i + 1 ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3' : 'hidden'}
        >
          {group}
        </div>
      ))}

      {total > 1 && (
        <nav aria-label={`${label} pagination`} className="mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E3ECE6] bg-white text-[#17231D] transition hover:border-[#005A31] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i + 1)}
              aria-label={`Page ${i + 1}`}
              aria-current={page === i + 1 ? 'page' : undefined}
              className={`h-11 w-11 rounded-xl text-sm font-semibold transition ${
                page === i + 1 ? 'bg-[#005A31] text-white shadow-md' : 'border border-[#E3ECE6] bg-white text-[#17231D] hover:border-[#005A31]'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page === total}
            aria-label="Next page"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E3ECE6] bg-white text-[#17231D] transition hover:border-[#005A31] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        <Link href="/visa-rejection" className={SMALL_LINK}>{label} visa rejection rates</Link>
        <Link href="/travel-resources/visa-processing-time-tracker" className={SMALL_LINK}>{label} processing times</Link>
        <Link href="/our-services/tour-packages" className={SMALL_LINK}>{label} tour packages</Link>
      </div>
    </section>
  );
}

export default VisaRegionPager;