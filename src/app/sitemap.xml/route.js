import { NextResponse } from 'next/server';
import rawVisaData from "@/app/data/countries.json";

const BASE_URL = "https://eammu.com";
const PAGE_SIZE = 40000;

export async function GET() {
  const visaData = Array.isArray(rawVisaData) ? rawVisaData : [];
  const visaCount = visaData.length;
  
  /** * আপনার আসল URL সংখ্যা অনুযায়ী হিসেব:
   * ১. ভিসা গাইড (Dest * Nat): visaCount * visaCount
   * ২. প্রসেসিং টাইম (Dest * Nat * 4): visaCount * visaCount * 4
   * ৩. অন্যান্য স্ট্যাটিক পেজ: ~৫০
   */
  // আপনার বর্তমান ক্যালকুলেশন:
const totalUrls = (visaCount * visaCount) + (visaCount * visaCount * 4) + 100;
const count = Math.ceil(totalUrls / PAGE_SIZE);
  //const totalUrls = (visaCount * visaCount) + (visaCount * visaCount * 4); 
// অতিরিক্ত +১০০ বাদ দিন অথবা নিচের মতো করে ফিক্সড সংখ্যা দিন:
//const count = 8; // যেহেতু আপনি জানেন আপনার ৭ পর্যন্ত (মোট ৮টি) ফাইল আছে

  console.log(`[INDEX] Total Estimated URLs: ${totalUrls}, Creating ${count} sitemap links.`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Array.from({ length: count }, (_, i) => `
  <sitemap>
    <loc>${BASE_URL}/sitemap/${i}.xml</loc>
  </sitemap>`).join('')}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}