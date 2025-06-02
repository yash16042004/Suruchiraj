// src/App.tsx
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
import SignInPage from './pages/SignInPage.tsx'; 
import { Toaster } from 'react-hot-toast';

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
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
