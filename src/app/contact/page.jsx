

import ContactWithUs from '@/Components/Client/ContactWithUs/ContactWithUs'
import React from 'react'

export const metadata = {
  title: 'Contact Eammu Holidays | Global Visa & Travel Support',
  description: 'Reach Eammu Holidays for expert visa assistance and travel planning. Visit our offices in Cumilla (Bangladesh), Dubai (UAE), Yerevan (Armenia), and Tbilisi (Georgia).',
  keywords: [
    'Contact Eammu Holidays',
    'Travel Agency Cumilla Bangladesh',
    'Visa Support Dubai Business Bay',
    'Travel Agency Yerevan Armenia',
    'Tbilisi Georgia Travel Office',
    'Apply for Canada Visa Bangladesh',
    'USA Visa support Cumilla'
  ],
  alternates: {
    canonical: 'https://eammu.com/contact',
  },
  openGraph: {
    title: 'Contact Eammu Holidays – Global Office Locations',
    description: 'Connect with our travel experts in Bangladesh, UAE, Armenia, and Georgia for 24/7 visa and tour support.',
    url: 'https://eammu.com/contact',
    siteName: 'Eammu Holidays',
    images: [
      {
        url: 'https://eammu.com/sylhet_eammu.webp', 
        width: 1200,
        height: 630,
        alt: 'Eammu Holidays Global Contact Center',
      },
    ],
    type: 'website',
  },
};

export default function page() {
  return (
    <div>
      <ContactWithUs />
    </div>
  )
}
