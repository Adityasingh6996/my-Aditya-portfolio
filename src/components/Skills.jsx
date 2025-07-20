// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Assuming a simpler skillsData structure for this older version
import skillsData from '../data/skillsData';

function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-16 bg-gray-800 text-white" // Adjust background as per your original working version
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
          My Skills
        </motion.h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are some of the technologies and tools I work with.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {skillsData.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;