import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">
            <span className="text-gradient">My Resume</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Download my resume to learn more about my professional experience
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4"></div>
        </div>

        <div className="resume-container rounded-xl p-8 max-w-4xl mx-auto shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-white">Umesh Makwana</h3>
              <p className="text-gray-300 mb-4">Full Stack Developer</p>
            </div>
            <div className="flex-grow"></div>
            <a
              href="/Portfolio/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-full font-medium transition-all modern-btn transform hover:scale-105 shadow-lg"
            >
              Download Resume <i className="fas fa-download ml-2"></i>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h4 className="text-xl font-semibold mb-6 text-gradient">Education</h4>
              <div className="space-y-8">
                <div className="timeline-item">
                  <h5 className="text-gray-100 text-lg font-medium mb-1">10th - SSC   </h5>
                  <p className="text-gray-450 mb-1">2019-2020</p>
                  <p className="text-gray-400">
                    Shree Naimisharanya School Bhavnagar
                  </p>
                  <p className="text-gray-400 mb-1">Percentage: 67.83%</p>
                </div>
                <div className="timeline-item">
                <h5 className="text-gray-100 text-lg font-medium mb-1">Diploma in IT</h5>
                  <p className="text-gray-450 mb-1">2020-2023</p>
                  <p className="text-gray-400">
                  Sir Bhavsinhji Polytechnic Institute
                  </p>
                  <p className="text-gray-400 mb-1">Duration: 3 Years</p>
                  <p className="text-gray-400 mb-1">CGPA: 7.35</p>
                </div>
                <div className="timeline-item">
                <h5 className="text-gray-100 text-lg font-medium mb-1">BE in Information Technology</h5>
                  <p className="text-gray-450 mb-1">2023-2026</p>
                  <p className="text-gray-400">
                  LDRP Institute of Technology and Research Gandhinagar
                  </p>
                  <p className="text-gray-400 mb-1"> Currently Pursuing</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6 text-gradient">Work Experience</h4>
              <div className="space-y-8">
                <div className="timeline-item">
                  <h5 className="text-lg font-medium mb-1">Full Stack Developer</h5>
                  <p className="text-gray-400 mb-2"> Paykun • 2025 - Present</p>
                  <p className="text-gray-500 mb-2">
                  Developed responsive web applications using modern frameworks
                  </p>
                  <ul className="text-gray-500 space-y-1">
                    <li className="flex items-start">
                      <i className="fas fa-caret-right text-primary/70 mr-2 mt-1 text-xs"></i>
                      Developed responsive websites for various clients
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-caret-right text-primary/70 mr-2 mt-1 text-xs"></i>
                      Implemented e-commerce functionality with secure payment processing
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-caret-right text-primary/70 mr-2 mt-1 text-xs"></i>
                      Optimized database queries for improved performance
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="text-xl font-semibold mb-6 text-gradient">Certifications</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="certificate-card p-5 rounded-lg">
                <h5 className="text-lg font-medium mb-2">Python in Data Science</h5>
                <p className="text-gray-400 mb-1">NPTEL • 2024</p>
                <a
                  href="/Portfolio/Python.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors inline-flex items-center"
                >
                  View Certificate <i className="fas fa-external-link-alt ml-1 text-xs"></i>
                </a>
              </div>
              <div className="certificate-card p-5 rounded-lg">
                <h5 className="text-lg font-medium mb-2">TatvaSoft Internship Certificate</h5>
                <p className="text-gray-400 mb-1">TatvaSoft • 2025</p>
                <a
                  href="/Portfolio/tatvasoft.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors inline-flex items-center"
                >
                  View Certificate <i className="fas fa-external-link-alt ml-1 text-xs"></i>
                </a>
              </div>
              <div className="certificate-card p-5 rounded-lg">
                <h5 className="text-lg font-medium mb-2">Innovating the Future</h5>
                <p className="text-gray-400 mb-1">IEEE • 2024</p>
                <a
                  href="/Portfolio/Innovating_the_future.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors inline-flex items-center"
                >
                  View Certificate <i className="fas fa-external-link-alt ml-1 text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
