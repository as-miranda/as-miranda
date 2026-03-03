import React, { useState, useContext } from 'react';
import { Mail, Linkedin, Award, Send, ArrowLeft } from 'lucide-react';
import emailjs from 'emailjs-com';
import { LanguageContext } from '../components/Layout';
import { translations } from '../i18n';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].contact;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // using EmailJS service
    /*
      To configure EmailJS: 
      1. Sign up at emailjs.com, create a service and template.
      2. Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your credentials below.
      3. Ensure the template fields match the form input names (name, email, subject, message).
    */
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
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
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-6">{lang === 'en' ? 'Get in touch' : 'Entre em contato'}</h2>
            <h1 className="text-5xl font-black text-gray-900 mb-8 leading-tight">{t.headline}</h1>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed">
              {t.body}
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.emailLabel}</p>
                  <p className="text-lg font-bold text-gray-900">miranda.00042@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary">
                  <Linkedin />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.connectLabel}</p>
                  <p className="text-lg font-bold text-gray-900">LINK HERE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-[3rem] p-8 lg:p-12 shadow-2xl shadow-gray-100">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">{lang === 'en' ? 'Name' : 'Nome'}</label>
                    <input name="name" type="text" required placeholder="John Smith" className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">{lang === 'en' ? 'Email' : 'E-mail'}</label>
                    <input name="email" type="email" required placeholder="john@email.com" className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{lang === 'en' ? 'Subject' : 'Assunto'}</label>
                  <input name="subject" type="text" placeholder="Project collaboration" className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{lang === 'en' ? 'Message' : 'Mensagem'}</label>
                  <textarea name="message" rows="4" placeholder="How can I help you?" className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all outline-none resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-primary text-black rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/30">
                  <Send size={20} /> {lang === 'en' ? 'Send Message' : 'Enviar Mensagem'}
                </button>
              </form>
            ) : (
              <div className="text-center py-12 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={40} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{t.sentTitle}</h3>
                <p className="text-gray-500 mb-8">{t.sentBody}</p>
                <button onClick={() => setSubmitted(false)} className="text-primary font-bold flex items-center gap-2 mx-auto hover:underline">
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
