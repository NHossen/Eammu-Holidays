const PosterCard = ({ image, badge, title, detail }) => (
  <div className="relative rounded-3xl overflow-hidden aspect-square group cursor-pointer shadow-md">
    <Image src={image} alt={title} fill className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
    <div className="absolute top-4 left-4"><span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">{badge}</span></div>
    <div className="absolute bottom-6 left-6"><h3 className="text-white font-black text-xl leading-tight uppercase">{title}</h3><p className="text-orange-400 font-bold text-xs uppercase tracking-widest">{detail}</p></div>
  </div>
);

const PosterCard = ({ image, badge, title, detail }) => (
  <div className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-md bg-gray-100" 
       style={{ aspectRatio: '1 / 1' }}> {/* Force the 1:1 ratio */}
    <Image 
      src={image} 
      alt={title} 
      fill 
      priority
      sizes="(max-width: 768px) 100vw, 25vw"
      className="object-cover group-hover:scale-110 transition-transform duration-700 z-0" 
    />
    
    {/* Ensure overlays are z-indexed above the image */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none z-10" />
    
    <div className="absolute top-4 left-4 z-20">
      <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
        {badge}
      </span>
    </div>
    
    <div className="absolute bottom-6 left-6 z-20">
      <h3 className="text-white font-black text-xl leading-tight uppercase">{title}</h3>
      <p className="text-orange-400 font-bold text-xs uppercase tracking-widest">{detail}</p>
    </div>
  </div>
);