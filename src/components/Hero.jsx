// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import motion

function Hero() {
  return (
    <motion.section
      id="home"
      className="flex items-center justify-center min-h-screen bg-gray-900 text-white"
      initial={{ opacity: 0 }} // Start completely transparent
      animate={{ opacity: 1 }}  // Fade in to full opacity
      transition={{ duration: 1 }} // Over 1 second
    >
      <motion.div
        className="text-center p-8"
        initial={{ y: 50, opacity: 0 }} // Start 50px down and transparent
        animate={{ y: 0, opacity: 1 }}   // Slide up to original position and fade in
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }} // After 0.5s delay, over 0.8s
      >
        <motion.h1 className="text-6xl font-extrabold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Hi, I'm Aditya
        </motion.h1>
        <motion.p className="text-2xl mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          A Passionate Web Developer
        </motion.p>
        <motion.button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Download CV
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
export default Hero;