'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

export default function FlightWhiteLabel() {
  
  // This effect handles the manual injection of the destination widgets
  // identical to the logic in your original HTML
  useEffect(() => {
    const injectWidgets = () => {
      const container = document.getElementById('tpwl-widget-weedles');
      if (!container) return;

      const weedleElements = container.querySelectorAll('div[is="weedle"]');
      
      weedleElements.forEach(element => {
        // Checking if the global TPWL_EXTRA variable is available from Travelpayouts script
        if (typeof window !== 'undefined' && (window as any).TPWL_EXTRA) {
          const extra = (window as any).TPWL_EXTRA;
          const destination = element.getAttribute('data-destination');
          const scriptElement = document.createElement('script');
          
          scriptElement.async = true;
          // Note: Replace [:widget_domain:] with your actual widget domain provided by Travelpayouts
          scriptElement.src = `https://web.travelpayouts.com/content?currency=${String(extra.currency).toLowerCase()}&trs=${extra.trs}&shmarker=${extra.marker}&destination=${destination}&target_host=${extra.domain}&locale=${extra.locale}&limit=6&powered_by=false&primary=%23${extra.link_color}&promo_id=4044&campaign_id=100`;
          
          element.appendChild(scriptElement);
        }
      });
    };

    // Delay slightly to ensure TPWL_EXTRA is initialized by the main embed script
    const timer = setTimeout(injectWidgets, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1. LOAD EXTERNAL SCRIPTS */}
      {/* Replace placeholders with your actual provided endpoints from Travelpayouts */}
      <Script src="https://[:embed_script_url:]" strategy="afterInteractive" />
      <Script src="https://[:cookie_policy_url:]" strategy="lazyOnload" />

      <style jsx global>{`
        :root {
          --tpwl-main-text: #333;
          --tpwl-search-result-background: #f4f7f9;
          --tpwl-search-form-background: #0c73ed;
          --tpwl-headline-text: #ffffff;
          --tpwl-links: #0c73ed;
          --tpwl-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
        }

        body { margin: 0; padding: 0; box-sizing: border-box; color: var(--tpwl-main-text); background-color: var(--tpwl-search-result-background); font-family: var(--tpwl-font-family), sans-serif; }
        .tpwl-logo-header { position: relative; color: var(--tpwl-headline-text); font-weight: 600; background-color: var(--tpwl-search-form-background); padding: 32px 100px 16px; margin-bottom: -20px; z-index: 101; background-size: cover; }
        .tpwl-logo-header h1 { font-size: 48px; margin: 0; }
        .tpwl-search-header { padding: 24px 100px; background-color: var(--tpwl-search-form-background); position: sticky; top: 0; z-index: 100; }
        .tpwl-logo__wrapper { margin-bottom: 140px; font-size: 24px; display: flex; align-items: center; gap: 12px; }
        .tpwl-logo__logo { width: 40px; height: 40px; background: no-repeat url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="%23fff" d="M17.026 2.117a3.483 3.483 0 0 1 5.021 4.828l-2.778 2.91..."></path></svg>'); }
        .tpwl-search__wrapper { display: flex; align-items: center; justify-content: center; }
        .tpwl__content { flex: 1 0 auto; max-width: 1240px; min-width: 976px; }
        .tpwl-tickets__wrapper { display: flex; align-items: center; justify-content: center; padding: 0px 100px; }
        .tpwl-widgets__wrapper { padding: 56px 100px; text-align: center; }
        .tpwl-widget-weedles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 32px; }
        
        @media (max-width: 1175px) {
          .tpwl-logo-header, .tpwl-search-header, .tpwl-tickets__wrapper, .tpwl-widgets__wrapper { padding: 20px 16px; }
          .tpwl__content { min-width: unset; }
          .tpwl-widget-weedles { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="tpwl-main-container">
        {/* HEADER SECTION */}
        <header className="tpwl-logo-header">
          <div className="tpwl-logo__wrapper">
            <div className="tpwl-logo__logo"></div>
            Flight tickets
          </div>
          <div className="tpwl-search__wrapper">
            <div className="tpwl__content">
              <h1>Your journey begins here</h1>
            </div>
          </div>
        </header>

        {/* SEARCH FORM SECTION */}
        <header className="tpwl-search-header">
          <div className="tpwl-search__wrapper">
            <div className="tpwl__content">
              <div id="tpwl-search"></div>
            </div>
          </div>
        </header>

        {/* RESULTS SECTION */}
        <main className="tpwl-main">
          <div className="tpwl-tickets__wrapper">
            <div className="tpwl__content">
              <div id="tpwl-tickets"></div>
            </div>
          </div>

          {/* DESTINATION WIDGETS */}
          <div className="tpwl-widgets__wrapper">
            <div className="tpwl__content">
              <h3>Popular destinations</h3>
              <div id="tpwl-widget-weedles" className="tpwl-widget-weedles">
                <div className="tpwl-widget-weedle" data-destination="IST" is="weedle"></div>
                <div className="tpwl-widget-weedle" data-destination="DXB" is="weedle"></div>
                <div className="tpwl-widget-weedle" data-destination="MOW" is="weedle"></div>
                <div className="tpwl-widget-weedle" data-destination="LAS" is="weedle"></div>
                <div className="tpwl-widget-weedle" data-destination="NYC" is="weedle"></div>
                <div className="tpwl-widget-weedle" data-destination="LON" is="weedle"></div>
              </div>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="tpwl-footer__wrapper" style={{ padding: '56px 100px', textAlign: 'center' }}>
          <div className="tpwl__content">
            <div className="tpwl-footer__copyright">
              Travelpayouts © 2008−{new Date().getFullYear()}
            </div>
            <div className="tpwl-footer__links" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '12px' }}>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}