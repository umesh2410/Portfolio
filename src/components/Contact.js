import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real implementation, you would use a service like EmailJS or Formspree
    // For now, we'll just show a success message

    Swal.fire({
      title: 'Success!',
      text: `Thank you for your message, ${formData.name}! I'll get back to you soon.`,
      icon: 'success',
      confirmButtonText: 'OK'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="card-3d bg-dark/50 rounded-xl p-8 backdrop-blur-sm border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a href="mailto:contact@umeshmakwana.com" className="text-gray-400 hover:text-primary transition-colors">
                      makwanau2410@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-gray-400">Bhavnagar, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <i className="fas fa-globe text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Social Media</h4>
                    <div className="flex space-x-3 mt-2">
                      <a href="https://github.com/umesh2410" target="_blank" rel="noopener noreferrer" className="social-icon github w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/makwana-umesh-1333a4312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon linkedin w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="https://www.instagram.com/umesh.r.makwana/?igsh=MWFtNWdyNGlnZGsydw%3D%3D&utm_source=ig_contact_invite#" target="_blank" rel="noopener noreferrer" className="social-icon instagram w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form id="contact-form" className="space-y-6 contact-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light placeholder-gray-500"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium flex items-center justify-center transition-colors modern-btn"
                >
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
