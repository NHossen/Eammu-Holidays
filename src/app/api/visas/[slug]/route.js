import connectDB from "@/app/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = await params;
  
  try {
    await connectDB();
    const collection = mongoose.connection.collection("visas");

    // This search will now find the documents because the 
    // migration script above created these specific fields.
    const visa = await collection.findOne({
      $or: [
        { tourist_slug: slug },
        { student_slug: slug }
      ]
    });

    if (!visa) {
      return NextResponse.json({ error: "Not found", askedFor: slug }, { status: 404 });
    }

    return NextResponse.json(visa);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}