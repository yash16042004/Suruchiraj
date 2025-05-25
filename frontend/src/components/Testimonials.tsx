import React, { useEffect, useRef } from 'react';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import type { Swiper as SwiperType } from 'swiper/types';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul G',
    company: 'Facebook',
    text: `I couldn't be more satisfied with my experience! The customer service team went above and beyond to ensure all my needs were met promptly and professionally.`,
    image: 'user.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'Anish K',
    company: 'Facebook',
    text: `I’ve seen a significant improvement in my gut health. Recommend it!`,
    image: 'user.png',
    rating: 4,
  },
  {
    id: 3,
    name: 'Arun J',
    company: 'Facebook',
    text: `Appreciated for exceptional customer service, friendliness, and dedication.`,
    image: 'user.png',
    rating: 3,
  },
  {
    id: 4,
    name: 'Neha M',
    company: 'Instagram',
    text: `Brilliant taste and fast delivery. Suruchiraj has won my heart!`,
    image: 'user.png',
    rating: 5,
  },
  {
    id: 5,
    name: 'Vikram R',
    company: 'Twitter',
    text: `Affordable and reliable! My kitchen has transformed since I started using their masalas.`,
    image: 'user.png',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-14 px-4 text-center relative">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-white">
        What our <span className="text-yellow-400">Customer says</span>
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Custom Arrows */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 text-white p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
        >
          <FiChevronLeft className="text-2xl" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 text-white p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
        >
          <FiChevronRight className="text-2xl" />
        </button>

        <Swiper
          onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'3'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="pb-8"
        >
          {testimonials.map((t) => (
            <SwiperSlide
              key={t.id}
              className="max-w-sm h-[420px] flex flex-col justify-between bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-left text-white border border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-500"

            >
              <div>
                <div className="text-5xl mb-4 text-yellow-400 leading-none">❝</div>
                <h3 className="text-lg font-semibold mb-2">Great Work</h3>
                <p className="text-sm leading-relaxed whitespace-pre-line">
                  {t.text}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-gray-300">{t.company}</p>
                  </div>
                </div>

                <div className="flex space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={i < t.rating ? '' : 'text-gray-500'}
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
