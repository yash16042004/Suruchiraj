import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import 'swiper/css';


interface Category {
  label: string;
  image: string;
}

const categories: Category[] = [
  { label: 'Veg', image: '/categories/veg fp.png' },
  { label: 'Non Veg', image: '/categories/non veg fp.png' },
  { label: 'Snacks', image: '/categories/Snacks fp.png' },
  { label: 'Soups', image: '/categories/soup fp.png' },
  { label: 'Biryani', image: '/categories/Biryani fp.png' },
  { label: 'South Indian', image: '/categories/south india fp.png' },
];

const TopCategories: React.FC = () => {

  const swiperRef = useRef<any>(null);

  return (
    <section
      id="categories"
      className="sm:px-6 md:px-10 text-center font-sans w-full relative"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-white font-[Poppins]">
        Top <span className="text-yellow-400">Categories</span>
      </h2>

      {/* Navigation Arrows */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hidden md:flex">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition backdrop-blur-md"
        >
          <FiChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hidden md:flex">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition backdrop-blur-md"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Swiper Carousel */}
      <div className="relative max-w-7xl mx-auto">
        <Swiper
          onSwiper={(swiper: any) => (swiperRef.current = swiper)}
          slidesPerView={1.5}
          spaceBetween={20}
          navigation={false}
          loop={false}
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          className="pb-10"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                onClick={() =>
                  console.log(`Clicked on category: ${category.label}`)
                }
                className="relative cursor-pointer h-52 w-40 bg-transparent backdrop-blur-md rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.03] border border-white/10"
              >
                {/* Image Circle */}
                <div
                  className="absolute w-44 h-44 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:opacity-90"
                  style={{ top: '-10px', left: '-40px' }}
                >
                  <img
                    src={category.image}
                    alt={category.label}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Label */}
                <div className="absolute bottom-4 right-4 text-white text-lg font-semibold font-[Poppins] text-right opacity-90">
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
