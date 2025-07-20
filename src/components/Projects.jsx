// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion'; // <-- IMPORTANT: Make sure framer-motion is imported!
import projects from '../data/projects'; // Import the projects data

function Projects() {
  return (
    <motion.section // Added motion.section for animations
      id="projects"
      className="py-16 bg-gray-800 text-white" // Reverted to dark theme for consistency
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 // Added motion.h2 for animations
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Loop through the projects array and create a card for each */}
          {projects.map((project, index) => ( // Added index for staggered animation delay
            <motion.div // Added motion.div for animations
              key={project.id}
              className="bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col" // Darker card background, flex for consistent layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }} // Staggered delay
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-center" // Added object-center for better image positioning
                />
              )}
              <div className="p-6 flex flex-col flex-grow"> {/* flex-grow for consistent height */}
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3> {/* Increased text size */}
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p> {/* flex-grow for consistent height */}

                {/* NEW: Features Section */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-lg font-medium mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-300 text-sm">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* NEW: Technologies Section */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-lg font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex mt-auto space-x-4"> {/* mt-auto pushes buttons to bottom */}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 text-sm" // Button styling
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 text-sm" // Button styling
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;