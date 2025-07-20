// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      className="py-16 bg-gray-800 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I'm Aditya Kumar Singh, a driven Computer Science undergraduate specializing in Data Science at UPES, Dehradun. I have a solid foundation in machine learning, data analysis, and web development, backed by hands-on learning and virtual internship experience.
          Skilled in Python, SQL, JavaScript, and data tools like Scikit-learn, Pandas, and Git, I enjoy solving real-world problems through code. I'm always eager to learn, build, and grow in dynamic tech environments.
        </motion.p>
      </div>
    </motion.section>
  );
}
export default About;