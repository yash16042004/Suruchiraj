import React, { useState, useEffect } from 'react';
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiUser,
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useLoginModal } from '../context/LoginModalContext';
import clsx from 'clsx';
import CartDrawer from './CartDrawer';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const { cart } = useCart();
  const { openModal } = useLoginModal();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const trendingMasalas = [
    'Dhaniya Masala',
    'Turmeric Powder',
    'Red Chili Powder',
    'Cumin Powder',
    'Dummy Masala',
    'Chole Masala',
    'Pav Bhaji Masala',
    'Kitchen King',
    'Biryani Masala',
    'Sabzi Masala',
    'Sambar Masala',
    'Paneer Butter Masala',
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % trendingMasalas.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#categories' },
    { name: 'Contact', href: '#footer' },
    { name: 'About Us', href: '#about' },
  ];

  const handleLoginClick = () => {
    openModal();
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={clsx(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled ? 'bg-black/50 backdrop-blur-md shadow-md' : 'bg-black'
        )}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between font-roboto font-semibold">
          {/* Mobile Header */}
          <div className="flex w-full items-center justify-between md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FiX className="text-2xl text-yellow-400" />
              ) : (
                <FiMenu className="text-2xl text-yellow-400" />
              )}
            </button>

            {/* Keep logo as-is */}
            <Link
              to="/"
              className="text-2xl font-bold text-white"
              style={{ fontFamily: 'inherit' }}
            >
              Suruchiraj
            </Link>

            <div className="flex items-center space-x-4 text-yellow-400">
              <button onClick={handleLoginClick}>
                <FiUser className="text-xl" />
              </button>
              <button onClick={() => setIsCartOpen(true)} className="relative">
                <FiShoppingCart className="text-xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-white hover:text-red-500 transition">
              Suruchiraj
            </Link>

            {/* Nav + Search closer together */}
            <div className="flex items-center space-x-6 ml-80">
              <nav className="flex space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-red-500 transition duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="relative w-64">
                <input
                  type="text"
                  placeholder={`Search for "${trendingMasalas[placeholderIndex]}"`}
                  className="w-full px-4 pr-10 py-2 rounded-full border font-normal border-gray-500 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                />
                <img
                  src="search.png"
                  alt="search"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7"
                />
              </div>
            </div>

            {/* Auth & Cart */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLoginClick}
                className="flex items-center space-x-1 text-gray-300 hover:text-red-500 transition"
              >
                <FiUser className="text-xl" />
                <span className="text-sm">Sign In</span>
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center space-x-1 text-gray-300 hover:text-red-500 transition"
              >
                <FiShoppingCart className="text-xl" />
                <span className="text-sm">My Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Collapsible Links (optional) */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 bg-black text-white">
            <nav className="flex flex-col space-y-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-red-500 transition duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Search - separate bar below header */}
      <div className="md:hidden bg-black px-4 pt-3 pb-4">
        <div className="relative flex items-center">
          <div className="absolute left-3">
            <img src="search.png" alt="search" className="w-6 h-6" />
          </div>
          <input
            type="text"
            placeholder="Search any Product.."
            className="w-full pl-10 pr-10 py-2 rounded-full text-sm text-gray-800 bg-white focus:outline-none"
          />
          <div className="absolute right-3">
            <img src="mic.svg" alt="mic" className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
