
import BackgroundSlider from '@/Components/Client/HeroHome/BackgroundSlider/BackgroundSlider';
import BottomCarousel from '@/Components/Client/HeroHome/BottomCarousel/BottomCarousel';
import HeroButtons from '@/Components/Client/HeroHome/HeroButtons/HeroButtons';
import PremiumNavBar from '@/Components/Client/HeroHome/PremiumNavBar/PremiumNavBar';
import PromoCard from '@/Components/Client/HeroHome/PromoCard/PromoCard';


const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden font-sans">
      <div className="relative w-full bg-linear-to-br from-[#72deff] via-[#d8ffd4] to-[#f5ff9e] overflow-hidden">
        
        <BackgroundSlider />

        <div className="relative z-10 min-h-130 sm:min-h-150 lg:min-h-[50vh] flex flex-col">
          <PremiumNavBar />

          <div className="flex-1 flex items-center py-4">
            <div className="max-w-5xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

              {/* LEFT SIDE: Text & Buttons (SEO Friendly) */}
              <div className="text-white text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Your Trusted Travel Partner <br />
                  to the World <span className="text-[#ffcc00]">Since 2012</span>
                </h1>

                <p className="text-sm md:text-base leading-relaxed mb-5 opacity-90">
                  Eammu Holidays is a leading <a href="/online-travel-agency-bangladesh">online travel agency in Bangladesh</a> - offering flight bookings, worldwide visa assistance, Holiday Tour Packages, and exciting desert safari tours. With expert guidance, we make international travel simple, affordable, and hassle-free
                </p>

                {/* Animated Buttons (Client Part) */}
                <HeroButtons />

                <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs">
                  <span>🏆 IATA Accredited</span>
                  <span>📅 14+ Years Experience</span>
                  <span>⭐ Google Rating 4.9/5</span>
                </div>
              </div>

              {/* RIGHT SIDE: Promo Card (Client Part) */}
              <div className="w-full flex justify-center lg:justify-end">
                <PromoCard />
              </div>

            </div>
          </div>
        </div>
      </div>

      <BottomCarousel />
    </div>
  );
};

// এই লাইনটি নিশ্চিত করুন:
export default HeroSection;