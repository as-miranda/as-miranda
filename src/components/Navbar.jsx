import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { LanguageContext, ThemeContext } from './Layout';
import { translations } from '../i18n';

const navLinks = [
  { key: 'home', name: 'Home', path: '/' },
  { key: 'curriculum', name: 'Curriculum', path: '/curriculum' },
  { key: 'blog', name: 'Blog & Creative', path: '/blog' },
  { key: 'contact', name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { lang, toggleLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
    setMobileMenuOpen(false);
  };

  const isDark = theme === 'dark';
  const bgScroll = isDark 
    ? 'bg-baseBlack/90 backdrop-blur-md border-b border-darkNeutral/40' 
    : 'bg-white/90 backdrop-blur-md border-b border-darkNeutral/20';
  const textColor = isDark && isScrolled ? 'text-white' : !isDark && isScrolled ? 'text-darkNeutral' : 'text-white';
  const navTextBase = isDark 
    ? isScrolled ? 'text-white hover:text-primary' : 'text-white hover:text-primary/80'
    : isScrolled ? 'text-darkNeutral hover:text-primary' : 'text-white hover:text-primary/80';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? bgScroll : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center rotate-3 shadow-lg shadow-primary/30">
              <span className="text-black font-bold text-xl">AS</span>
            </div>
            <span className={`${textColor} text-xl font-bold ml-2 hidden sm:inline transition-colors`}>
              Ana Sofia
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end
                className={({ isActive }) => {
                  const base = navTextBase;
                  const active = 'text-primary';
                  return `text-sm font-semibold transition-colors ${isActive ? active : base}`;
                }}
              >
                {t[link.key] || link.name}
              </NavLink>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'hover:bg-darkNeutral/20 text-gray-400 hover:text-primary'
                  : 'hover:bg-darkNeutral/10 text-darkNeutral/60 hover:text-primary'
              }`}
              title={isDark ? t.lightMode : t.darkMode}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Dropdown */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm font-semibold ${
                  isDark
                    ? 'hover:bg-darkNeutral/20 text-gray-400 hover:text-primary'
                    : 'hover:bg-darkNeutral/10 text-darkNeutral/60 hover:text-primary'
                }`}
              >
                <span>{lang === 'pt' ? '🇧🇷' : '🇺🇸'}</span>
                <span>{lang === 'pt' ? 'PT' : 'EN'}</span>
                <ChevronDown size={16} className={`transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {languageDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-40 rounded-lg shadow-xl z-50 border overflow-hidden ${
                  isDark
                    ? 'bg-baseBlack border-darkNeutral/40'
                    : 'bg-white border-darkNeutral/20'
                }`}>
                  <button
                    onClick={() => {
                      if (lang !== 'pt') toggleLanguage();
                      setLanguageDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center gap-2 transition-colors ${
                      lang === 'pt'
                        ? 'bg-primary text-baseBlack font-semibold'
                        : isDark
                        ? 'text-gray-400 hover:bg-darkNeutral/20'
                        : 'text-darkNeutral hover:bg-darkNeutral/10'
                    }`}
                  >
                    <span>🇧🇷</span>
                    <span>{t.portuguese}</span>
                  </button>
                  <button
                    onClick={() => {
                      if (lang !== 'en') toggleLanguage();
                      setLanguageDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center gap-2 transition-colors ${
                      lang === 'en'
                        ? 'bg-primary text-baseBlack font-semibold'
                        : isDark
                        ? 'text-gray-400 hover:bg-darkNeutral/20'
                        : 'text-darkNeutral hover:bg-darkNeutral/10'
                    }`}
                  >
                    <span>🇺🇸</span>
                    <span>{t.english}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden p-2 transition-colors ${
                isDark
                  ? isScrolled ? 'text-gray-400' : 'text-white'
                  : isScrolled ? 'text-darkNeutral' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t transition-all animate-in slide-in-from-top-5 shadow-xl ${
          isDark
            ? 'bg-baseBlack border-darkNeutral/40'
            : 'bg-white border-darkNeutral/20'
        }`}>
          <div className="p-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => {
                  const base = isDark
                    ? 'text-gray-400 py-2'
                    : 'text-darkNeutral py-2';
                  const active = 'text-primary font-semibold';
                  return `block w-full text-left text-lg border-b ${
                    isDark ? 'border-darkNeutral/20' : 'border-darkNeutral/20'
                  } last:border-0 transition-colors ${isActive ? active : base}`;
                }}
              >
                {t[link.key] || link.name}
              </NavLink>
            ))}
            <div className="border-t pt-4 space-y-3">
              <div className={isDark ? 'text-gray-500' : 'text-gray-600'}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3">{t.language}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      if (lang !== 'pt') toggleLanguage();
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                      lang === 'pt'
                        ? 'bg-primary text-baseBlack font-semibold'
                        : isDark
                        ? 'bg-darkNeutral/20 text-gray-400 hover:bg-darkNeutral/30'
                        : 'bg-darkNeutral/10 text-darkNeutral hover:bg-darkNeutral/20'
                    }`}
                  >
                    <span>🇧🇷</span>
                    <span className="hidden sm:inline">PT</span>
                  </button>
                  <button
                    onClick={() => {
                      if (lang !== 'en') toggleLanguage();
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                      lang === 'en'
                        ? 'bg-primary text-baseBlack font-semibold'
                        : isDark
                        ? 'bg-darkNeutral/20 text-gray-400 hover:bg-darkNeutral/30'
                        : 'bg-darkNeutral/10 text-darkNeutral hover:bg-darkNeutral/20'
                    }`}
                  >
                    <span>🇺🇸</span>
                    <span className="hidden sm:inline">EN</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

