// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import TopCategories from './components/TopCategories';
import TrendingMasalas from './components/TrendingMasalas';
import InternationalCuisine from './components/InternationalCuisine';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />

      {/* Toast Notification Provider */}
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      {/* Dynamic background wrapper (parallax style) */}
      <div
        className="bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/pink-blue.png')",
        }}
      >
        <div className="bg-black bg-opacity-50">
          <HeroSection />

          <section className="py-10">
            <WhyChooseUs />
          </section>

          <section className="py-10">
            <TopCategories />
          </section>

          <section className="py-10">
            <TrendingMasalas />
          </section>

          <section className="py-10">
            <InternationalCuisine />
          </section>
          
          <section className="py-10">
            <Testimonials />
          </section>
        </div>
      </div>

      {/* Footer stays on default background */}
      <Footer />
    </div>
  );
};

export default App;
