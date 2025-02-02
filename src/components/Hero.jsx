import { useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  if (!t) return null;

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="/images/spa.jpg"
          alt="Spa ambience"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center
          text-white mb-8 max-w-4xl mx-auto leading-tight">
          {t.hero.title}
        </h1>

        <button
          onClick={handleClick}
          disabled={isClicked}
          className={`px-8 py-3 rounded-full transition-all duration-300 transform
            hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl
            ${isClicked ? 'bg-gray-300 text-gray-700' : 'bg-primary/90 hover:bg-primary text-white'}`}
        >
          {isClicked ? 'Request Sent!' : t.hero.button}
        </button>
      </div>
    </div>
  );
};

export default Hero;
