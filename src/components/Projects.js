import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* DIAMARTISIAN */}
          <div className="card-3d project-card rounded-xl overflow-hidden relative">
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="DIAMARTISIAN"
                className="w-full h-full object-cover project-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">DIAMARTISIAN</h3>
              <p className="text-gray-400 mb-4">
                E-commerce platform for diamond artisans with product listings, cart functionality, and
                secure checkout.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag">HTML/CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">PHP</span>
                <span className="tag">MySQL</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://https://github.com/umesh2410/DIAMARTISA.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                  onClick={(e) => {
                    const btn = e.currentTarget;
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const ripple = btn.querySelector('.ripple');
                    if (ripple) {
                      ripple.style.left = `${x}px`;
                      ripple.style.top = `${y}px`;
                    } else {
                      const rippleEl = document.createElement('span');
                      rippleEl.classList.add('ripple');
                      rippleEl.style.left = `${x}px`;
                      rippleEl.style.top = `${y}px`;
                      btn.appendChild(rippleEl);

                      setTimeout(() => {
                        btn.removeChild(rippleEl);
                      }, 500);
                    }
                  }}
                >
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
          </div>

          {/* EMPLOYEE MANAGEMENT SYSTEM */}
          <div className="card-3d project-card rounded-xl overflow-hidden relative">
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Employee Management System"
                className="w-full h-full object-cover project-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Employee Management System</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive HR system with attendance tracking, payroll management, and employee
                performance analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag">Laravel</span>
                <span className="tag">MySQL</span>
                <span className="tag">Bootstrap</span>
                <span className="tag">jQuery</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                  onClick={(e) => {
                    const btn = e.currentTarget;
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const ripple = btn.querySelector('.ripple');
                    if (ripple) {
                      ripple.style.left = `${x}px`;
                      ripple.style.top = `${y}px`;
                    } else {
                      const rippleEl = document.createElement('span');
                      rippleEl.classList.add('ripple');
                      rippleEl.style.left = `${x}px`;
                      rippleEl.style.top = `${y}px`;
                      btn.appendChild(rippleEl);

                      setTimeout(() => {
                        btn.removeChild(rippleEl);
                      }, 500);
                    }
                  }}
                >
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
