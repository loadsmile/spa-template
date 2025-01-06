import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../translations';

const ServiceCard = ({ service }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl
      transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-9 rounded-t-2xl overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
        <p className="text-gray-700">{service.description}</p>

        {service.types && (
          <div className="space-y-3">
            {service.types.map((type, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-2">
                <h4 className="font-semibold text-primary">{type.name}</h4>
                <p className="text-sm text-gray-600">{type.info}</p>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-2 pt-4">
          {service.prices.map((price, idx) => (
            <div key={idx}
              className="flex justify-between items-center border-b border-gray-200 py-2">
              <div>
                <span className="font-medium">{price.duration}</span>
                {price.subtitle && (
                  <p className="text-sm text-gray-600">{price.subtitle}</p>
                )}
              </div>
              <span className="font-bold text-primary">{price.price}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleClick}
          disabled={isClicked}
          className={`mt-6 inline-block px-6 py-2 rounded-full transition-all duration-300
            ${isClicked ? 'bg-gray-300 text-gray-700' : 'bg-primary text-white hover:bg-opacity-90'}`}
        >
          {isClicked ? 'Request Sent!' : 'Schedule'}
        </button>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  if (!t?.servicesPage) return null;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
          {t.servicesPage.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.servicesPage.services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
      })
    ),
    prices: PropTypes.arrayOf(
      PropTypes.shape({
        duration: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        price: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired
};

export default ServicesPage;
