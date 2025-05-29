import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Reusable slide component
const HeroSlide = ({ image, heading, subheading }: { image: string; heading: React.ReactNode; subheading: string }) => (
  <section
    className="relative bg-cover bg-center h-[550px] flex items-center"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50" />

    <div className="relative container mx-auto px-6 z-10">
      <div className="max-w-xl text-left text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          {heading}
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">{subheading}</p>

        <a
          href="#trending"
          className="relative inline-block px-8 py-3 text-white font-semibold rounded-full 
            bg-gray-900 border border-white/10 shadow-md overflow-hidden group
            transition-transform duration-300 transform hover:scale-105"
        >
          <span className="relative z-10">Shop Now</span>
          <span
            className="absolute top-0 left-[-75%] w-[150%] h-full bg-gradient-to-r 
              from-transparent via-white/30 to-transparent opacity-0 
              group-hover:opacity-100 transition-opacity duration-200 
              pointer-events-none animate-none group-hover:animate-shine"
          />
        </a>
      </div>
    </div>
  </section>
);

// List of slides
const slides = [
  {
    image: '/hero/indian-hero.png',
    heading: <>Discover the soul of <span className="text-red-500">Indian Spices</span></>,
    subheading: 'Experience the richness of traditional blends, crafted with 100% pure ingredients and no preservatives.',
  },
  {
    image: '/hero/chinese-hero.png',
    heading: <>Unveil the magic of <span className="text-yellow-400">Golden Turmeric</span></>,
    subheading: 'A treasure from ancient India, now in your kitchen. Fresh, pure, and vibrant.',
  },
  {
    image: '/hero/american-hero.png',
    heading: <>Discover the soul of <span className="text-orange-500">Indian Spices</span></>,
    subheading: 'Experience the richness of traditional blends, crafted with 100% pure ingredients and no preservatives.',
  },

  {
    image: '/hero/biryani-hero.png',
    heading: <>Unveil the magic of <span className="text-emerald-500">Golden Turmeric</span></>,
    subheading: 'A treasure from ancient India, now in your kitchen. Fresh, pure, and vibrant.',
  },
  {
    image: '/hero/italian-hero.png',
    heading: <>Discover the soul of <span className="text-violet-500">Indian Spices</span></>,
    subheading: 'Experience the richness of traditional blends, crafted with 100% pure ingredients and no preservatives.',
  },
  {
    image: '/hero/thai-hero.png',
    heading: <>Unveil the magic of <span className="text-green-400">Golden Turmeric</span></>,
    subheading: 'A treasure from ancient India, now in your kitchen. Fresh, pure, and vibrant.',
  },
];

const HeroCarousel: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 5000 }}
      loop
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <HeroSlide {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
