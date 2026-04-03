// IMPORTANT: No 'use client' here. This is a Server Component.

// Fixed: Removed the ": Metadata" type to prevent the Build Error in .jsx files
export const metadata = {
  metadataBase: new URL('https://eammuholidays.com'),
  title: "Best Travel Agency in Bangladesh & UAE 2026 | Eammu Holidays",
  description:
    "Eammu Holidays: Top-rated IATA travel agency in Dhaka & Dubai. Expert visa assistance for USA, UK, Canada & Europe. Professional student consultancy & Umrah packages.",
  keywords: [
    "Best Travel Agency in Bangladesh",
    "Travel Agency UAE",
    "Education Consultancy Bangladesh",
    "Visa Agency Bangladesh",
    "Travel agency in dhaka",
    "Student visa Bangladesh",
    "Air ticket booking Bangladesh",
    "Holiday packages Bangladesh 2026",
    "Umrah packages 2026",
    "Work permit visa Europe from Bangladesh",
    "Visit visa UAE prices",
    "Tour operator Bangladesh",
    "Trusted travel agency near me in Dhaka",
    "Europe work permit from Bangladesh 2026"
  ],
  alternates: {
    canonical: "/online-travel-agency-bangladesh",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OnlineTravelAgencyBangladesh() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://eammuholidays.com/#organization",
        "name": "Eammu Holidays",
        "url": "https://eammuholidays.com",
        "telephone": "+8801700000000",
        "priceRange": "$$",
        "foundingDate": "2012",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dhaka Office",
          "addressLocality": "Dhaka",
          "addressCountry": "BD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "240"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best travel agency in Bangladesh for visa success?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Eammu Holidays is a leading travel agency in Bangladesh with over 14 years of experience, offering a 98% success rate for USA, UK, Canada, and Europe visas."
            }
          }
        ]
      }
    ]
  };

  // Luxury Oasis Styling
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '100px 20px', // Large gap for Header/Footer
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#1f2937',
      lineHeight: '1.7',
    },
    heroSection: {
      textAlign: 'center',
      marginBottom: '80px',
    },
    title: {
      fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
      color: '#064e3b', // Moss Green
      fontWeight: '900',
      marginBottom: '25px',
      lineHeight: '1.1',
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
      margin: '50px 0',
    },
    featureCard: {
      padding: '40px',
      borderRadius: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
      borderTop: '5px solid #d4af37', // Gold Accent
    },
    accentHeader: {
      color: '#064e3b',
      fontSize: '1.8rem',
      marginBottom: '20px',
      fontWeight: '700',
    },
    badgeRow: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      flexWrap: 'wrap',
      marginBottom: '40px',
    }
  };

  return (
    <main style={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header style={styles.heroSection}>
        <div style={styles.badgeRow}>
          <span style={{color: '#d4af37', fontWeight: 'bold'}}>★ IATA Accredited</span>
          <span style={{color: '#d4af37', fontWeight: 'bold'}}>★ 14+ Years Experience</span>
          <span style={{color: '#d4af37', fontWeight: 'bold'}}>★ Google Rating 4.9/5</span>
        </div>
        <h1 style={styles.title}>Eammu Holidays: Your Trusted Travel Partner Since 2012</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '900px', margin: '0 auto', color: '#4b5563' }}>
          Providing world-class <strong>flight bookings</strong>, <strong>global visa assistance</strong>, 
          and <strong>secure holiday planning</strong> from our offices in <strong>Dhaka, UAE, and Chittagong</strong>. 
          Experience a seamless journey with the <strong>best travel agency in Bangladesh</strong>.
        </p>
      </header>

      <article>
        <section style={{ marginBottom: '80px' }}>
          <h2 style={styles.accentHeader}>Professional Visa Assistance & Global Services</h2>
          <p>
            At Eammu Holidays, we understand that holidays are meant for relaxation and spending quality time with loved ones. 
            It is imperative to have a <strong>real professional travel planner</strong> with the infrastructure and commitment to handle your journey. 
            Our mission is to provide safe, comfortable, and memorable experiences through expert tour spot selection and secure processing.
          </p>

          <div style={styles.grid}>
            <div style={styles.featureCard}>
              <h3>USA, UK & Canada Visa</h3>
              <p>Specialized documentation and interview preparation for visit, student, and business categories with high success rates.</p>
            </div>
            <div style={styles.featureCard}>
              <h3>Europe Work Permit 2026</h3>
              <p>Reliable processing for <strong>Work permit visa Europe</strong> including Poland, Romania, and Portugal for Bangladeshi citizens.</p>
            </div>
            <div style={styles.featureCard}>
              <h3>Education Consultancy</h3>
              <p>The leading <strong>education consultancy in Bangladesh</strong>. We help students secure university admissions and visas, often without IELTS.</p>
            </div>
            <div style={styles.featureCard}>
              <h3>IATA Air Ticketing</h3>
              <p>Get the <strong>cheapest air ticket booking in Bangladesh</strong> with real-time access to global GDS and airline systems.</p>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#f9fafb', padding: '60px', borderRadius: '30px' }}>
          <h2 style={styles.accentHeader}>Why We Are the Leading Tour Operator in Bangladesh</h2>
          <p>
            Established with a view to develop sustainable tourism, Eammu Holidays has become the go-to destination for travelers seeking 
            seamless online booking. Our inbound tours provide experienced guides, standard and luxury hotels, and high-priority security. 
            Whether it’s a <strong>visit visa UAE</strong> or a <strong>Schengen visit visa</strong>, we handle every detail with transparent pricing.
          </p>
          <ul style={{ columns: 2, marginTop: '30px', fontWeight: '600' }}>
            <li>✓ Full-service Travel Management</li>
            <li>✓ 12+ Branch Network Support</li>
            <li>✓ Certified Visa Consultants</li>
            <li>✓ Personalized Tour Itineraries</li>
            <li>✓ Transparent Pricing Model</li>
            <li>✓ 24/7 Customer Support</li>
          </ul>
        </section>

        <section style={{ marginTop: '80px' }}>
          <h2 style={styles.accentHeader}>Visit Our Offices</h2>
          <p>
            As a <strong>trusted travel agency near me in Dhaka</strong>, we operate across multiple branches. 
            Our <strong>UAE office</strong> serves international clients with the best <strong>visit visa UAE prices</strong>, 
            while our Bangladesh hubs in <strong>Dhaka, Chittagong, and Cumilla</strong> handle thousands of local applications annually.
          </p>
        </section>
      </article>

      {/* Spacing for Global Footer */}
      <div style={{ height: '100px' }}></div>
    </main>
  );
}