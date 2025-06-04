// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-10 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex justify-center space-x-20">
      {/* Thank You Note + Social Media */}
      <div className="flex flex-col items-center text-center max-w-xs">
        <span className="text-xs font-medium font-body">
          Thanks for scrolling! 🍕 Do visit <span className="font-bold">Suruchiraj Spices</span> again for a taste of happiness.
        </span>

        <div className="mt-4 flex space-x-6 text-white text-xl font-body">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow-400 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-400 transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-yellow-400 transition">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Company Section */}
      <div className="max-w-xs text-start font-body">
        <h3 className="text-lg font-semibold mb-2">Company</h3>
        <ul className="text-sm space-y-1">
          <li><a href="#" className="hover:text-red-400">Home</a></li>
          <li><a href="#about" className="hover:text-red-400">About</a></li>
          <li><a href="#categories" className="hover:text-red-400">Menu</a></li>
          <li><a href="#international" className="hover:text-red-400">International Cuisine</a></li>
          <li><a href="#footer" className="hover:text-red-400">Contact</a></li>
        </ul>
      </div>

      {/* Links Section */}
      <div className="max-w-xs text-start font-body">
        <h3 className="text-lg font-semibold mb-2">Links</h3>
        <ul className="text-sm space-y-1">
          <li><a href="#" className="hover:text-red-400">Terms & Conditions</a></li>
          <li><a href="#" className="hover:text-red-400">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-red-400">Cookie Policy</a></li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-10 text-center text-xs text-gray-400">
      &copy; {new Date().getFullYear()} Suruchiraj Spices. All rights reserved.
    </div>
  </div>
</footer>

  );
};

export default Footer;
