import HeroSection from "@/Components/Server/HeroSection/HeroSection";
import "./globals.css";
import FlightOfferBanner from "@/Components/Client/HeroHome/FlightOfferBanner/FlightOfferBanner";
import SpecialOffers from "@/Components/Client/HeroHome/SpecialOffers/SpecialOffers";
import PosterGallery from "@/Components/Client/HeroHome/PosterGallery/PosterGallery";
import SpecialDayBanner from "@/Components/Client/HeroHome/SpecialDayBanner/SpecialDayBanner";
import VisaServices from "@/Components/Client/HeroHome/VisaServices/VisaServices";
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
  return (
    <>
      <HeroSection />
      <SpecialDayBanner />
      <SpecialOffers />
      <FlightOfferBanner />
      <VisaServices />
      <PosterGallery />
      

    </>
  );
}