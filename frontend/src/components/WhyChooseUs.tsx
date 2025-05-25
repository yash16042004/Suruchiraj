import React from 'react';

interface Feature {
  icon: string;
  text: string;
}

const features: Feature[] = [
  { icon: 'I1.png', text: '100% Pure Ingrediants' },
  { icon: 'l2new.png', text: 'No Preservative' },
  { icon: 'I3new.png', text: 'Hygienic Packaging' },
  { icon: 'l4new.png', text: 'Traditional Blend' },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-1 px-4 text-center">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-white">
        Why <span className="text-yellow-400">Choose Us</span>
      </h2>

      {/* Container */}
      <div className="max-w-4xl mx-auto backdrop-blur-md rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/20 shadow-md bg-transparent">

        {features.map((feature, index) => {
          const customSize =
            feature.icon === 'l4.png'
              ? 'h-20 w-20' // increase only for this icon
              : 'h-20 w-20';

          return (
            <div
              key={index}
              className="flex flex-col items-center text-white w-full md:w-1/4"
            >
              <img
                src={feature.icon}
                className={`object-contain mb-0 transition-transform duration-300 hover:scale-110 ${customSize}`}
                alt={feature.text}
              />
              <p className="text-sm md:text-base font-medium">{feature.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
