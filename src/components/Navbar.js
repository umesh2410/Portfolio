import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'skills', 'projects', 'resume', 'contact'];

      for (const sectionId of sections.reverse()) {
        const section = document.getElementById(sectionId);
        if (section && window.scrollY >= section.offsetTop - 200) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className={`fixed w-full z-50 ${scrolled ? 'py-2 bg-dark/95' : 'py-4 bg-dark/80'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <a
              href="#home"
              className={`nav-link text-gray-300 ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              <i className="fas fa-home mr-1 text-xs"></i> Home
            </a>
            <a
              href="#skills"
              className={`nav-link text-gray-300 ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}
            >
              <i className="fas fa-code mr-1 text-xs"></i> Skills
            </a>
            <a
              href="#projects"
              className={`nav-link text-gray-300 ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              <i className="fas fa-project-diagram mr-1 text-xs"></i> Projects
            </a>
            <a
              href="#resume"
              className={`nav-link text-gray-300 ${activeSection === 'resume' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('resume');
              }}
            >
              <i className="fas fa-file-alt mr-1 text-xs"></i> Resume
            </a>
            <a
              href="#contact"
              className={`nav-link text-gray-300 ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              <i className="fas fa-envelope mr-1 text-xs"></i> Contact
            </a>

            <a
              href="#contact"
              className="ml-4 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              <i className="fas fa-paper-plane mr-1"></i> Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-6">
            <button
              id="menu-btn"
              className={`hamburger ${mobileMenuOpen ? 'active' : ''} focus:outline-none`}
              onClick={toggleMobileMenu}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-dark/95 backdrop-blur-md ${mobileMenuOpen ? 'open' : ''}`}
      >
        <div className="flex flex-col items-center py-8 space-y-6">
          <a
            href="#home"
            className={`text-gray-300 hover:text-white ${activeSection === 'home' ? 'text-primary' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <i className="fas fa-home mr-2"></i> Home
          </a>
          <a
            href="#skills"
            className={`text-gray-300 hover:text-white ${activeSection === 'skills' ? 'text-primary' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}
          >
            <i className="fas fa-code mr-2"></i> Skills
          </a>
          <a
            href="#projects"
            className={`text-gray-300 hover:text-white ${activeSection === 'projects' ? 'text-primary' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            <i className="fas fa-project-diagram mr-2"></i> Projects
          </a>
          <a
            href="#resume"
            className={`text-gray-300 hover:text-white ${activeSection === 'resume' ? 'text-primary' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('resume');
            }}
          >
            <i className="fas fa-file-alt mr-2"></i> Resume
          </a>
          <a
            href="#contact"
            className={`text-gray-300 hover:text-white ${activeSection === 'contact' ? 'text-primary' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            <i className="fas fa-envelope mr-2"></i> Contact
          </a>

          <a
            href="#contact"
            className="mt-4 px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-full transition-all shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            <i className="fas fa-paper-plane mr-2"></i> Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
