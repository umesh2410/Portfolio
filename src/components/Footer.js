import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          

          {/* Copyright Info */}
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              Designed & Built with <span className="text-primary">❤</span> by Umesh Makwana
            </p>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
