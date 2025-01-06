import { useContext } from 'react';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <footer className="bg-primary/10 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8">
          <div className="space-y-6">
            <h3 className="font-bold text-xl tracking-wide">STUDIO SPA</h3>

            <div className="space-y-4">
              <div className="flex items-center group">
                <MdLocationOn className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <p className="text-sm sm:text-base group-hover:text-primary transition-colors">
                  {t.footer.address}
                </p>
              </div>

              <div className="flex items-center group">
                <MdPhone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a
                  href="tel:912030345"
                  className="text-sm sm:text-base group-hover:text-primary transition-colors"
                >
                  912 345 678
                </a>
              </div>

              <div className="flex items-center group">
                <FaInstagram className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a
                  href="https://www.instagram.com/studiospa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base group-hover:text-primary transition-colors"
                >
                  @studiospa
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2">
              <span>{t.footer.developedBy} <span className="text-primary">♥</span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
