'use client';

import React from 'react';
import Script from 'next/script';

const FlightSearch = () => {
  return (
    <main className="eammu-next-container">
      {/* 1. CONFIGURATION: Must load before the main script */}
      <Script id="tpwl-config" strategy="afterInteractive">
        {`
          window.TPWL_CONFIGURATION = {
            resultsURL: window.location.origin + window.location.pathname,
            currency: "BDT",
            locale: "en",
            marker: "719255"
          };
        `}
      </Script>

      {/* 2. ENGINE SCRIPT: Uses your correct ID 719255 */}
      <Script 
        src="https://tpwidg.com/wl_web/main.js?wl_id=719255"
        strategy="afterInteractive"
        type="module"
      />

      <style jsx>{`
        .eammu-next-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          min-height: 100vh;
        }

        /* Forces Next.js/Tailwind to show the widget correctly */
        #tpwl-search, #tpwl-tickets {
          display: block !important;
          width: 100% !important;
          min-height: 200px;
        }

        /* Ensures photos have full width/height in the tickets box */
        #tpwl-tickets {
          min-height: 600px;
          margin-top: 30px;
        }

        .search-title {
          text-align: center;
          margin-bottom: 30px;
          font-size: 2rem;
          font-weight: bold;
          color: #004d40;
        }
        
        /* Fixes the Next.js body overflow bug */
        :global(body) {
          overflow: auto !important;
          height: auto !important;
        }
      `}</style>

      <h1 className="search-title">Your Journey Begins Here</h1>

      <div id="tpwl-search"></div>
      
      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />
      
      <div id="tpwl-tickets"></div>
    </main>
  );
};

export default FlightSearch;