import { useContext } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Welcome />
      <Services />
      <Reviews />
    </div>
  );
};

const Welcome = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  if (!t?.welcome) return null;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
          {t.welcome.title}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {t.welcome.description}
        </p>
      </div>
    </section>
  );
};

export default Home;
