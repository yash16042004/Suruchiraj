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
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 font-heading">
          {heading}
        </h1>

        <p className="text-lg md:text-xl text-[#B8A8A8] mb-8 font-body">{subheading}</p>

        <a
          href="#trending"
          className="relative inline-block px-8 py-3 text-white font-semibold rounded-full 
            bg-gray-900 border border-white/10 shadow-md overflow-hidden group
            transition-transform duration-300 transform hover:scale-105 font-button"
        >
          <span className="relative z-10 font-button">Shop Now</span>
          <span
            className="absolute top-0 left-[-75%] w-[150%] h-full bg-gradient-to-r 
              from-transparent via-white/30 to-transparent opacity-0 
              group-hover:opacity-100 transition-opacity duration-200 
              pointer-events-none animate-none group-hover:animate-shine font-button"
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
    heading: <>EXPLORE INDIA'S    <span className="text-[#F98C18]">RICH FLAVORS.</span></>,
    subheading: 'Unlock authentic tastes with Suruchiraj\'s diverse masalas.',
  },
  {
    image: '/hero/chinese-hero.png',
    heading: <>WOK UP YOUR   <span className="text-[#DCC79D]">TASTE BUDS!</span></>,
    subheading: 'Authentic Chinese flavors, made easy with Suruchiraj masalas.',
  },
  {
    image: '/hero/american-hero.png',
    heading: <>YOUR AMERICAN     <span className="text-[#B8A8A8]">FEAST AWAITS!</span></>,
    subheading: 'Effortlessly create iconic comfort food with Suruchiraj.',
  },

  {
    image: '/hero/biryani-hero.png',
    heading: <>TASTE THE SOUL OF    <span className="text-[#E88635]">BIRYANI.</span></>,
    subheading: 'Suruchiraj makes hearty meals unforgettable.',
  },
  {
    image: '/hero/italian-hero.png',
    heading: <>THE ESSENCE OF ITALY.    <span className="text-[#FCC971]">SIMPLIFIED.</span></>,
    subheading: 'Achieve culinary excellence with Suruchiraj spices.',
  },
  {
    image: '/hero/thai-hero.png',
    heading: <>VIBRANT THAI.    <span className="text-palegold">SIMPLY DONE.</span></>,
    subheading: 'Balance bold aromas with Suruchiraj spices.',
  },
];

const HeroCarousel: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 9000 }}
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
