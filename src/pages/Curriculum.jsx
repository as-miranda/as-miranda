import React, { useContext } from 'react';
import { Mail, Github, User, Download, GraduationCap, Briefcase } from 'lucide-react';
import { LanguageContext } from '../components/Layout';
import { translations } from '../i18n';

export default function Curriculum() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].curriculum;

  return (
    <div className="pt-32 pb-24 animate-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white border border-gray-100 rounded-[3rem] p-10 lg:p-16 shadow-2xl shadow-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-gray-100 pb-12 mb-12">
            <div>
              <h1 className="text-4xl font-black text-gray-900 mb-2">Ana Sofia Miranda</h1>
              <p className="text-lg text-primary font-bold mb-4 uppercase tracking-widest">Fullstack Developer</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-medium">
                <span className="flex items-center gap-1"><Mail size={14} /> miranda.00042@gmail.com</span>
                <span className="flex items-center gap-1"><Github size={14} /> LINK HERE</span>
                <span className="flex items-center gap-1"><User size={14} /> Belo Horizonte, MG, Brazil</span>
              </div>
            </div>
            <a href="/CV_placeholder.pdf" download className="bg-black text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-900 transition-all shadow-lg shadow-black/20">
              <Download size={18} /> Download CV
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="flex items-center gap-2 text-xl font-black text-gray-900 mb-6">
                  <GraduationCap className="text-primary" /> {t.educationTitle}
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7.5px] top-1"></div>
                    <h3 className="font-bold text-lg text-gray-900">{t.educationDetails}</h3>
                    <div className="text-sm font-bold text-primary mb-2">{t.graduation}</div>
                    <p className="text-gray-600 text-sm">&nbsp;</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-2 text-xl font-black text-gray-900 mb-6">
                  <Briefcase className="text-primary" /> {t.experienceTitle}
                </h2>
                <div className="space-y-8">
                  {[
                    { title: t.placeholders, org: '', date: '', desc: '' },
                  ].map((job, i) => (
                    <div key={i} className="border-l-2 border-primary/20 pl-6 relative">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7.5px] top-1"></div>
                      <h3 className="font-bold text-lg text-gray-900">{job.title}</h3>
                      <div className="text-sm font-bold text-primary mb-2">{job.org} {job.date}</div>
                      <p className="text-gray-600 text-sm">{job.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-2 text-xl font-black text-gray-900 mb-6">
                  <Briefcase className="text-primary" /> {t.researchTitle}
                </h2>
                <div className="space-y-8">
                  {[{ title: t.placeholders }].map((job, i) => (
                    <div key={i} className="border-l-2 border-primary/20 pl-6 relative">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7.5px] top-1"></div>
                      <h3 className="font-bold text-lg text-gray-900">{job.title}</h3>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-2 text-xl font-black text-gray-900 mb-6">
                  <Briefcase className="text-primary" /> {t.awardsTitle}
                </h2>
                <div className="space-y-8">
                  {[{ title: t.placeholders }].map((job, i) => (
                    <div key={i} className="border-l-2 border-primary/20 pl-6 relative">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7.5px] top-1"></div>
                      <h3 className="font-bold text-lg text-gray-900">{job.title}</h3>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-2 text-xl font-black text-gray-900 mb-6">
                  <Briefcase className="text-primary" /> {t.certsTitle}
                </h2>
                <div className="space-y-8">
                  {[{ title: t.placeholders }].map((job, i) => (
                    <div key={i} className="border-l-2 border-primary/20 pl-6 relative">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7.5px] top-1"></div>
                      <h3 className="font-bold text-lg text-gray-900">{job.title}</h3>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-lg font-black text-gray-900 mb-6 border-b border-gray-100 pb-2">Technical Skills</h2>
                <ul className="space-y-3">
                  {t.skills.map((skill) => (
                    <li key={skill} className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm font-medium">{skill}</span>
                      <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[85%]"></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
