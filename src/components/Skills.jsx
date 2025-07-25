// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skillsData'; // Import the skills data
// Import all necessary Fa icons. Si icons are handled via SiIcons object.
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaAngular, FaNodeJs, FaJava, FaPython, FaBootstrap, FaGitAlt, FaFigma, FaChartBar, FaGithub } from 'react-icons/fa';
// No direct Si icon imports here, as they are now accessed via SiIcons.
// However, ensure react-icons is installed: npm install react-icons

function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-16 bg-gray-900 text-white" // Using a dark background
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
          My SKILLS
        </motion.h2>

        {/* Grid for skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2 xl:grid-cols-2"> {/* Responsive grid */}
          {skillsData.map((categoryData, categoryIndex) => (
            <motion.div
              key={categoryData.category} // Use category name as key for stability
              className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 * categoryIndex, duration: 0.6 }}
            >
              <h3 className="text-3xl font-semibold text-center text-blue-400 mb-6 border-b border-gray-600 pb-4">
                {categoryData.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Responsive grid for skills within category */}
                {categoryData.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name} // Use skill name as key for stability
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700 shadow-md text-gray-200
                               transition-all duration-200 cursor-pointer border border-gray-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: 0.05 * skillIndex + 0.1 * categoryIndex, duration: 0.4 }}
                    // Hover effect: slight scale, subtle shadow, and border color change
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 4px 10px rgba(128, 90, 213, 0.4)", // Purple glow shadow
                      borderColor: "#8B5CF6", // Purple border on hover
                      transition: { duration: 0.15 }
                    }}
                  >
                    {skill.icon && (
                      // Render the icon component. skill.icon is now the component itself.
                      <skill.icon size={36} style={{ color: skill.color || 'white' }} className="mb-2" />
                    )}
                    {!skill.icon && ( // Fallback for skills without a specific icon
                      <div className="h-9 w-9 flex items-center justify-center text-lg font-bold rounded-full bg-blue-600 mb-2">
                        {skill.name.charAt(0)}
                      </div>
                    )}
                    <span className="text-xs text-center font-medium">{skill.name}</span> {/* Smaller text for skill name */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
