import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import TopCategories from './components/TopCategories';
import TrendingMasalas from './components/TrendingMasalas';
import InternationalCuisine from './components/InternationalCuisine';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

import { Toaster } from 'react-hot-toast';

import Veg from './pages/categories/Veg.tsx';
import NonVeg from './pages/categories/NonVeg.tsx';
import Snacks from './pages/categories/Snacks.tsx';
import Soups from './pages/categories/Soups.tsx';
import Biryani from './pages/categories/Biryani.tsx';
import SouthIndian from './pages/categories/SouthIndian.tsx';


const HomePage: React.FC = () => {
  return (
    <>
      {/* Dynamic background wrapper (parallax style) */}
      <div
        className="bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/pink-blue.png')",
        }}
      >
        <div className="bg-black bg-opacity-50">
          <HeroSection />

          <section className="py-5">
            <WhyChooseUs />
          </section>

          <section className="py-5">
            <TopCategories />
          </section>

          <section className="py-5">
            <TrendingMasalas />
          </section>

          <section className="py-5">
            <InternationalCuisine />
          </section>

          <section className="py-5">
            <Testimonials />
          </section>
        </div>
      </div>

      {/* Footer stays on default background */}
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans text-gray-900">
        <Navbar />
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

        <Routes>
          <Route path="/" element={<HomePage />} />


          {/* Category Routes */}
          <Route path="/categories/Veg" element={<Veg />} />
          <Route path="/categories/NonVeg" element={<NonVeg />} />
          <Route path="/categories/Snacks" element={<Snacks />} />
          <Route path="/categories/Soups" element={<Soups />} />
          <Route path="/categories/biryani" element={<Biryani />} />
          <Route path="/categories/SouthIndian" element={<SouthIndian />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;