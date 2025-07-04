import React, { useEffect, useRef, useState } from 'react';
import {
  FiHeart,
  FiPlus,
  FiMinus,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';

interface Product {
  id: number;
  name: string;
  image: string;
  bgColor: string;
}

const products: Product[] = [
  { id: 1, name: 'Turmeric Powder', image: 'turmeric.png', bgColor: 'bg-[#FFD343]' },
  { id: 2, name: 'Red Powder', image: 'chilli.png', bgColor: 'bg-[#C94C45]' },
  { id: 3, name: 'Dhaniya Powder', image: 'dhaniya.png', bgColor: 'bg-[#A89A5D]' },
  { id: 4, name: 'Dummy Masala', image: 'turmeric.png', bgColor: 'bg-[#eab308]' },
  { id: 5, name: 'Dummy Masala', image: 'chilli.png', bgColor: 'bg-[#f87171]' },
  { id: 6, name: 'Dummy Masala', image: 'dhaniya.png', bgColor: 'bg-[#60a5fa]' },
];

const TrendingMasalas: React.FC = () => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [wishlist, setWishlist] = useState<{ [key: number]: boolean }>({});
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const initial: { [key: number]: number } = {};
    products.forEach((product) => (initial[product.id] = 1));
    setQuantities(initial);
  }, []);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (product: Product) => {
    const qty = quantities[product.id] || 1;
    addToCart({
      id: product.id, name: product.name, quantity: qty,
      price: 0
    });
    toast.success(`${product.name} (x${qty}) added to cart!`);
  };

  const handleSlideChange = () => {
    const swiper = swiperRef.current;
    if (swiper) {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  };

  return (
    <section id="trending" className="py-4 px-4 md:px-8 text-center relative">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-white">
        Trending <span className="text-yellow-400">Masalas</span>
      </h2>

      {/* Custom Navigation Arrows */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full transition ${
          isBeginning
            ? 'bg-white/10 text-gray-400 cursor-not-allowed'
            : 'bg-white/20 text-white hover:bg-yellow-400 hover:text-black'
        }`}
      >
        <FiChevronLeft className="text-2xl" />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full transition ${
          isEnd
            ? 'bg-white/10 text-gray-400 cursor-not-allowed'
            : 'bg-white/20 text-white hover:bg-yellow-400 hover:text-black'
        }`}
      >
        <FiChevronRight className="text-2xl" />
      </button>

      <div className="relative max-w-6xl mx-auto overflow-visible">
        <Swiper
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
          spaceBetween={16}
          slidesPerGroup={1}
          grabCursor={true}
          loop={false}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Navigation, Pagination]}
          className="pb-10"
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              style={{ cursor: 'pointer' }}
              className="relative w-full overflow-visible transition-transform duration-300 hover:scale-[1.03]"
            >
              {/* Floating Image Container */}
              <div className="absolute -top-0 inset-x-0 z-40 px-2 pointer-events-drag">
                {product.image && (
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-fill drop-shadow-xl pointer-events-none"
                    />
                    <div
                      className="absolute top-2 right-2 z-50 pointer-events-auto cursor-pointer"
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <FiHeart
                        className={`text-xl transition ${
                          wishlist[product.id]
                            ? 'text-red-500 fill-red-500'
                            : 'text-white'
                        }`}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Info Section */}
              <div className="mt-[260px] px-2 pt-0">
                <div className="bg-transparent border-l border-r border-b border-[#6B0073]/60 rounded-b-3xl p-4 pb-5 text-white relative">
                  <div className="flex items-end justify-between">
                    <div className="flex-1 text-left">
                      <h3 className="text-lg font-semibold leading-tight">
                        {product.name.split(' ').map((word, idx) => (
                          <span key={idx}>
                            {word}
                            {idx === 0 && <br />}
                          </span>
                        ))}
                      </h3>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-yellow-400 text-black px-3 py-1 text-xs rounded-full font-medium hover:brightness-110 transition"
                      >
                        Add to Cart
                      </button>
                      <div className="flex items-center space-x-1 mr-4">
                        <button
                          onClick={() =>
                            setQuantities((q) => ({
                              ...q,
                              [product.id]: Math.max(1, (q[product.id] || 1) - 1),
                            }))
                          }
                          className="text-white hover:text-yellow-400 text-base"
                        >
                          <FiMinus />
                        </button>
                        <span className="text-white font-semibold text-sm">
                          {quantities[product.id] || 1}
                        </span>
                        <button
                          onClick={() =>
                            setQuantities((q) => ({
                              ...q,
                              [product.id]: (q[product.id] || 1) + 1,
                            }))
                          }
                          className="text-white hover:text-yellow-400 text-base"
                        >
                          <FiPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendingMasalas;
