// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-6 text-center"> {/* Added dark background and text color */}
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aditya's Portfolio. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Placeholder for social media links/icons */}
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;