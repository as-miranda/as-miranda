import React, { useState, useContext } from 'react';
import { Mail, Linkedin, Award, Send, ArrowLeft } from 'lucide-react';
import emailjs from 'emailjs-com';
import { LanguageContext, ThemeContext } from '../components/Layout';
import { translations } from '../i18n';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const t = translations[lang].contact;
  const isDark = theme === 'dark';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    //service_id, template_id, public_key
    emailjs
      .sendForm('service_wlbg40g', 'template_4kmhaih', form, 'PoZk46MR-yvPSJo7Y')
      .then(
        () => {
          setSubmitted(true);
        },
        (error) => {
          console.error('EmailJS error:', error);
          setSubmitted(true);
        }
      );
  };

  return (
    <div className="pt-32 pb-24 animate-in slide-in-from-right-5 duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-6">{t.getInTouch}</h2>
            <h1 className={`text-5xl font-black mb-8 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t.headline}
            </h1>
            <p className={`text-lg mb-12 leading-relaxed ${isDark ? 'text-gray-500' : 'text-darkNeutral/70'}`}>
              {t.body}
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-primary ${
                  isDark ? 'bg-darkNeutral/30' : 'bg-darkNeutral/10'
                }`}>
                  <Mail />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
                    {t.emailLabel}
                  </p>
                  <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t.contactEmail}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-primary ${
                  isDark ? 'bg-darkNeutral/30' : 'bg-darkNeutral/10'
                }`}>
                  <Linkedin />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
                    {t.connectLabel}
                  </p>
                  <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t.contactLinkedin}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`border rounded-[3rem] p-8 lg:p-12 shadow-2xl transition-colors ${
            isDark
              ? 'bg-darkNeutral/20 border-darkNeutral/40 shadow-darkNeutral/10'
              : 'bg-white border-darkNeutral/20 shadow-darkNeutral/10'
          }`}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={`text-sm font-bold ml-1 ${isDark ? 'text-gray-400' : 'text-darkNeutral/80'}`}>
                      {t.formName}
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder={t.namePlaceholder}
                      className={`w-full px-5 py-4 border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all outline-none ${
                        isDark
                          ? 'bg-darkNeutral/30 text-white placeholder-darkNeutral/50'
                          : 'bg-darkNeutral/10 text-gray-900 placeholder-darkNeutral/40'
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-sm font-bold ml-1 ${isDark ? 'text-gray-400' : 'text-darkNeutral/80'}`}>
                      {t.formEmail}
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder={t.emailPlaceholder}
                      className={`w-full px-5 py-4 border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all outline-none ${
                        isDark
                          ? 'bg-darkNeutral/30 text-white placeholder-darkNeutral/50'
                          : 'bg-darkNeutral/10 text-gray-900 placeholder-darkNeutral/40'
                      }`}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className={`text-sm font-bold ml-1 ${isDark ? 'text-gray-400' : 'text-darkNeutral/80'}`}>
                    {t.formSubject}
                  </label>
                  <input
                    name="subject"
                    type="text"
                    placeholder={t.subjectPlaceholder}
                    className={`w-full px-5 py-4 border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all outline-none ${
                      isDark
                        ? 'bg-darkNeutral/30 text-white placeholder-darkNeutral/50'
                        : 'bg-darkNeutral/10 text-gray-900 placeholder-darkNeutral/40'
                    }`}
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-sm font-bold ml-1 ${isDark ? 'text-gray-400' : 'text-darkNeutral/80'}`}>
                    {t.formMessage}
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder={t.messagePlaceholder}
                    className={`w-full px-5 py-4 border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all outline-none resize-none ${
                      isDark
                        ? 'bg-darkNeutral/30 text-white placeholder-darkNeutral/50'
                        : 'bg-darkNeutral/10 text-gray-900 placeholder-darkNeutral/40'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-5 bg-primary text-black rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/30"
                >
                  <Send size={20} /> {t.sendMessage}
                </button>
              </form>
            ) : (
              <div className="text-center py-12 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={40} />
                </div>
                <h3 className={`text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t.sentTitle}
                </h3>
                <p className={`mb-8 ${isDark ? 'text-gray-500' : 'text-darkNeutral/70'}`}>
                  {t.sentBody}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary font-bold flex items-center gap-2 mx-auto hover:underline transition-all"
                >
                  <ArrowLeft size={16} /> {t.sendAnother}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
