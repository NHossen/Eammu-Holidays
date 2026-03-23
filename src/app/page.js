// app/page.js
"use client";

import HeroSection from "@/Components/HeroSection/HeroSection";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "./globals.css";

export default function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Eammu Holidays | Home</title>
        <meta name="description" content="Welcome to Eammu Holidays" />
      </Helmet>

      <HeroSection />
    </HelmetProvider>
  );
}