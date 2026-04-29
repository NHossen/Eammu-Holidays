import connectDB from "@/app/lib/db";
import mongoose from "mongoose";
import countries from "@/app/data/countries.json";
import touristData from "@/app/data/visadata.json";
import studentData from "@/app/data/studentvisadata.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const collection = mongoose.connection.collection("visas");
    await collection.deleteMany({});

    const migrationData = countries.map((c) => {
      // Create the clean lookup key (e.g., "japan")
      const lookupKey = c.country.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
      
      return {
        name: c.country,
        image: c.flag,
        countryCode: c.code,
        // Match the field names used in the API search logic
        tourist_slug: `${lookupKey}-visa-application`,
        student_slug: `${lookupKey}-student-visa`,
        // Attach the full data objects
        tourist_details: touristData[lookupKey] || null,
        student_details: studentData[lookupKey] || null,
      };
    });

    await collection.insertMany(migrationData);
    return NextResponse.json({ success: true, count: migrationData.length });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}