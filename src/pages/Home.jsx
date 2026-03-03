import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, User, Code2, Cpu, BookOpen } from 'lucide-react';
import { LanguageContext } from '../components/Layout';
import { translations } from '../i18n';

export default function Home() {
  const navigate = useNavigate();
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-black text-white">
        {/* background blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-black/20 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl lg:text-8xl font-extrabold text-primary leading-tight">
                Ana Sofia Miranda
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">
                Fullstack Developer
              </h2>
              <p className="max-w-xl text-lg lg:text-xl text-gray-300 mt-6 leading-relaxed">
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
                  className="w-full sm:w-auto px-8 py-4 bg-white text-black border border-gray-200 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                >
                  {t.hero.btnSecondary}
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-[3rem] bg-black/5 relative overflow-hidden flex items-center justify-center">
                <User size={120} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Feature Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-16">{t.focusHeader}</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {t.focus.map((item, i) => {
              const Icon = [Code2, Cpu, BookOpen][i] || Code2;
              return (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100">
                  <Icon className="text-primary mb-6" size={32} />
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
