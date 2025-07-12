import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = ["Full Stack Developer", "Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setTimeout(() => {
      tick();
    }, typingSpeed);

    return () => { clearTimeout(ticker) };
  }, [displayText]);

  const tick = () => {
    let i = loopNum % texts.length;
    let fullText = texts[i];
    let updatedText = isDeleting ? fullText.substring(0, displayText.length - 1) : fullText.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (isDeleting) {
      setTypingSpeed(75);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-16 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Umesh Makwana</span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-400 mb-8 flex items-center">
              <span className="typing-text mr-2">{displayText}</span>
              <span className="typing-cursor">|</span>
            </div>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              I create responsive, interactive, and visually appealing websites that offer a smooth user
              experience. I enjoy bringing ideas to life through clean and creative web design.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-full font-medium transition-all modern-btn"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent border border-primary/30 hover:border-primary text-primary hover:text-white hover:bg-primary rounded-full font-medium transition-all view-projects-btn"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects <i className="fas fa-chevron-down ml-1"></i>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 animate-float profile-image">
              <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Umesh Makwana" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
