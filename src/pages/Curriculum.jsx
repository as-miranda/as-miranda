import React, { useContext } from 'react';
import { Mail, Github, MapPin, Download, GraduationCap, Briefcase } from 'lucide-react';
import { LanguageContext, ThemeContext } from '../components/Layout';
import { translations } from '../i18n';

export default function Curriculum() {
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const t = translations[lang].curriculum;
  const isDark = theme === 'dark';

  return (
    <div className="pt-32 pb-24 animate-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <div className={`border rounded-[3rem] p-10 lg:p-16 shadow-2xl transition-colors ${
          isDark
            ? 'bg-darkNeutral/20 border-darkNeutral/40 shadow-darkNeutral/10'
            : 'bg-white border-darkNeutral/20 shadow-darkNeutral/10'
        }`}>
          <div className={`flex flex-col md:flex-row justify-between items-start gap-8 border-b pb-12 mb-12 ${
            isDark ? 'border-darkNeutral/40' : 'border-darkNeutral/20'
          }`}>
            <div>
              <h1 className={`text-4xl font-black mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Ana Sofia Miranda
              </h1>
              <p className="text-lg text-primary font-bold mb-4 uppercase tracking-widest">
                {t.fullstackDeveloper}
              </p>
              <div className={`flex flex-wrap gap-4 text-sm font-medium ${isDark ? 'text-gray-500' : 'text-darkNeutral/70'}`}>
                <span className="flex items-center gap-1">
                  <Mail size={14} /> {t.contactEmail}
                </span>
                <span className="flex items-center gap-1">
                  <Github size={14} /> GitHub
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {t.location}
                </span>
              </div>
            </div>
            <a
              href="/CV_placeholder.pdf"
              download
              className={`px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg ${
                isDark
                  ? 'bg-primary text-baseBlack hover:bg-primary/90 shadow-primary/20'
                  : 'bg-baseBlack text-white hover:bg-darkNeutral shadow-darkNeutral/20'
              }`}
            >
              <Download size={18} /> {t.downloadCV}
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className={`flex items-center gap-2 text-xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <GraduationCap className="text-primary" /> {t.educationTitle}
                </h2>
                <div className="space-y-6">
                  <div className={`border-l-2 pl-6 relative ${isDark ? 'border-primary/40' : 'border-primary/30'}`}>
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7.5px] top-1"></div>
                    <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {t.educationDetails}
                    </h3>
                    <div className="text-sm font-bold text-primary mb-2">{t.graduation}</div>
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-darkNeutral/70'}`}>&nbsp;</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className={`flex items-center gap-2 text-xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <Briefcase className="text-primary" /> {t.experienceTitle}
                </h2>
                <div className="space-y-8">
                  {[
                    { title: t.placeholders, org: '', date: '', desc: '' },
                  ].map((job, i) => (
                    <div key={i} className={`border-l-2 pl-6 relative ${isDark ? 'border-primary/40' : 'border-primary/30'}`}>
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7.5px] top-1"></div>
                      <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{job.title}</h3>
                      <div className="text-sm font-bold text-primary mb-2">{job.org} {job.date}</div>
                      <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-darkNeutral/70'}`}>{job.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className={`flex items-center gap-2 text-xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <Briefcase className="text-primary" /> {t.researchTitle}
                </h2>
                <div className="space-y-8">
                  {[{ title: t.placeholders }].map((job, i) => (
                    <div key={i} className={`border-l-2 pl-6 relative ${isDark ? 'border-primary/30' : 'border-primary/20'}`}>
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7.5px] top-1"></div>
                      <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{job.title}</h3>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className={`flex items-center gap-2 text-xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <Briefcase className="text-primary" /> {t.awardsTitle}
                </h2>
                <div className="space-y-8">
                  {[{ title: t.placeholders }].map((job, i) => (
                    <div key={i} className={`border-l-2 pl-6 relative ${isDark ? 'border-primary/30' : 'border-primary/20'}`}>
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7.5px] top-1"></div>
                      <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{job.title}</h3>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className={`flex items-center gap-2 text-xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <Briefcase className="text-primary" /> {t.certsTitle}
                </h2>
                <div className="space-y-8">
                  {[{ title: t.placeholders }].map((job, i) => (
                    <div key={i} className={`border-l-2 pl-6 relative ${isDark ? 'border-primary/30' : 'border-primary/20'}`}>
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7.5px] top-1"></div>
                      <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{job.title}</h3>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className={`text-lg font-black mb-6 pb-2 border-b ${isDark ? 'text-white border-darkNeutral/40' : 'text-gray-900 border-darkNeutral/20'}`}>
                  Technical Skills
                </h2>
                <ul className="space-y-3">
                  {t.skills.map((skill) => (
                    <li key={skill} className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${isDark ? 'text-gray-500' : 'text-darkNeutral/70'}`}>
                        {skill}
                      </span>
                      <div className={`w-20 h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-darkNeutral/30' : 'bg-darkNeutral/15'}`}>
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
