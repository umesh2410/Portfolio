import React, { useEffect } from 'react';
import './styles/main.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = React.useState(true);
  const [fadeOut, setFadeOut] = React.useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setFadeOut(true), 1200);

    // Load effects script
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/js/effects.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      clearTimeout(timer);
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const fadeTimer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(fadeTimer);
    }
  }, [fadeOut]);

  if (loading) {
    return (
      <div className={`fixed inset-0 flex items-center justify-center bg-darker z-[9999] transition-opacity duration-500${fadeOut ? ' opacity-0 pointer-events-none' : ' opacity-100'}`}>
        <div className="liquid-loader">
          <div className="liquid-dot dot1"></div>
          <div className="liquid-dot dot2"></div>
          <div className="liquid-dot dot3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="App bg-darker text-light">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />

      {/* Back to Top Button */}
      <button
        id="back-to-top"
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default App;
