import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../translations';

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  if (!t?.about) return null;

  return (
    <div className="bg-white flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
          {t.about.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              {t.about.paragraph1}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t.about.paragraph2}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t.about.paragraph3}
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg transform
            hover:scale-105 transition-transform duration-300">
            <img
              src="/images/facial-towel.jpg"
              alt={t.about.imageAlt}
              className="w-full h-[500px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
