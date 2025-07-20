// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import educationData from '../data/education';

function Education() {
  return (
    <motion.section
      id="education"
      className="py-16 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My Education
        </motion.h2>

        <div className="relative mx-auto max-w-4xl"> {/* Container for the timeline */}
          {/* Vertical line of the timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`flex items-center w-full my-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} // Alternate card sides
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * index, duration: 0.7 }}
            >
              {/* Card content */}
              <div className="w-1/2 p-4">
                <div className="bg-gray-800 rounded-lg shadow-xl p-6 relative z-10 border-2 border-gray-700 hover:border-blue-500 transition-colors duration-300">
                  {edu.logo && (
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-16 h-16 object-contain mb-4 mx-auto rounded-full bg-gray-700 p-2"
                    />
                  )}
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2">{edu.degree}</h3>
                  {edu.specialization && <p className="text-xl text-gray-300 mb-1">{edu.specialization}</p>}
                  <p className="text-xl text-gray-200 mb-1">{edu.institution}</p>
                  <p className="text-gray-400 text-md mb-2">{edu.location}</p>
                  <p className="text-gray-400 text-md mb-4">{edu.years}</p>
                  {edu.grade && <p className="text-lg font-medium text-purple-300 mb-4">{edu.grade}</p>}
                  <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="w-0 md:w-1/12 flex justify-center z-20">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-full shadow-lg">
                  {/* You can add an icon here if desired, e.g., <FaGraduationCap /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18s-3.332-.477-4.5-1.253" />
                  </svg>
                </div>
              </div>

              <div className="w-1/2 p-4"></div> {/* Empty div to balance the layout */}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Education;