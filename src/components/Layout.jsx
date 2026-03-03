import React, { createContext, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// language context
export const LanguageContext = createContext();

export default function Layout({ children }) {
  const [lang, setLang] = useState('en');
  const toggleLanguage = () => setLang((l) => (l === 'en' ? 'pt' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <Navbar />

      <main className="min-h-[70vh]">{children}</main>

      <Footer />

      {/* global animations and utilities */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(0); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
        .animate-in {
          animation-duration: 0.6s;
          animation-fill-mode: both;
        }
        .fade-in {
          animation-name: fadeIn;
        }
        .slide-in-from-bottom-5 {
          animation-name: slideInBottom;
        }
        .slide-in-from-right-5 {
          animation-name: slideInRight;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInBottom {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}} />
    </LanguageContext.Provider>
  );
}
