import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-customBlue shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Side: Logo/Text */}
        <RouterLink to="/" className="text-left" onClick={closeMenu}>
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="block text-4xl text-white">Insight Tech</span>
            <span className="block text-lg text-customPink text-center">
              Solutions
            </span>
          </h1>
        </RouterLink>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white hover:text-opacity-80">
            Home
          </a>
          <a href="#about-us" className="text-white hover:text-opacity-80">
            About Us
          </a>
          <a href="#services" className="text-white hover:text-opacity-80">
            Services
          </a>
          <a href="#packages" className="text-white hover:text-opacity-80">
            Packages
          </a>
          <a href="#contact" className="text-white hover:text-opacity-80">
            Contact Us
          </a>
        </nav>

        {/* Right Side: Free Consultation Button */}
        <a
          href="https://wa.me/+923267374898"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex bg-green-500 text-white px-4 py-2 rounded-lg items-center space-x-2 hover:bg-opacity-90 transition"
        >
          <FaWhatsapp className="text-lg" />
          <span>Free Consultation</span>
        </a>

        {/* Mobile Menu: Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-customBlue text-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="#" className="hover:text-opacity-80" onClick={closeMenu}>
              Home
            </a>
            <a
              href="#about-us"
              className="hover:text-opacity-80"
              onClick={closeMenu}
            >
              About Us
            </a>
            <a
              href="#services"
              className="hover:text-opacity-80"
              onClick={closeMenu}
            >
              Services
            </a>
            <a
              href="#packages"
              className="hover:text-opacity-80"
              onClick={closeMenu}
            >
              Packages
            </a>
            <a
              href="#contact"
              className="hover:text-opacity-80"
              onClick={closeMenu}
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/+923267374898"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-opacity-90 transition"
              onClick={closeMenu}
            >
              <FaWhatsapp className="text-lg" />
              <span>Free Consultation</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
