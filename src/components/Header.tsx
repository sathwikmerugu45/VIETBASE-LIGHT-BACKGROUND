import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Services', href: '#' },
    { label: 'Market Entry', href: '#' },
    { label: 'News & Insights', href: '#' },
    { label: 'Resources', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    // { label: 'Q', href: '#' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm w-full overflow-x-hidden shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-12 md:h-12 rounded-full border-2 border-gray-200 overflow-hidden relative">
              <img 
                src={logo} 
                alt="VIETBASE Logo" 
                className="absolute top-1/2 left-1/2 w-[110%] h-[110%] object-contain -translate-x-1/2 -translate-y-1/2" 
                style={{ minWidth: '110%', minHeight: '110%' }}
              />
            </div>
            <div className="text-black">
              <div className="font-bold text-sm md:text-2xl tracking-wider">VIETBASE</div>
              <div className="text-[0.62rem] tracking-[0.65em]">CONSULTING</div>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <button 
              className="text-black"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
  {navItems.map((item, index) => (
    <a
      key={index}
      href={item.href}
      className={`text-black text-lg hover:text-yellow-500 transition-colors ${item.label === 'Resources' ? 'flex items-center' : ''}`}
    >
      {item.label}
      {item.label === 'Resources' && (
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </a>
  ))}
  <button className="bg-transparent border-2 border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all ml-4 text-lg">
    Get Consultation
  </button>
</nav>

        </div>

        {/* Mobile Menu - Vertical Layout */}
        {isMenuOpen && (
          <div className="md:hidden pt-6 pb-8 bg-white">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-black text-lg py-2 hover:text-yellow-500 transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-transparent border-2 border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all mt-4 w-full md:w-auto">
                Get Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;