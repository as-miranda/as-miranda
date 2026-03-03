import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LanguageContext } from './Layout';
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
  const navigate = useNavigate();
  const { lang, toggleLanguage } = useContext(LanguageContext);
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

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center rotate-3 shadow-lg shadow-primary/30">
              <span className={`${isScrolled ? 'text-black' : 'text-white'} font-bold text-xl`}>AS</span>
            </div>
            <span className={`${isScrolled ? 'text-black' : 'text-white'} text-xl font-bold ml-2 hidden sm:inline`}>
              Ana Sofia Miranda
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end
                className={({ isActive }) => {
                  const base = isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white hover:text-primary/80';
                  const active = 'text-primary';
                  return `text-sm font-semibold transition-colors ${isActive ? active : base}`;
                }}
              >
                {t[link.key] || link.name}
              </NavLink>
            ))}
            <button
              onClick={toggleLanguage}
              className={`${isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white hover:text-primary/80'} text-sm font-semibold transition-colors`}
            >
              {t.toggle}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-600' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 space-y-4 animate-in fade-in slide-in-from-top-5 shadow-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-lg font-semibold text-gray-600 py-2 border-b border-gray-50 last:border-0"
            >
              {t[link.key] || link.name}
            </NavLink>
          ))}
          <button onClick={toggleLanguage} className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
            {t.toggle}
          </button>
        </div>
      )}
    </nav>
  );
}
