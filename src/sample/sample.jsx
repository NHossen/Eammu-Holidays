{/* ================= NAVBAR ================= */}
<nav className="fixed top-[36px] left-0 w-full z-50 glass-liquid-water transition-all duration-300">
  {/* 1. glass-liquid-water is now on the full-width nav.
      2. Container below handles centering the logo and links.
  */}
  <div className="max-w-7xl mx-auto px-4 h-16 sm:h-16 flex items-center justify-between">
    
    {/* Logo Section */}
    <div className="flex items-center gap-4">
      <button 
        onClick={() => setMobileMenuOpen(true)}
        className="lg:hidden p-2 text-[#005a31] hover:bg-white/20 rounded-full transition-colors"
      >
        <Menu size={28} />
      </button>
      <Link href="/" className="relative h-[45px] w-[130px] sm:h-[50px] sm:w-[150px]">
        <Image
          src="/eammu_logo.webp"
          alt="Eammu Holidays Logo"
          fill
          priority
          className="object-contain object-left" 
        />
      </Link>
    </div>

    {/* Premium Desktop Menu - Inner Glass Pill */}
    <div className="hidden lg:flex items-center gap-1 p-1.5">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.path}
            href={item.path}
            className={`relative px-8 py-2.5 text-sm font-bold transition-all duration-500 rounded-full group flex items-center justify-center ${
              isActive ? "text-gray-900" : "text-[#ffcc00] hover:text-gray-900"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="nav-border"
                className="absolute inset-0 rounded-full p-[1.8px] overflow-hidden" 
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="absolute inset-[-150%] z-0"
                  style={{
                    background: "conic-gradient(from 0deg, #34A853, #FBBC05, white, #34A853)",
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-[1.8px] bg-white rounded-full z-[1]" />
              </motion.div>
            )}
            <span className="relative z-10 tracking-wide uppercase text-[11px] font-extrabold">
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>

    {/* CTA Button */}
    <div className="flex items-center">
      <Link 
        href="/testimonials"
        className="relative flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm text-white shadow-lg bg-gradient-to-r from-[#005a31] via-[#00a45a] to-[#005a31] bg-[length:200%_auto] hover:bg-right transition-all duration-500 overflow-hidden"
      >
        <span className="relative z-10">Book Now</span>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        />
      </Link>
    </div>
  </div>
</nav>