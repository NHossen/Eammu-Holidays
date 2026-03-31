
import AboutServer from '@/Components/Server/AboutServer/AboutServer';
import React from 'react'

export const metadata = {
  title: "Travel Agency in Bangladesh | Best Education Consultancy Bangladesh",
  description: "Top travel agency offering visa, tours, Umrah and holiday packages",
  
  keywords: ["travel agency Bangladesh", "Dubai visa", "tour packages"],

  openGraph: {
    title: "Eammu Holidays",
    description: "Best travel services",
    url: "https://eammu.com/about",
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
    canonical: "https://eammu.com/about",
  },
};
export default function page() {
  return (
    <div>
     {/* AboutServer already contains AboutClient inside it with all the data */}
      <AboutServer />
      
    </div>
  )
}
