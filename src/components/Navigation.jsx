import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../translations';

const NavLinks = ({ closeMenu, t }) => (
  <>
    <Link
      to="/about"
      onClick={closeMenu}
      className="font-semibold text-gray-800 hover:text-primary transition-colors"
    >
      {t.nav.about}
    </Link>
    <Link
      to="/services"
      onClick={closeMenu}
      className="font-semibold text-gray-800 hover:text-primary transition-colors"
    >
      {t.nav.services}
    </Link>
    <Link
      to="/studio"
      onClick={closeMenu}
      className="font-semibold text-gray-800 hover:text-primary transition-colors"
    >
      {t.nav.studio}
    </Link>
  </>
);

const LanguageToggle = ({ language, toggleLanguage }) => (
  <button
    onClick={toggleLanguage}
    className="px-3 py-1 rounded-full border border-primary text-sm font-medium
      hover:bg-primary hover:text-white transition-colors"
  >
    {language === 'pt' ? 'EN' : 'PT'}
  </button>
);

const Navigation = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  if (!t?.nav) return null;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-xl font-extrabold tracking-wide hover:text-primary transition-colors"
        >
          STUDIO SPA
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <NavLinks closeMenu={closeMenu} t={t} />
          </nav>
          <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:text-primary transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 px-4 z-50">
          <nav className="flex flex-col space-y-4">
            <NavLinks closeMenu={closeMenu} t={t} />
            <div className="pt-4 border-t border-gray-200">
              <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

NavLinks.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  t: PropTypes.shape({
    nav: PropTypes.shape({
      about: PropTypes.string.isRequired,
      services: PropTypes.string.isRequired,
      studio: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

LanguageToggle.propTypes = {
  language: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired
};

export default Navigation;
