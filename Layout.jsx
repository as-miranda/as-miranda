import React, { createContext, useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Language context
export const LanguageContext = createContext();

// Theme context
export const ThemeContext = createContext();

export default function Layout({ children }) {
  const [lang, setLang] = useState(() => {
    // Load language from localStorage or default to 'pt'
    const savedLang = localStorage.getItem('language');
    return savedLang || 'pt';
  });

  const [theme, setTheme] = useState(() => {
    // Load theme from localStorage or default to 'dark'
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'pt' : 'en';
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Update HTML class for Tailwind dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.documentElement.style.colorScheme = 'light';
    }
  }, [theme]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`${theme === 'dark' ? 'dark' : 'light'}`}>
          <Navbar />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

