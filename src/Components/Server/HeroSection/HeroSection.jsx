import dynamic from "next/dynamic";
import BackgroundSlider from '@/Components/Client/HeroHome/BackgroundSlider/BackgroundSlider';
import HeroButtons    from '@/Components/Client/HeroHome/HeroButtons/HeroButtons';
import TravelMenu     from '@/Components/Client/HeroHome/PremiumNavBar/TravelMenu/TravelMenu';
import Link           from 'next/link';
// PromoCard — visible above fold but non-critical for LCP
const PromoCard = dynamic(
  () => import('@/Components/Client/HeroHome/PromoCard/PromoCard'),
  { loading: () => <div className="w-full min-h-[200px] sm:min-h-[256px] animate-pulse bg-white/10 rounded-2xl" /> }
);

// BottomCarousel — below the hero, definitely lazy
const BottomCarousel = dynamic(
  () => import('@/Components/Client/HeroHome/BottomCarousel/BottomCarousel'),
  { loading: () => <div className="h-20 animate-pulse bg-gray-100 rounded-xl mx-4" /> }
);

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden font-sans">
      <div className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[50vh]
                      bg-gradient-to-br from-[#72deff] via-[#d8ffd4] to-[#f5ff9e] overflow-hidden">

        <BackgroundSlider />

        <div className="relative z-10 h-full flex flex-col">
          <TravelMenu />

          <div className="flex-1 flex items-center py-4">
            <div className="max-w-5xl mx-auto px-4 w-full flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 items-center">

              <div className="text-white text-center lg:text-left">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
  Bangladesh's Trusted Online Travel Agency <span className="text-[#ffcc00]">Since 2012</span>
</h1>
                <p className="text-sm md:text-base leading-relaxed mb-5 opacity-90">
  Eammu Holidays is a leading{' '}
  <Link href="/online-travel-agency-bangladesh" className="hover:text-[#ffcc00]">
    online travel agency in Bangladesh
  </Link>
  , specializing in visa processing, international air ticket booking, holiday
  and Umrah packages, travel insurance, hotel reservations, and Europe work
  permit support.
</p>
                <HeroButtons />
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs">
                  <span><span aria-hidden="true">🏆</span> IATA Accredited</span>
                  <span><span aria-hidden="true">📅</span> 14+ Years Experience</span>
                  <span><span aria-hidden="true">⭐</span> Google Rating 4.9/5</span>
                </div>
              </div>

              <div className="w-full flex justify-center lg:justify-end min-h-[200px] sm:min-h-[256px]">
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

export default HeroSection;