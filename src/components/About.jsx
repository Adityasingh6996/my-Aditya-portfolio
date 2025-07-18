// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import motion

function About() {
  return (
    <motion.section
      id="about"
      className="py-16 bg-gray-800 text-white"
      initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
      whileInView={{ opacity: 1, y: 0 }} // Animate to full visibility and original position when in view
      viewport={{ once: true, amount: 0.3 }} // Play only once when 30% of element is in view
      transition={{ duration: 0.8 }} // Animation duration
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
          This is where your detailed "About Me" content will go.
          Talk about your background, passions, what drives you, and your professional journey.
          You can expand on this significantly.
        </motion.p>
      </div>
    </motion.section>
  );
}
export default About;