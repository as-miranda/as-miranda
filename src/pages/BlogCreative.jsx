import React, { useContext } from 'react';
import { Cpu, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { LanguageContext } from '../components/Layout';
import { translations } from '../i18n';

export default function BlogCreative() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].blog;

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">{t.header}</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-gray-900">{t.subtitle}</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all">
              <div className="aspect-video bg-gray-50 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-500">
                {/* icon placeholder */}
                <Cpu size={48} />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-primary/10 text-primary`}
                  >
                    {item.type}
                  </span>
                  <span className="text-xs font-bold text-gray-400">{item.date || ''}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <button className="text-sm font-bold text-gray-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                  {lang === 'en' ? 'Read More' : 'Leia Mais'} <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
