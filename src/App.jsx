import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MdKeyboardArrowUp } from 'react-icons/md';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Studio from './pages/Studio';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Context
import { LanguageProvider } from './contexts/LanguageProvider';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = useCallback(() => {
    setShowButton(window.scrollY > 300);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-primary/90 hover:bg-primary text-white p-3
        rounded-full shadow-lg transition-all duration-300 z-50"
      aria-label="Scroll to top"
    >
      <MdKeyboardArrowUp className="h-6 w-6" />
    </button>
  );
};

const AppContent = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <header className="fixed w-full bg-primary/10 backdrop-blur-sm z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Navigation />
            </div>
          </div>
        </header>

        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/studio" element={<Studio />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
