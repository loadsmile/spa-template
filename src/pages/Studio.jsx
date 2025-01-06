import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Studio = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  if (!t?.studio) return null;

  return (
    <div className="bg-white flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
          {t.studio.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/images/studio.jpg"
              alt={t.studio.imageAlt}
              className="w-full h-[500px] object-cover rounded-2xl shadow-md
                hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {t.studio.subtitle}
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {t.studio.description}
            </p>

            <div className="space-y-4">
              <h3 className="font-bold text-gray-900">
                {t.studio.hours.title}
              </h3>
              <p className="text-gray-700">{t.studio.hours.weekdays}</p>
              <p className="text-gray-700">{t.studio.hours.weekends}</p>
            </div>

            <a
              href="https://api.whatsapp.com/send/?phone=351912030345"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full
                hover:bg-opacity-90 transition-all duration-300 transform
                hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            >
              {t.buttons.visit}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;