import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto text-center">
      <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Aahzi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
