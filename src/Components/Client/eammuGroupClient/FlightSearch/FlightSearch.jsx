"use client"
import React, { useState, useEffect } from 'react';

const FlightSearch = () => {
  const [activeTab, setActiveTab] = useState('flight');

  // Logic to keep the flight tab active if a search is performed (redirects back with params)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('flightSearch') || params.has('origin_iata')) {
      setActiveTab('flight');
    }
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* --- FLIGHT TAB --- */}
      {activeTab === 'flight' && (
        <div className="space-y-2 w-full text-center">

          {/* OUTER WRAPPER - Set to fixed 1500px to accommodate results */}
          <div
            className="w-full relative rounded-xl bg-white/40 overflow-hidden transition-all duration-300 ease-in-out h-[1500px] z-10"
          >

            {/* SCROLL CONTAINER (FORCES Y ONLY) */}
            <div className="w-full h-full overflow-y-auto overflow-x-hidden">

              <iframe
                src="/travelpayouts.html"
                title="Flight Search"
                scrolling="yes"
                className="w-full h-full border-0 px-4 sm:px-12"
                style={{
                  background: 'transparent',
                  display: 'block'
                }}
              />

            </div>

            {/* Overlay removed to allow immediate interaction with the widget */}

          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;