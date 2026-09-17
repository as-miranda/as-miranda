import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { LanguageContext, ThemeContext } from './Layout';
import { translations } from '../i18n';

export default function Footer() {
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const t = translations[lang].footer;
  const isDark = theme === 'dark';

  return (
    <footer className={`pt-24 pb-12 transition-colors ${
      isDark
        ? 'bg-baseBlack border-t border-darkNeutral/40'
        : 'bg-white border-t border-darkNeutral/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16`}>
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                isDark ? 'bg-white' : 'bg-baseBlack'
              }`}>
                <span className={`text-primary text-xs font-bold`}>AS</span>
              </div>
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Ana Sofia Miranda
              </span>
            </div>
            <p className={`max-w-sm leading-relaxed ${isDark ? 'text-gray-500' : 'text-darkNeutral/70'}`}>
              {t.description}
            </p>
          </div>
          <div>
            <h4 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.navigation}</h4>
            <ul className={`space-y-4 text-sm font-medium ${isDark ? 'text-gray-500' : 'text-darkNeutral/70'}`}>
              <li>
                <Link to="/" className={`transition-colors ${isDark ? 'hover:text-primary' : 'hover:text-primary'}`}>
                  {t.home}
                </Link>
              </li>
              <li>
                <Link to="/curriculum" className={`transition-colors ${isDark ? 'hover:text-primary' : 'hover:text-primary'}`}>
                  {t.curriculum}
                </Link>
              </li>
              <li>
                <Link to="/blog" className={`transition-colors ${isDark ? 'hover:text-primary' : 'hover:text-primary'}`}>
                  {t.blog}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.social}</h4>
            <ul className={`space-y-4 text-sm font-medium ${isDark ? 'text-gray-500' : 'text-darkNeutral/70'}`}>
              <li>
                <a href="https://github.com/as-miranda" className={`transition-colors flex items-center gap-2 ${isDark ? 'hover:text-primary' : 'hover:text-primary'}`}>
                  <Github size={16} /> {t.github}
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/as-miranda" className={`transition-colors flex items-center gap-2 ${isDark ? 'hover:text-primary' : 'hover:text-primary'}`}>
                  <Linkedin size={16} /> {t.linkedin}
                </a>
              </li>
              <li>
                <a href="src/pages/Contact.jsx" className={`transition-colors flex items-center gap-2 ${isDark ? 'hover:text-primary' : 'hover:text-primary'}`}>
                  <Mail size={16} /> {t.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${
          isDark ? 'border-darkNeutral/40' : 'border-darkNeutral/20'
        }`}>
          <p className={`text-sm font-medium ${isDark ? 'text-gray-600' : 'text-darkNeutral/50'}`}>
            {t.copyright}
          </p>
          <div className={`flex items-center gap-2 text-xs uppercase tracking-widest ${isDark ? 'text-gray-600' : 'text-darkNeutral/50'}`}>
            <span>Built with</span>
            <div className="text-primary font-bold">{t.builtWithReact}</div>
            <span>&</span>
            <div className="text-primary font-bold">{t.builtWithTailwind}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
