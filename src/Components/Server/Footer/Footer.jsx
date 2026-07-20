"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// TODO: move this to a shared data file (e.g. @/app/data/offices.js) and import it
// into Footer.jsx and any other component that needs office details.
const offices = [
    {
        holding: "Eammu Holidays - United States of America",
        name: "Eammu Holidays - Headquarters, New York",
        flag: "🇺🇸",
        badge: "Headquarters",
        accent: "#2563eb", // blue
        address: "New York, United States of America",
        hours: "Mon–Fri: 9AM–6PM (EST)",
        // Paste the link you copied from Google Maps "Share" here
        mapLink: "https://maps.app.goo.gl/iTW2XsRCHqMq47hi7",
    },
    {
        holding: "Eammu Holidays - Bangladesh",
        name: "Eammu Holidays - Cumilla Branch",
        flag: "🇧🇩",
        badge: "Headquarters",
        accent: "#005a31", // brand green
        address: "Office No-178, 1st Floor, Gomoti Tower, Cantonment, Cumilla, Bangladesh",
        hours: "Sun–Thu: 9AM–9PM (BD Time)",
        // Paste the link you copied from Google Maps "Share" here
        mapLink: "https://maps.app.goo.gl/sgbsHeeDCQkk6xvn7",
    },
    {
        holding: "Eammu Holidays - Bangladesh",
        name: "Eammu Holidays - Dhaka Branch",
        flag: "🇧🇩",
        badge: "Branch Office",
        accent: "#005a31",
        address: "Our Dhaka office is currently under renovation.",
        hours: "Sun–Thu: 9AM–9PM (BD Time)",
        // Paste the link you copied from Google Maps "Share" here
        mapLink: "https://maps.app.goo.gl",
    },
    {
        holding: "Eammu Holidays - UAE",
        name: "Eammu Holidays - Dubai Branch",
        flag: "🇦🇪",
        badge: "Middle East Office",
        accent: "#b45309", // amber
        address: "Shop No 3/ Al Nasser Building, Dubai, United Arab Emirates",
        hours: "Sun–Thu: 9AM–6PM (GST)",
        // Paste the link you copied from Google Maps "Share" here
        mapLink: "https://maps.app.goo.gl/S9d4brsF5eWjJRKD7",
    },
    {
        holding: "Eammu Holidays - Armenia",
        name: "Eammu Holidays - Yerevan Branch",
        flag: "🇦🇲",
        badge: "Europe Hub",
        accent: "#7c3aed", // violet
        address: "Lambron 39, Yerevan, Armenia",
        hours: "Mon–Fri: 9AM–6PM (YERT)",
        // Paste the link you copied from Google Maps "Share" here
        mapLink: "https://maps.app.goo.gl/btAxXjZGKM1xEgqZ8",
    },
    {
        holding: "Eammu Holidays - Georgia",
        name: "Eammu Holidays - Tbilisi Branch",
        flag: "🇬🇪",
        badge: "Caucasus Office",
        accent: "#be123c", // rose
        address: "Floor 5, Levan Gotua Street #3, Tbilisi, Georgia",
        hours: "Mon–Fri: 9AM–6PM (GET)",
        // Paste the link you copied from Google Maps "Share" here
        mapLink: "https://maps.app.goo.gl/jvfYo9RTB2QuTejD9",
    },
];

const PinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0" aria-hidden="true">
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
    </svg>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: string }
    const timeoutRef = useRef(null);

    const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const showToast = (type, message) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setToast({ type, message });
        timeoutRef.current = setTimeout(() => setToast(null), 3500);
    };

    const handleSubscribe = () => {
        if (!isValidEmail(email)) {
            showToast('error', 'Please enter a valid email address.');
            return;
        }
        // TODO: wire this up to your actual newsletter provider / API route
        showToast('success', `Subscribed! We'll send updates to ${email}.`);
        setEmail('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSubscribe();
    };

    return (
        <div className="w-full text-[#4b4b4b] font-sans pt-6 relative">

            {/* Toast notification */}
            <div
                className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
                    toast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
                }`}
                role="status"
                aria-live="polite"
            >
                {toast && (
                    <div
                        className={`flex items-start gap-3 rounded-xl shadow-lg border px-4 py-3.5 max-w-sm bg-white ${
                            toast.type === 'success' ? 'border-emerald-200' : 'border-red-200'
                        }`}
                    >
                        <span className={toast.type === 'success' ? 'text-emerald-600' : 'text-red-600'}>
                            {toast.type === 'success' ? <CheckIcon /> : <AlertIcon />}
                        </span>
                        <div>
                            <p className="text-sm font-semibold text-[#1a1a1a]">
                                {toast.type === 'success' ? 'Subscribed' : 'Something went wrong'}
                            </p>
                            <p className="text-sm text-[#696969] mt-0.5">{toast.message}</p>
                        </div>
                        <button
                            onClick={() => setToast(null)}
                            aria-label="Dismiss notification"
                            className="ml-2 text-gray-300 hover:text-gray-500 transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                )}
            </div>

            <div className="max-w-7xl mx-auto px-4">

                {/* Top Section: Trust & Logo Branding */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-100">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-5">
                        <Image
                            src="/eammu_holidays_Travel_agency.webp"
                            alt="Trusted Travel Agency in Bangladesh for Visa, Air Tickets, and Holiday Packages"
                            width={200}
                            height={48}
                            className="object-contain"
                        />

                        <h2 className="text-md font-bold text-[#005a31]">
                           Online Travel Agency (OTA) in Bangladesh
                     </h2>

                        <p
                            itemScope
                            itemType="https://schema.org/TravelAgency"
                            className="text-[#696969] text-sm leading-relaxed max-w-sm"
                        >
                            <meta itemProp="name" content="Eammu Holidays" />
                            Eammu Holidays is the online travel agency in Bangladesh offering domestic and
                            international travel packages, air ticketing (IATA certified), visa support,
                            and holiday planning. Reach us at{' '}
                            <a
                                href="mailto:info@eammu.com"
                                itemProp="email"
                                className="text-[#005a31] font-medium hover:underline"
                            >
                                info@eammu.com
                            </a>{' '}
                            or call{' '}
                            <a
                                href="tel:+8801631312524"
                                itemProp="telephone"
                                className="text-[#005a31] font-medium hover:underline"
                            >
                                +880 1631-312524
                            </a>.
                        </p>
                    </div>

                    {/* Certifications & Payments Combined */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
                                Certified & Approved
                            </h4>
                            <div className="flex flex-wrap gap-5 items-center">
                                <Image
                                    src="https://www.alliancealliance.com/wp-content/uploads/2018/03/IATA-icon.png"
                                    alt="IATA Approved Travel Agency Bangladesh"
                                    width={90}
                                    height={90}
                                    className="transition-all"
                                />
                                <Image
                                    src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/security-identity-compliance/compliance/approved/images/9f85a551-bd1b-4f4e-b831-b4e007d98a38.84c734e79f09168de3a939175a1d477caf47d179.png"
                                    alt="Government Approved Travel Agency in Bangladesh"
                                    width={80}
                                    height={80}
                                    className="transition-all"
                                />
                                <Image
                                    src="https://i.ibb.co/3yPCJrz7/Screenshot-2025-06-26-174513.png"
                                    alt="Certified travel agency in Bangladesh"
                                    width={70}
                                    height={70}
                                    className="transition-all"
                                />
                                <Image
                                    src="/Trustpilot_eammu_holidays.png"
                                    alt="Trustpilot Verified Travel Agency in Bangladesh for Visa, Air Tickets, and Holiday Packages"
                                    width={100}
                                    height={100}
                                    className="transition-all"
                                />
                                <Image
                                    src="/google_verfied_eammu_holidays.jpg"
                                    alt="Google Verified Travel Agency in Bangladesh for Visa, Air Tickets, and Holiday Packages"
                                    width={100}
                                    height={100}
                                    className="transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
                                We Accept
                            </h4>
                            <div className="flex flex-wrap gap-5 items-center">
                                <Image
                                    src="https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png"
                                    alt="VISA Payment Method Accepted by Eammu Holidays - Trusted Travel Agency in Bangladesh"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                                    alt="MasterCard Payment Method Accepted by Eammu Holidays - Trusted Travel Agency in Bangladesh"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                                <Image
                                    src="https://www.logo.wine/a/logo/BKash/BKash-bKash-Logo.wine.svg"
                                    alt="bKash Payment Method Accepted by Eammu Holidays - Trusted Travel Agency in Bangladesh"
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                />
                                <Image
                                    src="https://miro.medium.com/v2/resize:fit:1400/1*1JMzKz_LENBDkVN83qyE0Q.png"
                                    alt="Rocket Payment Method Accepted by Eammu Holidays - Trusted Travel Agency in Bangladesh"
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Navigation Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10">

                    {/* Column 1 */}
                    <nav className="flex flex-col space-y-3" aria-label="Eammu Group companies">
                        <header className="text-lg font-bold mb-2">Eammu Group</header>
                        <Link href="/" className="w-fit text-[#696969] hover:text-[#005a31] transition-all text-[15px] border-b border-transparent hover:border-[#005a31]">
                            Eammu Holidays
                        </Link>
                        <Link href="/web-development-digital-marketing" className="w-fit text-[#696969] hover:text-[#005a31] transition-all text-[15px] border-b border-transparent hover:border-[#005a31]">
                            Eammu IT & Marketing
                        </Link>
                        <Link href="/event-management" className="w-fit text-[#696969] hover:text-[#005a31] transition-all text-[15px] border-b border-transparent hover:border-[#005a31]">
                            Eammu Event Management
                        </Link>
                        <Link href="/eammu-dairy-poultry" className="w-fit text-[#696969] hover:text-[#005a31] transition-all text-[15px] border-b border-transparent hover:border-[#005a31]">
                            Eammu Dairy & Poultry
                        </Link>
                        <Link href="/eammu-fashion" className="w-fit text-[#696969] hover:text-[#005a31] transition-all text-[15px] border-b border-transparent hover:border-[#005a31]">
                            Eammu Fashion
                        </Link>
                        <Link href="/eammu-textile-bangladesh" className="w-fit text-[#696969] hover:text-[#005a31] transition-all text-[15px] border-b border-transparent hover:border-[#005a31]">
                            Eammu Textile & Industry
                        </Link>
                    </nav>

                    {/* Column 2 */}
                    <nav className="flex flex-col space-y-3" aria-label="Useful links">
                        <header className="text-lg font-bold mb-2">Useful Links</header>
                        <Link href="/eammu-social-responsibility" className="w-fit text-[#696969] hover:text-[#005a31] transition-all text-[15px] border-b border-transparent hover:border-[#005a31]">
                            Social Responsibility
                        </Link>
                        <Link href="/news-feeds" className="w-fit text-[#696969] hover:text-[#005a31] transition-all text-[15px] border-b border-transparent hover:border-[#005a31]">
                            Newsfeeds
                        </Link>
                        <Link href="/our-leading-team" className="w-fit text-[#696969] hover:text-[#005a31] transition-all text-[15px] border-b border-transparent hover:border-[#005a31]">
                            Our Leading Team
                        </Link>
                        <Link href="/careers" className="w-fit text-[#696969] hover:text-[#005a31] transition-all text-[15px] border-b border-transparent hover:border-[#005a31]">
                            Careers
                        </Link>
                        <Link href="/terms-privacy-policy" className="w-fit text-[#696969] hover:text-[#005a31] transition-all text-[15px] border-b border-transparent hover:border-[#005a31]">
                            Privacy Policy
                        </Link>
                        <Link href="/travel-resources" className="w-fit text-[#696969] hover:text-[#005a31] transition-all text-[15px] border-b border-transparent hover:border-[#005a31]">
                            Travel Resources
                        </Link>
                    </nav>

                    {/* Column 3 */}
                    <nav className="flex flex-col space-y-3" aria-label="Social media">
                        <header className="text-lg font-bold mb-2">Social Media</header>
                        <a
                            href="https://www.facebook.com/eammutourism"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Eammu Holidays on Facebook"
                            className="w-fit text-[#696969] hover:text-blue-700 transition-all text-[15px]"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://www.youtube.com/@Eammutour"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Eammu Holidays on YouTube"
                            className="w-fit text-[#696969] hover:text-red-600 transition-all text-[15px]"
                        >
                            Youtube
                        </a>
                        <a
                            href="https://linkedin.com/company/eammu-immigration-services"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Eammu Holidays on LinkedIn"
                            className="w-fit text-[#696969] hover:text-blue-800 transition-all text-[15px]"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://instagram.com/eammuholidays"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Eammu Holidays on Instagram"
                            className="w-fit text-[#696969] hover:text-pink-700 transition-all text-[15px]"
                        >
                            Instagram
                        </a>
                    </nav>

                    {/* Column 4: Newsletter */}
                    <div className="flex flex-col">
                        <header className="text-lg font-bold mb-2">Newsletter</header>
                        <p className="text-[#696969] text-sm leading-relaxed mb-4">
                            Get travel deals and updates in your inbox.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex w-full border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#005a31] transition-colors">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="info@eammu.com"
                                    aria-label="Email address for newsletter"
                                    className="bg-transparent border-none w-full focus:outline-none px-3 h-12 text-sm"
                                />
                                <button
                                    onClick={handleSubscribe}
                                    className="bg-[#005a31] hover:bg-[#00794a] text-white border-none px-5 h-12 text-sm font-semibold transition-colors"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Office Locations Section */}
                <div className="border-t border-gray-100 py-16">
                    <div className="flex items-baseline justify-between flex-wrap gap-2 mb-8">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                            Our Global Offices
                        </h4>
                        <span className="text-xs text-gray-400">
                            {offices.length} locations worldwide
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {offices.map((office) => (
                            <div
                                key={office.name}
                                className="flex flex-col rounded-xl border border-gray-100 bg-white p-5 transition-shadow duration-200 hover:shadow-md"
                                style={{ borderLeft: `3px solid ${office.accent}` }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xl leading-none">{office.flag}</span>
                                    <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                                        {office.badge}
                                    </span>
                                </div>

                                <span className="text-[11px] font-semibold uppercase tracking-wide text-[#005a31] mb-1">
                                    {office.holding.replace('Eammu Holidays - ', '')}
                                </span>

                                <h5 className="text-[#1a1a1a] font-bold text-[15px] leading-snug mb-2">
                                    {office.name}
                                </h5>

                                <p className="text-[#696969] text-sm leading-relaxed mb-2 flex-1">
                                    {office.address}
                                </p>
                                <a
                                    href={office.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline w-fit"
                                    style={{ color: office.accent }}
                                >
                                    <PinIcon />
                                    View on Google Maps
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Disclaimer Section */}
                <div className="border-t border-gray-100 py-10">
                    <div className="bg-white rounded-xl border border-gray-100 p-5">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">
                            Disclaimer
                        </h4>
                        <p className="text-[#696969] text-sm leading-relaxed max-w-7xl">
                            Eammu Holidays is an independent consultancy and is not affiliated with any
                            government, embassy, or immigration authority. Visa rules and requirements
                            change frequently; while we strive for accuracy, we cannot guarantee the
                            completeness or finality of any information provided. Eammu Holidays provides
                            professional guidance and documentation support only. We do not issue visas or
                            make travel decisions. All visa approvals remain at the sole discretion of the
                            respective government authorities, and success is not guaranteed.
                        </p>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-100 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-[#696969]">
                        © {currentYear}{' '}
                        <Link href="https://eammu.com/" className="font-bold text-[#005a31] hover:underline">
                            Eammu
                        </Link>
                        . All rights reserved.
                    </p>
                    <p className="text-[#005a31] text-xl font-medium tracking-tight italic">
                        Something New..!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;