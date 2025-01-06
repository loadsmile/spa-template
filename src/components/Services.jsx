import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Services = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  if (!t?.services) return null;

  const services = [
    {
      title: t.services.facial.shortTitle,
      image: "/images/facial.jpg",
      alt: t.services.facial.imageAlt,
      loading: "lazy",
      decoding: "async"
    },
    {
      title: t.services.massage.shortTitle,
      image: "/images/back-massage.jpg",
      alt: t.services.massage.imageAlt,
      loading: "lazy",
      decoding: "async"
    },
    {
      title: t.services.headSpa.shortTitle,
      image: "/images/hair.jpg",
      alt: t.services.headSpa.imageAlt,
      loading: "lazy",
      decoding: "async"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
          {t.services.sectionTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md
                hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center p-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800
                  group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>

              <div className="relative overflow-hidden aspect-w-16 aspect-h-12">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 md:h-72 object-cover transform
                    group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
