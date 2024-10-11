import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import logo from '../assets/img/logo.webp'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="container mx-auto px-4  flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            className="h-14 w-auto"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-600 font-semibold">
          <li className="hover:text-gray-900 cursor-pointer">Featured</li>
          <li className="hover:text-gray-900 cursor-pointer">What to Watch</li>
          <li className="hover:text-gray-900 cursor-pointer">Latest News and Reviews</li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-full px-4 py-1 focus:outline-none"
          />
          <FiSearch className="text-gray-600 cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 py-4 px-4">
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Featured</li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer">What to Watch</li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Latest News and Reviews</li>
            <li>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded-full px-4 py-1 focus:outline-none"
                />
                <FiSearch className="text-gray-600 cursor-pointer" />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
