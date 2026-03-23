import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import WhatsAppFloatingButton from "@/Components/WhatsAppFloatingButton/WhatsAppFloatingButton";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <WhatsAppFloatingButton />
        <Footer />
      </body>
    </html>
  );
}