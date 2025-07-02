import React, { useState } from 'react';
import { Menu, X, Church } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Church className="h-8 w-8 text-blue-700" />
            <div className="text-xl font-bold text-gray-900">
              <span className="text-blue-700">Redeemed</span> Church
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('donations')}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Donate
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-700 font-medium py-2 text-left transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-700 font-medium py-2 text-left transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-700 font-medium py-2 text-left transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('donations')}
                className="text-gray-700 hover:text-blue-700 font-medium py-2 text-left transition-colors"
              >
                Donate
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-gray-700 hover:text-blue-700 font-medium py-2 text-left transition-colors"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-700 font-medium py-2 text-left transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;