import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Client/Header/Header";
import Footer from "@/Components/Server/Footer/Footer";
import WhatsAppFloatingButton from "@/Components/Client/WhatsAppFloatingButton/WhatsAppFloatingButton";
import Scroll from "@/Components/Client/Scroll/Scroll";



// ✅ Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Global SEO (fallback for all pages)
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Online Travel Agency in Bangladesh, Dubai & Georgia | Eammu Holiday - Visa, Tours & Umrah",
    template: "%s | Eammu Holidays",
  },

  description:
    "Eammu Holidays is a trusted global travel agency offering tourist visas, Dubai tours, Umrah packages, flight booking, and international holiday packages from Bangladesh, UAE, Armenia, and Georgia.",

  keywords: [
    "travel agency Bangladesh",
    "Dubai travel agency",
    "visa services UAE",
    "Umrah package Bangladesh",
    "tour packages from Bangladesh",
    "Georgia tour package",
    "Armenia holiday package",
    "cheap flight booking",
    "international travel agency",
    "Dubai tour package"
  ],

  authors: [{ name: "Eammu Holidays" }],
  creator: "Eammu Holidays",
  publisher: "Eammu Holidays",

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.eammu.com",
  },

  openGraph: {
    type: "website",
    url: "https://www.eammu.com",
    siteName: "Eammu Holidays",

    title:
      "Eammu Holidays | Global Visa, Tours & Travel Experts",

    description:
      "Book visas, flights, and holiday packages with Eammu Holidays. Offices in Bangladesh, Dubai, Armenia & Georgia.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Best Travel Agency in Bangladesh and Dubai",
      },
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Luxury Tour Packages Worldwide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Travel Agency | Visa, Tours & Umrah Packages",
    description:
      "Apply for visas and book tours with Eammu Holidays – trusted global travel partner.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
    shortcut: "/emf.jpg",
    apple: "/emf.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        
        {children}
        <WhatsAppFloatingButton />
        <Scroll />
        <Footer />
      </body>
    </html>
  );
}