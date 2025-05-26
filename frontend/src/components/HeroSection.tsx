// src/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[550px] flex items-center"
      style={{ backgroundImage: "url('hero.png')" }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Left-aligned content */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-xl text-left text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Discover the soul of{' '}
            <span className="text-red-600">Indian Spices</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Experience the richness of traditional blends, crafted with 100% pure ingredients and no preservatives.
          </p>

          {/* Grey Glossy Button with Shine Animation and Magnify on Hover */}
          <a
            href="#trending"
            className="relative inline-block px-8 py-3 text-white font-semibold rounded-full 
              bg-gray-900 border border-white/10 shadow-md overflow-hidden group
              transition-transform duration-300 transform hover:scale-105"
          >
            <span className="relative z-10">Shop Now</span>

            {/* Shine Effect */}
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
};

export default HeroSection;
