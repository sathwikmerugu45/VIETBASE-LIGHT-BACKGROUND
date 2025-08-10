import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setLangMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { labelKey: 'services', href: '#' },
    { labelKey: 'marketEntry', href: '#' },
    { labelKey: 'newsInsights', href: '#' },
    { labelKey: 'resources', href: '#' },
    { labelKey: 'aboutUs', href: '#' },
    { labelKey: 'careers', href: '#' },
  ];

  const languages = [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français' },
      { code: 'vi', name: 'Tiếng Việt' },
      { code: 'zh', name: '中文' },
      { code: 'ko', name: '한국어' },
  ];

  const currentLanguageName = languages.find(l => i18n.language.startsWith(l.code))?.name || 'English';


  return (
    <>
<header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/75 backdrop-blur-md w-full shadow-sm">
  {/* Gradient border effect */}
  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-green/40 to-transparent"></div> <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4">
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
              <div className="text-brand-dark leading-tight">
                <div className="font-bold text-lg md:text-2xl tracking-wider">
                  VIETBASE
                </div>
                <div className="text-[0.57rem] md:text-[0.62rem] tracking-[0.42em] md:tracking-[0.65em] block w-full text-brand-green text-center md:text-left">
                  CONSULTING
                </div>
              </div>
            </div>

            {/* Mobile Navigation Toggle - Simplified */}
            <div className="flex items-center md:hidden">
              <button
                className="text-brand-dark p-2 rounded-md hover:bg-gray-100 transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" strokeWidth={2} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={2} />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`text-brand-dark text-lg hover:text-brand-yellow transition-colors ${item.labelKey === 'resources' ? 'flex items-center' : ''}`}
                >
                  {t(item.labelKey)}
                  {item.labelKey === 'resources' && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
              ))}
              <div className="relative">
                <button onClick={() => setLangMenuOpen(!isLangMenuOpen)} className="flex items-center text-brand-dark text-lg hover:text-brand-yellow transition-colors">
                  <Globe size={20} className="mr-1" /> {currentLanguageName}
                </button>
                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-1">
                    {languages.map(lang => (
                      <a href="#" key={lang.code} onClick={() => changeLanguage(lang.code)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {lang.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <button className="bg-brand-green text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all ml-4 text-lg">
                {t('getConsultation')}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 ease-out ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 55 }}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-all duration-500 ease-out ${
          isMenuOpen
            ? 'transform translate-x-0'
            : 'transform translate-x-full'
        }`}
        style={{ zIndex: 58 }}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-brand-bg/50">
          <div className="text-brand-dark">
            <div className="font-bold text-lg tracking-wider">MENU</div>
          </div>
          <button
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
          >
            <X className="w-6 h-6 text-brand-dark" strokeWidth={2} />
          </button>
        </div>

        {/* Menu Content */}
        <div className="px-6 py-8 h-full overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.labelKey}
                href={item.href}
                className={`text-brand-dark text-lg py-4 px-4 rounded-xl hover:bg-brand-bg border-b border-gray-50 last:border-b-0 transition-all duration-200 transform ${
                  isMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100 + 200}ms` : '0ms',
                  transitionDuration: '400ms'
                }}
                onClick={toggleMenu}
              >
                <div className="flex items-center justify-between group">
                  <span className="font-medium">{t(item.labelKey)}</span>
                  <svg
                    className="w-5 h-5 opacity-30 group-hover:opacity-60 group-hover:translate-x-1 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}

            <div className="pt-8">
                <div className="relative">
                    <button onClick={() => setLangMenuOpen(!isLangMenuOpen)} className="w-full text-left text-brand-dark text-lg py-4 px-4 rounded-xl hover:bg-brand-bg border-b border-gray-50 flex items-center justify-between group">
                        <span className="font-medium">{currentLanguageName}</span>
                        <Globe size={20} />
                    </button>
                    {isLangMenuOpen && (
                        <div className="pl-4">
                            {languages.map(lang => (
                                <a href="#" key={lang.code} onClick={() => changeLanguage(lang.code)} className="block py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    {lang.name}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="pt-8">
              <button
                className={`bg-brand-green hover:bg-opacity-90 text-white px-8 py-4 rounded-full transition-all duration-300 w-full text-lg font-medium shadow-lg hover:shadow-xl transform ${
                  isMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${navItems.length * 100 + 400}ms` : '0ms',
                  transitionDuration: '400ms'
                }}
                onClick={toggleMenu}
              >
                {t('getConsultation')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;