// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '', // Keep this as 'email'
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.section
      id="contact"
      className="py-16 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          CONTACT
        </motion.h2>
        <p className="text-center text-gray-300 mb-8">
          I'd love to hear from you—reach out for any opportunities or questions!
        </p>

        <div className="flex flex-col items-center space-y-4 mb-12">
          <a
            href="mailto:aditya917599@gmail.com"
            className="text-blue-400 hover:underline text-xl font-medium"
          >
            aditya917599@gmail.com
          </a>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/aaditya-singh-21250b256/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition duration-300 text-3xl"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Adityasingh6996"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition duration-300 text-3xl"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <p className="text-center text-gray-300 mb-8">
          Or send me a message directly using the form below:
        </p>
        <form
          className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700"
          action="https://formspree.io/f/mvgqzzoe"
          method="POST"
        >
          {/* Email Field - CORRECTED NAME ATTRIBUTE */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email" // <--- CHANGED THIS FROM "_replyto" TO "email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 transition duration-200 placeholder-gray-400"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 transition duration-200 placeholder-gray-400"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Subject Field */}
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-300 text-sm font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 transition duration-200 placeholder-gray-400"
              placeholder="Subject"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 transition duration-200 resize-y placeholder-gray-400"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;