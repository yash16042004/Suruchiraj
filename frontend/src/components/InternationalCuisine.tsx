import React, { useState } from 'react';

const cuisines = [
  {
    name: 'American',
    image: 'american.png',
    featured: true,
    description: 'Bold flavors, comforting classics, and culinary adventure in every bite!',
  },
  {
    name: 'Thai',
    image: '/thainew1.png',
    description: 'Experience a vibrant dance of sweet, spicy, sour, and savory!',
  },
  {
    name: 'Mexican',
    image: '/mexicannew.png',
    description: 'Zesty tacos, fresh salsa, and spicy traditions.',
  },
  {
    name: 'Italian',
    image: '/italiannew.png',
    description: 'Savory pastas, cheesy pizzas, and rich sauces.',
  },
  {
    name: 'Chinese',
    image: '/chinesenew.png',
    description: 'Explore ancient traditions and dynamic flavors in every delicious dish!',
  },
];

const InternationalCuisine: React.FC = () => {
  const [hoveredCuisine, setHoveredCuisine] = useState(cuisines[0]);
  const sideCuisines = cuisines.filter((c) => !c.featured);

  return (
    <section className="py-4 px-6 text-white bg-transparent">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
        International <span className="text-yellow-400">Cuisine</span>
      </h2>

      {/* Centered flex container for both sections */}
      <div className="flex justify-center gap-10 flex-wrap">
        {/* Featured main tile */}
        <div className="flex justify-center">
          <div className="relative rounded-2xl overflow-visible border border-white/30 shadow-lg p-4 w-72 h-full flex flex-col items-center justify-between hover:scale-105 transition duration-300 bg-transparent backdrop-blur-md hover:border-white/70">
            <img
              src={hoveredCuisine.image}
              alt={hoveredCuisine.name}
              className="rounded-xl w-full h-64 object-full mb-2"
            />
            <h3 className="text-2xl font-semibold mb-1">{hoveredCuisine.name}</h3>
            <p className="text-sm text-yellow-300 italic text-center mb-4">
              {hoveredCuisine.description}
            </p>
            <button className="mt-auto bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-yellow-300 transition">
              Explore More
            </button>
          </div>
        </div>

        {/* Grid of side tiles */}
        <div className="grid grid-cols-2 gap-4">
          {sideCuisines.map((cuisine, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl border border-white/30 shadow-md hover:border-white/70 transition-transform hover:scale-105 duration-300 bg-transparent backdrop-blur-md cursor-pointer"
              style={{ width: '180px', paddingRight: '1rem', paddingBottom: '1rem' }}
              onMouseEnter={() => setHoveredCuisine(cuisine)}
              onMouseLeave={() => setHoveredCuisine(cuisines[0])}
            >
              <img
                src={cuisine.image}
                alt={cuisine.name}
                className="rounded-tl-2xl rounded-tr-none w-full h-30 object-cover mb-2"
              />
              <h3 className="text-lg font-bold text-end">{cuisine.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalCuisine;
