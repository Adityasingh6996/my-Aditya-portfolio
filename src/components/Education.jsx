// src/components/Education.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import educationData from '../data/education';

function Education() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <motion.section
      id="education"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            My Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Click on any card to explore my academic journey
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl pt-12 pb-20">
          <div className="relative">
            {/* Enhanced vertical timeline line - spans all content */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full shadow-lg shadow-blue-500/20 top-0 bottom-0" style={{height: '100%', minHeight: `${educationData.length * 520}px`}}></div>
              {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className={`flex flex-col md:flex-row items-center w-full mb-20 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 * index, duration: 0.7 }}
              >
                {/* Enhanced card content - Fixed size */}
                <div className="w-full md:w-5/12 p-4">
                  <motion.div 
                    className={`bg-gradient-to-br from-gray-800/90 to-slate-800/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 relative z-10 border border-gray-600/50 group hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                      expandedCard === edu.id ? 'h-auto min-h-[400px]' : 'h-[400px]'
                    }`}
                    onClick={() => toggleCard(edu.id)}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      borderColor: "#3B82F6",
                      boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Click indicator */}
                    <div className="absolute top-4 right-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                      <svg className={`w-6 h-6 transform transition-transform duration-300 ${expandedCard === edu.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex flex-col h-full overflow-hidden">
                      {/* Logo and basic info - always visible */}
                      <div className="flex-shrink-0">
                        {edu.logo && (
                          <div className="flex justify-center mb-4">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <img
                                src={edu.logo}
                                alt={`${edu.institution} logo`}
                                className="relative w-16 h-16 object-contain rounded-full bg-gray-700/80 backdrop-blur-sm p-2 border border-gray-600/50"
                              />
                            </div>
                          </div>
                        )}
                        
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300 text-center">
                          {edu.degree}
                        </h3>
                        
                        {edu.specialization && (
                          <p className="text-base text-gray-200 mb-2 font-medium text-center">{edu.specialization}</p>
                        )}
                        
                        <p className="text-lg text-gray-100 mb-2 font-semibold text-center">{edu.institution}</p>
                      </div>

                      {/* Expandable content */}
                      <motion.div 
                        className="flex-grow flex flex-col justify-between"
                        animate={{
                          height: expandedCard === edu.id ? 'auto' : 'fit-content',
                          opacity: 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-center">
                          <p className="text-gray-400 text-sm mb-1 flex items-center justify-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {edu.location}
                          </p>
                          
                          <p className="text-gray-400 text-sm mb-3 flex items-center justify-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {edu.years}
                          </p>
                          
                          {edu.grade && (
                            <div className="flex justify-center mb-3">
                              <div className="inline-block bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-3 py-1">
                                <p className="text-sm font-semibold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                                  {edu.grade}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Expanded details */}
                        {expandedCard === edu.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-600/50"
                          >
                            <p className="text-gray-300 text-sm leading-relaxed text-center">{edu.description}</p>
                          </motion.div>
                        )}

                        {/* Click hint */}
                        {expandedCard !== edu.id && (
                          <div className="mt-auto pt-4">
                            <p className="text-gray-500 text-xs text-center italic">Click to view details</p>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced timeline dot */}
                <div className="hidden md:flex w-0 md:w-2/12 justify-center z-20">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur opacity-75 animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-full shadow-2xl border-4 border-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332-.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18s3.332-.477-4.5-1.253" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Empty div to balance layout */}
                <div className="hidden md:block w-5/12 p-4"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Education;