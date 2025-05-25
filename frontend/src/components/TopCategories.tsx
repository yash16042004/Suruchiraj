import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

interface Category {
  label: string;
  image: string;
}

const categories: Category[] = [
  { label: 'Veg', image: 'veg.jpg' },
  { label: 'Non Veg', image: 'nonveg.jpg' },
  { label: 'Snacks', image: 'snacks.jpg' },
  { label: 'Soups', image: 'soup3.jpg' },
  { label: 'Biryani', image: 'biryani.jpg' },
  { label: 'Rice', image: 'rice.jpg' }
];

const TopCategories: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <section className="py-1 px-4 text-center font-sans">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-white font-[Poppins]">
        Top <span className="text-yellow-400">Categories</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {visibleCategories.map((category, index) => (
          <div
            key={index}
            className="relative h-52 w-36 bg-transparent backdrop-blur-md rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] border border-white/10"
          >
            {/* Smaller Circle */}
            <div
              className="absolute w-40 h-40 rounded-full overflow-hidden border-2 border-white/20 shadow-md transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={{ top: '-10px', left: '-50px' }}
            >
              <img
                src={category.image}
                alt={category.label}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text closer to bottom */}
            <div className="absolute bottom-4 right-4 text-white text-base font-semibold font-[Poppins] text-right opacity-90 transition-opacity duration-300">
              {category.label}
            </div>

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10 pointer-events-none" />
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-1 text-white hover:text-yellow-400 transition text-lg font-medium font-[Poppins]"
          >
            View More <FiArrowUpRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default TopCategories;
