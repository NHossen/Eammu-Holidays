import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export const revalidate = 3600;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const countrySlug = searchParams.get('country_slug');
  const slug        = searchParams.get('slug');

  try {
    const client = await clientPromise;
    const db     = client.db('Eammu-Holidays');

    const query = {};
    if (countrySlug) query.country_slug = countrySlug;
    if (slug)        query.slug         = slug;

    const scholarships = await db
      .collection('scholarships')
      .find(query)
      // ✅ Keep _id so the UI ref ID works, OR remove the _id read in the UI
      .project({ _id: 0 })
      .sort({ popular: -1, scholarship_name: 1 })
      .toArray();

    return NextResponse.json(scholarships);
  } catch (err) {
    console.error('[scholarships API]', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}