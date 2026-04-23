// app/sitemap.js — Root sitemap
//
// Next.js automatically discovers all sitemap files in /app that follow
// the naming convention:  sitemap.js | sitemap-N.js
//
// This file handles the root /sitemap.xml which Google uses as the entry point.
// It re-exports the static+student+slug routes from sitemap-1.js so that
// /sitemap.xml itself is valid and crawlable.
//
// Full sitemap index served by Next.js:
//   /sitemap.xml         ← this file  (static + studentVisa + visaSlug)
//   /sitemap/1.xml       ← sitemap-1.js (same content, explicit)
//   /sitemap/2.xml       ← sitemap-2.js id=0  (visaGuide pages 1–50000)
//   /sitemap/2.xml?id=1  ← sitemap-2.js id=1  (visaGuide pages 50001–90000)
//   /sitemap/3.xml       ← sitemap-3.js id=0  (processingTime pages 1–50000)
//   /sitemap/3.xml?id=1  ← sitemap-3.js id=1  (processingTime pages 50001–90000)
//
// NOTE: rawStudentVisaData (studentvisadata.json) is NOT imported anywhere —
//       it was unused. All slug generation uses countries.json only.

export { default } from "@/app/sitemap-1";