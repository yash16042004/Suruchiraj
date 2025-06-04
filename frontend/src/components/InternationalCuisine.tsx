import React from 'react';

const cuisines = [
  {
    name: 'American',
    image: '/international cuisine/American Cuisine.png',
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
  return (
    <section id="international" className="px-4 md:px-8 text-center relative font-heading">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-white">
        International <span className="text-yellow-400">Cuisine</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {cuisines.map((cuisine, index) => (
          <div
            key={index}
            onClick={() => console.log(`Clicked on cuisine: ${cuisine.name}`)}
            className="relative cursor-pointer h-[245px] w-[190px] bg-transparent backdrop-blur-md rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.03] border border-white/10"
          >
            {/* Image */}
            <div className="absolute -top-6 -left-10 w-52 h-52 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:opacity-90">
              <img
                src={cuisine.image}
                alt={cuisine.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Label */}
            <div className="absolute bottom-4 right-4 text-white text-lg font-semibold font-body text-right opacity-90">
              {cuisine.name}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternationalCuisine;
