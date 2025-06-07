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
import LoginModal from './components/LoginModal'; // ✅ NEW

// ✅ CONTEXT
import { LoginModalProvider } from './context/LoginModalContext';

// Category Pages
import Veg from './pages/categories/Veg';
import NonVeg from './pages/categories/NonVeg';
import Snacks from './pages/categories/Snacks';
import Soups from './pages/categories/Soups';
import Biryani from './pages/categories/Biryani';
import SouthIndian from './pages/categories/SouthIndian';

// Cuisine Pages
import American from './pages/cuisines/American';
import Thai from './pages/cuisines/Thai';
import Mexican from './pages/cuisines/Mexican';
import Italian from './pages/cuisines/Italian';
import Chinese from './pages/cuisines/Chinese';

const HomePage: React.FC = () => {
  return (
    <>
      <div
        className="bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/pink-blue.png')" }}
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

      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <LoginModalProvider>
        <div className="font-sans text-gray-900">
          <Navbar />
          <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
          <LoginModal /> {/* ✅ Login Popup available globally */}

          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Top Category Pages */}
            <Route path="/categories/Veg" element={<Veg />} />
            <Route path="/categories/NonVeg" element={<NonVeg />} />
            <Route path="/categories/Snacks" element={<Snacks />} />
            <Route path="/categories/Soups" element={<Soups />} />
            <Route path="/categories/biryani" element={<Biryani />} />
            <Route path="/categories/SouthIndian" element={<SouthIndian />} />

            {/* International Cuisine Pages */}
            <Route path="/cuisine/american" element={<American />} />
            <Route path="/cuisine/thai" element={<Thai />} />
            <Route path="/cuisine/mexican" element={<Mexican />} />
            <Route path="/cuisine/italian" element={<Italian />} />
            <Route path="/cuisine/chinese" element={<Chinese />} />
          </Routes>
        </div>
      </LoginModalProvider>
    </Router>
  );
};

export default App;
