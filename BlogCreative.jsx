import React, { useContext } from 'react';
import { Cpu, Sparkles, ArrowRight } from 'lucide-react';
import { LanguageContext, ThemeContext } from '../components/Layout';
import { translations } from '../i18n';

export default function BlogCreative() {
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const t = translations[lang].blog;
  const isDark = theme === 'dark';

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">{t.header}</h2>
          <h3 className={`text-4xl lg:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.subtitle}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item, i) => (
            <div key={i} className={`group border rounded-[2.5rem] overflow-hidden transition-all ${
              isDark
                ? 'bg-darkNeutral/20 border-darkNeutral/40 hover:border-primary hover:shadow-xl hover:shadow-primary/20'
                : 'bg-white border-darkNeutral/20 hover:shadow-2xl hover:shadow-darkNeutral/10'
            }`}>
              <div className={`aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ${
                isDark ? 'bg-darkNeutral/30' : 'bg-darkNeutral/10'
              }`}>
                <Cpu className="text-primary opacity-70" size={48} />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${
                    isDark
                      ? 'bg-primary/30 text-primary'
                      : 'bg-primary/10 text-primary'
                  }`}>
                    {item.type}
                  </span>
                  <span className={`text-xs font-bold ${isDark ? 'text-gray-600' : 'text-darkNeutral/50'}`}>
                    {item.date || ''}
                  </span>
                </div>
                <h4 className={`text-xl font-bold mb-3 group-hover:text-primary transition-colors ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.title}
                </h4>
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-500' : 'text-darkNeutral/70'}`}>
                  {item.desc}
                </p>
                <button className={`text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all ${
                  isDark
                    ? 'text-primary hover:text-primary'
                    : 'text-gray-900 hover:text-primary'
                }`}>
                  {t.readMore} <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
