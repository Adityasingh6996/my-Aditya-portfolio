// src/components/Projects.jsx
import React, { useState } from 'react'; // Import useState for managing modal state
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence for exit animations
import projects from '../data/projects'; // Import the projects data

function Projects() {
  // State to hold the currently selected project for the modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open the modal with a specific project
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <motion.section
      id="projects"
      className="py-16 bg-gray-800 text-white" // Consistent dark background
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
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Loop through the projects array and create a card for each */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col
                         border border-gray-700 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              // Enhanced Hover effect: lift, scale, and glowing border
              whileHover={{
                scale: 1.02,
                y: -3,
                boxShadow: "0 6px 15px rgba(128, 90, 213, 0.4), 0 3px 6px rgba(128, 90, 213, 0.2)",
                borderColor: "#8B5CF6",
                transition: { duration: 0.2 }
              }}
              onClick={() => openModal(project)} // Add onClick to open modal
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover object-center"
                />
              )}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-3 flex-grow">{project.description}</p>

                {/* Technologies Section (only show a few on the card) */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-3">
                    <h4 className="text-base font-medium mb-1">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => ( // Show only first 3 technologies
                        <span key={idx} className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-400 px-2 py-0.5">...</span>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex mt-auto space-x-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded transition duration-300 text-xs"
                      onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking link
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-1.5 px-3 rounded transition duration-300 text-xs"
                      onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking link
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal} // Close modal when clicking outside
          >
            <motion.div
              className="bg-gray-800 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative
                         border border-gray-700"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>

              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-56 object-cover object-center rounded-md mb-6"
                />
              )}

              <h3 className="text-3xl font-bold text-blue-400 mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 text-base mb-4">{selectedProject.description}</p>

              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-gray-200 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-200 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-4">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 text-sm"
                  >
                    GitHub
                  </a>
                )}
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 text-sm"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Projects;