import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Code2, Cpu, BookOpen } from 'lucide-react';
import { LanguageContext, ThemeContext } from '../components/Layout';
import { translations } from '../i18n';

export default function Home() {
  const navigate = useNavigate();
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const t = translations[lang];
  const isDark = theme === 'dark';

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden transition-colors ${
        isDark ? 'bg-baseBlack text-white' : 'bg-white text-gray-900'
      }`}>
        {/* background blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className={`absolute top-10 left-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl ${
            isDark ? 'bg-primary/20' : 'bg-primary/10'
          }`} />
          <div className={`absolute bottom-10 right-20 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl ${
            isDark ? 'bg-darkNeutral/20' : 'bg-darkNeutral/10'
          }`} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl lg:text-8xl font-extrabold text-primary leading-tight">
                Ana Sofia
              </h1>
              <h2 className={`text-3xl lg:text-4xl font-bold mt-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t.curriculum.fullstackDeveloper}
              </h2>
              <p className={`max-w-xl text-lg lg:text-xl mt-6 leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-darkNeutral/80'
              }`}>
                {t.hero.bio}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
                <button
                  onClick={() => navigate('/blog')}
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-black rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl hover:-translate-y-1"
                >
                  {t.hero.btnPrimary} <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate('/curriculum')}
                  className={`w-full sm:w-auto px-8 py-4 border rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                    isDark
                      ? 'border-darkNeutral/40 text-white hover:border-darkNeutral/60 hover:bg-darkNeutral/10'
                      : 'border-darkNeutral/30 text-gray-900 hover:border-darkNeutral/50 hover:bg-darkNeutral/5'
                  }`}
                >
                  {t.hero.btnSecondary}
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className={`aspect-square rounded-[3rem] relative overflow-hidden flex items-center justify-center ${
                isDark ? 'bg-darkNeutral/20' : 'bg-darkNeutral/10'
              }`}>
                <div className="text-primary/50">
                  <Code2 size={120} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Feature Grid */}
      <section className={`py-24 transition-colors ${
        isDark ? 'bg-darkNeutral/10 text-white' : 'bg-darkNeutral/5 text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-16">{t.focusHeader}</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {t.focus.map((item, i) => {
              const Icon = [Code2, Cpu, BookOpen][i] || Code2;
              return (
                <div key={i} className={`p-8 rounded-[2rem] transition-colors ${
                  isDark
                    ? 'bg-darkNeutral/20 border border-darkNeutral/40 hover:border-primary hover:shadow-xl hover:shadow-primary/20'
                    : 'bg-white border border-darkNeutral/20 hover:shadow-lg hover:shadow-darkNeutral/10'
                }`}>
                  <Icon className="text-primary mb-6" size={32} />
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className={isDark ? 'text-gray-400' : 'text-darkNeutral/70'}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
