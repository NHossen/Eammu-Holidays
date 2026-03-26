import HeroSection from "@/Components/Server/HeroSection/HeroSection";
import "./globals.css";

export const metadata = {
  title: "Best Travel Agency in Bangladesh & Dubai | Visa & Tours",
  description: "Top travel agency offering visa, tours, Umrah and holiday packages",
  
  keywords: ["travel agency Bangladesh", "Dubai visa", "tour packages"],

  openGraph: {
    title: "Eammu Holidays",
    description: "Best travel services",
    url: "https://eammu.com",
    siteName: "Eammu Holidays",
    images: [
      {
        url: "/eammuicon.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
  },

  alternates: {
    canonical: "https://eammu.com",
  },
};

export default function Home() {
  return <HeroSection />;
}