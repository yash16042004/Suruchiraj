import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import type { Swiper as SwiperType } from 'swiper/types';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';

interface Category {
  label: string;
  image: string;
  path: string;  // Add path for navigation
}

const categories: Category[] = [
  { label: 'Veg', image: '/categories/veg fp.png', path: '/categories/veg' },
  { label: 'Non Veg', image: '/categories/non veg fp.png', path: '/categories/nonveg' },
  { label: 'Snacks', image: '/categories/Snacks fp.png', path: '/categories/snacks' },
  { label: 'Soups', image: '/categories/soup fp.png', path: '/categories/soups' },
  { label: 'Biryani', image: '/categories/Biryani fp.png', path: '/categories/biryani' },
  { label: 'South Indian', image: '/categories/south india fp.png', path: '/categories/southindian' },
];

const TopCategories: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const navigate = useNavigate();

  const handleSlideChange = () => {
    const swiper = swiperRef.current;
    if (swiper) {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  };

  const handleCategoryClick = (path: string) => {
    navigate(path);
  };

  return (
    <section id="categories" className="px-4 md:px-8 text-center relative font-heading">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-white">
        Top <span className="text-yellow-400">Categories</span>
      </h2>

      {/* Navigation Arrows */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
        className={`absolute left-1 md:left-1 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full transition ${
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
        className={`absolute right-1 md:right-1 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full transition ${
          isEnd
            ? 'bg-white/10 text-gray-400 cursor-not-allowed'
            : 'bg-white/20 text-white hover:bg-yellow-400 hover:text-black'
        }`}
      >
        <FiChevronRight className="text-2xl" />
      </button>

      <div className="relative max-w-5xl mx-auto overflow-visible">
        <Swiper
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
          spaceBetween={20}
          slidesPerGroup={1}
          grabCursor={false}
          loop={false}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Navigation, Pagination]}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
          className="pb-10"
        >
          {categories.map((category, index) => (
            <SwiperSlide
              key={index}
              className="relative w-full overflow-visible transition-transform duration-300 hover:scale-[1.03]"
            >
              <div
                onClick={() => handleCategoryClick(category.path)}
                className="relative cursor-pointer h-[240px] w-[180px] bg-transparent backdrop-blur-md rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.03] border border-white/10 "
              >
                {/* Image */}
                <div className="absolute -top-6 -left-10 w-52 h-52 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:opacity-90">
                  <img
                    src={category.image}
                    alt={category.label}
                    className="w-full h-full object-full"
                  />
                </div>

                {/* Label */}
                <div className="absolute bottom-4 right-4 text-white text-lg font-semibold font-body text-right opacity-90">
                  {category.label}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10 pointer-events-none" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopCategories;
