import Link from 'next/link'; // Changed from react-router-dom
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="w-full text-[#4b4b4b] font-sans pt-16">
            <div className="max-w-7xl mx-auto px-4">
                
                {/* Top Section: Trust & Logo Branding */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-100">
                    
                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-5">
                        {/* Using standard img for local public path, or Image component */}
                     <Image
  src="/eammu_holidays_Travel_agency.webp"
  alt="Trusted Travel Agency in Bangladesh for Visa, Air Tickets, and Holiday Packages"
  width={200} // adjust width as needed
  height={48} // adjust height as needed
  className="object-contain"
/>
                        <h2 className="text-xl font-bold text-[#005a31]">
                            Your Trusted Travel Partner
                        </h2>
                        <p className="text-[#696969] text-sm leading-relaxed max-w-sm">
                            Eammu Holidays is the best travel agency in Bangladesh offering domestic and 
                            international travel packages, air ticketing (IATA certified), visa support, 
                            and holiday planning.
                        </p>
                    </div>

                    {/* Certifications & Payments Combined */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Certified & Approved</h4>
                            <div className="flex flex-wrap gap-5 items-center">
                                 <Image
    src="https://www.alliancealliance.com/wp-content/uploads/2018/03/IATA-icon.png"
    alt="IATA"
    width={90}
    height={90}
    className="transition-all"
  />

  <Image
    src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/security-identity-compliance/compliance/approved/images/9f85a551-bd1b-4f4e-b831-b4e007d98a38.84c734e79f09168de3a939175a1d477caf47d179.png"
    alt="Govt"
    width={80}
    height={80}
    className="transition-all"
  />

  <Image
    src="https://i.ibb.co/3yPCJrz7/Screenshot-2025-06-26-174513.png"
    alt="Certified"
    width={70}
    height={70}
    className="transition-all"
  />

  <Image
    src="/Trustpilot_eammu_holidays.png"
    alt="Trustpilot Verified"
    width={100}
    height={100}
    className="transition-all"
  />

  <Image
    src="/google_verfied_eammu_holidays.jpg"
    alt="Google Verified"
    width={100}
    height={100}
    className="transition-all"
  />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">We Accept</h4>
                            <div className="flex flex-wrap gap-5 items-center">
                                <Image
    src="https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png"
    alt="VISA"
    width={50}
    height={50}
    className="object-contain"
  />

  <Image
    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
    alt="MasterCard"
    width={40}
    height={40}
    className="object-contain"
  />

  <Image
    src="https://www.logo.wine/a/logo/BKash/BKash-bKash-Logo.wine.svg"
    alt="bKash"
    width={60}
    height={60}
    className="object-contain"
  />

  <Image
    src="https://miro.medium.com/v2/resize:fit:1400/1*1JMzKz_LENBDkVN83qyE0Q.png"
    alt="Rocket"
    width={60}
    height={60}
    className="object-contain"
  />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Navigation Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
                    
                    {/* Column 1 */}
                    <nav className="flex flex-col space-y-3">
                        <header className="text-lg font-bold mb-2">Eammu Group</header>
                        <Link href='/eammuimmigrationservices' className="text-[#696969] hover:text-[#005a31] transition-all text-[15px]">Eammu Holidays</Link>
                        <Link href='/eammumarketing' className="text-[#696969] hover:text-[#005a31] transition-all text-[15px]">Eammu IT & Marketing</Link>
                        <Link href='/eammuevent' className="text-[#696969] hover:text-[#005a31] transition-all text-[15px]">Eammu Event Management</Link>
                        <Link href='/eammudairy' className="text-[#696969] hover:text-[#005a31] transition-all text-[15px]">Eammu Dairy & Poultry</Link>
                        <Link href='/eammufashion' className="text-[#696969] hover:text-[#005a31] transition-all text-[15px]">Eammu Fashion</Link>
                        <Link href='/eammutextile' className="text-[#696969] hover:text-[#005a31] transition-all text-[15px]">Eammu Textile & Industry</Link>
                        <Link href='/flyzoo' className="text-[#005a31] font-semibold text-[15px]">Flyzoo</Link>
                    </nav>

                    {/* Column 2 */}
                    <nav className="flex flex-col space-y-3">
                        <header className="text-lg font-bold mb-2">Useful Links</header>
                        <Link href='/eammu-social-responsibility' className="text-[#696969] hover:text-[#005a31] transition-all text-[15px]">Social Responsibility</Link>
                        <Link href='/eammunewsfeeds' className="text-[#696969] hover:text-[#005a31] transition-all text-[15px]">Newsfeeds</Link>
                        <Link href='/messagefromleadingteam' className="text-[#696969] hover:text-[#005a31] transition-all text-[15px]">Our Leading Team</Link>
                        <Link href='/careers' className="text-[#696969] hover:text-[#005a31] transition-all text-[15px]">Careers</Link>
                        <Link href='/eammuterms' className="text-[#696969] hover:text-[#005a31] transition-all text-[15px]">Privacy Policy</Link>
                        <Link href='/whychoiceeammu' className="text-[#696969] hover:text-[#005a31] transition-all text-[15px]">Why Choose Us</Link>
                    </nav>

                    {/* Column 3 */}
                    <nav className="flex flex-col space-y-3">
                        <header className="text-lg font-bold mb-2">Social Media</header>
                        <a href="https://www.facebook.com/eammutourism" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline text-[15px]">Facebook</a>
                        <a href="https://www.youtube.com/@Eammutour" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline text-[15px]">Youtube</a>
                        <a href="https://linkedin.com/company/eammu-immigration-services" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-[15px]">LinkedIn</a>
                        <a href="https://instagram.com/eammuholidays" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:underline text-[15px]">Instagram</a>
                    </nav>

                    {/* Column 4: Newsletter & Auth */}
                    <div className="flex flex-col">
                        <header className="text-lg font-bold mb-4">Newsletter</header>
                        <div className="flex flex-col gap-4">
                            <div className="join w-full border border-gray-200 rounded-lg overflow-hidden">
                                <input 
                                    type="text" 
                                    placeholder="info@eammu.com" 
                                    className="input bg-transparent border-none join-item w-full focus:outline-none px-3 h-12" 
                                />
                                <button className="btn bg-[#005a31] text-white border-none join-item px-4 h-12">Go</button>
                            </div>
                            <div className="flex gap-2">
                                <Link href='/login' className="flex-1 text-center py-2 text-sm border border-[#005a31] text-[#005a31] rounded-md hover:bg-[#005a31] hover:text-white transition-all">Log in</Link>
                                <Link href='/signup' className="flex-1 text-center py-2 text-sm bg-[#005a31] text-white rounded-md hover:bg-black transition-all">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-100 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-[#696969]">
                        © 2022 <Link href="https://eammu.com/" className="font-bold text-[#005a31] hover:underline">Eammu</Link>. All rights reserved.
                    </p>
                    <h1 className="text-[#005a31] text-xl font-medium tracking-tight italic">
                        Something New..!
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;