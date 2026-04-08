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
  title: {
    default: "Eammu Holidays | Travel Agency",
    template: "%s | Eammu Holidays",
  },
  description:
    "Best travel agency for visa, Dubai tours, Thailand packages, and holiday deals.",
  keywords: [
    "travel agency",
    "Dubai visa",
    "Bangladesh travel agency",
    "tour packages",
  ],
  metadataBase: new URL("https://yourdomain.com"), // change domain

  openGraph: {
    title: "Eammu Holidays",
    description: "Best travel agency services",
    url: "https://yourdomain.com",
    siteName: "Eammu Holidays",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },

  alternates: {
    canonical: "https://yourdomain.com",
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