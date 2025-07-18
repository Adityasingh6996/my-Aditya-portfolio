// src/components/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="mailto:your.email@example.com" // REPLACE with your actual email
            className="text-blue-400 hover:underline text-xl font-medium"
          >
            your.email@example.com
          </a>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/yourprofile" // REPLACE with your LinkedIn profile
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition duration-300 text-3xl"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername" // REPLACE with your GitHub username
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition duration-300 text-3xl"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; // <--- THIS LINE IS CRUCIAL! MAKE SURE IT'S HERE.