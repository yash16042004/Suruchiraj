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

// Category Pages
import Veg from './pages/categories/Veg.tsx';
import NonVeg from './pages/categories/NonVeg.tsx';
import Snacks from './pages/categories/Snacks.tsx';
import Soups from './pages/categories/Soups.tsx';
import Biryani from './pages/categories/Biryani.tsx';
import SouthIndian from './pages/categories/SouthIndian.tsx';

// Cuisine Pages
import American from './pages/cuisines/American.tsx';
import Thai from './pages/cuisines/Thai.tsx';
import Mexican from './pages/cuisines/Mexican.tsx';
import Italian from './pages/cuisines/Italian.tsx';
import Chinese from './pages/cuisines/Chinese.tsx';

const HomePage: React.FC = () => {
  return (
    <>
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
          {/* Home & Auth */}
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />

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
    </Router>
  );
};

export default App;
