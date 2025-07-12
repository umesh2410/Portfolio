import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">
            <span className="text-gradient" data-text="Technical Skills">Technical Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            I specialize in full-stack web development with expertise in both frontend and backend technologies.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full shadow-lg shadow-primary/20"></div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-16">
          <div className="tech-icon" title="HTML5"><i className="fab fa-html5 text-3xl text-orange-500"></i></div>
          <div className="tech-icon" title="CSS3"><i className="fab fa-css3-alt text-3xl text-blue-500"></i></div>
          <div className="tech-icon" title="JavaScript"><i className="fab fa-js text-3xl text-yellow-400"></i></div>
          <div className="tech-icon" title="React"><i className="fab fa-react text-3xl text-cyan-400"></i></div>
          <div className="tech-icon" title="Laravel"><i className="fab fa-laravel text-3xl text-red-500"></i></div>
          <div className="tech-icon" title="PHP"><i className="fab fa-php text-3xl text-indigo-500"></i></div>
          <div className="tech-icon" title="Python"><i className="fab fa-python text-3xl text-blue-400"></i></div>
          <div className="tech-icon" title="Database"><i className="fas fa-database text-3xl text-blue-300"></i></div>
          <div className="tech-icon" title="Java"><i className="fab fa-java text-3xl text-red-500"></i></div>
          <div className="tech-icon" title="Git"><i className="fab fa-git-alt text-3xl text-orange-600"></i></div>
          <div className="tech-icon" title="Bootstrap"><i className="fab fa-bootstrap text-3xl text-purple-500"></i></div>
          <div className="tech-icon" title="Node.js"><i className="fab fa-node-js text-3xl text-green-500"></i></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-dark/30 p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/10">
            <h3 className="text-xl font-semibold mb-5 flex items-center">
              <i className="fas fa-code text-primary mr-3"></i>
              <span>Frontend & Backend</span>
            </h3>
            <div className="space-y-8">
              <div className="skill-item">
                <div className="flex justify-between mb-2">
                  <span className="skill-label flex items-center">
                    <i className="fab fa-html5 text-orange-500 mr-2"></i>
                    HTML5 & CSS3
                  </span>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="flex justify-between mb-2">
                  <span className="skill-label flex items-center">
                    <i className="fab fa-js text-yellow-400 mr-2"></i>
                    JavaScript
                  </span>
                  <span className="skill-percentage">50%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="flex justify-between mb-2">
                  <span className="skill-label flex items-center">
                    <i className="fab fa-php text-indigo-500 mr-2"></i>
                    PHP
                  </span>
                  <span className="skill-percentage">70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark/30 p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/10">
            <h3 className="text-xl font-semibold mb-5 flex items-center">
              <i className="fas fa-layer-group text-accent mr-3"></i>
              <span>Frameworks & Databases</span>
            </h3>
            <div className="space-y-8">
              <div className="skill-item">
                <div className="flex justify-between mb-2">
                  <span className="skill-label flex items-center">
                    <i className="fab fa-laravel text-red-500 mr-2"></i>
                    Laravel
                  </span>
                  <span className="skill-percentage">70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="flex justify-between mb-2">
                  <span className="skill-label flex items-center">
                    <i className="fab fa-java text-red-500 mr-2"></i>
                    Java
                  </span>
                  <span className="skill-percentage">50%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="flex justify-between mb-2">
                  <span className="skill-label flex items-center">
                    <i className="fas fa-database text-blue-400 mr-2"></i>
                    Database Design
                  </span>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
