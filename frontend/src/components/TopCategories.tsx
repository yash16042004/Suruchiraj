import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

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
  { label: 'South Indian', image: '/categories/south india fp.png' }
];

const TopCategories: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <section className="py-0 px-2 sm:px-6 md:px-10 text-center font-sans w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-white font-[Poppins]">
        Top <span className="text-yellow-400">Categories</span>
      </h2>

      <div
        className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 place-items-center"
        style={{
          columnGap: '8px',   // Custom horizontal spacing
          rowGap: '20px',     // Custom vertical spacing
        }}
      >
        {visibleCategories.map((category, index) => (
          <div
            key={index}
            className="relative h-48 w-36 bg-transparent backdrop-blur-md rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] border border-white/10"
            style={{
              padding: '0',
              margin: '0',
            }}
          >
            {/* Image Circle */}
            <div
              className="absolute w-40 h-40 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={{ top: '-10px', left: '-50px' }}
            >
              <img
                src={category.image}
                alt={category.label}
                className="w-full h-full object-full"
              />
            </div>

            {/* Label */}
            <div className="absolute bottom-4 right-4 text-white text-base font-semibold font-[Poppins] text-right opacity-90 transition-opacity duration-300">
              {category.label}
            </div>

            {/* Overlay */}
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
