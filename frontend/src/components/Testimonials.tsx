import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
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
    name: 'Anya Sharma',
    company: 'Facebook',
    text: `Suruchiraj spices make my food look and taste amazing. They help me create beautiful dishes and get noticed for my cooking.`,
    image: '/userpp/anya.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rohan Patel',
    company: 'Facebook',
    text: `I love Suruchiraj's spices because they are healthy and pure. They help me make tasty, nutritious meals for my wellness journey. I love Suruchiraj's spices because they are healthy and pure. They help me make tasty, nutritious meals for my wellness journey. I love Suruchiraj's spices because they are healthy and pure. They help me make tasty, nutritious meals for my wellness journey.`,
    image: '/userpp/rohan.png',
    rating: 4,
  },
  {
    id: 3,
    name: 'Priya Krishnan',
    company: 'Facebook',
    text: `Suruchiraj spice blends save me so much time in the kitchen. My family and friends always love the delicious meals I make with them.`,
    image: '/userpp/priya.png',
    rating: 3,
  },
  {
    id: 4,
    name: 'Deepak Marathe',
    company: 'Instagram',
    text: `Suruchiraj helps me cook real dishes from around the world. I love learning about the history and culture of their unique spices.`,
    image: '/userpp/deepak.png',
    rating: 5,
  },
  {
    id: 5,
    name: 'Aisha Khan',
    company: 'Twitter',
    text: `Suruchiraj spices help me make traditional dishes that taste just like home. They are perfect for our family celebrations and keeping our traditions alive.`,
    image: '/userpp/aisha.png',
    rating: 4,
  },
  {
    id: 6,
    name: 'Arjun Verma',
    company: 'Instagram',
    text: `Suruchiraj spices are cheap and make my simple meals taste great. It's easy to cook delicious food without spending a lot of money.`,
    image: '/userpp/arjun.png',
    rating: 4,
  },
  {
    id: 7,
    name: 'Shanti Kale',
    company: 'Facebook',
    text: `I trust Suruchiraj because their spices are good for the Earth and sourced fairly. They make it easy to cook in a way that matches my values.`,
    image: '/userpp/shanti.png',
    rating: 4,
  },
  {
    id: 8,
    name: 'Arjun Mehta',
    company: 'Facebook',
    text: `Suruchiraj spices always deliver great flavor, which is perfect for my tech-driven cooking. They help me try new recipes and share my creations online.`,
    image: '/userpp/karan.png',
    rating: 4,
  },
  {
    id: 9,
    name: 'Lakshmi Menon',
    company: 'Facebook',
    text: `Suruchiraj helps me explore the rich history of food through their authentic spices. It's like taking a journey into different cultures with every dish.`,
    image: '/userpp/lakshmi.png',
    rating: 4,
  },
  {
    id: 10,
    name: 'Gopal Singh',
    company: 'Facebook',
    text: `Cooking is fun with Suruchiraj because their spices are always good quality and easy to use. They make every meal a special and enjoyable experience.`,
    image: '/userpp/gopal.png',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-6 px-4 text-center relative">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-white">
        What our <span className="text-yellow-400">Customer says</span>
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-2 sm:-left-12 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 text-white p-2 sm:p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
        >
          <FiChevronLeft className="text-xl sm:text-2xl" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-2 sm:-right-12 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 text-white p-2 sm:p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
        >
          <FiChevronRight className="text-xl sm:text-2xl" />
        </button>

        <Swiper
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
          }}
          onSlideChange={(swiper: { realIndex: React.SetStateAction<number> }) =>
            setActiveIndex(swiper.realIndex)
          }
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 90,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="pb-10"
        >
          {testimonials.map((t, index) => {
            const isActive = index === activeIndex;
            return (
              <SwiperSlide
                key={t.id}
                className={`h-[400px] flex flex-col justify-between bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-5 text-left text-white border border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-500 ${
                  isActive ? '' : 'blur-[3px] opacity-50 scale-[0.95]'
                }`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="text-4xl sm:text-5xl mb-2 text-yellow-400 leading-none">❝</div>
                    <div className="max-h-[180px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {t.text}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mt-0">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-gray-300">{t.company}</p>
                      <div className="flex space-x-1 text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <AiFillStar
                            key={i}
                            className={`text-sm ${i < t.rating ? 'text-yellow-400' : 'text-white'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
