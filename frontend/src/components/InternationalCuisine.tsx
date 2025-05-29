import React, { useState } from 'react';

const cuisines = [
  {
    name: 'American',
    image: '/international cuisine/American Cuisine.png',
    featured: true,
    description: 'Bold flavors, comforting classics, and culinary adventure in every bite!',
  },
  {
    name: 'Thai',
    image: '/international cuisine/Thai Cuisine1.png',
    description: 'Experience a vibrant dance of sweet, spicy, sour, and savory!',
  },
  {
    name: 'Mexican',
    image: '/international cuisine/Mexican Cuisine.png',
    description: 'Zesty tacos, fresh salsa, and spicy traditions.',
  },
  {
    name: 'Italian',
    image: '/international cuisine/Italian Cuisine.png',
    description: 'Savory pastas, cheesy pizzas, and rich sauces.',
  },
  {
    name: 'Chinese',
    image: '/international cuisine/Chinese Cuisine.png',
    description: 'Explore ancient traditions and dynamic flavors in every delicious dish!',
  },
];

const InternationalCuisine: React.FC = () => {
  const [hoveredCuisine, setHoveredCuisine] = useState(cuisines[0]);
  const sideCuisines = cuisines.filter((c) => !c.featured);

  return (
    <section id="international" className="py-4 px-6 text-white bg-transparent">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
        International <span className="text-yellow-400">Cuisine</span>
      </h2>

      <div className="flex justify-center gap-10 flex-wrap">
        {/* Featured main tile */}
        <div className="flex justify-center">
          <div className="relative rounded-2xl overflow-visible border border-white/30 shadow-lg p-4 w-72 h-full flex flex-col items-center justify-between hover:scale-105 transition duration-300 bg-transparent backdrop-blur-md hover:border-white/70">
            <img
              src={hoveredCuisine.image}
              alt={hoveredCuisine.name}
              className="rounded-xl w-full h-62 object-contain mb-2"
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

        {/* Grid of side tiles with updated image layout */}
        <div className="grid grid-cols-2 gap-4">
          {sideCuisines.map((cuisine, idx) => (
            <div
              key={idx}
              className="relative flex flex-col rounded-3xl border border-white/10 backdrop-blur-md shadow-lg hover:scale-[1.02] transition-transform duration-300 overflow-hidden cursor-pointer"
              style={{ width: '150px', height: '200px' }}
              onMouseEnter={() => setHoveredCuisine(cuisine)}
              onMouseLeave={() => setHoveredCuisine(cuisines[0])}
            >
              {/* Circular image clipped to corner */}
              <div
                className="absolute w-40 h-40 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:opacity-90"
                style={{ top: '-10px', left: '-50px' }}
              >
                <img
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Label */}
              <div className="absolute bottom-4 right-5 text-white text-base font-semibold text-right opacity-90">
                {cuisine.name}
              </div>

              {/* Optional gradient overlay like TopCategories */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalCuisine;
