import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { LanguageContext } from './Layout';
import { translations } from '../i18n';

export default function Footer() {
  const navigate = useNavigate();
  const { lang } = React.useContext(LanguageContext);
  const t = translations[lang].footer;

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-primary text-xs font-bold">AS</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Ana Sofia Miranda</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Exploring the intersection of code, creativity, and education. Dedicated to building things that make learning and growing easier for everyone.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/curriculum" className="hover:text-primary">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Social</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-primary flex items-center gap-2">
                  <Github size={16} /> GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary flex items-center gap-2">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary flex items-center gap-2">
                  <Mail size={16} /> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-gray-100 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm font-medium">
            {t.copyright}
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest">
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
