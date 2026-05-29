import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "";

  if (q.length < 1) {
    return NextResponse.json({ suggestions: [] });
  }

  const BASE = process.env.EAMMU_API_URL || "https://api.eammu.com";
  const KEY  = process.env.EAMMU_API_KEY;

  try {
    const res  = await fetch(
      `${BASE}/api/v1/suggest?q=${encodeURIComponent(q)}&api_key=${KEY}`
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ suggestions: [] });
  }
}