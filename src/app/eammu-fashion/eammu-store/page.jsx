"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaShoppingCart, FaTrash, FaPlus, FaBolt, FaChevronLeft, FaChevronRight,
  FaStar, FaRegHeart, FaShoppingBag, FaLaptop, FaTshirt, FaMagic
} from "react-icons/fa";

// 🛍️ Expanded Multi-Sector Product Database
const allProducts = [
  // --- MENS FASHION ---
  { id: 1, sector: "Fashion", name: "Premium Oversized Hoodie - Jet Black", price: 1450, oldPrice: 1850, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500", rating: 4.8 },
  { id: 2, sector: "Fashion", name: "Essential Half Sleeve T-Shirt (Pack of 3)", price: 990, oldPrice: 1350, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", rating: 4.9 },
  { id: 3, sector: "Fashion", name: "Slim Fit Chino Pants - Khaki", price: 1200, oldPrice: 1600, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500", rating: 4.5 },
  
  // --- TECH & COMPUTER PARTS ---
  { id: 4, sector: "Tech", name: "Samsung 980 Pro 500GB NVMe SSD", price: 6800, oldPrice: 7500, image: "https://image-us.samsung.com/SamsungUS/home/computing/memory-storage/solid-state-drives/06022025/MZ-V8V500BW_001_Front_Black.jpg?$product-details-jpg$", rating: 5.0 },
  { id: 5, sector: "Tech", name: "Mechanical RGB Gaming Keyboard", price: 3200, oldPrice: 4000, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500", rating: 4.7 },
  { id: 6, sector: "Tech", name: "Logitech G502 Hero Gaming Mouse", price: 4500, oldPrice: 5200, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500", rating: 4.9 },
  
  // --- WOMENS COSMETICS ---
  { id: 7, sector: "Cosmetics", name: "Long-Lasting Matte Red Lipstick", price: 750, oldPrice: 950, image: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?w=500", rating: 4.6 },
  { id: 8, sector: "Cosmetics", name: "Natural Skin Glow Serum (30ml)", price: 1200, oldPrice: 1600, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500", rating: 4.8 },
  { id: 9, sector: "Cosmetics", name: "Waterproof Eye Liner Pen - Deep Black", price: 450, oldPrice: 600, image: "https://m.media-amazon.com/images/I/61t4jrIjciL._SL1500_.jpg", rating: 4.4 },

  // --- EXTRA PRODUCTS FOR PAGINATION ---
  { id: 10, sector: "Fashion", name: "Classic Denim Jacket - Ocean Blue", price: 2200, oldPrice: 2800, image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500", rating: 4.7 },
  { id: 11, sector: "Tech", name: "16GB DDR4 RAM 3200MHz Corsair", price: 5500, oldPrice: 6200, image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=500", rating: 4.9 },
  { id: 12, sector: "Cosmetics", name: "Hydrating Night Cream", price: 1800, oldPrice: 2200, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500", rating: 4.8 }
];

const EammuStore = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans my-16">

      {/* 🧭 Professional Relative Navbar */}
      <nav className="relative z-[30] bg-white border-b border-slate-100 py-6 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-10">
            <h1 className="text-2xl font-black text-[#005a31] tracking-tighter uppercase italic">
              Eammu<span className="text-orange-500">Store</span>
            </h1>
            <div className="hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
               <a href="#" className="hover:text-[#005a31] transition-colors">Mens Fashion</a>
               <a href="#" className="hover:text-[#005a31] transition-colors">Tech Parts</a>
               <a href="#" className="hover:text-[#005a31] transition-colors">Cosmetics</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <button onClick={() => setIsCartOpen(true)} className="relative p-3.5 bg-[#005a31] text-white rounded-[1.2rem] hover:bg-orange-500 transition-all shadow-xl shadow-green-900/10">
                <FaShoppingCart size={20} />
                {cart.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-orange-500 border-2 border-white text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                    {cart.length}
                  </span>
                )}
             </button>
          </div>
        </div>
      </nav>

      {/* 🏷️ Sector Icons / Quick Access */}
      <section className="bg-white py-8 border-b border-slate-50">
        <div className="container mx-auto flex justify-center gap-10 md:gap-24 px-6">
           <SectorIcon icon={<FaTshirt />} label="Fashion" />
           <SectorIcon icon={<FaLaptop />} label="Tech" />
           <SectorIcon icon={<FaMagic />} label="Cosmetics" />
        </div>
      </section>

      {/* 🛍️ Product Main Grid */}
      <main className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentProducts.map((p) => (
            <motion.div 
              key={p.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] transition-all duration-500 group"
            >
              <div className="relative h-80 bg-slate-50 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 left-6">
                   <span className="bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[9px] font-black text-[#005a31] uppercase tracking-widest shadow-sm border border-slate-100">
                      {p.sector}
                   </span>
                </div>
              </div>

              <div className="p-10">
                <div className="flex items-center gap-1 mb-4">
                   {[...Array(5)].map((_, i) => <FaStar key={i} size={10} className={i < 4 ? "text-orange-400" : "text-slate-100"} />)}
                   <span className="text-[10px] font-bold text-slate-300 ml-1">{p.rating}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-6 leading-snug h-14 overflow-hidden group-hover:text-[#005a31] transition-colors">{p.name}</h4>
                
                <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                  <div>
                    <span className="text-2xl font-black text-[#005a31]">৳{p.price}</span>
                    <p className="text-xs text-slate-300 line-through">৳{p.oldPrice}</p>
                  </div>
                  <button 
                    onClick={() => addToCart(p)}
                    className="bg-slate-900 text-white p-5 rounded-2xl hover:bg-orange-500 transition-all shadow-lg active:scale-90"
                  >
                    <FaPlus size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔢 Modern Pagination Section */}
        <div className="mt-20 flex flex-col items-center">
           <p className="text-[10px] font-black uppercase text-slate-300 tracking-widest mb-6">Showing Page {currentPage} of {totalPages}</p>
           <div className="flex items-center gap-3">
              <button 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="w-12 h-12 flex items-center justify-center rounded-2xl border border-slate-200 text-slate-400 hover:bg-[#005a31] hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-slate-400"
              >
                 <FaChevronLeft size={14} />
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-12 h-12 rounded-2xl text-xs font-black transition-all ${currentPage === i + 1 ? "bg-[#005a31] text-white shadow-xl shadow-green-900/20" : "bg-white border border-slate-200 text-slate-500 hover:border-[#005a31]"}`}
                >
                  {i + 1}
                </button>
              ))}

              <button 
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="w-12 h-12 flex items-center justify-center rounded-2xl border border-slate-200 text-slate-400 hover:bg-[#005a31] hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-slate-400"
              >
                 <FaChevronRight size={14} />
              </button>
           </div>
        </div>
      </main>

      {/* 🧾 Drawer Cart (Already Optimized) */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              className="fixed top-0 right-0 h-screen w-full md:w-[450px] bg-white z-[110] shadow-2xl p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10 pb-6 border-b">
                <h3 className="text-2xl font-black italic uppercase">Your Bag ({cart.length})</h3>
                <button onClick={() => setIsCartOpen(false)} className="text-[10px] font-black uppercase text-slate-400">CLOSE</button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-8 pr-2 custom-scrollbar">
                {cart.length === 0 && <p className="text-center text-slate-300 py-20 font-bold uppercase tracking-widest">Bag is Empty</p>}
                {cart.map(item => (
                  <div key={item.id} className="flex gap-6 items-center">
                    <img src={item.image} className="w-20 h-20 rounded-2xl object-cover shadow-sm border border-slate-50" alt="" />
                    <div className="flex-1">
                      <h5 className="font-bold text-xs text-slate-800 mb-1">{item.name}</h5>
                      <p className="text-[#005a31] font-black text-sm">৳{item.price} x {item.qty}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-slate-200 hover:text-red-500 transition-colors"><FaTrash size={14} /></button>
                  </div>
                ))}
              </div>

              <div className="pt-10 mt-auto border-t">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-bold text-slate-400 uppercase text-[10px]">Grand Total:</span>
                  <span className="text-4xl font-black text-[#005a31]">৳{totalPrice}</span>
                </div>
                <button className="w-full bg-[#005a31] text-white py-6 rounded-3xl font-black uppercase text-xs tracking-[0.3em] shadow-2xl hover:bg-orange-500 transition-all">
                   Checkout Now <FaBolt className="inline ml-2" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// 🏛️ Sub-Component for Sector Icons
const SectorIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-3 group cursor-pointer">
     <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-[#005a31] group-hover:text-white transition-all duration-500 shadow-sm">
        {React.cloneElement(icon, { size: 24 })}
     </div>
     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">{label}</span>
  </div>
);

export default EammuStore;