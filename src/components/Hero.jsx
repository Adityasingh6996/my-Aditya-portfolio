// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
// No need to import Link from react-scroll for a direct file download

function Hero() {
  return (
    <section
      id="home" // Ensure this ID matches your Navbar link
      className="relative h-screen flex flex-col items-center justify-center text-white
                 bg-gradient-to-br from-gray-900 to-indigo-950 overflow-hidden" // Added gradient and overflow-hidden
    >
      {/* Subtle background elements for glow effect */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <motion.div
        className="text-center z-10" // Ensure content is above background elements
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Aditya</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          A Passionate Web Developer
        </p>
        {/* Download CV Button */}
        <a
          href="/Aditya_Resume.pdf" // Path to your CV in the public folder
          download="Aditya_Resume.pdf" // This attribute prompts the download with this filename
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                     text-white font-bold py-3 px-8 rounded-full shadow-lg
                     hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;